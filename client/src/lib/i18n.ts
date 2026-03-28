import { create } from 'zustand';

type Language = 'zh' | 'fr' | 'ar' | 'en';

interface Translation {
  // Common
  home: string;
  recharge: string;
  plans: string;
  support: string;
  profile: string;
  cancel: string;
  confirm: string;
  
  // Login
  welcome: string;
  loginDesc: string;
  phoneLabel: string;
  phonePlaceholder: string;
  getOtp: string;
  loginMethods: string;
  
  // Plans & Signature
  explorePlans: string;
  buyPlan: string;
  signContract: string;
  signHere: string;
  uploadID: string;
  clearSign: string;
  submit: string;
  
  // Support
  howCanWeHelp: string;
  chatbot: string;
  chatPlaceholder: string;
  findStore: string;
}

const translations: Record<Language, Translation> = {
  zh: {
    home: "首页", recharge: "充值", plans: "套餐", support: "客服", profile: "我的",
    cancel: "取消", confirm: "确认",
    welcome: "欢迎回来", loginDesc: "请输入您的 Mobilis 手机号码进行登录或注册。",
    phoneLabel: "手机号码", phonePlaceholder: "05 XX XX XX XX", getOtp: "获取验证码",
    loginMethods: "其他登录方式",
    explorePlans: "探索套餐", buyPlan: "立即办理", signContract: "电子合同签署",
    signHere: "请在下方签名", uploadID: "上传身份证/护照照片", clearSign: "清除重签", submit: "提交办理",
    howCanWeHelp: "您好，需要什么帮助？", chatbot: "智能客服机器人", chatPlaceholder: "输入您的问题...", findStore: "查找附近营业厅"
  },
  en: {
    home: "Home", recharge: "Recharge", plans: "Plans", support: "Support", profile: "Profile",
    cancel: "Cancel", confirm: "Confirm",
    welcome: "Welcome Back", loginDesc: "Enter your Mobilis phone number to login or register.",
    phoneLabel: "Phone Number", phonePlaceholder: "05 XX XX XX XX", getOtp: "Get OTP",
    loginMethods: "Other Login Methods",
    explorePlans: "Explore Plans", buyPlan: "Buy Now", signContract: "Digital Contract",
    signHere: "Sign below", uploadID: "Upload ID/Passport", clearSign: "Clear", submit: "Submit",
    howCanWeHelp: "How can we help you?", chatbot: "AI Assistant", chatPlaceholder: "Type your message...", findStore: "Find nearby stores"
  },
  fr: {
    home: "Accueil", recharge: "Recharger", plans: "Forfaits", support: "Aide", profile: "Profil",
    cancel: "Annuler", confirm: "Confirmer",
    welcome: "Bienvenue", loginDesc: "Entrez votre numéro Mobilis pour vous connecter.",
    phoneLabel: "Numéro de téléphone", phonePlaceholder: "05 XX XX XX XX", getOtp: "Obtenir le code",
    loginMethods: "Autres méthodes de connexion",
    explorePlans: "Nos Forfaits", buyPlan: "Souscrire", signContract: "Contrat Numérique",
    signHere: "Signez ci-dessous", uploadID: "Télécharger une pièce d'identité", clearSign: "Effacer", submit: "Soumettre",
    howCanWeHelp: "Comment pouvons-nous vous aider?", chatbot: "Assistant virtuel", chatPlaceholder: "Tapez votre message...", findStore: "Trouver une agence"
  },
  ar: {
    home: "الرئيسية", recharge: "تعبئة", plans: "الباقات", support: "الدعم", profile: "حسابي",
    cancel: "إلغاء", confirm: "تأكيد",
    welcome: "مرحباً بك", loginDesc: "أدخل رقم هاتف موبيليس لتسجيل الدخول.",
    phoneLabel: "رقم الهاتف", phonePlaceholder: "05 XX XX XX XX", getOtp: "الحصول على الرمز",
    loginMethods: "طرق تسجيل دخول أخرى",
    explorePlans: "اكتشف الباقات", buyPlan: "اشترك الآن", signContract: "عقد رقمي",
    signHere: "وقع هنا", uploadID: "تحميل الهوية/جواز السفر", clearSign: "مسح", submit: "إرسال",
    howCanWeHelp: "كيف يمكننا مساعدتك؟", chatbot: "المساعد الآلي", chatPlaceholder: "اكتب رسالتك...", findStore: "البحث عن وكالة"
  }
};

interface I18nStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

export const useI18n = create<I18nStore>((set) => ({
  language: 'zh',
  setLanguage: (lang) => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    set({ language: lang, t: translations[lang] });
  },
  t: translations['zh'],
}));