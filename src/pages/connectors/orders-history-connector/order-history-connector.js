import React from 'react';
import styled from 'styled-components';
import {FlatList} from 'react-native';

const OrdersHistoryWrapper = styled.View`
  height: 100%;
  background: #312c39;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.34px;
  margin-top: 10px;
`;

const OrdersList = styled(FlatList)`
  width: 100%;
  height: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const OrdersHistoryConnector = () => {
  const orders = [
    {
      title: 'Машина',
      date: '11-07-2011',
      id: 1,
    },
    {
      title: 'Компьютер',
      date: '11-08-2009',
      id: 2,
    },
  ];

  return (
    <OrdersHistoryWrapper>
      <Title>Заказы</Title>
      <OrdersList
        data={orders}
        keyExtractor={orders => orders.id}
        renderItem={item => <OrderItem item={item.item} />}
      />
    </OrdersHistoryWrapper>
  );
};

const OrderItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const OrderItemTitle = styled.Text`
  color: #ffffff;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.38px;
`;

const OrderItemDate = styled.Text`
  color: #ffffff;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.38px;
`;

export const OrderItem = ({item}) => {
  return (
    <OrderItemContainer>
      <OrderItemTitle>{item.title}</OrderItemTitle>
      <OrderItemDate>{item.date}</OrderItemDate>
    </OrderItemContainer>
  );
};
