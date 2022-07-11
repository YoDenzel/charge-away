import React from 'react';
import styled from 'styled-components';
import {FlatList} from 'react-native';
import {ListItem} from '../../../shared/ui';

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
        renderItem={item => <ListItem item={item.item} />}
      />
    </OrdersHistoryWrapper>
  );
};
