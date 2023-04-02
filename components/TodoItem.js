import {Text, View, TouchableOpacity} from 'react-native';
import React from "react";
import styles from "../ContainerStyles/MainStyles";
import { Feather } from '@expo/vector-icons';
export default function TodoItem({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <Feather name="delete" size={24} color="#aaa" />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )

} // ToDoItem