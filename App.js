import {FlatList, Text, View, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import React, { useState } from "react";
import styles from "./ContainerStyles/MainStyles";
import Header from "./components/header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/addTodo";

export default function App() {

    const [toDos, setTodos] = useState([
        {text: "Buy coffee", key: "1"},
        {text: "Do Homework", key: "2"},
        {text: "Pack lunch", key: "3"},
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(toDos => toDos.key != key);
        })
    }

    const submitHandler = (text) => {
        if (text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    {text: text, key: Math.random().toString()},
                    ...prevTodos
                ]
            })
        } else {
            Alert.alert("Oh no!", "List items must be longer than 3 characters"), [
                {text: "Understood", onPress: () => console.log("Alert Closed")}
            ]
        } // if
    }

  return (
      <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
          console.log("Dismissed Keyboard");
      }}>
    <View style={styles.container}>
        <Header></Header>
        <View style ={styles.content}>
            <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
                <View>
                    <FlatList
                        data={toDos}
                        renderItem={({ item }) => (
                            <TodoItem item={ item } pressHandler={pressHandler} />
                        )}
                    />
                </View>
            </View>
        </View>
    </View>
      </TouchableWithoutFeedback>
  );
}

