let tracker=0;
let container=document.querySelector(".container")
let QuestionsAndAnswers=[
  {
    "id": 1,
    "question": "من هو المنتخب الفائز بكأس العالم 2022؟",
    "firAnswer": "فرنسا",
    "secAnswer": "الأرجنتين",
    "thiAnswer": "الكرواتيا",
    "fourAnswer": "البرازيل",
    "rightAnswer": "الأرجنتين"
  },
  {
    "id": 2,
    "question": "من هو النادي الأكثر فوزاً بلقب دوري أبطال أوروبا؟",
    "firAnswer": "إيه سي ميلان",
    "secAnswer": "بايرن ميونخ",
    "thiAnswer": "ريال مدريد",
    "fourAnswer": "ليفربول",
    "rightAnswer": "ريال مدريد"
  },
  {
    "id": 3,
    "question": "من هو الهداف التاريخي لبطولة كأس العالم؟",
    "firAnswer": "بيليه",
    "secAnswer": "ميروسلاف كلوزه",
    "thiAnswer": "رونالدو الظاهرة",
    "fourAnswer": "كريستيانو رونالدو",
    "rightAnswer": "ميروسلاف كلوزه"
  },
  {
    "id": 4,
    "question": "ما هو المنتخب الأكثر فوزاً بكأس العالم على مر التاريخ؟",
    "firAnswer": "ألمانيا",
    "secAnswer": "إيطاليا",
    "thiAnswer": "الأرجنتين",
    "fourAnswer": "البرازيل",
    "rightAnswer": "البرازيل"
  },
  {
    "id": 5,
    "question": "من هو اللاعب الأكثر تفويزاً بالكرة الذهبية (Ballon d'Or)؟",
    "firAnswer": "ليونيل ميسي",
    "secAnswer": "كريستيانو رونالدو",
    "thiAnswer": "يوهان كرويف",
    "fourAnswer": "مارادونا",
    "rightAnswer": "ليونيل ميسي"
  },
  {
    "id": 6,
    "question": "في أي دولة أقيمت أول نسخة من كأس العالم عام 1930؟",
    "firAnswer": "البرازيل",
    "secAnswer": "إيطاليا",
    "thiAnswer": "الأوروغواي",
    "fourAnswer": "الأرجنتين",
    "rightAnswer": "الأوروغواي"
  },
  {
    "id": 7,
    "question": "من هو النادي الإنجليزي الفائز بدوري أبطال أوروبا عام 2019؟",
    "firAnswer": "مانشستر سيتي",
    "secAnswer": "تشيلسي",
    "thiAnswer": "توتنهام",
    "fourAnswer": "ليفربول",
    "rightAnswer": "ليفربول"
  },
  {
    "id": 8,
    "question": "من هو الهداف التاريخي لدوري أبطال أوروبا؟",
    "firAnswer": "ليونيل ميسي",
    "secAnswer": "كريستيانو رونالدو",
    "thiAnswer": "روبرت ليفاندوفسكي",
    "fourAnswer": "كريم بنزيما",
    "rightAnswer": "كريستيانو رونالدو"
  },
  {
    "id": 9,
    "question": "ما هو الملعب الشهير الخاص بنادي برشلونة؟",
    "firAnswer": "سانتياغو برنابيو",
    "secAnswer": "كامب نو",
    "thiAnswer": "واندا متروبوليتانو",
    "fourAnswer": "المستايا",
    "rightAnswer": "كامب نو"
  },
  {
    "id": 10,
    "question": "من المدرب الذي فاز بكأس العالم مع منتخب إسبانيا عام 2010؟",
    "firAnswer": "بيب جوارديولا",
    "secAnswer": "فيسنتي ديل بوسكي",
    "thiAnswer": "لويس أراجونيس",
    "fourAnswer": "لويس إنريكي",
    "rightAnswer": "فيسنتي ديل بوسكي"
  },
  {
    "id": 11,
    "question": "من هو النادي الإيطالي الملقب بـ 'السيدة العجوز'؟",
    "firAnswer": "إنتر ميلان",
    "secAnswer": "إيه سي ميلان",
    "thiAnswer": "يوفنتوس",
    "fourAnswer": "روما",
    "rightAnswer": "يوفنتوس"
  },
  {
    "id": 12,
    "question": "أي منتخب أفريقي وصل لنصف نهائي كأس العالم 2022؟",
    "firAnswer": "غانا",
    "secAnswer": "السنغال",
    "thiAnswer": "الكاميرون",
    "fourAnswer": "المغرب",
    "rightAnswer": "المغرب"
  },
  {
    "id": 13,
    "question": "من هو الحارس الفائز بجائزة أفضل حارس في كأس العالم 2022؟",
    "firAnswer": "مانويل نوير",
    "secAnswer": "إميليانو مارتينيز",
    "thiAnswer": "تيبو كورتوا",
    "fourAnswer": "ياسين بونو",
    "rightAnswer": "إميليانو مارتينيز"
  },
  {
    "id": 14,
    "question": "ما هو النادي الأكثر فوزاً بالدوري الإنجليزي الممتاز (Premier League)؟",
    "firAnswer": "ليفربول",
    "secAnswer": "أرسنال",
    "thiAnswer": "مانشستر يونايتد",
    "fourAnswer": "تشيلسي",
    "rightAnswer": "مانشستر يونايتد"
  },
  {
    "id": 15,
    "question": "في أي عام فازت ألمانيا بكأس العالم بعد تغلبها على الأرجنتين في النهائي؟",
    "firAnswer": "2006",
    "secAnswer": "2010",
    "thiAnswer": "2014",
    "fourAnswer": "2018",
    "rightAnswer": "2014"
  },
  {
    "id": 16,
    "question": "من صاحب الهدف الشهير الملقب بـ 'يد الله' في كأس العالم 1986؟",
    "firAnswer": "دييغو مارادونا",
    "secAnswer": "بيليه",
    "thiAnswer": "ماريو كيمبس",
    "fourAnswer": "رود خوليت",
    "rightAnswer": "دييغو مارادونا"
  },
  {
    "id": 17,
    "question": "من هو اللاعب الملقب بـ 'الدون'؟",
    "firAnswer": "ليونيل ميسي",
    "secAnswer": "كريستيانو رونالدو",
    "thiAnswer": "كريم بنزيما",
    "fourAnswer": "زين الدين زيدان",
    "rightAnswer": "كريستيانو رونالدو"
  },
  {
    "id": 18,
    "question": "أي نادٍ يحمل لقب الدوري الألماني (البوندسليغا) الأكثر في التاريخ؟",
    "firAnswer": "بوروسيا دورتموند",
    "secAnswer": "باير ليفركوزن",
    "thiAnswer": "بايرن ميونخ",
    "fourAnswer": "لايبزيغ",
    "rightAnswer": "بايرن ميونخ"
  },
  {
    "id": 19,
    "question": "من هو اللاعب الذي سجل 5 أهداف في 9 دقائق مع بايرن ميونخ عام 2015؟",
    "firAnswer": "توماس مولر",
    "secAnswer": "أريين روبن",
    "thiAnswer": "روبرت ليفاندوفسكي",
    "fourAnswer": "فرانك ريبيري",
    "rightAnswer": "روبرت ليفاندوفسكي"
  },
  {
    "id": 20,
    "question": "من الفائز بكأس أمم أوروبا (يورو 2020) التي أقيمت في 2021؟",
    "firAnswer": "إنجلترا",
    "secAnswer": "إيطاليا",
    "thiAnswer": "إسبانيا",
    "fourAnswer": "فرنسا",
    "rightAnswer": "إيطاليا"
  },
  {
    "id": 21,
    "question": "ما اسم الملعب الخاص بنادي ريال مدريد؟",
    "firAnswer": "أنفيلد",
    "secAnswer": "أليانز أرينا",
    "thiAnswer": "سانتياغو برنابيو",
    "fourAnswer": "أولد ترافورد",
    "rightAnswer": "سانتياغو برنابيو"
  },
  {
    "id": 22,
    "question": "كم عدد اللاعبين في كل فريق داخل الملعب في بداية المباراة؟",
    "firAnswer": "10",
    "secAnswer": "11",
    "thiAnswer": "12",
    "fourAnswer": "9",
    "rightAnswer": "11"
  },
  {
    "id": 23,
    "question": "من هو اللاعب الذي فاز بكأس العالم 3 مرات كلاعب؟",
    "firAnswer": "بيليه",
    "secAnswer": "رونالدو الظاهرة",
    "thiAnswer": "زيكو",
    "fourAnswer": "كافو",
    "rightAnswer": "بيليه"
  },
  {
    "id": 24,
    "question": "أي منتخب يُلقب بـ 'الطواحين'؟",
    "firAnswer": "بلجيكا",
    "secAnswer": "هولندا",
    "thiAnswer": "الدنمارك",
    "fourAnswer": "السويد",
    "rightAnswer": "هولندا"
  },
  {
    "id": 25,
    "question": "من النادي الفائز بدوري أبطال أوروبا عام 2012 على حساب بايرن ميونخ؟",
    "firAnswer": "تشيلسي",
    "secAnswer": "برشلونة",
    "thiAnswer": "مانشستر يونايتد",
    "fourAnswer": "ريال مدريد",
    "rightAnswer": "تشيلسي"
  },
  {
    "id": 26,
    "question": "من هو الهداف التاريخي لمنتخب مصر واللاعب الذي فاز بدوري أبطال أوروبا مع ليفربول؟",
    "firAnswer": "محمد صلاح",
    "secAnswer": "أحمد حسام ميدو",
    "thiAnswer": "محمد أبوتريكة",
    "fourAnswer": "عمرو زكي",
    "rightAnswer": "محمد صلاح"
  },
  {
    "id": 27,
    "question": "ما هو النادي الملقب بـ 'الريدز'؟",
    "firAnswer": "مانشستر يونايتد",
    "secAnswer": "أرسنال",
    "thiAnswer": "ليفربول",
    "fourAnswer": "أستون فيلا",
    "rightAnswer": "ليفربول"
  },
  {
    "id": 28,
    "question": "ما هي المدمة الزمنية للشوط الواحد في مباراة كرة القدم الرسمية؟",
    "firAnswer": "40 دقيقة",
    "secAnswer": "45 دقيقة",
    "thiAnswer": "50 دقيقة",
    "fourAnswer": "60 دقيقة",
    "rightAnswer": "45 دقيقة"
  },
  {
    "id": 29,
    "question": "من هو المدرب الملقب بـ 'The Special One'؟",
    "firAnswer": "بيب جوارديولا",
    "secAnswer": "يورغن كلوب",
    "thiAnswer": "جوزيه مورينيو",
    "fourAnswer": "كارلو أنشيلوتي",
    "rightAnswer": "جوزيه مورينيو"
  },
  {
    "id": 30,
    "question": "من هو المنتخب الفائز بكأس أمم أفريقيا 2019 في الجزائر؟",
    "firAnswer": "الجزائر",
    "secAnswer": "السنغال",
    "thiAnswer": "مصر",
    "fourAnswer": "نيجيريا",
    "rightAnswer": "الجزائر"
  },
  {
    "id": 31,
    "question": "أي بلد استضافت كأس العالم 2010؟",
    "firAnswer": "البرازيل",
    "secAnswer": "جنوب أفريقيا",
    "thiAnswer": "ألمانيا",
    "fourAnswer": "روسيا",
    "rightAnswer": "جنوب أفريقيا"
  },
  {
    "id": 32,
    "question": "من هو اللاعب صاحب نطحة الرأس الشهيرة في نهائي كأس العالم 2006؟",
    "firAnswer": "زين الدين زيدان",
    "secAnswer": "تيري هنري",
    "thiAnswer": "ماركو ماتيراتزي",
    "fourAnswer": "باتريك فييرا",
    "rightAnswer": "زين الدين زيدان"
  },
  {
    "id": 33,
    "question": "ما اسم النادي الإنجليزي المعروف بـ 'المدفعجية' (The Gunners)؟",
    "firAnswer": "تشيلسي",
    "secAnswer": "أرسنال",
    "thiAnswer": "توتنهام",
    "fourAnswer": "مانشستر سيتي",
    "rightAnswer": "أرسنال"
  },
  {
    "id": 34,
    "question": "من الفائز بالكرة الذهبية لعام 2022؟",
    "firAnswer": "ليونيل ميسي",
    "secAnswer": "كريم بنزيما",
    "thiAnswer": "ساديو ماني",
    "fourAnswer": "كيليان إمبابي",
    "rightAnswer": "كريم بنزيما"
  },
  {
    "id": 35,
    "question": "من هو الفريق الذهبي الذي حقق دوري الـ 'لا هزيمة' في الدوري الإنجليزي 2003-2004؟",
    "firAnswer": "مانشستر يونايتد",
    "secAnswer": "أرسنال",
    "thiAnswer": "تشيلسي",
    "fourAnswer": "ليفربول",
    "rightAnswer": "أرسنال"
  },
  {
    "id": 36,
    "question": "ما هي جنسية اللاعب إيرلينغ هالاند؟",
    "firAnswer": "السويد",
    "secAnswer": "النرويج",
    "thiAnswer": "الدنمارك",
    "fourAnswer": "ألمانيا",
    "rightAnswer": "النرويج"
  },
  {
    "id": 37,
    "question": "من النادي الإسباني الملقب بـ 'الروخي بلانكوس'؟",
    "firAnswer": "إشبيلية",
    "secAnswer": "فالنسيا",
    "thiAnswer": "أتلتيكو مدريد",
    "fourAnswer": "فيكتوريا سيلتا فيغو",
    "rightAnswer": "أتلتيكو مدريد"
  },
  {
    "id": 38,
    "question": "ما هو النادي الأكثر تتويجاً ببطولة الدوري الإسباني (La Liga)؟",
    "firAnswer": "برشلونة",
    "secAnswer": "أتلتيكو مدريد",
    "thiAnswer": "ريال مدريد",
    "fourAnswer": "أتلتيك بلباو",
    "rightAnswer": "ريال مدريد"
  },
  {
    "id": 39,
    "question": "من هو اللاعب الأكثر مشاركة في المباريات الدولية في تاريخ كرة القدم؟",
    "firAnswer": "بدر المطوع",
    "secAnswer": "سيرجيو راموس",
    "thiAnswer": "كريستيانو رونالدو",
    "fourAnswer": "أحمد حسن",
    "rightAnswer": "كريستيانو رونالدو"
  },
  {
    "id": 40,
    "question": "ما هو النادي الذي فاز بـ الثلاثية التاريخية (الدوري، الكأس، دوري الأبطال) في إنجلترا عام 1999؟",
    "firAnswer": "مانشستر سيتي",
    "secAnswer": "أرسنال",
    "thiAnswer": "مانشستر يونايتد",
    "fourAnswer": "تشيلسي",
    "rightAnswer": "مانشستر يونايتد"
  },
  {
    "id": 41,
    "question": "أي منتخب يحمل لقب 'السامبا'؟",
    "firAnswer": "الأرجنتين",
    "secAnswer": "الكولومبيا",
    "thiAnswer": "البرازيل",
    "fourAnswer": "تشيلي",
    "rightAnswer": "البرازيل"
  },
  {
    "id": 42,
    "question": "من هو اللاعب الفرنسي صاحب الهاتريك في نهائي كأس العالم 2022؟",
    "firAnswer": "أنطوان غريزمان",
    "secAnswer": "أوليفييه جيرو",
    "thiAnswer": "كيليان إمبابي",
    "fourAnswer": "كريم بنزيما",
    "rightAnswer": "كيليان إمبابي"
  },
  {
    "id": 43,
    "question": "في أي سنة تأسست بطولة دوري أبطال أوروبا بالشكل والمسمى الحديث؟",
    "firAnswer": "1970",
    "secAnswer": "1985",
    "thiAnswer": "1992",
    "fourAnswer": "2000",
    "rightAnswer": "1992"
  },
  {
    "id": 44,
    "question": "ما هو الفريق الذي حقق مفاجأة وفاز بالدوري الإنجليزي الممتاز عام 2016؟",
    "firAnswer": "ليستر سيتي",
    "secAnswer": "وست هام",
    "thiAnswer": "إيفرتون",
    "fourAnswer": "ساوثهامبتون",
    "rightAnswer": "ليستر سيتي"
  },
  {
    "id": 45,
    "question": "من هو الحارس الشهير الملقب بـ 'العنكبوت الأسود'؟",
    "firAnswer": "بوفون",
    "secAnswer": "إيكر كاسياس",
    "thiAnswer": "ليف ياشين",
    "fourAnswer": "أوليفر كان",
    "rightAnswer": "ليف ياشين"
  },
  {
    "id": 46,
    "question": "من صاحب الكرة الذهبية لعام 2007، وكان آخر من فاز بها قبل حقبة ميسي ورونالدو؟",
    "firAnswer": "ريكاردو كاكا",
    "secAnswer": "رونالدينيو",
    "thiAnswer": "تيري هنري",
    "fourAnswer": "أندري شيفتشينكو",
    "rightAnswer": "ريكاردو كاكا"
  },
  {
    "id": 47,
    "question": "ما هو اسم ملعب نادي مانشستر يونايتد؟",
    "firAnswer": "الاتحاد",
    "secAnswer": "أولد ترافورد",
    "thiAnswer": "ستامفورد بريدج",
    "fourAnswer": "الشارع الإماراتي",
    "rightAnswer": "أولد ترافورد"
  },
  {
    "id": 48,
    "question": "كم عدد بطولات كأس العالم التي فازت بها إيطاليا؟",
    "firAnswer": "2",
    "secAnswer": "3",
    "thiAnswer": "4",
    "fourAnswer": "5",
    "rightAnswer": "4"
  },
  {
    "id": 49,
    "question": "من النادي الأكثر فوزاً بلقب الدوري الأوروبي (Europa League)؟",
    "firAnswer": "إنتر ميلان",
    "secAnswer": "إشبيلية",
    "thiAnswer": "بنفيكا",
    "fourAnswer": "أتلتيكو مدريد",
    "rightAnswer": "إشبيلية"
  },
  {
    "id": 50,
    "question": "من المدرب الذي فاز بدوري أبطال أوروبا مع 3 أندية مختلفة؟",
    "firAnswer": "بيب جوارديولا",
    "secAnswer": "جوزيه مورينيو",
    "thiAnswer": "كارلو أنشيلوتي",
    "fourAnswer": "يورغن كلوب",
    "rightAnswer": "كارلو أنشيلوتي"
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
