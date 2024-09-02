import {ScrollView, StyleSheet, View} from 'react-native';
import PhotoView from "./screens/PhotoView";
import React from "react";

export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} horizontal= {false} decelerationRate={0} snapToInterval={854} snapToAlignment={"center"}>
                <PhotoView
                    image={'https://lh3.googleusercontent.com/pw/AP1GczPWkv3x0TLpg0rCo9zTSOI8ZH8yoXiWNkcEu6BJVjU2BNfhj9JHja2JClsPOkwrbwu1qeTimd-IUN10oes7nlZ93Dm1x7c2enqH_SmC3GHZnCDH3UCDre1xG2VTIVyaZw2SvtRICjoGREbhrxKZU0DRXw=w826-h1796-s-no?authuser=0'}
                    date={"30.06.2024"}
                    description={"Wedding night! Wishing the newlyweds a lifetime of nights as beautiful as this one"}
                    reactions={'{"reactions": [{ "emoji": "❤️", "frequency": 5 }, { "emoji": "😍", "frequency": 3 }, { "emoji": "😭", "frequency": 1 }]}'}
                />
                <PhotoView
                    image={'https://lh3.googleusercontent.com/pw/AP1GczNXDxxoApJrw1Ke-5kdJUiyY-Lz3k3HjNLq3EIXQXje5HiS9gzYM34nhdasoy3dVr4fLDnh199C6CZ2pcEAtTaEFG73s29dkim4u6WcWM208u6pmdQqvidKdY9QAhIJRLLvtmlIFWIl30ApgnzOaIwsiA=w826-h1796-s-no?authuser=0'}
                    date={"01.07.2024"}
                    description={"The night was magical, but the love was even more enchanting. Congratulations to the happy couple!"}
                    reactions={'{"reactions": [{ "emoji": "❤️", "frequency": 3 }, { "emoji": "😍", "frequency": 2 }, { "emoji": "😭", "frequency": 1 }]}'}
                />
                <PhotoView
                    image={'https://lh3.googleusercontent.com/pw/AP1GczPYNjvtlplYH9zApu6ea4hvOrdwqLjMBCPwHt69gU9-vFK1s_Dl8tOo8ds1Ni0I-DweN3AwL2g5dmDRZR8VJKyWz3q7fH2m13BkQVjdmPwkoKzhIqxOgwto_LcggZbA9CgDj-GU7bUvwh5B4e-ZM2dRgQ=w882-h1280-s-no?authuser=0'}
                    date={"21.06.2024"}
                    description={"Baby Olga with cherries"}
                    reactions={'{"reactions": [{ "emoji": "❤️", "frequency": 7 }, { "emoji": "😍", "frequency": 3 }, { "emoji": "😭", "frequency": 2 }]}'}
                />
                <PhotoView
                    image={'https://lh3.googleusercontent.com/pw/AP1GczMTBSN-RFSPWRMBe4d6WwEXQpIeNG0WbgUlwYuJ_UEETEa4BLQi6A0W7JQ5EA5ic-DBAOGP1pxVoUBQSvrxMS7sfl_8KdMl-94fWiQhYuntZCiBqJXsZOWTSk8Ky90njsz0c_H-68eo3T9d9StRosgbRg=w1348-h1796-s-no?authuser=0'}
                    date={"30.06.2024"}
                    description={"Sunset at the beach with Mr. Levi 💖"}
                    reactions={'{"reactions": [{ "emoji": "❤️", "frequency": 15 }, { "emoji": "😍", "frequency": 8 }, { "emoji": "😭", "frequency": 3 }]}'}
                />
                <PhotoView
                    image={'https://lh3.googleusercontent.com/pw/AP1GczPgNw5HzGhnk68FLAxPcpJZxlL29z69yAPNlBVofSK1RDYGtH-4UxlBZveeEGirwxatsJ-YpWZ-cS4YSd-XST1xUyl_cSsydNyYjJobCcDnuu3d9XdODPgHd1fycdozyLJiPpf1E3UG3sae4hdvx5P5yg=w2394-h1796-s-no?authuser=0'}
                    date={"01.07.2024"}
                    description={"Badminton night 🏸"}
                    reactions={'{"reactions": [{ "emoji": "❤️", "frequency": 15 }, { "emoji": "😍", "frequency": 8 }, { "emoji": "😭", "frequency": 6 }]}'}
                />
                <PhotoView
                    image={'https://lh3.googleusercontent.com/pw/AP1GczNO6VPqAMIbCNkk6xoyTXlI64SxUBKIT-0m8VNkocao8BODeOqxLSI-1lnR_eET-miH5WI4RLmHpMeMusS3jOHwuNTz77dgxGtOuVCH9s2KPamrcpWUAG5cjKAd2y-iWAC0HUGL31pidW1lrBEEbZpgnA=w1348-h1796-s-no?authuser=0'}
                    date={"21.06.2024"}
                    description={"Happy birthday Mr. Levi 🎂 You are growing so fast"}
                    reactions={'{"reactions": [{ "emoji": "❤️", "frequency": 7 }, { "emoji": "😍", "frequency": 2 }, { "emoji": "😭", "frequency": 1 }]}'}
                />
            </ScrollView>
        </View>
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
