import React,{Component} from 'react'
import chroma from 'chroma-js'
import {Link} from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {withStyles} from "@material-ui/styles"
import styles from './styles/ColorBoxStyles'


class ColorBox extends Component{
    constructor(props){
        super(props)
        this.state ={
           copied:false 
        }
        this.changeCoptStates = this.changeCoptStates.bind(this)
    }
    changeCoptStates(){
        this.setState({
            copied:true
        },()=>{setTimeout(()=>this.setState({copied:false}),1500)})
    }
    render(){
        const {classes,name,background,showingFullPalette} = this.props;
        return(
            <CopyToClipboard text={this.props.background} onCopy={this.changeCoptStates}>
                <div style={{background:background}} className={classes.colorBox}>
                    <div style={{background:background}} className={`${classes.copyOverlay} ${this.state.copied && classes.showOverlay}`}>
                    </div>
                    <div className={`${classes.copyMessage} ${this.state.copied && classes.showMessage}`}>
                        <h1>copied!</h1>
                        <p className={classes.copyText}>{this.props.background}</p>
                    </div>
                    <div >
                        <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showingFullPalette && (
                        <Link to={`/palette/${this.props.paletteId}/${this.props.id}`} onClick={e=>e.stopPropagation}>
                            <span className={classes.seeMore}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}
export default withStyles(styles)(ColorBox)