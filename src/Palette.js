import React,{Component} from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import './Palette.css'
import PaletteFooter from './PaletteFooter'
class Palette extends Component{
    constructor(props){
        super(props)
        this.state = {
            level:500,
            format:'hex'
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }
    changeLevel(level){
        this.setState({
            level:level
        })
    }
    changeFormat(val){
        this.setState({
            format:val
        })
    }
    render(){
        const {colors , paletteName,emoji,id} = this.props.palette;
        const {level,format} = this.state;
        const colorBoxes = colors[level].map(color=>(
            <ColorBox 
                showingFullPalette={true}
                key={color.id} 
                id={color.id} 
                background={color[format]} 
                name={color.name}
                paletteId={id}
            />
        ))
        return(
            <div className="Palette">
                <Navbar handleChange={this.changeFormat} level={level} changeLevel={this.changeLevel} showingShades={true}/>
                <div className="Palette-colors">
                {/*color boxes*/}
                {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}
export default Palette;