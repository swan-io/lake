import { Result } from "@swan-io/boxed";
import { deburr } from "@swan-io/lake/src/utils/string";
import { Simplify } from "type-fest";
import { locale } from "../utils/i18n";

export const france = {
  name: "France",
  cca2: "FR",
  cca3: "FRA",
  idd: "33",
  flag: "🇫🇷",
} as const;

const readonlyCountries = [
  {
    name: "Åland",
    cca2: "AX",
    cca3: "ALA",
    idd: "358",
    flag: "🇦🇽",
  },
  {
    name: "American Samoa",
    cca2: "AS",
    cca3: "ASM",
    idd: "1684",
    flag: "🇦🇸",
  },
  {
    name: "Andorra",
    cca2: "AD",
    cca3: "AND",
    idd: "376",
    flag: "🇦🇩",
  },
  {
    name: "Angola",
    cca2: "AO",
    cca3: "AGO",
    idd: "244",
    flag: "🇦🇴",
  },
  {
    name: "Anguilla",
    cca2: "AI",
    cca3: "AIA",
    idd: "1264",
    flag: "🇦🇮",
  },
  {
    name: "Antarctica",
    cca2: "AQ",
    cca3: "ATA",
    idd: "672",
    flag: "🇦🇶",
  },
  {
    name: "Antigua and Barbuda",
    cca2: "AG",
    cca3: "ATG",
    idd: "1268",
    flag: "🇦🇬",
  },
  {
    name: "Argentina",
    cca2: "AR",
    cca3: "ARG",
    idd: "54",
    flag: "🇦🇷",
  },
  {
    name: "Aruba",
    cca2: "AW",
    cca3: "ABW",
    idd: "297",
    flag: "🇦🇼",
  },
  {
    name: "Australia",
    cca2: "AU",
    cca3: "AUS",
    idd: "61",
    flag: "🇦🇺",
  },
  {
    name: "Azərbaycan",
    cca2: "AZ",
    cca3: "AZE",
    idd: "994",
    flag: "🇦🇿",
  },
  {
    name: "Bahamas",
    cca2: "BS",
    cca3: "BHS",
    idd: "1242",
    flag: "🇧🇸",
  },
  {
    name: "Bangladesh",
    cca2: "BD",
    cca3: "BGD",
    idd: "880",
    flag: "🇧🇩",
  },
  {
    name: "Barbados",
    cca2: "BB",
    cca3: "BRB",
    idd: "1246",
    flag: "🇧🇧",
  },
  {
    name: "België",
    cca2: "BE",
    cca3: "BEL",
    idd: "32",
    flag: "🇧🇪",
  },
  {
    name: "Belize",
    cca2: "BZ",
    cca3: "BLZ",
    idd: "501",
    flag: "🇧🇿",
  },
  {
    name: "Bénin",
    cca2: "BJ",
    cca3: "BEN",
    idd: "229",
    flag: "🇧🇯",
  },
  {
    name: "Bermuda",
    cca2: "BM",
    cca3: "BMU",
    idd: "1441",
    flag: "🇧🇲",
  },
  {
    name: "Bolivia",
    cca2: "BO",
    cca3: "BOL",
    idd: "591",
    flag: "🇧🇴",
  },
  {
    name: "Bonaire",
    cca2: "BQ",
    cca3: "BES",
    idd: "5997",
    flag: "🇧🇶",
  },
  {
    name: "Bosna i Hercegovina",
    cca2: "BA",
    cca3: "BIH",
    idd: "387",
    flag: "🇧🇦",
  },
  {
    name: "Botswana",
    cca2: "BW",
    cca3: "BWA",
    idd: "267",
    flag: "🇧🇼",
  },
  {
    name: "Bouvetøya",
    cca2: "BV",
    cca3: "BVT",
    idd: "47",
    flag: "🇧🇻",
  },
  {
    name: "Brasil",
    cca2: "BR",
    cca3: "BRA",
    idd: "55",
    flag: "🇧🇷",
  },
  {
    name: "British Virgin Islands",
    cca2: "VG",
    cca3: "VGB",
    idd: "1284",
    flag: "🇻🇬",
  },
  {
    name: "Burkina Faso",
    cca2: "BF",
    cca3: "BFA",
    idd: "226",
    flag: "🇧🇫",
  },
  {
    name: "Burundi",
    cca2: "BI",
    cca3: "BDI",
    idd: "257",
    flag: "🇧🇮",
  },
  {
    name: "Cabo Verde",
    cca2: "CV",
    cca3: "CPV",
    idd: "238",
    flag: "🇨🇻",
  },
  {
    name: "Cameroon",
    cca2: "CM",
    cca3: "CMR",
    idd: "237",
    flag: "🇨🇲",
  },
  {
    name: "Canada",
    cca2: "CA",
    cca3: "CAN",
    idd: "1",
    flag: "🇨🇦",
  },
  {
    name: "Cayman Islands",
    cca2: "KY",
    cca3: "CYM",
    idd: "1345",
    flag: "🇰🇾",
  },
  {
    name: "Česká republika",
    cca2: "CZ",
    cca3: "CZE",
    idd: "420",
    flag: "🇨🇿",
  },
  {
    name: "Chile",
    cca2: "CL",
    cca3: "CHL",
    idd: "56",
    flag: "🇨🇱",
  },
  {
    name: "Christmas Island",
    cca2: "CX",
    cca3: "CXR",
    idd: "61",
    flag: "🇨🇽",
  },
  {
    name: "Cocos (Keeling) Islands",
    cca2: "CC",
    cca3: "CCK",
    idd: "61",
    flag: "🇨🇨",
  },
  {
    name: "Colombia",
    cca2: "CO",
    cca3: "COL",
    idd: "57",
    flag: "🇨🇴",
  },
  {
    name: "Cook Islands",
    cca2: "CK",
    cca3: "COK",
    idd: "682",
    flag: "🇨🇰",
  },
  {
    name: "Costa Rica",
    cca2: "CR",
    cca3: "CRI",
    idd: "506",
    flag: "🇨🇷",
  },
  {
    name: "Côte d'Ivoire",
    cca2: "CI",
    cca3: "CIV",
    idd: "225",
    flag: "🇨🇮",
  },
  {
    name: "Cuba",
    cca2: "CU",
    cca3: "CUB",
    idd: "53",
    flag: "🇨🇺",
  },
  {
    name: "Curaçao",
    cca2: "CW",
    cca3: "CUW",
    idd: "5999",
    flag: "🇨🇼",
  },
  {
    name: "Danmark",
    cca2: "DK",
    cca3: "DNK",
    idd: "45",
    flag: "🇩🇰",
  },
  {
    name: "Deutschland",
    cca2: "DE",
    cca3: "DEU",
    idd: "49",
    flag: "🇩🇪",
  },
  {
    name: "Djibouti",
    cca2: "DJ",
    cca3: "DJI",
    idd: "253",
    flag: "🇩🇯",
  },
  {
    name: "Dominica",
    cca2: "DM",
    cca3: "DMA",
    idd: "1767",
    flag: "🇩🇲",
  },
  {
    name: "Ecuador",
    cca2: "EC",
    cca3: "ECU",
    idd: "593",
    flag: "🇪🇨",
  },
  {
    name: "Eesti",
    cca2: "EE",
    cca3: "EST",
    idd: "372",
    flag: "🇪🇪",
  },
  {
    name: "Éire",
    cca2: "IE",
    cca3: "IRL",
    idd: "353",
    flag: "🇮🇪",
  },
  {
    name: "El Salvador",
    cca2: "SV",
    cca3: "SLV",
    idd: "503",
    flag: "🇸🇻",
  },
  {
    name: "España",
    cca2: "ES",
    cca3: "ESP",
    idd: "34",
    flag: "🇪🇸",
  },
  {
    name: "Falkland Islands",
    cca2: "FK",
    cca3: "FLK",
    idd: "500",
    flag: "🇫🇰",
  },
  {
    name: "Fiji",
    cca2: "FJ",
    cca3: "FJI",
    idd: "679",
    flag: "🇫🇯",
  },
  {
    name: "Føroyar",
    cca2: "FO",
    cca3: "FRO",
    idd: "298",
    flag: "🇫🇴",
  },
  france,
  {
    name: "Gabon",
    cca2: "GA",
    cca3: "GAB",
    idd: "241",
    flag: "🇬🇦",
  },
  {
    name: "Gambia",
    cca2: "GM",
    cca3: "GMB",
    idd: "220",
    flag: "🇬🇲",
  },
  {
    name: "Ghana",
    cca2: "GH",
    cca3: "GHA",
    idd: "233",
    flag: "🇬🇭",
  },
  {
    name: "Gibraltar",
    cca2: "GI",
    cca3: "GIB",
    idd: "350",
    flag: "🇬🇮",
  },
  {
    name: "Grenada",
    cca2: "GD",
    cca3: "GRD",
    idd: "1473",
    flag: "🇬🇩",
  },
  {
    name: "Guadeloupe",
    cca2: "GP",
    cca3: "GLP",
    idd: "590",
    flag: "🇬🇵",
  },
  {
    name: "Guam",
    cca2: "GU",
    cca3: "GUM",
    idd: "1671",
    flag: "🇬🇺",
  },
  {
    name: "Guatemala",
    cca2: "GT",
    cca3: "GTM",
    idd: "502",
    flag: "🇬🇹",
  },
  {
    name: "Guernsey",
    cca2: "GG",
    cca3: "GGY",
    idd: "44",
    flag: "🇬🇬",
  },
  {
    name: "Guiné-Bissau",
    cca2: "GW",
    cca3: "GNB",
    idd: "245",
    flag: "🇬🇼",
  },
  {
    name: "Guinea Ecuatorial",
    cca2: "GQ",
    cca3: "GNQ",
    idd: "240",
    flag: "🇬🇶",
  },
  {
    name: "Guinée",
    cca2: "GN",
    cca3: "GIN",
    idd: "224",
    flag: "🇬🇳",
  },
  {
    name: "Guyana",
    cca2: "GY",
    cca3: "GUY",
    idd: "592",
    flag: "🇬🇾",
  },
  {
    name: "Guyane française",
    cca2: "GF",
    cca3: "GUF",
    idd: "594",
    flag: "🇬🇫",
  },
  {
    name: "Haïti",
    cca2: "HT",
    cca3: "HTI",
    idd: "509",
    flag: "🇭🇹",
  },
  {
    name: "Heard Island and McDonald Islands",
    cca2: "HM",
    cca3: "HMD",
    idd: "61",
    flag: "🇭🇲",
  },
  {
    name: "Honduras",
    cca2: "HN",
    cca3: "HND",
    idd: "504",
    flag: "🇭🇳",
  },
  {
    name: "Hrvatska",
    cca2: "HR",
    cca3: "HRV",
    idd: "385",
    flag: "🇭🇷",
  },
  {
    name: "Indonesia",
    cca2: "ID",
    cca3: "IDN",
    idd: "62",
    flag: "🇮🇩",
  },
  {
    name: "Ísland",
    cca2: "IS",
    cca3: "ISL",
    idd: "354",
    flag: "🇮🇸",
  },
  {
    name: "Isle of Man",
    cca2: "IM",
    cca3: "IMN",
    idd: "44",
    flag: "🇮🇲",
  },
  {
    name: "Italia",
    cca2: "IT",
    cca3: "ITA",
    idd: "39",
    flag: "🇮🇹",
  },
  {
    name: "Jamaica",
    cca2: "JM",
    cca3: "JAM",
    idd: "1876",
    flag: "🇯🇲",
  },
  {
    name: "Jersey",
    cca2: "JE",
    cca3: "JEY",
    idd: "44",
    flag: "🇯🇪",
  },
  {
    name: "Kalaallit Nunaat",
    cca2: "GL",
    cca3: "GRL",
    idd: "299",
    flag: "🇬🇱",
  },
  {
    name: "Kâmpŭchéa",
    cca2: "KH",
    cca3: "KHM",
    idd: "855",
    flag: "🇰🇭",
  },
  {
    name: "Kazakhstan",
    cca2: "KZ",
    cca3: "KAZ",
    idd: "7",
    flag: "🇰🇿",
  },
  {
    name: "Kenya",
    cca2: "KE",
    cca3: "KEN",
    idd: "254",
    flag: "🇰🇪",
  },
  {
    name: "Kiribati",
    cca2: "KI",
    cca3: "KIR",
    idd: "686",
    flag: "🇰🇮",
  },
  {
    name: "Ködörösêse tî Bêafrîka",
    cca2: "CF",
    cca3: "CAF",
    idd: "236",
    flag: "🇨🇫",
  },
  {
    name: "Komori",
    cca2: "KM",
    cca3: "COM",
    idd: "269",
    flag: "🇰🇲",
  },
  {
    name: "La Réunion",
    cca2: "RE",
    cca3: "REU",
    idd: "262",
    flag: "🇷🇪",
  },
  {
    name: "Latvija",
    cca2: "LV",
    cca3: "LVA",
    idd: "371",
    flag: "🇱🇻",
  },
  {
    name: "Lesotho",
    cca2: "LS",
    cca3: "LSO",
    idd: "266",
    flag: "🇱🇸",
  },
  {
    name: "Liberia",
    cca2: "LR",
    cca3: "LBR",
    idd: "231",
    flag: "🇱🇷",
  },
  {
    name: "Liechtenstein",
    cca2: "LI",
    cca3: "LIE",
    idd: "423",
    flag: "🇱🇮",
  },
  {
    name: "Lietuva",
    cca2: "LT",
    cca3: "LTU",
    idd: "370",
    flag: "🇱🇹",
  },
  {
    name: "Luxembourg",
    cca2: "LU",
    cca3: "LUX",
    idd: "352",
    flag: "🇱🇺",
  },
  {
    name: "Madagasikara",
    cca2: "MG",
    cca3: "MDG",
    idd: "261",
    flag: "🇲🇬",
  },
  {
    name: "Magyarország",
    cca2: "HU",
    cca3: "HUN",
    idd: "36",
    flag: "🇭🇺",
  },
  {
    name: "M̧ajeļ",
    cca2: "MH",
    cca3: "MHL",
    idd: "692",
    flag: "🇲🇭",
  },
  {
    name: "Malawi",
    cca2: "MW",
    cca3: "MWI",
    idd: "265",
    flag: "🇲🇼",
  },
  {
    name: "Malaysia",
    cca2: "MY",
    cca3: "MYS",
    idd: "60",
    flag: "🇲🇾",
  },
  {
    name: "Maldives",
    cca2: "MV",
    cca3: "MDV",
    idd: "960",
    flag: "🇲🇻",
  },
  {
    name: "Mali",
    cca2: "ML",
    cca3: "MLI",
    idd: "223",
    flag: "🇲🇱",
  },
  {
    name: "Malta",
    cca2: "MT",
    cca3: "MLT",
    idd: "356",
    flag: "🇲🇹",
  },
  {
    name: "Martinique",
    cca2: "MQ",
    cca3: "MTQ",
    idd: "596",
    flag: "🇲🇶",
  },
  {
    name: "Maurice",
    cca2: "MU",
    cca3: "MUS",
    idd: "230",
    flag: "🇲🇺",
  },
  {
    name: "Mayotte",
    cca2: "YT",
    cca3: "MYT",
    idd: "262",
    flag: "🇾🇹",
  },
  {
    name: "México",
    cca2: "MX",
    cca3: "MEX",
    idd: "52",
    flag: "🇲🇽",
  },
  {
    name: "Micronesia",
    cca2: "FM",
    cca3: "FSM",
    idd: "691",
    flag: "🇫🇲",
  },
  {
    name: "Moçambique",
    cca2: "MZ",
    cca3: "MOZ",
    idd: "258",
    flag: "🇲🇿",
  },
  {
    name: "Moldova",
    cca2: "MD",
    cca3: "MDA",
    idd: "373",
    flag: "🇲🇩",
  },
  {
    name: "Monaco",
    cca2: "MC",
    cca3: "MCO",
    idd: "377",
    flag: "🇲🇨",
  },
  {
    name: "Montserrat",
    cca2: "MS",
    cca3: "MSR",
    idd: "1664",
    flag: "🇲🇸",
  },
  {
    name: "Namibia",
    cca2: "NA",
    cca3: "NAM",
    idd: "264",
    flag: "🇳🇦",
  },
  {
    name: "Nederland",
    cca2: "NL",
    cca3: "NLD",
    idd: "31",
    flag: "🇳🇱",
  },
  {
    name: "Negara Brunei Darussalam",
    cca2: "BN",
    cca3: "BRN",
    idd: "673",
    flag: "🇧🇳",
  },
  {
    name: "New Zealand",
    cca2: "NZ",
    cca3: "NZL",
    idd: "64",
    flag: "🇳🇿",
  },
  {
    name: "Nicaragua",
    cca2: "NI",
    cca3: "NIC",
    idd: "505",
    flag: "🇳🇮",
  },
  {
    name: "Niger",
    cca2: "NE",
    cca3: "NER",
    idd: "227",
    flag: "🇳🇪",
  },
  {
    name: "Nigeria",
    cca2: "NG",
    cca3: "NGA",
    idd: "234",
    flag: "🇳🇬",
  },
  {
    name: "Niuē",
    cca2: "NU",
    cca3: "NIU",
    idd: "683",
    flag: "🇳🇺",
  },
  {
    name: "Norfolk Island",
    cca2: "NF",
    cca3: "NFK",
    idd: "672",
    flag: "🇳🇫",
  },
  {
    name: "Norge",
    cca2: "NO",
    cca3: "NOR",
    idd: "47",
    flag: "🇳🇴",
  },
  {
    name: "Northern Mariana Islands",
    cca2: "MP",
    cca3: "MNP",
    idd: "1670",
    flag: "🇲🇵",
  },
  {
    name: "Nouvelle-Calédonie",
    cca2: "NC",
    cca3: "NCL",
    idd: "687",
    flag: "🇳🇨",
  },
  {
    name: "Österreich",
    cca2: "AT",
    cca3: "AUT",
    idd: "43",
    flag: "🇦🇹",
  },
  {
    name: "O‘zbekiston",
    cca2: "UZ",
    cca3: "UZB",
    idd: "998",
    flag: "🇺🇿",
  },
  {
    name: "Pakistan",
    cca2: "PK",
    cca3: "PAK",
    idd: "92",
    flag: "🇵🇰",
  },
  {
    name: "Palau",
    cca2: "PW",
    cca3: "PLW",
    idd: "680",
    flag: "🇵🇼",
  },
  {
    name: "Panamá",
    cca2: "PA",
    cca3: "PAN",
    idd: "507",
    flag: "🇵🇦",
  },
  {
    name: "Papua Niugini",
    cca2: "PG",
    cca3: "PNG",
    idd: "675",
    flag: "🇵🇬",
  },
  {
    name: "Paraguay",
    cca2: "PY",
    cca3: "PRY",
    idd: "595",
    flag: "🇵🇾",
  },
  {
    name: "Perú",
    cca2: "PE",
    cca3: "PER",
    idd: "51",
    flag: "🇵🇪",
  },
  {
    name: "Pilipinas",
    cca2: "PH",
    cca3: "PHL",
    idd: "63",
    flag: "🇵🇭",
  },
  {
    name: "Pitcairn Islands",
    cca2: "PN",
    cca3: "PCN",
    idd: "64",
    flag: "🇵🇳",
  },
  {
    name: "Polska",
    cca2: "PL",
    cca3: "POL",
    idd: "48",
    flag: "🇵🇱",
  },
  {
    name: "Polynésie française",
    cca2: "PF",
    cca3: "PYF",
    idd: "689",
    flag: "🇵🇫",
  },
  {
    name: "Portugal",
    cca2: "PT",
    cca3: "PRT",
    idd: "351",
    flag: "🇵🇹",
  },
  {
    name: "Puerto Rico",
    cca2: "PR",
    cca3: "PRI",
    idd: "1787",
    flag: "🇵🇷",
  },
  {
    name: "República Dominicana",
    cca2: "DO",
    cca3: "DOM",
    idd: "1829",
    flag: "🇩🇴",
  },
  {
    name: "República Dominicana",
    cca2: "DO",
    cca3: "DOM",
    idd: "1849",
    flag: "🇩🇴",
  },
  {
    name: "República Dominicana",
    cca2: "DO",
    cca3: "DOM",
    idd: "1809",
    flag: "🇩🇴",
  },
  {
    name: "Republika e Kosovës",
    cca2: "XK",
    cca3: "XKX",
    idd: "383",
    flag: "🇽🇰",
  },
  {
    name: "République démocratique du Congo",
    cca2: "CD",
    cca3: "COD",
    idd: "243",
    flag: "🇨🇩",
  },
  {
    name: "République du Congo",
    cca2: "CG",
    cca3: "COG",
    idd: "242",
    flag: "🇨🇬",
  },
  {
    name: "România",
    cca2: "RO",
    cca3: "ROU",
    idd: "40",
    flag: "🇷🇴",
  },
  {
    name: "Rwanda",
    cca2: "RW",
    cca3: "RWA",
    idd: "250",
    flag: "🇷🇼",
  },
  {
    name: "Saint Kitts and Nevis",
    cca2: "KN",
    cca3: "KNA",
    idd: "1869",
    flag: "🇰🇳",
  },
  {
    name: "Saint Lucia",
    cca2: "LC",
    cca3: "LCA",
    idd: "1758",
    flag: "🇱🇨",
  },
  {
    name: "Saint Vincent and the Grenadines",
    cca2: "VC",
    cca3: "VCT",
    idd: "1784",
    flag: "🇻🇨",
  },
  {
    name: "Saint-Barthélemy",
    cca2: "BL",
    cca3: "BLM",
    idd: "590",
    flag: "🇧🇱",
  },
  {
    name: "Saint-Martin",
    cca2: "MF",
    cca3: "MAF",
    idd: "590",
    flag: "🇲🇫",
  },
  {
    name: "Saint-Pierre-et-Miquelon",
    cca2: "PM",
    cca3: "SPM",
    idd: "508",
    flag: "🇵🇲",
  },
  {
    name: "Samoa",
    cca2: "WS",
    cca3: "WSM",
    idd: "685",
    flag: "🇼🇸",
  },
  {
    name: "San Marino",
    cca2: "SM",
    cca3: "SMR",
    idd: "378",
    flag: "🇸🇲",
  },
  {
    name: "São Tomé e Príncipe",
    cca2: "ST",
    cca3: "STP",
    idd: "239",
    flag: "🇸🇹",
  },
  {
    name: "Schweiz",
    cca2: "CH",
    cca3: "CHE",
    idd: "41",
    flag: "🇨🇭",
  },
  {
    name: "Sénégal",
    cca2: "SN",
    cca3: "SEN",
    idd: "221",
    flag: "🇸🇳",
  },
  {
    name: "Seychelles",
    cca2: "SC",
    cca3: "SYC",
    idd: "248",
    flag: "🇸🇨",
  },
  {
    name: "Shqipëria",
    cca2: "AL",
    cca3: "ALB",
    idd: "355",
    flag: "🇦🇱",
  },
  {
    name: "Sierra Leone",
    cca2: "SL",
    cca3: "SLE",
    idd: "232",
    flag: "🇸🇱",
  },
  {
    name: "Singapore",
    cca2: "SG",
    cca3: "SGP",
    idd: "65",
    flag: "🇸🇬",
  },
  {
    name: "Slovenija",
    cca2: "SI",
    cca3: "SVN",
    idd: "386",
    flag: "🇸🇮",
  },
  {
    name: "Slovensko",
    cca2: "SK",
    cca3: "SVK",
    idd: "421",
    flag: "🇸🇰",
  },
  {
    name: "Solomon Islands",
    cca2: "SB",
    cca3: "SLB",
    idd: "677",
    flag: "🇸🇧",
  },
  {
    name: "Soomaaliya",
    cca2: "SO",
    cca3: "SOM",
    idd: "252",
    flag: "🇸🇴",
  },
  {
    name: "South Africa",
    cca2: "ZA",
    cca3: "ZAF",
    idd: "27",
    flag: "🇿🇦",
  },
  {
    name: "South Georgia",
    cca2: "GS",
    cca3: "SGS",
    idd: "500",
    flag: "🇬🇸",
  },
  {
    name: "South Sudan",
    cca2: "SS",
    cca3: "SSD",
    idd: "211",
    flag: "🇸🇸",
  },
  {
    name: "śrī laṃkāva",
    cca2: "LK",
    cca3: "LKA",
    idd: "94",
    flag: "🇱🇰",
  },
  {
    name: "Suomi",
    cca2: "FI",
    cca3: "FIN",
    idd: "358",
    flag: "🇫🇮",
  },
  {
    name: "Suriname",
    cca2: "SR",
    cca3: "SUR",
    idd: "597",
    flag: "🇸🇷",
  },
  {
    name: "Sverige",
    cca2: "SE",
    cca3: "SWE",
    idd: "46",
    flag: "🇸🇪",
  },
  {
    name: "Swaziland",
    cca2: "SZ",
    cca3: "SWZ",
    idd: "268",
    flag: "🇸🇿",
  },
  {
    name: "Tanzania",
    cca2: "TZ",
    cca3: "TZA",
    idd: "255",
    flag: "🇹🇿",
  },
  {
    name: "Tchad",
    cca2: "TD",
    cca3: "TCD",
    idd: "235",
    flag: "🇹🇩",
  },
  {
    name: "Terres antarctiques françaises",
    cca2: "TF",
    cca3: "ATF",
    idd: "262",
    flag: "🇹🇫",
  },
  {
    name: "Timor-Leste",
    cca2: "TL",
    cca3: "TLS",
    idd: "670",
    flag: "🇹🇱",
  },
  {
    name: "Togo",
    cca2: "TG",
    cca3: "TGO",
    idd: "228",
    flag: "🇹🇬",
  },
  {
    name: "Tonga",
    cca2: "TO",
    cca3: "TON",
    idd: "676",
    flag: "🇹🇴",
  },
  {
    name: "Trinidad and Tobago",
    cca2: "TT",
    cca3: "TTO",
    idd: "1868",
    flag: "🇹🇹",
  },
  {
    name: "Türkiye",
    cca2: "TR",
    cca3: "TUR",
    idd: "90",
    flag: "🇹🇷",
  },
  {
    name: "Türkmenistan",
    cca2: "TM",
    cca3: "TKM",
    idd: "993",
    flag: "🇹🇲",
  },
  {
    name: "Turks and Caicos Islands",
    cca2: "TC",
    cca3: "TCA",
    idd: "1649",
    flag: "🇹🇨",
  },
  {
    name: "Tuvalu",
    cca2: "TV",
    cca3: "TUV",
    idd: "688",
    flag: "🇹🇻",
  },
  {
    name: "Uganda",
    cca2: "UG",
    cca3: "UGA",
    idd: "256",
    flag: "🇺🇬",
  },
  {
    name: "United Kingdom",
    cca2: "GB",
    cca3: "GBR",
    idd: "44",
    flag: "🇬🇧",
  },
  {
    name: "United States",
    cca2: "US",
    cca3: "USA",
    idd: "1",
    flag: "🇺🇸",
  },
  {
    name: "United States Minor Outlying Islands",
    cca2: "UM",
    cca3: "UMI",
    idd: "1",
    flag: "🇺🇲",
  },
  {
    name: "United States Virgin Islands",
    cca2: "VI",
    cca3: "VIR",
    idd: "1340",
    flag: "🇻🇮",
  },
  {
    name: "Uruguay",
    cca2: "UY",
    cca3: "URY",
    idd: "598",
    flag: "🇺🇾",
  },
  {
    name: "Vanuatu",
    cca2: "VU",
    cca3: "VUT",
    idd: "678",
    flag: "🇻🇺",
  },
  {
    name: "Vaticano",
    cca2: "VA",
    cca3: "VAT",
    idd: "379",
    flag: "🇻🇦",
  },
  {
    name: "Venezuela",
    cca2: "VE",
    cca3: "VEN",
    idd: "58",
    flag: "🇻🇪",
  },
  {
    name: "Việt Nam",
    cca2: "VN",
    cca3: "VNM",
    idd: "84",
    flag: "🇻🇳",
  },
  {
    name: "Wallis et Futuna",
    cca2: "WF",
    cca3: "WLF",
    idd: "681",
    flag: "🇼🇫",
  },
  {
    name: "Zambia",
    cca2: "ZM",
    cca3: "ZMB",
    idd: "260",
    flag: "🇿🇲",
  },
  {
    name: "Zimbabwe",
    cca2: "ZW",
    cca3: "ZWE",
    idd: "263",
    flag: "🇿🇼",
  },
  {
    name: "ʼbrug-yul",
    cca2: "BT",
    cca3: "BTN",
    idd: "975",
    flag: "🇧🇹",
  },
  {
    name: "Ελλάδα",
    cca2: "GR",
    cca3: "GRC",
    idd: "30",
    flag: "🇬🇷",
  },
  {
    name: "Κύπρος",
    cca2: "CY",
    cca3: "CYP",
    idd: "357",
    flag: "🇨🇾",
  },
  {
    name: "Белару́сь",
    cca2: "BY",
    cca3: "BLR",
    idd: "375",
    flag: "🇧🇾",
  },
  {
    name: "България",
    cca2: "BG",
    cca3: "BGR",
    idd: "359",
    flag: "🇧🇬",
  },
  {
    name: "Кыргызстан",
    cca2: "KG",
    cca3: "KGZ",
    idd: "996",
    flag: "🇰🇬",
  },
  {
    name: "Македонија",
    cca2: "MK",
    cca3: "MKD",
    idd: "389",
    flag: "🇲🇰",
  },
  {
    name: "Монгол улс",
    cca2: "MN",
    cca3: "MNG",
    idd: "976",
    flag: "🇲🇳",
  },
  {
    name: "Россия",
    cca2: "RU",
    cca3: "RUS",
    idd: "7",
    flag: "🇷🇺",
  },
  {
    name: "Србија",
    cca2: "RS",
    cca3: "SRB",
    idd: "381",
    flag: "🇷🇸",
  },
  {
    name: "Тоҷикистон",
    cca2: "TJ",
    cca3: "TJK",
    idd: "992",
    flag: "🇹🇯",
  },
  {
    name: "Україна",
    cca2: "UA",
    cca3: "UKR",
    idd: "380",
    flag: "🇺🇦",
  },
  {
    name: "Црна Гора",
    cca2: "ME",
    cca3: "MNE",
    idd: "382",
    flag: "🇲🇪",
  },
  {
    name: "Հայաստան",
    cca2: "AM",
    cca3: "ARM",
    idd: "374",
    flag: "🇦🇲",
  },
  {
    name: "יִשְׂרָאֵל",
    cca2: "IL",
    cca3: "ISR",
    idd: "972",
    flag: "🇮🇱",
  },
  {
    name: "افغانستان",
    cca2: "AF",
    cca3: "AFG",
    idd: "93",
    flag: "🇦🇫",
  },
  {
    name: "الأردن",
    cca2: "JO",
    cca3: "JOR",
    idd: "962",
    flag: "🇯🇴",
  },
  {
    name: "الجزائر",
    cca2: "DZ",
    cca3: "DZA",
    idd: "213",
    flag: "🇩🇿",
  },
  {
    name: "السودان",
    cca2: "SD",
    cca3: "SDN",
    idd: "249",
    flag: "🇸🇩",
  },
  {
    name: "الصحراء الغربية",
    cca2: "EH",
    cca3: "ESH",
    idd: "212",
    flag: "🇪🇭",
  },
  {
    name: "العراق",
    cca2: "IQ",
    cca3: "IRQ",
    idd: "964",
    flag: "🇮🇶",
  },
  {
    name: "العربية السعودية",
    cca2: "SA",
    cca3: "SAU",
    idd: "966",
    flag: "🇸🇦",
  },
  {
    name: "الكويت",
    cca2: "KW",
    cca3: "KWT",
    idd: "965",
    flag: "🇰🇼",
  },
  {
    name: "المغرب",
    cca2: "MA",
    cca3: "MAR",
    idd: "212",
    flag: "🇲🇦",
  },
  {
    name: "اليَمَن",
    cca2: "YE",
    cca3: "YEM",
    idd: "967",
    flag: "🇾🇪",
  },
  {
    name: "ایران",
    cca2: "IR",
    cca3: "IRN",
    idd: "98",
    flag: "🇮🇷",
  },
  {
    name: "تونس",
    cca2: "TN",
    cca3: "TUN",
    idd: "216",
    flag: "🇹🇳",
  },
  {
    name: "دولة الإمارات العربية المتحدة",
    cca2: "AE",
    cca3: "ARE",
    idd: "971",
    flag: "🇦🇪",
  },
  {
    name: "سوريا",
    cca2: "SY",
    cca3: "SYR",
    idd: "963",
    flag: "🇸🇾",
  },
  {
    name: "عمان",
    cca2: "OM",
    cca3: "OMN",
    idd: "968",
    flag: "🇴🇲",
  },
  {
    name: "فلسطين",
    cca2: "PS",
    cca3: "PSE",
    idd: "970",
    flag: "🇵🇸",
  },
  {
    name: "قطر",
    cca2: "QA",
    cca3: "QAT",
    idd: "974",
    flag: "🇶🇦",
  },
  {
    name: "لبنان",
    cca2: "LB",
    cca3: "LBN",
    idd: "961",
    flag: "🇱🇧",
  },
  {
    name: "مصر‎",
    cca2: "EG",
    cca3: "EGY",
    idd: "20",
    flag: "🇪🇬",
  },
  {
    name: "موريتانيا",
    cca2: "MR",
    cca3: "MRT",
    idd: "222",
    flag: "🇲🇷",
  },
  {
    name: "नपल",
    cca2: "NP",
    cca3: "NPL",
    idd: "977",
    flag: "🇳🇵",
  },
  {
    name: "भारत",
    cca2: "IN",
    cca3: "IND",
    idd: "91",
    flag: "🇮🇳",
  },
  {
    name: "ประเทศไทย",
    cca2: "TH",
    cca3: "THA",
    idd: "66",
    flag: "🇹🇭",
  },
  {
    name: "ສປປລາວ",
    cca2: "LA",
    cca3: "LAO",
    idd: "856",
    flag: "🇱🇦",
  },
  {
    name: "မြန်မာ",
    cca2: "MM",
    cca3: "MMR",
    idd: "95",
    flag: "🇲🇲",
  },
  {
    name: "საქართველო",
    cca2: "GE",
    cca3: "GEO",
    idd: "995",
    flag: "🇬🇪",
  },
  {
    name: "ኢትዮጵያ",
    cca2: "ET",
    cca3: "ETH",
    idd: "251",
    flag: "🇪🇹",
  },
  {
    name: "ኤርትራ",
    cca2: "ER",
    cca3: "ERI",
    idd: "291",
    flag: "🇪🇷",
  },
  {
    name: "‏البحرين",
    cca2: "BH",
    cca3: "BHR",
    idd: "973",
    flag: "🇧🇭",
  },
  {
    name: "‏ليبيا",
    cca2: "LY",
    cca3: "LBY",
    idd: "218",
    flag: "🇱🇾",
  },
  {
    name: "中国",
    cca2: "CN",
    cca3: "CHN",
    idd: "86",
    flag: "🇨🇳",
  },
  {
    name: "日本",
    cca2: "JP",
    cca3: "JPN",
    idd: "81",
    flag: "🇯🇵",
  },
  {
    name: "澳門",
    cca2: "MO",
    cca3: "MAC",
    idd: "853",
    flag: "🇲🇴",
  },
  {
    name: "臺灣",
    cca2: "TW",
    cca3: "TWN",
    idd: "886",
    flag: "🇹🇼",
  },
  {
    name: "香港",
    cca2: "HK",
    cca3: "HKG",
    idd: "852",
    flag: "🇭🇰",
  },
  {
    name: "대한민국",
    cca2: "KR",
    cca3: "KOR",
    idd: "82",
    flag: "🇰🇷",
  },
  {
    name: "북한",
    cca2: "KP",
    cca3: "PRK",
    idd: "850",
    flag: "🇰🇵",
  },
] as const;

