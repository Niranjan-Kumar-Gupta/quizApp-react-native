import React, {useEffect,useState} from 'react'
import {  Text, View,Alert, ActivityIndicator } from 'react-native'

import { getQuestion } from '../componenets/ques';
import QuizScreen from './quizScreen';
import TypeLevel from './Type';

const Qiuz = ({navigation}) => {



   const [data,setData] = useState([]);
   const [currentQuesIndex,setCurrentQuesIndex] = useState(2);
   const [isData,setIsData] = useState(false);
   const [amount,setAmount] = useState(null);
   const [diffculty,setDiffculty] = useState(null);
   const [category,setCategory] = useState(null);
   const [isSelect,setIsSelect] = useState(false);
   const [typeSelect,setTypeSelect] = useState(false);

   function getQuiz() {
       if (typeSelect) {
        getQuestion(diffculty,category,amount).then(data=>{
            setData(data);
            setIsData(true);
           
        },error=>{
            Alert.alert('Error','something went wrong')
        });
       }   
   }
  

  
  
   useEffect(()=>{
       getQuiz()
 
   },[typeSelect]);
   
   if (isData && isSelect) {
    
        return (
            <QuizScreen data={data}              
               navigation={navigation}/> 
        )
   }else if(!isSelect){
       return(
           <TypeLevel setAmount={setAmount}
                      setDiffculty={setDiffculty}
                       setCategory={setCategory} 
                       setIsSelect={setIsSelect} 
                       setTypeSelect={setTypeSelect}
                       amount={amount}
                       diffculty={diffculty}
                       category={category}
                       />
       )
   }
   return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <ActivityIndicator size='large' />
       <Text style={{marginTop:20,fontSize:20}}>Please Wait....</Text>
    </View>
   )
}

export default Qiuz

