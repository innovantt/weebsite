import React from 'react'
import { Grid, Icon } from '@mui/material';
import { Paper } from '@mui/material';
import { Avatar } from '@mui/material'; 
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { userRegister } from "../../JS/actions/userAction"


export const RegisterForm = () => {
    

    const paperStyle = { padding: 20, width: 340, margin: "0 auto" ,backgroundColor:"rgba(220, 220, 220, 0.795)"}
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const sty= {backgroundColor:"rgb(240,248,255)"}


    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")


    const dispatch = useDispatch()
    const error = useSelector(state => state.userReducer.error)
    const loading = useSelector(state => state.userReducer.loading)


    const register = (e) => {
        const newUser = { firstName, lastName, email, phone, password }
        e.preventDefault();
        dispatch(userRegister(newUser));
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setPassword("");

    }
    return  loading ? (<Loader/>):(
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        
                    </Avatar>
                    <h2 style={headerStyle}><Icon HowToRegIcon/>Register</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form >
                    <TextField  label='firstName' placeholder="Enter your Firstname" style = {sty} onChange={(e) => setFirstName(e.target.value)}
                            value={firstName} />
                    <TextField fullWidth label='lastName' placeholder="Enter your Lastname" style = {sty} onChange={(e) => setLastName(e.target.value)}
                            value={lastName}/>
                    <TextField fullWidth label='Email' placeholder="Enter your email" style = {sty}  onChange={(e) => setEmail(e.target.value)}
                            value={email}/>
                    
                    
                    <TextField fullWidth label='Password' placeholder="Enter your password" style = {sty} onChange={(e) => setPassword(e.target.value)}
                            value={password}/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" style = {sty}/>
                   
                    <Button type='submit' variant='contained' color='primary' onClick={register} > submit</Button>
                </form>
            </Paper>
                    </Grid>
    )
}
