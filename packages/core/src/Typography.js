import React from 'react'
import Typography from '@mui/material/Typography';

export const Title = (props) => {
    return (
        <Typography variant="h2" {...props}>
        {props.children}
      </Typography>
    )
  };


export const SubTitle = (props) =>{
  return (
    <Typography variant='h6' {...props}>
      {props.children}
    </Typography>
  )
}
export const Paragraph = (props) =>{
  return (
    <Typography variant='body' {...props}>
      {props.children}
    </Typography>
  )
}

