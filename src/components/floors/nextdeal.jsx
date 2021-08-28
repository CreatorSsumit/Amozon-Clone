import React, {Component} from 'react';
import Slider from "react-slick";
import { connect} from"react-redux";
import {getnewlist} from "../../actions/index";
import {bindActionCreators} from "redux";
import { Link } from "react-router-dom";


class nextdeal extends Component {


getlatestdeals = ({nextdeal})=>{
   if(nextdeal){
    
       return(
 
  nextdeal.filter((itms,index)=>{
       
   return index < 6
}).map((itm,index)=>{
          
 
 return(
     
<div style={{background:"#efefef",height:"300px",width:"100%",padding:"10px",marginLeft:10,marginRight:10,position:"relative"}}>

         <div style={{width:"100%",height:"88%",display:"flex",justifyContent:"center",alignItems:"center",background:"#fff",flexDirection:"column"}}>
         <img src={`../images/firstfloor/floor3/${itm.firstname}`} alt="" style={{width:"50%"}}/>
         <h2 style={{fontSize:14,padding:"5px",marginTop:"10px",marginBottom:"10px"}}>💰{itm.price}-{itm.oldprice} </h2>
         </div>
              
</div>

) }) )  }}


    render() {

        var settings = {
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };


        return (
            <div style={{width:"100%",minHeight:"300px",background:"#efefef",position:"relative",marginTop:"10px"}}>

               <h2 style={{fontSize:20,padding:"20px 0px 0px 20px"}}>Top Deals  <Link style={{fontSize:15,marginLeft:20}}>See more</Link> </h2>
               


                <div style={{width:"100%",height:"300px",display:"flex"}}>
                
                {this.getlatestdeals(this.props)} 
               
                </div>
               
                </div>
        );
    }
}




function mapDispatchToProps(dispatch){
    return bindActionCreators({getnewlist},dispatch)
}

export default connect(null,mapDispatchToProps)(nextdeal);
