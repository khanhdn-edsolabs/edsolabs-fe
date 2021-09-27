import React from 'react';
import styled from 'styled-components';
import { TeamComponent } from '../TeamComponent';

export const StudentTeamComponent = ({ teamGroup = [] }) => {
  return (
    <Wrapper>
      {teamGroup.map((item, index) => {
        return <TeamComponent key={index} team={item} index={index}/>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 50px;
`;
