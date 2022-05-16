import React from 'react';
import axios from 'axios';
class AddMovie extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            duration: "",

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        const payload = {
            duration: this.state.duration,

            title: this.state.title


        }
        axios.post("http://localhost:8081/api/movie/add", payload).then(resp => alert("product saved"));

    }
    render() {
        return (
            <div>
                <div>
                    <label>Movie Name</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Duration</label>
                    <input type="number" name="duration" value={this.state.duration} onChange={this.handleChange} />
                </div>

                <div>
                    <button onClick={this.handleSubmit}>Save</button>
                </div>
            </div>
        )
    }
}
export default AddMovie;