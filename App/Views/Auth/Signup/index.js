import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import style from './style';
import Header from '../../../Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Colors from '../../../Values/colors';
import {BaseUrl, Login, ProfileInfo, Register} from '../../../Networks';
import Spinner from 'react-native-loading-spinner-overlay';
import backIcon from '../../../Assets/menu.png'
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isIndicate: false,
    };
    this.retrieveData()
  }
  retrieveData = async() => {
    let items = await AsyncStorage.getItem('userToken');
    console.log("tokennn",items)
    var temprary = false
    fetch(BaseUrl + ProfileInfo, {
        method: "GET",
        headers: {
          "authorization": items,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            temprary = true;
            return response.json();
          } else if (response.status === 404) {
            alert("Invalid Data");
          } else if (response.status === 403 || response.status === 401) {
            alert("Unauthorized user");
          } else if (response.status === 500) {
            alert("Internal server error");
          }
        })
        .then((response) => {
          console.log("sd", response);
          if (temprary) {
            
            this.setState({isProfile:true,profileData:response.data})
          }
        });
        // HttpCall(ProfileInfo, GET, items)
        //   .then((response) => {
        //     console.log("response of fetch lead==", response);
        //     console.log(JSON.stringify(response.data.msg));
        //     // setLeads(response.data)
            
        //   })
        //   .catch((err) => {
           
        //     console.log("msg =", err.response.data);
            
        //   });
      
  }
  onPressSignup = async() => {
     let items = await AsyncStorage.getItem('userToken');
    console.log("tokennn",items)
    
      this.setState({isIndicate: true});
      
        var data = {
          userName: this.state.userName,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          gender:'male'
        };

        var temp = false;
        fetch(BaseUrl + 'nextmcqs/user/profileUpdate', {
          method: 'PUT',
          headers: {
            authorization:items,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (response.status === 200) {
              this.setState({isIndicate: false});
              alert('Profile Updated Successfully');
            
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
      
    
  };

  render() {
    const funct = this;
    return (
      <View style={{  flex: 1,backgroundColor:'white'
        }}>
               
                <Header
                    title={"Profile"}
                    isBack={true}
                    isRight={true}
                    leftIcon={backIcon}
                    rightIcon={backIcon}
                    
                    backIcon={backIcon}

                />
        <Spinner
          visible={this.state.isIndicate}
          textContent={'Please Wait'}
          textStyle={{color: Colors.primaryblue}}
          color={Colors.primaryblue}
        />
        {this.state.isProfile === true?
        <View
          style={{
            paddingHorizontal: widthPercentageToDP('5%'),
            paddingVertical: heightPercentageToDP('4%'),
            marginHorizontal: widthPercentageToDP('2%'),
          
            marginTop:widthPercentageToDP(35)
          }}>
       
          <TextInput
            style={style.textInput}
            defaultValue={this.state.profileData.userName}
            onChangeText={(userName) => this.setState({userName})}
            placeholder={'User Name'}
            placeholderTextColor="grey"
          />
          <TextInput
           defaultValue={this.state.profileData.firstName}
            onChangeText={(firstName) => this.setState({firstName})}
            style={style.textInput}
            placeholder={'First Name'}
            placeholderTextColor="grey"
          />
          <TextInput
           defaultValue={this.state.profileData.lastName}
            onChangeText={(lastName) => this.setState({lastName})}
            style={style.textInput}
            placeholder={'Last Name'}
            placeholderTextColor="grey"
          />
          <TextInput
           defaultValue={this.state.profileData.email}
            style={style.textInput}
            onChangeText={(email) => this.setState({email})}
            placeholder={'Email'}
            placeholderTextColor="grey"
          />
           <TextInput
            style={style.textInput}
            onChangeText={(gender) => this.setState({gender})}
            placeholder={'Gender'}
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
              Update Profile
            </Text>
          </TouchableOpacity>
          
        </View>: null }
      </View>
    );
  }
}

export default Signup;
