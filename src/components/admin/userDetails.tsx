import React, { FC, useState } from "react";
import styled from "styled-components";
import { Button } from "../common/button";
import { Input, Wrapper } from "../common/styles";
import { User } from "../../redux/modals/userModals";
import { useDispatch } from "react-redux";
import { deleteUserCall, fetchUsers } from "../../redux/thunk/userThunk";
import { toast } from "react-toastify";
import { AppDispatch } from "../../redux/store";
import {  InfoText, TextContainer } from "../profile/userInfo";
import { theme } from "../../theme";

type UserDetailsComponentProps = {
  totalUsersArr: User[];
};

const UserDetailsComponent: FC<UserDetailsComponentProps> = ({
  totalUsersArr,
}) => {
  const [selectedRole, setSelectedRole] = useState("all");
  const dispatch: AppDispatch = useDispatch();
  const filteredUsers = totalUsersArr.filter((user: User) => {
    if (selectedRole === "all") {
      return true;
    } else {
      return user.role === selectedRole;
    }
  });

  const deleteUser = (id: string) => {
    dispatch(deleteUserCall({ id }))
      .then((res: any) => {
        if (res.meta.requestStatus === "rejected") {
          toast.error("something went wrong");
        } else {
          dispatch(fetchUsers());
          toast.success("Deleted Successful!");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ineternal server error");
      });
  };
  return (
    <UserDetailsContainer>
      <UserDetails>
        <Header>
          <HeaderItem>
            <Wrapper>
              <SelectionInput
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="all">All</option>
                <option value="groom">Groom</option>
                <option value="bride">Bride</option>
              </SelectionInput>
            </Wrapper>
          </HeaderItem>
        </Header>
        <UserCardContainer>
          {filteredUsers.map((e: User) => (
            <UserCard key={e._id}>
              <ButtonContainer>
                <DeleteBtn onClick={() => deleteUser(e._id)}>Delete</DeleteBtn>
              </ButtonContainer>
              <CardDetails>
                <ImageContainer>
                  <img
                    src={
                      e?.file
                        ? e?.file[0]?.name
                        : "https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                    }
                    alt="profile"
                  />
                  <TextContainer>
                    <TextTitle>Name:</TextTitle>
                    <TextTitle>{e.name}</TextTitle>
                  </TextContainer>
                  <TextContainer>
                    <TextTitle>Email:</TextTitle>
                    <TextTitle>{e.email}</TextTitle>
                  </TextContainer>
                  <TextContainer>
                    <TextTitle>Role:</TextTitle>
                    <TextTitle>{e.role}</TextTitle>
                  </TextContainer>
                  {e?.height ? (
                    <TextContainer>
                      <TextTitle>Height:</TextTitle>
                      <TextTitle>{e.height}</TextTitle>
                    </TextContainer>
                  ) : null}

                  {e?.address ? (
                    <TextContainer>
                      <TextTitle>Address:</TextTitle>
                      <TextTitle>{e.address}</TextTitle>
                    </TextContainer>
                  ) : null}
                </ImageContainer>
              </CardDetails>
            </UserCard>
          ))}
        </UserCardContainer>
      </UserDetails>
    </UserDetailsContainer>
  );
};

export default UserDetailsComponent;

const UserDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserDetails = styled.div`
  background: ${theme.primary};
  width: 95%;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const Header = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
`;
const HeaderItem = styled.div`
  width: 30%;
  height: 100%;
`;

const SelectionInput = styled(Input)`
  margin-top: 15px;
  margin-right: 15px;
  border-radius: 1rem;
`;

const UserCardContainer = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  height: 100%;
  @media screen and (max-width: 1285px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 830px) {
    grid-template-columns: 1fr;
  } ;
`;

const UserCard = styled.div`
  background: ${theme.secondary};
  margin: 0.5rem;
  border-radius: 1rem;
  padding: 20px;
  margin-bottom: 10px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

const DeleteBtn = styled(Button)`
  font-size: 10px;
  border-radius: 1rem;
  background-color: red;
  &:hover {
    background-color: red;
  }
`;
const CardDetails = styled.div`
  width: 100%;
  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  width: 100%;
`;

const TextTitle = styled(InfoText)`
  color: gray;
`;
