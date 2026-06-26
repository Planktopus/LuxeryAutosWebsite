const roster = [
  { username: "quandale", password: "Quandale382", fullname: "Quandale Brown" },
  { username: "jordan-k", password: "Jordan921", fullname: "Jordan Karlman" },
  {
    username: "headphanie",
    password: "Headphanie984",
    fullname: "Headphanie Stroke",
  },
  { username: "nico", password: "Nico193", fullname: "Nico Asher" },
  {
    username: "rosalynn",
    password: "Rosalynn651",
    fullname: "Rosalynn Moniker",
  },
  { username: "jordan-t", password: "Jordan841", fullname: "Jordan Teller" },
  { username: "dan", password: "Dan504", fullname: "Dan King" },
  {
    username: "johnny",
    password: "Johnny905",
    fullname: "Johnny Jackson Jones",
  },
  { username: "tobias", password: "Tobias739", fullname: "Tobias Nobel" },
  { username: "cynthia", password: "Cynthia312", fullname: "Cynthia Jones" },
  { username: "tyler", password: "Tyler778", fullname: "Tyler Omo" },
  { username: "bubba ", password: "Bubba545", fullname: "Bubba Stroke" },
  { username: "sallie", password: "Sallie193", fullname: "Sallie Sparquelz" },
  { username: "trainee", password: "Trainee123", fullname: "Trainee Employee" },
  {    username: "elijah", password: "Elijah846", fullname: "Elijah Randolf" },
  {
    username: "luxery",
    password: "JohnnyIsAmazing67",
    fullname: "Luxery Autos",
  },
  { username: "marley", password: "Marley193", fullname: "Marley Cookout" },
   { username: "enrique", password: "Enriqe645", fullname: "Enriqe Guamaman" },
    { username: "eugine", password: "Eugine615", fullname: "Eugine Jefferson" },
    { username: "wiremu ", password: "Wiremu678", fullname: "Wiremu Pomare" },

];

