import React from 'react';
import { Box, Divider } from '@mui/material';
import { css } from '@linaria/core';
import { ProjectTeam } from '../ProjectTeam';

export const Header = () => {
  return (
    <>
      <Box className={boxStyles}>
        <ProjectTeam/>
      </Box>
      <Divider className={dividerStyle}/>
    </>
  )
}

const dividerStyle = css`
  && {
    border-color: #fff;
    border-width: 2px;
  }
`;

const boxStyles = css`
  padding: 0 5px 15px;
`;
