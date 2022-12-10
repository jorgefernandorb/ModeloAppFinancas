import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
 } from 'react-native';

 import {AntDesign} from '@expo/vector-icons';
export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign nome="addfolder" size={26} color = "#000"/>
            </View>
            <Text style={styles.buttonLabel}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign nome="tagso" size={26} color = "#000"/>
            </View>
            <Text style={styles.buttonLabel}>Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign nome="creditcard" size={26} color = "#000"/>
            </View>
            <Text style={styles.buttonLabel}>Cartão de Credito</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign nome="barcode" size={26} color = "#000"/>
            </View>
            <Text style={styles.buttonLabel}>Boletos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign nome="setting" size={26} color = "#000"/>
            </View>
            <Text style={styles.buttonLabel}>Conta</Text>
        </TouchableOpacity>

        
   </ScrollView>
  );
}
const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton:{
        alignItems: 'center',
        marginRight: 32
    },
    areaButton:{
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLabel:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})