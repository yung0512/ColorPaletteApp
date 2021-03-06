import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {withStyles} from "@material-ui/styles"
import styles from './styles/ColorBoxStyles'
import classNames from 'classnames'

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
        const {copied} = this.state
        const {classes,name,background,showingFullPalette,paletteId,id} = this.props;
        return(
            <CopyToClipboard text={background} onCopy={this.changeCoptStates}>
                <div 
                    style={{background:background}} 
                    className={classes.colorBox}
                >
                    <div 
                        style={{background:background}} 
                        className={classNames(classes.copyOverlay, {
                            [classes.showOverlay]: copied
                        })}
                    >
                    </div>
                    <div 
                        className={classNames(classes.copyMessage, {
                            [classes.showMessage]: copied
                        })}
                    >
                        <h1>copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div >
                        <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showingFullPalette && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e=>e.stopPropagation}>
                            <span className={classes.seeMore}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}
export default withStyles(styles)(ColorBox)