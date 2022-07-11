import React from 'react';
import styled from 'styled-components';

const ListItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const ListItemTitle = styled.Text`
  color: #ffffff;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.38px;
`;

const ListItemDate = styled.Text`
  color: #ffffff;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.38px;
`;

export const ListItem = ({item}) => {
  return (
    <ListItemContainer>
      <ListItemTitle>{item.title}</ListItemTitle>
      <ListItemDate>{item.date}</ListItemDate>
    </ListItemContainer>
  );
};
