import Table from "../../common/component/Table/Table.jsx"
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import instance from "../../services/AxiosOrders.jsx";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import DrawIcon from '@mui/icons-material/Draw';
import AddStudent from "../../component/addStudent/AddStudent.jsx";
import Toast from "../../common/component/Alert/Alert.jsx";
import Swal from "sweetalert2";

export default function ViewStudent() {

    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [updateData, setUpdateData] = useState();

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

    const deleteStudent = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "you want delete student..!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                instance.delete('/student/delete/'+id)
                    .then(function (response) {
                        loadStudent();
                        Toast.fire({
                            icon: 'success',
                            title: 'Delete Student Success..!'
                        })
                    })
                    .catch(function (error) {
                        Toast.fire({
                            icon: 'error',
                            title: 'Delete error..!'
                        })
                    })
            }
        })
    }

    const updateEvent = (val) => {
        setUpdateOpen(true);
        setUpdateData(val)
    }

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
                                <IconButton color='error' aria-label="delete" onClick={()=> deleteStudent(val.id)}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton color='success' aria-label="delete" onClick={()=> updateEvent(val)}>
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
                <AddStudent open={open} setOpen={(val)=> setOpen(val)} updateData={()=> loadStudent()}/>
            </div>

            <div>
                <AddStudent data={updateData} update={true} open={updateOpen} setOpen={(val)=> setUpdateOpen(val)} updateData={()=> loadStudent()}/>
            </div>
        </div>
    )
}
