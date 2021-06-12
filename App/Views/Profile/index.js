import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import style from './style';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Colors from '../../Values/colors';
import {BaseUrl, Login, Register} from '../../Networks/index';
import Spinner from 'react-native-loading-spinner-overlay';
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isIndicate: false,
    };
  }
  onPressSignup = () => {
    {
      this.setState({isIndicate: true});
      if (
        this.state.userName == null ||
        this.state.password == null ||
        this.state.firstName == '' ||
        this.state.lastName == '' ||
        this.state.email == '' ||
        this.state.phoneNumber == ''
      ) {
        alert('Please fill all the details');
        this.setState({isIndicate: false});
      } else {
        var data = {
          userName: this.state.userName,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          phoneNumber: this.state.phoneNumber,
          password: this.state.password,
        };

        var temp = false;
        fetch(BaseUrl + Register, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (response.status === 200) {
              this.setState({isIndicate: false});
              alert('Registered Successfully');
              this.props.navigation.navigate('Login');
              temp = true;
              console.warn('aty', data);
              return response.json();
            } else if (response.status === 404) {
              this.setState({isIndicate: false});
            } else if (response.status === 400 || response.status === 403) {
              this.setState({isIndicate: false}, function () {});
            } else if (response.status === 500) {
              this.setState({isIndicate: false});
              alert('Internal server error');
            }
          })
          .then((response) => {
            console.warn('adb', response);
            if (temp) {
            }
          });
      }
    }
  };

  render() {
    const funct = this;
    return (
      <View style={style.container}>
        <Spinner
          visible={this.state.isIndicate}
          textContent={'Please Wait'}
          textStyle={{color: Colors.primaryblue}}
          color={Colors.primaryblue}
        />
        <View
          style={{
            paddingHorizontal: widthPercentageToDP('5%'),
            paddingVertical: heightPercentageToDP('4%'),
            marginHorizontal: widthPercentageToDP('2%'),
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <Text style={style.loginText}>Signup</Text>
          <TextInput
            style={style.textInput}
            onChangeText={(userName) => this.setState({userName})}
            placeholder={'User Name'}
            placeholderTextColor="grey"
          />
          <TextInput
            onChangeText={(firstName) => this.setState({firstName})}
            style={style.textInput}
            placeholder={'First Name'}
            placeholderTextColor="grey"
          />
          <TextInput
            onChangeText={(lastName) => this.setState({lastName})}
            style={style.textInput}
            placeholder={'Last Name'}
            placeholderTextColor="grey"
          />
          <TextInput
            style={style.textInput}
            onChangeText={(email) => this.setState({email})}
            placeholder={'Email'}
            placeholderTextColor="grey"
          />
          <TextInput
            style={style.textInput}
            placeholder={'Mobile number'}
            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
            keyboardType="phone-pad"
            placeholderTextColor="grey"
          />
          <TextInput
            style={style.textInput}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}
            placeholder={'Password'}
            placeholderTextColor="grey"
          />

          <TouchableOpacity
            onPress={() => this.onPressSignup()}
            style={{
              backgroundColor: Colors.primaryblue,
              elevation: 5,
              borderRadius: 5,
              padding: widthPercentageToDP('2%'),
              marginTop: heightPercentageToDP(5),
            }}>
            <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>
              Signup
            </Text>
          </TouchableOpacity>
          <Text
            onPress={() => this.props.navigation.navigate('Login')}
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'grey',
              marginTop: 15,
            }}>
            Already have an account?{' '}
            <Text
              style={{
                color: Colors.primaryblue,
                textDecorationLine: 'underline',
              }}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default Profile;
