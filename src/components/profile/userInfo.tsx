import React, { FC } from "react";
import styled from "styled-components";
import { User } from "../../redux/modals/userModals";
import { Button } from "../common/button";
import { theme } from "../../theme";

type UserInfoProps = {
  currentUser: User[];
  handleLogoutClick: Function | any;
  setOpen: Function | any;
};

const UserInfo: FC<UserInfoProps> = ({
  currentUser,
  handleLogoutClick,
  setOpen,
}) => {
  return (
    <ProfileContainer>
      <Title>My Profile</Title>
      <Divider />
      <ProfileInfoContainer>
        <ImageContainer>
          <img
            src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
            alt="profilePic"
          />
        </ImageContainer>
        <InfoContainer>
          <TextContainer>
            <InfoText>Name:</InfoText>
            <DetailText>
              {currentUser.length > 0 ? currentUser[0].name : null}
            </DetailText>
          </TextContainer>
          <TextContainer>
            <InfoText>Email:</InfoText>
            <DetailText>
              {currentUser.length > 0 ? currentUser[0].email : null}
            </DetailText>
          </TextContainer>
          <TextContainer>
            <InfoText>Role:</InfoText>
            <DetailText>
              {currentUser.length > 0 ? currentUser[0].role : null}
            </DetailText>
          </TextContainer>
        </InfoContainer>
      </ProfileInfoContainer>
      <AddressContainer>
        <TextContainer>
          <InfoText>Height:</InfoText>
          <DetailText>
            {currentUser.length > 0 ? currentUser[0].height : null}
          </DetailText>
        </TextContainer>
        <TextContainer>
          <InfoText>Weight:</InfoText>
          <DetailText>
            {currentUser.length > 0 ? currentUser[0].weight : null}
          </DetailText>
        </TextContainer>
        <TextContainer>
          <InfoText>Address:</InfoText>
          <DetailText>
            {currentUser.length > 0 ? currentUser[0].address : null}
          </DetailText>
        </TextContainer>
        <TextContainer>
          <InfoText>Family:</InfoText>
          <DetailText>
            {currentUser.length > 0 ? currentUser[0].family : null}
          </DetailText>
        </TextContainer>
      </AddressContainer>
      <ButtonContainer>
        <EditButton onClick={() => setOpen(true)}>edit</EditButton>
        <LogoutButton onClick={handleLogoutClick}>logout</LogoutButton>
      </ButtonContainer>
    </ProfileContainer>
  );
};

export default UserInfo;

const ProfileContainer = styled.div`
  width: 600px;
  height: 500px;
  background: ${theme.secondary};
  border-radius: 1rem;
`;

const Title = styled.h2`
  padding: 1rem 2rem;
  margin: 0;
  color: rgb(138, 138, 138);
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin-top: 1rem;
  color: ${theme.primary};
`;

const Divider = styled.div`
  height: 2px;
  background: rgba(165, 165, 165, 0.2);
  margin-left: 2rem;
  margin-right: 2rem;
`;
const ProfileInfoContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  color: ${theme.primary};
`;

const ImageContainer = styled.div`
  width: 150px;
  margin: 1rem 3rem 0 3rem;
  border-radius: 50%;
  height: 150px;
  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }
`;
const InfoContainer = styled.div`
  height: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
`;

export const InfoText = styled(Title)`
  padding: 0;
  margin-left: 1rem;
  font-size: 1.3rem;
  font-family: cursive;
`;

export const DetailText = styled(InfoText)`
  margin-left: 1rem;
`;
const AddressContainer = styled(ProfileInfoContainer)`
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-left: 3rem;
`;
const ButtonContainer = styled.div`
  height: 58px;
  width: 100%;
`;

const EditButton = styled(Button)`
  background-color: ${theme.primary};
  color: gray;
  padding: 0.5rem 2rem;
  margin-left: 1.5rem;
  &:hover {
    background-color:${theme.primary};
  }
`;

const LogoutButton = styled(EditButton)`
  background-color: red;
  &:hover {
    background-color: red;
  }
`;
