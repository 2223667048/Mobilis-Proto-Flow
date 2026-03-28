import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'zh' | 'fr' | 'ar' | 'en';

export interface Translation {
  // Common
  home: string; recharge: string; plans: string; support: string; profile: string;
  cancel: string; confirm: string; back: string; success: string;

  // Login & OTP
  welcome: string; loginDesc: string; phoneLabel: string; phonePlaceholder: string;
  getOtp: string; loginMethods: string; biometricLogin: string; verifyFace: string;
  verifyFinger: string;
  otpTitle: string; otpSentTo: string; verifying: string; resend: string; resendOtp: string;

  // Dashboard
  goodMorning: string; currentBalance: string; prepaid: string; dzd: string;
  quickRecharge: string; buyPlans: string; emergency: string;
  myUsage: string; details: string; planData: string; remainingDays: string;
  total: string; calls: string; unlimited: string; sms: string; international: string;
  promotions: string; hot: string; promoTitle: string; promoAction: string;
  selfService: string; changeService: string; pukCode: string; pointsMall: string; billQuery: string;

  // Recharge
  rechargeTitle: string; cardMethod: string; scratchMethod: string; rechargeNumber: string;
  self: string; selectAmount: string; customAmount: string; promoHint: string;
  confirmPay: string; password14: string; scratchHint: string; rechargeNow: string;
  processing: string; successTitle: string; successDesc: string; phoneStr: string;
  transTime: string; transId: string; backHome: string;

  // Plans
  explorePlans: string; searchPlan: string; catAll: string; catPixx: string; catAwawal: string;
  catRoaming: string; catData: string; validity: string; popular: string; viewDetails: string;
  buyPlan: string; roamingTitle: string; roamingDesc: string; viewRoaming: string; orderSuccess: string; orderSuccessDesc: string;

  // Support
  howCanWeHelp: string; chatbot: string; chatbotDesc: string; callSupport: string; callSupportDesc: string;
  faq: string; viewMoreFaq: string; findStore: string; findStoreDesc: string;

  // Profile & Edit
  profileTitle: string; verified: string; memberLevel: string; goldMember: string; pointsBalance: string;
  accManagement: string; personalInfo: string; deviceSim: string; esimActive: string; billsInvoices: string;
  settings: string; accSecurity: string; notifSettings: string; payMethods: string; generalSettings: string;
  logout: string; logoutConfirm: string; version: string;
  editProfile: string; save: string; name: string; email: string; saveSuccess: string;

  // Sign
  signContract: string; signHere: string; uploadID: string; clearSign: string; submit: string;
  signSuccessTitle: string; signSuccessDesc: string; photoUploadHint: string; signHint: string;

  // Map & Chat
  storeLocator: string; searchStore: string; openStore: string; closedStore: string; hours: string; distance: string;
  aiAssistant: string; online: string; chatInput: string; send: string; chatWelcome: string; chatReply: string;

  // Notifications
  notifTitle: string; all: string; unread: string; noNotif: string; markAllRead: string;
  notifSysMsg: string; notifPromoMsg: string;
}

