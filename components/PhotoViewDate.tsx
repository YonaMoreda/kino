import {SafeAreaView, StyleSheet, Text} from "react-native";

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
        color: 'gray',
        textAlign: "left",
        paddingTop: '4%',
        paddingLeft: '4%',
        fontStyle: 'italic',
        // backgroundColor: 'yellow'
    }
});