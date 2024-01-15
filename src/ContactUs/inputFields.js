import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

const InputFields = ({ title, multi, type }) => {
    return (
        <div>
            <Typography variant='h5'
                sx={{
                    fontSize: '18px',
                    color: '#595959',
                    marginTop: '5px',
                    fontWeight: '500',
                    paddingBottom: '8px'
                }}>
                {title}
            </Typography>
            <Box sx={{
                display: 'flex',
                alignSelf: 'center',
                justifyContent: 'center',
                maxWidth: {
                    xs: '89%', sm: '90%', md: '95%', lg: '62%'
                },
                '& .MuiOutlinedInput-root': {
                    borderRadius: 0,
                },
            }} >
                {multi ?
                    <TextField
                        id="fullWidth"
                        multiline
                        rows={4}
                        fullWidth
                    />
                    :
                    <TextField
                        id="fullWidth"
                        required
                        size={"small"}
                        fullWidth
                        type={type}
                        sx={{
                            '& .MuiOutlinedInput-input': {
                                paddingY: '5px',
                                "&.MuiOutlinedInput-input:focus": {
                                    borderColor: '1px 1px 3px aqua'
                                  }
                            },
                            height: '42px'
                        }}
                    />
                }
            </Box>
        </div>
    )
}

export default InputFields
