import React, { Component } from 'react';
import './stylesheets/App.css';
import CardPage from './components/CardPage';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      json: {
        palette: 1,
        typography: 2,
        name: "María García",
        job: "Front-end developer",
        phone: "+34 666666666",
        email: "mariagar@example.com",
        linkedin: "mariagar",
        github: "mariagar",
        photo: "data:image/png;base64,2342ba...",
        skills: ["HTML", "Sass", "JavaScript"]
      }
    };
    this.shareTitle = { comparte: 'comparte', rellena: 'rellena', diseña: 'diseña' }
    this.titleDesign = { colors: "colores", fonts: "fuentes" };
    this.icono = { movil: 'rrss fas fa-mobile-alt', email: 'rrss far fa-envelope', linkedin: 'rrss fab fa-linkedin-in', github: 'rrss fab fa-github-alt' }
    this.changeForm = this.changeForm.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount(){
    this.verifyLocalStorage();
    this.getskills();
  }
  verifyLocalStorage() {
    if (localStorage.getItem('stateStorage')) {
      const stateStorage = JSON.parse(localStorage.getItem('stateStorage'));
      const json = stateStorage.json;
      const skills = stateStorage.skills;
      this.setState({
        json: json
      })
      this.setState({
        skills: skills
      })
    }
  }
  getskills() {
    fetch(
      'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json'
    )
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        const habilidades = json.skills;
        this.setState({
          skills: habilidades
        })
      })
  }

  changeForm(event) {
    const guilty = event.currentTarget;
    if (guilty.getAttribute('id') === 'name') {
      this.setState((state) => {
        const j = {
          ...this.state.json,
          name: guilty.value
        }
        return (
          { json: j }
        )
      })
    }
    else if (guilty.getAttribute('id') === 'position') {
      this.setState((state) => {
        const j = {
          ...this.state.json,
          job: guilty.value
        }
        return (
          { json: j }
        )
      })
    }
    else if (guilty.getAttribute('type') === 'email'){
      this.setState((state) => {
        const j = {
          ...this.state.json,
          email: 'mailto:' + guilty.value
        }
        return (
          { json: j }
        )
        
      })
    }
    else if (guilty.getAttribute('type') === 'tel'){
      this.setState((state) => {
        const j = {
          ...this.state.json,
          phone: 'tel:' + guilty.value
        }
        return (
          { json: j }
        )
        
      })
    }
    else if (guilty.getAttribute('type') === 'linkedin'){
      this.setState((state) => {
        const j = {
          ...this.state.json,
          linkedin: 'www.linkedin.com/in/' + guilty.value
        }
        return (
          { json: j }
        )
        
      })
    }
    else if (guilty.getAttribute('type') === 'github'){
      this.setState((state) => {
        const j = {
          ...this.state.json,
          github: 'github.com/' + guilty.value
        }
        return (
          { json: j }
        )
      })
    }
    this.saveStorage();
  }
  saveStorage(){
    localStorage.setItem("stateStorage", JSON.stringify(this.state));
  }

  reset(){
    const empty = 
    {
      skills: [],
      json: {
      palette: 1,
      typography: 2,
      name: "María García",
      job: "Front-end developer",
      phone: "+34 666666666",
      email: "mariagar@example.com",
      linkedin: "mariagar",
      github: "mariagar",
      photo: "data:image/png;base64,2342ba...",
      skills: ["HTML", "Sass", "JavaScript"]
    }
  }
  this.setState({
    skills: empty.skills
  })
  this.setState({
    json: empty.json
  })
  localStorage.clear();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/CardPage' render={() => <CardPage footerText={this.state.copyRight} shareTitle2={this.shareTitle} titleDesign={this.titleDesign} iconApp={this.icono} skills={this.state.skills} form={this.state.json} changeForm={this.changeForm} reset={this.reset} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
