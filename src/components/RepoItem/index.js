import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';

import { Container, Title, Description, Star } from './styles';

function RepoItem({ title, description, star }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <Star>
        <StarIcon />
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