const countryNameResolver = Result.fromExecution(() => {
  const DisplayNames = Intl.DisplayNames;

  // https://github.com/formatjs/formatjs/blob/%40formatjs/intl-localematcher%400.5.3/packages/intl-displaynames/should-polyfill.ts
  const hasMissingICUBug =
    new DisplayNames(["en"], {
      type: "region",
    }).of("CA") === "CA";

  if (hasMissingICUBug) {
    throw new Error("Missing Intl APIs");
  }

  const locales = [locale.language];
  const isLocaleSupported = DisplayNames.supportedLocalesOf(locales).length > 0;

  if (!isLocaleSupported) {
    throw new Error("Missing Intl APIs");
  }

  return new DisplayNames(locales, { type: "region" });
});

export type Country = Simplify<
  Pick<(typeof readonlyCountries)[number], "cca2" | "cca3"> & {
    name: string;
    deburr: string;
    idd: string;
    uid: string;
    flag: string;
  }
>;

export type CountryCCA2 = Country["cca2"];
export type CountryCCA3 = Country["cca3"];

export const countries: Country[] = readonlyCountries
  .map(country => {
    const name = countryNameResolver.match({
      Ok: resolver => resolver.of(country.cca2) ?? country.name,
      Error: () => country.name,
    });

    return {
      ...country,
      name,
      deburr: deburr(name.toLowerCase()),
      uid: `${country.cca2}-${country.idd}`,
    };
  })
  .sort((countryA, countryB) => {
    return countryA.name.localeCompare(countryB.name);
  });

