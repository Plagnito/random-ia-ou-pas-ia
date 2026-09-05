/* Genere par scripts/construire.py — ne pas editer a la main.
   duels : un theme, deux images, une seule generee.
   solo  : les memes images, une par une, dans un autre ordre. */

const JEU = {
 "duels": [
  {
   "n": 1,
   "theme": "Un bol de ramen",
   "a": {
    "img": "images/w/reel-14-ramen.webp",
    "ia": false,
    "cle": "ramen",
    "theme": "Un bol de ramen",
    "auteur": "Luis Carlos Diaz",
    "licence": "CC BY 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ARamen_2.jpg"
   },
   "b": {
    "img": "images/w/ia-07-plat.webp",
    "ia": true,
    "cle": "ramen",
    "theme": "Un bol de ramen"
   }
  },
  {
   "n": 2,
   "theme": "Un renard roux",
   "a": {
    "img": "images/w/reel-15-renard.webp",
    "ia": false,
    "cle": "renard",
    "theme": "Un renard roux",
    "auteur": "ClaudiaTen",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3APortrait_of_a_red_fox_in_Rautas_fj%C3%A4llurskog.jpg"
   },
   "b": {
    "img": "images/w/ia-03-renard.webp",
    "ia": true,
    "cle": "renard",
    "theme": "Un renard roux"
   }
  },
  {
   "n": 3,
   "theme": "Une araignée sauteuse en macro",
   "a": {
    "img": "images/w/ia-13-macro.webp",
    "ia": true,
    "cle": "araignee",
    "theme": "Une araignée sauteuse en macro"
   },
   "b": {
    "img": "images/w/reel-11-araignee.webp",
    "ia": false,
    "cle": "araignee",
    "theme": "Une araignée sauteuse en macro",
    "auteur": "Shyamli kashyap",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ACloseup_Capture_Of_Jumping_Spider.jpg"
   }
  },
  {
   "n": 4,
   "theme": "Un quai de métro",
   "a": {
    "img": "images/w/ia-10-metro.webp",
    "ia": true,
    "cle": "metro",
    "theme": "Un quai de métro"
   },
   "b": {
    "img": "images/w/reel-13-metro.webp",
    "ia": false,
    "cle": "metro",
    "theme": "Un quai de métro",
    "auteur": "JIP",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AVuosaari_metro_station_platforms_at_night.jpg"
   }
  },
  {
   "n": 5,
   "theme": "Un étal de légumes",
   "a": {
    "img": "images/w/reel-16-marche.webp",
    "ia": false,
    "cle": "marche",
    "theme": "Un étal de légumes",
    "auteur": "Timothy A. Gonsalves",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3APotato_Bean_Tomato_Veg_Stall_Ooty_Market_Nilgiris_Aug25_A7CR_07103.jpg"
   },
   "b": {
    "img": "images/w/ia-05-marche.webp",
    "ia": true,
    "cle": "marche",
    "theme": "Un étal de légumes"
   }
  },
  {
   "n": 6,
   "theme": "Un orage sur la plaine",
   "a": {
    "img": "images/w/ia-06-orage.webp",
    "ia": true,
    "cle": "orage",
    "theme": "Un orage sur la plaine"
   },
   "b": {
    "img": "images/w/reel-10-supercellule.webp",
    "ia": false,
    "cle": "orage",
    "theme": "Un orage sur la plaine",
    "auteur": "Raychel Sanner",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ASupercell_thunderstorm_over_Needmore%2C_Texas._May_4%2C_2019.jpg"
   }
  },
  {
   "n": 7,
   "theme": "Un plan de travail au petit matin",
   "a": {
    "img": "images/w/ia-01-cuisine.webp",
    "ia": true,
    "cle": "cuisine",
    "theme": "Un plan de travail au petit matin"
   },
   "b": {
    "img": "images/w/reel-17-cuisine.webp",
    "ia": false,
    "cle": "cuisine",
    "theme": "Un plan de travail au petit matin",
    "auteur": "Daniel Case",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AFreshly_brewed_cup_of_espresso_in_sunlight_on_kitchen_counter.jpg"
   }
  },
  {
   "n": 8,
   "theme": "Un abribus",
   "a": {
    "img": "images/w/reel-18-abribus.webp",
    "ia": false,
    "cle": "abribus",
    "theme": "Un abribus",
    "auteur": "Stratoswift",
    "licence": "CC0",
    "url": "https://commons.wikimedia.org/wiki/File%3AAbribus_%22%C3%A9tangs_de_Boitsfort%22_02.jpg"
   },
   "b": {
    "img": "images/w/ia-02-bus.webp",
    "ia": true,
    "cle": "abribus",
    "theme": "Un abribus"
   }
  },
  {
   "n": 9,
   "theme": "Le portrait d'une personne âgée",
   "a": {
    "img": "images/w/reel-19-portrait.webp",
    "ia": false,
    "cle": "portrait",
    "theme": "Le portrait d'une personne âgée",
    "auteur": "Museum of Photographic Arts Collections",
    "licence": "No restrictions",
    "url": "https://commons.wikimedia.org/wiki/File%3APortrait_of_Elderly_Woman_in_Costume_%285711492936%29.jpg"
   },
   "b": {
    "img": "images/w/ia-04-grandmere.webp",
    "ia": true,
    "cle": "portrait",
    "theme": "Le portrait d'une personne âgée"
   }
  },
  {
   "n": 10,
   "theme": "Un atelier de menuiserie",
   "a": {
    "img": "images/w/ia-08-atelier.webp",
    "ia": true,
    "cle": "atelier",
    "theme": "Un atelier de menuiserie"
   },
   "b": {
    "img": "images/w/reel-20-atelier.webp",
    "ia": false,
    "cle": "atelier",
    "theme": "Un atelier de menuiserie",
    "auteur": "Jean-Michel Rousset",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AKane_Kwei_Carpentry_Workshop.jpg"
   }
  },
  {
   "n": 11,
   "theme": "Un lac de montagne au lever du jour",
   "a": {
    "img": "images/w/ia-09-montagne.webp",
    "ia": true,
    "cle": "lacmontagne",
    "theme": "Un lac de montagne au lever du jour"
   },
   "b": {
    "img": "images/w/reel-21-lacmontagne.webp",
    "ia": false,
    "cle": "lacmontagne",
    "theme": "Un lac de montagne au lever du jour",
    "auteur": "Supanut Arunoprayote",
    "licence": "CC BY 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AMount_Fuji_from_Lake_Motosu_20241026.jpg"
   }
  },
  {
   "n": 12,
   "theme": "Une mouette en vol",
   "a": {
    "img": "images/w/reel-22-mouette.webp",
    "ia": false,
    "cle": "mouette",
    "theme": "Une mouette en vol",
    "auteur": "Wark06",
    "licence": "CC BY 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ACalifornia_Gull.jpg"
   },
   "b": {
    "img": "images/w/ia-11-mouette.webp",
    "ia": true,
    "cle": "mouette",
    "theme": "Une mouette en vol"
   }
  },
  {
   "n": 13,
   "theme": "Une rue enneigée",
   "a": {
    "img": "images/w/ia-12-neige.webp",
    "ia": true,
    "cle": "neige",
    "theme": "Une rue enneigée"
   },
   "b": {
    "img": "images/w/reel-23-neige.webp",
    "ia": false,
    "cle": "neige",
    "theme": "Une rue enneigée",
    "auteur": "Andre Carrotflower",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ASnow_over_Delaware_Avenue%2C_Buffalo%2C_New_York_-_20200207.jpg"
   }
  },
  {
   "n": 14,
   "theme": "Une usine abandonnée",
   "a": {
    "img": "images/w/ia-14-usine.webp",
    "ia": true,
    "cle": "usine",
    "theme": "Une usine abandonnée"
   },
   "b": {
    "img": "images/w/reel-24-usine.webp",
    "ia": false,
    "cle": "usine",
    "theme": "Une usine abandonnée",
    "auteur": "Texniths",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ALipasmata%2C_Drapetsona-2_%28March_2022%29.jpg"
   }
  },
  {
   "n": 15,
   "theme": "Des enfants et de l'eau",
   "a": {
    "img": "images/w/reel-25-enfants.webp",
    "ia": false,
    "cle": "enfants",
    "theme": "Des enfants et de l'eau",
    "auteur": "Ranjith-chemmad",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AChildren_Playing_in_Rain.jpg"
   },
   "b": {
    "img": "images/w/ia-15-enfant.webp",
    "ia": true,
    "cle": "enfants",
    "theme": "Des enfants et de l'eau"
   }
  },
  {
   "n": 16,
   "theme": "Un plateau de bureaux",
   "a": {
    "img": "images/w/ia-16-bureau.webp",
    "ia": true,
    "cle": "bureau",
    "theme": "Un plateau de bureaux"
   },
   "b": {
    "img": "images/w/reel-26-bureau.webp",
    "ia": false,
    "cle": "bureau",
    "theme": "Un plateau de bureaux",
    "auteur": "Fast Radius",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AMake_New_Things_Possible_Office.png"
   }
  },
  {
   "n": 17,
   "theme": "Une limace de mer",
   "a": {
    "img": "images/w/reel-01-dragon.webp",
    "ia": false,
    "cle": "limace",
    "theme": "Une limace de mer",
    "auteur": "Taro Taylor",
    "licence": "CC BY 2.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AGlaucus_atlanticus_1_cropped.jpg"
   },
   "b": {
    "img": "images/w/ia-17-limace.webp",
    "ia": true,
    "cle": "limace",
    "theme": "Une limace de mer"
   }
  },
  {
   "n": 18,
   "theme": "Un nuage lenticulaire",
   "a": {
    "img": "images/w/reel-02-lenticulaire.webp",
    "ia": false,
    "cle": "lenticulaire",
    "theme": "Un nuage lenticulaire",
    "auteur": "Steve Redman ( MORA )",
    "licence": "Public domain",
    "url": "https://commons.wikimedia.org/wiki/File%3ALenticular_cloud_%2892b9ee4bcdc24c5b9a32911b8ee3525e%29.JPG"
   },
   "b": {
    "img": "images/w/ia-18-lenticulaire.webp",
    "ia": true,
    "cle": "lenticulaire",
    "theme": "Un nuage lenticulaire"
   }
  },
  {
   "n": 19,
   "theme": "Un désert de sel en miroir",
   "a": {
    "img": "images/w/ia-19-selmiroir.webp",
    "ia": true,
    "cle": "selmiroir",
    "theme": "Un désert de sel en miroir"
   },
   "b": {
    "img": "images/w/reel-03-uyuni.webp",
    "ia": false,
    "cle": "selmiroir",
    "theme": "Un désert de sel en miroir",
    "auteur": "Diego Delso",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ASalar_de_Uyuni%2C_Bolivia%2C_2016-02-04%2C_DD_10-12_HDR.JPG"
   }
  },
  {
   "n": 20,
   "theme": "Une source thermale vue du ciel",
   "a": {
    "img": "images/w/reel-04-prismatic.webp",
    "ia": false,
    "cle": "thermale",
    "theme": "Une source thermale vue du ciel",
    "auteur": "Carsten Steger",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AAerial_image_of_Grand_Prismatic_Spring_%28view_from_the_south%29.jpg"
   },
   "b": {
    "img": "images/w/ia-20-thermale.webp",
    "ia": true,
    "cle": "thermale",
    "theme": "Une source thermale vue du ciel"
   }
  },
  {
   "n": 21,
   "theme": "Une écorce colorée",
   "a": {
    "img": "images/w/ia-21-ecorce.webp",
    "ia": true,
    "cle": "ecorce",
    "theme": "Une écorce colorée"
   },
   "b": {
    "img": "images/w/reel-05-eucalyptus.webp",
    "ia": false,
    "cle": "ecorce",
    "theme": "Une écorce colorée",
    "auteur": "Forest and Kim Starr",
    "licence": "CC BY 3.0 us",
    "url": "https://commons.wikimedia.org/wiki/File%3AStarr-130214-1575-Eucalyptus_deglupta-bark-Waihee-Maui_%2825112573891%29.jpg"
   }
  },
  {
   "n": 22,
   "theme": "Une antilope étrange",
   "a": {
    "img": "images/w/ia-22-antilope.webp",
    "ia": true,
    "cle": "antilope",
    "theme": "Une antilope étrange"
   },
   "b": {
    "img": "images/w/reel-06-saiga.webp",
    "ia": false,
    "cle": "antilope",
    "theme": "Une antilope étrange",
    "auteur": "Andrey Giljov",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ASaiga_antelope_at_the_Stepnoi_Sanctuary.jpg"
   }
  },
  {
   "n": 23,
   "theme": "Un geyser",
   "a": {
    "img": "images/w/reel-07-geyser.webp",
    "ia": false,
    "cle": "geyser",
    "theme": "Un geyser",
    "auteur": "RuggyBearLA",
    "licence": "CC BY 2.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AFly_Geyser_-_52146739578.jpg"
   },
   "b": {
    "img": "images/w/ia-23-geyser.webp",
    "ia": true,
    "cle": "geyser",
    "theme": "Un geyser"
   }
  },
  {
   "n": 24,
   "theme": "Un lac rose",
   "a": {
    "img": "images/w/reel-08-hillier.webp",
    "ia": false,
    "cle": "lacrose",
    "theme": "Un lac rose",
    "auteur": "Yodaobione",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3APink_Lake_%28Lake_Hillier%29_on_Middle_Island_off_the_coast_of_Esperance_Western_Australia.jpg"
   },
   "b": {
    "img": "images/w/ia-24-lacrose.webp",
    "ia": true,
    "cle": "lacrose",
    "theme": "Un lac rose"
   }
  },
  {
   "n": 25,
   "theme": "Une aurore boréale",
   "a": {
    "img": "images/w/ia-25-aurore.webp",
    "ia": true,
    "cle": "aurore",
    "theme": "Une aurore boréale"
   },
   "b": {
    "img": "images/w/reel-09-aurore.webp",
    "ia": false,
    "cle": "aurore",
    "theme": "Une aurore boréale",
    "auteur": "Ximonic (Simo Räsänen)",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AAurora_borealis_above_Storfjorden_and_the_Lyngen_Alps_in_moonlight%2C_2012_March.jpg"
   }
  },
  {
   "n": 26,
   "theme": "Des éclairs dans un panache volcanique",
   "a": {
    "img": "images/w/reel-12-volcan.webp",
    "ia": false,
    "cle": "volcanfoudre",
    "theme": "Des éclairs dans un panache volcanique",
    "auteur": "R. Hadian, U.S. Geological Survey",
    "licence": "Public domain",
    "url": "https://commons.wikimedia.org/wiki/File%3AGalunggung.jpg"
   },
   "b": {
    "img": "images/w/ia-26-volcan.webp",
    "ia": true,
    "cle": "volcanfoudre",
    "theme": "Des éclairs dans un panache volcanique"
   }
  },
  {
   "n": 27,
   "theme": "Un phare dans la tempête",
   "a": {
    "img": "images/w/ia-27-phare.webp",
    "ia": true,
    "cle": "phare",
    "theme": "Un phare dans la tempête"
   },
   "b": {
    "img": "images/w/reel-27-phare.webp",
    "ia": false,
    "cle": "phare",
    "theme": "Un phare dans la tempête",
    "auteur": "Jwyoung",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ATillamook_Rock_Lighthouse_in_November%2C_2009.jpg"
   }
  },
  {
   "n": 28,
   "theme": "Un champ de lavande",
   "a": {
    "img": "images/w/reel-28-lavande.webp",
    "ia": false,
    "cle": "lavande",
    "theme": "Un champ de lavande",
    "auteur": "掬茶",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ALavender_field_in_Misato_Town%2C_Akita_20180624c.jpg"
   },
   "b": {
    "img": "images/w/ia-28-lavande.webp",
    "ia": true,
    "cle": "lavande",
    "theme": "Un champ de lavande"
   }
  },
  {
   "n": 29,
   "theme": "Un chat",
   "a": {
    "img": "images/w/ia-29-chat.webp",
    "ia": true,
    "cle": "chat",
    "theme": "Un chat"
   },
   "b": {
    "img": "images/w/reel-29-chat.webp",
    "ia": false,
    "cle": "chat",
    "theme": "Un chat",
    "auteur": "Meine Mutter (Erlaubnis liegt vor)",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3A2017-08-07_Katze_Sankt-Englmar_01.jpg"
   }
  },
  {
   "n": 30,
   "theme": "Un hall de gare",
   "a": {
    "img": "images/w/ia-30-gare.webp",
    "ia": true,
    "cle": "gare",
    "theme": "Un hall de gare"
   },
   "b": {
    "img": "images/w/reel-30-gare.webp",
    "ia": false,
    "cle": "gare",
    "theme": "Un hall de gare",
    "auteur": "mattbuck ( category )",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AKing%27s_Cross_railway_station_MMB_04_365507_365515.jpg"
   }
  },
  {
   "n": 31,
   "theme": "Une bibliothèque ancienne",
   "a": {
    "img": "images/w/reel-31-bibliotheque.webp",
    "ia": false,
    "cle": "bibliotheque",
    "theme": "Une bibliothèque ancienne",
    "auteur": "Rodrigo.Argenton",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AWestmount_Public_Library_by_Rodrigo_Tetsuo_Argenton_%2803%29.jpg"
   },
   "b": {
    "img": "images/w/ia-31-bibliotheque.webp",
    "ia": true,
    "cle": "bibliotheque",
    "theme": "Une bibliothèque ancienne"
   }
  },
  {
   "n": 32,
   "theme": "Une plage tropicale",
   "a": {
    "img": "images/w/ia-32-plage.webp",
    "ia": true,
    "cle": "plage",
    "theme": "Une plage tropicale"
   },
   "b": {
    "img": "images/w/reel-32-plage.webp",
    "ia": false,
    "cle": "plage",
    "theme": "Une plage tropicale",
    "auteur": "Guillaume Baviere",
    "licence": "CC BY-SA 2.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ASk%C3%A5ne_2018-07-20_%2844475072371%29.jpg"
   }
  },
  {
   "n": 33,
   "theme": "Une cascade en forêt",
   "a": {
    "img": "images/w/ia-33-cascade.webp",
    "ia": true,
    "cle": "cascade",
    "theme": "Une cascade en forêt"
   },
   "b": {
    "img": "images/w/reel-33-cascade.webp",
    "ia": false,
    "cle": "cascade",
    "theme": "Une cascade en forêt",
    "auteur": "Dietmar Rabich",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AWaldbillig_%28LU%29%2C_Schiessent%C3%BCmpel_--_2015_--_6020.jpg"
   }
  },
  {
   "n": 34,
   "theme": "Une rue de nuit sous les néons",
   "a": {
    "img": "images/w/reel-34-neons.webp",
    "ia": false,
    "cle": "neons",
    "theme": "Une rue de nuit sous les néons",
    "auteur": "Basile Morin",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AColorful_neon_street_signs_in_Kabukich%C5%8D%2C_Shinjuku%2C_Tokyo.jpg"
   },
   "b": {
    "img": "images/w/ia-34-neons.webp",
    "ia": true,
    "cle": "neons",
    "theme": "Une rue de nuit sous les néons"
   }
  },
  {
   "n": 35,
   "theme": "Un cheval au galop",
   "a": {
    "img": "images/w/ia-35-cheval.webp",
    "ia": true,
    "cle": "cheval",
    "theme": "Un cheval au galop"
   },
   "b": {
    "img": "images/w/reel-35-cheval.webp",
    "ia": false,
    "cle": "cheval",
    "theme": "Un cheval au galop",
    "auteur": "Henk Monster",
    "licence": "CC BY 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ALovely_horses_at_Schaarsbergen_in_the_wood_meadow_-_panoramio.jpg"
   }
  },
  {
   "n": 36,
   "theme": "Des montgolfières",
   "a": {
    "img": "images/w/ia-36-montgolfieres.webp",
    "ia": true,
    "cle": "montgolfieres",
    "theme": "Des montgolfières"
   },
   "b": {
    "img": "images/w/reel-36-montgolfieres.webp",
    "ia": false,
    "cle": "montgolfieres",
    "theme": "Des montgolfières",
    "auteur": "Dietmar Rabich",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AM%C3%BCnster%2C_Montgolfiade_%28an_den_Aaseewiesen%29_--_2019_--_9775.jpg"
   }
  },
  {
   "n": 37,
   "theme": "Des flamants roses",
   "a": {
    "img": "images/w/reel-37-flamants.webp",
    "ia": false,
    "cle": "flamants",
    "theme": "Des flamants roses",
    "auteur": "Yerpo",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AGreater_flamingo_flock_%28Se%C4%8Dovlje_salina%29.jpg"
   },
   "b": {
    "img": "images/w/ia-37-flamants.webp",
    "ia": true,
    "cle": "flamants",
    "theme": "Des flamants roses"
   }
  },
  {
   "n": 38,
   "theme": "Un iceberg",
   "a": {
    "img": "images/w/reel-38-iceberg.webp",
    "ia": false,
    "cle": "iceberg",
    "theme": "Un iceberg",
    "auteur": "Luca Galuzzi ( Lucag )",
    "licence": "CC BY-SA 2.5",
    "url": "https://commons.wikimedia.org/wiki/File%3AT%C3%A8mpanos_%28iceberg%29_Lago_Argentino_Brazo_Norte_Patagonia_Argentina_Luca_Galuzzi_2005.JPG"
   },
   "b": {
    "img": "images/w/ia-38-iceberg.webp",
    "ia": true,
    "cle": "iceberg",
    "theme": "Un iceberg"
   }
  },
  {
   "n": 39,
   "theme": "Des dunes de sable",
   "a": {
    "img": "images/w/ia-39-dunes.webp",
    "ia": true,
    "cle": "dunes",
    "theme": "Des dunes de sable"
   },
   "b": {
    "img": "images/w/reel-39-dunes.webp",
    "ia": false,
    "cle": "dunes",
    "theme": "Des dunes de sable",
    "auteur": "blmcalifornia",
    "licence": "Public domain",
    "url": "https://commons.wikimedia.org/wiki/File%3ADumont_Dunes_%2849278954738%29.jpg"
   }
  },
  {
   "n": 40,
   "theme": "Un vieux pont de pierre",
   "a": {
    "img": "images/w/ia-40-pont.webp",
    "ia": true,
    "cle": "pont",
    "theme": "Un vieux pont de pierre"
   },
   "b": {
    "img": "images/w/reel-40-pont.webp",
    "ia": false,
    "cle": "pont",
    "theme": "Un vieux pont de pierre",
    "auteur": "Greg Gjerdingen",
    "licence": "CC BY 2.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ADSC05680_%2821895611889%29.jpg"
   }
  },
  {
   "n": 41,
   "theme": "L'intérieur d'un café",
   "a": {
    "img": "images/w/reel-41-cafe.webp",
    "ia": false,
    "cle": "cafe",
    "theme": "L'intérieur d'un café",
    "auteur": "EvanCarroll",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AAntidote_Coffee.jpg"
   },
   "b": {
    "img": "images/w/ia-41-cafe.webp",
    "ia": true,
    "cle": "cafe",
    "theme": "L'intérieur d'un café"
   }
  },
  {
   "n": 42,
   "theme": "Un chantier",
   "a": {
    "img": "images/w/reel-42-chantier.webp",
    "ia": false,
    "cle": "chantier",
    "theme": "Un chantier",
    "auteur": "C messier",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3A%CE%95%CF%81%CE%B3%CE%BF%CF%84%CE%AC%CE%BE%CE%B9%CE%BF_%CF%83%CF%84%CE%BF_Leiden_6837.jpg"
   },
   "b": {
    "img": "images/w/ia-42-chantier.webp",
    "ia": true,
    "cle": "chantier",
    "theme": "Un chantier"
   }
  },
  {
   "n": 43,
   "theme": "Un papillon sur une fleur",
   "a": {
    "img": "images/w/ia-43-papillon.webp",
    "ia": true,
    "cle": "papillon",
    "theme": "Un papillon sur une fleur"
   },
   "b": {
    "img": "images/w/reel-43-papillon.webp",
    "ia": false,
    "cle": "papillon",
    "theme": "Un papillon sur une fleur",
    "auteur": "Basile Morin",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AYellow_butterfly_on_Tagetes_lucida.jpg"
   }
  },
  {
   "n": 44,
   "theme": "Une chouette",
   "a": {
    "img": "images/w/reel-44-chouette.webp",
    "ia": false,
    "cle": "chouette",
    "theme": "Une chouette",
    "auteur": "Guywelch2000",
    "licence": "CC BY 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ABarred_Owl_forest_canopy_Seattle_Washington_2026.jpg"
   },
   "b": {
    "img": "images/w/ia-44-chouette.webp",
    "ia": true,
    "cle": "chouette",
    "theme": "Une chouette"
   }
  },
  {
   "n": 45,
   "theme": "Un champ de tournesols",
   "a": {
    "img": "images/w/ia-45-tournesols.webp",
    "ia": true,
    "cle": "tournesols",
    "theme": "Un champ de tournesols"
   },
   "b": {
    "img": "images/w/reel-45-tournesols.webp",
    "ia": false,
    "cle": "tournesols",
    "theme": "Un champ de tournesols",
    "auteur": "HLI-Photography",
    "licence": "CC0",
    "url": "https://commons.wikimedia.org/wiki/File%3ABig_Sunflower_waiting_for_a_Visitor.jpg"
   }
  },
  {
   "n": 46,
   "theme": "Un escalier en colimaçon",
   "a": {
    "img": "images/w/ia-46-escalier.webp",
    "ia": true,
    "cle": "escalier",
    "theme": "Un escalier en colimaçon"
   },
   "b": {
    "img": "images/w/reel-46-escalier.webp",
    "ia": false,
    "cle": "escalier",
    "theme": "Un escalier en colimaçon",
    "auteur": "Zairon",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ASonne-Mond-See_Ci_En_Pagoda_Innen_Treppenhaus.jpg"
   }
  },
  {
   "n": 47,
   "theme": "La Voie lactée",
   "a": {
    "img": "images/w/reel-47-voielactee.webp",
    "ia": false,
    "cle": "voielactee",
    "theme": "La Voie lactée",
    "auteur": "ESO/ P. Horálek",
    "licence": "CC BY 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AESO%E2%80%99s_ELT_home_in_the_desert_%28potw2127a%29.jpg"
   },
   "b": {
    "img": "images/w/ia-47-voielactee.webp",
    "ia": true,
    "cle": "voielactee",
    "theme": "La Voie lactée"
   }
  },
  {
   "n": 48,
   "theme": "Une méduse",
   "a": {
    "img": "images/w/ia-48-meduse.webp",
    "ia": true,
    "cle": "meduse",
    "theme": "Une méduse"
   },
   "b": {
    "img": "images/w/reel-48-meduse.webp",
    "ia": false,
    "cle": "meduse",
    "theme": "Une méduse",
    "auteur": "Symbiosis",
    "licence": "CC BY 2.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AThe_Moon_Jellyfish_-_53954437201.jpg"
   }
  },
  {
   "n": 49,
   "theme": "Un étal de poissons",
   "a": {
    "img": "images/w/ia-49-poissonnerie.webp",
    "ia": true,
    "cle": "poissonnerie",
    "theme": "Un étal de poissons"
   },
   "b": {
    "img": "images/w/reel-49-poissonnerie.webp",
    "ia": false,
    "cle": "poissonnerie",
    "theme": "Un étal de poissons",
    "auteur": "Chester Siu",
    "licence": "Public domain",
    "url": "https://commons.wikimedia.org/wiki/File%3AFish_on_a_fish_market_in_Fukuoka.jpg"
   }
  },
  {
   "n": 50,
   "theme": "Un vélo contre un mur",
   "a": {
    "img": "images/w/reel-50-velo.webp",
    "ia": false,
    "cle": "velo",
    "theme": "Un vélo contre un mur",
    "auteur": "CEphoto, Uwe Aranas",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AHue_Vietnam_Nun-with-bicycle-01.jpg"
   },
   "b": {
    "img": "images/w/ia-50-velo.webp",
    "ia": true,
    "cle": "velo",
    "theme": "Un vélo contre un mur"
   }
  },
  {
   "n": 51,
   "theme": "Une libellule",
   "a": {
    "img": "images/w/reel-51-libellule.webp",
    "ia": false,
    "cle": "libellule",
    "theme": "Une libellule",
    "auteur": "Joydeep",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ADiplacodes_trivialis%2C_West_Bengal%2C_India_13_09_2012_%282%29.jpg"
   },
   "b": {
    "img": "images/w/ia-51-libellule.webp",
    "ia": true,
    "cle": "libellule",
    "theme": "Une libellule"
   }
  },
  {
   "n": 52,
   "theme": "Un écureuil",
   "a": {
    "img": "images/w/ia-52-ecureuil.webp",
    "ia": true,
    "cle": "ecureuil",
    "theme": "Un écureuil"
   },
   "b": {
    "img": "images/w/reel-52-ecureuil.webp",
    "ia": false,
    "cle": "ecureuil",
    "theme": "Un écureuil",
    "auteur": "Diliff",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AEastern_Grey_Squirrel_in_St_James%27s_Park%2C_London_-_Nov_2006_edit.jpg"
   }
  },
  {
   "n": 53,
   "theme": "Un cerf",
   "a": {
    "img": "images/w/ia-53-cerf.webp",
    "ia": true,
    "cle": "cerf",
    "theme": "Un cerf"
   },
   "b": {
    "img": "images/w/reel-53-cerf.webp",
    "ia": false,
    "cle": "cerf",
    "theme": "Un cerf",
    "auteur": "Timothy Gonsalves",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ASambar_Corbett_India_Dec19_D72_12585.jpg"
   }
  },
  {
   "n": 54,
   "theme": "Une abeille sur une fleur",
   "a": {
    "img": "images/w/reel-54-abeille.webp",
    "ia": false,
    "cle": "abeille",
    "theme": "Une abeille sur une fleur",
    "auteur": "Richard Bartz, Munich Makro Freak",
    "licence": "CC BY-SA 2.5",
    "url": "https://commons.wikimedia.org/wiki/File%3AApinae_Bombus_pascuorum.jpg"
   },
   "b": {
    "img": "images/w/ia-54-abeille.webp",
    "ia": true,
    "cle": "abeille",
    "theme": "Une abeille sur une fleur"
   }
  },
  {
   "n": 55,
   "theme": "Une grenouille",
   "a": {
    "img": "images/w/ia-55-grenouille.webp",
    "ia": true,
    "cle": "grenouille",
    "theme": "Une grenouille"
   },
   "b": {
    "img": "images/w/reel-55-grenouille.webp",
    "ia": false,
    "cle": "grenouille",
    "theme": "Une grenouille",
    "auteur": "Christophe Meneboeuf",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ARedEyesFrogs_Mating_%28pixinn.net%29.jpg"
   }
  },
  {
   "n": 56,
   "theme": "Une tortue de mer",
   "a": {
    "img": "images/w/ia-56-tortuemer.webp",
    "ia": true,
    "cle": "tortuemer",
    "theme": "Une tortue de mer"
   },
   "b": {
    "img": "images/w/reel-56-tortuemer.webp",
    "ia": false,
    "cle": "tortuemer",
    "theme": "Une tortue de mer",
    "auteur": "Dominik Keller",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AChelonia_mydas_swimming%2C_Hawaii.jpg"
   }
  },
  {
   "n": 57,
   "theme": "Des manchots",
   "a": {
    "img": "images/w/reel-57-manchots.webp",
    "ia": false,
    "cle": "manchots",
    "theme": "Des manchots",
    "auteur": "Tanya Patrick, CSIRO",
    "licence": "CC BY 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ACSIRO_ScienceImage_3815_Tanya_Patrick_checks_out_a_colony_of_Adelie_penguins.jpg"
   },
   "b": {
    "img": "images/w/ia-57-manchots.webp",
    "ia": true,
    "cle": "manchots",
    "theme": "Des manchots"
   }
  },
  {
   "n": 58,
   "theme": "Un ours brun",
   "a": {
    "img": "images/w/reel-58-ours.webp",
    "ia": false,
    "cle": "ours",
    "theme": "Un ours brun",
    "auteur": "Anil Öztas",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AUrsus_arctos%2C_Kuterevo_%28HR%29_--_2022_--_0379.jpg"
   },
   "b": {
    "img": "images/w/ia-58-ours.webp",
    "ia": true,
    "cle": "ours",
    "theme": "Un ours brun"
   }
  },
  {
   "n": 59,
   "theme": "Un loup",
   "a": {
    "img": "images/w/ia-59-loup.webp",
    "ia": true,
    "cle": "loup",
    "theme": "Un loup"
   },
   "b": {
    "img": "images/w/reel-59-loup.webp",
    "ia": false,
    "cle": "loup",
    "theme": "Un loup",
    "auteur": "Eric Kilby",
    "licence": "CC BY-SA 2.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AGray_Wolf_Standing_in_the_Snow_%2823707637993%29.jpg"
   }
  },
  {
   "n": 60,
   "theme": "Un aigle en vol",
   "a": {
    "img": "images/w/reel-60-aigle.webp",
    "ia": false,
    "cle": "aigle",
    "theme": "Un aigle en vol",
    "auteur": "Andreas Weith",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AAdult_white-tailed_eagle_%28Haliaeetus_albicilla%29_of_central_Poland_in_flight_%283%29.jpg"
   },
   "b": {
    "img": "images/w/ia-60-aigle.webp",
    "ia": true,
    "cle": "aigle",
    "theme": "Un aigle en vol"
   }
  },
  {
   "n": 61,
   "theme": "Un colibri",
   "a": {
    "img": "images/w/ia-61-colibri.webp",
    "ia": true,
    "cle": "colibri",
    "theme": "Un colibri"
   },
   "b": {
    "img": "images/w/reel-61-colibri.webp",
    "ia": false,
    "cle": "colibri",
    "theme": "Un colibri",
    "auteur": "Joe Schneid , Louisville, Kentucky",
    "licence": "CC BY 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ARubyThroatedHummingbird%28Crop%29.jpg"
   }
  },
  {
   "n": 62,
   "theme": "Un caméléon",
   "a": {
    "img": "images/w/ia-62-cameleon.webp",
    "ia": true,
    "cle": "cameleon",
    "theme": "Un caméléon"
   },
   "b": {
    "img": "images/w/reel-62-cameleon.webp",
    "ia": false,
    "cle": "cameleon",
    "theme": "Un caméléon",
    "auteur": "Prabhu parmar",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AChameleon_holding_its_own_tail_while_sleeping.JPG"
   }
  },
  {
   "n": 63,
   "theme": "Un récif corallien",
   "a": {
    "img": "images/w/reel-63-recif.webp",
    "ia": false,
    "cle": "recif",
    "theme": "Un récif corallien",
    "auteur": "Diego Delso",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3APez_ballesta_picasso_ar%C3%A1bigo_%28Rhinecanthus_assasi%29%2C_mar_Rojo%2C_Egipto%2C_2023-04-18%2C_DD_22.jpg"
   },
   "b": {
    "img": "images/w/ia-63-recif.webp",
    "ia": true,
    "cle": "recif",
    "theme": "Un récif corallien"
   }
  },
  {
   "n": 64,
   "theme": "Un requin",
   "a": {
    "img": "images/w/ia-64-requin.webp",
    "ia": true,
    "cle": "requin",
    "theme": "Un requin"
   },
   "b": {
    "img": "images/w/reel-64-requin.webp",
    "ia": false,
    "cle": "requin",
    "theme": "Un requin",
    "auteur": "Mfield , Matthew Field, www.photography.mattfield.com",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ALeopard_shark_in_kelp.jpg"
   }
  },
  {
   "n": 65,
   "theme": "Une baleine",
   "a": {
    "img": "images/w/reel-65-baleine.webp",
    "ia": false,
    "cle": "baleine",
    "theme": "Une baleine",
    "auteur": "Mike Baird",
    "licence": "CC BY 2.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ABlue_whale_tail.JPG"
   },
   "b": {
    "img": "images/w/ia-65-baleine.webp",
    "ia": true,
    "cle": "baleine",
    "theme": "Une baleine"
   }
  },
  {
   "n": 66,
   "theme": "Un champ de blé",
   "a": {
    "img": "images/w/ia-66-ble.webp",
    "ia": true,
    "cle": "ble",
    "theme": "Un champ de blé"
   },
   "b": {
    "img": "images/w/reel-66-ble.webp",
    "ia": false,
    "cle": "ble",
    "theme": "Un champ de blé",
    "auteur": "Dietmar Rabich",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AD%C3%BClmen%2C_Hausd%C3%BClmen%2C_Feld_--_2016_--_3693.jpg"
   }
  },
  {
   "n": 67,
   "theme": "Un vignoble",
   "a": {
    "img": "images/w/reel-67-vignoble.webp",
    "ia": false,
    "cle": "vignoble",
    "theme": "Un vignoble",
    "auteur": "Ethan Prater",
    "licence": "CC BY 2.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ACristom_Vineyard_Oregon_with_example_of_clear_cultivation.jpg"
   },
   "b": {
    "img": "images/w/ia-67-vignoble.webp",
    "ia": true,
    "cle": "vignoble",
    "theme": "Un vignoble"
   }
  },
  {
   "n": 68,
   "theme": "Des oliviers",
   "a": {
    "img": "images/w/ia-68-oliviers.webp",
    "ia": true,
    "cle": "oliviers",
    "theme": "Des oliviers"
   },
   "b": {
    "img": "images/w/reel-68-oliviers.webp",
    "ia": false,
    "cle": "oliviers",
    "theme": "Des oliviers",
    "auteur": "Isiwal",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AOstuni_olive_grove_SS379-3339.jpg"
   }
  },
  {
   "n": 69,
   "theme": "Une bambouseraie",
   "a": {
    "img": "images/w/ia-69-bambous.webp",
    "ia": true,
    "cle": "bambous",
    "theme": "Une bambouseraie"
   },
   "b": {
    "img": "images/w/reel-69-bambous.webp",
    "ia": false,
    "cle": "bambous",
    "theme": "Une bambouseraie",
    "auteur": "999real",
    "licence": "CC0",
    "url": "https://commons.wikimedia.org/wiki/File%3AJune_2025_Bamboo_Cathedral_01.jpg"
   }
  },
  {
   "n": 70,
   "theme": "Une forêt en automne",
   "a": {
    "img": "images/w/reel-70-automne.webp",
    "ia": false,
    "cle": "automne",
    "theme": "Une forêt en automne",
    "auteur": "Roman Eisele",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ABeilstein_-_Maad_-_Schmidbachtal_mit_altem_Feldweg_am_Nonnenwald_im_November.jpg"
   },
   "b": {
    "img": "images/w/ia-70-automne.webp",
    "ia": true,
    "cle": "automne",
    "theme": "Une forêt en automne"
   }
  },
  {
   "n": 71,
   "theme": "Des rizières en terrasses",
   "a": {
    "img": "images/w/ia-71-rizieres.webp",
    "ia": true,
    "cle": "rizieres",
    "theme": "Des rizières en terrasses"
   },
   "b": {
    "img": "images/w/reel-71-rizieres.webp",
    "ia": false,
    "cle": "rizieres",
    "theme": "Des rizières en terrasses",
    "auteur": "CEphoto, Uwe Aranas",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ABanaue_Philippines_Batad-Rice-Terraces-04.jpg"
   }
  },
  {
   "n": 72,
   "theme": "Une éruption volcanique",
   "a": {
    "img": "images/w/ia-72-lave.webp",
    "ia": true,
    "cle": "lave",
    "theme": "Une éruption volcanique"
   },
   "b": {
    "img": "images/w/reel-72-lave.webp",
    "ia": false,
    "cle": "lave",
    "theme": "Une éruption volcanique",
    "auteur": "U.S. Navy Photo By Mass Communication Specialist 3rd Cl…",
    "licence": "Public domain",
    "url": "https://commons.wikimedia.org/wiki/File%3AEruption_of_Jabal_al-Tair_Island_at_night.jpg"
   }
  },
  {
   "n": 73,
   "theme": "Un canyon",
   "a": {
    "img": "images/w/reel-73-canyon.webp",
    "ia": false,
    "cle": "canyon",
    "theme": "Un canyon",
    "auteur": "Saddam19",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AMustang_Valley%2C_Nepal.jpg"
   },
   "b": {
    "img": "images/w/ia-73-canyon.webp",
    "ia": true,
    "cle": "canyon",
    "theme": "Un canyon"
   }
  },
  {
   "n": 74,
   "theme": "Un fjord",
   "a": {
    "img": "images/w/ia-74-fjord.webp",
    "ia": true,
    "cle": "fjord",
    "theme": "Un fjord"
   },
   "b": {
    "img": "images/w/reel-74-fjord.webp",
    "ia": false,
    "cle": "fjord",
    "theme": "Un fjord",
    "auteur": "Ximonic , Simo Räsänen",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ADjupfjorden%2C_2010_09.jpg"
   }
  },
  {
   "n": 75,
   "theme": "Une grotte",
   "a": {
    "img": "images/w/ia-75-grotte.webp",
    "ia": true,
    "cle": "grotte",
    "theme": "Une grotte"
   },
   "b": {
    "img": "images/w/reel-75-grotte.webp",
    "ia": false,
    "cle": "grotte",
    "theme": "Une grotte",
    "auteur": "Anil Öztas",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ADugopolje_%28HR%29%2C_Vranja%C4%8Da-H%C3%B6hle_--_2022_--_0123.jpg"
   }
  },
  {
   "n": 76,
   "theme": "Un lac gelé",
   "a": {
    "img": "images/w/reel-76-lacgele.webp",
    "ia": false,
    "cle": "lacgele",
    "theme": "Un lac gelé",
    "auteur": "Pseudopanax at English Wikipedia",
    "licence": "Public domain",
    "url": "https://commons.wikimedia.org/wiki/File%3AMt_Sefton_and_The_Footstool_behind_frozen_Mueller_Glacier_Lake_in_winter.jpg"
   },
   "b": {
    "img": "images/w/ia-76-lacgele.webp",
    "ia": true,
    "cle": "lacgele",
    "theme": "Un lac gelé"
   }
  },
  {
   "n": 77,
   "theme": "Une tempête de sable",
   "a": {
    "img": "images/w/ia-77-tempetesable.webp",
    "ia": true,
    "cle": "tempetesable",
    "theme": "Une tempête de sable"
   },
   "b": {
    "img": "images/w/reel-77-tempetesable.webp",
    "ia": false,
    "cle": "tempetesable",
    "theme": "Une tempête de sable",
    "auteur": "Twips",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AMan_in_sandstorm_-_panoramio.jpg"
   }
  },
  {
   "n": 78,
   "theme": "Un arc-en-ciel",
   "a": {
    "img": "images/w/reel-78-arcenciel.webp",
    "ia": false,
    "cle": "arcenciel",
    "theme": "Un arc-en-ciel",
    "auteur": "David Roberts",
    "licence": "CC BY-SA 2.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ARainbow_over_the_Rooftops_-_geograph.org.uk_-_1671397.jpg"
   },
   "b": {
    "img": "images/w/ia-78-arcenciel.webp",
    "ia": true,
    "cle": "arcenciel",
    "theme": "Un arc-en-ciel"
   }
  },
  {
   "n": 79,
   "theme": "Du brouillard sur les collines",
   "a": {
    "img": "images/w/ia-79-brouillard.webp",
    "ia": true,
    "cle": "brouillard",
    "theme": "Du brouillard sur les collines"
   },
   "b": {
    "img": "images/w/reel-79-brouillard.webp",
    "ia": false,
    "cle": "brouillard",
    "theme": "Du brouillard sur les collines",
    "auteur": "Marilyn Peddle",
    "licence": "CC BY 2.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AA_dog_in_Hambledon_Hill.jpg"
   }
  },
  {
   "n": 80,
   "theme": "Un coucher de soleil",
   "a": {
    "img": "images/w/reel-80-coucherdesoleil.webp",
    "ia": false,
    "cle": "coucherdesoleil",
    "theme": "Un coucher de soleil",
    "auteur": "Prosthetic Head",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ASunset_through_olives.JPG"
   },
   "b": {
    "img": "images/w/ia-80-coucherdesoleil.webp",
    "ia": true,
    "cle": "coucherdesoleil",
    "theme": "Un coucher de soleil"
   }
  },
  {
   "n": 81,
   "theme": "Une locomotive à vapeur",
   "a": {
    "img": "images/w/reel-81-vapeur.webp",
    "ia": false,
    "cle": "vapeur",
    "theme": "Une locomotive à vapeur",
    "auteur": "Cccefalon",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ASabahHeritageSteamTrain-04.jpg"
   },
   "b": {
    "img": "images/w/ia-81-vapeur.webp",
    "ia": true,
    "cle": "vapeur",
    "theme": "Une locomotive à vapeur"
   }
  },
  {
   "n": 82,
   "theme": "Un avion de ligne",
   "a": {
    "img": "images/w/ia-82-avion.webp",
    "ia": true,
    "cle": "avion",
    "theme": "Un avion de ligne"
   },
   "b": {
    "img": "images/w/reel-82-avion.webp",
    "ia": false,
    "cle": "avion",
    "theme": "Un avion de ligne",
    "auteur": "Julian Herzog ( Website )",
    "licence": "CC BY 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ALufthansa_Airbus_A320-211_D-AIQT_01.jpg"
   }
  },
  {
   "n": 83,
   "theme": "Un voilier",
   "a": {
    "img": "images/w/ia-83-voilier.webp",
    "ia": true,
    "cle": "voilier",
    "theme": "Un voilier"
   },
   "b": {
    "img": "images/w/reel-83-voilier.webp",
    "ia": false,
    "cle": "voilier",
    "theme": "Un voilier",
    "auteur": "Dietmar Rabich",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AKnysna_%28ZA%29%2C_Knysna_River%2C_Segelboot_--_2024_--_2420.jpg"
   }
  },
  {
   "n": 84,
   "theme": "Un marché de Noël",
   "a": {
    "img": "images/w/reel-84-noel.webp",
    "ia": false,
    "cle": "noel",
    "theme": "Un marché de Noël",
    "auteur": "Roland zh",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AWeihnachtsmarkt_D%C3%B6rfli-Rosenhof_IMG_4973.JPG"
   },
   "b": {
    "img": "images/w/ia-84-noel.webp",
    "ia": true,
    "cle": "noel",
    "theme": "Un marché de Noël"
   }
  },
  {
   "n": 85,
   "theme": "Un feu d'artifice",
   "a": {
    "img": "images/w/reel-85-feudartifice.webp",
    "ia": false,
    "cle": "feudartifice",
    "theme": "Un feu d'artifice",
    "auteur": "AlixSaz",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AFirework_%D1%84%D0%B5%D0%B9%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%BA_6176.jpg"
   },
   "b": {
    "img": "images/w/ia-85-feudartifice.webp",
    "ia": true,
    "cle": "feudartifice",
    "theme": "Un feu d'artifice"
   }
  },
  {
   "n": 86,
   "theme": "Un costume de fête",
   "a": {
    "img": "images/w/ia-86-carnaval.webp",
    "ia": true,
    "cle": "carnaval",
    "theme": "Un costume de fête"
   },
   "b": {
    "img": "images/w/reel-86-carnaval.webp",
    "ia": false,
    "cle": "carnaval",
    "theme": "Un costume de fête",
    "auteur": "Lance Anthony",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AKarnival3.jpg"
   }
  },
  {
   "n": 87,
   "theme": "Un temple asiatique",
   "a": {
    "img": "images/w/reel-87-templeasie.webp",
    "ia": false,
    "cle": "templeasie",
    "theme": "Un temple asiatique",
    "auteur": "Angus Cepka",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ATianning_Temple_1.JPG"
   },
   "b": {
    "img": "images/w/ia-87-templeasie.webp",
    "ia": true,
    "cle": "templeasie",
    "theme": "Un temple asiatique"
   }
  },
  {
   "n": 88,
   "theme": "L'intérieur d'une mosquée",
   "a": {
    "img": "images/w/ia-88-mosquee.webp",
    "ia": true,
    "cle": "mosquee",
    "theme": "L'intérieur d'une mosquée"
   },
   "b": {
    "img": "images/w/reel-88-mosquee.webp",
    "ia": false,
    "cle": "mosquee",
    "theme": "L'intérieur d'une mosquée",
    "auteur": "Phillip Maiwald ( Nikopol )",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ASheikh-Lotf-Allah_mosque_wall_and_ceiling_2.jpg"
   }
  },
  {
   "n": 89,
   "theme": "Un château",
   "a": {
    "img": "images/w/reel-89-chateau.webp",
    "ia": false,
    "cle": "chateau",
    "theme": "Un château",
    "auteur": "Scotch Mist",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ATren%C4%8D%C3%ADn_Castle_53.jpg"
   },
   "b": {
    "img": "images/w/ia-89-chateau.webp",
    "ia": true,
    "cle": "chateau",
    "theme": "Un château"
   }
  },
  {
   "n": 90,
   "theme": "Un village de montagne",
   "a": {
    "img": "images/w/reel-90-villagemontagne.webp",
    "ia": false,
    "cle": "villagemontagne",
    "theme": "Un village de montagne",
    "auteur": "Marsel Minga",
    "licence": "CC0",
    "url": "https://commons.wikimedia.org/wiki/File%3AMm29a_0808_Alpine_Village_%2873496679%29.jpeg"
   },
   "b": {
    "img": "images/w/ia-90-villagemontagne.webp",
    "ia": true,
    "cle": "villagemontagne",
    "theme": "Un village de montagne"
   }
  },
  {
   "n": 91,
   "theme": "Un gratte-ciel",
   "a": {
    "img": "images/w/ia-91-gratteciel.webp",
    "ia": true,
    "cle": "gratteciel",
    "theme": "Un gratte-ciel"
   },
   "b": {
    "img": "images/w/reel-91-gratteciel.webp",
    "ia": false,
    "cle": "gratteciel",
    "theme": "Un gratte-ciel",
    "auteur": "Paul Colin Hennig firstdorsal.eu",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AUpward_view_of_a_gridded_high-rise_facade_in_Frankfurt_%282025%29.jpg"
   }
  },
  {
   "n": 92,
   "theme": "Un pont suspendu",
   "a": {
    "img": "images/w/reel-92-pontsuspendu.webp",
    "ia": false,
    "cle": "pontsuspendu",
    "theme": "Un pont suspendu",
    "auteur": "Dietmar Rabich",
    "licence": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ANew_York_City_%28New_York%2C_USA%29%2C_Brooklyn_Bridge_--_2012_--_6630.jpg"
   },
   "b": {
    "img": "images/w/ia-92-pontsuspendu.webp",
    "ia": true,
    "cle": "pontsuspendu",
    "theme": "Un pont suspendu"
   }
  },
  {
   "n": 93,
   "theme": "Un tunnel routier",
   "a": {
    "img": "images/w/reel-93-tunnel.webp",
    "ia": false,
    "cle": "tunnel",
    "theme": "Un tunnel routier",
    "auteur": "Terry Kearney",
    "licence": "CC0",
    "url": "https://commons.wikimedia.org/wiki/File%3ATHE_ROAD_BENEATH_THE_MERSEY_-_Flickr_-_Terry_Kearney.jpg"
   },
   "b": {
    "img": "images/w/ia-93-tunnel.webp",
    "ia": true,
    "cle": "tunnel",
    "theme": "Un tunnel routier"
   }
  },
  {
   "n": 94,
   "theme": "Une piscine",
   "a": {
    "img": "images/w/ia-94-piscine.webp",
    "ia": true,
    "cle": "piscine",
    "theme": "Une piscine"
   },
   "b": {
    "img": "images/w/reel-94-piscine.webp",
    "ia": false,
    "cle": "piscine",
    "theme": "Une piscine",
    "auteur": "Sebjarod",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AMontpellier_WPCpeFr_bassinvide_04102009b.JPG"
   }
  },
  {
   "n": 95,
   "theme": "Un stade",
   "a": {
    "img": "images/w/ia-95-stade.webp",
    "ia": true,
    "cle": "stade",
    "theme": "Un stade"
   },
   "b": {
    "img": "images/w/reel-95-stade.webp",
    "ia": false,
    "cle": "stade",
    "theme": "Un stade",
    "auteur": "Ken Lund",
    "licence": "CC BY-SA 2.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AAces_Ballpark%2C_Reno%2C_Nevada_%2820721267273%29.jpg"
   }
  },
  {
   "n": 96,
   "theme": "Une boulangerie",
   "a": {
    "img": "images/w/reel-96-boulangerie.webp",
    "ia": false,
    "cle": "boulangerie",
    "theme": "Une boulangerie",
    "auteur": "Alan Stanton",
    "licence": "CC BY-SA 2.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AGranier_-_Bakery_and_Caf%C3%A9_in_Wood_Green_-_2.jpg"
   },
   "b": {
    "img": "images/w/ia-96-boulangerie.webp",
    "ia": true,
    "cle": "boulangerie",
    "theme": "Une boulangerie"
   }
  },
  {
   "n": 97,
   "theme": "Un étal de fromages",
   "a": {
    "img": "images/w/reel-97-fromages.webp",
    "ia": false,
    "cle": "fromages",
    "theme": "Un étal de fromages",
    "auteur": "Daderot",
    "licence": "CC0",
    "url": "https://commons.wikimedia.org/wiki/File%3ACheese_display%2C_Cambridge_MA_-_DSC05391.jpg"
   },
   "b": {
    "img": "images/w/ia-97-fromages.webp",
    "ia": true,
    "cle": "fromages",
    "theme": "Un étal de fromages"
   }
  },
  {
   "n": 98,
   "theme": "Un cappuccino",
   "a": {
    "img": "images/w/ia-98-latte.webp",
    "ia": true,
    "cle": "latte",
    "theme": "Un cappuccino"
   },
   "b": {
    "img": "images/w/reel-98-latte.webp",
    "ia": false,
    "cle": "latte",
    "theme": "Un cappuccino",
    "auteur": "Sven Lindner",
    "licence": "CC BY 2.0",
    "url": "https://commons.wikimedia.org/wiki/File%3ACappuccino_at_Lund.jpg"
   }
  },
  {
   "n": 99,
   "theme": "Un moulin à vent",
   "a": {
    "img": "images/w/ia-99-moulin.webp",
    "ia": true,
    "cle": "moulin",
    "theme": "Un moulin à vent"
   },
   "b": {
    "img": "images/w/reel-99-moulin.webp",
    "ia": false,
    "cle": "moulin",
    "theme": "Un moulin à vent",
    "auteur": "@sage_solar",
    "licence": "CC BY 2.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AAs_the_wind_swept_round_its_sails_%2810430403083%29.jpg"
   }
  },
  {
   "n": 100,
   "theme": "Un violon",
   "a": {
    "img": "images/w/reel-100-violon.webp",
    "ia": false,
    "cle": "violon",
    "theme": "Un violon",
    "auteur": "Jorge Royan",
    "licence": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File%3AVienna_-_Violin_detail_-_0061.jpg"
   },
   "b": {
    "img": "images/w/ia-100-violon.webp",
    "ia": true,
    "cle": "violon",
    "theme": "Un violon"
   }
  }
 ],
 "solo": [
  {
   "img": "images/w/reel-51-libellule.webp",
   "ia": false,
   "cle": "libellule",
   "theme": "Une libellule",
   "auteur": "Joydeep",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ADiplacodes_trivialis%2C_West_Bengal%2C_India_13_09_2012_%282%29.jpg",
   "n": 1
  },
  {
   "img": "images/w/ia-09-montagne.webp",
   "ia": true,
   "cle": "lacmontagne",
   "theme": "Un lac de montagne au lever du jour",
   "n": 2
  },
  {
   "img": "images/w/reel-24-usine.webp",
   "ia": false,
   "cle": "usine",
   "theme": "Une usine abandonnée",
   "auteur": "Texniths",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ALipasmata%2C_Drapetsona-2_%28March_2022%29.jpg",
   "n": 3
  },
  {
   "img": "images/w/ia-37-flamants.webp",
   "ia": true,
   "cle": "flamants",
   "theme": "Des flamants roses",
   "n": 4
  },
  {
   "img": "images/w/reel-69-bambous.webp",
   "ia": false,
   "cle": "bambous",
   "theme": "Une bambouseraie",
   "auteur": "999real",
   "licence": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File%3AJune_2025_Bamboo_Cathedral_01.jpg",
   "n": 5
  },
  {
   "img": "images/w/ia-76-lacgele.webp",
   "ia": true,
   "cle": "lacgele",
   "theme": "Un lac gelé",
   "n": 6
  },
  {
   "img": "images/w/ia-23-geyser.webp",
   "ia": true,
   "cle": "geyser",
   "theme": "Un geyser",
   "n": 7
  },
  {
   "img": "images/w/reel-23-neige.webp",
   "ia": false,
   "cle": "neige",
   "theme": "Une rue enneigée",
   "auteur": "Andre Carrotflower",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ASnow_over_Delaware_Avenue%2C_Buffalo%2C_New_York_-_20200207.jpg",
   "n": 8
  },
  {
   "img": "images/w/reel-37-flamants.webp",
   "ia": false,
   "cle": "flamants",
   "theme": "Des flamants roses",
   "auteur": "Yerpo",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AGreater_flamingo_flock_%28Se%C4%8Dovlje_salina%29.jpg",
   "n": 9
  },
  {
   "img": "images/w/ia-84-noel.webp",
   "ia": true,
   "cle": "noel",
   "theme": "Un marché de Noël",
   "n": 10
  },
  {
   "img": "images/w/ia-22-antilope.webp",
   "ia": true,
   "cle": "antilope",
   "theme": "Une antilope étrange",
   "n": 11
  },
  {
   "img": "images/w/reel-66-ble.webp",
   "ia": false,
   "cle": "ble",
   "theme": "Un champ de blé",
   "auteur": "Dietmar Rabich",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AD%C3%BClmen%2C_Hausd%C3%BClmen%2C_Feld_--_2016_--_3693.jpg",
   "n": 12
  },
  {
   "img": "images/w/reel-86-carnaval.webp",
   "ia": false,
   "cle": "carnaval",
   "theme": "Un costume de fête",
   "auteur": "Lance Anthony",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AKarnival3.jpg",
   "n": 13
  },
  {
   "img": "images/w/ia-41-cafe.webp",
   "ia": true,
   "cle": "cafe",
   "theme": "L'intérieur d'un café",
   "n": 14
  },
  {
   "img": "images/w/reel-36-montgolfieres.webp",
   "ia": false,
   "cle": "montgolfieres",
   "theme": "Des montgolfières",
   "auteur": "Dietmar Rabich",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AM%C3%BCnster%2C_Montgolfiade_%28an_den_Aaseewiesen%29_--_2019_--_9775.jpg",
   "n": 15
  },
  {
   "img": "images/w/reel-73-canyon.webp",
   "ia": false,
   "cle": "canyon",
   "theme": "Un canyon",
   "auteur": "Saddam19",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AMustang_Valley%2C_Nepal.jpg",
   "n": 16
  },
  {
   "img": "images/w/ia-43-papillon.webp",
   "ia": true,
   "cle": "papillon",
   "theme": "Un papillon sur une fleur",
   "n": 17
  },
  {
   "img": "images/w/ia-99-moulin.webp",
   "ia": true,
   "cle": "moulin",
   "theme": "Un moulin à vent",
   "n": 18
  },
  {
   "img": "images/w/reel-76-lacgele.webp",
   "ia": false,
   "cle": "lacgele",
   "theme": "Un lac gelé",
   "auteur": "Pseudopanax at English Wikipedia",
   "licence": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File%3AMt_Sefton_and_The_Footstool_behind_frozen_Mueller_Glacier_Lake_in_winter.jpg",
   "n": 19
  },
  {
   "img": "images/w/ia-20-thermale.webp",
   "ia": true,
   "cle": "thermale",
   "theme": "Une source thermale vue du ciel",
   "n": 20
  },
  {
   "img": "images/w/reel-92-pontsuspendu.webp",
   "ia": false,
   "cle": "pontsuspendu",
   "theme": "Un pont suspendu",
   "auteur": "Dietmar Rabich",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ANew_York_City_%28New_York%2C_USA%29%2C_Brooklyn_Bridge_--_2012_--_6630.jpg",
   "n": 21
  },
  {
   "img": "images/w/ia-25-aurore.webp",
   "ia": true,
   "cle": "aurore",
   "theme": "Une aurore boréale",
   "n": 22
  },
  {
   "img": "images/w/ia-53-cerf.webp",
   "ia": true,
   "cle": "cerf",
   "theme": "Un cerf",
   "n": 23
  },
  {
   "img": "images/w/ia-15-enfant.webp",
   "ia": true,
   "cle": "enfants",
   "theme": "Des enfants et de l'eau",
   "n": 24
  },
  {
   "img": "images/w/reel-47-voielactee.webp",
   "ia": false,
   "cle": "voielactee",
   "theme": "La Voie lactée",
   "auteur": "ESO/ P. Horálek",
   "licence": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AESO%E2%80%99s_ELT_home_in_the_desert_%28potw2127a%29.jpg",
   "n": 25
  },
  {
   "img": "images/w/reel-28-lavande.webp",
   "ia": false,
   "cle": "lavande",
   "theme": "Un champ de lavande",
   "auteur": "掬茶",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ALavender_field_in_Misato_Town%2C_Akita_20180624c.jpg",
   "n": 26
  },
  {
   "img": "images/w/reel-72-lave.webp",
   "ia": false,
   "cle": "lave",
   "theme": "Une éruption volcanique",
   "auteur": "U.S. Navy Photo By Mass Communication Specialist 3rd Cl…",
   "licence": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File%3AEruption_of_Jabal_al-Tair_Island_at_night.jpg",
   "n": 27
  },
  {
   "img": "images/w/ia-100-violon.webp",
   "ia": true,
   "cle": "violon",
   "theme": "Un violon",
   "n": 28
  },
  {
   "img": "images/w/ia-10-metro.webp",
   "ia": true,
   "cle": "metro",
   "theme": "Un quai de métro",
   "n": 29
  },
  {
   "img": "images/w/ia-86-carnaval.webp",
   "ia": true,
   "cle": "carnaval",
   "theme": "Un costume de fête",
   "n": 30
  },
  {
   "img": "images/w/reel-91-gratteciel.webp",
   "ia": false,
   "cle": "gratteciel",
   "theme": "Un gratte-ciel",
   "auteur": "Paul Colin Hennig firstdorsal.eu",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AUpward_view_of_a_gridded_high-rise_facade_in_Frankfurt_%282025%29.jpg",
   "n": 31
  },
  {
   "img": "images/w/ia-75-grotte.webp",
   "ia": true,
   "cle": "grotte",
   "theme": "Une grotte",
   "n": 32
  },
  {
   "img": "images/w/reel-17-cuisine.webp",
   "ia": false,
   "cle": "cuisine",
   "theme": "Un plan de travail au petit matin",
   "auteur": "Daniel Case",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AFreshly_brewed_cup_of_espresso_in_sunlight_on_kitchen_counter.jpg",
   "n": 33
  },
  {
   "img": "images/w/reel-40-pont.webp",
   "ia": false,
   "cle": "pont",
   "theme": "Un vieux pont de pierre",
   "auteur": "Greg Gjerdingen",
   "licence": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ADSC05680_%2821895611889%29.jpg",
   "n": 34
  },
  {
   "img": "images/w/reel-18-abribus.webp",
   "ia": false,
   "cle": "abribus",
   "theme": "Un abribus",
   "auteur": "Stratoswift",
   "licence": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File%3AAbribus_%22%C3%A9tangs_de_Boitsfort%22_02.jpg",
   "n": 35
  },
  {
   "img": "images/w/ia-74-fjord.webp",
   "ia": true,
   "cle": "fjord",
   "theme": "Un fjord",
   "n": 36
  },
  {
   "img": "images/w/ia-13-macro.webp",
   "ia": true,
   "cle": "araignee",
   "theme": "Une araignée sauteuse en macro",
   "n": 37
  },
  {
   "img": "images/w/reel-14-ramen.webp",
   "ia": false,
   "cle": "ramen",
   "theme": "Un bol de ramen",
   "auteur": "Luis Carlos Diaz",
   "licence": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ARamen_2.jpg",
   "n": 38
  },
  {
   "img": "images/w/reel-50-velo.webp",
   "ia": false,
   "cle": "velo",
   "theme": "Un vélo contre un mur",
   "auteur": "CEphoto, Uwe Aranas",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AHue_Vietnam_Nun-with-bicycle-01.jpg",
   "n": 39
  },
  {
   "img": "images/w/ia-18-lenticulaire.webp",
   "ia": true,
   "cle": "lenticulaire",
   "theme": "Un nuage lenticulaire",
   "n": 40
  },
  {
   "img": "images/w/reel-30-gare.webp",
   "ia": false,
   "cle": "gare",
   "theme": "Un hall de gare",
   "auteur": "mattbuck ( category )",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AKing%27s_Cross_railway_station_MMB_04_365507_365515.jpg",
   "n": 41
  },
  {
   "img": "images/w/ia-77-tempetesable.webp",
   "ia": true,
   "cle": "tempetesable",
   "theme": "Une tempête de sable",
   "n": 42
  },
  {
   "img": "images/w/ia-90-villagemontagne.webp",
   "ia": true,
   "cle": "villagemontagne",
   "theme": "Un village de montagne",
   "n": 43
  },
  {
   "img": "images/w/ia-46-escalier.webp",
   "ia": true,
   "cle": "escalier",
   "theme": "Un escalier en colimaçon",
   "n": 44
  },
  {
   "img": "images/w/reel-64-requin.webp",
   "ia": false,
   "cle": "requin",
   "theme": "Un requin",
   "auteur": "Mfield , Matthew Field, www.photography.mattfield.com",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ALeopard_shark_in_kelp.jpg",
   "n": 45
  },
  {
   "img": "images/w/reel-52-ecureuil.webp",
   "ia": false,
   "cle": "ecureuil",
   "theme": "Un écureuil",
   "auteur": "Diliff",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AEastern_Grey_Squirrel_in_St_James%27s_Park%2C_London_-_Nov_2006_edit.jpg",
   "n": 46
  },
  {
   "img": "images/w/ia-01-cuisine.webp",
   "ia": true,
   "cle": "cuisine",
   "theme": "Un plan de travail au petit matin",
   "n": 47
  },
  {
   "img": "images/w/ia-34-neons.webp",
   "ia": true,
   "cle": "neons",
   "theme": "Une rue de nuit sous les néons",
   "n": 48
  },
  {
   "img": "images/w/reel-07-geyser.webp",
   "ia": false,
   "cle": "geyser",
   "theme": "Un geyser",
   "auteur": "RuggyBearLA",
   "licence": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AFly_Geyser_-_52146739578.jpg",
   "n": 49
  },
  {
   "img": "images/w/ia-32-plage.webp",
   "ia": true,
   "cle": "plage",
   "theme": "Une plage tropicale",
   "n": 50
  },
  {
   "img": "images/w/reel-95-stade.webp",
   "ia": false,
   "cle": "stade",
   "theme": "Un stade",
   "auteur": "Ken Lund",
   "licence": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AAces_Ballpark%2C_Reno%2C_Nevada_%2820721267273%29.jpg",
   "n": 51
  },
  {
   "img": "images/w/ia-85-feudartifice.webp",
   "ia": true,
   "cle": "feudartifice",
   "theme": "Un feu d'artifice",
   "n": 52
  },
  {
   "img": "images/w/ia-40-pont.webp",
   "ia": true,
   "cle": "pont",
   "theme": "Un vieux pont de pierre",
   "n": 53
  },
  {
   "img": "images/w/reel-71-rizieres.webp",
   "ia": false,
   "cle": "rizieres",
   "theme": "Des rizières en terrasses",
   "auteur": "CEphoto, Uwe Aranas",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ABanaue_Philippines_Batad-Rice-Terraces-04.jpg",
   "n": 54
  },
  {
   "img": "images/w/ia-05-marche.webp",
   "ia": true,
   "cle": "marche",
   "theme": "Un étal de légumes",
   "n": 55
  },
  {
   "img": "images/w/reel-49-poissonnerie.webp",
   "ia": false,
   "cle": "poissonnerie",
   "theme": "Un étal de poissons",
   "auteur": "Chester Siu",
   "licence": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File%3AFish_on_a_fish_market_in_Fukuoka.jpg",
   "n": 56
  },
  {
   "img": "images/w/reel-27-phare.webp",
   "ia": false,
   "cle": "phare",
   "theme": "Un phare dans la tempête",
   "auteur": "Jwyoung",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ATillamook_Rock_Lighthouse_in_November%2C_2009.jpg",
   "n": 57
  },
  {
   "img": "images/w/ia-96-boulangerie.webp",
   "ia": true,
   "cle": "boulangerie",
   "theme": "Une boulangerie",
   "n": 58
  },
  {
   "img": "images/w/reel-12-volcan.webp",
   "ia": false,
   "cle": "volcanfoudre",
   "theme": "Des éclairs dans un panache volcanique",
   "auteur": "R. Hadian, U.S. Geological Survey",
   "licence": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File%3AGalunggung.jpg",
   "n": 59
  },
  {
   "img": "images/w/reel-79-brouillard.webp",
   "ia": false,
   "cle": "brouillard",
   "theme": "Du brouillard sur les collines",
   "auteur": "Marilyn Peddle",
   "licence": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AA_dog_in_Hambledon_Hill.jpg",
   "n": 60
  },
  {
   "img": "images/w/reel-59-loup.webp",
   "ia": false,
   "cle": "loup",
   "theme": "Un loup",
   "auteur": "Eric Kilby",
   "licence": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AGray_Wolf_Standing_in_the_Snow_%2823707637993%29.jpg",
   "n": 61
  },
  {
   "img": "images/w/ia-88-mosquee.webp",
   "ia": true,
   "cle": "mosquee",
   "theme": "L'intérieur d'une mosquée",
   "n": 62
  },
  {
   "img": "images/w/reel-74-fjord.webp",
   "ia": false,
   "cle": "fjord",
   "theme": "Un fjord",
   "auteur": "Ximonic , Simo Räsänen",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ADjupfjorden%2C_2010_09.jpg",
   "n": 63
  },
  {
   "img": "images/w/reel-70-automne.webp",
   "ia": false,
   "cle": "automne",
   "theme": "Une forêt en automne",
   "auteur": "Roman Eisele",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ABeilstein_-_Maad_-_Schmidbachtal_mit_altem_Feldweg_am_Nonnenwald_im_November.jpg",
   "n": 64
  },
  {
   "img": "images/w/reel-43-papillon.webp",
   "ia": false,
   "cle": "papillon",
   "theme": "Un papillon sur une fleur",
   "auteur": "Basile Morin",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AYellow_butterfly_on_Tagetes_lucida.jpg",
   "n": 65
  },
  {
   "img": "images/w/ia-39-dunes.webp",
   "ia": true,
   "cle": "dunes",
   "theme": "Des dunes de sable",
   "n": 66
  },
  {
   "img": "images/w/reel-56-tortuemer.webp",
   "ia": false,
   "cle": "tortuemer",
   "theme": "Une tortue de mer",
   "auteur": "Dominik Keller",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AChelonia_mydas_swimming%2C_Hawaii.jpg",
   "n": 67
  },
  {
   "img": "images/w/ia-50-velo.webp",
   "ia": true,
   "cle": "velo",
   "theme": "Un vélo contre un mur",
   "n": 68
  },
  {
   "img": "images/w/ia-02-bus.webp",
   "ia": true,
   "cle": "abribus",
   "theme": "Un abribus",
   "n": 69
  },
  {
   "img": "images/w/reel-48-meduse.webp",
   "ia": false,
   "cle": "meduse",
   "theme": "Une méduse",
   "auteur": "Symbiosis",
   "licence": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AThe_Moon_Jellyfish_-_53954437201.jpg",
   "n": 70
  },
  {
   "img": "images/w/reel-08-hillier.webp",
   "ia": false,
   "cle": "lacrose",
   "theme": "Un lac rose",
   "auteur": "Yodaobione",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3APink_Lake_%28Lake_Hillier%29_on_Middle_Island_off_the_coast_of_Esperance_Western_Australia.jpg",
   "n": 71
  },
  {
   "img": "images/w/reel-11-araignee.webp",
   "ia": false,
   "cle": "araignee",
   "theme": "Une araignée sauteuse en macro",
   "auteur": "Shyamli kashyap",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ACloseup_Capture_Of_Jumping_Spider.jpg",
   "n": 72
  },
  {
   "img": "images/w/ia-91-gratteciel.webp",
   "ia": true,
   "cle": "gratteciel",
   "theme": "Un gratte-ciel",
   "n": 73
  },
  {
   "img": "images/w/reel-05-eucalyptus.webp",
   "ia": false,
   "cle": "ecorce",
   "theme": "Une écorce colorée",
   "auteur": "Forest and Kim Starr",
   "licence": "CC BY 3.0 us",
   "url": "https://commons.wikimedia.org/wiki/File%3AStarr-130214-1575-Eucalyptus_deglupta-bark-Waihee-Maui_%2825112573891%29.jpg",
   "n": 74
  },
  {
   "img": "images/w/reel-44-chouette.webp",
   "ia": false,
   "cle": "chouette",
   "theme": "Une chouette",
   "auteur": "Guywelch2000",
   "licence": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ABarred_Owl_forest_canopy_Seattle_Washington_2026.jpg",
   "n": 75
  },
  {
   "img": "images/w/ia-47-voielactee.webp",
   "ia": true,
   "cle": "voielactee",
   "theme": "La Voie lactée",
   "n": 76
  },
  {
   "img": "images/w/ia-80-coucherdesoleil.webp",
   "ia": true,
   "cle": "coucherdesoleil",
   "theme": "Un coucher de soleil",
   "n": 77
  },
  {
   "img": "images/w/ia-21-ecorce.webp",
   "ia": true,
   "cle": "ecorce",
   "theme": "Une écorce colorée",
   "n": 78
  },
  {
   "img": "images/w/reel-87-templeasie.webp",
   "ia": false,
   "cle": "templeasie",
   "theme": "Un temple asiatique",
   "auteur": "Angus Cepka",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ATianning_Temple_1.JPG",
   "n": 79
  },
  {
   "img": "images/w/ia-36-montgolfieres.webp",
   "ia": true,
   "cle": "montgolfieres",
   "theme": "Des montgolfières",
   "n": 80
  },
  {
   "img": "images/w/ia-64-requin.webp",
   "ia": true,
   "cle": "requin",
   "theme": "Un requin",
   "n": 81
  },
  {
   "img": "images/w/reel-32-plage.webp",
   "ia": false,
   "cle": "plage",
   "theme": "Une plage tropicale",
   "auteur": "Guillaume Baviere",
   "licence": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ASk%C3%A5ne_2018-07-20_%2844475072371%29.jpg",
   "n": 82
  },
  {
   "img": "images/w/reel-100-violon.webp",
   "ia": false,
   "cle": "violon",
   "theme": "Un violon",
   "auteur": "Jorge Royan",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AVienna_-_Violin_detail_-_0061.jpg",
   "n": 83
  },
  {
   "img": "images/w/reel-94-piscine.webp",
   "ia": false,
   "cle": "piscine",
   "theme": "Une piscine",
   "auteur": "Sebjarod",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AMontpellier_WPCpeFr_bassinvide_04102009b.JPG",
   "n": 84
  },
  {
   "img": "images/w/ia-45-tournesols.webp",
   "ia": true,
   "cle": "tournesols",
   "theme": "Un champ de tournesols",
   "n": 85
  },
  {
   "img": "images/w/ia-61-colibri.webp",
   "ia": true,
   "cle": "colibri",
   "theme": "Un colibri",
   "n": 86
  },
  {
   "img": "images/w/reel-06-saiga.webp",
   "ia": false,
   "cle": "antilope",
   "theme": "Une antilope étrange",
   "auteur": "Andrey Giljov",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ASaiga_antelope_at_the_Stepnoi_Sanctuary.jpg",
   "n": 87
  },
  {
   "img": "images/w/reel-85-feudartifice.webp",
   "ia": false,
   "cle": "feudartifice",
   "theme": "Un feu d'artifice",
   "auteur": "AlixSaz",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AFirework_%D1%84%D0%B5%D0%B9%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%BA_6176.jpg",
   "n": 88
  },
  {
   "img": "images/w/ia-07-plat.webp",
   "ia": true,
   "cle": "ramen",
   "theme": "Un bol de ramen",
   "n": 89
  },
  {
   "img": "images/w/reel-01-dragon.webp",
   "ia": false,
   "cle": "limace",
   "theme": "Une limace de mer",
   "auteur": "Taro Taylor",
   "licence": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AGlaucus_atlanticus_1_cropped.jpg",
   "n": 90
  },
  {
   "img": "images/w/ia-30-gare.webp",
   "ia": true,
   "cle": "gare",
   "theme": "Un hall de gare",
   "n": 91
  },
  {
   "img": "images/w/reel-13-metro.webp",
   "ia": false,
   "cle": "metro",
   "theme": "Un quai de métro",
   "auteur": "JIP",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AVuosaari_metro_station_platforms_at_night.jpg",
   "n": 92
  },
  {
   "img": "images/w/reel-65-baleine.webp",
   "ia": false,
   "cle": "baleine",
   "theme": "Une baleine",
   "auteur": "Mike Baird",
   "licence": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ABlue_whale_tail.JPG",
   "n": 93
  },
  {
   "img": "images/w/ia-42-chantier.webp",
   "ia": true,
   "cle": "chantier",
   "theme": "Un chantier",
   "n": 94
  },
  {
   "img": "images/w/ia-24-lacrose.webp",
   "ia": true,
   "cle": "lacrose",
   "theme": "Un lac rose",
   "n": 95
  },
  {
   "img": "images/w/reel-82-avion.webp",
   "ia": false,
   "cle": "avion",
   "theme": "Un avion de ligne",
   "auteur": "Julian Herzog ( Website )",
   "licence": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ALufthansa_Airbus_A320-211_D-AIQT_01.jpg",
   "n": 96
  },
  {
   "img": "images/w/reel-81-vapeur.webp",
   "ia": false,
   "cle": "vapeur",
   "theme": "Une locomotive à vapeur",
   "auteur": "Cccefalon",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ASabahHeritageSteamTrain-04.jpg",
   "n": 97
  },
  {
   "img": "images/w/ia-89-chateau.webp",
   "ia": true,
   "cle": "chateau",
   "theme": "Un château",
   "n": 98
  },
  {
   "img": "images/w/reel-35-cheval.webp",
   "ia": false,
   "cle": "cheval",
   "theme": "Un cheval au galop",
   "auteur": "Henk Monster",
   "licence": "CC BY 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ALovely_horses_at_Schaarsbergen_in_the_wood_meadow_-_panoramio.jpg",
   "n": 99
  },
  {
   "img": "images/w/ia-58-ours.webp",
   "ia": true,
   "cle": "ours",
   "theme": "Un ours brun",
   "n": 100
  },
  {
   "img": "images/w/reel-99-moulin.webp",
   "ia": false,
   "cle": "moulin",
   "theme": "Un moulin à vent",
   "auteur": "@sage_solar",
   "licence": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AAs_the_wind_swept_round_its_sails_%2810430403083%29.jpg",
   "n": 101
  },
  {
   "img": "images/w/ia-38-iceberg.webp",
   "ia": true,
   "cle": "iceberg",
   "theme": "Un iceberg",
   "n": 102
  },
  {
   "img": "images/w/ia-95-stade.webp",
   "ia": true,
   "cle": "stade",
   "theme": "Un stade",
   "n": 103
  },
  {
   "img": "images/w/reel-19-portrait.webp",
   "ia": false,
   "cle": "portrait",
   "theme": "Le portrait d'une personne âgée",
   "auteur": "Museum of Photographic Arts Collections",
   "licence": "No restrictions",
   "url": "https://commons.wikimedia.org/wiki/File%3APortrait_of_Elderly_Woman_in_Costume_%285711492936%29.jpg",
   "n": 104
  },
  {
   "img": "images/w/reel-68-oliviers.webp",
   "ia": false,
   "cle": "oliviers",
   "theme": "Des oliviers",
   "auteur": "Isiwal",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AOstuni_olive_grove_SS379-3339.jpg",
   "n": 105
  },
  {
   "img": "images/w/reel-29-chat.webp",
   "ia": false,
   "cle": "chat",
   "theme": "Un chat",
   "auteur": "Meine Mutter (Erlaubnis liegt vor)",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3A2017-08-07_Katze_Sankt-Englmar_01.jpg",
   "n": 106
  },
  {
   "img": "images/w/ia-82-avion.webp",
   "ia": true,
   "cle": "avion",
   "theme": "Un avion de ligne",
   "n": 107
  },
  {
   "img": "images/w/reel-09-aurore.webp",
   "ia": false,
   "cle": "aurore",
   "theme": "Une aurore boréale",
   "auteur": "Ximonic (Simo Räsänen)",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AAurora_borealis_above_Storfjorden_and_the_Lyngen_Alps_in_moonlight%2C_2012_March.jpg",
   "n": 108
  },
  {
   "img": "images/w/reel-15-renard.webp",
   "ia": false,
   "cle": "renard",
   "theme": "Un renard roux",
   "auteur": "ClaudiaTen",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3APortrait_of_a_red_fox_in_Rautas_fj%C3%A4llurskog.jpg",
   "n": 109
  },
  {
   "img": "images/w/reel-63-recif.webp",
   "ia": false,
   "cle": "recif",
   "theme": "Un récif corallien",
   "auteur": "Diego Delso",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3APez_ballesta_picasso_ar%C3%A1bigo_%28Rhinecanthus_assasi%29%2C_mar_Rojo%2C_Egipto%2C_2023-04-18%2C_DD_22.jpg",
   "n": 110
  },
  {
   "img": "images/w/ia-16-bureau.webp",
   "ia": true,
   "cle": "bureau",
   "theme": "Un plateau de bureaux",
   "n": 111
  },
  {
   "img": "images/w/reel-31-bibliotheque.webp",
   "ia": false,
   "cle": "bibliotheque",
   "theme": "Une bibliothèque ancienne",
   "auteur": "Rodrigo.Argenton",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AWestmount_Public_Library_by_Rodrigo_Tetsuo_Argenton_%2803%29.jpg",
   "n": 112
  },
  {
   "img": "images/w/ia-59-loup.webp",
   "ia": true,
   "cle": "loup",
   "theme": "Un loup",
   "n": 113
  },
  {
   "img": "images/w/reel-20-atelier.webp",
   "ia": false,
   "cle": "atelier",
   "theme": "Un atelier de menuiserie",
   "auteur": "Jean-Michel Rousset",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AKane_Kwei_Carpentry_Workshop.jpg",
   "n": 114
  },
  {
   "img": "images/w/ia-56-tortuemer.webp",
   "ia": true,
   "cle": "tortuemer",
   "theme": "Une tortue de mer",
   "n": 115
  },
  {
   "img": "images/w/ia-97-fromages.webp",
   "ia": true,
   "cle": "fromages",
   "theme": "Un étal de fromages",
   "n": 116
  },
  {
   "img": "images/w/ia-51-libellule.webp",
   "ia": true,
   "cle": "libellule",
   "theme": "Une libellule",
   "n": 117
  },
  {
   "img": "images/w/reel-46-escalier.webp",
   "ia": false,
   "cle": "escalier",
   "theme": "Un escalier en colimaçon",
   "auteur": "Zairon",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ASonne-Mond-See_Ci_En_Pagoda_Innen_Treppenhaus.jpg",
   "n": 118
  },
  {
   "img": "images/w/reel-67-vignoble.webp",
   "ia": false,
   "cle": "vignoble",
   "theme": "Un vignoble",
   "auteur": "Ethan Prater",
   "licence": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ACristom_Vineyard_Oregon_with_example_of_clear_cultivation.jpg",
   "n": 119
  },
  {
   "img": "images/w/ia-28-lavande.webp",
   "ia": true,
   "cle": "lavande",
   "theme": "Un champ de lavande",
   "n": 120
  },
  {
   "img": "images/w/ia-54-abeille.webp",
   "ia": true,
   "cle": "abeille",
   "theme": "Une abeille sur une fleur",
   "n": 121
  },
  {
   "img": "images/w/ia-31-bibliotheque.webp",
   "ia": true,
   "cle": "bibliotheque",
   "theme": "Une bibliothèque ancienne",
   "n": 122
  },
  {
   "img": "images/w/reel-57-manchots.webp",
   "ia": false,
   "cle": "manchots",
   "theme": "Des manchots",
   "auteur": "Tanya Patrick, CSIRO",
   "licence": "CC BY 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ACSIRO_ScienceImage_3815_Tanya_Patrick_checks_out_a_colony_of_Adelie_penguins.jpg",
   "n": 123
  },
  {
   "img": "images/w/ia-60-aigle.webp",
   "ia": true,
   "cle": "aigle",
   "theme": "Un aigle en vol",
   "n": 124
  },
  {
   "img": "images/w/ia-19-selmiroir.webp",
   "ia": true,
   "cle": "selmiroir",
   "theme": "Un désert de sel en miroir",
   "n": 125
  },
  {
   "img": "images/w/reel-78-arcenciel.webp",
   "ia": false,
   "cle": "arcenciel",
   "theme": "Un arc-en-ciel",
   "auteur": "David Roberts",
   "licence": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ARainbow_over_the_Rooftops_-_geograph.org.uk_-_1671397.jpg",
   "n": 126
  },
  {
   "img": "images/w/ia-81-vapeur.webp",
   "ia": true,
   "cle": "vapeur",
   "theme": "Une locomotive à vapeur",
   "n": 127
  },
  {
   "img": "images/w/reel-83-voilier.webp",
   "ia": false,
   "cle": "voilier",
   "theme": "Un voilier",
   "auteur": "Dietmar Rabich",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AKnysna_%28ZA%29%2C_Knysna_River%2C_Segelboot_--_2024_--_2420.jpg",
   "n": 128
  },
  {
   "img": "images/w/reel-62-cameleon.webp",
   "ia": false,
   "cle": "cameleon",
   "theme": "Un caméléon",
   "auteur": "Prabhu parmar",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AChameleon_holding_its_own_tail_while_sleeping.JPG",
   "n": 129
  },
  {
   "img": "images/w/ia-92-pontsuspendu.webp",
   "ia": true,
   "cle": "pontsuspendu",
   "theme": "Un pont suspendu",
   "n": 130
  },
  {
   "img": "images/w/reel-16-marche.webp",
   "ia": false,
   "cle": "marche",
   "theme": "Un étal de légumes",
   "auteur": "Timothy A. Gonsalves",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3APotato_Bean_Tomato_Veg_Stall_Ooty_Market_Nilgiris_Aug25_A7CR_07103.jpg",
   "n": 131
  },
  {
   "img": "images/w/reel-55-grenouille.webp",
   "ia": false,
   "cle": "grenouille",
   "theme": "Une grenouille",
   "auteur": "Christophe Meneboeuf",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ARedEyesFrogs_Mating_%28pixinn.net%29.jpg",
   "n": 132
  },
  {
   "img": "images/w/ia-79-brouillard.webp",
   "ia": true,
   "cle": "brouillard",
   "theme": "Du brouillard sur les collines",
   "n": 133
  },
  {
   "img": "images/w/reel-88-mosquee.webp",
   "ia": false,
   "cle": "mosquee",
   "theme": "L'intérieur d'une mosquée",
   "auteur": "Phillip Maiwald ( Nikopol )",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ASheikh-Lotf-Allah_mosque_wall_and_ceiling_2.jpg",
   "n": 134
  },
  {
   "img": "images/w/ia-44-chouette.webp",
   "ia": true,
   "cle": "chouette",
   "theme": "Une chouette",
   "n": 135
  },
  {
   "img": "images/w/ia-93-tunnel.webp",
   "ia": true,
   "cle": "tunnel",
   "theme": "Un tunnel routier",
   "n": 136
  },
  {
   "img": "images/w/ia-08-atelier.webp",
   "ia": true,
   "cle": "atelier",
   "theme": "Un atelier de menuiserie",
   "n": 137
  },
  {
   "img": "images/w/reel-54-abeille.webp",
   "ia": false,
   "cle": "abeille",
   "theme": "Une abeille sur une fleur",
   "auteur": "Richard Bartz, Munich Makro Freak",
   "licence": "CC BY-SA 2.5",
   "url": "https://commons.wikimedia.org/wiki/File%3AApinae_Bombus_pascuorum.jpg",
   "n": 138
  },
  {
   "img": "images/w/ia-78-arcenciel.webp",
   "ia": true,
   "cle": "arcenciel",
   "theme": "Un arc-en-ciel",
   "n": 139
  },
  {
   "img": "images/w/ia-57-manchots.webp",
   "ia": true,
   "cle": "manchots",
   "theme": "Des manchots",
   "n": 140
  },
  {
   "img": "images/w/ia-68-oliviers.webp",
   "ia": true,
   "cle": "oliviers",
   "theme": "Des oliviers",
   "n": 141
  },
  {
   "img": "images/w/reel-03-uyuni.webp",
   "ia": false,
   "cle": "selmiroir",
   "theme": "Un désert de sel en miroir",
   "auteur": "Diego Delso",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ASalar_de_Uyuni%2C_Bolivia%2C_2016-02-04%2C_DD_10-12_HDR.JPG",
   "n": 142
  },
  {
   "img": "images/w/ia-14-usine.webp",
   "ia": true,
   "cle": "usine",
   "theme": "Une usine abandonnée",
   "n": 143
  },
  {
   "img": "images/w/ia-70-automne.webp",
   "ia": true,
   "cle": "automne",
   "theme": "Une forêt en automne",
   "n": 144
  },
  {
   "img": "images/w/ia-26-volcan.webp",
   "ia": true,
   "cle": "volcanfoudre",
   "theme": "Des éclairs dans un panache volcanique",
   "n": 145
  },
  {
   "img": "images/w/reel-58-ours.webp",
   "ia": false,
   "cle": "ours",
   "theme": "Un ours brun",
   "auteur": "Anil Öztas",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AUrsus_arctos%2C_Kuterevo_%28HR%29_--_2022_--_0379.jpg",
   "n": 146
  },
  {
   "img": "images/w/ia-33-cascade.webp",
   "ia": true,
   "cle": "cascade",
   "theme": "Une cascade en forêt",
   "n": 147
  },
  {
   "img": "images/w/ia-63-recif.webp",
   "ia": true,
   "cle": "recif",
   "theme": "Un récif corallien",
   "n": 148
  },
  {
   "img": "images/w/reel-90-villagemontagne.webp",
   "ia": false,
   "cle": "villagemontagne",
   "theme": "Un village de montagne",
   "auteur": "Marsel Minga",
   "licence": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File%3AMm29a_0808_Alpine_Village_%2873496679%29.jpeg",
   "n": 149
  },
  {
   "img": "images/w/ia-12-neige.webp",
   "ia": true,
   "cle": "neige",
   "theme": "Une rue enneigée",
   "n": 150
  },
  {
   "img": "images/w/reel-38-iceberg.webp",
   "ia": false,
   "cle": "iceberg",
   "theme": "Un iceberg",
   "auteur": "Luca Galuzzi ( Lucag )",
   "licence": "CC BY-SA 2.5",
   "url": "https://commons.wikimedia.org/wiki/File%3AT%C3%A8mpanos_%28iceberg%29_Lago_Argentino_Brazo_Norte_Patagonia_Argentina_Luca_Galuzzi_2005.JPG",
   "n": 151
  },
  {
   "img": "images/w/ia-62-cameleon.webp",
   "ia": true,
   "cle": "cameleon",
   "theme": "Un caméléon",
   "n": 152
  },
  {
   "img": "images/w/reel-26-bureau.webp",
   "ia": false,
   "cle": "bureau",
   "theme": "Un plateau de bureaux",
   "auteur": "Fast Radius",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AMake_New_Things_Possible_Office.png",
   "n": 153
  },
  {
   "img": "images/w/ia-65-baleine.webp",
   "ia": true,
   "cle": "baleine",
   "theme": "Une baleine",
   "n": 154
  },
  {
   "img": "images/w/ia-04-grandmere.webp",
   "ia": true,
   "cle": "portrait",
   "theme": "Le portrait d'une personne âgée",
   "n": 155
  },
  {
   "img": "images/w/reel-25-enfants.webp",
   "ia": false,
   "cle": "enfants",
   "theme": "Des enfants et de l'eau",
   "auteur": "Ranjith-chemmad",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AChildren_Playing_in_Rain.jpg",
   "n": 156
  },
  {
   "img": "images/w/reel-41-cafe.webp",
   "ia": false,
   "cle": "cafe",
   "theme": "L'intérieur d'un café",
   "auteur": "EvanCarroll",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AAntidote_Coffee.jpg",
   "n": 157
  },
  {
   "img": "images/w/reel-84-noel.webp",
   "ia": false,
   "cle": "noel",
   "theme": "Un marché de Noël",
   "auteur": "Roland zh",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AWeihnachtsmarkt_D%C3%B6rfli-Rosenhof_IMG_4973.JPG",
   "n": 158
  },
  {
   "img": "images/w/ia-35-cheval.webp",
   "ia": true,
   "cle": "cheval",
   "theme": "Un cheval au galop",
   "n": 159
  },
  {
   "img": "images/w/reel-02-lenticulaire.webp",
   "ia": false,
   "cle": "lenticulaire",
   "theme": "Un nuage lenticulaire",
   "auteur": "Steve Redman ( MORA )",
   "licence": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File%3ALenticular_cloud_%2892b9ee4bcdc24c5b9a32911b8ee3525e%29.JPG",
   "n": 160
  },
  {
   "img": "images/w/reel-96-boulangerie.webp",
   "ia": false,
   "cle": "boulangerie",
   "theme": "Une boulangerie",
   "auteur": "Alan Stanton",
   "licence": "CC BY-SA 2.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AGranier_-_Bakery_and_Caf%C3%A9_in_Wood_Green_-_2.jpg",
   "n": 161
  },
  {
   "img": "images/w/reel-10-supercellule.webp",
   "ia": false,
   "cle": "orage",
   "theme": "Un orage sur la plaine",
   "auteur": "Raychel Sanner",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ASupercell_thunderstorm_over_Needmore%2C_Texas._May_4%2C_2019.jpg",
   "n": 162
  },
  {
   "img": "images/w/ia-11-mouette.webp",
   "ia": true,
   "cle": "mouette",
   "theme": "Une mouette en vol",
   "n": 163
  },
  {
   "img": "images/w/reel-77-tempetesable.webp",
   "ia": false,
   "cle": "tempetesable",
   "theme": "Une tempête de sable",
   "auteur": "Twips",
   "licence": "CC BY-SA 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AMan_in_sandstorm_-_panoramio.jpg",
   "n": 164
  },
  {
   "img": "images/w/ia-17-limace.webp",
   "ia": true,
   "cle": "limace",
   "theme": "Une limace de mer",
   "n": 165
  },
  {
   "img": "images/w/ia-27-phare.webp",
   "ia": true,
   "cle": "phare",
   "theme": "Un phare dans la tempête",
   "n": 166
  },
  {
   "img": "images/w/reel-61-colibri.webp",
   "ia": false,
   "cle": "colibri",
   "theme": "Un colibri",
   "auteur": "Joe Schneid , Louisville, Kentucky",
   "licence": "CC BY 3.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ARubyThroatedHummingbird%28Crop%29.jpg",
   "n": 167
  },
  {
   "img": "images/w/ia-67-vignoble.webp",
   "ia": true,
   "cle": "vignoble",
   "theme": "Un vignoble",
   "n": 168
  },
  {
   "img": "images/w/reel-80-coucherdesoleil.webp",
   "ia": false,
   "cle": "coucherdesoleil",
   "theme": "Un coucher de soleil",
   "auteur": "Prosthetic Head",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ASunset_through_olives.JPG",
   "n": 169
  },
  {
   "img": "images/w/reel-97-fromages.webp",
   "ia": false,
   "cle": "fromages",
   "theme": "Un étal de fromages",
   "auteur": "Daderot",
   "licence": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File%3ACheese_display%2C_Cambridge_MA_-_DSC05391.jpg",
   "n": 170
  },
  {
   "img": "images/w/ia-83-voilier.webp",
   "ia": true,
   "cle": "voilier",
   "theme": "Un voilier",
   "n": 171
  },
  {
   "img": "images/w/reel-42-chantier.webp",
   "ia": false,
   "cle": "chantier",
   "theme": "Un chantier",
   "auteur": "C messier",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3A%CE%95%CF%81%CE%B3%CE%BF%CF%84%CE%AC%CE%BE%CE%B9%CE%BF_%CF%83%CF%84%CE%BF_Leiden_6837.jpg",
   "n": 172
  },
  {
   "img": "images/w/reel-75-grotte.webp",
   "ia": false,
   "cle": "grotte",
   "theme": "Une grotte",
   "auteur": "Anil Öztas",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ADugopolje_%28HR%29%2C_Vranja%C4%8Da-H%C3%B6hle_--_2022_--_0123.jpg",
   "n": 173
  },
  {
   "img": "images/w/reel-93-tunnel.webp",
   "ia": false,
   "cle": "tunnel",
   "theme": "Un tunnel routier",
   "auteur": "Terry Kearney",
   "licence": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File%3ATHE_ROAD_BENEATH_THE_MERSEY_-_Flickr_-_Terry_Kearney.jpg",
   "n": 174
  },
  {
   "img": "images/w/ia-55-grenouille.webp",
   "ia": true,
   "cle": "grenouille",
   "theme": "Une grenouille",
   "n": 175
  },
  {
   "img": "images/w/reel-98-latte.webp",
   "ia": false,
   "cle": "latte",
   "theme": "Un cappuccino",
   "auteur": "Sven Lindner",
   "licence": "CC BY 2.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ACappuccino_at_Lund.jpg",
   "n": 176
  },
  {
   "img": "images/w/ia-94-piscine.webp",
   "ia": true,
   "cle": "piscine",
   "theme": "Une piscine",
   "n": 177
  },
  {
   "img": "images/w/ia-98-latte.webp",
   "ia": true,
   "cle": "latte",
   "theme": "Un cappuccino",
   "n": 178
  },
  {
   "img": "images/w/ia-69-bambous.webp",
   "ia": true,
   "cle": "bambous",
   "theme": "Une bambouseraie",
   "n": 179
  },
  {
   "img": "images/w/reel-34-neons.webp",
   "ia": false,
   "cle": "neons",
   "theme": "Une rue de nuit sous les néons",
   "auteur": "Basile Morin",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AColorful_neon_street_signs_in_Kabukich%C5%8D%2C_Shinjuku%2C_Tokyo.jpg",
   "n": 180
  },
  {
   "img": "images/w/ia-49-poissonnerie.webp",
   "ia": true,
   "cle": "poissonnerie",
   "theme": "Un étal de poissons",
   "n": 181
  },
  {
   "img": "images/w/ia-66-ble.webp",
   "ia": true,
   "cle": "ble",
   "theme": "Un champ de blé",
   "n": 182
  },
  {
   "img": "images/w/reel-53-cerf.webp",
   "ia": false,
   "cle": "cerf",
   "theme": "Un cerf",
   "auteur": "Timothy Gonsalves",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ASambar_Corbett_India_Dec19_D72_12585.jpg",
   "n": 183
  },
  {
   "img": "images/w/reel-21-lacmontagne.webp",
   "ia": false,
   "cle": "lacmontagne",
   "theme": "Un lac de montagne au lever du jour",
   "auteur": "Supanut Arunoprayote",
   "licence": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AMount_Fuji_from_Lake_Motosu_20241026.jpg",
   "n": 184
  },
  {
   "img": "images/w/ia-48-meduse.webp",
   "ia": true,
   "cle": "meduse",
   "theme": "Une méduse",
   "n": 185
  },
  {
   "img": "images/w/ia-03-renard.webp",
   "ia": true,
   "cle": "renard",
   "theme": "Un renard roux",
   "n": 186
  },
  {
   "img": "images/w/ia-52-ecureuil.webp",
   "ia": true,
   "cle": "ecureuil",
   "theme": "Un écureuil",
   "n": 187
  },
  {
   "img": "images/w/reel-39-dunes.webp",
   "ia": false,
   "cle": "dunes",
   "theme": "Des dunes de sable",
   "auteur": "blmcalifornia",
   "licence": "Public domain",
   "url": "https://commons.wikimedia.org/wiki/File%3ADumont_Dunes_%2849278954738%29.jpg",
   "n": 188
  },
  {
   "img": "images/w/ia-72-lave.webp",
   "ia": true,
   "cle": "lave",
   "theme": "Une éruption volcanique",
   "n": 189
  },
  {
   "img": "images/w/ia-71-rizieres.webp",
   "ia": true,
   "cle": "rizieres",
   "theme": "Des rizières en terrasses",
   "n": 190
  },
  {
   "img": "images/w/ia-29-chat.webp",
   "ia": true,
   "cle": "chat",
   "theme": "Un chat",
   "n": 191
  },
  {
   "img": "images/w/reel-33-cascade.webp",
   "ia": false,
   "cle": "cascade",
   "theme": "Une cascade en forêt",
   "auteur": "Dietmar Rabich",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AWaldbillig_%28LU%29%2C_Schiessent%C3%BCmpel_--_2015_--_6020.jpg",
   "n": 192
  },
  {
   "img": "images/w/ia-87-templeasie.webp",
   "ia": true,
   "cle": "templeasie",
   "theme": "Un temple asiatique",
   "n": 193
  },
  {
   "img": "images/w/ia-73-canyon.webp",
   "ia": true,
   "cle": "canyon",
   "theme": "Un canyon",
   "n": 194
  },
  {
   "img": "images/w/reel-45-tournesols.webp",
   "ia": false,
   "cle": "tournesols",
   "theme": "Un champ de tournesols",
   "auteur": "HLI-Photography",
   "licence": "CC0",
   "url": "https://commons.wikimedia.org/wiki/File%3ABig_Sunflower_waiting_for_a_Visitor.jpg",
   "n": 195
  },
  {
   "img": "images/w/reel-04-prismatic.webp",
   "ia": false,
   "cle": "thermale",
   "theme": "Une source thermale vue du ciel",
   "auteur": "Carsten Steger",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AAerial_image_of_Grand_Prismatic_Spring_%28view_from_the_south%29.jpg",
   "n": 196
  },
  {
   "img": "images/w/ia-06-orage.webp",
   "ia": true,
   "cle": "orage",
   "theme": "Un orage sur la plaine",
   "n": 197
  },
  {
   "img": "images/w/reel-22-mouette.webp",
   "ia": false,
   "cle": "mouette",
   "theme": "Une mouette en vol",
   "auteur": "Wark06",
   "licence": "CC BY 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ACalifornia_Gull.jpg",
   "n": 198
  },
  {
   "img": "images/w/reel-60-aigle.webp",
   "ia": false,
   "cle": "aigle",
   "theme": "Un aigle en vol",
   "auteur": "Andreas Weith",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3AAdult_white-tailed_eagle_%28Haliaeetus_albicilla%29_of_central_Poland_in_flight_%283%29.jpg",
   "n": 199
  },
  {
   "img": "images/w/reel-89-chateau.webp",
   "ia": false,
   "cle": "chateau",
   "theme": "Un château",
   "auteur": "Scotch Mist",
   "licence": "CC BY-SA 4.0",
   "url": "https://commons.wikimedia.org/wiki/File%3ATren%C4%8D%C3%ADn_Castle_53.jpg",
   "n": 200
  }
 ]
};
