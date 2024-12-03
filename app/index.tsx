import { useRouter } from "expo-router";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const router = useRouter();

  const onContinue = () => {
    router.navigate("/Login");
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require("@/assets/images/hometheme.jpg")}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <TouchableOpacity   activeOpacity={0.7} style={styles.button} onPress={onContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute", // Ensures the image fills the entire screen
  },
  overlay: {

position:"relative",
alignContent: "center",
marginTop:"140%",


  },
  button: {
    backgroundColor: "green",
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 5,
 
  },
  buttonText: {
    color: "#fff",
    fontSize:30,
    fontFamily: "Helvetica",
    marginLeft:20
  },
});
