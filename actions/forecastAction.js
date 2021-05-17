/*TODO*/
export const updateForecast = (forecast) => {
  return {
       type: 'UPDATE_FORECAST',
       payload:forecast

  }
};

export const toggleLoader = (status) => {
  return {
       type: 'TOGGLE_LOADER',
       payload: status
  }
};
export const updateInput = (text) => {
  return {type: 'UPDATE_INPUT',
        payload: text}
}

export const fetchForecast = (city) =>
{
    return async dispatch => 
    {
      
      // console.log(city);
      dispatch(toggleLoader(true));
      try {
        const api_call = await fetch('http://api.weatherstack.com/current?access_key=7f0606b674e77139b224e11f729d760e&query='+city)
      const data = await api_call.json()
      // console.log(data)
       if ( data.location.name === city){
               
         dispatch(updateForecast(data));
        } 
      
     } 
     catch (error) {
        alert(error);
      }
      dispatch(toggleLoader(false))
      
   }
};