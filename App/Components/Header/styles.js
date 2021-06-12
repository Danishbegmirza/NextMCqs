import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../Values/colors';
import Util from '../../Common/util';
import Strings from '../../Values/strings'
const styles = StyleSheet.create({
    main:{
        height:55,
        alignSelf:'center',
        width:Util.getWidth(100),
        backgroundColor:Colors.primaryblue,
        flexDirection:'row',
        marginTop:-10
    },
    headingView:{
        width:Util.getWidth(85),
        justifyContent:'center',
        alignContent: 'center',
    },
    headingText:{
        alignSelf:'center',
        color:Colors.headerText,
        fontSize:18,
        fontFamily: Strings.SegoeUi,
        textTransform:'uppercase'
    },
    profileIcon:{
        alignSelf:'flex-start',
        marginLeft:5,
        marginTop:15,
        height:30,
        width:30
    },
    backIcon:{
        alignSelf:'flex-start',
        marginHorizontal:5,
        marginTop:15,
        height:25,
        width:25
    },
    bellIcon:{
        alignSelf:'flex-start',
        marginTop:15,
        height:25,
        width:25,
        right:10
    }
})
export default styles;
