function Login(req, res) {
  const account = req.body.account;
  const password = req.body.password;
  console.log(account, password);
  if (account === "111" && password === "111") {
    return res.send({ message: "login success" });
  }
  return res.status(403).send({ message: "fail" });
}

export { Login };
