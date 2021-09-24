import React from 'react';
import styled from 'styled-components';
import { MemberTeamDetailComponent } from '../MemberTeamDetailComponent';

export const TeamComponent = ({ team = [], index = 0 }) => {
  return (
    <Wrapper>
      <div className="title">Team {index + 1}</div>
      <div className="listTeam">
        <div className="header">
          <MemberTeamDetailComponent />
        </div>
        {team.map((item, index) => (
          <MemberTeamDetailComponent
            key={item.id}
            STT={index + 1}
            name={item.full_name}
            rank={item.rank}
          />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;

  @media (min-width: 320px) and (max-width: 748px) {
      margin-top: 20px;
      width: 100%;
  }

  .title {
    margin-bottom: 30px;
    font-weight: 600;
    margin-left: 5%;

    
    @media (min-width: 320px) and (max-width: 748px) {
      margin-top: 20px;
    }
  }

  .listTeam {
    margin: 0 5%;

    @media (min-width: 320px) and (max-width: 748px) {
      margin: 0;
    }
  }

  & .header {
    font-weight: 600;
  }
`;
