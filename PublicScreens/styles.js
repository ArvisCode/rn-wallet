import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  blockWrapper: {
    marginBottom: 20,
  },
  logoContainer: {
    marginHorizontal: 60,
    marginBottom: 50,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-around",
  },
  logoImg: {
    height: 50,
    width: 50,
  },
  logoText: {
    paddingBottom: 20,
    textAlign: "center",
    fontSize: 48,
  },
  inputTitle: {
    fontSize: 20,
    color: "#000000",
  },
  textInput: {
    backgroundColor: "#dfdfdf",
    textAlign: "center",
    height: 50,
    fontSize: 24,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  btnSubmit: {
    height: 50,
    width: 280,
    marginHorizontal: 40,
    marginTop: 20,
    backgroundColor: "#24CCA7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  btnSubmitText: {
    color: "#fff",
    fontSize: 24,
  },
});
