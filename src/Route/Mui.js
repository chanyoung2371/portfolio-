
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        marginTop: '5%'
    },
    app: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    typo: {
        flexGrow: 1
    },
    btn1: {
        color: 'white',
        marginLeft: '3%'
    },
    btn2: {
        color: 'white'
    }
});
function Mui() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.app}position="static">
                <Toolbar>
                    <Typography> Ocean_IT</Typography>
                    <Button className={classes.btn1} variant="text">Introduction</Button>
                    <Button className={classes.btn2} variant="text">Members</Button>
                    <Button className={classes.btn2} variant="text">Research</Button>
                    <Button className={classes.btn2} variant="text">Board</Button>
                    <Button className={classes.btn2} variant="text">Gallery</Button>
                    <Typography className={classes.typo}></Typography>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Mui