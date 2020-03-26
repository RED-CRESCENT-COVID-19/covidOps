import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading } from "../../components/";

//Theme
import { Strings, Styles, Colors } from "../../../theme";

const QUESTIONS_LIST = [
  {
    Question:
      "کیا آپ نے پچھلے ایک مہینے میں کسی  ایسی  جگہ پر سفر کیا ہے جہاں پر کرونا  وائرس کی بیماری  پھیلی ہوئی ہے؟",
    Answer: `need to add .

`
  },
  {
    Question:
      "کیا آپ نے پچھلے ایک مہینے میں کسی  ایسی  جگہ پر سفر کیا ہے جہاں پر کرونا  وائرس کی بیماری  پھیلی ہوئی ہے؟",
    Answer: ``
  },
  {
    Question: `کیا آپ کی کسی ایسے انسان سے ملاقات  ہوئی ہے جس کو کرونا وائرس کی  بیماری ہو؟`,
    Answer: ``
  },
  {
    Question: `آپ کرونا وائرس کی بیماری کے بارے میں ؟ ﮟﯿﮨ ﮯﺘﻧﺎﺟ ﺎﯿﮐ `,
    Answer: `ہم آپ کو یہ بتاناچاہتے ہیں کہ یہ چھینکنے
    ،کھانسنے اورہاتھ لگانے سے پھیلتی ہے

     اس سے بخار ،کھانسی ،سانس لینے میں 
    دقت ،تھکاوٹ ،نزلہ ،گلہ اور پیٹ دونوں
    خراب ہوسکتے ہیں

    کئی لوگوں میں اس بیماری کی کوئی علامت
    نہیں ہوتی۔ مگر چھ میں سے ایک انسان میں
    بیماری شدت اختیار کرسکتی ہے
    بچوں اور جوانوں کی نسبت بیمار لوگوں ،
    شوگر ،بلڈ پریشر،دل کی تکلیف والوں کے
    لئے یہ بیماری خطرناک ہے

    اس سے بچنے کا سب سے بہترین طریقہ
     ٹھیک سے ہاتھ دھونا ہے   

    `
  },
  {
    Question: `آپ کرونا وائرس کی بیماری کے بارے میں کیاجاننا چاہتے ہیں ؟`,
    Answer: `ہم آپ کو یہ بتانا چاہتے ہیں کہ گھر سے  نکلتے ہوئے اورگھر واپس آکر پہلے ہاتھ  دھوئیں )30 تک گنتی کے ساتھ ( اور دن  میں کم سے کم پانچ دفعہ ہاتھ دھوئیں
      
      کہنی میں چھنکیں اور کھانسیں

      چہرے کوہاتھ مت لگائیں
      
      صرف ضروری کام کےلئے گھر سے نکلیں
      اور دوسروں سے کم سے کم تین فٹ کا  
      فاصلہ رکھیں
       
       بچوں اوربڑوں کو ایک دوسرے سے علیحدہ
      رکھیں تاہم ایک دوسرے سے رابطہ نہ
      توڑیں

      کرونا کی بیماری سے بچنے کا طریقہ
      احتیاط، اپنا خیال اوردوسروں کا احساس
      ہے 

      اپنے پیاروں سے رابطے میں رہیں امید
      اورصحت کا پیغام پھیلائیں

      کرونا کے بارے میں خبریں دن میں صرف
      ایک مرتبہ دیکھیں

     بچوں اور بڑوں کو آسان الفاظ میں بیماری
     کے بارے میں بتائیں

     احتیاطی تدابیرکو ذہن میں رکھتے ہوئے
     روز مرہ زندگی کو برقرار رکھنے کی
     کوشش کریں اورروز ورزش کریں
      
      `
  },
  {
    Question: `آپ کو میری بات سے کیا سمجھ آیا ہے ؟`,
    Answer: ``
  },
  {
    Question: `آپ کے ذہن میں مزید کوئی سوال ہیں ؟`,
    Answer: ``
  },
  {
    Question: `بیماری کے بارے میں دیگر معلومات`,
    Answer: `یہ بیماری ہے عذاب یا سزا نہیں ہے۔
بیماری تیزی سے پھیلتی ہے مگر تقریباََ  اسی فیصدلوگ ہسپتال جائے بغیر ہی ٹھیک  ہوجاتے ہیں۔

بیماری کی علامت آنے میں دوسے چودہ  دن لگ سکتے ہیں

گھر سے نکلتے ہوئے اور گھر واپس آنے  کے ساتھ ہی پہلے ہاتھ دھوئیں

صرف بیمار لوگ اور جو لوگ بیمارلوگوں  کا خیال کررہے ہیں ان کو ماسک استعمال  کرنا چاہیئے۔
ایک ماسک صرف ایک دفعہ استعمال  کیا جاسکتا ہے

ایک دفع میں ایک سے زیادہ ماسک پہننے  کاکوئی فائدہ نہیں ہے

فی الحال کرونا کاکوئی حفاظتی ٹیکہ یا دوائی نہیں ہے،اینٹی بائیوٹک کھانے سے  اس کا علاج نہیں ہوسکتا ۔جانوروں سے یہ
بیماری نہیں پھیلتی مگر ان کا ہاتھ لگاکر
بتائے ہوئے طریقے سے ہاتھ دھوئیں۔
بتائے ہوئے طریقے سے ہاتھ دھوئیں۔

سگریٹ نوشی اور نشے سے آپ کی کورونا
سے لڑنے کی طاقت ختم ہوسکتی ہے بڑھ 
نہیں سکتی ۔

کورونا کا وائرس  کچھ گھنٹوں سے کچھ
دنوں تک چیزوں پر رہ سکتاہے ۔ان کو
صاف کرنے کےلئے عام گھریلوجراثیم
کش سپرے سے صاف کریں اور سیکھے
ہوئے طریقے  سے ہاتھ دھو لیں ۔

اگر آپ کو کسی بھی قسم کی کھانسی
،زکام یا بخارہے تو دوسرے لوگوں سے
ملنے سے گریز کریں 
 
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
      this.props.navigation.navigate("Advisory");
    }
  }
  onBackButton() {
    const { activeQuestion } = this.state;
    if (activeQuestion > 0)
      this.setState({ activeQuestion: activeQuestion - 1 });
    else {
      this.props.navigation.goBack();
    }
  }
  render() {
    const { activeQuestion } = this.state;
    console.log("activeQuestion state is: ", activeQuestion);
    console.log("QUESTIONS_LIST.length is: ", QUESTIONS_LIST.length);
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`Paragarphs.INFORMATIONCARE.TTITLE`)} />
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
            title={I18n.t(`ButtonTitles.BACK`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={() => this.onBackButton()}
          />
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.NEXT`)}
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
