import { Paper } from '@mui/material'
import React from 'react'

export const GraphCard = (props) => {
  return (
    <Paper
    sx={{
        height: 200,
        width: 200,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
      elevation={3}
      {...props}
      >
        {props.children}
      </Paper>
  )
}
