import CardContainer from "./CardContainer";
import Input from "./Input";
import useForm from "./useForm";

const Form = () => {
  const {
    signupInput,
    setSignUpInput,
    emailError,
    passwordError,
    handleClick,
  } = useForm();

  return (
    <form data-testid="form" title="Form" style={formStyle}>
      {emailError !== "" && <p style={{ color: "red" }}>{emailError}</p>}
      <Input
        nameLabel="Email address"
        type="email"
        id="email"
        placeholder=""
        defaultValues={signupInput}
        keyState={signupInput.email}
        setter={setSignUpInput}
      />

      <Input
        nameLabel="Password"
        type="password"
        id="password"
        placeholder=""
        defaultValues={signupInput}
        keyState={signupInput.password}
        setter={setSignUpInput}
      />
      {passwordError !== "" && <p style={{ color: "red" }}>{passwordError}</p>}
      <Input
        nameLabel="Confirm Password"
        type="password"
        id="password2"
        placeholder=""
        defaultValues={signupInput}
        keyState={signupInput.password2}
        setter={setSignUpInput}
      />
      <br />
      <CardContainer background="#d3d3d3">
        <button
          onClick={handleClick}
          style={buttonStyle}
          type="submit"
          name="submit"
        >
          Submit
        </button>
      </CardContainer>
    </form>
  );
};
const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
const buttonStyle = {
  width: "100%",
  height: 55,
  background: "#3b5998",
  border: "none",
  boxShadow: "0 2px 6px black",
  color: "white",
  fontWeight: "bold",
  fontSize: 16,
  cursor: "pointer",
};

export default Form;
