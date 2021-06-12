import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Styles from './styles'
import backIcon from '../../Assets/backIcon.png'


const Header = (props) => {
    const {
        title,
        isLeft,
        isRight,
        leftIcon,
        rightIcon,
        backIcon,
        isBack,
        onBackPress,
        onProfilePress,
        isLogout,
        logoutIcon,
        onLogoutPress
    } = props
    return (
        <View style={Styles.main}>
            {
                (isBack) ?
                    <TouchableOpacity >
                        <Image source={backIcon} style={Styles.backIcon} />
                    </TouchableOpacity>
                    : null
            }
            {/* {isLeft ?
            <TouchableOpacity onPress={() => onProfilePress()} >
                <Image source={leftIcon} style={Styles.profileIcon} />
            </TouchableOpacity>
                : null
            } */}
            <View style={[Styles.headingView]}>
                <Text style={Styles.headingText}>{title}</Text>
            </View>
            
            {
                isLogout ?
                <TouchableOpacity onPress={() => onLogoutPress()} >
                    <Image source={backIcon} style={Styles.bellIcon} />
                </TouchableOpacity>
                    : null
                    
            }
         
        </View>
    );
}

export default Header;