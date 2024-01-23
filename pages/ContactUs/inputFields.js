import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

const InputFields = ({ title, multi, type, name, width }) => {
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
            <Box sx={{
                display: 'flex',
                alignSelf: 'center',
                justifyContent: 'center',
                maxWidth: width ? width : {
                    xs: '89%', sm: '90%', md: '95%', lg: '70%'
                },
                '& .MuiOutlinedInput-root': {
                    borderRadius: 0,
                    border: 'black',
                    // height: '32px',
                    '&:hover': {
                        borderColor: 'transparent',
                        outline: 'none',
                    },
                    '&.Mui-focused': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent',
                            border: 'black',
                            boxShadow: '0px 0px 3px #0492C2',
                        },
                    },
                },
                notchedOutline: {
                    borderWidth: 0,
                    borderColor: 'transparent'
                }
            }} >
                {multi ?
                    <TextField
                        id="fullWidth"
                        multiline
                        rows={4}
                        fullWidth
                        name={name}
                    />
                    :
                    <TextField
                        id="fullWidth"
                        required
                        size={"small"}
                        fullWidth
                        type={type}
                        name={name}
                        sx={{
                            '& .MuiOutlinedInput-input': {
                                paddingY: '5px',
                            },
                            height: '42px',

                        }}
                    />
                }
            </Box>
        </div>
    )
}

export default InputFields
