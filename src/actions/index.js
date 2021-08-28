
var url = 'http://localhost:5000/buttondetails';
var slickurl ='http://localhost:5000/slicksend';
var firstparturl = 'http://localhost:5000/boxdatasend';
var getdealurl = 'http://localhost:5000/recentdata';

export function getbuttondetail(){
    
const request =  fetch(url,{
    method:'GET'
}).then(Response => Response.json())


console.log(request)


return{

    type:'GET_LATEST',
    payload:request

}}


export function getnewlist(){
    
    const request =  fetch(getdealurl,{
        method:'GET'
    }).then(Response => Response.json())
    
    
    console.log(request)
    
    
    return{
    
        type:'GET_LATEST_DEALS',
        payload:request
    
    }}


     

  
export function getslick(){
    
    const request =  fetch(slickurl,{
        method:'GET'
    }).then(Response => Response.json())
    
    
    return{
    
        type:'GET_SLICK',
        payload:request
    
    }}

      
export function firstpart(){
    
    const request =  fetch(firstparturl,{
        method:'GET'
    }).then(Response => Response.json())
    
    
    return{
    
        type:'FIRST_PART',
        payload:request
    
    }}



