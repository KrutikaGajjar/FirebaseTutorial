import { Button, Typography } from '@mui/material'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import CustomDrawer from '../../Components/Drawer/customDrawer'
import { auth } from '../../firebase'

export default function Dashboard() {

    return (
      <>
       
        <Typography variant='h3'>Welcome to Dashboard</Typography>
        
      </>
  )
}
