import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import ForecastChoseCity from './ForecastChoseCity'


const ForecastTitle = ({city, date}) => 
         (
          <View style={styles.container}>
              <ForecastChoseCity city = {city}/>
              <Text style={styles.date}>{date}</Text> 
          </View>
        )


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
    },
    date: {
        color: '#006B68',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign:'center'
    }
})

export default ForecastTitle