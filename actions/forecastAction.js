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
};
export const getLocation = () => 
{
  return async dispatch =>
  { 
    dispatch(toggleLoader(true));
    try {
      const api_call = await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?city&localityLanguage=fr')
      const responseJson = await api_call.json()
    //   console.log(responseJson);
      dispatch(fetchForecast(responseJson.locality))
      // dispatch(fetchForecast('Roanne'))

    }
    catch (err){
        alert('message error not location')
    }

  }
}

export const fetchForecast = (city) =>
{
    return async dispatch => 
    {
      
      // console.log(city);
      dispatch(toggleLoader(true));
      try {
        const api_call = await fetch('http://api.weatherstack.com/current?access_key=b1dc2d4dee027f600f8db6ca47152e58&query='+city)
      const data = await api_call.json()
      console.log(data.current)
       if (data.hasOwnProperty('location')){
               
       dispatch(updateForecast(data));
        } 
      
     } 
     catch (error) {
        alert(error);
      }
      dispatch(toggleLoader(false))
      
   }
};