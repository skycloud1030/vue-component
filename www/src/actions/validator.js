class Validator {
  constructor() {
    this.rules = {
      password: {
        test:
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\-@$!%*?&])[A-Za-z\\d\\-@$!%*?&]{8,}$",
        message:
          "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      },
    };
  }
  password(value) {
    const { test, message } = this.rules.password;
    const regex = new RegExp(test);
    return { pass: regex.test(value), message };
  }
}

export default Validator;
