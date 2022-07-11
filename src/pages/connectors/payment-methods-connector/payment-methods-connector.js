import React from 'react';
import styled from 'styled-components';
import {FlatList} from 'react-native';

const PaymentMethodsWrapper = styled.View`
  width: 100%;
  height: 100%;
  background: #312c39;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.34px;
  margin-top: 10px;
`;

const PaymentsList = styled(FlatList)`
  width: 100%;
  height: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const PaymentMethodsConnector = () => {
  const paymentMethods = [
    {title: 'Visa', id: 1},
    {title: 'MasterCard', id: 2},
    {title: 'Bankoff', id: 3},
  ];

  return (
    <PaymentMethodsWrapper>
      <Title>Заказы</Title>
      <PaymentsList
        data={paymentMethods}
        keyExtractor={item => item.id}
        renderItem={item => <PaymentItem item={item.item} />}
      />
    </PaymentMethodsWrapper>
  );
};

const PaymentItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const PaymentItemTitle = styled.Text`
  color: #ffffff;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.38px;
`;

export const PaymentItem = ({item}) => {
  return (
    <PaymentItemContainer>
      <PaymentItemTitle>{item.title}</PaymentItemTitle>
    </PaymentItemContainer>
  );
};
