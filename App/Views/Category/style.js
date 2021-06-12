import { StyleSheet } from 'react-native'
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
import  Colors  from '../../Values/colors';

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginText: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: Colors.primaryblue,
    },
    touchContainer:{
        height: heightPercentageToDP('6%'),
        padding: widthPercentageToDP('3%'),
        marginTop: widthPercentageToDP(3),  borderRadius: 5,
        borderColor: 'grey', borderWidth: 0.5,
        
    },
    touchText:{
        fontSize: 18,  color: 'grey', textAlign:'left', marginLeft:20, fontWeight:'bold'
    },
})

export default style;