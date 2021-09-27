import React from 'react';
import styled from 'styled-components';

export const StudentDetail = ({
  STT = 0,
  firstName = '0',
  lastName = '0',
  gender = '0',
  age = 0,
  rank = '0',
}) => {
  return (
    <Wrapper>
      <p>{STT}</p>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{gender === 'M' ? 'Male' : gender === 'F' ? 'Female' : 'Gender'}</p>
      <p>{age}</p>
      <p>{rank}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  padding: 15px;
  
  @media (min-width: 320px) and (max-width: 748px) {
    padding: 10px 0;
    font-size: 10px;
  }

  &:last-child {
    border-bottom: none;
  }

  p {
    text-align: center;
    width: 16.67%;
  }
`;
