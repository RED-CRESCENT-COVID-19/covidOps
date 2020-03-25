import { StyleSheet } from "react-native";
import Colors from "./Colors";

const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerHeader: {
    paddingTop: 95,
    paddingLeft: 20,
    paddingRight: 20
  },
  textHeader: {
    fontSize: 34,
    color: Colors.primaryColor
  },
  lineHeader: {
    height: 2,
    backgroundColor: Colors.primaryColor,
    alignSelf: "stretch"
  },
  lineDivider: {
    height: 2,
    backgroundColor: Colors.dividerColor,
    alignSelf: "stretch",
    paddingLeft: 20,
    paddingRight: 20
  },
  topParagraph: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 16,
    color: Colors.paragraphTextColor
  },
  Spacer300: {
    paddingTop: 300
  },
  Spacer100: {
    paddingTop: 100
  },
  Spacer50: {
    paddingTop: 50
  },
  Spacer20: {
    paddingTop: 20
  },
  leftButtonContainer: {
    paddingRight: 220,
    paddingLeft: 20
  },
  rightButtonContainer: {
    paddingLeft: 220,
    paddingRight: 20
  },
  smallButton: {
    width: 140,
    height: 44,
    overflow: "hidden",
    borderRadius: 40
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  largebuttonsContainer: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  largeButton: {
    width: 320,
    height: 44,
    overflow: "hidden",
    borderRadius: 40
  },
  Spacer200: {
    paddingTop: 200
  },
  containerHeader: {
    paddingTop: 95,
    paddingLeft: 32,
    paddingRight: 32
  },
  textHeader: {
    fontSize: 34,
    color: Colors.primaryColor
  },
  lineHeader: {
    height: 2,
    backgroundColor: Colors.primaryColor,
    alignSelf: "stretch"
  },
  lineDivider: {
    height: 1,
    backgroundColor: Colors.dividerColor,
    alignSelf: "stretch",
    paddingLeft: 20,
    paddingRight: 20
  },
  topParagraph: {
    paddingTop: 20,
    paddingLeft: 36,
    paddingRight: 36,
    fontSize: 16,
    color: Colors.paragraphTextColor
  },
  genderText: {
    paddingTop: 20,
    paddingLeft: 36,
    paddingRight: 36,
    fontSize: 16,
    color: Colors.primaryColor
  },
  Spacer100: {
    paddingTop: 100
  },
  Spacer200: {
    paddingTop: 200
  },
  Spacer250: {
    paddingTop: 250
  },
  Spacer300: {
    paddingTop: 300
  },
  leftButtonContainer: {
    paddingRight: 220,
    paddingLeft: 20
  },
  rightButtonContainer: {
    paddingLeft: 220,
    paddingRight: 20
  },
  smallButton: {
    width: 140,
    height: 44,
    overflow: "hidden",
    borderRadius: 40
  },
  smallGenderButton: {
    width: 106,
    height: 36,
    overflow: "hidden",
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.primaryColor
  },
  genderButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 35,
    paddingRight: 35
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },

  infoItemContainer: {
    paddingTop: 10,
    paddingLeft: 35,
    paddingRight: 35
  },
  infoItemHeader: {
    fontSize: 14,
    textTransform: "uppercase",
    color: Colors.primaryColor
  },
  infoItemTitle: {
    fontSize: 20,
    paddingTop: 10,
    height: 50,
    width: 300,
    color: Colors.paragraphTextColor
  },
  infoContainer: {
    flexDirection: "row"
  },
  checkBoxContainer: {
    paddingTop: 10,
    paddingLeft: 35,
    paddingRight: 35
  },
  checkBoxHeader: {
    fontSize: 14,
    textTransform: "uppercase",
    color: Colors.primaryColor
  },
  checkBoxTitle: {
    fontSize: 20,
    paddingTop: 10,
    height: 50,
    width: 300,
    color: Colors.paragraphTextColor
  },
  symptomsContainer: {
    flexDirection: "row"
  },
  checkBoxStyle: {
    color: Colors.primaryColor
  },
  InfoListContainer: {
    paddingTop: 10,
    paddingLeft: 35,
    paddingRight: 35
  },
  InfoListHeader: {
    fontSize: 14,
    // paddingBottom: 15,
    textTransform: "uppercase",
    color: Colors.primaryColor
  },
  InfoListTitle: {
    fontSize: 20,
    paddingTop: 10,
    height: 50,
    width: 240,
    color: Colors.paragraphTextColor
  },
  memberContainer: {
    flexDirection: "row"
  },
  InfoListStyle: {
    color: Colors.primaryColor
  },
  ScrollViewStyle: {
    height: 100
  },
  topQuestion: {
    paddingTop: 20,
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 16,
    lineHeight: 24,
    color: Colors.primaryColor
  },
  answer: {
    paddingTop: 20,
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
    color: Colors.paragraphTextColor
  }
});

export default Styles;
