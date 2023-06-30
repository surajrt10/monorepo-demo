// import { CustomButton } from '@sampleapp/common';
import { CustomButton, SubTitle, Title,Paragraph } from '@sampleapp/core'
import AdbIcon from '@mui/icons-material/Adb';
import './App.css'
import React from 'react'
function App() {
  const [count, setCount] = React.useState(0)
  return (
    <div className='AppHome'>
       <Title>Monorepo Demo</Title>
       <SubTitle>Each component in this App is a shared component from Core module</SubTitle>
       <Paragraph mt={2}>Monorepo is a version controlled code repository where we can have multiple projects in one repository and share components among them</Paragraph>
       <Title>{count}</Title>
       <CustomButton variant="contained" color="success" onClick={()=>setCount(count+1)}>Increase</CustomButton>
       <CustomButton variant="contained" endIcon={<AdbIcon/>}>Button without props</CustomButton>
    </div>
  );
}

export default App;