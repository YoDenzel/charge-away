import React, {useState} from 'react';
import styled from 'styled-components';
import {TextInput, TouchableWithoutFeedback} from 'react-native';

const ProfileContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const ProfileImage = styled.View`
  width: 125px;
  height: 125px;
  border-radius: 100px;
  background-color: #3b3542;
`;

const PhoneNumber = styled.Text`
  color: #ffffff;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.34px;
  margin-top: 10px;
`;

const EmailInput = styled(TextInput)`
  color: #ffffff;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.38px;
  border: ${({isFocused, isClear}) =>
    isFocused || !isClear ? '1px solid #6c78e6 ' : 'none'};
  width: 70%;
  margin-top: 10px;
  border-radius: 100px;
  padding-left: 10px;
`;

const EmailText = styled.Text`
  color: #ffffff;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.38px;
`;

export const ProfileInfo = ({emailInput, setEmailInput, phoneNumber}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <ProfileContainer>
      <ProfileImage />
      <PhoneNumber>{phoneNumber}</PhoneNumber>
      {isFocused || !emailInput.length ? (
        <EmailInput
          placeholder="Введите почту"
          value={emailInput}
          onChangeText={e => setEmailInput(e)}
          placeholderTextColor="#706D76"
          onFocus={() => setIsFocused(true)}
          onSubmitEditing={() => setIsFocused(false)}
          isFocused={isFocused}
          isClear={emailInput.length}
          autoFocus={isFocused}
        />
      ) : (
        <TouchableWithoutFeedback onPress={() => setIsFocused(true)}>
          <EmailText>{emailInput}</EmailText>
        </TouchableWithoutFeedback>
      )}
    </ProfileContainer>
  );
};
