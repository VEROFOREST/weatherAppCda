import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native';
import React, { Component } from 'react';

  const ForecastResult = (props) => {
       
        return (
            <View style= {[styles.container]}>

                <View >
                    <Image source= {{uri: props.icon}} />
                    <Text >{props.description}</Text>
                </View>
    
    
                <View >
                    <Text >{props.temperature}°C</Text>
                    <View >
                        <Text>température mini :  {props.minTemp}°C</Text>
                       

                        <Text>température max :  {props.maxTemp}°C</Text>
                    </View>
                </View>

                <View >

                    <View >
                        
                        <Text>Vitesse du vent : {props.wind} km/h</Text> 
                    </View>

                    <View >
                       
                        <Text>Humidité: {props.humidity} %</Text>
                    </View>
                    
                </View>
            </View> 
            
        )
    }


const styles = StyleSheet.create({
    container: {
            flex:4,
            flexDirection:'column',
            alignItems:'center',
            textAlign:'center',
            marginTop:70,
        },
    })   
export default ForecastResult