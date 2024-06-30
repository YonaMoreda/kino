import {StyleSheet, Image, SafeAreaView, Dimensions, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import PhotoViewDate from "../components/PhotoViewDate";
import PhotoViewDescription from "../components/PhotoViewDescription";

type PhotoViewProps = {
    image: string;
    date: string;
    description: string;
};

export default function PhotoView(props: PhotoViewProps) {
    return (
        <View style={styles.viewContainer}>
            <Image
                style={styles.image}
                resizeMode={"contain"}
                source={{uri: props.image}}/>
            <PhotoViewDate date={props.date}/>
            <PhotoViewDescription description={props.description}/>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'column',
        // backgroundColor: 'green'
    },
    image: {
        width: "100%",
        aspectRatio: 1.78,
        height: "auto",
        // height: Dimensions.get('window').width,
        backgroundColor: 'black'
    }
});
