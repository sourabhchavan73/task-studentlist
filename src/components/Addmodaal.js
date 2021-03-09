import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {  makeStyles } from '@material-ui/core/styles';

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
    }
}))

const Addmodaal = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
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
                            value={EditName.name}/>
                        </div>
                    </Grid>

                    <Grid item sm={6}>
                        <div className={classes.formGroup}>
                            <TextField
                            className={classes.formControl} 
                            id="email" 
                            label="email" 
                            value={EditName.name}/>
                        </div>
                    </Grid>

                    <Grid item sm={6}>
                        <div className={classes.formGroup}>
                            <TextField
                            className={classes.formControl} 
                            id="phone" 
                            label="phone"
                            value={EditName.name}/>
                        </div>
                    </Grid>
                </Grid>

                <Button 
                    onClick={() => setOpen(false) }
                    type="submit" 
                    variant="contained" 
                    color="primary">
                    Submit
                </Button>
            </DialogContent>
        </Dialog>
    )
}

export default Addmodaal
