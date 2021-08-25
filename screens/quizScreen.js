import React from 'react';
import { StyleSheet, View,StatusBar,Dimensions,Alert } from 'react-native'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import RenderQuestion from '../componenets/RenderQuestion';

const QuizScreen = (props) => {

    const quizData = props.data;


    return (
        <View style={styles.container}>
                <LinearGradient
                        colors={['#841584', '#801cec']}
                        style={styles.container}
                            > 
                <StatusBar backgroundColor='#841584' barStyle="light-content"/>
                <View style={styles.header}>
                    <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/image/quizImg2.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
                </View>

                <Animatable.View
                            animation="flipInX"
                            style={styles.footer}
                >

                <RenderQuestion quizQuestion={quizData} navigation={props.navigation}/>

                  
                </Animatable.View>
                </LinearGradient>
       </View>
    )
}

export default QuizScreen

const {height} = Dimensions.get("screen");
const height_logo = height * 0.2;

const {width} = Dimensions.get("screen");
const width_logo = width * 0.95;


const styles = StyleSheet.create({
    container:{
            flex:1,
            backgroundColor:'#240046'
    },
    header:{
        flex:1,
        alignItems:"center"
    },
    footer:{
        flex:3,
        alignItems:"center",
        backgroundColor:"white",
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },

    question:{
        fontSize:20,
        fontWeight:'bold',
        paddingTop:0
    },
    logo:{
        width:width_logo,
        height:height_logo,
        
    },
    
})