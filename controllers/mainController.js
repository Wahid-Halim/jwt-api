const login = async (req, res) => {
  res.send("Fake LOGIN/Register/Sign up");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello Wahid Halim`,
    secret: `Here is your authorize data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
