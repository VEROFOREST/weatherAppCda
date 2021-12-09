import { Text, View,StyleSheet} from 'react-native';
import React from 'react';



const ForecastChoseCity = ({city}) => 
    (
        <View>
            <Text style={styles.city}>{city}</Text>
        </View>
    )

const styles = StyleSheet.create({
    city: {
        color: '#797979',
        fontWeight: 'bold',
        fontSize: 60,
        textAlign:'center',
        marginBottom:3,
        lineHeight:60
    },
})
export default ForecastChoseCity