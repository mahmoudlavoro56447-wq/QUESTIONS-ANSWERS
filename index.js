let tracker=0;
let container=document.querySelector(".container")
let QuestionsAndAnswers = [
  {
    "id": 1,
    "question": "ما هو المنتخب الأكثر فوزاً ببطولة كأس العالم عبر التاريخ؟",
    "firAnswer": "ألمانيا",
    "secAnswer": "إيطاليا",
    "thiAnswer": "البرازيل",
    "fourAnswer": "الأرجنتين",
    "rightAnswer": "البرازيل"
  },
  {
    "id": 2,
    "question": "من هو الهداف التاريخي لبطولة دوري أبطال أوروبا؟",
    "firAnswer": "ليونيل ميسي",
    "secAnswer": "كريستيانو رونالدو",
    "thiAnswer": "روبرت ليفاندوفسكي",
    "fourAnswer": "كريم بنزيما",
    "rightAnswer": "كريستيانو رونالدو"
  },
  {
    "id": 3,
    "question": "أي نادٍ يلقب بـ 'السيدة العجوز' (The Old Lady)؟",
    "firAnswer": "إيه سي ميلان",
    "secAnswer": "يوفنتوس",
    "thiAnswer": "إنتر ميلان",
    "fourAnswer": "روما",
    "rightAnswer": "يوفنتوس"
  },
  {
    "id": 4,
    "question": "في أي عام أقيمت أول نسخة من بطولة كأس العالم لكرة القدم؟",
    "firAnswer": "1930",
    "secAnswer": "1934",
    "thiAnswer": "1950",
    "fourAnswer": "1928",
    "rightAnswer": "1930"
  },
  {
    "id": 5,
    "question": "من هو اللاعب الأكثر تتويجاً بكرة القدم الذهبية (Ballon d'Or)؟",
    "firAnswer": "كريستيانو رونالدو",
    "secAnswer": "يوهان كرويف",
    "thiAnswer": "ليونيل ميسي",
    "fourAnswer": "ميشيل بلاتيني",
    "rightAnswer": "ليونيل ميسي"
  },
  {
    "id": 6,
    "question": "ما اسم الملعب الشهير الخاص بنادي برشلونه الإسباني؟",
    "firAnswer": "سانتياغو برنابيو",
    "secAnswer": "سبوتيفاي كامب نو",
    "thiAnswer": "واندا متروبوليتانو",
    "fourAnswer": "المستايا",
    "rightAnswer": "سبوتيفاي كامب نو"
  },
  {
    "id": 7,
    "question": "من هو المنتخب الفائز ببطولة كأس أمم أفريقيا عام 2019 التي أقيمت في مصر؟",
    "firAnswer": "مصر",
    "secAnswer": "السنغال",
    "thiAnswer": "الجزائر",
    "fourAnswer": "الكاميرون",
    "rightAnswer": "الجزائر"
  },
  {
    "id": 8,
    "question": "من هو الهداف التاريخي لمنتخب مصر لكرة القدم؟",
    "firAnswer": "محمد صلاح",
    "secAnswer": "حسام حسن",
    "thiAnswer": "محمد أبوتريكة",
    "fourAnswer": "حسن الشاذلي",
    "rightAnswer": "حسام حسن"
  },
  {
    "id": 9,
    "question": "ما هو الفريق الفائز بلقب دوري أبطال أوروبا في موسم 2019-2020؟",
    "firAnswer": "بايرن ميونخ",
    "secAnswer": "باريس سان جيرمان",
    "thiAnswer": "ريال مدريد",
    "fourAnswer": "مانشستر سيتي",
    "rightAnswer": "بايرن ميونخ"
  },
  {
    "id": 10,
    "question": "من هو اللاعب الملقب بـ 'الظاهرة' في تاريخ كرة القدم؟",
    "firAnswer": "رونالدينيو",
    "secAnswer": "رونالدو نازاريو",
    "thiAnswer": "كريستيانو رونالدو",
    "fourAnswer": "برناردو سيلفا",
    "rightAnswer": "رونالدو نازاريو"
  },
  {
    "id": 11,
    "question": "كم عدد ألقاب نادي ريال مدريد في دوري أبطال أوروبا حتى عام 2024؟",
    "firAnswer": "12 لقباً",
    "secAnswer": "14 لقباً",
    "thiAnswer": "15 لقباً",
    "fourAnswer": "13 لقباً",
    "rightAnswer": "15 لقباً"
  },
  {
    "id": 12,
    "question": "من هو المدرب الذي حقق الثلاثية التاريخية مع مانشستر سيتي عام 2023؟",
    "firAnswer": "يورغن كلوب",
    "secAnswer": "بيب غوارديولا",
    "thiAnswer": "كارلو أنشيلوتي",
    "fourAnswer": "توماس توخيل",
    "rightAnswer": "بيب غوارديولا"
  },
  {
    "id": 13,
    "question": "ما هي البلد التي استضافت كأس العالم لكرة القدم عام 2010؟",
    "firAnswer": "البرازيل",
    "secAnswer": "جنوب أفريقيا",
    "thiAnswer": "ألمانيا",
    "fourAnswer": "روسيا",
    "rightAnswer": "جنوب أفريقيا"
  },
  {
    "id": 14,
    "question": "من هو اللاعب الذي سجل هدفه الشهير بـ 'يد الله' ضد إنجلترا عام 1986؟",
    "firAnswer": "دييغو مارادونا",
    "secAnswer": "بيليه",
    "thiAnswer": "ماريو كيمبس",
    "fourAnswer": "غابرييل باتيستوتا",
    "rightAnswer": "دييغو مارادونا"
  },
  {
    "id": 15,
    "question": "أي نادٍ إنجليزي يلقب بـ 'المدفعجية' (The Gunners)؟",
    "firAnswer": "تشيلسي",
    "secAnswer": "أرسنال",
    "thiAnswer": "توتنهام",
    "fourAnswer": "مانشستر يونايتد",
    "rightAnswer": "أرسنال"
  },
  {
    "id": 16,
    "question": "من هو النادي الأكثر تتويجاً ببطولة دوري أبطال أفريقيا؟",
    "firAnswer": "الزمالك",
    "secAnswer": "الأهلي المصري",
    "thiAnswer": "الترجي التونسي",
    "fourAnswer": "موازمبي",
    "rightAnswer": "الأهلي المصري"
  },
  {
    "id": 17,
    "question": "من هو اللاعب الذي ينشط في مركز حراسة المرمى وفاز بكرة ذهبية واحدة عام 1963؟",
    "firAnswer": "جانلويجي بوفون",
    "secAnswer": "ليف ياشين",
    "thiAnswer": "إيكر كاسياس",
    "fourAnswer": "مانويل نوير",
    "rightAnswer": "ليف ياشين"
  },
  {
    "id": 18,
    "question": "ما هي الدولة التي فازت بأول بطولة لكأس أمم أوروبا (يورو) عام 1960؟",
    "firAnswer": "الاتحاد السوفيتي",
    "secAnswer": "فرنسا",
    "thiAnswer": "ألمانيا الغربية",
    "fourAnswer": "إسبانيا",
    "rightAnswer": "الاتحاد السوفيتي"
  },
  {
    "id": 19,
    "question": "من هو الهداف التاريخي لبطولات كأس العالم لكرة القدم؟",
    "firAnswer": "رونالدو نازاريو",
    "secAnswer": "ميروسلاف كلوزه",
    "thiAnswer": "بيليه",
    "fourAnswer": "جيرد مولر",
    "rightAnswer": "ميروسلاف كلوزه"
  },
  {
    "id": 20,
    "question": "ما هو الفريق الذي حقق لقب الدوري الإنجليزي الممتاز بدون أي خسارة في موسم 2003-2004؟",
    "firAnswer": "مانشستر يونايتد",
    "secAnswer": "تشيلسي",
    "thiAnswer": "أرسنال",
    "fourAnswer": "ليفربول",
    "rightAnswer": "أرسنال"
  },
  {
    "id": 21,
    "question": "من هو اللاعب الإفريقي الوحيد الذي فاز بجائزة الكرة الذهبية (Ballon d'Or)؟",
    "firAnswer": "صامويل إيتو",
    "secAnswer": "ديدييه دروغبا",
    "thiAnswer": "جورج ويا",
    "fourAnswer": "محمد صلاح",
    "rightAnswer": "جورج ويا"
  },
  {
    "id": 22,
    "question": "أي منتخب حقق بطولة كأس العالم 2018 في فرنسا؟",
    "firAnswer": "كرواتيا",
    "secAnswer": "فرنسا",
    "thiAnswer": "بلجيكا",
    "fourAnswer": "إنجلترا",
    "rightAnswer": "فرنسا"
  },
  {
    "id": 23,
    "question": "من هو صاحب أسرع هدف في تاريخ دوري أبطال أوروبا؟",
    "firAnswer": "روي ماكاي",
    "secAnswer": "زلاتان إبراهيموفيتش",
    "thiAnswer": "فيليبو إنزاغي",
    "fourAnswer": "كليان إمبابي",
    "rightAnswer": "روي ماكاي"
  },
  {
    "id": 24,
    "question": "ما هو النادي الذي يُعرف بلقب 'الريدز' (The Reds) في الدوري الإنجليزي؟",
    "firAnswer": "مانشستر يونايتد",
    "secAnswer": "ليفربول",
    "thiAnswer": "نوتنغهام فورست",
    "fourAnswer": "أستون فيلا",
    "rightAnswer": "ليفربول"
  },
  {
    "id": 25,
    "question": "في أي دولة يقع ملعب 'الماراكانا' الشهير؟",
    "firAnswer": "الأرجنتين",
    "secAnswer": "الأوروغواي",
    "thiAnswer": "البرازيل",
    "fourAnswer": "كولومبيا",
    "rightAnswer": "البرازيل"
  },
  {
    "id": 26,
    "question": "من هو المدافع الذي فاز بجائزة الكرة الذهبية عام 2006؟",
    "firAnswer": "باولو مالديني",
    "secAnswer": "فابيو كانافارو",
    "thiAnswer": "سيرجيو راموس",
    "fourAnswer": "جون تيري",
    "rightAnswer": "فابيو كانافارو"
  },
  {
    "id": 27,
    "question": "ما اسم المباراة الكلاسيكية التي تجمع بين الأهلي والزمالك في مصر؟",
    "firAnswer": "كلاسيكو العرب",
    "secAnswer": "ديربي القاهرة",
    "thiAnswer": "ديربي القناة",
    "fourAnswer": "قمة النيل",
    "rightAnswer": "ديربي القاهرة"
  },
  {
    "id": 28,
    "question": "من هو المدرب الملقب بـ 'The Special One'؟",
    "firAnswer": "يورغن كلوب",
    "secAnswer": "جوزيه مورينيو",
    "thiAnswer": "كارلو أنشيلوتي",
    "fourAnswer": "أرسين فينغر",
    "rightAnswer": "جوزيه مورينيو"
  },
  {
    "id": 29,
    "question": "أي منتخب فاز بلقب كأس العرب 2021 التي أقيمت في قطر؟",
    "firAnswer": "تونس",
    "secAnswer": "الجزائر",
    "thiAnswer": "قطر",
    "fourAnswer": "مصر",
    "rightAnswer": "الجزائر"
  },
  {
    "id": 30,
    "question": "كم عدد اللاعبين في ملعب كرة القدم للفريق الواحد أثناء المباراة؟",
    "firAnswer": "10 لاعبين",
    "secAnswer": "11 لاعباً",
    "thiAnswer": "12 لاعباً",
    "fourAnswer": "9 لاعبين",
    "rightAnswer": "11 لاعباً"
  },
  {
    "id": 31,
    "question": "من هو النادي الألماني الأكثر تتويجاً بلقب البوندسليغا؟",
    "firAnswer": "بوروسيا دورتموند",
    "secAnswer": "باير ليفركوزن",
    "thiAnswer": "بايرن ميونخ",
    "fourAnswer": "لايبزيغ",
    "rightAnswer": "بايرن ميونخ"
  },
  {
    "id": 32,
    "question": "ما اسم البطولة القارية للأندية في جنوب أمريكا؟",
    "firAnswer": "دوري أبطال الكونكاكاف",
    "secAnswer": "كوبا ليبرتادوريس",
    "thiAnswer": "كوبا أمريكا",
    "fourAnswer": "كأس سودأميركانا",
    "rightAnswer": "كوبا ليبرتادوريس"
  },
  {
    "id": 33,
    "question": "من هو اللاعب الذي سجل خماسية في 9 دقائق لصالح بايرن ميونخ عام 2015؟",
    "firAnswer": "توماس مولر",
    "secAnswer": "روبرت ليفاندوفسكي",
    "thiAnswer": "أريين روبن",
    "fourAnswer": "فرانك ريبري",
    "rightAnswer": "روبرت ليفاندوفسكي"
  },
  {
    "id": 34,
    "question": "أي دولة فازت بكأس العالم لكرة القدم 2022 في قطر؟",
    "firAnswer": "فرنسا",
    "secAnswer": "الأرجنتين",
    "thiAnswer": "كرواتيا",
    "fourAnswer": "المغرب",
    "rightAnswer": "الأرجنتين"
  },
  {
    "id": 35,
    "question": "من هو أول منتخب عربي وصل إلى نصف نهائي كأس العالم؟",
    "firAnswer": "الجزائر",
    "secAnswer": "مصر",
    "thiAnswer": "المغرب",
    "fourAnswer": "السعودية",
    "rightAnswer": "المغرب"
  },
  {
    "id": 36,
    "question": "من هو اللاعب الذي لقب بـ 'ملك كرة القدم' أو 'Jawhara Negra'؟",
    "firAnswer": "بيليه",
    "secAnswer": "مارادونا",
    "thiAnswer": "أوزيبيو",
    "fourAnswer": "زيكو",
    "rightAnswer": "بيليه"
  },
  {
    "id": 37,
    "question": "ما هو الفريق الذي حصد لقب دوري أبطال أوروبا عام 2012 لأول مرة في تاريخه؟",
    "firAnswer": "أرسنال",
    "secAnswer": "تشيلسي",
    "thiAnswer": "مانشستر سيتي",
    "fourAnswer": "توتنهام",
    "rightAnswer": "تشيلسي"
  },
  {
    "id": 38,
    "question": "ما اسم الجائزة التي تُمنح لأفضل هدف في العام من الفيفا؟",
    "firAnswer": "جائزة الكرة الذهبية",
    "secAnswer": "جائزة بوشكاش",
    "thiAnswer": "جائزة الحذاء الذهبي",
    "fourAnswer": "جائزة الفتى الذهبي",
    "rightAnswer": "جائزة بوشكاش"
  },
  {
    "id": 39,
    "question": "من هو النادي الفرنسي المملوك لشركة قطر للاستثمارات الرياضية؟",
    "firAnswer": "أولمبيك مارسيليا",
    "secAnswer": "أولمبيك ليون",
    "thiAnswer": "باريس سان جيرمان",
    "fourAnswer": "موناكو",
    "rightAnswer": "باريس سان جيرمان"
  },
  {
    "id": 40,
    "question": "من هو حارس المرمى الشهير بلقب 'العنكبوت الأسود'؟",
    "firAnswer": "إيكر كاسياس",
    "secAnswer": "ليف ياشين",
    "thiAnswer": "أوليفر كان",
    "fourAnswer": "بيتر شمايكل",
    "rightAnswer": "ليف ياشين"
  },
  {
    "id": 41,
    "question": "في أي نادي بدأ محمد صلاح مسيرته الاحترافية في أوروبا؟",
    "firAnswer": "تشيلسي",
    "secAnswer": "بازل السويسري",
    "thiAnswer": "فيورنتينا",
    "fourAnswer": "روما",
    "rightAnswer": "بازل السويسري"
  },
  {
    "id": 42,
    "question": "ما هو النادي الملقب بـ 'الروخيبلانكوس' في إسبانيا؟",
    "firAnswer": "إشبيلية",
    "secAnswer": "أتلتيكو مدريد",
    "thiAnswer": "فالنسيا",
    "fourAnswer": "أتلتيك بلباو",
    "rightAnswer": "أتلتيكو مدريد"
  },
  {
    "id": 43,
    "question": "من الفائز ببطولة كأس أمم أوروبا (يورو 2020) التي أقيمت عام 2021؟",
    "firAnswer": "إنجلترا",
    "secAnswer": "إيطاليا",
    "thiAnswer": "إسبانيا",
    "fourAnswer": "البرتغال",
    "rightAnswer": "إيطاليا"
  },
  {
    "id": 44,
    "question": "ما هي جنسية اللاعب إرلينغ هالاند؟",
    "firAnswer": "السويد",
    "secAnswer": "النرويج",
    "thiAnswer": "الدنمارك",
    "fourAnswer": "فنلندا",
    "rightAnswer": "النرويج"
  },
  {
    "id": 45,
    "question": "من هو اللاعب الذي ارتدى قميص رقم 7 الشهير في مانشستر يونايتد قبل انتقاله لريال مدريد؟",
    "firAnswer": "ديفيد بيكهام",
    "secAnswer": "كريستيانو رونالدو",
    "thiAnswer": "إيريك كانتونا",
    "fourAnswer": "واين روني",
    "rightAnswer": "كريستيانو رونالدو"
  },
  {
    "id": 46,
    "question": "كم مدة الشوط الواحد الأصلي في مباراة كرة القدم للكبار؟",
    "firAnswer": "40 دقيقة",
    "secAnswer": "45 دقيقة",
    "thiAnswer": "50 دقيقة",
    "fourAnswer": "35 دقيقة",
    "rightAnswer": "45 دقيقة"
  },
  {
    "id": 47,
    "question": "من هو الفريق الإيطالي الوحيد الذي حقق الثلاثية التاريخية في عام 2010؟",
    "firAnswer": "يوفنتوس",
    "secAnswer": "إنتر ميلان",
    "thiAnswer": "إيه سي ميلان",
    "fourAnswer": "نابولي",
    "rightAnswer": "إنتر ميلان"
  },
  {
    "id": 48,
    "question": "ما هو المنتخب صاحب الرقم القياسي في الفوز ببطولة كأس أمم أفريقيا؟",
    "firAnswer": "الكاميرون",
    "secAnswer": "غانا",
    "thiAnswer": "مصر",
    "fourAnswer": "نيجيريا",
    "rightAnswer": "مصر"
  },
  {
    "id": 49,
    "question": "من هو أسطورة خط الوسط الإسباني صاحب هدف الفوز بكأس العالم 2010؟",
    "firAnswer": "تشافي هيرنانديز",
    "secAnswer": "أندريس إنييستا",
    "thiAnswer": "تشابي ألونسو",
    "fourAnswer": "سيرجيو بوسكيتس",
    "rightAnswer": "أندريس إنييستا"
  },
  {
    "id": 50,
    "question": "أي نادٍ استطاع الفوز بلقب الدوري الإنجليزي المعجزة في موسم 2015-2016؟",
    "firAnswer": "توستنهام",
    "secAnswer": "ليستر سيتي",
    "thiAnswer": "أستون فيلا",
    "fourAnswer": "وولفرهامبتون",
    "rightAnswer": "ليستر سيتي"
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
