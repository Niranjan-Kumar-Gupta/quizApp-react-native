import React, {useEffect,useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View,StatusBar,Dimensions,Alert } from 'react-native'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { decode } from 'html-entities'; 

const Option = (props) => {
  
  let options = [...props.option.incorrect_answers,props.option.correct_answer]
  options.sort(); 
 
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionDisable, setIsOptionDisable] = useState(false);
 
  const [select_Option,setSelect_Option] = useState(null);


  const validAnswer = (selectOption) => {
    let correct_Option = props.option.correct_answer;
    setCurrentOptionSelected(selectOption);
    setCorrectOption(correct_Option);
    setIsOptionDisable(true);
    setSelect_Option(selectOption)
    if (selectOption == correct_Option) {
        props.setScore(props.score+1);
    }
  }

  useEffect(()=>{
    setIsOptionDisable(false)
  },[props.option.incorrect_answers])

 
    return(
        <View >
          {
           options.map((option,index) => (
             <View  key={option}  style={styles.optionContainer}>
                  <LinearGradient
                      colors={['#841584', '#801cec']}
                      style={{borderRadius:20}}
                      >
              <TouchableOpacity 
                    style={styles.option}
                    disabled={isOptionDisable}              
                    key={option}
                    activeOpacity={0.7}
                    onPress={()=>validAnswer(option)}>
                    <View style={styles.options}>
                    <Animatable.View  animation="fadeInRightBig" >
                   
                      <Text style={styles.optionText}>{index+1}.{decode(option)}</Text>       
                         
                      </Animatable.View> 

                      {
                        option==correctOption ? (
                          <View style={{width:30,height:30,borderRadius:15,backgroundColor:'#22BB33',justifyContent:'center',alignItems:'center'}}>
                              <MaterialCommunityIcons name="check"/>
                          </View>
                        ) : option == currentOptionSelected ? (<View style={{width:30,height:30,borderRadius:15,backgroundColor:'#FF6417',justifyContent:'center',alignItems:'center'}}>
                              <MaterialCommunityIcons name="close"/>
                          </View>) : null
                      }
                    </View>
               </TouchableOpacity>
               </LinearGradient>     
               </View>
           ))
          } 
        </View>
      )
  
}

export default Option

const {width} = Dimensions.get("screen");
const width_OPTION = width * 0.75;

const styles = StyleSheet.create({
  optionContainer:{
      backgroundColor:'black',
      width:width_OPTION,
      marginTop:15,  
      borderRadius: 50,     
  },
  options: {
    width: '100%',
    justifyContent:'space-between',
    alignItems: 'center',
    alignContent:'space-between',
    flexDirection: 'row'  
},
  option: {
      width: '100%',
      padding:10,
      justifyContent: 'center',
      borderRadius: 10,
      alignItems:'center',
      height:40
  },
  optionText: {
      fontSize:12,
      fontWeight:'bold',
      color:'white',
      paddingHorizontal:10
  },

})