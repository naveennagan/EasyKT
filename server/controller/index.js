// const elasticClient = require("../utils/elasticClient");
const { elasticClient } = require("../utils/elasticClient");
const { getDB } = require("../utils/mongoClient");

exports.createWorkflow = async (req, res) => {
  const { name, description, steps, author } = req.body;
  const db = getDB();
  const workflows = db.collection("workflows");
  const result = await workflows.insertOne({
    name,
    description,
    steps,
    author,
  });
  res.status(200).json({ data: result });
};

exports.getWorkflow = async (req, res) => {
  const { id, author, name } = req.query;
  const db = getDB();
  const workflows = db.collection("workflows");
  const results = await workflows.find({
    $or: [{ _id: new ObjectId(id) }, { author }, { name }],
  });
  res.status(200).json(results);
};

exports.addSearchItem = async (req, res) => {
  const { index, document } = req.body;
  const result = await elasticClient.index({
    index,
    document,
  });
  res.status(200).json({ data: result });
  client.indices.refresh({ index });
};
