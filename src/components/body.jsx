import React, { Component } from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux"
import {getslick,firstpart} from "../actions/index";
import Firstfloor from "./floors/firstfloor"

class body extends Component {

    componentDidMount(){
        this.props.getslick();
        this.props.firstpart();
    }




    slickimages = ({slickroll})=>{
    if(slickroll.slick){
        return(
            slickroll.slick.map((itm,index)=>{
               
        return(
            <Link key={itm.id}> <div style={{width:"100%",height:"100vh"}}>
            <img src={`../images/slick/${itm.slick[0]}`} alt="" />
         </div>
         </Link>
        )
            })
        )
    }

    }
 

    render() {

     var settings = {
            dots: true,
        
            infinite: true,
            arrows:false,
            autoplay: true,
            autoplaySpeed: 2000,
         
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div style={{width:"100%",height:"100vh",background:"white",position:"relative",OverflowX:"hidden"}}>
                <Slider {...settings} >
              {this.slickimages(this.props)}
                </Slider>
                <div style={{width:"100%",minHeight:"100vh",position:"absolute",top:"390px"}} className="trans"></div>
                <div style={{width:"100%",minHeight:"100vh",position:"absolute",top:"35%",background:"transparent"}}>

                    <Firstfloor firstpartroll={this.props.slickroll.firstpart} />


                </div>
           </div>
           




     
        );
    }
}

function mapStateToProps(state){
    
return {
             slickroll:state.allitems
            
}
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({getslick,firstpart},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(body);
