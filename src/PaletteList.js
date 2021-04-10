import {Link} from 'react-router-dom'
import React ,{Component} from 'react'
import { CSSTransition,TransitionGroup,} from 'react-transition-group';
import MiniPalette from './MiniPalette'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import blue from '@material-ui/colors/blue'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import DialogTitle from "@material-ui/core/DialogTitle";
import {withStyles} from "@material-ui/styles"
import styles from './styles/PaletteListStyles'


class PaletteList extends Component {
    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }
    render(){
        const {palettes,classes,deletePalette} = this.props
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading}>React Colors</h1>
                        <Link to="/palette/new">create new palette</Link>
                    </nav>             
                        <TransitionGroup className={classes.palettes}>
                            {palettes.map(palette => ( 
                                    <CSSTransition
                                        key={palette.id}
                                        classNames='fade'
                                        timeout={500}
                                        >
                                        <MiniPalette 
                                            {...palette} 
                                            handleClick={()=>this.goToPalette(palette.id)} 
                                            handleDelete={deletePalette} 
                                            id={palette.id} 
                                            key={palette.id}
                                        />
                                    </CSSTransition>
                                    ))}
                        </TransitionGroup>
                </div>
                <Dialog open={true}>
                    <DialogTitle>Delete This Palette?</DialogTitle>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <CheckIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Delete</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <CheckIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Cancel</ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}
export default withStyles(styles)(PaletteList);