import React from 'react'
import { StyleSheet,
         Text, 
         TouchableOpacity, 
         View,
         Image,
         Dimensions,
         StatusBar,
         TouchableWithoutFeedback
        } from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import Qiuz from './quiz'

const Home = ({navigation}) => {  
                return (
                   <View style={styles.container}>
                    <LinearGradient
                              colors={['#841584', '#801cec']}
                              style={styles.container}
                                 > 
                       <StatusBar backgroundColor='#841584' barStyle="light-content"/>
                       <View style={styles.header}>
                       <Animatable.View  animation="rubberBand" easing="ease-out" iterationCount="infinite">
                           <Animatable.Text animation="bounceIn"  style={styles.logoname}>Quizzer</Animatable.Text>
                        </Animatable.View>
                        <Animatable.Image 
                        animation="bounceIn"
                        duraton="1500"
                        source={require('../assets/image/quizImg.png')}
                        style={styles.logo}
                        resizeMode="stretch"
                     />
                       </View>

                       <Animatable.View
                                 animation="flipInX"
                                 style={styles.footer}
                                 >
                        <Text style={{fontSize:30,fontWeight:'bold'}}>Practice FREE</Text>
                        <Text style={{fontSize:25,fontWeight:'bold'}}>General Awarences</Text>
                        <Text style={{fontSize:25,fontWeight:'bold'}}>Quizzes!</Text>
                        <Animatable.View  animation="pulse" easing="ease-out" iterationCount="infinite">
                        <View style={styles.btn}>
                              <TouchableOpacity 
                                    style={styles.start}
                                    activeOpacity={0.7}
                                    onPress={()=>{navigation.navigate("Quiz")}}>
                                 <LinearGradient
                                    colors={['#841584', '#801cec']}
                                    style={styles.start}
                                       >
                                    <Text style={[styles.textStart, {
                                          color:'#fff'
                                    }]}>Start</Text>
                                 </LinearGradient>
                                 </TouchableOpacity>
                        </View>
                        </Animatable.View>
                      </Animatable.View>
                      </LinearGradient>
                   </View>
                );        
}

export default Home;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.5;

const {width} = Dimensions.get("screen");
const width_logo = width * 0.95;


const styles = StyleSheet.create({
   container:{
        flex:1,
        backgroundColor:'#240046'
   },
   header:{
       flex:2,
       alignItems:"center"
   },
   footer:{
      flex:1,
      alignItems:"center",
      backgroundColor:"white",
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
   },
   logoname:{
      fontSize:40,
      color:'white',
      fontWeight:'bold',
      paddingTop:20
   },
   logo:{
      width:width_logo,
      height:height_logo,
     
   },
   btn: {
      alignItems: 'center',
      marginTop: 50,
      width:width_logo*0.8
  },
  start: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textStart: {
   fontSize: 24,
   fontWeight: 'bold'
}
})
