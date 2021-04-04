import Palette from './Palette'
import './App.css';
import React ,{Component} from 'react'
import PaletteList from './PaletteList'
import {Route,Switch} from 'react-router-dom'
import {generatePalette} from './ColorHelpers'
import seedsColors from './seedsColor'
import { FindReplaceTwoTone } from '@material-ui/icons';

class App extends Component {
  findPalette(id){
    return seedsColors.find(function(palette){
      return palette.id === id
    })
  }
  render(){
    return (
      <Switch>
          <Route exact path="/" render={(routeProps)=><PaletteList palettes={seedsColors} {...routeProps}/>}/>
          <Route 
              exact path="/palette/:id" 
              render={(routeProps)=>(<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>)}
            />
      </Switch>
    // <div className="App">
    //     <Palette palette={generatePalette(seedsColors[4])}/>
    // </div>  
      );
  }
}

export default App;
