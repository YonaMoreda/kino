import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import PhotoView from "./screens/PhotoView";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <PhotoView
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s'}
                    date={"30.06.2024"}
                    description={"This is a gecko called Mr. rainbow. He likes eating delicious but yet annoying flies. He is a very fun lad!"}
                />
                <PhotoView
                    image={'https://media.istockphoto.com/id/544343124/photo/panther-chameleon.jpg?s=612x612&w=0&k=20&c=wf6Sj0GdwnogWq0DDmfxGkN15VOTaixrN0V7dCPsYsQ='}
                    date={"01.07.2024"}
                    description={"Another fun day at gecko land, such a beautiful sunset rising above the horizon. I am very grateful to be a gecko :D"}
                />
                <PhotoView
                    image={'https://media.istockphoto.com/id/578560412/photo/panther-chameleon.jpg?s=612x612&w=0&k=20&c=eDaeNHqUE0I4YY1_-YRzOePTfmQQLQqvl5KGRJR-Byo='}
                    date={"21.06.2024"}
                    description={"Showing my true colors"}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollView: {

    }
});