// Vehicle Inventory Data — organized by category
const categories = [
  {
    id: "american/uk",
    label: "US / UK",
    vehicles: [
      {
        name: "Albany Cavalcade ESV",
        image: "pictures/US/image1.png",
        price: 242300,
        discount: 0,
        finalPrice: 242300,
        handling: 280,
        class: "B",
      },
      {
        name: "Albany Cavalcade FXT",
        image: "pictures/US/image2.png",
        price: 198500,
        discount: 0,
        finalPrice: 198500,
        handling: 280,
        class: "B",
      },
      {
        name: "Albany Primo LX",
        image: "pictures/US/image3.png",
        price: 44900,
        discount: 0,
        finalPrice: 44900,
        handling: 150,
        class: "C",
      },
      {
        name: "Albany Olympus",
        image: "pictures/US/image4.png",
        price: 165900,
        discount: 0,
        finalPrice: 165900,
        handling: 150,
        class: "A",
      },
      {
        name: "Bravado Buffalo SL",
        image: "pictures/US/image5.png",
        price: 99500,
        discount: 0,
        finalPrice: 99500,
        handling: 175,
        class: "B",
      },
      {
        name: "Bravado Hellfire Devil",
        image: "pictures/US/image6.png",
        price: 179000,
        discount: 0,
        finalPrice: 179000,
        handling: 175,
        class: "A",
      },
      {
        name: "Bravado Banshee SW",
        image: "pictures/US/image7.png",
        price: 93500,
        discount: 0,
        finalPrice: 93500,
        handling: 135,
        class: "B",
      },
      {
        name: "Bravado Bison D",
        image: "pictures/US/image8.png",
        price: 114450,
        discount: 0,
        finalPrice: 114450,
        handling: 500,
        class: "C",
      },
      {
        name: "Bravado Buffalo T",
        image: "pictures/US/image9.png",
        price: 99500,
        discount: 5,
        finalPrice: 94525,
        handling: 135,
        class: "B",
      },
      {
        name: "Bravado Recursion",
        image: "pictures/US/image10.png",
        price: 72350,
        discount: 0,
        finalPrice: 72350,
        handling: 135,
        class: "B",
      },
      {
        name: "Bravado Gresley H",
        image: "pictures/US/image11.png",
        price: 228000,
        discount: 0,
        finalPrice: 228000,
        handling: 280,
        class: "A",
      },
      {
        name: "Bravado Buffalo AC",
        image: "pictures/US/image12.png",
        price: 113000,
        discount: 0,
        finalPrice: 113000,
        handling: 135,
        class: "B",
      },
      {
        name: "Bravado Howitzer Wagon",
        image: "pictures/US/image13.png",
        price: 6750,
        discount: 0,
        finalPrice: 6750,
        handling: 135,
        class: "B",
      },
      {
        name: "Brute Pony Navarra",
        image: "pictures/US/image15.png",
        price: 82000,
        discount: 0,
        finalPrice: 82000,
        handling: 350,
        class: "C",
      },
      {
        name: "Canis Mesa XL",
        image: "pictures/US/image16.png",
        price: 232000,
        discount: 0,
        finalPrice: 232000,
        handling: 120,
        class: "B",
      },
      {
        name: "Cheval Dingo",
        image: "pictures/US/image17.png",
        price: 98500,
        discount: 0,
        finalPrice: 98500,
        handling: 120,
        class: "B",
      },
      {
        name: "Classique Accolade",
        image: "pictures/US/image18.png",
        price: 36500,
        discount: 0,
        finalPrice: 36500,
        handling: 150,
        class: "C",
      },
      {
        name: "Classique Panorama",
        image: "pictures/US/image19.png",
        price: 38500,
        discount: 0,
        finalPrice: 38500,
        handling: 150,
        class: "C",
      },
      {
        name: "Declasse Sabre Cabriolet",
        image: "pictures/US/image20.png",
        price: 48000,
        discount: 0,
        finalPrice: 48000,
        handling: 175,
        class: "C",
      },
      {
        name: "Declasse Vigero Custom",
        image: "pictures/US/image21.png",
        price: 79500,
        discount: 0,
        finalPrice: 79500,
        handling: 175,
        class: "B",
      },
      {
        name: "Declasse Vigero Widebody",
        image: "pictures/US/image22.png",
        price: 147500,
        discount: 5,
        finalPrice: 140125,
        handling: 175,
        class: "A",
      },
      {
        name: "Declasse Granger UT",
        image: "pictures/US/image23.png",
        price: 90500,
        discount: 0,
        finalPrice: 90500,
        handling: 350,
        class: "B",
      },
      {
        name: "Declasse Pointer",
        image: "pictures/US/image24.png",
        price: 49000,
        discount: 0,
        finalPrice: 49000,
        handling: 280,
        class: "C",
      },
      {
        name: "Declasse Vigero R",
        image: "pictures/US/image25.png",
        price: 59500,
        discount: 0,
        finalPrice: 59500,
        handling: 175,
        class: "B",
      },
      {
        name: "Declasse Walton",
        image: "pictures/US/image26.png",
        price: 42500,
        discount: 5,
        finalPrice: 40375,
        handling: 350,
        class: "C",
      },
      {
        name: "Declasse Walton Flatbed",
        image: "pictures/US/image27.png",
        price: 45500,
        discount: 2,
        finalPrice: 44590,
        handling: 350,
        class: "C",
      },
      {
        name: "Declasse Yosemite Custom",
        image: "pictures/US/image28.png",
        price: 63000,
        discount: 0,
        finalPrice: 63000,
        handling: 280,
        class: "B",
      },
      {
        name: "Dewbauchee Specter V12",
        image: "pictures/US/image29.png",
        price: 318000,
        discount: 0,
        finalPrice: 318000,
        handling: 135,
        class: "A",
      },
      {
        name: "Imponte Ruiner UTE",
        image: "pictures/US/image30.png",
        price: 81500,
        discount: 0,
        finalPrice: 81500,
        handling: 175,
        class: "B",
      },
      {
        name: "Vapid Aleution XL",
        image: "pictures/US/image31.png",
        price: 89250,
        discount: 2,
        finalPrice: 87465,
        handling: 280,
        class: "B",
      },
      {
        name: "Vapid Sandstorm",
        image: "pictures/US/image32.png",
        price: 109500,
        discount: 0,
        finalPrice: 109500,
        handling: 350,
        class: "B",
      },
      {
        name: "Vapid Sandstorm Widebody",
        image: "pictures/US/image33.png",
        price: 137500,
        discount: 0,
        finalPrice: 137500,
        handling: 350,
        class: "B",
      },
      {
        name: "Vapid Flash RS",
        image: "pictures/US/image34.png",
        price: 62300,
        discount: 2,
        finalPrice: 61054,
        handling: 135,
        class: "B",
      },
      {
        name: "Vapid Hellenstorm",
        image: "pictures/US/image35.png",
        price: 172500,
        discount: 0,
        finalPrice: 172500,
        handling: 350,
        class: "B",
      },
      {
        name: "Vapid Stanier Custom",
        image: "pictures/US/image36.png",
        price: 39500,
        discount: 0,
        finalPrice: 39500,
        handling: 150,
        class: "C",
      },
      {
        name: "Vapid Scout",
        image: "pictures/US/image37.png",
        price: 69500,
        discount: 0,
        finalPrice: 69500,
        handling: 280,
        class: "B",
      },
      {
        name: "Vapid Dominator GT",
        image: "pictures/US/image38.png",
        price: 70000,
        discount: 0,
        finalPrice: 70000,
        handling: 175,
        class: "B",
      },
      {
        name: "Vapid Drift Dominator (C)",
        image: "pictures/US/image39.png",
        price: 117500,
        discount: 0,
        finalPrice: 117500,
        handling: 175,
        class: "C",
      },
      {
        name: "Vapid FMJ-B",
        image: "pictures/US/image40.png",
        price: 695000,
        discount: 0,
        finalPrice: 695000,
        handling: 50,
        class: "S",
      },
      {
        name: "Vapid Alamo",
        image: "pictures/US/image41.png",
        price: 38500,
        discount: 0,
        finalPrice: 38500,
        handling: 280,
        class: "C",
      },
      {
        name: "Vapid Razor",
        image: "pictures/US/image42.png",
        price: 70200,
        discount: 0,
        finalPrice: 70200,
        handling: 175,
        class: "B",
      },
      {
        name: "Vapid Sabot",
        image: "pictures/US/image43.png",
        price: 305000,
        discount: 0,
        finalPrice: 305000,
        handling: 50,
        class: "A",
      },
      {
        name: "Invetero Coquette Classic",
        image: "pictures/US/image44.png",
        price: 89500,
        discount: 0,
        finalPrice: 89500,
        handling: 175,
        class: "B",
      },
      {
        name: "Enus Windsor Custom",
        image: "pictures/US/image45.png",
        price: 398000,
        discount: 0,
        finalPrice: 398000,
        handling: 120,
        class: "A",
      },
      {
        name: "Enus Cognoscenti Custom",
        image: "pictures/US/image46.png",
        price: 325000,
        discount: 0,
        finalPrice: 325000,
        handling: 150,
        class: "B",
      },
      {
        name: "Ocelot Ardent Custom",
        image: "pictures/US/image47.png",
        price: 152500,
        discount: 0,
        finalPrice: 152500,
        handling: 175,
        class: "B",
      },
      {
        name: "Ocelot Euphoria",
        image: "pictures/US/image48.png",
        price: 89000,
        discount: 0,
        finalPrice: 89000,
        handling: 175,
        class: "B",
      },
      {
        name: "Ocelot F620 D",
        image: "pictures/US/image49.png",
        price: 116000,
        discount: 0,
        finalPrice: 116000,
        handling: 120,
        class: "B",
      },
      {
        name: "Ocelot Seeker",
        image: "pictures/US/image50.png",
        price: 139500,
        discount: 0,
        finalPrice: 139500,
        handling: 135,
        class: "A",
      },
      {
        name: "Schyster Deviant Custom",
        image: "pictures/US/image51.png",
        price: 59000,
        discount: 0,
        finalPrice: 59000,
        handling: 175,
        class: "C",
      },
      {
        name: "Schyster Velox",
        image: "pictures/US/image52.png",
        price: 71050,
        discount: 0,
        finalPrice: 71050,
        handling: 175,
        class: "B",
      },
      {
        name: "Willard Paradox Custom",
        image: "pictures/US/image53.png",
        price: 595000,
        discount: 0,
        finalPrice: 595000,
        handling: 175,
        class: "C",
      },
    ],
  },
  {
    id: "japanese",
    label: "Japanese",
    vehicles: [
      {
        name: "Annis Elegy X",
        image: "pictures/Japanese/image1.png",
        price: 495000,
        discount: 0,
        finalPrice: 495000,
        handling: 135,
        class: "S",
      },
      {
        name: "Annis Elegy Wagon",
        image: "pictures/Japanese/image2.png",
        price: 148000,
        discount: 0,
        finalPrice: 148000,
        handling: 135,
        class: "B",
      },
      {
        name: "Annis ZR390",
        image: "pictures/Japanese/image3.png",
        price: 167400,
        discount: 5,
        finalPrice: 159030,
        handling: 135,
        class: "A",
      },
      {
        name: "Annis Trail Wilder",
        image: "pictures/Japanese/image4.png",
        price: 42000,
        discount: 0,
        finalPrice: 42000,
        handling: 350,
        class: "C",
      },
      {
        name: "Annis Remus Convertable",
        image: "pictures/Japanese/image5.png",
        price: 54500,
        discount: 0,
        finalPrice: 54500,
        handling: 135,
        class: "C",
      },
      {
        name: "Annis Remus Widebody",
        image: "pictures/Japanese/image6.png",
        price: 165500,
        discount: 2,
        finalPrice: 162190,
        handling: 135,
        class: "B",
      },
      {
        name: "Annis ZR250",
        image: "pictures/Japanese/image7.png",
        price: 54500,
        discount: 0,
        finalPrice: 54500,
        handling: 135,
        class: "C",
      },
      {
        name: "Dinka RT 3000 WB",
        image: "pictures/Japanese/image8.png",
        price: 58500,
        discount: 0,
        finalPrice: 58500,
        handling: 135,
        class: "B",
      },
      {
        name: "Dinka Millennial Wagon",
        image: "pictures/Japanese/image9.png",
        price: 57300,
        discount: 0,
        finalPrice: 57300,
        handling: 150,
        class: "C",
      },
      {
        name: "Karin Ariant",
        image: "pictures/Japanese/image10.png",
        price: 60500,
        discount: 0,
        finalPrice: 60500,
        handling: 135,
        class: "B",
      },
      {
        name: "Karin Asteroper S",
        image: "pictures/Japanese/image11.png",
        price: 179500,
        discount: 0,
        finalPrice: 179500,
        handling: 135,
        class: "B",
      },
      {
        name: "Karin Everon Custom",
        image: "pictures/Japanese/image12.png",
        price: 63500,
        discount: 0,
        finalPrice: 63500,
        handling: 350,
        class: "B",
      },
      {
        name: "Karin Sigma-Two",
        image: "pictures/Japanese/image13.png",
        price: 56600,
        discount: 0,
        finalPrice: 56600,
        handling: 135,
        class: "C",
      },
      {
        name: "Karin Sultan 2R",
        image: "pictures/Japanese/image14.png",
        price: 99500,
        discount: 2,
        finalPrice: 97510,
        handling: 135,
        class: "B",
      },
      {
        name: "Maibatsu Vincent Wagon",
        image: "pictures/Japanese/image15.png",
        price: 138500,
        discount: 0,
        finalPrice: 138500,
        handling: 135,
        class: "B",
      },
    ],
  },
  {
    id: "open",
    label: "Open",
    vehicles: [
      {
        name: "Dinka Urban",
        image: "pictures/Starter/dinka-urban.png",
        price: 7250,
        discount: 0,
        finalPrice: 7250,
        handling: 60,
        class: "D",
      },
      {
        name: "Annis Kawaii",
        image: "pictures/Starter/Annis-Kawaii.png",
        price: 45500,
        discount: 0,
        finalPrice: 45500,
        handling: 135,
        class: "C",
      },
      {
        name: "Benefactor Scheisser",
        image: "pictures/Starter/Benefactor-Scheisser.png",
        price: 23500,
        discount: 0,
        finalPrice: 23500,
        handling: 150,
        class: "C",
      },
      {
        name: "Karin Turtle",
        image: "pictures/Starter/Karin-Turtle.png",
        price: 13500,
        discount: 0,
        finalPrice: 13500,
        handling: 60,
        class: "C",
      },
      {
        name: "Schyster CWagon",
        image: "pictures/Starter/Schyster-CWagon.png",
        price: 28500,
        discount: 0,
        finalPrice: 28500,
        handling: 60,
        class: "C",
      },
      {
        name: "Dinka Serena",
        image: "pictures/Starter/Dinka-Serena.png",
        price: 28000,
        discount: 0,
        finalPrice: 28000,
        handling: 175,
        class: "C",
      },
      {
        name: "Club Custom",
        image: "pictures/Starter/Club Custom.png",
        price: 14500,
        discount: 0,
        finalPrice: 14500,
        handling: 60,
        class: "C",
      },
      {
        name: "Annis Savestra RE",
        image: "pictures/Starter/Annis-Saverstra.png",
        price: 30500,
        discount: 0,
        finalPrice: 30500,
        handling: 175,
        class: "C",
      },
    ],
  },
  {
    id: "german",
    label: "German",
    vehicles: [
      {
        name: "Benefactor Dubsta 4x4",
        image: "pictures/Germany/image1.png",
        price: 345000,
        discount: 0,
        finalPrice: 345000,
        handling: 280,
        class: "A",
      },
      {
        name: "Benefactor Oracle V12",
        image: "pictures/Germany/image2.png",
        price: 97200,
        discount: 5,
        finalPrice: 92340,
        handling: 150,
        class: "B",
      },
      {
        name: "Benefactor Schlagen SB",
        image: "pictures/Germany/image3.png",
        price: 132500,
        discount: 5,
        finalPrice: 125875,
        handling: 150,
        class: "A",
      },
      {
        name: "Benefactor Schwarzer DTM",
        image: "pictures/Germany/image4.png",
        price: 164000,
        discount: 5,
        finalPrice: 155800,
        handling: 50,
        class: "A",
      },
      {
        name: "Benefactor Streiter Custom",
        image: "pictures/Germany/image5.png",
        price: 138000,
        discount: 0,
        finalPrice: 138000,
        handling: 135,
        class: "B",
      },
      {
        name: "Benefactor Serrano Custom",
        image: "pictures/Germany/image6.png",
        price: 112500,
        discount: 1,
        finalPrice: 111375,
        handling: 280,
        class: "A",
      },
      {
        name: "BF Hotring Weevil",
        image: "pictures/Germany/image7.png",
        price: 96500,
        discount: 0,
        finalPrice: 96500,
        handling: 60,
        class: "B",
      },
      {
        name: "Gallivanter Peacemaker",
        image: "pictures/Germany/image8.png",
        price: 61000,
        discount: 0,
        finalPrice: 61000,
        handling: 350,
        class: "C",
      },
      {
        name: "Gallivanter Peacemaker XL",
        image: "pictures/Germany/image9.png",
        price: 69500,
        discount: 0,
        finalPrice: 69500,
        handling: 350,
        class: "C",
      },
      {
        name: "Obey 10F",
        image: "pictures/Germany/image10.png",
        price: 865000,
        discount: 0,
        finalPrice: 865000,
        handling: 135,
        class: "S",
      },
      {
        name: "Obey Double D",
        image: "pictures/Germany/image11.png",
        price: 79500,
        discount: 0,
        finalPrice: 79500,
        handling: 135,
        class: "B",
      },
      {
        name: "Obey Argento Supercoupe",
        image: "pictures/Germany/image12.png",
        price: 265000,
        discount: 0,
        finalPrice: 265000,
        handling: 150,
        class: "A",
      },
      {
        name: "Obey Shadow",
        image: "pictures/Germany/image13.png",
        price: 278000,
        discount: 3,
        finalPrice: 269660,
        handling: 150,
        class: "A",
      },
      {
        name: "Pfister Meteor",
        image: "pictures/Germany/image14.png",
        price: 1523000,
        discount: 4,
        finalPrice: 1462080,
        handling: 50,
        class: "S",
      },
      {
        name: "Pfister Neon SUV",
        image: "pictures/Germany/image15.png",
        price: 185000,
        discount: 2,
        finalPrice: 181300,
        handling: 280,
        class: "A",
      },
      {
        name: "Pfister Comet Retro Custom",
        image: "pictures/Germany/image16.png",
        price: 238000,
        discount: 0,
        finalPrice: 238000,
        handling: 135,
        class: "A",
      },
      {
        name: "Pfister Comet ST",
        image: "pictures/Germany/image17.png",
        price: 245000,
        discount: 0,
        finalPrice: 245000,
        handling: 135,
        class: "B",
      },
      {
        name: "Ubermacht Niobe Touring",
        image: "pictures/Germany/image18.png",
        price: 165000,
        discount: 0,
        finalPrice: 165000,
        handling: 120,
        class: "A",
      },
      {
        name: "Ubermacht Sentinel MK4",
        image: "pictures/Germany/image19.png",
        price: 174000,
        discount: 0,
        finalPrice: 174000,
        handling: 135,
        class: "A",
      },
      {
        name: "Ubermacht Sentinel MK4 GTR",
        image: "pictures/Germany/image20.png",
        price: 299500,
        discount: 3,
        finalPrice: 290515,
        handling: 135,
        class: "A",
      },
      {
        name: "Ubermacht Sentinel SG3",
        image: "pictures/Germany/image21.png",
        price: 65500,
        discount: 0,
        finalPrice: 65500,
        handling: 120,
        class: "B",
      },
      {
        name: "Ubermacht Sentinel RTS",
        image: "pictures/Germany/image22.png",
        price: 97500,
        discount: 0,
        finalPrice: 97500,
        handling: 135,
        class: "A",
      },
      {
        name: "Ubermacht Stalker",
        image: "pictures/Germany/image23.png",
        price: 295000,
        discount: 0,
        finalPrice: 295000,
        handling: 150,
        class: "A",
      },
      {
        name: "Ubermacht Oracle XS-LE",
        image: "pictures/Germany/image24.png",
        price: 82000,
        discount: 0,
        finalPrice: 82000,
        handling: 120,
        class: "B",
      },
      {
        name: "Ubermacht Zion V10",
        image: "pictures/Germany/image25.png",
        price: 170000,
        discount: 0,
        finalPrice: 170000,
        handling: 135,
        class: "B",
      },
      {
        name: "Ubermacht Vorstand",
        image: "pictures/Germany/image26.png",
        price: 47500,
        discount: 0,
        finalPrice: 47500,
        handling: 135,
        class: "C",
      },
      {
        name: "Ubermacht Seraph",
        image: "pictures/Germany/image27.png",
        price: 64500,
        discount: 0,
        finalPrice: 64500,
        handling: 150,
        class: "C",
      },
    ],
  },
  {
    id: "italian",
    label: "Italian",
    vehicles: [
      {
        name: "Overflod Entity XXR-11",
        image: "pictures/Italian/Overflod Entity XXR-11.png",
        price: 2120000,
        discount: 0,
        finalPrice: 2120000,
        handling: 50,
        class: "S",
      },
      {
        name: "Grotti 181",
        image: "pictures/Italian/grotti 181.png",
        price: 612000,
        discount: 0,
        finalPrice: 612000,
        handling: 135,
        class: "A",
      },
      {
        name: "Grotti Deimos",
        image: "pictures/Italian/Grotti Deimos.png",
        price: 526000,
        discount: 0,
        finalPrice: 526000,
        handling: 175,
        class: "A",
      },
      {
        name: "Grotti Turismo Roadster",
        image: "pictures/Italian/Grotti Turismo Roadster.png",
        price: 1450000,
        discount: 0,
        finalPrice: 1450000,
        handling: 50,
        class: "S",
      },
      {
        name: "Pegassi Moonroe SOTW",
        image: "pictures/Italian/Pegassi Moonroe SOTW.png",
        price: 448000,
        discount: 0,
        finalPrice: 448000,
        handling: 175,
        class: "A",
      },
      {
        name: "Pegassi Tempesta Evo",
        image: "pictures/Italian/Pegassi Tempesta Evo.png",
        price: 1625000,
        discount: 3,
        finalPrice: 1576250,
        handling: 50,
        class: "S",
      },
      {
        name: "Pegassi Tempesta Spyder",
        image: "pictures/Italian/Pegassi Tempesta Spyder.png",
        price: 1825000,
        discount: 5,
        finalPrice: 1733750,
        handling: 50,
        class: "S",
      },
      {
        name: "Pegassi Torerod Retro",
        image: "pictures/Italian/Pegassi Torerod Retro.png",
        price: 495000,
        discount: 0,
        finalPrice: 495000,
        handling: 175,
        class: "A",
      },
      {
        name: "Lampadati Pigalle Custom",
        image: "pictures/Italian/Lampadati Pigalle Custom.png",
        price: 75500,
        discount: 0,
        finalPrice: 75500,
        handling: 175,
        class: "B",
      },
      {
        name: "Lampadati Pigalle MILORD Cabrio",
        image: "pictures/Italian/Lampadati Pigalle MILORD Cabrio.png",
        price: 81500,
        discount: 0,
        finalPrice: 81500,
        handling: 120,
        class: "C",
      },
    ],
  },
  {
    id: "supporter",
    label: "Supporter",
    groups: [
      {
        label: "Gold",
        vehicles: [
          {
            name: "Baller STD",
            image: "pictures/Supporter/Gold/image1.png",
            price: 175000,
            discount: 0,
            finalPrice: 175000,
            handling: 0,
            class: "B",
          },
          {
            name: "Coil Taranis",
            image: "pictures/Supporter/Gold/image2.png",
            price: 142500,
            discount: 0,
            finalPrice: 142500,
            handling: 0,
            class: "A",
          },
          {
            name: "Super Diamond Custom",
            image: "pictures/Supporter/Gold/image3.png",
            price: 365000,
            discount: 0,
            finalPrice: 365000,
            handling: 0,
            class: "B",
          },
          {
            name: "Nexus",
            image: "pictures/Supporter/Gold/image4.png",
            price: 985000,
            discount: 0,
            finalPrice: 985000,
            handling: 0,
            class: "A",
          },
          {
            name: "Benefactor Kreiger BPX-32B",
            image: "pictures/Supporter/Gold/image5.png",
            price: 115000,
            discount: 0,
            finalPrice: 115000,
            handling: 0,
            class: "B",
          },
          {
            name: "Dewbauchee Vesper",
            image: "pictures/Supporter/Gold/image20.png",
            price: 292000,
            discount: 0,
            finalPrice: 292000,
            handling: 0,
            class: "A",
          },
          {
            name: "Paragon Droptop",
            image: "pictures/Supporter/Gold/image6.png",
            price: 302000,
            discount: 0,
            finalPrice: 302000,
            handling: 0,
            class: "A",
          },
          {
            name: "Contender Custom",
            image: "pictures/Supporter/Gold/image7.png",
            price: 132000,
            discount: 0,
            finalPrice: 132000,
            handling: 0,
            class: "B",
          },
          {
            name: "Invetero Coquette VR",
            image: "pictures/Supporter/Gold/image8.png",
            price: 175000,
            discount: 0,
            finalPrice: 175000,
            handling: 0,
            class: "A",
          },
          {
            name: "Emperor Sheava S",
            image: "pictures/Supporter/Gold/image9.png",
            price: 935000,
            discount: 0,
            finalPrice: 935000,
            handling: 0,
            class: "S",
          },
          {
            name: "Ubermacht Oracle XS-LE",
            image: "pictures/Supporter/Gold/image10.png",
            price: 425000,
            discount: 0,
            finalPrice: 425000,
            handling: 0,
            class: "A",
          },
          {
            name: "Coil Savanna",
            image: "pictures/Supporter/Gold/image11.png",
            price: 312000,
            discount: 0,
            finalPrice: 312000,
            handling: 0,
            class: "A",
          },
          {
            name: "Bravado Buffalo 4H",
            image: "pictures/Supporter/Gold/image12.png",
            price: 170000,
            discount: 0,
            finalPrice: 170000,
            handling: 0,
            class: "B",
          },
          {
            name: "Bravado Gresley STX",
            image: "pictures/Supporter/Gold/image13.png",
            price: 209000,
            discount: 0,
            finalPrice: 209000,
            handling: 0,
            class: "A",
          },
          {
            name: "Benefactor Shlagen STR",
            image: "pictures/Supporter/Gold/image14.png",
            price: 675000,
            discount: 0,
            finalPrice: 675000,
            handling: 0,
            class: "S",
          },
          {
            name: "Benefactor Shlagen GT4",
            image: "pictures/Supporter/Gold/image15.png",
            price: 365000,
            discount: 0,
            finalPrice: 365000,
            handling: 0,
            class: "A",
          },
          {
            name: "Benefactor Monarch XLS",
            image: "pictures/Supporter/Gold/image16.png",
            price: 358000,
            discount: 0,
            finalPrice: 358000,
            handling: 0,
            class: "A",
          },
          {
            name: "Benefactor Surrano STR",
            image: "pictures/Supporter/Gold/image17.png",
            price: 305000,
            discount: 0,
            finalPrice: 305000,
            handling: 0,
            class: "A",
          },
          {
            name: "ZR-GPR",
            image: "pictures/Supporter/Gold/image18.png",
            price: 159000,
            discount: 5,
            finalPrice: 151050,
            handling: 0,
            class: "A",
          },
          {
            name: "Schyster PMP 900",
            image: "pictures/Supporter/Gold/image19.png",
            price: 146500,
            discount: 0,
            finalPrice: 146500,
            handling: 0,
            class: "A",
          },
        ],
      },
      {
        label: "Diamond",
        vehicles: [
          {
            name: "Pagassi Severo",
            image: "pictures/Supporter/Diamond/image1.png",
            price: 1750000,
            discount: 0,
            finalPrice: 1750000,
            handling: 0,
            class: "S",
          },
          {
            name: "Pagassi Toros Custom",
            image: "pictures/Supporter/Diamond/image2.png",
            price: 485000,
            discount: 0,
            finalPrice: 485000,
            handling: 0,
            class: "A",
          },
          {
            name: "Pfister Comet S2 CTX",
            image: "pictures/Supporter/Diamond/image3.png",
            price: 595000,
            discount: 0,
            finalPrice: 595000,
            handling: 0,
            class: "S",
          },
          {
            name: "Truffade Thrax S",
            image: "pictures/Supporter/Diamond/image4.png",
            price: 2950000,
            discount: 0,
            finalPrice: 2950000,
            handling: 0,
            class: "S",
          },
          {
            name: "Benefactor Krieger Type II",
            image: "pictures/Supporter/Diamond/image5.png",
            price: 3050000,
            discount: 0,
            finalPrice: 3050000,
            handling: 0,
            class: "S",
          },
          {
            name: "Benefactor Harmann",
            image: "pictures/Supporter/Diamond/image6.png",
            price: 405005,
            discount: 0,
            finalPrice: 405005,
            handling: 0,
            class: "A",
          },
          {
            name: "Benefactor Schwartze",
            image: "pictures/Supporter/Diamond/image7.png",
            price: 292000,
            discount: 0,
            finalPrice: 292000,
            handling: 0,
            class: "A",
          },
          {
            name: "Pagassi Osiris R",
            image: "pictures/Supporter/Diamond/image8.png",
            price: 3500000,
            discount: 0,
            finalPrice: 3500000,
            handling: 0,
            class: "S",
          },
          {
            name: "Gallivanter Attacker",
            image: "pictures/Supporter/Diamond/image9.png",
            price: 158500,
            discount: 0,
            finalPrice: 158500,
            handling: 0,
            class: "A",
          },
          {
            name: "Grotti Itali RSX Roadster",
            image: "pictures/Supporter/Diamond/image10.png",
            price: 2750000,
            discount: 1,
            finalPrice: 2722500,
            handling: 0,
            class: "S",
          },
          {
            name: "Grotti Milano",
            image: "pictures/Supporter/Diamond/image11.png",
            price: 695000,
            discount: 0,
            finalPrice: 695000,
            handling: 0,
            class: "S",
          },
          {
            name: "Huntley R",
            image: "pictures/Supporter/Diamond/image12.png",
            price: 875000,
            discount: 0,
            finalPrice: 875000,
            handling: 0,
            class: "A",
          },
        ],
      },
      {
        label: "Platinum",
        vehicles: [
          {
            name: "Invetero D10 WB",
            image: "pictures/Supporter/Platinum/image1.png",
            price: 485000,
            discount: 0,
            finalPrice: 485000,
            handling: 0,
            class: "S",
          },
          {
            name: "Pegassi Infernus Classic C",
            image: "pictures/Supporter/Platinum/image2.png",
            price: 1525000,
            discount: 0,
            finalPrice: 1525000,
            handling: 0,
            class: "S",
          },
          {
            name: "Enus Jubilee Custom",
            image: "pictures/Supporter/Platinum/image3.png",
            price: 875000,
            discount: 0,
            finalPrice: 875000,
            handling: 0,
            class: "A",
          },
        ],
      },
    ],
  },
];

