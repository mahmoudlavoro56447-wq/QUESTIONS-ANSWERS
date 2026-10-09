let tracker=0;
let container=document.querySelector(".container")
let QuestionsAndAnswers = [
  {
        "id": 1,
        "question": "من هو بطل مسلسل 'جعفر العمدة' الذي عرض في رمضان 2023؟",
        "firAnswer": "أمير كرارة",
        "secAnswer": "محمد رمضان",
        "thiAnswer": "أحمد السقا",
        "fourAnswer": "مصطفى شعبان",
        "rightAnswer": "محمد رمضان"
      },
      {
        "id": 2,
        "question": "ما اسم المسلسل الذي جسد فيه أمير كرارة شخصية الشهيد 'أحمد منسي' عام 2020؟",
        "firAnswer": "كلبش",
        "secAnswer": "الاختيار 1",
        "thiAnswer": "العائدون",
        "fourAnswer": "هجمة مرتدة",
        "rightAnswer": "الاختيار 1"
      },
      {
        "id": 3,
        "question": "ما اسم الفيلم الذي حطم الأرقام القياسية في شباك التذاكر عام 2022 من بطولة كريم عبد العزيز وأحمد عز؟",
        "firAnswer": "كيرة والجن",
        "secAnswer": "ولاد رزق 3",
        "thiAnswer": "الممر",
        "fourAnswer": "العارف",
        "rightAnswer": "كيرة والجن"
      },
      {
        "id": 4,
        "question": "من هي الفنانة التي قامت ببطولة مسلسل 'تحت وصاية' في رمضان 2023؟",
        "firAnswer": "منى زكي",
        "secAnswer": "نيللي كريم",
        "thiAnswer": "دينا الشربيني",
        "fourAnswer": "منة شلبي",
        "rightAnswer": "منى زكي"
      },
      {
        "id": 5,
        "question": "أي من المسلسلات التالية من بطولة كريم عبد العزيز وقدم شخصية 'حسن الصباح' في رمضان 2024؟",
        "firAnswer": "الحشاشين",
        "secAnswer": "الزيبق",
        "thiAnswer": "الاختيار 3",
        "fourAnswer": "بيت الرفاعي",
        "rightAnswer": "الحشاشين"
      },
      {
        "id": 6,
        "question": "ما هو الفيلم الحربي الشهير الذي أخرجه شريف عرفة وعرض عام 2019 عن حرب الاستنزاف؟",
        "firAnswer": "الخلية",
        "secAnswer": "الممر",
        "thiAnswer": "كازابلانكا",
        "fourAnswer": "حرب كرموز",
        "rightAnswer": "الممر"
      },
      {
        "id": 7,
        "question": "ما اسم شخصية أحمد مكي الشهيرة في سلسلة مسلسل 'الكبير أوي' التي أطلق جزءها الثامن عام 2024؟",
        "firAnswer": "الكبير",
        "secAnswer": "حزلقوم",
        "thiAnswer": "جوني",
        "fourAnswer": "جميع ما سبق",
        "rightAnswer": "جميع ما سبق"
      },
      {
        "id": 8,
        "question": "من قام ببطولة مسلسل 'جزيرة غمام' الذي حاز على إشادة واسعة في رمضان 2022؟",
        "firAnswer": "طارق لطفى وفتحي عبد الوهاب",
        "secAnswer": "ياسر جلال",
        "thiAnswer": "حمادة هلال",
        "fourAnswer": "عمرو سعد",
        "rightAnswer": "طارق لطفى وفتحي عبد الوهاب"
      },
      {
        "id": 9,
        "question": "ما هو الجزء الذي نزل لمشاهدة الجمهور عام 2019 من فيلم 'الفيل الأزرق'؟",
        "firAnswer": "الجزء الأول",
        "secAnswer": "الجزء الثاني",
        "thiAnswer": "الجزء الثالث",
        "fourAnswer": "الجزء الرابع",
        "rightAnswer": "الجزء الثاني"
      },
      {
        "id": 10,
        "question": "من الممثلة التي شاركت البطولة في فيلم 'مش أنا' أمام تامر حسني عام 2021؟",
        "firAnswer": "حلا شيحة",
        "secAnswer": "مي عز الدين",
        "thiAnswer": "هنا الزاهد",
        "fourAnswer": "ياسمين صبري",
        "rightAnswer": "حلا شيحة"
      },
      {
        "id": 11,
        "question": "ما اسم المسلسل الشهير من بطولة مي عمر الذي أثار جدلاً واسعاً في رمضان 2024؟",
        "firAnswer": "نعمة الأفوكاتو",
        "secAnswer": "لؤلؤ",
        "thiAnswer": "رانيا وسكينة",
        "fourAnswer": "إش إش",
        "rightAnswer": "نعمة الأفوكاتو"
      },
      {
        "id": 12,
        "question": "أي فيلم من بطولة أحمد عز حقق نجاحاً سينمائياً كبيراً في صيف 2024؟",
        "firAnswer": "ولاد رزق 3: القاضية",
        "secAnswer": "العارف",
        "thiAnswer": "الجريمة",
        "fourAnswer": "الممر",
        "rightAnswer": "ولاد رزق 3: القاضية"
      },
      {
        "id": 13,
        "question": "من هو المخرج الذي قام بإخراج مسلسل 'جعفر العمدة' و'البرنس'؟",
        "firAnswer": "محمد سامي",
        "secAnswer": "بيتر ميمي",
        "thiAnswer": "طرق العريان",
        "fourAnswer": "سامح عبد العزيز",
        "rightAnswer": "محمد سامي"
      },
      {
        "id": 14,
        "question": "ما هو المسلسل الكوميدي الذي شارك فيه شيكو وهشام ماجد وحقق نجاحاً كبيراً عبر عدة أجزاء؟",
        "firAnswer": "اللعبة",
        "secAnswer": "أشغال شاقة",
        "thiAnswer": "البيت بيتي",
        "fourAnswer": "الفريدو",
        "rightAnswer": "اللعبة"
      },
      {
        "id": 15,
        "question": "من هو بطل فيلم 'العارف' الذي تم عرضه في عام 2021؟",
        "firAnswer": "أحمد عز",
        "secAnswer": "أحمد السقا",
        "thiAnswer": "كريم عبد العزيز",
        "fourAnswer": "أمير كرارة",
        "rightAnswer": "أحمد عز"
      },
      {
        "id": 16,
        "question": "ما اسم مسلسل ياسمين عبد العزيز وأحمد العوضي الذي عرض في رمضان 2021؟",
        "firAnswer": "اللي مالوش كبير",
        "secAnswer": "ضرب نار",
        "thiAnswer": "لآخر نفس",
        "fourAnswer": "ونحب تاني ليه",
        "rightAnswer": "اللي مالوش كبير"
      },
      {
        "id": 17,
        "question": "من المخرج الذي أخرج مسلسل 'الحشاشين' وسلسلة 'الاختيار'؟",
        "firAnswer": "بيتر ميمي",
        "secAnswer": "محمد سامي",
        "thiAnswer": "تامر محسن",
        "fourAnswer": "حسين المنباوي",
        "rightAnswer": "بيتر ميمي"
      },
      {
        "id": 18,
        "question": "ما اسم المسلسل التشويقي الذي قامت ببطولته دينا الشربيني وحقق نجاحاً في 2019؟",
        "firAnswer": "زي الشمس",
        "secAnswer": "لعبة النسيان",
        "thiAnswer": "كامل العدد",
        "fourAnswer": "قصر النيل",
        "rightAnswer": "زي الشمس"
      },
      {
        "id": 19,
        "question": "من الفنان الذي أدى دور 'صابر المداح' في سلسلة مسلسل 'المداح' التي بدأت في 2021؟",
        "firAnswer": "حمادة هلال",
        "secAnswer": "أحمد زاهر",
        "thiAnswer": "ماجد المصري",
        "fourAnswer": "مصطفى شعبان",
        "rightAnswer": "حمادة هلال"
      },
      {
        "id": 20,
        "question": "ما هو الفيلم السينمائي الناجح من بطولة محمد إمام والذي تم عرضه في عام 2024؟",
        "firAnswer": "أبو نسب",
        "secAnswer": "عمهم",
        "thiAnswer": "لص بغداد",
        "fourAnswer": "جحيم في الهند",
        "rightAnswer": "أبو نسب"
      },
      {
        "id": 21,
        "question": "ما اسم المسلسل الاجتماعية الكوميدي من بطولة هشام ماجد وأسماء جلال في رمضان 2024؟",
        "firAnswer": "أشغال شاقة",
        "secAnswer": "أعلى نسبة مشاهدة",
        "thiAnswer": "بابا جه",
        "fourAnswer": "خالد نور وولد خالد نور",
        "rightAnswer": "أشغال شاقة"
      },
      {
        "id": 22,
        "question": "أي مسلسل قدم فيه الممثل أحمد أمين دور 'د. رفعت إسماعيل' على منصة نتفليكس عام 2020؟",
        "firAnswer": "ما وراء الطبيعة",
        "secAnswer": "الصفارة",
        "thiAnswer": "جزيرة غمام",
        "fourAnswer": "الوصية",
        "rightAnswer": "ما وراء الطبيعة"
      },
      {
        "id": 23,
        "question": "ما اسم الفيلم الرومانسي الكوميدي الذي جمع بين هنا الزاهد وأحمد حاتم عام 2019؟",
        "firAnswer": "قصة حب",
        "secAnswer": "بحبك",
        "thiAnswer": "عروستي",
        "fourAnswer": "فاصل من اللحظات اللذيذة",
        "rightAnswer": "قصة حب"
      },
      {
        "id": 24,
        "question": "ما اسم المسلسل الذي خاضت به الفنانة سلمى أبو ضيف أول بطولة مطلقة في 2024؟",
        "firAnswer": "أعلى نسبة مشاهدة",
        "secAnswer": "مسار إجباري",
        "thiAnswer": "صلة رحم",
        "fourAnswer": "لحظات غاضبة",
        "rightAnswer": "أعلى نسبة مشاهدة"
      },
      {
        "id": 25,
        "question": "من بطل فيلم 'كازابلانكا' الذي حقق إيرادات ضخمة عام 2019؟",
        "firAnswer": "أمير كرارة",
        "secAnswer": "أحمد السقا",
        "thiAnswer": "مصطفى خاطر",
        "fourAnswer": "إياد نصار",
        "rightAnswer": "أمير كرارة"
      },
      {
        "id": 26,
        "question": "ما اسم المسلسل الدرامي التاريخي من بطولة ياسر جلال والذي عرض في رمضان 2024؟",
        "firAnswer": "جودر (ألف ليلة وليلة)",
        "secAnswer": "الفتوة",
        "thiAnswer": "ظل راجل",
        "fourAnswer": "جودر 2",
        "rightAnswer": "جودر (ألف ليلة وليلة)"
      },
      {
        "id": 27,
        "question": "في أي مسلسل جسد النجم أحمد مكي شخصية درامية بعيداً عن الكوميديا عام 2021؟",
        "firAnswer": "الاختيار 2",
        "secAnswer": "الكبير أوي 6",
        "thiAnswer": "خلصانة بشياكة",
        "fourAnswer": "موضوع عائلي",
        "rightAnswer": "الاختيار 2"
      },
      {
        "id": 28,
        "question": "من الممثلة التي جسدت شخصية 'سعاد حسني' ببراعة أو قامت ببطولة مسلسل 'خلي بالك من زيزي' عام 2021؟",
        "firAnswer": "أمينة خليل",
        "secAnswer": "دينا الشربيني",
        "thiAnswer": "روبي",
        "fourAnswer": "سارة عبد الرحمن",
        "rightAnswer": "أمينة خليل"
      },
      {
        "id": 29,
        "question": "ما اسم الفيلم الذي جمع بين تامر حسني وهنا الزاهد في صيف 2022؟",
        "firAnswer": "بحبك",
        "secAnswer": "مش أنا",
        "thiAnswer": "تاج",
        "fourAnswer": "الفلوس",
        "rightAnswer": "بحبك"
      },
      {
        "id": 30,
        "question": "ما اسم الفنان الذي قدم شخصية 'عبد الجواد' أو بطولة مسلسل 'حق عرب' في رمضان 2024؟",
        "firAnswer": "أحمد العوضي",
        "secAnswer": "محمد رجب",
        "thiAnswer": "مصطفى شعبان",
        "fourAnswer": "آسر ياسين",
        "rightAnswer": "أحمد العوضي"
      },
      {
        "id": 31,
        "question": "من البطولة النسائية المشاركة في فيلم 'الخلية' عام 2017 أمام أحمد عز؟",
        "firAnswer": "أمينة خليل",
        "secAnswer": "غادة عادل",
        "thiAnswer": "درة",
        "fourAnswer": "عائشة بن أحمد",
        "rightAnswer": "أمينة خليل"
      },
      {
        "id": 32,
        "question": "ما اسم المسلسل الاجتماعي الشهير الذي أخرجه هاني خليفة وقامت ببطولته إلهام شاهين وأمينة خليل (2017)؟",
        "firAnswer": "حجر جهنم",
        "secAnswer": "لا تطفئ الشمس",
        "thiAnswer": "حلاوة الدنيا",
        "fourAnswer": "سابع جارة",
        "rightAnswer": "لا تطفئ الشمس"
      },
      {
        "id": 33,
        "question": "ما اسم المسلسل المعروض عام 2021 المنتمي لعالم الجريمة والإثارة من بطولة محمد ممدوح وأمينة خليل؟",
        "firAnswer": "قابيل",
        "secAnswer": "خلي بالك من زيزي",
        "thiAnswer": "رشيد",
        "fourAnswer": "منورة بأهلها",
        "rightAnswer": "قابيل"
      },
      {
        "id": 34,
        "question": "من بطل فيلم 'مشكوك فيه' أو فيلم 'السرب' الحربي الذي عُرِض عام 2024؟",
        "firAnswer": "أحمد السقا",
        "secAnswer": "آسر ياسين",
        "thiAnswer": "أحمد حلمي",
        "fourAnswer": "شريف منير",
        "rightAnswer": "أحمد السقا"
      },
      {
        "id": 35,
        "question": "ما المسلسل الناجح الذي شاركت فيه ريهام عبد الغفور وماجد الكدواني على المنصات الرقمية (2021-2023)؟",
        "firAnswer": "موضوع عائلي",
        "secAnswer": "أزمة منتصف العمر",
        "thiAnswer": "الغرفة 207",
        "fourAnswer": "منورة بأهلها",
        "rightAnswer": "موضوع عائلي"
      },
      {
        "id": 36,
        "question": "أي مسلسل رعب وإثارة مصري يعتمد على رواية د. أحمد خالد توفيق وعرض عام 2022 من بطولة محمد فراج؟",
        "firAnswer": "الغرفة 207",
        "secAnswer": "زودياك",
        "thiAnswer": "البيت بيتي",
        "fourAnswer": "شديد الخطورة",
        "rightAnswer": "الغرفة 207"
      },
      {
        "id": 37,
        "question": "ما اسم المسلسل الكوميدي الذي جمع هشام ماجد ومصطفى غريب وعرض في رمضان 2024؟",
        "firAnswer": "خالد نور وولد خالد نور",
        "secAnswer": "أشغال شاقة",
        "thiAnswer": "عتبات البهجة",
        "fourAnswer": "الكبير أوي 8",
        "rightAnswer": "أشغال شاقة"
      },
      {
        "id": 38,
        "question": "ما الفيلم الكوميدي الفانتازي الذي أخرجه أحمد الجندي ومن بطولة هشام ماجد هنا الزاهد عام 2024؟",
        "firAnswer": "فاصل من اللحظات اللذيذة",
        "secAnswer": "حملة فرعون",
        "thiAnswer": "إكس مراتي",
        "fourAnswer": "تسليم أهالي",
        "rightAnswer": "فاصل من اللحظات اللذيذة"
      },
      {
        "id": 39,
        "question": "من أدى دور البطولة في الفيلم الكوميدي 'إكس مراتي' صيف 2024 مع هشام ماجد ومحمد ممدوح؟",
        "firAnswer": "أمينة خليل",
        "secAnswer": "هنا الزاهد",
        "thiAnswer": "ياسمين صبري",
        "fourAnswer": "روبي",
        "rightAnswer": "أمينة خليل"
      },
      {
        "id": 40,
        "question": "ما اسم المسلسل الذي تناول تجربة 'الموت الرحيم' وموضوع التبرع بالأعضاء بطولة إياد نصار في 2024؟",
        "firAnswer": "صلة رحم",
        "secAnswer": "بدون سابق إنذار",
        "thiAnswer": "مسار إجباري",
        "fourAnswer": "محارب",
        "rightAnswer": "صلة رحم"
      },
      {
        "id": 41,
        "question": "من صاحب شخصية 'طه القماش' أو بطل مسلسل 'بيت الرفاعي' في 2024؟",
        "firAnswer": "أمير كرارة",
        "secAnswer": "أحمد رزق",
        "thiAnswer": "أحمد العوضي",
        "fourAnswer": "آسر ياسين",
        "rightAnswer": "أمير كرارة"
      },
      {
        "id": 42,
        "question": "ما اسم الفيلم الدرامي الكوميدي الناجح من بطولة دنيا سمير غانم وهشام ماجد عام 2022؟",
        "firAnswer": "تسليم أهالي",
        "secAnswer": "بلوموندو",
        "thiAnswer": "حامل اللقب",
        "fourAnswer": "فادي وزادي",
        "rightAnswer": "تسليم أهالي"
      },
      {
        "id": 43,
        "question": "من أدى دور البطولة في المسلسل التشويقي 'لعبة نيوتن' عام 2021؟",
        "firAnswer": "منى زكي",
        "secAnswer": "منة شلبي",
        "thiAnswer": "حنان مطاوع",
        "fourAnswer": "ريهام عبد الغفور",
        "rightAnswer": "منى زكي"
      },
      {
        "id": 44,
        "question": "ما الفيلم السينمائي الذي جمع أحمد حلمي وروبي عام 2022؟",
        "firAnswer": "واحد تاني",
        "secAnswer": "خيال مآتة",
        "thiAnswer": "لف ودوران",
        "fourAnswer": "العارف",
        "rightAnswer": "واحد تاني"
      },
      {
        "id": 45,
        "question": "من الممثلة التي شاركت بطبيعة درامية مميزة في مسلسل 'تغيير جو' عام 2023؟",
        "firAnswer": "منة شلبي",
        "secAnswer": "شيرين رضا",
        "thiAnswer": "أمينة خليل",
        "fourAnswer": "مي عز الدين",
        "rightAnswer": "منة شلبي"
      },
      {
        "id": 46,
        "question": "ما اسم المسلسل الذي تناول قضية الخيانة الزوجية ببطولة ريهام عبد الغفور وإياد نصار (2023)؟",
        "firAnswer": "أزمة منتصف العمر",
        "secAnswer": "الغرفة 207",
        "thiAnswer": "وش وضهر",
        "fourAnswer": "ظرف أسود",
        "rightAnswer": "أزمة منتصف العمر"
      },
      {
        "id": 47,
        "question": "ما اسم مسلسل الفنان يحيى الفخراني الذي أذيع في رمضان 2024؟",
        "firAnswer": "عتبات البهجة",
        "secAnswer": "نجيب زاهي زركش",
        "thiAnswer": "دهشة",
        "fourAnswer": "ونوس",
        "rightAnswer": "عتبات البهجة"
      },
      {
        "id": 48,
        "question": "ما الفيلم الذي أخرجه هادي الباجوري وقام ببطولته آسر ياسين وياسمين رئيس (2023)؟",
        "firAnswer": "أنا لحبيبي",
        "secAnswer": "قمر 14",
        "thiAnswer": "هيبتا",
        "fourAnswer": "جدران",
        "rightAnswer": "أنا لحبيبي"
      },
      {
        "id": 49,
        "question": "من أدى شخصية 'مسعود' في فيلم 'وقفة رجالة' الكوميدي عام 2021؟",
        "firAnswer": "بيومي فؤاد",
        "secAnswer": "ماجد الكدواني",
        "thiAnswer": "سيد رجب",
        "fourAnswer": "شريف دسوقي",
        "rightAnswer": "بيومي فؤاد"
      },
      {
        "id": 50,
        "question": "ما هو الفيلم الذي عرض عام 2023 وكان مستوحى من أحداث حقيقية عن البطولة والمقاومة المصرية في بورسعيد؟",
        "firAnswer": "كيرة والجن",
        "secAnswer": "الممر",
        "thiAnswer": "السرب",
        "fourAnswer": "هارلي",
        "rightAnswer": "كيرة والجن"
      }
    ];
