import React, { Component } from 'react';
import Headers from "./components/headers"
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {getbuttondetail} from "./actions/index";
import Body from "./components/body"






class App extends Component {

componentDidMount(){
  this.props.getbuttondetail()
}

  render(props) {




    return (
      <div>
       <Headers allitems={this.props.allitems} />
 <Body />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    allitems:state.allitems.latest
  }
}

function mapDispatchToProps(dispatch){
 return bindActionCreators({getbuttondetail},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(App)

