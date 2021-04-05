import React,{Component} from 'react'
import './ColorBox.css'
import chroma from 'chroma-js'
import {Link} from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {withStyles} from "@material-ui/styles"


const styles = {
    colorBox:{
        width:"20%",
        height:props=>props.showingFullPalette?"25%":"50%",
        margin:"0 auto",
        display: "inline-block",
        position:"relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button":{
            opacity:"1",
        }
    },
    copyText:{
        color: props => chroma(props.background).luminance() >= 0.7 ? "black":"white"
    },//dynamically generate styles
    colorName:{
        color:props =>chroma(props.background).luminance() <= 0.08 ?"white":"black"
    },
    seeMore:{
        color: props=>chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.5)":"white",
        background: 'rgba(255,255,255,0.3)',
        position: 'absolute',
        border: 'none',
        right: '0',
        width:'60px',
        height:'30px',
        textAlign: 'center',
        bottom:'0px',
        lineHeight:'30px',
        textTransform: 'uppercase'
    },
    copyButton:{
        color: props=>chroma(props.background).luminance()>= 0.7 ? "rgba(0,0,0,0.5)":"white" ,
        width:"100px",
        height:"30px",
        position: "absolute",
        display: "inline-block",
        top:"50%",
        opacity:"0",
        left:"50%",
        marginLeft: "-50px",
        marginTop: "-30px",
        textAlign: "center",
        outline:"none",
        backgroundColor:"rgba(255,255,255,0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none"
    }
}
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
                    <div style={{background:background}} className={`copy-overlay ${this.state.copied && 'show'}`}>
                    </div>
                    <div className={`copy-msg ${this.state.copied && 'show'}`}>
                        <h1>copied!</h1>
                        <p className={classes.copyText}>{this.props.background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
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