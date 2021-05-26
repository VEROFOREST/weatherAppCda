import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import ForecastChoseCity from './ForecastChoseCity'

class ForecastTitle extends Component {

render(){
    return (
    <View>
        <ForecastChoseCity city = {this.props.city}/>
        <Text>{this.props.date}</Text>
    </View>
    )
}
}
export default ForecastTitle