let currentSearchTerm = "";
let activeVehicle = null;
let currentUser = null; // Holds the currently authenticated user object

const POST_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwaiCMdCgYry3PZH22EmtOGchcfXzg14TlISqQPdkKB5IDitztO3WT9lleVobhLlkTdZA/exec";
const POST_ENDPOINT_TEST_DRIVES =
  "https://script.google.com/macros/s/AKfycbzE-LEaH0fzARCxizDJd6oOLSdqiNOjH5p7qIoxvgkW3RJHQEEv_jDVzS82myL7i8aIxQ/exec";

async function postJsonData(payload, endpoint) {
  const target = endpoint?.trim();
  if (!target) {
    return { skipped: true };
  }

  await fetch(target, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return { success: true };
}

function injectDynamicUISystems() {
  // 1. Inject Styles for the overlay & toast so it works without touching the original HTML
  const dynamicStyles = document.createElement("style");
  dynamicStyles.innerHTML = `
    .custom-login-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(10, 10, 15, 0.9); display: flex; justify-content: center; align-items: center;
      z-index: 999999; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; font-family: sans-serif;
    }
    .custom-login-overlay.active {
      opacity: 1; pointer-events: auto;
    }
    .custom-login-box {
      background: #1e1e24; padding: 2rem; border-radius: 12px; width: 90%; max-width: 400px;
      color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.8); border: 1px solid #333;
    }
    .custom-login-box h2 { margin-top: 0; font-size: 1.5rem; color: #fff; }
    .custom-login-box p { font-size: 0.85rem; color: #aaa; margin-bottom: 20px; line-height: 1.4; }
    .custom-login-box select, .custom-login-box input {
      width: 100%; padding: 12px; margin: 8px 0; border-radius: 6px; border: 1px solid #444; 
      background: #111; color: white; box-sizing: border-box; font-size: 14px;
    }
    .custom-login-box button {
      width: 100%; padding: 12px; margin-top: 15px; border: none; border-radius: 6px;
      background: #2ecc71; color: #000; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.2s;
    }
    .custom-login-box button:hover { background: #27ae60; }
    .custom-login-close { text-align: right; cursor: pointer; color: #666; font-size: 18px; margin-bottom: -15px; font-weight: bold;}
    .custom-login-close:hover { color: #fff; }
    .custom-login-error { color: #e74c3c; font-size: 0.85rem; display: none; margin-top: 5px; font-weight: bold; }
    
    .custom-toast-container { position: fixed; bottom: 20px; right: 20px; z-index: 9999999; display: flex; flex-direction: column; gap: 10px; }
    .custom-toast { background: #2c3e50; color: white; padding: 15px 20px; border-radius: 8px; font-family: sans-serif; font-size: 14px; font-weight: 500; opacity: 0; transform: translateY(10px); transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.3); border-left: 4px solid #2ecc71; }
    .custom-toast.error-toast { border-left-color: #e74c3c; background: #342222; }
    .custom-toast.warning-toast { border-left-color: #f1c40f; background: #332d18; }
    .custom-toast.show { opacity: 1; transform: translateY(0); }
  `;
  document.head.appendChild(dynamicStyles);

  // 2. Inject The HTML Overlay for Login
  const overlay = document.createElement("div");
  overlay.className = "custom-login-overlay";
  overlay.id = "custom-login-overlay";

  // De rosterOptions lus is volledig verwijderd omdat we de dropdown niet meer renderen.

  overlay.innerHTML = `
    <div class="custom-login-box">
        <h2>Staff Login</h2>
        <p>You must authenticate your staff profile to perform sales operations and process customer test drives.</p>
        <form id="custom-login-form">
            <!-- De select dropdown is hier verwijderd zodat de medewerkerslijst onzichtbaar is -->
            <input type="text" id="login-user" placeholder="Username" required />
            <input type="password" id="login-pass" placeholder="Password" required />
            <div id="login-error" class="custom-login-error">Access Denied: Invalid Credentials</div>
            <button type="submit">Authenticate</button>
        </form>
    </div>
`;
  document.body.appendChild(overlay);

  // 3. Inject Toast Container
  const toastContainer = document.createElement("div");
  toastContainer.id = "custom-toast-container";
  toastContainer.className = "custom-toast-container";
  document.body.appendChild(toastContainer);

  // 4. Attach form logic
  document
    .getElementById("custom-login-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const u = document
        .getElementById("login-user")
        .value.trim()
        .toLowerCase();
      const p = document.getElementById("login-pass").value;
      const match = roster.find(
        (user) => user.username.toLowerCase() === u && user.password === p,
      );

      if (match) {
        currentUser = match;
        sessionStorage.setItem("loggedInUser", JSON.stringify(match));
        document.getElementById("login-error").style.display = "none";
        closeDynamicLogin();
        showDynamicToast(
          "Authentication Successful. Welcome, " + match.fullname + "!",
        );

        // If the sell modal happens to be open, pre-fill the name
        const salespersonEl = document.getElementById("sell-salesperson");
        if (salespersonEl) {
          salespersonEl.value = match.fullname;
          salespersonEl.disabled = true; // Lock it to prevent spoofing
        }
      } else {
        document.getElementById("login-error").style.display = "block";
      }
    });
}

