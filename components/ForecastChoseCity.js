import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';


class ForecastChoseCity extends Component {

render(){
    return(

    <View>
        <Text> {this.props.city}</Text>
    </View>
    )


}
}
export default ForecastChoseCity