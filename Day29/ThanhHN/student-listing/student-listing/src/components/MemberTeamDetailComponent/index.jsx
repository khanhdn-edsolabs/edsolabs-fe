import React from 'react';
import styled from 'styled-components';

export const MemberTeamDetailComponent = ({ STT = '#', name = 'Full Name', rank = 'Rank' }) => {
  return (
    <Wrapper>
      <p>{STT}</p>
      <p>{name}</p>
      <p>{rank}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 50px;
  border: 1px solid #000;
  width: 600px;

  @media (min-width: 320px) and (max-width: 748px) {
    padding: 10px 15px;
    width: 100%;
  }
`;