// Global scope helpers for dynamic UI
window.closeDynamicLogin = function () {
  document.getElementById("custom-login-overlay").classList.remove("active");
};

window.openDynamicLogin = function () {
  document.getElementById("custom-login-overlay").classList.add("active");
  document.getElementById("login-error").style.display = "none";
  document.getElementById("login-user").value = "";
  document.getElementById("login-pass").value = "";
  document.getElementById("roster-select").value = "";
};

window.autoFillLogin = function () {
  const sel = document.getElementById("roster-select").value;
  const match = roster.find((u) => u.username === sel);
  if (match) {
    document.getElementById("login-user").value = match.username;
    document.getElementById("login-pass").value = match.password;
  }
};

function showDynamicToast(msg, type = "success") {
  const c = document.getElementById("custom-toast-container");
  if (!c) return;
  const t = document.createElement("div");
  t.className = `custom-toast ${type}-toast`;
  t.textContent = msg;
  c.appendChild(t);

  // Trigger animation
  setTimeout(() => t.classList.add("show"), 10);

  // Remove after duration
  setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => t.remove(), 300);
  }, 4000);
}

function checkSession() {
  const stored = sessionStorage.getItem("loggedInUser");
  if (stored) {
    currentUser = JSON.parse(stored);
  } else {
    // If NO user is logged in, AUTO POPUP the login box slightly after page load
    setTimeout(() => {
      openDynamicLogin();
    }, 600);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  injectDynamicUISystems(); // Build out the auth systems seamlessly
  displayCategories();
  setupSearch();
  setupModal();
  renderLogButtons();

  checkSession(); // Validates user and pops up the login box if needed!
});

