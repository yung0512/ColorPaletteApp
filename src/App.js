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
  findPalette(id){
    return seedsColors.find(function(palette){
      return palette.id === id
    })
  }
  render(){
    return (
      <Switch>
          <Route exact path="/palette/new" render={()=><NewPaletteForm />} />
          <Route exact path="/" render={(routeProps)=><PaletteList palettes={seedsColors} {...routeProps}/>}/>
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
