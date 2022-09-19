exports.errorHandler = (err) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
};
