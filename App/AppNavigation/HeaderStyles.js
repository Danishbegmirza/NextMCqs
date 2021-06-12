import { StyleSheet,Dimensions } from 'react-native'
import Colors from '../Values/colors'
import Strings from '../Values/strings';
var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;
export const HeaderStyle = StyleSheet.create({
  back:{height:height*3/100,width:width*4/100},
  text:{color:"white",fontSize:width*3.5/100, fontFamily:Strings.SegoeUi,textAlign:'center', left:20,textTransform:'uppercase', fontWeight:'bold' },
  // Left:{flex:1},
  Body:{flex:1,justifyContent:'center'},
  Title:{alignSelf:'center',justifyContent:"center", width:width*6/100,},
  Right:{flex:1},
  Header:{backgroundColor:Colors.primaryblue,height:height*7/100,},
})