import React from 'react';
import './style.css';
import { Typography } from '@mui/material';

export const ImageText = ({image, text}) => {

  return (
    <div className='container'>
      <img
          src={image}
          alt="Top Image"
          style={{width: 160, height: 160}}
        />
      <Typography sx={{textAlign:'center',fontSize:'12px',fontWeight:'600 !important',color:'black',marginTop:'-3%' }}>{text}</Typography>
    </div>
  );
};