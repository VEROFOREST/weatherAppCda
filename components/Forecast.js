import { StyleSheet, Text, View,SafeAreaView, TextInput,ActivityIndicator} from 'react-native';
import React, { Component } from 'react';
import ForecastTitle from './ForecastTitle';
import ForecastForm from './ForecastForm';
import ForecastResult from './ForecastResult';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import {fetchForecast,updateInput,getLocation } from '../actions/forecastAction';

class Forecast extends Component {
    
        componentDidMount(){
                this.props.getLocation()        
        }
  
render()
    {

    return(
    //   console.log(this.props.loader)
         (!this.props.loader)?
         <SafeAreaView style={[styles.container, styles.center]}>
                {this.props.forecast.location ?
                    <View>
                        <ForecastTitle city={this.props.forecast.location.name}
                                    date={this.props.forecast.location.localtime} />
                        <ForecastResult icon={this.props.forecast.current.weather_icons[0]}
                                        description={this.props.forecast.current.weather_descriptions[0]}
                                        temperature={this.props.forecast.current.temperature}
                                        minTemp = {this.props.forecast.current.temperature - 5}
                                        maxTemp = {this.props.forecast.current.temperature + 5}
                                        wind={this.props.forecast.current.wind_speed}
                                        humidity= {this.props.forecast.current.humidity}/>
                        <ForecastForm placeholder="entrez une ville"
                                    onChange ={(e)=>{this.props.updateInput(e.target.value)}} onSubmitEditing ={(e)=>{this.props.fetchForecast(e.target.value)}} 
                                    value={this.props.input}/>
                    </View>:
                    <View>
                        <Text>Ville non trouvée, veuillez recommencer</Text>
                        <ForecastForm placeholder="entrez une ville"
                                    onChange ={(e)=>{this.props.updateInput(e.target.value)}} 
                                    onSubmitEditing ={(e)=>{this.props.fetchForecast(e.target.value)}} 
                                    value={this.props.input}/>
                    </View>}
        </SafeAreaView>:
        <SafeAreaView style ={[styles.loaderContainer, styles.center]}>
                <View>
                 <ActivityIndicator size="large" color="#0991b0" />
                </View>
        </SafeAreaView>
     )
              
    }
}

const styles = StyleSheet.create({
    center:{
        justifyContent:'center',
        alignItems:'center',
       
    },
    container: {
       flex:1,
       paddingBottom:40,
       paddingTop:40,
       backgroundColor: "#F2F2F2",
       
    },
    loaderContainer: {
        alignSelf:'center',
        backgroundColor:'#FFFFFF',
        width:100,
        height:100,
        opacity: 0.9,
        borderRadius:12,
    },
    
    // formContainer:{
    //     height:170
    // },
    // boxShadow:{
    //     shadowColor: "#00000029",
    //     shadowOffset: {
    //         width: 0,
    //         height: 3,
    //     },
    //     shadowOpacity: 2,
    //     shadowRadius: 6,
    //     elevation: 2,
    //     }
  });

const mapStateToProps = (state) => ({
    forecast: state.forecast,
    inputValue: state.inputValue,
    loader: state.loader,
    errorMsg: state.errorMsg
  })

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchForecast,
        updateInput,
        getLocation
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Forecast)

