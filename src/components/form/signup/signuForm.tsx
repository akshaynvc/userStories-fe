import React from "react";
import { CenteredButton } from "../../common/button";
import { Formik, Field } from "formik";
import SelectField from "../../common/dropdown";
import TextField from "../../common/textField";
import {
  FormContainer,
  Heading,
  Section,
  SpanContainer,
  SubTitile,
} from "../../common/styles";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { IUserData, initialSignupValues, signupValidation } from "./validation";
import { toast, ToastContainer } from "react-toastify";
import { signup } from "../../../api/authApi";

const options = [
  { value: "", label: "Select" },
  { value: "groom", label: "Groom" },
  { value: "bride", label: "Bride" },
];

const SignUpForm = () => {
  const navigate = useNavigate();
  const handleloginNavigation = () => {
    navigate("/");
  };

  const handleSignup = async (values: IUserData, actions: any) => {
    let newObj = { ...values };
    delete newObj.confirmPassword;
      signup(newObj);
      actions.setSubmitting(false);
      toast.success("Signup Successful!");
      actions.resetForm();
        navigate("/");
  };
  return (
    <>
      <ToastContainer />
      <Section>
        <Heading>Signup</Heading>
        <Formik
          initialValues={initialSignupValues}
          onSubmit={handleSignup}
          validationSchema={signupValidation}
        >
          {(props) => {
            const { values, handleChange, handleBlur, handleSubmit } = props;
            return (
              <FormContainer onSubmit={handleSubmit}>
                <Field
                  label="Name"
                  id="nameField"
                  name="name"
                  type="text"
                  component={TextField}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Field
                  label="Email"
                  id="emailField"
                  name="email"
                  type="email"
                  component={TextField}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Field
                  label="Role"
                  id="selectField"
                  name="role"
                  component={SelectField}
                  options={options}
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Field
                  label="Password"
                  id="passwordField"
                  name="password"
                  type="password"
                  component={TextField}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Field
                  label="Confirm Password"
                  id="ConfirmpasswordField"
                  name="confirmPassword"
                  type="password"
                  component={TextField}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <CenteredButton type="submit">Signup</CenteredButton>
              </FormContainer>
            );
          }}
        </Formik>
        <div>
          <SubTitile>
            Already have an account?
            <SpanContainer onClick={handleloginNavigation}>Login</SpanContainer>
          </SubTitile>
        </div>
      </Section>
    </>
  );
};

export default SignUpForm;
