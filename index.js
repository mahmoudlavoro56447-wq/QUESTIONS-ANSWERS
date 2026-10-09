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
    "question": "ما اسم المسلسل التاريخي الضخم الذي جسّد فيه كريم عبد العزيز شخصية 'حسن الصباح'؟",
    "firAnswer": "الحشاشين",
    "secAnswer": "الزيبق",
    "thiAnswer": "الاختيار 3",
    "fourAnswer": "سمرقند",
    "rightAnswer": "الحشاشين"
  },
  {
    "id": 3,
    "question": "ما اسم الفيلم العربي الأكثر تحقيقاً للإيرادات في تاريخ السينما المصرية؟",
    "firAnswer": "ولاد رزق 3: القاضية",
    "secAnswer": "كيرة والجن",
    "thiAnswer": "الفيل الأزرق 2",
    "fourAnswer": "بيت الروبي",
    "rightAnswer": "ولاد رزق 3: القاضية"
  },
  {
    "id": 4,
    "question": "من هو بطل ثلاثية أفلام 'The Dark Knight' لشخصية باتمان؟",
    "firAnswer": "كريستيان بيل",
    "secAnswer": "بن أفليك",
    "thiAnswer": "روبيرت باتينسون",
    "fourAnswer": "مايكل كيتون",
    "rightAnswer": "كريستيان بيل"
  },
  {
    "id": 5,
    "question": "ما اسم المسلسل الكوميدي الناجح المكون من عدة أجزاء لبطولة شيكو وهشام ماجد؟",
    "firAnswer": "اللعبة",
    "secAnswer": "أشغال شاقة",
    "thiAnswer": "البيت بيتي",
    "fourAnswer": "موضوع عائلي",
    "rightAnswer": "اللعبة"
  },
  {
    "id": 6,
    "question": "أي فيلم فاز بجائزة الأوسكار لأفضل فيلم عام 2024 (عن قصة مخترع القنبلة الذرية)؟",
    "firAnswer": "باربي",
    "secAnswer": "أوبنهايمر (Oppenheimer)",
    "thiAnswer": "أشياء مسكينة (Poor Things)",
    "fourAnswer": "Killers of the Flower Moon",
    "rightAnswer": "أوبنهايمر (Oppenheimer)"
  },
  {
    "id": 7,
    "question": "من هي الممثلة التي قامت ببطولة مسلسل 'تحت وصاية' في رمضان 2023؟",
    "firAnswer": "منى زكي",
    "secAnswer": "نيللي كريم",
    "thiAnswer": "دينا الشربيني",
    "fourAnswer": "منة شلبي",
    "rightAnswer": "منى زكي"
  },
  {
    "id": 8,
    "question": "ما اسم المسلسل التشويقي الذي تدور أحداثه حول عالم التسعينات ببطولة ماجد الكدواني وريهام عبد الغفور؟",
    "firAnswer": "موضوع عائلي",
    "secAnswer": "أزمة منتصف العمر",
    "thiAnswer": "الغرفة 207",
    "fourAnswer": "وش وضهر",
    "rightAnswer": "موضوع عائلي"
  },
  {
    "id": 9,
    "question": "من قام ببطولة مسلسل 'الاختيار 1' وجسد شخصية الشهيد أحمد منسي؟",
    "firAnswer": "أمير كرارة",
    "secAnswer": "أحمد العوضي",
    "thiAnswer": "آسر ياسين",
    "fourAnswer": "كريم عبد العزيز",
    "rightAnswer": "أمير كرارة"
  },
  {
    "id": 10,
    "question": "ما اسم الفيلم الحربي الذي أخرجه شريف عرفة عن بطولة القوات المسلحة في حرب الاستنزاف؟",
    "firAnswer": "الممر",
    "secAnswer": "السرب",
    "thiAnswer": "كازابلانكا",
    "fourAnswer": "حرب كرموز",
    "rightAnswer": "الممر"
  },
  {
    "id": 11,
    "question": "من بطل سلسلة أفلام 'John Wick' الشهيرة؟",
    "firAnswer": "كيانو ريفز",
    "secAnswer": "توم كروز",
    "thiAnswer": "براد بيت",
    "fourAnswer": "جيسون ستاثام",
    "rightAnswer": "كيانو ريفز"
  },
  {
    "id": 12,
    "question": "ما اسم القرية الخيالية التي تدور فيها أحداث مسلسل 'الكبير أوي'؟",
    "firAnswer": "المزارعيط",
    "secAnswer": "كفر دلهاب",
    "thiAnswer": "تيتة زوزو",
    "fourAnswer": "ساقية مكي",
    "rightAnswer": "المزارعيط"
  },
  {
    "id": 13,
    "question": "أي من المسلسلات العالمية التالية تدور أحداثه حول 'لعبة الموت' الكورية وحقق مشاهدات قياسية؟",
    "firAnswer": "Squid Game",
    "secAnswer": "Money Heist",
    "thiAnswer": "Stranger Things",
    "fourAnswer": "Dark",
    "rightAnswer": "Squid Game"
  },
  {
    "id": 14,
    "question": "من المخرج الذي قام بإخراج مسلسل 'جعفر العمدة' و'البرنس' و'نعمة الأفوكاتو'؟",
    "firAnswer": "محمد سامي",
    "secAnswer": "بيتر ميمي",
    "thiAnswer": "طارق العريان",
    "fourAnswer": "أحمد الجندي",
    "rightAnswer": "محمد سامي"
  },
  {
    "id": 15,
    "question": "ما اسم المسلسل الذي جسد فيه أحمد أمين شخصية 'د. رفعت إسماعيل' مستوحى من روايات أحمد خالد توفيق؟",
    "firAnswer": "ما وراء الطبيعة",
    "secAnswer": "الصفارة",
    "thiAnswer": "جزيرة غمام",
    "fourAnswer": "الوصية",
    "rightAnswer": "ما وراء الطبيعة"
  },
  {
    "id": 16,
    "question": "ما اسم الفيلم العالمي الشهير الذي يحكي قصة سفينة ضخمة غرقت عام 1912 من بطولة ليوناردو دي كابريو؟",
    "firAnswer": "Avatar",
    "secAnswer": "Titanic",
    "thiAnswer": "Inception",
    "fourAnswer": "The Matrix",
    "rightAnswer": "Titanic"
  },
  {
    "id": 17,
    "question": "من الممثل صاحب شخصية 'صابر المداح' في سلسلة مسلسل 'المداح'؟",
    "firAnswer": "حمادة هلال",
    "secAnswer": "أحمد زاهر",
    "thiAnswer": "مصطفى شعبان",
    "fourAnswer": "عمرو سعد",
    "rightAnswer": "حمادة هلال"
  },
  {
    "id": 18,
    "question": "من الممثلة التي شاركت أحمد حلمي بطولة فيلم 'واحد تاني'؟",
    "firAnswer": "روبي",
    "secAnswer": "دنيا سمير غانم",
    "thiAnswer": "منى زكي",
    "fourAnswer": "غادة عادل",
    "rightAnswer": "روبي"
  },
  {
    "id": 19,
    "question": "ما هو الفيلم العالمي الوحيد الذي حصد 11 جائزة أوسكار ومتعلق بعالم 'الخواتم' والفانتازيا؟",
    "firAnswer": "The Lord of the Rings: The Return of the King",
    "secAnswer": "Harry Potter",
    "thiAnswer": "The Hobbit",
    "fourAnswer": "Gladiator",
    "rightAnswer": "The Lord of the Rings: The Return of the King"
  },
  {
    "id": 20,
    "question": "من بطل مسلسل 'حق عرب' الذي عرض في رمضان 2024؟",
    "firAnswer": "أحمد العوضي",
    "secAnswer": "محمد رجب",
    "thiAnswer": "مصطفى شعبان",
    "fourAnswer": "أمير كرارة",
    "rightAnswer": "أحمد العوضي"
  },
  {
    "id": 21,
    "question": "ما هو الاسم الحقيقي لشخصية 'البروفيسور' في مسلسل La Casa de Papel؟",
    "firAnswer": "سيرجيو ماركينا",
    "secAnswer": "برلين",
    "thiAnswer": "أندريس دي فونويوسا",
    "fourAnswer": "أنطونيو بالما",
    "rightAnswer": "سيرجيو ماركينا"
  },
  {
    "id": 22,
    "question": "ما الفيلم الكوميدي الذي جمع بين هشام ماجد وهنا الزاهد عام 2024؟",
    "firAnswer": "فاصل من اللحظات اللذيذة",
    "secAnswer": "إكس مراتي",
    "thiAnswer": "حامل اللقب",
    "fourAnswer": "تسليم أهالي",
    "rightAnswer": "فاصل من اللحظات اللذيذة"
  },
  {
    "id": 23,
    "question": "من قدم شخصية 'الجوكر' ونال عنها جائزة الأوسكار كأفضل ممثل عام 2020؟",
    "firAnswer": "واكين فينيكس (Joaquin Phoenix)",
    "secAnswer": "هيث ليدجر",
    "thiAnswer": "جيريد ليتو",
    "fourAnswer": "جاك نيكلسون",
    "rightAnswer": "واكين فينيكس (Joaquin Phoenix)"
  },
  {
    "id": 24,
    "question": "ما اسم المسلسل الاجتماعي الكوميدي لبطولة هشام ماجد وأسماء جلال في رمضان 2024؟",
    "firAnswer": "أشغال شاقة",
    "secAnswer": "أعلى نسبة مشاهدة",
    "thiAnswer": "بابا جه",
    "fourAnswer": "خالد نور وولد خالد نور",
    "rightAnswer": "أشغال شاقة"
  },
  {
    "id": 25,
    "question": "من الممثل الإنجليزي الشهير صاحب شخصية 'توماس شيلبي' في مسلسل Peaky Blinders؟",
    "firAnswer": "كيليان ميرفي",
    "secAnswer": "توم هاردي",
    "thiAnswer": "بول أندرسون",
    "fourAnswer": "هنري كافيل",
    "rightAnswer": "كيليان ميرفي"
  },
  {
    "id": 26,
    "question": "في أي فيلم ظهرت شخصية 'دكتور يحيى راشد' الطبيب النفسي؟",
    "firAnswer": "الفيل الأزرق",
    "secAnswer": "تراب الماس",
    "thiAnswer": "الأصليين",
    "fourAnswer": "كيرة والجن",
    "rightAnswer": "الفيل الأزرق"
  },
  {
    "id": 27,
    "question": "ما اسم فيلم الخيال العلمي الشهير المقتبس عن أحلام داخل الأحلام من إخراج الكريستوفر نولان؟",
    "firAnswer": "Inception",
    "secAnswer": "Interstellar",
    "thiAnswer": "Tenet",
    "fourAnswer": "Memento",
    "rightAnswer": "Inception"
  },
  {
    "id": 28,
    "question": "من هي بطلة مسلسل 'نعمة الأفوكاتو' الذي عُرض في رمضان 2024؟",
    "firAnswer": "مي عمر",
    "secAnswer": "ياسمين صبري",
    "thiAnswer": "غادة عبد الرازق",
    "fourAnswer": "روجينا",
    "rightAnswer": "مي عمر"
  },
  {
    "id": 29,
    "question": "من الممثل الأمريكي الذي قام بدور 'آيرون مان' (Iron Man) في عالم مارفل؟",
    "firAnswer": "روبيرت داوني جونيور",
    "secAnswer": "كريس إيفانز",
    "thiAnswer": "كريس همسوورث",
    "fourAnswer": "مارك روفالو",
    "rightAnswer": "روبيرت داوني جونيور"
  },
  {
    "id": 30,
    "question": "ما اسم المسلسل المصري الذي تناول قضية ابتزاز الفتيات والتيك توك من بطولة سلمى أبو ضيف (2024)؟",
    "firAnswer": "أعلى نسبة مشاهدة",
    "secAnswer": "مسار إجباري",
    "thiAnswer": "صلة رحم",
    "fourAnswer": "محارب",
    "rightAnswer": "أعلى نسبة مشاهدة"
  },
  {
    "id": 31,
    "question": "أي فيلم أنيميشن فاز بأوسكار أفضل فيلم أفلام أنيميشن لعام 2020 وتدور أحداثه حول روح عازف جاز؟",
    "firAnswer": "Soul",
    "secAnswer": "Coco",
    "thiAnswer": "Inside Out",
    "fourAnswer": "Encanto",
    "rightAnswer": "Soul"
  },
  {
    "id": 32,
    "question": "ما اسم الفيلم الحربي المصري الذي يتناول ضربة الجوية للجيش المصري ضد تنظيم داعش في ليبيا؟",
    "firAnswer": "السرب",
    "secAnswer": "الممر",
    "thiAnswer": "الخلية",
    "fourAnswer": "كازابلانكا",
    "rightAnswer": "السرب"
  },
  {
    "id": 33,
    "question": "من قام بدور البطولة في مسلسل 'لعبة نيوتن' الذي حقق نجاحاً كبيراً في 2021؟",
    "firAnswer": "منى زكي",
    "secAnswer": "منة شلبي",
    "thiAnswer": "أمينة خليل",
    "fourAnswer": "ياسمين عبد العزيز",
    "rightAnswer": "منى زكي"
  },
  {
    "id": 34,
    "question": "من المخرج صاحب سلسلة أفلام 'Avatar' الشهيرة؟",
    "firAnswer": "جيمس كاميرون",
    "secAnswer": "ستيفن سبيلبرغ",
    "thiAnswer": "كريستوفر نولان",
    "fourAnswer": "كوينتن تارانتينو",
    "rightAnswer": "جيمس كاميرون"
  },
  {
    "id": 35,
    "question": "ما اسم مسلسل الفانتازيا والدراما التاريخية الشهير المأخوذ عن سلسلة روايات 'أغنية الجليد والنار'؟",
    "firAnswer": "Game of Thrones",
    "secAnswer": "The Witcher",
    "thiAnswer": "House of the Dragon",
    "fourAnswer": "Vikings",
    "rightAnswer": "Game of Thrones"
  },
  {
    "id": 36,
    "question": "من هو الممثل الذي شارك محمد رمضان بطولة مسلسل 'نسر الصعيد' ونال شهرة واسعة؟",
    "firAnswer": "أحمد داود",
    "secAnswer": "سيد رجب",
    "thiAnswer": "شريف سلامة",
    "fourAnswer": "محمد عز",
    "rightAnswer": "سيد رجب"
  },
  {
    "id": 37,
    "question": "ما هو فيلم المغامرات والديناصورات الشهير الذي صدر أول جزء منه عام 1993؟",
    "firAnswer": "Jurassic Park",
    "secAnswer": "Jumanji",
    "thiAnswer": "King Kong",
    "fourAnswer": "Godzilla",
    "rightAnswer": "Jurassic Park"
  },
  {
    "id": 38,
    "question": "ما اسم المسلسل الذي جمع ياسمين عبد العزيز وأحمد العوضي في رمضان 2021؟",
    "firAnswer": "اللي مالوش كبير",
    "secAnswer": "ضرب نار",
    "thiAnswer": "لآخر نفس",
    "fourAnswer": "ونحب تاني ليه",
    "rightAnswer": "اللي مالوش كبير"
  },
  {
    "id": 39,
    "question": "من هو الممثل الذي جسد شخصية 'والتر وايت' في المسلسل الأسطوري Breaking Bad؟",
    "firAnswer": "براين كرانستون",
    "secAnswer": "آرون بول",
    "thiAnswer": "بوب أودينكيرك",
    "fourAnswer": "دين نوريس",
    "rightAnswer": "براين كرانستون"
  },
  {
    "id": 40,
    "question": "ما اسم الفيلم المصري الكوميدي من بطولة محمد إمام والذي عرض عام 2024؟",
    "firAnswer": "أبو نسب",
    "secAnswer": "عمهم",
    "thiAnswer": "لص بغداد",
    "fourAnswer": "جحيم في الهند",
    "rightAnswer": "أبو نسب"
  },
  {
    "id": 41,
    "question": "من الممثلة التي قامت بدورة 'زينات' في مسلسل 'سوق الكانتو' عام 2023؟",
    "firAnswer": "مي عز الدين",
    "secAnswer": "أمينة خليل",
    "thiAnswer": "مي عمر",
    "fourAnswer": "ياسمين صبري",
    "rightAnswer": "مي عز الدين"
  },
  {
    "id": 42,
    "question": "ما اسم المسلسل المعروض في 2024 المقتبس عن حكايات 'ألف ليلة وليلة' ومن بطولة ياسر جلال؟",
    "firAnswer": "جودر",
    "secAnswer": "الفتوة",
    "thiAnswer": "ألف ليلة وليلة",
    "fourAnswer": "شهريار",
    "rightAnswer": "جودر"
  },
  {
    "id": 43,
    "question": "ما الفيلم الكوميدي الذي شارك فيه الممثل بيومي فؤاد وماجد الكدواني وسيد رجب عام 2021؟",
    "firAnswer": "وقفة رجالة",
    "secAnswer": "فضل ونعمة",
    "thiAnswer": "نادي الرجال السري",
    "fourAnswer": "بعض لا يذهب للمأذون مرتين",
    "rightAnswer": "وقفة رجالة"
  },
  {
    "id": 44,
    "question": "من هو صاحب شخصية 'توم كروز' الشهيرة في سلسلة أفلام المهمات المستحيلة؟",
    "firAnswer": "إيثان هانت (Ethan Hunt)",
    "secAnswer": "جيمس بوند",
    "thiAnswer": "جيسون بورن",
    "fourAnswer": "جاك ريتشر",
    "rightAnswer": "إيثان هانت (Ethan Hunt)"
  },
  {
    "id": 45,
    "question": "ما اسم المسلسل الناجح الذي خاض به الممثلان الشابان عصام عمر وأحمد داش بطولة رمضان 2024؟",
    "firAnswer": "مسار إجباري",
    "secAnswer": "بالطو",
    "thiAnswer": "سودانشي",
    "fourAnswer": "خالد نور وولد خالد نور",
    "rightAnswer": "مسار إجباري"
  },
  {
    "id": 46,
    "question": "من هو الممثل الذي قدم شخصية 'تامر حسني' في فيلم 'مش أنا' عام 2021؟",
    "firAnswer": "تامر حسني نفسه",
    "secAnswer": "أحمد حلمي",
    "thiAnswer": "كريم محمود عبد العزيز",
    "fourAnswer": "أحمد داود",
    "rightAnswer": "تامر حسني نفسه"
  },
  {
    "id": 47,
    "question": "ما اسم المسلسل الطبي الكوميدي الناجح من بطولة عصام عمر على منصة Watch It (2023)؟",
    "firAnswer": "بالطو",
    "secAnswer": "موضوع عائلي",
    "thiAnswer": "زينهم",
    "fourAnswer": "على باب العمارة",
    "rightAnswer": "بالطو"
  },
  {
    "id": 48,
    "question": "من هو بطل مسلسل 'زينهم' المعروض عام 2023 والذي تدور أحداثه في الطب الشرعي؟",
    "firAnswer": "أحمد داود",
    "secAnswer": "كريم محمود عبد العزيز",
    "thiAnswer": "علي قاسم",
    "fourAnswer": "أحمد حاتم",
    "rightAnswer": "أحمد داود"
  },
  {
    "id": 49,
    "question": "ما اسم المسلسل الكوميدي الرومانسية من بطولة دنيا سمير غانم وعرض في رمضان 2023؟",
    "firAnswer": "جت سليمة",
    "secAnswer": "عالم ثاني",
    "thiAnswer": "بدل الحدوتة 3",
    "fourAnswer": "في بيتنا روبوت",
    "rightAnswer": "جت سليمة"
  },
  {
    "id": 50,
    "question": "أي من الأسطورتين جسد شخصية كليوباترا في السينما العالمية القديمة عام 1963؟",
    "firAnswer": "إليزابيث تايلور (Elizabeth Taylor)",
    "secAnswer": "أودري هيبورن",
    "thiAnswer": "مارلين مونرو",
    "fourAnswer": "صوفيا لورين",
    "rightAnswer": "إليزابيث تايلور (Elizabeth Taylor)"
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
