import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant="h6">MY APP</Typography>
          <Link to="/login"> <Button variant="contained">LOGIN</Button></Link>
          <Link to="/signup"><Button variant="contained">SIGNUP</Button></Link>
          <Link to="/hai"><Button variant="contained">STATE</Button></Link>
          <Link to="/Dell"><Button variant="contained">DELL</Button></Link>
         < Link to="/api"><Button variant="contained">API</Button></Link>
              </Toolbar>
          </AppBar> <br /><br /><br /><br /><br />
      
    </div>
  )
}

export default Navbar
