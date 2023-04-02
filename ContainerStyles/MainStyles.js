import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    },
    header: {
      height: 100,
      paddingTop: 55,
      backgroundColor: "#21d9a1",
    },
    title: {
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    }
});

export default styles;