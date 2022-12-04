import React from 'react';
import Button from '@mui/material/Button';
import imag from "./images/Bannerimg.jpg"


const Banner = () => {
  return (
    <div>
      <div className='img-container'>
      <img src={imag} alt="banner" />
      </div>
      <div className='content'>
        <h1> We belive in our Quality</h1>
        <p>Agro is global exporter of seasame,starch,corn, sweetness <br/>with its root in Agricultural india.</p>
        <Button variant="outlined" size="medium" style={{color:"#fff", width:"auto"}}>
          Learn More
        </Button>
      </div>

    </div>
  )
}

export default Banner