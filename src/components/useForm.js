import { useState } from "react";

const useForm = () => {
  const [signupInput, setSignUpInput] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (signupInput.email === "") {
      setEmailError("The email field is required");
    }
    if (signupInput.email !== "" && !signupInput.email.includes("@")) {
      setEmailError("the email you input is invalid");
    }
    if (signupInput.password === "" || signupInput.password2 === "") {
      setPasswordError("All password fields are required");
    }
    if (signupInput.password !== signupInput.password2) {
      setPasswordError("Your password do no match");
    }
  };

  return {
    signupInput,
    setSignUpInput,
    handleClick,
    emailError,
    passwordError,
  };
};

export default useForm;
