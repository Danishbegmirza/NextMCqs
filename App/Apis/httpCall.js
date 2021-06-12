
// import { NetInfoProvider } from 'react-native-netinfo';
import { BaseUrl } from '../Networks/index';
import Helper from "../Common/helper";
const axios = require('axios');
import {Alert} from 'react-native'

// eslint-disable-next-line import/prefer-default-export
export const HttpCall = async (method, type, token, body) => {
  return new Promise(async function (resolve, reject) {
    // var connectionInfo = await NetInfoProvider.getConnectionInfo();
    // if (connectionInfo.type == 'none' || connectionInfo.type == undefined) {
    //   alert('Please check your internet connection and try again!');
    //   return reject('No network');
    // }
    console.log("BaseUrl + method",BaseUrl + method,body,token)
    const url = BaseUrl + method;
    axios({
      method: type,
      url: url,
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        'authorization': `${token}`
      },
      data:body
    }).then(response => {
        console.log('response',response)
        return resolve(response);
    })
      .catch(err => {
        console.log('err',err)
        return reject(err);
      });
  });
};

export const HttpCallGet = async (method, type, token) => {
  return new Promise(async function (resolve, reject) {
    // var connectionInfo = await NetInfoProvider.getConnectionInfo();
    // if (connectionInfo.type == 'none' || connectionInfo.type == undefined) {
    //   alert('Please check your internet connection and try again!');
    //   return reject('No network');
    // }
    const url = BaseUrl + method;
    axios({
      method: type,
      url: url,
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        'authorization': `${token}`
      },
    }).then(response => {
        console.log('response',response)
        return resolve(response);
    })
      .catch(err => {
        return reject(err);
      });
  });
};

export const UploadMedia = async (method, type, token,body) => {
  console.log(method, type, token,body)
  return new Promise(async function (resolve, reject) {
    const url = BaseUrl + method;
    axios({
      method: type,
      url: url,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        //  Accept: 'application/x-www-form-urlencoded',
        'X-API-KEY': `${token}`
      },
      data: body
    }).then(response => {
        console.log('response upload',response)
        return resolve(response);
    })
      .catch(err => {
        return reject(err);
      });
  });
};


export const handleError = (errResponse) =>{
  if(errResponse.status === 403){
    Helper.clear_Async();
    return  Alert.alert("Invalid User");
  }
  else if(errResponse.status === 404){
    if(errResponse.data.msg !== "Please set lead prefrence to get lead"){
      Alert.alert(errResponse.data.msg);
    }  
  }
  else if(errResponse.status === 500){
    Alert.alert(errResponse.data.msg);
   }
   else if(errResponse.status === 400){
    Alert.alert(errResponse.data.msg);
   }
}

export const HttpCallWithoutToken = async (method, type, body) => {
  return new Promise(async function (resolve, reject) {
    // var connectionInfo = await NetInfoProvider.getConnectionInfo();
    // if (connectionInfo.type == 'none' || connectionInfo.type == undefined) {
    //   alert('Please check your internet connection and try again!');
    //   return reject('No network');
    // }
    console.log("BaseUrl + method",BaseUrl + method,url,body)
    const url = BaseUrl + method;
    axios({
      method: type,
      url: url,
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',

      },
      data:body
    }).then(response => {
        console.log('response',response)
        return resolve(response);
    })
      .catch(err => {
        console.log('err',err)
        return reject(err);
      });
  });
};