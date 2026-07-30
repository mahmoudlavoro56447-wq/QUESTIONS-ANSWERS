let tracker=0;
let container=document.querySelector(".container")
let QuestionsAndAnswers=[
    {
        id:1,
        question:"who is the winner of world cup in 2022",
        firAnswer:"Argentina",
        secAnswer:"France",
        thiAnswer:"Croatia",
        fourAnswer:"Brazil",
        rightAnswer:"Argentina",
    },
    {
        "id": 2,
        "question": "Which country won the FIFA World Cup in 2014",
        "firAnswer": "Argentina",
        "secAnswer": "Germany",
        "thiAnswer": "Brazil",
        "fourAnswer": "Netherlands",
        "rightAnswer": "Germany"
    },
    {
        "id": 3,
        "question": "Who is the all-time top scorer for the Brazil national team in official matches",
        "firAnswer": "Pelé",
        "secAnswer": "Ronaldo Nazário",
        "thiAnswer": "Neymar",
        "fourAnswer": "Romário",
        "rightAnswer": "Neymar"
    },
    {
        "id": 4,
        "question": "Which club won the UEFA Champions League in 2019",
        "firAnswer": "Tottenham Hotspur",
        "secAnswer": "Real Madrid",
        "thiAnswer": "Liverpool",
        "fourAnswer": "Bayern Munich",
        "rightAnswer": "Liverpool"
    },
    {
        "id": 5,
        "question": "Which player has the record for the most appearances in World Cup history",
        "firAnswer": "Miroslav Klose",
        "secAnswer": "Lionel Messi",
        "thiAnswer": "Lothar Matthäus",
        "fourAnswer": "Cristiano Ronaldo",
        "rightAnswer": "Lionel Messi"
    },
    {
        "id": 6,
        "question": "Which team won the English Premier League in the 2003-2004 season without losing a single game",
        "firAnswer": "Manchester United",
        "secAnswer": "Chelsea",
        "thiAnswer": "Arsenal",
        "fourAnswer": "Liverpool",
        "rightAnswer": "Arsenal"
    },
    {
        "id": 7,
        "question": "Which country won the UEFA Euro 2016 tournament",
        "firAnswer": "France",
        "secAnswer": "Portugal",
        "thiAnswer": "Germany",
        "fourAnswer": "Wales",
        "rightAnswer": "Portugal"
    },
    {
        "id": 8,
        "question": "Who is the all-time top scorer in FIFA World Cup tournament history",
        "firAnswer": "Pelé",
        "secAnswer": "Ronaldo Nazário",
        "thiAnswer": "Miroslav Klose",
        "fourAnswer": "Gerd Müller",
        "rightAnswer": "Miroslav Klose"
    },
    {
        "id": 9,
        "question": "Which country won the FIFA World Cup in 2010",
        "firAnswer": "Netherlands",
        "secAnswer": "Germany",
        "thiAnswer": "Spain",
        "fourAnswer": "Uruguay",
        "rightAnswer": "Spain"
    },
    {
        "id": 10,
        "question": "Which Italian club did Zlatan Ibrahimović play for immediately before moving to PSG in 2012",
        "firAnswer": "Juventus",
        "secAnswer": "Inter Milan",
        "thiAnswer": "AC Milan",
        "fourAnswer": "Fiorentina",
        "rightAnswer": "AC Milan"
    },
    {
        "id": 11,
        "question": "Who was the manager of Manchester United when they won the historic treble in 1999",
        "firAnswer": "Matt Busby",
        "secAnswer": "Alex Ferguson",
        "thiAnswer": "José Mourinho",
        "fourAnswer": "Louis van Gaal",
        "rightAnswer": "Alex Ferguson"
    },
    {
        "id": 12,
        "question": "Which Spanish club plays its home matches at the Metropolitano Stadium",
        "firAnswer": "Real Madrid",
        "secAnswer": "Atletico Madrid",
        "thiAnswer": "Sevilla",
        "fourAnswer": "Valencia",
        "rightAnswer": "Atletico Madrid"
    },
    {
        "id": 13,
        "question": "Who won the FIFA World Cup Golden Ball award as the tournament's best player in 2018",
        "firAnswer": "Luka Modrić",
        "secAnswer": "Kylian Mbappé",
        "thiAnswer": "Antoine Griezmann",
        "fourAnswer": "Eden Hazard",
        "rightAnswer": "Luka Modrić"
    },
    {
        "id": 14,
        "question": "Which club did Ronaldinho play for right before signing with FC Barcelona in 2003",
        "firAnswer": "Grêmio",
        "secAnswer": "Paris Saint-Germain",
        "thiAnswer": "AC Milan",
        "fourAnswer": "Flamengo",
        "rightAnswer": "Paris Saint-Germain"
    },
    {
        "id": 15,
        "question": "Which player is famous for his trademark 'Panenka' penalty style named after him",
        "firAnswer": "Zinedine Zidane",
        "secAnswer": "Antonin Panenka",
        "thiAnswer": "Andrea Pirlo",
        "fourAnswer": "Francesco Totti",
        "rightAnswer": "Antonin Panenka"
    },
    {
        "id": 16,
        "question": "Which national team is nicknamed 'The Super Eagles'",
        "firAnswer": "Ghana",
        "secAnswer": "Cameroon",
        "thiAnswer": "Nigeria",
        "fourAnswer": "Senegal",
        "rightAnswer": "Nigeria"
    },
    {
        "id": 17,
        "question": "Which country won the FIFA World Cup in 1998",
        "firAnswer": "Brazil",
        "secAnswer": "France",
        "thiAnswer": "Italy",
        "fourAnswer": "Croatia",
        "rightAnswer": "France"
    },
    {
        "id": 18,
        "question": "Who won the UEFA Champions League in 2021 by defeating Manchester City in the final",
        "firAnswer": "Real Madrid",
        "secAnswer": "Chelsea",
        "thiAnswer": "Bayern Munich",
        "fourAnswer": "Liverpool",
        "rightAnswer": "Chelsea"
    },
    {
        "id": 19,
        "question": "Which player has scored the most hat-tricks in UEFA Champions League history",
        "firAnswer": "Lionel Messi",
        "secAnswer": "Cristiano Ronaldo",
        "thiAnswer": "Robert Lewandowski",
        "fourAnswer": "Karim Benzema",
        "rightAnswer": "Cristiano Ronaldo"
    },
    {
        "id": 20,
        "question": "Which German club is famously known as 'Die Schwarzgelben' (The Black and Yellows)",
        "firAnswer": "Bayern Munich",
        "secAnswer": "Bayer Leverkusen",
        "thiAnswer": "Borussia Dortmund",
        "fourAnswer": "Schalke 04",
        "rightAnswer": "Borussia Dortmund"
    },
    {
        "id": 21,
        "question": "Which stadium is the home ground of Real Madrid",
        "firAnswer": "Camp Nou",
        "secAnswer": "Santiago Bernabéu",
        "thiAnswer": "San Siro",
        "fourAnswer": "Mestalla",
        "rightAnswer": "Santiago Bernabéu"
    },
    {
        "id": 22,
        "question": "Who is the all-time top scorer for the France national team",
        "firAnswer": "Thierry Henry",
        "secAnswer": "Olivier Giroud",
        "thiAnswer": "Antoine Griezmann",
        "fourAnswer": "Kylian Mbappé",
        "rightAnswer": "Olivier Giroud"
    },
    {
        "id": 23,
        "question": "Which country hosted the 2002 FIFA World Cup jointly",
        "firAnswer": "USA and Canada",
        "secAnswer": "South Korea and Japan",
        "thiAnswer": "Belgium and Netherlands",
        "fourAnswer": "Austria and Switzerland",
        "rightAnswer": "South Korea and Japan"
    },
    {
        "id": 24,
        "question": "Which English club plays its home games at Anfield",
        "firAnswer": "Everton",
        "secAnswer": "Manchester United",
        "thiAnswer": "Liverpool",
        "fourAnswer": "Manchester City",
        "rightAnswer": "Liverpool"
    },
    {
        "id": 25,
        "question": "Which player won the Ballon d'Or in 2007 before the Messi-Ronaldo dominance began",
        "firAnswer": "Kaká",
        "secAnswer": "Ronaldinho",
        "thiAnswer": "Thierry Henry",
        "fourAnswer": "Zinedine Zidane",
        "rightAnswer": "Kaká"
    },
    {
        "id": 26,
        "question": "Which country won the Copa América tournament in 2024",
        "firAnswer": "Brazil",
        "secAnswer": "Colombia",
        "thiAnswer": "Argentina",
        "fourAnswer": "Uruguay",
        "rightAnswer": "Argentina"
    },
    {
        "id": 27,
        "question": "Which club did Luis Suárez join immediately after leaving Liverpool in 2014",
        "firAnswer": "Real Madrid",
        "secAnswer": "Atletico Madrid",
        "thiAnswer": "Barcelona",
        "fourAnswer": "Juventus",
        "rightAnswer": "Barcelona"
    },
    {
        "id": 28,
        "question": "Who was the first player to win the FIFA World Player of the Year award three times",
        "firAnswer": "Pelé",
        "secAnswer": "Diego Maradona",
        "thiAnswer": "Ronaldo Nazário",
        "fourAnswer": "Zinedine Zidane",
        "rightAnswer": "Ronaldo Nazário"
    },
    {
        "id": 29,
        "question": "Which national team is nicknamed 'The Red Devils'",
        "firAnswer": "Germany",
        "secAnswer": "Belgium",
        "thiAnswer": "Spain",
        "fourAnswer": "Portugal",
        "rightAnswer": "Belgium"
    },
    {
        "id": 30,
        "question": "Which country won the FIFA World Cup in 1994 via a penalty shootout against Italy",
        "firAnswer": "Brazil",
        "secAnswer": "Argentina",
        "thiAnswer": "Germany",
        "fourAnswer": "Sweden",
        "rightAnswer": "Brazil"
    },
    {
        "id": 31,
        "question": "Who won the UEFA Champions League in 2020 by beating PSG in the final",
        "firAnswer": "Real Madrid",
        "secAnswer": "Bayern Munich",
        "thiAnswer": "Liverpool",
        "fourAnswer": "Barcelona",
        "rightAnswer": "Bayern Munich"
    },
    {
        "id": 32,
        "question": "Which player is the all-time top scorer for Real Madrid",
        "firAnswer": "Raúl",
        "secAnswer": "Karim Benzema",
        "thiAnswer": "Cristiano Ronaldo",
        "fourAnswer": "Alfredo Di Stéfano",
        "rightAnswer": "Cristiano Ronaldo"
    },
    {
        "id": 33,
        "question": "Which country hosted the UEFA Euro 2024 tournament",
        "firAnswer": "France",
        "secAnswer": "Germany",
        "thiAnswer": "England",
        "fourAnswer": "Italy",
        "rightAnswer": "Germany"
    },
    {
        "id": 34,
        "question": "Which club does Mohamed Salah play for",
        "firAnswer": "Chelsea",
        "secAnswer": "AS Roma",
        "thiAnswer": "Liverpool",
        "fourAnswer": "Arsenal",
        "rightAnswer": "Liverpool"
    },
    {
        "id": 35,
        "question": "Who is the all-time top scorer for the England national team",
        "firAnswer": "Wayne Rooney",
        "secAnswer": "Harry Kane",
        "thiAnswer": "Bobby Charlton",
        "fourAnswer": "Gary Lineker",
        "rightAnswer": "Harry Kane"
    },
    {
        "id": 36,
        "question": "Which country won the FIFA World Cup in 1982",
        "firAnswer": "Brazil",
        "secAnswer": "West Germany",
        "thiAnswer": "Italy",
        "fourAnswer": "France",
        "rightAnswer": "Italy"
    },
    {
        "id": 37,
        "question": "Which club did Robert Lewandowski play for right before joining Barcelona in 2022",
        "firAnswer": "Borussia Dortmund",
        "secAnswer": "Bayern Munich",
        "thiAnswer": "Lech Poznań",
        "fourAnswer": "Chelsea",
        "rightAnswer": "Bayern Munich"
    },
    {
        "id": 38,
        "question": "Who won the Ballon d'Or award in 2018 to break the Messi/Ronaldo streak",
        "firAnswer": "Luka Modrić",
        "secAnswer": "Antoine Griezmann",
        "thiAnswer": "Cristiano Ronaldo",
        "fourAnswer": "Mohamed Salah",
        "rightAnswer": "Luka Modrić"
    },
    {
        "id": 39,
        "question": "Which national team is nicknamed 'La Seleção'",
        "firAnswer": "Spain",
        "secAnswer": "Portugal",
        "thiAnswer": "Brazil",
        "fourAnswer": "Argentina",
        "rightAnswer": "Brazil"
    },
    {
        "id": 40,
        "question": "Which country won the FIFA World Cup in 1978 as hosts",
        "firAnswer": "Brazil",
        "secAnswer": "Netherlands",
        "thiAnswer": "Argentina",
        "fourAnswer": "Italy",
        "rightAnswer": "Argentina"
    },
    {
        "id": 41,
        "question": "Who won the UEFA Champions League in 2017",
        "firAnswer": "Juventus",
        "secAnswer": "Real Madrid",
        "thiAnswer": "Barcelona",
        "fourAnswer": "Atletico Madrid",
        "rightAnswer": "Real Madrid"
    },
    {
        "id": 42,
        "question": "Which player has scored the most goals in a single English Premier League season (38-game format)",
        "firAnswer": "Mohamed Salah",
        "secAnswer": "Erling Haaland",
        "thiAnswer": "Alan Shearer",
        "fourAnswer": "Luis Suárez",
        "rightAnswer": "Erling Haaland"
    },
    {
        "id": 43,
        "question": "Which country hosted the FIFA World Cup in 1990",
        "firAnswer": "West Germany",
        "secAnswer": "Italy",
        "thiAnswer": "Argentina",
        "fourAnswer": "France",
        "rightAnswer": "Italy"
    },
    {
        "id": 44,
        "question": "Which club did Neymar join after leaving Barcelona in 2017 for a world-record fee",
        "firAnswer": "Real Madrid",
        "secAnswer": "Paris Saint-Germain",
        "thiAnswer": "Manchester City",
        "fourAnswer": "Al Hilal",
        "rightAnswer": "Paris Saint-Germain"
    },
    {
        "id": 45,
        "question": "Who is the all-time top scorer for the Spain national team",
        "firAnswer": "Raúl",
        "secAnswer": "David Villa",
        "thiAnswer": "Fernando Torres",
        "fourAnswer": "Alvaro Morata",
        "rightAnswer": "David Villa"
    },
    {
        "id": 46,
        "question": "Which country won the FIFA World Cup in 1974",
        "firAnswer": "Netherlands",
        "secAnswer": "West Germany",
        "thiAnswer": "Brazil",
        "fourAnswer": "Poland",
        "rightAnswer": "West Germany"
    },
    {
        "id": 47,
        "question": "Which club won the UEFA Champions League in 2018",
        "firAnswer": "Liverpool",
        "secAnswer": "Real Madrid",
        "thiAnswer": "Bayern Munich",
        "fourAnswer": "Juventus",
        "rightAnswer": "Real Madrid"
    },
    {
        "id": 48,
        "question": "Which player is known as 'The Egyptian King'",
        "firAnswer": "Sadio Mané",
        "secAnswer": "Riyad Mahrez",
        "thiAnswer": "Mohamed Salah",
        "fourAnswer": "Achraf Hakimi",
        "rightAnswer": "Mohamed Salah"
    },
    {
        "id": 49,
        "question": "Which country hosted the FIFA World Cup in 1986",
        "firAnswer": "Colombia",
        "secAnswer": "Brazil",
        "thiAnswer": "Mexico",
        "fourAnswer": "Argentina",
        "rightAnswer": "Mexico"
    },
    {
        "id": 50,
        "question": "Which club did Zinedine Zidane manage during their three consecutive Champions League titles",
        "firAnswer": "Juventus",
        "secAnswer": "Real Madrid",
        "thiAnswer": "Paris Saint-Germain",
        "fourAnswer": "Bordeaux",
        "rightAnswer": "Real Madrid"
    },
    {
        "id": 51,
        "question": "Who is the all-time top scorer for the Germany national team",
        "firAnswer": "Gerd Müller",
        "secAnswer": "Miroslav Klose",
        "thiAnswer": "Lukas Podolski",
        "fourAnswer": "Jürgen Klinsmann",
        "rightAnswer": "Miroslav Klose"
    },
    {
        "id": 52,
        "question": "Which country won the FIFA World Cup in 1970",
        "firAnswer": "Italy",
        "secAnswer": "West Germany",
        "thiAnswer": "Brazil",
        "fourAnswer": "Uruguay",
        "rightAnswer": "Brazil"
    },
    {
        "id": 53,
        "question": "Which club won the UEFA Champions League in 2017",
        "firAnswer": "Atletico Madrid",
        "secAnswer": "Real Madrid",
        "thiAnswer": "Barcelona",
        "fourAnswer": "Bayern Munich",
        "rightAnswer": "Real Madrid"
    },
    {
        "id": 54,
        "question": "Which player won the Golden Boot at the 2014 FIFA World Cup",
        "firAnswer": "Lionel Messi",
        "secAnswer": "Thomas Müller",
        "thiAnswer": "James Rodríguez",
        "fourAnswer": "Neymar",
        "rightAnswer": "James Rodríguez"
    },
    {
        "id": 55,
        "question": "Which country hosted the FIFA World Cup in 1982",
        "firAnswer": "Italy",
        "secAnswer": "Spain",
        "thiAnswer": "Argentina",
        "fourAnswer": "Mexico",
        "rightAnswer": "Spain"
    },
    {
        "id": 56,
        "question": "Which club did Gareth Bale join after leaving Tottenham Hotspur in 2013",
        "firAnswer": "Real Madrid",
        "secAnswer": "Barcelona",
        "thiAnswer": "Manchester United",
        "fourAnswer": "Bayern Munich",
        "rightAnswer": "Real Madrid"
    },
    {
        "id": 57,
        "question": "Who is the all-time top scorer for the Italy national team",
        "firAnswer": "Luigi Riva",
        "secAnswer": "Giuseppe Meazza",
        "thiAnswer": "Roberto Baggio",
        "fourAnswer": "Alessandro Del Piero",
        "rightAnswer": "Luigi Riva"
    },
    {
        "id": 58,
        "question": "Which country won the FIFA World Cup in 1966 as hosts",
        "firAnswer": "West Germany",
        "secAnswer": "Portugal",
        "thiAnswer": "England",
        "fourAnswer": "Argentina",
        "rightAnswer": "England"
    },
    {
        "id": 59,
        "question": "Which club won the UEFA Champions League in 2015",
        "firAnswer": "Juventus",
        "secAnswer": "Real Madrid",
        "thiAnswer": "Barcelona",
        "fourAnswer": "Bayern Munich",
        "rightAnswer": "Barcelona"
    },
    {
        "id": 60,
        "question": "Which player is known for his legendary career at AS Roma, spending his entire professional life there",
        "firAnswer": "Francesco Totti",
        "secAnswer": "Daniele De Rossi",
        "thiAnswer": "Alessandro Del Piero",
        "fourAnswer": "Paolo Maldini",
        "rightAnswer": "Francesco Totti"
    },
    {
        "id": 61,
        "question": "Which country hosted the FIFA World Cup in 1974",
        "firAnswer": "Netherlands",
        "secAnswer": "West Germany",
        "thiAnswer": "Argentina",
        "fourAnswer": "Brazil",
        "rightAnswer": "West Germany"
    },
    {
        "id": 62,
        "question": "Which club did Eden Hazard join after leaving Chelsea in 2019",
        "firAnswer": "Real Madrid",
        "secAnswer": "Barcelona",
        "thiAnswer": "Paris Saint-Germain",
        "fourAnswer": "Juventus",
        "rightAnswer": "Real Madrid"
    },
    {
        "id": 63,
        "question": "Who is the all-time top scorer for the Netherlands national team",
        "firAnswer": "Patrick Kluivert",
        "secAnswer": "Robin van Persie",
        "thiAnswer": "Klaas-Jan Huntelaar",
        "fourAnswer": "Dennis Bergkamp",
        "rightAnswer": "Robin van Persie"
    },
    {
        "id": 64,
        "question": "Which country won the FIFA World Cup in 1962",
        "firAnswer": "Czechoslovakia",
        "secAnswer": "Brazil",
        "thiAnswer": "Chile",
        "fourAnswer": "Yugoslavia",
        "rightAnswer": "Brazil"
    },
    {
        "id": 65,
        "question": "Which club won the UEFA Champions League in 2014 by defeating Atletico Madrid in extra time",
        "firAnswer": "Barcelona",
        "secAnswer": "Bayern Munich",
        "thiAnswer": "Real Madrid",
        "fourAnswer": "Chelsea",
        "rightAnswer": "Real Madrid"
    },
    {
        "id": 66,
        "question": "Which player won the Ballon d'Or award in 2004",
        "firAnswer": "Ronaldinho",
        "secAnswer": "Thierry Henry",
        "thiAnswer": "Andriy Shevchenko",
        "fourAnswer": "Deco",
        "rightAnswer": "Andriy Shevchenko"
    },
    {
        "id": 67,
        "question": "Which country hosted the FIFA World Cup in 1970",
        "firAnswer": "Brazil",
        "secAnswer": "Mexico",
        "thiAnswer": "Italy",
        "fourAnswer": "West Germany",
        "rightAnswer": "Mexico"
    },
    {
        "id": 68,
        "question": "Which club did Kevin De Bruyne play for right before signing with Manchester City in 2015",
        "firAnswer": "Chelsea",
        "secAnswer": "VfL Wolfsburg",
        "thiAnswer": "Werder Bremen",
        "fourAnswer": "Genk",
        "rightAnswer": "VfL Wolfsburg"
    },
    {
        "id": 69,
        "question": "Who is the all-time top scorer for the Portugal national team",
        "firAnswer": "Eusébio",
        "secAnswer": "Pauleta",
        "thiAnswer": "Cristiano Ronaldo",
        "fourAnswer": "Luís Figo",
        "rightAnswer": "Cristiano Ronaldo"
    },
    {
        "id": 70,
        "question": "Which country won the FIFA World Cup in 1958",
        "firAnswer": "Sweden",
        "secAnswer": "Brazil",
        "thiAnswer": "France",
        "fourAnswer": "West Germany",
        "rightAnswer": "Brazil"
    },
    {
        "id": 71,
        "question": "Which club won the UEFA Champions League in 2013 in an all-German final",
        "firAnswer": "Borussia Dortmund",
        "secAnswer": "Bayern Munich",
        "thiAnswer": "Real Madrid",
        "fourAnswer": "Chelsea",
        "rightAnswer": "Bayern Munich"
    },
    {
        "id": 72,
        "question": "Which player won the Golden Boot at the 2018 FIFA World Cup",
        "firAnswer": "Antoine Griezmann",
        "secAnswer": "Kylian Mbappé",
        "thiAnswer": "Harry Kane",
        "fourAnswer": "Romelu Lukaku",
        "rightAnswer": "Harry Kane"
    },
    {
        "id": 73,
        "question": "Which country hosted the FIFA World Cup in 1966",
        "firAnswer": "West Germany",
        "secAnswer": "England",
        "thiAnswer": "France",
        "fourAnswer": "Italy",
        "rightAnswer": "England"
    },
    {
        "id": 74,
        "question": "Which club did Luis Figo famously switch to from FC Barcelona in 2000",
        "firAnswer": "Real Madrid",
        "secAnswer": "Inter Milan",
        "thiAnswer": "Juventus",
        "fourAnswer": "AC Milan",
        "rightAnswer": "Real Madrid"
    },
    {
        "id": 75,
        "question": "Who is the all-time top scorer for the Uruguay national team",
        "firAnswer": "Diego Forlán",
        "secAnswer": "Luis Suárez",
        "thiAnswer": "Edinson Cavani",
        "fourAnswer": "Álvaro Recoba",
        "rightAnswer": "Luis Suárez"
    },
    {
        "id": 76,
        "question": "Which country won the FIFA World Cup in 1954",
        "firAnswer": "Hungary",
        "secAnswer": "West Germany",
        "thiAnswer": "Austria",
        "fourAnswer": "Uruguay",
        "rightAnswer": "West Germany"
    },
    {
        "id": 77,
        "question": "Which club won the UEFA Champions League in 2012 by beating Bayern Munich on penalties",
        "firAnswer": "Chelsea",
        "secAnswer": "Real Madrid",
        "thiAnswer": "Barcelona",
        "fourAnswer": "Manchester United",
        "rightAnswer": "Chelsea"
    },
    {
        "id": 78,
        "question": "Which player is known as 'The King' (O Rei) of football",
        "firAnswer": "Diego Maradona",
        "secAnswer": "Lionel Messi",
        "thiAnswer": "Pelé",
        "fourAnswer": "Cristiano Ronaldo",
        "rightAnswer": "Pelé"
    },
    {
        "id": 79,
        "question": "Which country hosted the FIFA World Cup in 1962",
        "firAnswer": "Brazil",
        "secAnswer": "Chile",
        "thiAnswer": "Argentina",
        "fourAnswer": "Uruguay",
        "rightAnswer": "Chile"
    },
    {
        "id": 80,
        "question": "Which club did Luka Modrić play for right before joining Real Madrid in 2012",
        "firAnswer": "Dinamo Zagreb",
        "secAnswer": "Tottenham Hotspur",
        "thiAnswer": "Chelsea",
        "fourAnswer": "Arsenal",
        "rightAnswer": "Tottenham Hotspur"
    },
    {
        "id": 81,
        "question": "Who is the all-time top scorer for the Belgium national team",
        "firAnswer": "Eden Hazard",
        "secAnswer": "Romelu Lukaku",
        "thiAnswer": "Kevin De Bruyne",
        "fourAnswer": "Dries Mertens",
        "rightAnswer": "Romelu Lukaku"
    },
    {
        "id": 82,
        "question": "Which country won the FIFA World Cup in 1950 by defeating Brazil in the famous Maracanazo match",
        "firAnswer": "Uruguay",
        "secAnswer": "Argentina",
        "thiAnswer": "Sweden",
        "fourAnswer": "Spain",
        "rightAnswer": "Uruguay"
    },
    {
        "id": 83,
        "question": "Which club won the UEFA Champions League in 2011",
        "firAnswer": "Manchester United",
        "secAnswer": "Real Madrid",
        "thiAnswer": "Barcelona",
        "fourAnswer": "Inter Milan",
        "rightAnswer": "Barcelona"
    },
    {
        "id": 84,
        "question": "Which manager is famous for leading Greece to a shocking victory at UEFA Euro 2004",
        "firAnswer": "Otto Rehhagel",
        "secAnswer": "José Mourinho",
        "thiAnswer": "Arsène Wenger",
        "fourAnswer": "Guus Hiddink",
        "rightAnswer": "Otto Rehhagel"
    },
    {
        "id": 85,
        "question": "Which country hosted the FIFA World Cup in 1958",
        "firAnswer": "Brazil",
        "secAnswer": "France",
        "thiAnswer": "Sweden",
        "fourAnswer": "Switzerland",
        "rightAnswer": "Sweden"
    },
    {
        "id": 86,
        "question": "Which club did Karim Benzema play for before spending his prime years at Real Madrid",
        "firAnswer": "Marseille",
        "secAnswer": "Lyon",
        "thiAnswer": "Monaco",
        "fourAnswer": "PSG",
        "rightAnswer": "Lyon"
    },
    {
        "id": 87,
        "question": "Who is the all-time top scorer for the Colombia national team",
        "firAnswer": "Radamel Falcao",
        "secAnswer": "James Rodríguez",
        "thiAnswer": "Carlos Valderrama",
        "fourAnswer": "Jackson Martínez",
        "rightAnswer": "Radamel Falcao"
    },
    {
        "id": 88,
        "question": "Which country won the first two FIFA World Cups back-to-back in 1934 and 1938",
        "firAnswer": "Uruguay",
        "secAnswer": "Italy",
        "thiAnswer": "Germany",
        "fourAnswer": "Brazil",
        "rightAnswer": "Italy"
    },
    {
        "id": 89,
        "question": "Which club won the UEFA Champions League in 2010 to complete a historic treble under José Mourinho",
        "firAnswer": "Bayern Munich",
        "secAnswer": "Inter Milan",
        "thiAnswer": "Barcelona",
        "fourAnswer": "AC Milan",
        "rightAnswer": "Inter Milan"
    },
    {
        "id": 90,
        "question": "Which player won the Golden Boot at the 2010 FIFA World Cup in South Africa",
        "firAnswer": "Diego Forlán",
        "secAnswer": "Wesley Sneijder",
        "thiAnswer": "Thomas Müller",
        "fourAnswer": "David Villa",
        "rightAnswer": "Thomas Müller"
    },
    {
        "id": 91,
        "question": "Which country hosted the FIFA World Cup in 1954",
        "firAnswer": "Sweden",
        "secAnswer": "Switzerland",
        "thiAnswer": "Austria",
        "fourAnswer": "West Germany",
        "rightAnswer": "Switzerland"
    },
    {
        "id": 92,
        "question": "Which club did David Beckham join immediately after leaving Manchester United in 2003",
        "firAnswer": "Real Madrid",
        "secAnswer": "AC Milan",
        "thiAnswer": "LA Galaxy",
        "fourAnswer": "Paris Saint-Germain",
        "rightAnswer": "Real Madrid"
    },
    {
        "id": 93,
        "question": "Who is the all-time top scorer for the Ivory Coast national team",
        "firAnswer": "Yaya Touré",
        "secAnswer": "Didier Drogba",
        "thiAnswer": "Salomon Kalou",
        "fourAnswer": "Gervinho",
        "rightAnswer": "Didier Drogba"
    },
    {
        "id": 94,
        "question": "Which country won the UEFA Euro 2012 tournament",
        "firAnswer": "Italy",
        "secAnswer": "Spain",
        "thiAnswer": "Germany",
        "fourAnswer": "Portugal",
        "rightAnswer": "Spain"
    },
    {
        "id": 95,
        "question": "Which club won the UEFA Champions League in 2009",
        "firAnswer": "Manchester United",
        "secAnswer": "Chelsea",
        "thiAnswer": "Barcelona",
        "fourAnswer": "Arsenal",
        "rightAnswer": "Barcelona"
    },
    {
        "id": 96,
        "question": "Which player is famous for his incredible overhead kick goal against Juventus in the 2018 Champions League",
        "firAnswer": "Lionel Messi",
        "secAnswer": "Cristiano Ronaldo",
        "thiAnswer": "Gareth Bale",
        "fourAnswer": "Mario Mandžukić",
        "rightAnswer": "Cristiano Ronaldo"
    },
    {
        "id": 97,
        "question": "Which country hosted the FIFA World Cup in 1950",
        "firAnswer": "Uruguay",
        "secAnswer": "Brazil",
        "thiAnswer": "Argentina",
        "fourAnswer": "Chile",
        "rightAnswer": "Brazil"
    },
    {
        "id": 98,
        "question": "Which club did Thierry Henry join after leaving Arsenal in 2007",
        "firAnswer": "Barcelona",
        "secAnswer": "Real Madrid",
        "thiAnswer": "Juventus",
        "fourAnswer": "New York Red Bulls",
        "rightAnswer": "Barcelona"
    },
    {
        "id": 99,
        "question": "Who is the all-time top scorer for the Chile national team",
        "firAnswer": "Ivan Zamorano",
        "secAnswer": "Alexis Sánchez",
        "thiAnswer": "Eduardo Vargas",
        "fourAnswer": "Arturo Vidal",
        "rightAnswer": "Alexis Sánchez"
    },
    {
        "id": 100,
        "question": "Which country won the UEFA Euro 2008 tournament",
        "firAnswer": "Germany",
        "secAnswer": "Spain",
        "thiAnswer": "Russia",
        "fourAnswer": "Italy",
        "rightAnswer": "Spain"
    },
    {
        "id": 101,
        "question": "Which club won the UEFA Champions League in 2008 in an all-English final against Chelsea",
        "firAnswer": "Liverpool",
        "secAnswer": "Arsenal",
        "thiAnswer": "Manchester United",
        "fourAnswer": "Manchester City",
        "rightAnswer": "Manchester United"
    },
    {
        "id": 102,
        "question": "Which player won the Ballon d'Or award in 2005",
        "firAnswer": "Ronaldinho",
        "secAnswer": "Frank Lampard",
        "thiAnswer": "Steven Gerrard",
        "fourAnswer": "Thierry Henry",
        "rightAnswer": "Ronaldinho"
    },
    {
        "id": 103,
        "question": "Which country hosted the FIFA World Cup in 1938",
        "firAnswer": "Italy",
        "secAnswer": "France",
        "thiAnswer": "Germany",
        "fourAnswer": "Uruguay",
        "rightAnswer": "France"
    },
    {
        "id": 104,
        "question": "Which club did Cesc Fàbregas leave Arsenal for in 2011",
        "firAnswer": "Real Madrid",
        "secAnswer": "Barcelona",
        "thiAnswer": "Chelsea",
        "fourAnswer": "AC Milan",
        "rightAnswer": "Barcelona"
    },
    {
        "id": 105,
        "question": "Who is the all-time top scorer for the Croatia national team",
        "firAnswer": "Davor Šuker",
        "secAnswer": "Mario Mandžukić",
        "thiAnswer": "Luka Modrić",
        "fourAnswer": "Ivan Perišić",
        "rightAnswer": "Davor Šuker"
    },
    {
        "id": 106,
        "question": "Which country won the UEFA Euro 2000 tournament",
        "firAnswer": "Italy",
        "secAnswer": "France",
        "thiAnswer": "Netherlands",
        "fourAnswer": "Portugal",
        "rightAnswer": "France"
    },
    {
        "id": 107,
        "question": "Which club won the UEFA Champions League in 2007 by avenging their Istanbul defeat against Liverpool",
        "firAnswer": "AC Milan",
        "secAnswer": "Juventus",
        "thiAnswer": "Inter Milan",
        "fourAnswer": "Real Madrid",
        "rightAnswer": "AC Milan"
    },
    {
        "id": 108,
        "question": "Which player won the Golden Boot at the 2006 FIFA World Cup in Germany",
        "firAnswer": "Miroslav Klose",
        "secAnswer": "Ronaldo Nazário",
        "thiAnswer": "Thierry Henry",
        "fourAnswer": "Zinedine Zidane",
        "rightAnswer": "Miroslav Klose"
    },
    {
        "id": 109,
        "question": "Which country hosted the FIFA World Cup in 1934",
        "firAnswer": "Uruguay",
        "secAnswer": "Italy",
        "thiAnswer": "France",
        "fourAnswer": "Brazil",
        "rightAnswer": "Italy"
    },
    {
        "id": 110,
        "question": "Which club did Sergio Agüero play for right before signing with Manchester City in 2011",
        "firAnswer": "Independiente",
        "secAnswer": "Atletico Madrid",
        "thiAnswer": "Barcelona",
        "fourAnswer": "Real Madrid",
        "rightAnswer": "Atletico Madrid"
    },
    {
        "id": 111,
        "question": "Who is the all-time top scorer for the Sweden national team",
        "firAnswer": "Henrik Larsson",
        "secAnswer": "Zlatan Ibrahimović",
        "thiAnswer": "Gunnar Nordahl",
        "fourAnswer": "Tomas Brolin",
        "rightAnswer": "Zlatan Ibrahimović"
    },
    {
        "id": 112,
        "question": "Which country won the UEFA Euro 1996 tournament held in England",
        "firAnswer": "Czech Republic",
        "secAnswer": "Germany",
        "thiAnswer": "France",
        "fourAnswer": "England",
        "rightAnswer": "Germany"
    },
    {
        "id": 113,
        "question": "Which club won the UEFA Champions League in 2006 by defeating Arsenal in Paris",
        "firAnswer": "Real Madrid",
        "secAnswer": "Barcelona",
        "thiAnswer": "AC Milan",
        "fourAnswer": "Bayern Munich",
        "rightAnswer": "Barcelona"
    },
    {
        "id": 114,
        "question": "Which player famously won the Ballon d'Or in 2003",
        "firAnswer": "Thierry Henry",
        "secAnswer": "Pavel Nedvěd",
        "thiAnswer": "Paolo Maldini",
        "fourAnswer": "Zinedine Zidane",
        "rightAnswer": "Pavel Nedvěd"
    },
    {
        "id": 115,
        "question": "Which country hosted the FIFA World Cup in 1998",
        "firAnswer": "Italy",
        "secAnswer": "France",
        "thiAnswer": "Germany",
        "fourAnswer": "United States",
        "rightAnswer": "France"
    },
    {
        "id": 116,
        "question": "Which club did Luis Figo leave Real Madrid for in 2005",
        "firAnswer": "Barcelona",
        "secAnswer": "Inter Milan",
        "thiAnswer": "AC Milan",
        "fourAnswer": "Sporting CP",
        "rightAnswer": "Inter Milan"
    },
    { 
        id:117,
        question:"what is the capital of France",
        firAnswer:"Paris",
        secAnswer:"Roma",
        thiAnswer:"Monaco",
        fourAnswer:"Nis",
        rightAnswer:"Paris",
    },
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