import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { logout } from "../redux/slices/authSlice";
import { UserSelector, authselector } from "../redux/selector";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { User } from "../redux/modals/userModals";
import { Button } from "../components/common/button";
import { ToastContainer } from "react-toastify";
import UserTypes from "../components/admin/userTypes";
import UserDetailsComponent from "../components/admin/userDetails";
import { fetchUsers } from "../redux/thunk/userThunk";

const AdminPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector(authselector);
  const { users, isLoading } = useSelector(UserSelector);
  console.log(users);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(logout());
  };
  const totalUsersArr = users?.users?.filter((e: User) => e.role !== "admin");
  const totalGroomsArr = users?.users?.filter((e: User) => e.role === "groom");
  const totalBridesArr = users?.users?.filter((e: User) => e.role === "bride");

  return (
    <Container>
      {!isLoading ? (
        <>
          <ToastContainer />
          <ButtonContainer>
            <Button onClick={handleClick}>logout</Button>
          </ButtonContainer>
          <UserTypes
            totalUsersArr={totalUsersArr}
            totalGroomsArr={totalGroomsArr}
            totalBridesArr={totalBridesArr}
          />
          <UserDetailsComponent totalUsersArr={totalUsersArr} />
        </>
      ) : (
        <LoadingContainer>
          <h2>Loading...</h2>
        </LoadingContainer>
      )}
    </Container>
  );
};

export default AdminPage;

const Container = styled.div`
  height:100vh;
  width:'100%
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
`;
