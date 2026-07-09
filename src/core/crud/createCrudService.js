/* ============================================================
   Enterprise CRUD Service Factory
============================================================ */

import pipeline from "./requestPipeline";
import createEndpoint from "./endpointBuilder";

const DEFAULT_OPTIONS={

resource:"",

primaryKey:"id",

features:{

crud:true,

bulk:true,

search:true,

filter:true,

pagination:true,

import:true,

export:true,

upload:true,

download:true,

dashboard:true,

statistics:true,

history:true,

audit:true,

},

custom:{},

};

const createCrudService=(options={})=>{

const config={

...DEFAULT_OPTIONS,

...options,

features:{

...DEFAULT_OPTIONS.features,

...(options.features||{}),

},

};

if(!config.resource){

throw new Error(

"createCrudService(): resource is required."

);

}

const endpoint=

createEndpoint(

config.resource,

config.endpoints||{}

);

/* ============================================================
CRUD
============================================================ */

const list=(params={})=>

pipeline.request({

method:"GET",

url:endpoint.list(),

params,

});

const get=(id)=>

pipeline.request({

method:"GET",

url:endpoint.get(id),

});

const create=(data)=>

pipeline.request({

method:"POST",

url:endpoint.create(),

data,

});

const update=(data)=>

pipeline.request({

method:"PUT",

url:endpoint.update(

data[config.primaryKey]

),

data,

});

const patch=(id,data)=>

pipeline.request({

method:"PATCH",

url:endpoint.patch(id),

data,

});

const remove=(id)=>

pipeline.request({

method:"DELETE",

url:endpoint.remove(id),

});


/* ============================================================
BULK
============================================================ */

const bulkDelete=(ids)=>

pipeline.request({

method:"POST",

url:endpoint.bulkDelete(),

data:{ids},

});

const activate=(ids)=>

pipeline.request({

method:"POST",

url:endpoint.activate(),

data:{ids},

});

const deactivate=(ids)=>

pipeline.request({

method:"POST",

url:endpoint.deactivate(),

data:{ids},

});

const restore=(ids)=>

pipeline.request({

method:"POST",

url:endpoint.restore(),

data:{ids},

});

/* ============================================================
SEARCH
============================================================ */

const search=(params={})=>

pipeline.request({

method:"GET",

url:endpoint.search(),

params,

});

const filter=(params={})=>

pipeline.request({

method:"GET",

url:endpoint.filter(),

params,

});

const paginate=(

page=1,

pageSize=20,

filters={}

)=>

pipeline.request({

method:"GET",

url:endpoint.list(),

params:{

page,

pageSize,

...filters,

},

});

const count=(params={})=>

pipeline.request({

method:"GET",

url:endpoint.count(),

params,

});

/* ============================================================
IMPORT EXPORT
============================================================ */

const importData=(formData)=>

pipeline.request({

method:"POST",

url:endpoint.import(),

data:formData,

headers:{

"Content-Type":

"multipart/form-data",

},

});

const exportData=(params={})=>

pipeline.request({

method:"GET",

url:endpoint.export(),

params,

});

const upload=(formData)=>

pipeline.request({

method:"POST",

url:endpoint.upload(),

data:formData,

headers:{

"Content-Type":

"multipart/form-data",

},

});

const download=(id)=>

pipeline.request({

method:"GET",

url:endpoint.download(id),

});

/* ============================================================
ANALYTICS
============================================================ */

const dashboard=()=>

pipeline.request({

method:"GET",

url:endpoint.dashboard(),

});

const statistics=()=>

pipeline.request({

method:"GET",

url:endpoint.statistics(),

});

const summary=()=>

pipeline.request({

method:"GET",

url:endpoint.summary(),

});

const history=(id)=>

pipeline.request({

method:"GET",

url:endpoint.history(id),

});

const audit=(id)=>

pipeline.request({

method:"GET",

url:endpoint.audit(id),

});

/* ============================================================
CUSTOM
============================================================ */

const custom={};

Object.entries(

config.custom

).forEach(

([key,handler])=>{

custom[key]=(...args)=>

handler({

pipeline,

endpoint,

config,

args,

});

}

);

const service={

list,

get,

create,

update,

patch,

remove,

bulkDelete,

activate,

deactivate,

restore,

search,

filter,

paginate,

count,

import:importData,

export:exportData,

upload,

download,

dashboard,

statistics,

summary,

history,

audit,

...custom,

};

return Object.freeze(service);

};

export default createCrudService;