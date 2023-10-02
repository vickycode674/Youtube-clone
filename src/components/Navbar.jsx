import React from 'react'

import { Stack } from '@mui/material'; //multi dimesnional form
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { logo } from '../utils/constant';

const Navbar = () => (
  <Stack 
  direction="row"
  alignItems="center"
  p={1}
  sx={{position:'sticky',background:'#000',top:0,justifyContent:'space-between'}}
  >
   <Link to="/" style={{display:'flex',alignItems:'center'}} >
    <img src={logo} alt="logo" height={40}/>
  <span><p>YouTube India</p></span>
    </Link> 
    <SearchBar/>
  </Stack>
)

export default Navbar
