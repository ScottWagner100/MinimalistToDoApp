import React from "react";
import {StyleSheet, Text, View, FlatList, Image} from "react-native";
import styles from "../ContainerStyles/MainStyles";

const logoLoc = "/resources/logo.png"
export default function Header() {

    return (
    <View style={styles.header}>
        <Text style={styles.title}>My To-Do's:</Text>
    </View>
    )
} // Header