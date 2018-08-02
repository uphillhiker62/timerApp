import React, {Component} from 'react';
import TimerCard from './TimerCard';

class ToggableAddTimer extends Component {


    render() {
        return(
            <div >
                <button className="addBtn" onClick={this.addNewTimer}>+</button>
            </div>
        ); 
        
    }

    addNewTimer = () => {
        console.log("works");
        return (
            <div>
                <TimerCard />
            </div>
        );
    }
}

export default ToggableAddTimer