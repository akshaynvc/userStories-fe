import * as Yup from "yup";

const initialLoginValues = {
  email: "",
  password: "",
  role: "",
};

const loginValidation = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  role: Yup.string().required("Required"),
});

export { initialLoginValues, loginValidation };
