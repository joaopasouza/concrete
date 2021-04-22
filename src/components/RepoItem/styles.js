import styled from 'styled-components';

export const Container = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 35px;
  font-family: 'Raleway', sans-serif;
  color: #ac53f2;
`;

export const Description = styled.h4`
  font-size: 20px;
  font-weight: 300;
  font-family: 'Raleway', sans-serif;
  color: #000000;
`;

export const Star = styled.div`
  display: flex;
  align-items: center;

  & span {
    color: #5c5c5c;
    font-size: 20px;
    font-weight: 300;
    font-family: 'Raleway', sans-serif;
    margin-left: 10px;
  }
`;
