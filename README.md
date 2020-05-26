# Star Wars API (SWAPI) based on node.js

An API inspired by a legendary API called swapi.co . Since swapi.co is not supported you can use this API as an alternative data source for all the data from the Star Wars canon universe!

## AVAILABLE API METHODS:

### Characters

#### Get collection:

`GET` [https://swapi-node.now.sh/api/people](https://swapi-node.now.sh/api/people)

Sample response:

```json
{
  "count": 82,
  "pages": 9,
  "next": "/api/people?page=2",
  "previous": null,
  "results": [
    {
      "fields": {
        "edited": "2014-12-20T21:17:56.891Z",
        "name": "Luke Skywalker",
        "created": "2014-12-09T13:50:51.644Z",
        "gender": "male",
        "skin_color": "fair",
        "hair_color": "blond",
        "height": "172",
        "eye_color": "blue",
        "mass": "77",
        "homeworld": "/api/planets/1",
        "birth_year": "19BBY",
        "species": [],
        "films": [],
        "vehicles": ["/api/vehicles/14", "/api/vehicles/30"],
        "starships": ["/api/starships/12", "/api/starships/22"],
        "url": "/api/people/1"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:17:50.309Z",
        "name": "C-3PO",
        "created": "2014-12-10T15:10:51.357Z",
        "gender": "n/a",
        "skin_color": "gold",
        "hair_color": "n/a",
        "height": "167",
        "eye_color": "yellow",
        "mass": "75",
        "homeworld": "/api/planets/1",
        "birth_year": "112BBY",
        "species": ["/api/species/2"],
        "films": [],
        "vehicles": [],
        "starships": [],
        "url": "/api/people/2"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:17:50.311Z",
        "name": "R2-D2",
        "created": "2014-12-10T15:11:50.376Z",
        "gender": "n/a",
        "skin_color": "white, blue",
        "hair_color": "n/a",
        "height": "96",
        "eye_color": "red",
        "mass": "32",
        "homeworld": "/api/planets/8",
        "birth_year": "33BBY",
        "species": ["/api/species/2"],
        "films": [],
        "vehicles": [],
        "starships": [],
        "url": "/api/people/3"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:17:50.313Z",
        "name": "Darth Vader",
        "created": "2014-12-10T15:18:20.704Z",
        "gender": "male",
        "skin_color": "white",
        "hair_color": "none",
        "height": "202",
        "eye_color": "yellow",
        "mass": "136",
        "homeworld": "/api/planets/1",
        "birth_year": "41.9BBY",
        "species": [],
        "films": [],
        "vehicles": [],
        "starships": ["/api/starships/13"],
        "url": "/api/people/4"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:17:50.315Z",
        "name": "Leia Organa",
        "created": "2014-12-10T15:20:09.791Z",
        "gender": "female",
        "skin_color": "light",
        "hair_color": "brown",
        "height": "150",
        "eye_color": "brown",
        "mass": "49",
        "homeworld": "/api/planets/2",
        "birth_year": "19BBY",
        "species": [],
        "films": [],
        "vehicles": ["/api/vehicles/30"],
        "starships": [],
        "url": "/api/people/5"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:17:50.317Z",
        "name": "Owen Lars",
        "created": "2014-12-10T15:52:14.024Z",
        "gender": "male",
        "skin_color": "light",
        "hair_color": "brown, grey",
        "height": "178",
        "eye_color": "blue",
        "mass": "120",
        "homeworld": "/api/planets/1",
        "birth_year": "52BBY",
        "species": [],
        "films": [],
        "vehicles": [],
        "starships": [],
        "url": "/api/people/6"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:17:50.319Z",
        "name": "Beru Whitesun lars",
        "created": "2014-12-10T15:53:41.121Z",
        "gender": "female",
        "skin_color": "light",
        "hair_color": "brown",
        "height": "165",
        "eye_color": "blue",
        "mass": "75",
        "homeworld": "/api/planets/1",
        "birth_year": "47BBY",
        "species": [],
        "films": [],
        "vehicles": [],
        "starships": [],
        "url": "/api/people/7"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:17:50.321Z",
        "name": "R5-D4",
        "created": "2014-12-10T15:57:50.959Z",
        "gender": "n/a",
        "skin_color": "white, red",
        "hair_color": "n/a",
        "height": "97",
        "eye_color": "red",
        "mass": "32",
        "homeworld": "/api/planets/1",
        "birth_year": "unknown",
        "species": ["/api/species/2"],
        "films": [],
        "vehicles": [],
        "starships": [],
        "url": "/api/people/8"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:17:50.323Z",
        "name": "Biggs Darklighter",
        "created": "2014-12-10T15:59:50.509Z",
        "gender": "male",
        "skin_color": "light",
        "hair_color": "black",
        "height": "183",
        "eye_color": "brown",
        "mass": "84",
        "homeworld": "/api/planets/1",
        "birth_year": "24BBY",
        "species": [],
        "films": [],
        "vehicles": [],
        "starships": ["/api/starships/12"],
        "url": "/api/people/9"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:17:50.325Z",
        "name": "Obi-Wan Kenobi",
        "created": "2014-12-10T16:16:29.192Z",
        "gender": "male",
        "skin_color": "fair",
        "hair_color": "auburn, white",
        "height": "182",
        "eye_color": "blue-gray",
        "mass": "77",
        "homeworld": "/api/planets/20",
        "birth_year": "57BBY",
        "species": [],
        "films": [],
        "vehicles": ["/api/vehicles/38"],
        "starships": [
          "/api/starships/48",
          "/api/starships/59",
          "/api/starships/64",
          "/api/starships/65",
          "/api/starships/74"
        ],
        "url": "/api/people/10"
      }
    }
  ]
}
```

#### Get a single result:

`GET` [https://swapi-node.now.sh/api/people/1](https://swapi-node.now.sh/api/people/1)

Sample response:

```json
{
  "fields": {
    "edited": "2014-12-20T21:17:56.891Z",
    "name": "Luke Skywalker",
    "created": "2014-12-09T13:50:51.644Z",
    "gender": "male",
    "skin_color": "fair",
    "hair_color": "blond",
    "height": "172",
    "eye_color": "blue",
    "mass": "77",
    "homeworld": "/api/planets/1",
    "birth_year": "19BBY",
    "species": [],
    "films": [],
    "vehicles": ["/api/vehicles/14", "/api/vehicles/30"],
    "starships": ["/api/starships/12", "/api/starships/22"],
    "url": "/api/people/1"
  }
}
```

### Planets

#### Get collection:

`GET` [https://swapi-node.now.sh/api/planets](https://swapi-node.now.sh/api/planets)

Sample response:

```json
{
  "count": 60,
  "pages": 6,
  "next": "/api/planets?page=2",
  "previous": null,
  "results": [
    {
      "fields": {
        "edited": "2014-12-20T20:58:18.411Z",
        "climate": "arid",
        "surface_water": "1",
        "name": "Tatooine",
        "diameter": "10465",
        "rotation_period": "23",
        "created": "2014-12-09T13:50:49.641Z",
        "terrain": "desert",
        "gravity": "1 standard",
        "orbital_period": "304",
        "population": "200000",
        "residents": [],
        "films": [],
        "url": "/api/planets/1"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T20:58:18.420Z",
        "climate": "temperate",
        "surface_water": "40",
        "name": "Alderaan",
        "diameter": "12500",
        "rotation_period": "24",
        "created": "2014-12-10T11:35:48.479Z",
        "terrain": "grasslands, mountains",
        "gravity": "1 standard",
        "orbital_period": "364",
        "population": "2000000000",
        "residents": [],
        "films": [],
        "url": "/api/planets/2"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T20:58:18.421Z",
        "climate": "temperate, tropical",
        "surface_water": "8",
        "name": "Yavin IV",
        "diameter": "10200",
        "rotation_period": "24",
        "created": "2014-12-10T11:37:19.144Z",
        "terrain": "jungle, rainforests",
        "gravity": "1 standard",
        "orbital_period": "4818",
        "population": "1000",
        "residents": [],
        "films": [],
        "url": "/api/planets/3"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T20:58:18.423Z",
        "climate": "frozen",
        "surface_water": "100",
        "name": "Hoth",
        "diameter": "7200",
        "rotation_period": "23",
        "created": "2014-12-10T11:39:13.934Z",
        "terrain": "tundra, ice caves, mountain ranges",
        "gravity": "1.1 standard",
        "orbital_period": "549",
        "population": "unknown",
        "residents": [],
        "films": [],
        "url": "/api/planets/4"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T20:58:18.425Z",
        "climate": "murky",
        "surface_water": "8",
        "name": "Dagobah",
        "diameter": "8900",
        "rotation_period": "23",
        "created": "2014-12-10T11:42:22.590Z",
        "terrain": "swamp, jungles",
        "gravity": "N/A",
        "orbital_period": "341",
        "population": "unknown",
        "residents": [],
        "films": [],
        "url": "/api/planets/5"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T20:58:18.427Z",
        "climate": "temperate",
        "surface_water": "0",
        "name": "Bespin",
        "diameter": "118000",
        "rotation_period": "12",
        "created": "2014-12-10T11:43:55.240Z",
        "terrain": "gas giant",
        "gravity": "1.5 (surface), 1 standard (Cloud City)",
        "orbital_period": "5110",
        "population": "6000000",
        "residents": [],
        "films": [],
        "url": "/api/planets/6"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T20:58:18.429Z",
        "climate": "temperate",
        "surface_water": "8",
        "name": "Endor",
        "diameter": "4900",
        "rotation_period": "18",
        "created": "2014-12-10T11:50:29.349Z",
        "terrain": "forests, mountains, lakes",
        "gravity": "0.85 standard",
        "orbital_period": "402",
        "population": "30000000",
        "residents": [],
        "films": [],
        "url": "/api/planets/7"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T20:58:18.430Z",
        "climate": "temperate",
        "surface_water": "12",
        "name": "Naboo",
        "diameter": "12120",
        "rotation_period": "26",
        "created": "2014-12-10T11:52:31.066Z",
        "terrain": "grassy hills, swamps, forests, mountains",
        "gravity": "1 standard",
        "orbital_period": "312",
        "population": "4500000000",
        "residents": [],
        "films": [],
        "url": "/api/planets/8"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T20:58:18.432Z",
        "climate": "temperate",
        "surface_water": "unknown",
        "name": "Coruscant",
        "diameter": "12240",
        "rotation_period": "24",
        "created": "2014-12-10T11:54:13.921Z",
        "terrain": "cityscape, mountains",
        "gravity": "1 standard",
        "orbital_period": "368",
        "population": "1000000000000",
        "residents": [],
        "films": [],
        "url": "/api/planets/9"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T20:58:18.434Z",
        "climate": "temperate",
        "surface_water": "100",
        "name": "Kamino",
        "diameter": "19720",
        "rotation_period": "27",
        "created": "2014-12-10T12:45:06.577Z",
        "terrain": "ocean",
        "gravity": "1 standard",
        "orbital_period": "463",
        "population": "1000000000",
        "residents": [],
        "films": [],
        "url": "/api/planets/10"
      }
    }
  ]
}
```

#### Get a single result:

`GET` [https://swapi-node.now.sh/api/planets/1](https://swapi-node.now.sh/api/planets/1)

Sample response:

```json
{
  "fields": {
    "edited": "2014-12-20T20:58:18.411Z",
    "climate": "arid",
    "surface_water": "1",
    "name": "Tatooine",
    "diameter": "10465",
    "rotation_period": "23",
    "created": "2014-12-09T13:50:49.641Z",
    "terrain": "desert",
    "gravity": "1 standard",
    "orbital_period": "304",
    "population": "200000",
    "residents": [],
    "films": [],
    "url": "/api/planets/1"
  }
}
```

### Movies

#### Get collection:

`GET` [https://swapi-node.now.sh/api/films](https://swapi-node.now.sh/api/films)

Sample response:

```json
{
  "count": 6,
  "pages": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "fields": {
        "starships": [
          "/api/starships/2",
          "/api/starships/3",
          "/api/starships/5",
          "/api/starships/9",
          "/api/starships/10",
          "/api/starships/11",
          "/api/starships/12",
          "/api/starships/13"
        ],
        "edited": "2014-12-20T19:49:45.256Z",
        "vehicles": [
          "/api/vehicles/4",
          "/api/vehicles/6",
          "/api/vehicles/7",
          "/api/vehicles/8"
        ],
        "planets": ["/api/planets/1", "/api/planets/2", "/api/planets/3"],
        "producer": "Gary Kurtz, Rick McCallum",
        "title": "A New Hope",
        "created": "2014-12-10T14:23:31.880Z",
        "episode_id": 4,
        "director": "George Lucas",
        "release_date": "1977-05-25",
        "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        "characters": [
          "/api/people/1",
          "/api/people/2",
          "/api/people/3",
          "/api/people/4",
          "/api/people/5",
          "/api/people/6",
          "/api/people/7",
          "/api/people/8",
          "/api/people/9",
          "/api/people/10",
          "/api/people/12",
          "/api/people/13",
          "/api/people/14",
          "/api/people/15",
          "/api/people/16",
          "/api/people/18",
          "/api/people/19",
          "/api/people/81"
        ],
        "species": [
          "/api/species/1",
          "/api/species/2",
          "/api/species/3",
          "/api/species/4",
          "/api/species/5"
        ],
        "url": "/api/films/1"
      }
    },
    {
      "fields": {
        "starships": [
          "/api/starships/3",
          "/api/starships/10",
          "/api/starships/11",
          "/api/starships/12",
          "/api/starships/15",
          "/api/starships/17",
          "/api/starships/21",
          "/api/starships/22",
          "/api/starships/23"
        ],
        "edited": "2014-12-15T13:07:53.386Z",
        "vehicles": [
          "/api/vehicles/8",
          "/api/vehicles/14",
          "/api/vehicles/16",
          "/api/vehicles/18",
          "/api/vehicles/19",
          "/api/vehicles/20"
        ],
        "planets": [
          "/api/planets/4",
          "/api/planets/5",
          "/api/planets/6",
          "/api/planets/27"
        ],
        "producer": "Gary Kurtz, Rick McCallum",
        "title": "The Empire Strikes Back",
        "created": "2014-12-12T11:26:24.656Z",
        "episode_id": 5,
        "director": "Irvin Kershner",
        "release_date": "1980-05-17",
        "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
        "characters": [
          "/api/people/1",
          "/api/people/2",
          "/api/people/3",
          "/api/people/4",
          "/api/people/5",
          "/api/people/10",
          "/api/people/13",
          "/api/people/14",
          "/api/people/18",
          "/api/people/20",
          "/api/people/21",
          "/api/people/22",
          "/api/people/23",
          "/api/people/24",
          "/api/people/25",
          "/api/people/26"
        ],
        "species": [
          "/api/species/1",
          "/api/species/2",
          "/api/species/3",
          "/api/species/6",
          "/api/species/7"
        ],
        "url": "/api/films/2"
      }
    },
    {
      "fields": {
        "starships": [
          "/api/starships/2",
          "/api/starships/3",
          "/api/starships/10",
          "/api/starships/11",
          "/api/starships/12",
          "/api/starships/15",
          "/api/starships/17",
          "/api/starships/22",
          "/api/starships/23",
          "/api/starships/27",
          "/api/starships/28",
          "/api/starships/29"
        ],
        "edited": "2014-12-20T09:48:37.462Z",
        "vehicles": [
          "/api/vehicles/8",
          "/api/vehicles/16",
          "/api/vehicles/18",
          "/api/vehicles/19",
          "/api/vehicles/24",
          "/api/vehicles/25",
          "/api/vehicles/26",
          "/api/vehicles/30"
        ],
        "planets": [
          "/api/planets/1",
          "/api/planets/5",
          "/api/planets/7",
          "/api/planets/8",
          "/api/planets/9"
        ],
        "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
        "title": "Return of the Jedi",
        "created": "2014-12-18T10:39:33.255Z",
        "episode_id": 6,
        "director": "Richard Marquand",
        "release_date": "1983-05-25",
        "opening_crawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
        "characters": [
          "/api/people/1",
          "/api/people/2",
          "/api/people/3",
          "/api/people/4",
          "/api/people/5",
          "/api/people/10",
          "/api/people/13",
          "/api/people/14",
          "/api/people/16",
          "/api/people/18",
          "/api/people/20",
          "/api/people/21",
          "/api/people/22",
          "/api/people/25",
          "/api/people/27",
          "/api/people/28",
          "/api/people/29",
          "/api/people/30",
          "/api/people/31",
          "/api/people/45"
        ],
        "species": [
          "/api/species/1",
          "/api/species/2",
          "/api/species/3",
          "/api/species/5",
          "/api/species/6",
          "/api/species/8",
          "/api/species/9",
          "/api/species/10",
          "/api/species/15"
        ],
        "url": "/api/films/3"
      }
    },
    {
      "fields": {
        "starships": [
          "/api/starships/31",
          "/api/starships/32",
          "/api/starships/39",
          "/api/starships/40",
          "/api/starships/41"
        ],
        "edited": "2014-12-20T10:54:07.216Z",
        "vehicles": [
          "/api/vehicles/33",
          "/api/vehicles/34",
          "/api/vehicles/35",
          "/api/vehicles/36",
          "/api/vehicles/37",
          "/api/vehicles/38",
          "/api/vehicles/42"
        ],
        "planets": ["/api/planets/1", "/api/planets/8", "/api/planets/9"],
        "producer": "Rick McCallum",
        "title": "The Phantom Menace",
        "created": "2014-12-19T16:52:55.740Z",
        "episode_id": 1,
        "director": "George Lucas",
        "release_date": "1999-05-19",
        "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
        "characters": [
          "/api/people/2",
          "/api/people/3",
          "/api/people/10",
          "/api/people/11",
          "/api/people/16",
          "/api/people/20",
          "/api/people/21",
          "/api/people/32",
          "/api/people/33",
          "/api/people/34",
          "/api/people/35",
          "/api/people/36",
          "/api/people/37",
          "/api/people/38",
          "/api/people/39",
          "/api/people/40",
          "/api/people/41",
          "/api/people/42",
          "/api/people/43",
          "/api/people/44",
          "/api/people/46",
          "/api/people/47",
          "/api/people/48",
          "/api/people/49",
          "/api/people/50",
          "/api/people/51",
          "/api/people/52",
          "/api/people/53",
          "/api/people/54",
          "/api/people/55",
          "/api/people/56",
          "/api/people/57",
          "/api/people/58",
          "/api/people/59"
        ],
        "species": [
          "/api/species/1",
          "/api/species/2",
          "/api/species/6",
          "/api/species/11",
          "/api/species/12",
          "/api/species/13",
          "/api/species/14",
          "/api/species/15",
          "/api/species/16",
          "/api/species/17",
          "/api/species/18",
          "/api/species/19",
          "/api/species/20",
          "/api/species/21",
          "/api/species/22",
          "/api/species/23",
          "/api/species/24",
          "/api/species/25",
          "/api/species/26",
          "/api/species/27"
        ],
        "url": "/api/films/4"
      }
    },
    {
      "fields": {
        "starships": [
          "/api/starships/21",
          "/api/starships/32",
          "/api/starships/39",
          "/api/starships/43",
          "/api/starships/47",
          "/api/starships/48",
          "/api/starships/49",
          "/api/starships/52",
          "/api/starships/58"
        ],
        "edited": "2014-12-20T20:18:48.516Z",
        "vehicles": [
          "/api/vehicles/4",
          "/api/vehicles/44",
          "/api/vehicles/45",
          "/api/vehicles/46",
          "/api/vehicles/50",
          "/api/vehicles/51",
          "/api/vehicles/53",
          "/api/vehicles/54",
          "/api/vehicles/55",
          "/api/vehicles/56",
          "/api/vehicles/57"
        ],
        "planets": [
          "/api/planets/1",
          "/api/planets/8",
          "/api/planets/9",
          "/api/planets/10",
          "/api/planets/11"
        ],
        "producer": "Rick McCallum",
        "title": "Attack of the Clones",
        "created": "2014-12-20T10:57:57.886Z",
        "episode_id": 2,
        "director": "George Lucas",
        "release_date": "2002-05-16",
        "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
        "characters": [
          "/api/people/2",
          "/api/people/3",
          "/api/people/6",
          "/api/people/7",
          "/api/people/10",
          "/api/people/11",
          "/api/people/20",
          "/api/people/21",
          "/api/people/22",
          "/api/people/33",
          "/api/people/35",
          "/api/people/36",
          "/api/people/40",
          "/api/people/43",
          "/api/people/46",
          "/api/people/51",
          "/api/people/52",
          "/api/people/53",
          "/api/people/58",
          "/api/people/59",
          "/api/people/60",
          "/api/people/61",
          "/api/people/62",
          "/api/people/63",
          "/api/people/64",
          "/api/people/65",
          "/api/people/66",
          "/api/people/67",
          "/api/people/68",
          "/api/people/69",
          "/api/people/70",
          "/api/people/71",
          "/api/people/72",
          "/api/people/73",
          "/api/people/74",
          "/api/people/75",
          "/api/people/76",
          "/api/people/77",
          "/api/people/78",
          "/api/people/82"
        ],
        "species": [
          "/api/species/1",
          "/api/species/2",
          "/api/species/6",
          "/api/species/12",
          "/api/species/13",
          "/api/species/15",
          "/api/species/28",
          "/api/species/29",
          "/api/species/30",
          "/api/species/31",
          "/api/species/32",
          "/api/species/33",
          "/api/species/34",
          "/api/species/35"
        ],
        "url": "/api/films/5"
      }
    },
    {
      "fields": {
        "starships": [
          "/api/starships/2",
          "/api/starships/32",
          "/api/starships/48",
          "/api/starships/59",
          "/api/starships/61",
          "/api/starships/63",
          "/api/starships/64",
          "/api/starships/65",
          "/api/starships/66",
          "/api/starships/68",
          "/api/starships/74",
          "/api/starships/75"
        ],
        "edited": "2014-12-20T20:47:52.073Z",
        "vehicles": [
          "/api/vehicles/33",
          "/api/vehicles/50",
          "/api/vehicles/53",
          "/api/vehicles/56",
          "/api/vehicles/60",
          "/api/vehicles/62",
          "/api/vehicles/67",
          "/api/vehicles/69",
          "/api/vehicles/70",
          "/api/vehicles/71",
          "/api/vehicles/72",
          "/api/vehicles/73",
          "/api/vehicles/76"
        ],
        "planets": [
          "/api/planets/1",
          "/api/planets/2",
          "/api/planets/5",
          "/api/planets/8",
          "/api/planets/9",
          "/api/planets/12",
          "/api/planets/13",
          "/api/planets/14",
          "/api/planets/15",
          "/api/planets/16",
          "/api/planets/17",
          "/api/planets/18",
          "/api/planets/19"
        ],
        "producer": "Rick McCallum",
        "title": "Revenge of the Sith",
        "created": "2014-12-20T18:49:38.403Z",
        "episode_id": 3,
        "director": "George Lucas",
        "release_date": "2005-05-19",
        "opening_crawl": "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....",
        "characters": [
          "/api/people/1",
          "/api/people/2",
          "/api/people/3",
          "/api/people/4",
          "/api/people/5",
          "/api/people/6",
          "/api/people/7",
          "/api/people/10",
          "/api/people/11",
          "/api/people/12",
          "/api/people/13",
          "/api/people/20",
          "/api/people/21",
          "/api/people/33",
          "/api/people/35",
          "/api/people/46",
          "/api/people/51",
          "/api/people/52",
          "/api/people/53",
          "/api/people/54",
          "/api/people/55",
          "/api/people/56",
          "/api/people/58",
          "/api/people/63",
          "/api/people/64",
          "/api/people/67",
          "/api/people/68",
          "/api/people/75",
          "/api/people/78",
          "/api/people/79",
          "/api/people/80",
          "/api/people/81",
          "/api/people/82",
          "/api/people/83"
        ],
        "species": [
          "/api/species/1",
          "/api/species/2",
          "/api/species/3",
          "/api/species/6",
          "/api/species/15",
          "/api/species/19",
          "/api/species/20",
          "/api/species/23",
          "/api/species/24",
          "/api/species/25",
          "/api/species/26",
          "/api/species/27",
          "/api/species/28",
          "/api/species/29",
          "/api/species/30",
          "/api/species/33",
          "/api/species/34",
          "/api/species/35",
          "/api/species/36",
          "/api/species/37"
        ],
        "url": "/api/films/6"
      }
    }
  ]
}
```

#### Get a single result:

`GET` [https://swapi-node.now.sh/api/films/1](https://swapi-node.now.sh/api/films/1)

Sample response:

```json
{
  "fields": {
    "starships": [
      "/api/starships/2",
      "/api/starships/3",
      "/api/starships/5",
      "/api/starships/9",
      "/api/starships/10",
      "/api/starships/11",
      "/api/starships/12",
      "/api/starships/13"
    ],
    "edited": "2014-12-20T19:49:45.256Z",
    "vehicles": [
      "/api/vehicles/4",
      "/api/vehicles/6",
      "/api/vehicles/7",
      "/api/vehicles/8"
    ],
    "planets": ["/api/planets/1", "/api/planets/2", "/api/planets/3"],
    "producer": "Gary Kurtz, Rick McCallum",
    "title": "A New Hope",
    "created": "2014-12-10T14:23:31.880Z",
    "episode_id": 4,
    "director": "George Lucas",
    "release_date": "1977-05-25",
    "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    "characters": [
      "/api/people/1",
      "/api/people/2",
      "/api/people/3",
      "/api/people/4",
      "/api/people/5",
      "/api/people/6",
      "/api/people/7",
      "/api/people/8",
      "/api/people/9",
      "/api/people/10",
      "/api/people/12",
      "/api/people/13",
      "/api/people/14",
      "/api/people/15",
      "/api/people/16",
      "/api/people/18",
      "/api/people/19",
      "/api/people/81"
    ],
    "species": [
      "/api/species/1",
      "/api/species/2",
      "/api/species/3",
      "/api/species/4",
      "/api/species/5"
    ],
    "url": "/api/films/1"
  }
}
```

### Species

#### Get collection:

`GET` [https://swapi-node.now.sh/api/species](https://swapi-node.now.sh/api/species)

Sample response:

```json
{
  "count": 37,
  "pages": 4,
  "next": "/api/species?page=2",
  "previous": null,
  "results": [
    {
      "fields": {
        "edited": "2014-12-20T21:36:42.136Z",
        "classification": "mammal",
        "name": "Human",
        "designation": "sentient",
        "created": "2014-12-10T13:52:11.567Z",
        "eye_colors": "brown, blue, green, hazel, grey, amber",
        "people": [
          "/api/people/66",
          "/api/people/67",
          "/api/people/68",
          "/api/people/74"
        ],
        "skin_colors": "caucasian, black, asian, hispanic",
        "language": "Galactic Basic",
        "hair_colors": "blonde, brown, black, red",
        "homeworld": "/api/planets/9",
        "average_lifespan": "120",
        "average_height": "180",
        "url": "/api/species/1"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:36:42.139Z",
        "classification": "artificial",
        "name": "Droid",
        "designation": "sentient",
        "created": "2014-12-10T15:16:16.259Z",
        "eye_colors": "n/a",
        "people": [
          "/api/people/2",
          "/api/people/3",
          "/api/people/8",
          "/api/people/23"
        ],
        "skin_colors": "n/a",
        "language": "n/a",
        "hair_colors": "n/a",
        "homeworld": null,
        "average_lifespan": "indefinite",
        "average_height": "n/a",
        "url": "/api/species/2"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:36:42.142Z",
        "classification": "mammal",
        "name": "Wookie",
        "designation": "sentient",
        "created": "2014-12-10T16:44:31.486Z",
        "eye_colors": "blue, green, yellow, brown, golden, red",
        "people": ["/api/people/13", "/api/people/80"],
        "skin_colors": "gray",
        "language": "Shyriiwook",
        "hair_colors": "black, brown",
        "homeworld": "/api/planets/14",
        "average_lifespan": "400",
        "average_height": "210",
        "url": "/api/species/3"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:36:42.144Z",
        "classification": "sentient",
        "name": "Rodian",
        "designation": "reptilian",
        "created": "2014-12-10T17:05:26.471Z",
        "eye_colors": "black",
        "people": ["/api/people/15"],
        "skin_colors": "green, blue",
        "language": "Galatic Basic",
        "hair_colors": "n/a",
        "homeworld": "/api/planets/23",
        "average_lifespan": "unknown",
        "average_height": "170",
        "url": "/api/species/4"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:36:42.146Z",
        "classification": "gastropod",
        "name": "Hutt",
        "designation": "sentient",
        "created": "2014-12-10T17:12:50.410Z",
        "eye_colors": "yellow, red",
        "people": ["/api/people/16"],
        "skin_colors": "green, brown, tan",
        "language": "Huttese",
        "hair_colors": "n/a",
        "homeworld": "/api/planets/24",
        "average_lifespan": "1000",
        "average_height": "300",
        "url": "/api/species/5"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:36:42.148Z",
        "classification": "mammal",
        "name": "Yoda's species",
        "designation": "sentient",
        "created": "2014-12-15T12:27:22.877Z",
        "eye_colors": "brown, green, yellow",
        "people": ["/api/people/20"],
        "skin_colors": "green, yellow",
        "language": "Galactic basic",
        "hair_colors": "brown, white",
        "homeworld": "/api/planets/28",
        "average_lifespan": "900",
        "average_height": "66",
        "url": "/api/species/6"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:36:42.151Z",
        "classification": "reptile",
        "name": "Trandoshan",
        "designation": "sentient",
        "created": "2014-12-15T13:07:47.704Z",
        "eye_colors": "yellow, orange",
        "people": ["/api/people/24"],
        "skin_colors": "brown, green",
        "language": "Dosh",
        "hair_colors": "none",
        "homeworld": "/api/planets/29",
        "average_lifespan": "unknown",
        "average_height": "200",
        "url": "/api/species/7"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:36:42.153Z",
        "classification": "amphibian",
        "name": "Mon Calamari",
        "designation": "sentient",
        "created": "2014-12-18T11:09:52.263Z",
        "eye_colors": "yellow",
        "people": ["/api/people/27"],
        "skin_colors": "red, blue, brown, magenta",
        "language": "Mon Calamarian",
        "hair_colors": "none",
        "homeworld": "/api/planets/31",
        "average_lifespan": "unknown",
        "average_height": "160",
        "url": "/api/species/8"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:36:42.155Z",
        "classification": "mammal",
        "name": "Ewok",
        "designation": "sentient",
        "created": "2014-12-18T11:22:00.285Z",
        "eye_colors": "orange, brown",
        "people": ["/api/people/30"],
        "skin_colors": "brown",
        "language": "Ewokese",
        "hair_colors": "white, brown, black",
        "homeworld": "/api/planets/7",
        "average_lifespan": "unknown",
        "average_height": "100",
        "url": "/api/species/9"
      }
    },
    {
      "fields": {
        "edited": "2014-12-20T21:36:42.157Z",
        "classification": "mammal",
        "name": "Sullustan",
        "designation": "sentient",
        "created": "2014-12-18T11:26:20.103Z",
        "eye_colors": "black",
        "people": ["/api/people/31"],
        "skin_colors": "pale",
        "language": "Sullutese",
        "hair_colors": "none",
        "homeworld": "/api/planets/33",
        "average_lifespan": "unknown",
        "average_height": "180",
        "url": "/api/species/10"
      }
    }
  ]
}
```

#### Get a single result:

`GET` [https://swapi-node.now.sh/api/species/1](https://swapi-node.now.sh/api/species/1)

Sample response:

```json
{
  "fields": {
    "edited": "2014-12-20T21:36:42.136Z",
    "classification": "mammal",
    "name": "Human",
    "designation": "sentient",
    "created": "2014-12-10T13:52:11.567Z",
    "eye_colors": "brown, blue, green, hazel, grey, amber",
    "people": [
      "/api/people/66",
      "/api/people/67",
      "/api/people/68",
      "/api/people/74"
    ],
    "skin_colors": "caucasian, black, asian, hispanic",
    "language": "Galactic Basic",
    "hair_colors": "blonde, brown, black, red",
    "homeworld": "/api/planets/9",
    "average_lifespan": "120",
    "average_height": "180",
    "url": "/api/species/1"
  }
}
```

### Vehicles

#### Get collection:

`GET` [https://swapi-node.now.sh/api/vehicles](https://swapi-node.now.sh/api/vehicles)

Sample response:

```json
{
  "count": 39,
  "pages": 4,
  "next": "/api/vehicles?page=2",
  "previous": null,
  "results": [
    {
      "fields": {
        "vehicle_class": "wheeled",
        "pilots": [],
        "films": [],
        "edited": "2014-12-20T21:30:21.661Z",
        "consumables": "2 months",
        "name": "Sand Crawler",
        "created": "2014-12-10T15:36:25.724Z",
        "cargo_capacity": "50000",
        "passengers": "30",
        "max_atmosphering_speed": "30",
        "crew": "46",
        "length": "36.8 ",
        "model": "Digger Crawler",
        "cost_in_credits": "150000",
        "manufacturer": "Corellia Mining Corporation",
        "url": "/api/vehicles/4"
      }
    },
    {
      "fields": {
        "vehicle_class": "repulsorcraft",
        "pilots": [],
        "films": [],
        "edited": "2014-12-20T21:30:21.665Z",
        "consumables": "0",
        "name": "T-16 skyhopper",
        "created": "2014-12-10T16:01:52.434Z",
        "cargo_capacity": "50",
        "passengers": "1",
        "max_atmosphering_speed": "1200",
        "crew": "1",
        "length": "10.4 ",
        "model": "T-16 skyhopper",
        "cost_in_credits": "14500",
        "manufacturer": "Incom Corporation",
        "url": "/api/vehicles/6"
      }
    },
    {
      "fields": {
        "vehicle_class": "repulsorcraft",
        "pilots": [],
        "films": [],
        "edited": "2014-12-20T21:30:21.668Z",
        "consumables": "unknown",
        "name": "X-34 landspeeder",
        "created": "2014-12-10T16:13:52.586Z",
        "cargo_capacity": "5",
        "passengers": "1",
        "max_atmosphering_speed": "250",
        "crew": "1",
        "length": "3.4 ",
        "model": "X-34 landspeeder",
        "cost_in_credits": "10550",
        "manufacturer": "SoroSuub Corporation",
        "url": "/api/vehicles/7"
      }
    },
    {
      "fields": {
        "vehicle_class": "starfighter",
        "pilots": [],
        "films": [],
        "edited": "2014-12-20T21:30:21.670Z",
        "consumables": "2 days",
        "name": "TIE/LN starfighter",
        "created": "2014-12-10T16:33:52.860Z",
        "cargo_capacity": "65",
        "passengers": "0",
        "max_atmosphering_speed": "1200",
        "crew": "1",
        "length": "6.4",
        "model": "Twin Ion Engine/Ln Starfighter",
        "cost_in_credits": "unknown",
        "manufacturer": "Sienar Fleet Systems",
        "url": "/api/vehicles/8"
      }
    },
    {
      "fields": {
        "vehicle_class": "airspeeder",
        "pilots": ["/api/people/1", "/api/people/18"],
        "films": [],
        "edited": "2014-12-20T21:30:21.672Z",
        "consumables": "none",
        "name": "Snowspeeder",
        "created": "2014-12-15T12:22:12Z",
        "cargo_capacity": "10",
        "passengers": "0",
        "max_atmosphering_speed": "650",
        "crew": "2",
        "length": "4.5",
        "model": "t-47 airspeeder",
        "cost_in_credits": "unknown",
        "manufacturer": "Incom corporation",
        "url": "/api/vehicles/14"
      }
    },
    {
      "fields": {
        "vehicle_class": "space/planetary bomber",
        "pilots": [],
        "films": [],
        "edited": "2014-12-20T21:30:21.675Z",
        "consumables": "2 days",
        "name": "TIE bomber",
        "created": "2014-12-15T12:33:15.838Z",
        "cargo_capacity": "none",
        "passengers": "0",
        "max_atmosphering_speed": "850",
        "crew": "1",
        "length": "7.8",
        "model": "TIE/sa bomber",
        "cost_in_credits": "unknown",
        "manufacturer": "Sienar Fleet Systems",
        "url": "/api/vehicles/16"
      }
    },
    {
      "fields": {
        "vehicle_class": "assault walker",
        "pilots": [],
        "films": [],
        "edited": "2014-12-20T21:30:21.677Z",
        "consumables": "unknown",
        "name": "AT-AT",
        "created": "2014-12-15T12:38:25.937Z",
        "cargo_capacity": "1000",
        "passengers": "40",
        "max_atmosphering_speed": "60",
        "crew": "5",
        "length": "20",
        "model": "All Terrain Armored Transport",
        "cost_in_credits": "unknown",
        "manufacturer": "Kuat Drive Yards, Imperial Department of Military Research",
        "url": "/api/vehicles/18"
      }
    },
    {
      "fields": {
        "vehicle_class": "walker",
        "pilots": ["/api/people/13"],
        "films": [],
        "edited": "2014-12-20T21:30:21.679Z",
        "consumables": "none",
        "name": "AT-ST",
        "created": "2014-12-15T12:46:42.384Z",
        "cargo_capacity": "200",
        "passengers": "0",
        "max_atmosphering_speed": "90",
        "crew": "2",
        "length": "2",
        "model": "All Terrain Scout Transport",
        "cost_in_credits": "unknown",
        "manufacturer": "Kuat Drive Yards, Imperial Department of Military Research",
        "url": "/api/vehicles/19"
      }
    },
    {
      "fields": {
        "vehicle_class": "repulsorcraft",
        "pilots": [],
        "films": [],
        "edited": "2014-12-20T21:30:21.681Z",
        "consumables": "1 day",
        "name": "Storm IV Twin-Pod cloud car",
        "created": "2014-12-15T12:58:50.530Z",
        "cargo_capacity": "10",
        "passengers": "0",
        "max_atmosphering_speed": "1500",
        "crew": "2",
        "length": "7",
        "model": "Storm IV Twin-Pod",
        "cost_in_credits": "75000",
        "manufacturer": "Bespin Motors",
        "url": "/api/vehicles/20"
      }
    },
    {
      "fields": {
        "vehicle_class": "sail barge",
        "pilots": [],
        "films": [],
        "edited": "2014-12-20T21:30:21.684Z",
        "consumables": "Live food tanks",
        "name": "Sail barge",
        "created": "2014-12-18T10:44:14.217Z",
        "cargo_capacity": "2000000",
        "passengers": "500",
        "max_atmosphering_speed": "100",
        "crew": "26",
        "length": "30",
        "model": "Modified Luxury Sail Barge",
        "cost_in_credits": "285000",
        "manufacturer": "Ubrikkian Industries Custom Vehicle Division",
        "url": "/api/vehicles/24"
      }
    }
  ]
}
```

#### Get a single result:

`GET` [https://swapi-node.now.sh/api/vehicles/4](https://swapi-node.now.sh/api/vehicles/4)

Sample response:

```json
{
  "fields": {
    "vehicle_class": "wheeled",
    "pilots": [],
    "films": [],
    "edited": "2014-12-20T21:30:21.661Z",
    "consumables": "2 months",
    "name": "Sand Crawler",
    "created": "2014-12-10T15:36:25.724Z",
    "cargo_capacity": "50000",
    "passengers": "30",
    "max_atmosphering_speed": "30",
    "crew": "46",
    "length": "36.8 ",
    "model": "Digger Crawler",
    "cost_in_credits": "150000",
    "manufacturer": "Corellia Mining Corporation",
    "url": "/api/vehicles/4"
  }
}
```

### Starships

#### Get collection:

`GET` [https://swapi-node.now.sh/api/starships](https://swapi-node.now.sh/api/starships)

Sample response:

```json
{
  "count": 36,
  "pages": 4,
  "next": "/api/starships?page=2",
  "previous": null,
  "results": [
    {
      "fields": {
        "pilots": [],
        "MGLT": "60",
        "starship_class": "corvette",
        "hyperdrive_rating": "2.0",
        "films": [],
        "url": "/api/starships/2"
      }
    },
    {
      "fields": {
        "pilots": [],
        "MGLT": "60",
        "starship_class": "Star Destroyer",
        "hyperdrive_rating": "2.0",
        "films": [],
        "url": "/api/starships/3"
      }
    },
    {
      "fields": {
        "pilots": [],
        "MGLT": "70",
        "starship_class": "landing craft",
        "hyperdrive_rating": "1.0",
        "films": [],
        "url": "/api/starships/5"
      }
    },
    {
      "fields": {
        "pilots": [],
        "MGLT": "10",
        "starship_class": "Deep Space Mobile Battlestation",
        "hyperdrive_rating": "4.0",
        "films": [],
        "url": "/api/starships/9"
      }
    },
    {
      "fields": {
        "pilots": [
          "/api/people/13",
          "/api/people/14",
          "/api/people/25",
          "/api/people/31"
        ],
        "MGLT": "75",
        "starship_class": "Light freighter",
        "hyperdrive_rating": "0.5",
        "films": [],
        "url": "/api/starships/10"
      }
    },
    {
      "fields": {
        "pilots": [],
        "MGLT": "80",
        "starship_class": "assault starfighter",
        "hyperdrive_rating": "1.0",
        "films": [],
        "url": "/api/starships/11"
      }
    },
    {
      "fields": {
        "pilots": [
          "/api/people/1",
          "/api/people/9",
          "/api/people/18",
          "/api/people/19"
        ],
        "MGLT": "100",
        "starship_class": "Starfighter",
        "hyperdrive_rating": "1.0",
        "films": [],
        "url": "/api/starships/12"
      }
    },
    {
      "fields": {
        "pilots": ["/api/people/4"],
        "MGLT": "105",
        "starship_class": "Starfighter",
        "hyperdrive_rating": "1.0",
        "films": [],
        "url": "/api/starships/13"
      }
    },
    {
      "fields": {
        "pilots": [],
        "MGLT": "40",
        "starship_class": "Star dreadnought",
        "hyperdrive_rating": "2.0",
        "films": [],
        "url": "/api/starships/15"
      }
    },
    {
      "fields": {
        "pilots": [],
        "MGLT": "20",
        "starship_class": "Medium transport",
        "hyperdrive_rating": "4.0",
        "films": [],
        "url": "/api/starships/17"
      }
    }
  ]
}
```

#### Get a single result:

`GET` [https://swapi-node.now.sh/api/starships/10](https://swapi-node.now.sh/api/starships/10)

Sample response:

```json
{
  "fields": {
    "pilots": [
      "/api/people/13",
      "/api/people/14",
      "/api/people/25",
      "/api/people/31"
    ],
    "MGLT": "75",
    "starship_class": "Light freighter",
    "hyperdrive_rating": "0.5",
    "films": [],
    "url": "/api/starships/10"
  }
}
```
