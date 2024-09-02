import {StyleSheet, Image, View} from "react-native";
import {StatusBar} from "expo-status-bar";

import PhotoViewDetails from "../components/PhotoViewDetails";
import {useEffect, useState} from "react";
import React from "react";

type PhotoViewProps = {
    image: string;
    date: string;
    description: string;
    reactions: string;
};

export default function PhotoView(props: PhotoViewProps) {
    const [isShowingDetails, setIsShowingDetails] = useState(true);
    useEffect(() => {
    }, [isShowingDetails]);

    return (
        <View style={styles.viewContainer} onTouchStart={() => setIsShowingDetails(!isShowingDetails)}>
            <Image
                style={styles.image}
                resizeMode={"contain"}
                source={{uri: props.image}}
            />
            <PhotoViewDetails date={props.date} description={props.description} reactions={props.reactions} hidden={isShowingDetails}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'column',
    },
    image: {
        width: "100%",
        aspectRatio: 0.4604167,
        height: "auto",
        backgroundColor: 'black'
    }
});
