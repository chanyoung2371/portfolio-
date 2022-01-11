import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar,Button,Typography } from '@mui/material'

function List() {
    return (
      <AppBar style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}} position="static">
      <Toolbar>
          <Typography> UIT</Typography>
          <Button style={{color: "white" ,marginLeft:'3%'}} variant="text"><Link to ='/mui' >Mui</Link></Button>
          <Button style={{color: "white" ,marginLeft:'3%'}} variant="text"><Link to ='/count' >Count</Link></Button>
          <Button style={{color: "white" ,marginLeft:'3%'}} variant="text"><Link to ='/todo' >Todo</Link></Button>
          <Typography sx={{ flexGrow: 1 }}></Typography>
      </Toolbar>
  </AppBar>
    )
}

export default List
