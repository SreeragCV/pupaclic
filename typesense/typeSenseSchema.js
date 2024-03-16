const client = require("./typesenseConfig");

const userSchema = {
  name: "user",
  fields: [
    { name: "id", type: "string", facet: false },
    { name: "firstName", type: "string", facet: true },
    { name: "lastName", type: "string", facet: false },
    { name: "email", type: "string", facet: false },
    { name: "createdAt", type: "int64", facet: false },
    { name: "updatedAt", type: "int64", facet: false },
  ],
  default_sorting_field: "createdAt",
};

const profileSchema = {
  name: "profile",
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
    { name: "id", type: "string", facet: false },
    { name: "createdBy", type: "string", facet: false },
    { name: "name", type: "string", facet: true },
    { name: "status", type: "string", facet: false },
    { name: "notes", type: "string", facet: true },
    { name: "preference", type: "string", facet: true },
    { name: "createdAt", type: "int64", facet: false },
    { name: "updatedAt", type: "int64", facet: false },
  ],
  default_sorting_field: "createdAt",
};


async function addSchema() {
  // const schema = client.collections().create(userSchema);
  // await client.collections().create(profileSchema);
  // await client.collections().create(enquirySchema);
  console.log("success");
}

addSchema()