export const getCCA2forCCA3 = (cca3: CountryCCA3): CountryCCA2 | undefined =>
  countries.find(country => country.cca3 === cca3)?.cca2;

export const getCCA3forCCA2 = (cca2: CountryCCA2): CountryCCA3 | undefined =>
  countries.find(country => country.cca2 === cca2)?.cca3;

export const companyWithUboCountries = ["BEL", "DEU", "FRA", "ITA", "LTU", "LUX", "NLD"] as const;
export type CompanyWithUboCountryCCA3 = (typeof companyWithUboCountries)[number];

export const allCountries = countries.map(country => country.cca3);

export const individualCountries = [
  "AUT",
  "BEL",
  "CYP",
  "DEU",
  "ESP",
  "EST",
  "FIN",
  "FRA",
  "GRC",
  "IRL",
  "ISL",
  "ITA",
  "LTU",
  "LUX",
  "LVA",
  "MLT",
  "NLD",
  "PRT",
  "SVK",
  "SVN",

  "HRV",
  "CZE",
  "DNK",
  "HUN",
  "LIE",
  "POL",
  "NOR",
  "ROU",
  "SWE",
  "BGR",
  "MCO",
] satisfies CountryCCA3[];

export type IndividualCountryCCA3 = (typeof individualCountries)[number];

