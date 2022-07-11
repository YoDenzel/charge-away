import React from 'react';
import styled from 'styled-components';
import {FlatList} from 'react-native';
import {ListItem} from '../../../shared/ui';

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
    {title: 'Visa', date: '01-09-1994', id: 1},
    {title: 'MasterCard', date: '12-02-2018', id: 2},
    {title: 'Bankoff', date: '22-07-2021', id: 3},
  ];

  return (
    <PaymentMethodsWrapper>
      <Title>Заказы</Title>
      <PaymentsList
        data={paymentMethods}
        keyExtractor={item => item.id}
        renderItem={item => <ListItem item={item.item} />}
      />
    </PaymentMethodsWrapper>
  );
};
