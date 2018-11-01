import React, { Component } from 'react';
import Search from './components/Search';
import Studio from './components/Studio';
import designers from './data/data.json'

import './scss/App.scss';

const imagePath = "images/"

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      studio : {},
      logo : {},
      cover : {},
      studios: []
    }

    this.getSelectedStudio = this.getSelectedStudio.bind(this);
  }

  getRandomStudio(){
    const studio = designers.designers[Math.floor(Math.random()*designers.designers.length)]
    this.setState({
      logo : this.getLogo(studio),
      cover : this.getCoverImage(studio)
    })
    
    return studio
  }

  getSelectedStudio(studio){
    const selected = this.state.studios.filter(item => item.name === studio);
    
      this.setState({
        logo : this.getLogo(selected[0]),
        cover : this.getCoverImage(selected[0]),
        studio : selected[0]
      })
  }

  getCoverImage(studio){
    return `${imagePath}${studio.name.replace(/\s+/g, '-').toLowerCase()}-cover-image.jpg`;
  }

  getLogo(studio){
    return `${imagePath}${studio.name.replace(/\s+/g, '-').toLowerCase()}-logo.jpg`;
  }

  componentDidMount() {
    this.setState({
      studio : this.getRandomStudio(),
      studios: designers.designers
    })
  }

  render() {
    return (
      <div className="App">
        <Search items={this.state.studios} update={this.getSelectedStudio}/>
        <Studio studio={this.state.studio} logo={this.state.logo} cover={this.state.cover}/>
      </div>
    );
  }
}

export default App;
