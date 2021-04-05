import React,{Component} from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import PaletteFooter from './PaletteFooter'
import {withStyles} from '@material-ui/styles'

const styles = {
    Palette:{
        height:"100vh",
        display:"flex",
        flexDirection:"column"
    },
    colors:{
        height:"90%"
    },
    goBack:{
        width:"20%",
        height:"50%",
        margin:"0 auto",
        display: "inline-block",
        position:"relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        opacity:"1",
        backgroundColor: "black",
        "& a":{
            width:"100px",
            height:"30px",
            position: "absolute",
            display: "inline-block",
            top:"50%",
            left:"50%",
            marginLeft:"-50px",
            marginTop:"-30px",
            textAlign: "center",
            outline:"none",
            backgroundColor: "rgba(255,255,255,0.3)",
            fontSize: "1rem",
            lineHeight: "30px",
            color: "white",
            textTransform: "uppercase",
            border: "none",
            textDecoration: "none",
        }
    }
}
class SingleColorPalette extends Component {
    constructor(props){
        super(props)
        this._shades = this.gatherShade(this.props.palette,this.props.colorId)
        this.state = {
            format:"hex"
        }
        this.changeFormat = this.changeFormat.bind(this)
    }
    gatherShade(palette,colorToFilterBy){
        let shades = []
        let allColors = palette.colors;
        for(let key in allColors ){
           shades = shades.concat(
               allColors[key].filter(color => color.id===colorToFilterBy)
           )
        }
        return shades.slice(1)
    }
    changeFormat(val){
        this.setState({
            format:val
        })
    }
    render(){
        const {classes} = this.props
        const {paletteName,emoji,id} = this.props.palette
        const colorBoxes = this._shades.map(color=>(
            <ColorBox 
                key={color.name} 
                name={color.name} 
                background={color[this.state.format]} 
                showingFullPalette={false}/>
        ))
        return(
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeFormat} showingShades={false}/>
                <h1>single color component</h1>
                <div className={classes.colors}> {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`} >Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>   
            </div>
        )
    }
}
export default withStyles(styles)(SingleColorPalette)