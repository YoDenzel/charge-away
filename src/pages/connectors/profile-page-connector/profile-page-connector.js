import React, {useState} from 'react';
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

export const ProfilePageConnector = () => {
  const [emailInput, setEmailInput] = useState('');

  return (
    <ProfileWrapper>
      <ProfileInfo
        emailInput={emailInput}
        setEmailInput={setEmailInput}
        phoneNumber="+79558656523"
      />
    </ProfileWrapper>
  );
};
