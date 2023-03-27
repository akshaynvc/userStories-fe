import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import TextField from "../../common/textField";
import SelectField from "../../common/dropdown";
import { CenteredButton } from "../../common/button";
import {
  FormContainer,
  Heading,
  Section,
  SpanContainer,
  SubTitile,
} from "../../common/styles";
import { initialLoginValues, loginValidation } from "./validation";
import { useNavigate } from "react-router-dom";
import { loginCall } from "../../../redux/thunk/authThunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { authselector } from "../../../redux/selector";
import { toast, ToastContainer } from "react-toastify";
import { fetchUsers } from "../../../redux/thunk/userThunk";

const options = [
  { value: "", label: "Select" },
  { value: "admin", label: "Admin" },
  { value: "groom", label: "Groom" },
  { value: "bride", label: "Bride" },
];

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { token, user } = useSelector(authselector);

  useEffect(() => {
    if (token && user.role === "admin") {
      navigate("/admin");
    } else if (token && user.role !== "admin") {
      navigate("/profile");
    } else {
      navigate("/");
    }
  }, [navigate, token, user]);

  const handleSignupNavigation = () => {
    navigate("/signup");
  };

  const handleformLogin = (values: any) => {
    try {
      dispatch(loginCall(values)).then((res: any) => {
        if (res.meta.requestStatus === "rejected") {
          toast.error("invalid email / password / role");
        } else {
          dispatch(fetchUsers());
          toast.success("Login Successful!");
        }
      });
    } catch (error) {
      toast.error("login failed. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <Section>
        <Heading>Login</Heading>
        <Formik
          initialValues={initialLoginValues}
          onSubmit={handleformLogin}
          validationSchema={loginValidation}
        >
          {(props) => {
            const { values, handleChange, handleBlur, handleSubmit } = props;
            return (
              <FormContainer onSubmit={handleSubmit}>
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
                  label="Password"
                  id="passwordField"
                  name="password"
                  type="password"
                  component={TextField}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <CenteredButton type="submit">Login</CenteredButton>
              </FormContainer>
            );
          }}
        </Formik>
        <div>
          <SubTitile>
            Donot have an account?
            <SpanContainer onClick={handleSignupNavigation}>
              Signup
            </SpanContainer>
          </SubTitile>
        </div>
      </Section>
    </>
  );
};

export default LoginForm;
