/* ============================================================
   DOMS Enterprise Request Queue
============================================================ */

const DEFAULT_OPTIONS = {

    concurrency: 5,

};

class RequestQueue {

    constructor(options = {}) {

        this.options = {

            ...DEFAULT_OPTIONS,

            ...options,

        };

        this.queue = [];

        this.running = 0;

        this.pending = new Map();

    }

    /* ========================================================
       KEY
    ======================================================== */

    createKey(method, url, data) {

        return JSON.stringify({

            method,

            url,

            data,

        });

    }

    /* ========================================================
       ADD
    ======================================================== */

    enqueue({

        key,

        priority = 0,

        request,

    }) {

        return new Promise((resolve, reject) => {

            this.queue.push({

                key,

                priority,

                request,

                resolve,

                reject,

            });

            this.queue.sort(

                (a, b) =>

                    b.priority -

                    a.priority

            );

            this.next();

        });

    }

    /* ========================================================
       EXECUTE
    ======================================================== */

    async next() {

        if (

            this.running >=

            this.options.concurrency

        ) {

            return;

        }

        const item =

            this.queue.shift();

        if (!item) {

            return;

        }

        this.running++;

        this.pending.set(

            item.key,

            item

        );

        try {

            const result =

                await item.request();

            item.resolve(result);

        }

        catch (error) {

            item.reject(error);

        }

        finally {

            this.running--;

            this.pending.delete(

                item.key

            );

            this.next();

        }

    }

    /* ========================================================
       DEDUPLICATE
    ======================================================== */

    has(key) {

        return this.pending.has(key);

    }

    /* ========================================================
       CANCEL
    ======================================================== */

    cancel(key) {

        this.queue =

            this.queue.filter(

                item =>

                    item.key !== key

            );

    }

    /* ========================================================
       CLEAR
    ======================================================== */

    clear() {

        this.queue = [];

    }

    /* ========================================================
       INFO
    ======================================================== */

    size() {

        return this.queue.length;

    }

    runningCount() {

        return this.running;

    }

}

const requestQueue =

new RequestQueue();

export default requestQueue;