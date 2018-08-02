import React, {Component} from 'react';
import TimerCard from './TimerCard.js'
import TimerForm from './TimerForm';
import ToggableTimer from './ToggableTimer.js';
// import ToggableAddTimer from './ToggableAddTimer.js';


class TimerList extends Component {

    timers = this.props.timers.map((timer) => {
        <ToggableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        />
    })

    render() {
        return(
            <div className="timerListContainer">
                <TimerCard />
                <TimerForm />
                {/* <ToggableAddTimer /> */}
            </div>
        );   
    }
}

export default TimerList