function displayCategories(searchTerm = "") {
  const inventoryGrid = document.getElementById("inventory-grid");
  if (!inventoryGrid) return; // safeguard
  inventoryGrid.innerHTML = "";
  const normalizedTerm = searchTerm.trim().toLowerCase();

  const filteredCategories = categories.reduce((acc, category) => {
    if (!normalizedTerm) {
      acc.push(category);
      return acc;
    }

    if (category.groups && category.groups.length) {
      const groups = category.groups
        .map((group) => ({
          ...group,
          vehicles: group.vehicles.filter((vehicle) =>
            vehicle.name.toLowerCase().includes(normalizedTerm),
          ),
        }))
        .filter((group) => group.vehicles.length > 0);

      if (groups.length) {
        acc.push({ ...category, groups });
      }
    } else {
      const vehicles = category.vehicles.filter((vehicle) =>
        vehicle.name.toLowerCase().includes(normalizedTerm),
      );
      if (vehicles.length) {
        acc.push({ ...category, vehicles });
      }
    }

    return acc;
  }, []);

  if (filteredCategories.length === 0) {
    const noResults = document.createElement("p");
    noResults.className = "category-empty";
    noResults.textContent = "No vehicles match your search.";
    inventoryGrid.appendChild(noResults);
    return;
  }

  filteredCategories.forEach((category) => {
    const section = document.createElement("div");
    section.className = "category-section";
    section.id = `category-${category.id}`;

    const header = document.createElement("div");
    header.className = "category-header";
    header.innerHTML = `<h3 class="category-title">${category.label}</h3>`;
    section.appendChild(header);

    if (
      (!category.vehicles || category.vehicles.length === 0) &&
      (!category.groups || category.groups.length === 0)
    ) {
      const empty = document.createElement("p");
      empty.className = "category-empty";
      empty.textContent = "No vehicles available in this category yet.";
      section.appendChild(empty);
    } else if (category.groups && category.groups.length) {
      category.groups.forEach((group) => {
        const groupHeader = document.createElement("div");
        groupHeader.className = "group-header";
        groupHeader.innerHTML = `<h4 class="group-title">${group.label}</h4>`;
        section.appendChild(groupHeader);

        if (!group.vehicles || group.vehicles.length === 0) {
          const empty = document.createElement("p");
          empty.className = "category-empty";
          empty.textContent = "No vehicles available in this section yet.";
          section.appendChild(empty);
        } else {
          const grid = document.createElement("div");
          grid.className = "vehicle-grid";
          group.vehicles.forEach((vehicle) => {
            grid.appendChild(createVehicleCard(vehicle));
          });
          section.appendChild(grid);
        }
      });
    } else {
      const grid = document.createElement("div");
      grid.className = "vehicle-grid";
      category.vehicles.forEach((vehicle) => {
        grid.appendChild(createVehicleCard(vehicle));
      });
      section.appendChild(grid);
    }

    inventoryGrid.appendChild(section);
  });
}

