import React, { useState } from "react";
import {Text, TextInput, Button, View} from "react-native";
import styles from "../ContainerStyles/MainStyles";

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState("");

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
            placeholder={"new task..."}
            onChangeText={changeHandler}
            style={styles.input}
            />
            <Button
                title="Add Task"
                onPress={() => submitHandler(text)}
                color="#ddd"
            />
        </View>
    )



} // AddTodo