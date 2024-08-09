import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
  // const a = 'aseem,'

  var [val, setval] = useState("ASEEM")
  var [name, setname] = useState()
  const handleinput = (e) => {
    setval(e.target.value)
    console.log(e.target.value)

  }
  
  const submit = () =>{
    setname(val)
}
  return (
   
    <div>
      <Typography variant="h4">WELCOME
        {name}</Typography>
      <TextField variant="outlined" label='name'onChange={handleinput}></TextField><br /><br />

      <TextField variant="outlined" label='phone' ></TextField><br /><br />
      <TextField variant="outlined" label='email'></TextField><br /><br />
      <TextField variant="outlined" label='password'></TextField><br /><br />
      <TextField variant="outlined" label='age'></TextField><br /><br />
      <Button variant="outlined" onClick={submit}>SUBMIT</Button>

    </div>
  )
}

export default State