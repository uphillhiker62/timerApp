import React, {Component} from 'react';
import './App.css'

class TimerForm extends Component {

    render() {
        return(
            <div className="timerFormContainer">
                <div className="titleSection">
                    <p>Title</p>
                    <input className="inputWidth"></input>
                </div>
                <div className="projectSection">
                    <p>Project</p>
                    <input className="inputWidth"></input>
                </div>
                <div className="buttonsSection">
                    <button className="createBtn">Create</button>
                    <button className="cancelBtn">Cancel</button>
                </div>
            </div>
        )  
    }
}

export default TimerForm 