import {Button, Card, CardActions, CardContent, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Toast from "../../common/component/Alert/Alert.jsx";
import instance from "../../services/AxiosOrders.jsx";

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comPassword, setComPassword] = useState('');

    const onRegister = () => {
        console.log(name, email, password, comPassword);
        if(name !== "" && email !== '' && password !== '' && comPassword !== ''){
            if(password === comPassword){
                const data = {
                    name: name,
                    email: email,
                    password: password,

                }
                instance.post('/register', data)
                    .then(function (response) {
                        Toast.fire({
                            icon: 'success',
                            title: 'Register Success..!'
                        })
                        setTimeout(()=> {
                            navigate('/login')
                        },2000)
                    })
                    .catch(function (error) {
                        Toast.fire({
                            icon: 'error',
                            title: 'Saved error..!'
                        })
                    })
            }else {
                Toast.fire({
                    icon: 'error',
                    title: 'Password not match.!'
                })
            }
        }else {
            Toast.fire({
                icon: 'error',
                title: 'Fill your login form..!'
            })
        }
    }

    return(
        <Box sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{ maxWidth: 445 }}>
                <CardContent>
                    <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                        Register
                    </Typography>
                    <Box paddingBottom={2}>
                        <TextField
                            onChange={(val)=> setName(val.target.value)}
                            fullWidth
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                        />
                    </Box>
                    <Box paddingBottom={2}>
                        <TextField
                            onChange={(val)=> setEmail(val.target.value)}
                            fullWidth
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                        />
                    </Box>
                    <Box paddingBottom={2}>
                        <TextField
                            onChange={(val)=> setPassword(val.target.value)}
                            fullWidth
                            id="outlined-basic"
                            type='password'
                            label="Password"
                            variant="outlined"
                        />
                    </Box>
                    <Box paddingBottom={2}>
                        <TextField
                            onChange={(val)=> setComPassword(val.target.value)}
                            fullWidth
                            id="outlined-basic"
                            type='password'
                            label="Conform Password"
                            variant="outlined"
                        />
                    </Box>
                    <Typography
                        onClick={()=> {navigate('/login')}}
                        textAlign={'end'}
                        variant="body2"
                        color="blue"
                    >
                        login
                    </Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                    <Button onClick={()=> onRegister()} variant={'contained'} size="small">Register</Button>
                </CardActions>
            </Card>
        </Box>
    )
}
