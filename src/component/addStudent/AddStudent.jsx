import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";


export default function AddStudent({open, setOpen}) {
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
    )
}
