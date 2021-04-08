import React ,{Component} from 'react'
import classNames from "classnames";
import PaletteFormNav from "./PaletteFormNav"
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DraggableColorList from './DraggableColorList'
import ColorPickerForm from './ColorPickerForm'
import {arrayMove} from 'react-sortable-hoc'

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    display:"flex",
    alignItems:"center"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height:"calc(100vh - 64px)",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  container: {
    width:"90%",
    height:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  buttons:{
    width:"100%",
  },
  button:{
      width:"50%"
  }
});
class NewPaletteForm extends Component {
      static defaultProps = {
        maxColors:20
      }
      constructor(props){
          super(props)
          this.state = {
              open:true,
              currentColor:"teal",
              colors:this.props.palettes[0].colors,
              newColorName:"",
              newPaletteName:""
          }
          this.deleteBox = this.deleteBox.bind(this)
          this.addNewColor = this.addNewColor.bind(this)
          this.handleChange = this.handleChange.bind(this)
          this.savePalette = this.savePalette.bind(this)
          this.clearColors = this.clearColors.bind(this)
          this.randomColor = this.randomColor.bind(this)
      }  
      handleDrawerOpen = () => {
        this.setState({ open: true });
      };
      handleDrawerClose = () => {
        this.setState({ open: false });
      };
      addNewColor(newColor){
          this.setState({
              colors:[...this.state.colors,newColor],
              newColorName:""
          })
      }
      handleChange(evt){
          
          this.setState({
              [evt.target.name]:evt.target.value
          })
      }
      deleteBox(colorName){
        this.setState({
            colors:this.state.colors.filter(color=>color.name!==colorName)
        })
      }
      savePalette(newPalette){
        const Palette = {
            paletteName:newPalette.paletteName ,
            id:newPalette.paletteName.toLowerCase().replace(/ /g,"-"),
            colors: this.state.colors,
            emoji:newPalette.emoji
         }
        this.props.savePalette(Palette)
        this.props.history.push("/")
      }
      onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({colors}) => ({
          colors: arrayMove(colors, oldIndex, newIndex),
        }));
      };
      clearColors(){
          this.setState({
              colors:[]
          })
      }
      randomColor(){
          const allColors = this.props.palettes.map(p=>p.colors).flat()
          var rand = Math.floor(Math.random()*allColors.length)
          const randomColor = allColors[rand]
          this.setState({
              colors:[...this.state.colors,randomColor]
          })
          console.log(allColors)
      }
      render() {
        const { classes, maxColors,palettes} = this.props;
        const { open,colors } = this.state;
        const paletteFull = colors.length >= 20
        return (
            <div className={classes.root}>
                <PaletteFormNav 
                    open={open} 
                    palettes={palettes} 
                    handleSubmit={this.savePalette} 
                    handleDrawerOpen={this.handleDrawerOpen}
                />
                <Drawer
                    className={classes.drawer}
                    variant='persistent'
                    anchor='left'
                    open={open}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                    <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <div className={classes.container}>
                    <Typography variant="h4" gutterBottom>Design your palette</Typography>
                    <div className={classes.buttons}>
                        <Button 
                            className={classes.button}
                            onClick={this.clearColors}
                            variant="contained"
                            color="secondary"
                        >Clear Palette
                        </Button>
                        <Button 
                            className={classes.button}
                            disabled={paletteFull}
                            onClick={this.randomColor}
                            variant="contained" 
                            color="primary"
                        >Random Color
                        </Button>
                    </div>
                    <ColorPickerForm 
                        colors = {this.state.colors}
                        paletteFull={paletteFull} 
                        addColor={this.addNewColor}
                    />
                </div>
                </Drawer>
                <main
                className={classNames(classes.content, {
                    [classes.contentShift]: open
                })}
                >
                <div className={classes.drawerHeader} />
                    <DraggableColorList 
                        onSortEnd={this.onSortEnd}
                        axis="xy"
                        colors={this.state.colors} 
                        removeColor={this.deleteBox}
                    />
                    {/*draggablecolorlist*/}
                
                </main>
            </div>
        );
      
    }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);