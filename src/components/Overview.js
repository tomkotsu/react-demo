/* eslint-disable */
import React from 'react';

export default class Overview extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        return (
            <ul>
               {this.props.tasks.map((task) => {
                    return <li key={task}>{task}</li>
                })}
            </ul>
        )
    }
}