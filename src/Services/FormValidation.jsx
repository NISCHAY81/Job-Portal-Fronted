const signUpValidation = (name, value) => {
  switch (name) {
    case "name":
      if (value.trim().length === 0) return "Name is required.";
      return "";

    case "email":
      if (value.trim().length === 0) return "Email is required.";
      if (!/^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value))
        return "Email is invalid.";
      return "";

    case "password":
      if (value.trim().length === 0) return "Password is required.";
      if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
          value
        )
      )
        return "Password must be 8–15 characters and include uppercase, lowercase, number, and special character.";
      return "";

    default:
      return "";
  }
};
export {signUpValidation};