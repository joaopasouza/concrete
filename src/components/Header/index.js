import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Header({ title, subTitle }) {
  return (
    <Container>
      {title}
      <span>{subTitle}</span>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Header;
