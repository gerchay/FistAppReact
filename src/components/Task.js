import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Task extends Component {

    StyleCompleted() {
        return {
            fontSize: 20,
            color: this.props.task.done ? 'grey' : 'black',
            textDecoration: this.props.task.done ? 'line-through' :'none'
        }
    }

    render(){

        const {task} = this.props;

        return (
        <p style={this.StyleCompleted()}>
            {task.title} - 
            {task.description} - 
            {task.done} --
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this,task.id)} />
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this,task.id)} > X </button>
        </p>
        );
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: 18,
    background: '#ea2027',
    color: '#fff',
    border:  'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;