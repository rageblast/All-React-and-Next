import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <MenuItemContainer size={size} onClick={() => navigate(linkUrl)}>
      <BackgroundImageContainer imageurl={imageUrl} />
      <ContentContainer>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>Shop Now</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
