import React, {Component} from 'react';
import './App.css'
import ToggableTimer from './ToggableTimer';
import Timer from './Timer.js';

class TimerCard extends Component {

    render() {
        return(
            <div className="timerCard">
                <div className="titleDiv">
                    <h3>Title</h3>
                    <h5>Subtitle</h5>
                </div>
                <div className="timeDiv">
                    <p>03:20:00</p>
                </div>
                <div className="actionDiv">
                    <i className="far fa-trash-alt"></i>
                    <i className="far fa-edit"></i>
                    <button>Delete</button>
                    <button onClick={this.editTimer}>Edit</button>
                    <ToggableTimer />
                </div>
                <div>
                    <button className="startBtn" onClick={this.startBtn}>Start</button>
                    <Timer />
                </div>
            </div>
        );
    } 
}

export default TimerCard