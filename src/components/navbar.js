import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default class Header extends React.Component{

    render(){
        return (
            <div className="NavDiv">
                <AppBar position="static">
                    <Toolbar>
                    <IconButton className="AppBarIconButton" color="inherit" aria-label="Menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className="AppBarTypography">
                        MatthewHamilton.ca
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

}