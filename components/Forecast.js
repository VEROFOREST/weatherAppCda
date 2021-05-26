import { StyleSheet, Text, View,SafeAreaView, TextInput,ActivityIndicator} from 'react-native';
import React, { Component } from 'react';
import ForecastTitle from './ForecastTitle';
import ForecastForm from './ForecastForm';
import ForecastResult from './ForecastResult';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import {fetchForecast,updateInput,getLocation } from '../actions/forecastAction';

class Forecast extends Component {
     ComponentDidMount(){
        this.props.getLocation()        
    }
    

    
render()
    {
                  
    return(
    //   console.log(this.props.loader)
         (!this.props.loader)?
         (<SafeAreaView>
                
                {this.props.forecast  ?
                ( <View>
                    {/* <TextInput onclick={this.props.getLocation()}>clickme</TextInput> */}
                    <ForecastTitle city={this.props.forecast.location.name} date={this.props.forecast.location.localtime} />
                    <ForecastResult/>
                    <ForecastForm placeholder="entrez une ville"
                     onChange ={(e)=>{this.props.updateInput(e.target.value)}} onSubmitEditing ={(e)=>{this.props.fetchForecast(e.target.value)}} 
                     value={this.props.input}/>)

                </View>):
                (<View>
                   <ForecastForm placeholder="entrez une ville"
                     onChange ={(e)=>{this.props.updateInput(e.target.value)}} onSubmitEditing ={(e)=>{this.props.fetchForecast(e.target.value)}} 
                     value={this.props.input}/>) 
                </View>)}
          </SafeAreaView>):
          (<SafeAreaView>
                <View>
                 <ActivityIndicator size="large" color="#00ff00" />
                </View>
          </SafeAreaView>)
    )
                // console.log(this.props.loader);
}
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        forecast: state.forecast,
        loader: state.loader,
        input: state.input

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchForecast,
        updateInput,
        getLocation
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (Forecast); 
