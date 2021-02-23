exports.policy = (req, res, next) => {
  var finalValue = range(req.policy, req.query.limit);
  res.status(200).json(finalValue);
};
