import React,{Component} from 'react'
import './ColorBox.css'
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
        const {name,background} = this.props;
        return(
            <CopyToClipboard text={this.props.background} onCopy={this.changeCoptStates}>
                <div style={{background:background}} className="ColorBox">
                    <div style={{background:background}} className={`copy-overlay ${this.state.copied && 'show'}`}>
                    </div>
                    <div className={`copy-msg ${this.state.copied && 'show'}`}>
                        <h1>copied!</h1>
                        <p>{this.props.background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                        <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    <Link to={`/palette/${this.props.paletteId}/${this.props.id}`} onClick={e=>e.stopPropagation}>
                        <span className="see-more">More</span>
                    </Link>
                </div>
            </CopyToClipboard>
        )
    }
}
export default ColorBox