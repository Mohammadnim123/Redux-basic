import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increase,decrease} from './actions/actionsCreators'

export class App extends Component {


  render() {
    console.log(this.props);
    return (
      <div>
          <button onClick={this.props.increase}>+</button>
          <p>current value is {this.props.count}</p>

          <button onClick={this.props.decrease}>-</button>
      </div>
    )
  }
}



function mapStateToProps(state){
  return{
    count:state.count
  }
}

function mapDispatchToProps(dispatch){
return{
  increase : ()=>dispatch(increase()),
  decrease : ()=>dispatch(decrease())
}
}



export default connect(mapStateToProps,mapDispatchToProps)(App)

