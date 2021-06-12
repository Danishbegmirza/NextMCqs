import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Image } from 'react-native'
import { Container } from 'native-base'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import Colors from '../../../Values/colors';
import style from './style';
import cadeceous from '../../../Assets/nextmcq.png'
import { BaseUrl, login } from '../../../Networks';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    isIndicate:false
    }
  }
  onPressLogin = () => {
    {
     

      this.setState({ isIndicate: true })
      if (this.state.email == null || this.state.password == null ) {
        alert("Please Enter Email & Password")
        this.setState({ isIndicate: false })
      }
      else {
        var data = {
          
          email: this.state.email,
         
          password: this.state.password

        }

        var temp = false;
        fetch(BaseUrl + login, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)

        }).then((response) => {

          if (response.status === 200) {
            
            temp = true;
            this.setState({ isIndicate: false },
              )
              this.props.navigation.navigate('bottomNavigator')
            console.log("aty", data)
            return response.json();
          } else if (response.status === 404) {
            alert("Invalid Email & Pasword")
            this.setState({ isIndicate: false },
            )

          }
          else if (response.status === 400 || response.status === 403) {
            alert("Invalid Email & Pasword")
            this.setState({ isIndicate: false }, function () {

            })
          }
          else if (response.status === 500) {
            this.setState({ isIndicate: false })
            alert("Internal server error")
          }
        }).then((response) => {
          console.warn("adb", response)
          
          if (temp) {
            AsyncStorage.setItem("userToken",response.data.token)
          }
        });
      }
    }
  }
  render() {
    return (
      <Container>
         <Spinner
                            visible={this.state.isIndicate}
                            textContent={'Please Wait'}
                            textStyle={{ color: Colors.primaryblue }}
                            color={Colors.primaryblue}
                        />
        <View style={{ marginTop: heightPercentageToDP('15%'), alignSelf: 'center' }}>
          <Image source={cadeceous} style={{ height: heightPercentageToDP('14%'), width: widthPercentageToDP('90%') }} />
        </View>
        <View style={{
          marginTop: 60, paddingHorizontal: widthPercentageToDP('5%'), paddingVertical: heightPercentageToDP('4%'),
          marginHorizontal: widthPercentageToDP('2%'), elevation: 5, backgroundColor: 'white', borderRadius: 10
        }}>

          <Text style={style.loginText}>Login</Text>
          <TextInput
            style={style.textInput}
            onChangeText={(email) => this.setState({ email })}
            placeholder={'Email'}
            placeholderTextColor='grey'
          />
          <TextInput
           onChangeText={(password) => this.setState({ password })}
            style={style.textInput}
            secureTextEntry={true}
            placeholder={'Password'}
            placeholderTextColor='grey'
          />

          <TouchableOpacity onPress={() => { this.onPressLogin() }}
            style={{ backgroundColor: Colors.primaryblue, elevation: 5, borderRadius: 5, padding: widthPercentageToDP('2%'), marginTop: heightPercentageToDP(5) }}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>Login</Text>
          </TouchableOpacity>
          <Text
            style={{ textAlign: 'center', fontSize: 16, color: 'grey', marginTop: 15 }}>
            Don't have an account? <Text style={{ color: Colors.primaryblue, textDecorationLine: 'underline' }}
              onPress={() => this.props.navigation.navigate('Profile')}>Signup</Text></Text>
        </View>
      </Container>

    )
  }
}
export default Login;