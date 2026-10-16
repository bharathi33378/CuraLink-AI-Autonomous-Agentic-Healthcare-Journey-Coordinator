/* ==========================================================================
   CURALINK AI - AGENTIC HEALTHCARE JOURNEY COORDINATOR ENGINE (agent.js)
   National AI Agent Hackathon Master Release
   Autonomous Goal-Oriented Multi-Step Healthcare Agent with 6-Language Multilingual Voice
   Languages Supported: 🇺🇸 English, 🇮🇳 தமிழ் (Tamil), 🇮🇳 हिंदी (Hindi), 
                        🇮🇳 తెలుగు (Telugu), 🇮🇳 ಕನ್ನಡ (Kannada), 🇮🇳 മലയാളം (Malayalam)
   ========================================================================== */

// --- 1. COMPREHENSIVE MULTILINGUAL LOCALIZATION & VOICE DICTIONARY ---
const agentI18n = {
  en: {
    name: "English",
    bcp47: "en-IN",
    fallbackBcp47: "en-US",
    micListening: "Listening... Speak now",
    micIdle: "Tap Mic to Speak",
    welcome: (name) => `Hello ${name}! I am your Autonomous Healthcare Journey Coordinator. Speak or tap below to coordinate your doctor appointment, transport, and records.`,
    proposal: (name) => `Of course, ${name}. I will coordinate your complete cardiology visit. I have prepared a personalized 8-step journey plan for you. Please review and approve it to proceed.`,
    doctorOptions: (doctor) => `I found available consultation times for your cardiologist ${doctor}. Tomorrow at 10:00 AM or 02:30 PM. Which slot do you prefer?`,
    summaryReview: (doctor) => `I have compiled your verified medical summary for ${doctor}. Please review the details before I share them with your physician.`,
    transitQuery: () => `Would you like me to arrange transportation to City Heart Institute for your appointment?`,
    transitOptionsDesc: () => `I found suitable transportation options: Senior AC Medical Cab with wheelchair support for ₹280, or standard taxi for ₹180.`,
    journeySuccess: (name) => `Wonderful, ${name}! Your complete cardiology visit has been coordinated. Appointment, clinical summary, transport, alarms, and caregiver notifications are all confirmed.`,
    emergencyAlert: (symptoms, caregiver) => `🚨 EMERGENCY ALERT: Potentially urgent symptoms detected ("${symptoms}"). Please seek immediate emergency medical care. Emergency services (108 / 911) should be contacted immediately. An emergency SOS has been prepared for your caregiver ${caregiver}.`,
    generalReply: (name) => `Hello ${name}. I am your Healthcare Journey Coordinator. Say "I need to meet my cardiologist tomorrow" to start your automated journey.`,
    pills: [
      { text: "I need to meet my cardiologist tomorrow. Please arrange everything for me.", label: '🎙️ "I need to meet my cardiologist tomorrow..."' },
      { text: "Check my blood pressure and schedule a cardiology follow-up.", label: '🎙️ "Schedule cardiology follow-up"' },
      { text: "I have severe chest tightness and dizziness since morning.", label: '🚨 Test: "Severe chest tightness & dizziness" (Urgent)' }
    ],
    cardioKeywords: ['cardiologist', 'heart doctor', 'heart specialist', 'meet my doctor', 'appointment tomorrow', 'arrange everything', 'doctor appointment', 'checkup', 'meet'],
    emergencyKeywords: ['chest pain', 'chest tightness', 'severe pain', 'difficulty breathing', 'breathless', 'shortness of breath', 'fainted', 'unconscious', 'severe dizziness', 'emergency']
  },
  ta: {
    name: "தமிழ்",
    bcp47: "ta-IN",
    fallbackBcp47: "ta",
    micListening: "கேட்கிறது... பேசுங்கள்",
    micIdle: "பேச மைக் அழுத்தவும்",
    welcome: (name) => `வணக்கம் ${name}! நான் உங்கள் AI ஹெல்த்கேர் ஏஜென்ட். உங்கள் இதய மருத்துவர் சந்திப்பு, மருத்துவ சுருக்கம் மற்றும் வாகனத்தை ஏற்பாடு செய்ய நான் தயாராக உள்ளேன்.`,
    proposal: (name) => `நிச்சயமாக ${name}. உங்கள் இதய மருத்துவரை சந்திக்க 8 படிகள் கொண்ட முழுமையான திட்டத்தை உருவாக்கியுள்ளேன். திட்டத்தை சரிபார்த்து "திட்டத்தை அங்கீகரிக்கவும்" என்பதை அழுத்தவும்.`,
    doctorOptions: (doctor) => `உங்கள் கார்டியாலஜிஸ்ட் ${doctor} அவர்களுக்கு நாளை காலை 10:00 மணிக்கு மற்றும் பிற்பகல் 2:30 மணிக்கு அப்பாயிண்ட்மெண்ட் கிடைக்கிறது. எந்த நேரம் உங்களுக்கு வசதி?`,
    summaryReview: (doctor) => `உங்கள் மருத்துவ பதிவுகளின் சுருக்கத்தை தயாரித்துள்ளேன். மருத்துவர் ${doctor} அவர்களிடம் பகிர்வதற்கு முன் இதை சரிபார்க்கவும்.`,
    transitQuery: () => `மருத்துவமனை செல்வதற்கு நான் ஒரு மருத்துவ வண்டி அல்லது வாடகை காரை ஏற்பாடு செய்யட்டுமா?`,
    transitOptionsDesc: () => `உங்களுக்கு சக்கர நாற்காலி வசதியுள்ள மருத்துவ வண்டி 280 ரூபாயிலும் அல்லது சாதாரண வண்டி 180 ரூபாயிலும் கிடைக்கிறது.`,
    journeySuccess: (name) => `அற்புதம் ${name}! உங்கள் கார்டியாலஜிஸ்ட் சந்திப்பு, மருத்துவ சுருக்கம், வண்டி மற்றும் நினைவூட்டல்கள் அனைத்தும் வெற்றிகரமாக உறுதி செய்யப்பட்டுள்ளன.`,
    emergencyAlert: (symptoms, caregiver) => `🚨 அவசர எச்சரிக்கை: தீவிர அறிகுறிகள் கண்டறியப்பட்டன ("${symptoms}"). உடனடியாக 108 அவசர மருத்துவ சேவையை அழைக்கவும். உங்கள் பராமரிப்பாளர் ${caregiver} அவர்களுக்கு தகவல் அனுப்பப்பட்டுள்ளது.`,
    generalReply: (name) => `வணக்கம் ${name}. "நாளை என் இதய மருத்துவரை பார்க்க வேண்டும்" என்று கூறினால் முழு பயணத்தையும் நான் ஒருங்கிணைப்பேன்.`,
    pills: [
      { text: "நாளை என் இதய மருத்துவரை பார்க்க வேண்டும். எனக்கு எல்லாம் ஏற்பாடு செய்யுங்கள்.", label: '🎙️ "நாளை என் இதய மருத்துவரை பார்க்க வேண்டும்..."' },
      { text: "என் இரத்த அழுத்தத்தை பரிசோதித்து மருத்துவரை சந்திக்க வேண்டும்.", label: '🎙️ "மருத்துவர் அப்பாயிண்ட்மெண்ட் ஏற்பாடு செய்க"' },
      { text: "நெஞ்சு வலி மற்றும் கடுமையான மயக்கமாக உள்ளது.", label: '🚨 சோதனை: "நெஞ்சு வலி & மயக்கம்" (அவசரம்)' }
    ],
    cardioKeywords: ['இதய மருத்துவர்', 'அப்பாயிண்ட்மெண்ட்', 'மருத்துவரை பார்க்க', 'கார்டியாலஜிஸ்ட்', 'டாக்டர்', 'இதயம்'],
    emergencyKeywords: ['இதய வலி', 'நெஞ்சு வலி', 'மூச்சுத்திணறல்', 'மயக்கம்', 'கடுமையான வலி', 'மாரடைப்பு']
  },
  hi: {
    name: "हिंदी",
    bcp47: "hi-IN",
    fallbackBcp47: "hi",
    micListening: "सुन रहा हूँ... अब बोलिए",
    micIdle: "बोलने के लिए माइक दबाएं",
    welcome: (name) => `नमस्ते ${name}! मैं आपका एआई हेल्थकेयर एजेंट हूँ। डॉक्टर की अपॉइंटमेंट, मेडिकल रिकॉर्ड और वाहन की व्यवस्था के लिए बोलें या नीचे टैप करें।`,
    proposal: (name) => `ज़रूर ${name}। आपके हृदय रोग विशेषज्ञ से मिलने के लिए मैंने 8-चरणीय योजना तैयार की है। कृपया आगे बढ़ने के लिए इसे मंज़ूरी दें।`,
    doctorOptions: (doctor) => `आपके कार्डियोलॉजिस्ट ${doctor} के लिए कल सुबह 10:00 बजे और दोपहर 02:30 बजे का समय उपलब्ध है। आप कौन सा समय चुनना चाहेंगे?`,
    summaryReview: (doctor) => `मैंने डॉक्टर ${doctor} के लिए आपका मेडिकल सारांश तैयार कर लिया है। डॉक्टर को भेजने से पहले कृपया इसकी समीक्षा करें।`,
    transitQuery: () => `क्या आप चाहते हैं कि मैं आपके लिए सिटी हार्ट इंस्टीट्यूट जाने के लिए कैब या वाहन की व्यवस्था करूँ?`,
    transitOptionsDesc: () => `व्हीलचेयर सहायता वाली सीनियर मेडिकल कैब ₹280 में और सामान्य टैक्सी ₹180 में उपलब्ध है।`,
    journeySuccess: (name) => `शानदार ${name}! आपकी डॉक्टर अपॉइंटमेंट, मेडिकल समरी, कैब और दवा के रिमाइंडर सफलतापूर्वक बुक हो चुके हैं।`,
    emergencyAlert: (symptoms, caregiver) => `🚨 आपातकालीन चेतावनी: गंभीर लक्षण पाए गए हैं ("${symptoms}")। कृपया तुरंत 108 पर संपर्क करें। आपके देखभालकर्ता ${caregiver} को संदेश भेजा गया है।`,
    generalReply: (name) => `नमस्ते ${name}। यात्रा शुरू करने के लिए बोलें: "मुझे कल अपने हृदय रोग विशेषज्ञ से मिलना है।"`,
    pills: [
      { text: "मुझे कल अपने हृदय रोग विशेषज्ञ से मिलना है। कृपया सब कुछ व्यवस्थित करें।", label: '🎙️ "मुझे कल अपने डॉक्टर से मिलना है..."' },
      { text: "मेरा ब्लड प्रेशर चेक करें और कार्डियोलॉजिस्ट अपॉइंटमेंट बुक करें।", label: '🎙️ "फॉलो-अप अपॉइंटमेंट बुक करें"' },
      { text: "सीने में बहुत तेज़ दर्द और चक्कर आ रहे हैं।", label: '🚨 टेस्ट: "सीने में दर्द और चक्कर" (आपातकालीन)' }
    ],
    cardioKeywords: ['हृदय रोग विशेषज्ञ', 'कार्डियोलॉजिस्ट', 'डॉक्टर', 'अपॉइंटमेंट', 'मिलना', 'इंतजाम', 'दिल के डॉक्टर'],
    emergencyKeywords: ['सीने में दर्द', 'छाती में दर्द', 'सांस लेने में तकलीफ', 'चक्कर', 'बेहोश', 'दर्द', 'सांस फूलना']
  },
  te: {
    name: "తెలుగు",
    bcp47: "te-IN",
    fallbackBcp47: "te",
    micListening: "వింటున్నాను... మాట్లాడండి",
    micIdle: "మాట్లాడటానికి మైక్ నొక్కండి",
    welcome: (name) => `నమస్కారం ${name}! నేను మీ AI హెల్త్‌కేర్ ఏజెంట్‌ను. డాక్టర్ అపాయింట్‌మెంట్, మెడికల్ రికార్డులు మరియు ప్రయాణ ఏర్పాట్ల కోసం మాట్లాడండి.`,
    proposal: (name) => `తప్పకుండా ${name}. మీ కార్డియాలజిస్ట్‌ను కలవడానికి నేను 8-దశల ప్రణాళికను సిద్ధం చేసాను. ముందుకు సాగడానికి దయచేసి దీన్ని ఆమోదించండి.`,
    doctorOptions: (doctor) => `మీ కార్డియాలజిస్ట్ ${doctor} గారికి రేపు ఉదయం 10:00 గంటలకు మరియు మధ్యాహ్నం 02:30 గంటలకు అపాయింట్‌మెంట్ అందుబాటులో ఉంది. మీకు ఏ సమయం సౌకర్యవంతంగా ఉంటుంది?`,
    summaryReview: (doctor) => `డాక్టర్ ${doctor} కోసం మీ మెడికల్ సారాంశాన్ని సిద్ధం చేశాను. డాక్టర్‌తో పంచుకునే ముందు దయచేసి వివరాలను పరిశీలించండి.`,
    transitQuery: () => `ఆసుపత్రికి వెళ్లడానికి క్యాబ్ లేదా రవాణా సౌకర్యాన్ని ఏర్పాటు చేయమంటారా?`,
    transitOptionsDesc: () => `వీల్‌చైర్ సదుపాయం ఉన్న మెడికల్ క్యాబ్ ₹280, సాధారణ క్యాబ్ ₹180 కి అందుబాటులో ఉన్నాయి.`,
    journeySuccess: (name) => `అద్భుతం ${name}! మీ కార్డియాలజిస్ట్ అపాయింట్‌మెంట్, రవాణా, రిమైండర్‌లు మరియు కేర్‌గివర్ అలర్ట్‌లు అన్నీ విజయవంతంగా పూర్తయ్యాయి.`,
    emergencyAlert: (symptoms, caregiver) => `🚨 అత్యవసర హెచ్చరిక: తీవ్రమైన లక్షణాలు ("${symptoms}") గుర్తించబడ్డాయి. వెంటనే 108 అత్యవసర సేవలకు కాల్ చేయండి. మీ సంరక్షకుడు ${caregiver} కి సమాచారం పంపబడింది.`,
    generalReply: (name) => `నమస్కారం ${name}. "రేపు నా కార్డియాలజిస్ట్‌ని కలవాలి" అని చెప్పి మీ ప్రయాణాన్ని ప్రారంభించండి.`,
    pills: [
      { text: "రేపు నా కార్డియాలజిస్ట్‌ని కలవాలి. దయచేసి అన్ని ఏర్పాట్లు చేయండి.", label: '🎙️ "రేపు నా కార్డియాలజిస్ట్‌ని కలవాలి..."' },
      { text: "నా బీపీ చెక్ చేసి డాక్టర్ అపాయింట్‌మెంట్ బుక్ చేయండి.", label: '🎙️ "డాక్టర్ అపాయింట్‌మెంట్ బుక్ చేయండి"' },
      { text: "ఛాతీలో తీవ్రమైన నొప్పి మరియు విపరీతమైన మైకం ఉంది.", label: '🚨 పరీక్ష: "ఛాతీ నొప్పి & మైకం" (అత్యవసరం)' }
    ],
    cardioKeywords: ['కార్డియాలజిస్ట్', 'హృదయ', 'డాక్టర్', 'అపాయింట్‌మెంట్', 'కలవాలి', 'గుండె డాక్టర్'],
    emergencyKeywords: ['ఛాతీ నొప్పి', 'గుండె నొప్పి', 'శ్వాస తీసుకోవడంలో ఇబ్బంది', 'మైకం', 'కళ్ళు తిరగడం']
  },
  kn: {
    name: "ಕನ್ನಡ",
    bcp47: "kn-IN",
    fallbackBcp47: "kn",
    micListening: "ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದೇನೆ... ಮಾತನಾಡಿ",
    micIdle: "ಮಾತನಾಡಲು ಮೈಕ್ ಒತ್ತಿ",
    welcome: (name) => `ನಮಸ್ಕಾರ ${name}! ನಾನು ನಿಮ್ಮ AI ಹೆಲ್ತ್‌ಕೇರ್ ಏಜೆಂಟ್. ಡಾಕ್ಟರ್ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್, ಮೆಡಿಕಲ್ ಸಾರಾಂಶ ಮತ್ತು ವಾಹನ ವ್ಯವಸ್ಥೆಗಾಗಿ ಮಾತನಾಡಿ.`,
    proposal: (name) => `ಖಂಡಿತ ${name}. ನಿಮ್ಮ ಹೃದ್ರೋಗ ತಜ್ಞರನ್ನು ಭೇಟಿ ಮಾಡಲು 8 ಹಂತಗಳ ಯೋಜನೆಯನ್ನು ಸಿದ್ಧಪಡಿಸಿದ್ದೇನೆ. ಮುಂದುವರಿಯಲು ದಯವಿಟ್ಟು ಅನುಮೋದಿಸಿ.`,
    doctorOptions: (doctor) => `ನಿಮ್ಮ ಕಾರ್ಡಿಯಾಲಜಿಸ್ಟ್ ${doctor} ಅವರಿಗೆ ನಾಳೆ ಬೆಳಿಗ್ಗೆ 10:00 ಮತ್ತು ಮಧ್ಯಾಹ್ನ 02:30 ಕ್ಕೆ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಲಭ್ಯವಿದೆ. ನಿಮಗೆ ಯಾವ ಸಮಯ ಸೂಕ್ತ?`,
    summaryReview: (doctor) => `ಡಾಕ್ಟರ್ ${doctor} ಅವರಿಗಾಗಿ ನಿಮ್ಮ ವೈದ್ಯಕೀಯ ಸಾರಾಂಶವನ್ನು ಸಿದ್ಧಪಡಿಸಿದ್ದೇನೆ. ಹಂಚಿಕೊಳ್ಳುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿ.`,
    transitQuery: () => `ಆಸ್ಪತ್ರೆಗೆ ಹೋಗಲು ಕ್ಯಾಬ್ ಅಥವಾ ವಾಹನ ವ್ಯವಸ್ಥೆಯನ್ನು ಮಾಡಲೇ?`,
    transitOptionsDesc: () => `ವೀಲ್‌ಚೇರ್ ಸೌಲಭ್ಯವಿರುವ ಮೆಡಿಕಲ್ ಕ್ಯಾಬ್ ₹280 ಮತ್ತು ಸಾಮಾನ್ಯ ಕ್ಯಾಬ್ ₹180 ಕ್ಕೆ ಲಭ್ಯವಿದೆ.`,
    journeySuccess: (name) => `ಉತ್ತಮ ${name}! ನಿಮ್ಮ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್, ವೈದ್ಯಕೀಯ ಸಾರಾಂಶ, ಪ್ರಯಾಣ ಮತ್ತು ಜ್ಞಾಪನೆಗಳು ಯಶಸ್ವಿಯಾಗಿ ದೃಢಪಟ್ಟಿವೆ.`,
    emergencyAlert: (symptoms, caregiver) => `🚨 ತುರ್ತು ಎಚ್ಚರಿಕೆ: ಗಂಭೀರ ಲಕ್ಷಣಗಳು ("${symptoms}") ಕಂಡುಬಂದಿವೆ. ತಕ್ಷಣವೇ 108 ಗೆ ಕರೆ ಮಾಡಿ. ನಿಮ್ಮ ಆರೈಕೆದಾರ ${caregiver} ಅವರಿಗೆ ಮಾಹಿತಿ ಕಳುಹಿಸಲಾಗಿದೆ.`,
    generalReply: (name) => `ನಮಸ್ಕಾರ ${name}. "ನಾಳೆ ನನ್ನ ಹೃದ್ರೋಗ ತಜ್ಞರನ್ನು ಭೇಟಿ ಮಾಡಬೇಕು" ಎಂದು ಹೇಳಿ ಪ್ರಾರಂಭಿಸಿ.`,
    pills: [
      { text: "ನಾಳೆ ನನ್ನ ಹೃದ್ರೋಗ ತಜ್ಞರನ್ನು ಭೇಟಿ ಮಾಡಬೇಕು. ಎಲ್ಲವನ್ನೂ ವ್ಯವಸ್ಥೆ ಮಾಡಿ.", label: '🎙️ "ನಾಳೆ ನನ್ನ ಹೃದ್ರೋಗ ತಜ್ಞರನ್ನು ಭೇಟಿ ಮಾಡಬೇಕು..."' },
      { text: "ನನ್ನ ಬಿಪಿ ಪರೀಕ್ಷಿಸಿ ಡಾಕ್ಟರ್ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ನಿಗದಿಪಡಿಸಿ.", label: '🎙️ "ಡಾಕ್ಟರ್ ಭೇಟಿ ವ್ಯವಸ್ಥೆ ಮಾಡಿ"' },
      { text: "ಎದೆಯಲ್ಲಿ ತೀವ್ರ ನೋವು ಮತ್ತು ತಲೆತಿರುಗುವಿಕೆ ಇದೆ.", label: '🚨 ಪರೀಕ್ಷೆ: "ಎದೆ ನೋವು & ತಲೆತಿರುಗುವಿಕೆ" (ತುರ್ತು)' }
    ],
    cardioKeywords: ['ಕಾರ್ಡಿಯಾಲಜಿಸ್ಟ್', 'ಹೃದ್ರೋಗ', 'ಡಾಕ್ಟರ್', 'ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್', 'ಭೇಟಿ', 'ಹೃದಯ ತಜ್ಞ'],
    emergencyKeywords: ['ಎದೆ ನೋವು', 'ಉಸಿರಾಟದ ತೊಂದರೆ', 'ತಲೆತಿರುಗುವಿಕೆ', 'ಪ್ರಜ್ಞೆ ತಪ್ಪುವುದು']
  },
  ml: {
    name: "മലയാളം",
    bcp47: "ml-IN",
    fallbackBcp47: "ml",
    micListening: "ശ്രദ്ധിക്കുന്നു... സംസാരിക്കൂ",
    micIdle: "സംസാരിക്കാൻ മൈക്ക് അമർത്തുക",
    welcome: (name) => `നമസ്കാരം ${name}! ഞാൻ നിങ്ങളുടെ AI ഹെൽത്ത്‌കെയർ ഏജന്റാണ്. ഡോക്ടർ അപ്പോയിന്റ്മെന്റും യാത്രാ സൗകര്യങ്ങളും ക്രമീകരിക്കാൻ സംസാരിക്കുക.`,
    proposal: (name) => `തീർച്ചയായും ${name}. നിങ്ങളുടെ കാർഡിയോളജിസ്റ്റിനെ കാണുന്നതിനായി 8 ഘട്ടങ്ങളുള്ള സമഗ്രമായ പ്ലാൻ തയ്യാറാക്കിയിട്ടുണ്ട്. ദയവായി ഇത് അംഗീകരിക്കുക.`,
    doctorOptions: (doctor) => `നിങ്ങളുടെ കാർഡിയോളജിസ്റ്റ് ${doctor} നാളെ രാവിലെ 10:00 മണിക്കും ഉച്ചയ്ക്ക് 02:30 നും ലഭ്യമാണ്. ഏത് സമയമാണ് താങ്കൾക്ക് സൗകര്യം?`,
    summaryReview: (doctor) => `ഡോക്ടർ ${doctor} കാണുന്നതിനായി താങ്കളുടെ മെഡിക്കൽ സംഗ്രഹം തയ്യാറാക്കിയിട്ടുണ്ട്. ദയവായി പരിശോധിച്ച് അംഗീകരിക്കുക.`,
    transitQuery: () => `ആശുപത്രിയിലേക്ക് പോകുന്നതിനായി മെഡിക്കൽ കാബ് അല്ലെങ്കിൽ വാഹനം ക്രമീകരിക്കണമോ?`,
    transitOptionsDesc: () => `വീൽചെയർ സൗകര്യമുള്ള മെഡിക്കൽ കാബ് ₹280 നും സാധാരണ ടാക്സി ₹180 നും ലഭ്യമാണ്.`,
    journeySuccess: (name) => `വളരെ നല്ലത് ${name}! താങ്കളുടെ കാർഡിയോളജിസ്റ്റ് സന്ദർശനം, യാത്രാ സൗകര്യം, അലാറങ്ങൾ എന്നിവ വിജയകരമായി പൂർത്തിയായി.`,
    emergencyAlert: (symptoms, caregiver) => `🚨 അടിയന്തര മുന്നറിയിപ്പ്: ഗുരുതരമായ ലക്ഷണങ്ങൾ ("${symptoms}") കണ്ടെത്തി. ഉടൻ തന്നെ 108 സേവനം വിളിക്കുക. നിങ്ങളുടെ സഹായിയായ ${caregiver} ന് വിവരം നൽകിയിട്ടുണ്ട്.`,
    generalReply: (name) => `നമസ്കാരം ${name}. "നാളെ എന്റെ കാർഡിയോളജിസ്റ്റിനെ കാണണം" എന്ന് പറഞ്ഞ് ആരംഭിക്കുക.`,
    pills: [
      { text: "നാളെ എൻ്റെ കാർഡിയോളജിസ്റ്റിനെ കാണണം. എല്ലാം ക്രമീകരിക്കുക.", label: '🎙️ "നാളെ എൻ്റെ കാർഡിയോളജിസ്റ്റിനെ കാണണം..."' },
      { text: "എന്റെ ബിപി പരിശോധിച്ച് ഡോക്ടറെ കാണാൻ സമയം നിശ്ചയിക്കുക.", label: '🎙️ "അപ്പോയിന്റ്മെന്റ് ക്രമീകരിക്കുക"' },
      { text: "നെഞ്ചിൽ കടുത്ത വേദനയും കഠിനമായ തലകറക്കവും ഉണ്ട്.", label: '🚨 ടെസ്റ്റ്: "നെഞ്ചുവേദന & തലകറക്കം" (അടിയന്തരം)' }
    ],
    cardioKeywords: ['കാർഡിയോളജിസ്റ്റ്', 'ഡോക്ടർ', 'അപ്പോയിന്റ്മെന്റ്', 'കാണണം', 'ഹൃദയ', 'ഡോക്ടറെ'],
    emergencyKeywords: ['നെഞ്ചുവേദന', 'ശ്വാസതടസ്സം', 'തലകറക്കം', 'അബോധാവസ്ഥ']
  }
};

