import React, { useState, useEffect } from "react";
import { SubTitile } from "../components/common/styles";
import { AppDispatch } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserSelector, authselector } from "../redux/selector";
import styled from "styled-components";
import { fetchUsers } from "../redux/thunk/userThunk";
import { ToastContainer } from "react-toastify";
import { User } from "../redux/modals/userModals";
import { logout } from "../redux/slices/authSlice";
import UserInfo from "../components/profile/userInfo";
import EditProfile from "../components/profile/editProfile";
import { theme } from "../theme";

export type ProfileValueTypes = {
  name: string;
  email: string;
  height: string;
  weight: string;
  file: null;
  address: string;
  family: string;
};

const Profile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<ProfileValueTypes>({
    name: "",
    email: "",
    height: "",
    weight: "",
    file: null,
    address: "",
    family: "",
  });
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(authselector);
  const { users } = useSelector(UserSelector);
  const { id } = user;
  const currentUser = users.users.filter((e: User) => e._id === id);
  useEffect(() => {
    setInitialValues({
      name: currentUser.length > 0 ? currentUser[0].name : "",
      email: currentUser.length > 0 ? currentUser[0].email : "",
      height: currentUser.length > 0 ? currentUser[0].height : "",
      weight: currentUser.length > 0 ? currentUser[0].weight : "",
      file: null,
      address: currentUser.length > 0 ? currentUser[0].address : "",
      family: currentUser.length > 0 ? currentUser[0].family : "",
    });
  }, [users.users]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLogoutClick = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Container>
      <ToastContainer />
      <UserInfo
        currentUser={currentUser}
        handleLogoutClick={handleLogoutClick}
        setOpen={setOpen}
      />
      {open ? (
        <EditProfile
          setOpen={setOpen}
          currentUser={currentUser}
          id={id}
          initialValues={initialValues}
        />
      ) : null}
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  height: 100vh;
  background: ${theme.primary};
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Text = styled(SubTitile)`
  font-size: 1.5rem;
  margin-top: 5px;
`;
