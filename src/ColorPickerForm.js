import React ,{Component} from 'react'
import Button from '@material-ui/core/Button';
import {ChromePicker} from 'react-color'
import {ValidatorForm,TextValidator} from "react-material-ui-form-validator"

class ColorPickerForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentColor:"teal",
            newColorName:""
        }
        this.updateCurrentColor = this.updateCurrentColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        ValidatorForm.addValidationRule('isColorNameUnique', value => 
            this.props.colors.every(
                ({name}) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', value => 
            this.props.colors.every(
                ({color}) => color !== this.state.currentColor
            )
        );
      }
    updateCurrentColor(newColor){
        this.setState({
            currentColor:newColor.hex
        })
    }
    handleChange(evt){
          
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    handleSubmit(){
        const newColor = {
            color:this.state.currentColor,
            name:this.state.newColorName
        }
        this.props.addColor(newColor)
    }
    render(){
        const {paletteFull} = this.props
        const {currentColor, newColorName} = this.state
        return(
            <div>
                <ChromePicker 
                    color={currentColor}
                    onChangeComplete={this.updateCurrentColor}
               /> 
                <ValidatorForm onSubmit={this.handleSubmit}>
                <TextValidator 
                    name="newColorName"
                    value={newColorName} 
                    onChange={this.handleChange}
                    validators={['required','isColorNameUnique','isColorUnique']}
                    errorMessages={["this field is required","Color name must be unique","Color are already used"]}
                    />
              
                <Button 
                    disabled={paletteFull}
                    variant="contained" 
                    color='primary' 
                    type="submit"
                    style={{backgroundColor:paletteFull?"grey":currentColor}}
                 >
                    {paletteFull?"Palette Full":"Add color"}
                </Button>
               </ValidatorForm> 
            </div>
        )
    }
}
export default ColorPickerForm;