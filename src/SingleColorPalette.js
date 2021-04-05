import React,{Component} from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import PaletteFooter from './PaletteFooter'
import {withStyles} from '@material-ui/styles'
import styles from './styles/PaletteStyles'

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