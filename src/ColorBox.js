import React,{Component} from 'react'
import './ColorBox.css'
import chroma from 'chroma-js'
import {Link} from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard'

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
        const {name,background,showLink} = this.props;
        const isDarkColor = chroma(background).luminance() <= 0.08;
        const isLightColor = chroma(background).luminance() > 0.7;
        return(
            <CopyToClipboard text={this.props.background} onCopy={this.changeCoptStates}>
                <div style={{background:background}} className="ColorBox">
                    <div style={{background:background}} className={`copy-overlay ${this.state.copied && 'show'}`}>
                    </div>
                    <div className={`copy-msg ${this.state.copied && 'show'}`}>
                        <h1>copied!</h1>
                        <p className={`${isLightColor&&"dark-text"}`}>{this.props.background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                        <span className={isDarkColor &&"light-text"}>{name}</span>
                        </div>
                        <button className={`copy-button ${isLightColor&&"dark-text"}`}>Copy</button>
                    </div>
                    {showLink && (
                        <Link to={`/palette/${this.props.paletteId}/${this.props.id}`} onClick={e=>e.stopPropagation}>
                            <span className={`see-more ${isLightColor&&"dark-text"}`}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}
export default ColorBox