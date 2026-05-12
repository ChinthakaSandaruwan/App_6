import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>

        <Image
          source={{
            uri: "https://i.pinimg.com/564x/d2/c1/6d/d2c16d99034f9407fd708dfc3356c688.jpg",
          }}
          style={styles.circle}
        />

     
        <Text style={styles.header}>Login</Text>
        <Text style={styles.subHeader}>Smart Shopping Center</Text>
      </View>

      <Text style={styles.inputText}>Email</Text>
      <TextInput style={styles.input} />

      <Text style={styles.inputText}>Password</Text>
      <TextInput style={styles.input} />

      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },

  headerView: {
    alignItems: "center",
    gap: 10,
    marginBottom: 50,
  },

  circle: {
    backgroundColor: "rgb(52, 53, 52)A3B",
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  header: {
    fontSize: 18,
    fontWeight: "bold",
  },

  subHeader: {
    color: "rgb(52, 53, 52)A3B",
  },

  inputText: {
    fontWeight: "bold",
    marginTop: 20,
  },

  input: {
    backgroundColor: "rgb(183, 183, 183)A3B",
    borderRadius: 10,
    marginTop: 10,
  },
});
