import PhotoViewDate from "./PhotoViewDate";
import PhotoViewDescription from "./PhotoViewDescription";
import {StyleSheet, View} from "react-native";
import PhotoViewReactions from "./PhotoViewReactions";
import React from "react";

type PhotoViewDetailsProps = {
    date: string;
    description: string;
    reactions: string;
    hidden: boolean
}

export default function PhotoViewDetails(props: PhotoViewDetailsProps) {
    return (
        <View style={styles.viewContainer}>
            {!props.hidden &&
                <View style={styles.innerViewContainer}>
                <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                    <PhotoViewDate date={props.date}/>
                    <PhotoViewReactions reactions={props.reactions}/>
                </View>
                <PhotoViewDescription description={props.description}/>
            </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        position: 'absolute',
        bottom: '0%',
        width: '100%',
        left: '0%',
        backgroundColor: 'rgba(0, 0, 0, .6)'
    },
    innerViewContainer: {
        paddingTop: '3%',
        paddingBottom: '9%',
        left: '3%',
        width: '95%'
    }
});
