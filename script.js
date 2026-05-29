// Vehicle Inventory Data — organized by category
const categories = [
  {
    id: "starter",
    label: "Starter",
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
    id: "american/uk",
    label: "US / UK",
    vehicles: [
      {
        name: "Albany Cavalcade ESV",
        image: "pictures/NoCarPictureYet.png",
        price: 242300,
        discount: 0,
        finalPrice: 242300,
        handling: 280,
        class: "B",
      },
      {
        name: "Albany Cavalcade FXT",
        image: "pictures/NoCarPictureYet.png",
        price: 198500,
        discount: 0,
        finalPrice: 198500,
        handling: 280,
        class: "B",
      },
      {
        name: "Albany Primo LX",
        image: "pictures/NoCarPictureYet.png",
        price: 44900,
        discount: 0,
        finalPrice: 44900,
        handling: 150,
        class: "C",
      },
      {
        name: "Albany Olympus",
        image: "pictures/NoCarPictureYet.png",
        price: 165900,
        discount: 0,
        finalPrice: 165900,
        handling: 150,
        class: "A",
      },
      {
        name: "Bravado Buffalo SL",
        image: "pictures/NoCarPictureYet.png",
        price: 99500,
        discount: 0,
        finalPrice: 99500,
        handling: 175,
        class: "B",
      },
      {
        name: "Bravado Hellfire Devil",
        image: "pictures/NoCarPictureYet.png",
        price: 179000,
        discount: 0,
        finalPrice: 179000,
        handling: 175,
        class: "A",
      },
      {
        name: "Bravado Banshee SW",
        image: "pictures/NoCarPictureYet.png",
        price: 93500,
        discount: 0,
        finalPrice: 93500,
        handling: 135,
        class: "B",
      },
      {
        name: "Bravado Bison D",
        image: "pictures/NoCarPictureYet.png",
        price: 114450,
        discount: 0,
        finalPrice: 114450,
        handling: 500,
        class: "C",
      },
      {
        name: "Bravado Buffalo T",
        image: "pictures/NoCarPictureYet.png",
        price: 99500,
        discount: 5,
        finalPrice: 94525,
        handling: 135,
        class: "B",
      },
      {
        name: "Bravado Recursion",
        image: "pictures/NoCarPictureYet.png",
        price: 72350,
        discount: 0,
        finalPrice: 72350,
        handling: 135,
        class: "B",
      },
      {
        name: "Bravado Gresley H",
        image: "pictures/NoCarPictureYet.png",
        price: 228000,
        discount: 0,
        finalPrice: 228000,
        handling: 280,
        class: "A",
      },
      {
        name: "Bravado Buffalo AC",
        image: "pictures/NoCarPictureYet.png",
        price: 113000,
        discount: 0,
        finalPrice: 113000,
        handling: 135,
        class: "B",
      },
      {
        name: "Bravado Howitzer Wagon",
        image: "pictures/NoCarPictureYet.png",
        price: 6750,
        discount: 0,
        finalPrice: 6750,
        handling: 135,
        class: "B",
      },
      {
        name: "Brute Pony Navarra",
        image: "pictures/NoCarPictureYet.png",
        price: 82000,
        discount: 0,
        finalPrice: 82000,
        handling: 350,
        class: "C",
      },
      {
        name: "Canis Mesa XL",
        image: "pictures/NoCarPictureYet.png",
        price: 232000,
        discount: 0,
        finalPrice: 232000,
        handling: 120,
        class: "B",
      },
      {
        name: "Cheval Dingo",
        image: "pictures/NoCarPictureYet.png",
        price: 98500,
        discount: 0,
        finalPrice: 98500,
        handling: 120,
        class: "B",
      },
      {
        name: "Classique Accolade",
        image: "pictures/NoCarPictureYet.png",
        price: 36500,
        discount: 0,
        finalPrice: 36500,
        handling: 150,
        class: "C",
      },
      {
        name: "Classique Panorama",
        image: "pictures/NoCarPictureYet.png",
        price: 38500,
        discount: 0,
        finalPrice: 38500,
        handling: 150,
        class: "C",
      },
      {
        name: "Declasse Sabre Cabriolet",
        image: "pictures/NoCarPictureYet.png",
        price: 48000,
        discount: 0,
        finalPrice: 48000,
        handling: 175,
        class: "C",
      },
      {
        name: "Declasse Vigero Custom",
        image: "pictures/NoCarPictureYet.png",
        price: 79500,
        discount: 0,
        finalPrice: 79500,
        handling: 175,
        class: "B",
      },
      {
        name: "Declasse Vigero Widebody",
        image: "pictures/NoCarPictureYet.png",
        price: 147500,
        discount: 5,
        finalPrice: 140125,
        handling: 175,
        class: "A",
      },
      {
        name: "Declasse Granger UT",
        image: "pictures/NoCarPictureYet.png",
        price: 90500,
        discount: 0,
        finalPrice: 90500,
        handling: 350,
        class: "B",
      },
      {
        name: "Declasse Pointer",
        image: "pictures/NoCarPictureYet.png",
        price: 49000,
        discount: 0,
        finalPrice: 49000,
        handling: 280,
        class: "C",
      },
      {
        name: "Declasse Vigero R",
        image: "pictures/NoCarPictureYet.png",
        price: 59500,
        discount: 0,
        finalPrice: 59500,
        handling: 175,
        class: "B",
      },
      {
        name: "Declasse Walton",
        image: "pictures/NoCarPictureYet.png",
        price: 42500,
        discount: 5,
        finalPrice: 40375,
        handling: 350,
        class: "C",
      },
      {
        name: "Declasse Walton Flatbed",
        image: "pictures/NoCarPictureYet.png",
        price: 45500,
        discount: 2,
        finalPrice: 44590,
        handling: 350,
        class: "C",
      },
      {
        name: "Declasse Yosemite Custom",
        image: "pictures/NoCarPictureYet.png",
        price: 63000,
        discount: 0,
        finalPrice: 63000,
        handling: 280,
        class: "B",
      },
      {
        name: "Dewbauchee Specter V12",
        image: "pictures/NoCarPictureYet.png",
        price: 318000,
        discount: 0,
        finalPrice: 318000,
        handling: 135,
        class: "A",
      },
      {
        name: "Imponte Ruiner UTE",
        image: "pictures/NoCarPictureYet.png",
        price: 81500,
        discount: 0,
        finalPrice: 81500,
        handling: 175,
        class: "B",
      },
      {
        name: "Vapid Aleution XL",
        image: "pictures/NoCarPictureYet.png",
        price: 89250,
        discount: 2,
        finalPrice: 87465,
        handling: 280,
        class: "B",
      },
      {
        name: "Vapid Sandstorm",
        image: "pictures/NoCarPictureYet.png",
        price: 109500,
        discount: 0,
        finalPrice: 109500,
        handling: 350,
        class: "B",
      },
      {
        name: "Vapid Sandstorm Widebody",
        image: "pictures/NoCarPictureYet.png",
        price: 137500,
        discount: 0,
        finalPrice: 137500,
        handling: 350,
        class: "B",
      },
      {
        name: "Vapid Flash RS",
        image: "pictures/NoCarPictureYet.png",
        price: 62300,
        discount: 2,
        finalPrice: 61054,
        handling: 135,
        class: "B",
      },
      {
        name: "Vapid Hellenstorm",
        image: "pictures/NoCarPictureYet.png",
        price: 172500,
        discount: 0,
        finalPrice: 172500,
        handling: 350,
        class: "B",
      },
      {
        name: "Vapid Stanier Custom",
        image: "pictures/NoCarPictureYet.png",
        price: 39500,
        discount: 0,
        finalPrice: 39500,
        handling: 150,
        class: "C",
      },
      {
        name: "Vapid Scout",
        image: "pictures/NoCarPictureYet.png",
        price: 69500,
        discount: 0,
        finalPrice: 69500,
        handling: 280,
        class: "B",
      },
      {
        name: "Vapid Dominator GT",
        image: "pictures/NoCarPictureYet.png",
        price: 70000,
        discount: 0,
        finalPrice: 70000,
        handling: 175,
        class: "B",
      },
      {
        name: "Vapid Drift Dominator (C)",
        image: "pictures/NoCarPictureYet.png",
        price: 117500,
        discount: 0,
        finalPrice: 117500,
        handling: 175,
        class: "C",
      },
      {
        name: "Vapid FMJ-B",
        image: "pictures/NoCarPictureYet.png",
        price: 695000,
        discount: 0,
        finalPrice: 695000,
        handling: 50,
        class: "S",
      },
      {
        name: "Vapid Alamo",
        image: "pictures/NoCarPictureYet.png",
        price: 38500,
        discount: 0,
        finalPrice: 38500,
        handling: 280,
        class: "C",
      },
      {
        name: "Vapid Razor",
        image: "pictures/NoCarPictureYet.png",
        price: 70200,
        discount: 0,
        finalPrice: 70200,
        handling: 175,
        class: "B",
      },
      {
        name: "Vapid Sabot",
        image: "pictures/NoCarPictureYet.png",
        price: 305000,
        discount: 0,
        finalPrice: 305000,
        handling: 50,
        class: "A",
      },
      {
        name: "Invetero Coquette Classic",
        image: "pictures/NoCarPictureYet.png",
        price: 89500,
        discount: 0,
        finalPrice: 89500,
        handling: 175,
        class: "B",
      },
      {
        name: "Enus Windsor Custom",
        image: "pictures/NoCarPictureYet.png",
        price: 398000,
        discount: 0,
        finalPrice: 398000,
        handling: 120,
        class: "A",
      },
      {
        name: "Enus Cognoscenti Custom",
        image: "pictures/NoCarPictureYet.png",
        price: 325000,
        discount: 0,
        finalPrice: 325000,
        handling: 150,
        class: "B",
      },
      {
        name: "Ocelot Ardent Custom",
        image: "pictures/NoCarPictureYet.png",
        price: 152500,
        discount: 0,
        finalPrice: 152500,
        handling: 175,
        class: "B",
      },
      {
        name: "Ocelot Euphoria",
        image: "pictures/NoCarPictureYet.png",
        price: 89000,
        discount: 0,
        finalPrice: 89000,
        handling: 175,
        class: "B",
      },
      {
        name: "Ocelot F620 D",
        image: "pictures/NoCarPictureYet.png",
        price: 116000,
        discount: 0,
        finalPrice: 116000,
        handling: 120,
        class: "B",
      },
      {
        name: "Ocelot Seeker",
        image: "pictures/NoCarPictureYet.png",
        price: 139500,
        discount: 0,
        finalPrice: 139500,
        handling: 135,
        class: "A",
      },
      {
        name: "Schyster Deviant Custom",
        image: "pictures/NoCarPictureYet.png",
        price: 59000,
        discount: 0,
        finalPrice: 59000,
        handling: 175,
        class: "C",
      },
      {
        name: "Schyster Velox",
        image: "pictures/NoCarPictureYet.png",
        price: 71050,
        discount: 0,
        finalPrice: 71050,
        handling: 175,
        class: "B",
      },
      {
        name: "Willard Paradox Custom",
        image: "pictures/NoCarPictureYet.png",
        price: 595000,
        discount: 0,
        finalPrice: 595000,
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
        image: "pictures/NoCarPictureYet.png",
        price: 345000,
        discount: 0,
        finalPrice: 345000,
        handling: 280,
        class: "A",
      },
      {
        name: "Benefactor Oracle V12",
        image: "pictures/NoCarPictureYet.png",
        price: 97200,
        discount: 5,
        finalPrice: 92340,
        handling: 150,
        class: "B",
      },
      {
        name: "Benefactor Schlagen SB",
        image: "pictures/NoCarPictureYet.png",
        price: 132500,
        discount: 5,
        finalPrice: 125875,
        handling: 150,
        class: "A",
      },
      {
        name: "Benefactor Schwarzer DTM",
        image: "pictures/NoCarPictureYet.png",
        price: 164000,
        discount: 5,
        finalPrice: 155800,
        handling: 50,
        class: "A",
      },
      {
        name: "Benefactor Streiter Custom",
        image: "pictures/NoCarPictureYet.png",
        price: 138000,
        discount: 0,
        finalPrice: 138000,
        handling: 135,
        class: "B",
      },
      {
        name: "Benefactor Serrano Custom",
        image: "pictures/NoCarPictureYet.png",
        price: 112500,
        discount: 1,
        finalPrice: 111375,
        handling: 280,
        class: "A",
      },
      {
        name: "BF Hotring Weevil",
        image: "pictures/NoCarPictureYet.png",
        price: 96500,
        discount: 0,
        finalPrice: 96500,
        handling: 60,
        class: "B",
      },
      {
        name: "Gallivanter Peacemaker",
        image: "pictures/NoCarPictureYet.png",
        price: 61000,
        discount: 0,
        finalPrice: 61000,
        handling: 350,
        class: "C",
      },
      {
        name: "Gallivanter Peacemaker XL",
        image: "pictures/NoCarPictureYet.png",
        price: 69500,
        discount: 0,
        finalPrice: 69500,
        handling: 350,
        class: "C",
      },
      {
        name: "Obey 10F",
        image: "pictures/NoCarPictureYet.png",
        price: 865000,
        discount: 0,
        finalPrice: 865000,
        handling: 135,
        class: "S",
      },
      {
        name: "Obey Double D",
        image: "pictures/NoCarPictureYet.png",
        price: 79500,
        discount: 0,
        finalPrice: 79500,
        handling: 135,
        class: "B",
      },
      {
        name: "Obey Argento Supercoupe",
        image: "pictures/NoCarPictureYet.png",
        price: 265000,
        discount: 0,
        finalPrice: 265000,
        handling: 150,
        class: "A",
      },
      {
        name: "Obey Shadow",
        image: "pictures/NoCarPictureYet.png",
        price: 278000,
        discount: 3,
        finalPrice: 269660,
        handling: 150,
        class: "A",
      },
      {
        name: "Pfister Meteor",
        image: "pictures/NoCarPictureYet.png",
        price: 1523000,
        discount: 4,
        finalPrice: 1462080,
        handling: 50,
        class: "S",
      },
      {
        name: "Pfister Neon SUV",
        image: "pictures/NoCarPictureYet.png",
        price: 185000,
        discount: 2,
        finalPrice: 181300,
        handling: 280,
        class: "A",
      },
      {
        name: "Pfister Comet Retro Custom",
        image: "pictures/NoCarPictureYet.png",
        price: 238000,
        discount: 0,
        finalPrice: 238000,
        handling: 135,
        class: "A",
      },
      {
        name: "Pfister Comet ST",
        image: "pictures/NoCarPictureYet.png",
        price: 245000,
        discount: 0,
        finalPrice: 245000,
        handling: 135,
        class: "B",
      },
      {
        name: "Ubermacht Niobe Touring",
        image: "pictures/NoCarPictureYet.png",
        price: 165000,
        discount: 0,
        finalPrice: 165000,
        handling: 120,
        class: "A",
      },
      {
        name: "Ubermacht Sentinel MK4",
        image: "pictures/NoCarPictureYet.png",
        price: 174000,
        discount: 0,
        finalPrice: 174000,
        handling: 135,
        class: "A",
      },
      {
        name: "Ubermacht Sentinel MK4 GTR",
        image: "pictures/NoCarPictureYet.png",
        price: 299500,
        discount: 3,
        finalPrice: 290515,
        handling: 135,
        class: "A",
      },
      {
        name: "Ubermacht Sentinel SG3",
        image: "pictures/NoCarPictureYet.png",
        price: 65500,
        discount: 0,
        finalPrice: 65500,
        handling: 120,
        class: "B",
      },
      {
        name: "Ubermacht Sentinel RTS",
        image: "pictures/NoCarPictureYet.png",
        price: 97500,
        discount: 0,
        finalPrice: 97500,
        handling: 135,
        class: "A",
      },
      {
        name: "Ubermacht Stalker",
        image: "pictures/NoCarPictureYet.png",
        price: 295000,
        discount: 0,
        finalPrice: 295000,
        handling: 150,
        class: "A",
      },
      {
        name: "Ubermacht Oracle XS-LE",
        image: "pictures/NoCarPictureYet.png",
        price: 82000,
        discount: 0,
        finalPrice: 82000,
        handling: 120,
        class: "B",
      },
      {
        name: "Ubermacht Zion V10",
        image: "pictures/NoCarPictureYet.png",
        price: 170000,
        discount: 0,
        finalPrice: 170000,
        handling: 135,
        class: "B",
      },
      {
        name: "Ubermacht Vorstand",
        image: "pictures/NoCarPictureYet.png",
        price: 47500,
        discount: 0,
        finalPrice: 47500,
        handling: 135,
        class: "C",
      },
      {
        name: "Ubermacht Seraph",
        image: "pictures/NoCarPictureYet.png",
        price: 64500,
        discount: 0,
        finalPrice: 64500,
        handling: 150,
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
            image: "pictures/NoCarPictureYet.png",
            price: 175000,
            discount: 0,
            finalPrice: 175000,
            handling: 0,
            class: "B",
          },
          {
            name: "Coil Taranis",
            image: "pictures/NoCarPictureYet.png",
            price: 142500,
            discount: 0,
            finalPrice: 142500,
            handling: 0,
            class: "A",
          },
          {
            name: "Super Diamond Custom",
            image: "pictures/NoCarPictureYet.png",
            price: 365000,
            discount: 0,
            finalPrice: 365000,
            handling: 0,
            class: "B",
          },
          {
            name: "Nexus",
            image: "pictures/NoCarPictureYet.png",
            price: 985000,
            discount: 0,
            finalPrice: 985000,
            handling: 0,
            class: "A",
          },
          {
            name: "Benefactor Kreiger BPX-32B",
            image: "pictures/NoCarPictureYet.png",
            price: 115000,
            discount: 0,
            finalPrice: 115000,
            handling: 0,
            class: "B",
          },
          {
            name: "Dewbauchee Vesper",
            image: "pictures/NoCarPictureYet.png",
            price: 292000,
            discount: 0,
            finalPrice: 292000,
            handling: 0,
            class: "A",
          },
          {
            name: "Paragon Droptop",
            image: "pictures/NoCarPictureYet.png",
            price: 302000,
            discount: 0,
            finalPrice: 302000,
            handling: 0,
            class: "A",
          },
          {
            name: "Contender Custom",
            image: "pictures/NoCarPictureYet.png",
            price: 132000,
            discount: 0,
            finalPrice: 132000,
            handling: 0,
            class: "B",
          },
          {
            name: "Invetero Coquette VR",
            image: "pictures/NoCarPictureYet.png",
            price: 175000,
            discount: 0,
            finalPrice: 175000,
            handling: 0,
            class: "A",
          },
          {
            name: "Emperor Sheava S",
            image: "pictures/NoCarPictureYet.png",
            price: 935000,
            discount: 0,
            finalPrice: 935000,
            handling: 0,
            class: "S",
          },
          {
            name: "Ubermacht Oracle XS-LE",
            image: "pictures/NoCarPictureYet.png",
            price: 425000,
            discount: 0,
            finalPrice: 425000,
            handling: 0,
            class: "A",
          },
          {
            name: "Coil Savanna",
            image: "pictures/NoCarPictureYet.png",
            price: 312000,
            discount: 0,
            finalPrice: 312000,
            handling: 0,
            class: "A",
          },
          {
            name: "Bravado Buffalo 4H",
            image: "pictures/NoCarPictureYet.png",
            price: 170000,
            discount: 0,
            finalPrice: 170000,
            handling: 0,
            class: "B",
          },
          {
            name: "Bravado Gresley STX",
            image: "pictures/NoCarPictureYet.png",
            price: 209000,
            discount: 0,
            finalPrice: 209000,
            handling: 0,
            class: "A",
          },
          {
            name: "Benefactor Shlagen STR",
            image: "pictures/NoCarPictureYet.png",
            price: 675000,
            discount: 0,
            finalPrice: 675000,
            handling: 0,
            class: "S",
          },
          {
            name: "Benefactor Shlagen GT4",
            image: "pictures/NoCarPictureYet.png",
            price: 365000,
            discount: 0,
            finalPrice: 365000,
            handling: 0,
            class: "A",
          },
          {
            name: "Benefactor Monarch XLS",
            image: "pictures/NoCarPictureYet.png",
            price: 358000,
            discount: 0,
            finalPrice: 358000,
            handling: 0,
            class: "A",
          },
          {
            name: "Benefactor Surrano STR",
            image: "pictures/NoCarPictureYet.png",
            price: 305000,
            discount: 0,
            finalPrice: 305000,
            handling: 0,
            class: "A",
          },
          {
            name: "ZR-GPR",
            image: "pictures/NoCarPictureYet.png",
            price: 159000,
            discount: 5,
            finalPrice: 151050,
            handling: 0,
            class: "A",
          },
          {
            name: "Schyster PMP 900",
            image: "pictures/NoCarPictureYet.png",
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
            image: "pictures/NoCarPictureYet.png",
            price: 1750000,
            discount: 0,
            finalPrice: 1750000,
            handling: 0,
            class: "S",
          },
          {
            name: "Pagassi Toros Custom",
            image: "pictures/NoCarPictureYet.png",
            price: 485000,
            discount: 0,
            finalPrice: 485000,
            handling: 0,
            class: "A",
          },
          {
            name: "Pfister Comet S2 CTX",
            image: "pictures/NoCarPictureYet.png",
            price: 595000,
            discount: 0,
            finalPrice: 595000,
            handling: 0,
            class: "S",
          },
          {
            name: "Truffade Thrax S",
            image: "pictures/NoCarPictureYet.png",
            price: 2950000,
            discount: 0,
            finalPrice: 2950000,
            handling: 0,
            class: "S",
          },
          {
            name: "Benefactor Krieger Type II",
            image: "pictures/NoCarPictureYet.png",
            price: 3050000,
            discount: 0,
            finalPrice: 3050000,
            handling: 0,
            class: "S",
          },
          {
            name: "Benefactor Harmann",
            image: "pictures/NoCarPictureYet.png",
            price: 405005,
            discount: 0,
            finalPrice: 405005,
            handling: 0,
            class: "A",
          },
          {
            name: "Benefactor Schwartze",
            image: "pictures/NoCarPictureYet.png",
            price: 292000,
            discount: 0,
            finalPrice: 292000,
            handling: 0,
            class: "A",
          },
          {
            name: "Pagassi Osiris R",
            image: "pictures/NoCarPictureYet.png",
            price: 3500000,
            discount: 0,
            finalPrice: 3500000,
            handling: 0,
            class: "S",
          },
          {
            name: "Gallivanter Attacker",
            image: "pictures/NoCarPictureYet.png",
            price: 158500,
            discount: 0,
            finalPrice: 158500,
            handling: 0,
            class: "A",
          },
          {
            name: "Grotti Itali RSX Roadster",
            image: "pictures/NoCarPictureYet.png",
            price: 2750000,
            discount: 1,
            finalPrice: 2722500,
            handling: 0,
            class: "S",
          },
          {
            name: "Grotti Milano",
            image: "pictures/NoCarPictureYet.png",
            price: 695000,
            discount: 0,
            finalPrice: 695000,
            handling: 0,
            class: "S",
          },
          {
            name: "Huntley R",
            image: "pictures/NoCarPictureYet.png",
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
            image: "pictures/NoCarPictureYet.png",
            price: 485000,
            discount: 0,
            finalPrice: 485000,
            handling: 0,
            class: "S",
          },
          {
            name: "Pegassi Infernus Classic C",
            image: "pictures/NoCarPictureYet.png",
            price: 1525000,
            discount: 0,
            finalPrice: 1525000,
            handling: 0,
            class: "S",
          },
          {
            name: "Enus Jubilee Custom",
            image: "pictures/NoCarPictureYet.png",
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
    id: "japanese",
    label: "Japanese",
    vehicles: [
      {
        name: "Annis Elegy X",
        image: "pictures/NoCarPictureYet.png",
        price: 495000,
        discount: 0,
        finalPrice: 495000,
        handling: 135,
        class: "S",
      },
      {
        name: "Annis Elegy Wagon",
        image: "pictures/NoCarPictureYet.png",
        price: 148000,
        discount: 0,
        finalPrice: 148000,
        handling: 135,
        class: "B",
      },
      {
        name: "Annis ZR390",
        image: "pictures/NoCarPictureYet.png",
        price: 167400,
        discount: 5,
        finalPrice: 159030,
        handling: 135,
        class: "A",
      },
      {
        name: "Annis Trail Wilder",
        image: "pictures/NoCarPictureYet.png",
        price: 42000,
        discount: 0,
        finalPrice: 42000,
        handling: 350,
        class: "C",
      },
      {
        name: "Annis Remus Convertable",
        image: "pictures/NoCarPictureYet.png",
        price: 54500,
        discount: 0,
        finalPrice: 54500,
        handling: 135,
        class: "C",
      },
      {
        name: "Annis Remus Widebody",
        image: "pictures/NoCarPictureYet.png",
        price: 165500,
        discount: 2,
        finalPrice: 162190,
        handling: 135,
        class: "B",
      },
      {
        name: "Annis ZR250",
        image: "pictures/NoCarPictureYet.png",
        price: 54500,
        discount: 0,
        finalPrice: 54500,
        handling: 135,
        class: "C",
      },
      {
        name: "Dinka RT 3000 WB",
        image: "pictures/NoCarPictureYet.png",
        price: 58500,
        discount: 0,
        finalPrice: 58500,
        handling: 135,
        class: "B",
      },
      {
        name: "Dinka Millennial Wagon",
        image: "pictures/NoCarPictureYet.png",
        price: 57300,
        discount: 0,
        finalPrice: 57300,
        handling: 150,
        class: "C",
      },
      {
        name: "Karin Ariant",
        image: "pictures/NoCarPictureYet.png",
        price: 60500,
        discount: 0,
        finalPrice: 60500,
        handling: 135,
        class: "B",
      },
      {
        name: "Karin Asteroper S",
        image: "pictures/NoCarPictureYet.png",
        price: 179500,
        discount: 0,
        finalPrice: 179500,
        handling: 135,
        class: "B",
      },
      {
        name: "Karin Everon Custom",
        image: "pictures/NoCarPictureYet.png",
        price: 63500,
        discount: 0,
        finalPrice: 63500,
        handling: 350,
        class: "B",
      },
      {
        name: "Karin Sigma-Two",
        image: "pictures/NoCarPictureYet.png",
        price: 56600,
        discount: 0,
        finalPrice: 56600,
        handling: 135,
        class: "C",
      },
      {
        name: "Karin Sultan 2R",
        image: "pictures/NoCarPictureYet.png",
        price: 99500,
        discount: 2,
        finalPrice: 97510,
        handling: 135,
        class: "B",
      },
      {
        name: "Maibatsu Vincent Wagon",
        image: "pictures/NoCarPictureYet.png",
        price: 138500,
        discount: 0,
        finalPrice: 138500,
        handling: 135,
        class: "B",
      },
    ],
  },
];

const roster = [
  { username: "quandale", password: "Quandale382", fullname: "Quandale Brown" },
  { username: "jordan-k", password: "Jordan921", fullname: "Jordan Karlman" },
  { username: "saylor", password: "Saylor576", fullname: "Saylor Stroke" },
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
  {
    username: "luxery",
    password: "JohnnyIsAmazing67",
    fullname: "Luxery Autos",
  },
];

const rosterCredentials = roster.reduce((map, member) => {
  const key = member.username.toLowerCase();
  if (!map[key]) {
    map[key] = [];
  }
  map[key].push(member.password);
  return map;
}, {});

const ADMIN_USERNAME = "luxery";
let currentUser = null;
let currentSearchTerm = "";
let activeVehicle = null;
let loginModal = null;

document.addEventListener("DOMContentLoaded", () => {
  currentUser = localStorage.getItem("loggedInUser");
  displayCategories();
  displayRoster();
  setupModal();
  setupLogin();
  setupSearch();
  renderAdminButton();
});

function displayCategories(searchTerm = "") {
  const inventoryGrid = document.getElementById("inventory-grid");
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

function renderAdminButton() {
  const existing = document.getElementById("admin-log-button");
  if (currentUser !== ADMIN_USERNAME) {
    if (existing) existing.remove();
    return;
  }

  if (existing) return;

  const heroContent = document.querySelector(".hero-content");
  if (!heroContent) return;

  // Create wrapper for the admin dashboard buttons
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

function displayRoster() {
  const rosterSection = document.querySelector(".roster-section");
  const rosterGrid = document.getElementById("roster-grid");
  if (!rosterSection || !rosterGrid) return;

  if (currentUser !== ADMIN_USERNAME) {
    rosterSection.style.display = "none";
    rosterGrid.innerHTML = "";
    return;
  }

  rosterSection.style.display = "";
  rosterGrid.innerHTML = "";

  roster.forEach((member) => {
    const card = document.createElement("div");
    card.className = "roster-card";
    card.innerHTML = `
            <div class="roster-detail"><span>Username:</span> ${member.username}</div>
            <div class="roster-detail"><span>Password:</span> ${member.password}</div>
        `;
    rosterGrid.appendChild(card);
  });
}

function setupLogin() {
  loginModal = document.getElementById("login-modal");
  const loginForm = document.getElementById("login-form");
  const loginError = document.getElementById("login-error");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const username = document
        .getElementById("login-username")
        .value.trim()
        .toLowerCase();
      const password = document.getElementById("login-password").value;
      const validPasswords = rosterCredentials[username] || [];

      if (validPasswords.includes(password)) {
        currentUser = username;
        localStorage.setItem("loggedInUser", username);
        if (loginError) loginError.textContent = "";
        closeLoginModal();
        renderAdminButton();
        displayRoster();
      } else if (loginError) {
        loginError.textContent =
          "Invalid username or password. Please try again.";
        loginError.style.color = "#ff6b6b";
      }
    });
  }

  if (loginModal) {
    loginModal.classList.add("active");
    document.body.style.overflow = "hidden";
    document.getElementById("login-username")?.focus();
  }
}

function closeLoginModal() {
  if (loginModal) {
    loginModal.classList.remove("active");
    document.body.style.overflow = "";
  }
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
  }

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

  // Use apiFetch helper if present (added below) otherwise fallback to fetch
  const apiFetchFn =
    typeof apiFetch === "function" ? apiFetch : (p, o) => fetch(p, o);

  apiFetchFn("/save-sale", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) =>
      console.log("Sale successfully synced with cloud server:", data),
    )
    .catch((error) => console.error("Error saving to server:", error));
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
  const closeBtn = modal.querySelector(".close-btn");
  const discountSelect = document.getElementById("modal-discount-select");
  const sellButton = document.getElementById("sell-car-button");
  const sellModal = document.getElementById("sell-modal");
  const sellClose = sellModal.querySelector(".sell-close");
  const sellForm = document.getElementById("sell-form");

  closeBtn.addEventListener("click", closeModal);
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
      if (sellModal.classList.contains("active")) {
        closeSellModal();
      } else if (loginModal && loginModal.classList.contains("active")) {
        return;
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

// Helper to make API requests work even when page is opened via file://
function apiFetch(path, options) {
  const isAbsolute = /^(https?:)?\/\//i.test(path);
  if (isAbsolute) return fetch(path, options);
  if (location.protocol === "file:") {
    return fetch("http://localhost:3000" + path, options);
  }
  return fetch(path, options);
}

function openModal(vehicle) {
  activeVehicle = vehicle;
  const modal = document.getElementById("vehicle-modal");
  const discountSelect = document.getElementById("modal-discount-select");

  document.getElementById("modal-image").src = vehicle.image;
  document.getElementById("modal-name").textContent = vehicle.name;
  document.getElementById("modal-price").textContent = formatCurrency(
    vehicle.price,
  );
  document.getElementById("modal-class").textContent = vehicle.class;

  if (discountSelect) {
    discountSelect.value = vehicle.discount || 0;
    updateModalDiscount(Number(discountSelect.value));
  }

  // AUTOMATIC DYNAMIC INJECTION: Ensure "Test Drive" button exists next to the "Sell" button
  const sellButton = document.getElementById("sell-car-button");
  if (sellButton && !document.getElementById("test-drive-button")) {
    const tdButton = document.createElement("button");
    tdButton.id = "test-drive-button";
    tdButton.className = "test-drive-button";
    tdButton.textContent = "Test Drive ($500)";

    // Insert directly after the sell-car-button
    sellButton.parentNode.insertBefore(tdButton, sellButton.nextSibling);
    tdButton.addEventListener("click", handleTestDriveSubmit);
  }

  modal.classList.add("active");
}

function handleTestDriveSubmit() {
  if (!activeVehicle) return;

  // Get current logged-in salesperson's full name
  const currentMember = roster.find(
    (m) => m.username.toLowerCase() === (currentUser || "").toLowerCase(),
  );
  const salespersonName = currentMember
    ? currentMember.fullname
    : currentUser || "Unknown";

  const payload = {
    // Do not send `date` for test-drives — the DB table does not include a `date` column.
    salesperson: salespersonName,
    vehicle: activeVehicle.name,
    price: 500,
  };

  const tdButton = document.getElementById("test-drive-button");
  const originalText = tdButton.textContent;
  tdButton.textContent = "Saving...";
  tdButton.disabled = true;

  apiFetch("/save-test-drive", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Failed to save test drive");
      return response.json();
    })
    .then((data) => {
      tdButton.textContent = "Logged! ✓";
      tdButton.style.backgroundColor = "#2ecc71";
      setTimeout(() => {
        tdButton.textContent = originalText;
        tdButton.style.backgroundColor = "";
        tdButton.disabled = false;
        closeModal();
      }, 1200);
    })
    .catch((err) => {
      console.error(err);
      tdButton.textContent = "Failed ✗";
      tdButton.style.backgroundColor = "#e74c3c";
      setTimeout(() => {
        tdButton.textContent = originalText;
        tdButton.style.backgroundColor = "";
        tdButton.disabled = false;
      }, 2000);
    });
}

