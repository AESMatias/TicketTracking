import { View } from "react-native";
import StyleSheet from "react-native";
import { colors } from "./generalColors";

export default function WrapperScreen() {
    return (
        <View style={styles.Screen}>
        </View>
    );
    }

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: colors.backgroundGeneral,
        padding: 10,
        margin: 10,
    },
});