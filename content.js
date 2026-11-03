// اطلاعات واقعی شرکت را در این فایل وارد کنید. موارد خالی در سایت به‌عنوان اطلاعات تأییدشده نمایش داده نمی‌شوند.
window.SITE = {
  services: [
    {slug:'architecture',title:'طراحی معماری',en:'ARCHITECTURE',description:'از شکل‌گیری ایده تا تعریف فضا؛ نقطه آغاز مسیر طراحی پروژه.'},
    {slug:'structure',title:'مهندسی سازه',en:'STRUCTURAL ENGINEERING',description:'نگاهی مهندسی به ساختار بنا، در پیوند با معماری و الزامات پروژه.'},
    {slug:'optimization',title:'بهینه‌سازی سازه',en:'STRUCTURAL OPTIMIZATION',description:'بررسی راهکارهای سازه‌ای با توجه به نیازها و محدودیت‌های هر پروژه.'},
    {slug:'construction',title:'ساخت و اجرا',en:'CONSTRUCTION',description:'مرحله تبدیل طرح به بنا؛ از جزئیات طراحی تا فضای ساخته‌شده.'},
    {slug:'urbanism',title:'شهرسازی',en:'URBANISM',description:'نگاهی فراتر از یک بنا؛ به ارتباط فضا، شهر و زندگی.'}
  ],
  projects: [{id:'abra',title:'مجتمع مسکونی ابرا',location:'دولت‌آباد تهران',status:'current',services:[],animation:{url:'https://www.aparat.com/v/auwg1v5',title:'ابرا در حرکت',subtitle:'نگاهی به معماری و فضاها'},description:'از پروژه‌های جاری شرکت ابر بنا سازه. با طراحی نما، بام، لابی، پارکینگ، پلان طبقات و فضاهای داخلی ابرا آشنا شوید.',image:'assets/abra/page-09.webp',imageCaption:'طراحی نمای مجتمع مسکونی ابرا',album:window.ABRA_ALBUM}],
  // پروژه‌های انجام‌شده شرکت به projects با status برابر completed اضافه شوند.
  // سوابق مدیران فقط در managers ثبت شوند و با پروژه‌های شرکت ادغام نشوند.
  managers: [],
  articles: [],
  contact: {phone:'',email:'',address:''}
};

// متن‌های پیشنهادی برای تکمیل ظاهر صفحات؛ معرفی اشخاص یا اطلاعات تماس واقعی نیستند.
window.SITE.managerDrafts = [
 {name:'نام مدیرعامل',role:'مدیرعامل',bio:'راهبری مسیر شرکت، هماهنگی بخش‌های تخصصی و توسعه همکاری‌ها؛ با تمرکز بر پیوند نگاه مهندسی، کیفیت فضا و نیازهای کارفرما.',experience:'زمینه‌های قابل تکمیل: مدیریت شرکت، توسعه کسب‌وکار و راهبری پروژه‌ها.'},
 {name:'نام مدیر فنی',role:'مدیر فنی و مهندسی',bio:'هماهنگی طراحی سازه، بررسی راهکارهای مهندسی و پیگیری ارتباط میان طراحی و اجرا؛ با توجه به شرایط و نیازهای هر پروژه.',experience:'زمینه‌های قابل تکمیل: طراحی سازه، بررسی فنی و بهینه‌سازی سازه.'},
 {name:'نام مدیر طراحی',role:'مدیر طراحی معماری و شهرسازی',bio:'هدایت فرایند شکل‌گیری ایده و سازمان‌دهی فضا؛ با توجه به نیازهای استفاده‌کنندگان، هویت معماری و ارتباط بنا با محیط پیرامون.',experience:'زمینه‌های قابل تکمیل: طراحی معماری، طراحی داخلی و شهرسازی.'},
 {name:'نام مدیر اجرا',role:'مدیر اجرایی پروژه‌ها',bio:'هماهنگی فعالیت‌های اجرایی و ارتباط میان دفتر فنی و کارگاه؛ با تمرکز بر نظم اجرا، پیگیری جزئیات و هماهنگی عوامل پروژه.',experience:'زمینه‌های قابل تکمیل: مدیریت اجرا، هماهنگی کارگاه و برنامه‌ریزی پروژه.'}
];
window.SITE.contact.draft = {
 phoneDisplay:'۰۲۱ ـ XXXX XXXX',
 emailDisplay:'info@abarbana.example',
 addressDisplay:'نشانی دفتر شرکت — برای تکمیل در نسخه نهایی',
 hoursDisplay:'شنبه تا چهارشنبه، ساعت ۹ تا ۱۷ — پیشنهادی',
 intro:'برای بررسی یک ایده، معرفی پروژه یا گفت‌وگو درباره همکاری، موضوع و اطلاعات اولیه خود را با ما در میان بگذارید. این گفت‌وگو می‌تواند نقطه آغاز مسیر مشترک طراحی و ساخت باشد.'
};


// Unit design specifications transcribed from the supplied introductions (pages 54, 45, 34).
window.SITE.projects[0].unitTypes = [
 {area:52,bedrooms:1,balcony:true,storage:true,parking:true},
 {area:79,bedrooms:2,balcony:true,storage:true,parking:true},
 {area:112,bedrooms:3,balcony:true,storage:true,parking:true}
];
window.SITE.projects[0].spaces = [
 {id:'roof',title:'بام؛ جایی برای دورهمی',label:'بام',image:'assets/abra/selected-roof.webp',first:17,pages:[16,17,18,19,20],description:'در طراحی بام، فضای نشیمن، دورهمی و مسیر حرکت در کنار فضای سبز دیده شده است.'},
 {id:'lobby',title:'لابی؛ آغاز ورود به ابرا',label:'لابی',image:'assets/abra/selected-lobby.webp',first:21,pages:[21,22,23,24,25],description:'پذیرش، فضای انتظار و مسیرهای ارتباطی، بخش‌های اصلی طراحی ورودی ابرا را شکل می‌دهند.'},
 {id:'parking',title:'پارکینگ؛ توقف و دسترسی',label:'پارکینگ',image:'assets/abra/selected-parking.webp',first:27,pages:[26,27,28,29,30,31,32],description:'چیدمان محل توقف، مسیر گردش خودرو و ارتباط با دسترسی‌های ساختمان را ببینید.'},
 {id:'interior',title:'فضای داخلی؛ جزئیات زندگی',label:'فضای داخلی',image:'assets/abra/selected-interior.webp',first:35,pages:Array.from({length:27},(_,i)=>i+33),description:'نگاهی به نشیمن، غذاخوری، آشپزخانه و اتاق‌های واحدها در سه تیپ مسکونی.'}
];
