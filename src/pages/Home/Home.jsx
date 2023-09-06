import Header from '/src/components/Header';
import Slide from '@mui/material/Slide';
import RotatingCube from '/src/components/RotatingCube';

export default function Home() {
  return(
    <div> 
      <Header/>  
      <Slide direction="up" in={true} mountOnEnter unmountOnExit >
        <h1 style={{marginTop: '120px', display: 'flex', justifyContent: 'center'}}>Project under construction...</h1>
      </Slide>
      <RotatingCube/>
    </div>
  )
}