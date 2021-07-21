import './App.css';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Input from './components/input';
import Empty from './components/empty';
import DataItem from './components/data-item';
import Grid from '@material-ui/core/Grid';
import theme from './theme';

function App() {
  const [data, setData] = React.useState([]);

  const handleCallback = (childData) =>{
    setData(childData); 
  } 

  const listItems = data.map((item, index) =>
    <DataItem result={item} id={index} />
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
         <header className="App-header">
           <Input parentCallback = {handleCallback} />
         </header>
        </ThemeProvider>
        <br />
        <Empty isEmpty={listItems.length} />
        <Grid container spacing={4}>
          {listItems.length > 0 &&
            [listItems]
          }
        </Grid>
    </div>
  );
}

export default App;
