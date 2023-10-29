import Box from "@mui/material/Box";
import {Button, Card, CardActions, CardContent, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useNavigate} from 'react-router-dom'
import instance from "../../services/AxiosOrders.jsx";
import {useState} from "react";
import Toast from "../../common/component/Alert/Alert.jsx";

export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const loginAction = () => {
        if(email !== '' && pass !== ''){
            const data = {
                email: email,
                password: pass
            }
            instance.post('/login', data)
                .then(function (response) {
                    Toast.fire({
                        icon: 'success',
                        title: 'Login Success..!'
                    })
                    localStorage.setItem('login', response.data.token);
                    setTimeout(()=> {
                        window.location.reload();
                    },2000)

                })
                .catch(function (error) {
                    Toast.fire({
                        icon: 'error',
                        title: 'Invalid email or password ..!'
                    })
                })
        }else {
            Toast.fire({
                icon: 'error',
                title: 'Fill your login form..!'
            })
        }
    }
    return (
        <Box sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                        Login
                    </Typography>
                    <Box paddingBottom={2}>
                        <TextField onChange={(val)=> {
                            setEmail(val.target.value)}} fullWidth id="outlined-basic" label="Email" variant="outlined" />
                    </Box>
                    <Box paddingBottom={2}>
                        <TextField onChange={(val)=> {
                            setPass(val.target.value)}} fullWidth id="outlined-basic" type='password' label="Password" variant="outlined" />
                    </Box>
                    <Typography onClick={()=> {navigate('/register')}} textAlign={'end'} variant="body2" color="blue">
                        Register
                    </Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                    <Button onClick={()=> loginAction()} variant={'contained'} size="small">Login</Button>
                </CardActions>
            </Card>
        </Box>
    )
}
