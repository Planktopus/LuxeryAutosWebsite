// ─── ROSTER DEFINITIONS ───────────────────────────────────────────
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
  { username: "rumi", password: "Rumi264", fullname: "Rumi Valentine" },
  { username: "sallie", password: "Sallie193", fullname: "Sallie Sparquelz" },
  { username: "trainee", password: "Trainee123", fullname: "Trainee Employee" },
  {
    username: "luxery",
    password: "JohnnyIsAmazing67",
    fullname: "Luxery Autos",
  },
];

// ─── VEHICLE INVENTORY DATA ───────────────────────────────────────
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

// ─── STATE MANAGEMENT ─────────────────────────────────────────────
let currentSearchTerm = "";
let activeVehicle = null;
let currentUser = null; // Holds authenticated active user

// ─── ENDPOINTS ────────────────────────────────────────────────────
const POST_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwaiCMdCgYry3PZH22EmtOGchcfXzg14TlISqQPdkKB5IDitztO3WT9lleVobhLlkTdZA/exec";
const POST_ENDPOINT_TEST_DRIVES =
  "https://script.google.com/macros/s/AKfycbzE-LEaH0fzARCxizDJd6oOLSdqiNOjH5p7qIoxvgkW3RJHQEEv_jDVzS82myL7i8aIxQ/exec";

// ─── CLIPBOARD COMPATIBILITY WRAPPER ─────────────────────────────
function copyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  let success = false;
  try {
    success = document.execCommand("copy");
  } catch (err) {
    console.error("Fallback clipboard error:", err);
  }
  document.body.removeChild(textArea);
  return success;
}

