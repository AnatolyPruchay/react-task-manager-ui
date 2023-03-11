import React from 'react';
import { AvatarGroup, Avatar, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { projectTeamDataMock } from '../../mocks/dataMocks';
import { stringAvatar } from '../../utils/mui';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

export const ProjectTeam = () => {

  return (
    <Wrapper>
      <Button size="small" className={buttonStyles}>
        <PlusIcon>
          <Add color="primary"/>
        </PlusIcon>
        Add member
      </Button>
      <AvatarGroup className={avatarGroupStyles}>
        { projectTeamDataMock.map((teamMember, i) => (
          <Avatar key={i}
                  alt={teamMember.name}
                  src={teamMember.photo}
                  {...stringAvatar(teamMember.name)} />
        )) }
      </AvatarGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const PlusIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px dashed #1976D2;
  display: flex;
  margin-right: 5px;
`;

const buttonStyles = css`
  margin-right: 5px;
  outline: none;
`;

const avatarGroupStyles = css`
  && {
    align-items: center;
    & > div {
      width: 36px;
      height: 36px;
      background-color: #1976D2;
    }
    & > div:first-child {
      margin-left: 0;
      background-color: transparent;
      border: 1px solid #1976D2;
      color: #1976D2;
    }
  }
`;
