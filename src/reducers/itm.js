export default function(state={},action){

    switch(action.type){
        
       
        case 'GET_LATEST':
            return{...state,latest:action.payload}
            case 'GET_SLICK':
                return{...state,slick:action.payload}
             case 'FIRST_PART':
                    return{...state,firstpart:action.payload}
            case 'GET_LATEST_DEALS':
                        return{...state,getdeals:action.payload}
                   
            
    
        default:
            return state
    
    
    
    }
    
    }