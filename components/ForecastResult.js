import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import React, { Component } from 'react';


class ForecastResult extends Component {

render(){
    return (
    <View>
        <Text> {this.props.icon}</Text>
        <Text>Description : {this.props.description}</Text>
        <Text>Temperature : {this.props.temperature}</Text>
        <Text>Mini : {this.props.minTemp}</Text>
        <Text>Maxi : {this.props.maxTemp}</Text>
        <Text>Vent : {this.props.wind}</Text>
        <Text>Humidité : {this.props.humidity}</Text>


    </View>

    )


}
}
export default ForecastResult