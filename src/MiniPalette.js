import React from 'react'
import {withStyles} from '@material-ui/styles'
const styles = {
    root:{
        background:"white",
        borderRadius:'5px',
        padding:'o.5rem',
        position:'relative'
    },
    colors:{

    },
    title:{

    },
    emoji:{
        
    }
}
function MiniPalette(props){
    const {classes,name,emoji} = props;//the material ui will generate a classes object each class name has identical key value like class id
    return(
        <div className={classes.root}>
            <div className={classes.colors}>
                <h5 className={classes.title}>{name}<span className={classes.emoji}>{emoji}</span ></h5>
            </div>
        </div>
    );
}
export default withStyles(styles(MiniPalette));