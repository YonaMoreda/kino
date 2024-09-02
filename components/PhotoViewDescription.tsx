import {StyleSheet, Text} from "react-native";
import React from "react";

type PhotoViewDescriptionProps = {
    description: string;
};

export default function PhotoViewDescription(props: PhotoViewDescriptionProps) {
    return (
        <Text style={styles.description}>{props.description}</Text>
    )
}

const styles = StyleSheet.create({
    description: {
        fontSize: 14,
        color: 'white',
        paddingTop: '1%'
    }
});