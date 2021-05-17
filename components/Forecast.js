import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import ForecastTitle from './ForecastTitle';
import ForecastForm from './ForecastForm';
import ForecastResult from './ForecastResult';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import {fetchForecast,updateInput } from '../actions/forecastAction';

class Forecast extends Component {
    
render()
    {
                    //  console.log(this.props)
    return(

        // console.log(this.props.loader)
         (this.props.loader)?
                 <View>
                     {this.props.forecast.location != ''}&&
                    <ForecastTitle city={this.props.forecast.location.name} date={this.props.forecast.location.localtime} />
                    <ForecastResult/>
                    <ForecastForm placeholder="entrez une ville"
                     onChange ={(e)=>{this.props.updateInput(e.target.value)}} onSubmitEditing ={(e)=>{this.props.fetchForecast(e.target.value)}} 
                     value={this.props.input}/>
                </View> :           
                <View>
                    <ForecastForm placeholder="entrez une ville" 
                    onChange ={(e)=>{this.props.updateInput(e.target.value)}} onSubmitEditing ={(e)=>{this.props.fetchForecast(e.target.value)}} 
                    value={this.props.input}/>
                </View> )
}
}
const mapStateToProps = (state) => (
    // console.log(state.input),
  {
    forecast: state.forecast,
    loader: state.loader,
    input: state.input
   
  })

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchForecast,
        updateInput,
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (Forecast); 
