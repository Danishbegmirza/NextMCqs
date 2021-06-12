import React from 'react'
import { View, Text, Image } from 'react-native'
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
import cadeceous from '../../../Assets/nextmcq.png'
import {Container} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
class Splash extends React.Component{
    componentDidMount(){
        
        setTimeout(() => {
            this.getData();
        }, 2000);
    }
     getData = async () => {
        try {
          const value = await AsyncStorage.getItem("userToken");
          console.log("value--",value)
          if (value !== null) {
            this.props.navigation.navigate('Category')
            console.log("====>>>>>", value);
          } else {
            this.props.navigation.navigate('Login')
          }
        } catch (e) {
            this.props.navigation.navigate('Login')
        }
      };
    render(){
        return(
            <Container style={{justifyContent:'center', backgroundColor:'white'}}>
               <View style={{marginTop:heightPercentageToDP('5%'), alignSelf:'center'}}>
                <Image source={cadeceous} style={{height:heightPercentageToDP('14%'),width: widthPercentageToDP('90%')}}/>
              </View></Container>
        )
    }
}
export default Splash;