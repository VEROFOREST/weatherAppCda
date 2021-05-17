import { StyleSheet, Text, View,SafeAreaView, TextInput } from 'react-native';
import React, { Component } from 'react';


class ForecastForm extends Component {

render(){
    return (
    <View>
        {/* <Text> Input </Text> */}
        <TextInput placeholder="Choisissez votre ville"  value= {this.props.value} onChange={this.props.onChange} onSubmitEditing={this.props.onSubmitEditing}/>
    </View>

    )


}
}
export default ForecastForm