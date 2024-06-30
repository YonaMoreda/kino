import {StyleSheet, Text} from "react-native";

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
        padding: '4%',
        paddingTop: '2%',
        paddingBottom: '7%'
        // backgroundColor: 'blue'
    }
});