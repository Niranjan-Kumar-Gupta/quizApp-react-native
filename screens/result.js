import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,StatusBar,Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const Result = ({route,navigation}) => {
    const {len,score} = route.params;
    let img = require('../assets/image/cong.png');
    let feedBackText = "Congratulations";

    console.log(len*0.4,len*0.7)
    if (score < len*0.7 && score >= len*0.4) {
        img = require('../assets/image/happy.png');
        feedBackText = "Very Good";
    } else if(score<len*0.4){
        img = require('../assets/image/sad.png');
        feedBackText = "Try Again";
    }

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
                            animation="zoomInDown"
                            style={styles.footer}
            >
               
                  <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                    source={img}
                    style={styles.img}
                    resizeMode="stretch"
                />
               
                 <Animatable.View  animation="tada" easing="ease-out" iterationCount="infinite"
                        style={{width:120}}>
                    <LinearGradient
                    colors={['#ff006e', '#e01cec']}
                    style={styles.number}
                    >
                    <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>{score}/{len}</Text>       
                    </LinearGradient>

                    </Animatable.View>
                    <Animatable.View  animation="swing" easing="ease-out" iterationCount="infinite">
                    <Animatable.Text animation="bounceIn"  style={styles.question}>{feedBackText}</Animatable.Text>
                    </Animatable.View>

                 
            <View style={styles.btn}>
                     <TouchableOpacity 
                                style={styles.start}
                                activeOpacity={0.7}
                                onPress={()=>navigation.navigate("Home")}>
                            <LinearGradient
                                colors={['#ff006e', '#e01cec']}
                                style={styles.start}
                                >
                                <Text style={[styles.textStart, {
                                    color:'#fff'
                                }]}>Start Again</Text>
                            </LinearGradient>
                    </TouchableOpacity>
               
            </View>
            </Animatable.View>
            </LinearGradient>
        </View>
    )
}

export default Result

const {height} = Dimensions.get("screen");
const height_logo = height * 0.17;

const {width} = Dimensions.get("screen");
const width_logo = width * 0.55;



const styles = StyleSheet.create({
    container:{
       flex:1,
      
       justifyContent:'center',
       alignItems:'center'
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        height:"100%",
        width:'100%'
    },
    footer:{
        flex:3,
        alignItems:"center",
        width:"95%",
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom:10
     },
    btn:{
        marginBottom:12,
        marginVertical:16,
        justifyContent:"space-between",
        flexDirection:'row'
    },
    start: {
        width:'90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom:20
    },
    img:{
        width:width_logo*0.8,
        height:height_logo
    },
    number: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        marginTop:10
       
    },
    question:{
        fontSize:20,
        fontWeight:'bold',
        paddingVertical:15,
        color:"#841584"
    },
    logo:{
        width:width_logo*2,
        height:height_logo*2,
        
    },
    textStart: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})
