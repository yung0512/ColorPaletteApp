import React from 'react'
import {withStyles} from '@material-ui/styles'
const styles = {
    root:{
        background:"white",
        border:'1px solid',
        borderRadius:'5px',
        padding:'0.5rem',
        position:'relative',
        overflow:'hidden',
        "&:hover":{
            cursor:"pointer"
        }
    },
    colors:{
        backgroundColor:"grey"
    },
    title:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        margin:"0",
        color:"black",
        paddingTop:'0.5rem',
        fontSize:"1rem",
        position:"relative"
    },
    emoji:{
       marginLeft:"0.5rem",
       fontSize:"1.5rem" 
    }
}
function MiniPalette(props){
    const {classes,paletteName,emoji} = props;//the material ui will generate a classes object each class name has identical key value like class id
    return(
        <div className={classes.root}>
            <div className={classes.colors}>
                <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span ></h5>
            </div>
        </div>
    );
}
export default withStyles(styles)(MiniPalette);