export const companyCountries = [
  "BEL",
  "DEU",
  "FRA",
  "ITA",
  "LTU",
  "LUX",
  "NLD",
  "FIN",

  "AUT",
  "ESP",
  "HRV",
  "CZE",
  "DNK",
  "HUN",
  "LIE",
  "POL",
  "ROU",
  "SWE",
  "EST",
  "GRC",
  "IRL",
  "ISL",
  "LVA",
  "MLT",
  "PRT",
  "SVK",
  "SVN",
  "BGR",
  "CYP",
  "NOR",
  "MCO",
] satisfies CountryCCA3[];

export type CompanyCountryCCA3 = (typeof companyCountries)[number];

// Google API accepts only 5 country codes
export const countriesWithMultipleCCA3: Partial<Record<CountryCCA3, CountryCCA3[]>> = {
  FRA: ["FRA", "GUF", "REU", "MTQ", "GLP"], // France, French Guiana, Réunion, Martinique, Guadeloupe
};

export const isCountryCCA3 = (value: unknown): value is CountryCCA3 =>
  countries.some(({ cca3 }) => cca3 === value);

export const isCountryCCA2 = (value: unknown): value is CountryCCA2 =>
  countries.some(({ cca2 }) => cca2 === value);

export const isIndividualCountryCCA3 = (value: unknown): value is IndividualCountryCCA3 =>
  individualCountries.includes(value as IndividualCountryCCA3);

export const isCompanyCountryCCA3 = (value: unknown): value is CompanyCountryCCA3 =>
  companyCountries.includes(value as CompanyCountryCCA3);

export const isCompanyWithUboCountryCCA3 = (value: unknown): value is CompanyWithUboCountryCCA3 =>
  companyWithUboCountries.includes(value as CompanyWithUboCountryCCA3);

const navigatorCountries = navigator.languages.reduce<CountryCCA3[]>((acc, lang) => {
  const countryCode = lang.split("-")[1];

  if (countryCode != null && isCountryCCA2(countryCode)) {
    const countryCCA3 = getCCA3forCCA2(countryCode);
    countryCCA3 != null && acc.push(countryCCA3);
  }

  return acc;
}, []);

export const companyFallbackCountry =
  companyCountries.find(cca3 => navigatorCountries.includes(cca3)) ?? "FRA";

export const individualFallbackCountry =
  individualCountries.find(cca3 => navigatorCountries.includes(cca3)) ?? "FRA";

export const getCountryName = (cca3: CountryCCA3): string =>
  countries.find(country => country.cca3 === cca3)?.name ?? cca3;
