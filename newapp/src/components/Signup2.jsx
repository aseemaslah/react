import { Button, FormControlLabel, TextField } from '@mui/material'
import React from 'react'


const Signup2 = () => {
  return (
    <div>
          <TextField variant="outlined" label='name'></TextField><br /><br />
        
          <TextField variant="outlined" label='phone'></TextField><br /><br />
          <TextField variant="outlined" label='email'></TextField><br /><br />
          <TextField variant="outlined" label='password'></TextField><br /><br />
          <TextField variant="outlined" label='age'></TextField><br /><br />
          <Button variant="outlined">SUBMIT</Button>
          <Button variant="outlined">RETRY</Button>
     
         
        
    </div>
  )
}

export default Signup2