function renderLogButtons() {
  const heroContent = document.querySelector(".hero-content");
  if (!heroContent) return;
  const existing = document.getElementById("admin-log-button");
  if (existing) return;

  const btnGroup = document.createElement("div");
  btnGroup.id = "admin-log-button";
  btnGroup.className = "admin-btn-group";

  const salesBtn = document.createElement("button");
  salesBtn.className = "admin-log-button";
  salesBtn.textContent = "Sales Log";
  salesBtn.addEventListener("click", () => {
    window.location.href = "sales-log.html";
  });

  const testDriveBtn = document.createElement("button");
  testDriveBtn.className = "admin-log-button test-drive-nav-btn";
  testDriveBtn.textContent = "Test Drives Log";
  testDriveBtn.addEventListener("click", () => {
    window.location.href = "test-drive.html";
  });

  btnGroup.appendChild(salesBtn);
  btnGroup.appendChild(testDriveBtn);
  heroContent.appendChild(btnGroup);
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;
  searchInput.addEventListener("input", (event) => {
    currentSearchTerm = event.target.value;
    displayCategories(currentSearchTerm);
  });
}

function persistSaleLog(entry) {
  // Save to localStorage
  const salesLogs = JSON.parse(localStorage.getItem("salesLogs") || "[]");
  const record = {
    date: new Date().toLocaleString("en-GB"),
    ...entry,
  };
  salesLogs.push(record);
  localStorage.setItem("salesLogs", JSON.stringify(salesLogs));

  const rawText = localStorage.getItem("salesLogText");
  if (rawText !== null) {
    const separator = rawText.trim() ? "\n\n----\n\n" : "";
    localStorage.setItem(
      "salesLogText",
      rawText + separator + (record.rawText || ""),
    );
  }

  // Sync to Google Sheets if endpoint is configured
  const payload = {
    date: record.date,
    salesperson: record.salesperson,
    customer: record.customer,
    id_number: record.idNumber,
    vehicle: record.vehicle,
    sell_price: formatCurrency(record.sellPrice),
    discount: record.discountPercent + "%",
    license_plate: record.licensePlate,
  };

  if (POST_ENDPOINT.trim()) {
    postJsonData(payload, POST_ENDPOINT)
      .then(() => console.log("Sale synced to Google Sheets."))
      .catch((error) => console.error("Error saving to Google Sheets:", error));
  }
}

