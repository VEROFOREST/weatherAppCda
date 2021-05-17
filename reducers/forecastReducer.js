let initialState = {
    forecast: {},
  	loader: false,
    input:""
    
};

const forecastReducer = (state = initialState, action)=> 
 {
   
  switch (action.type) {
     
     case 'UPDATE_FORECAST':
       
      return{
        
        ...state,
        forecast:action.payload,
       
        
      }  
      case 'TOGGLE_LOADER':
      return{
        ...state,
        loader: action.payload
        
      } 
      case 'UPDATE_INPUT':
      return{
        ...state,
        input : action.payload
        
      }         
     
     default:
      return state;
   }
};
export default forecastReducer;