import _ from 'lodash';
import React, { Component } from 'react';
import HeatMap from 'react-heatmap-grid';


const xLabels = new Array(24)
    .fill(0)
    .map((_, i) => `${i}`);
const xLabelsVisibility = new Array(24)
    .fill(0)
    .map((_, i) => (i % 2 === 0
        ? true
        : false));
const yLabels = ["Sun", "Mon", "Tue"];
const data = new Array(yLabels.length)
    .fill(0)
    .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100)));

class HeatMapComponent extends Component {
    state = {}

    componentDidMount() {
        // let foo = this.props.data;
    }

    render() {

        let foo = this.props.data;
        let xLabels = new Array(12)
            .fill(0)
            .map((_, i) => `${i + 1}`);

        let xLabelsVisibility = new Array(12)
            .fill(0)
            .map((_, i) => (i % 2 === 0
                ? true
                : false));

        let min = _.reduce(foo, (min, x) => min < x['variance'] ? min : x['variance']);
        let max = _.reduce(foo, (max, x) => max > x['variance'] ? max : x['variance']);

        // let yLabels = _.uniq(_.map(foo, x => `${x['year']}` ));
        let baz = _.uniq(_.map(foo, x => `${x['year']}`));
        let yLabels = baz.slice(1,24);

        let data = new Array(yLabels.length)
    .fill(0)
    .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100)));
        // let yLabels = _.map(foo, x => x['year']);
        // let yLabels = _.uniq(_.map(foo, x => x['year']));
        // let data = _.map(foo, x => x['variance']);
        // let dataz = new Array(yLabels.length)
        // .fill(0)
        // .map(() =>
        //   new Array(xLabels.length).fill(0).map(() => _.map(foo, x => x['variance']))
        // );

        // console.log(_.uniq(_.map(foo, x => x['year'])));
        console.log('data:', foo);
        console.log('ylabels:', yLabels);
        // console.log('baz:', baz);
        // console.log('dataz:', _.map(foo, x => x['variance']));
        // console.log('dataz:', dataz);
        return (
            <div>
                <HeatMap
                    xLabels={xLabels}
                    yLabels={yLabels}
                    xLabelsLocation={"bottom"}
                    xLabelsVisibility={xLabelsVisibility}
                    xLabelWidth={50}
                    data={data}
                    squares
                    onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
                    cellStyle={(background, value, min, max, data, x, y) => ({
                        background: `rgb(66, 86, 244, ${1 - (max - value) / (max - min)})`,
                        fontSize: "11px"
                    })}
                    cellRender={value => value && `${value}%`} />
                {/* { JSON.stringify(foo) } */}
            </div>
        );
    }
}

export default HeatMapComponent;