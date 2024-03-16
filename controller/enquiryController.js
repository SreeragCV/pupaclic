const Enquiry = require("../model/enquiry");

module.exports.createEnquiry = async () => {
  const { name, status, notes, preference } = req.body;
  const user_id = req.user_id;

  if (!name || !status || !notes || !preference) {
    return res.status(402).json({ error: "fields must not be empty" });
  }
  const data = {
    name,
    status,
    notes,
    preference,
  };
  // const userAlreadyExist = await Enquiry.find({ createdBy: user_id });

  // if (userAlreadyExist.length > 0) {
  //   userAlreadyExist[0].teams.push(teams);
  //   user.save();
  //   await typesense.collections('enquiry').documents(user_id).update(data)
  //   return res.status(200).json({ message: "Enquiry submitted" });
  // }

  const newEnquiry = new Enquiry({
    teams: { ...data },
    createdBy: user_id,
  });
  await newEnquiry.save();

  const { _id, createdBy, createdAt, updatedAt, teams } = newEnquiry;

  const flattenedData = {
    id: _id,
    createdBy,
    createdAt: createdAt.getTime(),
    updatedAt: updatedAt.getTime(),
    ...teams[0],
  };

  const response = await client
    .collections("profile")
    .documents()
    .import(flattenedData);

  return res.status(200).json({ message: "Enquiry submitted" });
};
