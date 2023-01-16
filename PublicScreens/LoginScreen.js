import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { styles } from "./styles";

export const LoginScreen = () => {
  const initialLoginData = {
    email: "",
    password: "",
  };

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [loginData, setLoginData] = useState(initialLoginData);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const submitForm = () => {
    keyboardHide();
    console.log(loginData);
    setLoginData(initialLoginData);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.mainContainer}>
        <ImageBackground
          onPress={keyboardHide}
          style={styles.bgImage}
          source={require("../img/fon-225.jpg")}
        >
          <View style={{ marginHorizontal: 40 }}>
            <View style={styles.blockWrapper}>
              <TouchableOpacity
                style={styles.logoContainer}
                onPress={keyboardHide}
              >
                <Image
                  style={styles.logoImg}
                  source={require("../img/wallet.png")}
                />
                <Text style={styles.logoText}>Wallet</Text>
              </TouchableOpacity>

              <View style={styles.blockWrapper}>
                <Text style={styles.inputTitle}>Email/Login</Text>
                <TextInput
                  style={styles.textInput}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={loginData.email}
                  onChangeText={(value) => {
                    setLoginData((prevState) => ({
                      ...prevState,
                      email: value,
                    }));
                  }}
                />
              </View>

              <View style={styles.blockWrapper}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={loginData.password}
                  onChangeText={(value) => {
                    setLoginData((prevState) => ({
                      ...prevState,
                      password: value,
                    }));
                  }}
                />
              </View>

              <TouchableOpacity style={styles.btnSubmit} onPress={submitForm}>
                <Text style={styles.btnSubmitText}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSubmit} onPress={keyboardHide}>
                <Text style={styles.btnSubmitText}>REGISTER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
