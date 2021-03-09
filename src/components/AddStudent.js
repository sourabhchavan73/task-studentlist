import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {  makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';




const useStyles = makeStyles(theme => ({
    formGroup: {
        marginBottom: '1rem',
        width: '100%'
    },

    formControl: {
        width: '100%',
        fontSize: '11px'
    },

    formGroup: {
        marginBottom: '1rem',
        width: '100%'
    },
}))

const AddStudent = ({ onAddStudent }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState(''); 
    const [gender, setGender] = useState('');

    const[nameHelper, setNameHelper] = useState("");
    const[nameError, setNameError] = useState(false)

    const[emailHelper, setEmailHelper] = useState("");
    const[emailError, setEmailError] = useState(false);

    const[numberHelper, setNumberHelper] = useState("");
    const[numberError, setNumberError] = useState(false);

    const[genderHelper, setGenderHelper] = useState("");
    const[genderError, setGenderError] = useState(false);


    const onSubmit = (e) =>{
        e.preventDefault();

        if(!name){
            setNameError(true);
            setNameHelper('Enter a Name');
            setOpen(true);
            return
        }else if (!email){
            setEmailError(true);
            setEmailHelper('Enter a Email');
            setOpen(true);
            return
        }else if(!number){
            setNumberError(true);
            setNumberHelper('Enter a Number');
            setOpen(true);
            return
        }else if(!gender){
            setGenderError(true);
            setGenderHelper('select a Gender');
            setOpen(true);
            return
        }

        onAddStudent({  name, email, number, gender});
            setName('');
            setEmail('');
            setNumber('');
    }
    

    return (
        <div>
            <Button 
                disableElevation 
                disableRipple 
                className="add-student" 
                onClick={() => setOpen(true)} 
                variant="contained" >Add Student
            </Button>

            <Dialog                 
                open={open} 
                onClose={() => setOpen(false)}   
                fullWidth
                maxWidth="sm">

                <DialogContent>
                    <DialogContentText>
                        <strong>Add New Student</strong>
                    </DialogContentText>

                    <form onSubmit={onSubmit}>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <div className={classes.formGroup}>
                                <TextField
                                    className={classes.formControl} 
                                    id="name" 
                                    error={nameError}
                                    helperText={nameHelper}
                                    label="name" 
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}/>
                                </div>
                            </Grid>

                            <Grid item md={6}>
                                <div className={classes.formGroup}>
                                    <TextField
                                        className={classes.formControl} 
                                        error={emailError}
                                        helperText={emailHelper}
                                        id="email" 
                                        label="email" 
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                            </Grid>

                            <Grid item md={6}>
                                <div className={classes.formGroup}>
                                    <TextField
                                    className={classes.formControl}
                                    error={numberError}
                                    helperText={numberHelper}
                                    id="phone" 
                                    type="number"
                                    label="phone" 
                                    value={number}
                                    onChange={(event) => setNumber(event.target.value)}
                                    />
                                </div>
                            </Grid>

                            <Grid item md={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Select Gender</InputLabel>
                                    <Select
                                        error={genderError}
                                        helperText={genderHelper}
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
                            type="submit" 
                            variant="contained" 
                            onClick={() => setOpen(false)}
                            color="primary">
                            Add Student
                        </Button>

                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddStudent
