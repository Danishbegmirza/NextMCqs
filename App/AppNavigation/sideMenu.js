import React, { PureComponent, Component } from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  StatusBar, Alert
} from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Text,
  Icon,
  ListItem,
  Separator,Left, Right,Body, View
} from "native-base";

import helper from '../Common/helper'

import {menuStyles} from './style';
import {HeaderStyle} from './HeaderStyles';



import { HttpCall } from "../Apis/httpCall";
import { GET } from "../Hooks/constants";
import Util from "../Common/util";
var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;
export default class Menu extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isData: false,
      profileURL:""
    };
   }

   componentDidMount() {
    EventBus.getInstance().addListener("ProfilePictureUpdate", this.listener = data => {
           
      this.ProfilePictureAPI()
  })
  this.ProfilePictureAPI()
  
}


 ProfilePictureAPI(){
  helper.retrieve_async('userData').then((tokenvalue) => {
    console.log("menuToken", tokenvalue)
    HttpCall('customer/me', GET, tokenvalue).then(response => {
        console.log("menuTokenResponse ;;;;;;;;", response)
        console.log("Profile URL :;; ", response.data)
        if(response.data.firstname != null && response.data.firstname != '' && response.data.lastName != null && response.data.lastName != ''){
          this.setState({
            username: response.data.firstname+' '+response.data.lastName,
            profileURL: response.data.userimage,
        })
        }
       
        console.log(this.state.username)
    })
        .catch(err => {
            setLoader(false)
            if (err.response.status === 403) {
                Alert.alert(
                    'Alert',
                    'Session Expired Please Login Again',
                    [
                        {
                            text: 'Ok', onPress: () => {
                                helper.clear_Async();
                                Actions.replace('login')
                            }
                        },

                    ],
                    { cancelable: false },
                );
            }
            console.log('hello', err.response.status)
            // handleError(err.response)
        });

      })
}

  logout = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to logout ?',
      [
          {
              text: 'Yes', onPress: () => {
                  helper.clear_Async();
                  Actions.replace('login')
              }
          },
          {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
          },
      ],
      { cancelable: false },
  );
  };

  services=()=>{
    // Actions.push('Profile');
    Actions.push('OptionScreen');
    EventBus.getInstance().fireEvent("drawerClose")
  }
  dashboard=()=>{
    
    Actions.push('Home');
    EventBus.getInstance().fireEvent("drawerClose")

  }
  projects=()=>{
    Actions.push('ListProject');
    EventBus.getInstance().fireEvent("drawerClose")

  }
  designs=()=>{
    Actions.push('Designs');
    EventBus.getInstance().fireEvent("drawerClose")

  }
  render() {
    return (
      <Container>
        <StatusBar hidden={true} />
        <Header style={menuStyles.header}>
              <View style={{backgroundColor:'white', width:70, height:70, borderRadius:50}}>
                <Image source={{uri: this.state.profileURL}} style={{width:70, height:70, borderRadius:50}}/>
              </View>
              <Body style={HeaderStyle.Body}>
              <Text style={[HeaderStyle.text,{fontSize: Util.normalize(11)}]}>{this.state.username}</Text>
                {/* <Text style={HeaderStyle.text}> MAKE  MY  HOUSE</Text>*/}
                </Body> 
              {/* <Right style={HeaderStyle.Right}> */}
              {/* <Image source={menuButton} style={{ height: 30, width: 30, marginTop: -2, marginLeft: 0, alignSelf: 'flex-end' }} /> */}
              {/* </Right> */}
        </Header>
        <Content>
          {/* <Separator bordered>
            <Text style={{ fontSize: width * 0.03, fontFamily: "Roboto" }}>
             All Category
            </Text>
          </Separator> */}  
          <ListItem onPress={() => this.dashboard()}>
         
            <Text style={menuStyles.headText}>
             HOME
            </Text>
          </ListItem>
          <ListItem onPress={() => this.services()}>
         
            <Text style={menuStyles.headText}>
             PROFILE
            </Text>
          </ListItem>
          <ListItem onPress={() => this.projects()}>
          
            <Text style={menuStyles.headText}>
             PROJECTS
            </Text>
          </ListItem>
          {/* <ListItem onPress={() => this.designs()}>
          <Image source={require('../../Assets/floorPlan.png')} style={{height:25, width:25}}/>
            <Text style={menuStyles.headText}>
             DESIGNS
            </Text>
          </ListItem>      */}
          <ListItem last onPress={() => this.logout()}>
          <Icon name='logout' type='AntDesign' style={{fontSize: 22}}/>
            <Text style={menuStyles.headText}>
              LOGOUT
            </Text>
          </ListItem>
        
        </Content>
        <Footer>
          
          <FooterTab style={{ backgroundColor:'white' }} />
          <Image source={require('../Assets/nextmcq.png')} resizeMode='contain' style={{width:'100%',height:'100%', alignSelf:'center', bottom:10, position:'absolute'}}/>
        </Footer>
      </Container>
    );
  }
}
