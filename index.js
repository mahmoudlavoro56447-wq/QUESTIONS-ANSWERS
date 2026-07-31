let tracker=0;
let container=document.querySelector(".container")
let QuestionsAndAnswers=[
  {
    "id": 1,
    "question": "ما هو اسم الشخصية الرئيسي الذي يتحول إلى تاجر مخدرات في مسلسل Breaking Bad؟",
    "firAnswer": "جيسي بينكمان",
    "secAnswer": "والتر وايت",
    "thiAnswer": "هانك شريدر",
    "fourAnswer": "سول غودمان",
    "rightAnswer": "والتر وايت"
  },
  {
    "id": 2,
    "question": "في مسلسل Game of Thrones، ما هو شعار عائلة ستارك (House Stark)؟",
    "firAnswer": "Fire and Blood",
    "secAnswer": "Hear Me Roar",
    "thiAnswer": "Winter is Coming",
    "fourAnswer": "Growing Strong",
    "rightAnswer": "Winter is Coming"
  },
  {
    "id": 3,
    "question": "ما اسم القهوة الشهيرة التي يتجمع فيها الأبطال في مسلسل Friends؟",
    "firAnswer": "Central Perk",
    "secAnswer": "Monk's Diner",
    "thiAnswer": "Cafe Nervosa",
    "fourAnswer": "Luke's Diner",
    "rightAnswer": "Central Perk"
  },
  {
    "id": 4,
    "question": "من هو قائد عصابة Peaky Blinders في المسلسل الشهير؟",
    "firAnswer": "آثر شيلبي",
    "secAnswer": "تومي شيلبي",
    "thiAnswer": "جون شيلبي",
    "fourAnswer": "مايكل غراي",
    "rightAnswer": "تومي شيلبي"
  },
  {
    "id": 5,
    "question": "ما اسم المدينة الإسبانية التي تُلقب بها القائدة في مسلسل La Casa de Papel؟",
    "firAnswer": "برشلونة",
    "secAnswer": "مدريد",
    "thiAnswer": "طوكيو",
    "fourAnswer": "إشبيلية",
    "rightAnswer": "طوكيو"
  },
  {
    "id": 6,
    "question": "من هو الممثل صاحب شخصية 'جعفر العمدة' في المسلسل العربي الشهير؟",
    "firAnswer": "أمير كرارة",
    "secAnswer": "محمد رمضان",
    "thiAnswer": "أحمد السقا",
    "fourAnswer": "عمرو يوسف",
    "rightAnswer": "محمد رمضان"
  },
  {
    "id": 7,
    "question": "في مسلسل Stranger Things، ما اسم العالم الموازي المظلم؟",
    "firAnswer": "The Nether",
    "secAnswer": "The Upside Down",
    "thiAnswer": "The Void",
    "fourAnswer": "The End",
    "rightAnswer": "The Upside Down"
  },
  {
    "id": 8,
    "question": "ما هي مهنة 'دكستر موران' في المسلسل الذي يحمل اسمه Dexter؟",
    "firAnswer": "مطبّق قانون عادي",
    "secAnswer": "محلل بقع دماء",
    "thiAnswer": "جراح مخ وأعصاب",
    "fourAnswer": "محامي دفاع",
    "rightAnswer": "محلل بقع دماء"
  },
  {
    "id": 9,
    "question": "من هو الممثل الذي لعب دور 'مايكل سكوفيلد' في مسلسل Prison Break؟",
    "firAnswer": "دومينيك بورسيل",
    "secAnswer": "وينتوورث ميلر",
    "thiAnswer": "روبرت نبر",
    "fourAnswer": "أوماري هاردويك",
    "rightAnswer": "وينتوورث ميلر"
  },
  {
    "id": 10,
    "question": "ما اسم المسلسل المصري الشهير الذي تدور أحداثه حول عائلة 'عبد الغفور البرعي'؟",
    "firAnswer": "المال والبنون",
    "secAnswer": "ليالي الحلمية",
    "thiAnswer": "لن أعيش في جلباب أبي",
    "fourAnswer": "زيزينيا",
    "rightAnswer": "لن أعيش في جلباب أبي"
  },
  {
    "id": 11,
    "question": "ما اسم القرية الخيالية التي تدور فيها أحداث مسلسل 'الكبير أوي'؟",
    "firAnswer": "المزاريطة",
    "secAnswer": "كفر الشيخ أوي",
    "thiAnswer": "ميت عقبة",
    "fourAnswer": "الترسة",
    "rightAnswer": "المزاريطة"
  },
  {
    "id": 12,
    "question": "في مسلسل Sherlock من إنتاج BBC، من يُجسد شخصية شرلوك هولمز؟",
    "firAnswer": "مارتن فريمان",
    "secAnswer": "بينيديكت كامبرباتش",
    "thiAnswer": "روبرت داوني جونيور",
    "fourAnswer": "هنري كافيل",
    "rightAnswer": "بينيديكت كامبرباتش"
  },
  {
    "id": 13,
    "question": "ما هو المسلسل الكوري الذي حقق أعلى نسبة مشاهدات على نتفليكس عام 2021؟",
    "firAnswer": "All of Us Are Dead",
    "secAnswer": "Squid Game",
    "thiAnswer": "Crash Landing on You",
    "fourAnswer": "Kingdom",
    "rightAnswer": "Squid Game"
  },
  {
    "id": 14,
    "question": "من هو العقل المدبر لعمليات السطو في مسلسل La Casa de Papel؟",
    "firAnswer": "برلين",
    "secAnswer": "البروفيسور",
    "thiAnswer": "باليرمو",
    "fourAnswer": "دنفر",
    "rightAnswer": "البروفيسور"
  },
  {
    "id": 15,
    "question": "ما اسم الشركة التي يعمل فيها أبطال النسخة الأمريكية من مسلسل The Office؟",
    "firAnswer": "Initech",
    "secAnswer": "Dunder Mifflin",
    "thiAnswer": "Pied Piper",
    "fourAnswer": "E Corp",
    "rightAnswer": "Dunder Mifflin"
  },
  {
    "id": 16,
    "question": "من لعب دور 'سليم الأنصاري' في مسلسل الكلابش؟",
    "firAnswer": "أحمد عز",
    "secAnswer": "أمير كرارة",
    "thiAnswer": "كريم عبد العزيز",
    "fourAnswer": "آسر ياسين",
    "rightAnswer": "أمير كرارة"
  },
  {
    "id": 17,
    "question": "ما اسم المملكة التي تدور فيها معظم أحداث مسلسل The Witcher؟",
    "firAnswer": "نيلفغارد",
    "secAnswer": "سينترا",
    "thiAnswer": "تميريا",
    "fourAnswer": "محتوى القارة (The Continent)",
    "rightAnswer": "محتوى القارة (The Continent)"
  },
  {
    "id": 18,
    "question": "ما اسم الشخصية الذكية جداً وذات السلوك الاجتماعي الغريب في The Big Bang Theory؟",
    "firAnswer": "ليونارد Hofstadter",
    "secAnswer": "شيلدون كوبر",
    "thiAnswer": "هاوارد Wolowitz",
    "fourAnswer": "راج Koothrappali",
    "rightAnswer": "شيلدون كوبر"
  },
  {
    "id": 19,
    "question": "في مسلسل Dark الألماني، ما هي الوسيلة الرئيسية للتنقل عبر الزمن؟",
    "firAnswer": "مركبة فضائية",
    "secAnswer": "كهف وكرة زمنية",
    "thiAnswer": "كتاب سحري",
    "fourAnswer": "تعويذة",
    "rightAnswer": "كهف وكرة زمنية"
  },
  {
    "id": 20,
    "question": "ما هو المسلسل التاريخي السوري الشهير الذي يُجسد حارة الضبع؟",
    "firAnswer": "أهل الراية",
    "secAnswer": "باب الحارة",
    "thiAnswer": "خاتون",
    "fourAnswer": "ليالي الصالحية",
    "rightAnswer": "باب الحارة"
  },
  {
    "id": 21,
    "question": "من هي بطلة مسلسل The Queen's Gambit الماهرة في الشطرنج؟",
    "firAnswer": "أنيا تايلور جوي",
    "secAnswer": "إيما واتسون",
    "thiAnswer": "فلورنس بيو",
    "fourAnswer": "ميلي بوبي براون",
    "rightAnswer": "أنيا تايلور جوي"
  },
  {
    "id": 22,
    "question": "ما هي المادة التي كان يصنعها والتر وايت بنقاوة عالية في Breaking Bad؟",
    "firAnswer": "المورفين",
    "secAnswer": "الكريستال ميث الأزرق",
    "thiAnswer": "الهيروين",
    "fourAnswer": "الكوكايين",
    "rightAnswer": "الكريستال ميث الأزرق"
  },
  {
    "id": 23,
    "question": "في مسلسل Friends، كم عدد المرات التي تزوج فيها 'روس جيلر'؟",
    "firAnswer": "مرتان",
    "secAnswer": "3 مرات",
    "thiAnswer": "4 مرات",
    "fourAnswer": "مرة واحدة",
    "rightAnswer": "3 مرات"
  },
  {
    "id": 24,
    "question": "ما اسم المسلسل الذي يتناول صراع العائلات السياسية والإعلامية في إمبراطورية 'وايلاند'؟",
    "firAnswer": "Succession",
    "secAnswer": "Billions",
    "thiAnswer": "House of Cards",
    "fourAnswer": "Mad Men",
    "rightAnswer": "Succession"
  },
  {
    "id": 25,
    "question": "من هو المحامي الشهير الذي حصل على مسلسله الخاص المشتق من Breaking Bad؟",
    "firAnswer": "هانك شريدر",
    "secAnswer": "سول غودمان",
    "thiAnswer": "غوستافو فرينغ",
    "fourAnswer": "مايك إيرمانتروت",
    "rightAnswer": "سول غودمان"
  },
  {
    "id": 26,
    "question": "ما اسم المسلسل الذي يتحدث عن ملكة بريطانيا إليزابيث الثانية؟",
    "firAnswer": "The Crown",
    "secAnswer": "Downton Abbey",
    "thiAnswer": "Bridgerton",
    "fourAnswer": "Reign",
    "rightAnswer": "The Crown"
  },
  {
    "id": 27,
    "question": "ما هو المسلسل العربي الشهير الذي لعب فيه يحيى الفخراني دور 'بشر عامر عبد الظاهر'؟",
    "firAnswer": "أوبرا عايدة",
    "secAnswer": "زيزينيا",
    "thiAnswer": "الليل وآخرة",
    "fourAnswer": "شيخ العرب همام",
    "rightAnswer": "زيزينيا"
  },
  {
    "id": 28,
    "question": "في مسلسل Viking، ما اسم القائد الفايكنج الشهير البطل الرئيسي في الفصول الأولى؟",
    "firAnswer": "بيورن",
    "secAnswer": "راغنار لوثبروك",
    "thiAnswer": "إيفار",
    "fourAnswer": "رولو",
    "rightAnswer": "راغنار لوثبروك"
  },
  {
    "id": 29,
    "question": "ما اسم المسلسل الخيالي المشتق من عالم Game of Thrones ويتحدث عن عائلة تارغاريان؟",
    "firAnswer": "House of the Dragon",
    "secAnswer": "The Rings of Power",
    "thiAnswer": "Wheel of Time",
    "fourAnswer": "The Last Kingdom",
    "rightAnswer": "House of the Dragon"
  },
  {
    "id": 30,
    "question": "من هي الممثلة التي قامت بدور 'رفيعة الهانم' في مسلسل هوانم جاردن سيتي؟",
    "firAnswer": "يسرا",
    "secAnswer": "صفية العمري",
    "thiAnswer": "ليلى علوي",
    "fourAnswer": "إلهام شاهين",
    "rightAnswer": "صفية العمري"
  },
  {
    "id": 31,
    "question": "في مسلسل The Mandalorian، ما اسم الكائن الصغير الشهير الملقب بـ 'Baby Yoda'؟",
    "firAnswer": "غروغو (Grogu)",
    "secAnswer": "دين جارين",
    "thiAnswer": "موف جيديون",
    "fourAnswer": "أهسوكا",
    "rightAnswer": "غروغو (Grogu)"
  },
  {
    "id": 32,
    "question": "ما اسم المسلسل الذي يدور حول كارثة نووية حقيقية وقعت عام 1986؟",
    "firAnswer": "Chernobyl",
    "secAnswer": "Dark",
    "thiAnswer": "The Rain",
    "fourAnswer": "Snowpiercer",
    "rightAnswer": "Chernobyl"
  },
  {
    "id": 33,
    "question": "من هو صاحب شخصية 'رفعت إسماعيل' في مسلسل 'ما وراء الطبيعة'؟",
    "firAnswer": "أحمد أمين",
    "secAnswer": "محمد فراج",
    "thiAnswer": "ماجد الكدواني",
    "fourAnswer": "شريف منير",
    "rightAnswer": "أحمد أمين"
  },
  {
    "id": 34,
    "question": "ما اسم المسلسل الكوميدي الأمريكي الذي يتناول حياة ضباط الشرطة في مركز نيو يورك؟",
    "firAnswer": "The Office",
    "secAnswer": "Brooklyn Nine-Nine",
    "thiAnswer": "Parks and Recreation",
    "fourAnswer": "Community",
    "rightAnswer": "Brooklyn Nine-Nine"
  },
  {
    "id": 35,
    "question": "في مسلسل Lost، ما هو رقم الطائرة التي تحطمت على الجزيرة؟",
    "firAnswer": "Oceanic 815",
    "secAnswer": "Boeing 747",
    "thiAnswer": "Pacific 42",
    "fourAnswer": "Air Oceanic 108",
    "rightAnswer": "Oceanic 815"
  },
  {
    "id": 36,
    "question": "ما اسم المسلسل الشهير الذي يتناول حياة تجار المخدرات في كولومبيا وبابلو إسكوبار؟",
    "firAnswer": "Ozark",
    "secAnswer": "Narcos",
    "thiAnswer": "Snowfall",
    "fourAnswer": "Gomorrah",
    "rightAnswer": "Narcos"
  },
  {
    "id": 37,
    "question": "من هو الممثل صاحب شخصية 'طه القماش' في مسلسل طايع؟",
    "firAnswer": "عمرو يوسف",
    "secAnswer": "عمرو عبد الجليل",
    "thiAnswer": "أحمد دباش",
    "fourAnswer": "أحمد داود",
    "rightAnswer": "عمرو عبد الجليل"
  },
  {
    "id": 38,
    "question": "ما هو المسلسل الذي يعرض قصصاً منفصلة وتكنولوجية مظلمة في كل حلقة (Anthology)؟",
    "firAnswer": "Black Mirror",
    "secAnswer": "Westworld",
    "thiAnswer": "Altered Carbon",
    "fourAnswer": "Love, Death & Robots",
    "rightAnswer": "Black Mirror"
  },
  {
    "id": 39,
    "question": "ما اسم المسلسل الذي قامت ببطولته منة شلبي وتناول قصة فتيات في حارة شعبية ببيروت؟",
    "firAnswer": "بطلوع الروح",
    "secAnswer": "حارة اليهود",
    "thiAnswer": "في كل أسبوع يوم جمعة",
    "fourAnswer": "تغيير جو",
    "rightAnswer": "تغيير جو"
  },
  {
    "id": 40,
    "question": "في مسلسل Supernatural، ما اسم الأخوين اللذين يصطادان الوحوش؟",
    "firAnswer": "سام ودين",
    "secAnswer": "دانيال وجاكوب",
    "thiAnswer": "ستيفن وإدوارد",
    "fourAnswer": "جايسون ومايكل",
    "rightAnswer": "سام ودين"
  },
  {
    "id": 41,
    "question": "ما اسم المسلسل المصري التاريخي الذي تنازل عن بطولة العالم السفلي وسوق الزلازل؟",
    "firAnswer": "الفتوة",
    "secAnswer": "جزيرة غمام",
    "thiAnswer": "العهد",
    "fourAnswer": "ألف ليلة وليلة",
    "rightAnswer": "جزيرة غمام"
  },
  {
    "id": 42,
    "question": "من لعبت دور 'جاسندة' أو الفتاة الخارقة 'Eleven' في مسلسل Stranger Things؟",
    "firAnswer": "سادي سينك",
    "secAnswer": "ميلي بوبي براون",
    "thiAnswer": "مايا هوك",
    "fourAnswer": "ناتاليا داير",
    "rightAnswer": "ميلي بوبي براون"
  },
  {
    "id": 43,
    "question": "ما المسلسل الذي يدور حول الروبوتات والمنتزه الترفيهي ذو الطابع الغربي القديم؟",
    "firAnswer": "Humans",
    "secAnswer": "Westworld",
    "thiAnswer": "Raised by Wolves",
    "fourAnswer": "Person of Interest",
    "rightAnswer": "Westworld"
  },
  {
    "id": 44,
    "question": "ما اسم مسلسل الرعب والغموض المصري المأخوذ عن رواية لأحمد خالد توفيق على نتفليكس؟",
    "firAnswer": "زودياك",
    "secAnswer": "ما وراء الطبيعة",
    "thiAnswer": "شديد الخطورة",
    "fourAnswer": "الشارع اللي ورانا",
    "rightAnswer": "ما وراء الطبيعة"
  },
  {
    "id": 45,
    "question": "في مسلسل How I Met Your Mother، ما هي السلعة/الرمز الشهير المنقول مع تيد وروبن؟",
    "firAnswer": "الشمسية الزرقاء",
    "secAnswer": "البيانو الأصفر",
    "thiAnswer": "الشيء الفرنسي الأزرق (Blue French Horn)",
    "fourAnswer": "القبعة الحمراء",
    "rightAnswer": "الشيء الفرنسي الأزرق (Blue French Horn)"
  },
  {
    "id": 46,
    "question": "ما اسم المسلسل الإسباني الذي تدور أحداثه في مدرسة نخبوية (Las Encinas)؟",
    "firAnswer": "Elite",
    "secAnswer": "Toy Boy",
    "thiAnswer": "Vis a Vis",
    "fourAnswer": "Control Z",
    "rightAnswer": "Elite"
  },
  {
    "id": 47,
    "question": "من هو الممثل صاحب دور 'سليم البدري' في مسلسل ليالي الحلمية؟",
    "firAnswer": "صلاح السعدني",
    "secAnswer": "يحيى الفخراني",
    "thiAnswer": "أحمد مظهر",
    "fourAnswer": "محمود ياسين",
    "rightAnswer": "يحيى الفخراني"
  },
  {
    "id": 48,
    "question": "ما هو المسلسل المبني على لعبة الفيديو الشهيرة Post-apocalyptic من إنتاج HBO وتألق فيه بيدرو باسكال؟",
    "firAnswer": "The Walking Dead",
    "secAnswer": "The Last of Us",
    "thiAnswer": "Fallout",
    "fourAnswer": "Halo",
    "rightAnswer": "The Last of Us"
  },
  {
    "id": 49,
    "question": "في مسلسل Suits، ما هي الميزة الخاصة التي يمتلكها 'مايك روس' ليعمل كمحامٍ بدون شهادة؟",
    "firAnswer": "السرعة الفائقة",
    "secAnswer": "الذاكرة الصورية (Eidetic Memory)",
    "thiAnswer": "قراءة الأفكار",
    "fourAnswer": "القرصنة الإلكترونية",
    "rightAnswer": "الذاكرة الصورية (Eidetic Memory)"
  },
  {
    "id": 50,
    "question": "ما اسم المسلسل الكوميدي المصري الذي قام ببطولته شيكو وهشام ماجد كضباط شرطة؟",
    "firAnswer": "اللعبة",
    "secAnswer": "الرجل العناب",
    "thiAnswer": "خلصانة بشياكة",
    "fourAnswer": "نيللي وشريهان",
    "rightAnswer": "الرجل العناب"
  }
]
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
