import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View,StatusBar,Dimensions,Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Option from '../componenets/Option';
import { decode } from 'html-entities'; 

const RenderQuestion = (props) => {

    const quizQuestion = props.quizQuestion;

    const [currentQuesIndex,setCurrentQuesIndex] = useState(0);
    const [over,setOver] = useState(false)
    const [score,setScore] = useState(0);
    const [isOptionDisable, setIsOptionDisable] = useState(false);
    const len = quizQuestion.length;

    useEffect(()=>{
      if (currentQuesIndex>quizQuestion.length) {
        setIsOptionDisable(true);
      }
    },[currentQuesIndex]);
    if (currentQuesIndex<quizQuestion.length) {
       
        return (
            <View style={styles.question_container}>
                <Animatable.View  animation="tada" easing="ease-out" iterationCount="infinite"
                            style={{width:80}}>
                    <LinearGradient
                    colors={['#4d194d', '#4d1941']}
                    style={styles.number}
                    >
                    <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>{currentQuesIndex+1}/{quizQuestion.length}</Text>       
                    </LinearGradient>
    
                    </Animatable.View>
                    <Animatable.View  animation="rubberBand" easing="ease-out" iterationCount="infinite">
                    <Animatable.Text animation="bounceIn"  style={styles.question}>Question</Animatable.Text>
                    </Animatable.View>
    
                    <View style={styles.ques}>
                        <Animatable.View  animation="fadeInLeftBig" >             
                        <Text style={{fontSize:12,fontWeight:'bold',color:'white'}}>{decode(quizQuestion[currentQuesIndex].question)}</Text>         
                        </Animatable.View>
                    </View> 
                    <View style={{paddingTop:7}}>                  
                      <Option option={quizQuestion[currentQuesIndex]} score={score} setScore={setScore}/>
                    </View>
                    
                    <View style={styles.btnContainer}>
                        <Animatable.View  animation="pulse" easing="ease-out" iterationCount="infinite">
                        <View style={styles.btn}>
                            <TouchableOpacity 
                                    style={styles.start}
                                    activeOpacity={0.7}
                                    onPress={()=>props.navigation.navigate("Result",{score,len})}>
                                <LinearGradient
                                    colors={['#ff006e', '#801cec']}
                                    style={styles.start}
                                    >
                                    <Text style={[styles.textStart, {
                                        color:'#fff'
                                    }]}>Result</Text>
                                </LinearGradient>
                                </TouchableOpacity>
                        </View>
                        </Animatable.View>   
                        
                        <View style={styles.btn}>
                            <TouchableOpacity 
                                    style={styles.skip}
                                    activeOpacity={0.7}
                                    disabled={isOptionDisable}   
                                    onPress={()=>{setCurrentQuesIndex(currentQuesIndex+1)}}
                            >
                                    <Text style={[styles.textStart, {
                                        color:'#801cec'
                                    }]}>Next</Text>
                               
                                </TouchableOpacity>
                        </View>
    
                        </View> 
    
                </View> 
                )
        
    }
   
   return(
       <View style={{alignItems:'center',justifyContent:'center'}}>
        <Animatable.View  animation="shake" easing="ease-out" iterationCount="infinite">
        <Animatable.Text animation="bounceIn"  style={styles.logoname}>Well Done</Animatable.Text>
         </Animatable.View>
        <Animatable.Image 
        animation="bounceIn"
        duraton="1500"
        source={require('../assets/image/quizImg.png')}
        style={styles.logo}
        resizeMode="stretch"
        />
    <Animatable.View  animation="pulse" easing="ease-out" iterationCount="infinite">
    <View style={styles.btn}>
        <TouchableOpacity 
                style={styles.start}
                activeOpacity={0.7}
                onPress={()=>props.navigation.navigate("Result",{score,len})}>
            <LinearGradient
                colors={['#ff006e', '#801cec']}
                style={styles.start}
                >
                <Text style={[styles.textStart, {
                    color:'#fff'
                }]}>Get Result</Text>
            </LinearGradient>
            </TouchableOpacity>
    </View>
    </Animatable.View>  

    </View>
   )
                            
    
}

export default RenderQuestion

const {height} = Dimensions.get("screen");
const height_logo = height * 0.2
const {width} = Dimensions.get("screen");
const width_logo = width * 0.95;

const styles = StyleSheet.create({
    question:{
        fontSize:20,
        fontWeight:'bold',
        paddingVertical:5
    },
   
    ques:{
    
        width:width_logo,
        color:'#fff',
        backgroundColor:'#841584',
        padding:20,
        borderRadius:10
    

    },

    number: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    question_container:{
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    btn: {
       
        width:width_logo*0.3,
        alignItems:'center'

    },
    logoname:{
        fontSize:40,
        color:'white',
        fontWeight:'bold',
        paddingTop:20,
        color:'#801cec'
     },
     logo:{
        width:width_logo,
        height:height_logo*2,
       
     },
    start: {
        width:'100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    skip: {
        width:'100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#801cec'
    },
   textStart: {
        fontSize: 18,
        fontWeight: 'bold'
    },
   
    btnContainer:{
        flex:1,
        flexDirection:'row',
        alignContent:'space-between',
        alignItems:'center',
        width:width_logo*0.8,
       justifyContent:'space-between'
    }

})