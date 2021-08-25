import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View,StatusBar,Dimensions,Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
const TypeLevel = (props) => {
    const difficulty = ["easy","medium","hard"];
    const category = [["Genearl Knowledge",9],["Sports",21],["Computer",18],["Science",17]];
    const total_ques = [10,20,30,40];
    
     const [currentOptionSelectedDiffculty, setCurrentOptionSelectedDiffculty] = useState(null);
     const [currentOptionSelectedAmount, setCurrentOptionSelectedamount] = useState(null);
     const [currentOptionSelectedCategory, setCurrentOptionSelectedCategory] = useState(null);


    function Validate() {
        if (props.difficulty !== null && props.amount !== null && props.category !== null) {
            props.setTypeSelect(true);
            props.setIsSelect(true); 
        }
    }
    return (
        <View  style={styles.container}>

            <LinearGradient
                        colors={['#841584', '#801cec']}
                        style={styles.container}
                        > 
                       <StatusBar backgroundColor='#841584' barStyle="light-content"/>

                       <View style={styles.header}>
                       <Animatable.Text animation="bounceIn"  style={{color:'#fff',fontSize:40}}>Welcome!</Animatable.Text>
                       <Animatable.View  animation="pulse" easing="ease-out" iterationCount="infinite">
                           <Animatable.Text animation="bounceIn"  style={styles.logoname}>The best way to predict the future is to create it...</Animatable.Text>
                        </Animatable.View>
                       </View>

                       <Animatable.View
                                 animation="flipInX"
                                 style={styles.footer}
                                 >
                    <View style={styles.ques}>
                        <Animatable.View  animation="fadeInLeftBig" >             
                        <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Select Difficulty</Text>         
                        </Animatable.View>
                    </View>
                   
                {
                   
                    difficulty.map((value,index)=>(

                        <View key={index} style={styles.optionContainer}>
                        <LinearGradient
                            colors={value==currentOptionSelectedDiffculty ?['#0000', '#560bad']:['#b5179e', '#560bad']}
                            style={{borderRadius:20}}
                            >
                          <TouchableOpacity 
                        
                                style={styles.option}
                       
                                  activeOpacity={0.7}
                                  onPress={()=>{props.setDiffculty(value)
                                                setCurrentOptionSelectedDiffculty(value)
                                  }}>
                                  <View style={styles.options}>
                                  <Animatable.View  animation="fadeInRightBig" >
                              
                                  <Text style={styles.optionText}>{value}</Text>       
                                      
                                  </Animatable.View> 
      
                                  
                                  </View>
                          </TouchableOpacity>
                     </LinearGradient>     
                     </View>

                    ))
                }
            
                
               <View style={[styles.ques,{backgroundColor:"#f08080",marginTop:10}]}>
                        <Animatable.View  animation="fadeInLeftBig" >             
                        <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Select Category</Text>         
                        </Animatable.View>
                </View>
              
              {

                category.map((value,index)=>(


                    <View key={index} style={styles.optionContainer}>
                    <LinearGradient
                        colors={index==currentOptionSelectedCategory ?['#0000', '#560bad']:['#f08080', '#f08080']}
                        style={{borderRadius:20}}
                        >
                      <TouchableOpacity 
                              style={styles.option}
                   
                              activeOpacity={0.7}
                              onPress={()=>{
                                  props.setCategory(category[index][1])
                                  setCurrentOptionSelectedCategory(index)
                               }}>
                              <View style={styles.options}>
                              <Animatable.View  animation="fadeInRightBig" >
                          
                              <Text style={styles.optionText}>{category[index][0]}</Text>       
                                  
                              </Animatable.View> 
                               
                              </View>
                      </TouchableOpacity>
                 </LinearGradient>     
                 </View>

                  
                ))

              }

                <View style={[styles.ques,{backgroundColor:"#f72585",marginTop:10}]}>
                        <Animatable.View  animation="fadeInLeftBig" >             
                        <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Select Number of Question</Text>         
                        </Animatable.View>
                </View>

              {
                   
                   total_ques.map((value,index)=>(

                    <View key={index} style={styles.optionContainer}>
                    <LinearGradient
                        colors={value==currentOptionSelectedAmount ?['#0000', '#560bad']:['#f72585', '#ff477e']}
                        style={{borderRadius:20}}
                        >
                      <TouchableOpacity 
                              style={styles.option}
                   
                              activeOpacity={0.7}
                              onPress={()=>{props.setAmount(value)
                                            setCurrentOptionSelectedamount(value);
                              }}>
                              <View style={styles.options}>
                              <Animatable.View  animation="fadeInRightBig" >
                          
                              <Text style={styles.optionText}>{value}</Text>       
                                  
                              </Animatable.View> 
  
                              
                              </View>
                      </TouchableOpacity>
                 </LinearGradient>     
                 </View>

                ))    
              }

             <View style={styles.btn}>
        <TouchableOpacity 
                style={styles.start}
                activeOpacity={0.7}
                onPress={()=>(Validate())}>
            <LinearGradient
                colors={['#ff006e', '#801cec']}
                style={styles.start}
                >
                <Text style={[styles.textStart, {
                    color:'#fff'
                }]}>Submit</Text>
            </LinearGradient>
            </TouchableOpacity>
    </View>
   </Animatable.View>
    </LinearGradient>
        </View>
    )
}

export default TypeLevel

const {height} = Dimensions.get("screen");
const height_logo = height * 0.2
const {width} = Dimensions.get("screen");
const width_logo = width * 0.8;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%'  
    },
    footer:{
        flex:5,
        alignItems:"center",
        width:"95%",
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom:10
     },
     header:{
        flex:1,
        alignItems:"center"
    },
    optionContainer:{
        backgroundColor:'black',
        width:width_logo*0.7,
        marginTop:10,  
        borderRadius: 50,     
    },
    logoname:{
        fontSize:15,
        color:'white',
        fontWeight:'bold',
        paddingTop:10,
       
     },
   
    ques:{
    
        width:width_logo,
        color:'#fff',
        backgroundColor:'#841584',
        padding:5,
        borderRadius:10,
        alignItems:'center'
    

    },
    options: {
        width: '90%',
        justifyContent:'center',
        alignItems: 'center',
       
    },
      option: {
          width: '100%',
          padding:5,
          justifyContent: 'center',
          borderRadius: 10,
          alignItems:'center',
         
      },
      optionText: {
          fontSize:12,
          fontWeight:'bold',
          color:'white',
          paddingHorizontal:5
      },
    
   
  
    btn: {
        paddingTop:10,
        width:width_logo*0.9,
        alignItems:'center'

    },
   
    start: {
        width:'100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
   
   textStart: {
        fontSize: 18,
        fontWeight: 'bold'
    },
   

})