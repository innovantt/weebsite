import React from 'react'
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Paper } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import { userLogin } from '../../JS/actions/userAction';
import { LoGo } from '../Logo/LoGo';

export const LoginForm = ({handleChange}) => {

    
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


    const loading = useSelector(state => state.userReducer.loading)
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const user = useSelector(state => state.userReducer.user)
    const dispatch = useDispatch()

    const login = (e) => {
        const cred = { email, password }
        e.preventDefault();
        dispatch(userLogin(cred))

        setEmail("")
        setPassword('')
    }


    const paperStyle={padding :20,width:340,margin:"0 auto", backgroundColor:"rgba(220, 220, 220, 0.795)"}
    
    const btnstyle={margin:'8px 0'}
    return loading ? (<Loader />)
    : isAuth ? user.role ? (<Redirect to='/profile' />) : (<Redirect to='/admin' />)
        :
     ( <Grid>
            <Paper  style={paperStyle}>
               
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <br></br>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
               
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={LoGo}>Sign in</Button>
                
            </Paper>
        </Grid>
    )
}
