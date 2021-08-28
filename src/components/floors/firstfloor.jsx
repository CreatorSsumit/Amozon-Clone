import React, { Component } from 'react';
import Currentdeal from "./currentdeal";
import {connect} from "react-redux";
import Nextdeal from "./nextdeal" 

class firstfloor extends Component {

  state={
    value:true
  }


getfirstfloor = ({firstpartroll},value)=>{


  var ramdomboolen = ['true',"false","true","true","true","false"]

var rr = Math.floor(Math.random()*ramdomboolen.length)


   console.log(this.state.value)

  if(value === true && firstpartroll){
  return(


     
    firstpartroll.filter((e,index)=>{
        
      return (
      
        index > 7 
      )
    }).map((itm)=>{
      
       return(
  
      <div className="fourcards" style={{width:"23%",height:"400px",background:"white",padding:"20px",position:"relative",marginTop:"30px"}}>
  
       <h3 style={{fontFamily:" 'Roboto', sans-serif ",fontSize:"22px",fontWeight:"520"}} >{itm.title}</h3>
  
                   <div className="small" style={{width:"100%",height:"75%",position:"relative",flexWrap:"wrap"}}>
                        
                        <div className="smallcard" style={{width:"48%",height:"45%",position:"relative"}}>
                            <img style={{width:"100%"}} src={`../images/firstfloor/floor1/${itm.firstimage}`} alt="" />
                        <h6 style={{fontSize:'12px',marginTop:"10px",textAlign:"center"}}>{itm.firstimagetitle}</h6>
                        </div>
                        <div className="smallcard" style={{width:"48%",height:"45%",position:"relative"}}>
                            <img style={{width:"100%"}} src={`../images/firstfloor/floor1/${itm.secondimage}`} alt="" />
                        <h6 style={{fontSize:'12px',marginTop:"10px",textAlign:"center"}}>{itm.secondimagetitle}</h6>
                        </div>
                        <div className="smallcard" style={{width:"48%",height:"45%",position:"relative"}}>
                            <img style={{width:"100%"}} src={`../images/firstfloor/floor1/${itm.thirdimage}`} alt="" />
                        <h6 style={{fontSize:'12px',marginTop:"10px",textAlign:"center"}}>{itm.thirdimagetitle}</h6>
                        </div>
                        <div className="smallcard" style={{width:"48%",height:"45%",position:"relative"}}>
                            <img style={{width:"100%"}} src={`../images/firstfloor/floor1/${itm.forthimage}`} alt="" />
                        <h6 style={{fontSize:'12px',marginTop:"10px",textAlign:"center"}}>{itm.forthimagetitle}</h6>
                        </div>
                   </div>
                    <h6 style={{marginTop:"14px",fontSize:"14px",color:"blue"}}>See more</h6>
               </div>
  
       )
      
       
    }) 
  
  )
     
    
  }else{

    if(firstpartroll){
      return(
      
        firstpartroll.filter((e,index)=>{
        
          return (
          
            index < 8
          )
        }).map((itm)=>{
          
           return(
      
          <div className="fourcards" style={{width:"23%",height:"400px",background:"white",padding:"20px",position:"relative",marginTop:"30px"}}>
      
           <h3 style={{fontFamily:" 'Roboto', sans-serif ",fontSize:"22px",fontWeight:"520"}} >{itm.title}</h3>
      
                       <div className="small" style={{width:"100%",height:"75%",position:"relative",flexWrap:"wrap"}}>
                            
                            <div className="smallcard" style={{width:"48%",height:"45%",position:"relative"}}>
                                <img style={{width:"100%"}} src={`../images/firstfloor/floor1/${itm.firstimage}`} alt="" />
                            <h6 style={{fontSize:'12px',marginTop:"10px",textAlign:"center"}}>{itm.firstimagetitle}</h6>
                            </div>
                            <div className="smallcard" style={{width:"48%",height:"45%",position:"relative"}}>
                                <img style={{width:"100%"}} src={`../images/firstfloor/floor1/${itm.secondimage}`} alt="" />
                            <h6 style={{fontSize:'12px',marginTop:"10px",textAlign:"center"}}>{itm.secondimagetitle}</h6>
                            </div>
                            <div className="smallcard" style={{width:"48%",height:"45%",position:"relative"}}>
                                <img style={{width:"100%"}} src={`../images/firstfloor/floor1/${itm.thirdimage}`} alt="" />
                            <h6 style={{fontSize:'12px',marginTop:"10px",textAlign:"center"}}>{itm.thirdimagetitle}</h6>
                            </div>
                            <div className="smallcard" style={{width:"48%",height:"45%",position:"relative"}}>
                                <img style={{width:"100%"}} src={`../images/firstfloor/floor1/${itm.forthimage}`} alt="" />
                            <h6 style={{fontSize:'12px',marginTop:"10px",textAlign:"center"}}>{itm.forthimagetitle}</h6>
                            </div>
                       </div>
                        <h6 style={{marginTop:"14px",fontSize:"14px",color:"blue"}}>See more</h6>
                   </div>
      
           )
          
           
        })
      
      )
        }
  }

    }

 render(props) {
        return (
            <div style={{flexWrap:"wrap"}} className="firstcard">
                

                {this.getfirstfloor(this.props)}
                <Currentdeal />
                {this.getfirstfloor(this.props,true)}
                {/* <Nextdeal nextdeal={this.props.otherdeals} /> */}

                
                {/* <div className="fourcards" style={{width:"23%",height:"400px",background:"white",padding:"20px",position:"relative"}}>

                 <h3 style={{fontFamily:" 'Roboto', sans-serif ",fontSize:"22px",fontWeight:"520"}} >Collections from Indian innovators | Amazon... </h3>

                 <div className="small" style={{width:"100%",height:"75%",position:"relative",flexWrap:"wrap"}}>
                      
                      <div className="smallcard" style={{width:"100%",height:"100%",position:"relative"}}>
                          <img style={{width:"100%"}} src="../images/firstfloor/floor1/h13.jpg" alt="" srcset=""/>
                        <h6 style={{fontSize:'12px',marginTop:"10px",textAlign:"center"}}>Top branded Laptops</h6>
                      </div>
                     
                      
                </div>

                <h6 style={{marginTop:"14px",fontSize:"14px",color:"blue"}}>See more</h6>

                </div> */}
             
            </div>
        );
    }
}

function mapStateToProps(state){

  return{
      otherdeals:state.allitems.getdeals
  }
}

export default connect(mapStateToProps,null)(firstfloor);
