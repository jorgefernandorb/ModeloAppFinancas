import react from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'

import { Feather } from '@expo/vector-icons'
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ nome }){
    return(

        <View style={StyleSheet.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{nome}</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    //<Feather nome="user" size={27} color='#fff'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#8000ff',
        paddingTop: StatusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44/2,
    },
   /* {        <StatusBar
        barStyle = "light-content"
        hidden = {false}
        backgroundColor = "#0066CC"
        translucent = {false}
        networkActivityIndicatorVisible = {true}/>}*/
})