const translations: Record<Language, Translation> = {
  zh: {
    home: "首页", recharge: "充值", plans: "套餐", support: "客服", profile: "我的",
    cancel: "取消", confirm: "确认", back: "返回", success: "成功",
    welcome: "欢迎回来", loginDesc: "请输入您的 Mobilis 手机号码进行登录或注册。", phoneLabel: "手机号码", phonePlaceholder: "05 XX XX XX XX",
    getOtp: "获取验证码", loginMethods: "其他登录方式", biometricLogin: "正在验证...", verifyFace: "请确保面部在扫描区域内", verifyFinger: "请验证指纹",
    otpTitle: "验证码", otpSentTo: "我们已将 4 位验证码发送至", verifying: "验证中...", resend: "重新发送", resendOtp: "重新发送验证码",
    goodMorning: "早上好", currentBalance: "当前话费余额", prepaid: "预付费", dzd: "DZD",
    quickRecharge: "充值缴费", buyPlans: "购买套餐", emergency: "紧急救助",
    myUsage: "我的用量", details: "详情", planData: "套餐流量", remainingDays: "剩余 3 天",
    total: "总计", calls: "通话", unlimited: "无限制", sms: "短信", international: "国际",
    promotions: "专享优惠", hot: "HOT", promoTitle: "5G 体验套餐\n限时半价", promoAction: "立即办理",
    selfService: "自助服务", changeService: "服务变更", pukCode: "PUK码", pointsMall: "积分商城", billQuery: "账单查询",
    rechargeTitle: "账户充值", cardMethod: "银行卡/电子支付", scratchMethod: "充值卡", rechargeNumber: "充值号码",
    self: "本机", selectAmount: "选择金额 (DZD)", customAmount: "输入自定义金额", promoHint: "充值 1000 DZD 或以上，即可获得 10% 额外流量赠送！",
    confirmPay: "确认支付", password14: "14位充值密码", scratchHint: "刮开充值卡背面的涂层\n输入14位数字密码", rechargeNow: "立即充值",
    processing: "处理中...", successTitle: "充值成功！", successDesc: "您已成功充值到账户。", phoneStr: "手机号码", transTime: "交易时间", transId: "交易单号", backHome: "返回首页",
    explorePlans: "探索套餐", searchPlan: "搜索套餐名称...", catAll: "全部", catPixx: "PixX 系列", catAwawal: "Awawal", catRoaming: "国际漫游", catData: "纯流量", validity: "有效期", popular: "最受欢迎", viewDetails: "查看详情",
    buyPlan: "立即订购", roamingTitle: "需要出国旅行？", roamingDesc: "开通国际漫游套餐，在全球超过 150 个国家保持连接。", viewRoaming: "查看漫游套餐", orderSuccess: "订购成功！", orderSuccessDesc: "套餐已生效，您现在可以开始使用新套餐的服务了。",
    howCanWeHelp: "您好，需要什么帮助？", chatbot: "智能客服", chatbotDesc: "7x24小时智能解答", callSupport: "电话支持", callSupportDesc: "拨打 666 或 888",
    faq: "常见问题 (FAQ)", viewMoreFaq: "查看更多问题", findStore: "查找附近的营业厅", findStoreDesc: "查询网点位置与营业时间",
    profileTitle: "我的主页", verified: "已实名", memberLevel: "会员等级", goldMember: "Gold 会员", pointsBalance: "积分余额",
    accManagement: "账户管理", personalInfo: "个人资料", deviceSim: "我的设备与 SIM", esimActive: "eSIM 已激活", billsInvoices: "账单与发票",
    settings: "设置", accSecurity: "账号安全", notifSettings: "通知设置", payMethods: "支付方式", generalSettings: "通用设置",
    logout: "退出登录", logoutConfirm: "确定要退出登录吗？", version: "版本 3.2.0",
    editProfile: "编辑资料", save: "保存更改", name: "姓名", email: "电子邮箱", saveSuccess: "资料已保存",
    signContract: "电子合同签署", signHere: "请在下方签名", uploadID: "上传身份证/护照", clearSign: "清除重签", submit: "提交办理",
    signSuccessTitle: "合约签署成功", signSuccessDesc: "您的申请已提交并生成电子合约。我们将尽快为您开通服务。", photoUploadHint: "点击拍照或上传图片", signHint: "请按要求上传身份证件并进行电子签名，以完成实名认证和合约签署。",
    storeLocator: "营业厅网点", searchStore: "搜索城市或区域...", openStore: "营业中", closedStore: "休息", hours: "营业时间", distance: "距离",
    aiAssistant: "AI 智能助手", online: "在线", chatInput: "输入您的问题...", send: "发送", chatWelcome: "您好！我是 Mobilis 智能助手，请问有什么可以帮您的？", chatReply: "我已经收到您的问题。系统检测到这是一个常见问题，稍后将有专员为您解答。",
    notifTitle: "消息通知", all: "全部", unread: "未读", noNotif: "暂无消息", markAllRead: "全部已读",
    notifSysMsg: "系统通知", notifPromoMsg: "活动优惠"
  },
  en: {
    home: "Home", recharge: "Recharge", plans: "Plans", support: "Support", profile: "Profile",
    cancel: "Cancel", confirm: "Confirm", back: "Back", success: "Success",
    welcome: "Welcome Back", loginDesc: "Enter your Mobilis phone number to login or register.", phoneLabel: "Phone Number", phonePlaceholder: "05 XX XX XX XX",
    getOtp: "Get OTP", loginMethods: "Other Methods", biometricLogin: "Verifying...", verifyFace: "Keep face in frame", verifyFinger: "Verify fingerprint",
    otpTitle: "Verification", otpSentTo: "We sent a 4-digit code to", verifying: "Verifying...", resend: "Resend", resendOtp: "Resend OTP",
    goodMorning: "Good Morning", currentBalance: "Current Balance", prepaid: "Prepaid", dzd: "DZD",
    quickRecharge: "Recharge", buyPlans: "Buy Plans", emergency: "Emergency",
    myUsage: "My Usage", details: "Details", planData: "Plan Data", remainingDays: "3 Days Left",
    total: "Total", calls: "Calls", unlimited: "Unlimited", sms: "SMS", international: "Intl",
    promotions: "Promotions", hot: "HOT", promoTitle: "5G Experience\nHalf Price", promoAction: "Get Now",
    selfService: "Self Service", changeService: "Change", pukCode: "PUK", pointsMall: "Points", billQuery: "Bills",
    rechargeTitle: "Recharge", cardMethod: "Card/E-Payment", scratchMethod: "Scratch Card", rechargeNumber: "Phone Number",
    self: "Self", selectAmount: "Select Amount", customAmount: "Custom Amount", promoHint: "Recharge 1000 DZD or more to get 10% extra data!",
    confirmPay: "Confirm Payment", password14: "14-digit Code", scratchHint: "Scratch the card to reveal 14 digits", rechargeNow: "Recharge Now",
    processing: "Processing...", successTitle: "Success!", successDesc: "Your account has been recharged.", phoneStr: "Phone", transTime: "Time", transId: "Trans. ID", backHome: "Home",
    explorePlans: "Explore Plans", searchPlan: "Search plans...", catAll: "All", catPixx: "PixX", catAwawal: "Awawal", catRoaming: "Roaming", catData: "Data", validity: "Validity", popular: "Popular", viewDetails: "Details",
    buyPlan: "Order Now", roamingTitle: "Traveling Abroad?", roamingDesc: "Stay connected in 150+ countries with roaming.", viewRoaming: "View Roaming", orderSuccess: "Subscribed!", orderSuccessDesc: "Plan is now active.",
    howCanWeHelp: "How can we help?", chatbot: "AI Chatbot", chatbotDesc: "24/7 Support", callSupport: "Call Center", callSupportDesc: "Dial 666 or 888",
    faq: "FAQ", viewMoreFaq: "More FAQs", findStore: "Find Store", findStoreDesc: "Find nearby branches & hours",
    profileTitle: "Profile", verified: "Verified", memberLevel: "Level", goldMember: "Gold", pointsBalance: "Points",
    accManagement: "Account", personalInfo: "Personal Info", deviceSim: "Device & SIM", esimActive: "eSIM Active", billsInvoices: "Bills",
    settings: "Settings", accSecurity: "Security", notifSettings: "Notifications", payMethods: "Payments", generalSettings: "General",
    logout: "Logout", logoutConfirm: "Are you sure you want to logout?", version: "Version 3.2.0",
    editProfile: "Edit Profile", save: "Save", name: "Name", email: "Email", saveSuccess: "Saved",
    signContract: "Sign Contract", signHere: "Sign Here", uploadID: "Upload ID", clearSign: "Clear", submit: "Submit",
    signSuccessTitle: "Signed Successfully", signSuccessDesc: "Your application is submitted.", photoUploadHint: "Tap to upload", signHint: "Upload ID and sign to complete.",
    storeLocator: "Store Locator", searchStore: "Search city...", openStore: "Open", closedStore: "Closed", hours: "Hours", distance: "Distance",
    aiAssistant: "AI Assistant", online: "Online", chatInput: "Message...", send: "Send", chatWelcome: "Hello! I'm Mobilis AI, how can I help?", chatReply: "I got your question. An agent will help you shortly.",
    notifTitle: "Notifications", all: "All", unread: "Unread", noNotif: "No Notifications", markAllRead: "Mark Read",
    notifSysMsg: "System", notifPromoMsg: "Promo"
  },
  fr: {
    home: "Accueil", recharge: "Recharge", plans: "Forfaits", support: "Aide", profile: "Profil",
    cancel: "Annuler", confirm: "Confirmer", back: "Retour", success: "Succès",
    welcome: "Bienvenue", loginDesc: "Entrez votre numéro pour vous connecter.", phoneLabel: "Téléphone", phonePlaceholder: "05 XX XX XX XX",
    getOtp: "Obtenir le code", loginMethods: "Autres méthodes", biometricLogin: "Vérification...", verifyFace: "Gardez le visage cadré", verifyFinger: "Vérifier empreinte",
    otpTitle: "Code OTP", otpSentTo: "Code envoyé au", verifying: "Vérification...", resend: "Renvoyer", resendOtp: "Renvoyer le code",
    goodMorning: "Bonjour", currentBalance: "Solde", prepaid: "Prépayé", dzd: "DZD",
    quickRecharge: "Recharger", buyPlans: "Forfaits", emergency: "Urgence",
    myUsage: "Consommation", details: "Détails", planData: "Data", remainingDays: "Reste 3 j",
    total: "Total", calls: "Appels", unlimited: "Illimité", sms: "SMS", international: "Inter",
    promotions: "Promotions", hot: "TOP", promoTitle: "Forfait 5G\nMoitié Prix", promoAction: "Souscrire",
    selfService: "Services", changeService: "Modifier", pukCode: "PUK", pointsMall: "Points", billQuery: "Facture",
    rechargeTitle: "Recharge", cardMethod: "Carte/E-Paiement", scratchMethod: "Carte de Recharge", rechargeNumber: "Numéro",
    self: "Moi", selectAmount: "Montant", customAmount: "Autre montant", promoHint: "Rechargez 1000 DZD pour +10% de Data!",
    confirmPay: "Payer", password14: "Code à 14 chiffres", scratchHint: "Grattez la carte", rechargeNow: "Recharger",
    processing: "Traitement...", successTitle: "Succès!", successDesc: "Recharge effectuée.", phoneStr: "Numéro", transTime: "Heure", transId: "ID Trans.", backHome: "Accueil",
    explorePlans: "Nos Forfaits", searchPlan: "Chercher...", catAll: "Tous", catPixx: "PixX", catAwawal: "Awawal", catRoaming: "Roaming", catData: "Data", validity: "Validité", popular: "Populaire", viewDetails: "Détails",
    buyPlan: "Commander", roamingTitle: "Voyage Prévu?", roamingDesc: "Restez connecté dans 150+ pays.", viewRoaming: "Voir Roaming", orderSuccess: "Souscrit!", orderSuccessDesc: "Le forfait est actif.",
    howCanWeHelp: "Comment aider?", chatbot: "Assistant IA", chatbotDesc: "Support 24/7", callSupport: "Appeler", callSupportDesc: "666 ou 888",
    faq: "FAQ", viewMoreFaq: "Plus de FAQ", findStore: "Agences", findStoreDesc: "Trouver une agence",
    profileTitle: "Profil", verified: "Vérifié", memberLevel: "Niveau", goldMember: "Gold", pointsBalance: "Points",
    accManagement: "Compte", personalInfo: "Infos Personnelles", deviceSim: "Appareil & SIM", esimActive: "eSIM Active", billsInvoices: "Factures",
    settings: "Paramètres", accSecurity: "Sécurité", notifSettings: "Notifications", payMethods: "Paiements", generalSettings: "Général",
    logout: "Déconnexion", logoutConfirm: "Voulez-vous vous déconnecter?", version: "Version 3.2.0",
    editProfile: "Éditer Profil", save: "Sauvegarder", name: "Nom", email: "Email", saveSuccess: "Sauvegardé",
    signContract: "Signer le contrat", signHere: "Signez ici", uploadID: "Télécharger ID", clearSign: "Effacer", submit: "Soumettre",
    signSuccessTitle: "Contrat Signé", signSuccessDesc: "Demande soumise.", photoUploadHint: "Appuyez pour upload", signHint: "Téléchargez ID et signez.",
    storeLocator: "Agences", searchStore: "Chercher ville...", openStore: "Ouvert", closedStore: "Fermé", hours: "Heures", distance: "Distance",
    aiAssistant: "Assistant IA", online: "En ligne", chatInput: "Message...", send: "Envoyer", chatWelcome: "Bonjour! Je suis l'IA Mobilis.", chatReply: "J'ai reçu votre question. Un agent va répondre.",
    notifTitle: "Notifications", all: "Tout", unread: "Non lu", noNotif: "Aucune notif", markAllRead: "Tout marquer",
    notifSysMsg: "Système", notifPromoMsg: "Promo"
  },
  ar: {
    home: "الرئيسية", recharge: "تعبئة", plans: "الباقات", support: "الدعم", profile: "حسابي",
    cancel: "إلغاء", confirm: "تأكيد", back: "رجوع", success: "نجاح",
    welcome: "مرحباً بك", loginDesc: "أدخل رقم هاتف موبيليس.", phoneLabel: "رقم الهاتف", phonePlaceholder: "05 XX XX XX XX",
    getOtp: "الحصول على الرمز", loginMethods: "طرق أخرى", biometricLogin: "جاري التحقق...", verifyFace: "ضع الوجه في الإطار", verifyFinger: "تحقق من البصمة",
    otpTitle: "رمز التحقق", otpSentTo: "تم إرسال الرمز إلى", verifying: "جاري التحقق...", resend: "إعادة إرسال", resendOtp: "إعادة إرسال الرمز",
    goodMorning: "صباح الخير", currentBalance: "الرصيد", prepaid: "مسبق الدفع", dzd: "دج",
    quickRecharge: "تعبئة سريعة", buyPlans: "شراء باقة", emergency: "طوارئ",
    myUsage: "استهلاكي", details: "تفاصيل", planData: "بيانات الباقة", remainingDays: "باقي 3 أيام",
    total: "المجموع", calls: "مكالمات", unlimited: "غير محدود", sms: "رسائل", international: "دولي",
    promotions: "عروض", hot: "حار", promoTitle: "تجربة 5G\nنصف السعر", promoAction: "اشترك",
    selfService: "خدمة ذاتية", changeService: "تغيير", pukCode: "PUK", pointsMall: "نقاط", billQuery: "فواتير",
    rechargeTitle: "تعبئة الرصيد", cardMethod: "بطاقة/دفع", scratchMethod: "بطاقة تعبئة", rechargeNumber: "الرقم",
    self: "رقمي", selectAmount: "المبلغ", customAmount: "مبلغ آخر", promoHint: "عبئ 1000 دج لـ +10% بيانات!",
    confirmPay: "دفع", password14: "رمز 14 رقم", scratchHint: "اكشط البطاقة", rechargeNow: "تعبئة",
    processing: "جاري...", successTitle: "نجاح!", successDesc: "تمت التعبئة.", phoneStr: "الرقم", transTime: "الوقت", transId: "رقم العملية", backHome: "الرئيسية",
    explorePlans: "الباقات", searchPlan: "بحث...", catAll: "الكل", catPixx: "PixX", catAwawal: "Awawal", catRoaming: "تجوال", catData: "بيانات", validity: "الصلاحية", popular: "شائع", viewDetails: "تفاصيل",
    buyPlan: "اطلب", roamingTitle: "سفر؟", roamingDesc: "ابق متصلاً في 150+ دولة.", viewRoaming: "عروض التجوال", orderSuccess: "تم الاشتراك!", orderSuccessDesc: "الباقة مفعلة.",
    howCanWeHelp: "كيف نساعدك؟", chatbot: "مساعد آلي", chatbotDesc: "دعم 24/7", callSupport: "اتصال", callSupportDesc: "666 أو 888",
    faq: "أسئلة شائعة", viewMoreFaq: "المزيد", findStore: "وكالات", findStoreDesc: "بحث عن وكالة",
    profileTitle: "حسابي", verified: "موثق", memberLevel: "المستوى", goldMember: "ذهبي", pointsBalance: "النقاط",
    accManagement: "إدارة", personalInfo: "معلومات", deviceSim: "الجهاز و SIM", esimActive: "eSIM مفعلة", billsInvoices: "فواتير",
    settings: "إعدادات", accSecurity: "أمان", notifSettings: "إشعارات", payMethods: "دفع", generalSettings: "عام",
    logout: "خروج", logoutConfirm: "هل تريد الخروج؟", version: "الإصدار 3.2.0",
    editProfile: "تعديل", save: "حفظ", name: "الاسم", email: "البريد", saveSuccess: "تم الحفظ",
    signContract: "توقيع العقد", signHere: "وقع هنا", uploadID: "تحميل الهوية", clearSign: "مسح", submit: "إرسال",
    signSuccessTitle: "تم التوقيع", signSuccessDesc: "تم إرسال الطلب.", photoUploadHint: "اضغط للتحميل", signHint: "حمل الهوية ووقع.",
    storeLocator: "الوكالات", searchStore: "بحث...", openStore: "مفتوح", closedStore: "مغلق", hours: "أوقات", distance: "المسافة",
    aiAssistant: "المساعد الآلي", online: "متصل", chatInput: "رسالة...", send: "إرسال", chatWelcome: "أهلاً! أنا مساعد موبيليس.", chatReply: "وصل سؤالك. سيرد الوكيل قريباً.",
    notifTitle: "إشعارات", all: "الكل", unread: "غير مقروء", noNotif: "لا إشعارات", markAllRead: "قراءة الكل",
    notifSysMsg: "نظام", notifPromoMsg: "عروض"
  }
};

interface I18nStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

export const useI18n = create<I18nStore>()(
  persist(
    (set) => ({
      language: 'zh',
      t: translations['zh'],
      setLanguage: (lang) => {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        set({ language: lang, t: translations[lang] });
      },
    }),
    {
      name: 'language-storage',
      onRehydrateStorage: () => (state) => {
        if (state) {
          document.documentElement.dir = state.language === 'ar' ? 'rtl' : 'ltr';
        }
      }
    }
  )
);