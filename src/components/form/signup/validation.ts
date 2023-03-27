import * as Yup from "yup";
export type IUserData = {
  name: string;
  email: string;
  password: string;
  role: string;
  confirmPassword?: string;
};
const initialSignupValues:IUserData = {
  name: "",
  email: "",
  password: "",
  role: "",
  confirmPassword: "",
};

const signupValidation = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  role: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export { initialSignupValues, signupValidation };
