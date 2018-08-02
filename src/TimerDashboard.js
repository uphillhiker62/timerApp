import React, {Component} from 'react';
import './App.css'
import TimerList from './TimerList';
import ToggableAddTimer from './ToggableAddTimer';

class TimerDashboard extends Component {

    state = {
        timers: [
            {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: Math.floor(Math.random() * 1000000),
                elapsed: 5456099,
                runningSince: Date.now(),
            },
            {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: Math.floor(Math.random() * 1000000),
                elapsed: 1273998,
                runningSince: null,
            },
            ],
    };

    render() {
        return(
            <div className="dashboardContainer">
                <TimerList />
            
                <div className='ui three column centered grid'>
                    <div className='column'>
                    <ToggableAddTimer
                    timers={this.state.timers}
                    />
                    </div>
                </div>
          </div>
        );
    }
}

export default TimerDashboard