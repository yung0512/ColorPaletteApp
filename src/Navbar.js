import React , {Component} from 'react'
import Slider from 'rc-slider'
import './Navbar.css'
import {Link} from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import 'rc-slider/assets/index.css'
class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            format:"hex",
            open:false
        }
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }
    handleFormatChange(e){
        this.setState({
            format:e.target.value,
            open:true
        },()=>{this.props.handleChange(this.state.format)})
        
    }
    closeSnackbar(){
        this.setState({
            open:false
        })
    }
    render(){
        const {level,changeLevel,showingShades} = this.props;
        const {format} = this.state
        return(
            <header className="Navbar">
                <div className="logo">
                    <Link to="/">reactcolorpicker</Link>
                </div>
                {showingShades && (
                <div className="slider-container">
                    <span>Level:</span>
                    <div className="slider">
                        <Slider  defaultValue={level} min={100} max={900} onAfterChange={changeLevel} step={100}/>
                    </div>
                </div>
                )}
                <div className="select-container">
                    <Select value={this.state.format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">Hex - #ffffff</MenuItem>
                        <MenuItem value="rgb">Rgb - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">Rgba - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                    <Snackbar 
                        anchorOrigin={{vertical:'bottom',horizontal:'left'}} 
                        open={this.state.open}
                        autoHideDuration={3000}
                        message={<span id="message-id">Format change to {format.toUpperCase()}</span>}
                        ContentProps={{
                            "aria-describedby":'message-id'
                        }}
                        onClose={this.closeSnackbar}
                        action={[
                            <IconButton onClick={this.closeSnackbar} color='inherit' key="close"
                             aria-label="close">
                                <CloseIcon/>
                            </IconButton>]}
                    />
                </div>
            </header>
        )
    }
}
export default Navbar