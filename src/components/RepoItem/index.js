import React from 'react';
import PropTypes from 'prop-types';

import starIcon from '../../assets/icons/star.png';

import { Container, Title, Description, Star } from './styles';

function RepoItem({ title, description, star }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <Star>
        <img src={starIcon} alt="star_icon" />
        <span>{star}</span>
      </Star>
    </Container>
  );
}

RepoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired,
};

export default RepoItem;
