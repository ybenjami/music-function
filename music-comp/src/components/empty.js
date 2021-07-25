import React from "react"
import MuiAlert from '@material-ui/lab/Alert';

export default function Empty (props) {
 const hasData = props.isEmpty;
  function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    
      return (
        
        <div>
          {!hasData &&
            <Alert severity="info">Search a song or artist! </Alert>
          }
        </div>
        
    );
}