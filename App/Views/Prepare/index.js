import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import style from '../Test/style';
import Colors from '../../Values/colors';
import Header from '../../Components/Header';
import backIcon from '../../Assets/backIcon.png'
let QuestionDetails = [{
    ques: '1) What is your name ?',
    answers_list: ['Shivani', 'Shiv', 'Shini', 'Shivi'],
    rightAns: 'Shiv'
},
{
    ques: '2) What is your name ?',
    answers_list: ['Shivani', 'Shiv', 'Shini', 'Shivi'],
    rightAns: 'Shini'
},
{
    ques: '3) What is your name ?',
    answers_list: ['Shivani', 'Shiv', 'Shini', 'Shivi'],
    rightAns: 'Shivani'
},
{
    ques: '4) What is your name ?',
    answers_list: ['Shivani', 'Shiv', 'Shini', 'Shivi'],
    rightAns: 'Shiv'
},]
class Prepare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            selectedAns: '',
            result: false,
            quizDetails: '',
            questionIndex: 1,
            responseStatus: false
        }
    }

    btnClick = () => {
        const { questionIndex } = this.state
        if (this.state.index + 1 === QuestionDetails.length) {
            alert('Questions have been saved')
        } else {
            this.setState({
                index: this.state.index + 1
            })

        }
        // this.setState({
        //     selectedAns: '',
        //     result: false,
        //     questionIndex: questionIndex + 1
        // })
    }

    render() {

        return (
            <View style={style.container}>
                 <Header
                    title={"Prepare"}
                    isBack={true}
                    isRight={true}
                    leftIcon={backIcon}
                    rightIcon={backIcon}

                    backIcon={backIcon}

                />
                <View style={{ margin: widthPercentageToDP('5%') }}>
                    {QuestionDetails.map((item, index) => {
                        if (index == this.state.index) {
                            return <View>
                                <Text
                                    style={{ textAlign: 'center', marginBottom: heightPercentageToDP(3), fontSize: 25, color: Colors.primaryblue, marginTop: heightPercentageToDP(5) }}>
                                    {"Coming Soon"}</Text>
                                
                            </View>
                        }
                    })}

                </View>

            </View>
        )
    }
}
export default Prepare;