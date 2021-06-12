import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import style from './style';
import Header from '../../Components/Header';
import backIcon from '../../Assets/menu.png'
import Colors from '../../Values/colors';
import Util from '../../Common/util';
import ProgressCircle from 'react-native-progress-circle'
import { Container, Content, Drawer } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    BaseUrl,
    ProfileInfo,
   
  } from "../../Networks/index";
import {
    HttpCallWithoutToken,
    HttpCall,
    handleError,
  } from "../../Apis/httpCall";
  import { POST, GET, PUT } from "../../Hooks/constants";import Menu from '../../AppNavigation/sideMenu';
class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        isIndicate:false
        }
      
         
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
    render() {
        return (
            <View style={style.container}>
               
                <Header
                    title={"Dashboard"}
                    isBack={true}
                    isRight={true}
                    leftIcon={backIcon}
                    rightIcon={backIcon}
                    
                    backIcon={backIcon}

                />
                {this.state.isProfile === true?
                <View>
                <View style={{ backgroundColor: Colors.primaryblue, width: Util.getWidth(100,), alignSelf: 'center', height: heightPercentageToDP('30%') }}>
                    <Text style={{ color: 'white', marginTop: 35, fontSize: 18, paddingHorizontal: 20,textTransform:'uppercase' }}>Welcome, {this.state.profileData.userName}</Text>
                  <View style={{flexDirection:'row'}}>
                      <View style={{width:widthPercentageToDP(55)}}>
                      <Text style={{ color: 'white', marginTop: 35, fontSize: 18, paddingHorizontal: 20 }}> {this.state.profileData.firstName+ " " +this.state.profileData.lastName}</Text>
                      <Text style={{ color: 'white', marginTop: 5, fontSize: 18, paddingHorizontal: 20 }}> {this.state.profileData.email}</Text>
                      <Text style={{ color: 'white', marginTop: 5, fontSize: 18, paddingHorizontal: 20 }}> {this.state.profileData.mobileNumber !== null ?this.state.profileData.mobileNumber :'123456'}</Text>
                      <TouchableOpacity  onPress={() => this.props.navigation.navigate('Signup')} style={{height:35,borderRadius:15,justifyContent:'center',marginHorizontal:25,marginTop: 15,backgroundColor:'white',width:widthPercentageToDP(17)}} >
                        <Text style={{fontSize:18,alignSelf:'center',color:Colors.primaryblue,fontWeight:'bold'}}>{"EDIT"}</Text>
                    </TouchableOpacity>
                      </View>
                   <View style={{alignSelf:'flex-end', justifyContent:'flex-end'}}> 
                    <View style={{paddingHorizontal:30,marginTop:15,}}>
                        <ProgressCircle
                            percent={30}
                            radius={50}
                            borderWidth={8}
                            color="#3399FF"
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
                        </ProgressCircle>
                    </View>
                    <View style={{paddingHorizontal:60,marginTop:5}}>
                    <Text style={{ color: 'white', marginTop: 0, fontSize: 16,  }}>1/200</Text>
                    </View>
                    <View style={{paddingHorizontal:25,marginTop:5}}>
                    <Text style={{ color: 'white', marginTop: 0, fontSize: 15,  }}>Modules Completed</Text>
                    </View>
                    </View>
                    </View>
                </View>
                <View style={{
                    marginTop: 20, paddingHorizontal: widthPercentageToDP('5%'), paddingVertical: heightPercentageToDP('2%'),
                    marginHorizontal: widthPercentageToDP('2%'), elevation: 5, backgroundColor: 'white', borderRadius: 10
                }}>

                    <Text style={style.loginText}>Question Of The Day</Text>
                    <Text style={{ textAlign: 'left', marginTop: 10 }}>Which is the biomarker ventilation associated pneumonia ?</Text>
                    <TouchableOpacity style={style.touchContainer} >
                        <Text style={style.touchText}>{"a)" + "        " + "Proclacitonin"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchContainer}>
                        <Text style={style.touchText}>{"b)" + "        " + "C-reactive protein"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchContainer}>
                        <Text style={style.touchText}>{"c)" + "        " + "ESR"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.touchContainer}>
                        <Text style={style.touchText}>{"d)" + "        " + "CA19-9"}</Text>
                    </TouchableOpacity>

                </View>
                </View>: null}
            </View>

        )
    }
}
export default Category;