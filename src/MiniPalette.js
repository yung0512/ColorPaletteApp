import React,{PureComponent} from 'react'
import {withStyles} from '@material-ui/styles'
import styles from './styles/MiniPaletteStyles'
import DeleteIcon from '@material-ui/icons/Delete'

class MiniPalette extends PureComponent{
    constructor(props){
        super(props)
        this.deletePalette = this.deletePalette.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    deletePalette(e){
        e.stopPropagation();
        this.props.openDialog(this.props.id)
    }
    handleClick(){
        this.props.handleClick(this.props.id)
    }
    render(){
        const {classes,paletteName,emoji,colors} = this.props;//the material ui will generate a classes object each class name has identical key value like class id
        const miniColorBoxes = colors.map(color=>(
            <div 
                className={classes.miniColor} 
                style={{backgroundColor:color.color}}
                key={color.name}
            />
        ))
        return(
            <div 
                className={classes.root} 
                onClick={this.handleClick}
            >
                <div className={classes.delete}>
                    <DeleteIcon 
                        onClick={this.deletePalette}
                        className={classes.deleteIcon} 
                        style={{transition:"all 0.3s ease-in-out"}}
                    />
                </div>
                <div className={classes.colors}>{miniColorBoxes}</div>
                <h5 className={classes.title}>{paletteName}
                    <span className={classes.emoji}>{emoji}</span >
                </h5>           
            </div>
        );
    }
}
export default withStyles(styles)(MiniPalette);