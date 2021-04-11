import React ,{Component} from 'react'
import {TransitionGroup,CSSTransition} from "react-transition-group"
import {Route,Switch} from 'react-router-dom'
import Palette from './Palette'
import './App.css';
import NewPaletteForm from './NewPaletteForm'
import Page from './Page'
import PaletteList from './PaletteList'
import SingleColorPalette from './SingleColorPalette'
import {generatePalette} from './ColorHelpers'
import seedsColors from './seedsColor'
class App extends Component {
  constructor(props){
    super(props)
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
    this.state = {
      palettes:savedPalettes || seedsColors
    }
    this.savePalette = this.savePalette.bind(this)
    this.findPalette = this.findPalette.bind(this)
    this.deletePalette = this.deletePalette.bind(this)
  }
  findPalette(id){
    return this.state.palettes.find(function(palette){
      return palette.id === id
    })
  }
  savePalette(newPalette){
    this.setState({
      palettes:[...this.state.palettes,newPalette]  
    },this.syncLocalStorage)
  }
  deletePalette(id){
    this.setState(
      st=>({
        palettes:st.palettes.filter(palette=>palette.id!==id)
      }),
      this.syncLocalStorage
    )
  }
  syncLocalStorage(){
      window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))
  }
  render(){
    return (
      <Route render={({location})=>(
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='page' timeout={500}>
            <Switch location={location}>
              <Route 
                exact path="/palette/new" 
                render={(routeProps)=>
                    <div className='page'>
                      <NewPaletteForm 
                        savePalette={this.savePalette} {...routeProps} 
                        palettes={this.state.palettes}/>
                    </div>} 
                      />
              <Route exact path="/"
                render={(routeProps)=>
                  <Page>
                      <PaletteList 
                        palettes={this.state.palettes} {...routeProps} 
                        deletePalette={this.deletePalette}
                      />
                  </Page>
                    }
              />
              <Route 
                  exact path="/palette/:id" 
                  render={(routeProps)=>(
                    <Page>
                        <Palette 
                          palette={generatePalette(this.findPalette(routeProps.match.params.id))}
                        />
                    </Page>)
                      }
                />
              <Route 
                path="/palette/:paletteId/:colorId" 
                render={(routeProps)=>
                      <Page>
                        <SingleColorPalette 
                          colorId={routeProps.match.params.colorId} 
                          palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                        />
                      </Page>
                      }
              />
              <Route 
                render={(routeProps)=>
                  <Page>
                      <PaletteList 
                        palettes={this.state.palettes} {...routeProps} 
                        deletePalette={this.deletePalette}
                      />
                  </Page>
                    }/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>)}
      />
      );
  }
}

export default App;
