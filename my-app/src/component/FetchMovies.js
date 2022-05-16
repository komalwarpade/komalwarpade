import React from "react";
import axios from 'axios';
import DisplayMovie from "./DisplayMovie";

export default class FetchMovies extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8081/api/movie/findall").then(resp => this.setState({
            movies: resp.data
        }));

    }
    render() {
        return (
            <DisplayMovie mlist = {this.state.movies}/>
        )
    }
}
        
    