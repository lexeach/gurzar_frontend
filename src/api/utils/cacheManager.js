/* ============================================================
   DOMS Enterprise Cache Manager
============================================================ */

import API_CONFIG from "../config/apiConfig";

/* ============================================================
   CACHE STORE
============================================================ */

const cache = new Map();

/* ============================================================
   CREATE KEY
============================================================ */

const createKey = (

namespace,

key

) =>

`${namespace}:${key}`;

/* ============================================================
   SET
============================================================ */

const set = (

namespace,

key,

value,

ttl = API_CONFIG.cache.ttl

) => {

    cache.set(

        createKey(namespace, key),

        {

            value,

            expires:

                Date.now() + ttl,

        }

    );

};

/* ============================================================
   GET
============================================================ */

const get = (

namespace,

key

) => {

    const item =

        cache.get(

            createKey(namespace, key)

        );

    if (!item) {

        return null;

    }

    if (

        item.expires < Date.now()

    ) {

        cache.delete(

            createKey(namespace, key)

        );

        return null;

    }

    return item.value;

};

/* ============================================================
   HAS
============================================================ */

const has = (

namespace,

key

) =>

get(namespace, key) !== null;

/* ============================================================
   DELETE
============================================================ */

const remove = (

namespace,

key

) =>

cache.delete(

    createKey(namespace, key)

);

/* ============================================================
   CLEAR NAMESPACE
============================================================ */

const clearNamespace = (

namespace

) => {

    [...cache.keys()]

        .forEach(key => {

            if (

                key.startsWith(

                    `${namespace}:`

                )

            ) {

                cache.delete(key);

            }

        });

};

/* ============================================================
   CLEAR ALL
============================================================ */

const clear = () =>

cache.clear();

/* ============================================================
   SIZE
============================================================ */

const size = () =>

cache.size;

/* ============================================================
   CLEANUP EXPIRED
============================================================ */

const cleanup = () => {

    const now = Date.now();

    [...cache.entries()]

        .forEach(([key, value]) => {

            if (

                value.expires < now

            ) {

                cache.delete(key);

            }

        });

};

/* ============================================================
   GET OR SET
============================================================ */

const getOrSet = async (

namespace,

key,

loader,

ttl

) => {

    const cached =

        get(namespace, key);

    if (cached !== null) {

        return cached;

    }

    const value =

        await loader();

    set(

        namespace,

        key,

        value,

        ttl

    );

    return value;

};

/* ============================================================
   EXPORT
============================================================ */

const cacheManager = Object.freeze({

    set,

    get,

    has,

    remove,

    clear,

    clearNamespace,

    cleanup,

    size,

    getOrSet,

});

export default cacheManager;