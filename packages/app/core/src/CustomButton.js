import React from 'react'
import { Button } from '@mui/material'
import './CustomButton.css'
export const CustomButton = (props) => {
  return (
    <Button className='customButton' {...props}>{props.children}</Button>
  )
}