// Ensure speech voices are populated whenever browser fires voiceschanged
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    // Voices loaded ready for multilingual assignment
  };
}

// --- 2. AGENT COORDINATOR CLASS ---
class CuraLinkAgentCoordinator {
  constructor() {
    this.state = 'IDLE';
    this.speechRecognition = null;
    this.isListening = false;
    this.language = (window.state && window.state.currentLang) || 'en';
    this.auditTrail = [];
    
    // Active Journey Context
    this.currentJourney = {
      patientId: null,
      patientName: '',
      goalText: '',
      detectedIntent: null,
      urgency: 'ROUTINE',
      plan: [],
      selectedDoctor: null,
      selectedSlot: null,
      clinicalSummary: null,
      selectedTransport: null,
      remindersScheduled: false,
      caregiverNotified: false,
      appointmentBookingId: null,
      transportBookingId: null,
      timestamps: {}
    };

    this.initSpeechRecognition();
  }

  // --- SPEECH RECOGNITION (STT) ---
  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.speechRecognition = new SpeechRecognition();
      this.speechRecognition.continuous = false;
      this.speechRecognition.interimResults = false;
      
      this.speechRecognition.onstart = () => {
        this.isListening = true;
        this.updateMicUI(true);
        const loc = agentI18n[this.language] || agentI18n['en'];
        this.logThought('Agent Speech Engine', `[${loc.name}] Listening for patient speech input (${loc.bcp47})...`);
      };

