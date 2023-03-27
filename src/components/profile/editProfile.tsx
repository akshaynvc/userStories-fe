import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { FormContainer } from "../common/styles";
import { ButtonContainer } from "../../pages/adminPage";
import { Formik, Field } from "formik";
import TextField from "../common/textField";
import { User } from "../../redux/modals/userModals";
import { Button, CenteredButton } from "../common/button";
import TextArea from "../common/textArea";
import { useDispatch } from "react-redux";
import { fetchUsers, updateUserCall } from "../../redux/thunk/userThunk";
import { toast } from "react-toastify";
import { AppDispatch } from "../../redux/store";
import { ProfileValueTypes } from "../../pages/profile";
import { theme } from "../../theme";

type EditProfileProps = {
  currentUser: User[];
  setOpen: Function | any;
  id: string;
  initialValues: ProfileValueTypes;
};
const EditProfile: FC<EditProfileProps> = ({ setOpen, id, initialValues }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleProfileUpdate = (value: ProfileValueTypes, actions: any) => {
    dispatch(updateUserCall({ value, id })).then((res: any) => {
      if (res.meta.requestStatus === "rejected") {
        toast.error("Something went wrong");
      } else {
        toast.success("profile updated!");
        setOpen(false);
        dispatch(fetchUsers());
        console.log({ value, initialValues });
      }
    });
  };
  return (
    <ChildSection>
      <ButtonContainer>
        <Button onClick={() => setOpen(false)}>close</Button>
      </ButtonContainer>
      <Heading>Update Profile</Heading>
      <Formik initialValues={initialValues} onSubmit={handleProfileUpdate}>
        {(props) => {
          const {
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          } = props;

          return (
            <FormContainer onSubmit={handleSubmit}>
              <Field
                label="Name"
                id="name"
                name="name"
                type="text"
                defaultValue={initialValues.name}
                component={TextField}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Field
                label="Email"
                id="email"
                name="email"
                type="text"
                defaultValue={initialValues.email}
                component={TextField}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div>
                <Label id="file">File upload</Label>
                <InputWrapper>
                  <Input
                    id="file"
                    name="file"
                    type="file"
                    accept="image/*"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      const fileList = event.currentTarget.files;
                      if (fileList && fileList.length > 0) {
                        setFieldValue("file", fileList[0]);
                      } else {
                        setFieldValue("file", null);
                      }
                    }}
                    value={null}
                  />
                </InputWrapper>
              </div>
              <Field
                label="Height"
                id="height"
                name="height"
                type="text"
                defaultValue={initialValues.height}
                component={TextField}
                value={values.height}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Field
                label="Weight"
                id="weight"
                name="weight"
                type="text"
                component={TextField}
                defaultValue={initialValues.weight}
                value={values.weight}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Field
                label="Address"
                id="address"
                name="address"
                type="text"
                component={TextArea}
                defaultValue={initialValues.address}
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Field
                label="Family Info"
                id="family"
                name="family"
                type="text"
                component={TextArea}
                defaultValue={initialValues.family}
                value={values.family}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <CenteredButton type="submit">Update Info</CenteredButton>
            </FormContainer>
          );
        }}
      </Formik>
    </ChildSection>
  );
};

export default EditProfile;

const Label = styled.label`
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const Input = styled(Field).attrs({
  type: "file",
})`
  border: 1px solid ${theme.secondary};
  border-radius: 4px;
  background: ${theme.highLight};
  padding: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.blue};
  }
`;
const NewSection = styled.div`
  flex: 1;
  background-color: ${theme.highLight};
  padding:1rem;
  border-radius: 8px;
  max-width: '!00%;
`;
const ChildSection = styled(NewSection)`
  position: absolute;
  left:25%,
  top:25%;
  width:50%;
  border-radius:2rem;
`;
const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.text};
  text-align: center;
  margin: 0;
`;
