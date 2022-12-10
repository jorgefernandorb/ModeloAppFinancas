import React from "react";
import { 
    StyleSheet, 
    View, 
    Text, 
    StatusBar
 } from "react-native";

export default function App() {
  return (
    <View style={styles.MainContainer}>
      <StatusBar
        barStyle = "light-content"
        hidden = {false}
        backgroundColor = "#0066CC"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer :{
    justifyContent: 'center',
    alignItems:'center',
    flex:1,
  }
});