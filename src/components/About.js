import React from 'react';
import "./Abou.css";
import aboutimg from "./images/about.jpg";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const About = () => {
  
  return (

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={5}  sm={12} md={5}>
        <img src={aboutimg} alt='abt'/>
        </Grid>
        <Grid item xs={7}  sm={12} md={7}>
          
        <h1>ORGANIC FOOD STRAIGHT FROM THE FORM</h1>
            <p>Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms (GMOs). Organic foods include fresh produce, meats, and dairy products as well as processed foods such as crackers, drinks, and frozen meals.</p>
        </Grid>
      </Grid>
    </Box> 

   
  )
}

export default About