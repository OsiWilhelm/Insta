import React from "react";
import {
  SafeAreaView,
  Button,
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
} from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.linha3}> Português (Brasil) √ </Text>
        </View>

        <View style={styles.logoinsta}>
          <Image
            source={{
              uri: "https://www.rafaelwaks.com.br/wp-content/uploads/2021/03/Instagram-Logo.png",
            }}
            style={{
              width: 200,
              height: 100,
            }}
          />
        </View>

        <View style={styles.foto}>
          <Image
            source={{
              uri: "https://scontent.fgig4-1.fna.fbcdn.net/v/t31.18172-8/12377679_1069645946421740_7800969297995831520_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1j3QTfdJCAAAX880bWZ&tn=9ASg99RcR-Z0Marp&_nc_ht=scontent.fgig4-1.fna&oh=08ab4aeeaa0f8d204aca7d9ce1de0ac6&oe=61D59740",
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 200 / 2,
            }}
          />
        </View>

        <Button
          title="Continuar como osiwilhelm"
          onPress={() =>
            Alert.alert("estamos trabalhando para resolver esse problema")
          }
        />

        <Text style={styles.linha1}>
          Não é osiwilhelm? <Text style={styles.linha2}>Trocar de Conta</Text>
        </Text>

        {/* <Text style={styles.linha3}> 
      <span aria-label="from Meta" class="glyphsSpriteFrom_meta u-__7"></span>
      </Text>   */}

        <View style={styles.meta}>
          <Image
            /* source={{
              uri: "https://pbs.twimg.com/media/FDQ4g5FXMAQP-SX.jpg",             
            }}
            style={{
              width: 200,
              height: 50,
            }} */

            source={require("./assets/meta-logo.png")}
            style={{
              width: 200,
              height: 50,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "white",
  },

  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    borderRadius: 5,
    margin: 10,
  },

  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },

  logoinsta: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  foto: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  linha1: {
    color: "black",
    margin: 20,
  },

  linha2: {
    color: "blue",
    marginBottom: -50,
  },

  linha3: {
    fontSize: 11,
    color: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -50,
  },

  meta: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
    marginBottom: -50,
    backgroundColor: "#f5f5f5",
    width: "100%",
  },
});

export default App;
