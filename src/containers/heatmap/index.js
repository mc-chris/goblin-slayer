import { push } from 'connected-react-router';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement, decrementAsync, increment, incrementAsync } from '../../modules/counter';
import HeatMapComponent from './HeatMapComponent';

const HeatMap = props => (  
  <div>
    <h1>HeatMap</h1>
    <p>
      {/* <button style={{display: 'none'}} onClick={props.dataLoaded === true ? '' : props.decrementAsync()}></button> */}
      {/* { JSON.stringify(props.data.monthlyVariance) } */}
      <HeatMapComponent data={props.data.monthlyVariance}/>
    </p>

    {/* <p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p> */}
  </div>
)

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  data: counter.data,
  dataLoaded: counter.dataLoaded,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeatMap)
