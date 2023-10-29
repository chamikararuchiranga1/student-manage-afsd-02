import Table from "../../common/component/Table/Table.jsx"
import {Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import instance from "../../services/AxiosOrders.jsx";
// import Toast from "../../common/component/Alert/Alert.jsx";
import Box from "@mui/material/Box";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import DrawIcon from '@mui/icons-material/Draw';

export default function ViewStudent() {

    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    const columns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'age', label: 'Age', minWidth: 100 },
        {id: 'contact', label: 'Contact Number', minWidth: 170, align: 'center',},
        {id: 'address', label: 'Address', minWidth: 170, align: 'left',},
        {id: 'action', label: 'Action', minWidth: 120, align: 'center',},
    ];

    useEffect(()=> {
        loadStudent();
    },[]);

    const loadStudent = () => {
        instance.get('/student/getAll')
            .then(function (response) {
                const studentData = response.data;
                const array = []
                studentData.forEach((val)=> {
                    array.push({
                        name: val.student_name,
                        age: val.student_age,
                        contact: val.student_contact,
                        address: val.student_address,
                        action: (
                            <div>
                                <IconButton color='error' aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton color='success' aria-label="delete">
                                    <DrawIcon />
                                </IconButton>
                            </div>
                        )
                    })
                })
                setData(array);
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    return (
        <div>
            <h3>Student details</h3>
            <Box sx={{display: 'flex', justifyContent: 'end', marginY: 3}}>
                <Button onClick={()=> setOpen(true)} variant="contained" color='info'>Add Student</Button>
            </Box>
            <Table rows={data} columns={columns}/>

            <div>
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
                                // onChange={(val)=> setName(val.target.value)}
                                fullWidth
                                id="outlined-basic"
                                label="Student Name"
                                variant="outlined"
                            />
                        </Box>
                        <Box paddingBottom={2}>
                            <TextField
                                // onChange={(val)=> setEmail(val.target.value)}
                                fullWidth
                                id="outlined-basic"
                                label="Student Age"
                                variant="outlined"
                            />
                        </Box>
                        <Box paddingBottom={2}>
                            <TextField
                                // onChange={(val)=> setPassword(val.target.value)}
                                fullWidth
                                id="outlined-basic"
                                label="Student Address"
                                variant="outlined"
                            />
                        </Box>
                        <Box paddingBottom={2}>
                            <TextField
                                // onChange={(val)=> setComPassword(val.target.value)}
                                fullWidth
                                id="outlined-basic"
                                label="Student Contact"
                                variant="outlined"
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> setOpen(false)}>Cansel</Button>
                        <Button onClick={()=> setOpen(false)} color='info' variant='contained'>
                            Save Student
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}
