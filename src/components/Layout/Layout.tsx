import React from 'react';
import { Container, Box } from '@mui/material';
import { css, cx } from '@linaria/core';

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <Container maxWidth="xl" className={cx(containerStyles, borderStyles)}>
      <Box className={cx(boxStyles, borderStyles)}>
        { children }
      </Box>
    </Container>
  )
}

const containerStyles = css`
  && {
    height: 100vh;
    width: 1280px;
    padding: 3px;
    background-color: #fff;
  }
`;

const borderStyles = css`
  border-radius: 20px;
`;

const boxStyles = css`
  padding: 16px 24px;
  height: calc(100vh - 10px);
  background-color: #F3F9FE;
`;