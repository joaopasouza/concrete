import styled from 'styled-components';

export const Container = styled.div`
  width: 650px;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  color: #000000;

  & span {
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    font-style: italic;
    margin-left: 7px;
  }
`;

export const Button = styled.button`
  border: 1px solid #ac53f2;
  background-color: #ac53f2;
  color: #ffffff;

  & :hover {
    color: #ffffff;
  }
`;