function createVehicleCard(vehicle) {
  const card = document.createElement("div");
  card.className = "vehicle-card";

  card.innerHTML = `
        <img
            src="${vehicle.image}"
            alt="${vehicle.name}"
            class="vehicle-image"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22250%22%3E%3Crect fill=%22%232d2d2d%22 width=%22400%22 height=%22250%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2218%22 fill=%22%23b8b8b8%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EImage Not Available%3C/text%3E%3C/svg%3E'"
        />
        <div class="vehicle-info">
            <h3 class="vehicle-name">${vehicle.name}</h3>
            <p class="vehicle-price">${formatCurrency(vehicle.finalPrice)}</p>
        </div>
    `;

  card.addEventListener("click", () => openModal(vehicle));
  return card;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function setupModal() {
  const modal = document.getElementById("vehicle-modal");
  if (!modal) return; // ensure modals exist on page
  const closeBtn = modal.querySelector(".close-btn");
  const discountSelect = document.getElementById("modal-discount-select");
  const sellButton = document.getElementById("sell-car-button");
  const sellModal = document.getElementById("sell-modal");
  const sellClose = sellModal ? sellModal.querySelector(".sell-close") : null;
  const sellForm = document.getElementById("sell-form");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  if (sellButton) {
    sellButton.addEventListener("click", openSellModal);
  }

  if (sellClose) {
    sellClose.addEventListener("click", closeSellModal);
  }

  if (sellModal) {
    sellModal.addEventListener("click", (e) => {
      if (e.target === sellModal) closeSellModal();
    });
  }

  if (sellForm) {
    sellForm.addEventListener("submit", submitSellForm);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (sellModal && sellModal.classList.contains("active")) {
        closeSellModal();
      } else if (
        document
          .getElementById("custom-login-overlay")
          .classList.contains("active")
      ) {
        closeDynamicLogin();
      } else {
        closeModal();
      }
    }
  });

  if (discountSelect) {
    discountSelect.addEventListener("change", () => {
      if (activeVehicle) {
        updateModalDiscount(Number(discountSelect.value));
      }
    });
  }
}

function openModal(vehicle) {
  activeVehicle = vehicle;
  const modal = document.getElementById("vehicle-modal");
  const discountSelect = document.getElementById("modal-discount-select");

  if (!modal) return;

  const modalImg = document.getElementById("modal-image");
  if (modalImg) modalImg.src = vehicle.image;

  const modalName = document.getElementById("modal-name");
  if (modalName) modalName.textContent = vehicle.name;

  const modalPrice = document.getElementById("modal-price");
  if (modalPrice) modalPrice.textContent = formatCurrency(vehicle.price);

  const modalClass = document.getElementById("modal-class");
  if (modalClass) modalClass.textContent = vehicle.class;

  if (discountSelect) {
    discountSelect.value = vehicle.discount || 0;
    updateModalDiscount(Number(discountSelect.value));
  }

  // Inject Test Drive button if not already present
  const sellButton = document.getElementById("sell-car-button");
  if (sellButton && !document.getElementById("test-drive-button")) {
    const tdButton = document.createElement("button");
    tdButton.id = "test-drive-button";
    tdButton.className = "test-drive-button";
    tdButton.textContent = "Test Drive ($500)";
    sellButton.parentNode.insertBefore(tdButton, sellButton.nextSibling);
    tdButton.addEventListener("click", handleTestDriveSubmit);
  }

  modal.classList.add("active");
}

