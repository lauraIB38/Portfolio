import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import { Link, useLocation } from 'react-router-dom';

const headerStyles = {
  appbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    background: 'hsla(0,0%,100%,.7)',
    backdropFilter: 'blur(12px)',
    transition: 'background-color .2s, color .2s',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    marginRight: '20px',
    textDecoration: 'none',
    "&:hover": {
      textDecoration: "underline",
    },
  },
  leftLink: {
    marginRight: '20px',
    textDecoration: 'none',
    color: '#11181C',
    fontFamily: "'Inter Display', sans-serif",
  },
  rightLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  rightLink: {
    marginLeft: '20px',
    textDecoration: 'none',
    color: '#11181C',
    fontFamily: "'Inter Display', sans-serif",
  },
  linkHover: {
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.3s ease-in-out"
    }
  }
};

function Header() {
  const [openCVModal, setOpenCVModal] = React.useState(false);
  const location = useLocation();
  const handleOpen = () => {
    setOpenCVModal(true);
  };

  const handleClose = () => {
    setOpenCVModal(false);
  };

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <AppBar  style={headerStyles.appbar}>
      <Toolbar style={headerStyles.toolbar}>
        <Typography variant="h6">
          <Link to="/" style={isLinkActive('/') ? {...headerStyles.leftLink, textDecoration: 'underline' } : headerStyles.leftLink}>Laura</Link>
        </Typography>
        <div style={headerStyles.rightLinks}>
          {/* <Chip label="Clickable" onClick={handleClick} >hola</Chip> */}
          <Typography variant="h6">
            <Link to="/about" style={isLinkActive('/about') ? { ...headerStyles.rightLink, textDecoration: 'underline' } : headerStyles.rightLink}>About</Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/projects" style={isLinkActive('/projects') ? { ...headerStyles.rightLink, textDecoration: 'underline' } : headerStyles.rightLink}>Projects</Link>
          </Typography>
          <Typography variant="h6">
            <span onClick={handleOpen} style={headerStyles.rightLink}>CV</span>
          </Typography>
          <Typography variant="h6">
            <Link to="/contact" style={isLinkActive('/contact') ? {...headerStyles.rightLink, textDecoration: 'underline'} : headerStyles.rightLink } >Contact</Link>
          </Typography>
        </div>
      </Toolbar>
        <Dialog open={openCVModal} onClose={handleClose} maxWidth="xl" fullWidth={true}>
          <DialogContent>
            <iframe 
              src="/Laura_Ibanez_Cv.pdf"
              width="100%"
              height="800px"
              title="Curriculum Vitae"
              style={{border: "none"}} 
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cerrar
            </Button>
            <Button component="a" href="public/Laura_Ibanez_Cv.pdf" download="Laura_Ibanez_Cv.pdf" color="primary">
              Descargar CV
            </Button>
          </DialogActions>
        </Dialog>
    </AppBar>
  );
}


export default Header;
