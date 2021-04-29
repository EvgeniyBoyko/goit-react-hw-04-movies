import {Component} from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
// import styles from "./Profile.module.css";
class Filmoteka extends Component {
  state = {
    films: [],
    error: null,
    isLoading: false,
  };
  
  async componentDidMount() {
    this.setState({isLoading: true})
    const KEY = "923c2cf88ec4338da74c768a045101f0";
    await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`)
      .then(({ data }) => this.setState({
        films: data,
        isLoading: false
      }))
      .catch(error => this.setState({error}))
      
  };
// films.results.map(({ title, id }) => <li key={id}>{title}</li>)
  renderFilms = () => {
    const result = this.setState(({films}) => console.log(films))
    return result
  }

  render() {
    const { isLoading, films } = this.state;
    console.log(films);
    
    return (
      <div>
        <h1>Filmoteka</h1>
        {isLoading && <p>Loading...</p>}
        <ul>
          {/* <li>{this.renderFilms}</li> */}
        </ul>
      </div>
      
    );
  };
};

export default Filmoteka;