async function handleTestDriveSubmit() {
  if (!activeVehicle) return;

  // Intercept Test Drives without login!
  if (!currentUser) {
    closeModal();
    openDynamicLogin();
    showDynamicToast("Please authenticate to log test drives.", "warning");
    return;
  }

  const payload = {
    date: new Date().toLocaleString("en-GB"),
    salesperson: currentUser.fullname, // Force authenticated user
    vehicle: activeVehicle.name,
    price: 500,
  };

  const tdButton = document.getElementById("test-drive-button");
  const originalText = tdButton?.textContent || "Saving...";
  if (tdButton) {
    tdButton.textContent = "Saving...";
    tdButton.disabled = true;
  }

  // Save locally
  const localDrives = JSON.parse(
    localStorage.getItem("testDrivesLogs") || "[]",
  );
  localDrives.push(payload);
  localStorage.setItem("testDrivesLogs", JSON.stringify(localDrives));

  try {
    await postJsonData(payload, POST_ENDPOINT_TEST_DRIVES);
    console.log("Test drive synced to Google Sheets.");
    if (tdButton) {
      tdButton.textContent = "Logged! ✓";
      tdButton.style.backgroundColor = "#2ecc71";
    }
  } catch (err) {
    console.error("Test drive sync failed:", err);
    if (tdButton) {
      tdButton.textContent = "Saved Locally";
      tdButton.style.backgroundColor = "#f39c12";
    }
  } finally {
    setTimeout(() => {
      if (tdButton) {
        tdButton.textContent = originalText;
        tdButton.style.backgroundColor = "";
        tdButton.disabled = false;
      }
      closeModal();
    }, 1200);
  }
}

function openSellModal() {
  // Intercept Sell Modal without login!
  if (!currentUser) {
    closeModal();
    openDynamicLogin();
    showDynamicToast(
      "Authorization Required: Please log in to make a sale.",
      "error",
    );
    return;
  }

  const vehicleModal = document.getElementById("vehicle-modal");
  const sellModal = document.getElementById("sell-modal");
  const confirmation = document.getElementById("sell-confirmation");

  const salespersonEl = document.getElementById("sell-salesperson");
  if (salespersonEl) {
    // PREFILL the authentic user name directly to the form and lock it
    salespersonEl.value = currentUser.fullname;
    salespersonEl.disabled = true; // prevent forgery
  }

  ["sell-customer", "sell-id", "sell-plate"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  if (confirmation) confirmation.textContent = "";
  if (vehicleModal) vehicleModal.classList.remove("active");
  if (sellModal) sellModal.classList.add("active");
}

function closeSellModal() {
  const sellModal = document.getElementById("sell-modal");
  if (sellModal) sellModal.classList.remove("active");
}

function isInvalidLicensePlate(value) {
  if (!value) return true;
  const normalized = value.trim().toLowerCase();
  const invalidPlateValues = new Set([
    "",
    "empty",
    "none",
    "n/a",
    "na",
    "unknown",
    "blank",
    "null",
    "undefined",
  ]);
  if (invalidPlateValues.has(normalized)) return true;
  return /^[\s\W_-]+$/.test(value);
}

async function submitSellForm(event) {
  event.preventDefault();

  // Guard rails
  if (!currentUser) {
    closeSellModal();
    openDynamicLogin();
    showDynamicToast("Session expired, please login.", "error");
    return;
  }

  // Force assignment from the authorized active user
  const salesperson = currentUser.fullname;

  const customer = document.getElementById("sell-customer").value.trim();
  const idNumber = document.getElementById("sell-id").value.trim();
  const licensePlate = document.getElementById("sell-plate").value.trim();
  const confirmation = document.getElementById("sell-confirmation");

  if (!salesperson || !customer || !idNumber) {
    if (confirmation) {
      confirmation.textContent =
        "Please complete every field before confirming the sale.";
    }
    return;
  }

  if (isInvalidLicensePlate(licensePlate)) {
    if (confirmation) {
      confirmation.textContent = "Check vehicle registration for plate";
    }
    return;
  }

  const discountPercent = Number(
    document.getElementById("modal-discount-select").value || 0,
  );
  const sellPriceValue = Math.round(
    activeVehicle.price * (1 - discountPercent / 100),
  );
  const saleDate = new Date().toISOString();
  const saleText = `\`\`\`
Date: ${saleDate}
Salesperson: ${salesperson}
Customer name: ${customer}
ID Number: ${idNumber}
Vehicle Sold: ${activeVehicle ? activeVehicle.name : "Unknown"}
MSRP (Base price): ${formatCurrency(activeVehicle.price)}
Sell price: ${formatCurrency(sellPriceValue)}
Discount given: ${discountPercent}%
License plate: ${licensePlate}
\`\`\``;

  persistSaleLog({
    date: saleDate,
    salesperson,
    customer,
    idNumber,
    vehicle: activeVehicle ? activeVehicle.name : "Unknown",
    basePrice: activeVehicle ? activeVehicle.price : 0,
    sellPrice: sellPriceValue,
    discountPercent,
    licensePlate,
    rawText: saleText,
  });

  if (confirmation) {
    confirmation.textContent =
      "Sale submitted successfully! Details copied to clipboard.";
  }

  navigator.clipboard
    .writeText(saleText)
    .then(() => {
      if (
        confirmation &&
        !confirmation.textContent?.includes("Details copied")
      ) {
        confirmation.textContent += " Details copied to clipboard.";
      }
      showDynamicToast("Sale fully registered!", "success");
    })
    .catch(() => {
      if (confirmation && !confirmation.textContent?.includes("copied")) {
        confirmation.textContent = "Sale submitted, but clipboard copy failed.";
      }
    });

  setTimeout(() => {
    closeSellModal();
  }, 1800);
}

function updateModalDiscount(discountPercent) {
  const discountRow = document.getElementById("discount-row");
  if (!discountRow) return;

  const finalPrice = Math.round(
    activeVehicle.price * (1 - discountPercent / 100),
  );

  const finalPriceEl = document.getElementById("modal-final-price");
  if (finalPriceEl) finalPriceEl.textContent = formatCurrency(finalPrice);

  if (discountPercent > 0) {
    const discEl = document.getElementById("modal-discount");
    if (discEl) discEl.textContent = discountPercent + "%";
    discountRow.style.display = "flex";
  } else {
    discountRow.style.display = "none";
  }
}

function closeModal() {
  const modal = document.getElementById("vehicle-modal");
  if (modal) modal.classList.remove("active");
}
