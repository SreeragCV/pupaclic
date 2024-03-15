const client = require("./typesenseConfig");

const profileSchema = {
  name: "profiles",
  fields: [
    { name: "id", type: "string", facet: false },
    { name: "name", type: "string", facet: true },
    { name: "gender", type: "string", facet: false },
    { name: "age", type: "int32", facet: false },
    { name: "place", type: "string", facet: false },
    { name: "education", type: "string", facet: false },
    { name: "user_id", type: "string", facet: false },
    { name: "createdAt", type: "int64", facet: false }, 
    { name: "updatedAt", type: "int64", facet: false },
  ],
  default_sorting_field: "age",
};

const enquirySchema = {
  name: "enquiry",
  fields: [
    { name: "createdBy", type: "string", facet: false },
    { name: "user_id", type: "string", facet: false },
    { name: "name", type: "string", facet: false },
    { name: "status", type: "string", facet: false },
    { name: "notes", type: "string", facet: false },
    { name: "preference", type: "string", facet: false },
    { name: "createdAt", type: "int64", facet: false }, 
    { name: "updatedAt", type: "int64", facet: false }, 
  ],
  default_sorting_field: "createdAt", 
};

// await client.collections().create(profileSchema);
// await client.collections().create(enquirySchema);
