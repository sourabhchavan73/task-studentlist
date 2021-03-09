import React, { useState } from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles(theme => ({
    studentCard: {
        backgroundColor: '#ebebeb',
        width: '75%',
        marginBottom: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        margin: '0 auto' 
    },

    iconEdit: {
        color: '#1A4314',
        cursor: 'pointer',
        fontSize: '20px'
    },

    iconDelete: {
        color: '#ff0000',
        cursor: 'pointer',
        fontSize: '20px'
    },

    title:{
        fontSize: "15px"
    },

    formGroup: {
        marginBottom: '1rem',
        width: '100%'
    },

    formControl: {
        width: '100%',
        fontSize: '11px'
    },

    formControl: {
        width: '100%',
        fontSize: '11px'
    }
}))


const StudentDetails = ({students, onDelete, oneditclick, editName, editStudent}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState(''); 
    const [gender, setGender] = useState('');

    const handleSubmit = () => {

        if(editName.length > 0){
            const newData = {
                id : editName[0].id,
                name: name || editName[0].name ,
                email: email || editName[0].email,
                number: number || editName[0].number,
                gender: gender || editName[0].gender
            }

            editStudent(newData);
            setName('');
            setEmail('');
            setNumber('');
            setGender('')
            
        }

        setOpen(false);
        
    }

    return (
        <div>

        <TableContainer >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email Id</TableCell>
                        <TableCell align="center">Phone Number</TableCell>
                        <TableCell align="center">Gender</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>

                {students.map((student, index) => (
                    <TableBody key={index}>
                        <TableRow >
                            <TableCell align="center">{student.name}</TableCell>
                            <TableCell align="center">{student.email}</TableCell>
                            <TableCell align="center">{student.number}</TableCell>
                            <TableCell align="center">{student.gender}</TableCell>
                            <TableCell align="center">                       
                                <EditIcon 
                                    onClick={() => {
                                        setOpen(true)
                                        oneditclick(index);
                                    }}
                                    className={classes.iconEdit} /> 
                                    
                                <DeleteIcon
                                    style={{marginLeft: '0.5rem'}} 
                                    onClick={()=> {
                                    onDelete(student.id);
                                    }} 
                                    className={classes.iconDelete} />
                                </TableCell>
                        </TableRow>
                    </TableBody>
                ))}
            </Table>
        </TableContainer>

            <Dialog 
                open={open} 
                onClose={() => setOpen(false)}   
                fullWidth
                maxWidth="sm">
                <DialogContent>
                    <h4>Edit Student Profile</h4>

                    <Grid container spacing={2}>
                        <Grid item sm={6}>
                            <div className={classes.formGroup}>
                                <TextField
                                    className={classes.formControl} 
                                    id="name" 
                                    label="name"
                                    value = {name || editName.length > 0 && editName[0].name}
                                    onChange={(event) => setName(event.target.value)}


                               />
                            </div>
                        </Grid>

                        <Grid item sm={6}>
                            <div className={classes.formGroup}>
                                <TextField
                                    className={classes.formControl} 
                                    id="email" 
                                    label="email" 
                                    value = {email || editName.length > 0 && editName[0].email}
                                    onChange={(event) => setEmail(event.target.value)}

                               />
                            </div>
                        </Grid>

                        <Grid item sm={6}>
                            <div className={classes.formGroup}>
                                <TextField
                                    className={classes.formControl} 
                                    type="number"
                                    id="phone" 
                                    label="phone"
                                    value = {number || editName.length > 0 && editName[0].number}
                                    onChange={(event) => setNumber(event.target.value)}
                                />
                            </div>
                        </Grid>

                        <Grid item sm={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Select Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="select"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}>

                                    <MenuItem value={'male'}>Male</MenuItem>
                                    <MenuItem value={'female'}>Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Button 
                        onClick={() => handleSubmit() }
                        type="submit" 
                        variant="contained" 
                        color="primary">

                        Submit
                    </Button>
                </DialogContent>
            </Dialog>


        </div>
    )
}

export default StudentDetails
