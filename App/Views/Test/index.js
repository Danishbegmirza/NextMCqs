import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../Components/Header';
import backIcon from '../../Assets/backIcon.png'
import style from './style';
import Util from '../../Common/util';
import { Button, Container, Content } from 'native-base';
import Colors from '../../Values/colors';
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
class Test extends React.Component {

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
        alert("Coming Soon")
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
            <Container >
                <Header
                    title={"Test"}
                    isBack={true}
                    isRight={true}
                    leftIcon={backIcon}
                    rightIcon={backIcon}

                    backIcon={backIcon}

                />
                <Content >
                <View style={{width:Util.getWidth(100),marginTop: 0, flexDirection: 'row', borderBottomWidth:0.5 }}>
                    <Text
                        style={{  marginBottom:5,width: Util.getWidth(75), marginLeft: 15, textAlign: 'left', fontSize: 18, color: 'black', marginTop: heightPercentageToDP(2) }}>
                        {"Full Mock test for NEET PG 2021-Clinical Focused- "}</Text>
                    <View>
                        <TouchableOpacity onPress={() => {
                            //  this.props.navigation.navigate(''),
                            this.btnClick();
                            // alert(item.answers_list)
                        }}
                            style={{ backgroundColor: Colors.primaryblue, borderRadius: 5, padding: 5, marginLeft: 5, marginTop: heightPercentageToDP(2) }}>
                            <Text style={{ textAlign: 'center', fontSize: 16, color: 'white' }}>{"START"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:Util.getWidth(100),marginTop: 0, flexDirection: 'row', borderBottomWidth:0.5 }}>
                    <Text
                        style={{  marginBottom:5,width: Util.getWidth(75), marginLeft: 15, textAlign: 'left', fontSize: 18, color: 'black', marginTop: heightPercentageToDP(2) }}>
                        {"Mini Mock test for NEET PG 2021-Clinical Focused- "}</Text>
                    <View>
                        <TouchableOpacity onPress={() => {
                            //  this.props.navigation.navigate(''),
                            this.btnClick();
                            // alert(item.answers_list)
                        }}
                            style={{ backgroundColor: Colors.primaryblue, borderRadius: 5, padding: 5, marginLeft: 5, marginTop: heightPercentageToDP(2) }}>
                            <Text style={{ textAlign: 'center', fontSize: 16, color: 'white' }}>{"START"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:Util.getWidth(100),marginTop: 0, flexDirection: 'row', borderBottomWidth:0.5 }}>
                    <Text
                        style={{  marginBottom:5,width: Util.getWidth(75), marginLeft: 15, textAlign: 'left', fontSize: 18, color: 'black', marginTop: heightPercentageToDP(2) }}>
                        {"Full Mock test for NEET PG 2021-Clinical Focused (Easy)- "}</Text>
                    <View>
                        <TouchableOpacity onPress={() => {
                            //  this.props.navigation.navigate(''),
                            this.btnClick();
                            // alert(item.answers_list)
                        }}
                            style={{ backgroundColor: Colors.primaryblue, borderRadius: 5, padding: 5, marginLeft: 5, marginTop: heightPercentageToDP(2) }}>
                            <Text style={{ textAlign: 'center', fontSize: 16, color: 'white' }}>{"START"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:Util.getWidth(100),marginTop: 0, flexDirection: 'row', borderBottomWidth:0.5 }}>
                    <Text
                        style={{  marginBottom:5,width: Util.getWidth(75), marginLeft: 15, textAlign: 'left', fontSize: 18, color: 'black', marginTop: heightPercentageToDP(2) }}>
                        {"Full Mock test for NEET PG 2021-Clinical Focused (Difficult)- "}</Text>
                    <View>
                        <TouchableOpacity onPress={() => {
                            //  this.props.navigation.navigate(''),
                            this.btnClick();
                            // alert(item.answers_list)
                        }}
                            style={{ backgroundColor: Colors.primaryblue, borderRadius: 5, padding: 5, marginLeft: 5, marginTop: heightPercentageToDP(2) }}>
                            <Text style={{ textAlign: 'center', fontSize: 16, color: 'white' }}>{"START"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View style={{ margin: widthPercentageToDP('5%') }}>
                    {QuestionDetails.map((item, index) => {
                        if (index == this.state.index) {
                            return <View>
                                <Text
                                    style={{ textAlign: 'center', marginBottom: heightPercentageToDP(3), fontSize: 20, color: '#670EB8', marginTop: heightPercentageToDP(5) }}>
                                    {item.ques}</Text>
                                {item.answers_list.map((ans, ansIndex) => {
                                    return <View>
                                        <TouchableOpacity style={style.touchContainer} onPress={() => this.props.navigation.navigate('Test')}>
                                            <Text style={style.touchText}>{ans}</Text>
                                        </TouchableOpacity>
                                    </View>
                                })}
                                <TouchableOpacity onPress={() => {
                                   
                                    this.btnClick();
                                    
                                }}
                                    style={{ backgroundColor: '#670EB8', borderRadius: 5, padding: widthPercentageToDP('2%'), marginTop: heightPercentageToDP(5) }}>
                                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>{QuestionDetails.length === this.state.index + 1 ? 'Submit' : 'Next'}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    })}

                </View> */}
</Content>
            </Container>
        )
    }
}
export default Test;