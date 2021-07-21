import React from "react"
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import axios from 'axios';


export default function Input (props) {
    const [artist, setArtist] = React.useState("");
    const prodLink = 'https://music-search-yb.netlify.app/.netlify/functions/music'

    const handleSubmit = async () => {
        props.parentCallback(Array(4).fill({"loading": true}));
        await search();
      }

      const search = async() => {
        try{ 
          
          const resp = await axios({
            method: 'post',
            url: prodLink,
            headers: {"Content-Type": "application/json"},
            params: {"search": artist}
          });

          props.parentCallback(resp.data.response.hits);
         
        } catch (error) {
            console.log(error)
            throw error;
          }
      };
    return (
        <div>
            <form>
                <label>Artist: </label>
                <TextField id="search" className='breath' value={artist} onChange={e => setArtist(e.target.value)} required />
                <Button variant="contained" color="secondary" onClick={handleSubmit}>Search</Button>
                </form>
        </div>
    );
}