import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Name, Username } from './styles';

function Avatar({ image, name, username }) {
  return (
    <Container>
      <Image src={image} alt="avatar" />
      <Name>{name}</Name>
      <Username>{username}</Username>
    </Container>
  );
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Avatar;
