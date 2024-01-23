import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import styles from '../../styles/warrantyregistration.module.css'

const Index = ({ title, type, }) => {
    return (
        <div>
            <Typography variant='h5'
                sx={{
                    fontSize: '18px',
                    color: '#595959',
                    marginTop: '5px',
                    fontWeight: 'normal',
                    paddingBottom: '8px'
                }}>
                {title}
            </Typography>
            <div className={styles.Regformgroup1}>
                <input type={type} id='model-num' className={styles.modelnum1} />
            </div>


        </div>
    );
};

export default Index;
