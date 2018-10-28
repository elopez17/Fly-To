const Geo = require('../models/Geo');

const mongoose = require('mongoose');
const dbURI = require("../config/keys").mongoURI;

mongoose.connect(dbURI, { useNewUrlParser: true });

const geos = [
  new Geo({
    IataCode: "BST",
    Location: "64.366667, 31.55"
  }),
  new Geo({
    IataCode: "CCN",
    Location: "65.266667, 34.533333"
  }),
  new Geo({
    IataCode: "FAH",
    Location: "62.18306, 32.36667"
  }),
  new Geo({
    IataCode: "FBD",
    Location: "70.58002, 37.11664"
  }),
  new Geo({
    IataCode: "HEA",
    Location: "62.203056, 34.341944"
  }),
  new Geo({
    IataCode: "KBL",
    Location: "69.213889, 34.563889"
  }),
  new Geo({
    IataCode: "KDH",
    Location: "65.716944, 31.616944"
  }),
  new Geo({
    IataCode: "MMZ",
    Location: "64.759167, 35.934167"
  }),
  new Geo({
    IataCode: "MZR",
    Location: "67.2, 36.7"
  }),
  new Geo({
    IataCode: "OAS",
    Location: "68.78, 33.13"
  }),
  new Geo({
    IataCode: "UND",
    Location: "68.910833, 36.665"
  }),
  new Geo({
    IataCode: "ZAJ",
    Location: "61.86, 30.96"
  }),
  new Geo({
    IataCode: "EVN",
    Location: "44.516667, 40.183333"
  }),
  new Geo({
    IataCode: "LWN",
    Location: "43.833333, 40.716667"
  }),
  new Geo({
    IataCode: "BAK",
    Location: "49.882222, 40.395278"
  }),
  new Geo({
    IataCode: "KVD",
    Location: "46.36056, 40.68278"
  }),
  new Geo({
    IataCode: "LLK",
    Location: "48.85111, 38.753611"
  }),
  new Geo({
    IataCode: "NAJ",
    Location: "45.458889, 39.190278"
  }),
  new Geo({
    IataCode: "GBB",
    Location: "47.845833, 40.981389"
  }),
  new Geo({
    IataCode: "BZL",
    Location: "90.366667, 22.7"
  }),
  new Geo({
    IataCode: "CGP",
    Location: "91.825556, 22.2575"
  }),
  new Geo({
    IataCode: "CXB",
    Location: "91.964808, 21.449758"
  }),
  new Geo({
    IataCode: "DAC",
    Location: "90.386111, 23.780556"
  }),
  new Geo({
    IataCode: "JSR",
    Location: "89.160892, 23.18375"
  }),
  new Geo({
    IataCode: "RJH",
    Location: "88.616267, 24.438719"
  }),
  new Geo({
    IataCode: "SPD",
    Location: "88.9, 25.783333"
  }),
  new Geo({
    IataCode: "ZYL",
    Location: "91.8833, 24.8917"
  }),
  new Geo({
    IataCode: "BUT",
    Location: "90.741153, 27.565183"
  }),
  new Geo({
    IataCode: "GLU",
    Location: "90.485556, 26.870556"
  }),
  new Geo({
    IataCode: "PBH",
    Location: "89.425833, 27.403056"
  }),
  new Geo({
    IataCode: "YON",
    Location: "91.566667, 27.333333"
  }),
  new Geo({
    IataCode: "AEB",
    Location: "106.9506, 23.7172"
  }),
  new Geo({
    IataCode: "AHJ",
    Location: "102.356944, 32.529167"
  }),
  new Geo({
    IataCode: "YIE",
    Location: "119.944, 47.1777"
  }),
  new Geo({
    IataCode: "BAR",
    Location: "110.470476, 19.259101"
  }),
  new Geo({
    IataCode: "BFJ",
    Location: "105.3, 27.3"
  }),
  new Geo({
    IataCode: "BJS",
    Location: "116.391667, 39.913889"
  }),
  new Geo({
    IataCode: "BPL",
    Location: "81.95, 44.983"
  }),
  new Geo({
    IataCode: "BPE",
    Location: "119.594844, 39.932196"
  }),
  new Geo({
    IataCode: "YUS",
    Location: "97.037025, 32.83641"
  }),
  new Geo({
    IataCode: "KJI",
    Location: "86.857224, 47.706989"
  }),
  new Geo({
    IataCode: "AAT",
    Location: "89.5, 43.933333"
  }),
  new Geo({
    IataCode: "ACX",
    Location: "104.959444, 25.085556"
  }),
  new Geo({
    IataCode: "AKU",
    Location: "80.333333, 41.166667"
  }),
  new Geo({
    IataCode: "AOG",
    Location: "123.033333, 41.166667"
  }),
  new Geo({
    IataCode: "AQG",
    Location: "117.033333, 30.516667"
  }),
  new Geo({
    IataCode: "AVA",
    Location: "105.872778, 26.257222"
  }),
  new Geo({
    IataCode: "AXF",
    Location: "105.4, 38.5"
  }),
  new Geo({
    IataCode: "BAV",
    Location: "109.841944, 40.650833"
  }),
  new Geo({
    IataCode: "BHY",
    Location: "109.083333, 21.483333"
  }),
  new Geo({
    IataCode: "BPX",
    Location: "91.871109, 30.017828"
  }),
  new Geo({
    IataCode: "BSD",
    Location: "99.15, 25.15"
  }),
  new Geo({
    IataCode: "CAN",
    Location: "113.266111, 23.183333"
  }),
  new Geo({
    IataCode: "CGD",
    Location: "111.583333, 29.066667"
  }),
  new Geo({
    IataCode: "CGO",
    Location: "113.65, 34.8"
  }),
  new Geo({
    IataCode: "CGQ",
    Location: "125.316667, 43.883333"
  }),
  new Geo({
    IataCode: "CHG",
    Location: "121, 42"
  }),
  new Geo({
    IataCode: "CIF",
    Location: "118.933333, 42.283333"
  }),
  new Geo({
    IataCode: "CIH",
    Location: "113.133333, 36.183333"
  }),
  new Geo({
    IataCode: "CKG",
    Location: "106.566667, 29.558333"
  }),
  new Geo({
    IataCode: "CSX",
    Location: "113.221667, 28.186667"
  }),
  new Geo({
    IataCode: "CTU",
    Location: "104.063333, 30.659722"
  }),
  new Geo({
    IataCode: "CZX",
    Location: "119.966667, 31.7"
  }),
  new Geo({
    IataCode: "DAT",
    Location: "117.733333, 30.8"
  }),
  new Geo({
    IataCode: "DAX",
    Location: "107.5, 31.3"
  }),
  new Geo({
    IataCode: "DCY",
    Location: "100.19, 28.46"
  }),
  new Geo({
    IataCode: "DDG",
    Location: "124.383333, 40.116667"
  }),
  new Geo({
    IataCode: "CDE",
    Location: "117.967481, 40.95222"
  }),
  new Geo({
    IataCode: "DIG",
    Location: "99.677778, 27.789722"
  }),
  new Geo({
    IataCode: "DLC",
    Location: "121.60222, 38.91222"
  }),
  new Geo({
    IataCode: "DLU",
    Location: "100.316667, 25.666667"
  }),
  new Geo({
    IataCode: "DNH",
    Location: "94.683333, 40.2"
  }),
  new Geo({
    IataCode: "DOY",
    Location: "118.787778, 37.518333"
  }),
  new Geo({
    IataCode: "DSN",
    Location: "110.033333, 39.85"
  }),
  new Geo({
    IataCode: "DYG",
    Location: "110.483333, 29.133333"
  }),
  new Geo({
    IataCode: "ENH",
    Location: "109.483333, 30.283333"
  }),
  new Geo({
    IataCode: "ENY",
    Location: "109.483333, 36.6"
  }),
  new Geo({
    IataCode: "FOC",
    Location: "119.283333, 26.1"
  }),
  new Geo({
    IataCode: "FUG",
    Location: "115.7, 32.866667"
  }),
  new Geo({
    IataCode: "FUO",
    Location: "105.00114, 29.18382"
  }),
  new Geo({
    IataCode: "FYJ",
    Location: "134.366447, 48.199494"
  }),
  new Geo({
    IataCode: "FYN",
    Location: "89.65, 47.216667"
  }),
  new Geo({
    IataCode: "GOQ",
    Location: "94.883333, 36.416667"
  }),
  new Geo({
    IataCode: "GYS",
    Location: "105.816667, 32.433333"
  }),
  new Geo({
    IataCode: "HAK",
    Location: "110.34167, 20.04583"
  }),
  new Geo({
    IataCode: "HEK",
    Location: "127.433333, 50.216667"
  }),
  new Geo({
    IataCode: "HET",
    Location: "111.65, 40.816667"
  }),
  new Geo({
    IataCode: "HFE",
    Location: "117.283333, 31.85"
  }),
  new Geo({
    IataCode: "HGH",
    Location: "120.166667, 30.25"
  }),
  new Geo({
    IataCode: "HLD",
    Location: "119.825, 49.205"
  }),
  new Geo({
    IataCode: "HLH",
    Location: "122, 46.033333"
  }),
  new Geo({
    IataCode: "HMI",
    Location: "93.45, 42.8"
  }),
  new Geo({
    IataCode: "HNY",
    Location: "112.615, 26.88806"
  }),
  new Geo({
    IataCode: "HRB",
    Location: "126.666667, 45.75"
  }),
  new Geo({
    IataCode: "HSN",
    Location: "122.209167, 30.007274"
  }),
  new Geo({
    IataCode: "HUZ",
    Location: "114.366667, 23.083333"
  }),
  new Geo({
    IataCode: "HYN",
    Location: "121.262283, 28.652031"
  }),
  new Geo({
    IataCode: "HZG",
    Location: "107.026111, 33.0775"
  }),
  new Geo({
    IataCode: "INC",
    Location: "106.266667, 38.466667"
  }),
  new Geo({
    IataCode: "IQM",
    Location: "85.533333, 38.133333"
  }),
  new Geo({
    IataCode: "IQN",
    Location: "107.88548, 35.9989"
  }),
  new Geo({
    IataCode: "JDZ",
    Location: "117.183333, 29.266667"
  }),
  new Geo({
    IataCode: "JGD",
    Location: "124.0412, 50.2512"
  }),
  new Geo({
    IataCode: "JGN",
    Location: "98.3, 39.816667"
  }),
  new Geo({
    IataCode: "JGS",
    Location: "114.7375, 26.899722"
  }),
  new Geo({
    IataCode: "JHG",
    Location: "100.8, 22.016667"
  }),
  new Geo({
    IataCode: "JIU",
    Location: "115.966667, 29.7"
  }),
  new Geo({
    IataCode: "JJN",
    Location: "118.57, 24.82"
  }),
  new Geo({
    IataCode: "JMU",
    Location: "130.35, 46.833333"
  }),
  new Geo({
    IataCode: "JNG",
    Location: "116.533333, 35.416667"
  }),
  new Geo({
    IataCode: "JNZ",
    Location: "121.133333, 41.116667"
  }),
  new Geo({
    IataCode: "JUZ",
    Location: "118.833333, 28.966667"
  }),
  new Geo({
    IataCode: "JZH",
    Location: "103.59683, 32.63941"
  }),
  new Geo({
    IataCode: "KCA",
    Location: "82.936, 41.728"
  }),
  new Geo({
    IataCode: "KHG",
    Location: "75.983333, 39.466667"
  }),
  new Geo({
    IataCode: "KHN",
    Location: "115.883333, 28.683333"
  }),
  new Geo({
    IataCode: "KMG",
    Location: "102.705, 25.041667"
  }),
  new Geo({
    IataCode: "KOW",
    Location: "114.95, 25.85"
  }),
  new Geo({
    IataCode: "KRL",
    Location: "86.15, 41.733333"
  }),
  new Geo({
    IataCode: "KRY",
    Location: "84.883333, 45.616667"
  }),
  new Geo({
    IataCode: "KWE",
    Location: "106.71639, 26.58306"
  }),
  new Geo({
    IataCode: "KWL",
    Location: "110.28639, 25.28194"
  }),
  new Geo({
    IataCode: "LCX",
    Location: "116.745556, 25.675556"
  }),
  new Geo({
    IataCode: "LHW",
    Location: "103.8, 36.061111"
  }),
  new Geo({
    IataCode: "LJG",
    Location: "100.25, 26.683333"
  }),
  new Geo({
    IataCode: "LLB",
    Location: "107.53, 25.25"
  }),
  new Geo({
    IataCode: "LLF",
    Location: "111.62796, 26.203502"
  }),
  new Geo({
    IataCode: "LLV",
    Location: "111.09, 37.31"
  }),
  new Geo({
    IataCode: "LNJ",
    Location: "100.083333, 23.883333"
  }),
  new Geo({
    IataCode: "LUM",
    Location: "98.6, 24.45"
  }),
  new Geo({
    IataCode: "LXA",
    Location: "91.126099, 29.647482"
  }),
  new Geo({
    IataCode: "LYA",
    Location: "112.466667, 34.683333"
  }),
  new Geo({
    IataCode: "LYG",
    Location: "119.166667, 34.6"
  }),
  new Geo({
    IataCode: "LYI",
    Location: "118.366667, 35.066667"
  }),
  new Geo({
    IataCode: "LZH",
    Location: "109.383333, 24.316667"
  }),
  new Geo({
    IataCode: "LZO",
    Location: "105.35, 28.883333"
  }),
  new Geo({
    IataCode: "MDG",
    Location: "129.6, 44.583333"
  }),
  new Geo({
    IataCode: "MXZ",
    Location: "116.133333, 24.35"
  }),
  new Geo({
    IataCode: "NAO",
    Location: "106.066667, 30.8"
  }),
  new Geo({
    IataCode: "NDG",
    Location: "123.916667, 47.316667"
  }),
  new Geo({
    IataCode: "NGB",
    Location: "121.516667, 29.866667"
  }),
  new Geo({
    IataCode: "NKG",
    Location: "118.811667, 31.995278"
  }),
  new Geo({
    IataCode: "NNG",
    Location: "108.316667, 22.816667"
  }),
  new Geo({
    IataCode: "NNY",
    Location: "112.533333, 33"
  }),
  new Geo({
    IataCode: "NTG",
    Location: "120.966667, 32.066667"
  }),
  new Geo({
    IataCode: "PZI",
    Location: "103, 22"
  }),
  new Geo({
    IataCode: "RLK",
    Location: "107.24, 40.46"
  }),
  new Geo({
    IataCode: "SHA",
    Location: "121.469994, 31.240105"
  }),
  new Geo({
    IataCode: "SHE",
    Location: "123.5, 41.816667"
  }),
  new Geo({
    IataCode: "SHF",
    Location: "119.733333, 40.016667"
  }),
  new Geo({
    IataCode: "SHS",
    Location: "112.233333, 30.316667"
  }),
  new Geo({
    IataCode: "SJW",
    Location: "114.466667, 38.05"
  }),
  new Geo({
    IataCode: "SWA",
    Location: "116.71479, 23.36814"
  }),
  new Geo({
    IataCode: "SYM",
    Location: "100.975, 22.780833"
  }),
  new Geo({
    IataCode: "SYX",
    Location: "109.4, 18.3"
  }),
  new Geo({
    IataCode: "SZV",
    Location: "120.633333, 31.3"
  }),
  new Geo({
    IataCode: "SZX",
    Location: "114.1, 22.55"
  }),
  new Geo({
    IataCode: "TAO",
    Location: "120.316667, 36.1"
  }),
  new Geo({
    IataCode: "TCG",
    Location: "82.983333, 46.75"
  }),
  new Geo({
    IataCode: "TEN",
    Location: "109.185, 27.717"
  }),
  new Geo({
    IataCode: "TGO",
    Location: "122.25, 43.616667"
  }),
  new Geo({
    IataCode: "TNH",
    Location: "115.71731, 24.14455"
  }),
  new Geo({
    IataCode: "TSN",
    Location: "117.183333, 39.133333"
  }),
  new Geo({
    IataCode: "TXN",
    Location: "118.3, 29.733333"
  }),
  new Geo({
    IataCode: "TYN",
    Location: "112.560278, 37.869444"
  }),
  new Geo({
    IataCode: "URC",
    Location: "87.483333, 43.9"
  }),
  new Geo({
    IataCode: "UYN",
    Location: "109.74944, 38.29056"
  }),
  new Geo({
    IataCode: "WEF",
    Location: "119.1, 36.716667"
  }),
  new Geo({
    IataCode: "WEH",
    Location: "122.083333, 37.5"
  }),
  new Geo({
    IataCode: "CWJ",
    Location: "99.249063, 23.148363"
  }),
  new Geo({
    IataCode: "WNZ",
    Location: "120.633333, 27.95"
  }),
  new Geo({
    IataCode: "WUA",
    Location: "106.81222, 39.66472"
  }),
  new Geo({
    IataCode: "WUH",
    Location: "114.279167, 30.5725"
  }),
  new Geo({
    IataCode: "WUS",
    Location: "117.966667, 27.716667"
  }),
  new Geo({
    IataCode: "WUX",
    Location: "120.316667, 31.583333"
  }),
  new Geo({
    IataCode: "WUZ",
    Location: "111.333333, 23.5"
  }),
  new Geo({
    IataCode: "WXN",
    Location: "103.466667, 30.9"
  }),
  new Geo({
    IataCode: "XFN",
    Location: "112.133, 32.017"
  }),
  new Geo({
    IataCode: "XIC",
    Location: "102.26342, 27.89642"
  }),
  new Geo({
    IataCode: "XIL",
    Location: "116.066667, 43.966667"
  }),
  new Geo({
    IataCode: "XMN",
    Location: "118.116667, 24.466667"
  }),
  new Geo({
    IataCode: "XNN",
    Location: "101.75, 36.55"
  }),
  new Geo({
    IataCode: "XUZ",
    Location: "117.183333, 34.266667"
  }),
  new Geo({
    IataCode: "YBP",
    Location: "104.616667, 28.766667"
  }),
  new Geo({
    IataCode: "YIH",
    Location: "111.183333, 30.7"
  }),
  new Geo({
    IataCode: "YIN",
    Location: "81.233333, 43.916667"
  }),
  new Geo({
    IataCode: "YIW",
    Location: "120.05, 29.266667"
  }),
  new Geo({
    IataCode: "YNJ",
    Location: "129.5, 42.9"
  }),
  new Geo({
    IataCode: "YNT",
    Location: "121.333333, 37.55"
  }),
  new Geo({
    IataCode: "YNZ",
    Location: "120.125278, 33.385556"
  }),
  new Geo({
    IataCode: "YZY",
    Location: "100.27, 38.36"
  }),
  new Geo({
    IataCode: "ZAT",
    Location: "103.8, 27.316667"
  }),
  new Geo({
    IataCode: "ZHA",
    Location: "110.363159, 21.253542"
  }),
  new Geo({
    IataCode: "ZUH",
    Location: "113.5, 22.25"
  }),
  new Geo({
    IataCode: "ZYI",
    Location: "106.833333, 27.666667"
  }),
  new Geo({
    IataCode: "DBC",
    Location: "122.878101, 45.626418"
  }),
  new Geo({
    IataCode: "DQA",
    Location: "125.02, 46.59"
  }),
  new Geo({
    IataCode: "EJN",
    Location: "101.055642, 41.95308"
  }),
  new Geo({
    IataCode: "ERL",
    Location: "111.977943, 43.6531"
  }),
  new Geo({
    IataCode: "GMQ",
    Location: "100.243423, 34.47274"
  }),
  new Geo({
    IataCode: "GXH",
    Location: "102.6447, 34.8106"
  }),
  new Geo({
    IataCode: "GYU",
    Location: "106.25, 36.016667"
  }),
  new Geo({
    IataCode: "HIA",
    Location: "119.1442, 33.5039"
  }),
  new Geo({
    IataCode: "HCJ",
    Location: "108.055505, 24.638534"
  }),
  new Geo({
    IataCode: "HDG",
    Location: "114.472046, 36.597889"
  }),
  new Geo({
    IataCode: "HJJ",
    Location: "109.953918, 27.532629"
  }),
  new Geo({
    IataCode: "HTN",
    Location: "79.92694, 37.09972"
  }),
  new Geo({
    IataCode: "HPG",
    Location: "109.901124, 31.576597"
  }),
  new Geo({
    IataCode: "HTT",
    Location: "90.888496, 38.251766"
  }),
  new Geo({
    IataCode: "HUO",
    Location: "119.649769, 45.534844"
  }),
  new Geo({
    IataCode: "HXD",
    Location: "97.383332, 37.383332"
  }),
  new Geo({
    IataCode: "HZH",
    Location: "109.13139, 26.23111"
  }),
  new Geo({
    IataCode: "JIC",
    Location: "102.057143, 38.504659"
  }),
  new Geo({
    IataCode: "TNA",
    Location: "116.983333, 36.666667"
  }),
  new Geo({
    IataCode: "JXA",
    Location: "130.96666, 45.3"
  }),
  new Geo({
    IataCode: "JMJ",
    Location: "99.934478, 22.555744"
  }),
  new Geo({
    IataCode: "JSJ",
    Location: "132.626, 47.255"
  }),
  new Geo({
    IataCode: "JUH",
    Location: "117.466667, 30.633333"
  }),
  new Geo({
    IataCode: "KGT",
    Location: "101.96033, 30.05127"
  }),
  new Geo({
    IataCode: "KJH",
    Location: "107.966667, 26.583333"
  }),
  new Geo({
    IataCode: "LFQ",
    Location: "111.518976, 36.088005"
  }),
  new Geo({
    IataCode: "LNL",
    Location: "105.742983, 33.750908"
  }),
  new Geo({
    IataCode: "LPF",
    Location: "104.795339, 26.592738"
  }),
  new Geo({
    IataCode: "LZY",
    Location: "94.3886, 29.6219"
  }),
  new Geo({
    IataCode: "MIG",
    Location: "104.743652, 31.512996"
  }),
  new Geo({
    IataCode: "OHE",
    Location: "122.546997, 52.976762"
  }),
  new Geo({
    IataCode: "NBS",
    Location: "126.425056, 41.951984"
  }),
  new Geo({
    IataCode: "NLH",
    Location: "100.86, 27.283889"
  }),
  new Geo({
    IataCode: "NLT",
    Location: "83.3822, 43.4322"
  }),
  new Geo({
    IataCode: "NZH",
    Location: "117.433333, 49.6"
  }),
  new Geo({
    IataCode: "NZL",
    Location: "122.783333, 48"
  }),
  new Geo({
    IataCode: "QSZ",
    Location: "75.592224, 39.281438"
  }),
  new Geo({
    IataCode: "RHT",
    Location: "101.3839, 39.12448"
  }),
  new Geo({
    IataCode: "RIZ",
    Location: "119.515503, 35.424373"
  }),
  new Geo({
    IataCode: "RKZ",
    Location: "89.306944, 29.351667"
  }),
  new Geo({
    IataCode: "NGQ",
    Location: "80.06666, 32.516667"
  }),
  new Geo({
    IataCode: "SQD",
    Location: "117.949716, 28.465425"
  }),
  new Geo({
    IataCode: "SQJ",
    Location: "117.633113, 26.275889"
  }),
  new Geo({
    IataCode: "TCZ",
    Location: "98.489167, 25.025"
  }),
  new Geo({
    IataCode: "THQ",
    Location: "105.733333, 34.583333"
  }),
  new Geo({
    IataCode: "TLQ",
    Location: "87.657294, 42.920957"
  }),
  new Geo({
    IataCode: "TVS",
    Location: "118.185425, 39.627904"
  }),
  new Geo({
    IataCode: "UCB",
    Location: "113.133333, 41"
  }),
  new Geo({
    IataCode: "WDS",
    Location: "110.78333, 32.56667"
  }),
  new Geo({
    IataCode: "WGN",
    Location: "111.466667, 27.25"
  }),
  new Geo({
    IataCode: "WNH",
    Location: "104.234161, 23.380077"
  }),
  new Geo({
    IataCode: "WUT",
    Location: "112.734174, 38.416663"
  }),
  new Geo({
    IataCode: "SIA",
    Location: "108.808333, 34.341666"
  }),
  new Geo({
    IataCode: "YTY",
    Location: "119.715, 32.561667"
  }),
  new Geo({
    IataCode: "YCU",
    Location: "110.967407, 35.025498"
  }),
  new Geo({
    IataCode: "LDS",
    Location: "128.9, 47.733333"
  }),
  new Geo({
    IataCode: "YIC",
    Location: "114.1829, 27.4812"
  }),
  new Geo({
    IataCode: "YKH",
    Location: "122.233333, 40.666667"
  }),
  new Geo({
    IataCode: "YSQ",
    Location: "124.808, 45.1388"
  }),
  new Geo({
    IataCode: "ZQZ",
    Location: "115.06313, 40.80575"
  }),
  new Geo({
    IataCode: "ZHY",
    Location: "105.180874, 37.513675"
  }),
  new Geo({
    IataCode: "JIQ",
    Location: "108.82916, 29.5175"
  }),
  new Geo({
    IataCode: "BUS",
    Location: "41.600556, 41.610833"
  }),
  new Geo({
    IataCode: "KUT",
    Location: "42.7, 42.25"
  }),
  new Geo({
    IataCode: "TBS",
    Location: "44.783333, 41.716667"
  }),
  new Geo({
    IataCode: "AIP",
    Location: "75.713295, 31.435088"
  }),
  new Geo({
    IataCode: "AGR",
    Location: "77.962778, 27.158333"
  }),
  new Geo({
    IataCode: "AGX",
    Location: "72, 11"
  }),
  new Geo({
    IataCode: "AJL",
    Location: "92.75, 23.75"
  }),
  new Geo({
    IataCode: "AMD",
    Location: "72.624167, 23.066389"
  }),
  new Geo({
    IataCode: "ATQ",
    Location: "74.797222, 31.706944"
  }),
  new Geo({
    IataCode: "BBI",
    Location: "85.82, 20.243611"
  }),
  new Geo({
    IataCode: "BDQ",
    Location: "73.226111, 22.336111"
  }),
  new Geo({
    IataCode: "BHJ",
    Location: "69.670556, 23.2875"
  }),
  new Geo({
    IataCode: "BHO",
    Location: "77.338611, 23.284722"
  }),
  new Geo({
    IataCode: "BHU",
    Location: "72.191111, 21.753611"
  }),
  new Geo({
    IataCode: "BKB",
    Location: "73.3, 28.016667"
  }),
  new Geo({
    IataCode: "BLR",
    Location: "77.668056, 12.949722"
  }),
  new Geo({
    IataCode: "BOM",
    Location: "72.851667, 19.088056"
  }),
  new Geo({
    IataCode: "BUP",
    Location: "74.966667, 30.166667"
  }),
  new Geo({
    IataCode: "CCJ",
    Location: "75.76667, 11.25"
  }),
  new Geo({
    IataCode: "CCU",
    Location: "88.36972, 22.56972"
  }),
  new Geo({
    IataCode: "CDP",
    Location: "78.83306, 14.48306"
  }),
  new Geo({
    IataCode: "CJB",
    Location: "77.043056, 11.028889"
  }),
  new Geo({
    IataCode: "COK",
    Location: "76.271944, 9.944444"
  }),
  new Geo({
    IataCode: "DED",
    Location: "78.033333, 30.316667"
  }),
  new Geo({
    IataCode: "DEL",
    Location: "77.100833, 28.573611"
  }),
  new Geo({
    IataCode: "DHM",
    Location: "76.266667, 32.3"
  }),
  new Geo({
    IataCode: "DIB",
    Location: "94.9, 27.483333"
  }),
  new Geo({
    IataCode: "DIU",
    Location: "70.916667, 20.716667"
  }),
  new Geo({
    IataCode: "DMU",
    Location: "93.773611, 25.883889"
  }),
  new Geo({
    IataCode: "GAU",
    Location: "91.75095, 26.18617"
  }),
  new Geo({
    IataCode: "GAY",
    Location: "84.944722, 24.7475"
  }),
  new Geo({
    IataCode: "GOI",
    Location: "73.825833, 15.374167"
  }),
  new Geo({
    IataCode: "GOP",
    Location: "83.175, 27"
  }),
  new Geo({
    IataCode: "GWL",
    Location: "78.23, 26.293889"
  }),
  new Geo({
    IataCode: "HBX",
    Location: "75.233333, 15.333333"
  }),
  new Geo({
    IataCode: "HJR",
    Location: "79.919167, 24.819444"
  }),
  new Geo({
    IataCode: "HYD",
    Location: "78.4625, 17.45"
  }),
  new Geo({
    IataCode: "IDR",
    Location: "75.806389, 22.722778"
  }),
  new Geo({
    IataCode: "IMF",
    Location: "93.903056, 24.763611"
  }),
  new Geo({
    IataCode: "ISK",
    Location: "73.806944, 19.9625"
  }),
  new Geo({
    IataCode: "IXA",
    Location: "91.242222, 23.89"
  }),
  new Geo({
    IataCode: "IXB",
    Location: "88.333333, 26.683333"
  }),
  new Geo({
    IataCode: "IXC",
    Location: "76.788333, 30.673333"
  }),
  new Geo({
    IataCode: "IXD",
    Location: "81.736111, 25.439722"
  }),
  new Geo({
    IataCode: "IXE",
    Location: "74.890833, 12.960556"
  }),
  new Geo({
    IataCode: "IXG",
    Location: "74.618611, 15.8575"
  }),
  new Geo({
    IataCode: "IXI",
    Location: "94.088889, 27.290278"
  }),
  new Geo({
    IataCode: "IXJ",
    Location: "74.838056, 32.689722"
  }),
  new Geo({
    IataCode: "IXK",
    Location: "70.27, 21.316667"
  }),
  new Geo({
    IataCode: "IXL",
    Location: "77.583333, 34.166667"
  }),
  new Geo({
    IataCode: "IXM",
    Location: "78.089444, 9.833611"
  }),
  new Geo({
    IataCode: "IXP",
    Location: "75.634444, 32.233611"
  }),
  new Geo({
    IataCode: "IXR",
    Location: "85.323333, 23.313611"
  }),
  new Geo({
    IataCode: "IXS",
    Location: "92.978611, 24.912778"
  }),
  new Geo({
    IataCode: "IXT",
    Location: "95.333333, 28.016667"
  }),
  new Geo({
    IataCode: "IXU",
    Location: "75.398611, 19.863611"
  }),
  new Geo({
    IataCode: "IXY",
    Location: "70.100278, 23.1125"
  }),
  new Geo({
    IataCode: "IXZ",
    Location: "92.733056, 11.645556"
  }),
  new Geo({
    IataCode: "JAI",
    Location: "75.806111, 26.821667"
  }),
  new Geo({
    IataCode: "JDH",
    Location: "73.047778, 26.260556"
  }),
  new Geo({
    IataCode: "JGA",
    Location: "70.011389, 22.466389"
  }),
  new Geo({
    IataCode: "JLR",
    Location: "79.925, 22.666667"
  }),
  new Geo({
    IataCode: "JRH",
    Location: "94.175556, 26.730556"
  }),
  new Geo({
    IataCode: "JSA",
    Location: "70.864444, 26.889167"
  }),
  new Geo({
    IataCode: "KLH",
    Location: "74.23306, 16.69972"
  }),
  new Geo({
    IataCode: "KNU",
    Location: "80.363333, 26.441111"
  }),
  new Geo({
    IataCode: "KUU",
    Location: "77.1, 31.983333"
  }),
  new Geo({
    IataCode: "LKO",
    Location: "80.885278, 26.761667"
  }),
  new Geo({
    IataCode: "LUH",
    Location: "75.951111, 30.854444"
  }),
  new Geo({
    IataCode: "MAA",
    Location: "80, 13"
  }),
  new Geo({
    IataCode: "MYQ",
    Location: "76.65, 12.3"
  }),
  new Geo({
    IataCode: "NAG",
    Location: "79.049722, 21.091111"
  }),
  new Geo({
    IataCode: "NDC",
    Location: "77.316667, 19.183333"
  }),
  new Geo({
    IataCode: "PAT",
    Location: "85.09, 25.590556"
  }),
  new Geo({
    IataCode: "PBD",
    Location: "69.656389, 21.649444"
  }),
  new Geo({
    IataCode: "PGH",
    Location: "79.473611, 29.033056"
  }),
  new Geo({
    IataCode: "PNQ",
    Location: "73.919444, 18.581944"
  }),
  new Geo({
    IataCode: "PNY",
    Location: "79.8, 12.016667"
  }),
  new Geo({
    IataCode: "RAJ",
    Location: "70.779722, 22.308889"
  }),
  new Geo({
    IataCode: "RJA",
    Location: "81.788063, 17.009186"
  }),
  new Geo({
    IataCode: "RPR",
    Location: "81.738611, 21.180278"
  }),
  new Geo({
    IataCode: "RUP",
    Location: "89.916667, 26.15"
  }),
  new Geo({
    IataCode: "SHL",
    Location: "91.883333, 25.566667"
  }),
  new Geo({
    IataCode: "SLV",
    Location: "77.15, 31.116667"
  }),
  new Geo({
    IataCode: "STV",
    Location: "72.83333, 21.16667"
  }),
  new Geo({
    IataCode: "SXR",
    Location: "74.81667, 34.08333"
  }),
  new Geo({
    IataCode: "SXV",
    Location: "78.166667, 11.65"
  }),
  new Geo({
    IataCode: "TCR",
    Location: "78.1, 8.76667"
  }),
  new Geo({
    IataCode: "TEZ",
    Location: "92.796111, 26.710833"
  }),
  new Geo({
    IataCode: "TIR",
    Location: "79.543056, 13.631944"
  }),
  new Geo({
    IataCode: "TRV",
    Location: "76.919722, 8.479722"
  }),
  new Geo({
    IataCode: "TRZ",
    Location: "78.716111, 10.764167"
  }),
  new Geo({
    IataCode: "UDR",
    Location: "73.69183, 24.57117"
  }),
  new Geo({
    IataCode: "VDY",
    Location: "76.61376, 15.149849"
  }),
  new Geo({
    IataCode: "VGA",
    Location: "80.798333, 16.526389"
  }),
  new Geo({
    IataCode: "VNS",
    Location: "83, 25.33333"
  }),
  new Geo({
    IataCode: "VTZ",
    Location: "83.216667, 17.716667"
  }),
  new Geo({
    IataCode: "JLG",
    Location: "75.626667, 20.961944"
  }),
  new Geo({
    IataCode: "PYG",
    Location: "88.6124, 27.348"
  }),
  new Geo({
    IataCode: "RDP",
    Location: "87.32, 23.55"
  }),
  new Geo({
    IataCode: "SAG",
    Location: "74.474478, 19.766744"
  }),
  new Geo({
    IataCode: "FSZ",
    Location: "138.395805, 34.96925"
  }),
  new Geo({
    IataCode: "IBR",
    Location: "140.41472, 36.181667"
  }),
  new Geo({
    IataCode: "IWK",
    Location: "132.218728, 34.166647"
  }),
  new Geo({
    IataCode: "AGJ",
    Location: "127.238056, 26.589722"
  }),
  new Geo({
    IataCode: "AKJ",
    Location: "142.366667, 43.766667"
  }),
  new Geo({
    IataCode: "AXJ",
    Location: "130.201507, 32.49123"
  }),
  new Geo({
    IataCode: "AOJ",
    Location: "140.74379, 40.8268"
  }),
  new Geo({
    IataCode: "ASJ",
    Location: "129.49379, 28.3769"
  }),
  new Geo({
    IataCode: "AXT",
    Location: "140.1, 39.716667"
  }),
  new Geo({
    IataCode: "FKS",
    Location: "140.466667, 37.766667"
  }),
  new Geo({
    IataCode: "FUJ",
    Location: "128.832819, 32.6664"
  }),
  new Geo({
    IataCode: "FUK",
    Location: "130.453333, 33.582222"
  }),
  new Geo({
    IataCode: "GAJ",
    Location: "140.36333, 38.24056"
  }),
  new Geo({
    IataCode: "HAC",
    Location: "139.785469, 33.114917"
  }),
  new Geo({
    IataCode: "HIJ",
    Location: "132.475806, 34.398056"
  }),
  new Geo({
    IataCode: "HKD",
    Location: "140.819722, 41.768889"
  }),
  new Geo({
    IataCode: "HNA",
    Location: "141.116667, 39.383333"
  }),
  new Geo({
    IataCode: "HSG",
    Location: "130.3, 33.266667"
  }),
  new Geo({
    IataCode: "IKI",
    Location: "129.69223, 33.751177"
  }),
  new Geo({
    IataCode: "ISG",
    Location: "124.186944, 24.344444"
  }),
  new Geo({
    IataCode: "IWJ",
    Location: "131.792778, 34.673056"
  }),
  new Geo({
    IataCode: "IZO",
    Location: "132.766667, 35.366667"
  }),
  new Geo({
    IataCode: "KCZ",
    Location: "133.67145, 33.544564"
  }),
  new Geo({
    IataCode: "KIJ",
    Location: "139.036389, 37.916111"
  }),
  new Geo({
    IataCode: "KKJ",
    Location: "130.841331, 33.85331"
  }),
  new Geo({
    IataCode: "KKX",
    Location: "130.008333, 28.433333"
  }),
  new Geo({
    IataCode: "KMI",
    Location: "131.448447, 31.877128"
  }),
  new Geo({
    IataCode: "KMJ",
    Location: "130.733333, 32.783333"
  }),
  new Geo({
    IataCode: "KMQ",
    Location: "136.416944, 36.393889"
  }),
  new Geo({
    IataCode: "KOJ",
    Location: "130.55, 31.6"
  }),
  new Geo({
    IataCode: "KTD",
    Location: "131.321639, 25.948003"
  }),
  new Geo({
    IataCode: "KUH",
    Location: "144.4, 42.98306"
  }),
  new Geo({
    IataCode: "KUM",
    Location: "130.633333, 30.333333"
  }),
  new Geo({
    IataCode: "MBE",
    Location: "143.404028, 44.303914"
  }),
  new Geo({
    IataCode: "MMB",
    Location: "144.164053, 43.880606"
  }),
  new Geo({
    IataCode: "MMD",
    Location: "131.258311, 25.849956"
  }),
  new Geo({
    IataCode: "MMJ",
    Location: "137.922733, 36.166753"
  }),
  new Geo({
    IataCode: "MMY",
    Location: "125.294392, 24.783319"
  }),
  new Geo({
    IataCode: "MSJ",
    Location: "141.371942, 40.705211"
  }),
  new Geo({
    IataCode: "MYE",
    Location: "139.5625, 34.069444"
  }),
  new Geo({
    IataCode: "MYJ",
    Location: "132.699633, 33.827256"
  }),
  new Geo({
    IataCode: "NGO",
    Location: "136.92, 35.15"
  }),
  new Geo({
    IataCode: "NGS",
    Location: "129.866667, 32.783333"
  }),
  new Geo({
    IataCode: "NTQ",
    Location: "136.9, 37.383333"
  }),
  new Geo({
    IataCode: "OBO",
    Location: "143.197174, 42.931291"
  }),
  new Geo({
    IataCode: "OGN",
    Location: "122.977875, 24.466944"
  }),
  new Geo({
    IataCode: "OIM",
    Location: "139.361275, 34.7825"
  }),
  new Geo({
    IataCode: "OIR",
    Location: "139.516667, 42.166667"
  }),
  new Geo({
    IataCode: "OIT",
    Location: "131.606667, 33.233333"
  }),
  new Geo({
    IataCode: "OKA",
    Location: "127.805556, 26.334167"
  }),
  new Geo({
    IataCode: "OKE",
    Location: "128.616667, 27.433333"
  }),
  new Geo({
    IataCode: "OKI",
    Location: "133.324811, 36.181083"
  }),
  new Geo({
    IataCode: "OKJ",
    Location: "133.936111, 34.586667"
  }),
  new Geo({
    IataCode: "ONJ",
    Location: "140.375278, 40.189167"
  }),
  new Geo({
    IataCode: "RIS",
    Location: "141.187608, 45.242006"
  }),
  new Geo({
    IataCode: "RNJ",
    Location: "128.401589, 27.043956"
  }),
  new Geo({
    IataCode: "SDJ",
    Location: "140.866667, 38.266667"
  }),
  new Geo({
    IataCode: "SHB",
    Location: "144.959792, 43.577428"
  }),
  new Geo({
    IataCode: "SHM",
    Location: "135.364528, 33.662311"
  }),
  new Geo({
    IataCode: "SYO",
    Location: "139.790556, 38.809444"
  }),
  new Geo({
    IataCode: "TAK",
    Location: "134.073056, 34.290278"
  }),
  new Geo({
    IataCode: "TJH",
    Location: "134.789722, 35.509167"
  }),
  new Geo({
    IataCode: "TKN",
    Location: "128.881253, 27.836381"
  }),
  new Geo({
    IataCode: "TKS",
    Location: "134.605875, 34.133014"
  }),
  new Geo({
    IataCode: "TNE",
    Location: "130.950183, 30.546675"
  }),
  new Geo({
    IataCode: "TOY",
    Location: "137.187503, 36.648344"
  }),
  new Geo({
    IataCode: "TRA",
    Location: "124.7, 24.65"
  }),
  new Geo({
    IataCode: "TSJ",
    Location: "129.330556, 34.285"
  }),
  new Geo({
    IataCode: "TTJ",
    Location: "134.165033, 35.530067"
  }),
  new Geo({
    IataCode: "UBJ",
    Location: "131.276456, 33.9288"
  }),
  new Geo({
    IataCode: "UEO",
    Location: "126.713689, 26.363728"
  }),
  new Geo({
    IataCode: "UKB",
    Location: "135.166667, 34.75"
  }),
  new Geo({
    IataCode: "WKJ",
    Location: "141.800781, 45.404097"
  }),
  new Geo({
    IataCode: "YGJ",
    Location: "133.333333, 35.433333"
  }),
  new Geo({
    IataCode: "OSA",
    Location: "135.497131, 34.672182"
  }),
  new Geo({
    IataCode: "SPK",
    Location: "141.35, 43.066667"
  }),
  new Geo({
    IataCode: "TYO",
    Location: "139.715, 35.700556"
  }),
  new Geo({
    IataCode: "FRU",
    Location: "74.591331, 42.870177"
  }),
  new Geo({
    IataCode: "IKU",
    Location: "76.3943, 42.3352"
  }),
  new Geo({
    IataCode: "OSS",
    Location: "72.793056, 40.608889"
  }),
  new Geo({
    IataCode: "FNJ",
    Location: "125.738056, 39.019444"
  }),
  new Geo({
    IataCode: "CJJ",
    Location: "127.483292, 36.635642"
  }),
  new Geo({
    IataCode: "CJU",
    Location: "126.522846, 33.511916"
  }),
  new Geo({
    IataCode: "HIN",
    Location: "128.08548, 35.194012"
  }),
  new Geo({
    IataCode: "KPO",
    Location: "129.42, 35.988333"
  }),
  new Geo({
    IataCode: "KUV",
    Location: "126.75, 35.983333"
  }),
  new Geo({
    IataCode: "KWJ",
    Location: "126.916667, 35.166667"
  }),
  new Geo({
    IataCode: "PUS",
    Location: "129.04028, 35.10278"
  }),
  new Geo({
    IataCode: "RSU",
    Location: "127.73, 34.741111"
  }),
  new Geo({
    IataCode: "SEL",
    Location: "126.976667, 37.568889"
  }),
  new Geo({
    IataCode: "TAE",
    Location: "128.658889, 35.893889"
  }),
  new Geo({
    IataCode: "USN",
    Location: "129.35, 35.585"
  }),
  new Geo({
    IataCode: "WJU",
    Location: "127.951667, 37.434167"
  }),
  new Geo({
    IataCode: "YNY",
    Location: "128.6, 38.066667"
  }),
  new Geo({
    IataCode: "AKX",
    Location: "57.216667, 50.25"
  }),
  new Geo({
    IataCode: "ALA",
    Location: "76.895833, 43.2775"
  }),
  new Geo({
    IataCode: "BXH",
    Location: "75.016667, 46.883333"
  }),
  new Geo({
    IataCode: "BXY",
    Location: "63.316667, 45.616667"
  }),
  new Geo({
    IataCode: "CIT",
    Location: "69.6, 42.3"
  }),
  new Geo({
    IataCode: "DMB",
    Location: "71.366667, 42.9"
  }),
  new Geo({
    IataCode: "DZN",
    Location: "67.703934, 47.778559"
  }),
  new Geo({
    IataCode: "GUW",
    Location: "51.9, 47.116667"
  }),
  new Geo({
    IataCode: "KGF",
    Location: "73.166667, 49.833333"
  }),
  new Geo({
    IataCode: "KOV",
    Location: "69.4, 53.316667"
  }),
  new Geo({
    IataCode: "KSN",
    Location: "63.55, 53.2"
  }),
  new Geo({
    IataCode: "KZO",
    Location: "65.516281, 44.856356"
  }),
  new Geo({
    IataCode: "PLX",
    Location: "80.264397, 50.433017"
  }),
  new Geo({
    IataCode: "PPK",
    Location: "69.166667, 54.883333"
  }),
  new Geo({
    IataCode: "PWQ",
    Location: "76.95, 52.3"
  }),
  new Geo({
    IataCode: "SCO",
    Location: "51.15, 43.65"
  }),
  new Geo({
    IataCode: "TDK",
    Location: "78.433333, 45.15"
  }),
  new Geo({
    IataCode: "TSE",
    Location: "71.5, 51.166667"
  }),
  new Geo({
    IataCode: "UKK",
    Location: "82.5, 50.033333"
  }),
  new Geo({
    IataCode: "URA",
    Location: "51.369324, 51.251601"
  }),
  new Geo({
    IataCode: "BJT",
    Location: "79.983333, 6.483333"
  }),
  new Geo({
    IataCode: "BTC",
    Location: "81.678611, 7.703333"
  }),
  new Geo({
    IataCode: "CMB",
    Location: "79.886111, 6.997222"
  }),
  new Geo({
    IataCode: "DIW",
    Location: "80.6951, 5.97168"
  }),
  new Geo({
    IataCode: "DWO",
    Location: "79.9427, 6.891"
  }),
  new Geo({
    IataCode: "GIU",
    Location: "80.748226, 7.951063"
  }),
  new Geo({
    IataCode: "GOY",
    Location: "81.625556, 7.3375"
  }),
  new Geo({
    IataCode: "HRI",
    Location: "81.1225, 6.124444"
  }),
  new Geo({
    IataCode: "JAF",
    Location: "80, 9.666667"
  }),
  new Geo({
    IataCode: "KDZ",
    Location: "80.61656, 7.326288"
  }),
  new Geo({
    IataCode: "KCT",
    Location: "80.333056, 5.983056"
  }),
  new Geo({
    IataCode: "KDW",
    Location: "80.633333, 7.3"
  }),
  new Geo({
    IataCode: "KEZ",
    Location: "79.916667, 6.983333"
  }),
  new Geo({
    IataCode: "MNH",
    Location: "80.905852, 8.038791"
  }),
  new Geo({
    IataCode: "NUA",
    Location: "80.766667, 6.966667"
  }),
  new Geo({
    IataCode: "NUF",
    Location: "80.598056, 6.889722"
  }),
  new Geo({
    IataCode: "TRR",
    Location: "81.186312, 8.583293"
  }),
  new Geo({
    IataCode: "WRZ",
    Location: "81.2352, 6.25449"
  }),
  new Geo({
    IataCode: "COQ",
    Location: "114.537964, 48.090005"
  }),
  new Geo({
    IataCode: "DLZ",
    Location: "104.425833, 43.57"
  }),
  new Geo({
    IataCode: "HJT",
    Location: "102.766667, 46.9"
  }),
  new Geo({
    IataCode: "HTM",
    Location: "100.166667, 50.45"
  }),
  new Geo({
    IataCode: "HVD",
    Location: "91.65, 48.016667"
  }),
  new Geo({
    IataCode: "LTI",
    Location: "96.257222, 46.372778"
  }),
  new Geo({
    IataCode: "MXV",
    Location: "100.166667, 49.633333"
  }),
  new Geo({
    IataCode: "ULG",
    Location: "89.966667, 48.966667"
  }),
  new Geo({
    IataCode: "ULN",
    Location: "106.866667, 47.9"
  }),
  new Geo({
    IataCode: "ULO",
    Location: "92.066667, 49.983333"
  }),
  new Geo({
    IataCode: "ULZ",
    Location: "96.85, 47.75"
  }),
  new Geo({
    IataCode: "DDD",
    Location: "73.457948, 4.959203"
  }),
  new Geo({
    IataCode: "DRV",
    Location: "73.133446, 5.156955"
  }),
  new Geo({
    IataCode: "FVM",
    Location: "73.424833, -0.295727"
  }),
  new Geo({
    IataCode: "GAN",
    Location: "73.166667, -0.683333"
  }),
  new Geo({
    IataCode: "GKK",
    Location: "73.436111, 0.756944"
  }),
  new Geo({
    IataCode: "HAQ",
    Location: "73.179588, 6.769625"
  }),
  new Geo({
    IataCode: "IFU",
    Location: "73.024258, 5.70617"
  }),
  new Geo({
    IataCode: "KDM",
    Location: "73.08333, -0.6"
  }),
  new Geo({
    IataCode: "KDO",
    Location: "73.532867, 1.995675"
  }),
  new Geo({
    IataCode: "MLE",
    Location: "73.508148, 4.177621"
  }),
  new Geo({
    IataCode: "TMF",
    Location: "73.143274, 2.205874"
  }),
  new Geo({
    IataCode: "VAM",
    Location: "72.8375, 3.475"
  }),
  new Geo({
    IataCode: "BDP",
    Location: "88.083333, 26.533333"
  }),
  new Geo({
    IataCode: "BHR",
    Location: "84.4325, 27.676389"
  }),
  new Geo({
    IataCode: "BIR",
    Location: "87.283333, 26.434722"
  }),
  new Geo({
    IataCode: "BWA",
    Location: "83.42, 27.504167"
  }),
  new Geo({
    IataCode: "DHI",
    Location: "80.598965, 28.707301"
  }),
  new Geo({
    IataCode: "DOP",
    Location: "82.816667, 29"
  }),
  new Geo({
    IataCode: "IMK",
    Location: "81.816667, 29.966667"
  }),
  new Geo({
    IataCode: "JKR",
    Location: "85.923889, 26.708333"
  }),
  new Geo({
    IataCode: "JMO",
    Location: "83.733333, 28.783333"
  }),
  new Geo({
    IataCode: "JUM",
    Location: "82.191944, 29.273611"
  }),
  new Geo({
    IataCode: "KEP",
    Location: "81.576389, 28.1325"
  }),
  new Geo({
    IataCode: "KTM",
    Location: "85.357778, 27.697222"
  }),
  new Geo({
    IataCode: "LUA",
    Location: "86.733333, 27.683333"
  }),
  new Geo({
    IataCode: "NGX",
    Location: "84.086375, 28.641696"
  }),
  new Geo({
    IataCode: "PKR",
    Location: "84, 28.21667"
  }),
  new Geo({
    IataCode: "PPL",
    Location: "86.6, 27.516667"
  }),
  new Geo({
    IataCode: "SIF",
    Location: "85.533333, 27"
  }),
  new Geo({
    IataCode: "SKH",
    Location: "82.508333, 28.333333"
  }),
  new Geo({
    IataCode: "TMI",
    Location: "87.2, 27.3"
  }),
  new Geo({
    IataCode: "BHV",
    Location: "71.683333, 29.4"
  }),
  new Geo({
    IataCode: "CJL",
    Location: "71.7858, 35.84623"
  }),
  new Geo({
    IataCode: "DBA",
    Location: "64.416667, 28.883333"
  }),
  new Geo({
    IataCode: "DEA",
    Location: "70.633333, 30.05"
  }),
  new Geo({
    IataCode: "DSK",
    Location: "70.9, 31.916667"
  }),
  new Geo({
    IataCode: "GIL",
    Location: "74.333611, 35.918611"
  }),
  new Geo({
    IataCode: "GWD",
    Location: "62.3225, 25.126389"
  }),
  new Geo({
    IataCode: "HDD",
    Location: "68.366278, 25.317917"
  }),
  new Geo({
    IataCode: "ISB",
    Location: "73.04329, 33.72148"
  }),
  new Geo({
    IataCode: "KDU",
    Location: "75.616667, 35.3"
  }),
  new Geo({
    IataCode: "KHI",
    Location: "67.156944, 24.905556"
  }),
  new Geo({
    IataCode: "LHE",
    Location: "74.402778, 31.520833"
  }),
  new Geo({
    IataCode: "LYP",
    Location: "73.08333, 31.41667"
  }),
  new Geo({
    IataCode: "MJD",
    Location: "68.142778, 27.335"
  }),
  new Geo({
    IataCode: "MUX",
    Location: "71.416667, 30.2"
  }),
  new Geo({
    IataCode: "PEW",
    Location: "71.581421, 34.007135"
  }),
  new Geo({
    IataCode: "PJG",
    Location: "64.1, 26.966667"
  }),
  new Geo({
    IataCode: "PZH",
    Location: "69.5, 31.333333"
  }),
  new Geo({
    IataCode: "RYK",
    Location: "70.279722, 28.385278"
  }),
  new Geo({
    IataCode: "RZS",
    Location: "68.866667, 26.966667"
  }),
  new Geo({
    IataCode: "SKT",
    Location: "74.54313, 32.5101"
  }),
  new Geo({
    IataCode: "SKZ",
    Location: "68.791667, 27.721944"
  }),
  new Geo({
    IataCode: "TUK",
    Location: "63.066667, 25.983333"
  }),
  new Geo({
    IataCode: "UET",
    Location: "66.940111, 30.251194"
  }),
  new Geo({
    IataCode: "DYU",
    Location: "68.823611, 38.55"
  }),
  new Geo({
    IataCode: "KQT",
    Location: "68.780278, 37.836389"
  }),
  new Geo({
    IataCode: "LBD",
    Location: "69.623108, 40.288954"
  }),
  new Geo({
    IataCode: "TJU",
    Location: "69.748764, 37.909534"
  }),
  new Geo({
    IataCode: "ASB",
    Location: "58.360833, 37.981667"
  }),
  new Geo({
    IataCode: "BKN",
    Location: "54.337093, 39.516102"
  }),
  new Geo({
    IataCode: "CRZ",
    Location: "63.616667, 39.083333"
  }),
  new Geo({
    IataCode: "KRW",
    Location: "53.006667, 40.063333"
  }),
  new Geo({
    IataCode: "MYP",
    Location: "61.833333, 37.666667"
  }),
  new Geo({
    IataCode: "TAZ",
    Location: "59.966667, 41.833333"
  }),
  new Geo({
    IataCode: "AZN",
    Location: "72.3, 40.733333"
  }),
  new Geo({
    IataCode: "BHK",
    Location: "64.483333, 39.766667"
  }),
  new Geo({
    IataCode: "FEG",
    Location: "71.78432, 40.38421"
  }),
  new Geo({
    IataCode: "KSQ",
    Location: "65.766667, 38.8"
  }),
  new Geo({
    IataCode: "NCU",
    Location: "59.6225, 42.486389"
  }),
  new Geo({
    IataCode: "NMA",
    Location: "71.6, 40.983333"
  }),
  new Geo({
    IataCode: "NVI",
    Location: "65.383333, 40.083333"
  }),
  new Geo({
    IataCode: "SKD",
    Location: "66.984722, 39.700556"
  }),
  new Geo({
    IataCode: "TAS",
    Location: "69.283333, 41.25"
  }),
  new Geo({
    IataCode: "TMJ",
    Location: "67.285833, 37.268611"
  }),
  new Geo({
    IataCode: "UGC",
    Location: "60.601273, 41.588743"
  }),
  new Geo({
    IataCode: "ANU",
    Location: "-61.763889, 17.108333"
  }),
  new Geo({
    IataCode: "AXA",
    Location: "-63.066667, 18.216667"
  }),
  new Geo({
    IataCode: "AUA",
    Location: "-70.013889, 12.502222"
  }),
  new Geo({
    IataCode: "BGI",
    Location: "-59.6175, 13.0947"
  }),
  new Geo({
    IataCode: "BON",
    Location: "-68.273333, 12.134167"
  }),
  new Geo({
    IataCode: "EUX",
    Location: "-62.975556, 17.491667"
  }),
  new Geo({
    IataCode: "SAB",
    Location: "-63.216667, 17.65"
  }),
  new Geo({
    IataCode: "ATC",
    Location: "-75.671389, 24.628611"
  }),
  new Geo({
    IataCode: "AXP",
    Location: "-73.970833, 22.441667"
  }),
  new Geo({
    IataCode: "BIM",
    Location: "-79.266666, 25.7375"
  }),
  new Geo({
    IataCode: "CRI",
    Location: "-74.15, 22.75"
  }),
  new Geo({
    IataCode: "ELH",
    Location: "-76.681111, 25.475556"
  }),
  new Geo({
    IataCode: "FPO",
    Location: "-78.7, 26.555278"
  }),
  new Geo({
    IataCode: "GBI",
    Location: "-78.5, 26.666667"
  }),
  new Geo({
    IataCode: "GGT",
    Location: "-75.76639, 23.5"
  }),
  new Geo({
    IataCode: "GHB",
    Location: "-76.5, 25.2"
  }),
  new Geo({
    IataCode: "IGA",
    Location: "-73.66667, 20.95"
  }),
  new Geo({
    IataCode: "LGI",
    Location: "-75.093333, 23.178889"
  }),
  new Geo({
    IataCode: "MHH",
    Location: "-77.083333, 26.511389"
  }),
  new Geo({
    IataCode: "MYG",
    Location: "-73.013333, 22.379444"
  }),
  new Geo({
    IataCode: "NAS",
    Location: "-77.345, 25.06"
  }),
  new Geo({
    IataCode: "RCY",
    Location: "-74.85, 23.7"
  }),
  new Geo({
    IataCode: "RSD",
    Location: "-76.1775, 24.891667"
  }),
  new Geo({
    IataCode: "SAQ",
    Location: "-78.048889, 25.053611"
  }),
  new Geo({
    IataCode: "SML",
    Location: "-75.268611, 23.582778"
  }),
  new Geo({
    IataCode: "TBI",
    Location: "-75.453611, 24.315"
  }),
  new Geo({
    IataCode: "TCB",
    Location: "-77.391111, 26.745278"
  }),
  new Geo({
    IataCode: "TZN",
    Location: "-77.585278, 24.165"
  }),
  new Geo({
    IataCode: "ZSA",
    Location: "-74.53306, 24.05"
  }),
  new Geo({
    IataCode: "BCV",
    Location: "-88.783333, 17.266667"
  }),
  new Geo({
    IataCode: "BZE",
    Location: "-88.183333, 17.483333"
  }),
  new Geo({
    IataCode: "CUK",
    Location: "-88.025293, 17.741983"
  }),
  new Geo({
    IataCode: "CYC",
    Location: "-88.044605, 17.692764"
  }),
  new Geo({
    IataCode: "CZH",
    Location: "-88.3881, 18.396882"
  }),
  new Geo({
    IataCode: "DGA",
    Location: "-88.216667, 16.966667"
  }),
  new Geo({
    IataCode: "INB",
    Location: "-88.420715, 16.64935"
  }),
  new Geo({
    IataCode: "ORZ",
    Location: "-88.75, 17.166667"
  }),
  new Geo({
    IataCode: "PLJ",
    Location: "-88.352778, 16.533333"
  }),
  new Geo({
    IataCode: "PND",
    Location: "-88.816667, 16.1"
  }),
  new Geo({
    IataCode: "SPR",
    Location: "-87.968611, 17.911111"
  }),
  new Geo({
    IataCode: "SQS",
    Location: "-89.033333, 17.183333"
  }),
  new Geo({
    IataCode: "SVK",
    Location: "-88.883333, 16.266667"
  }),
  new Geo({
    IataCode: "DRK",
    Location: "8.73, 83.65"
  }),
  new Geo({
    IataCode: "FON",
    Location: "-84.65, 10.483333"
  }),
  new Geo({
    IataCode: "GLF",
    Location: "-83.181944, 8.653889"
  }),
  new Geo({
    IataCode: "LIO",
    Location: "-83.04972, 10"
  }),
  new Geo({
    IataCode: "LIR",
    Location: "-85.433333, 10.633333"
  }),
  new Geo({
    IataCode: "NOB",
    Location: "-85.65, 9.983333"
  }),
  new Geo({
    IataCode: "OTR",
    Location: "-82.97, 8.601111"
  }),
  new Geo({
    IataCode: "PJM",
    Location: "-83.333333, 8.583333"
  }),
  new Geo({
    IataCode: "PMZ",
    Location: "-83.470278, 8.953056"
  }),
  new Geo({
    IataCode: "SJO",
    Location: "-84.083328, 9.93333"
  }),
  new Geo({
    IataCode: "TMU",
    Location: "-85.016667, 9.733333"
  }),
  new Geo({
    IataCode: "TNO",
    Location: "-85.84211, 10.29908"
  }),
  new Geo({
    IataCode: "TTQ",
    Location: "-83.516667, 10.566667"
  }),
  new Geo({
    IataCode: "XQP",
    Location: "-84.129722, 9.443056"
  }),
  new Geo({
    IataCode: "BWW",
    Location: "-79, 22.6577"
  }),
  new Geo({
    IataCode: "BCA",
    Location: "-74.506667, 20.364722"
  }),
  new Geo({
    IataCode: "BYM",
    Location: "-76.619167, 20.397222"
  }),
  new Geo({
    IataCode: "CCC",
    Location: "-78.508333, 22.5125"
  }),
  new Geo({
    IataCode: "CFG",
    Location: "-80.414444, 22.149722"
  }),
  new Geo({
    IataCode: "CMW",
    Location: "-77.847222, 21.420278"
  }),
  new Geo({
    IataCode: "CYO",
    Location: "-81.553333, 21.619722"
  }),
  new Geo({
    IataCode: "GAO",
    Location: "-75.195694, 20.123889"
  }),
  new Geo({
    IataCode: "GER",
    Location: "-82.779167, 21.838333"
  }),
  new Geo({
    IataCode: "HAV",
    Location: "-82, 23"
  }),
  new Geo({
    IataCode: "HOG",
    Location: "-76.257222, 20.888611"
  }),
  new Geo({
    IataCode: "MOA",
    Location: "-74.9175, 20.639722"
  }),
  new Geo({
    IataCode: "MZO",
    Location: "-77.089167, 20.288056"
  }),
  new Geo({
    IataCode: "SCU",
    Location: "-75.813917, 20.019833"
  }),
  new Geo({
    IataCode: "SNU",
    Location: "-79.954167, 22.405278"
  }),
  new Geo({
    IataCode: "VRA",
    Location: "-81.25139, 23.15361"
  }),
  new Geo({
    IataCode: "CUR",
    Location: "-68.960556, 12.194167"
  }),
  new Geo({
    IataCode: "DOM",
    Location: "-61.32125, 15.521528"
  }),
  new Geo({
    IataCode: "LRM",
    Location: "-68.9, 18.416667"
  }),
  new Geo({
    IataCode: "POP",
    Location: "-70.6884, 19.79344"
  }),
  new Geo({
    IataCode: "PUJ",
    Location: "-68.383333, 18.566667"
  }),
  new Geo({
    IataCode: "AZS",
    Location: "69.2, 19.12"
  }),
  new Geo({
    IataCode: "SDQ",
    Location: "-69.983333, 18.5"
  }),
  new Geo({
    IataCode: "STI",
    Location: "-70.700278, 19.469167"
  }),
  new Geo({
    IataCode: "GND",
    Location: "-61.616667, 12.15"
  }),
  new Geo({
    IataCode: "GBJ",
    Location: "-61.266667, 15.866667"
  }),
  new Geo({
    IataCode: "LSS",
    Location: "-61.576667, 15.866944"
  }),
  new Geo({
    IataCode: "PTP",
    Location: "-61.526389, 16.2675"
  }),
  new Geo({
    IataCode: "SFG",
    Location: "-63.076759, 18.072129"
  }),
  new Geo({
    IataCode: "FRS",
    Location: "-89.883333, 16.916667"
  }),
  new Geo({
    IataCode: "GUA",
    Location: "-90.5275, 14.581944"
  }),
  new Geo({
    IataCode: "PBR",
    Location: "-88.606111, 15.723056"
  }),
  new Geo({
    IataCode: "RER",
    Location: "-91.68333, 14.53333"
  }),
  new Geo({
    IataCode: "BHG",
    Location: "-84.543333, 15.734722"
  }),
  new Geo({
    IataCode: "GJA",
    Location: "-85.905833, 16.445"
  }),
  new Geo({
    IataCode: "LCE",
    Location: "-86.856111, 15.741667"
  }),
  new Geo({
    IataCode: "PEU",
    Location: "-83.79972, 15.21667"
  }),
  new Geo({
    IataCode: "RTB",
    Location: "-86.516667, 16.316667"
  }),
  new Geo({
    IataCode: "RUY",
    Location: "-88, 15"
  }),
  new Geo({
    IataCode: "SAP",
    Location: "-88.016968, 15.49901"
  }),
  new Geo({
    IataCode: "TEA",
    Location: "-87.487778, 15.771667"
  }),
  new Geo({
    IataCode: "TGU",
    Location: "-87.2175, 14.059722"
  }),
  new Geo({
    IataCode: "UII",
    Location: "-86.8875, 16.091667"
  }),
  new Geo({
    IataCode: "CAP",
    Location: "-72.2, 19.733333"
  }),
  new Geo({
    IataCode: "JAK",
    Location: "-72.518611, 18.240556"
  }),
  new Geo({
    IataCode: "PAP",
    Location: "-72.328889, 18.560556"
  }),
  new Geo({
    IataCode: "KIN",
    Location: "-76.778472, 17.969166"
  }),
  new Geo({
    IataCode: "MBJ",
    Location: "-77.9125, 18.501944"
  }),
  new Geo({
    IataCode: "NEG",
    Location: "-78.353119, 18.276302"
  }),
  new Geo({
    IataCode: "OCJ",
    Location: "-77.116667, 18.416667"
  }),
  new Geo({
    IataCode: "NEV",
    Location: "-62.5925, 17.205"
  }),
  new Geo({
    IataCode: "SKB",
    Location: "-62.721389, 17.308056"
  }),
  new Geo({
    IataCode: "CYB",
    Location: "-79.882778, 19.686667"
  }),
  new Geo({
    IataCode: "GCM",
    Location: "-81.366291, 19.28514"
  }),
  new Geo({
    IataCode: "LYB",
    Location: "-80.083333, 19.666667"
  }),
  new Geo({
    IataCode: "SLU",
    Location: "-60.983047, 13.901243"
  }),
  new Geo({
    IataCode: "FDF",
    Location: "-61.006111, 14.589722"
  }),
  new Geo({
    IataCode: "MNI",
    Location: "-62.233333, 16.75"
  }),
  new Geo({
    IataCode: "BEF",
    Location: "-83.768611, 11.996944"
  }),
  new Geo({
    IataCode: "BZA",
    Location: "-84.6, 13.95"
  }),
  new Geo({
    IataCode: "ECI",
    Location: "-85.822663, 11.43258"
  }),
  new Geo({
    IataCode: "MGA",
    Location: "-86.168611, 12.141111"
  }),
  new Geo({
    IataCode: "NCR",
    Location: "-84.783333, 11.133333"
  }),
  new Geo({
    IataCode: "PUZ",
    Location: "-83.383611, 14.045278"
  }),
  new Geo({
    IataCode: "RNI",
    Location: "-83.04176, 12.16943"
  }),
  new Geo({
    IataCode: "SIU",
    Location: "-84.777778, 13.727222"
  }),
  new Geo({
    IataCode: "WSP",
    Location: "-84.016667, 14.683333"
  }),
  new Geo({
    IataCode: "ACU",
    Location: "-77.986672, 9.198457"
  }),
  new Geo({
    IataCode: "BFQ",
    Location: "-78.166667, 7.583333"
  }),
  new Geo({
    IataCode: "BLB",
    Location: "-79.5575, 8.973056"
  }),
  new Geo({
    IataCode: "BOC",
    Location: "-82.251389, 9.34"
  }),
  new Geo({
    IataCode: "CHX",
    Location: "-82.45, 9.45"
  }),
  new Geo({
    IataCode: "CTD",
    Location: "-80.433333, 7.966667"
  }),
  new Geo({
    IataCode: "DAV",
    Location: "-82.429733, 8.437734"
  }),
  new Geo({
    IataCode: "JQE",
    Location: "-78.166667, 7.5"
  }),
  new Geo({
    IataCode: "MPP",
    Location: "-77.75, 8.95"
  }),
  new Geo({
    IataCode: "OGM",
    Location: "-77.932618, 9.136465"
  }),
  new Geo({
    IataCode: "ONX",
    Location: "-79.9, 9.35"
  }),
  new Geo({
    IataCode: "OTD",
    Location: "-79.033333, 8.633333"
  }),
  new Geo({
    IataCode: "PTY",
    Location: "-79.449861, 9.033196"
  }),
  new Geo({
    IataCode: "PUE",
    Location: "-77.418333, 8.667222"
  }),
  new Geo({
    IataCode: "PYC",
    Location: "-79.598694, 9.559787"
  }),
  new Geo({
    IataCode: "RIH",
    Location: "-80.1012, 8.2248"
  }),
  new Geo({
    IataCode: "SIC",
    Location: "-79.111667, 8.25"
  }),
  new Geo({
    IataCode: "BQN",
    Location: "-67.13, 18.495833"
  }),
  new Geo({
    IataCode: "TJR",
    Location: "-65.647988, 18.264357"
  }),
  new Geo({
    IataCode: "CPX",
    Location: "-65.316667, 18.3"
  }),
  new Geo({
    IataCode: "MAZ",
    Location: "-67.13962, 18.20107"
  }),
  new Geo({
    IataCode: "PSE",
    Location: "-66.612854, 18.020528"
  }),
  new Geo({
    IataCode: "SJU",
    Location: "-66.0525, 18.449444"
  }),
  new Geo({
    IataCode: "VQS",
    Location: "-65.4225, 18.114167"
  }),
  new Geo({
    IataCode: "SAL",
    Location: "-89.2, 13.7086"
  }),
  new Geo({
    IataCode: "SXM",
    Location: "-63, 18"
  }),
  new Geo({
    IataCode: "GDT",
    Location: "-71.133333, 21.466667"
  }),
  new Geo({
    IataCode: "PLS",
    Location: "-72.268333, 21.769167"
  }),
  new Geo({
    IataCode: "SLX",
    Location: "-71.201667, 21.333333"
  }),
  new Geo({
    IataCode: "XSC",
    Location: "-71.528333, 21.515556"
  }),
  new Geo({
    IataCode: "POS",
    Location: "-61.516667, 10.666667"
  }),
  new Geo({
    IataCode: "TAB",
    Location: "-60.836, 11.146389"
  }),
  new Geo({
    IataCode: "SVD",
    Location: "-61.213889, 13.144444"
  }),
  new Geo({
    IataCode: "EIS",
    Location: "-64.58333, 18.41667"
  }),
  new Geo({
    IataCode: "NGD",
    Location: "-64.3, 18.716667"
  }),
  new Geo({
    IataCode: "TOV",
    Location: "-64.602083, 18.438889"
  }),
  new Geo({
    IataCode: "VIJ",
    Location: "-64.5, 18.5"
  }),
  new Geo({
    IataCode: "STT",
    Location: "-64.96944, 18.3375"
  }),
  new Geo({
    IataCode: "STX",
    Location: "-64.777314, 17.717314"
  }),
  new Geo({
    IataCode: "TIA",
    Location: "19.816, 41.326"
  }),
  new Geo({
    IataCode: "GRZ",
    Location: "15.438889, 47.070278"
  }),
  new Geo({
    IataCode: "INN",
    Location: "11.383333, 47.266667"
  }),
  new Geo({
    IataCode: "KLU",
    Location: "14.3, 46.616667"
  }),
  new Geo({
    IataCode: "LNZ",
    Location: "14.18, 48.19"
  }),
  new Geo({
    IataCode: "SZG",
    Location: "13.033333, 47.8"
  }),
  new Geo({
    IataCode: "VIE",
    Location: "16.373056, 48.208333"
  }),
  new Geo({
    IataCode: "BNX",
    Location: "17.1833, 44.7667"
  }),
  new Geo({
    IataCode: "OMO",
    Location: "17.85, 43.28"
  }),
  new Geo({
    IataCode: "SJJ",
    Location: "18.420639, 43.858792"
  }),
  new Geo({
    IataCode: "TZL",
    Location: "18.676111, 44.538056"
  }),
  new Geo({
    IataCode: "ANR",
    Location: "4.398308, 51.219787"
  }),
  new Geo({
    IataCode: "BRU",
    Location: "4.364319, 50.850174"
  }),
  new Geo({
    IataCode: "LGG",
    Location: "5.570755, 50.640534"
  }),
  new Geo({
    IataCode: "MWW",
    Location: "3.2, 50.733333"
  }),
  new Geo({
    IataCode: "OST",
    Location: "2.904854, 51.224303"
  }),
  new Geo({
    IataCode: "BOJ",
    Location: "27.466667, 42.5"
  }),
  new Geo({
    IataCode: "PDV",
    Location: "24.75, 42.15"
  }),
  new Geo({
    IataCode: "SOF",
    Location: "23.333333, 42.7"
  }),
  new Geo({
    IataCode: "VAR",
    Location: "27.8255, 43.2325"
  }),
  new Geo({
    IataCode: "BQT",
    Location: "23.666667, 52.133333"
  }),
  new Geo({
    IataCode: "GME",
    Location: "31, 52.416667"
  }),
  new Geo({
    IataCode: "GNA",
    Location: "23.8, 53.666667"
  }),
  new Geo({
    IataCode: "MSQ",
    Location: "27.544841, 53.865569"
  }),
  new Geo({
    IataCode: "MVQ",
    Location: "30.33764, 53.9141"
  }),
  new Geo({
    IataCode: "SIP",
    Location: "34.104309, 44.953137"
  }),
  new Geo({
    IataCode: "ACH",
    Location: "9.5522, 47.4828"
  }),
  new Geo({
    IataCode: "EAP",
    Location: "7.6, 47.566667"
  }),
  new Geo({
    IataCode: "BRN",
    Location: "7.45, 46.95"
  }),
  new Geo({
    IataCode: "GVA",
    Location: "6.15, 46.2"
  }),
  new Geo({
    IataCode: "LUG",
    Location: "8.954201, 46.003401"
  }),
  new Geo({
    IataCode: "SIR",
    Location: "7.35, 46.2333"
  }),
  new Geo({
    IataCode: "ZRH",
    Location: "8.55, 47.366667"
  }),
  new Geo({
    IataCode: "ECN",
    Location: "33.4833, 35.15"
  }),
  new Geo({
    IataCode: "LCA",
    Location: "33.633333, 34.916667"
  }),
  new Geo({
    IataCode: "PFO",
    Location: "32.416667, 34.766667"
  }),
  new Geo({
    IataCode: "BRQ",
    Location: "16.609955, 49.191128"
  }),
  new Geo({
    IataCode: "KLV",
    Location: "12.916667, 50.2"
  }),
  new Geo({
    IataCode: "OSR",
    Location: "18.2925, 49.835556"
  }),
  new Geo({
    IataCode: "PED",
    Location: "15.738611, 50.013333"
  }),
  new Geo({
    IataCode: "PRG",
    Location: "14.42076, 50.08804"
  }),
  new Geo({
    IataCode: "AGB",
    Location: "10.9, 48.366667"
  }),
  new Geo({
    IataCode: "FKB",
    Location: "8.240833, 48.762778"
  }),
  new Geo({
    IataCode: "BER",
    Location: "13.398889, 52.500556"
  }),
  new Geo({
    IataCode: "BWE",
    Location: "10.516667, 52.266667"
  }),
  new Geo({
    IataCode: "BRE",
    Location: "8.8075, 53.075833"
  }),
  new Geo({
    IataCode: "CGN",
    Location: "6.959839, 50.948911"
  }),
  new Geo({
    IataCode: "DTM",
    Location: "7.466667, 51.51666"
  }),
  new Geo({
    IataCode: "DRS",
    Location: "13.733333, 51.033333"
  }),
  new Geo({
    IataCode: "DUS",
    Location: "6.783333, 51.233333"
  }),
  new Geo({
    IataCode: "ERF",
    Location: "11.033333, 50.98333"
  }),
  new Geo({
    IataCode: "XFW",
    Location: "9.861946, 53.533166"
  }),
  new Geo({
    IataCode: "FRA",
    Location: "8.670959, 50.114414"
  }),
  new Geo({
    IataCode: "FDH",
    Location: "9.479167, 47.654167"
  }),
  new Geo({
    IataCode: "HAM",
    Location: "10.001389, 53.565278"
  }),
  new Geo({
    IataCode: "HAJ",
    Location: "9.73322, 52.37052"
  }),
  new Geo({
    IataCode: "HDF",
    Location: "14.15, 53.95"
  }),
  new Geo({
    IataCode: "KSF",
    Location: "9.5, 51.316667"
  }),
  new Geo({
    IataCode: "LEJ",
    Location: "12.383333, 51.333333"
  }),
  new Geo({
    IataCode: "MHG",
    Location: "8.469167, 49.488889"
  }),
  new Geo({
    IataCode: "FMM",
    Location: "10.23, 47.98"
  }),
  new Geo({
    IataCode: "MUC",
    Location: "11.580963, 48.144327"
  }),
  new Geo({
    IataCode: "FMO",
    Location: "7.644424, 51.967539"
  }),
  new Geo({
    IataCode: "NUE",
    Location: "11.083333, 49.45"
  }),
  new Geo({
    IataCode: "PAD",
    Location: "8.766667, 51.716667"
  }),
  new Geo({
    IataCode: "RLG",
    Location: "12.133333, 54.083333"
  }),
  new Geo({
    IataCode: "SCN",
    Location: "6.992455, 49.234189"
  }),
  new Geo({
    IataCode: "STR",
    Location: "9.179444, 48.778611"
  }),
  new Geo({
    IataCode: "GWT",
    Location: "8.3075, 54.91"
  }),
  new Geo({
    IataCode: "OHR",
    Location: "8.675, 54.6667"
  }),
  new Geo({
    IataCode: "AAL",
    Location: "9.919968, 57.046893"
  }),
  new Geo({
    IataCode: "AAR",
    Location: "10.2107, 56.1572"
  }),
  new Geo({
    IataCode: "BLL",
    Location: "9.115278, 55.730833"
  }),
  new Geo({
    IataCode: "CPH",
    Location: "12.568333, 55.676111"
  }),
  new Geo({
    IataCode: "EBJ",
    Location: "8.45, 55.483333"
  }),
  new Geo({
    IataCode: "KRP",
    Location: "9.1167, 56.3"
  }),
  new Geo({
    IataCode: "ODE",
    Location: "10.38831, 55.39594"
  }),
  new Geo({
    IataCode: "RNN",
    Location: "14.70664, 55.10091"
  }),
  new Geo({
    IataCode: "SGD",
    Location: "9.7667, 54.95"
  }),
  new Geo({
    IataCode: "KDL",
    Location: "22.749167, 58.997778"
  }),
  new Geo({
    IataCode: "URE",
    Location: "22.5, 58.216667"
  }),
  new Geo({
    IataCode: "TLL",
    Location: "24.799167, 59.416389"
  }),
  new Geo({
    IataCode: "TAY",
    Location: "26.733333, 58.333333"
  }),
  new Geo({
    IataCode: "ALC",
    Location: "-0.483056, 38.345278"
  }),
  new Geo({
    IataCode: "LEI",
    Location: "-2.45, 36.833333"
  }),
  new Geo({
    IataCode: "ACE",
    Location: "-13.605666, 28.950795"
  }),
  new Geo({
    IataCode: "OVD",
    Location: "-5.926781, 43.55651"
  }),
  new Geo({
    IataCode: "BJZ",
    Location: "-6.966944, 38.878889"
  }),
  new Geo({
    IataCode: "BCN",
    Location: "2.183333, 41.383333"
  }),
  new Geo({
    IataCode: "BIO",
    Location: "-2.56, 43.16"
  }),
  new Geo({
    IataCode: "CDT",
    Location: "-0.04495, 39.984458"
  }),
  new Geo({
    IataCode: "FUE",
    Location: "-14.016667, 28.333333"
  }),
  new Geo({
    IataCode: "GRO",
    Location: "2.821111, 41.98444"
  }),
  new Geo({
    IataCode: "LPA",
    Location: "-15.416667, 28.15"
  }),
  new Geo({
    IataCode: "GRX",
    Location: "-3.58017, 37.176184"
  }),
  new Geo({
    IataCode: "IBZ",
    Location: "1.43, 38.98"
  }),
  new Geo({
    IataCode: "XRY",
    Location: "-6.137924, 36.686041"
  }),
  new Geo({
    IataCode: "LCG",
    Location: "-8.412781, 43.371116"
  }),
  new Geo({
    IataCode: "GMZ",
    Location: "-17.1, 28.1"
  }),
  new Geo({
    IataCode: "SPC",
    Location: "-17.764893, 28.682757"
  }),
  new Geo({
    IataCode: "LEN",
    Location: "-5.650833, 42.584444"
  }),
  new Geo({
    IataCode: "ILD",
    Location: "0.633333, 41.616667"
  }),
  new Geo({
    IataCode: "RJL",
    Location: "-2.445556, 42.465"
  }),
  new Geo({
    IataCode: "MAD",
    Location: "-3.683333, 40.4"
  }),
  new Geo({
    IataCode: "AGP",
    Location: "-4.416667, 36.716667"
  }),
  new Geo({
    IataCode: "MLN",
    Location: "-2.95, 35.2833"
  }),
  new Geo({
    IataCode: "MAH",
    Location: "4, 40"
  }),
  new Geo({
    IataCode: "MJV",
    Location: "-1.130278, 37.986111"
  }),
  new Geo({
    IataCode: "PMI",
    Location: "2.65, 39.566667"
  }),
  new Geo({
    IataCode: "PNA",
    Location: "-1.573792, 42.799431"
  }),
  new Geo({
    IataCode: "REU",
    Location: "1.06, 41.1"
  }),
  new Geo({
    IataCode: "RGS",
    Location: "-3.700333, 42.340656"
  }),
  new Geo({
    IataCode: "RMU",
    Location: "-1.161544, 37.830822"
  }),
  new Geo({
    IataCode: "SLM",
    Location: "-5.65, 40.967"
  }),
  new Geo({
    IataCode: "SCQ",
    Location: "-8.545647, 42.880744"
  }),
  new Geo({
    IataCode: "EAS",
    Location: "-1.985092, 43.327176"
  }),
  new Geo({
    IataCode: "SDR",
    Location: "-3.809853, 43.460894"
  }),
  new Geo({
    IataCode: "SVQ",
    Location: "-5.986944, 37.377222"
  }),
  new Geo({
    IataCode: "TCI",
    Location: "-16.25, 28.466667"
  }),
  new Geo({
    IataCode: "VLC",
    Location: "-0.376805, 39.470239"
  }),
  new Geo({
    IataCode: "VLL",
    Location: "-4.728241, 41.652393"
  }),
  new Geo({
    IataCode: "VDE",
    Location: "-17.915955, 27.808713"
  }),
  new Geo({
    IataCode: "VGO",
    Location: "-8.715591, 42.2275"
  }),
  new Geo({
    IataCode: "VIT",
    Location: "-2.675171, 42.847275"
  }),
  new Geo({
    IataCode: "ZAZ",
    Location: "-0.88131, 41.655984"
  }),
  new Geo({
    IataCode: "ENF",
    Location: "23.4167, 68.35"
  }),
  new Geo({
    IataCode: "HEL",
    Location: "24.9375, 60.170833"
  }),
  new Geo({
    IataCode: "IVL",
    Location: "27.4167, 68.6"
  }),
  new Geo({
    IataCode: "JOE",
    Location: "29.75, 62.6"
  }),
  new Geo({
    IataCode: "JYV",
    Location: "25.7333, 62.2333"
  }),
  new Geo({
    IataCode: "KAJ",
    Location: "27.6833, 64.2833"
  }),
  new Geo({
    IataCode: "KEM",
    Location: "24.5833, 65.7833"
  }),
  new Geo({
    IataCode: "KTT",
    Location: "24.908333, 67.65"
  }),
  new Geo({
    IataCode: "KOK",
    Location: "23.15, 63.8333"
  }),
  new Geo({
    IataCode: "KUO",
    Location: "27.678333, 62.8925"
  }),
  new Geo({
    IataCode: "KAO",
    Location: "29.3333, 65.9667"
  }),
  new Geo({
    IataCode: "LPP",
    Location: "28.15, 61.05"
  }),
  new Geo({
    IataCode: "MHQ",
    Location: "19.9, 60.1167"
  }),
  new Geo({
    IataCode: "OUL",
    Location: "25.26, 65"
  }),
  new Geo({
    IataCode: "POR",
    Location: "21.8, 61.483333"
  }),
  new Geo({
    IataCode: "RVN",
    Location: "25.733333, 66.5"
  }),
  new Geo({
    IataCode: "SVL",
    Location: "28.9, 61.9167"
  }),
  new Geo({
    IataCode: "SJY",
    Location: "22.841667, 62.791667"
  }),
  new Geo({
    IataCode: "TMP",
    Location: "23.766667, 61.5"
  }),
  new Geo({
    IataCode: "TKU",
    Location: "22.2667, 60.5167"
  }),
  new Geo({
    IataCode: "VAA",
    Location: "21.7667, 63.05"
  }),
  new Geo({
    IataCode: "FAE",
    Location: "-7.266667, 62.066667"
  }),
  new Geo({
    IataCode: "AGF",
    Location: "0.621153, 44.204931"
  }),
  new Geo({
    IataCode: "QXB",
    Location: "5.454025, 43.531127"
  }),
  new Geo({
    IataCode: "AJA",
    Location: "8.73694, 41.92667"
  }),
  new Geo({
    IataCode: "ANE",
    Location: "-0.549316, 47.468718"
  }),
  new Geo({
    IataCode: "NCY",
    Location: "6.133, 45.916"
  }),
  new Geo({
    IataCode: "AUR",
    Location: "2.4167, 44.875"
  }),
  new Geo({
    IataCode: "AVN",
    Location: "4.9, 43.9"
  }),
  new Geo({
    IataCode: "BIA",
    Location: "9.45028, 42.70083"
  }),
  new Geo({
    IataCode: "EGC",
    Location: "0.483055, 44.859276"
  }),
  new Geo({
    IataCode: "BZR",
    Location: "3.218991, 43.347615"
  }),
  new Geo({
    IataCode: "BIQ",
    Location: "-1.556111, 43.481667"
  }),
  new Geo({
    IataCode: "BOD",
    Location: "-0.58, 44.841"
  }),
  new Geo({
    IataCode: "BES",
    Location: "-4.485556, 48.390834"
  }),
  new Geo({
    IataCode: "BVE",
    Location: "1.4667, 45.15"
  }),
  new Geo({
    IataCode: "CFR",
    Location: "-0.369444, 49.183056"
  }),
  new Geo({
    IataCode: "CLY",
    Location: "8.756944, 42.568611"
  }),
  new Geo({
    IataCode: "CCF",
    Location: "2.352028, 43.21306"
  }),
  new Geo({
    IataCode: "DCM",
    Location: "2.2856, 43.5442"
  }),
  new Geo({
    IataCode: "CMF",
    Location: "5.899658, 45.565025"
  }),
  new Geo({
    IataCode: "CHR",
    Location: "1.7, 46.8167"
  }),
  new Geo({
    IataCode: "CFE",
    Location: "3.082352, 45.783088"
  }),
  new Geo({
    IataCode: "DOL",
    Location: "0.1667, 49.3667"
  }),
  new Geo({
    IataCode: "DNR",
    Location: "-2.060278, 48.633333"
  }),
  new Geo({
    IataCode: "DLE",
    Location: "5.412778, 47.044167"
  }),
  new Geo({
    IataCode: "FSC",
    Location: "9.129639, 41.48852"
  }),
  new Geo({
    IataCode: "GNB",
    Location: "5.72224, 45.20016"
  }),
  new Geo({
    IataCode: "LAI",
    Location: "-3.46667, 48.73333"
  }),
  new Geo({
    IataCode: "LRH",
    Location: "-1.151654, 46.159122"
  }),
  new Geo({
    IataCode: "LME",
    Location: "0.186768, 48.011975"
  }),
  new Geo({
    IataCode: "LPY",
    Location: "3.7667, 45.0833"
  }),
  new Geo({
    IataCode: "LTQ",
    Location: "1.6167, 50.5167"
  }),
  new Geo({
    IataCode: "LIL",
    Location: "3.0583, 50.6325"
  }),
  new Geo({
    IataCode: "LIG",
    Location: "1.2625, 45.8353"
  }),
  new Geo({
    IataCode: "LRT",
    Location: "-3.370743, 47.750405"
  }),
  new Geo({
    IataCode: "LDE",
    Location: "0.02, 43.06"
  }),
  new Geo({
    IataCode: "LYS",
    Location: "4.836044, 45.766565"
  }),
  new Geo({
    IataCode: "MRS",
    Location: "5.369954, 43.296386"
  }),
  new Geo({
    IataCode: "MEN",
    Location: "3.5, 44.51667"
  }),
  new Geo({
    IataCode: "ETZ",
    Location: "6.168823, 49.117029"
  }),
  new Geo({
    IataCode: "MPL",
    Location: "3.87722, 43.61194"
  }),
  new Geo({
    IataCode: "MLH",
    Location: "7.33994, 47.74948"
  }),
  new Geo({
    IataCode: "NTE",
    Location: "-1.556625, 47.21677"
  }),
  new Geo({
    IataCode: "NCE",
    Location: "7.266274, 43.70339"
  }),
  new Geo({
    IataCode: "FNI",
    Location: "4.360833, 43.837778"
  }),
  new Geo({
    IataCode: "PAR",
    Location: "2.350833, 48.856667"
  }),
  new Geo({
    IataCode: "PUF",
    Location: "-0.368611, 43.301667"
  }),
  new Geo({
    IataCode: "PGX",
    Location: "0.7167, 45.1833"
  }),
  new Geo({
    IataCode: "PGF",
    Location: "2.89556, 42.69861"
  }),
  new Geo({
    IataCode: "PIS",
    Location: "0.336111, 46.581944"
  }),
  new Geo({
    IataCode: "UIP",
    Location: "-4.100647, 47.992679"
  }),
  new Geo({
    IataCode: "RHE",
    Location: "4.03472, 49.26278"
  }),
  new Geo({
    IataCode: "RNS",
    Location: "-1.671638, 48.112016"
  }),
  new Geo({
    IataCode: "RDZ",
    Location: "2.575, 44.3506"
  }),
  new Geo({
    IataCode: "URO",
    Location: "1.096272, 49.441203"
  }),
  new Geo({
    IataCode: "EBU",
    Location: "4.388, 45.437"
  }),
  new Geo({
    IataCode: "SNR",
    Location: "-2.215118, 47.275968"
  }),
  new Geo({
    IataCode: "SXB",
    Location: "7.748612, 48.584445"
  }),
  new Geo({
    IataCode: "TLN",
    Location: "5.92, 43.13"
  }),
  new Geo({
    IataCode: "TUF",
    Location: "0.689167, 47.393611"
  }),
  new Geo({
    IataCode: "TLS",
    Location: "1.440239, 43.60451"
  }),
  new Geo({
    IataCode: "XCR",
    Location: "4.36724, 48.95393"
  }),
  new Geo({
    IataCode: "GCI",
    Location: "-2.574921, 49.452057"
  }),
  new Geo({
    IataCode: "GIB",
    Location: "-5.353775, 36.144806"
  }),
  new Geo({
    IataCode: "AXD",
    Location: "25.95, 40.85"
  }),
  new Geo({
    IataCode: "GPA",
    Location: "21.733, 38.25"
  }),
  new Geo({
    IataCode: "EFL",
    Location: "20.483333, 38.183333"
  }),
  new Geo({
    IataCode: "JTY",
    Location: "26.366667, 36.566667"
  }),
  new Geo({
    IataCode: "ATH",
    Location: "23.730555, 37.897916"
  }),
  new Geo({
    IataCode: "JKH",
    Location: "26.141, 38.345"
  }),
  new Geo({
    IataCode: "CFU",
    Location: "19.91972, 39.62"
  }),
  new Geo({
    IataCode: "HER",
    Location: "25.14341, 35.32787"
  }),
  new Geo({
    IataCode: "JIK",
    Location: "26.333333, 37.666667"
  }),
  new Geo({
    IataCode: "IOA",
    Location: "20.8167, 39.7"
  }),
  new Geo({
    IataCode: "JKL",
    Location: "26.983333, 36.983333"
  }),
  new Geo({
    IataCode: "KLX",
    Location: "22.107325, 37.02839"
  }),
  new Geo({
    IataCode: "AOK",
    Location: "27.15, 35.416"
  }),
  new Geo({
    IataCode: "KSJ",
    Location: "26.9167, 35.4119"
  }),
  new Geo({
    IataCode: "KSO",
    Location: "21.250305, 40.522151"
  }),
  new Geo({
    IataCode: "KZS",
    Location: "29.5667, 36.1333"
  }),
  new Geo({
    IataCode: "KVA",
    Location: "24.462433, 40.97938"
  }),
  new Geo({
    IataCode: "KIT",
    Location: "22.9833, 36.15"
  }),
  new Geo({
    IataCode: "KGS",
    Location: "27.165, 36.841"
  }),
  new Geo({
    IataCode: "KZI",
    Location: "21.783, 40.3"
  }),
  new Geo({
    IataCode: "LXS",
    Location: "25.25, 39.9167"
  }),
  new Geo({
    IataCode: "LRS",
    Location: "26.8, 37.1833"
  }),
  new Geo({
    IataCode: "JMK",
    Location: "25.379, 37.447"
  }),
  new Geo({
    IataCode: "MLO",
    Location: "24.5333, 36.7167"
  }),
  new Geo({
    IataCode: "MJT",
    Location: "26.599, 39.056"
  }),
  new Geo({
    IataCode: "JNX",
    Location: "25.3833, 37.1"
  }),
  new Geo({
    IataCode: "PAS",
    Location: "25.1333, 37.0667"
  }),
  new Geo({
    IataCode: "PVK",
    Location: "20.753, 38.96"
  }),
  new Geo({
    IataCode: "RHO",
    Location: "28.09, 36.4"
  }),
  new Geo({
    IataCode: "SMI",
    Location: "26.978, 37.754"
  }),
  new Geo({
    IataCode: "JSH",
    Location: "26.09861, 35.2"
  }),
  new Geo({
    IataCode: "JSI",
    Location: "23.504562, 39.180643"
  }),
  new Geo({
    IataCode: "SKU",
    Location: "24.55, 38.8833"
  }),
  new Geo({
    IataCode: "JSY",
    Location: "24.95, 37.4097"
  }),
  new Geo({
    IataCode: "SKG",
    Location: "22.944419, 40.640063"
  }),
  new Geo({
    IataCode: "JTR",
    Location: "25.47, 36.4"
  }),
  new Geo({
    IataCode: "VOL",
    Location: "22.8417, 39.3333"
  }),
  new Geo({
    IataCode: "ZTH",
    Location: "20.894597, 37.776668"
  }),
  new Geo({
    IataCode: "BWK",
    Location: "16.655, 43.26194"
  }),
  new Geo({
    IataCode: "DBV",
    Location: "18.09, 42.651"
  }),
  new Geo({
    IataCode: "OSI",
    Location: "18.6833, 45.55"
  }),
  new Geo({
    IataCode: "PUY",
    Location: "13.842773, 44.863656"
  }),
  new Geo({
    IataCode: "RJK",
    Location: "14.445, 45.326"
  }),
  new Geo({
    IataCode: "SPU",
    Location: "16.44, 43.509"
  }),
  new Geo({
    IataCode: "ZAD",
    Location: "15.239, 44.114"
  }),
  new Geo({
    IataCode: "ZAG",
    Location: "15.97798, 45.81444"
  }),
  new Geo({
    IataCode: "BUD",
    Location: "19.03, 47.3"
  }),
  new Geo({
    IataCode: "DEB",
    Location: "21.4833, 47.4667"
  }),
  new Geo({
    IataCode: "MCQ",
    Location: "20.8333, 48.05"
  }),
  new Geo({
    IataCode: "PEV",
    Location: "18.23311, 46.07125"
  }),
  new Geo({
    IataCode: "SOB",
    Location: "20.30617, 48.09279"
  }),
  new Geo({
    IataCode: "QZD",
    Location: "20.145, 46.255"
  }),
  new Geo({
    IataCode: "ORK",
    Location: "-8.474, 51.899"
  }),
  new Geo({
    IataCode: "CFN",
    Location: "-8.110657, 54.654769"
  }),
  new Geo({
    IataCode: "DUB",
    Location: "-6.259, 53.347"
  }),
  new Geo({
    IataCode: "KIR",
    Location: "-9.526, 52.18"
  }),
  new Geo({
    IataCode: "NOC",
    Location: "-8.919, 53.793"
  }),
  new Geo({
    IataCode: "SNN",
    Location: "-8.867, 52.714"
  }),
  new Geo({
    IataCode: "NNR",
    Location: "-9.4667, 53.2167"
  }),
  new Geo({
    IataCode: "AHO",
    Location: "9, 40"
  }),
  new Geo({
    IataCode: "AOI",
    Location: "13.51008, 43.59816"
  }),
  new Geo({
    IataCode: "BRI",
    Location: "16.872253, 41.124884"
  }),
  new Geo({
    IataCode: "BLQ",
    Location: "11.341911, 44.495643"
  }),
  new Geo({
    IataCode: "BDS",
    Location: "17.93682, 40.62773"
  }),
  new Geo({
    IataCode: "CAG",
    Location: "9.109726, 39.217093"
  }),
  new Geo({
    IataCode: "CTA",
    Location: "15.087662, 37.503189"
  }),
  new Geo({
    IataCode: "CIY",
    Location: "14.60495, 36.945502"
  }),
  new Geo({
    IataCode: "CRV",
    Location: "17.08, 39.05"
  }),
  new Geo({
    IataCode: "CUF",
    Location: "7.544861, 44.388654"
  }),
  new Geo({
    IataCode: "FLR",
    Location: "11.25, 43.783333"
  }),
  new Geo({
    IataCode: "FOG",
    Location: "15.5333, 41.4167"
  }),
  new Geo({
    IataCode: "GOA",
    Location: "8.933258, 44.418088"
  }),
  new Geo({
    IataCode: "LMP",
    Location: "12.37, 35.31"
  }),
  new Geo({
    IataCode: "SUF",
    Location: "16.317101, 38.978628"
  }),
  new Geo({
    IataCode: "MIL",
    Location: "9.190278, 45.464167"
  }),
  new Geo({
    IataCode: "NAP",
    Location: "14.253731, 40.839269"
  }),
  new Geo({
    IataCode: "OLB",
    Location: "9.5, 40.916667"
  }),
  new Geo({
    IataCode: "PMO",
    Location: "13.366667, 38.116667"
  }),
  new Geo({
    IataCode: "PNL",
    Location: "11.965872, 36.814278"
  }),
  new Geo({
    IataCode: "PMF",
    Location: "10.333333, 44.8"
  }),
  new Geo({
    IataCode: "PEG",
    Location: "12.382965, 43.108001"
  }),
  new Geo({
    IataCode: "PSR",
    Location: "14.214167, 42.463889"
  }),
  new Geo({
    IataCode: "PSA",
    Location: "10.4, 43.716667"
  }),
  new Geo({
    IataCode: "REG",
    Location: "15.661944, 38.111389"
  }),
  new Geo({
    IataCode: "RMI",
    Location: "12.566667, 44.05"
  }),
  new Geo({
    IataCode: "ROM",
    Location: "12.4839, 41.89474"
  }),
  new Geo({
    IataCode: "TQR",
    Location: "15.483333, 42.116667"
  }),
  new Geo({
    IataCode: "TPS",
    Location: "12.516861, 38.017263"
  }),
  new Geo({
    IataCode: "TRS",
    Location: "13.8, 45.633333"
  }),
  new Geo({
    IataCode: "TRN",
    Location: "7.68682, 45.07049"
  }),
  new Geo({
    IataCode: "VCE",
    Location: "12.335833, 45.4375"
  }),
  new Geo({
    IataCode: "VRN",
    Location: "10.983333, 45.433333"
  }),
  new Geo({
    IataCode: "VIF",
    Location: "16.176944, 41.885278"
  }),
  new Geo({
    IataCode: "PRN",
    Location: "21.153488, 42.661232"
  }),
  new Geo({
    IataCode: "KUN",
    Location: "23.891144, 54.896947"
  }),
  new Geo({
    IataCode: "PLQ",
    Location: "21.071777, 55.920354"
  }),
  new Geo({
    IataCode: "VNO",
    Location: "25.19, 54.4"
  }),
  new Geo({
    IataCode: "LUX",
    Location: "6.13, 49.611667"
  }),
  new Geo({
    IataCode: "LPX",
    Location: "21.011353, 56.486762"
  }),
  new Geo({
    IataCode: "RIX",
    Location: "24.104004, 56.94666"
  }),
  new Geo({
    IataCode: "MCM",
    Location: "7.416667, 43.733333"
  }),
  new Geo({
    IataCode: "KIV",
    Location: "28.8687, 47.0107"
  }),
  new Geo({
    IataCode: "TGD",
    Location: "19.266, 42.4392"
  }),
  new Geo({
    IataCode: "TIV",
    Location: "18.700104, 42.437394"
  }),
  new Geo({
    IataCode: "OHD",
    Location: "20.801667, 41.116944"
  }),
  new Geo({
    IataCode: "SKP",
    Location: "21.433333, 42"
  }),
  new Geo({
    IataCode: "JCO",
    Location: "14.3333, 36.0167"
  }),
  new Geo({
    IataCode: "MLA",
    Location: "14.516667, 35.9"
  }),
  new Geo({
    IataCode: "AMS",
    Location: "4.892222, 52.373056"
  }),
  new Geo({
    IataCode: "EIN",
    Location: "5.4752, 51.4381"
  }),
  new Geo({
    IataCode: "GRQ",
    Location: "6.55, 53.216667"
  }),
  new Geo({
    IataCode: "MST",
    Location: "5.690736, 50.851242"
  }),
  new Geo({
    IataCode: "RTM",
    Location: "4.481111, 51.921667"
  }),
  new Geo({
    IataCode: "AES",
    Location: "6.1053, 62.5375"
  }),
  new Geo({
    IataCode: "ALF",
    Location: "23.249817, 69.966791"
  }),
  new Geo({
    IataCode: "ANX",
    Location: "16.133333, 69.316667"
  }),
  new Geo({
    IataCode: "BDU",
    Location: "18.5333, 69.05"
  }),
  new Geo({
    IataCode: "BJF",
    Location: "29.5, 70.6333"
  }),
  new Geo({
    IataCode: "BGO",
    Location: "5.33, 60.389444"
  }),
  new Geo({
    IataCode: "BVG",
    Location: "29.085789, 70.858187"
  }),
  new Geo({
    IataCode: "BOO",
    Location: "14.549167, 67.305556"
  }),
  new Geo({
    IataCode: "BNN",
    Location: "12.208214, 65.474299"
  }),
  new Geo({
    IataCode: "EVE",
    Location: "16.998596, 68.526727"
  }),
  new Geo({
    IataCode: "VDB",
    Location: "9.230556, 60.985"
  }),
  new Geo({
    IataCode: "FRO",
    Location: "5.032778, 61.599444"
  }),
  new Geo({
    IataCode: "FDE",
    Location: "5.83374, 61.451568"
  }),
  new Geo({
    IataCode: "HFT",
    Location: "23.681889, 70.66446"
  }),
  new Geo({
    IataCode: "HAA",
    Location: "22.160454, 70.488236"
  }),
  new Geo({
    IataCode: "HAU",
    Location: "5.298333, 59.446389"
  }),
  new Geo({
    IataCode: "HVG",
    Location: "25.8333, 70.9833"
  }),
  new Geo({
    IataCode: "KKN",
    Location: "29.9, 69.7167"
  }),
  new Geo({
    IataCode: "KSU",
    Location: "7.85, 63.1167"
  }),
  new Geo({
    IataCode: "KRS",
    Location: "7.998734, 58.14317"
  }),
  new Geo({
    IataCode: "LKL",
    Location: "24.970551, 70.045442"
  }),
  new Geo({
    IataCode: "LKN",
    Location: "13.6, 68.133333"
  }),
  new Geo({
    IataCode: "LYR",
    Location: "15.65, 78.22"
  }),
  new Geo({
    IataCode: "MEH",
    Location: "27.8333, 71.0333"
  }),
  new Geo({
    IataCode: "MQN",
    Location: "14, 66.3167"
  }),
  new Geo({
    IataCode: "MOL",
    Location: "7.15, 62.7333"
  }),
  new Geo({
    IataCode: "MJF",
    Location: "13.2167, 65.7833"
  }),
  new Geo({
    IataCode: "OSY",
    Location: "11.6, 64.4667"
  }),
  new Geo({
    IataCode: "NTB",
    Location: "9.1353, 59.5825"
  }),
  new Geo({
    IataCode: "OLA",
    Location: "9.659386, 63.687835"
  }),
  new Geo({
    IataCode: "HOV",
    Location: "6.15, 62.2"
  }),
  new Geo({
    IataCode: "OSL",
    Location: "10.74609, 59.91273"
  }),
  new Geo({
    IataCode: "ZXF",
    Location: "11.23734, 64.86208"
  }),
  new Geo({
    IataCode: "RRS",
    Location: "11.385269, 62.576585"
  }),
  new Geo({
    IataCode: "RET",
    Location: "12.103844, 67.516972"
  }),
  new Geo({
    IataCode: "SDN",
    Location: "6.212769, 61.773123"
  }),
  new Geo({
    IataCode: "SSJ",
    Location: "12.633333, 66.016667"
  }),
  new Geo({
    IataCode: "SOG",
    Location: "7.1333, 61.1667"
  }),
  new Geo({
    IataCode: "SOJ",
    Location: "20.9333, 69.7833"
  }),
  new Geo({
    IataCode: "SVG",
    Location: "5.718889, 58.963333"
  }),
  new Geo({
    IataCode: "SKN",
    Location: "14.908447, 68.566156"
  }),
  new Geo({
    IataCode: "SRP",
    Location: "5.492477, 59.78336"
  }),
  new Geo({
    IataCode: "SVJ",
    Location: "14.570618, 68.236695"
  }),
  new Geo({
    IataCode: "TOS",
    Location: "18.942778, 69.682778"
  }),
  new Geo({
    IataCode: "TRD",
    Location: "10.393333, 63.429722"
  }),
  new Geo({
    IataCode: "VDS",
    Location: "29.747715, 70.075883"
  }),
  new Geo({
    IataCode: "VRY",
    Location: "12.6833, 67.6667"
  }),
  new Geo({
    IataCode: "VAW",
    Location: "31.0456, 70.3453"
  }),
  new Geo({
    IataCode: "BZG",
    Location: "17.992859, 53.123084"
  }),
  new Geo({
    IataCode: "LUZ",
    Location: "22.552872, 51.232258"
  }),
  new Geo({
    IataCode: "GDN",
    Location: "18.644485, 54.354556"
  }),
  new Geo({
    IataCode: "KTW",
    Location: "18.59, 50.15"
  }),
  new Geo({
    IataCode: "KRK",
    Location: "19.926453, 50.055375"
  }),
  new Geo({
    IataCode: "LCJ",
    Location: "19.398333, 51.721944"
  }),
  new Geo({
    IataCode: "POZ",
    Location: "16.53, 52.25"
  }),
  new Geo({
    IataCode: "RDO",
    Location: "21.153974, 51.415066"
  }),
  new Geo({
    IataCode: "RZE",
    Location: "21.979523, 50.042148"
  }),
  new Geo({
    IataCode: "SZZ",
    Location: "14.828796, 53.564579"
  }),
  new Geo({
    IataCode: "SZY",
    Location: "20.995455, 53.565594"
  }),
  new Geo({
    IataCode: "WAW",
    Location: "21, 52.15"
  }),
  new Geo({
    IataCode: "WRO",
    Location: "17, 51.05"
  }),
  new Geo({
    IataCode: "IEG",
    Location: "15.5167, 51.9333"
  }),
  new Geo({
    IataCode: "BGC",
    Location: "-6.739426, 41.806125"
  }),
  new Geo({
    IataCode: "CAT",
    Location: "-9.353991, 38.722727"
  }),
  new Geo({
    IataCode: "CVU",
    Location: "-31.1, 39.7"
  }),
  new Geo({
    IataCode: "FAO",
    Location: "-7.93223, 37.01937"
  }),
  new Geo({
    IataCode: "FNC",
    Location: "-16.9, 32.63333"
  }),
  new Geo({
    IataCode: "GRW",
    Location: "-28.007584, 39.051718"
  }),
  new Geo({
    IataCode: "HOR",
    Location: "-28.627453, 38.541318"
  }),
  new Geo({
    IataCode: "LIS",
    Location: "-9.125519, 38.728376"
  }),
  new Geo({
    IataCode: "PIX",
    Location: "-28.3333, 38.4667"
  }),
  new Geo({
    IataCode: "PDL",
    Location: "-25.668011, 37.7452"
  }),
  new Geo({
    IataCode: "OPO",
    Location: "-8.604012, 41.149965"
  }),
  new Geo({
    IataCode: "PRM",
    Location: "-8.5333, 37.1333"
  }),
  new Geo({
    IataCode: "PXO",
    Location: "-16.334782, 33.075864"
  }),
  new Geo({
    IataCode: "SJZ",
    Location: "-28.02887, 38.634036"
  }),
  new Geo({
    IataCode: "FLW",
    Location: "-31.188812, 39.445208"
  }),
  new Geo({
    IataCode: "SMA",
    Location: "-25.104446, 36.976501"
  }),
  new Geo({
    IataCode: "TER",
    Location: "-27.0725, 38.7433"
  }),
  new Geo({
    IataCode: "VRL",
    Location: "-7.745533, 41.297413"
  }),
  new Geo({
    IataCode: "VSE",
    Location: "-7.914963, 40.653816"
  }),
  new Geo({
    IataCode: "BCM",
    Location: "26.910278, 46.521946"
  }),
  new Geo({
    IataCode: "BAY",
    Location: "23.466667, 47.65"
  }),
  new Geo({
    IataCode: "BUH",
    Location: "26.108322, 44.43427"
  }),
  new Geo({
    IataCode: "CLJ",
    Location: "23.6833, 46.7833"
  }),
  new Geo({
    IataCode: "CND",
    Location: "28.6, 44.15"
  }),
  new Geo({
    IataCode: "CRA",
    Location: "23.816667, 44.333333"
  }),
  new Geo({
    IataCode: "IAS",
    Location: "27.6, 47.1833"
  }),
  new Geo({
    IataCode: "OMR",
    Location: "21.9, 47.0167"
  }),
  new Geo({
    IataCode: "SUJ",
    Location: "22.89, 47.79"
  }),
  new Geo({
    IataCode: "SBZ",
    Location: "24.1, 45.7833"
  }),
  new Geo({
    IataCode: "SCV",
    Location: "26.3167, 47.6333"
  }),
  new Geo({
    IataCode: "TSR",
    Location: "21.23, 45.759722"
  }),
  new Geo({
    IataCode: "TGM",
    Location: "24.55616, 46.536193"
  }),
  new Geo({
    IataCode: "BEG",
    Location: "20.5, 44.8333"
  }),
  new Geo({
    IataCode: "INI",
    Location: "21.9167, 43.3333"
  }),
  new Geo({
    IataCode: "ABA",
    Location: "91.4333, 53.7167"
  }),
  new Geo({
    IataCode: "AER",
    Location: "39.9333, 43.45"
  }),
  new Geo({
    IataCode: "AEM",
    Location: "137.675693, 45.843876"
  }),
  new Geo({
    IataCode: "ADH",
    Location: "125.4, 58.6"
  }),
  new Geo({
    IataCode: "DYR",
    Location: "177.516667, 64.733333"
  }),
  new Geo({
    IataCode: "AAQ",
    Location: "37.3167, 44.9"
  }),
  new Geo({
    IataCode: "ARH",
    Location: "40.5333, 64.5667"
  }),
  new Geo({
    IataCode: "ASF",
    Location: "48.05, 46.35"
  }),
  new Geo({
    IataCode: "BAX",
    Location: "83.75, 53.3667"
  }),
  new Geo({
    IataCode: "EGO",
    Location: "36.65, 50.6333"
  }),
  new Geo({
    IataCode: "BQJ",
    Location: "134.695, 67.648889"
  }),
  new Geo({
    IataCode: "BGN",
    Location: "146.185833, 68.538056"
  }),
  new Geo({
    IataCode: "BQS",
    Location: "127.53333, 50.26667"
  }),
  new Geo({
    IataCode: "ODO",
    Location: "114.2, 57.85"
  }),
  new Geo({
    IataCode: "BQG",
    Location: "140.4405, 52.3721"
  }),
  new Geo({
    IataCode: "BTK",
    Location: "101.6, 56.116667"
  }),
  new Geo({
    IataCode: "BZK",
    Location: "34.3333, 53.2667"
  }),
  new Geo({
    IataCode: "UUA",
    Location: "52.8167, 54.6167"
  }),
  new Geo({
    IataCode: "CYX",
    Location: "161.35, 68.75"
  }),
  new Geo({
    IataCode: "CSY",
    Location: "47.2667, 56.1333"
  }),
  new Geo({
    IataCode: "CEK",
    Location: "61.375833, 55.154722"
  }),
  new Geo({
    IataCode: "CEE",
    Location: "37.993469, 59.130863"
  }),
  new Geo({
    IataCode: "HTA",
    Location: "113.466667, 52.05"
  }),
  new Geo({
    IataCode: "CKH",
    Location: "147.8833, 70.6333"
  }),
  new Geo({
    IataCode: "CSH",
    Location: "35.733333, 65.03"
  }),
  new Geo({
    IataCode: "DEE",
    Location: "145.855556, 44.030556"
  }),
  new Geo({
    IataCode: "DHG",
    Location: "135.516659, 44.549571"
  }),
  new Geo({
    IataCode: "DKS",
    Location: "80.3667, 73.5167"
  }),
  new Geo({
    IataCode: "DLR",
    Location: "133.734349, 45.928402"
  }),
  new Geo({
    IataCode: "DPT",
    Location: "139.970578, 69.344448"
  }),
  new Geo({
    IataCode: "EDN",
    Location: "138.711539, 47.154268"
  }),
  new Geo({
    IataCode: "SVX",
    Location: "60.6, 56.85"
  }),
  new Geo({
    IataCode: "ESL",
    Location: "44.3333, 46.3667"
  }),
  new Geo({
    IataCode: "ETL",
    Location: "138.331529, 46.540492"
  }),
  new Geo({
    IataCode: "EYK",
    Location: "66.6833, 63.6833"
  }),
  new Geo({
    IataCode: "EZV",
    Location: "65.0167, 63.9167"
  }),
  new Geo({
    IataCode: "GDZ",
    Location: "38.0167, 44.5667"
  }),
  new Geo({
    IataCode: "GRV",
    Location: "45.7, 43.3333"
  }),
  new Geo({
    IataCode: "HTG",
    Location: "102.5, 71.9667"
  }),
  new Geo({
    IataCode: "HMA",
    Location: "69, 61"
  }),
  new Geo({
    IataCode: "IAA",
    Location: "86.572266, 67.475448"
  }),
  new Geo({
    IataCode: "INA",
    Location: "60.163193, 66.0342"
  }),
  new Geo({
    IataCode: "IKT",
    Location: "104.295833, 52.312222"
  }),
  new Geo({
    IataCode: "IRM",
    Location: "64.419708, 63.184727"
  }),
  new Geo({
    IataCode: "ITU",
    Location: "147.9378, 44.9859"
  }),
  new Geo({
    IataCode: "IWA",
    Location: "41, 57"
  }),
  new Geo({
    IataCode: "IJK",
    Location: "53.183333, 56.833333"
  }),
  new Geo({
    IataCode: "JOK",
    Location: "47.9, 56.7167"
  }),
  new Geo({
    IataCode: "KGD",
    Location: "20.507011, 54.711136"
  }),
  new Geo({
    IataCode: "KLF",
    Location: "36.2667, 54.5"
  }),
  new Geo({
    IataCode: "KZN",
    Location: "49, 55.8"
  }),
  new Geo({
    IataCode: "KDY",
    Location: "135.560974, 62.656868"
  }),
  new Geo({
    IataCode: "KEJ",
    Location: "86.0833, 55.3333"
  }),
  new Geo({
    IataCode: "KGP",
    Location: "74.533611, 62.195833"
  }),
  new Geo({
    IataCode: "KHV",
    Location: "135.098877, 48.509326"
  }),
  new Geo({
    IataCode: "KCK",
    Location: "108.1, 57.783333"
  }),
  new Geo({
    IataCode: "KVK",
    Location: "33.5833, 67.5833"
  }),
  new Geo({
    IataCode: "KVX",
    Location: "49.66007, 58.59665"
  }),
  new Geo({
    IataCode: "KXK",
    Location: "137, 50.566667"
  }),
  new Geo({
    IataCode: "KSZ",
    Location: "46.663914, 61.254634"
  }),
  new Geo({
    IataCode: "KPW",
    Location: "166.146785, 67.842919"
  }),
  new Geo({
    IataCode: "KJA",
    Location: "92.883911, 56.001453"
  }),
  new Geo({
    IataCode: "KRR",
    Location: "38.95, 45.0667"
  }),
  new Geo({
    IataCode: "KRO",
    Location: "65.3, 55.4333"
  }),
  new Geo({
    IataCode: "URS",
    Location: "36.2667, 51.75"
  }),
  new Geo({
    IataCode: "KVR",
    Location: "135.0289, 44.2725"
  }),
  new Geo({
    IataCode: "KYZ",
    Location: "94.4667, 51.7"
  }),
  new Geo({
    IataCode: "LPK",
    Location: "39.6, 52.6167"
  }),
  new Geo({
    IataCode: "GDX",
    Location: "150.8, 59.566667"
  }),
  new Geo({
    IataCode: "MQF",
    Location: "59.0667, 53.45"
  }),
  new Geo({
    IataCode: "MCX",
    Location: "47.5, 42.9667"
  }),
  new Geo({
    IataCode: "MRV",
    Location: "43.13528, 44.21028"
  }),
  new Geo({
    IataCode: "MJZ",
    Location: "114.0333, 62.5333"
  }),
  new Geo({
    IataCode: "MOW",
    Location: "37.617778, 55.751667"
  }),
  new Geo({
    IataCode: "MQJ",
    Location: "143.253056, 66.455833"
  }),
  new Geo({
    IataCode: "MMK",
    Location: "33.101807, 68.995833"
  }),
  new Geo({
    IataCode: "NBC",
    Location: "52.316667, 55.683333"
  }),
  new Geo({
    IataCode: "NYM",
    Location: "72.516667, 65.533333"
  }),
  new Geo({
    IataCode: "NAL",
    Location: "43.616667, 43.483333"
  }),
  new Geo({
    IataCode: "NNM",
    Location: "53.15, 67.6167"
  }),
  new Geo({
    IataCode: "IGT",
    Location: "44.7667, 43.2167"
  }),
  new Geo({
    IataCode: "NEI",
    Location: "136.609647, 45.046497"
  }),
  new Geo({
    IataCode: "NER",
    Location: "124.642639, 56.664529"
  }),
  new Geo({
    IataCode: "GOJ",
    Location: "44.01123, 56.342423"
  }),
  new Geo({
    IataCode: "NJC",
    Location: "76.4833, 60.95"
  }),
  new Geo({
    IataCode: "NLI",
    Location: "140.733333, 53.15"
  }),
  new Geo({
    IataCode: "NGK",
    Location: "143.11666, 51.816667"
  }),
  new Geo({
    IataCode: "NOJ",
    Location: "75.41153, 63.176982"
  }),
  new Geo({
    IataCode: "NSK",
    Location: "88.216667, 69.333333"
  }),
  new Geo({
    IataCode: "NOZ",
    Location: "87.1, 53.75"
  }),
  new Geo({
    IataCode: "NUX",
    Location: "76.5167, 66.0833"
  }),
  new Geo({
    IataCode: "NYA",
    Location: "65.383333, 62.133333"
  }),
  new Geo({
    IataCode: "NYR",
    Location: "118.346944, 63.297222"
  }),
  new Geo({
    IataCode: "OHH",
    Location: "142.8839, 53.5172"
  }),
  new Geo({
    IataCode: "OMS",
    Location: "73.35571, 54.98392"
  }),
  new Geo({
    IataCode: "ONK",
    Location: "112.479167, 68.515556"
  }),
  new Geo({
    IataCode: "REN",
    Location: "55.1167, 51.7833"
  }),
  new Geo({
    IataCode: "OSW",
    Location: "58.56685, 51.20487"
  }),
  new Geo({
    IataCode: "OVB",
    Location: "82.924805, 55.039827"
  }),
  new Geo({
    IataCode: "OVS",
    Location: "63.58417, 61.36139"
  }),
  new Geo({
    IataCode: "PEX",
    Location: "57.1333, 65.1167"
  }),
  new Geo({
    IataCode: "PEZ",
    Location: "45, 53.2167"
  }),
  new Geo({
    IataCode: "PEE",
    Location: "56.25, 58"
  }),
  new Geo({
    IataCode: "LED",
    Location: "30.316667, 59.95"
  }),
  new Geo({
    IataCode: "PES",
    Location: "34.326782, 61.790006"
  }),
  new Geo({
    IataCode: "PKC",
    Location: "158.65, 53.0167"
  }),
  new Geo({
    IataCode: "PWE",
    Location: "170.283333, 69.7"
  }),
  new Geo({
    IataCode: "PYJ",
    Location: "112.05, 66.4167"
  }),
  new Geo({
    IataCode: "RGK",
    Location: "85.95, 51.95"
  }),
  new Geo({
    IataCode: "ROV",
    Location: "39.7, 47.233333"
  }),
  new Geo({
    IataCode: "RZH",
    Location: "133.5415, 42.5404"
  }),
  new Geo({
    IataCode: "SLY",
    Location: "66.5833, 66.6"
  }),
  new Geo({
    IataCode: "KUF",
    Location: "50.15, 53.2"
  }),
  new Geo({
    IataCode: "RTW",
    Location: "46.032028, 51.539075"
  }),
  new Geo({
    IataCode: "SKX",
    Location: "45.1667, 54.1667"
  }),
  new Geo({
    IataCode: "SBT",
    Location: "72.103044, 71.248133"
  }),
  new Geo({
    IataCode: "SEK",
    Location: "153.716111, 67.463333"
  }),
  new Geo({
    IataCode: "EKS",
    Location: "142.1, 49.15"
  }),
  new Geo({
    IataCode: "STW",
    Location: "41.983333, 45.05"
  }),
  new Geo({
    IataCode: "SUK",
    Location: "130.390833, 67.791944"
  }),
  new Geo({
    IataCode: "SGC",
    Location: "73.41667, 61.25"
  }),
  new Geo({
    IataCode: "SUY",
    Location: "117.654811, 62.160931"
  }),
  new Geo({
    IataCode: "SWT",
    Location: "77, 60.5"
  }),
  new Geo({
    IataCode: "SWV",
    Location: "159.229722, 61.921389"
  }),
  new Geo({
    IataCode: "SCW",
    Location: "50.840607, 61.666417"
  }),
  new Geo({
    IataCode: "SYS",
    Location: "114.100549, 71.961451"
  }),
  new Geo({
    IataCode: "TBW",
    Location: "41.4333, 52.7167"
  }),
  new Geo({
    IataCode: "TGP",
    Location: "89.973333, 61.59"
  }),
  new Geo({
    IataCode: "THX",
    Location: "87.968, 65.797"
  }),
  new Geo({
    IataCode: "IKS",
    Location: "128.9, 71.7"
  }),
  new Geo({
    IataCode: "TLK",
    Location: "110.88551, 59.82334"
  }),
  new Geo({
    IataCode: "TLY",
    Location: "136.2917, 44.8147"
  }),
  new Geo({
    IataCode: "TOF",
    Location: "84.9667, 56.5"
  }),
  new Geo({
    IataCode: "TQL",
    Location: "77.785, 64.9225"
  }),
  new Geo({
    IataCode: "TJM",
    Location: "65.5333, 57.15"
  }),
  new Geo({
    IataCode: "OLZ",
    Location: "120.433333, 60.366667"
  }),
  new Geo({
    IataCode: "UFA",
    Location: "56.04562, 54.78517"
  }),
  new Geo({
    IataCode: "UKG",
    Location: "135.645004, 70.011002"
  }),
  new Geo({
    IataCode: "UCT",
    Location: "53.68348, 63.56705"
  }),
  new Geo({
    IataCode: "UUD",
    Location: "107.5, 51.8333"
  }),
  new Geo({
    IataCode: "ULK",
    Location: "114.825833, 60.720556"
  }),
  new Geo({
    IataCode: "ULY",
    Location: "48.3833, 54.35"
  }),
  new Geo({
    IataCode: "UMS",
    Location: "134.437778, 60.358056"
  }),
  new Geo({
    IataCode: "URJ",
    Location: "64.8333, 60.1167"
  }),
  new Geo({
    IataCode: "USK",
    Location: "57.4, 65.95"
  }),
  new Geo({
    IataCode: "USR",
    Location: "143.110833, 64.549444"
  }),
  new Geo({
    IataCode: "UKX",
    Location: "105.833333, 56.8"
  }),
  new Geo({
    IataCode: "VUS",
    Location: "46.3167, 60.7667"
  }),
  new Geo({
    IataCode: "UTS",
    Location: "52.198889, 65.433333"
  }),
  new Geo({
    IataCode: "VHV",
    Location: "120.315561, 63.445995"
  }),
  new Geo({
    IataCode: "VVO",
    Location: "131.9, 43.133333"
  }),
  new Geo({
    IataCode: "OGZ",
    Location: "44.65, 43.016667"
  }),
  new Geo({
    IataCode: "VOG",
    Location: "44.5, 48.75"
  }),
  new Geo({
    IataCode: "VKT",
    Location: "63.9833, 67.4833"
  }),
  new Geo({
    IataCode: "VOZ",
    Location: "39.2167, 51.6667"
  }),
  new Geo({
    IataCode: "VYI",
    Location: "121.627326, 63.751722"
  }),
  new Geo({
    IataCode: "YKS",
    Location: "129.766667, 62.08333"
  }),
  new Geo({
    IataCode: "IAR",
    Location: "39.8833, 57.6167"
  }),
  new Geo({
    IataCode: "ERG",
    Location: "108.016667, 61.266667"
  }),
  new Geo({
    IataCode: "UUS",
    Location: "142.7167, 46.8833"
  }),
  new Geo({
    IataCode: "ZIX",
    Location: "123.361389, 66.796667"
  }),
  new Geo({
    IataCode: "ZKP",
    Location: "150.707778, 65.738333"
  }),
  new Geo({
    IataCode: "AJR",
    Location: "19.2856, 65.5753"
  }),
  new Geo({
    IataCode: "BLE",
    Location: "15.430298, 60.49038"
  }),
  new Geo({
    IataCode: "GEV",
    Location: "20.657043, 67.143298"
  }),
  new Geo({
    IataCode: "GOT",
    Location: "11.962738, 57.714418"
  }),
  new Geo({
    IataCode: "HFS",
    Location: "13.5692, 60.0158"
  }),
  new Geo({
    IataCode: "HAD",
    Location: "12.8167, 56.6833"
  }),
  new Geo({
    IataCode: "AGH",
    Location: "12.716667, 56.05"
  }),
  new Geo({
    IataCode: "HMV",
    Location: "15.083333, 65.833333"
  }),
  new Geo({
    IataCode: "JKG",
    Location: "14.0833, 57.7667"
  }),
  new Geo({
    IataCode: "KLR",
    Location: "16.2833, 56.6833"
  }),
  new Geo({
    IataCode: "KSD",
    Location: "13.503571, 59.377288"
  }),
  new Geo({
    IataCode: "KRN",
    Location: "20.223083, 67.855361"
  }),
  new Geo({
    IataCode: "KRF",
    Location: "17.785835, 62.932892"
  }),
  new Geo({
    IataCode: "KID",
    Location: "14.150391, 56.022948"
  }),
  new Geo({
    IataCode: "LPI",
    Location: "15.5167, 58.4"
  }),
  new Geo({
    IataCode: "LLA",
    Location: "22.153244, 65.58572"
  }),
  new Geo({
    IataCode: "LYC",
    Location: "18.6667, 64.6"
  }),
  new Geo({
    IataCode: "MMA",
    Location: "13.033333, 55.583333"
  }),
  new Geo({
    IataCode: "MXX",
    Location: "14.532166, 60.997752"
  }),
  new Geo({
    IataCode: "NRK",
    Location: "16.0833, 58.6167"
  }),
  new Geo({
    IataCode: "ORB",
    Location: "15.2333, 59.25"
  }),
  new Geo({
    IataCode: "OER",
    Location: "18.733333, 63.283333"
  }),
  new Geo({
    IataCode: "OSK",
    Location: "16.4333, 57.2667"
  }),
  new Geo({
    IataCode: "OSD",
    Location: "14.639282, 63.18101"
  }),
  new Geo({
    IataCode: "PJA",
    Location: "23.365173, 67.210416"
  }),
  new Geo({
    IataCode: "RNB",
    Location: "15.274773, 56.211096"
  }),
  new Geo({
    IataCode: "SFT",
    Location: "20.95, 64.75"
  }),
  new Geo({
    IataCode: "STO",
    Location: "18.066667, 59.35"
  }),
  new Geo({
    IataCode: "SDL",
    Location: "17.302094, 62.391006"
  }),
  new Geo({
    IataCode: "EVG",
    Location: "14.3333, 62.0333"
  }),
  new Geo({
    IataCode: "TYF",
    Location: "13, 60.1333"
  }),
  new Geo({
    IataCode: "THN",
    Location: "12.288208, 58.283508"
  }),
  new Geo({
    IataCode: "UME",
    Location: "20.258102, 63.830374"
  }),
  new Geo({
    IataCode: "VXO",
    Location: "14.808197, 56.877498"
  }),
  new Geo({
    IataCode: "VHM",
    Location: "16.65, 64.6167"
  }),
  new Geo({
    IataCode: "VBY",
    Location: "18.296013, 57.640623"
  }),
  new Geo({
    IataCode: "XYI",
    Location: "16.58889, 59.05722"
  }),
  new Geo({
    IataCode: "LJU",
    Location: "14.508333, 46.055556"
  }),
  new Geo({
    IataCode: "MBX",
    Location: "15.650024, 46.556972"
  }),
  new Geo({
    IataCode: "BTS",
    Location: "17.216667, 48.166667"
  }),
  new Geo({
    IataCode: "KSC",
    Location: "21.25, 48.666667"
  }),
  new Geo({
    IataCode: "TAT",
    Location: "20.240278, 49.071944"
  }),
  new Geo({
    IataCode: "ERD",
    Location: "36.7833, 46.7333"
  }),
  new Geo({
    IataCode: "CWC",
    Location: "25.9667, 48.2667"
  }),
  new Geo({
    IataCode: "DNK",
    Location: "34.9833, 48.45"
  }),
  new Geo({
    IataCode: "IFO",
    Location: "24.716667, 48.916667"
  }),
  new Geo({
    IataCode: "KHC",
    Location: "36.45, 45.3667"
  }),
  new Geo({
    IataCode: "HRK",
    Location: "36.25, 50"
  }),
  new Geo({
    IataCode: "KHE",
    Location: "32.583333, 46.633333"
  }),
  new Geo({
    IataCode: "IEV",
    Location: "30.523333, 50.45"
  }),
  new Geo({
    IataCode: "KWG",
    Location: "33.25, 47.916667"
  }),
  new Geo({
    IataCode: "LWO",
    Location: "24.023666, 49.839311"
  }),
  new Geo({
    IataCode: "ODS",
    Location: "30.73391, 46.47499"
  }),
  new Geo({
    IataCode: "PLV",
    Location: "34.5333, 49.5833"
  }),
  new Geo({
    IataCode: "VIN",
    Location: "28.4833, 49.2333"
  }),
  new Geo({
    IataCode: "OZH",
    Location: "35.3158, 47.8658"
  }),
  new Geo({
    IataCode: "ABZ",
    Location: "-2.109375, 57.148161"
  }),
  new Geo({
    IataCode: "ACI",
    Location: "-2.199326, 49.719152"
  }),
  new Geo({
    IataCode: "VLY",
    Location: "-4.31179, 53.258436"
  }),
  new Geo({
    IataCode: "BRR",
    Location: "-7.425385, 57.012702"
  }),
  new Geo({
    IataCode: "BFS",
    Location: "-6.054027, 54.635"
  }),
  new Geo({
    IataCode: "BEB",
    Location: "-7.303162, 57.441254"
  }),
  new Geo({
    IataCode: "BHX",
    Location: "-1.894455, 52.493651"
  }),
  new Geo({
    IataCode: "BLK",
    Location: "-3.036111, 53.771944"
  }),
  new Geo({
    IataCode: "BOH",
    Location: "-1.877975, 50.726676"
  }),
  new Geo({
    IataCode: "BRS",
    Location: "-2.593803, 51.461708"
  }),
  new Geo({
    IataCode: "CAL",
    Location: "-5.709444, 55.441111"
  }),
  new Geo({
    IataCode: "CWL",
    Location: "-3.180542, 51.486942"
  }),
  new Geo({
    IataCode: "IOM",
    Location: "-4.654422, 54.074372"
  }),
  new Geo({
    IataCode: "CBG",
    Location: "0.11667, 52.2"
  }),
  new Geo({
    IataCode: "CEG",
    Location: "-2.977778, 53.178056"
  }),
  new Geo({
    IataCode: "COL",
    Location: "-6.616667, 56.616667"
  }),
  new Geo({
    IataCode: "CSA",
    Location: "-6.241264, 56.079317"
  }),
  new Geo({
    IataCode: "LDY",
    Location: "-7.2, 55"
  }),
  new Geo({
    IataCode: "DSA",
    Location: "-1.010237, 53.482918"
  }),
  new Geo({
    IataCode: "DND",
    Location: "-2.968369, 56.46249"
  }),
  new Geo({
    IataCode: "EDI",
    Location: "-3.194275, 55.948431"
  }),
  new Geo({
    IataCode: "EOI",
    Location: "-2.783333, 59.183333"
  }),
  new Geo({
    IataCode: "EXT",
    Location: "-3.535538, 50.721677"
  }),
  new Geo({
    IataCode: "FIE",
    Location: "-1.666667, 59.5"
  }),
  new Geo({
    IataCode: "FOA",
    Location: "-2.05, 60.13333"
  }),
  new Geo({
    IataCode: "GLA",
    Location: "-4.258232, 55.870881"
  }),
  new Geo({
    IataCode: "GLO",
    Location: "-2.167108, 51.894111"
  }),
  new Geo({
    IataCode: "HUY",
    Location: "0.280151, 53.325952"
  }),
  new Geo({
    IataCode: "INV",
    Location: "-4.2254, 57.4717"
  }),
  new Geo({
    IataCode: "ILY",
    Location: "-6.181183, 55.734843"
  }),
  new Geo({
    IataCode: "JER",
    Location: "-2.125, 49.218"
  }),
  new Geo({
    IataCode: "LBA",
    Location: "-1.557312, 53.799029"
  }),
  new Geo({
    IataCode: "LEQ",
    Location: "-5.697784, 50.073227"
  }),
  new Geo({
    IataCode: "LPL",
    Location: "-2.979355, 53.416489"
  }),
  new Geo({
    IataCode: "LON",
    Location: "-0.127, 51.507"
  }),
  new Geo({
    IataCode: "LYX",
    Location: "0.906715, 50.954101"
  }),
  new Geo({
    IataCode: "MAN",
    Location: "-2.233333, 53.466667"
  }),
  new Geo({
    IataCode: "MME",
    Location: "-1.568298, 54.77693"
  }),
  new Geo({
    IataCode: "NDY",
    Location: "-2.583333, 59.25"
  }),
  new Geo({
    IataCode: "NCL",
    Location: "-1.61087, 54.978402"
  }),
  new Geo({
    IataCode: "NQY",
    Location: "-5.08358, 50.416284"
  }),
  new Geo({
    IataCode: "NWI",
    Location: "1.296667, 52.628333"
  }),
  new Geo({
    IataCode: "NQT",
    Location: "-1.149101, 52.959393"
  }),
  new Geo({
    IataCode: "NRL",
    Location: "-2.433333, 59.370278"
  }),
  new Geo({
    IataCode: "OBN",
    Location: "-5.470232, 56.412356"
  }),
  new Geo({
    IataCode: "KOI",
    Location: "-2.991028, 58.992481"
  }),
  new Geo({
    IataCode: "PZE",
    Location: "-5.539513, 50.119918"
  }),
  new Geo({
    IataCode: "PLH",
    Location: "-4.148712, 50.369993"
  }),
  new Geo({
    IataCode: "PPW",
    Location: "-2.9, 59.416667"
  }),
  new Geo({
    IataCode: "PSV",
    Location: "-1.7, 60.316667"
  }),
  new Geo({
    IataCode: "ISC",
    Location: "-6.323866, 49.930141"
  }),
  new Geo({
    IataCode: "SOU",
    Location: "-1.4114, 50.899135"
  }),
  new Geo({
    IataCode: "SOY",
    Location: "-2.633333, 59.133333"
  }),
  new Geo({
    IataCode: "SYY",
    Location: "-6.394043, 58.215578"
  }),
  new Geo({
    IataCode: "SDZ",
    Location: "-1.283333, 59.866667"
  }),
  new Geo({
    IataCode: "SWS",
    Location: "-4.067778, 51.605278"
  }),
  new Geo({
    IataCode: "TRE",
    Location: "-6.364174, 56.302063"
  }),
  new Geo({
    IataCode: "WIC",
    Location: "-3.092995, 58.442702"
  }),
  new Geo({
    IataCode: "WRY",
    Location: "-2.99051, 59.31944"
  }),
  new Geo({
    IataCode: "CAB",
    Location: "12.2, -5.583333"
  }),
  new Geo({
    IataCode: "CBT",
    Location: "13.483333, -12.483333"
  }),
  new Geo({
    IataCode: "DUE",
    Location: "20.816667, -7.4"
  }),
  new Geo({
    IataCode: "LAD",
    Location: "13.233911, -8.855492"
  }),
  new Geo({
    IataCode: "LUO",
    Location: "19.9062, -11.7918"
  }),
  new Geo({
    IataCode: "MEG",
    Location: "16.312222, -9.525"
  }),
  new Geo({
    IataCode: "MSZ",
    Location: "12.160833, -15.208611"
  }),
  new Geo({
    IataCode: "NOV",
    Location: "15.755, -12.805"
  }),
  new Geo({
    IataCode: "NZA",
    Location: "21.37, -7.69"
  }),
  new Geo({
    IataCode: "SDD",
    Location: "13.576667, -14.924444"
  }),
  new Geo({
    IataCode: "SPP",
    Location: "17.725556, -14.6375"
  }),
  new Geo({
    IataCode: "SVP",
    Location: "16.94972, -12.38306"
  }),
  new Geo({
    IataCode: "SZA",
    Location: "12.416667, -6.033333"
  }),
  new Geo({
    IataCode: "VHC",
    Location: "20.4, -9.65"
  }),
  new Geo({
    IataCode: "VPE",
    Location: "15.7, -17.05"
  }),
  new Geo({
    IataCode: "BOY",
    Location: "-4.324444, 11.163611"
  }),
  new Geo({
    IataCode: "OUA",
    Location: "-1.512778, 12.352778"
  }),
  new Geo({
    IataCode: "BJM",
    Location: "29.366667, -3.383333"
  }),
  new Geo({
    IataCode: "COO",
    Location: "2.385556, 6.354167"
  }),
  new Geo({
    IataCode: "BBK",
    Location: "25.15, -17.816667"
  }),
  new Geo({
    IataCode: "FRW",
    Location: "27.482222, -21.160556"
  }),
  new Geo({
    IataCode: "GBE",
    Location: "25.916667, -24.55"
  }),
  new Geo({
    IataCode: "MUB",
    Location: "23.428056, -19.9725"
  }),
  new Geo({
    IataCode: "BDV",
    Location: "29.8, -7"
  }),
  new Geo({
    IataCode: "BKY",
    Location: "28.866667, -2.5"
  }),
  new Geo({
    IataCode: "BMB",
    Location: "22.473333, 2.19"
  }),
  new Geo({
    IataCode: "BNC",
    Location: "29.466667, 0.566667"
  }),
  new Geo({
    IataCode: "BUX",
    Location: "30.25, 1.56667"
  }),
  new Geo({
    IataCode: "FBM",
    Location: "27.466667, -11.666667"
  }),
  new Geo({
    IataCode: "FIH",
    Location: "15.380833, -4.354027"
  }),
  new Geo({
    IataCode: "FKI",
    Location: "25.18306, 0.51667"
  }),
  new Geo({
    IataCode: "FMI",
    Location: "29.2, -5.933333"
  }),
  new Geo({
    IataCode: "GMA",
    Location: "19.768611, 3.235"
  }),
  new Geo({
    IataCode: "GOM",
    Location: "29.233333, -1.666667"
  }),
  new Geo({
    IataCode: "IRP",
    Location: "27.588056, 2.8275"
  }),
  new Geo({
    IataCode: "KGA",
    Location: "22.466667, -5.9"
  }),
  new Geo({
    IataCode: "KND",
    Location: "25.9, -2.933333"
  }),
  new Geo({
    IataCode: "KWZ",
    Location: "25.5, -10.766667"
  }),
  new Geo({
    IataCode: "LJA",
    Location: "23.444444, -3.397222"
  }),
  new Geo({
    IataCode: "MDK",
    Location: "18.289722, 0.028056"
  }),
  new Geo({
    IataCode: "MJM",
    Location: "23.633333, -6.15"
  }),
  new Geo({
    IataCode: "BGF",
    Location: "18.519722, 4.397778"
  }),
  new Geo({
    IataCode: "BOZ",
    Location: "16.383333, 6.316667"
  }),
  new Geo({
    IataCode: "BZV",
    Location: "15.28318, -4.26583"
  }),
  new Geo({
    IataCode: "DIS",
    Location: "12.69972, -4.2"
  }),
  new Geo({
    IataCode: "KMK",
    Location: "12.616667, -3.483333"
  }),
  new Geo({
    IataCode: "PNR",
    Location: "11.885833, -4.810556"
  }),
  new Geo({
    IataCode: "ABJ",
    Location: "-4.033333, 5.316667"
  }),
  new Geo({
    IataCode: "BYK",
    Location: "-5.069167, 7.739444"
  }),
  new Geo({
    IataCode: "HGO",
    Location: "-5.63333, 9.45"
  }),
  new Geo({
    IataCode: "KEO",
    Location: "-7.56639, 9.5"
  }),
  new Geo({
    IataCode: "MJC",
    Location: "-7.55383, 7.41251"
  }),
  new Geo({
    IataCode: "SPY",
    Location: "-6.626944, 4.730278"
  }),
  new Geo({
    IataCode: "BFX",
    Location: "10.354167, 5.536944"
  }),
  new Geo({
    IataCode: "BPC",
    Location: "10.15, 5.916667"
  }),
  new Geo({
    IataCode: "BTA",
    Location: "13.7275, 4.540833"
  }),
  new Geo({
    IataCode: "DLA",
    Location: "9.7, 4.05"
  }),
  new Geo({
    IataCode: "GOU",
    Location: "13.381111, 9.336667"
  }),
  new Geo({
    IataCode: "MVR",
    Location: "14.327545, 10.582322"
  }),
  new Geo({
    IataCode: "NGE",
    Location: "13.56, 7.359167"
  }),
  new Geo({
    IataCode: "YAO",
    Location: "11.516667, 3.866667"
  }),
  new Geo({
    IataCode: "BVC",
    Location: "-22.888889, 16.136667"
  }),
  new Geo({
    IataCode: "MMO",
    Location: "-23.208333, 15.1375"
  }),
  new Geo({
    IataCode: "RAI",
    Location: "-23.493333, 14.924444"
  }),
  new Geo({
    IataCode: "SFL",
    Location: "-24.516667, 14.9"
  }),
  new Geo({
    IataCode: "SID",
    Location: "-22.951667, 16.745"
  }),
  new Geo({
    IataCode: "SNE",
    Location: "-24.228973, 16.626981"
  }),
  new Geo({
    IataCode: "VXE",
    Location: "-25.083333, 16.816667"
  }),
  new Geo({
    IataCode: "JIB",
    Location: "43.158889, 11.546667"
  }),
  new Geo({
    IataCode: "AAE",
    Location: "7.81, 36.821667"
  }),
  new Geo({
    IataCode: "ALG",
    Location: "3.216667, 36.7"
  }),
  new Geo({
    IataCode: "AZR",
    Location: "-0.283333, 27.883333"
  }),
  new Geo({
    IataCode: "BJA",
    Location: "5.083333, 36.75"
  }),
  new Geo({
    IataCode: "BLJ",
    Location: "6.183333, 35.566667"
  }),
  new Geo({
    IataCode: "BMW",
    Location: "1.033333, 21.316667"
  }),
  new Geo({
    IataCode: "BSK",
    Location: "5.738056, 34.793333"
  }),
  new Geo({
    IataCode: "CBH",
    Location: "-2.259722, 31.647778"
  }),
  new Geo({
    IataCode: "CFK",
    Location: "1.331667, 36.212222"
  }),
  new Geo({
    IataCode: "CZL",
    Location: "6.621667, 36.286667"
  }),
  new Geo({
    IataCode: "DJG",
    Location: "9.488889, 24.465278"
  }),
  new Geo({
    IataCode: "EBH",
    Location: "1.02028, 33.6803"
  }),
  new Geo({
    IataCode: "ELG",
    Location: "2.864722, 30.568889"
  }),
  new Geo({
    IataCode: "ELU",
    Location: "6.783333, 33.516667"
  }),
  new Geo({
    IataCode: "GHA",
    Location: "3.666667, 32.483333"
  }),
  new Geo({
    IataCode: "GJL",
    Location: "5.873611, 36.794444"
  }),
  new Geo({
    IataCode: "HME",
    Location: "6.140556, 31.673889"
  }),
  new Geo({
    IataCode: "IAM",
    Location: "9.63, 28.05"
  }),
  new Geo({
    IataCode: "INZ",
    Location: "2.511356, 27.250997"
  }),
  new Geo({
    IataCode: "LOO",
    Location: "2.93306, 33.76667"
  }),
  new Geo({
    IataCode: "OGX",
    Location: "5.4, 31.91667"
  }),
  new Geo({
    IataCode: "ORN",
    Location: "-0.609861, 35.627778"
  }),
  new Geo({
    IataCode: "QSF",
    Location: "5.331111, 36.181389"
  }),
  new Geo({
    IataCode: "TEE",
    Location: "8.15, 35.466667"
  }),
  new Geo({
    IataCode: "TGR",
    Location: "6.088672, 33.067803"
  }),
  new Geo({
    IataCode: "TID",
    Location: "1.316667, 35.366667"
  }),
  new Geo({
    IataCode: "TIN",
    Location: "-8.13306, 27.66667"
  }),
  new Geo({
    IataCode: "TLM",
    Location: "-1.31667, 34.882776"
  }),
  new Geo({
    IataCode: "TMR",
    Location: "5.450833, 22.811111"
  }),
  new Geo({
    IataCode: "TMX",
    Location: "0.283611, 29.241111"
  }),
  new Geo({
    IataCode: "VVZ",
    Location: "8.55, 26.533333"
  }),
  new Geo({
    IataCode: "ABS",
    Location: "31.6167, 22.3667"
  }),
  new Geo({
    IataCode: "ALY",
    Location: "29.9192, 31.198"
  }),
  new Geo({
    IataCode: "ATZ",
    Location: "31.181946, 27.194793"
  }),
  new Geo({
    IataCode: "ASW",
    Location: "32.8833, 24.0833"
  }),
  new Geo({
    IataCode: "CAI",
    Location: "31.227264, 30.053643"
  }),
  new Geo({
    IataCode: "HRG",
    Location: "33.809052, 27.204564"
  }),
  new Geo({
    IataCode: "LXR",
    Location: "32.65, 25.683333"
  }),
  new Geo({
    IataCode: "RMF",
    Location: "34.9, 25.066667"
  }),
  new Geo({
    IataCode: "SSH",
    Location: "34.266667, 27.85"
  }),
  new Geo({
    IataCode: "HMB",
    Location: "31.692, 26.5516"
  }),
  new Geo({
    IataCode: "TCP",
    Location: "34.916667, 29.55"
  }),
  new Geo({
    IataCode: "ASA",
    Location: "42.71639, 13.06667"
  }),
  new Geo({
    IataCode: "ASM",
    Location: "38.910278, 15.291111"
  }),
  new Geo({
    IataCode: "ABK",
    Location: "44.266111, 6.733889"
  }),
  new Geo({
    IataCode: "ADD",
    Location: "38.74, 9.03"
  }),
  new Geo({
    IataCode: "AMH",
    Location: "37.55, 6.033333"
  }),
  new Geo({
    IataCode: "ASO",
    Location: "34.516667, 10.066667"
  }),
  new Geo({
    IataCode: "AWA",
    Location: "38.4875, 7.061111"
  }),
  new Geo({
    IataCode: "AXU",
    Location: "38.716667, 14.120833"
  }),
  new Geo({
    IataCode: "BCO",
    Location: "36.566667, 5.783333"
  }),
  new Geo({
    IataCode: "BJR",
    Location: "37.316667, 11.583333"
  }),
  new Geo({
    IataCode: "DEM",
    Location: "34.8, 8.53333"
  }),
  new Geo({
    IataCode: "DIR",
    Location: "41.850833, 9.622222"
  }),
  new Geo({
    IataCode: "DSE",
    Location: "39.63333, 11.13333"
  }),
  new Geo({
    IataCode: "GDE",
    Location: "43.628333, 5.902222"
  }),
  new Geo({
    IataCode: "GDQ",
    Location: "37.43306, 12.53306"
  }),
  new Geo({
    IataCode: "GMB",
    Location: "34.583333, 8.283333"
  }),
  new Geo({
    IataCode: "GOB",
    Location: "39.980556, 7.013889"
  }),
  new Geo({
    IataCode: "HUE",
    Location: "36.583333, 14.25"
  }),
  new Geo({
    IataCode: "JIJ",
    Location: "42.766667, 9.366667"
  }),
  new Geo({
    IataCode: "JIM",
    Location: "36.821111, 7.654444"
  }),
  new Geo({
    IataCode: "LLI",
    Location: "38.979722, 11.974722"
  }),
  new Geo({
    IataCode: "MQX",
    Location: "39.48306, 13.5"
  }),
  new Geo({
    IataCode: "SHC",
    Location: "39.133333, 12.983333"
  }),
  new Geo({
    IataCode: "SZE",
    Location: "41.008611, 11.792222"
  }),
  new Geo({
    IataCode: "LBV",
    Location: "9.415278, 0.459167"
  }),
  new Geo({
    IataCode: "MVB",
    Location: "13.583333, -1.633333"
  }),
  new Geo({
    IataCode: "POG",
    Location: "8.755833, -0.7125"
  }),
  new Geo({
    IataCode: "ACC",
    Location: "-0.170833, 5.595278"
  }),
  new Geo({
    IataCode: "KMS",
    Location: "-1.591111, 6.7125"
  }),
  new Geo({
    IataCode: "TKD",
    Location: "-1.766667, 4.891667"
  }),
  new Geo({
    IataCode: "TML",
    Location: "-0.879167, 9.406944"
  }),
  new Geo({
    IataCode: "BJL",
    Location: "-16.666667, 13.35"
  }),
  new Geo({
    IataCode: "CKY",
    Location: "-13.610833, 9.576389"
  }),
  new Geo({
    IataCode: "BSG",
    Location: "9.805556, 1.905278"
  }),
  new Geo({
    IataCode: "GEM",
    Location: "11.316667, 1.616667"
  }),
  new Geo({
    IataCode: "NBN",
    Location: "5.631338, -1.406457"
  }),
  new Geo({
    IataCode: "SSG",
    Location: "8.705556, 3.752778"
  }),
  new Geo({
    IataCode: "OXB",
    Location: "-15.657222, 11.888889"
  }),
  new Geo({
    IataCode: "ASV",
    Location: "37.283265, -2.667184"
  }),
  new Geo({
    IataCode: "EDL",
    Location: "35.283333, 0.516667"
  }),
  new Geo({
    IataCode: "GAS",
    Location: "39.633333, -0.466667"
  }),
  new Geo({
    IataCode: "GGM",
    Location: "34.766965, 0.288068"
  }),
  new Geo({
    IataCode: "JJM",
    Location: "38.19614, 0.325696"
  }),
  new Geo({
    IataCode: "KIS",
    Location: "34.761772, -0.095787"
  }),
  new Geo({
    IataCode: "KTL",
    Location: "35, 1.01667"
  }),
  new Geo({
    IataCode: "LAU",
    Location: "40.83306, -2.26667"
  }),
  new Geo({
    IataCode: "LBN",
    Location: "36.257012, 0.633458"
  }),
  new Geo({
    IataCode: "LOK",
    Location: "35.61639, 3.11667"
  }),
  new Geo({
    IataCode: "LOY",
    Location: "36.718333, 2.763056"
  }),
  new Geo({
    IataCode: "MBA",
    Location: "39.666667, -4.05"
  }),
  new Geo({
    IataCode: "MRE",
    Location: "35.083333, -1.183333"
  }),
  new Geo({
    IataCode: "MYD",
    Location: "40.098611, -3.222222"
  }),
  new Geo({
    IataCode: "NBO",
    Location: "36.87375, -1.316667"
  }),
  new Geo({
    IataCode: "NYK",
    Location: "37.066667, 0.016667"
  }),
  new Geo({
    IataCode: "UAS",
    Location: "37.648945, 0.641657"
  }),
  new Geo({
    IataCode: "UKA",
    Location: "39.566667, -4.3"
  }),
  new Geo({
    IataCode: "VPG",
    Location: "39.8, -3.816667"
  }),
  new Geo({
    IataCode: "WJR",
    Location: "40.06639, 1.75"
  }),
  new Geo({
    IataCode: "AJN",
    Location: "44.429722, -12.126389"
  }),
  new Geo({
    IataCode: "NWA",
    Location: "43.766389, -12.298056"
  }),
  new Geo({
    IataCode: "YVA",
    Location: "43.2, -11.75"
  }),
  new Geo({
    IataCode: "MLW",
    Location: "-10.801389, 6.313333"
  }),
  new Geo({
    IataCode: "MSU",
    Location: "27.505556, -29.301389"
  }),
  new Geo({
    IataCode: "AKF",
    Location: "23.333333, 24.2"
  }),
  new Geo({
    IataCode: "BEN",
    Location: "20.066667, 32.116667"
  }),
  new Geo({
    IataCode: "GHT",
    Location: "10.166667, 24.966667"
  }),
  new Geo({
    IataCode: "LAQ",
    Location: "21.75, 32.816667"
  }),
  new Geo({
    IataCode: "MJI",
    Location: "13.277778, 32.897222"
  }),
  new Geo({
    IataCode: "MRA",
    Location: "15.093842, 32.376482"
  }),
  new Geo({
    IataCode: "SEB",
    Location: "14.430542, 27.039862"
  }),
  new Geo({
    IataCode: "TIP",
    Location: "13.189859, 32.875623"
  }),
  new Geo({
    IataCode: "TOB",
    Location: "23.961389, 32.076111"
  }),
  new Geo({
    IataCode: "ZIS",
    Location: "12.248333, 31.930556"
  }),
  new Geo({
    IataCode: "AGA",
    Location: "-9.59815, 30.42018"
  }),
  new Geo({
    IataCode: "AHU",
    Location: "-3.933333, 35.25"
  }),
  new Geo({
    IataCode: "BEM",
    Location: "-6.360833, 32.339444"
  }),
  new Geo({
    IataCode: "CAS",
    Location: "-7.583333, 33.533333"
  }),
  new Geo({
    IataCode: "VIL",
    Location: "-15.9167, 23.7333"
  }),
  new Geo({
    IataCode: "ERH",
    Location: "-4.421997, 31.933517"
  }),
  new Geo({
    IataCode: "ESU",
    Location: "-9.7, 31.533333"
  }),
  new Geo({
    IataCode: "FEZ",
    Location: "-4.996719, 34.046401"
  }),
  new Geo({
    IataCode: "GLN",
    Location: "-10.06073, 28.983517"
  }),
  new Geo({
    IataCode: "EUN",
    Location: "-13.200417, 27.157226"
  }),
  new Geo({
    IataCode: "RAK",
    Location: "-8.018303, 31.637306"
  }),
  new Geo({
    IataCode: "NDR",
    Location: "-2.924423, 35.17914"
  }),
  new Geo({
    IataCode: "OZZ",
    Location: "-6.898384, 30.919015"
  }),
  new Geo({
    IataCode: "OUD",
    Location: "-1.917801, 34.693074"
  }),
  new Geo({
    IataCode: "RBA",
    Location: "-6.859589, 33.98778"
  }),
  new Geo({
    IataCode: "TNG",
    Location: "-5.811081, 35.780221"
  }),
  new Geo({
    IataCode: "TTA",
    Location: "-11.0833, 28.45"
  }),
  new Geo({
    IataCode: "TTU",
    Location: "-5.369225, 35.576498"
  }),
  new Geo({
    IataCode: "OZG",
    Location: "-5.838056, 30.330556"
  }),
  new Geo({
    IataCode: "ANM",
    Location: "50.283333, -14.883333"
  }),
  new Geo({
    IataCode: "DIE",
    Location: "49.2925, -12.346111"
  }),
  new Geo({
    IataCode: "FTU",
    Location: "46.95, -25.03306"
  }),
  new Geo({
    IataCode: "MJN",
    Location: "46.30806, -15.7189"
  }),
  new Geo({
    IataCode: "MOQ",
    Location: "44.31639, -20.28306"
  }),
  new Geo({
    IataCode: "NOS",
    Location: "48.31639, -13.31667"
  }),
  new Geo({
    IataCode: "SMS",
    Location: "49.822097, -17.071882"
  }),
  new Geo({
    IataCode: "SVB",
    Location: "50.165634, -14.265049"
  }),
  new Geo({
    IataCode: "TLE",
    Location: "43.667908, -23.344147"
  }),
  new Geo({
    IataCode: "TMM",
    Location: "49.393333, -18.115833"
  }),
  new Geo({
    IataCode: "TNR",
    Location: "47.516667, -18.933333"
  }),
  new Geo({
    IataCode: "WMN",
    Location: "49.738884, -15.438127"
  }),
  new Geo({
    IataCode: "WMR",
    Location: "49.773611, -16.163889"
  }),
  new Geo({
    IataCode: "BKO",
    Location: "-8.001394, 12.652231"
  }),
  new Geo({
    IataCode: "NDB",
    Location: "-17.031111, 20.928333"
  }),
  new Geo({
    IataCode: "NKC",
    Location: "-15.951944, 18.091944"
  }),
  new Geo({
    IataCode: "OUZ",
    Location: "-12.466667, 22.683333"
  }),
  new Geo({
    IataCode: "MRU",
    Location: "57.676389, -20.4275"
  }),
  new Geo({
    IataCode: "RRG",
    Location: "63.361972, -19.757972"
  }),
  new Geo({
    IataCode: "BLZ",
    Location: "35.005833, -15.786111"
  }),
  new Geo({
    IataCode: "CEH",
    Location: "33.8, -10.55"
  }),
  new Geo({
    IataCode: "CMK",
    Location: "35.05, -14.3"
  }),
  new Geo({
    IataCode: "LIX",
    Location: "34.733333, -12.083333"
  }),
  new Geo({
    IataCode: "LLW",
    Location: "33.783333, -13.983333"
  }),
  new Geo({
    IataCode: "MYZ",
    Location: "34.91639, -14.08306"
  }),
  new Geo({
    IataCode: "ZZU",
    Location: "34.01639, -11.44972"
  }),
  new Geo({
    IataCode: "APL",
    Location: "39.287222, -15.101667"
  }),
  new Geo({
    IataCode: "BEW",
    Location: "34.911944, -19.794444"
  }),
  new Geo({
    IataCode: "BZB",
    Location: "35.491667, -21.534722"
  }),
  new Geo({
    IataCode: "IBO",
    Location: "40.583333, -12.333333"
  }),
  new Geo({
    IataCode: "INH",
    Location: "35.38333, -23.865"
  }),
  new Geo({
    IataCode: "LFB",
    Location: "40.666667, -15.033333"
  }),
  new Geo({
    IataCode: "MNC",
    Location: "40.712222, -14.488056"
  }),
  new Geo({
    IataCode: "MPM",
    Location: "32.573097, -25.920028"
  }),
  new Geo({
    IataCode: "POL",
    Location: "40.53306, -12.98306"
  }),
  new Geo({
    IataCode: "TET",
    Location: "33.611527, -16.1625"
  }),
  new Geo({
    IataCode: "UEL",
    Location: "36.88833, -17.87861"
  }),
  new Geo({
    IataCode: "VNX",
    Location: "35.316667, -22.016667"
  }),
  new Geo({
    IataCode: "VPY",
    Location: "33.483333, -19.133333"
  }),
  new Geo({
    IataCode: "VXC",
    Location: "35.25, -13.283333"
  }),
  new Geo({
    IataCode: "LUD",
    Location: "15.243889, -26.686389"
  }),
  new Geo({
    IataCode: "MPA",
    Location: "24.266667, -17.5"
  }),
  new Geo({
    IataCode: "NDU",
    Location: "19.716667, -17.95"
  }),
  new Geo({
    IataCode: "OMD",
    Location: "16.42868, -28.548489"
  }),
  new Geo({
    IataCode: "OND",
    Location: "16, -17.916667"
  }),
  new Geo({
    IataCode: "WDH",
    Location: "17.083611, -22.57"
  }),
  new Geo({
    IataCode: "WVB",
    Location: "14.51088, -22.945273"
  }),
  new Geo({
    IataCode: "AJY",
    Location: "8, 17"
  }),
  new Geo({
    IataCode: "NIM",
    Location: "2.170833, 13.483333"
  }),
  new Geo({
    IataCode: "ZND",
    Location: "8.983056, 13.779444"
  }),
  new Geo({
    IataCode: "ABV",
    Location: "7.483333, 9.066667"
  }),
  new Geo({
    IataCode: "AKR",
    Location: "5.083333, 7.25"
  }),
  new Geo({
    IataCode: "ABB",
    Location: "6.729126, 6.195168"
  }),
  new Geo({
    IataCode: "BCU",
    Location: "9.8, 10.366667"
  }),
  new Geo({
    IataCode: "BNI",
    Location: "5.633583, 6.341232"
  }),
  new Geo({
    IataCode: "CBQ",
    Location: "8.348056, 4.975556"
  }),
  new Geo({
    IataCode: "ENU",
    Location: "7.561944, 6.474167"
  }),
  new Geo({
    IataCode: "GMO",
    Location: "11.166667, 10.283333"
  }),
  new Geo({
    IataCode: "IBA",
    Location: "3.89639, 7.38778"
  }),
  new Geo({
    IataCode: "ILR",
    Location: "4.533333, 8.5"
  }),
  new Geo({
    IataCode: "JOS",
    Location: "8.893056, 9.868056"
  }),
  new Geo({
    IataCode: "KAD",
    Location: "7.440278, 10.595833"
  }),
  new Geo({
    IataCode: "KAN",
    Location: "8.525, 12.049167"
  }),
  new Geo({
    IataCode: "DKA",
    Location: "7.606163, 12.99302"
  }),
  new Geo({
    IataCode: "LOS",
    Location: "3.395833, 6.453056"
  }),
  new Geo({
    IataCode: "MIU",
    Location: "13.15, 11.833333"
  }),
  new Geo({
    IataCode: "MXJ",
    Location: "6.533333, 9.616667"
  }),
  new Geo({
    IataCode: "QOW",
    Location: "7.03, 5.48"
  }),
  new Geo({
    IataCode: "PHC",
    Location: "7, 4.75"
  }),
  new Geo({
    IataCode: "QRW",
    Location: "5.68333, 5.5"
  }),
  new Geo({
    IataCode: "SKO",
    Location: "5.242222, 13.006389"
  }),
  new Geo({
    IataCode: "QUO",
    Location: "7.923889, 5.023231"
  }),
  new Geo({
    IataCode: "YOL",
    Location: "12.430833, 9.259722"
  }),
  new Geo({
    IataCode: "RUN",
    Location: "55.456581, -20.882551"
  }),
  new Geo({
    IataCode: "ZSE",
    Location: "55.474091, -21.318162"
  }),
  new Geo({
    IataCode: "KGL",
    Location: "30, -2"
  }),
  new Geo({
    IataCode: "KME",
    Location: "28.907778, -2.462222"
  }),
  new Geo({
    IataCode: "PRI",
    Location: "55.691389, -4.319167"
  }),
  new Geo({
    IataCode: "SEZ",
    Location: "55.5225, -4.672222"
  }),
  new Geo({
    IataCode: "EBD",
    Location: "30.248611, 13.159167"
  }),
  new Geo({
    IataCode: "EGN",
    Location: "22.469444, 13.4875"
  }),
  new Geo({
    IataCode: "ELF",
    Location: "25.316667, 13.616667"
  }),
  new Geo({
    IataCode: "KRT",
    Location: "32.556944, 15.584722"
  }),
  new Geo({
    IataCode: "KSL",
    Location: "36.342222, 15.390278"
  }),
  new Geo({
    IataCode: "PZU",
    Location: "37.21639, 19.58306"
  }),
  new Geo({
    IataCode: "RSS",
    Location: "34.4, 11.783333"
  }),
  new Geo({
    IataCode: "UYL",
    Location: "24.88306, 12.05"
  }),
  new Geo({
    IataCode: "ASI",
    Location: "-14.411667, -7.928611"
  }),
  new Geo({
    IataCode: "HLE",
    Location: "-5.666667, -15.933333"
  }),
  new Geo({
    IataCode: "FNA",
    Location: "-13.197314, 8.498425"
  }),
  new Geo({
    IataCode: "CSK",
    Location: "-16.741667, 12.388889"
  }),
  new Geo({
    IataCode: "DKR",
    Location: "-17.490556, 14.740833"
  }),
  new Geo({
    IataCode: "KDA",
    Location: "-14.96639, 12.88306"
  }),
  new Geo({
    IataCode: "ZIG",
    Location: "-16.275, 12.556111"
  }),
  new Geo({
    IataCode: "AAD",
    Location: "46.634539, 6.13716"
  }),
  new Geo({
    IataCode: "BSA",
    Location: "49.15, 11.283333"
  }),
  new Geo({
    IataCode: "GGR",
    Location: "48.483333, 8.4"
  }),
  new Geo({
    IataCode: "GLK",
    Location: "47.433333, 6.766667"
  }),
  new Geo({
    IataCode: "GUO",
    Location: "45.882839, 5.307248"
  }),
  new Geo({
    IataCode: "HGA",
    Location: "44.088611, 9.518056"
  }),
  new Geo({
    IataCode: "KMU",
    Location: "42.459167, -0.377222"
  }),
  new Geo({
    IataCode: "MGQ",
    Location: "45.35, 2.03306"
  }),
  new Geo({
    IataCode: "JUB",
    Location: "31.593056, 4.872222"
  }),
  new Geo({
    IataCode: "WUU",
    Location: "27.979444, 7.725556"
  }),
  new Geo({
    IataCode: "PCP",
    Location: "7.411667, 1.662778"
  }),
  new Geo({
    IataCode: "TMS",
    Location: "6.727753, 0.339888"
  }),
  new Geo({
    IataCode: "MTS",
    Location: "31.307778, -26.528611"
  }),
  new Geo({
    IataCode: "NDJ",
    Location: "15.036111, 12.135"
  }),
  new Geo({
    IataCode: "LFW",
    Location: "1.254167, 6.1625"
  }),
  new Geo({
    IataCode: "DJE",
    Location: "10.48, 33.5"
  }),
  new Geo({
    IataCode: "GAE",
    Location: "10, 33.8306"
  }),
  new Geo({
    IataCode: "MIR",
    Location: "10.83333, 35.78333"
  }),
  new Geo({
    IataCode: "NBE",
    Location: "10.380833, 36.135278"
  }),
  new Geo({
    IataCode: "SFA",
    Location: "10.6833, 34.7167"
  }),
  new Geo({
    IataCode: "TBJ",
    Location: "8.758056, 36.954444"
  }),
  new Geo({
    IataCode: "TOE",
    Location: "8.138466, 33.921996"
  }),
  new Geo({
    IataCode: "TUN",
    Location: "10.175743, 36.811484"
  }),
  new Geo({
    IataCode: "ARK",
    Location: "36.683333, -3.366667"
  }),
  new Geo({
    IataCode: "BKZ",
    Location: "31.81639, -1.33306"
  }),
  new Geo({
    IataCode: "DAR",
    Location: "39.201944, -6.875278"
  }),
  new Geo({
    IataCode: "DOD",
    Location: "35.749433, -6.170358"
  }),
  new Geo({
    IataCode: "GTZ",
    Location: "34.849319, -2.266712"
  }),
  new Geo({
    IataCode: "IRI",
    Location: "35.69, -7.77"
  }),
  new Geo({
    IataCode: "JRO",
    Location: "37.15, -3.33333"
  }),
  new Geo({
    IataCode: "KIY",
    Location: "39.511667, -8.911944"
  }),
  new Geo({
    IataCode: "LKY",
    Location: "36.416667, -3.5"
  }),
  new Geo({
    IataCode: "MBI",
    Location: "33.461944, -8.914722"
  }),
  new Geo({
    IataCode: "MFA",
    Location: "39.665, -7.913889"
  }),
  new Geo({
    IataCode: "MUZ",
    Location: "33.79972, -1.5"
  }),
  new Geo({
    IataCode: "MWZ",
    Location: "32.931933, -2.444131"
  }),
  new Geo({
    IataCode: "MYW",
    Location: "40.182011, -10.336117"
  }),
  new Geo({
    IataCode: "PMA",
    Location: "39.801944, -5.242222"
  }),
  new Geo({
    IataCode: "SEU",
    Location: "34.816667, -2.383333"
  }),
  new Geo({
    IataCode: "SGX",
    Location: "35.58306, -10.68306"
  }),
  new Geo({
    IataCode: "TBO",
    Location: "32.828611, -5.073611"
  }),
  new Geo({
    IataCode: "TGT",
    Location: "39.066667, -5.1"
  }),
  new Geo({
    IataCode: "TKQ",
    Location: "29.67, -4.885"
  }),
  new Geo({
    IataCode: "ZNZ",
    Location: "39.224556, -6.218753"
  }),
  new Geo({
    IataCode: "EBB",
    Location: "32.438056, 0.0425"
  }),
  new Geo({
    IataCode: "JIN",
    Location: "33.22094, 0.458331"
  }),
  new Geo({
    IataCode: "KHX",
    Location: "29.700278, -0.746111"
  }),
  new Geo({
    IataCode: "KSE",
    Location: "30.083333, 0.183333"
  }),
  new Geo({
    IataCode: "PAF",
    Location: "31.55, 2.3"
  }),
  new Geo({
    IataCode: "RUA",
    Location: "30.91639, 3.04972"
  }),
  new Geo({
    IataCode: "ULU",
    Location: "32.3, 2.783333"
  }),
  new Geo({
    IataCode: "DZA",
    Location: "45.283333, -12.783333"
  }),
  new Geo({
    IataCode: "ASS",
    Location: "31.5069, -24.736568"
  }),
  new Geo({
    IataCode: "BFN",
    Location: "26.216667, -29.1"
  }),
  new Geo({
    IataCode: "CPT",
    Location: "18.423889, -33.925278"
  }),
  new Geo({
    IataCode: "DUR",
    Location: "31.029166, -29.885278"
  }),
  new Geo({
    IataCode: "ELS",
    Location: "28, -33"
  }),
  new Geo({
    IataCode: "GRJ",
    Location: "22.45, -33.966667"
  }),
  new Geo({
    IataCode: "HDS",
    Location: "31.03306, -24.36667"
  }),
  new Geo({
    IataCode: "JNB",
    Location: "28.045556, -26.204444"
  }),
  new Geo({
    IataCode: "KIM",
    Location: "24.766389, -28.805833"
  }),
  new Geo({
    IataCode: "LDZ",
    Location: "31.5, -24.8"
  }),
  new Geo({
    IataCode: "MBD",
    Location: "25.633333, -25.85"
  }),
  new Geo({
    IataCode: "MGH",
    Location: "30.343333, -30.856944"
  }),
  new Geo({
    IataCode: "MQP",
    Location: "31.12662, -25.3444"
  }),
  new Geo({
    IataCode: "NGL",
    Location: "21.55, 2.45"
  }),
  new Geo({
    IataCode: "NLP",
    Location: "30.97033, -25.47448"
  }),
  new Geo({
    IataCode: "NTY",
    Location: "27.916667, -26.033333"
  }),
  new Geo({
    IataCode: "PBZ",
    Location: "23.329167, -34.0875"
  }),
  new Geo({
    IataCode: "PHW",
    Location: "31.155094, -23.936078"
  }),
  new Geo({
    IataCode: "PLZ",
    Location: "25.6, -33.958056"
  }),
  new Geo({
    IataCode: "PRY",
    Location: "28.186944, -25.753333"
  }),
  new Geo({
    IataCode: "PTG",
    Location: "29.46639, -23.89972"
  }),
  new Geo({
    IataCode: "PZB",
    Location: "30.4, -29.65"
  }),
  new Geo({
    IataCode: "PZL",
    Location: "32.3, -27.866667"
  }),
  new Geo({
    IataCode: "RCB",
    Location: "32.093383, -28.740181"
  }),
  new Geo({
    IataCode: "SIS",
    Location: "22.966667, -27.766667"
  }),
  new Geo({
    IataCode: "SZK",
    Location: "31.5857, -24.98953"
  }),
  new Geo({
    IataCode: "ULD",
    Location: "31.416389, -28.320556"
  }),
  new Geo({
    IataCode: "ULX",
    Location: "31.35, -24.783333"
  }),
  new Geo({
    IataCode: "UTN",
    Location: "21.253333, -28.400556"
  }),
  new Geo({
    IataCode: "UTT",
    Location: "28.783333, -31.583333"
  }),
  new Geo({
    IataCode: "KAA",
    Location: "31.13306, -10.21667"
  }),
  new Geo({
    IataCode: "KLB",
    Location: "22.644444, -14.975833"
  }),
  new Geo({
    IataCode: "LUN",
    Location: "28.283333, -15.416667"
  }),
  new Geo({
    IataCode: "LVI",
    Location: "25.818611, -17.818889"
  }),
  new Geo({
    IataCode: "MFU",
    Location: "31.936389, -13.258611"
  }),
  new Geo({
    IataCode: "NLA",
    Location: "28.665556, -12.995556"
  }),
  new Geo({
    IataCode: "SLI",
    Location: "26.381607, -12.174938"
  }),
  new Geo({
    IataCode: "RYL",
    Location: "29.566642, -15.312191"
  }),
  new Geo({
    IataCode: "BUQ",
    Location: "28.58, -20.17"
  }),
  new Geo({
    IataCode: "HRE",
    Location: "31.029722, -17.863889"
  }),
  new Geo({
    IataCode: "VFA",
    Location: "25.856667, -17.924444"
  }),
  new Geo({
    IataCode: "BWN",
    Location: "114.927778, 4.925"
  }),
  new Geo({
    IataCode: "CCK",
    Location: "96.828333, -12.186944"
  }),
  new Geo({
    IataCode: "XCH",
    Location: "105.666667, -10.5"
  }),
  new Geo({
    IataCode: "HKG",
    Location: "114.058333, 22.317361"
  }),
  new Geo({
    IataCode: "ABU",
    Location: "124.883333, -9.133333"
  }),
  new Geo({
    IataCode: "AEG",
    Location: "99.416667, 1.399722"
  }),
  new Geo({
    IataCode: "AMQ",
    Location: "128.1814, -3.69543"
  }),
  new Geo({
    IataCode: "ARD",
    Location: "124.533333, -8.683333"
  }),
  new Geo({
    IataCode: "BDJ",
    Location: "114.583333, -3.333333"
  }),
  new Geo({
    IataCode: "BDO",
    Location: "107.576111, -6.901944"
  }),
  new Geo({
    IataCode: "BEJ",
    Location: "117.633362, 2.200844"
  }),
  new Geo({
    IataCode: "BIK",
    Location: "136.11, -1.191944"
  }),
  new Geo({
    IataCode: "BJW",
    Location: "120.983333, -8.766667"
  }),
  new Geo({
    IataCode: "BKS",
    Location: "102.3, -3.766667"
  }),
  new Geo({
    IataCode: "BMU",
    Location: "118.683333, -8.533333"
  }),
  new Geo({
    IataCode: "BPN",
    Location: "116.893889, -1.267222"
  }),
  new Geo({
    IataCode: "BTH",
    Location: "104.030571, 1.082776"
  }),
  new Geo({
    IataCode: "BTJ",
    Location: "95.42, 5.516944"
  }),
  new Geo({
    IataCode: "BTW",
    Location: "116, -3"
  }),
  new Geo({
    IataCode: "BUW",
    Location: "122.61639, -5.46667"
  }),
  new Geo({
    IataCode: "BWX",
    Location: "114.367113, -8.223802"
  }),
  new Geo({
    IataCode: "BXB",
    Location: "133.416667, -2.55"
  }),
  new Geo({
    IataCode: "CBN",
    Location: "108.539444, -6.755833"
  }),
  new Geo({
    IataCode: "JKT",
    Location: "106.768194, -6.192083"
  }),
  new Geo({
    IataCode: "CXP",
    Location: "109.01639, -7.73306"
  }),
  new Geo({
    IataCode: "DEX",
    Location: "139.536543, -4.891624"
  }),
  new Geo({
    IataCode: "DJB",
    Location: "103.641667, -1.634722"
  }),
  new Geo({
    IataCode: "DJJ",
    Location: "140.717, -2.533"
  }),
  new Geo({
    IataCode: "DOB",
    Location: "134.216667, -5.766667"
  }),
  new Geo({
    IataCode: "DPS",
    Location: "115.216667, -8.65"
  }),
  new Geo({
    IataCode: "DTB",
    Location: "98.972961, 2.209664"
  }),
  new Geo({
    IataCode: "DTD",
    Location: "116.483333, 0.716667"
  }),
  new Geo({
    IataCode: "DUM",
    Location: "101.433333, 1.609167"
  }),
  new Geo({
    IataCode: "ENE",
    Location: "121.661944, -8.848889"
  }),
  new Geo({
    IataCode: "FKQ",
    Location: "132.25, -2.88306"
  }),
  new Geo({
    IataCode: "FLZ",
    Location: "98.783654, 1.737085"
  }),
  new Geo({
    IataCode: "GLX",
    Location: "127.83306, 1.81667"
  }),
  new Geo({
    IataCode: "GNS",
    Location: "97.5, 1.25"
  }),
  new Geo({
    IataCode: "GTO",
    Location: "122.916667, 0.65"
  }),
  new Geo({
    IataCode: "JBB",
    Location: "113.706592, -8.178849"
  }),
  new Geo({
    IataCode: "JOG",
    Location: "110.431872, -7.786606"
  }),
  new Geo({
    IataCode: "KAZ",
    Location: "127.866667, 1.166667"
  }),
  new Geo({
    IataCode: "KBU",
    Location: "116.21667, -3.23333"
  }),
  new Geo({
    IataCode: "KDI",
    Location: "122.413056, -4.084167"
  }),
  new Geo({
    IataCode: "KJT",
    Location: "108.22, -6.835"
  }),
  new Geo({
    IataCode: "KNG",
    Location: "133.75, -3.65"
  }),
  new Geo({
    IataCode: "KOE",
    Location: "123.58333, -10.16667"
  }),
  new Geo({
    IataCode: "KRC",
    Location: "101.25, -1.716667"
  }),
  new Geo({
    IataCode: "KSR",
    Location: "120.437859, -6.179272"
  }),
  new Geo({
    IataCode: "KTG",
    Location: "109.983333, -1.833333"
  }),
  new Geo({
    IataCode: "LAH",
    Location: "127.483333, -0.616667"
  }),
  new Geo({
    IataCode: "LBJ",
    Location: "119.889167, -8.486111"
  }),
  new Geo({
    IataCode: "LKA",
    Location: "122.96639, -8.26667"
  }),
  new Geo({
    IataCode: "LLO",
    Location: "120.200818, -2.998187"
  }),
  new Geo({
    IataCode: "LOP",
    Location: "116.27036, -8.70536"
  }),
  new Geo({
    IataCode: "LPU",
    Location: "114.972778, 1.709167"
  }),
  new Geo({
    IataCode: "LSW",
    Location: "97.14, 5.184"
  }),
  new Geo({
    IataCode: "LUV",
    Location: "132.716667, -5.666667"
  }),
  new Geo({
    IataCode: "LUW",
    Location: "122.78306, -0.9"
  }),
  new Geo({
    IataCode: "LWE",
    Location: "123.366667, -8.5"
  }),
  new Geo({
    IataCode: "MDC",
    Location: "124.925556, 1.548611"
  }),
  new Geo({
    IataCode: "MEQ",
    Location: "96.116667, 4.15"
  }),
  new Geo({
    IataCode: "MES",
    Location: "98.672778, 3.561111"
  }),
  new Geo({
    IataCode: "YYV",
    Location: "116.585955, 3.664908"
  }),
  new Geo({
    IataCode: "MJU",
    Location: "118.833333, -2.5"
  }),
  new Geo({
    IataCode: "MKQ",
    Location: "140.416944, -8.521111"
  }),
  new Geo({
    IataCode: "MKW",
    Location: "134.05, -0.88306"
  }),
  new Geo({
    IataCode: "MLG",
    Location: "112.6304, -7.9797"
  }),
  new Geo({
    IataCode: "MNA",
    Location: "126.7, 4.05"
  }),
  new Geo({
    IataCode: "MOF",
    Location: "122.25, -8.63306"
  }),
  new Geo({
    IataCode: "MPC",
    Location: "101.1, -2.55"
  }),
  new Geo({
    IataCode: "MWK",
    Location: "106.266667, 3.3"
  }),
  new Geo({
    IataCode: "MXB",
    Location: "120.333333, -2.333333"
  }),
  new Geo({
    IataCode: "NAH",
    Location: "125.5326, 3.6922"
  }),
  new Geo({
    IataCode: "NAM",
    Location: "127.10032, -3.25712"
  }),
  new Geo({
    IataCode: "NBX",
    Location: "135.433333, -3.366667"
  }),
  new Geo({
    IataCode: "NNX",
    Location: "117.65, 4.15"
  }),
  new Geo({
    IataCode: "NTX",
    Location: "108.383333, 3.95"
  }),
  new Geo({
    IataCode: "OKL",
    Location: "140.666667, -5.1"
  }),
  new Geo({
    IataCode: "OTI",
    Location: "128.5, 2.833333"
  }),
  new Geo({
    IataCode: "PDG",
    Location: "100.35427, -0.94924"
  }),
  new Geo({
    IataCode: "PGK",
    Location: "106.138056, -2.1625"
  }),
  new Geo({
    IataCode: "PKN",
    Location: "111.61667, -2.68333"
  }),
  new Geo({
    IataCode: "PKU",
    Location: "101.45, 0.466667"
  }),
  new Geo({
    IataCode: "PKY",
    Location: "113.944167, -2.226667"
  }),
  new Geo({
    IataCode: "PLM",
    Location: "104.699444, -2.9"
  }),
  new Geo({
    IataCode: "PLW",
    Location: "119.9, -0.916667"
  }),
  new Geo({
    IataCode: "PNK",
    Location: "109.4, -0.15"
  }),
  new Geo({
    IataCode: "PSJ",
    Location: "120.73306, -1.38306"
  }),
  new Geo({
    IataCode: "PSU",
    Location: "112.933333, 0.833333"
  }),
  new Geo({
    IataCode: "PUM",
    Location: "121.616667, -4.183333"
  }),
  new Geo({
    IataCode: "PXA",
    Location: "103.540248, -3.78695"
  }),
  new Geo({
    IataCode: "RAQ",
    Location: "122.7209, -4.838"
  }),
  new Geo({
    IataCode: "RGT",
    Location: "102.55, -0.4"
  }),
  new Geo({
    IataCode: "RJM",
    Location: "130.818556, -0.423194"
  }),
  new Geo({
    IataCode: "RKO",
    Location: "116, -2.083333"
  }),
  new Geo({
    IataCode: "RTG",
    Location: "120.4775, -8.595556"
  }),
  new Geo({
    IataCode: "RTI",
    Location: "122.966667, -10.883333"
  }),
  new Geo({
    IataCode: "SAU",
    Location: "121.9, -10.483333"
  }),
  new Geo({
    IataCode: "SBG",
    Location: "95.333333, 5.55"
  }),
  new Geo({
    IataCode: "SGQ",
    Location: "117.333333, 0.5"
  }),
  new Geo({
    IataCode: "SMQ",
    Location: "113.05, -3.083333"
  }),
  new Geo({
    IataCode: "SOC",
    Location: "110.79889, -7.70528"
  }),
  new Geo({
    IataCode: "SOQ",
    Location: "131.121389, -0.925556"
  }),
  new Geo({
    IataCode: "SQG",
    Location: "111.583333, 0.083333"
  }),
  new Geo({
    IataCode: "SRG",
    Location: "110.377222, -6.976389"
  }),
  new Geo({
    IataCode: "SRI",
    Location: "117.15, -0.5"
  }),
  new Geo({
    IataCode: "SUB",
    Location: "112.720833, -7.218056"
  }),
  new Geo({
    IataCode: "SUP",
    Location: "113.933333, -7.066667"
  }),
  new Geo({
    IataCode: "SWQ",
    Location: "117.416667, -8.5"
  }),
  new Geo({
    IataCode: "SXK",
    Location: "131.316667, -7.966667"
  }),
  new Geo({
    IataCode: "TIM",
    Location: "136.887222, -4.528056"
  }),
  new Geo({
    IataCode: "TJG",
    Location: "103.966667, -1.4"
  }),
  new Geo({
    IataCode: "TJQ",
    Location: "107.65, -2.75"
  }),
  new Geo({
    IataCode: "TJS",
    Location: "117.33306, 2.85"
  }),
  new Geo({
    IataCode: "TKG",
    Location: "105.25803, -5.42544"
  }),
  new Geo({
    IataCode: "TLI",
    Location: "120.79972, 1.01667"
  }),
  new Geo({
    IataCode: "TMC",
    Location: "119.183056, -9.340278"
  }),
  new Geo({
    IataCode: "TMH",
    Location: "140.3, -6.09972"
  }),
  new Geo({
    IataCode: "TNJ",
    Location: "104.45, 0.86667"
  }),
  new Geo({
    IataCode: "TRK",
    Location: "117.565278, 3.327222"
  }),
  new Geo({
    IataCode: "TSY",
    Location: "108.2, -7.3"
  }),
  new Geo({
    IataCode: "TTE",
    Location: "127.38306, 0.78306"
  }),
  new Geo({
    IataCode: "TTR",
    Location: "119.916667, -3.416667"
  }),
  new Geo({
    IataCode: "TXE",
    Location: "96.842384, 4.633641"
  }),
  new Geo({
    IataCode: "UOL",
    Location: "121.433333, 1.166667"
  }),
  new Geo({
    IataCode: "UPG",
    Location: "119.4221, -5.14"
  }),
  new Geo({
    IataCode: "VPM",
    Location: "121.585801, -0.867983"
  }),
  new Geo({
    IataCode: "WGP",
    Location: "120.3, -9.666667"
  }),
  new Geo({
    IataCode: "WMX",
    Location: "138.94972, -4.06667"
  }),
  new Geo({
    IataCode: "WNI",
    Location: "123.603047, -5.312005"
  }),
  new Geo({
    IataCode: "ZRI",
    Location: "136.23666, -1.87801"
  }),
  new Geo({
    IataCode: "KOS",
    Location: "103.5, 10.633333"
  }),
  new Geo({
    IataCode: "PNH",
    Location: "104.847778, 11.546111"
  }),
  new Geo({
    IataCode: "REP",
    Location: "103.816667, 13.4"
  }),
  new Geo({
    IataCode: "HOE",
    Location: "103.75, 20.5"
  }),
  new Geo({
    IataCode: "LPQ",
    Location: "102.13306, 19.88306"
  }),
  new Geo({
    IataCode: "LXG",
    Location: "101.4, 20.95"
  }),
  new Geo({
    IataCode: "NEU",
    Location: "104.066667, 20.416667"
  }),
  new Geo({
    IataCode: "ODY",
    Location: "104.166667, 20.583333"
  }),
  new Geo({
    IataCode: "PCQ",
    Location: "102.1, 21.683333"
  }),
  new Geo({
    IataCode: "PKZ",
    Location: "105.802116, 15.114967"
  }),
  new Geo({
    IataCode: "VTE",
    Location: "102.6, 17.966667"
  }),
  new Geo({
    IataCode: "XKH",
    Location: "103.373623, 19.328315"
  }),
  new Geo({
    IataCode: "ZVK",
    Location: "104.7625, 16.553611"
  }),
  new Geo({
    IataCode: "AKY",
    Location: "92.898502, 20.146851"
  }),
  new Geo({
    IataCode: "BMO",
    Location: "97.251667, 24.273889"
  }),
  new Geo({
    IataCode: "BSX",
    Location: "94.783333, 16.8"
  }),
  new Geo({
    IataCode: "HEH",
    Location: "96.819763, 20.724328"
  }),
  new Geo({
    IataCode: "HOX",
    Location: "94.916667, 24.866667"
  }),
  new Geo({
    IataCode: "KAW",
    Location: "98.516667, 10.05"
  }),
  new Geo({
    IataCode: "KET",
    Location: "99.61639, 21.3"
  }),
  new Geo({
    IataCode: "KHM",
    Location: "97.008333, 23"
  }),
  new Geo({
    IataCode: "KMV",
    Location: "94.05, 23.183333"
  }),
  new Geo({
    IataCode: "KYP",
    Location: "93.534444, 19.426667"
  }),
  new Geo({
    IataCode: "LIW",
    Location: "97.216944, 19.688611"
  }),
  new Geo({
    IataCode: "LSH",
    Location: "97.75, 22.966667"
  }),
  new Geo({
    IataCode: "MDL",
    Location: "96.091389, 21.939167"
  }),
  new Geo({
    IataCode: "MGU",
    Location: "93.738889, 18.958333"
  }),
  new Geo({
    IataCode: "MGZ",
    Location: "98.620278, 12.440833"
  }),
  new Geo({
    IataCode: "MNU",
    Location: "97.669444, 16.441667"
  }),
  new Geo({
    IataCode: "MOG",
    Location: "99.256667, 20.516667"
  }),
  new Geo({
    IataCode: "MYT",
    Location: "97.4, 25.36667"
  }),
  new Geo({
    IataCode: "NYT",
    Location: "96.1829, 19.77117"
  }),
  new Geo({
    IataCode: "NYU",
    Location: "94.934722, 21.181389"
  }),
  new Geo({
    IataCode: "NYW",
    Location: "95.141667, 22.108333"
  }),
  new Geo({
    IataCode: "PBU",
    Location: "97.41639, 27.33306"
  }),
  new Geo({
    IataCode: "RGN",
    Location: "96.15406, 16.802569"
  }),
  new Geo({
    IataCode: "SNW",
    Location: "94.299444, 18.460556"
  }),
  new Geo({
    IataCode: "THL",
    Location: "99.95, 20.45"
  }),
  new Geo({
    IataCode: "TVY",
    Location: "98.2, 14.1"
  }),
  new Geo({
    IataCode: "VBA",
    Location: "94.033785, 19.767471"
  }),
  new Geo({
    IataCode: "VBP",
    Location: "98.75, 11.25"
  }),
  new Geo({
    IataCode: "MFM",
    Location: "113.583333, 22.233333"
  }),
  new Geo({
    IataCode: "AOR",
    Location: "100.403889, 6.191111"
  }),
  new Geo({
    IataCode: "BBN",
    Location: "115.466667, 3.683333"
  }),
  new Geo({
    IataCode: "BKI",
    Location: "116.05, 5.940833"
  }),
  new Geo({
    IataCode: "BKM",
    Location: "115.616667, 3.966667"
  }),
  new Geo({
    IataCode: "BTU",
    Location: "113.043056, 3.175"
  }),
  new Geo({
    IataCode: "IPH",
    Location: "101.095833, 4.566944"
  }),
  new Geo({
    IataCode: "JHB",
    Location: "103.733333, 1.483333"
  }),
  new Geo({
    IataCode: "KBR",
    Location: "102.294167, 6.166389"
  }),
  new Geo({
    IataCode: "KCH",
    Location: "110.340278, 1.484722"
  }),
  new Geo({
    IataCode: "KTE",
    Location: "103.426389, 4.537222"
  }),
  new Geo({
    IataCode: "KUA",
    Location: "103.21075, 3.775444"
  }),
  new Geo({
    IataCode: "KUD",
    Location: "116.727676, 6.832352"
  }),
  new Geo({
    IataCode: "KUL",
    Location: "101.688, 3.1357"
  }),
  new Geo({
    IataCode: "LBP",
    Location: "115.4, 3.2"
  }),
  new Geo({
    IataCode: "LBU",
    Location: "115.247778, 5.300556"
  }),
  new Geo({
    IataCode: "LDU",
    Location: "118.323889, 5.032222"
  }),
  new Geo({
    IataCode: "LGK",
    Location: "99.854393, 6.326559"
  }),
  new Geo({
    IataCode: "LGL",
    Location: "114.25, 4.183333"
  }),
  new Geo({
    IataCode: "LKH",
    Location: "114.78333, 3.31667"
  }),
  new Geo({
    IataCode: "LMN",
    Location: "115, 4.666667"
  }),
  new Geo({
    IataCode: "LWY",
    Location: "115.416667, 4.916667"
  }),
  new Geo({
    IataCode: "MKM",
    Location: "112.079722, 2.906944"
  }),
  new Geo({
    IataCode: "MKZ",
    Location: "102.244005, 2.199729"
  }),
  new Geo({
    IataCode: "MUR",
    Location: "114.331389, 4.178056"
  }),
  new Geo({
    IataCode: "MYY",
    Location: "114.000833, 4.455278"
  }),
  new Geo({
    IataCode: "MZV",
    Location: "114.8, 4.033333"
  }),
  new Geo({
    IataCode: "ODN",
    Location: "115.066667, 4.033333"
  }),
  new Geo({
    IataCode: "PEN",
    Location: "100.2725, 5.289722"
  }),
  new Geo({
    IataCode: "SBW",
    Location: "111.816667, 2.3"
  }),
  new Geo({
    IataCode: "SDK",
    Location: "118.066667, 5.9"
  }),
  new Geo({
    IataCode: "TGC",
    Location: "111.198077, 2.177815"
  }),
  new Geo({
    IataCode: "TGG",
    Location: "103.103333, 5.3825"
  }),
  new Geo({
    IataCode: "TWU",
    Location: "117.885833, 4.261667"
  }),
  new Geo({
    IataCode: "BCD",
    Location: "122.929167, 10.644444"
  }),
  new Geo({
    IataCode: "BSO",
    Location: "121.977778, 20.453056"
  }),
  new Geo({
    IataCode: "BXU",
    Location: "125.483889, 8.951389"
  }),
  new Geo({
    IataCode: "CBO",
    Location: "124.21639, 7.16667"
  }),
  new Geo({
    IataCode: "CEB",
    Location: "123.906667, 10.331667"
  }),
  new Geo({
    IataCode: "CGM",
    Location: "121.916667, 18.9"
  }),
  new Geo({
    IataCode: "CGY",
    Location: "124.610556, 8.416111"
  }),
  new Geo({
    IataCode: "CRK",
    Location: "120.583333, 15.15"
  }),
  new Geo({
    IataCode: "CRM",
    Location: "124.6377, 12.4989"
  }),
  new Geo({
    IataCode: "CYP",
    Location: "124.543056, 12.075833"
  }),
  new Geo({
    IataCode: "CYU",
    Location: "121, 10.883333"
  }),
  new Geo({
    IataCode: "CYZ",
    Location: "121.755833, 16.93"
  }),
  new Geo({
    IataCode: "DGT",
    Location: "123.3, 9.283333"
  }),
  new Geo({
    IataCode: "DPL",
    Location: "123.35, 8.6"
  }),
  new Geo({
    IataCode: "DVO",
    Location: "125.649444, 7.131667"
  }),
  new Geo({
    IataCode: "ENI",
    Location: "119.460526, 11.214438"
  }),
  new Geo({
    IataCode: "GES",
    Location: "125.234722, 6.109444"
  }),
  new Geo({
    IataCode: "ICO",
    Location: "123.266667, 11.433333"
  }),
  new Geo({
    IataCode: "ILO",
    Location: "122.543611, 10.714722"
  }),
  new Geo({
    IataCode: "JOL",
    Location: "121.008889, 6.055278"
  }),
  new Geo({
    IataCode: "KLO",
    Location: "122.377778, 11.681111"
  }),
  new Geo({
    IataCode: "LAO",
    Location: "120.533333, 18.183333"
  }),
  new Geo({
    IataCode: "LGP",
    Location: "123.730278, 13.156944"
  }),
  new Geo({
    IataCode: "KCV",
    Location: "122.23, 17.4333"
  }),
  new Geo({
    IataCode: "MBT",
    Location: "123.61667, 12.36667"
  }),
  new Geo({
    IataCode: "MNL",
    Location: "120.984166, 14.555"
  }),
  new Geo({
    IataCode: "MPH",
    Location: "121.952222, 11.925833"
  }),
  new Geo({
    IataCode: "MRQ",
    Location: "121.823611, 13.363056"
  }),
  new Geo({
    IataCode: "OMC",
    Location: "124.566667, 11.05"
  }),
  new Geo({
    IataCode: "OZC",
    Location: "123.841389, 8.180556"
  }),
  new Geo({
    IataCode: "PAG",
    Location: "123.4575, 7.826667"
  }),
  new Geo({
    IataCode: "PPS",
    Location: "118.753889, 9.742222"
  }),
  new Geo({
    IataCode: "ZAM",
    Location: "122.065, 6.92"
  }),
  new Geo({
    IataCode: "RXS",
    Location: "122.751111, 11.6"
  }),
  new Geo({
    IataCode: "SFS",
    Location: "120.233333, 14.9"
  }),
  new Geo({
    IataCode: "SGS",
    Location: "119.78528, 5.0725"
  }),
  new Geo({
    IataCode: "IAO",
    Location: "126.046486, 9.84676"
  }),
  new Geo({
    IataCode: "SJI",
    Location: "121.062469, 12.364149"
  }),
  new Geo({
    IataCode: "SUG",
    Location: "125.479167, 9.758889"
  }),
  new Geo({
    IataCode: "SWL",
    Location: "119.273621, 10.524262"
  }),
  new Geo({
    IataCode: "TAC",
    Location: "125.025, 11.231389"
  }),
  new Geo({
    IataCode: "TAG",
    Location: "123.85, 9.65"
  }),
  new Geo({
    IataCode: "TBH",
    Location: "122, 12.366667"
  }),
  new Geo({
    IataCode: "TDG",
    Location: "126.2, 9.083333"
  }),
  new Geo({
    IataCode: "TUG",
    Location: "121.731667, 17.641111"
  }),
  new Geo({
    IataCode: "TWT",
    Location: "120, 5.166667"
  }),
  new Geo({
    IataCode: "USU",
    Location: "119.95, 12.166667"
  }),
  new Geo({
    IataCode: "VGN",
    Location: "120.388, 17.575"
  }),
  new Geo({
    IataCode: "VRC",
    Location: "124.2, 13.583333"
  }),
  new Geo({
    IataCode: "WNP",
    Location: "123.27, 13.587222"
  }),
  new Geo({
    IataCode: "SIN",
    Location: "103.833333, 1.283333"
  }),
  new Geo({
    IataCode: "BFV",
    Location: "103.255278, 15.226944"
  }),
  new Geo({
    IataCode: "BKK",
    Location: "100.742483, 13.689689"
  }),
  new Geo({
    IataCode: "CEI",
    Location: "99.830556, 19.886389"
  }),
  new Geo({
    IataCode: "CJM",
    Location: "99.363889, 10.709722"
  }),
  new Geo({
    IataCode: "CNX",
    Location: "98.968333, 18.771944"
  }),
  new Geo({
    IataCode: "HDY",
    Location: "100.466667, 7.016667"
  }),
  new Geo({
    IataCode: "HGN",
    Location: "97.966667, 19.3"
  }),
  new Geo({
    IataCode: "HHQ",
    Location: "99.954444, 12.630556"
  }),
  new Geo({
    IataCode: "HKT",
    Location: "98.3125, 8.110556"
  }),
  new Geo({
    IataCode: "KBV",
    Location: "98.918889, 8.059167"
  }),
  new Geo({
    IataCode: "KKC",
    Location: "102.786667, 16.465"
  }),
  new Geo({
    IataCode: "KOP",
    Location: "104.78306, 17.41667"
  }),
  new Geo({
    IataCode: "LOE",
    Location: "101.73306, 17.44972"
  }),
  new Geo({
    IataCode: "LPT",
    Location: "99.506667, 18.272778"
  }),
  new Geo({
    IataCode: "MAQ",
    Location: "98.583333, 16.666667"
  }),
  new Geo({
    IataCode: "NAW",
    Location: "101.743525, 6.51988"
  }),
  new Geo({
    IataCode: "NNT",
    Location: "100.783333, 18.8"
  }),
  new Geo({
    IataCode: "NST",
    Location: "99.96639, 8.46667"
  }),
  new Geo({
    IataCode: "PHS",
    Location: "100.279058, 16.782397"
  }),
  new Geo({
    IataCode: "PHY",
    Location: "101.198333, 16.681944"
  }),
  new Geo({
    IataCode: "PRH",
    Location: "100.166667, 18.128611"
  }),
  new Geo({
    IataCode: "PYY",
    Location: "98.4367, 19.3589"
  }),
  new Geo({
    IataCode: "ROI",
    Location: "103.651111, 16.053056"
  }),
  new Geo({
    IataCode: "SNO",
    Location: "104.145556, 17.156389"
  }),
  new Geo({
    IataCode: "TDX",
    Location: "102.319917, 12.275269"
  }),
  new Geo({
    IataCode: "THS",
    Location: "99.8167, 17.2167"
  }),
  new Geo({
    IataCode: "TST",
    Location: "99.625, 7.508056"
  }),
  new Geo({
    IataCode: "UBP",
    Location: "104.873611, 15.248889"
  }),
  new Geo({
    IataCode: "UNN",
    Location: "98.638889, 9.961944"
  }),
  new Geo({
    IataCode: "URT",
    Location: "99.316667, 9.133333"
  }),
  new Geo({
    IataCode: "USM",
    Location: "100, 9.5"
  }),
  new Geo({
    IataCode: "UTH",
    Location: "102.793889, 17.383056"
  }),
  new Geo({
    IataCode: "UTP",
    Location: "101.004728, 12.679589"
  }),
  new Geo({
    IataCode: "CMJ",
    Location: "119.426193, 23.215476"
  }),
  new Geo({
    IataCode: "CYI",
    Location: "120.383333, 23.466667"
  }),
  new Geo({
    IataCode: "GNI",
    Location: "121.416607, 23.124811"
  }),
  new Geo({
    IataCode: "HCN",
    Location: "120.75, 22"
  }),
  new Geo({
    IataCode: "HUN",
    Location: "121.60444, 23.97694"
  }),
  new Geo({
    IataCode: "KHH",
    Location: "120.345278, 22.5725"
  }),
  new Geo({
    IataCode: "KNH",
    Location: "118.359444, 24.431944"
  }),
  new Geo({
    IataCode: "KYD",
    Location: "121.5, 22.083333"
  }),
  new Geo({
    IataCode: "LZN",
    Location: "119.9506, 26.1506"
  }),
  new Geo({
    IataCode: "MFK",
    Location: "119.921865, 26.160137"
  }),
  new Geo({
    IataCode: "MZG",
    Location: "119.630328, 23.570492"
  }),
  new Geo({
    IataCode: "RMQ",
    Location: "120.666667, 24.15"
  }),
  new Geo({
    IataCode: "TNN",
    Location: "120.2, 22.958333"
  }),
  new Geo({
    IataCode: "TPE",
    Location: "121.530139, 25.068889"
  }),
  new Geo({
    IataCode: "TTT",
    Location: "121.093333, 22.756667"
  }),
  new Geo({
    IataCode: "WOT",
    Location: "119.494444, 23.370833"
  }),
  new Geo({
    IataCode: "BMV",
    Location: "108.05, 12.666667"
  }),
  new Geo({
    IataCode: "CAH",
    Location: "105.179444, 9.175556"
  }),
  new Geo({
    IataCode: "DAD",
    Location: "108.22083, 16.06778"
  }),
  new Geo({
    IataCode: "DIN",
    Location: "103.036308, 21.411283"
  }),
  new Geo({
    IataCode: "DLI",
    Location: "108.456774, 11.94046"
  }),
  new Geo({
    IataCode: "VDH",
    Location: "106.599722, 17.483056"
  }),
  new Geo({
    IataCode: "HAN",
    Location: "105.843658, 21.060152"
  }),
  new Geo({
    IataCode: "HPH",
    Location: "106.683333, 20.85"
  }),
  new Geo({
    IataCode: "HUI",
    Location: "107.6, 16.466667"
  }),
  new Geo({
    IataCode: "NHA",
    Location: "109.183333, 12.25"
  }),
  new Geo({
    IataCode: "PQC",
    Location: "103.966667, 10.233333"
  }),
  new Geo({
    IataCode: "PXU",
    Location: "108.021389, 14.003056"
  }),
  new Geo({
    IataCode: "SGN",
    Location: "106.657778, 10.817222"
  }),
  new Geo({
    IataCode: "TBB",
    Location: "109.339722, 13.044167"
  }),
  new Geo({
    IataCode: "THD",
    Location: "105.776389, 19.8075"
  }),
  new Geo({
    IataCode: "UIH",
    Location: "109.226389, 13.766111"
  }),
  new Geo({
    IataCode: "VCA",
    Location: "105.766389, 10.047222"
  }),
  new Geo({
    IataCode: "VCL",
    Location: "108.703889, 15.422222"
  }),
  new Geo({
    IataCode: "VCS",
    Location: "106.633333, 10.371389"
  }),
  new Geo({
    IataCode: "VII",
    Location: "105.675774, 18.671292"
  }),
  new Geo({
    IataCode: "VKG",
    Location: "105.083333, 10.083333"
  }),
  new Geo({
    IataCode: "AAN",
    Location: "55.75, 24.25"
  }),
  new Geo({
    IataCode: "AUH",
    Location: "54.366667, 24.466667"
  }),
  new Geo({
    IataCode: "DXB",
    Location: "55.357778, 25.25"
  }),
  new Geo({
    IataCode: "RKT",
    Location: "56, 25.75"
  }),
  new Geo({
    IataCode: "SHJ",
    Location: "55.383333, 25.433333"
  }),
  new Geo({
    IataCode: "XSB",
    Location: "52.583874, 24.283974"
  }),
  new Geo({
    IataCode: "ZDY",
    Location: "52.3167, 24.5167"
  }),
  new Geo({
    IataCode: "BAH",
    Location: "50.6375, 26.270833"
  }),
  new Geo({
    IataCode: "ETH",
    Location: "34.959869, 29.559721"
  }),
  new Geo({
    IataCode: "HFA",
    Location: "35.041, 32.811111"
  }),
  new Geo({
    IataCode: "VDA",
    Location: "34.4833, 31"
  }),
  new Geo({
    IataCode: "TLV",
    Location: "34.783333, 32.066667"
  }),
  new Geo({
    IataCode: "BGW",
    Location: "44.3625, 33.261111"
  }),
  new Geo({
    IataCode: "BSR",
    Location: "47.791389, 30.555556"
  }),
  new Geo({
    IataCode: "EBL",
    Location: "43.963056, 36.2375"
  }),
  new Geo({
    IataCode: "ISU",
    Location: "45.451813, 35.553457"
  }),
  new Geo({
    IataCode: "NJF",
    Location: "44.404167, 31.991667"
  }),
  new Geo({
    IataCode: "OSM",
    Location: "43.149444, 36.3075"
  }),
  new Geo({
    IataCode: "XNH",
    Location: "46.269676, 31.042933"
  }),
  new Geo({
    IataCode: "ABD",
    Location: "48.233333, 30.366667"
  }),
  new Geo({
    IataCode: "ACZ",
    Location: "61.535, 31.085833"
  }),
  new Geo({
    IataCode: "ADU",
    Location: "48.3, 38.25"
  }),
  new Geo({
    IataCode: "AEU",
    Location: "55.041667, 25.8875"
  }),
  new Geo({
    IataCode: "AFZ",
    Location: "57.595278, 36.168056"
  }),
  new Geo({
    IataCode: "AJK",
    Location: "49.833333, 34.133333"
  }),
  new Geo({
    IataCode: "AWZ",
    Location: "48.759722, 31.337778"
  }),
  new Geo({
    IataCode: "AZD",
    Location: "54.281667, 31.897778"
  }),
  new Geo({
    IataCode: "BDH",
    Location: "54.883333, 26.55"
  }),
  new Geo({
    IataCode: "BJB",
    Location: "57.305556, 37.488333"
  }),
  new Geo({
    IataCode: "BND",
    Location: "56.377778, 27.218611"
  }),
  new Geo({
    IataCode: "BUZ",
    Location: "50.8325, 28.949167"
  }),
  new Geo({
    IataCode: "BXR",
    Location: "58.366667, 29.116667"
  }),
  new Geo({
    IataCode: "CQD",
    Location: "50.842222, 32.297222"
  }),
  new Geo({
    IataCode: "DEF",
    Location: "48.383333, 32.433333"
  }),
  new Geo({
    IataCode: "GBT",
    Location: "54.412778, 36.900556"
  }),
  new Geo({
    IataCode: "GCH",
    Location: "50.816667, 30.333333"
  }),
  new Geo({
    IataCode: "GSM",
    Location: "56.2775, 26.948333"
  }),
  new Geo({
    IataCode: "HDM",
    Location: "48.548056, 34.864722"
  }),
  new Geo({
    IataCode: "IFN",
    Location: "51.85, 32.75"
  }),
  new Geo({
    IataCode: "IHR",
    Location: "60.71667, 27.21667"
  }),
  new Geo({
    IataCode: "IIL",
    Location: "46.433333, 33.616667"
  }),
  new Geo({
    IataCode: "JAR",
    Location: "53.55, 28.516667"
  }),
  new Geo({
    IataCode: "JWN",
    Location: "48.359167, 36.774722"
  }),
  new Geo({
    IataCode: "JYR",
    Location: "57.666667, 28.716667"
  }),
  new Geo({
    IataCode: "KER",
    Location: "56.951111, 30.274444"
  }),
  new Geo({
    IataCode: "KHD",
    Location: "48.280833, 33.438611"
  }),
  new Geo({
    IataCode: "KHK",
    Location: "50.323611, 29.261667"
  }),
  new Geo({
    IataCode: "KHY",
    Location: "44.9521, 38.5503"
  }),
  new Geo({
    IataCode: "KIH",
    Location: "53.981667, 26.526667"
  }),
  new Geo({
    IataCode: "KKS",
    Location: "51.417581, 33.985736"
  }),
  new Geo({
    IataCode: "KLM",
    Location: "55.45, 37.366667"
  }),
  new Geo({
    IataCode: "KSH",
    Location: "47.15, 34.35"
  }),
  new Geo({
    IataCode: "LFM",
    Location: "53.181381, 27.340055"
  }),
  new Geo({
    IataCode: "LRR",
    Location: "54.387222, 27.673056"
  }),
  new Geo({
    IataCode: "LVP",
    Location: "53.356111, 26.810278"
  }),
  new Geo({
    IataCode: "MHD",
    Location: "59.641667, 36.236667"
  }),
  new Geo({
    IataCode: "MRX",
    Location: "49.167222, 30.535556"
  }),
  new Geo({
    IataCode: "NSH",
    Location: "51.496, 36.649"
  }),
  new Geo({
    IataCode: "OMH",
    Location: "45.07605, 37.55274"
  }),
  new Geo({
    IataCode: "PFQ",
    Location: "47.857778, 39.620833"
  }),
  new Geo({
    IataCode: "RAS",
    Location: "49.585419, 37.276238"
  }),
  new Geo({
    IataCode: "RJN",
    Location: "56.056667, 30.296944"
  }),
  new Geo({
    IataCode: "RZR",
    Location: "50.68, 36.909167"
  }),
  new Geo({
    IataCode: "SDG",
    Location: "46.962778, 35.350278"
  }),
  new Geo({
    IataCode: "RUD",
    Location: "54.9763, 36.418056"
  }),
  new Geo({
    IataCode: "SRY",
    Location: "53.06009, 36.56332"
  }),
  new Geo({
    IataCode: "SYJ",
    Location: "55.66, 29.556389"
  }),
  new Geo({
    IataCode: "SYZ",
    Location: "52.590833, 29.540278"
  }),
  new Geo({
    IataCode: "TBZ",
    Location: "46.243333, 38.131667"
  }),
  new Geo({
    IataCode: "TCX",
    Location: "56.901389, 33.68"
  }),
  new Geo({
    IataCode: "THR",
    Location: "51.423912, 35.695225"
  }),
  new Geo({
    IataCode: "XBJ",
    Location: "59.216667, 32.883333"
  }),
  new Geo({
    IataCode: "YEH",
    Location: "52.61667, 27.46667"
  }),
  new Geo({
    IataCode: "YES",
    Location: "51.5451, 30.7005"
  }),
  new Geo({
    IataCode: "ZAH",
    Location: "60.903333, 29.473333"
  }),
  new Geo({
    IataCode: "ZBR",
    Location: "60.666667, 25.333333"
  }),
  new Geo({
    IataCode: "AMM",
    Location: "35.933333, 31.933333"
  }),
  new Geo({
    IataCode: "AQJ",
    Location: "35, 29.516667"
  }),
  new Geo({
    IataCode: "KWI",
    Location: "47.978333, 29.369722"
  }),
  new Geo({
    IataCode: "BEY",
    Location: "35.5134, 33.8872"
  }),
  new Geo({
    IataCode: "DQM",
    Location: "57.704722, 19.661667"
  }),
  new Geo({
    IataCode: "KHS",
    Location: "56.243477, 26.200114"
  }),
  new Geo({
    IataCode: "MCT",
    Location: "58.54, 23.61"
  }),
  new Geo({
    IataCode: "OHS",
    Location: "56.729889, 24.342"
  }),
  new Geo({
    IataCode: "SLL",
    Location: "54.091297, 17.038719"
  }),
  new Geo({
    IataCode: "DOH",
    Location: "51.566389, 25.256944"
  }),
  new Geo({
    IataCode: "ABT",
    Location: "41.633333, 20.285556"
  }),
  new Geo({
    IataCode: "AHB",
    Location: "42.507222, 18.223333"
  }),
  new Geo({
    IataCode: "AJF",
    Location: "40.09467, 29.97468"
  }),
  new Geo({
    IataCode: "ULH",
    Location: "37.916667, 26.63333"
  }),
  new Geo({
    IataCode: "AQI",
    Location: "46.124694, 28.334978"
  }),
  new Geo({
    IataCode: "BHH",
    Location: "42.623269, 19.984183"
  }),
  new Geo({
    IataCode: "DMM",
    Location: "50.11417, 26.42583"
  }),
  new Geo({
    IataCode: "DWD",
    Location: "44.383333, 24.494167"
  }),
  new Geo({
    IataCode: "EAM",
    Location: "44.132222, 17.491667"
  }),
  new Geo({
    IataCode: "EJH",
    Location: "36.46843, 26.23153"
  }),
  new Geo({
    IataCode: "ELQ",
    Location: "43.968658, 26.348806"
  }),
  new Geo({
    IataCode: "GIZ",
    Location: "42.585808, 16.901014"
  }),
  new Geo({
    IataCode: "HAS",
    Location: "41.690369, 27.5375"
  }),
  new Geo({
    IataCode: "HOF",
    Location: "49.833333, 25.5"
  }),
  new Geo({
    IataCode: "JED",
    Location: "39.172778, 21.543333"
  }),
  new Geo({
    IataCode: "MED",
    Location: "39.6, 24.466667"
  }),
  new Geo({
    IataCode: "RAE",
    Location: "41.138056, 30.906389"
  }),
  new Geo({
    IataCode: "RAH",
    Location: "43.490556, 29.626111"
  }),
  new Geo({
    IataCode: "RUH",
    Location: "46.724167, 24.711667"
  }),
  new Geo({
    IataCode: "SHW",
    Location: "47.1, 17.416667"
  }),
  new Geo({
    IataCode: "TIF",
    Location: "40.41583, 21.27028"
  }),
  new Geo({
    IataCode: "TUI",
    Location: "38.731067, 31.692697"
  }),
  new Geo({
    IataCode: "TUU",
    Location: "36.625, 28.371667"
  }),
  new Geo({
    IataCode: "URY",
    Location: "37.333333, 31.333333"
  }),
  new Geo({
    IataCode: "WAE",
    Location: "45.166667, 20.5"
  }),
  new Geo({
    IataCode: "YNB",
    Location: "38.066667, 24.116667"
  }),
  new Geo({
    IataCode: "DAM",
    Location: "36.292, 33.513"
  }),
  new Geo({
    IataCode: "KAC",
    Location: "41.240616, 37.058191"
  }),
  new Geo({
    IataCode: "LTK",
    Location: "35.783333, 35.516667"
  }),
  new Geo({
    IataCode: "ADA",
    Location: "35.326195, 36.991036"
  }),
  new Geo({
    IataCode: "ADF",
    Location: "38.266667, 37.75"
  }),
  new Geo({
    IataCode: "AJI",
    Location: "43.025, 39.65"
  }),
  new Geo({
    IataCode: "ANK",
    Location: "32.8333, 39.875"
  }),
  new Geo({
    IataCode: "AYT",
    Location: "30.703697, 36.88676"
  }),
  new Geo({
    IataCode: "AOE",
    Location: "30.5, 39"
  }),
  new Geo({
    IataCode: "BAL",
    Location: "41.1167, 37.8667"
  }),
  new Geo({
    IataCode: "BGG",
    Location: "40.501667, 38.886111"
  }),
  new Geo({
    IataCode: "BJV",
    Location: "27.433333, 37.033333"
  }),
  new Geo({
    IataCode: "CKZ",
    Location: "26.4333, 40.1333"
  }),
  new Geo({
    IataCode: "DLM",
    Location: "28.8, 36.766667"
  }),
  new Geo({
    IataCode: "DNZ",
    Location: "29.076691, 37.777228"
  }),
  new Geo({
    IataCode: "DIY",
    Location: "40.235023, 37.915763"
  }),
  new Geo({
    IataCode: "EDO",
    Location: "27.033333, 39.583333"
  }),
  new Geo({
    IataCode: "EZS",
    Location: "38.63308, 39.275321"
  }),
  new Geo({
    IataCode: "ERC",
    Location: "39.5, 39.75"
  }),
  new Geo({
    IataCode: "ERZ",
    Location: "41.276321, 39.905259"
  }),
  new Geo({
    IataCode: "GZT",
    Location: "37.3825, 37.05944"
  }),
  new Geo({
    IataCode: "GZP",
    Location: "32.3014, 36.2993"
  }),
  new Geo({
    IataCode: "HTY",
    Location: "36.15, 36.2"
  }),
  new Geo({
    IataCode: "IGD",
    Location: "44.0333, 39.91666"
  }),
  new Geo({
    IataCode: "ISE",
    Location: "30.55, 37.766667"
  }),
  new Geo({
    IataCode: "IST",
    Location: "28.976018, 41.01224"
  }),
  new Geo({
    IataCode: "IZM",
    Location: "27.129, 38.422"
  }),
  new Geo({
    IataCode: "KSY",
    Location: "43.0858, 40.5483"
  }),
  new Geo({
    IataCode: "ASR",
    Location: "35.478287, 38.730786"
  }),
  new Geo({
    IataCode: "KCM",
    Location: "36.950556, 37.534444"
  }),
  new Geo({
    IataCode: "KCO",
    Location: "29.833333, 40.75"
  }),
  new Geo({
    IataCode: "KFS",
    Location: "33.791111, 41.305556"
  }),
  new Geo({
    IataCode: "KYA",
    Location: "32.483333, 37.866667"
  }),
  new Geo({
    IataCode: "KZR",
    Location: "29.983333, 39.416667"
  }),
  new Geo({
    IataCode: "MLX",
    Location: "38.31667, 38.35018"
  }),
  new Geo({
    IataCode: "MQM",
    Location: "40.737778, 37.316667"
  }),
  new Geo({
    IataCode: "MZH",
    Location: "35.466667, 40.866667"
  }),
  new Geo({
    IataCode: "MSR",
    Location: "41.5, 38.75"
  }),
  new Geo({
    IataCode: "NAV",
    Location: "34.716667, 38.633333"
  }),
  new Geo({
    IataCode: "OGU",
    Location: "38.066667, 40.966667"
  }),
  new Geo({
    IataCode: "ONQ",
    Location: "31.783333, 41.45"
  }),
  new Geo({
    IataCode: "SZF",
    Location: "36.42486, 41.258335"
  }),
  new Geo({
    IataCode: "SFQ",
    Location: "38.791695, 37.153202"
  }),
  new Geo({
    IataCode: "NOP",
    Location: "35.15934, 42.026726"
  }),
  new Geo({
    IataCode: "NKT",
    Location: "42.45689, 37.521222"
  }),
  new Geo({
    IataCode: "VAS",
    Location: "37.033539, 39.747322"
  }),
  new Geo({
    IataCode: "SXZ",
    Location: "41.95, 37.933333"
  }),
  new Geo({
    IataCode: "TEQ",
    Location: "27.5, 40.966667"
  }),
  new Geo({
    IataCode: "TJK",
    Location: "36.55, 40.316667"
  }),
  new Geo({
    IataCode: "TZX",
    Location: "39.728708, 41.005941"
  }),
  new Geo({
    IataCode: "USQ",
    Location: "29.471944, 38.682222"
  }),
  new Geo({
    IataCode: "VAN",
    Location: "43.3167, 38.45"
  }),
  new Geo({
    IataCode: "YEI",
    Location: "29.066667, 40.183333"
  }),
  new Geo({
    IataCode: "YKO",
    Location: "43.734792, 37.574278"
  }),
  new Geo({
    IataCode: "AAY",
    Location: "52.183333, 16.2"
  }),
  new Geo({
    IataCode: "ADE",
    Location: "45.037079, 12.801758"
  }),
  new Geo({
    IataCode: "AXK",
    Location: "46.3, 13.866667"
  }),
  new Geo({
    IataCode: "GXF",
    Location: "48.783333, 15.966667"
  }),
  new Geo({
    IataCode: "HOD",
    Location: "42.982778, 14.747222"
  }),
  new Geo({
    IataCode: "RIY",
    Location: "49.322222, 14.647222"
  }),
  new Geo({
    IataCode: "SAH",
    Location: "44.206389, 15.348333"
  }),
  new Geo({
    IataCode: "SCT",
    Location: "54, 12.5"
  }),
  new Geo({
    IataCode: "TAI",
    Location: "44.021944, 13.578889"
  }),
  new Geo({
    IataCode: "SBH",
    Location: "-62.85, 17.89972"
  }),
  new Geo({
    IataCode: "BDA",
    Location: "-64.78, 32.301"
  }),
  new Geo({
    IataCode: "AKV",
    Location: "-78.215278, 60.801944"
  }),
  new Geo({
    IataCode: "YCK",
    Location: "-125.67, 67.31"
  }),
  new Geo({
    IataCode: "YHY",
    Location: "-115.785599, 60.815292"
  }),
  new Geo({
    IataCode: "KES",
    Location: "-96.5, 56.016667"
  }),
  new Geo({
    IataCode: "KEW",
    Location: "-92.838889, 52.992222"
  }),
  new Geo({
    IataCode: "KIF",
    Location: "-89.82851, 53.027897"
  }),
  new Geo({
    IataCode: "LAK",
    Location: "-135.005833, 68.223333"
  }),
  new Geo({
    IataCode: "YQM",
    Location: "-64.771271, 46.092281"
  }),
  new Geo({
    IataCode: "MSA",
    Location: "-91.983333, 53.816667"
  }),
  new Geo({
    IataCode: "QBC",
    Location: "-126.801453, 52.375809"
  }),
  new Geo({
    IataCode: "YZR",
    Location: "-82.3, 43"
  }),
  new Geo({
    IataCode: "SUR",
    Location: "-88.5475, 52.715278"
  }),
  new Geo({
    IataCode: "YWG",
    Location: "-97.139167, 49.899444"
  }),
  new Geo({
    IataCode: "WNN",
    Location: "-89.166667, 52.916667"
  }),
  new Geo({
    IataCode: "XBE",
    Location: "-90.95521, 53.913793"
  }),
  new Geo({
    IataCode: "XGR",
    Location: "-65.95, 58.691667"
  }),
  new Geo({
    IataCode: "XKS",
    Location: "-88.646667, 53.52"
  }),
  new Geo({
    IataCode: "XLB",
    Location: "-101.466667, 58.6"
  }),
  new Geo({
    IataCode: "XQU",
    Location: "-124.45, 49.35"
  }),
  new Geo({
    IataCode: "XSI",
    Location: "-98.916667, 56.8"
  }),
  new Geo({
    IataCode: "XTL",
    Location: "-98.483333, 58.716667"
  }),
  new Geo({
    IataCode: "YAA",
    Location: "-125.3, 52.45"
  }),
  new Geo({
    IataCode: "YAB",
    Location: "-85.183333, 73.033333"
  }),
  new Geo({
    IataCode: "YAC",
    Location: "-91.816667, 51.716667"
  }),
  new Geo({
    IataCode: "YAG",
    Location: "-93.447222, 48.652778"
  }),
  new Geo({
    IataCode: "YAM",
    Location: "-84.35, 46.533333"
  }),
  new Geo({
    IataCode: "YAQ",
    Location: "-123.616667, 48.816667"
  }),
  new Geo({
    IataCode: "YAT",
    Location: "-82.4, 52.941667"
  }),
  new Geo({
    IataCode: "YAX",
    Location: "-89.53003, 53.84484"
  }),
  new Geo({
    IataCode: "YAY",
    Location: "-55.583333, 51.366667"
  }),
  new Geo({
    IataCode: "YAZ",
    Location: "-125.891667, 49.143889"
  }),
  new Geo({
    IataCode: "YBA",
    Location: "-115.566667, 51.166667"
  }),
  new Geo({
    IataCode: "YBB",
    Location: "-89.82471, 68.53577"
  }),
  new Geo({
    IataCode: "YBC",
    Location: "-68.266667, 49.2"
  }),
  new Geo({
    IataCode: "YBE",
    Location: "-108.612986, 59.569723"
  }),
  new Geo({
    IataCode: "YBG",
    Location: "-70.988611, 48.322222"
  }),
  new Geo({
    IataCode: "YBH",
    Location: "-127.916667, 50.9"
  }),
  new Geo({
    IataCode: "YBK",
    Location: "-96.02123, 64.32009"
  }),
  new Geo({
    IataCode: "YBL",
    Location: "-125.265556, 49.946389"
  }),
  new Geo({
    IataCode: "YBR",
    Location: "-99.95, 49.9"
  }),
  new Geo({
    IataCode: "YBT",
    Location: "-101.666667, 57.883333"
  }),
  new Geo({
    IataCode: "YBV",
    Location: "-97.016667, 52.355556"
  }),
  new Geo({
    IataCode: "YBX",
    Location: "-57.216667, 51.433333"
  }),
  new Geo({
    IataCode: "YCB",
    Location: "-105.05484, 69.11489"
  }),
  new Geo({
    IataCode: "YCD",
    Location: "-123.936389, 49.164167"
  }),
  new Geo({
    IataCode: "YCG",
    Location: "-117.632222, 49.295556"
  }),
  new Geo({
    IataCode: "YCL",
    Location: "-66, 48"
  }),
  new Geo({
    IataCode: "YCO",
    Location: "-115.09649, 67.82743"
  }),
  new Geo({
    IataCode: "YCR",
    Location: "-97.8, 54.633333"
  }),
  new Geo({
    IataCode: "YCS",
    Location: "-90.716667, 63.333333"
  }),
  new Geo({
    IataCode: "YCY",
    Location: "-68.5, 70.416667"
  }),
  new Geo({
    IataCode: "YDA",
    Location: "-139.410839, 64.059944"
  }),
  new Geo({
    IataCode: "YDF",
    Location: "-57.4, 49.216667"
  }),
  new Geo({
    IataCode: "YDL",
    Location: "-130.024167, 58.433333"
  }),
  new Geo({
    IataCode: "YDP",
    Location: "-61.666667, 56.533333"
  }),
  new Geo({
    IataCode: "YDQ",
    Location: "-120.183333, 55.733333"
  }),
  new Geo({
    IataCode: "YEA",
    Location: "-113.516667, 53.566667"
  }),
  new Geo({
    IataCode: "YEK",
    Location: "-94.05848, 61.10883"
  }),
  new Geo({
    IataCode: "YZF",
    Location: "-114.389648, 62.461567"
  }),
  new Geo({
    IataCode: "YER",
    Location: "-87.63317, 55.98352"
  }),
  new Geo({
    IataCode: "YEV",
    Location: "-133.730556, 68.361667"
  }),
  new Geo({
    IataCode: "YFA",
    Location: "-81.66664, 52.19998"
  }),
  new Geo({
    IataCode: "YFB",
    Location: "-68.563889, 63.752222"
  }),
  new Geo({
    IataCode: "YFC",
    Location: "-66.666667, 45.95"
  }),
  new Geo({
    IataCode: "YFH",
    Location: "-88, 51.5"
  }),
  new Geo({
    IataCode: "YFJ",
    Location: "-114.0672, 64.1839"
  }),
  new Geo({
    IataCode: "YFO",
    Location: "-101.864167, 54.768056"
  }),
  new Geo({
    IataCode: "YFS",
    Location: "-121.35498, 61.844487"
  }),
  new Geo({
    IataCode: "YGB",
    Location: "-124.4861, 49.68292"
  }),
  new Geo({
    IataCode: "YGG",
    Location: "-123.5, 48.85"
  }),
  new Geo({
    IataCode: "YGH",
    Location: "-128.632736, 66.257182"
  }),
  new Geo({
    IataCode: "YGK",
    Location: "-76.48098, 44.230933"
  }),
  new Geo({
    IataCode: "YGL",
    Location: "-77.706389, 53.629722"
  }),
  new Geo({
    IataCode: "YGO",
    Location: "-94.483333, 54.55"
  }),
  new Geo({
    IataCode: "YGP",
    Location: "-64.481163, 48.828566"
  }),
  new Geo({
    IataCode: "YGR",
    Location: "-61.9, 47.366667"
  }),
  new Geo({
    IataCode: "YGT",
    Location: "-81.816667, 69.4"
  }),
  new Geo({
    IataCode: "YGV",
    Location: "-63.583333, 50.25"
  }),
  new Geo({
    IataCode: "YGW",
    Location: "-77.766667, 55.279167"
  }),
  new Geo({
    IataCode: "YGX",
    Location: "-94.707778, 56.347222"
  }),
  new Geo({
    IataCode: "YGZ",
    Location: "-82.957222, 76.417778"
  }),
  new Geo({
    IataCode: "YHD",
    Location: "-92.833333, 49.783333"
  }),
  new Geo({
    IataCode: "YHI",
    Location: "-117.768056, 70.736389"
  }),
  new Geo({
    IataCode: "YHK",
    Location: "-95.95, 68.633333"
  }),
  new Geo({
    IataCode: "YHO",
    Location: "-60.229444, 55.448333"
  }),
  new Geo({
    IataCode: "YHP",
    Location: "-94.3, 52.083333"
  }),
  new Geo({
    IataCode: "YHR",
    Location: "-59.5, 50.5"
  }),
  new Geo({
    IataCode: "YHS",
    Location: "-123.75, 49.466667"
  }),
  new Geo({
    IataCode: "YHZ",
    Location: "-63.61, 44.67"
  }),
  new Geo({
    IataCode: "YIF",
    Location: "-58.666667, 51.216667"
  }),
  new Geo({
    IataCode: "YIK",
    Location: "-77.908333, 62.416667"
  }),
  new Geo({
    IataCode: "YIO",
    Location: "-77.95933, 72.70137"
  }),
  new Geo({
    IataCode: "YIV",
    Location: "-94.791667, 54.208333"
  }),
  new Geo({
    IataCode: "YJT",
    Location: "-58.55, 48.533333"
  }),
  new Geo({
    IataCode: "YKA",
    Location: "-120.438333, 50.699167"
  }),
  new Geo({
    IataCode: "YKG",
    Location: "-70.02626, 60.01853"
  }),
  new Geo({
    IataCode: "YKL",
    Location: "-66.83183, 54.80022"
  }),
  new Geo({
    IataCode: "YKQ",
    Location: "-78.75, 51.48"
  }),
  new Geo({
    IataCode: "YKU",
    Location: "-78.895833, 53.783333"
  }),
  new Geo({
    IataCode: "YLC",
    Location: "-69.883333, 62.85"
  }),
  new Geo({
    IataCode: "YLE",
    Location: "-117.266667, 63.15"
  }),
  new Geo({
    IataCode: "YLH",
    Location: "-87.93, 52.183333"
  }),
  new Geo({
    IataCode: "YLL",
    Location: "-110, 53.3"
  }),
  new Geo({
    IataCode: "YLW",
    Location: "-119.483333, 49.883333"
  }),
  new Geo({
    IataCode: "YMA",
    Location: "-135.873611, 63.616389"
  }),
  new Geo({
    IataCode: "YMM",
    Location: "-111.38103, 56.72676"
  }),
  new Geo({
    IataCode: "YMN",
    Location: "-59.166667, 55.166667"
  }),
  new Geo({
    IataCode: "YMO",
    Location: "-80.604167, 51.291111"
  }),
  new Geo({
    IataCode: "YMQ",
    Location: "-73.554167, 45.508889"
  }),
  new Geo({
    IataCode: "YMT",
    Location: "-74.366667, 49.916667"
  }),
  new Geo({
    IataCode: "YNA",
    Location: "-61.8, 50.183333"
  }),
  new Geo({
    IataCode: "YNC",
    Location: "-78.8, 53"
  }),
  new Geo({
    IataCode: "YNE",
    Location: "-97.82776, 53.98759"
  }),
  new Geo({
    IataCode: "YNL",
    Location: "-104.081111, 58.275"
  }),
  new Geo({
    IataCode: "YNO",
    Location: "-93.01705, 52.51681"
  }),
  new Geo({
    IataCode: "YNP",
    Location: "-61.184444, 55.913889"
  }),
  new Geo({
    IataCode: "YNS",
    Location: "-76.3328, 51.71695"
  }),
  new Geo({
    IataCode: "YOC",
    Location: "-139.833333, 67.583333"
  }),
  new Geo({
    IataCode: "YOH",
    Location: "-95.283333, 54.95"
  }),
  new Geo({
    IataCode: "YOJ",
    Location: "-117.119722, 58.518889"
  }),
  new Geo({
    IataCode: "YOW",
    Location: "-75.69812, 45.41117"
  }),
  new Geo({
    IataCode: "YPA",
    Location: "-105.683333, 53.216667"
  }),
  new Geo({
    IataCode: "YPB",
    Location: "-124.8, 49.233333"
  }),
  new Geo({
    IataCode: "YPC",
    Location: "-124.07137, 69.3505"
  }),
  new Geo({
    IataCode: "YPH",
    Location: "-78.10139, 58.45468"
  }),
  new Geo({
    IataCode: "YPJ",
    Location: "-69.666667, 59.3"
  }),
  new Geo({
    IataCode: "YPK",
    Location: "-122.691, 49.221"
  }),
  new Geo({
    IataCode: "YPL",
    Location: "-90.183333, 51.466667"
  }),
  new Geo({
    IataCode: "YPM",
    Location: "-94, 51.816667"
  }),
  new Geo({
    IataCode: "YPN",
    Location: "-64.283333, 49.833333"
  }),
  new Geo({
    IataCode: "YPO",
    Location: "-85.433333, 54.983333"
  }),
  new Geo({
    IataCode: "YPR",
    Location: "-130.32012, 54.31614"
  }),
  new Geo({
    IataCode: "YPW",
    Location: "-124.5, 49.816667"
  }),
  new Geo({
    IataCode: "YPX",
    Location: "-77, 60"
  }),
  new Geo({
    IataCode: "YPY",
    Location: "-111.12053, 58.72224"
  }),
  new Geo({
    IataCode: "YQB",
    Location: "-71.216667, 46.816667"
  }),
  new Geo({
    IataCode: "YQC",
    Location: "-69.616944, 61.046667"
  }),
  new Geo({
    IataCode: "YQD",
    Location: "-101.25, 53.824976"
  }),
  new Geo({
    IataCode: "YQF",
    Location: "-113.811111, 52.268056"
  }),
  new Geo({
    IataCode: "YQG",
    Location: "-83.036041, 42.313878"
  }),
  new Geo({
    IataCode: "YQK",
    Location: "-94.358333, 49.7875"
  }),
  new Geo({
    IataCode: "YQL",
    Location: "-112.791667, 49.631944"
  }),
  new Geo({
    IataCode: "YQQ",
    Location: "-124.93613, 49.68294"
  }),
  new Geo({
    IataCode: "YQR",
    Location: "-104.6178, 50.45008"
  }),
  new Geo({
    IataCode: "YQT",
    Location: "-89.25, 48.383333"
  }),
  new Geo({
    IataCode: "YQU",
    Location: "-118.894444, 55.184167"
  }),
  new Geo({
    IataCode: "YQX",
    Location: "-54.563333, 48.946667"
  }),
  new Geo({
    IataCode: "YQY",
    Location: "-60.1829, 46.1378"
  }),
  new Geo({
    IataCode: "YQZ",
    Location: "-122.492667, 52.978444"
  }),
  new Geo({
    IataCode: "YRA",
    Location: "-117.410889, 64.127387"
  }),
  new Geo({
    IataCode: "YRB",
    Location: "-94.916382, 74.688691"
  }),
  new Geo({
    IataCode: "YRG",
    Location: "-58.433333, 54.166667"
  }),
  new Geo({
    IataCode: "YRL",
    Location: "-93.833333, 51.033333"
  }),
  new Geo({
    IataCode: "YRS",
    Location: "-93.583333, 54.166667"
  }),
  new Geo({
    IataCode: "YRT",
    Location: "-92.08324, 62.81732"
  }),
  new Geo({
    IataCode: "YSB",
    Location: "-80.991211, 46.49532"
  }),
  new Geo({
    IataCode: "YSF",
    Location: "-105.833333, 59.25"
  }),
  new Geo({
    IataCode: "YSG",
    Location: "-110.738611, 62.405278"
  }),
  new Geo({
    IataCode: "YSJ",
    Location: "-66.0628, 45.2796"
  }),
  new Geo({
    IataCode: "YSK",
    Location: "-79.216667, 56.55"
  }),
  new Geo({
    IataCode: "YSM",
    Location: "-111.879272, 60.006195"
  }),
  new Geo({
    IataCode: "YSO",
    Location: "-59.79446, 54.8979"
  }),
  new Geo({
    IataCode: "YST",
    Location: "-94.848611, 53.831667"
  }),
  new Geo({
    IataCode: "YSW",
    Location: "-75.633333, 62.2"
  }),
  new Geo({
    IataCode: "YSY",
    Location: "-125.240021, 71.988757"
  }),
  new Geo({
    IataCode: "YTE",
    Location: "-76.533333, 64.233333"
  }),
  new Geo({
    IataCode: "YTH",
    Location: "-97.866667, 55.8"
  }),
  new Geo({
    IataCode: "YTL",
    Location: "-90, 53.75"
  }),
  new Geo({
    IataCode: "YTM",
    Location: "-74.585556, 46.212222"
  }),
  new Geo({
    IataCode: "YTO",
    Location: "-79.461111, 43.733333"
  }),
  new Geo({
    IataCode: "YTQ",
    Location: "-69.916667, 53.666667"
  }),
  new Geo({
    IataCode: "YTS",
    Location: "-81.333333, 48.466667"
  }),
  new Geo({
    IataCode: "YUB",
    Location: "-133.034821, 69.428983"
  }),
  new Geo({
    IataCode: "YUD",
    Location: "-76.55, 56.55"
  }),
  new Geo({
    IataCode: "YUT",
    Location: "-86.25, 66.533333"
  }),
  new Geo({
    IataCode: "YUX",
    Location: "-81.25, 68.783333"
  }),
  new Geo({
    IataCode: "YUY",
    Location: "-79.016667, 48.233333"
  }),
  new Geo({
    IataCode: "YVB",
    Location: "-65.483333, 48.05"
  }),
  new Geo({
    IataCode: "YVC",
    Location: "-105.333333, 55.083333"
  }),
  new Geo({
    IataCode: "YVM",
    Location: "-64.02493, 67.55546"
  }),
  new Geo({
    IataCode: "YVO",
    Location: "-77.782778, 48.052778"
  }),
  new Geo({
    IataCode: "YVP",
    Location: "-68.406667, 58.101944"
  }),
  new Geo({
    IataCode: "YVQ",
    Location: "-126.7836, 65.281555"
  }),
  new Geo({
    IataCode: "YVR",
    Location: "-123.161759, 49.212407"
  }),
  new Geo({
    IataCode: "YVZ",
    Location: "-94.5, 52.666667"
  }),
  new Geo({
    IataCode: "YWB",
    Location: "-71.95, 61.6"
  }),
  new Geo({
    IataCode: "YWJ",
    Location: "-123.405991, 65.198444"
  }),
  new Geo({
    IataCode: "YWK",
    Location: "-66.866667, 52.916667"
  }),
  new Geo({
    IataCode: "YWL",
    Location: "-122.044444, 52.184722"
  }),
  new Geo({
    IataCode: "YWP",
    Location: "-87.368889, 52.959722"
  }),
  new Geo({
    IataCode: "YWS",
    Location: "-122.96946, 50.1164"
  }),
  new Geo({
    IataCode: "YWY",
    Location: "-123.47, 63.228056"
  }),
  new Geo({
    IataCode: "YXC",
    Location: "-115.766667, 49.533333"
  }),
  new Geo({
    IataCode: "YXE",
    Location: "-106.683333, 52.166667"
  }),
  new Geo({
    IataCode: "YXH",
    Location: "-110.6775, 50.041667"
  }),
  new Geo({
    IataCode: "YXJ",
    Location: "-120.733333, 56.233333"
  }),
  new Geo({
    IataCode: "YXL",
    Location: "-91.902778, 50.116667"
  }),
  new Geo({
    IataCode: "YXN",
    Location: "-92.6, 62.233333"
  }),
  new Geo({
    IataCode: "YXP",
    Location: "-65.733333, 66.133333"
  }),
  new Geo({
    IataCode: "YXS",
    Location: "-122.76947, 53.908788"
  }),
  new Geo({
    IataCode: "YXT",
    Location: "-128.574444, 54.465556"
  }),
  new Geo({
    IataCode: "YXU",
    Location: "-81.254196, 42.982047"
  }),
  new Geo({
    IataCode: "YXX",
    Location: "-122.328, 49.054611"
  }),
  new Geo({
    IataCode: "YXY",
    Location: "-135.066667, 60.716667"
  }),
  new Geo({
    IataCode: "YYB",
    Location: "-79.421389, 46.365833"
  }),
  new Geo({
    IataCode: "YYC",
    Location: "-114.019722, 51.112778"
  }),
  new Geo({
    IataCode: "YYD",
    Location: "-127.180278, 54.825556"
  }),
  new Geo({
    IataCode: "YYE",
    Location: "-122.583333, 58.833333"
  }),
  new Geo({
    IataCode: "YYF",
    Location: "-119.6, 49.464722"
  }),
  new Geo({
    IataCode: "YYG",
    Location: "-63.130556, 46.286111"
  }),
  new Geo({
    IataCode: "YYH",
    Location: "-93.516667, 69.533333"
  }),
  new Geo({
    IataCode: "YYJ",
    Location: "-123.3657, 48.422151"
  }),
  new Geo({
    IataCode: "YYQ",
    Location: "-94.187851, 58.780659"
  }),
  new Geo({
    IataCode: "YYR",
    Location: "-60.4, 53.316667"
  }),
  new Geo({
    IataCode: "YYT",
    Location: "-52.75, 47.616944"
  }),
  new Geo({
    IataCode: "YYY",
    Location: "-68.2, 48.6"
  }),
  new Geo({
    IataCode: "YZP",
    Location: "-131.812778, 53.254444"
  }),
  new Geo({
    IataCode: "YZS",
    Location: "-83.16615, 64.13406"
  }),
  new Geo({
    IataCode: "YZT",
    Location: "-127.41985, 50.69962"
  }),
  new Geo({
    IataCode: "YZV",
    Location: "-66.383333, 50.2"
  }),
  new Geo({
    IataCode: "YZZ",
    Location: "-117.69722, 49.094553"
  }),
  new Geo({
    IataCode: "ZAC",
    Location: "-96.099815, 56.090044"
  }),
  new Geo({
    IataCode: "ZBF",
    Location: "-65.649147, 47.617504"
  }),
  new Geo({
    IataCode: "ZEL",
    Location: "-128.113976, 52.157506"
  }),
  new Geo({
    IataCode: "ZEM",
    Location: "-78.5, 52.233333"
  }),
  new Geo({
    IataCode: "ZFM",
    Location: "-134.869194, 67.428054"
  }),
  new Geo({
    IataCode: "ZFN",
    Location: "-125.575104, 64.903745"
  }),
  new Geo({
    IataCode: "ZGI",
    Location: "-94.078611, 54.839722"
  }),
  new Geo({
    IataCode: "ZGR",
    Location: "-95.466111, 52.045"
  }),
  new Geo({
    IataCode: "ZGS",
    Location: "-60.6672, 50.3339"
  }),
  new Geo({
    IataCode: "ZKE",
    Location: "-81.615372, 52.300081"
  }),
  new Geo({
    IataCode: "ZKG",
    Location: "-61.267319, 50.181515"
  }),
  new Geo({
    IataCode: "ZLT",
    Location: "-58.96637, 50.833698"
  }),
  new Geo({
    IataCode: "ZMT",
    Location: "-132.141323, 54.014275"
  }),
  new Geo({
    IataCode: "ZPB",
    Location: "-92.16774, 53.867105"
  }),
  new Geo({
    IataCode: "ZRJ",
    Location: "-91.312778, 52.943611"
  }),
  new Geo({
    IataCode: "ZSJ",
    Location: "-93.34444, 53.064167"
  }),
  new Geo({
    IataCode: "ZTB",
    Location: "-59.318962, 50.702981"
  }),
  new Geo({
    IataCode: "ZTM",
    Location: "-92.086716, 55.852963"
  }),
  new Geo({
    IataCode: "ZUM",
    Location: "-63.983002, 53.526432"
  }),
  new Geo({
    IataCode: "ZWL",
    Location: "-103.154068, 58.110901"
  }),
  new Geo({
    IataCode: "ACA",
    Location: "-99.766944, 16.755556"
  }),
  new Geo({
    IataCode: "AGU",
    Location: "-102.296, 21.876"
  }),
  new Geo({
    IataCode: "BJX",
    Location: "-101.431274, 20.94092"
  }),
  new Geo({
    IataCode: "CEN",
    Location: "-109.938889, 27.493889"
  }),
  new Geo({
    IataCode: "CJS",
    Location: "-106.486944, 31.739444"
  }),
  new Geo({
    IataCode: "CLQ",
    Location: "-103.724722, 19.243333"
  }),
  new Geo({
    IataCode: "CME",
    Location: "-91.8, 18.65"
  }),
  new Geo({
    IataCode: "CPE",
    Location: "-90.509444, 19.835"
  }),
  new Geo({
    IataCode: "CTM",
    Location: "-88.298836, 18.501424"
  }),
  new Geo({
    IataCode: "CUA",
    Location: "-111.664444, 25.036944"
  }),
  new Geo({
    IataCode: "CUL",
    Location: "-107.474167, 24.764444"
  }),
  new Geo({
    IataCode: "CUN",
    Location: "-86.8475, 21.160556"
  }),
  new Geo({
    IataCode: "CUU",
    Location: "-106.094444, 28.6525"
  }),
  new Geo({
    IataCode: "CVM",
    Location: "-99.133333, 23.733333"
  }),
  new Geo({
    IataCode: "CZM",
    Location: "-86.945457, 20.510641"
  }),
  new Geo({
    IataCode: "DGO",
    Location: "-104.666667, 24.016667"
  }),
  new Geo({
    IataCode: "GDL",
    Location: "-103.350342, 20.666714"
  }),
  new Geo({
    IataCode: "GUB",
    Location: "-114.066667, 28.033333"
  }),
  new Geo({
    IataCode: "GYM",
    Location: "-110.898889, 27.918333"
  }),
  new Geo({
    IataCode: "HMO",
    Location: "-111.046111, 29.096389"
  }),
  new Geo({
    IataCode: "HUX",
    Location: "-96.333333, 15.85"
  }),
  new Geo({
    IataCode: "ISJ",
    Location: "-86.75, 21.266667"
  }),
  new Geo({
    IataCode: "IZT",
    Location: "-95.108333, 16.569167"
  }),
  new Geo({
    IataCode: "LAP",
    Location: "-110.32, 24.14"
  }),
  new Geo({
    IataCode: "LMM",
    Location: "-108.983333, 25.816667"
  }),
  new Geo({
    IataCode: "LTO",
    Location: "-111.35, 26.01667"
  }),
  new Geo({
    IataCode: "LZC",
    Location: "-102.2, 17.95"
  }),
  new Geo({
    IataCode: "MAM",
    Location: "-97.5, 25.88333"
  }),
  new Geo({
    IataCode: "MEX",
    Location: "-99.107592, 19.417315"
  }),
  new Geo({
    IataCode: "MID",
    Location: "-89.65, 20.933333"
  }),
  new Geo({
    IataCode: "MLM",
    Location: "-101.189444, 19.768333"
  }),
  new Geo({
    IataCode: "MTT",
    Location: "-94.51667, 17.98333"
  }),
  new Geo({
    IataCode: "MTY",
    Location: "-100.3, 25.666667"
  }),
  new Geo({
    IataCode: "MXL",
    Location: "-115.466667, 32.666667"
  }),
  new Geo({
    IataCode: "MZT",
    Location: "-106.42, 23.22"
  }),
  new Geo({
    IataCode: "NLD",
    Location: "-99.566667, 27.434722"
  }),
  new Geo({
    IataCode: "OAX",
    Location: "-96.75, 17.083333"
  }),
  new Geo({
    IataCode: "PAZ",
    Location: "-97.467222, 20.516667"
  }),
  new Geo({
    IataCode: "PBC",
    Location: "-98.2, 19.05"
  }),
  new Geo({
    IataCode: "PCM",
    Location: "-87.068024, 20.634069"
  }),
  new Geo({
    IataCode: "PDS",
    Location: "-100.516667, 28.7"
  }),
  new Geo({
    IataCode: "PNO",
    Location: "-98.069444, 16.3425"
  }),
  new Geo({
    IataCode: "PQM",
    Location: "-92.008333, 17.5"
  }),
  new Geo({
    IataCode: "PVR",
    Location: "-105.265, 20.686667"
  }),
  new Geo({
    IataCode: "PXM",
    Location: "-97.08333, 15.86667"
  }),
  new Geo({
    IataCode: "QRO",
    Location: "-100.391693, 20.594866"
  }),
  new Geo({
    IataCode: "REX",
    Location: "-98.277778, 26.092222"
  }),
  new Geo({
    IataCode: "SFH",
    Location: "-114.866667, 31"
  }),
  new Geo({
    IataCode: "SJD",
    Location: "-109.683333, 23.05"
  }),
  new Geo({
    IataCode: "SLP",
    Location: "-100.988333, 22.177222"
  }),
  new Geo({
    IataCode: "SLW",
    Location: "-100.983333, 25.433333"
  }),
  new Geo({
    IataCode: "TAM",
    Location: "-97.801667, 22.274444"
  }),
  new Geo({
    IataCode: "TAP",
    Location: "-92.253056, 14.909722"
  }),
  new Geo({
    IataCode: "TGZ",
    Location: "-93.183333, 16.733333"
  }),
  new Geo({
    IataCode: "TIJ",
    Location: "-116.970278, 32.541389"
  }),
  new Geo({
    IataCode: "TLC",
    Location: "-99.666667, 19.283333"
  }),
  new Geo({
    IataCode: "TPQ",
    Location: "-104.9, 21.5"
  }),
  new Geo({
    IataCode: "TRC",
    Location: "-103.410833, 25.568333"
  }),
  new Geo({
    IataCode: "UPN",
    Location: "-102.047222, 19.411111"
  }),
  new Geo({
    IataCode: "VER",
    Location: "-96.183333, 19.15"
  }),
  new Geo({
    IataCode: "VSA",
    Location: "-93, 18"
  }),
  new Geo({
    IataCode: "ZCL",
    Location: "-102.55, 22.8"
  }),
  new Geo({
    IataCode: "ZIH",
    Location: "-101.555278, 17.643333"
  }),
  new Geo({
    IataCode: "ZLO",
    Location: "-104.315833, 19.052222"
  }),
  new Geo({
    IataCode: "FSP",
    Location: "-56.16949, 46.76544"
  }),
  new Geo({
    IataCode: "ABE",
    Location: "-75.438333, 40.654722"
  }),
  new Geo({
    IataCode: "ABI",
    Location: "-99.698194, 32.438055"
  }),
  new Geo({
    IataCode: "ABL",
    Location: "-157.845833, 67.0875"
  }),
  new Geo({
    IataCode: "ABQ",
    Location: "-106.609991, 35.110703"
  }),
  new Geo({
    IataCode: "ABR",
    Location: "-98.485909, 45.462779"
  }),
  new Geo({
    IataCode: "ABY",
    Location: "-84.181389, 31.557777"
  }),
  new Geo({
    IataCode: "ACK",
    Location: "-70.059722, 41.256667"
  }),
  new Geo({
    IataCode: "ACT",
    Location: "-97.155833, 31.551389"
  }),
  new Geo({
    IataCode: "ACV",
    Location: "-124.082778, 40.866389"
  }),
  new Geo({
    IataCode: "ADK",
    Location: "-176.644722, 51.882778"
  }),
  new Geo({
    IataCode: "ADQ",
    Location: "-152.417777, 57.781574"
  }),
  new Geo({
    IataCode: "ADT",
    Location: "-96.666667, 34.8"
  }),
  new Geo({
    IataCode: "AET",
    Location: "-152.658333, 66.561667"
  }),
  new Geo({
    IataCode: "AEX",
    Location: "-92.423472, 31.364166"
  }),
  new Geo({
    IataCode: "AFN",
    Location: "-72.066667, 42.833333"
  }),
  new Geo({
    IataCode: "AGN",
    Location: "-134.583333, 57.503889"
  }),
  new Geo({
    IataCode: "AGS",
    Location: "-81.97484, 33.47097"
  }),
  new Geo({
    IataCode: "AIA",
    Location: "-102.87214, 42.10163"
  }),
  new Geo({
    IataCode: "AIN",
    Location: "-160.03833, 70.63694"
  }),
  new Geo({
    IataCode: "AIY",
    Location: "-74.496851, 39.381111"
  }),
  new Geo({
    IataCode: "AKB",
    Location: "-174.200833, 52.217222"
  }),
  new Geo({
    IataCode: "AKI",
    Location: "-161.223333, 60.905556"
  }),
  new Geo({
    IataCode: "AKK",
    Location: "-154.166667, 56.944444"
  }),
  new Geo({
    IataCode: "AKN",
    Location: "-156.635556, 58.668611"
  }),
  new Geo({
    IataCode: "AKP",
    Location: "-151.74, 68.1375"
  }),
  new Geo({
    IataCode: "CAK",
    Location: "-81.507453, 41.081788"
  }),
  new Geo({
    IataCode: "ALB",
    Location: "-73.754654, 42.657697"
  }),
  new Geo({
    IataCode: "ALO",
    Location: "-92.34296, 42.49276"
  }),
  new Geo({
    IataCode: "ALS",
    Location: "-105.867004, 37.474313"
  }),
  new Geo({
    IataCode: "ALW",
    Location: "-118.291111, 46.094722"
  }),
  new Geo({
    IataCode: "ALZ",
    Location: "-154.245833, 56.895833"
  }),
  new Geo({
    IataCode: "AMA",
    Location: "-101.777638, 35.221944"
  }),
  new Geo({
    IataCode: "ANC",
    Location: "-149.89, 61.217685"
  }),
  new Geo({
    IataCode: "ANI",
    Location: "-159.533333, 61.566667"
  }),
  new Geo({
    IataCode: "ANV",
    Location: "-160.188889, 62.647778"
  }),
  new Geo({
    IataCode: "AOO",
    Location: "-78.32, 40.297222"
  }),
  new Geo({
    IataCode: "AOS",
    Location: "-153.833333, 57.466667"
  }),
  new Geo({
    IataCode: "APN",
    Location: "-83.555833, 45.081667"
  }),
  new Geo({
    IataCode: "ARC",
    Location: "-145.524444, 68.1375"
  }),
  new Geo({
    IataCode: "ART",
    Location: "-76, 44"
  }),
  new Geo({
    IataCode: "ASE",
    Location: "-106.868889, 39.224167"
  }),
  new Geo({
    IataCode: "ATK",
    Location: "-157.333333, 70.5"
  }),
  new Geo({
    IataCode: "ATL",
    Location: "-84.41996, 33.730476"
  }),
  new Geo({
    IataCode: "ATT",
    Location: "-162.2675, 60.866944"
  }),
  new Geo({
    IataCode: "ATW",
    Location: "-88.521111, 44.258889"
  }),
  new Geo({
    IataCode: "ATY",
    Location: "-97.154167, 44.908889"
  }),
  new Geo({
    IataCode: "AUG",
    Location: "-69.796667, 44.318056"
  }),
  new Geo({
    IataCode: "AUK",
    Location: "-164.610833, 62.689167"
  }),
  new Geo({
    IataCode: "AUS",
    Location: "-97.708333, 30.241666"
  }),
  new Geo({
    IataCode: "AUW",
    Location: "-89.633333, 44.95"
  }),
  new Geo({
    IataCode: "AVL",
    Location: "-82.555833, 35.58"
  }),
  new Geo({
    IataCode: "AVP",
    Location: "-75.878056, 41.244444"
  }),
  new Geo({
    IataCode: "AVX",
    Location: "-118.413541, 33.418194"
  }),
  new Geo({
    IataCode: "AZO",
    Location: "-85.553611, 42.236389"
  }),
  new Geo({
    IataCode: "BET",
    Location: "-161.790694, 60.792222"
  }),
  new Geo({
    IataCode: "BFD",
    Location: "-78.644722, 41.959167"
  }),
  new Geo({
    IataCode: "BFF",
    Location: "-103.601111, 41.875278"
  }),
  new Geo({
    IataCode: "BFL",
    Location: "-119.052222, 35.43"
  }),
  new Geo({
    IataCode: "BGM",
    Location: "-75.911667, 42.102222"
  }),
  new Geo({
    IataCode: "BGR",
    Location: "-68.827778, 44.807778"
  }),
  new Geo({
    IataCode: "BHB",
    Location: "-68.209444, 44.385833"
  }),
  new Geo({
    IataCode: "BHM",
    Location: "-86.80249, 33.52066"
  }),
  new Geo({
    IataCode: "BIL",
    Location: "-108.542778, 45.806944"
  }),
  new Geo({
    IataCode: "BIS",
    Location: "-100.78374, 46.80833"
  }),
  new Geo({
    IataCode: "BJI",
    Location: "-94.934722, 47.509722"
  }),
  new Geo({
    IataCode: "BKC",
    Location: "-161.126667, 65.978889"
  }),
  new Geo({
    IataCode: "BKW",
    Location: "-81.124167, 37.781944"
  }),
  new Geo({
    IataCode: "BLD",
    Location: "-114.833333, 35.983333"
  }),
  new Geo({
    IataCode: "BLI",
    Location: "-122.534722, 48.794444"
  }),
  new Geo({
    IataCode: "BLV",
    Location: "-89.98399, 38.52005"
  }),
  new Geo({
    IataCode: "BMG",
    Location: "-86.52639, 39.16532"
  }),
  new Geo({
    IataCode: "BMI",
    Location: "-88.9275, 40.481944"
  }),
  new Geo({
    IataCode: "BNA",
    Location: "-86.78444, 36.16589"
  }),
  new Geo({
    IataCode: "BNW",
    Location: "-93.883333, 42.066667"
  }),
  new Geo({
    IataCode: "BOI",
    Location: "-116.225, 43.565278"
  }),
  new Geo({
    IataCode: "BOS",
    Location: "-71.027361, 42.354444"
  }),
  new Geo({
    IataCode: "BPT",
    Location: "-94.05, 30.041666"
  }),
  new Geo({
    IataCode: "BRD",
    Location: "-94.1375, 46.397222"
  }),
  new Geo({
    IataCode: "BRL",
    Location: "-91.119232, 40.810691"
  }),
  new Geo({
    IataCode: "BRO",
    Location: "-97.49748, 25.90175"
  }),
  new Geo({
    IataCode: "BRW",
    Location: "-156.768055, 71.283333"
  }),
  new Geo({
    IataCode: "BSF",
    Location: "-157.75, 21.383333"
  }),
  new Geo({
    IataCode: "BTI",
    Location: "-143.625984, 70.134065"
  }),
  new Geo({
    IataCode: "BTM",
    Location: "-112.529722, 46.006389"
  }),
  new Geo({
    IataCode: "BTR",
    Location: "-91.166944, 30.490833"
  }),
  new Geo({
    IataCode: "BTT",
    Location: "-151.526389, 66.915278"
  }),
  new Geo({
    IataCode: "BTV",
    Location: "-73.214607, 44.477891"
  }),
  new Geo({
    IataCode: "BUF",
    Location: "-78.879776, 42.886027"
  }),
  new Geo({
    IataCode: "BUR",
    Location: "-118.357778, 34.2"
  }),
  new Geo({
    IataCode: "BWI",
    Location: "-76.611018, 39.25463"
  }),
  new Geo({
    IataCode: "BZN",
    Location: "-111.047222, 45.677778"
  }),
  new Geo({
    IataCode: "CAE",
    Location: "-81.03481, 34.00071"
  }),
  new Geo({
    IataCode: "CCB",
    Location: "-117.661111, 34.106944"
  }),
  new Geo({
    IataCode: "CCR",
    Location: "-122, 38"
  }),
  new Geo({
    IataCode: "CDB",
    Location: "-162.719722, 55.199722"
  }),
  new Geo({
    IataCode: "CDC",
    Location: "-113.096111, 37.7025"
  }),
  new Geo({
    IataCode: "CDR",
    Location: "-103.097778, 42.835"
  }),
  new Geo({
    IataCode: "CDV",
    Location: "-145.61, 60.521528"
  }),
  new Geo({
    IataCode: "CEC",
    Location: "-124.235833, 41.78"
  }),
  new Geo({
    IataCode: "CEM",
    Location: "-144.781944, 65.574722"
  }),
  new Geo({
    IataCode: "CEZ",
    Location: "-108.627222, 37.302778"
  }),
  new Geo({
    IataCode: "CGA",
    Location: "-133.146111, 55.479167"
  }),
  new Geo({
    IataCode: "CGI",
    Location: "-89.546389, 37.309167"
  }),
  new Geo({
    IataCode: "CHA",
    Location: "-85.267222, 35.045556"
  }),
  new Geo({
    IataCode: "CHI",
    Location: "-87.627778, 41.881944"
  }),
  new Geo({
    IataCode: "CHO",
    Location: "-78.479, 38.0299"
  }),
  new Geo({
    IataCode: "CHS",
    Location: "-79.93092, 32.77657"
  }),
  new Geo({
    IataCode: "CHU",
    Location: "-159.247311, 61.575693"
  }),
  new Geo({
    IataCode: "CID",
    Location: "-91.668611, 41.983056"
  }),
  new Geo({
    IataCode: "CIK",
    Location: "-143.729167, 66.648056"
  }),
  new Geo({
    IataCode: "CJN",
    Location: "-116.966667, 32.8"
  }),
  new Geo({
    IataCode: "CKB",
    Location: "-80.34453, 39.28065"
  }),
  new Geo({
    IataCode: "CKD",
    Location: "-158.100833, 61.870833"
  }),
  new Geo({
    IataCode: "CKX",
    Location: "-141.949167, 64.067778"
  }),
  new Geo({
    IataCode: "CLE",
    Location: "-81.671759, 41.493796"
  }),
  new Geo({
    IataCode: "CLL",
    Location: "-96.364444, 30.589444"
  }),
  new Geo({
    IataCode: "CLP",
    Location: "-158.543056, 58.843056"
  }),
  new Geo({
    IataCode: "CLT",
    Location: "-80.892916, 35.217917"
  }),
  new Geo({
    IataCode: "CMH",
    Location: "-83.002222, 39.964907"
  }),
  new Geo({
    IataCode: "CMI",
    Location: "-88.261227, 40.112981"
  }),
  new Geo({
    IataCode: "CMX",
    Location: "-88.58096, 47.12687"
  }),
  new Geo({
    IataCode: "CNM",
    Location: "-104.262778, 32.337222"
  }),
  new Geo({
    IataCode: "CNY",
    Location: "-109.549722, 38.5725"
  }),
  new Geo({
    IataCode: "COD",
    Location: "-109.0275, 44.515833"
  }),
  new Geo({
    IataCode: "COS",
    Location: "-104.741944, 38.825185"
  }),
  new Geo({
    IataCode: "COU",
    Location: "-92.324982, 38.964748"
  }),
  new Geo({
    IataCode: "CPR",
    Location: "-106.325, 42.834722"
  }),
  new Geo({
    IataCode: "CRP",
    Location: "-97.380208, 27.751388"
  }),
  new Geo({
    IataCode: "CRW",
    Location: "-81.635628, 38.353234"
  }),
  new Geo({
    IataCode: "CSG",
    Location: "-84.991666, 32.483333"
  }),
  new Geo({
    IataCode: "SBP",
    Location: "-120.639167, 35.236667"
  }),
  new Geo({
    IataCode: "CTO",
    Location: "-77.683333, 38.633333"
  }),
  new Geo({
    IataCode: "CVG",
    Location: "-84.5, 39.133333"
  }),
  new Geo({
    IataCode: "CVN",
    Location: "-103.197778, 34.405555"
  }),
  new Geo({
    IataCode: "CXF",
    Location: "-150.18417, 67.25639"
  }),
  new Geo({
    IataCode: "CYF",
    Location: "-164.2, 60.216667"
  }),
  new Geo({
    IataCode: "CYS",
    Location: "-104.816667, 41.144583"
  }),
  new Geo({
    IataCode: "CZN",
    Location: "-142.05, 62.070833"
  }),
  new Geo({
    IataCode: "DAB",
    Location: "-81.02829, 29.210912"
  }),
  new Geo({
    IataCode: "DAN",
    Location: "-79.39502, 36.58597"
  }),
  new Geo({
    IataCode: "DAY",
    Location: "-84.19161, 39.75895"
  }),
  new Geo({
    IataCode: "DBQ",
    Location: "-90.686865, 42.504321"
  }),
  new Geo({
    IataCode: "DDC",
    Location: "-100.01708, 37.7528"
  }),
  new Geo({
    IataCode: "DEC",
    Location: "-88.93158, 39.83965"
  }),
  new Geo({
    IataCode: "DEN",
    Location: "-104.984722, 39.739167"
  }),
  new Geo({
    IataCode: "DFW",
    Location: "-96.80667, 32.78306"
  }),
  new Geo({
    IataCode: "DHN",
    Location: "-85.39049, 31.22323"
  }),
  new Geo({
    IataCode: "DIK",
    Location: "-102.78962, 46.87918"
  }),
  new Geo({
    IataCode: "DJN",
    Location: "-145.683333, 64.033333"
  }),
  new Geo({
    IataCode: "DLG",
    Location: "-158.508611, 59.046667"
  }),
  new Geo({
    IataCode: "DLH",
    Location: "-92.145139, 46.812916"
  }),
  new Geo({
    IataCode: "DOF",
    Location: "-132.266667, 55.2125"
  }),
  new Geo({
    IataCode: "DRG",
    Location: "-162.733333, 66.080833"
  }),
  new Geo({
    IataCode: "DRO",
    Location: "-107.88, 37.275278"
  }),
  new Geo({
    IataCode: "DRT",
    Location: "-100.89676, 29.36273"
  }),
  new Geo({
    IataCode: "DSI",
    Location: "-86.5, 30.383333"
  }),
  new Geo({
    IataCode: "DSM",
    Location: "-93.656667, 41.533889"
  }),
  new Geo({
    IataCode: "DTT",
    Location: "-83.045833, 42.331389"
  }),
  new Geo({
    IataCode: "DUJ",
    Location: "-78.898889, 41.178333"
  }),
  new Geo({
    IataCode: "DUT",
    Location: "-166.535833, 53.901111"
  }),
  new Geo({
    IataCode: "DVL",
    Location: "-98.9075, 48.113056"
  }),
  new Geo({
    IataCode: "EAA",
    Location: "-141.148611, 64.776667"
  }),
  new Geo({
    IataCode: "EAR",
    Location: "-98.998889, 40.728333"
  }),
  new Geo({
    IataCode: "EAT",
    Location: "-120.207778, 47.399722"
  }),
  new Geo({
    IataCode: "EAU",
    Location: "-91.487222, 44.864444"
  }),
  new Geo({
    IataCode: "EDA",
    Location: "-133.666667, 55.95"
  }),
  new Geo({
    IataCode: "EEK",
    Location: "-162.016667, 60.216667"
  }),
  new Geo({
    IataCode: "EGE",
    Location: "-106.3742, 39.64026"
  }),
  new Geo({
    IataCode: "EGX",
    Location: "-157.370278, 58.207778"
  }),
  new Geo({
    IataCode: "EKO",
    Location: "-115.789722, 40.823889"
  }),
  new Geo({
    IataCode: "ELD",
    Location: "-92.664871, 33.215712"
  }),
  new Geo({
    IataCode: "ELI",
    Location: "-162.270278, 64.613611"
  }),
  new Geo({
    IataCode: "ELM",
    Location: "-76.809167, 42.085278"
  }),
  new Geo({
    IataCode: "ELP",
    Location: "-106.440972, 31.775555"
  }),
  new Geo({
    IataCode: "ELV",
    Location: "-136.316667, 58.183333"
  }),
  new Geo({
    IataCode: "EMK",
    Location: "-164.520833, 62.776944"
  }),
  new Geo({
    IataCode: "ENA",
    Location: "-151.251111, 60.5675"
  }),
  new Geo({
    IataCode: "ERI",
    Location: "-80.178611, 42.08"
  }),
  new Geo({
    IataCode: "ERR",
    Location: "-71.137505, 44.780617"
  }),
  new Geo({
    IataCode: "ERV",
    Location: "-99.133333, 30.05"
  }),
  new Geo({
    IataCode: "ESC",
    Location: "-87.06665, 45.75387"
  }),
  new Geo({
    IataCode: "ESD",
    Location: "-122.9125, 48.708333"
  }),
  new Geo({
    IataCode: "EUG",
    Location: "-123.08675, 44.05207"
  }),
  new Geo({
    IataCode: "EVV",
    Location: "-87.55585, 37.97476"
  }),
  new Geo({
    IataCode: "EWB",
    Location: "-71.146944, 41.698056"
  }),
  new Geo({
    IataCode: "EWN",
    Location: "-77.045403, 35.112326"
  }),
  new Geo({
    IataCode: "EXI",
    Location: "-135.447222, 58.420833"
  }),
  new Geo({
    IataCode: "EYW",
    Location: "-81.779861, 24.553055"
  }),
  new Geo({
    IataCode: "FAI",
    Location: "-147.772, 64.835666"
  }),
  new Geo({
    IataCode: "FAM",
    Location: "-90.421667, 37.780833"
  }),
  new Geo({
    IataCode: "FAR",
    Location: "-96.7898, 46.87719"
  }),
  new Geo({
    IataCode: "FAT",
    Location: "-119.748472, 36.752222"
  }),
  new Geo({
    IataCode: "FAY",
    Location: "-78.87836, 35.05266"
  }),
  new Geo({
    IataCode: "FBS",
    Location: "-123.01712, 48.53427"
  }),
  new Geo({
    IataCode: "FCA",
    Location: "-114.316111, 48.197778"
  }),
  new Geo({
    IataCode: "FKL",
    Location: "-79.859722, 41.379167"
  }),
  new Geo({
    IataCode: "FLD",
    Location: "-88.484444, 43.771667"
  }),
  new Geo({
    IataCode: "FLL",
    Location: "-80.150833, 26.070417"
  }),
  new Geo({
    IataCode: "FLO",
    Location: "-79.724444, 34.188889"
  }),
  new Geo({
    IataCode: "FMN",
    Location: "-108.229167, 36.741111"
  }),
  new Geo({
    IataCode: "FMY",
    Location: "-81.810917, 26.55975"
  }),
  new Geo({
    IataCode: "FNT",
    Location: "-83.69, 43.01"
  }),
  new Geo({
    IataCode: "FOD",
    Location: "-94.189722, 42.5525"
  }),
  new Geo({
    IataCode: "FRD",
    Location: "-123.023889, 48.526389"
  }),
  new Geo({
    IataCode: "FSD",
    Location: "-96.70063, 43.553276"
  }),
  new Geo({
    IataCode: "FSM",
    Location: "-94.37, 35.336111"
  }),
  new Geo({
    IataCode: "FWA",
    Location: "-85.13915, 41.08045"
  }),
  new Geo({
    IataCode: "FYU",
    Location: "-145.208333, 66.581111"
  }),
  new Geo({
    IataCode: "FYV",
    Location: "-94.153333, 36.140833"
  }),
  new Geo({
    IataCode: "GAL",
    Location: "-156.931667, 64.736389"
  }),
  new Geo({
    IataCode: "GAM",
    Location: "-171.7375, 63.766667"
  }),
  new Geo({
    IataCode: "GBD",
    Location: "-98.864167, 38.347222"
  }),
  new Geo({
    IataCode: "GCC",
    Location: "-105.525, 44.351389"
  }),
  new Geo({
    IataCode: "GCK",
    Location: "-100.864167, 37.975278"
  }),
  new Geo({
    IataCode: "GCN",
    Location: "-112.139444, 36.053333"
  }),
  new Geo({
    IataCode: "GDH",
    Location: "-158.166667, 59.716667"
  }),
  new Geo({
    IataCode: "GDV",
    Location: "-104.806944, 47.138889"
  }),
  new Geo({
    IataCode: "GEG",
    Location: "-117.44574, 47.650092"
  }),
  new Geo({
    IataCode: "GFK",
    Location: "-97, 48"
  }),
  new Geo({
    IataCode: "GGG",
    Location: "-94.946944, 32.542778"
  }),
  new Geo({
    IataCode: "GGW",
    Location: "-106.615556, 48.212778"
  }),
  new Geo({
    IataCode: "GJT",
    Location: "-108.513889, 39.118611"
  }),
  new Geo({
    IataCode: "GLH",
    Location: "-91.055374, 33.415968"
  }),
  new Geo({
    IataCode: "GLV",
    Location: "-163.0375, 64.544167"
  }),
  new Geo({
    IataCode: "GNU",
    Location: "-161.580556, 59.1125"
  }),
  new Geo({
    IataCode: "GNV",
    Location: "-82.331543, 29.654344"
  }),
  new Geo({
    IataCode: "GPT",
    Location: "-89.09282, 30.36742"
  }),
  new Geo({
    IataCode: "GRB",
    Location: "-88.130556, 44.488056"
  }),
  new Geo({
    IataCode: "GRI",
    Location: "-98.358056, 40.922222"
  }),
  new Geo({
    IataCode: "GRN",
    Location: "-102.2, 42.8"
  }),
  new Geo({
    IataCode: "GRR",
    Location: "-85.655719, 42.96125"
  }),
  new Geo({
    IataCode: "GSO",
    Location: "-79.791298, 36.074771"
  }),
  new Geo({
    IataCode: "GSP",
    Location: "-82.314444, 34.851666"
  }),
  new Geo({
    IataCode: "GST",
    Location: "-135.719166, 58.422083"
  }),
  new Geo({
    IataCode: "GTF",
    Location: "-111.325138, 47.492778"
  }),
  new Geo({
    IataCode: "GTP",
    Location: "-123.328333, 42.438889"
  }),
  new Geo({
    IataCode: "GUC",
    Location: "-106.938889, 38.533889"
  }),
  new Geo({
    IataCode: "HAR",
    Location: "-76.88442, 40.2737"
  }),
  new Geo({
    IataCode: "HCR",
    Location: "-159.771667, 62.188889"
  }),
  new Geo({
    IataCode: "HDN",
    Location: "-107.216667, 40.483333"
  }),
  new Geo({
    IataCode: "HFD",
    Location: "-72.68509, 41.76371"
  }),
  new Geo({
    IataCode: "HGR",
    Location: "-77.73, 39.707778"
  }),
  new Geo({
    IataCode: "HHH",
    Location: "-80.683333, 32.216667"
  }),
  new Geo({
    IataCode: "HIB",
    Location: "-92.838611, 47.388611"
  }),
  new Geo({
    IataCode: "HKB",
    Location: "-148.966667, 63.866667"
  }),
  new Geo({
    IataCode: "BKG",
    Location: "-93.22, 36.53208"
  }),
  new Geo({
    IataCode: "HLN",
    Location: "-112.037888, 46.598978"
  }),
  new Geo({
    IataCode: "HNH",
    Location: "-135.443058, 58.111354"
  }),
  new Geo({
    IataCode: "HNL",
    Location: "-157.894167, 21.32125"
  }),
  new Geo({
    IataCode: "HNM",
    Location: "-155.986977, 20.762214"
  }),
  new Geo({
    IataCode: "HNS",
    Location: "-135.518889, 59.245833"
  }),
  new Geo({
    IataCode: "HOB",
    Location: "-103.175138, 32.694305"
  }),
  new Geo({
    IataCode: "HOM",
    Location: "-151.476389, 59.645278"
  }),
  new Geo({
    IataCode: "HOT",
    Location: "-93.053856, 34.495522"
  }),
  new Geo({
    IataCode: "HOU",
    Location: "-95.36327, 29.76328"
  }),
  new Geo({
    IataCode: "HPB",
    Location: "-166.096802, 61.535788"
  }),
  new Geo({
    IataCode: "HPN",
    Location: "-73.74763, 41.03899"
  }),
  new Geo({
    IataCode: "HRL",
    Location: "-97.65, 26.233333"
  }),
  new Geo({
    IataCode: "HRO",
    Location: "-93.10768, 36.22979"
  }),
  new Geo({
    IataCode: "HSL",
    Location: "-156.375, 65.7025"
  }),
  new Geo({
    IataCode: "HSV",
    Location: "-86.5861, 34.73037"
  }),
  new Geo({
    IataCode: "HTS",
    Location: "-82.468081, 38.412364"
  }),
  new Geo({
    IataCode: "HUS",
    Location: "-154.26281, 66.045075"
  }),
  new Geo({
    IataCode: "HVN",
    Location: "-72.92816, 41.30815"
  }),
  new Geo({
    IataCode: "HVR",
    Location: "-109.761111, 48.544444"
  }),
  new Geo({
    IataCode: "HYA",
    Location: "-70.280556, 41.665833"
  }),
  new Geo({
    IataCode: "HYG",
    Location: "-132.826667, 55.206667"
  }),
  new Geo({
    IataCode: "HYL",
    Location: "-132.63639, 55.55667"
  }),
  new Geo({
    IataCode: "HYS",
    Location: "-99.274167, 38.846111"
  }),
  new Geo({
    IataCode: "IAG",
    Location: "-78.95, 43.1"
  }),
  new Geo({
    IataCode: "IAN",
    Location: "-160.430278, 66.971667"
  }),
  new Geo({
    IataCode: "ICT",
    Location: "-97.342791, 37.679243"
  }),
  new Geo({
    IataCode: "IDA",
    Location: "-112.064722, 43.516111"
  }),
  new Geo({
    IataCode: "IFP",
    Location: "-114.583333, 35.183333"
  }),
  new Geo({
    IataCode: "IGG",
    Location: "-155.9, 59.316667"
  }),
  new Geo({
    IataCode: "IKO",
    Location: "-168.85, 52.941667"
  }),
  new Geo({
    IataCode: "ILE",
    Location: "-97.702222, 31.106574"
  }),
  new Geo({
    IataCode: "ILI",
    Location: "-154.908333, 59.752778"
  }),
  new Geo({
    IataCode: "ILM",
    Location: "-77.903889, 34.266944"
  }),
  new Geo({
    IataCode: "IMT",
    Location: "-88.114167, 45.815556"
  }),
  new Geo({
    IataCode: "IND",
    Location: "-86.147685, 39.790942"
  }),
  new Geo({
    IataCode: "INL",
    Location: "-93.404167, 48.563056"
  }),
  new Geo({
    IataCode: "IPL",
    Location: "-115.574722, 32.837222"
  }),
  new Geo({
    IataCode: "IPT",
    Location: "-76.920556, 41.242222"
  }),
  new Geo({
    IataCode: "IRC",
    Location: "-144.063889, 65.829167"
  }),
  new Geo({
    IataCode: "IRK",
    Location: "-92.579444, 40.193611"
  }),
  new Geo({
    IataCode: "ISN",
    Location: "-103.636111, 48.176111"
  }),
  new Geo({
    IataCode: "ISP",
    Location: "-73.198889, 40.756667"
  }),
  new Geo({
    IataCode: "ITH",
    Location: "-76.458056, 42.490278"
  }),
  new Geo({
    IataCode: "ITO",
    Location: "-155.058056, 19.723611"
  }),
  new Geo({
    IataCode: "IWD",
    Location: "-90.131667, 46.525556"
  }),
  new Geo({
    IataCode: "JAC",
    Location: "-110.76243, 43.47993"
  }),
  new Geo({
    IataCode: "JAN",
    Location: "-90.184364, 32.300483"
  }),
  new Geo({
    IataCode: "JAX",
    Location: "-81.655884, 30.337621"
  }),
  new Geo({
    IataCode: "JBR",
    Location: "-90.648333, 35.83"
  }),
  new Geo({
    IataCode: "JHM",
    Location: "-156.653056, 20.996667"
  }),
  new Geo({
    IataCode: "JHW",
    Location: "-79.23533, 42.097"
  }),
  new Geo({
    IataCode: "JLN",
    Location: "-94.497778, 37.149722"
  }),
  new Geo({
    IataCode: "JMS",
    Location: "-98.707438, 46.912223"
  }),
  new Geo({
    IataCode: "JNU",
    Location: "-134.419722, 58.301944"
  }),
  new Geo({
    IataCode: "JST",
    Location: "-78.92197, 40.32674"
  }),
  new Geo({
    IataCode: "KAE",
    Location: "-133.94722, 56.97583"
  }),
  new Geo({
    IataCode: "KAL",
    Location: "-158.70163, 64.336934"
  }),
  new Geo({
    IataCode: "KBC",
    Location: "-145.8, 66.266667"
  }),
  new Geo({
    IataCode: "KCC",
    Location: "-132.824707, 56.017192"
  }),
  new Geo({
    IataCode: "KCL",
    Location: "-158.516666, 56.290902"
  }),
  new Geo({
    IataCode: "KEB",
    Location: "-151.922222, 59.352778"
  }),
  new Geo({
    IataCode: "KEH",
    Location: "-122.258056, 47.755"
  }),
  new Geo({
    IataCode: "KEK",
    Location: "-157.4775, 59.355278"
  }),
  new Geo({
    IataCode: "KFP",
    Location: "-163.409167, 54.849167"
  }),
  new Geo({
    IataCode: "KGK",
    Location: "-157.233333, 59.8"
  }),
  new Geo({
    IataCode: "KGX",
    Location: "-160.0625, 62.895278"
  }),
  new Geo({
    IataCode: "KKA",
    Location: "-161.15, 64.939444"
  }),
  new Geo({
    IataCode: "KKB",
    Location: "-152.35, 58.183333"
  }),
  new Geo({
    IataCode: "KKH",
    Location: "-162.75, 59.966667"
  }),
  new Geo({
    IataCode: "KKI",
    Location: "-161.422222, 60.906944"
  }),
  new Geo({
    IataCode: "KLG",
    Location: "-160.324444, 61.538333"
  }),
  new Geo({
    IataCode: "KLL",
    Location: "-156.863333, 59.118611"
  }),
  new Geo({
    IataCode: "KLN",
    Location: "-153.980255, 57.544576"
  }),
  new Geo({
    IataCode: "KLW",
    Location: "-133.1, 55.555"
  }),
  new Geo({
    IataCode: "KMO",
    Location: "-159.035833, 58.984444"
  }),
  new Geo({
    IataCode: "KMY",
    Location: "-154.15, 57.533333"
  }),
  new Geo({
    IataCode: "KNK",
    Location: "-154.85, 59.433333"
  }),
  new Geo({
    IataCode: "KNW",
    Location: "-157.329722, 59.452222"
  }),
  new Geo({
    IataCode: "KOA",
    Location: "-155.99556, 19.64056"
  }),
  new Geo({
    IataCode: "KOT",
    Location: "-163.553295, 63.034806"
  }),
  new Geo({
    IataCode: "KOY",
    Location: "-154.2275, 57.162222"
  }),
  new Geo({
    IataCode: "KOZ",
    Location: "-152.509804, 57.922324"
  }),
  new Geo({
    IataCode: "KPB",
    Location: "-133.583333, 56.333333"
  }),
  new Geo({
    IataCode: "KPN",
    Location: "-164.05, 59.933333"
  }),
  new Geo({
    IataCode: "KPR",
    Location: "-152.583333, 58.433333"
  }),
  new Geo({
    IataCode: "KPV",
    Location: "-159.145, 55.906667"
  }),
  new Geo({
    IataCode: "KPY",
    Location: "-153.033333, 57.933333"
  }),
  new Geo({
    IataCode: "KQA",
    Location: "-165.783333, 54.133333"
  }),
  new Geo({
    IataCode: "KSM",
    Location: "-163.298056, 62.061667"
  }),
  new Geo({
    IataCode: "KTB",
    Location: "-132.535, 55.688333"
  }),
  new Geo({
    IataCode: "KTN",
    Location: "-131.625833, 55.354028"
  }),
  new Geo({
    IataCode: "KTS",
    Location: "-166.48917, 65.33472"
  }),
  new Geo({
    IataCode: "KUK",
    Location: "-162.535805, 60.892005"
  }),
  new Geo({
    IataCode: "KVC",
    Location: "-162.313333, 55.055"
  }),
  new Geo({
    IataCode: "KVL",
    Location: "-164.533138, 67.728125"
  }),
  new Geo({
    IataCode: "KWF",
    Location: "-133.241667, 55.297222"
  }),
  new Geo({
    IataCode: "KWK",
    Location: "-163.13417, 59.86444"
  }),
  new Geo({
    IataCode: "KWN",
    Location: "-161.915817, 59.750429"
  }),
  new Geo({
    IataCode: "KWP",
    Location: "-153.55, 57.766944"
  }),
  new Geo({
    IataCode: "KWT",
    Location: "-161.4375, 60.808889"
  }),
  new Geo({
    IataCode: "KXA",
    Location: "-132.395833, 55.537778"
  }),
  new Geo({
    IataCode: "KYK",
    Location: "-154.45, 57.566111"
  }),
  new Geo({
    IataCode: "KYU",
    Location: "-157.713056, 64.878056"
  }),
  new Geo({
    IataCode: "KZB",
    Location: "-153.75, 57.55"
  }),
  new Geo({
    IataCode: "LAF",
    Location: "-86.933611, 40.411944"
  }),
  new Geo({
    IataCode: "LAL",
    Location: "-82, 28"
  }),
  new Geo({
    IataCode: "LAM",
    Location: "-106.316667, 35.883333"
  }),
  new Geo({
    IataCode: "LAN",
    Location: "-84.588333, 42.779167"
  }),
  new Geo({
    IataCode: "LAR",
    Location: "-105.673056, 41.313611"
  }),
  new Geo({
    IataCode: "LAS",
    Location: "-115.137, 36.176"
  }),
  new Geo({
    IataCode: "LAW",
    Location: "-98.416111, 34.569722"
  }),
  new Geo({
    IataCode: "LAX",
    Location: "-118.235027, 34.047889"
  }),
  new Geo({
    IataCode: "LBB",
    Location: "-101.836389, 33.622777"
  }),
  new Geo({
    IataCode: "LBE",
    Location: "-79.402778, 40.276389"
  }),
  new Geo({
    IataCode: "LBF",
    Location: "-100.696667, 41.128333"
  }),
  new Geo({
    IataCode: "LBL",
    Location: "-101, 37"
  }),
  new Geo({
    IataCode: "LCH",
    Location: "-93.225556, 30.131111"
  }),
  new Geo({
    IataCode: "LEB",
    Location: "-72.305833, 43.628056"
  }),
  new Geo({
    IataCode: "LEX",
    Location: "-84.501343, 38.045928"
  }),
  new Geo({
    IataCode: "LFT",
    Location: "-92.029444, 30.213889"
  }),
  new Geo({
    IataCode: "LGB",
    Location: "-118.151111, 33.8175"
  }),
  new Geo({
    IataCode: "LIH",
    Location: "-159.312057, 22.148616"
  }),
  new Geo({
    IataCode: "LIT",
    Location: "-92.234444, 34.729167"
  }),
  new Geo({
    IataCode: "LMA",
    Location: "-152.316667, 63.883333"
  }),
  new Geo({
    IataCode: "LNK",
    Location: "-96.66696, 40.8"
  }),
  new Geo({
    IataCode: "LNS",
    Location: "-76.299722, 40.121111"
  }),
  new Geo({
    IataCode: "LNY",
    Location: "-156.949444, 20.784722"
  }),
  new Geo({
    IataCode: "LRD",
    Location: "-99.461111, 27.544722"
  }),
  new Geo({
    IataCode: "LSE",
    Location: "-91.256389, 43.877222"
  }),
  new Geo({
    IataCode: "LUL",
    Location: "-89.13061, 31.69405"
  }),
  new Geo({
    IataCode: "LUP",
    Location: "-156.986046, 21.192255"
  }),
  new Geo({
    IataCode: "LUR",
    Location: "-166.106944, 68.875833"
  }),
  new Geo({
    IataCode: "LWB",
    Location: "-80.398611, 37.859722"
  }),
  new Geo({
    IataCode: "LWS",
    Location: "-117.000275, 46.406144"
  }),
  new Geo({
    IataCode: "LYH",
    Location: "-79.170205, 37.403672"
  }),
  new Geo({
    IataCode: "MAF",
    Location: "-102.100694, 31.970416"
  }),
  new Geo({
    IataCode: "MBL",
    Location: "-86.253333, 44.273889"
  }),
  new Geo({
    IataCode: "MBS",
    Location: "-84.243164, 43.622407"
  }),
  new Geo({
    IataCode: "MCE",
    Location: "-120.498055, 37.292361"
  }),
  new Geo({
    IataCode: "MCG",
    Location: "-155.577222, 62.951944"
  }),
  new Geo({
    IataCode: "MCK",
    Location: "-100.668056, 40.263889"
  }),
  new Geo({
    IataCode: "MCN",
    Location: "-83.6324, 32.84069"
  }),
  new Geo({
    IataCode: "MCW",
    Location: "-93.201944, 43.148611"
  }),
  new Geo({
    IataCode: "MDF",
    Location: "-90.333333, 45.15"
  }),
  new Geo({
    IataCode: "MEI",
    Location: "-88.749167, 32.337222"
  }),
  new Geo({
    IataCode: "MEM",
    Location: "-90.04898, 35.14953"
  }),
  new Geo({
    IataCode: "MFE",
    Location: "-98.286111, 26.258333"
  }),
  new Geo({
    IataCode: "MFR",
    Location: "-122.87693, 42.329235"
  }),
  new Geo({
    IataCode: "MGC",
    Location: "-86.816667, 41.7"
  }),
  new Geo({
    IataCode: "MGM",
    Location: "-86.341481, 32.355555"
  }),
  new Geo({
    IataCode: "MGW",
    Location: "-79.9559, 39.62953"
  }),
  new Geo({
    IataCode: "MHK",
    Location: "-96.57167, 39.18361"
  }),
  new Geo({
    IataCode: "MHT",
    Location: "-71.438889, 42.938333"
  }),
  new Geo({
    IataCode: "MIA",
    Location: "-80.19366, 25.77427"
  }),
  new Geo({
    IataCode: "MKC",
    Location: "-94.737986, 39.025069"
  }),
  new Geo({
    IataCode: "MKE",
    Location: "-88, 43"
  }),
  new Geo({
    IataCode: "MKG",
    Location: "-86.2375, 43.170556"
  }),
  new Geo({
    IataCode: "MKK",
    Location: "-157.1, 21.152778"
  }),
  new Geo({
    IataCode: "MKL",
    Location: "-88.814507, 35.619907"
  }),
  new Geo({
    IataCode: "MLB",
    Location: "-80.630278, 28.1025"
  }),
  new Geo({
    IataCode: "MLI",
    Location: "-90.505, 41.448889"
  }),
  new Geo({
    IataCode: "MLK",
    Location: "-107.871389, 48.355556"
  }),
  new Geo({
    IataCode: "MLL",
    Location: "-162.068889, 61.865833"
  }),
  new Geo({
    IataCode: "MLU",
    Location: "-92.1193, 32.50931"
  }),
  new Geo({
    IataCode: "MLY",
    Location: "-150.626667, 65.007778"
  }),
  new Geo({
    IataCode: "MMH",
    Location: "-118.971944, 37.648611"
  }),
  new Geo({
    IataCode: "MMU",
    Location: "-74.48154, 40.79677"
  }),
  new Geo({
    IataCode: "MNT",
    Location: "-149.37, 65.157778"
  }),
  new Geo({
    IataCode: "MOB",
    Location: "-88.043056, 30.694444"
  }),
  new Geo({
    IataCode: "MOT",
    Location: "-101.290416, 48.246527"
  }),
  new Geo({
    IataCode: "MOU",
    Location: "-163.716667, 62.089444"
  }),
  new Geo({
    IataCode: "MQT",
    Location: "-87.406667, 46.546389"
  }),
  new Geo({
    IataCode: "MRB",
    Location: "-77.985, 39.401667"
  }),
  new Geo({
    IataCode: "MRY",
    Location: "-121.92329, 36.55524"
  }),
  new Geo({
    IataCode: "MSL",
    Location: "-87.616111, 34.748611"
  }),
  new Geo({
    IataCode: "MSN",
    Location: "-89.366667, 43.083333"
  }),
  new Geo({
    IataCode: "MSO",
    Location: "-114.0875, 46.915556"
  }),
  new Geo({
    IataCode: "MSP",
    Location: "-93.181, 44.972944"
  }),
  new Geo({
    IataCode: "MSS",
    Location: "-74.846667, 44.937778"
  }),
  new Geo({
    IataCode: "MSY",
    Location: "-90.011111, 29.944444"
  }),
  new Geo({
    IataCode: "MTJ",
    Location: "-107.894722, 38.500556"
  }),
  new Geo({
    IataCode: "MTM",
    Location: "-131.571922, 55.129778"
  }),
  new Geo({
    IataCode: "MTW",
    Location: "-87.682222, 44.129722"
  }),
  new Geo({
    IataCode: "MUE",
    Location: "-155.87083, 19.94583"
  }),
  new Geo({
    IataCode: "MVL",
    Location: "-72.68456, 44.46533"
  }),
  new Geo({
    IataCode: "MVY",
    Location: "-70.675392, 41.385567"
  }),
  new Geo({
    IataCode: "MWA",
    Location: "-88.93313, 37.73061"
  }),
  new Geo({
    IataCode: "MYR",
    Location: "-78.827083, 33.745278"
  }),
  new Geo({
    IataCode: "MYU",
    Location: "-166.268056, 60.372778"
  }),
  new Geo({
    IataCode: "MZJ",
    Location: "-111.125556, 32.386667"
  }),
  new Geo({
    IataCode: "NIR",
    Location: "-97.75, 28.4"
  }),
  new Geo({
    IataCode: "NKI",
    Location: "-133.184722, 55.873611"
  }),
  new Geo({
    IataCode: "NLG",
    Location: "-161.1525, 56.001389"
  }),
  new Geo({
    IataCode: "NME",
    Location: "-164.7225, 60.477778"
  }),
  new Geo({
    IataCode: "NNL",
    Location: "-154.816667, 60"
  }),
  new Geo({
    IataCode: "NUI",
    Location: "-151.005556, 70.209722"
  }),
  new Geo({
    IataCode: "NUL",
    Location: "-158.076667, 64.727778"
  }),
  new Geo({
    IataCode: "NUP",
    Location: "-162.466667, 60.894444"
  }),
  new Geo({
    IataCode: "NYC",
    Location: "-73.972037, 40.730926"
  }),
  new Geo({
    IataCode: "OAJ",
    Location: "-77.422028, 34.75741"
  }),
  new Geo({
    IataCode: "OAK",
    Location: "-122.241111, 37.770139"
  }),
  new Geo({
    IataCode: "OBU",
    Location: "-156.883333, 66.910556"
  }),
  new Geo({
    IataCode: "OGD",
    Location: "-111.98875, 41.206528"
  }),
  new Geo({
    IataCode: "OGG",
    Location: "-156.433611, 20.900556"
  }),
  new Geo({
    IataCode: "OGS",
    Location: "-75.465833, 44.681667"
  }),
  new Geo({
    IataCode: "OKC",
    Location: "-97.512916, 35.431389"
  }),
  new Geo({
    IataCode: "OLF",
    Location: "-105.566389, 48.094722"
  }),
  new Geo({
    IataCode: "OLH",
    Location: "-153.3, 57.204167"
  }),
  new Geo({
    IataCode: "OMA",
    Location: "-95.894305, 41.302222"
  }),
  new Geo({
    IataCode: "OME",
    Location: "-165.441667, 64.511389"
  }),
  new Geo({
    IataCode: "ONT",
    Location: "-117.629028, 34.061944"
  }),
  new Geo({
    IataCode: "OOK",
    Location: "-165.108333, 60.531944"
  }),
  new Geo({
    IataCode: "ORF",
    Location: "-76.28522, 36.84681"
  }),
  new Geo({
    IataCode: "ORH",
    Location: "-71.874444, 42.269167"
  }),
  new Geo({
    IataCode: "ORI",
    Location: "-152.884369, 57.870871"
  }),
  new Geo({
    IataCode: "ORL",
    Location: "-81.3692, 28.5399"
  }),
  new Geo({
    IataCode: "ORT",
    Location: "-142, 63"
  }),
  new Geo({
    IataCode: "ORV",
    Location: "-161.023611, 66.829167"
  }),
  new Geo({
    IataCode: "OSB",
    Location: "-95.833333, 38.633333"
  }),
  new Geo({
    IataCode: "OTH",
    Location: "-124.24, 43.418889"
  }),
  new Geo({
    IataCode: "OTZ",
    Location: "-162.605833, 66.888056"
  }),
  new Geo({
    IataCode: "OWB",
    Location: "-87.165833, 37.740833"
  }),
  new Geo({
    IataCode: "PAE",
    Location: "-122.20208, 47.97898"
  }),
  new Geo({
    IataCode: "PAH",
    Location: "-88.6275, 37.072222"
  }),
  new Geo({
    IataCode: "PBI",
    Location: "-80.072083, 26.699444"
  }),
  new Geo({
    IataCode: "PDB",
    Location: "-154.116667, 59.783333"
  }),
  new Geo({
    IataCode: "PDT",
    Location: "-118.836111, 45.698333"
  }),
  new Geo({
    IataCode: "PDX",
    Location: "-122.67621, 45.52345"
  }),
  new Geo({
    IataCode: "PEC",
    Location: "-136.233333, 57.95"
  }),
  new Geo({
    IataCode: "ECP",
    Location: "-85.682638, 30.189583"
  }),
  new Geo({
    IataCode: "PGA",
    Location: "-111.447222, 36.926389"
  }),
  new Geo({
    IataCode: "PGD",
    Location: "-81.991389, 26.919167"
  }),
  new Geo({
    IataCode: "PGM",
    Location: "-151.833333, 59.35"
  }),
  new Geo({
    IataCode: "PGS",
    Location: "-113.416667, 35.533333"
  }),
  new Geo({
    IataCode: "PGV",
    Location: "-77.385278, 35.633333"
  }),
  new Geo({
    IataCode: "PHD",
    Location: "-81.45, 40.5"
  }),
  new Geo({
    IataCode: "PHF",
    Location: "-76.428333, 36.978611"
  }),
  new Geo({
    IataCode: "PHL",
    Location: "-75.112888, 39.993222"
  }),
  new Geo({
    IataCode: "PHO",
    Location: "-166.8, 68.35"
  }),
  new Geo({
    IataCode: "PHX",
    Location: "-112.0738, 33.4482"
  }),
  new Geo({
    IataCode: "PIA",
    Location: "-89.58899, 40.69365"
  }),
  new Geo({
    IataCode: "PIH",
    Location: "-112.447278, 42.875222"
  }),
  new Geo({
    IataCode: "PIP",
    Location: "-157.555972, 57.557916"
  }),
  new Geo({
    IataCode: "PIR",
    Location: "-100.284167, 44.383611"
  }),
  new Geo({
    IataCode: "PIT",
    Location: "-80, 40.441667"
  }),
  new Geo({
    IataCode: "PIZ",
    Location: "-163.008613, 69.741023"
  }),
  new Geo({
    IataCode: "PKA",
    Location: "-161.758056, 60.710833"
  }),
  new Geo({
    IataCode: "PKB",
    Location: "-81.542222, 39.266111"
  }),
  new Geo({
    IataCode: "PLB",
    Location: "-73.502222, 44.694166"
  }),
  new Geo({
    IataCode: "PLN",
    Location: "-84.78394, 45.55279"
  }),
  new Geo({
    IataCode: "PML",
    Location: "-160.558333, 56.005556"
  }),
  new Geo({
    IataCode: "PNS",
    Location: "-87.195416, 30.458541"
  }),
  new Geo({
    IataCode: "PPV",
    Location: "-133.597612, 56.317774"
  }),
  new Geo({
    IataCode: "PQI",
    Location: "-68.0475, 46.685"
  }),
  new Geo({
    IataCode: "PQS",
    Location: "-162.890556, 61.934722"
  }),
  new Geo({
    IataCode: "PRC",
    Location: "-112.461389, 34.568333"
  }),
  new Geo({
    IataCode: "PSC",
    Location: "-119.114722, 46.263889"
  }),
  new Geo({
    IataCode: "PSG",
    Location: "-132.9425, 56.804167"
  }),
  new Geo({
    IataCode: "PSM",
    Location: "-70.76075, 43.07572"
  }),
  new Geo({
    IataCode: "PSP",
    Location: "-116.530278, 33.823889"
  }),
  new Geo({
    IataCode: "PTA",
    Location: "-145.333333, 60.2"
  }),
  new Geo({
    IataCode: "PTH",
    Location: "-158.655833, 56.948889"
  }),
  new Geo({
    IataCode: "PTU",
    Location: "-161.81529, 59.00689"
  }),
  new Geo({
    IataCode: "PUB",
    Location: "-104.620278, 38.266944"
  }),
  new Geo({
    IataCode: "PUW",
    Location: "-117.17962, 46.73127"
  }),
  new Geo({
    IataCode: "PVC",
    Location: "-70.182381, 42.064077"
  }),
  new Geo({
    IataCode: "PVD",
    Location: "-71.422222, 41.823611"
  }),
  new Geo({
    IataCode: "PVU",
    Location: "-111.722222, 40.218056"
  }),
  new Geo({
    IataCode: "PWM",
    Location: "-70.252719, 43.662159"
  }),
  new Geo({
    IataCode: "RAP",
    Location: "-103.228299, 44.076188"
  }),
  new Geo({
    IataCode: "RBY",
    Location: "-155.460833, 64.73"
  }),
  new Geo({
    IataCode: "RCE",
    Location: "-123.147984, 48.611916"
  }),
  new Geo({
    IataCode: "RDD",
    Location: "-122.370278, 40.576667"
  }),
  new Geo({
    IataCode: "RDM",
    Location: "-121.151389, 44.254444"
  }),
  new Geo({
    IataCode: "RDU",
    Location: "-78.781944, 35.875278"
  }),
  new Geo({
    IataCode: "RDV",
    Location: "-157.317352, 61.765328"
  }),
  new Geo({
    IataCode: "RHI",
    Location: "-89.411716, 45.639368"
  }),
  new Geo({
    IataCode: "RIC",
    Location: "-77.46254, 37.550021"
  }),
  new Geo({
    IataCode: "RIW",
    Location: "-108.3801, 43.02496"
  }),
  new Geo({
    IataCode: "RKD",
    Location: "-69.098056, 44.059167"
  }),
  new Geo({
    IataCode: "RKS",
    Location: "-109.2029, 41.58746"
  }),
  new Geo({
    IataCode: "RMP",
    Location: "-150.140278, 65.508333"
  }),
  new Geo({
    IataCode: "RNO",
    Location: "-119.7675, 39.497778"
  }),
  new Geo({
    IataCode: "ROA",
    Location: "-79.976389, 37.324722"
  }),
  new Geo({
    IataCode: "ROC",
    Location: "-77.670833, 43.121389"
  }),
  new Geo({
    IataCode: "ROW",
    Location: "-104.528056, 33.387222"
  }),
  new Geo({
    IataCode: "RSH",
    Location: "-161.319167, 61.783056"
  }),
  new Geo({
    IataCode: "RST",
    Location: "-92.481528, 43.963472"
  }),
  new Geo({
    IataCode: "RUT",
    Location: "-72.948333, 43.529444"
  }),
  new Geo({
    IataCode: "RVR",
    Location: "-110.25, 38.966667"
  }),
  new Geo({
    IataCode: "SAC",
    Location: "-121.468889, 38.555556"
  }),
  new Geo({
    IataCode: "SAN",
    Location: "-117.124682, 32.790158"
  }),
  new Geo({
    IataCode: "SAT",
    Location: "-98.494388, 29.441"
  }),
  new Geo({
    IataCode: "SAV",
    Location: "-81.149722, 32.105277"
  }),
  new Geo({
    IataCode: "SBA",
    Location: "-119.714167, 34.425833"
  }),
  new Geo({
    IataCode: "SBN",
    Location: "-86.3125, 41.704444"
  }),
  new Geo({
    IataCode: "SBS",
    Location: "-106.8625, 40.516667"
  }),
  new Geo({
    IataCode: "SBD",
    Location: "-117.258333, 34.108333"
  }),
  new Geo({
    IataCode: "SBY",
    Location: "-75.51, 38.338611"
  }),
  new Geo({
    IataCode: "SCC",
    Location: "-148.454132, 70.193946"
  }),
  new Geo({
    IataCode: "SCE",
    Location: "-77.881389, 40.770833"
  }),
  new Geo({
    IataCode: "SCM",
    Location: "-165.581474, 61.841328"
  }),
  new Geo({
    IataCode: "SDF",
    Location: "-85.746203, 37.571018"
  }),
  new Geo({
    IataCode: "SDP",
    Location: "-160.513889, 55.316667"
  }),
  new Geo({
    IataCode: "SDY",
    Location: "-104.191944, 47.706944"
  }),
  new Geo({
    IataCode: "SEA",
    Location: "-122.312222, 47.534537"
  }),
  new Geo({
    IataCode: "SFO",
    Location: "-122.4192, 37.7793"
  }),
  new Geo({
    IataCode: "SGF",
    Location: "-93.302765, 37.205996"
  }),
  new Geo({
    IataCode: "SGT",
    Location: "-91.533333, 34.5"
  }),
  new Geo({
    IataCode: "SGU",
    Location: "-113.592222, 37.093056"
  }),
  new Geo({
    IataCode: "SGY",
    Location: "-135.315556, 59.460556"
  }),
  new Geo({
    IataCode: "SHD",
    Location: "-79.076389, 38.158056"
  }),
  new Geo({
    IataCode: "SHG",
    Location: "-157.157778, 66.889722"
  }),
  new Geo({
    IataCode: "SHH",
    Location: "-166.058333, 66.256944"
  }),
  new Geo({
    IataCode: "SHR",
    Location: "-106.977222, 44.774167"
  }),
  new Geo({
    IataCode: "SHV",
    Location: "-93.72037, 32.495555"
  }),
  new Geo({
    IataCode: "SHX",
    Location: "-159.566667, 62.695833"
  }),
  new Geo({
    IataCode: "SIT",
    Location: "-135.338642, 57.051561"
  }),
  new Geo({
    IataCode: "SJC",
    Location: "-121.904444, 37.347222"
  }),
  new Geo({
    IataCode: "SJT",
    Location: "-100.463888, 31.413194"
  }),
  new Geo({
    IataCode: "SKK",
    Location: "-161.138889, 64.324167"
  }),
  new Geo({
    IataCode: "SLC",
    Location: "-111.966944, 40.784167"
  }),
  new Geo({
    IataCode: "SLK",
    Location: "-74.206667, 44.382778"
  }),
  new Geo({
    IataCode: "SLN",
    Location: "-97.6525, 38.790833"
  }),
  new Geo({
    IataCode: "SLQ",
    Location: "-157.166667, 61.705"
  }),
  new Geo({
    IataCode: "SMK",
    Location: "-162.027778, 63.484167"
  }),
  new Geo({
    IataCode: "SMX",
    Location: "-120.457778, 34.905"
  }),
  new Geo({
    IataCode: "SNA",
    Location: "-117.867685, 33.702963"
  }),
  new Geo({
    IataCode: "SNP",
    Location: "-170.275898, 57.123755"
  }),
  new Geo({
    IataCode: "SOV",
    Location: "-151.710205, 59.440799"
  }),
  new Geo({
    IataCode: "SOW",
    Location: "-110.004167, 34.264444"
  }),
  new Geo({
    IataCode: "SPI",
    Location: "-89.649467, 39.80458"
  }),
  new Geo({
    IataCode: "SPS",
    Location: "-98.515, 33.896944"
  }),
  new Geo({
    IataCode: "SRQ",
    Location: "-82.554167, 27.393889"
  }),
  new Geo({
    IataCode: "SRV",
    Location: "-156.586111, 61.791111"
  }),
  new Geo({
    IataCode: "SSI",
    Location: "-81.473402, 31.166292"
  }),
  new Geo({
    IataCode: "SSM",
    Location: "-84.35, 46.5"
  }),
  new Geo({
    IataCode: "STC",
    Location: "-94.0599, 45.56"
  }),
  new Geo({
    IataCode: "STG",
    Location: "-169.5525, 56.6"
  }),
  new Geo({
    IataCode: "STL",
    Location: "-90.167542, 38.61687"
  }),
  new Geo({
    IataCode: "STS",
    Location: "-122.704722, 38.448611"
  }),
  new Geo({
    IataCode: "SUN",
    Location: "-114.306251, 43.514937"
  }),
  new Geo({
    IataCode: "SUX",
    Location: "-96.395556, 42.498056"
  }),
  new Geo({
    IataCode: "SVA",
    Location: "-170.459444, 63.693333"
  }),
  new Geo({
    IataCode: "SVC",
    Location: "-108.274167, 32.778056"
  }),
  new Geo({
    IataCode: "SVS",
    Location: "-149.094167, 66.009444"
  }),
  new Geo({
    IataCode: "SWO",
    Location: "-97.085556, 36.158889"
  }),
  new Geo({
    IataCode: "SXP",
    Location: "-164.849854, 62.533069"
  }),
  new Geo({
    IataCode: "SXY",
    Location: "-75.4, 42.316667"
  }),
  new Geo({
    IataCode: "SYB",
    Location: "-152.5, 58.166667"
  }),
  new Geo({
    IataCode: "SYR",
    Location: "-76.1025, 43.110556"
  }),
  new Geo({
    IataCode: "TAL",
    Location: "-152.108056, 65.175"
  }),
  new Geo({
    IataCode: "TBN",
    Location: "-92.15717, 37.70573"
  }),
  new Geo({
    IataCode: "TEB",
    Location: "-74.062222, 40.849722"
  }),
  new Geo({
    IataCode: "TEX",
    Location: "-107.816667, 37.933333"
  }),
  new Geo({
    IataCode: "TKE",
    Location: "-135.218868, 57.780719"
  }),
  new Geo({
    IataCode: "TKJ",
    Location: "-143, 63.3"
  }),
  new Geo({
    IataCode: "TLA",
    Location: "-166.361332, 65.261735"
  }),
  new Geo({
    IataCode: "TLH",
    Location: "-84.351944, 30.399722"
  }),
  new Geo({
    IataCode: "TLT",
    Location: "-160.964722, 61.098889"
  }),
  new Geo({
    IataCode: "TNC",
    Location: "-167.918889, 65.563889"
  }),
  new Geo({
    IataCode: "TNK",
    Location: "-165.25583, 60.58556"
  }),
  new Geo({
    IataCode: "TOG",
    Location: "-160.382222, 59.056667"
  }),
  new Geo({
    IataCode: "TOL",
    Location: "-83.575278, 41.665556"
  }),
  new Geo({
    IataCode: "TOP",
    Location: "-95.689444, 39.055833"
  }),
  new Geo({
    IataCode: "TPA",
    Location: "-82.46464, 27.970898"
  }),
  new Geo({
    IataCode: "TRI",
    Location: "-82.474194, 36.552139"
  }),
  new Geo({
    IataCode: "TUL",
    Location: "-95.992, 36.1538"
  }),
  new Geo({
    IataCode: "TUP",
    Location: "-88.767222, 34.258889"
  }),
  new Geo({
    IataCode: "TUS",
    Location: "-111.016389, 32.236111"
  }),
  new Geo({
    IataCode: "TVC",
    Location: "-85.585833, 44.74"
  }),
  new Geo({
    IataCode: "TVF",
    Location: "-96.185, 48.066111"
  }),
  new Geo({
    IataCode: "TWA",
    Location: "-160.284513, 59.077924"
  }),
  new Geo({
    IataCode: "TWF",
    Location: "-114.486667, 42.481944"
  }),
  new Geo({
    IataCode: "TXK",
    Location: "-93.989167, 33.456389"
  }),
  new Geo({
    IataCode: "TYR",
    Location: "-95.30106, 32.35126"
  }),
  new Geo({
    IataCode: "TYS",
    Location: "-83.92074, 35.96064"
  }),
  new Geo({
    IataCode: "UBS",
    Location: "-88.430328, 33.497316"
  }),
  new Geo({
    IataCode: "UGI",
    Location: "-153.4, 57.76667"
  }),
  new Geo({
    IataCode: "UIN",
    Location: "-91.392946, 39.936856"
  }),
  new Geo({
    IataCode: "UNK",
    Location: "-160.793889, 63.884722"
  }),
  new Geo({
    IataCode: "USA",
    Location: "-80.709167, 35.387778"
  }),
  new Geo({
    IataCode: "UST",
    Location: "-81.318741, 29.901675"
  }),
  new Geo({
    IataCode: "UTO",
    Location: "-154, 66"
  }),
  new Geo({
    IataCode: "VAK",
    Location: "-165.590278, 61.528611"
  }),
  new Geo({
    IataCode: "VCT",
    Location: "-97.0036, 28.80527"
  }),
  new Geo({
    IataCode: "VDZ",
    Location: "-146.238889, 61.1325"
  }),
  new Geo({
    IataCode: "VEE",
    Location: "-146.411111, 67.023056"
  }),
  new Geo({
    IataCode: "VEL",
    Location: "-109.510278, 40.438889"
  }),
  new Geo({
    IataCode: "VIS",
    Location: "-119.393889, 36.319444"
  }),
  new Geo({
    IataCode: "VLD",
    Location: "-83.280277, 30.808611"
  }),
  new Geo({
    IataCode: "VPS",
    Location: "-86.513611, 30.486388"
  }),
  new Geo({
    IataCode: "VRB",
    Location: "-80.413611, 27.6525"
  }),
  new Geo({
    IataCode: "WAA",
    Location: "-168.090833, 65.617222"
  }),
  new Geo({
    IataCode: "WAS",
    Location: "-77.030055, 38.876333"
  }),
  new Geo({
    IataCode: "WBB",
    Location: "-162.278889, 63.516667"
  }),
  new Geo({
    IataCode: "WBQ",
    Location: "-147.408333, 66.362222"
  }),
  new Geo({
    IataCode: "WHD",
    Location: "-130.083333, 55.916667"
  }),
  new Geo({
    IataCode: "WLK",
    Location: "-159.983333, 66.602778"
  }),
  new Geo({
    IataCode: "WMK",
    Location: "-132.183333, 55.733333"
  }),
  new Geo({
    IataCode: "WMO",
    Location: "-163.406667, 64.686944"
  }),
  new Geo({
    IataCode: "WNA",
    Location: "-162.116667, 60.7"
  }),
  new Geo({
    IataCode: "WRG",
    Location: "-132.366667, 56.484444"
  }),
  new Geo({
    IataCode: "WSN",
    Location: "-156.934167, 58.718611"
  }),
  new Geo({
    IataCode: "WSX",
    Location: "-122.883333, 48.666667"
  }),
  new Geo({
    IataCode: "WTK",
    Location: "-162.984167, 67.563056"
  }),
  new Geo({
    IataCode: "WTL",
    Location: "-162.664604, 60.344789"
  }),
  new Geo({
    IataCode: "WWP",
    Location: "-133.141944, 56.1125"
  }),
  new Geo({
    IataCode: "WWT",
    Location: "-164.630642, 60.943274"
  }),
  new Geo({
    IataCode: "WYS",
    Location: "-111.104722, 44.686667"
  }),
  new Geo({
    IataCode: "YAK",
    Location: "-139.659722, 59.509167"
  }),
  new Geo({
    IataCode: "YKM",
    Location: "-120.527222, 46.583472"
  }),
  new Geo({
    IataCode: "YNG",
    Location: "-80.649167, 41.096389"
  }),
  new Geo({
    IataCode: "YUM",
    Location: "-114.611805, 32.685417"
  }),
  new Geo({
    IataCode: "ZSH",
    Location: "-105.964444, 35.667222"
  }),
  new Geo({
    IataCode: "OFU",
    Location: "-169.6775, -14.17528"
  }),
  new Geo({
    IataCode: "PPG",
    Location: "-170.696389, -14.326389"
  }),
  new Geo({
    IataCode: "AAB",
    Location: "141.041667, -26.7"
  }),
  new Geo({
    IataCode: "ABM",
    Location: "142.4, -10.866667"
  }),
  new Geo({
    IataCode: "ABX",
    Location: "146.976667, -36.068333"
  }),
  new Geo({
    IataCode: "ADL",
    Location: "138.534722, -34.948333"
  }),
  new Geo({
    IataCode: "ALH",
    Location: "117.8814, -35.0228"
  }),
  new Geo({
    IataCode: "ARM",
    Location: "151.623333, -30.528333"
  }),
  new Geo({
    IataCode: "ASP",
    Location: "133.87, -23.7"
  }),
  new Geo({
    IataCode: "AUU",
    Location: "142.25, -13.166667"
  }),
  new Geo({
    IataCode: "AYQ",
    Location: "131.05, -25.333333"
  }),
  new Geo({
    IataCode: "BCI",
    Location: "145.301944, -23.559167"
  }),
  new Geo({
    IataCode: "BDB",
    Location: "152.320833, -24.905833"
  }),
  new Geo({
    IataCode: "BDD",
    Location: "142.183333, -10.15"
  }),
  new Geo({
    IataCode: "BEU",
    Location: "139.466667, -24.35"
  }),
  new Geo({
    IataCode: "BHQ",
    Location: "141.466667, -32.001667"
  }),
  new Geo({
    IataCode: "BHS",
    Location: "149.653333, -33.409167"
  }),
  new Geo({
    IataCode: "BKQ",
    Location: "145.46667, -24.41667"
  }),
  new Geo({
    IataCode: "BME",
    Location: "122.23333, -17.96667"
  }),
  new Geo({
    IataCode: "BNE",
    Location: "153.085556, -27.425"
  }),
  new Geo({
    IataCode: "BNK",
    Location: "153.55, -28.833333"
  }),
  new Geo({
    IataCode: "BQB",
    Location: "115.346, -33.648"
  }),
  new Geo({
    IataCode: "BQL",
    Location: "139.9, -22.9"
  }),
  new Geo({
    IataCode: "BRT",
    Location: "130.633333, -11.766667"
  }),
  new Geo({
    IataCode: "BUC",
    Location: "139.533333, -17.75"
  }),
  new Geo({
    IataCode: "BVI",
    Location: "139.343333, -25.898333"
  }),
  new Geo({
    IataCode: "BWT",
    Location: "145.891944, -41.063611"
  }),
  new Geo({
    IataCode: "BYP",
    Location: "119.166111, -22.673888"
  }),
  new Geo({
    IataCode: "CAZ",
    Location: "145.793333, -31.535"
  }),
  new Geo({
    IataCode: "CBI",
    Location: "147.991, -40.402"
  }),
  new Geo({
    IataCode: "CBR",
    Location: "149.195, -35.308889"
  }),
  new Geo({
    IataCode: "CED",
    Location: "133.705833, -32.131667"
  }),
  new Geo({
    IataCode: "CFS",
    Location: "153.120833, -30.321667"
  }),
  new Geo({
    IataCode: "CJF",
    Location: "118.813333, -22.966666"
  }),
  new Geo({
    IataCode: "CKI",
    Location: "132.533333, -11.2"
  }),
  new Geo({
    IataCode: "CMA",
    Location: "145.616111, -28.031389"
  }),
  new Geo({
    IataCode: "CNB",
    Location: "148.4, -30.95"
  }),
  new Geo({
    IataCode: "CNC",
    Location: "143.066667, -10.05"
  }),
  new Geo({
    IataCode: "CNJ",
    Location: "140.5, -20.666667"
  }),
  new Geo({
    IataCode: "CNS",
    Location: "145.76667, -16.91667"
  }),
  new Geo({
    IataCode: "CPD",
    Location: "134.752778, -29.044444"
  }),
  new Geo({
    IataCode: "CTL",
    Location: "146.2625, -26.413333"
  }),
  new Geo({
    IataCode: "CTN",
    Location: "145.183333, -15.443333"
  }),
  new Geo({
    IataCode: "CUQ",
    Location: "143.2, -13.941667"
  }),
  new Geo({
    IataCode: "CVQ",
    Location: "113.63333, -24.86667"
  }),
  new Geo({
    IataCode: "CXQ",
    Location: "125.916667, -18.866667"
  }),
  new Geo({
    IataCode: "DBO",
    Location: "148.5775, -32.219167"
  }),
  new Geo({
    IataCode: "DGE",
    Location: "149.616667, -32.566667"
  }),
  new Geo({
    IataCode: "DMD",
    Location: "138.833333, -18"
  }),
  new Geo({
    IataCode: "DPO",
    Location: "146.425, -41.170833"
  }),
  new Geo({
    IataCode: "DRB",
    Location: "123.68, -17.39"
  }),
  new Geo({
    IataCode: "DRW",
    Location: "130.872222, -12.416667"
  }),
  new Geo({
    IataCode: "EDR",
    Location: "141.616667, -14.9"
  }),
  new Geo({
    IataCode: "ELC",
    Location: "135.566667, -12.016667"
  }),
  new Geo({
    IataCode: "EMD",
    Location: "148.178333, -23.57"
  }),
  new Geo({
    IataCode: "EPR",
    Location: "121.892, -33.861"
  }),
  new Geo({
    IataCode: "FIZ",
    Location: "125.56695, -18.19413"
  }),
  new Geo({
    IataCode: "FLS",
    Location: "147.996667, -40.095"
  }),
  new Geo({
    IataCode: "GBL",
    Location: "133.366667, -11.633333"
  }),
  new Geo({
    IataCode: "GET",
    Location: "114.607, -28.779"
  }),
  new Geo({
    IataCode: "GFF",
    Location: "146.065833, -34.250833"
  }),
  new Geo({
    IataCode: "GFN",
    Location: "152.933333, -29.683333"
  }),
  new Geo({
    IataCode: "GIC",
    Location: "142.202911, -9.252581"
  }),
  new Geo({
    IataCode: "GLT",
    Location: "151.254167, -23.833333"
  }),
  new Geo({
    IataCode: "GOV",
    Location: "136.821667, -12.281667"
  }),
  new Geo({
    IataCode: "GPN",
    Location: "130.016667, -11.766667"
  }),
  new Geo({
    IataCode: "GTE",
    Location: "136.41917, -13.84833"
  }),
  new Geo({
    IataCode: "GTS",
    Location: "133.616667, -26.966667"
  }),
  new Geo({
    IataCode: "GYL",
    Location: "128.666667, -16.333333"
  }),
  new Geo({
    IataCode: "HBA",
    Location: "147.325, -42.880556"
  }),
  new Geo({
    IataCode: "HCQ",
    Location: "127.668, -18.227"
  }),
  new Geo({
    IataCode: "HGD",
    Location: "144.224444, -20.818889"
  }),
  new Geo({
    IataCode: "HID",
    Location: "142.283333, -10.583333"
  }),
  new Geo({
    IataCode: "HIS",
    Location: "148.88569, -20.05642"
  }),
  new Geo({
    IataCode: "HTI",
    Location: "148.966667, -20.35"
  }),
  new Geo({
    IataCode: "HVB",
    Location: "152.843, -25.28"
  }),
  new Geo({
    IataCode: "IRG",
    Location: "143.343172, -12.786273"
  }),
  new Geo({
    IataCode: "ISA",
    Location: "139.488611, -20.663889"
  }),
  new Geo({
    IataCode: "IVR",
    Location: "151.118, -29.782"
  }),
  new Geo({
    IataCode: "JCK",
    Location: "141.7, -20.583333"
  }),
  new Geo({
    IataCode: "KCS",
    Location: "131.683333, -24.383333"
  }),
  new Geo({
    IataCode: "KGC",
    Location: "137.63426, -35.653013"
  }),
  new Geo({
    IataCode: "KGI",
    Location: "121.461667, -30.789444"
  }),
  new Geo({
    IataCode: "KNS",
    Location: "143.883333, -39.883333"
  }),
  new Geo({
    IataCode: "KNX",
    Location: "128.7075, -15.778056"
  }),
  new Geo({
    IataCode: "KRB",
    Location: "140.831944, -17.456667"
  }),
  new Geo({
    IataCode: "KTA",
    Location: "116.773333, -20.712222"
  }),
  new Geo({
    IataCode: "KTR",
    Location: "132.271389, -14.4575"
  }),
  new Geo({
    IataCode: "KUG",
    Location: "142.3, -10.233333"
  }),
  new Geo({
    IataCode: "KWM",
    Location: "141.748333, -15.4875"
  }),
  new Geo({
    IataCode: "LDH",
    Location: "159.079722, -31.5375"
  }),
  new Geo({
    IataCode: "LEA",
    Location: "114.081667, -22.235"
  }),
  new Geo({
    IataCode: "LEL",
    Location: "135.8, -12.508333"
  }),
  new Geo({
    IataCode: "LFP",
    Location: "144.005556, -15.05"
  }),
  new Geo({
    IataCode: "LLG",
    Location: "144.533333, -17.133333"
  }),
  new Geo({
    IataCode: "LNO",
    Location: "121.331592, -28.883047"
  }),
  new Geo({
    IataCode: "LRE",
    Location: "144.275556, -23.437222"
  }),
  new Geo({
    IataCode: "LST",
    Location: "147.145, -41.441944"
  }),
  new Geo({
    IataCode: "LSY",
    Location: "153.266667, -28.833333"
  }),
  new Geo({
    IataCode: "LVO",
    Location: "122.366667, -28.633333"
  }),
  new Geo({
    IataCode: "LZR",
    Location: "145.466667, -14.666667"
  }),
  new Geo({
    IataCode: "MCV",
    Location: "136.095, -16.466667"
  }),
  new Geo({
    IataCode: "MCY",
    Location: "153.091666, -26.603333"
  }),
  new Geo({
    IataCode: "MEL",
    Location: "144.963056, -37.813611"
  }),
  new Geo({
    IataCode: "MGB",
    Location: "140.780556, -37.754167"
  }),
  new Geo({
    IataCode: "MGT",
    Location: "134.890278, -12.096667"
  }),
  new Geo({
    IataCode: "MIM",
    Location: "149.92, -36.908333"
  }),
  new Geo({
    IataCode: "MJK",
    Location: "113.717222, -25.794722"
  }),
  new Geo({
    IataCode: "MKR",
    Location: "118.55, -26.6"
  }),
  new Geo({
    IataCode: "MKY",
    Location: "149.179722, -21.171667"
  }),
  new Geo({
    IataCode: "MMG",
    Location: "117.85, -28.083333"
  }),
  new Geo({
    IataCode: "MNG",
    Location: "134.225807, -12.047211"
  }),
  new Geo({
    IataCode: "MOV",
    Location: "149.533333, -22.116667"
  }),
  new Geo({
    IataCode: "MQL",
    Location: "142.085, -34.2275"
  }),
  new Geo({
    IataCode: "MRZ",
    Location: "149.845556, -29.498333"
  }),
  new Geo({
    IataCode: "MYA",
    Location: "150.1, -35.916667"
  }),
  new Geo({
    IataCode: "MYI",
    Location: "144.05, -9.908333"
  }),
  new Geo({
    IataCode: "NAA",
    Location: "149.833333, -30.3"
  }),
  new Geo({
    IataCode: "NAC",
    Location: "140.833333, -36.95"
  }),
  new Geo({
    IataCode: "NIF",
    Location: "121.586111, -21.675"
  }),
  new Geo({
    IataCode: "NLF",
    Location: "143.783333, -9.583333"
  }),
  new Geo({
    IataCode: "NLK",
    Location: "167.938064, -29.042583"
  }),
  new Geo({
    IataCode: "NRA",
    Location: "146.525, -34.701667"
  }),
  new Geo({
    IataCode: "NTL",
    Location: "151.75, -32.914583"
  }),
  new Geo({
    IataCode: "NTN",
    Location: "141.069722, -17.688333"
  }),
  new Geo({
    IataCode: "OAG",
    Location: "149.1, -33.283333"
  }),
  new Geo({
    IataCode: "OCM",
    Location: "117.273333, 22.539721"
  }),
  new Geo({
    IataCode: "OKR",
    Location: "143.466667, -9.766667"
  }),
  new Geo({
    IataCode: "OLP",
    Location: "136, -31"
  }),
  new Geo({
    IataCode: "ONG",
    Location: "139.3, -16.583333"
  }),
  new Geo({
    IataCode: "ONS",
    Location: "115.1, -21.666667"
  }),
  new Geo({
    IataCode: "OOL",
    Location: "153.428, -28.017"
  }),
  new Geo({
    IataCode: "OOM",
    Location: "149.125833, -36.235"
  }),
  new Geo({
    IataCode: "PBO",
    Location: "117.75, -23.166667"
  }),
  new Geo({
    IataCode: "PER",
    Location: "115.858889, -31.952222"
  }),
  new Geo({
    IataCode: "PHE",
    Location: "118.601, -20.31"
  }),
  new Geo({
    IataCode: "PKE",
    Location: "148.2425, -33.130833"
  }),
  new Geo({
    IataCode: "PLO",
    Location: "135.858644, -34.732195"
  }),
  new Geo({
    IataCode: "PMK",
    Location: "146.666667, -18.333333"
  }),
  new Geo({
    IataCode: "PPP",
    Location: "148.552222, -20.495"
  }),
  new Geo({
    IataCode: "PQQ",
    Location: "152.866667, -31.433333"
  }),
  new Geo({
    IataCode: "PTI",
    Location: "145.463889, -16.486111"
  }),
  new Geo({
    IataCode: "PTJ",
    Location: "141.625, -38.384167"
  }),
  new Geo({
    IataCode: "PUG",
    Location: "137.766667, -32.5"
  }),
  new Geo({
    IataCode: "RAM",
    Location: "134.816667, -12"
  }),
  new Geo({
    IataCode: "RBS",
    Location: "148.5, -37.7"
  }),
  new Geo({
    IataCode: "RCM",
    Location: "143.116667, -20.703889"
  }),
  new Geo({
    IataCode: "RMA",
    Location: "148.773056, -26.547222"
  }),
  new Geo({
    IataCode: "ROK",
    Location: "150.475278, -23.381944"
  }),
  new Geo({
    IataCode: "RTS",
    Location: "115.536667, -32.006944"
  }),
  new Geo({
    IataCode: "RVT",
    Location: "120.044174, -33.581733"
  }),
  new Geo({
    IataCode: "SBR",
    Location: "142.633333, -9.383333"
  }),
  new Geo({
    IataCode: "SGO",
    Location: "148.593889, -28.053333"
  }),
  new Geo({
    IataCode: "SNB",
    Location: "130.670657, -11.417101"
  }),
  new Geo({
    IataCode: "SYD",
    Location: "151.211111, -33.859972"
  }),
  new Geo({
    IataCode: "SYU",
    Location: "142.816667, -10.208333"
  }),
  new Geo({
    IataCode: "TCA",
    Location: "134.190102, -19.654551"
  }),
  new Geo({
    IataCode: "TMW",
    Location: "150.846667, -31.083889"
  }),
  new Geo({
    IataCode: "TRO",
    Location: "152.45, -31.9"
  }),
  new Geo({
    IataCode: "TSV",
    Location: "146.766667, -19.25"
  }),
  new Geo({
    IataCode: "TWB",
    Location: "151.913889, -27.542222"
  }),
  new Geo({
    IataCode: "UBB",
    Location: "142.183333, -9.95"
  }),
  new Geo({
    IataCode: "ULP",
    Location: "144.25, -26.61667"
  }),
  new Geo({
    IataCode: "WEI",
    Location: "141.925278, -12.678611"
  }),
  new Geo({
    IataCode: "WGA",
    Location: "147.368889, -35.118889"
  }),
  new Geo({
    IataCode: "WIN",
    Location: "143.066667, -22.35"
  }),
  new Geo({
    IataCode: "WLP",
    Location: "118.690449, -23.131641"
  }),
  new Geo({
    IataCode: "WMB",
    Location: "142.48, -38.38"
  }),
  new Geo({
    IataCode: "WNR",
    Location: "142.666667, -25.416667"
  }),
  new Geo({
    IataCode: "WOL",
    Location: "150.883056, -34.433056"
  }),
  new Geo({
    IataCode: "WUN",
    Location: "120.224934, -26.593056"
  }),
  new Geo({
    IataCode: "WWI",
    Location: "121.233333, -21.633333"
  }),
  new Geo({
    IataCode: "WYA",
    Location: "137.510556, -33.060556"
  }),
  new Geo({
    IataCode: "XMY",
    Location: "142.45, -10.483333"
  }),
  new Geo({
    IataCode: "XTG",
    Location: "143.766667, -27.966667"
  }),
  new Geo({
    IataCode: "ZBL",
    Location: "150.5167, -24.4"
  }),
  new Geo({
    IataCode: "ZNE",
    Location: "119.8, -23.416667"
  }),
  new Geo({
    IataCode: "AIT",
    Location: "-159.75, -18.85"
  }),
  new Geo({
    IataCode: "AIU",
    Location: "-158.11667, -20.01667"
  }),
  new Geo({
    IataCode: "MGS",
    Location: "-157.916667, -21.916667"
  }),
  new Geo({
    IataCode: "MHX",
    Location: "-161, -10.366667"
  }),
  new Geo({
    IataCode: "MOI",
    Location: "-158, -19.5"
  }),
  new Geo({
    IataCode: "MUK",
    Location: "-158.5, -19.333333"
  }),
  new Geo({
    IataCode: "PYE",
    Location: "-158.033333, -9.016667"
  }),
  new Geo({
    IataCode: "PZK",
    Location: "-165.816667, -10.883333"
  }),
  new Geo({
    IataCode: "RAR",
    Location: "-159.8, -21.200278"
  }),
  new Geo({
    IataCode: "ICI",
    Location: "-179.333333, -17.75"
  }),
  new Geo({
    IataCode: "KDV",
    Location: "178.38333, -19.03333"
  }),
  new Geo({
    IataCode: "KXF",
    Location: "179.383333, -17.316667"
  }),
  new Geo({
    IataCode: "LBS",
    Location: "179.36667, -16.41667"
  }),
  new Geo({
    IataCode: "LKB",
    Location: "178.8, -18.23306"
  }),
  new Geo({
    IataCode: "LUC",
    Location: "178.51667, -18.15"
  }),
  new Geo({
    IataCode: "NAN",
    Location: "177.447778, -17.753056"
  }),
  new Geo({
    IataCode: "RTA",
    Location: "172.5, -14.5"
  }),
  new Geo({
    IataCode: "SUV",
    Location: "178.4419, -18.1416"
  }),
  new Geo({
    IataCode: "SVU",
    Location: "179.383333, -16.766667"
  }),
  new Geo({
    IataCode: "TVU",
    Location: "179.874167, -16.693056"
  }),
  new Geo({
    IataCode: "VBV",
    Location: "-178.95, -17.233333"
  }),
  new Geo({
    IataCode: "KSA",
    Location: "162.975, 5.35"
  }),
  new Geo({
    IataCode: "PNI",
    Location: "158.208989, 6.9851"
  }),
  new Geo({
    IataCode: "TKK",
    Location: "151.843022, 7.461892"
  }),
  new Geo({
    IataCode: "YAP",
    Location: "138.082497, 9.498911"
  }),
  new Geo({
    IataCode: "GUM",
    Location: "144.767916, 13.465139"
  }),
  new Geo({
    IataCode: "ABF",
    Location: "173.304167, 1.670833"
  }),
  new Geo({
    IataCode: "BBG",
    Location: "172.75, 3.166667"
  }),
  new Geo({
    IataCode: "CXI",
    Location: "-157.358667, 1.991167"
  }),
  new Geo({
    IataCode: "KUC",
    Location: "173.383333, 0.233333"
  }),
  new Geo({
    IataCode: "MNK",
    Location: "173, 1"
  }),
  new Geo({
    IataCode: "MZK",
    Location: "173.666667, 1.983333"
  }),
  new Geo({
    IataCode: "NIG",
    Location: "176.416667, -1.333333"
  }),
  new Geo({
    IataCode: "TRW",
    Location: "173.15, 1.378333"
  }),
  new Geo({
    IataCode: "AIC",
    Location: "168.825497, 7.278821"
  }),
  new Geo({
    IataCode: "AIM",
    Location: "169.983333, 10.2"
  }),
  new Geo({
    IataCode: "AUL",
    Location: "171.166667, 8.133333"
  }),
  new Geo({
    IataCode: "BII",
    Location: "166, 12"
  }),
  new Geo({
    IataCode: "EAL",
    Location: "166.847222, 9.333333"
  }),
  new Geo({
    IataCode: "EBO",
    Location: "168.75, 4.6"
  }),
  new Geo({
    IataCode: "EJT",
    Location: "171.95, 6.083333"
  }),
  new Geo({
    IataCode: "ENT",
    Location: "162.333333, 11.5"
  }),
  new Geo({
    IataCode: "JEJ",
    Location: "169, 7.5"
  }),
  new Geo({
    IataCode: "KBT",
    Location: "170.845, 8.893333"
  }),
  new Geo({
    IataCode: "KIO",
    Location: "169.2, 5.65"
  }),
  new Geo({
    IataCode: "KWA",
    Location: "167.739172, 8.732568"
  }),
  new Geo({
    IataCode: "LIK",
    Location: "169.316667, 9.816667"
  }),
  new Geo({
    IataCode: "LML",
    Location: "166.25, 8.916667"
  }),
  new Geo({
    IataCode: "MAJ",
    Location: "171.272031, 7.064981"
  }),
  new Geo({
    IataCode: "MAV",
    Location: "171.1, 8.75"
  }),
  new Geo({
    IataCode: "MJB",
    Location: "170.883333, 10.283333"
  }),
  new Geo({
    IataCode: "MJE",
    Location: "170, 9"
  }),
  new Geo({
    IataCode: "NDK",
    Location: "168.116667, 5.633333"
  }),
  new Geo({
    IataCode: "RNP",
    Location: "166.883333, 11.15"
  }),
  new Geo({
    IataCode: "UJE",
    Location: "165.65, 9.05"
  }),
  new Geo({
    IataCode: "UTK",
    Location: "169.866667, 11.233333"
  }),
  new Geo({
    IataCode: "WJA",
    Location: "170, 8.833333"
  }),
  new Geo({
    IataCode: "WTE",
    Location: "170.266667, 9.45"
  }),
  new Geo({
    IataCode: "WTO",
    Location: "166.033333, 10.166667"
  }),
  new Geo({
    IataCode: "ROP",
    Location: "145.215569, 14.152556"
  }),
  new Geo({
    IataCode: "SPN",
    Location: "145.748749, 15.201374"
  }),
  new Geo({
    IataCode: "BMY",
    Location: "163.6623, -19.717586"
  }),
  new Geo({
    IataCode: "ILP",
    Location: "167.45018, -22.58073"
  }),
  new Geo({
    IataCode: "KNQ",
    Location: "164.851819, -21.059025"
  }),
  new Geo({
    IataCode: "KOC",
    Location: "164.261903, -20.562058"
  }),
  new Geo({
    IataCode: "LIF",
    Location: "167.23306, -20.76667"
  }),
  new Geo({
    IataCode: "MEE",
    Location: "168, -21.566667"
  }),
  new Geo({
    IataCode: "NOU",
    Location: "166.458, -22.2758"
  }),
  new Geo({
    IataCode: "TGJ",
    Location: "167.8, -21"
  }),
  new Geo({
    IataCode: "TOU",
    Location: "165.259167, -20.791111"
  }),
  new Geo({
    IataCode: "UVE",
    Location: "166.666667, -20.5"
  }),
  new Geo({
    IataCode: "INU",
    Location: "166.916667, -0.533333"
  }),
  new Geo({
    IataCode: "IUE",
    Location: "-169.917641, -19.101702"
  }),
  new Geo({
    IataCode: "AKL",
    Location: "174.739869, -36.840417"
  }),
  new Geo({
    IataCode: "BHE",
    Location: "173.872222, -41.516667"
  }),
  new Geo({
    IataCode: "CHC",
    Location: "172.533333, -43.488333"
  }),
  new Geo({
    IataCode: "CHT",
    Location: "-176.457308, -43.810042"
  }),
  new Geo({
    IataCode: "DUD",
    Location: "170.5, -45.866667"
  }),
  new Geo({
    IataCode: "GBZ",
    Location: "175.416667, -36.25"
  }),
  new Geo({
    IataCode: "GIS",
    Location: "177.972222, -38.659722"
  }),
  new Geo({
    IataCode: "HKK",
    Location: "170.986667, -42.716111"
  }),
  new Geo({
    IataCode: "HLZ",
    Location: "175.335278, -37.866389"
  }),
  new Geo({
    IataCode: "IVC",
    Location: "168.355865, -46.41218"
  }),
  new Geo({
    IataCode: "KAT",
    Location: "173.283333, -35.069444"
  }),
  new Geo({
    IataCode: "KBZ",
    Location: "173.683333, -42.416667"
  }),
  new Geo({
    IataCode: "KKE",
    Location: "173.95, -35.216667"
  }),
  new Geo({
    IataCode: "KTF",
    Location: "172.8, -40.85"
  }),
  new Geo({
    IataCode: "MON",
    Location: "170.128888, -43.921944"
  }),
  new Geo({
    IataCode: "MRO",
    Location: "175.633611, -40.973333"
  }),
  new Geo({
    IataCode: "NPE",
    Location: "176.866667, -39.466667"
  }),
  new Geo({
    IataCode: "NPL",
    Location: "174.083333, -39.066667"
  }),
  new Geo({
    IataCode: "NSN",
    Location: "173.221111, -41.298333"
  }),
  new Geo({
    IataCode: "NZK",
    Location: "172.111208, -41.246999"
  }),
  new Geo({
    IataCode: "PCN",
    Location: "174.033333, -41.35"
  }),
  new Geo({
    IataCode: "PMR",
    Location: "175.616944, -40.320556"
  }),
  new Geo({
    IataCode: "PPQ",
    Location: "174.983333, -40.9"
  }),
  new Geo({
    IataCode: "ROT",
    Location: "176.316667, -38.111111"
  }),
  new Geo({
    IataCode: "TIU",
    Location: "171.25, -44.4"
  }),
  new Geo({
    IataCode: "TRG",
    Location: "176.165771, -37.683141"
  }),
  new Geo({
    IataCode: "TUO",
    Location: "176.084444, -38.739722"
  }),
  new Geo({
    IataCode: "WAG",
    Location: "175.048599, -39.927642"
  }),
  new Geo({
    IataCode: "WHK",
    Location: "176.914167, -37.920556"
  }),
  new Geo({
    IataCode: "WKA",
    Location: "169.243056, -44.725278"
  }),
  new Geo({
    IataCode: "WLG",
    Location: "174.777374, -41.284901"
  }),
  new Geo({
    IataCode: "WRE",
    Location: "174.365, -35.768333"
  }),
  new Geo({
    IataCode: "WSZ",
    Location: "171.605415, -41.751849"
  }),
  new Geo({
    IataCode: "ZQN",
    Location: "168.739167, -45.021111"
  }),
  new Geo({
    IataCode: "AAA",
    Location: "-145.416667, -17.05"
  }),
  new Geo({
    IataCode: "AHE",
    Location: "-146.256944, -14.428056"
  }),
  new Geo({
    IataCode: "APK",
    Location: "-146.083333, -15.416667"
  }),
  new Geo({
    IataCode: "AUQ",
    Location: "-139.037132, -9.802275"
  }),
  new Geo({
    IataCode: "AXR",
    Location: "-146.75, -15.25"
  }),
  new Geo({
    IataCode: "BOB",
    Location: "-151.748333, -16.443056"
  }),
  new Geo({
    IataCode: "FAC",
    Location: "-145.333333, -16.683333"
  }),
  new Geo({
    IataCode: "FAV",
    Location: "-145.616667, -16.316667"
  }),
  new Geo({
    IataCode: "FGU",
    Location: "-141.833333, -16.05"
  }),
  new Geo({
    IataCode: "FHZ",
    Location: "-140.083333, -16"
  }),
  new Geo({
    IataCode: "GMR",
    Location: "-135, -23.166667"
  }),
  new Geo({
    IataCode: "HHZ",
    Location: "-142.66667, -17.55"
  }),
  new Geo({
    IataCode: "HOI",
    Location: "-140.956944, -18.064167"
  }),
  new Geo({
    IataCode: "HUH",
    Location: "-151.007595, -16.726139"
  }),
  new Geo({
    IataCode: "KHZ",
    Location: "-145.116667, -15.766667"
  }),
  new Geo({
    IataCode: "KKR",
    Location: "-146.666667, -15.783333"
  }),
  new Geo({
    IataCode: "KXU",
    Location: "-144.403056, -16.339444"
  }),
  new Geo({
    IataCode: "MAU",
    Location: "-152.234201, -16.444153"
  }),
  new Geo({
    IataCode: "MKP",
    Location: "-143.666667, -16.45"
  }),
  new Geo({
    IataCode: "MOZ",
    Location: "-149.761667, -17.489722"
  }),
  new Geo({
    IataCode: "MVT",
    Location: "-148.416667, -14.833333"
  }),
  new Geo({
    IataCode: "NAU",
    Location: "-141.267222, -14.176667"
  }),
  new Geo({
    IataCode: "NHV",
    Location: "-140.228611, -8.795556"
  }),
  new Geo({
    IataCode: "NIU",
    Location: "-146.36673, -16.1329"
  }),
  new Geo({
    IataCode: "NUK",
    Location: "-138.7, -19.183333"
  }),
  new Geo({
    IataCode: "PKP",
    Location: "-138.812778, -14.809444"
  }),
  new Geo({
    IataCode: "PPT",
    Location: "-149.613889, -17.547222"
  }),
  new Geo({
    IataCode: "PUK",
    Location: "-137, -18.266667"
  }),
  new Geo({
    IataCode: "REA",
    Location: "-136.439444, -18.465833"
  }),
  new Geo({
    IataCode: "RFP",
    Location: "-151.46667, -16.723333"
  }),
  new Geo({
    IataCode: "RGI",
    Location: "-147.700882, -14.941468"
  }),
  new Geo({
    IataCode: "RKA",
    Location: "-145.469971, -15.477504"
  }),
  new Geo({
    IataCode: "RMT",
    Location: "-152.815704, -22.64063"
  }),
  new Geo({
    IataCode: "RRR",
    Location: "-142.485809, -16.06297"
  }),
  new Geo({
    IataCode: "RUR",
    Location: "-151.360556, -22.433889"
  }),
  new Geo({
    IataCode: "RVV",
    Location: "-147.68333, -23.86667"
  }),
  new Geo({
    IataCode: "TIH",
    Location: "-147.75, -15"
  }),
  new Geo({
    IataCode: "TJN",
    Location: "-142.266944, -15.850556"
  }),
  new Geo({
    IataCode: "TKP",
    Location: "-145.141667, -15.45"
  }),
  new Geo({
    IataCode: "TKV",
    Location: "-138.333333, -17.283333"
  }),
  new Geo({
    IataCode: "TKX",
    Location: "-145.024444, -14.455556"
  }),
  new Geo({
    IataCode: "TUB",
    Location: "-149.486504, -23.370623"
  }),
  new Geo({
    IataCode: "UAH",
    Location: "-139.55, -8.933333"
  }),
  new Geo({
    IataCode: "UAP",
    Location: "-139.916667, -9.511111"
  }),
  new Geo({
    IataCode: "VHZ",
    Location: "-138.833333, -18.583333"
  }),
  new Geo({
    IataCode: "XMH",
    Location: "-146.07, -14.436667"
  }),
  new Geo({
    IataCode: "ZTA",
    Location: "-138.508759, -20.861378"
  }),
  new Geo({
    IataCode: "ATP",
    Location: "142.35, -3.175"
  }),
  new Geo({
    IataCode: "BUA",
    Location: "154.666667, -5.433333"
  }),
  new Geo({
    IataCode: "BUL",
    Location: "146.647778, -7.189722"
  }),
  new Geo({
    IataCode: "CMU",
    Location: "144.974444, -5.993889"
  }),
  new Geo({
    IataCode: "DAO",
    Location: "147.849444, -8.433056"
  }),
  new Geo({
    IataCode: "DAU",
    Location: "143.193333, -9.087222"
  }),
  new Geo({
    IataCode: "GKA",
    Location: "145.397778, -6.079167"
  }),
  new Geo({
    IataCode: "GUR",
    Location: "150.338611, -10.310833"
  }),
  new Geo({
    IataCode: "HGU",
    Location: "144.296111, -5.826111"
  }),
  new Geo({
    IataCode: "HKN",
    Location: "150.416667, -5.475278"
  }),
  new Geo({
    IataCode: "KIE",
    Location: "155.633333, -6.216667"
  }),
  new Geo({
    IataCode: "KTK",
    Location: "154.75, -5.338889"
  }),
  new Geo({
    IataCode: "KVG",
    Location: "150.815556, -2.577778"
  }),
  new Geo({
    IataCode: "LAE",
    Location: "146.995, -6.737222"
  }),
  new Geo({
    IataCode: "LNM",
    Location: "146.216667, -7.216667"
  }),
  new Geo({
    IataCode: "LNV",
    Location: "152.64164, -3.063382"
  }),
  new Geo({
    IataCode: "LSA",
    Location: "151.06667, -8.53333"
  }),
  new Geo({
    IataCode: "MAG",
    Location: "145.7887, -5.207083"
  }),
  new Geo({
    IataCode: "MAS",
    Location: "147.424444, -2.056667"
  }),
  new Geo({
    IataCode: "MDU",
    Location: "143.65, -6.158611"
  }),
  new Geo({
    IataCode: "MIS",
    Location: "152.77485, -10.62286"
  }),
  new Geo({
    IataCode: "MXH",
    Location: "143.281116, -6.382689"
  }),
  new Geo({
    IataCode: "PNP",
    Location: "148.226111, -8.775278"
  }),
  new Geo({
    IataCode: "POM",
    Location: "147.210278, -9.445"
  }),
  new Geo({
    IataCode: "RAB",
    Location: "152.183333, -4.2"
  }),
  new Geo({
    IataCode: "SQT",
    Location: "150.683333, -10.55"
  }),
  new Geo({
    IataCode: "SSS",
    Location: "147.816667, -5.616667"
  }),
  new Geo({
    IataCode: "TBG",
    Location: "141.225815, -5.274213"
  }),
  new Geo({
    IataCode: "TEP",
    Location: "146.56667, -5.95"
  }),
  new Geo({
    IataCode: "TFI",
    Location: "149.315186, -9.065483"
  }),
  new Geo({
    IataCode: "TIZ",
    Location: "142.950556, -5.848889"
  }),
  new Geo({
    IataCode: "UNG",
    Location: "141.291667, -6.116667"
  }),
  new Geo({
    IataCode: "VAI",
    Location: "141.301944, -2.694722"
  }),
  new Geo({
    IataCode: "WBM",
    Location: "143.916667, -5.616667"
  }),
  new Geo({
    IataCode: "WWK",
    Location: "143.669186, -3.583828"
  }),
  new Geo({
    IataCode: "ROR",
    Location: "134.553056, 7.364444"
  }),
  new Geo({
    IataCode: "AKS",
    Location: "160.680833, -8.697778"
  }),
  new Geo({
    IataCode: "ATD",
    Location: "161.033333, -8.866667"
  }),
  new Geo({
    IataCode: "BAS",
    Location: "155.883333, -6.983333"
  }),
  new Geo({
    IataCode: "BNY",
    Location: "159.76078, -11.274713"
  }),
  new Geo({
    IataCode: "CHY",
    Location: "156.706238, -6.973116"
  }),
  new Geo({
    IataCode: "EGM",
    Location: "157.877312, -8.576268"
  }),
  new Geo({
    IataCode: "FRE",
    Location: "159.583333, -8.1"
  }),
  new Geo({
    IataCode: "GZO",
    Location: "156.833782, -8.103078"
  }),
  new Geo({
    IataCode: "HIR",
    Location: "159.95, -9.43333"
  }),
  new Geo({
    IataCode: "IRA",
    Location: "161.916667, -10.45"
  }),
  new Geo({
    IataCode: "KGE",
    Location: "157.586111, -8.165"
  }),
  new Geo({
    IataCode: "KWS",
    Location: "160.77444, -8.35904"
  }),
  new Geo({
    IataCode: "MUA",
    Location: "157.27272, -8.326837"
  }),
  new Geo({
    IataCode: "NNB",
    Location: "162.456036, -10.838701"
  }),
  new Geo({
    IataCode: "PRS",
    Location: "161.42734, -9.64724"
  }),
  new Geo({
    IataCode: "RBV",
    Location: "157.639444, -8.165556"
  }),
  new Geo({
    IataCode: "RNA",
    Location: "161.983056, -9.864444"
  }),
  new Geo({
    IataCode: "RNL",
    Location: "160.3, -11.666667"
  }),
  new Geo({
    IataCode: "RUS",
    Location: "161.25, -8.5"
  }),
  new Geo({
    IataCode: "SCZ",
    Location: "166.85, -11.616667"
  }),
  new Geo({
    IataCode: "VAO",
    Location: "158.666667, -7.566667"
  }),
  new Geo({
    IataCode: "DIL",
    Location: "125.5772, -8.5333"
  }),
  new Geo({
    IataCode: "EUA",
    Location: "-174.959167, -21.375833"
  }),
  new Geo({
    IataCode: "HPA",
    Location: "-174.34972, -19.8"
  }),
  new Geo({
    IataCode: "NFO",
    Location: "-175.65, -15.6"
  }),
  new Geo({
    IataCode: "NTT",
    Location: "-174, -15.5"
  }),
  new Geo({
    IataCode: "TBU",
    Location: "-175.15, -21.25"
  }),
  new Geo({
    IataCode: "VAV",
    Location: "-173.962778, -18.585278"
  }),
  new Geo({
    IataCode: "FUN",
    Location: "179.208333, -8.516667"
  }),
  new Geo({
    IataCode: "AUY",
    Location: "169.772415, -20.225154"
  }),
  new Geo({
    IataCode: "AWD",
    Location: "169.5, -19.25"
  }),
  new Geo({
    IataCode: "CCV",
    Location: "167.474899, -16.181046"
  }),
  new Geo({
    IataCode: "DLY",
    Location: "169.15, -18.7"
  }),
  new Geo({
    IataCode: "EAE",
    Location: "168.379211, -17.069585"
  }),
  new Geo({
    IataCode: "FTA",
    Location: "170.211182, -19.531966"
  }),
  new Geo({
    IataCode: "IPA",
    Location: "169.183333, -18.75"
  }),
  new Geo({
    IataCode: "LNB",
    Location: "168.183333, -16.583333"
  }),
  new Geo({
    IataCode: "LNE",
    Location: "168.16667, -15.85"
  }),
  new Geo({
    IataCode: "LOD",
    Location: "167.966667, -15.316667"
  }),
  new Geo({
    IataCode: "LPM",
    Location: "167.816667, -16.466667"
  }),
  new Geo({
    IataCode: "MTV",
    Location: "167.666667, -13.666667"
  }),
  new Geo({
    IataCode: "MWF",
    Location: "168.118973, -15.150677"
  }),
  new Geo({
    IataCode: "NUS",
    Location: "167.4, -16.058333"
  }),
  new Geo({
    IataCode: "PBJ",
    Location: "168.236389, -16.459793"
  }),
  new Geo({
    IataCode: "SLH",
    Location: "167.55, -13.883333"
  }),
  new Geo({
    IataCode: "SON",
    Location: "167.216667, -15.516667"
  }),
  new Geo({
    IataCode: "SSR",
    Location: "168.3, -15.5"
  }),
  new Geo({
    IataCode: "SWJ",
    Location: "167.430267, -16.459793"
  }),
  new Geo({
    IataCode: "TAH",
    Location: "169.25, -19.333333"
  }),
  new Geo({
    IataCode: "TGH",
    Location: "168.546667, -16.903611"
  }),
  new Geo({
    IataCode: "TOH",
    Location: "166.75, -13.166667"
  }),
  new Geo({
    IataCode: "ULB",
    Location: "168.333333, -16.416667"
  }),
  new Geo({
    IataCode: "VLI",
    Location: "168.321884, -17.73381"
  }),
  new Geo({
    IataCode: "VLS",
    Location: "168.2, -16.8"
  }),
  new Geo({
    IataCode: "WLH",
    Location: "167.7, -15.416667"
  }),
  new Geo({
    IataCode: "ZGU",
    Location: "167.5, -14.25"
  }),
  new Geo({
    IataCode: "FUT",
    Location: "-178.120308, -14.290335"
  }),
  new Geo({
    IataCode: "WLS",
    Location: "-176.15, -13.23333"
  }),
  new Geo({
    IataCode: "APW",
    Location: "-171.766667, -13.833333"
  }),
  new Geo({
    IataCode: "AFA",
    Location: "-68.400556, -34.589167"
  }),
  new Geo({
    IataCode: "APZ",
    Location: "-70.083333, -38.916667"
  }),
  new Geo({
    IataCode: "BHI",
    Location: "-62.266667, -38.716667"
  }),
  new Geo({
    IataCode: "BRC",
    Location: "-71.3, -41.15"
  }),
  new Geo({
    IataCode: "BUE",
    Location: "-58.381667, -34.603333"
  }),
  new Geo({
    IataCode: "CNQ",
    Location: "-58.761944, -27.445556"
  }),
  new Geo({
    IataCode: "COC",
    Location: "-58.033333, -31.4"
  }),
  new Geo({
    IataCode: "COR",
    Location: "-64.199444, -31.313056"
  }),
  new Geo({
    IataCode: "CPC",
    Location: "-71.35, -40.166667"
  }),
  new Geo({
    IataCode: "CRD",
    Location: "-67.462778, -45.787222"
  }),
  new Geo({
    IataCode: "CTC",
    Location: "-65.779722, -28.448333"
  }),
  new Geo({
    IataCode: "EHL",
    Location: "-71.51639, -41.96667"
  }),
  new Geo({
    IataCode: "EPA",
    Location: "-58.6125, -34.608333"
  }),
  new Geo({
    IataCode: "EQS",
    Location: "-71.316667, -42.9"
  }),
  new Geo({
    IataCode: "FMA",
    Location: "-58.228056, -26.212778"
  }),
  new Geo({
    IataCode: "FTE",
    Location: "-72.283333, -50.333333"
  }),
  new Geo({
    IataCode: "IGR",
    Location: "-54.566667, -25.566667"
  }),
  new Geo({
    IataCode: "IRJ",
    Location: "-66.85, -29.433"
  }),
  new Geo({
    IataCode: "JUJ",
    Location: "-65.3, -24.183333"
  }),
  new Geo({
    IataCode: "LGS",
    Location: "-69.585, -35.479722"
  }),
  new Geo({
    IataCode: "MDQ",
    Location: "-57.572222, -37.934722"
  }),
  new Geo({
    IataCode: "MDZ",
    Location: "-68.784722, -32.831944"
  }),
  new Geo({
    IataCode: "NQN",
    Location: "-68.152222, -38.95"
  }),
  new Geo({
    IataCode: "OES",
    Location: "-64.95, -40.733333"
  }),
  new Geo({
    IataCode: "PMQ",
    Location: "-70.933333, -46.6"
  }),
  new Geo({
    IataCode: "PMY",
    Location: "-65.03851, -42.7692"
  }),
  new Geo({
    IataCode: "PRA",
    Location: "-60.48, -31.795"
  }),
  new Geo({
    IataCode: "PSS",
    Location: "-55.9675, -27.383889"
  }),
  new Geo({
    IataCode: "RCQ",
    Location: "-59.7, -29.183333"
  }),
  new Geo({
    IataCode: "RCU",
    Location: "-64.34967, -33.128351"
  }),
  new Geo({
    IataCode: "REL",
    Location: "-65.270278, -43.210556"
  }),
  new Geo({
    IataCode: "RES",
    Location: "-59.050833, -27.451389"
  }),
  new Geo({
    IataCode: "RGA",
    Location: "-67.75, -53.7775"
  }),
  new Geo({
    IataCode: "RGL",
    Location: "-69.312778, -51.608889"
  }),
  new Geo({
    IataCode: "RHD",
    Location: "-64.866667, -27.483333"
  }),
  new Geo({
    IataCode: "ROS",
    Location: "-60.666667, -32.95"
  }),
  new Geo({
    IataCode: "RSA",
    Location: "-64.278611, -36.591389"
  }),
  new Geo({
    IataCode: "LUQ",
    Location: "-66.3586, -33.2744"
  }),
  new Geo({
    IataCode: "SDE",
    Location: "-64.299722, -27.755556"
  }),
  new Geo({
    IataCode: "SFN",
    Location: "-60.7, -31.633333"
  }),
  new Geo({
    IataCode: "SLA",
    Location: "-65.416667, -24.783333"
  }),
  new Geo({
    IataCode: "TDL",
    Location: "-59.083333, -37.333333"
  }),
  new Geo({
    IataCode: "TUC",
    Location: "-65.216667, -26.833056"
  }),
  new Geo({
    IataCode: "UAQ",
    Location: "-68.526111, -31.534167"
  }),
  new Geo({
    IataCode: "USH",
    Location: "-68.327778, -54.802778"
  }),
  new Geo({
    IataCode: "VDM",
    Location: "-62.997778, -40.868889"
  }),
  new Geo({
    IataCode: "VLG",
    Location: "-56.973724, -37.256566"
  }),
  new Geo({
    IataCode: "BYC",
    Location: "-63.64972, -21.94972"
  }),
  new Geo({
    IataCode: "CBB",
    Location: "-66.171667, -17.428333"
  }),
  new Geo({
    IataCode: "CCA",
    Location: "-65.147795, -16.995348"
  }),
  new Geo({
    IataCode: "CIJ",
    Location: "-68.78306, -11.03306"
  }),
  new Geo({
    IataCode: "GYA",
    Location: "-65.34972, -10.81667"
  }),
  new Geo({
    IataCode: "LPB",
    Location: "-68.201389, -16.506944"
  }),
  new Geo({
    IataCode: "MHW",
    Location: "-63.98333, -19.81667"
  }),
  new Geo({
    IataCode: "ORU",
    Location: "-67.080833, -17.964167"
  }),
  new Geo({
    IataCode: "POI",
    Location: "-65.716667, -19.533333"
  }),
  new Geo({
    IataCode: "RBQ",
    Location: "-67.55, -14.45"
  }),
  new Geo({
    IataCode: "RIB",
    Location: "-66.11639, -11"
  }),
  new Geo({
    IataCode: "SBL",
    Location: "-65.45, -13.716667"
  }),
  new Geo({
    IataCode: "SRE",
    Location: "-65.2626, -19.0339"
  }),
  new Geo({
    IataCode: "SRZ",
    Location: "-63.152916, -17.71875"
  }),
  new Geo({
    IataCode: "TDD",
    Location: "-64.9, -14.83333"
  }),
  new Geo({
    IataCode: "TJA",
    Location: "-64.745833, -21.554167"
  }),
  new Geo({
    IataCode: "UYU",
    Location: "-66.8333, -20.4667"
  }),
  new Geo({
    IataCode: "AAX",
    Location: "-46.929167, -19.568056"
  }),
  new Geo({
    IataCode: "AFL",
    Location: "-56.087222, -9.886111"
  }),
  new Geo({
    IataCode: "AJU",
    Location: "-37.05, -10.9167"
  }),
  new Geo({
    IataCode: "AQA",
    Location: "-48.133333, -21.816667"
  }),
  new Geo({
    IataCode: "ARU",
    Location: "-50.426111, -21.143611"
  }),
  new Geo({
    IataCode: "ATM",
    Location: "-52.216667, -3.2"
  }),
  new Geo({
    IataCode: "AUB",
    Location: "-63.35, -5.76"
  }),
  new Geo({
    IataCode: "AUX",
    Location: "-48.2, -7.2"
  }),
  new Geo({
    IataCode: "BAU",
    Location: "-49.0525, -22.343056"
  }),
  new Geo({
    IataCode: "BAZ",
    Location: "-62.933611, -0.966944"
  }),
  new Geo({
    IataCode: "BEL",
    Location: "-48.483333, -1.45"
  }),
  new Geo({
    IataCode: "BHZ",
    Location: "-43.93778, -19.92083"
  }),
  new Geo({
    IataCode: "BPG",
    Location: "-52.256667, -15.89"
  }),
  new Geo({
    IataCode: "BPS",
    Location: "-39.083333, -16.533333"
  }),
  new Geo({
    IataCode: "BRA",
    Location: "-45.008333, -12.073056"
  }),
  new Geo({
    IataCode: "BSB",
    Location: "-47.915278, -15.860556"
  }),
  new Geo({
    IataCode: "BVB",
    Location: "-60.666667, 2.833333"
  }),
  new Geo({
    IataCode: "BVH",
    Location: "-60.093611, -12.701667"
  }),
  new Geo({
    IataCode: "BYO",
    Location: "-56.456111, -21.229444"
  }),
  new Geo({
    IataCode: "BZC",
    Location: "-41.964444, -22.769444"
  }),
  new Geo({
    IataCode: "CAC",
    Location: "-53.466667, -24.95"
  }),
  new Geo({
    IataCode: "CAF",
    Location: "-66.89583, -4.88278"
  }),
  new Geo({
    IataCode: "CAW",
    Location: "-41.3, -21.75"
  }),
  new Geo({
    IataCode: "CCM",
    Location: "-49.366667, -28.7"
  }),
  new Geo({
    IataCode: "CFB",
    Location: "-42.078611, -22.925"
  }),
  new Geo({
    IataCode: "CFC",
    Location: "-50.941389, -26.790556"
  }),
  new Geo({
    IataCode: "CGB",
    Location: "-56.116667, -15.65"
  }),
  new Geo({
    IataCode: "CGR",
    Location: "-54.6725, -20.463333"
  }),
  new Geo({
    IataCode: "CIZ",
    Location: "-63.133333, -4.083333"
  }),
  new Geo({
    IataCode: "CKS",
    Location: "-51.86667, -2.95"
  }),
  new Geo({
    IataCode: "CLV",
    Location: "-48.633333, -17.75"
  }),
  new Geo({
    IataCode: "CMG",
    Location: "-57.652778, -19.008889"
  }),
  new Geo({
    IataCode: "CPQ",
    Location: "-47.061996, -22.907171"
  }),
  new Geo({
    IataCode: "CPV",
    Location: "-35.9, -7.266667"
  }),
  new Geo({
    IataCode: "CWB",
    Location: "-49.25, -25.416667"
  }),
  new Geo({
    IataCode: "CXJ",
    Location: "-51.1875, -29.196944"
  }),
  new Geo({
    IataCode: "CZS",
    Location: "-72.67, -7.630833"
  }),
  new Geo({
    IataCode: "DIQ",
    Location: "-44.869444, -20.181389"
  }),
  new Geo({
    IataCode: "DOU",
    Location: "-54.805833, -22.220833"
  }),
  new Geo({
    IataCode: "ERM",
    Location: "-52.275556, -27.641667"
  }),
  new Geo({
    IataCode: "ERN",
    Location: "-69.883333, -6.583333"
  }),
  new Geo({
    IataCode: "FEC",
    Location: "-38.906111, -12.2025"
  }),
  new Geo({
    IataCode: "FEN",
    Location: "-32.416944, -3.850278"
  }),
  new Geo({
    IataCode: "FLN",
    Location: "-48.552222, -27.670278"
  }),
  new Geo({
    IataCode: "FOR",
    Location: "-38.534444, -3.776667"
  }),
  new Geo({
    IataCode: "FRC",
    Location: "-47.382778, -20.591944"
  }),
  new Geo({
    IataCode: "GEL",
    Location: "-54.168889, -28.281667"
  }),
  new Geo({
    IataCode: "GVR",
    Location: "-41.933333, -18.850278"
  }),
  new Geo({
    IataCode: "GYN",
    Location: "-49.226614, -16.629881"
  }),
  new Geo({
    IataCode: "HUW",
    Location: "-63.020833, -7.506111"
  }),
  new Geo({
    IataCode: "IGU",
    Location: "-54.483333, -25.6"
  }),
  new Geo({
    IataCode: "IMP",
    Location: "-47.458333, -5.530556"
  }),
  new Geo({
    IataCode: "IOS",
    Location: "-39.033611, -14.814722"
  }),
  new Geo({
    IataCode: "IPN",
    Location: "-42.4875, -19.470556"
  }),
  new Geo({
    IataCode: "IRZ",
    Location: "-65.018889, -0.413889"
  }),
  new Geo({
    IataCode: "ITB",
    Location: "-55.983333, -4.283333"
  }),
  new Geo({
    IataCode: "ITN",
    Location: "-39.28028, -14.78556"
  }),
  new Geo({
    IataCode: "JCB",
    Location: "-51.516667, -27.166667"
  }),
  new Geo({
    IataCode: "JDF",
    Location: "-43.385556, -21.793056"
  }),
  new Geo({
    IataCode: "JDO",
    Location: "-39.316667, -7.2"
  }),
  new Geo({
    IataCode: "JJD",
    Location: "-40.17167, -2.91778"
  }),
  new Geo({
    IataCode: "JJG",
    Location: "-49.024367, -28.630887"
  }),
  new Geo({
    IataCode: "JOI",
    Location: "-48.8437, -26.3204"
  }),
  new Geo({
    IataCode: "JPA",
    Location: "-34.833333, -7.083333"
  }),
  new Geo({
    IataCode: "JPR",
    Location: "-62.866667, -8.05"
  }),
  new Geo({
    IataCode: "LAJ",
    Location: "-50.316667, -27.8"
  }),
  new Geo({
    IataCode: "LBR",
    Location: "-64.85, -7.25"
  }),
  new Geo({
    IataCode: "LDB",
    Location: "-51.136667, -23.330278"
  }),
  new Geo({
    IataCode: "LEC",
    Location: "-41.390991, -12.557244"
  }),
  new Geo({
    IataCode: "MAB",
    Location: "-49.138056, -5.368056"
  }),
  new Geo({
    IataCode: "MAO",
    Location: "-60.016667, -3.1"
  }),
  new Geo({
    IataCode: "MCP",
    Location: "-51.070556, 0.050833"
  }),
  new Geo({
    IataCode: "MCZ",
    Location: "-35.7375, -9.6637"
  }),
  new Geo({
    IataCode: "MEA",
    Location: "-41.8, -22.35"
  }),
  new Geo({
    IataCode: "MGF",
    Location: "-51.906944, -23.44"
  }),
  new Geo({
    IataCode: "MII",
    Location: "-49.933333, -22.2"
  }),
  new Geo({
    IataCode: "MOC",
    Location: "-43.821944, -16.706111"
  }),
  new Geo({
    IataCode: "MVF",
    Location: "-37.343889, -5.187778"
  }),
  new Geo({
    IataCode: "MVS",
    Location: "-39.566667, -18.083333"
  }),
  new Geo({
    IataCode: "NAT",
    Location: "-35.20944, -5.795"
  }),
  new Geo({
    IataCode: "NVT",
    Location: "-48.651389, -26.88"
  }),
  new Geo({
    IataCode: "OAL",
    Location: "-61.4825, -11.433889"
  }),
  new Geo({
    IataCode: "OPS",
    Location: "-55.46, -11.85"
  }),
  new Geo({
    IataCode: "PAV",
    Location: "-38.21472, -9.40611"
  }),
  new Geo({
    IataCode: "PET",
    Location: "-52.328056, -31.718889"
  }),
  new Geo({
    IataCode: "PFB",
    Location: "-52.333333, -28.25"
  }),
  new Geo({
    IataCode: "PGZ",
    Location: "-50.15, -25.083333"
  }),
  new Geo({
    IataCode: "PHB",
    Location: "-41.738333, -2.891667"
  }),
  new Geo({
    IataCode: "PHI",
    Location: "-45.083333, -2.516667"
  }),
  new Geo({
    IataCode: "PIN",
    Location: "-56.733333, -2.633333"
  }),
  new Geo({
    IataCode: "PMW",
    Location: "-48.352778, -10.241667"
  }),
  new Geo({
    IataCode: "PNZ",
    Location: "-40.566389, -9.366667"
  }),
  new Geo({
    IataCode: "POA",
    Location: "-51, -30"
  }),
  new Geo({
    IataCode: "PPB",
    Location: "-51.45, -22.1"
  }),
  new Geo({
    IataCode: "PVH",
    Location: "-63.902778, -8.713611"
  }),
  new Geo({
    IataCode: "QPT",
    Location: "-46.533333, -18.583333"
  }),
  new Geo({
    IataCode: "RAO",
    Location: "-47.776667, -21.136389"
  }),
  new Geo({
    IataCode: "RBR",
    Location: "-67.8, -9.966667"
  }),
  new Geo({
    IataCode: "REC",
    Location: "-34.923889, -8.125833"
  }),
  new Geo({
    IataCode: "RIA",
    Location: "-53.6875, -29.710556"
  }),
  new Geo({
    IataCode: "RIG",
    Location: "-52.1667, -32.0833"
  }),
  new Geo({
    IataCode: "RIO",
    Location: "-43.211111, -22.9"
  }),
  new Geo({
    IataCode: "ROO",
    Location: "-54.716667, -16.433333"
  }),
  new Geo({
    IataCode: "RVD",
    Location: "-50.933333, -17.716667"
  }),
  new Geo({
    IataCode: "SAO",
    Location: "-46.63611, -23.5475"
  }),
  new Geo({
    IataCode: "SJK",
    Location: "-45.871111, -23.228889"
  }),
  new Geo({
    IataCode: "SJL",
    Location: "-67.081146, -0.119476"
  }),
  new Geo({
    IataCode: "SJP",
    Location: "-49.406389, -20.816389"
  }),
  new Geo({
    IataCode: "SLZ",
    Location: "-44.30278, -2.52972"
  }),
  new Geo({
    IataCode: "SMT",
    Location: "-55.722798, -12.549679"
  }),
  new Geo({
    IataCode: "OLC",
    Location: "-68.8725, -3.37833"
  }),
  new Geo({
    IataCode: "SRA",
    Location: "-54.483333, -27.866667"
  }),
  new Geo({
    IataCode: "SSA",
    Location: "-38.476667, -12.974722"
  }),
  new Geo({
    IataCode: "STM",
    Location: "-54.7, -2.433333"
  }),
  new Geo({
    IataCode: "TBT",
    Location: "-69.933333, -4.233333"
  }),
  new Geo({
    IataCode: "TFF",
    Location: "-64.725, -3.380833"
  }),
  new Geo({
    IataCode: "THE",
    Location: "-42.824444, -5.060556"
  }),
  new Geo({
    IataCode: "TJL",
    Location: "-51.678333, -20.751111"
  }),
  new Geo({
    IataCode: "TMT",
    Location: "-55.583333, -1.916667"
  }),
  new Geo({
    IataCode: "TSQ",
    Location: "-49.746111, -29.3325"
  }),
  new Geo({
    IataCode: "TUR",
    Location: "-49.733333, -3.7"
  }),
  new Geo({
    IataCode: "TXF",
    Location: "-37.15722, -7.12944"
  }),
  new Geo({
    IataCode: "UBA",
    Location: "-47.966111, -19.764444"
  }),
  new Geo({
    IataCode: "UDI",
    Location: "-48.225278, -18.883611"
  }),
  new Geo({
    IataCode: "URG",
    Location: "-57.038333, -29.781944"
  }),
  new Geo({
    IataCode: "VAG",
    Location: "-45.473333, -21.59"
  }),
  new Geo({
    IataCode: "VAL",
    Location: "-39.083333, -13.333333"
  }),
  new Geo({
    IataCode: "VDC",
    Location: "-40.866667, -14.883333"
  }),
  new Geo({
    IataCode: "VIX",
    Location: "-40.2875, -20.264444"
  }),
  new Geo({
    IataCode: "XAP",
    Location: "-52.629722, -27.088611"
  }),
  new Geo({
    IataCode: "ANF",
    Location: "-70.4, -23.65"
  }),
  new Geo({
    IataCode: "ARI",
    Location: "-70.333333, -18.483333"
  }),
  new Geo({
    IataCode: "BBA",
    Location: "-71.686944, -45.916389"
  }),
  new Geo({
    IataCode: "CCP",
    Location: "-73.06, -36.768333"
  }),
  new Geo({
    IataCode: "CJC",
    Location: "-68.903611, -22.498333"
  }),
  new Geo({
    IataCode: "CPO",
    Location: "-70.333056, -27.366389"
  }),
  new Geo({
    IataCode: "ESR",
    Location: "-69.616667, -26.25"
  }),
  new Geo({
    IataCode: "IPC",
    Location: "-109.366667, -27.116667"
  }),
  new Geo({
    IataCode: "IQQ",
    Location: "-70.15, -20.216667"
  }),
  new Geo({
    IataCode: "KNA",
    Location: "-71.566667, -33.033333"
  }),
  new Geo({
    IataCode: "LSC",
    Location: "-71.199444, -29.916389"
  }),
  new Geo({
    IataCode: "PMC",
    Location: "-72.933333, -41.466667"
  }),
  new Geo({
    IataCode: "PNT",
    Location: "-72.516667, -51.683333"
  }),
  new Geo({
    IataCode: "PUQ",
    Location: "-70.8775, -53.126389"
  }),
  new Geo({
    IataCode: "SCL",
    Location: "-70.726111, -33.428194"
  }),
  new Geo({
    IataCode: "TLX",
    Location: "-71.666667, -35.466667"
  }),
  new Geo({
    IataCode: "VAP",
    Location: "-71.666667, -33.033333"
  }),
  new Geo({
    IataCode: "WCA",
    Location: "-73.833333, -42.5"
  }),
  new Geo({
    IataCode: "WPR",
    Location: "-70.333333, -53.25"
  }),
  new Geo({
    IataCode: "WPU",
    Location: "-67.616667, -54.933333"
  }),
  new Geo({
    IataCode: "YAI",
    Location: "-72.116667, -36.6"
  }),
  new Geo({
    IataCode: "ZAL",
    Location: "-73.239444, -39.791667"
  }),
  new Geo({
    IataCode: "ZCO",
    Location: "-72.637222, -38.75"
  }),
  new Geo({
    IataCode: "ZOS",
    Location: "-73.055556, -40.607778"
  }),
  new Geo({
    IataCode: "ZPC",
    Location: "-71.974444, -39.276667"
  }),
  new Geo({
    IataCode: "ACD",
    Location: "-77.3, 8.516667"
  }),
  new Geo({
    IataCode: "ADZ",
    Location: "-81.7, 12.583333"
  }),
  new Geo({
    IataCode: "APO",
    Location: "-76.636162, 7.885827"
  }),
  new Geo({
    IataCode: "ARQ",
    Location: "-71.431667, 7.033056"
  }),
  new Geo({
    IataCode: "AUC",
    Location: "-70.7425, 7.071667"
  }),
  new Geo({
    IataCode: "AXM",
    Location: "-75.766667, 4.45"
  }),
  new Geo({
    IataCode: "BAQ",
    Location: "-74.778889, 10.896111"
  }),
  new Geo({
    IataCode: "BGA",
    Location: "-73.128056, 7.107222"
  }),
  new Geo({
    IataCode: "BOG",
    Location: "-74.075833, 4.598056"
  }),
  new Geo({
    IataCode: "BSC",
    Location: "-77.394444, 6.202778"
  }),
  new Geo({
    IataCode: "BUN",
    Location: "-77.033333, 3.883333"
  }),
  new Geo({
    IataCode: "CAQ",
    Location: "-75.2, 7.983333"
  }),
  new Geo({
    IataCode: "CLO",
    Location: "-76.522222, 3.420556"
  }),
  new Geo({
    IataCode: "COG",
    Location: "-76.64973, 5.09351"
  }),
  new Geo({
    IataCode: "CRC",
    Location: "-75.933333, 4.766667"
  }),
  new Geo({
    IataCode: "CTG",
    Location: "-75.510833, 10.446667"
  }),
  new Geo({
    IataCode: "CUC",
    Location: "-72.509444, 7.93"
  }),
  new Geo({
    IataCode: "CZU",
    Location: "-75.285556, 9.3325"
  }),
  new Geo({
    IataCode: "EBG",
    Location: "-74.816667, 7.616667"
  }),
  new Geo({
    IataCode: "EJA",
    Location: "-73.85, 7.066667"
  }),
  new Geo({
    IataCode: "EYP",
    Location: "-72.383333, 5.35"
  }),
  new Geo({
    IataCode: "FLA",
    Location: "-75.563889, 1.590278"
  }),
  new Geo({
    IataCode: "GPI",
    Location: "-77.883333, 2.566667"
  }),
  new Geo({
    IataCode: "IBE",
    Location: "-75.233333, 4.433333"
  }),
  new Geo({
    IataCode: "IPI",
    Location: "-77.64959, 0.83018"
  }),
  new Geo({
    IataCode: "LCR",
    Location: "-73.016667, -0.733333"
  }),
  new Geo({
    IataCode: "LET",
    Location: "-69.940833, -4.19"
  }),
  new Geo({
    IataCode: "LMC",
    Location: "-73.9, 3.316667"
  }),
  new Geo({
    IataCode: "LQM",
    Location: "-74.780556, -0.193889"
  }),
  new Geo({
    IataCode: "MDE",
    Location: "-75.588194, 6.21875"
  }),
  new Geo({
    IataCode: "MTR",
    Location: "-75.881389, 8.745833"
  }),
  new Geo({
    IataCode: "MVP",
    Location: "-70.166667, 1.2"
  }),
  new Geo({
    IataCode: "MZL",
    Location: "-75.55, 5.1"
  }),
  new Geo({
    IataCode: "NQU",
    Location: "-77.283333, 5.7"
  }),
  new Geo({
    IataCode: "NVA",
    Location: "-75.298056, 2.952778"
  }),
  new Geo({
    IataCode: "OTU",
    Location: "-74.715278, 7.010278"
  }),
  new Geo({
    IataCode: "PCR",
    Location: "-67.501667, 6.173333"
  }),
  new Geo({
    IataCode: "PDA",
    Location: "-67.883333, 3.883333"
  }),
  new Geo({
    IataCode: "PEI",
    Location: "-75.742222, 4.815278"
  }),
  new Geo({
    IataCode: "PLA",
    Location: "-75.64506, 3.19698"
  }),
  new Geo({
    IataCode: "PPN",
    Location: "-76.59972, 2.46667"
  }),
  new Geo({
    IataCode: "PSO",
    Location: "-77.266667, 1.166667"
  }),
  new Geo({
    IataCode: "PTX",
    Location: "-76.033333, 1.85"
  }),
  new Geo({
    IataCode: "PUU",
    Location: "-76.5, 0.5"
  }),
  new Geo({
    IataCode: "RCH",
    Location: "-72.93, 11.53"
  }),
  new Geo({
    IataCode: "RVE",
    Location: "-71.9, 6.916667"
  }),
  new Geo({
    IataCode: "SJE",
    Location: "-72.641111, 2.583889"
  }),
  new Geo({
    IataCode: "SMR",
    Location: "-74.231667, 11.12"
  }),
  new Geo({
    IataCode: "SNT",
    Location: "-73.5, 7.4"
  }),
  new Geo({
    IataCode: "SVI",
    Location: "-74.766667, 2.15"
  }),
  new Geo({
    IataCode: "TCO",
    Location: "-78.749167, 1.814167"
  }),
  new Geo({
    IataCode: "TLU",
    Location: "-75.583333, 9.516667"
  }),
  new Geo({
    IataCode: "UIB",
    Location: "-76.646667, 5.7"
  }),
  new Geo({
    IataCode: "VGZ",
    Location: "-76.62022, 1.029049"
  }),
  new Geo({
    IataCode: "VUP",
    Location: "-73.253333, 10.44"
  }),
  new Geo({
    IataCode: "VVC",
    Location: "-73.566667, 4.078889"
  }),
  new Geo({
    IataCode: "CUE",
    Location: "-78.983333, -2.866667"
  }),
  new Geo({
    IataCode: "ESM",
    Location: "-79.63306, 0.96667"
  }),
  new Geo({
    IataCode: "ETR",
    Location: "-79.96, -3.45"
  }),
  new Geo({
    IataCode: "GPS",
    Location: "-90.282778, -0.434722"
  }),
  new Geo({
    IataCode: "GYE",
    Location: "-79.875556, -2.154444"
  }),
  new Geo({
    IataCode: "LGQ",
    Location: "-76.869167, 0.092222"
  }),
  new Geo({
    IataCode: "LOH",
    Location: "-79.216667, -4"
  }),
  new Geo({
    IataCode: "LTX",
    Location: "-78.6025, -0.901111"
  }),
  new Geo({
    IataCode: "MEC",
    Location: "-80.683333, -0.95"
  }),
  new Geo({
    IataCode: "OCC",
    Location: "-77, -0.333333"
  }),
  new Geo({
    IataCode: "SCY",
    Location: "-89.4, -0.8"
  }),
  new Geo({
    IataCode: "SNC",
    Location: "-80.985556, -2.21"
  }),
  new Geo({
    IataCode: "TUA",
    Location: "-77.708333, 0.815833"
  }),
  new Geo({
    IataCode: "UIO",
    Location: "-78.583333, -0.25"
  }),
  new Geo({
    IataCode: "XMS",
    Location: "-78.120556, -2.299167"
  }),
  new Geo({
    IataCode: "MPN",
    Location: "-58.45, -51.816667"
  }),
  new Geo({
    IataCode: "CAY",
    Location: "-52.3269, 4.9227"
  }),
  new Geo({
    IataCode: "GEO",
    Location: "-58.25, 6.5"
  }),
  new Geo({
    IataCode: "OGL",
    Location: "-58.105556, 6.8"
  }),
  new Geo({
    IataCode: "ORJ",
    Location: "-60.033333, 4.716667"
  }),
  new Geo({
    IataCode: "SKM",
    Location: "-57.175, 5.877778"
  }),
  new Geo({
    IataCode: "ANS",
    Location: "-73.355833, -13.716667"
  }),
  new Geo({
    IataCode: "AQP",
    Location: "-71.555, -16.337778"
  }),
  new Geo({
    IataCode: "ATA",
    Location: "-77.59972, -9.34972"
  }),
  new Geo({
    IataCode: "AYP",
    Location: "-74.222088, -13.158722"
  }),
  new Geo({
    IataCode: "CHH",
    Location: "-77.868347, -6.23476"
  }),
  new Geo({
    IataCode: "CIX",
    Location: "-79.832222, -6.789722"
  }),
  new Geo({
    IataCode: "CJA",
    Location: "-78.5, -7.133333"
  }),
  new Geo({
    IataCode: "CUZ",
    Location: "-71.959722, -13.529444"
  }),
  new Geo({
    IataCode: "HUU",
    Location: "-76.216667, -9.866667"
  }),
  new Geo({
    IataCode: "IQT",
    Location: "-73.2, -3.75"
  }),
  new Geo({
    IataCode: "JAE",
    Location: "-78.801302, -5.709303"
  }),
  new Geo({
    IataCode: "JAU",
    Location: "-75.5, -11.775"
  }),
  new Geo({
    IataCode: "JUL",
    Location: "-70.154444, -15.464167"
  }),
  new Geo({
    IataCode: "LIM",
    Location: "-77.028333, -12.043333"
  }),
  new Geo({
    IataCode: "MFT",
    Location: "-72.566667, -13.116667"
  }),
  new Geo({
    IataCode: "PCL",
    Location: "-74.55, -8.383333"
  }),
  new Geo({
    IataCode: "PEM",
    Location: "-69.233333, -12.583333"
  }),
  new Geo({
    IataCode: "PIO",
    Location: "-76.216667, -13.75"
  }),
  new Geo({
    IataCode: "PIU",
    Location: "-80.613333, -5.201667"
  }),
  new Geo({
    IataCode: "SMG",
    Location: "-72, -12.5"
  }),
  new Geo({
    IataCode: "TBP",
    Location: "-80.416667, -3.566667"
  }),
  new Geo({
    IataCode: "TCQ",
    Location: "-70.278889, -18.063333"
  }),
  new Geo({
    IataCode: "TGI",
    Location: "-76.016667, -9.3"
  }),
  new Geo({
    IataCode: "TPP",
    Location: "-76.371389, -6.505833"
  }),
  new Geo({
    IataCode: "TRU",
    Location: "-79.115, -8.09"
  }),
  new Geo({
    IataCode: "TYL",
    Location: "-81.252222, -4.572778"
  }),
  new Geo({
    IataCode: "AGT",
    Location: "-54.61667, -25.51667"
  }),
  new Geo({
    IataCode: "ASU",
    Location: "-57.6351, -25.282197"
  }),
  new Geo({
    IataCode: "PBM",
    Location: "-55.166667, 5.866667"
  }),
  new Geo({
    IataCode: "CYR",
    Location: "-57.5, -34.166667"
  }),
  new Geo({
    IataCode: "MVD",
    Location: "-56.181944, -34.883611"
  }),
  new Geo({
    IataCode: "PDP",
    Location: "-54.919167, -34.914444"
  }),
  new Geo({
    IataCode: "BLA",
    Location: "-64.6875, 10.109722"
  }),
  new Geo({
    IataCode: "BNS",
    Location: "-70.221111, 8.618056"
  }),
  new Geo({
    IataCode: "BRM",
    Location: "-69.334722, 10.063611"
  }),
  new Geo({
    IataCode: "CBL",
    Location: "-63.5375, 8.128056"
  }),
  new Geo({
    IataCode: "CCS",
    Location: "-66.916667, 10.5"
  }),
  new Geo({
    IataCode: "CUM",
    Location: "-64.191944, 10.447778"
  }),
  new Geo({
    IataCode: "CUP",
    Location: "-63.2625, 10.658889"
  }),
  new Geo({
    IataCode: "CZE",
    Location: "-69.681111, 11.418611"
  }),
  new Geo({
    IataCode: "LFR",
    Location: "-72.272222, 8.240556"
  }),
  new Geo({
    IataCode: "LRV",
    Location: "-66.66667, 11.95"
  }),
  new Geo({
    IataCode: "LSP",
    Location: "-70.188889, 11.721111"
  }),
  new Geo({
    IataCode: "MAR",
    Location: "-71.64, 10.654"
  }),
  new Geo({
    IataCode: "MRD",
    Location: "-71.18306, 8.59972"
  }),
  new Geo({
    IataCode: "MUN",
    Location: "-63.166667, 9.748333"
  }),
  new Geo({
    IataCode: "PMV",
    Location: "-63.85, 10.95"
  }),
  new Geo({
    IataCode: "PYH",
    Location: "-67.6, 5.6"
  }),
  new Geo({
    IataCode: "PZO",
    Location: "-62.734444, 8.305"
  }),
  new Geo({
    IataCode: "SFD",
    Location: "-67.439167, 7.885278"
  }),
  new Geo({
    IataCode: "SOM",
    Location: "-64.15, 8.94972"
  }),
  new Geo({
    IataCode: "STD",
    Location: "-72.028333, 7.568333"
  }),
  new Geo({
    IataCode: "SVZ",
    Location: "-72.443333, 7.817467"
  }),
  new Geo({
    IataCode: "TUV",
    Location: "-62.094167, 9.088889"
  }),
  new Geo({
    IataCode: "VIG",
    Location: "-71.65, 8.633333"
  }),
  new Geo({
    IataCode: "VLN",
    Location: "-67.933333, 10.151389"
  }),
  new Geo({
    IataCode: "VLV",
    Location: "-70.601578, 9.325766"
  }),
  new Geo({
    IataCode: "AGM",
    Location: "-37.683333, 65.6"
  }),
  new Geo({
    IataCode: "GOH",
    Location: "-51.725, 64.181944"
  }),
  new Geo({
    IataCode: "JAV",
    Location: "-51.06639, 69.23306"
  }),
  new Geo({
    IataCode: "JEG",
    Location: "-52.86988, 68.70981"
  }),
  new Geo({
    IataCode: "JFR",
    Location: "-49.66639, 62"
  }),
  new Geo({
    IataCode: "JHS",
    Location: "-53.66639, 66.91667"
  }),
  new Geo({
    IataCode: "JQA",
    Location: "-52.702778, 70.731944"
  }),
  new Geo({
    IataCode: "JSU",
    Location: "-52.9, 65.416667"
  }),
  new Geo({
    IataCode: "JUV",
    Location: "-56.150833, 72.785278"
  }),
  new Geo({
    IataCode: "KUS",
    Location: "-37.18351, 65.5753"
  }),
  new Geo({
    IataCode: "NAQ",
    Location: "-69, 77.666667"
  }),
  new Geo({
    IataCode: "UAK",
    Location: "-45.427778, 61.161111"
  }),
  new Geo({
    IataCode: "CNP",
    Location: "-22.658333, 70.743056"
  }),
  new Geo({
    IataCode: "OBY",
    Location: "-21.666667, 70.583333"
  }),
  new Geo({
    IataCode: "SFJ",
    Location: "-50.689167, 67.016944"
  }),
  new Geo({
    IataCode: "THU",
    Location: "-68.84278, 76.54778"
  }),
  new Geo({
    IataCode: "UMD",
    Location: "-52.117778, 70.668889"
  }),
  new Geo({
    IataCode: "AEY",
    Location: "-18.16667, 65.66667"
  }),
  new Geo({
    IataCode: "BIU",
    Location: "-23.9833, 65.8333"
  }),
  new Geo({
    IataCode: "BLO",
    Location: "-20.3, 65.6667"
  }),
  new Geo({
    IataCode: "EGS",
    Location: "-14.402, 65.277"
  }),
  new Geo({
    IataCode: "GJR",
    Location: "-21.434326, 65.978916"
  }),
  new Geo({
    IataCode: "GRY",
    Location: "-18, 66.54"
  }),
  new Geo({
    IataCode: "HFN",
    Location: "-15.209198, 64.252948"
  }),
  new Geo({
    IataCode: "HZK",
    Location: "-17.336426, 66.040335"
  }),
  new Geo({
    IataCode: "IFJ",
    Location: "-23.124, 66.07549"
  }),
  new Geo({
    IataCode: "REK",
    Location: "-22.316666, 64.044444"
  }),
  new Geo({
    IataCode: "THO",
    Location: "-15.3333, 66.2"
  }),
  new Geo({
    IataCode: "VEY",
    Location: "-20.27778, 63.416"
  }),
  new Geo({
    IataCode: "VPN",
    Location: "-14.843903, 65.749811"
  }),
  new Geo({
    IataCode: "TNM",
    Location: "-58.986389, -62.190556"
  })
];

let done = 0;
for (let i = 0; i < geos.length; i++) {
  geos[i].save(function (err, result) {
    done++;
    if (done === geos.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
