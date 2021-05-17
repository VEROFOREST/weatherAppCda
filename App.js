
import React, { Component } from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Forecast from './components/Forecast';


class App extends Component {
  render(){
    return (
     <Provider store={store}>
     
    <SafeAreaView style={styles.container}>
       <Forecast />
    </SafeAreaView>
     </Provider>
    )
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;