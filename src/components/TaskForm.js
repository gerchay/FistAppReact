import React, {Component} from 'react';

export default class TaskForm extends Component {
    
    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title,this.state.description)
        e.preventDefault(); // Cambia el comportamiento por defento 
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Write a task" onChange={this.onChange} value={this.state.title} name="title"/>
                <br/>
                <br/>
                <textarea placeholder="Write a Description" onChange={this.onChange} value={this.state.description} name="description"/>
                <br/>
                <button type="submit">Save a task</button>
            </form>
        )
    }
}