import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';
import FormControlLabel from '@mui/material/FormControlLabel';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Header from '/src/components/Header';

export default function Contact() {

  const numberOfIcons = 150; 
  return (
    <div>
      <Header/>
      <h1 style={{marginTop: '100px', display: 'flex', justifyContent: 'center'}}>Project under construction...</h1>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
          {Array.from({ length: numberOfIcons }).map((_, index) => (
            <Zoom
              key={index}
              in={true}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AcUnitIcon style={{ margin: '20px', color: 'lightBlue' }} />
            </Zoom>
         ))}
      </Box>
    </div>
  );
}