function openSellModal() {
  const vehicleModal = document.getElementById("vehicle-modal");
  const sellModal = document.getElementById("sell-modal");
  const confirmation = document.getElementById("sell-confirmation");

  const salespersonEl = document.getElementById("sell-salesperson");
  if (salespersonEl) {
    const currentMember = roster.find(
      (m) => m.username.toLowerCase() === (currentUser || "").toLowerCase(),
    );
    salespersonEl.value = currentMember
      ? currentMember.fullname
      : currentUser || "";
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

function submitSellForm(event) {
  event.preventDefault();

  const salesperson = document.getElementById("sell-salesperson").value.trim();
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

  navigator.clipboard
    .writeText(saleText)
    .then(() => {
      if (confirmation) {
        confirmation.textContent =
          "Sale submitted successfully! Details copied to clipboard.";
      }
    })
    .catch(() => {
      if (confirmation) {
        confirmation.textContent = "Sale submitted, but clipboard copy failed.";
      }
    });

  setTimeout(() => {
    closeSellModal();
  }, 1800);
}

function updateModalDiscount(discountPercent) {
  const discountRow = document.getElementById("discount-row");
  const finalPrice = Math.round(
    activeVehicle.price * (1 - discountPercent / 100),
  );

  document.getElementById("modal-final-price").textContent =
    formatCurrency(finalPrice);

  if (discountPercent > 0) {
    document.getElementById("modal-discount").textContent =
      discountPercent + "%";
    discountRow.style.display = "flex";
  } else {
    discountRow.style.display = "none";
  }
}

function closeModal() {
  const modal = document.getElementById("vehicle-modal");
  modal.classList.remove("active");
}