      this.speechRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        this.logThought('Agent Speech Engine', `Voice captured: "${transcript}"`);
        this.handleUserInput(transcript);
      };

      this.speechRecognition.onerror = (event) => {
        this.isListening = false;
        this.updateMicUI(false);
        this.logThought('Agent Speech Engine', `Voice recognition notice: ${event.error}`);
        showToast("Voice capture completed.");
      };

      this.speechRecognition.onend = () => {
        this.isListening = false;
        this.updateMicUI(false);
      };
    }
  }

  toggleVoiceListening() {
    if (!this.speechRecognition) {
      showToast("Speech recognition not supported in this browser. Please use text input or prompt buttons.");
      return;
    }

    if (this.isListening) {
      this.speechRecognition.stop();
      this.isListening = false;
      this.updateMicUI(false);
    } else {
      const loc = agentI18n[this.language] || agentI18n['en'];
      this.speechRecognition.lang = loc.bcp47;
      try {
        this.speechRecognition.start();
      } catch (e) {
        console.warn("Speech recognition active:", e);
      }
    }
  }

  updateMicUI(isListening) {
    const micBtn = document.getElementById('agent-big-mic-btn');
    const statusText = document.getElementById('agent-mic-status-text');
    const loc = agentI18n[this.language] || agentI18n['en'];
    if (micBtn) {
      if (isListening) {
        micBtn.classList.add('listening');
        if (statusText) statusText.innerText = loc.micListening;
      } else {
        micBtn.classList.remove('listening');
        if (statusText) statusText.innerText = loc.micIdle;
      }
    }
  }

  // --- ROBUST MULTILINGUAL TEXT-TO-SPEECH (TTS) ---
  speak(text, lang = null) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel(); // Stop any pending utterances

    const targetLang = lang || this.language || (window.state && window.state.currentLang) || 'en';
    const loc = agentI18n[targetLang] || agentI18n['en'];

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = loc.bcp47;
    utterance.rate = (window.state && window.state.isElderMode) ? 0.82 : 0.95;
    utterance.pitch = 1.0;

    // Intelligent voice matching for the target language:
    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
      const targetPrefix = targetLang.toLowerCase();
      // 1. Exact match with primary or fallback BCP-47 tag
      let matchedVoice = voices.find(v => {
        const vLang = v.lang.replace('_', '-').toLowerCase();
        return vLang === loc.bcp47.toLowerCase() || vLang === (loc.fallbackBcp47 || '').toLowerCase();
      });

      // 2. Prefix match (e.g. 'ta', 'hi', 'te', 'kn', 'ml')
      if (!matchedVoice) {
        matchedVoice = voices.find(v => v.lang.toLowerCase().startsWith(targetPrefix));
      }

      // 3. Indian regional voice fallback if exact language voice isn't installed
      if (!matchedVoice && targetLang !== 'en') {
        matchedVoice = voices.find(v => v.lang.toLowerCase().includes('in'));
      }

      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }
    }

    utterance.onerror = (e) => {
      console.warn("TTS speech synthesis notice:", e);
    };

    window.speechSynthesis.speak(utterance);
    this.logThought('Agent Speech TTS', `[${loc.name} Voice] "${text.substring(0, 60)}..."`);
  }

  // --- AUDIT & REASONING LOGGERS ---
  logThought(source, message, isTool = false) {
    const entry = {
      timestamp: new Date().toLocaleTimeString(),
      source,
      message,
      isTool
    };
    this.auditTrail.push(entry);

    const thoughtContainer = document.getElementById('agent-thought-stream');
    if (thoughtContainer) {
      const row = document.createElement('div');
      row.className = 'thought-entry';
      row.innerHTML = `
        <span style="color: #64748b;">[${entry.timestamp}]</span>
        <span class="${isTool ? 'tool-tag' : 'tag'}">[${source}]</span>
        <span>${message}</span>
      `;
      thoughtContainer.appendChild(row);
      thoughtContainer.scrollTop = thoughtContainer.scrollHeight;
    }
  }

  addChatMessage(sender, text) {
    const stream = document.getElementById('agent-chat-stream');
    if (!stream) return;

    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = text;
    stream.appendChild(bubble);
    stream.scrollTop = stream.scrollHeight;
  }

  // --- LANGUAGE SWITCHER & PROMPT CHIP RE-RENDERER ---
  setLanguage(lang, syncGlobal = true) {
    if (!agentI18n[lang]) lang = 'en';
    this.language = lang;

    // Synchronize modal selector dropdown
    const modalSelect = document.getElementById('agent-modal-lang-select');
    if (modalSelect && modalSelect.value !== lang) {
      modalSelect.value = lang;
    }

    // Synchronize with main platform header selector
    if (syncGlobal && typeof changeLanguage === 'function') {
      const globalSelect = document.getElementById('lang-select');
      if (globalSelect && globalSelect.value !== lang) {
        globalSelect.value = lang;
        changeLanguage(lang);
      }
    }

    const loc = agentI18n[lang];
    showToast(`🌐 Agent Language: ${loc.name} (${loc.bcp47})`);
    this.renderVoiceQuickPills();
    this.resetJourney();
  }

  renderVoiceQuickPills() {
    const container = document.getElementById('agent-voice-quick-pills');
    if (!container) return;

    const loc = agentI18n[this.language] || agentI18n['en'];
    container.innerHTML = loc.pills.map(p => `
      <button class="quick-voice-chip" onclick="curalinkAgent.handleUserInput('${p.text.replace(/'/g, "\\'")}')">
        ${p.label}
      </button>
    `).join('');
  }

  // --- INTENT UNDERSTANDING & MULTILINGUAL SAFETY TRIAGE ---
  handleUserInput(text) {
    if (!text || !text.trim()) return;
    const cleanText = text.trim();
    this.addChatMessage('patient', cleanText);

    const inputField = document.getElementById('agent-text-input');
    if (inputField) inputField.value = '';

    const p = getActivePatient();
    this.currentJourney.patientId = p.id;
    this.currentJourney.patientName = p.name;
    this.currentJourney.goalText = cleanText;

    const loc = agentI18n[this.language] || agentI18n['en'];
    this.logThought('Intent Parser', `[${loc.name}] Analyzing input: "${cleanText}"`);

    const lower = cleanText.toLowerCase();

    // A. Cross-Language Emergency Detection
    let isUrgent = false;
    for (const l in agentI18n) {
      if (agentI18n[l].emergencyKeywords.some(kw => lower.includes(kw.toLowerCase()))) {
        isUrgent = true;
        break;
      }
    }

    if (isUrgent) {
      this.currentJourney.urgency = 'EMERGENCY';
      this.triggerEmergencyProtocol(cleanText);
      return;
    }

    // B. Cross-Language Cardiology / Appointment Intent Detection
    let isCardioIntent = false;
    for (const l in agentI18n) {
      if (agentI18n[l].cardioKeywords.some(kw => lower.includes(kw.toLowerCase()))) {
        isCardioIntent = true;
        break;
      }
    }

    if (isCardioIntent || cleanText.includes('meet') || cleanText.includes('doctor') || cleanText.includes('appointment')) {
      this.currentJourney.detectedIntent = 'COORDINATE_CARDIOLOGIST_JOURNEY';
      this.logThought('Goal Decomposition', `[${loc.name}] Goal recognized: Complete Healthcare Journey Coordination for Cardiologist Consultation.`);
      this.generateJourneyPlan();
    } else {
      this.currentJourney.detectedIntent = 'GENERAL_ASSISTANCE';
      const reply = loc.generalReply(p.name);
      this.addChatMessage('agent', reply);
      this.speak(reply);
    }
  }

  // --- EMERGENCY SAFETY ESCALATION ---
  triggerEmergencyProtocol(symptomText) {
    this.state = 'EMERGENCY';
    this.logThought('SAFETY GUARDIAN', 'CRITICAL RED-FLAG SYMPTOM DETECTED! Halting standard scheduling to trigger Emergency Protocol.', true);

    const p = getActivePatient();
    const loc = agentI18n[this.language] || agentI18n['en'];
    const alertMsg = loc.emergencyAlert(symptomText, p.caregiver);

    this.addChatMessage('agent', `<strong style="color: var(--accent-rose);">${alertMsg}</strong>`);
    this.speak(alertMsg);

    const actionWorkspace = document.getElementById('agent-action-workspace');
    if (actionWorkspace) {
      actionWorkspace.innerHTML = `
        <div class="emergency-alert-card">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <i class="fa-solid fa-triangle-exclamation" style="font-size: 2rem; color: var(--accent-rose);"></i>
            <div>
              <h3 style="color: var(--accent-rose); font-size: 1.25rem;">CRITICAL SYMPTOM ESCALATION ACTIVE</h3>
              <p style="font-size: 0.88rem; color: var(--text-primary);">Emergency medical protocols initiated for ${p.name}.</p>
            </div>
          </div>

          <div style="background: rgba(255,255,255,0.85); padding: 12px; border-radius: 8px; margin-bottom: 14px; font-size: 0.9rem;">
            <strong>Immediate Actions Taken:</strong><br>
            • Prepared Emergency ER Handoff Packet (Active Conditions: ${p.primaryCondition}, Meds: ${p.medications.map(m => m.name).join(', ')}, Allergies: ${p.allergies.join(', ')}).<br>
            • Emergency Contact: <strong>${p.caregiver} (${p.emergencyContact})</strong> notified.
          </div>

          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <a href="tel:108" class="btn-primary" style="background: #dc2626; text-decoration: none; padding: 12px 20px; font-size: 1rem;">
              <i class="fa-solid fa-phone"></i> Call Emergency Ambulance (108 / 911)
            </a>
            <button class="btn-secondary" onclick="curalinkAgent.resetJourney()">
              <i class="fa-solid fa-rotate-left"></i> Return to Routine Coordinator
            </button>
          </div>
        </div>
      `;
    }

    this.updateStepperUI(-1);
  }

  // --- AUTONOMOUS 8-STEP PLANNING ---
  generateJourneyPlan() {
    this.state = 'AWAITING_PLAN_APPROVAL';
    const p = getActivePatient();

    this.currentJourney.plan = [
      { id: 1, title: 'Review medical history & clinical context', status: 'completed' },
      { id: 2, title: `Identify cardiologist (${p.assignedDoctor || 'Dr. Marcus Vance'})`, status: 'completed' },
      { id: 3, title: 'Check appointment availability & consultation fees', status: 'awaiting' },
      { id: 4, title: 'Prepare verified doctor-visit medical summary', status: 'pending' },
      { id: 5, title: 'Coordinate accessible transportation (pickup & drop)', status: 'pending' },
      { id: 6, title: 'Confirm bookings with patient authorization (HITL)', status: 'pending' },
      { id: 7, title: 'Arrange appointment reminders & medication alarms', status: 'pending' },
      { id: 8, title: `Notify caregiver (${p.caregiver}) & arrange post-consult follow-up`, status: 'pending' }
    ];

    const loc = agentI18n[this.language] || agentI18n['en'];
    this.logThought('Planner', `[${loc.name}] Synthesized 8-step journey plan with dependencies and human approval gates.`);
    this.renderStepperUI();

    const proposalMsg = loc.proposal(p.name);
    this.addChatMessage('agent', proposalMsg);
    this.speak(proposalMsg);

    this.renderPlanApprovalCard();
  }

  renderPlanApprovalCard() {
    const actionWorkspace = document.getElementById('agent-action-workspace');
    if (!actionWorkspace) return;

    const p = getActivePatient();

    actionWorkspace.innerHTML = `
      <div class="agent-action-card">
        <div class="action-card-header">
          <div style="font-weight: 700; color: var(--accent-blue); font-size: 1.05rem;">
            <i class="fa-solid fa-list-check"></i> Step 1 of 8: Journey Plan Authorization
          </div>
          <span class="step-status-pill awaiting">Awaiting Patient Approval</span>
        </div>

        <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 12px;">
          The agent will coordinate the following tasks for <strong>${p.name}</strong> (${p.id}):
        </p>

        <ol style="padding-left: 20px; font-size: 0.88rem; line-height: 1.7; margin-bottom: 16px; color: var(--text-primary);">
          <li><strong>Clinical Context:</strong> Review recorded cardiac history (${p.primaryCondition}) and active medications.</li>
          <li><strong>Specialist Matching:</strong> Check schedules for your primary cardiologist <strong>${p.assignedDoctor}</strong>.</li>
          <li><strong>Slot Selection:</strong> Present available consultation times with verified clinic fees.</li>
          <li><strong>Record Summary:</strong> Synthesize a structured doctor-visit brief for your review before sharing.</li>
          <li><strong>Transit Coordination:</strong> Reserve mobility-assisted transport to City Heart Institute.</li>
          <li><strong>Booking Execution:</strong> Confirm reservations with transparent demonstration service tracking.</li>
          <li><strong>Reminders:</strong> Schedule calendar and auditory medicine alarms.</li>
          <li><strong>Caregiver Support:</strong> Dispatch notifications to <strong>${p.caregiver}</strong>.</li>
        </ol>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <button class="btn-primary" style="padding: 12px 24px; font-size: 0.95rem;" onclick="curalinkAgent.approvePlan()">
            <i class="fa-solid fa-circle-check"></i> Approve & Execute Plan
          </button>
          <button class="btn-secondary" style="padding: 12px 18px; font-size: 0.95rem;" onclick="curalinkAgent.modifyPlan()">
            <i class="fa-solid fa-pen"></i> Modify Preferences
          </button>
          <button class="btn-secondary" style="color: var(--accent-rose); border-color: var(--accent-rose);" onclick="curalinkAgent.cancelJourney()">
            <i class="fa-solid fa-ban"></i> Cancel
          </button>
        </div>
      </div>
    `;
  }

  approvePlan() {
    this.logThought('HITL Gate', 'Patient granted explicit authorization for 8-step journey plan.', true);
    this.updatePlanStep(3, 'in-progress');
    this.executeDoctorSlotQuery();
  }

  modifyPlan() {
    this.logThought('HITL Gate', 'Patient requested plan customization.', true);
    const p = getActivePatient();
    const actionWorkspace = document.getElementById('agent-action-workspace');
    if (!actionWorkspace) return;

    actionWorkspace.innerHTML = `
      <div class="agent-action-card">
        <div class="action-card-header">
          <div style="font-weight: 700; color: var(--accent-blue); font-size: 1.05rem;">
            <i class="fa-solid fa-sliders"></i> Customize Journey Preferences
          </div>
        </div>

        <div class="form-group" style="margin-bottom: 12px;">
          <label class="form-label" style="font-size: 0.84rem; font-weight: 600; margin-bottom: 4px; display: block;">Preferred Specialist</label>
          <select id="agent-pref-doc" class="form-select" style="width: 100%; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);">
            <option value="${p.assignedDoctor}">${p.assignedDoctor} (Primary Cardiologist)</option>
            <option value="Dr. Aravind Swamy">Dr. Aravind Swamy (Senior Interventional Cardiologist)</option>
            <option value="Dr. Sunita Deshmukh">Dr. Sunita Deshmukh (General Physician & Diabetologist)</option>
          </select>
        </div>

        <div class="form-group" style="margin-bottom: 12px;">
          <label class="form-label" style="font-size: 0.84rem; font-weight: 600; margin-bottom: 4px; display: block;">Consultation Mode</label>
          <select id="agent-pref-mode" class="form-select" style="width: 100%; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);">
            <option value="In-Person">In-Person at Hospital (Clinic Suite 402)</option>
            <option value="Tele-Consult">Tele-Consultation Video Call</option>
          </select>
        </div>

        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label" style="font-size: 0.84rem; font-weight: 600; margin-bottom: 4px; display: block;">Mobility & Accessibility Assistance</label>
          <select id="agent-pref-mobility" class="form-select" style="width: 100%; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);">
            <option value="Wheelchair Required">Wheelchair Assistance Required at Entrance</option>
            <option value="Standard Senior Walking Support">Standard Senior Walking Support</option>
            <option value="None">Independent Mobility</option>
          </select>
        </div>

        <div style="display: flex; gap: 10px;">
          <button class="btn-primary" onclick="curalinkAgent.savePlanPreferences()">
            <i class="fa-solid fa-floppy-disk"></i> Apply & Proceed to Slot Booking
          </button>
          <button class="btn-secondary" onclick="curalinkAgent.renderPlanApprovalCard()">
            Back to Plan Overview
          </button>
        </div>
      </div>
    `;
  }

  savePlanPreferences() {
    const docSelect = document.getElementById('agent-pref-doc');
    const modeSelect = document.getElementById('agent-pref-mode');
    const mobilitySelect = document.getElementById('agent-pref-mobility');

    if (docSelect) this.currentJourney.selectedDoctor = docSelect.value;
    const prefSummary = `Doctor: ${docSelect ? docSelect.value : 'Default'}, Mode: ${modeSelect ? modeSelect.value : 'In-Person'}, Mobility: ${mobilitySelect ? mobilitySelect.value : 'Assisted'}`;

    this.logThought('Planner', `Updated patient preferences: ${prefSummary}`);
    showToast("Preferences updated! Searching matching slots...");
    this.approvePlan();
  }

  executeDoctorSlotQuery() {
    const p = getActivePatient();
    this.logThought('Tool Call', `tool_query_doctor_availability(doctorId="${p.assignedDoctor}", specialty="Cardiology", hospital="City Heart Institute")`, true);

    setTimeout(() => {
      this.logThought('Tool Result', 'Received 3 verified consultation slots from City Heart Institute Scheduling Gateway.');
      this.renderDoctorSelectionCard();
    }, 700);
  }

  renderDoctorSelectionCard() {
    const actionWorkspace = document.getElementById('agent-action-workspace');
    if (!actionWorkspace) return;

    const p = getActivePatient();
    const loc = agentI18n[this.language] || agentI18n['en'];
    const doctorSpeech = loc.doctorOptions(p.assignedDoctor);
    
    this.addChatMessage('agent', doctorSpeech);
    this.speak(doctorSpeech);

    actionWorkspace.innerHTML = `
      <div class="agent-action-card">
        <div class="action-card-header">
          <div style="font-weight: 700; color: var(--accent-blue); font-size: 1.05rem;">
            <i class="fa-solid fa-user-doctor"></i> Step 2: Select Appointment Time
          </div>
          <span class="demo-service-badge"><i class="fa-solid fa-plug"></i> Demo Service Mode</span>
        </div>

        <div style="background: var(--bg-tertiary); padding: 12px; border-radius: var(--radius-sm); margin-bottom: 14px;">
          <div style="font-weight: 700; font-size: 0.98rem; color: var(--text-primary);">${p.assignedDoctor} (Cardiology)</div>
          <div style="font-size: 0.82rem; color: var(--text-secondary);"><i class="fa-solid fa-hospital"></i> City Heart Institute • Clinic Suite 402 • Wheelchair Accessible</div>
        </div>

        <div style="font-size: 0.84rem; font-weight: 700; color: var(--text-muted); margin-bottom: 8px;">AVAILABLE SLOTS FOR TOMORROW:</div>

        <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
          <label class="transport-card-option selected">
            <input type="radio" name="agent-doc-slot" value="Tomorrow at 10:00 AM (In-Person)" checked style="margin-right: 10px;">
            <div>
              <strong>Tomorrow at 10:00 AM (In-Person Consultation)</strong>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">Consultation Fee: ₹800 • Recommended for BP & ECG review</div>
            </div>
            <span class="badge badge-complete">Popular</span>
          </label>

          <label class="transport-card-option">
            <input type="radio" name="agent-doc-slot" value="Tomorrow at 02:30 PM (Tele-Consult)" style="margin-right: 10px;">
            <div>
              <strong>Tomorrow at 02:30 PM (Tele-Consultation Video)</strong>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">Consultation Fee: ₹600 • Secure WebRTC Video Link</div>
            </div>
          </label>

          <label class="transport-card-option">
            <input type="radio" name="agent-doc-slot" value="Friday at 11:15 AM (In-Person)" style="margin-right: 10px;">
            <div>
              <strong>Friday at 11:15 AM (In-Person Consultation)</strong>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">Consultation Fee: ₹800 • City Heart Institute</div>
            </div>
          </label>
        </div>

        <div style="display: flex; gap: 10px;">
          <button class="btn-primary" onclick="curalinkAgent.confirmDoctorSlot()">
            <i class="fa-solid fa-check"></i> Confirm Selected Slot
          </button>
          <button class="btn-secondary" onclick="curalinkAgent.simulateNoSlots()">
            <i class="fa-solid fa-triangle-exclamation"></i> Simulate No Slots (Failure Test)
          </button>
        </div>
      </div>
    `;
  }

  confirmDoctorSlot() {
    const selectedRadio = document.querySelector('input[name="agent-doc-slot"]:checked');
    const slot = selectedRadio ? selectedRadio.value : 'Tomorrow at 10:00 AM (In-Person)';
    const p = getActivePatient();

    this.currentJourney.selectedDoctor = p.assignedDoctor;
    this.currentJourney.selectedSlot = slot;
    this.currentJourney.appointmentBookingId = `APT-${Math.floor(100000 + Math.random() * 900000)}`;

    this.logThought('Tool Execution', `tool_execute_appointment_booking(patient="${p.name}", doctor="${p.assignedDoctor}", slot="${slot}", bookingId="${this.currentJourney.appointmentBookingId}")`, true);

    this.updatePlanStep(3, 'completed');
    this.updatePlanStep(4, 'in-progress');
    this.executeClinicalSummarySynthesis();
  }

  executeClinicalSummarySynthesis() {
    const p = getActivePatient();
    this.logThought('Tool Call', `tool_synthesize_clinical_summary(patientId="${p.id}", primaryDiagnosis="${p.primaryCondition}")`, true);

    setTimeout(() => {
      this.currentJourney.clinicalSummary = {
        reason: "Longitudinal Cardiology Follow-up & Vitals Management",
        reportedSymptoms: this.currentJourney.goalText || "Routine consultation checkup",
        verifiedDiagnoses: p.primaryCondition,
        activeMedications: p.medications.map(m => `${m.name} (${m.dosage})`),
        allergies: p.allergies,
        latestVitals: `BP: ${p.bp || '128/82 mmHg'}, Fasting Glucose: ${p.glucose || '110 mg/dL'}`,
        labMarkers: `HbA1c: ${p.labPanel.hba1c}, Creatinine: ${p.labPanel.creatinine}`,
        questionsForDoctor: "1. Evaluate blood pressure trends over past 60 days. 2. Verify medication refill tolerance."
      };

      this.logThought('Tool Result', 'Clinical summary synthesized without hallucination from verified patient records.');
      this.renderSummaryReviewCard();
    }, 600);
  }

  renderSummaryReviewCard() {
    const actionWorkspace = document.getElementById('agent-action-workspace');
    if (!actionWorkspace) return;

    const p = getActivePatient();
    const sum = this.currentJourney.clinicalSummary;
    const loc = agentI18n[this.language] || agentI18n['en'];

    const reviewSpeech = loc.summaryReview(p.assignedDoctor);
    this.addChatMessage('agent', reviewSpeech);
    this.speak(reviewSpeech);

    actionWorkspace.innerHTML = `
      <div class="agent-action-card">
        <div class="action-card-header">
          <div style="font-weight: 700; color: var(--accent-blue); font-size: 1.05rem;">
            <i class="fa-solid fa-file-medical"></i> Step 4: Review Clinical Summary for Doctor
          </div>
          <span class="badge badge-complete"><i class="fa-solid fa-shield-check"></i> Patient Consent Required</span>
        </div>

        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 10px;">
          This clinical brief will be transmitted to <strong>${p.assignedDoctor}</strong> at City Heart Institute:
        </p>

        <div style="background: var(--bg-tertiary); padding: 14px; border-radius: var(--radius-sm); font-size: 0.86rem; line-height: 1.6; margin-bottom: 14px; border: 1px solid var(--border-color);">
          <div><strong>Consultation Purpose:</strong> ${sum.reason}</div>
          <div><strong>Patient-Reported Statement:</strong> "${sum.reportedSymptoms}"</div>
          <div><strong>Verified Diagnoses:</strong> ${sum.verifiedDiagnoses}</div>
          <div><strong>Active Regimen:</strong> ${sum.activeMedications.join('; ')}</div>
          <div><strong>Documented Allergies:</strong> <span style="color: var(--accent-rose); font-weight: 700;">${sum.allergies.join(', ')}</span></div>
          <div><strong>Recorded Vitals:</strong> ${sum.latestVitals} | ${sum.labMarkers}</div>
          <div><strong>Suggested Patient Questions:</strong> ${sum.questionsForDoctor}</div>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button class="btn-primary" onclick="curalinkAgent.approveSummarySharing()">
            <i class="fa-solid fa-share-nodes"></i> Authorize & Share with Doctor
          </button>
          <button class="btn-secondary" onclick="curalinkAgent.declineSummarySharing()">
            <i class="fa-solid fa-lock"></i> Keep Confidential (Do Not Share)
          </button>
        </div>
      </div>
    `;
  }

  approveSummarySharing() {
    this.logThought('Consent Gate', 'Patient authorized clinical summary transmission to attending physician.', true);
    this.updatePlanStep(4, 'completed');
    this.updatePlanStep(5, 'in-progress');
    this.executeTransportCoordination();
  }

  declineSummarySharing() {
    this.logThought('Consent Gate', 'Patient opted out of automated medical summary sharing. Respecting privacy.', true);
    this.currentJourney.clinicalSummary.shared = false;
    this.updatePlanStep(4, 'completed');
    this.updatePlanStep(5, 'in-progress');

    showToast("🔒 Medical summary will remain confidential.");
    this.executeTransportCoordination();
  }

  executeTransportCoordination() {
    const p = getActivePatient();
    this.logThought('Tool Call', `tool_query_transport_options(pickup="Patient Residence", destination="City Heart Institute", arrivalTime="${this.currentJourney.selectedSlot}")`, true);

    setTimeout(() => {
      this.logThought('Tool Result', 'Calculated 18 min journey time. 3 mobility-compatible ride options generated.');
      this.renderTransportSelectionCard();
    }, 700);
  }

  renderTransportSelectionCard() {
    const actionWorkspace = document.getElementById('agent-action-workspace');
    if (!actionWorkspace) return;

    const p = getActivePatient();
    const loc = agentI18n[this.language] || agentI18n['en'];

    const transitSpeech = loc.transitQuery();
    this.addChatMessage('agent', transitSpeech);
    this.speak(transitSpeech);

    actionWorkspace.innerHTML = `
      <div class="agent-action-card">
        <div class="action-card-header">
          <div style="font-weight: 700; color: var(--accent-blue); font-size: 1.05rem;">
            <i class="fa-solid fa-car-side"></i> Step 5: Accessible Transportation Options
          </div>
          <span class="demo-service-badge"><i class="fa-solid fa-taxi"></i> Transport Dispatch Demo</span>
        </div>

        <div style="background: var(--bg-tertiary); padding: 10px 14px; border-radius: var(--radius-sm); margin-bottom: 12px; font-size: 0.85rem;">
          <i class="fa-solid fa-location-dot" style="color: var(--accent-blue);"></i> Pickup: <strong>14, Garden Road</strong> → Drop: <strong>City Heart Institute (Room 402)</strong><br>
          <i class="fa-solid fa-clock" style="color: var(--accent-teal);"></i> Recommended Pickup Time: <strong>Tomorrow at 09:15 AM</strong> (Arrives 30m early).
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
          <label class="transport-card-option selected">
            <input type="radio" name="agent-transport-opt" value="AC Senior Medical Cab" checked style="margin-right: 10px;">
            <div>
              <strong>AC Senior Medical Cab (Wheelchair Accessible & Escort)</strong>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">Estimated Fare: ₹280 • Low-entry vehicle with patient assistance</div>
            </div>
            <span class="badge badge-complete">Recommended</span>
          </label>

          <label class="transport-card-option">
            <input type="radio" name="agent-transport-opt" value="Standard City Taxi" style="margin-right: 10px;">
            <div>
              <strong>Standard City Cab / Auto (Fastest Pickup)</strong>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">Estimated Fare: ₹180 • Direct curbside drop-off</div>
            </div>
          </label>

          <label class="transport-card-option">
            <input type="radio" name="agent-transport-opt" value="Family / Caregiver Accompanied Ride" style="margin-right: 10px;">
            <div>
              <strong>Family / Caregiver Accompanied Ride</strong>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">Estimated Fare: ₹0 • Auto-alerts ${p.caregiver} to provide ride</div>
            </div>
          </label>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button class="btn-primary" onclick="curalinkAgent.confirmTransport()">
            <i class="fa-solid fa-check"></i> Book Selected Transportation
          </button>
          <button class="btn-secondary" onclick="curalinkAgent.declineTransport()">
            <i class="fa-solid fa-person-walking"></i> Decline (I Have My Own Ride)
          </button>
          <button class="btn-secondary" style="color: var(--accent-rose);" onclick="curalinkAgent.simulateTransportFailure()">
            <i class="fa-solid fa-triangle-exclamation"></i> Simulate Transport Failure
          </button>
        </div>
      </div>
    `;
  }

  confirmTransport() {
    const selectedRadio = document.querySelector('input[name="agent-transport-opt"]:checked');
    const rideType = selectedRadio ? selectedRadio.value : 'AC Senior Medical Cab';
    const p = getActivePatient();

    this.currentJourney.selectedTransport = {
      type: rideType,
      bookingId: `CAB-${Math.floor(10000 + Math.random() * 90000)}`,
      pickupTime: '09:15 AM Tomorrow',
      driver: 'Ramesh K. (TN-09-AK-4421)',
      cost: rideType.includes('280') ? '₹280' : (rideType.includes('180') ? '₹180' : '₹0')
    };

    this.logThought('Tool Execution', `tool_book_patient_transport(provider="${rideType}", bookingId="${this.currentJourney.selectedTransport.bookingId}")`, true);

    this.updatePlanStep(5, 'completed');
    this.updatePlanStep(6, 'completed');
    this.executeFinalOrchestration();
  }

  declineTransport() {
    this.currentJourney.selectedTransport = {
      type: 'Self-Arranged Transportation',
      bookingId: 'N/A',
      pickupTime: 'Self-managed',
      driver: 'None',
      cost: '₹0'
    };

    this.logThought('Tool Execution', 'tool_book_patient_transport skipped per patient preference.', true);
    this.updatePlanStep(5, 'completed');
    this.updatePlanStep(6, 'completed');
    this.executeFinalOrchestration();
  }

  simulateTransportFailure() {
    this.logThought('Tool Failure Handler', 'Simulated transport dispatch network timeout. Triggering recovery protocol.', true);
    showToast("⚠️ Demonstration: Transport service unavailable. Triggering fallback.");

    const actionWorkspace = document.getElementById('agent-action-workspace');
    if (actionWorkspace) {
      actionWorkspace.innerHTML = `
        <div class="agent-action-card" style="border-color: var(--accent-amber);">
          <div class="action-card-header">
            <div style="font-weight: 700; color: var(--accent-amber); font-size: 1.05rem;">
              <i class="fa-solid fa-triangle-exclamation"></i> Transport Service Notice
            </div>
            <span class="badge badge-update">Fallback Engaged</span>
          </div>
          <p style="font-size: 0.9rem; margin-bottom: 14px;">
            The connected commercial cab gateway reported no active drivers in your area. Your doctor appointment remains safely reserved.
          </p>
          <div style="display: flex; gap: 10px;">
            <button class="btn-primary" onclick="curalinkAgent.confirmTransportFallback()">
              <i class="fa-solid fa-users"></i> Notify Caregiver to Provide Ride
            </button>
            <button class="btn-secondary" onclick="curalinkAgent.declineTransport()">
              <i class="fa-solid fa-check"></i> Continue with Self-Arranged Ride
            </button>
          </div>
        </div>
      `;
    }
  }

  confirmTransportFallback() {
    const p = getActivePatient();
    this.currentJourney.selectedTransport = {
      type: `Caregiver Vehicle Escort (${p.caregiver})`,
      bookingId: 'ESCORT-CAREGIVER',
      pickupTime: '09:15 AM Tomorrow',
      driver: p.caregiver,
      cost: '₹0'
    };
    this.updatePlanStep(5, 'completed');
    this.updatePlanStep(6, 'completed');
    this.executeFinalOrchestration();
  }

  executeFinalOrchestration() {
    const p = getActivePatient();
    this.updatePlanStep(7, 'in-progress');
    this.updatePlanStep(8, 'in-progress');

    this.logThought('Tool Call', `tool_schedule_smart_reminders(patientId="${p.id}", alarms=["Tomorrow 08:00 AM Departure Alert", "Tomorrow 09:00 AM Cab Arrival"])`, true);
    this.currentJourney.remindersScheduled = true;

    this.logThought('Tool Call', `tool_dispatch_caregiver_alert(contact="${p.emergencyContact}", recipient="${p.caregiver}", appointment="${this.currentJourney.selectedSlot}")`, true);
    this.currentJourney.caregiverNotified = true;

    const newTimelineEvent = {
      date: new Date().toISOString().split('T')[0],
      event: `Agent-Coordinated Cardiology Consultation (${this.currentJourney.selectedSlot})`,
      doctor: p.assignedDoctor,
      summary: `Confirmed booking ID ${this.currentJourney.appointmentBookingId}. Transport: ${this.currentJourney.selectedTransport.type}. Clinical summary synchronized. Caregiver notified.`,
      risk: 'Low'
    };
    p.timelineEvents.unshift(newTimelineEvent);

    if (typeof renderApp === 'function') renderApp();

    setTimeout(() => {
      this.updatePlanStep(7, 'completed');
      this.updatePlanStep(8, 'completed');
      this.state = 'COMPLETED';
      this.renderConsolidatedDashboard();
    }, 800);
  }

  renderConsolidatedDashboard() {
    const actionWorkspace = document.getElementById('agent-action-workspace');
    if (!actionWorkspace) return;

    const p = getActivePatient();
    const j = this.currentJourney;
    const loc = agentI18n[this.language] || agentI18n['en'];

    const successSpeech = loc.journeySuccess(p.name);
    this.addChatMessage('agent', `🎉 <strong style="color: var(--accent-emerald);">${successSpeech}</strong>`);
    this.speak(successSpeech);

    actionWorkspace.innerHTML = `
      <div class="agent-action-card" style="border-color: var(--accent-emerald);">
        <div class="action-card-header">
          <div style="font-weight: 700; color: var(--accent-emerald); font-size: 1.15rem;">
            <i class="fa-solid fa-circle-check"></i> Complete Healthcare Journey Coordinated!
          </div>
          <span class="badge badge-complete"><i class="fa-solid fa-lock"></i> Fully Verified</span>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px;">
          
          <div style="background: var(--bg-tertiary); padding: 12px; border-radius: var(--radius-sm);">
            <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 700;">CONFIRMED CONSULTATION</div>
            <strong style="color: var(--accent-blue);">${j.selectedDoctor}</strong>
            <div style="font-size: 0.84rem; color: var(--text-secondary);">${j.selectedSlot}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">Ref: ${j.appointmentBookingId} • City Heart Institute</div>
          </div>

          <div style="background: var(--bg-tertiary); padding: 12px; border-radius: var(--radius-sm);">
            <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 700;">CONFIRMED TRANSPORTATION</div>
            <strong style="color: var(--accent-teal);">${j.selectedTransport.type}</strong>
            <div style="font-size: 0.84rem; color: var(--text-secondary);">${j.selectedTransport.pickupTime}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">Driver: ${j.selectedTransport.driver} • Fare: ${j.selectedTransport.cost}</div>
          </div>

          <div style="background: var(--bg-tertiary); padding: 12px; border-radius: var(--radius-sm);">
            <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 700;">CLINICAL SUMMARY STATUS</div>
            <strong style="color: var(--accent-purple);"><i class="fa-solid fa-file-shield"></i> Doctor Brief Ready</strong>
            <div style="font-size: 0.82rem; color: var(--text-secondary);">Sent to Suite 402 with vitals & medication list</div>
          </div>

          <div style="background: var(--bg-tertiary); padding: 12px; border-radius: var(--radius-sm);">
            <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 700;">CAREGIVER NOTIFICATION</div>
            <strong style="color: var(--accent-emerald);"><i class="fa-solid fa-paper-plane"></i> Alert Dispatched</strong>
            <div style="font-size: 0.82rem; color: var(--text-secondary);">${p.caregiver} (${p.emergencyContact})</div>
          </div>

        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <button class="btn-primary" onclick="curalinkAgent.viewAuditTrail()">
            <i class="fa-solid fa-clipboard-list"></i> View Agent Execution Audit Trail
          </button>
          <button class="btn-secondary" onclick="curalinkAgent.resetJourney()">
            <i class="fa-solid fa-plus"></i> Coordinate Another Journey
          </button>
        </div>
      </div>
    `;
  }

  // --- STEPPER UI STATE MANAGER ---
  updatePlanStep(stepId, newStatus) {
    const step = this.currentJourney.plan.find(s => s.id === stepId);
    if (step) {
      step.status = newStatus;
      this.renderStepperUI();
    }
  }

  renderStepperUI() {
    const container = document.getElementById('agent-stepper-list');
    if (!container) return;

    container.innerHTML = this.currentJourney.plan.map(step => {
      let icon = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
      let pillClass = 'pending';
      let pillText = 'Pending';

      if (step.status === 'completed') {
        icon = '<i class="fa-solid fa-circle-check" style="color: var(--accent-emerald);"></i>';
        pillClass = 'completed';
        pillText = 'Done';
      } else if (step.status === 'in-progress') {
        icon = '<i class="fa-solid fa-gear fa-spin" style="color: var(--accent-blue);"></i>';
        pillClass = 'in-progress';
        pillText = 'Working...';
      } else if (step.status === 'awaiting') {
        icon = '<i class="fa-solid fa-hand" style="color: var(--accent-amber);"></i>';
        pillClass = 'awaiting';
        pillText = 'Approval';
      }

      return `
        <div class="step-row ${step.status}">
          <div style="display: flex; align-items: center; gap: 10px;">
            ${icon}
            <span>${step.id}. ${step.title}</span>
          </div>
          <span class="step-status-pill ${pillClass}">${pillText}</span>
        </div>
      `;
    }).join('');
  }

  updateStepperUI(val) {
    if (val === -1) {
      const container = document.getElementById('agent-stepper-list');
      if (container) {
        container.innerHTML = `
          <div class="step-row awaiting" style="border-left-color: var(--accent-rose); color: var(--accent-rose);">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>Emergency Protocol Activated (Bypassed Routine Scheduling)</span>
          </div>
        `;
      }
    }
  }

  // --- FAILURE / ALTERNATIVE TEST HANDLERS ---
  simulateNoSlots() {
    this.logThought('Failure Recovery', 'Simulating zero available consultation slots with primary cardiologist.', true);
    showToast("⚠️ Demonstration: Primary doctor fully booked.");

    const actionWorkspace = document.getElementById('agent-action-workspace');
    if (actionWorkspace) {
      actionWorkspace.innerHTML = `
        <div class="agent-action-card" style="border-color: var(--accent-amber);">
          <div class="action-card-header">
            <div style="font-weight: 700; color: var(--accent-amber); font-size: 1.05rem;">
              <i class="fa-solid fa-calendar-xmark"></i> No Direct Slots Tomorrow
            </div>
            <span class="badge badge-update">Alternative Search</span>
          </div>
          <p style="font-size: 0.9rem; margin-bottom: 12px;">
            Dr. Marcus Vance is booked tomorrow. The Agent identified two verified clinical alternatives at City Heart Institute:
          </p>
          <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;">
            <label class="transport-card-option selected">
              <input type="radio" name="agent-doc-slot" value="Tomorrow at 11:30 AM with Dr. Aravind Swamy" checked style="margin-right: 10px;">
              <div>
                <strong>Dr. Aravind Swamy (Senior Interventional Cardiologist)</strong>
                <div style="font-size: 0.78rem; color: var(--text-secondary);">Available Tomorrow at 11:30 AM • Consultation Fee: ₹800</div>
              </div>
            </label>
            <label class="transport-card-option">
              <input type="radio" name="agent-doc-slot" value="Day after Tomorrow at 10:00 AM with Dr. Marcus Vance" style="margin-right: 10px;">
              <div>
                <strong>Dr. Marcus Vance (Next Available Day)</strong>
                <div style="font-size: 0.78rem; color: var(--text-secondary);">Friday at 10:00 AM • Clinic Room 402</div>
              </div>
            </label>
          </div>
          <button class="btn-primary" onclick="curalinkAgent.confirmDoctorSlot()">
            <i class="fa-solid fa-check"></i> Book Alternative Specialist
          </button>
        </div>
      `;
    }
  }

  cancelJourney() {
    this.logThought('HITL Gate', 'Patient initiated journey cancellation.', true);
    this.state = 'IDLE';
    showToast("Journey cancelled. No bookings or charges made.");
    this.addChatMessage('agent', "Journey coordination cancelled. I am here whenever you need me.");
    this.renderPlanApprovalCard();
  }

  resetJourney() {
    this.state = 'IDLE';
    this.currentJourney.plan = [];
    this.currentJourney.selectedDoctor = null;
    this.currentJourney.selectedSlot = null;
    this.currentJourney.selectedTransport = null;
    
    const stream = document.getElementById('agent-chat-stream');
    if (stream) stream.innerHTML = '';
    
    const thoughts = document.getElementById('agent-thought-stream');
    if (thoughts) thoughts.innerHTML = '';

    const p = getActivePatient();
    const loc = agentI18n[this.language] || agentI18n['en'];
    const welcome = loc.welcome(p.name);

    this.addChatMessage('agent', welcome);
    this.speak(welcome);

    const actionWorkspace = document.getElementById('agent-action-workspace');
    if (actionWorkspace) {
      actionWorkspace.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <i class="fa-solid fa-wand-magic-sparkles" style="font-size: 2.5rem; color: var(--accent-blue); margin-bottom: 12px; display: block;"></i>
          <h4 style="color: var(--text-primary); font-size: 1.15rem; margin-bottom: 6px;">Ready to Coordinate Your Care</h4>
          <p style="font-size: 0.9rem;">Tap the microphone or choose a voice prompt to initiate an autonomous healthcare journey.</p>
        </div>
      `;
    }

    const stepper = document.getElementById('agent-stepper-list');
    if (stepper) {
      stepper.innerHTML = `
        <div class="step-row pending"><span>1. Review medical history</span><span class="step-status-pill pending">Pending</span></div>
        <div class="step-row pending"><span>2. Identify specialist</span><span class="step-status-pill pending">Pending</span></div>
        <div class="step-row pending"><span>3. Check appointment availability</span><span class="step-status-pill pending">Pending</span></div>
        <div class="step-row pending"><span>4. Prepare medical summary</span><span class="step-status-pill pending">Pending</span></div>
        <div class="step-row pending"><span>5. Find transportation</span><span class="step-status-pill pending">Pending</span></div>
        <div class="step-row pending"><span>6. Confirm bookings</span><span class="step-status-pill pending">Pending</span></div>
        <div class="step-row pending"><span>7. Arrange reminders</span><span class="step-status-pill pending">Pending</span></div>
        <div class="step-row pending"><span>8. Notify caregiver & follow-up</span><span class="step-status-pill pending">Pending</span></div>
      `;
    }

    this.renderVoiceQuickPills();
  }

  viewAuditTrail() {
    alert("CuraLink Agent Audit Trail:\n\n" + this.auditTrail.map(e => `[${e.timestamp}] ${e.source}: ${e.message}`).join("\n"));
  }
}

// Global Agent Instance
let curalinkAgent = null;

document.addEventListener('DOMContentLoaded', () => {
  curalinkAgent = new CuraLinkAgentCoordinator();
});

// UI Integration Bridge Functions
function openAgentCoordinatorModal() {
  const modal = document.getElementById('modal-agent-coordinator');
  if (modal) {
    modal.classList.add('active');
    // Ensure agent syncs with active platform language when opened
    if (curalinkAgent) {
      const activeLang = (window.state && window.state.currentLang) || 'en';
      curalinkAgent.setLanguage(activeLang, false);
    }
  }
}

function closeAgentCoordinatorModal() {
  const modal = document.getElementById('modal-agent-coordinator');
  if (modal) {
    modal.classList.remove('active');
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }
}
