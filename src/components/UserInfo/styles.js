import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  & li {
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    color: #5c5c5c;
    margin-bottom: 1rem;
  }

  & li img {
    margin-right: 10px;
  }
`;
