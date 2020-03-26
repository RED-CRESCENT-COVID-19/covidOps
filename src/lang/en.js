export default {
  headings: {
    SMSVERIFICATION: "SMS Verification",
    LOCATIONDATA: "Location Data",
    HEALTHSCAN: "Health Scan",
    HOUSEHOLDNUMBER: "Household Number",
    HOUSEHOLDHISTORY: "Household History",
    RESPONSE: "Response",
    MEMEBERDETAILS: "Member Details",
    TEMPERATURE: "Temperature",
    SYMPTOMS: "Symptoms",
    ADVISORY: "Advisory",
    PRECAUTIONS: "Precautions",
    HOME: "MS-XXXXX-XX",
    SMSSERVICE: "SMS Notifications"
  },
  ButtonTitles: {
    CONTINUE: "Continue",
    VERIFY: "Verify",
    ALLOW: "Allow",
    BACK: "Back",
    NEXT: "Next",
    YES: "Yes",
    NO: "No",
    ADDHOUSEHOLD: "Add Household",
    HOUSEHOLDHISTORY: "Household History",
    ADDMEMEBERS: "Add Memebers",
    RESEND: "Resend",
    DONE: "DONE",
    CANCEL: "CANCEL"
  },
  Paragarphs: {
    SMSSERVICE:
      "Do you want to recieve infocare SMS on your mobile number? Please enter your mobile phone number",
    PHONEVERIFICATION:
      "We need to verify your device via SMS code. A text message will be sent to your phone number. Please enter your phone number to continue:",
    SMSVERIFICATION:
      "A text message with a verification code has been sent to your number. Please enter the verification code to continue:",
    LOCATIONDATA:
      "We require your GPS data to accurately identify households. Please click “Allow” when asked for location permissions.",
    HEALTHSCAN:
      "You can add new households or edit/remove them by going into the house-hold history",
    HOUSEHOLDNUMBER:
      "Please enter the census household identification number to continue",
    HOUSEHOLDNUMBERADDRESS: "Home Address",
    HOUSEHOLDNUMBERQUESTION:
      " Have you been able to contact a member of the household?",
    RESPONSE: "Have you been able to contact a member of the household?",
    MEMEBERS: "No members added yet",
    SYMPTOMS: "Please check all or any symptoms the members is experiencing",
    ADVISORY:
      "Please recommend the household to contact via helpine, whatsapp or website and not visit the hospital immedidately",
    HOME: "No memebers added yet",
    PRECAUTIONS:
      "Please recommend the member to practice the following precautions",
    TEMPERATURE: "Please note the temperature of the household member",
    INFORMATIONCARE: {
      TTITLE: "Information Care",
      GENERAL: "What do you know about Coronavirus disease CoVID-19?",
      HANDWASH: "The correct way of washing your hands"
    },
    Advisory: {
      HELPLINE: {
        TITLE: "COVID-19 HELPLINE",
        PHONE: "1030"
      },
      WEBSITE: {
        TITLE: "dedicated website",
        URL: "http://www.covid.gov.pk/"
      },
      MESSAGE: {
        TITLE: "Who whatsapp info",
        PHONE: "Message 'hi' to +41798931892"
      }
    }
  },
  Labels: {
    PHONENUMBER: "Phone number",
    VERIFICATIONCODE: "Verification Code",
    VERIFICATION_CODE_EAMPLE: "e.g 0123456789",
    DIDNOTRECIVECODE: "Didn’t recieve code?",
    HOUSEHOLDNUMBER: "House hold number",
    HOUSEHOLDSCANNED: "HOUSEHOLD SCANNED",
    PEOPLESCANNED: "PEOPLE SCANNED",
    SCANNINGSUMMARY: "SCANNING SUMMARY",
    CNICNUMBER: "CNIC NUMBER",
    PHONENUMBER: "PHONE NUMBER",
    AGE: "AGE",
    GENDER: "GENDER",
    GENDEROPTIONS: {
      MALE: "MALE",
      FEMALE: "FEMALE",
      OTHER: "OTHER"
    },
    TEMPERATUREREADING: "TEMPERATURE READING",
    SYMPTOM: "SYMPTOM",
    SYMPTOMLIST: {
      FEVER: "Fever",
      DRYCOUGH: "Dry Cough",
      SPUTUMPRODUCTION: "Sputum production",
      BLOODINCOUGH: "Blood in cough",
      FATIGUE: "Fatigue",
      HEADACHE: "Headache",
      BODYPAIN: "Body pain",
      SORETHROAT: "Sore throat",
      NASALCONGESTION: "Nasal congestion",
      SHORTNESSOFBREATH: "Shortness of breath",
      REDNESSOFEYES: "Redness of eyes",
      DIARRHEA: "Diarrhea",
      OTHERSYMPTOMS: "OTHER SYMPTOMS",
      OTHERSYMPTOMSEAMPLE: "e.g Arrhythmia"
    }
  },
  Symptom: {
    symptomName: "Fever",
    symptomNumber: "Symptom 1",
    symptomValue: "fever",
    symptomLable: "fever"
  },
  QUESTIONS_LIST: {
    Precautions: [
      {
        Question: "",
        Answer: `Greet people from a distance

    Don’t shake hands or hug people

    Ask questions before giving out any information

    Only give out scientific information provided in the infocare section

    Let people express their feelings and concerns
`
      },

      {
        Question:
          "Have you travelled to a coronavirus infected area in the past month?",
        Answer: ``
      },

      {
        Question:
          "Have you contacted anyone that might have the coronavirus infection?",
        Answer: ``
      }
    ],
    Information: [
      //   {
      //     Question:
      //       "کیا آپ نے پچھلے ایک مہینے میں کسی  ایسی  جگہ پر سفر کیا ہے جہاں پر کرونا  وائرس کی بیماری  پھیلی ہوئی ہے؟",
      //     Answer: `need to add .

      // `
      //   },
      //   {
      //     Question:
      //       "کیا آپ نے پچھلے ایک مہینے میں کسی  ایسی  جگہ پر سفر کیا ہے جہاں پر کرونا  وائرس کی بیماری  پھیلی ہوئی ہے؟",
      //     Answer: ``
      //   },
      //   {
      //     Question: `کیا آپ کی کسی ایسے انسان سے ملاقات  ہوئی ہے جس کو کرونا وائرس کی  بیماری ہو؟`,
      //     Answer: ``
      //   },
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
    ]
  }
};
