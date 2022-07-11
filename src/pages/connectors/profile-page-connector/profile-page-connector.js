import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {ProfileInfo} from '../../../shared/ui';

const ProfileWrapper = styled.View`
  width: 100%;
  height: 100%;
  background: #312c39;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogButtonsContainer = styled.View`
  position: absolute;
  top: 15px;
  box-sizing: border-box;
  align-self: flex-end;
  justify-content: space-between;
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 10px;
`;

const LogoutButton = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6c78e6;
  color: black;
  padding: 10px;
  border-radius: 8px;
  width: 100px;
  margin-left: 15px;
  margin-right: 15px;
`;

const DeleteAccButton = styled(TouchableOpacity)`
  background-color: #c4183c;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  width: 100px;
  margin-left: 15px;
  margin-right: 15px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.38px;
`;

export const ProfilePageConnector = () => {
  const [emailInput, setEmailInput] = useState('');

  return (
    <ProfileWrapper>
      <LogButtonsContainer>
        <DeleteAccButton>
          <ButtonText>Удалить аккаунт</ButtonText>
        </DeleteAccButton>
        <LogoutButton>
          <ButtonText>Выйти</ButtonText>
        </LogoutButton>
      </LogButtonsContainer>
      <ProfileInfo
        emailInput={emailInput}
        setEmailInput={setEmailInput}
        phoneNumber="+79558656523"
      />
    </ProfileWrapper>
  );
};
