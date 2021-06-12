
import { StyleSheet,Dimensions } from 'react-native'
import Colors from '../Values/colors'
var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

export const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
    
        backgroundColor: "#2ea7d2"
      },
      welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
      },
      instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
      },
      headText:{ 
        fontSize: (width * 3.5) / 100,
         fontFamily: "Roboto" ,
         marginLeft:10
        },
      header:{ height: 100, backgroundColor:Colors.primaryblue, alignItems:'center' },
      userIcon:{
        height: 40,
        height: 40,
        resizeMode: "contain",
        marginTop: 28,
        position: "relative",
        left: "-35%",
    
      },
      title:{
        fontSize: width * 0.04,
        fontFamily: "Roboto",
        position: "relative",
        right: 90,
        top: "25%"
      }
})