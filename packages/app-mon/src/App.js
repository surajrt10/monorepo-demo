import logo from './logo.svg';
import './App.css';
import { GraphCard, Title } from '@sampleapp/core';
import { Divider, Grid,} from '@mui/material';

function App() {
  return (
    <div className="App">
        <div className='logoContainer'>
        <img src={logo} className="App-logo" alt="logo" />
          <Title sx={{display:'inline-block',fontSize:'30px',verticalAlign:'top'}}>
            App Monitoring
          </Title>
        </div>
        <Divider color="white"/>
        <Grid className='Content' container spacing={2}>
          {[0,1,2,3,4,5,6,7,8,9].map((item)=>{
          return (<Grid item>
          <GraphCard elevation={item}>

                <Title  sx={{textAlign:'center',padding:'45px',userSelect:'none'}}>
                  {item + 1}
                </Title>
          </GraphCard>
            
          </Grid>)})}
            
        </Grid>
        <Divider color="white"/>
        <Grid>

        </Grid>
    </div>
  );
}

export default App;
