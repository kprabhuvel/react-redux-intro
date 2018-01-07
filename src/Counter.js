import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

    // state = { count: 0 }

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT'});
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <button onClick={this.decrement}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

// export default Counter;
export default connect(mapStateToProps)(Counter);
