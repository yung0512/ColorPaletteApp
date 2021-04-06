import Palette from './Palette'
import './App.css';
import NewPaletteForm from './NewPaletteForm'
import React ,{Component} from 'react'
import PaletteList from './PaletteList'
import SingleColorPalette from './SingleColorPalette'
import {Route,Switch} from 'react-router-dom'
import {generatePalette} from './ColorHelpers'
import seedsColors from './seedsColor'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      palettes:seedsColors
    }
    this.savePalette = this.savePalette.bind(this)
    this.findPalette = this.findPalette.bind(this)
  }
  findPalette(id){
    return this.state.palettes.find(function(palette){
      return palette.id === id
    })
  }
  savePalette(newPalette){
    this.setState({
      palettes:[...this.state.palettes,newPalette]
    })
  }
  render(){
    return (
      <Switch>
          <Route exact path="/palette/new" render={(routeProps)=><NewPaletteForm savePalette={this.savePalette} {...routeProps}/>} />
          <Route exact path="/" render={(routeProps)=><PaletteList palettes={this.state.palettes} {...routeProps}/>}/>
          <Route 
              exact path="/palette/:id" 
              render={(routeProps)=>(<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>)}
            />
          <Route path="/palette/:paletteId/:colorId" render={(routeProps)=><SingleColorPalette colorId={routeProps.match.params.colorId} palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}/>}/>
      </Switch>
    // <div className="App">
    //     <Palette palette={generatePalette(seedsColors[4])}/>
    // </div>  
      );
  }
}

export default App;
