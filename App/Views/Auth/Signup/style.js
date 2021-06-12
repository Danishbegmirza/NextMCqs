import { StyleSheet } from 'react-native'
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
import Colors from '../../../Values/colors';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    loginText: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: Colors.primaryblue,
    },
    textInput: {
        height: heightPercentageToDP('6%'),
        color: '#000000', borderColor: '#000000', borderBottomWidth: 0.5, marginTop: widthPercentageToDP(3), backgroundColor: '#fff', borderRadius: 5,
        fontSize: 16, padding: widthPercentageToDP('2%')
    }
})

export default style;