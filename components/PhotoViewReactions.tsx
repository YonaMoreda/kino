import {StyleSheet, Text, View} from "react-native";
import React from "react";

interface IPhotoViewReaction {
    emoji: string;
    frequency: number;
}

type PhotoViewReactionsProps = {
    reactions: string;
}

export default function PhotoViewReactions(props: PhotoViewReactionsProps) {
    return (
        <View style={{flexDirection: 'row'}}>
            {JSON.parse(props.reactions).reactions.map((reaction: IPhotoViewReaction, idx: number) =>
                <Text key={idx} style={styles.reaction}> {reaction.emoji + reaction.frequency} </Text>
            )}
        </View>

    );
}

const styles = StyleSheet.create({
    reaction: {
        fontSize: 13,
        color: 'white'
    }
});