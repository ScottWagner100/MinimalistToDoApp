import {Text, View, TouchableOpacity} from 'react-native';
import React from "react";
import styles from "../ContainerStyles/MainStyles";
export default function TodoItem({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )

} // ToDoItem