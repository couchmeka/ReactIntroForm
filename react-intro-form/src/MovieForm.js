import React, { Component } from 'react';



  class MovieForm extends Component {

    constructor(props){
        super(props); //inheriting props from component.
        
    
        //set the initial state of the Form
        this.initalState = {
            title:'',
            actors: [],
            plot: '',
            imdbRating: '',
            director:'',
            year: '',
            dateAdded: Date()
        };

        //set our initial state to state.
        this.state = this.initalState;
    }

    //runs after the components are rendered

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
// runs after when component is destroyed
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      //local helper function to get time
      tick() {
        this.setState({
          dateAdded: Date()
        });
      }


    handleChange = event => {
        //get name and value out of target (element that changed)
        const{name, value} = event.target;
        this.setState ({
            [name]: value
        })
    }

    onFormSubmit = (event) => {

        //standard for onSubmits
        event.preventDefault();
    
        //set the current state of our form to the handle submit
        this.props.addMovie(this.state);
    
         //clear inputs by setting form to initial state and updates the date

         
        this.setState(
        
            this.initalState = {
                title:'',
                actors: '',
                plot: '',
                imdbRating: '',
                director:'',
                year: '',
                dateAdded: Date()
            }

            
        );
    
       



        

        }

    

    render(){
        const { title, actors, plot, imdbRating,director,year,dateAdded } = this.state;
        return(
            <form onSubmit={this.onFormSubmit}>
            <label htmlFor="title">title: </label><br/>
            <input type="text" id="title" name="title" value={title} onChange={this.handleChange}/><br/>
            <label htmlFor="actor">actors: </label><br/>
            <input type="text" id="actors" name="actors" value={actors} onChange={this.handleChange}/><br/>
            <label htmlFor="plot">plot: </label><br/>
            <input type="text" id="plot" name="plot" value={plot} onChange={this.handleChange}/><br/>
            <label htmlFor="imdbRating">imdbRating: </label><br/>
            <input type="text" id="imdbRating" name="imdbRating" value={imdbRating} onChange={this.handleChange}/><br/>
            <label htmlFor="director">director: </label><br/>
            <input type="text" id="director" name="director" value={director} onChange={this.handleChange}/><br/>
            <label htmlFor="year">year: </label><br/>
            <input type="text" id="year" name="year" value={year} onChange={this.handleChange}/><br/>
            <label htmlFor="dateAdded">dateAdded: </label><br/>
            <input type="text" id="dateAdded" name="dateAdded" value={dateAdded} onChange={this.handleChange}/><br/>

            <button type="submit">
                Submit
            </button>
        </form> 
        )
    }

  }


  export default MovieForm