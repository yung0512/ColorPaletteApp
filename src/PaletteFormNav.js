import React,{Component}from "react"
import classNames from "classnames";
import {Link} from "react-router-dom"
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Button from '@material-ui/core/Button';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PaletteMetaForm from './PaletteMetaForm'
import {ValidatorForm,TextValidator} from "react-material-ui-form-validator"
import styles from "./styles/PaletteFormNav"

class PaletteFormNav extends Component {
    constructor(props){
        super(props) 
        this.state = {
            newPaletteName:"",
            formShowing:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.showForm  = this.showForm.bind(this)
        this.hideForm = this.hideForm.bind(this)
    }
    componentDidMount(){
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
        this.props.palettes.every(
                ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }
    handleChange(evt){
          
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    showForm(){
        this.setState({
            formShowing:true
        })
    }
    hideForm(){
        this.setState({
            formShowing:false
        })
    }
    render(){
        const {open ,palettes,classes,handleSubmit} = this.props
        const {newPaletteName} = this.state
        return(
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position='fixed'
                    color="default"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open
                })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color='inherit'
                            aria-label='Open drawer'
                            onClick={this.props.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                        <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' color='inherit' noWrap>
                            Create A Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <Link 
                            className={classes.link}
                            to="/"
                        >
                            <Button 
                                className={classes.button}
                                variant="contained" 
                                color="secondary"
                            >Go Back
                            </Button>
                        </Link>
                        <Button
                            className={classes.button}
                            variant='contained'
                            color='primary'
                            onClick={this.showForm}
                        >
                            Save
                        </Button>
                    </div>
                </AppBar>
                {this.state.formShowing && (<PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm}/>)}
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);