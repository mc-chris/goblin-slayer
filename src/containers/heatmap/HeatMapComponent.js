import React, { Component } from 'react';

class HeatMapComponent extends Component {
    state = { }

    componentDidMount() {
        // let foo = this.props.data;
    }

    render() {

        let foo = this.props.data;

        return ( 
        <div>
            { JSON.stringify(foo) }
        </div>
        );
    }
}
 
export default HeatMapComponent;