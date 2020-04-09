import { AsyncStorage } from "react-native";

export const getInternetStatus = async () => {
  const status = await AsyncStorage.getItem("InternetStatus");
  return status;
};
