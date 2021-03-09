import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {  makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';




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

    formControl: {
        width: '100%',
        fontSize: '11px'
    }
}))

const AddStudent = ({ onAddStudent }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState(''); 

    const onSubmit = (e) =>{
        e.preventDefault();
        onAddStudent({  name, email, number});
        setName('')
        setEmail('')
        setNumber('')
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
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.formGroup}>
                                <TextField
                                    className={classes.formControl} 
                                    id="name" 
                                    label="name" 
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}/>
                                </div>
                            </Grid>

                            <Grid item md={6}>
                                <div className={classes.formGroup}>
                                    <TextField
                                        className={classes.formControl} 
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
                                    id="phone" 
                                    label="phone" 
                                    value={number}
                                    onChange={(event) => setNumber(event.target.value)}
                                    />
                                </div>
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
