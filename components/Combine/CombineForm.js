import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Paper} from '@mui/material'
import {  Box } from '@mui/system'
import { Typography } from '@mui/material'
import { RegisterForm } from '../Register/RegisterForm'
import { LoginForm } from '../Login/LoginForm'

export const CombineForm = () => {

        const [value, setValue] = React.useState(1)

        const handleChange = (event, newValue) => {
          setValue(newValue)
        } 
    
        const paperStyle= {width:340 , margin :"20px auto " }
        function TabPanel(props) {
            const { children, value, index, ...other } = props;
          
            return (
              <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
              >
                {value === index && (
                  <Box >
                    <Typography>{children}</Typography>
                  </Box>
                )}
              </div>
            );
          }
    
        return (  
            <Paper elevation={20} style ={paperStyle}>
                 <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                     <Tab label="Register" />
                    
                     <Tab label="Sign In" />
                     
                    
                </Tabs>
                <TabPanel value={value} index={0} >
                      <RegisterForm/> 
                      
                </TabPanel>
                <TabPanel value={value} index={1}>
                            
                            <LoginForm/>    
                </TabPanel>
            </Paper>
        )
    }