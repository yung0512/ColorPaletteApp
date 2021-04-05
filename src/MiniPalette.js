import React from 'react'
import {withStyles} from '@material-ui/styles'
import styles from './styles/MiniPaletteStyles'

function MiniPalette(props){
    const {classes,paletteName,emoji,colors} = props;//the material ui will generate a classes object each class name has identical key value like class id
    const miniColorBoxes = colors.map(color=>(
        <div 
            className={classes.miniColor} 
            style={{backgroundColor:color.color}}
            key={color.name}
        />
    ))
    return(
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>{miniColorBoxes}</div>
            <h5 className={classes.title}>{paletteName}
                <span className={classes.emoji}>{emoji}</span >
            </h5>           
        </div>
    );
}
export default withStyles(styles)(MiniPalette);