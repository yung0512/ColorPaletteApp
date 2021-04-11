import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {Picker} from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "paletteName",
      newPaletteName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.showemojiPicker = this.showemojiPicker.bind(this)
    this.savePalette = this.savePalette.bind(this)
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  showemojiPicker(){
      this.setState({
          stage:"emoji"
      })
  }
  savePalette(emoji){
    this.props.handleSubmit({
        paletteName:this.state.newPaletteName,
        emoji:emoji.native
      })
    this.setState({
      stage:""
    })
  }

  render() {
    const { newPaletteName,stage} = this.state;
    const {hideForm} = this.props
    console.log(this.state.stage)
    return (
        <div>
            <Dialog 
                open={stage==="emoji"}
            >
                <DialogTitle>
                  Choose a Palette Emoji
                </DialogTitle>
                <Picker 
                    onSelect={this.savePalette}
                />
            </Dialog>
            <Dialog
                open={ stage === "paletteName" }
                onClose={hideForm}
                aria-labelledby='form-dialog-title'
            >
                <DialogTitle id='form-dialog-title'>Choose a palette name</DialogTitle>
                <ValidatorForm
                    onSubmit={this.showemojiPicker}
                > 
                    <DialogContent>
                        <DialogContentText>
                            please enter a name for new palette, make sure it's unique  
                        </DialogContentText>
                        <TextValidator
                            label='Palette Name'
                            value={newPaletteName}
                            name='newPaletteName'
                            margin="normal"
                            onChange={this.handleChange}
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["Enter Palette Name", "Name already used"]}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={hideForm} color='primary'>
                            Cancel
                        </Button>
                        <Button variant='contained' color='primary' type='submit'>
                            Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>
    );
  }
}
export default PaletteMetaForm;