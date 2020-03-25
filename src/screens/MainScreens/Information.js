import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Alert
} from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";
//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

const QUESTIONS_LIST = [
  {
    Question: Strings.Paragarphs.INFORMATIONCARE.GENERAL,
    Answer: `COVID-19 is the infectious disease caused by the most recently discovered coronavirus.
 
The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea.

Some people become infected but don’t develop any symptoms and don't feel unwell. 
 
Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness Think children or young adults.

Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.
 
Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.
 
Avoid touching eyes, nose and mouth.

`
  },
  {
    Question: `What would you like to know about Coronavirus disease CoVID-19?`,
    Answer: `Wash your hands properly (how you were taught by the health service volunteer)
 
Avoid touching eyes, nose and mouth.
 
Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue

when you cough or sneeze. Then dispose of the used tissue immediately.

Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing. Avoid unnecessarily going out into public places. 
 
Separate the elderly from children but keep in touch virtually.

The best way to fight the Corona virus illness (CoVid-19) is to protect yourself and be supportive to others. Assisting others in their time of need can benefit the person receiving support as well as the helper. 

Amplify positive and hopeful stories and positive images of local people who have experienced COVID-19 e.g. Stories of people who have recovered or who have supported a loved one and are willing to share their experience. 

Stay in online contact with family and friends.

Minimize watching, reading or listening to news that causes you to feel anxious or distressed; Seek information updates at specific times during the day, once or twice. 

Explain the disease and how to do to deal with CoVid-19, in simple terms to children and the elderly, 

`
  },
  {
    Question: `What have you understood?`,
    Answer: "4352345245"
  },
  {
    Question: `Do you have any questions?`,
    Answer: "4352345245"
  },
  {
    Question: `General information about Coronavirus`,
    Answer: `Covid-19 is a viral infection spread from person to person. Do not stigmatise people who have 

Only wear a mask if you are ill with COVID-19 symptoms (especially coughing) or looking after someone who may have COVID-19. 
 
Disposable face masks can only be used once.

Most estimates of the incubation period for COVID-19 range from 1-14 days

Stay home if you feel unwell. 

Studies suggest that coronaviruses (including preliminary information on the COVID-19 virus) may persist on surfaces for a few hours or up to several days. If you think a surface may be infected, clean it with simple disinfectant to kill the virus and protect yourself and others. Clean your hands with an

alcohol-based hand rub or wash them with soap and water. Avoid touching your eyes, mouth, or nose.

Possible animal sources of COVID-19 have not yet been confirmed. 

To protect yourself, such as when visiting live animal markets, avoid direct contact with animals and surfaces in contact with animals. Ensure good food safety practices at all times. 

To date, there is no vaccine and no specific antiviral medicine to prevent or treat COVID-2019. Antibiotics should not be used as a means of prevention or treatment of COVID-19. 
 
If you have a fever, cough and difficulty breathing, seek medical attention and call in advance TO THE HELPLINE.
`
  }
];
export default class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: 0
    };
  }

  onNextButton() {
    const { activeQuestion } = this.state;
    if (activeQuestion < QUESTIONS_LIST.length - 1)
      this.setState({ activeQuestion: activeQuestion + 1 });
    else {
      Alert.alert(
        `End of Array!`,
        "Keep your app up to date to enjoy the latest features",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: () => console.log("OK Pressed")
          }
        ],
        { cancelable: false }
      );
    }
  }
  onBackButton() {
    const { activeQuestion } = this.state;
    if (activeQuestion > 0)
      this.setState({ activeQuestion: activeQuestion - 1 });
    else {
      Alert.alert(
        `Start of Array!`,
        "Keep your app up to date to enjoy the latest features",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: () => console.log("OK Pressed")
          }
        ],
        { cancelable: false }
      );
    }
  }
  render() {
    const { activeQuestion } = this.state;
    console.log("activeQuestion state is: ", activeQuestion);
    console.log("QUESTIONS_LIST.length is: ", QUESTIONS_LIST.length);
    return (
      <View style={Styles.container}>
        <Heading headerText={Strings.Paragarphs.INFORMATIONCARE.TTITLE} />
        <Text style={Styles.topQuestion}>
          {QUESTIONS_LIST[activeQuestion].Question}
        </Text>
        <ScrollView style={Styles.ScrollView}>
          <Text style={Styles.answer}>
            {QUESTIONS_LIST[activeQuestion].Answer}
          </Text>
        </ScrollView>
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={Strings.ButtonTitles.BACK}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={() => this.onBackButton()}
          />
          <RaisedTextButton
            title={Strings.ButtonTitles.NEXT}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={() => this.onNextButton()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
