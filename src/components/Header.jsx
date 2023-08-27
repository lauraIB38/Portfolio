import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const headerStyles = {
  toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
     // background: '#FBFCFD',
     background: 'linear-gradient(0deg, rgb(68, 109, 137) 20%, rgba(63, 102, 125, 0.64) 45%), linear-gradient(90deg, rgb(123, 153, 187) 0%, rgb(162, 186, 212) 33.333%, rgb(231, 234, 237) 50%, rgba(137, 156, 175, 0.5) 100%)',
     // background: 'linear-gradient(0deg, rgba(224, 230, 236, 0.1) 20%, rgba(194, 183, 183, 0.12) 45%), linear-gradient(90deg, rgba(178, 185, 195, 0.6) 0%, rgb(189, 198, 220) 33.333%, rgb(226, 241, 250) 50%, #9fb5cb 100%)',
  },
  link: {
      marginRight: '20px',
      textDecoration: 'none',
      // color: '#11181C',
      color: 'white',
      fontFamily:  "'Inter Display', sans-serif",
  },
  leftLink: {
    marginRight: '20px',
    textDecoration: 'none',
    color: 'white',
    fontFamily: "'Inter Display', sans-serif",
  },
  rightLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  rightLink: {
    marginLeft: '20px',
    textDecoration: 'none',
    color: 'white',
    fontFamily: "'Inter Display', sans-serif",
  },
};

function Header() {
  return (
      <AppBar position="static">
          <Toolbar style={headerStyles.toolbar}>
              <Typography variant="h6">
                  <Link to="/" style={headerStyles.leftLink}>Laura</Link>
              </Typography>
              <div style={headerStyles.rightLinks}>
                <Typography variant="h6">
                    <Link to="/about" style={headerStyles.rightLink}>About</Link>
                </Typography>
                <Typography variant="h6">
                    <Link to="/projects" style={headerStyles.rightLink}>Projects</Link>
                </Typography>
                <Typography variant="h6">
                    <Link to="/resume" style={headerStyles.rightLink}>Resume</Link>
                </Typography>
                <Typography variant="h6">
                    <Link to="/contact" style={headerStyles.rightLink}>Contact</Link>
                </Typography>
              </div>
          </Toolbar>
      </AppBar>
  );
}


export default Header;