import React from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';
import styles from '../../../styles/downloads.module.css';

export const ImageText = ({ image, text }) => {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        alt="TopImage"
        className={styles.ImageTextdownload}
      />
      <Typography sx={{ textAlign: 'center', fontSize: '12px', fontWeight: '600 !important', color: 'black', marginTop: '-3%' }}>{text}</Typography>
    </div>
  );
};
