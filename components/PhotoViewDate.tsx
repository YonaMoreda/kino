import {SafeAreaView, StyleSheet, Text} from "react-native";
import React from "react";

type PhotoViewDateProps = {
    date: string;
};

export default function PhotoViewDate(props: PhotoViewDateProps) {
    return (
        <SafeAreaView>
            <Text style={styles.date}>{props.date}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    date: {
        textAlign: "left",
        paddingBottom: '1%',
        fontStyle: 'italic',
        fontSize: 12,
        color: 'white'
    }
});