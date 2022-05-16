import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import withRouter from "./withRouter";
class MovieDetails extends React.Component{
    constructor(){
        super();
        this.state={
            movie:null
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8081/api/movie/viewMovie/"+this.props.params.id).then(resp=> this.setState({
            movie:resp.data

        }))
    }
    render(){
        return(
            <div>
                <h2>Movie Details</h2>
                {
                    this.state.movie !== null &&

                    <div>
                        <p>ID: {this.state.movie.id}</p>
                        <p>TITLE: {this.state.movie.title}</p>
                        <p>DURATION: {this.state.movie.title}</p>
                        </div>
                }
                 <div>
                <Link to ="/FetchMovie">Back To MovieList</Link>
            </div>
            </div>
        )
    }

}
export default withRouter (MovieDetails);