import React, { FC } from "react";
import styled from "styled-components";
import { User } from "../../redux/modals/userModals";
import { theme } from "../../theme";

type UserTypesProps = {
  totalUsersArr: User[];
  totalGroomsArr: User[];
  totalBridesArr: User[];
};
const UserTypes: FC<UserTypesProps> = ({
  totalUsersArr,
  totalBridesArr,
  totalGroomsArr,
}) => {
  return (
    <GridContainer>
      <GridItem>
        <UsersCount>
          <CountContainer>
            <Title>Total Users</Title>
            <Count>{totalUsersArr?.length}</Count>
          </CountContainer>
        </UsersCount>
      </GridItem>
      <GridItem>
        <UsersCount>
          <CountContainer>
            <Title>Total Groom</Title>
            <Count>{totalGroomsArr?.length}</Count>
          </CountContainer>
        </UsersCount>
      </GridItem>
      <GridItem>
        <UsersCount>
          <CountContainer>
            <Title>Total Bride</Title>
            <Count>{totalBridesArr?.length}</Count>
          </CountContainer>
        </UsersCount>
      </GridItem>
    </GridContainer>
  );
};

export default UserTypes;

const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 25%;
`;
const GridItem = styled.div`
  width: 33.333%;
  height: 100%;
`;

const UsersCount = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CountContainer = styled.div`
  background: ${theme.highLight};
  width: 80%;
  height: 80%;
  border-radius: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: gray;
`;

const Count = styled.h1`
  text-align: center;
  margin-top: -20px;
  font-size: 2rem;
`;
