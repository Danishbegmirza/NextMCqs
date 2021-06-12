import { StyleSheet } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

const style = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : '#fff',        
    },
    touchContainer:{
        height: heightPercentageToDP('6%'),
        padding: widthPercentageToDP('2%'),
        marginTop: widthPercentageToDP(3), backgroundColor: '#fff', borderRadius: 5,
        borderColor: '#A90EB8', borderWidth: 0.5,
    },
    touchText:{
        fontSize: 18,  color: '#670EB8', textAlign:'center', fontWeight:'bold'
    },
})

export default style;