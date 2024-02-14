import React from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';
import styles from '../../../styles/downloads.module.css';

const ImageText = ({ image, text, top, mb }) => {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        alt="TopImage"
        className={styles.ImageTextdownload}
      />
      <Typography sx={{ textAlign: 'center', fontSize: '12px', fontWeight: '600 !important', color: 'black', marginTop: top ? top : '-3%', paddingLeft: '15px', mb: mb }}>{text}</Typography>
    </div>
  );
};

export default ImageText;
