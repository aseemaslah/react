import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Dell = () => {
   var [val,setval]=useState()

    
    const submit = () => {
        
        setval("REACT")
    }
    const handle = () => {
       
        setval("ANGULAR")
    }
    const work = () => {
       
        setval("VIEW")
    }
        useEffect(() => {
            handle()
        }, [])
    
  return (
      <div>
          <Typography variant='h4'>WELCOME TO {val}</Typography>
          <Button variant="contained" color="primary" onClick={submit}>react</Button>
          <Button variant="contained" color="success" onClick={handle}>angular</Button>
          <Button variant="contained" color="secondary" onClick={work}>view</Button>

    </div>
  )
}

export default Dell