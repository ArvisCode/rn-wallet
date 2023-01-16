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

export const RegistrationScreen = () => {
  const initialRegistrationData = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
  };

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [registrationData, setRegistrationData] = useState(
    initialRegistrationData
  );

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const submitForm = () => {
    keyboardHide();
    console.log(registrationData);
    setRegistrationData(initialRegistrationData);
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
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                  style={styles.textInput}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={registrationData.email}
                  onChangeText={(value) => {
                    setRegistrationData((prevState) => ({
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
                  value={registrationData.password}
                  onChangeText={(value) => {
                    setRegistrationData((prevState) => ({
                      ...prevState,
                      password: value,
                    }));
                  }}
                />
              </View>

              <View style={styles.blockWrapper}>
                <Text style={styles.inputTitle}>Confirm password</Text>
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={registrationData.confirmPassword}
                  onChangeText={(value) => {
                    setRegistrationData((prevState) => ({
                      ...prevState,
                      confirmPassword: value,
                    }));
                  }}
                />
              </View>

              <View style={styles.blockWrapper}>
                <Text style={styles.inputTitle}>First name</Text>
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={registrationData.firstName}
                  onChangeText={(value) => {
                    setRegistrationData((prevState) => ({
                      ...prevState,
                      firstName: value,
                    }));
                  }}
                />
              </View>

              <TouchableOpacity style={styles.btnSubmit} onPress={submitForm}>
                <Text style={styles.btnSubmitText}>REGISTER</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSubmit} onPress={keyboardHide}>
                <Text style={styles.btnSubmitText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
