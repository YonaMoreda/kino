import {StyleSheet, Image, SafeAreaView} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function PhotoView() {
    return (
        <SafeAreaView style={styles.viewContainer}>
            <Image
                style={styles.image}
                resizeMode={"contain"}
                source={this.props.image}></Image>
            <StatusBar style="auto" />
            <Date/>
            <Description/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: "100%",
        height: "100%"
    }
});
