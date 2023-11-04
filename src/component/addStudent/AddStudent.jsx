import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import {useState} from "react";
import Toast from "../../common/component/Alert/Alert.jsx";

export default function AddStudent({open, setOpen}) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');


    const saveEvent = () => {
        if(name.length === 0) {
            Toast.fire({
                icon: 'error',
                title: 'Name can not be empty'
            })
            return
        }

        if(age.length === 0){
            Toast.fire({
                icon: 'error',
                title: 'Age can not be empty'
            })
            return
        }

        if(address.length === 0){
            Toast.fire({
                icon: 'error',
                title: 'Address can not be empty'
            })
            return
        }

        var numbers = /^[0-9]+$/;
        if(contact.match(numbers)){
            if(contact.length !== 10){
                Toast.fire({
                    icon: 'error',
                    title: 'Invalid contact number'
                })
                return
            }
        }else {
            Toast.fire({
                icon: 'error',
                title: 'numbers only'
            })
            return
        }

        console.log(name, age, address, contact);
    }

    return (
        <Dialog
            open={open}
            onClose={()=> setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Add Student
            </DialogTitle>
            <DialogContent>
                <Box paddingBottom={2}>
                    <TextField
                        onChange={(val)=> setName(val.target.value)}
                        fullWidth
                        value={name}
                        id="outlined-basic"
                        label="Student Name"
                        variant="outlined"
                    />
                </Box>
                <Box paddingBottom={2}>
                    <TextField
                        onChange={(val)=> setAge(val.target.value)}
                        fullWidth
                        value={age}
                        id="outlined-basic"
                        label="Student Age"
                        variant="outlined"
                    />
                </Box>
                <Box paddingBottom={2}>
                    <TextField
                        onChange={(val)=> setAddress(val.target.value)}
                        value={address}
                        fullWidth
                        id="outlined-basic"
                        label="Student Address"
                        variant="outlined"
                    />
                </Box>
                <Box paddingBottom={2}>
                    <TextField
                        onChange={(val)=> setContact(val.target.value)}
                        value={contact}
                        fullWidth
                        id="outlined-basic"
                        label="Student Contact"
                        variant="outlined"
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=> setOpen(false)}>Cansel</Button>
                <Button onClick={()=> saveEvent(false)} color='info' variant='contained'>
                    Save Student
                </Button>
            </DialogActions>
        </Dialog>
    )
}
