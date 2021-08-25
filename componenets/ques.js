import React from 'react'

export async function getQuestion(diffculty,category,amount){
   
    try {
        let questions = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${diffculty}&type=multiple`);
        let result = await questions.json(); 
        questions = null;
      
        return result.results;
    } catch (error) {
        throw error;
    }
}