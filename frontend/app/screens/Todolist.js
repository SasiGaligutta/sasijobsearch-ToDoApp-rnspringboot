import React, { useState, useEffect } from 'react';
import { View, Text, Alert, StyleSheet} from 'react-native';
import {Card, Button, Title ,Paragraph } from 'react-native-paper';
import {task} from './Todoadd';

const Todolist = () =>{
    //Table which has several rows, to be iterated with .map. How to 
    //.map

    //const todo = {Tsknme, Tskdesc, onDate, priority, atTime}
    let todoArray = new Array[new task]


    todoArray = useEffect(() => {
        fetch('http://192.168.0.106:8080/task/getAll', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
        
          })
            .then((response) => response.json())
            .then((json) => {
              console.log("User json ==========" + JSON.stringify(json))
              return json
            })
            .catch((error) => console.error("Error ==========" + error));
      },[]);

      console.log(todoArray)
    
    return(
        <View>
            <Card></Card>
        </View>
    )
}

export default Todolist

//Get each row from database with .map function, prepare a Card component to display Tsknme, priority, 
//Starttime of each ToDo.  Every row to be displayed in a card along with a delete button.