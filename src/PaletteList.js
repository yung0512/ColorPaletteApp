import {Link} from 'react-router-dom'
import React ,{Component} from 'react'
import MiniPalette from './MiniPalette'
class PaletteList extends Component {
    render(){
        const {palettes} = this.props
        return(
            <div>
                <h1>PaletteList!</h1>
                {palettes.map(palette => (
                                    <p>
                                        <MiniPalette {...palette}/>
                                    </p>))}

            </div>
        )
    }
}
export default PaletteList;