let span=document.querySelector("span")
let totalQuestions=document.querySelector(".total-questions")
totalQuestions.innerHTML=`total questions is <span style="background-color: yellow;">{${QuestionsAndAnswers.length}}</span>`
function pushQuestions(){
    QuestionsAndAnswers.forEach((e)=>{
        let questionContainer=document.createElement("div")
        questionContainer.classList.add("question-container")
        let pQuestion=document.createElement("p")
        pQuestion.innerHTML=e.question
        let buttonsContainer=document.createElement("div")
        buttonsContainer.classList.add("buttons")
        let firButton=document.createElement("button")
        firButton.innerHTML=e.firAnswer
        let secButton=document.createElement("button")
        secButton.innerHTML=e.secAnswer
        let thiButton=document.createElement("button")
        thiButton.innerHTML=e.thiAnswer
        let fourButton=document.createElement("button")
        fourButton.innerHTML=e.fourAnswer
        questionContainer.id=e.id
        buttonsContainer.id=e.id
        questionContainer.append(pQuestion)
        questionContainer.append(buttonsContainer)
        buttonsContainer.append(firButton)
        buttonsContainer.append(secButton)
        buttonsContainer.append(thiButton)
        buttonsContainer.append(fourButton)
        container.appendChild(questionContainer)
        document.querySelectorAll(".question-container").forEach((e)=>{
            if(parseInt(e.id) ===tracker){
                e.style.display="block"
            }else{
                e.style.display="none"
            }
        })

    })
}
pushQuestions()
let buttonsContainer;
let buttons;
let rightChoice;
let parentOfButtonsContainer;
function startPlaying(tracker,counter){
    if(tracker<QuestionsAndAnswers.length){
        buttonsContainer=document.querySelectorAll(".buttons")[tracker]
        parentOfButtonsContainer=buttonsContainer.parentElement
        parentOfButtonsContainer.style.cssText="display:block !important"
        console.log(parentOfButtonsContainer)
        console.log(buttonsContainer)
        buttons=buttonsContainer.querySelectorAll("button")

        buttons.forEach((e)=>{
            e.onclick=()=>{
                e.disabled="disabled"
                buttons.forEach((e)=>{
                    e.disabled    
                    if(e.innerHTML==QuestionsAndAnswers[tracker].rightAnswer){
                           e.style.background="green"

                    }else{
                        e.style.background="red" 
                    }
                })
                if(e.innerHTML==QuestionsAndAnswers[tracker].rightAnswer){
                    counter++
                }
                setTimeout(()=>{
                    parentOfButtonsContainer=buttonsContainer.parentElement
                    parentOfButtonsContainer.style.cssText="display:none !important"
                    startPlaying(tracker+1,counter)
                },2000)
                span.innerHTML=`${counter}/${QuestionsAndAnswers[tracker].id}`


            }
        })

    }else{
    
        let pEnd=document.createElement("p")

        pEnd.innerHTML=`game is over your points is <span style="background:yellow; padding:2px">${counter}</span> from <span style="background:yellow; padding:2px">${QuestionsAndAnswers.length}</span>`
        container.appendChild(pEnd)
    }
    console.log(counter)
}
startPlaying(0,0)
