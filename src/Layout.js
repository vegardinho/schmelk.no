import { AppBar, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root: {
        display: 'flex'
    }
})

function Layout() {
    const classes = makeStyles();

    return (
        <div className={classes.root}>
        <AppBar>
            <Typography>
                Hei
            </Typography>
        </AppBar>
        </div>
    )
}

export default Layout
