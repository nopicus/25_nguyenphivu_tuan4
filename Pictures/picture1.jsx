
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const data = {
    userName: "a",
    userPassword: "1",
  };

  const dangnhap = () => {
    if (name === data.userName && password === data.userPassword) {
      alert("Đăng nhập thành công", "Chào mừng bạn!");
    } else {
      alert("Đăng nhập thất bại", "Vui lòng kiểm tra name và mật khẩu");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <View style={styles.view2}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.btnLogin} onPress={dangnhap}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 18, marginTop: 30, fontWeight: "bold" }}>
          Forgot your password?
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(to bottom, rgba(251, 203, 0, 1), rgba(191, 154, 0, 1))",
  },
  view1: {
    height: 180,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  view2: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: 20,
  },
  textInput: {
    width: 350,
    height: 50,
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    fontSize: 18,
    marginTop: 20,
    border: "1px solid rgba(242, 242, 242, 1)",
    paddingLeft: 10,
  },
  btnLogin: {
    marginTop: 60,
    width: 350,
    height: 45,
    backgroundColor: "black",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

