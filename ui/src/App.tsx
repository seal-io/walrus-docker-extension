import React from 'react';
import { Typography } from '@mui/material';


export function App() {
  return (
    <>
      <Typography variant="h3">Walrus</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          Visit <a href="https://seal-io.github.io/docs/" target="_blank" rel="noopener noreferrer">Walrus docs</a> for usage guides.
      </Typography>
    </>
  );
}
