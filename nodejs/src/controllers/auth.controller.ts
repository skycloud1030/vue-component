function Login(req, res) {
  const account = req.body.account;
  const password = req.body.password;

  if (account === "root" && password === "root") {
    return res.send({ message: "login success" });
  }
  return res.status(403).send({ message: "Incorrect username or password." });
}

function Logout(_req, res) {
  return res.send({ message: "Logout success" });
}

export { Login, Logout };