// ─── CUSTOM ALERT/TOAST NOTIFICATION SYSTEM ──────────────────────
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `p-4 rounded-xl border flex items-center justify-between space-x-3 shadow-xl transform translate-y-2 opacity-0 transition-all duration-300 ${
    type === "success"
      ? "bg-emerald-950/90 border-emerald-500/30 text-emerald-200"
      : type === "error"
        ? "bg-rose-950/90 border-rose-500/30 text-rose-200"
        : "bg-amber-950/90 border-amber-500/30 text-amber-200"
  }`;

  let icon = '<i class="fa-solid fa-circle-check text-lg"></i>';
  if (type === "error")
    icon = '<i class="fa-solid fa-circle-exclamation text-lg"></i>';
  if (type === "warning")
    icon = '<i class="fa-solid fa-triangle-exclamation text-lg"></i>';

  toast.innerHTML = `
    <div class="flex items-center space-x-3">
      ${icon}
      <span class="text-sm font-semibold">${message}</span>
    </div>
    <button class="text-xs opacity-50 hover:opacity-100 transition-opacity" onclick="this.parentElement.remove()"><i class="fa-solid fa-xmark"></i></button>
  `;

  container.appendChild(toast);

  // Force trigger animation
  setTimeout(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  }, 50);

  // Auto dismiss after 4 seconds
  setTimeout(() => {
    toast.classList.add("translate-y-2", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ─── API SEND ─────────────────────────────────────────────────────
async function postJsonData(payload, endpoint) {
  const target = endpoint?.trim();
  if (!target) return { skipped: true };

  await fetch(target, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return { success: true };
}

// ─── SESSION & AUTH CONTROLLER ────────────────────────────────────
function checkSession() {
  const stored = sessionStorage.getItem("loggedInUser");
  if (stored) {
    currentUser = JSON.parse(stored);
  } else {
    // Automatically pop up the staff login modal on startup to prompt the user
    setTimeout(() => {
      openLoginModal();
      showToast(
        "Welcome to Luxery Autos! Please authenticate using your staff credentials to proceed.",
        "warning",
      );
    }, 800);
  }
  renderAuthUI();
}

function renderAuthUI() {
  const container = document.getElementById("auth-status-container");
  if (!container) return;

  if (currentUser) {
    container.innerHTML = `
      <div class="flex items-center space-x-3 text-sm">
        <span class="h-2.5 w-2.5 rounded-full bg-brand-500 block"></span>
        <span class="text-slate-300 font-medium">Logged in: <strong class="text-white">${currentUser.fullname}</strong></span>
        <button onclick="logoutStaff()" class="text-xs bg-slate-800 hover:bg-slate-700 hover:text-white px-2.5 py-1 rounded-lg border border-slate-700 text-slate-400 font-bold transition-all">
          Log out
        </button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="flex items-center space-x-3">
        <span class="h-2.5 w-2.5 rounded-full bg-rose-500 block"></span>
        <span class="text-slate-400 text-sm">Not authenticated</span>
        <button onclick="openLoginModal()" class="text-xs bg-brand-500 hover:bg-brand-600 text-slate-950 font-extrabold px-3 py-1.5 rounded-lg shadow-lg shadow-brand-500/10 transition-all">
          Staff Login
        </button>
      </div>
    `;
  }
}

function openLoginModal() {
  const modal = document.getElementById("login-modal");
  const card = document.getElementById("login-modal-card");
  if (!modal || !card) return;

  document.getElementById("login-error").classList.add("hidden");
  document.getElementById("login-username").value = "";
  document.getElementById("login-password").value = "";

  modal.classList.remove("pointer-events-none");
  modal.classList.add("opacity-100");
  card.classList.remove("scale-95");
  card.classList.add("scale-100");
}

// Safely configure and shut login portal
function closeLoginModal() {
  const modal = document.getElementById("login-modal");
  const card = document.getElementById("login-modal-card");
  if (!modal || !card) return;

  modal.classList.add("pointer-events-none");
  modal.classList.remove("opacity-100");
  card.classList.add("scale-95");
  card.classList.remove("scale-100");
}

function submitLoginForm(event) {
  event.preventDefault();
  const userVal = document
    .getElementById("login-username")
    .value.trim()
    .toLowerCase();
  const passVal = document.getElementById("login-password").value;

  const profile = roster.find(
    (u) => u.username.toLowerCase() === userVal && u.password === passVal,
  );
  if (profile) {
    currentUser = profile;
    sessionStorage.setItem("loggedInUser", JSON.stringify(profile));
    showToast(`Successfully authenticated as ${profile.fullname}!`, "success");
    closeLoginModal();
    renderAuthUI();
  } else {
    document.getElementById("login-error").classList.remove("hidden");
    showToast("Access Denied: Check credentials.", "error");
  }
}

function logoutStaff() {
  currentUser = null;
  sessionStorage.removeItem("loggedInUser");
  showToast("Logged out successfully.", "warning");
  renderAuthUI();
}

// Open staff roster login shortcut tool helper
function openRosterCheatSheet() {
  const modal = document.getElementById("roster-cheat-sheet");
  const card = document.getElementById("roster-cheat-card");
  const list = document.getElementById("cheat-sheet-list");
  if (!modal || !card || !list) return;

  list.innerHTML = "";
  roster.forEach((member) => {
    const item = document.createElement("button");
    item.className =
      "w-full text-left p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800/80 transition-all flex items-center justify-between group";
    item.innerHTML = `
      <div>
        <div class="text-xs font-bold text-white group-hover:text-brand-500 transition-colors">${member.fullname}</div>
        <div class="text-[10px] text-slate-500">Username: <span class="text-slate-300 font-semibold">${member.username}</span></div>
      </div>
      <span class="text-[10px] bg-slate-900 border border-slate-800 text-slate-400 px-2 py-1 rounded">Pass: ${member.password}</span>
    `;
    item.addEventListener("click", () => {
      document.getElementById("login-username").value = member.username;
      document.getElementById("login-password").value = member.password;
      closeRosterCheatSheet();
      openLoginModal();
      showToast(
        `Prepared credentials for ${member.fullname}. Click Authenticate.`,
        "warning",
      );
    });
    list.appendChild(item);
  });

  modal.classList.remove("pointer-events-none");
  modal.classList.add("opacity-100");
  card.classList.remove("scale-95");
  card.classList.add("scale-100");
}

function closeRosterCheatSheet() {
  const modal = document.getElementById("roster-cheat-sheet");
  const card = document.getElementById("roster-cheat-card");
  if (!modal || !card) return;

  modal.classList.add("pointer-events-none");
  modal.classList.remove("opacity-100");
  card.classList.add("scale-95");
  card.classList.remove("scale-100");
}

// ─── INITIALIZATION ───────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  checkSession();
  displayCategories();
  setupSearch();
  setupModal();
  renderLogButtons();
});

// ─── RENDER CATALOG ───────────────────────────────────────────────
function displayCategories(searchTerm = "") {
  const inventoryGrid = document.getElementById("inventory-grid");
  if (!inventoryGrid) return;

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
    inventoryGrid.innerHTML = `
      <div class="text-center py-16 text-slate-500">
        <i class="fa-solid fa-folder-open text-4xl mb-3 block opacity-30"></i>
        <p>No vehicles match your search parameter "${searchTerm}".</p>
      </div>
    `;
    return;
  }

  filteredCategories.forEach((category) => {
    const section = document.createElement("div");
    section.className =
      "category-section bg-slate-950/20 p-6 sm:p-8 rounded-3xl border border-slate-900/60 shadow-xl";
    section.id = `category-${category.id}`;

    const header = document.createElement("div");
    header.className =
      "category-header border-b border-slate-900 pb-4 mb-6 flex items-center justify-between";
    header.innerHTML = `
      <h3 class="category-title text-xl sm:text-2xl font-black text-white tracking-wide">${category.label} Collection</h3>
      <span class="text-xs bg-slate-900 text-slate-500 px-3 py-1 rounded-full border border-slate-800 font-semibold uppercase">Category Container</span>
    `;
    section.appendChild(header);

    if (category.groups && category.groups.length) {
      category.groups.forEach((group) => {
        const groupHeader = document.createElement("div");
        groupHeader.className =
          "group-header mt-6 mb-4 flex items-center space-x-2";
        groupHeader.innerHTML = `
          <span class="h-1.5 w-1.5 rounded-full bg-brand-gold"></span>
          <h4 class="group-title text-sm font-extrabold text-brand-gold uppercase tracking-wider">${group.label} Support Tier</h4>
        `;
        section.appendChild(groupHeader);

        const grid = document.createElement("div");
        grid.className =
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";
        group.vehicles.forEach((vehicle) => {
          grid.appendChild(createVehicleCard(vehicle));
        });
        section.appendChild(grid);
      });
    } else {
      const grid = document.createElement("div");
      grid.className =
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";
      category.vehicles.forEach((vehicle) => {
        grid.appendChild(createVehicleCard(vehicle));
      });
      section.appendChild(grid);
    }

    inventoryGrid.appendChild(section);
  });
}

function createVehicleCard(vehicle) {
  const card = document.createElement("div");
  card.className =
    "glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col group relative";

  const badgeColor =
    vehicle.class === "S"
      ? "bg-rose-500 text-white"
      : vehicle.class === "A"
        ? "bg-amber-500 text-slate-950"
        : "bg-slate-700 text-white";

  card.innerHTML = `
    <div class="relative h-44 w-full bg-slate-950 flex items-center justify-center overflow-hidden">
      <span class="absolute top-3 right-3 z-10 ${badgeColor} text-[10px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded-md shadow-md">${vehicle.class} Class</span>
      <img
        src="${vehicle.image}"
        alt="${vehicle.name}"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-0"
        onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22250%22%3E%3Crect fill=%22%23111827%22 width=%22400%22 height=%22250%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-family=%22system-ui%22 font-size=%2214%22 font-weight=%22bold%22 fill=%22%234b5563%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${vehicle.name}%3C/text%3E%3C/svg%3E'"
      />
    </div>
    <div class="p-4 flex-grow flex flex-col justify-between">
      <h3 class="text-sm font-extrabold text-white tracking-tight group-hover:text-brand-500 transition-colors line-clamp-1">${vehicle.name}</h3>
      <div class="flex items-center justify-between mt-2 pt-2 border-t border-slate-850">
        <span class="text-xs text-slate-400 font-medium">MSRP Quote</span>
        <span class="text-sm font-black text-brand-500">${formatCurrency(vehicle.finalPrice)}</span>
      </div>
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

// ─── LOG BUTTONS IN HERO ─────────────────────────────────────────
function renderLogButtons() {
  const container = document.getElementById("admin-log-button");
  if (!container) return;
  container.innerHTML = "";

  const salesBtn = document.createElement("button");
  salesBtn.className =
    "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-4 py-2.5 rounded-xl border border-slate-800 text-xs font-bold transition-all text-center flex items-center justify-center space-x-2";
  salesBtn.innerHTML = `<i class="fa-solid fa-list-check text-brand-500"></i> <span>Sales Log</span>`;
  salesBtn.addEventListener("click", () => viewLogs("sales"));

  const testDriveBtn = document.createElement("button");
  testDriveBtn.className =
    "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-4 py-2.5 rounded-xl border border-slate-800 text-xs font-bold transition-all text-center flex items-center justify-center space-x-2";
  testDriveBtn.innerHTML = `<i class="fa-solid fa-gauge-high text-brand-500"></i> <span>Drives Log</span>`;
  testDriveBtn.addEventListener("click", () => viewLogs("drives"));

  container.appendChild(salesBtn);
  container.appendChild(testDriveBtn);
}

// Interactive custom modal renderer to review sheet listings locally
function viewLogs(type) {
  const modal = document.getElementById("logs-modal");
  const card = document.getElementById("logs-modal-card");
  const title = document.getElementById("logs-modal-title");
  const renderArea = document.getElementById("logs-render-area");
  if (!modal || !card || !title || !renderArea) return;

  if (type === "sales") {
    title.innerHTML = `Sales Log Sheet <span class="ml-2 text-xs bg-brand-500/10 text-brand-500 px-2.5 py-0.5 rounded-full border border-brand-500/20">Synced Storage</span>`;
    const localLogs = JSON.parse(localStorage.getItem("salesLogs") || "[]");

    if (localLogs.length === 0) {
      renderArea.innerHTML = `
        <div class="text-center py-12 text-slate-500">
          <i class="fa-solid fa-receipt text-3xl opacity-35 mb-2 block"></i>
          No logged sales found in session memory. Complete a transaction form.
        </div>`;
    } else {
      renderArea.innerHTML = localLogs
        .map(
          (log, i) => `
        <div class="p-4 rounded-xl bg-slate-950 border border-slate-850 shadow space-y-2 text-sm">
          <div class="flex items-center justify-between text-xs text-slate-400 border-b border-slate-900 pb-2">
            <span>Record Index #${i + 1}</span>
            <span class="font-mono text-brand-500">${log.date}</span>
          </div>
          <div class="grid grid-cols-2 gap-y-2">
            <div><span class="text-slate-500 block text-[10px] font-bold uppercase">Vehicle Sold</span><strong class="text-white">${log.vehicle}</strong></div>
            <div><span class="text-slate-500 block text-[10px] font-bold uppercase">Salesperson (Roster Active)</span><span class="text-emerald-400 font-semibold">${log.salesperson}</span></div>
            <div><span class="text-slate-500 block text-[10px] font-bold uppercase">Customer Profile</span><span class="text-slate-300">${log.customer} (ID: ${log.idNumber})</span></div>
            <div><span class="text-slate-500 block text-[10px] font-bold uppercase">Plate / Reg</span><span class="text-slate-300 uppercase font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">${log.licensePlate}</span></div>
            <div><span class="text-slate-500 block text-[10px] font-bold uppercase">Sale Total</span><strong class="text-white">${formatCurrency(log.sellPrice)}</strong></div>
            <div><span class="text-slate-500 block text-[10px] font-bold uppercase">Discount Given</span><span class="text-rose-400">${log.discountPercent}%</span></div>
          </div>
        </div>
      `,
        )
        .join("");
    }
  } else {
    title.innerHTML = `Showroom Test Drives Sheet <span class="ml-2 text-xs bg-brand-500/10 text-brand-500 px-2.5 py-0.5 rounded-full border border-brand-500/20">Active Database</span>`;
    const localDrives = JSON.parse(
      localStorage.getItem("testDrivesLogs") || "[]",
    );

    if (localDrives.length === 0) {
      renderArea.innerHTML = `
        <div class="text-center py-12 text-slate-500">
          <i class="fa-solid fa-road text-3xl opacity-35 mb-2 block"></i>
          No completed test-drives reported on current workstation.
        </div>`;
    } else {
      renderArea.innerHTML = localDrives
        .map(
          (drive, i) => `
        <div class="p-4 rounded-xl bg-slate-950 border border-slate-850 shadow flex items-center justify-between text-sm">
          <div class="space-y-1">
            <span class="text-slate-500 text-xs block">${drive.date}</span>
            <strong class="text-white text-base">${drive.vehicle}</strong>
            <span class="text-slate-400 block text-xs">Logged by: <span class="text-slate-200">${drive.salesperson}</span></span>
          </div>
          <div class="text-right">
            <span class="text-brand-500 font-extrabold text-base block">${formatCurrency(drive.price)} Fee</span>
            <span class="text-[10px] text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 rounded-full uppercase font-bold">Logged ✓</span>
          </div>
        </div>
      `,
        )
        .join("");
    }
  }

  modal.classList.remove("pointer-events-none");
  modal.classList.add("opacity-100");
  card.classList.remove("scale-95");
  card.classList.add("scale-100");
}

function closeLogsModal() {
  const modal = document.getElementById("logs-modal");
  const card = document.getElementById("logs-modal-card");
  if (!modal || !card) return;

  modal.classList.add("pointer-events-none");
  modal.classList.remove("opacity-100");
  card.classList.add("scale-95");
  card.classList.remove("scale-100");
}

function clearLocalLogs() {
  localStorage.removeItem("salesLogs");
  localStorage.removeItem("testDrivesLogs");
  localStorage.removeItem("salesLogText");
  showToast("Workstation logs cleared successfully.", "warning");
  closeLogsModal();
}

// ─── SEARCH HANDLER ───────────────────────────────────────────────
function setupSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;
  searchInput.addEventListener("input", (event) => {
    currentSearchTerm = event.target.value;
    displayCategories(currentSearchTerm);
  });
}

// ─── MODAL CONTROLLERS ────────────────────────────────────────────
function setupModal() {
  const modal = document.getElementById("vehicle-modal");
  const discountSelect = document.getElementById("modal-discount-select");
  const sellButton = document.getElementById("sell-car-button");
  const sellForm = document.getElementById("sell-form");
  if (!modal) return;

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  if (sellButton) {
    sellButton.addEventListener("click", openSellModal);
  }

  if (sellForm) {
    sellForm.addEventListener("submit", submitSellForm);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const sellModal = document.getElementById("sell-modal");
      const loginModal = document.getElementById("login-modal");
      const logsModal = document.getElementById("logs-modal");
      const rosterModal = document.getElementById("roster-cheat-sheet");

      if (sellModal && sellModal.classList.contains("opacity-100")) {
        closeSellModal();
      } else if (loginModal && loginModal.classList.contains("opacity-100")) {
        closeLoginModal();
      } else if (logsModal && logsModal.classList.contains("opacity-100")) {
        closeLogsModal();
      } else if (rosterModal && rosterModal.classList.contains("opacity-100")) {
        closeRosterCheatSheet();
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
  const card = document.getElementById("vehicle-modal-card");
  const discountSelect = document.getElementById("modal-discount-select");
  if (!modal || !card) return;

  document.getElementById("modal-image").src = vehicle.image;
  document.getElementById("modal-image").alt = vehicle.name;
  document.getElementById("modal-name").textContent = vehicle.name;
  document.getElementById("modal-price").textContent = formatCurrency(
    vehicle.price,
  );
  document.getElementById("modal-class").textContent = vehicle.class;

  const badge = document.getElementById("modal-class-badge");
  if (badge) {
    badge.textContent = `${vehicle.class} CLASS`;
    if (vehicle.class === "S") {
      badge.className =
        "absolute top-4 left-4 z-20 bg-rose-500 text-white font-black px-3 py-1 rounded-lg text-sm tracking-wider shadow-lg";
    } else if (vehicle.class === "A") {
      badge.className =
        "absolute top-4 left-4 z-20 bg-amber-500 text-slate-950 font-black px-3 py-1 rounded-lg text-sm tracking-wider shadow-lg";
    } else {
      badge.className =
        "absolute top-4 left-4 z-20 bg-slate-700 text-white font-black px-3 py-1 rounded-lg text-sm tracking-wider shadow-lg";
    }
  }

  if (discountSelect) {
    discountSelect.value = vehicle.discount || 0;
    updateModalDiscount(Number(discountSelect.value));
  }

  const tdButton = document.getElementById("test-drive-button");
  if (tdButton) {
    tdButton.innerHTML = `<i class="fa-solid fa-road text-slate-400"></i> <span>Test Drive ($500)</span>`;
    const newTdButton = tdButton.cloneNode(true);
    tdButton.parentNode.replaceChild(newTdButton, tdButton);
    newTdButton.addEventListener("click", handleTestDriveSubmit);
  }

  modal.classList.remove("pointer-events-none");
  modal.classList.add("opacity-100");
  card.classList.remove("scale-95");
  card.classList.add("scale-100");
}

function closeModal() {
  const modal = document.getElementById("vehicle-modal");
  const card = document.getElementById("vehicle-modal-card");
  if (modal && card) {
    modal.classList.add("pointer-events-none");
    modal.classList.remove("opacity-100");
    card.classList.add("scale-95");
    card.classList.remove("scale-100");
  }
}

function updateModalDiscount(discountPercent) {
  const discountRow = document.getElementById("discount-row");
  const finalPrice = Math.round(
    activeVehicle.price * (1 - discountPercent / 100),
  );

  document.getElementById("modal-final-price").textContent =
    formatCurrency(finalPrice);

  if (discountPercent > 0) {
    const discountEl = document.getElementById("modal-discount");
    if (discountEl) discountEl.textContent = `-${discountPercent}%`;
    discountRow.classList.remove("hidden");
    discountRow.classList.add("flex");
  } else {
    discountRow.classList.add("hidden");
    discountRow.classList.remove("flex");
  }
}

// ─── TRANSACTION MODAL MANAGEMENT (RESTRICTED TO ROSTER) ───────
function openSellModal() {
  if (!currentUser) {
    closeModal();
    openLoginModal();
    showToast(
      "Authorization Required: Please log in using your staff profile to perform sales operations.",
      "warning",
    );
    return;
  }

  const vehicleModal = document.getElementById("vehicle-modal");
  const sellModal = document.getElementById("sell-modal");
  const card = document.getElementById("sell-modal-card");
  const confirmation = document.getElementById("sell-confirmation");

  const salespersonEl = document.getElementById("sell-salesperson");
  if (salespersonEl) {
    salespersonEl.value = currentUser.fullname;
    salespersonEl.disabled = true; // Lock field permanently to guarantee authorization
  }

  const discountPercent = Number(
    document.getElementById("modal-discount-select").value || 0,
  );
  const sellPriceValue = Math.round(
    activeVehicle.price * (1 - discountPercent / 100),
  );

  document.getElementById("sell-modal-vehicle-name").textContent =
    activeVehicle.name;
  document.getElementById("sell-modal-vehicle-price").textContent =
    formatCurrency(sellPriceValue);

  ["sell-customer", "sell-id", "sell-plate"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  if (confirmation) {
    confirmation.className =
      "hidden p-4 rounded-xl text-sm font-semibold border";
    confirmation.textContent = "";
  }

  if (vehicleModal) {
    vehicleModal.classList.add("pointer-events-none");
    vehicleModal.classList.remove("opacity-100");
  }
  if (sellModal && card) {
    sellModal.classList.remove("pointer-events-none");
    sellModal.classList.add("opacity-100");
    card.classList.remove("scale-95");
    card.classList.add("scale-100");
  }
}

function closeSellModal() {
  const sellModal = document.getElementById("sell-modal");
  const card = document.getElementById("sell-modal-card");
  if (sellModal && card) {
    sellModal.classList.add("pointer-events-none");
    sellModal.classList.remove("opacity-100");
    card.classList.add("scale-95");
    card.classList.remove("scale-100");
  }
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

// ─── REGISTER SALE SUBMIT ─────────────────────────────────────────
async function submitSellForm(event) {
  event.preventDefault();

  if (!currentUser) {
    showToast("Error: Session expired or invalid.", "error");
    closeSellModal();
    openLoginModal();
    return;
  }

  const salesperson = currentUser.fullname;
  const customer = document.getElementById("sell-customer").value.trim();
  const idNumber = document.getElementById("sell-id").value.trim();
  const licensePlate = document.getElementById("sell-plate").value.trim();
  const confirmation = document.getElementById("sell-confirmation");

  if (!salesperson || !customer || !idNumber) {
    confirmation.textContent =
      "Please complete every field before confirming the sale.";
    confirmation.className =
      "block bg-rose-500/10 border-rose-500/20 text-rose-400 p-4 rounded-xl text-sm font-semibold border";
    return;
  }

  if (isInvalidLicensePlate(licensePlate)) {
    confirmation.textContent =
      "License plate error: Check vehicle registration for valid plate.";
    confirmation.className =
      "block bg-rose-500/10 border-rose-500/20 text-rose-400 p-4 rounded-xl text-sm font-semibold border";
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

  confirmation.className =
    "block bg-emerald-500/10 border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-sm font-semibold border";
  confirmation.textContent =
    "Sale submitted successfully! Record generated and details copied to clipboard.";

  const copySuccess = copyTextToClipboard(saleText);
  if (copySuccess) {
    showToast("Sales documentation copied to clipboard!", "success");
  } else {
    showToast("Sale logged! Manual clipboard fallback triggered.", "warning");
  }

  setTimeout(() => {
    closeSellModal();
  }, 1800);
}

function persistSaleLog(entry) {
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
  } else {
    localStorage.setItem("salesLogText", record.rawText || "");
  }

  // Sync to Google Spreadsheet Endpoint
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
      .then(() => console.log("Sale synced to cloud Spreadsheet."))
      .catch((error) => console.error("Cloud synchronization failure:", error));
  }
}

// ─── TEST DRIVE HANDLER ───────────────────────────────────────────
async function handleTestDriveSubmit() {
  if (!activeVehicle) return;

  // Enforce staff profile authentication for drive logs
  if (!currentUser) {
    closeModal();
    openLoginModal();
    showToast(
      "Authorization Required: Please log in using your staff profile to log test drives.",
      "warning",
    );
    return;
  }

  const salespersonName = currentUser.fullname;

  const payload = {
    date: new Date().toLocaleString("en-GB"),
    salesperson: salespersonName,
    vehicle: activeVehicle.name,
    price: 500,
  };

  const tdButton = document.getElementById("test-drive-button");
  if (tdButton) {
    tdButton.textContent = "Logging...";
    tdButton.disabled = true;
  }

  const localDrives = JSON.parse(
    localStorage.getItem("testDrivesLogs") || "[]",
  );
  localDrives.push(payload);
  localStorage.setItem("testDrivesLogs", JSON.stringify(localDrives));

  try {
    await postJsonData(payload, POST_ENDPOINT_TEST_DRIVES);
    showToast(
      `Test drive fee logged ($500) under ${salespersonName}!`,
      "success",
    );
    if (tdButton) {
      tdButton.textContent = "Drive Logged ✓";
      tdButton.style.backgroundColor = "#10b981";
    }
  } catch (err) {
    console.error("Test drive cloud sync failed:", err);
    showToast("Drive logged locally (Workstation offline mode).", "warning");
    if (tdButton) {
      tdButton.textContent = "Saved Locally";
      tdButton.style.backgroundColor = "#f59e0b";
    }
  } finally {
    setTimeout(() => {
      if (tdButton) {
        tdButton.innerHTML = `<i class="fa-solid fa-road text-slate-400"></i> <span>Test Drive ($500)</span>`;
        tdButton.style.backgroundColor = "";
        tdButton.disabled = false;
      }
      closeModal();
    }, 1200);
  }
}
