import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

const InputFields = ({ title, multi }) => {
    return (
        <div>
            <Typography variant='h5' sx={{
                fontSize: '18px',
                color: '#595959',
                marginX: 1,
                marginTop: '5px',
                fontWeight: '500'
            }}>{title}</Typography>
            <Box sx={{ width: 500, maxWidth: '100%', }} >

                {multi ?
                    <TextField
                        id="fullWidth"
                        multiline
                        rows={4}
                        fullWidth
                        sx={{ minWidth: '80%' }}
                    />
                    :
                    <TextField
                        id="fullWidth"
                        required
                        size={"small"}
                        fullWidth
                        sx={{ minWidth: '80%' }}
                    />

                }
            </Box>

        </div >
    )
}

export default InputFields
