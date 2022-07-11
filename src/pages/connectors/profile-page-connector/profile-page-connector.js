import React, {useState} from 'react';
import {Button} from 'react-native';
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

const LogoutButton = styled(Button)``;

const DeleteAccButton = styled(Button)``;

export const ProfilePageConnector = () => {
  const [emailInput, setEmailInput] = useState('');

  return (
    <ProfileWrapper>
      <LogoutButton title="Выйти" />
      <DeleteAccButton title="Удалить аккаунт" />
      <ProfileInfo
        emailInput={emailInput}
        setEmailInput={setEmailInput}
        phoneNumber="+79558656523"
      />
    </ProfileWrapper>
  );
};
