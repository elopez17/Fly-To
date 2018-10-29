const Geo = require('../models/Geo');

const mongoose = require('mongoose');
const dbURI = require("../config/keys").mongoURI;

mongoose.connect(dbURI, {useNewUrlParser: true});

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
		Location: "62.116667, 32.366667"
	}),
	new Geo({
		IataCode: "FBD",
		Location: "70.566667, 37.1"
	}),
	new Geo({
		IataCode: "HEA",
		Location: "62.226667, 34.206944"
	}),
	new Geo({
		IataCode: "KBL",
		Location: "69.213889, 34.563889"
	}),
	new Geo({
		IataCode: "KDH",
		Location: "65.8475, 31.506944"
	}),
	new Geo({
		IataCode: "MMZ",
		Location: "64.733333, 35.916667"
	}),
	new Geo({
		IataCode: "MZR",
		Location: "67.208333, 36.704167"
	}),
	new Geo({
		IataCode: "OAS",
		Location: "68.838639, 33.126028"
	}),
	new Geo({
		IataCode: "UND",
		Location: "68.909167, 36.660556"
	}),
	new Geo({
		IataCode: "ZAJ",
		Location: "61.983333, 31.1"
	}),
	new Geo({
		IataCode: "EVN",
		Location: "44.4, 40.15"
	}),
	new Geo({
		IataCode: "LWN",
		Location: "43.86, 40.751667"
	}),
	new Geo({
		IataCode: "GYD",
		Location: "50.047531, 40.470457"
	}),
	new Geo({
		IataCode: "KVD",
		Location: "46.316667, 40.733333"
	}),
	new Geo({
		IataCode: "LLK",
		Location: "48.824093, 38.74203"
	}),
	new Geo({
		IataCode: "NAJ",
		Location: "45.458889, 39.190278"
	}),
	new Geo({
		IataCode: "GBB",
		Location: "47.7125, 40.826667"
	}),
	new Geo({
		IataCode: "BZL",
		Location: "90.3, 22.8"
	}),
	new Geo({
		IataCode: "CGP",
		Location: "91.825556, 22.2575"
	}),
	new Geo({
		IataCode: "CXB",
		Location: "91.966667, 21.45"
	}),
	new Geo({
		IataCode: "DAC",
		Location: "90.39778, 23.84333"
	}),
	new Geo({
		IataCode: "JSR",
		Location: "89.163889, 23.181111"
	}),
	new Geo({
		IataCode: "RJH",
		Location: "88.616667, 24.433333"
	}),
	new Geo({
		IataCode: "SPD",
		Location: "88.9, 25.783333"
	}),
	new Geo({
		IataCode: "ZYL",
		Location: "91.874444, 24.958889"
	}),
	new Geo({
		IataCode: "BUT",
		Location: "90.746389, 27.562778"
	}),
	new Geo({
		IataCode: "GLU",
		Location: "90.463889, 26.884444"
	}),
	new Geo({
		IataCode: "PBH",
		Location: "89.416667, 27.433333"
	}),
	new Geo({
		IataCode: "YON",
		Location: "91.514444, 27.256389"
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
		Location: "110.458178, 19.141618"
	}),
	new Geo({
		IataCode: "BFJ",
		Location: "105.301389, 27.300278"
	}),
	new Geo({
		IataCode: "NAY",
		Location: "116.608333, 40.073611"
	}),
	new Geo({
		IataCode: "PEK",
		Location: "116.6, 40.066667"
	}),
	new Geo({
		IataCode: "BPL",
		Location: "82.024167, 44.904167"
	}),
	new Geo({
		IataCode: "BPE",
		Location: "119.058889, 39.666389"
	}),
	new Geo({
		IataCode: "YUS",
		Location: "97.037025, 32.83641"
	}),
	new Geo({
		IataCode: "KJI",
		Location: "86.998055, 48.22111"
	}),
	new Geo({
		IataCode: "AAT",
		Location: "88.08738, 47.75223"
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
		Location: "105.3751, 38.4924"
	}),
	new Geo({
		IataCode: "BAV",
		Location: "109.983333, 40.666667"
	}),
	new Geo({
		IataCode: "BHY",
		Location: "109.294, 21.5394"
	}),
	new Geo({
		IataCode: "BPX",
		Location: "97.106667, 30.555833"
	}),
	new Geo({
		IataCode: "BSD",
		Location: "99.15, 25.15"
	}),
	new Geo({
		IataCode: "CAN",
		Location: "113.29879, 23.39244"
	}),
	new Geo({
		IataCode: "CGD",
		Location: "111.583333, 29.066667"
	}),
	new Geo({
		IataCode: "CGO",
		Location: "113.84089, 34.51967"
	}),
	new Geo({
		IataCode: "CGQ",
		Location: "125.68536, 43.99621"
	}),
	new Geo({
		IataCode: "CHG",
		Location: "120.435, 41.5381"
	}),
	new Geo({
		IataCode: "CIF",
		Location: "118.90944, 42.23333"
	}),
	new Geo({
		IataCode: "CIH",
		Location: "113.133333, 36.183333"
	}),
	new Geo({
		IataCode: "CKG",
		Location: "106.641667, 29.719167"
	}),
	new Geo({
		IataCode: "CSX",
		Location: "113.221667, 28.186667"
	}),
	new Geo({
		IataCode: "HHA",
		Location: "113.15, 28.233333"
	}),
	new Geo({
		IataCode: "CTU",
		Location: "103.947222, 30.578611"
	}),
	new Geo({
		IataCode: "CZX",
		Location: "119.779, 31.9197"
	}),
	new Geo({
		IataCode: "DAT",
		Location: "113.482, 40.0603"
	}),
	new Geo({
		IataCode: "DAX",
		Location: "107.427631, 31.131485"
	}),
	new Geo({
		IataCode: "DCY",
		Location: "100.0312, 29.1923"
	}),
	new Geo({
		IataCode: "DDG",
		Location: "124.286528, 40.033595"
	}),
	new Geo({
		IataCode: "CDE",
		Location: "118.073889, 41.1225"
	}),
	new Geo({
		IataCode: "DIG",
		Location: "99.677778, 27.789722"
	}),
	new Geo({
		IataCode: "DLC",
		Location: "121.55, 38.966667"
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
		Location: "109.86174, 39.49387"
	}),
	new Geo({
		IataCode: "DYG",
		Location: "110.444108, 29.103883"
	}),
	new Geo({
		IataCode: "ENH",
		Location: "109.316667, 30.283333"
	}),
	new Geo({
		IataCode: "ENY",
		Location: "109.55223, 36.63785"
	}),
	new Geo({
		IataCode: "FOC",
		Location: "119.66327, 25.93506"
	}),
	new Geo({
		IataCode: "FUG",
		Location: "115.7, 32.866667"
	}),
	new Geo({
		IataCode: "FUO",
		Location: "113.283333, 23.133333"
	}),
	new Geo({
		IataCode: "FYJ",
		Location: "134.366447, 48.199494"
	}),
	new Geo({
		IataCode: "FYN",
		Location: "89.616667, 47.25"
	}),
	new Geo({
		IataCode: "GOQ",
		Location: "94.7861, 36.4006"
	}),
	new Geo({
		IataCode: "GYS",
		Location: "105.699722, 32.395"
	}),
	new Geo({
		IataCode: "HAK",
		Location: "110.458889, 19.934722"
	}),
	new Geo({
		IataCode: "HEK",
		Location: "127.433333, 50.216667"
	}),
	new Geo({
		IataCode: "HET",
		Location: "111.821667, 40.853333"
	}),
	new Geo({
		IataCode: "HFE",
		Location: "117.298333, 31.78"
	}),
	new Geo({
		IataCode: "HGH",
		Location: "120.434444, 30.229444"
	}),
	new Geo({
		IataCode: "HLD",
		Location: "119.7, 49.2"
	}),
	new Geo({
		IataCode: "HLH",
		Location: "122, 46.033333"
	}),
	new Geo({
		IataCode: "HMI",
		Location: "93.416667, 42.916667"
	}),
	new Geo({
		IataCode: "HNY",
		Location: "112.5, 26.85"
	}),
	new Geo({
		IataCode: "HRB",
		Location: "126.250278, 45.623333"
	}),
	new Geo({
		IataCode: "HSN",
		Location: "122.362, 29.9342"
	}),
	new Geo({
		IataCode: "HUZ",
		Location: "114.366667, 23.083333"
	}),
	new Geo({
		IataCode: "HYN",
		Location: "121.42746, 28.564"
	}),
	new Geo({
		IataCode: "HZG",
		Location: "107.183333, 32.983333"
	}),
	new Geo({
		IataCode: "INC",
		Location: "106.35, 38.35"
	}),
	new Geo({
		IataCode: "IQM",
		Location: "85.533333, 38.133333"
	}),
	new Geo({
		IataCode: "IQN",
		Location: "107.783333, 36.1"
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
		Location: "98.34085, 39.86054"
	}),
	new Geo({
		IataCode: "JGS",
		Location: "114.73265, 26.85534"
	}),
	new Geo({
		IataCode: "JHG",
		Location: "100.7657, 21.972897"
	}),
	new Geo({
		IataCode: "JIU",
		Location: "115.802681, 29.483685"
	}),
	new Geo({
		IataCode: "JJN",
		Location: "118.6, 24.883333"
	}),
	new Geo({
		IataCode: "JMU",
		Location: "130.35, 46.833333"
	}),
	new Geo({
		IataCode: "JNG",
		Location: "116.33444, 35.29276"
	}),
	new Geo({
		IataCode: "JNZ",
		Location: "121.016667, 41.116667"
	}),
	new Geo({
		IataCode: "JUZ",
		Location: "118.899, 28.9658"
	}),
	new Geo({
		IataCode: "JZH",
		Location: "103.683056, 32.856667"
	}),
	new Geo({
		IataCode: "KCA",
		Location: "82.9869, 41.7181"
	}),
	new Geo({
		IataCode: "KHG",
		Location: "76.02, 39.542778"
	}),
	new Geo({
		IataCode: "KHN",
		Location: "115.9, 28.865"
	}),
	new Geo({
		IataCode: "KMG",
		Location: "102.743333, 24.9925"
	}),
	new Geo({
		IataCode: "KOW",
		Location: "114.916667, 25.9"
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
		Location: "106.800833, 26.538611"
	}),
	new Geo({
		IataCode: "KWL",
		Location: "110.039167, 25.218056"
	}),
	new Geo({
		IataCode: "LCX",
		Location: "116.745556, 25.675556"
	}),
	new Geo({
		IataCode: "LHW",
		Location: "103.866667, 36.033333"
	}),
	new Geo({
		IataCode: "LJG",
		Location: "100.25, 26.683333"
	}),
	new Geo({
		IataCode: "LLB",
		Location: "105.5742, 25.2709"
	}),
	new Geo({
		IataCode: "LLF",
		Location: "111.9575, 26.700833"
	}),
	new Geo({
		IataCode: "LLV",
		Location: "111.0834, 37.41"
	}),
	new Geo({
		IataCode: "LNJ",
		Location: "100.024167, 23.738889"
	}),
	new Geo({
		IataCode: "LUM",
		Location: "98.6, 24.45"
	}),
	new Geo({
		IataCode: "LXA",
		Location: "90.911944, 29.297778"
	}),
	new Geo({
		IataCode: "LYA",
		Location: "112.466667, 34.683333"
	}),
	new Geo({
		IataCode: "LYG",
		Location: "119.183333, 34.666667"
	}),
	new Geo({
		IataCode: "LYI",
		Location: "118.366667, 35.066667"
	}),
	new Geo({
		IataCode: "LZH",
		Location: "109.391, 24.2075"
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
		Location: "121.465, 29.824722"
	}),
	new Geo({
		IataCode: "NKG",
		Location: "118.86202, 31.74204"
	}),
	new Geo({
		IataCode: "NNG",
		Location: "108.1725, 22.608333"
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
		Location: "101.7944, 26.53817"
	}),
	new Geo({
		IataCode: "RLK",
		Location: "107.442, 40.5535"
	}),
	new Geo({
		IataCode: "PVG",
		Location: "121.78, 31.15"
	}),
	new Geo({
		IataCode: "SHA",
		Location: "121.333333, 31.2"
	}),
	new Geo({
		IataCode: "SHE",
		Location: "123.487144, 41.636999"
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
		Location: "114.697222, 38.280556"
	}),
	new Geo({
		IataCode: "SWA",
		Location: "116.75952, 23.42978"
	}),
	new Geo({
		IataCode: "SYM",
		Location: "101, 22.833333"
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
		Location: "113.808333, 22.64"
	}),
	new Geo({
		IataCode: "TAO",
		Location: "120.374444, 36.266111"
	}),
	new Geo({
		IataCode: "TCG",
		Location: "83.333333, 46.666667"
	}),
	new Geo({
		IataCode: "TEN",
		Location: "109.05, 27.633333"
	}),
	new Geo({
		IataCode: "TGO",
		Location: "122.25, 43.616667"
	}),
	new Geo({
		IataCode: "TNH",
		Location: "125.95, 41.75"
	}),
	new Geo({
		IataCode: "TSN",
		Location: "117.346944, 39.118889"
	}),
	new Geo({
		IataCode: "TXN",
		Location: "118.3, 29.733333"
	}),
	new Geo({
		IataCode: "TYN",
		Location: "112.616667, 37.75"
	}),
	new Geo({
		IataCode: "URC",
		Location: "87.483333, 43.9"
	}),
	new Geo({
		IataCode: "UYN",
		Location: "109.731, 38.2692"
	}),
	new Geo({
		IataCode: "WEF",
		Location: "119.216667, 36.75"
	}),
	new Geo({
		IataCode: "WEH",
		Location: "122.229, 37.1871"
	}),
	new Geo({
		IataCode: "CWJ",
		Location: "99.373611, 23.273889"
	}),
	new Geo({
		IataCode: "WNZ",
		Location: "120.852, 27.9122"
	}),
	new Geo({
		IataCode: "WUA",
		Location: "106.799167, 39.794722"
	}),
	new Geo({
		IataCode: "WUH",
		Location: "114.208056, 30.783889"
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
		Location: "108.406, 30.8361"
	}),
	new Geo({
		IataCode: "XFN",
		Location: "112.291, 32.1506"
	}),
	new Geo({
		IataCode: "XIC",
		Location: "102.216667, 27.966667"
	}),
	new Geo({
		IataCode: "XIL",
		Location: "116.066667, 43.966667"
	}),
	new Geo({
		IataCode: "XMN",
		Location: "118.127778, 24.544167"
	}),
	new Geo({
		IataCode: "XNN",
		Location: "102.03747, 36.52556"
	}),
	new Geo({
		IataCode: "XUZ",
		Location: "117.554998, 34.056144"
	}),
	new Geo({
		IataCode: "YBP",
		Location: "104.533333, 28.816667"
	}),
	new Geo({
		IataCode: "YIH",
		Location: "111.483765, 30.551618"
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
		Location: "129.451, 42.8828"
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
		Location: "100.403, 38.4807"
	}),
	new Geo({
		IataCode: "ZAT",
		Location: "103.8, 27.316667"
	}),
	new Geo({
		IataCode: "ZHA",
		Location: "110.466667, 21.266667"
	}),
	new Geo({
		IataCode: "ZUH",
		Location: "113.366667, 22"
	}),
	new Geo({
		IataCode: "WMT",
		Location: "107.246861, 27.804732"
	}),
	new Geo({
		IataCode: "ZYI",
		Location: "106.833333, 27.666667"
	}),
	new Geo({
		IataCode: "DBC",
		Location: "123.019722, 45.505278"
	}),
	new Geo({
		IataCode: "DQA",
		Location: "125.02, 46.59"
	}),
	new Geo({
		IataCode: "EJN",
		Location: "101.00056, 42.015556"
	}),
	new Geo({
		IataCode: "ERL",
		Location: "112.09845, 43.426674"
	}),
	new Geo({
		IataCode: "GMQ",
		Location: "100.311111, 34.415833"
	}),
	new Geo({
		IataCode: "GXH",
		Location: "102.6447, 34.8106"
	}),
	new Geo({
		IataCode: "GYU",
		Location: "106.218056, 36.076111"
	}),
	new Geo({
		IataCode: "HIA",
		Location: "119.12778, 33.7875"
	}),
	new Geo({
		IataCode: "HCJ",
		Location: "107.699722, 24.783889"
	}),
	new Geo({
		IataCode: "HDG",
		Location: "114.425, 36.5258"
	}),
	new Geo({
		IataCode: "HJJ",
		Location: "109.7002, 27.43738"
	}),
	new Geo({
		IataCode: "HTN",
		Location: "79.86493, 37.03852"
	}),
	new Geo({
		IataCode: "HPG",
		Location: "110.338056, 31.633611"
	}),
	new Geo({
		IataCode: "HTT",
		Location: "90.888496, 38.251766"
	}),
	new Geo({
		IataCode: "HUO",
		Location: "119.407222, 45.487222"
	}),
	new Geo({
		IataCode: "HXD",
		Location: "97.268611, 37.125"
	}),
	new Geo({
		IataCode: "HZH",
		Location: "109.152669, 26.321274"
	}),
	new Geo({
		IataCode: "JIC",
		Location: "102.347778, 38.541944"
	}),
	new Geo({
		IataCode: "TNA",
		Location: "117.216111, 36.857222"
	}),
	new Geo({
		IataCode: "JXA",
		Location: "130.99666, 45.306111"
	}),
	new Geo({
		IataCode: "JMJ",
		Location: "99.786389, 22.415833"
	}),
	new Geo({
		IataCode: "JSJ",
		Location: "132.6239, 47.2065"
	}),
	new Geo({
		IataCode: "JUH",
		Location: "117.686667, 30.740278"
	}),
	new Geo({
		IataCode: "KGT",
		Location: "101.7339, 38.1339"
	}),
	new Geo({
		IataCode: "KJH",
		Location: "81.181389, 26.974167"
	}),
	new Geo({
		IataCode: "LFQ",
		Location: "111.492222, 36.041944"
	}),
	new Geo({
		IataCode: "LNL",
		Location: "105.797, 33.788"
	}),
	new Geo({
		IataCode: "LPF",
		Location: "104.979, 26.609417"
	}),
	new Geo({
		IataCode: "LZY",
		Location: "94.3353, 29.3033"
	}),
	new Geo({
		IataCode: "MIG",
		Location: "104.738056, 31.431111"
	}),
	new Geo({
		IataCode: "OHE",
		Location: "122.42059, 52.92113"
	}),
	new Geo({
		IataCode: "NBS",
		Location: "127.562141, 42.047916"
	}),
	new Geo({
		IataCode: "NLH",
		Location: "100.757389, 27.543806"
	}),
	new Geo({
		IataCode: "NLT",
		Location: "83.3822, 43.4322"
	}),
	new Geo({
		IataCode: "NZH",
		Location: "117.43333, 49.6"
	}),
	new Geo({
		IataCode: "NZL",
		Location: "122.833, 47.746"
	}),
	new Geo({
		IataCode: "QSZ",
		Location: "77.24056, 38.41667"
	}),
	new Geo({
		IataCode: "RHT",
		Location: "101.3839, 39.12448"
	}),
	new Geo({
		IataCode: "RIZ",
		Location: "119.321994, 35.400426"
	}),
	new Geo({
		IataCode: "RKZ",
		Location: "89.306944, 29.351667"
	}),
	new Geo({
		IataCode: "NGQ",
		Location: "80.054276, 32.103817"
	}),
	new Geo({
		IataCode: "SQD",
		Location: "117.961389, 28.380278"
	}),
	new Geo({
		IataCode: "SQJ",
		Location: "117.839056, 26.426596"
	}),
	new Geo({
		IataCode: "TCZ",
		Location: "98.489167, 25.025"
	}),
	new Geo({
		IataCode: "THQ",
		Location: "105.861111, 34.558333"
	}),
	new Geo({
		IataCode: "TLQ",
		Location: "89.100556, 43.030556"
	}),
	new Geo({
		IataCode: "TVS",
		Location: "117.99345, 39.724"
	}),
	new Geo({
		IataCode: "UCB",
		Location: "113.106389, 41.13"
	}),
	new Geo({
		IataCode: "WDS",
		Location: "110.907778, 32.591667"
	}),
	new Geo({
		IataCode: "WGN",
		Location: "111.668758, 27.223554"
	}),
	new Geo({
		IataCode: "WNH",
		Location: "104.325, 23.5583"
	}),
	new Geo({
		IataCode: "WUT",
		Location: "112.968056, 38.597222"
	}),
	new Geo({
		IataCode: "XIY",
		Location: "108.75, 34.433333"
	}),
	new Geo({
		IataCode: "YTY",
		Location: "119.715, 32.561667"
	}),
	new Geo({
		IataCode: "YCU",
		Location: "111.0336, 35.1164"
	}),
	new Geo({
		IataCode: "LDS",
		Location: "129.01799, 47.751827"
	}),
	new Geo({
		IataCode: "YIC",
		Location: "114.1829, 27.4812"
	}),
	new Geo({
		IataCode: "YKH",
		Location: "122.358333, 40.542222"
	}),
	new Geo({
		IataCode: "YSQ",
		Location: "124.550178, 44.938114"
	}),
	new Geo({
		IataCode: "ZQZ",
		Location: "114.930278, 40.738611"
	}),
	new Geo({
		IataCode: "ZHY",
		Location: "105.15253, 37.568935"
	}),
	new Geo({
		IataCode: "JIQ",
		Location: "108.829185, 29.517557"
	}),
	new Geo({
		IataCode: "BUS",
		Location: "41.600556, 41.610833"
	}),
	new Geo({
		IataCode: "KUT",
		Location: "42.479925, 42.176285"
	}),
	new Geo({
		IataCode: "TBS",
		Location: "44.95, 41.666667"
	}),
	new Geo({
		IataCode: "AIP",
		Location: "75.760556, 31.433056"
	}),
	new Geo({
		IataCode: "AGR",
		Location: "77.962778, 27.158333"
	}),
	new Geo({
		IataCode: "AGX",
		Location: "72.176, 10.8237"
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
		Location: "73.220833, 22.329167"
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
		Location: "72.184444, 21.755"
	}),
	new Geo({
		IataCode: "BKB",
		Location: "73.3, 28.016667"
	}),
	new Geo({
		IataCode: "BLR",
		Location: "77.705269, 13.199588"
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
		Location: "75.95, 11.133333"
	}),
	new Geo({
		IataCode: "CCU",
		Location: "88.449167, 22.6525"
	}),
	new Geo({
		IataCode: "CDP",
		Location: "78.783333, 14.516667"
	}),
	new Geo({
		IataCode: "CJB",
		Location: "77.043333, 11.028333"
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
		Location: "95.020833, 27.483889"
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
		Location: "91.5875, 26.104167"
	}),
	new Geo({
		IataCode: "GAY",
		Location: "84.945833, 24.746667"
	}),
	new Geo({
		IataCode: "GOI",
		Location: "73.833333, 15.383333"
	}),
	new Geo({
		IataCode: "GOP",
		Location: "83.44971, 26.73971"
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
		Location: "79.922778, 24.824167"
	}),
	new Geo({
		IataCode: "HYD",
		Location: "78.430281, 17.230538"
	}),
	new Geo({
		IataCode: "IDR",
		Location: "75.805556, 22.723056"
	}),
	new Geo({
		IataCode: "IMF",
		Location: "93.9, 24.766667"
	}),
	new Geo({
		IataCode: "ISK",
		Location: "73.866667, 20"
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
		Location: "76.790556, 30.671944"
	}),
	new Geo({
		IataCode: "IXD",
		Location: "81.736111, 25.439722"
	}),
	new Geo({
		IataCode: "IXE",
		Location: "74.893889, 12.963889"
	}),
	new Geo({
		IataCode: "IXG",
		Location: "74.618333, 15.858611"
	}),
	new Geo({
		IataCode: "IXI",
		Location: "94.088889, 27.290278"
	}),
	new Geo({
		IataCode: "IXJ",
		Location: "74.838889, 32.690278"
	}),
	new Geo({
		IataCode: "IXK",
		Location: "70.270833, 21.319444"
	}),
	new Geo({
		IataCode: "IXL",
		Location: "77.583333, 34.166667"
	}),
	new Geo({
		IataCode: "IXM",
		Location: "78.088056, 9.8325"
	}),
	new Geo({
		IataCode: "IXP",
		Location: "75.633333, 32.216667"
	}),
	new Geo({
		IataCode: "IXR",
		Location: "85.323611, 23.314444"
	}),
	new Geo({
		IataCode: "IXS",
		Location: "92.981389, 24.912222"
	}),
	new Geo({
		IataCode: "IXT",
		Location: "95.333333, 28.016667"
	}),
	new Geo({
		IataCode: "IXU",
		Location: "75.401111, 19.863611"
	}),
	new Geo({
		IataCode: "IXY",
		Location: "70.104167, 23.111111"
	}),
	new Geo({
		IataCode: "IXZ",
		Location: "92.743611, 11.648333"
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
		Location: "70.011944, 22.463333"
	}),
	new Geo({
		IataCode: "JLR",
		Location: "80.05205, 23.17782"
	}),
	new Geo({
		IataCode: "JRH",
		Location: "94.177778, 26.728611"
	}),
	new Geo({
		IataCode: "JSA",
		Location: "70.9, 26.916667"
	}),
	new Geo({
		IataCode: "KLH",
		Location: "74.333333, 16.666667"
	}),
	new Geo({
		IataCode: "KNU",
		Location: "80.4125, 26.402778"
	}),
	new Geo({
		IataCode: "KUU",
		Location: "77.1, 31.983333"
	}),
	new Geo({
		IataCode: "LKO",
		Location: "80.880278, 26.760278"
	}),
	new Geo({
		IataCode: "LUH",
		Location: "75.85, 30.9"
	}),
	new Geo({
		IataCode: "MAA",
		Location: "80.176944, 12.993333"
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
		Location: "69.656944, 21.647222"
	}),
	new Geo({
		IataCode: "PGH",
		Location: "79.473611, 29.031944"
	}),
	new Geo({
		IataCode: "PNQ",
		Location: "73.920556, 18.581389"
	}),
	new Geo({
		IataCode: "PNY",
		Location: "79.8, 12.016667"
	}),
	new Geo({
		IataCode: "RAJ",
		Location: "70.780833, 22.305833"
	}),
	new Geo({
		IataCode: "RJA",
		Location: "81.783333, 16.983333"
	}),
	new Geo({
		IataCode: "RPR",
		Location: "81.7388, 21.1804"
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
		Location: "72.7418, 21.1141"
	}),
	new Geo({
		IataCode: "SXR",
		Location: "74.775278, 33.988056"
	}),
	new Geo({
		IataCode: "SXV",
		Location: "78.166667, 11.65"
	}),
	new Geo({
		IataCode: "TCR",
		Location: "78.033333, 8.716667"
	}),
	new Geo({
		IataCode: "TEZ",
		Location: "92.796111, 26.710833"
	}),
	new Geo({
		IataCode: "TIR",
		Location: "79.55, 13.633333"
	}),
	new Geo({
		IataCode: "TRV",
		Location: "76.919722, 8.479722"
	}),
	new Geo({
		IataCode: "TRZ",
		Location: "78.713333, 10.765"
	}),
	new Geo({
		IataCode: "UDR",
		Location: "73.896111, 24.615"
	}),
	new Geo({
		IataCode: "VDY",
		Location: "76.61376, 15.149849"
	}),
	new Geo({
		IataCode: "VGA",
		Location: "80.797222, 16.529444"
	}),
	new Geo({
		IataCode: "VNS",
		Location: "82.863056, 25.451944"
	}),
	new Geo({
		IataCode: "VTZ",
		Location: "83.224722, 17.721111"
	}),
	new Geo({
		IataCode: "JLG",
		Location: "75.626667, 20.961944"
	}),
	new Geo({
		IataCode: "PYG",
		Location: "88.5892, 27.2335"
	}),
	new Geo({
		IataCode: "RDP",
		Location: "87.243333, 23.621389"
	}),
	new Geo({
		IataCode: "SAG",
		Location: "74.390438, 19.691477"
	}),
	new Geo({
		IataCode: "FSZ",
		Location: "138.1894, 34.7961"
	}),
	new Geo({
		IataCode: "IBR",
		Location: "140.41472, 36.181667"
	}),
	new Geo({
		IataCode: "IWK",
		Location: "132.236674, 34.158587"
	}),
	new Geo({
		IataCode: "AGJ",
		Location: "127.238056, 26.589722"
	}),
	new Geo({
		IataCode: "AKJ",
		Location: "142.45, 43.666667"
	}),
	new Geo({
		IataCode: "AXJ",
		Location: "130.158674, 32.48276"
	}),
	new Geo({
		IataCode: "AOJ",
		Location: "140.7, 40.733333"
	}),
	new Geo({
		IataCode: "ASJ",
		Location: "129.6975, 28.416944"
	}),
	new Geo({
		IataCode: "AXT",
		Location: "140.218611, 39.615556"
	}),
	new Geo({
		IataCode: "FKS",
		Location: "140.432778, 37.226667"
	}),
	new Geo({
		IataCode: "FUJ",
		Location: "128.833333, 32.666667"
	}),
	new Geo({
		IataCode: "FUK",
		Location: "130.453333, 33.582222"
	}),
	new Geo({
		IataCode: "GAJ",
		Location: "140.383333, 38.4"
	}),
	new Geo({
		IataCode: "HAC",
		Location: "139.790556, 33.113333"
	}),
	new Geo({
		IataCode: "HIJ",
		Location: "132.924722, 34.432778"
	}),
	new Geo({
		IataCode: "HKD",
		Location: "140.819722, 41.768889"
	}),
	new Geo({
		IataCode: "HNA",
		Location: "141.13528, 39.42861"
	}),
	new Geo({
		IataCode: "HSG",
		Location: "130.304444, 33.146389"
	}),
	new Geo({
		IataCode: "IKI",
		Location: "129.788333, 33.745556"
	}),
	new Geo({
		IataCode: "ISG",
		Location: "124.168889, 24.336944"
	}),
	new Geo({
		IataCode: "IWJ",
		Location: "131.792778, 34.673056"
	}),
	new Geo({
		IataCode: "IZO",
		Location: "132.889444, 35.409444"
	}),
	new Geo({
		IataCode: "KCZ",
		Location: "133.676944, 33.541111"
	}),
	new Geo({
		IataCode: "KIJ",
		Location: "139.1225, 37.953333"
	}),
	new Geo({
		IataCode: "KKJ",
		Location: "130.949444, 33.833056"
	}),
	new Geo({
		IataCode: "KKX",
		Location: "130.008333, 28.433333"
	}),
	new Geo({
		IataCode: "KMI",
		Location: "131.443889, 31.874444"
	}),
	new Geo({
		IataCode: "KMJ",
		Location: "130.8525, 32.831944"
	}),
	new Geo({
		IataCode: "KMQ",
		Location: "136.416944, 36.393889"
	}),
	new Geo({
		IataCode: "KOJ",
		Location: "130.720278, 31.801944"
	}),
	new Geo({
		IataCode: "KTD",
		Location: "131.3, 25.95"
	}),
	new Geo({
		IataCode: "KUH",
		Location: "144.203889, 43.039722"
	}),
	new Geo({
		IataCode: "KUM",
		Location: "130.633333, 30.333333"
	}),
	new Geo({
		IataCode: "MBE",
		Location: "143.383333, 44.266667"
	}),
	new Geo({
		IataCode: "MMB",
		Location: "144.167222, 43.9"
	}),
	new Geo({
		IataCode: "MMD",
		Location: "131.247222, 25.841389"
	}),
	new Geo({
		IataCode: "MMJ",
		Location: "137.922778, 36.166667"
	}),
	new Geo({
		IataCode: "MMY",
		Location: "125.297222, 24.780833"
	}),
	new Geo({
		IataCode: "MSJ",
		Location: "141.371944, 40.700278"
	}),
	new Geo({
		IataCode: "MYE",
		Location: "139.5625, 34.069444"
	}),
	new Geo({
		IataCode: "MYJ",
		Location: "132.704167, 33.822222"
	}),
	new Geo({
		IataCode: "NGO",
		Location: "136.807337, 34.859876"
	}),
	new Geo({
		IataCode: "NKM",
		Location: "136.9275, 35.2517"
	}),
	new Geo({
		IataCode: "NGS",
		Location: "129.9175, 32.911944"
	}),
	new Geo({
		IataCode: "NTQ",
		Location: "136.965278, 37.290278"
	}),
	new Geo({
		IataCode: "OBO",
		Location: "143.217222, 42.733333"
	}),
	new Geo({
		IataCode: "OGN",
		Location: "122.976389, 24.461111"
	}),
	new Geo({
		IataCode: "OIM",
		Location: "139.365, 34.779167"
	}),
	new Geo({
		IataCode: "OIR",
		Location: "139.43291, 42.07167"
	}),
	new Geo({
		IataCode: "OIT",
		Location: "131.733333, 33.483333"
	}),
	new Geo({
		IataCode: "OKA",
		Location: "127.65, 26.2"
	}),
	new Geo({
		IataCode: "OKE",
		Location: "128.616667, 27.433333"
	}),
	new Geo({
		IataCode: "OKI",
		Location: "133.316667, 36.166667"
	}),
	new Geo({
		IataCode: "OKJ",
		Location: "133.855278, 34.756944"
	}),
	new Geo({
		IataCode: "ONJ",
		Location: "140.375278, 40.189167"
	}),
	new Geo({
		IataCode: "RIS",
		Location: "141.25, 45.183333"
	}),
	new Geo({
		IataCode: "RNJ",
		Location: "128.433333, 27.033333"
	}),
	new Geo({
		IataCode: "SDJ",
		Location: "140.923889, 38.135556"
	}),
	new Geo({
		IataCode: "SHB",
		Location: "144.966667, 43.566667"
	}),
	new Geo({
		IataCode: "SHM",
		Location: "135.358056, 33.661389"
	}),
	new Geo({
		IataCode: "SYO",
		Location: "139.790556, 38.809444"
	}),
	new Geo({
		IataCode: "TAK",
		Location: "134.015556, 34.214167"
	}),
	new Geo({
		IataCode: "TJH",
		Location: "134.789722, 35.509167"
	}),
	new Geo({
		IataCode: "TKN",
		Location: "128.883333, 27.833333"
	}),
	new Geo({
		IataCode: "TKS",
		Location: "134.601667, 34.129722"
	}),
	new Geo({
		IataCode: "TNE",
		Location: "130.954167, 30.541111"
	}),
	new Geo({
		IataCode: "TOY",
		Location: "137.188889, 36.644167"
	}),
	new Geo({
		IataCode: "TRA",
		Location: "124.7, 24.65"
	}),
	new Geo({
		IataCode: "TSJ",
		Location: "129.316667, 34.283333"
	}),
	new Geo({
		IataCode: "TTJ",
		Location: "134.170278, 35.526667"
	}),
	new Geo({
		IataCode: "UBJ",
		Location: "131.274444, 33.925833"
	}),
	new Geo({
		IataCode: "UEO",
		Location: "126.719444, 26.365278"
	}),
	new Geo({
		IataCode: "UKB",
		Location: "135.166667, 34.75"
	}),
	new Geo({
		IataCode: "WKJ",
		Location: "141.800833, 45.404167"
	}),
	new Geo({
		IataCode: "YGJ",
		Location: "133.242222, 35.491389"
	}),
	new Geo({
		IataCode: "ITM",
		Location: "135.441667, 34.781667"
	}),
	new Geo({
		IataCode: "KIX",
		Location: "135.246944, 34.423889"
	}),
	new Geo({
		IataCode: "CTS",
		Location: "141.669167, 42.795833"
	}),
	new Geo({
		IataCode: "OKD",
		Location: "141.385, 43.115556"
	}),
	new Geo({
		IataCode: "HND",
		Location: "139.765833, 35.553611"
	}),
	new Geo({
		IataCode: "NRT",
		Location: "140.391111, 35.763889"
	}),
	new Geo({
		IataCode: "FRU",
		Location: "74.4775, 43.061389"
	}),
	new Geo({
		IataCode: "IKU",
		Location: "76.4248, 42.3518"
	}),
	new Geo({
		IataCode: "OSS",
		Location: "72.816667, 40.616667"
	}),
	new Geo({
		IataCode: "FNJ",
		Location: "125.666667, 39.2"
	}),
	new Geo({
		IataCode: "CJJ",
		Location: "127.506667, 36.716667"
	}),
	new Geo({
		IataCode: "CJU",
		Location: "126.495, 33.505556"
	}),
	new Geo({
		IataCode: "HIN",
		Location: "128.078056, 35.088056"
	}),
	new Geo({
		IataCode: "KPO",
		Location: "129.42, 35.986111"
	}),
	new Geo({
		IataCode: "KUV",
		Location: "126.75, 35.983333"
	}),
	new Geo({
		IataCode: "KWJ",
		Location: "126.810833, 35.123333"
	}),
	new Geo({
		IataCode: "MWX",
		Location: "126.9167, 35.1667"
	}),
	new Geo({
		IataCode: "PUS",
		Location: "128.938333, 35.179444"
	}),
	new Geo({
		IataCode: "RSU",
		Location: "127.61685, 34.84233"
	}),
	new Geo({
		IataCode: "GMP",
		Location: "126.785278, 37.551111"
	}),
	new Geo({
		IataCode: "ICN",
		Location: "126.450556, 37.469167"
	}),
	new Geo({
		IataCode: "TAE",
		Location: "128.666667, 35.883333"
	}),
	new Geo({
		IataCode: "USN",
		Location: "129.35172, 35.59349"
	}),
	new Geo({
		IataCode: "WJU",
		Location: "127.951667, 37.434167"
	}),
	new Geo({
		IataCode: "YNY",
		Location: "128.66901, 38.0613"
	}),
	new Geo({
		IataCode: "AKX",
		Location: "57.216667, 50.25"
	}),
	new Geo({
		IataCode: "ALA",
		Location: "77.033333, 43.35"
	}),
	new Geo({
		IataCode: "BXH",
		Location: "75.016667, 46.883333"
	}),
	new Geo({
		IataCode: "BXY",
		Location: "63.210386, 45.619909"
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
		Location: "67.733333, 47.7"
	}),
	new Geo({
		IataCode: "GUW",
		Location: "51.821389, 47.121944"
	}),
	new Geo({
		IataCode: "KGF",
		Location: "73.33444, 49.67083"
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
		Location: "65.59267, 44.710909"
	}),
	new Geo({
		IataCode: "PLX",
		Location: "80.2344, 50.3513"
	}),
	new Geo({
		IataCode: "PPK",
		Location: "69.183333, 54.783333"
	}),
	new Geo({
		IataCode: "PWQ",
		Location: "77.066667, 52.183333"
	}),
	new Geo({
		IataCode: "SCO",
		Location: "51.100001, 43.866667"
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
		Location: "51.550001, 51.15"
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
		Location: "79.884722, 7.175"
	}),
	new Geo({
		IataCode: "RML",
		Location: "79.8875, 6.819444"
	}),
	new Geo({
		IataCode: "DIW",
		Location: "80.73323, 5.990751"
	}),
	new Geo({
		IataCode: "DWO",
		Location: "79.91, 6.905"
	}),
	new Geo({
		IataCode: "GIU",
		Location: "80.728111, 7.955889"
	}),
	new Geo({
		IataCode: "GOY",
		Location: "81.616667, 7.333333"
	}),
	new Geo({
		IataCode: "HRI",
		Location: "81.1225, 6.124444"
	}),
	new Geo({
		IataCode: "JAF",
		Location: "80.075, 9.791667"
	}),
	new Geo({
		IataCode: "KDZ",
		Location: "80.433311, 7.200023"
	}),
	new Geo({
		IataCode: "KCT",
		Location: "80.333056, 5.983056"
	}),
	new Geo({
		IataCode: "KDW",
		Location: "80.6333, 7.3"
	}),
	new Geo({
		IataCode: "KEZ",
		Location: "79.916667, 6.983333"
	}),
	new Geo({
		IataCode: "MNH",
		Location: "83, 7.75"
	}),
	new Geo({
		IataCode: "NUA",
		Location: "80.766667, 6.966667"
	}),
	new Geo({
		IataCode: "NUF",
		Location: "80.586, 6.858"
	}),
	new Geo({
		IataCode: "TRR",
		Location: "81.181389, 8.539028"
	}),
	new Geo({
		IataCode: "WRZ",
		Location: "81.2352, 6.25449"
	}),
	new Geo({
		IataCode: "COQ",
		Location: "114.9, 48.133333"
	}),
	new Geo({
		IataCode: "DLZ",
		Location: "104.43, 43.5917"
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
		Location: "91.624809, 47.962304"
	}),
	new Geo({
		IataCode: "LTI",
		Location: "96.2211, 46.3764"
	}),
	new Geo({
		IataCode: "MXV",
		Location: "100.166667, 49.633333"
	}),
	new Geo({
		IataCode: "ULG",
		Location: "89.920415, 48.992686"
	}),
	new Geo({
		IataCode: "ULN",
		Location: "106.766389, 47.843056"
	}),
	new Geo({
		IataCode: "ULO",
		Location: "92.081215, 49.9711"
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
		Location: "73.134195, 5.155074"
	}),
	new Geo({
		IataCode: "FVM",
		Location: "73.433458, -0.309117"
	}),
	new Geo({
		IataCode: "GAN",
		Location: "73.166667, -0.683333"
	}),
	new Geo({
		IataCode: "GKK",
		Location: "73.433056, 0.730833"
	}),
	new Geo({
		IataCode: "HAQ",
		Location: "73.15, 6.733333"
	}),
	new Geo({
		IataCode: "IFU",
		Location: "73.024756, 5.708529"
	}),
	new Geo({
		IataCode: "KDM",
		Location: "72.996944, 0.488056"
	}),
	new Geo({
		IataCode: "KDO",
		Location: "73.5219, 1.85917"
	}),
	new Geo({
		IataCode: "MLE",
		Location: "73.524444, 4.201389"
	}),
	new Geo({
		IataCode: "TMF",
		Location: "73.153163, 2.212251"
	}),
	new Geo({
		IataCode: "VAM",
		Location: "72.835833, 3.470556"
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
		Location: "80.633333, 28.683333"
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
		Location: "85.363056, 27.700556"
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
		Location: "83.986111, 28.197222"
	}),
	new Geo({
		IataCode: "PPL",
		Location: "86.6, 27.516667"
	}),
	new Geo({
		IataCode: "SIF",
		Location: "84.98012, 27.15946"
	}),
	new Geo({
		IataCode: "SKH",
		Location: "81.61667, 28.6"
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
		Location: "71.794444, 35.886111"
	}),
	new Geo({
		IataCode: "DBA",
		Location: "64.416667, 28.883333"
	}),
	new Geo({
		IataCode: "DEA",
		Location: "70.485278, 29.960556"
	}),
	new Geo({
		IataCode: "DSK",
		Location: "70.9, 31.916667"
	}),
	new Geo({
		IataCode: "GIL",
		Location: "74.335833, 35.919167"
	}),
	new Geo({
		IataCode: "GWD",
		Location: "62.338889, 25.230556"
	}),
	new Geo({
		IataCode: "HDD",
		Location: "68.363889, 25.322222"
	}),
	new Geo({
		IataCode: "ISB",
		Location: "73.104167, 33.613889"
	}),
	new Geo({
		IataCode: "KDU",
		Location: "75.733333, 35.3"
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
		Location: "72.998056, 31.369167"
	}),
	new Geo({
		IataCode: "MJD",
		Location: "68.141667, 27.336389"
	}),
	new Geo({
		IataCode: "MUX",
		Location: "71.418056, 30.202778"
	}),
	new Geo({
		IataCode: "PEW",
		Location: "71.5, 34"
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
		Location: "70.279722, 28.383889"
	}),
	new Geo({
		IataCode: "RZS",
		Location: "68.866667, 26.966667"
	}),
	new Geo({
		IataCode: "SKT",
		Location: "74.5, 32.533333"
	}),
	new Geo({
		IataCode: "SKZ",
		Location: "68.793611, 27.72"
	}),
	new Geo({
		IataCode: "TUK",
		Location: "63.066667, 25.983333"
	}),
	new Geo({
		IataCode: "UET",
		Location: "66.936111, 30.253611"
	}),
	new Geo({
		IataCode: "DYU",
		Location: "68.823611, 38.55"
	}),
	new Geo({
		IataCode: "KQT",
		Location: "68.86117, 37.85961"
	}),
	new Geo({
		IataCode: "LBD",
		Location: "69.7, 40.216667"
	}),
	new Geo({
		IataCode: "TJU",
		Location: "69.7833, 37.9167"
	}),
	new Geo({
		IataCode: "ASB",
		Location: "58.360833, 37.981667"
	}),
	new Geo({
		IataCode: "BKN",
		Location: "54.362778, 39.481389"
	}),
	new Geo({
		IataCode: "CRZ",
		Location: "63.616667, 39.083333"
	}),
	new Geo({
		IataCode: "KRW",
		Location: "53.083333, 40.083333"
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
		Location: "71.733611, 40.350278"
	}),
	new Geo({
		IataCode: "KSQ",
		Location: "65.766667, 38.8"
	}),
	new Geo({
		IataCode: "NCU",
		Location: "59.633333, 42.483333"
	}),
	new Geo({
		IataCode: "NMA",
		Location: "71.6, 40.983333"
	}),
	new Geo({
		IataCode: "NVI",
		Location: "65.176435, 40.12183"
	}),
	new Geo({
		IataCode: "SKD",
		Location: "67, 39.7"
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
		Location: "60.533333, 41.65"
	}),
	new Geo({
		IataCode: "ANU",
		Location: "-61.785556, 17.141111"
	}),
	new Geo({
		IataCode: "AXA",
		Location: "-63.05508, 18.20483"
	}),
	new Geo({
		IataCode: "AUA",
		Location: "-70.013889, 12.502222"
	}),
	new Geo({
		IataCode: "BGI",
		Location: "-59.493056, 13.072222"
	}),
	new Geo({
		IataCode: "BON",
		Location: "-68.273333, 12.134167"
	}),
	new Geo({
		IataCode: "EUX",
		Location: "-62.977778, 17.493056"
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
		Location: "-73.9709, 22.4418"
	}),
	new Geo({
		IataCode: "BIM",
		Location: "-79.26466, 25.69988"
	}),
	new Geo({
		IataCode: "CRI",
		Location: "-74.15, 22.75"
	}),
	new Geo({
		IataCode: "ELH",
		Location: "-76.685, 25.474722"
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
		Location: "-75.7825, 23.468056"
	}),
	new Geo({
		IataCode: "GHB",
		Location: "-76.330833, 25.283889"
	}),
	new Geo({
		IataCode: "IGA",
		Location: "-73.666667, 20.983333"
	}),
	new Geo({
		IataCode: "LGI",
		Location: "-75.090556, 23.179444"
	}),
	new Geo({
		IataCode: "MHH",
		Location: "-77.084722, 26.511111"
	}),
	new Geo({
		IataCode: "MYG",
		Location: "-73.018333, 22.376667"
	}),
	new Geo({
		IataCode: "NAS",
		Location: "-77.471944, 25.040556"
	}),
	new Geo({
		IataCode: "RCY",
		Location: "-74.966667, 23.666667"
	}),
	new Geo({
		IataCode: "RSD",
		Location: "-76.17062, 24.89523"
	}),
	new Geo({
		IataCode: "SAQ",
		Location: "-78.05, 25.05"
	}),
	new Geo({
		IataCode: "SML",
		Location: "-75.268056, 23.583333"
	}),
	new Geo({
		IataCode: "TBI",
		Location: "-75.453611, 24.315"
	}),
	new Geo({
		IataCode: "TCB",
		Location: "-77.372222, 26.735"
	}),
	new Geo({
		IataCode: "TZN",
		Location: "-77.585278, 24.165"
	}),
	new Geo({
		IataCode: "ZSA",
		Location: "-74.533056, 24.06"
	}),
	new Geo({
		IataCode: "BCV",
		Location: "-88.783333, 17.266667"
	}),
	new Geo({
		IataCode: "BZE",
		Location: "-88.31, 17.536111"
	}),
	new Geo({
		IataCode: "TZA",
		Location: "-88.194702, 17.516063"
	}),
	new Geo({
		IataCode: "CUK",
		Location: "-88.0325, 17.7347"
	}),
	new Geo({
		IataCode: "CYC",
		Location: "-88.833333, 17.666667"
	}),
	new Geo({
		IataCode: "CZH",
		Location: "-88.411424, 18.383229"
	}),
	new Geo({
		IataCode: "DGA",
		Location: "-88.23099, 16.98251"
	}),
	new Geo({
		IataCode: "INB",
		Location: "-88.44149, 16.5346"
	}),
	new Geo({
		IataCode: "ORZ",
		Location: "-88.75, 17.166667"
	}),
	new Geo({
		IataCode: "PLJ",
		Location: "-88.35336, 16.533346"
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
		IataCode: "CYD",
		Location: "-89.06, 17.160125"
	}),
	new Geo({
		IataCode: "SVK",
		Location: "-88.2, 16.433333"
	}),
	new Geo({
		IataCode: "DRK",
		Location: "-83.622437, 8.700499"
	}),
	new Geo({
		IataCode: "FON",
		Location: "-84.483333, 10.4"
	}),
	new Geo({
		IataCode: "GLF",
		Location: "-83.180833, 8.651389"
	}),
	new Geo({
		IataCode: "LIO",
		Location: "-83.021111, 9.955833"
	}),
	new Geo({
		IataCode: "LIR",
		Location: "-85.55, 10.589722"
	}),
	new Geo({
		IataCode: "NOB",
		Location: "-85.653, 9.97649"
	}),
	new Geo({
		IataCode: "OTR",
		Location: "-82.9686, 8.60156"
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
		Location: "-84.2, 10"
	}),
	new Geo({
		IataCode: "SYQ",
		Location: "-84.1398, 9.95705"
	}),
	new Geo({
		IataCode: "TMU",
		Location: "-85.016667, 9.733333"
	}),
	new Geo({
		IataCode: "TNO",
		Location: "-85.81541, 10.31495"
	}),
	new Geo({
		IataCode: "TTQ",
		Location: "-83.516667, 10.566667"
	}),
	new Geo({
		IataCode: "XQP",
		Location: "-84.15, 9.45"
	}),
	new Geo({
		IataCode: "BWW",
		Location: "-79.147222, 22.621111"
	}),
	new Geo({
		IataCode: "BCA",
		Location: "-74.50621, 20.36532"
	}),
	new Geo({
		IataCode: "BYM",
		Location: "-76.61667, 20.4"
	}),
	new Geo({
		IataCode: "CCC",
		Location: "-78.508333, 22.5125"
	}),
	new Geo({
		IataCode: "CFG",
		Location: "-80.414167, 22.15"
	}),
	new Geo({
		IataCode: "CMW",
		Location: "-77.84743, 21.42043"
	}),
	new Geo({
		IataCode: "CYO",
		Location: "-81.54599, 21.61645"
	}),
	new Geo({
		IataCode: "GAO",
		Location: "-75.158611, 20.084722"
	}),
	new Geo({
		IataCode: "GER",
		Location: "-82.78, 21.8375"
	}),
	new Geo({
		IataCode: "HAV",
		Location: "-82.4075, 22.989444"
	}),
	new Geo({
		IataCode: "HOG",
		Location: "-76.315, 20.785278"
	}),
	new Geo({
		IataCode: "MOA",
		Location: "-74.92211, 20.65411"
	}),
	new Geo({
		IataCode: "MZO",
		Location: "-77.093889, 20.286389"
	}),
	new Geo({
		IataCode: "SCU",
		Location: "-75.835833, 19.969167"
	}),
	new Geo({
		IataCode: "SNU",
		Location: "-79.941944, 22.491944"
	}),
	new Geo({
		IataCode: "VRA",
		Location: "-81.435278, 23.034444"
	}),
	new Geo({
		IataCode: "CUR",
		Location: "-68.960556, 12.194167"
	}),
	new Geo({
		IataCode: "DCF",
		Location: "-61.391944, 15.336667"
	}),
	new Geo({
		IataCode: "DOM",
		Location: "-61.300449, 15.548216"
	}),
	new Geo({
		IataCode: "LRM",
		Location: "-68.909383, 18.45258"
	}),
	new Geo({
		IataCode: "POP",
		Location: "-70.57, 19.757778"
	}),
	new Geo({
		IataCode: "PUJ",
		Location: "-68.383333, 18.566667"
	}),
	new Geo({
		IataCode: "AZS",
		Location: "-69.7375, 19.27"
	}),
	new Geo({
		IataCode: "JBQ",
		Location: "-69.98144, 18.575731"
	}),
	new Geo({
		IataCode: "SDQ",
		Location: "-69.669167, 18.429167"
	}),
	new Geo({
		IataCode: "STI",
		Location: "-70.700278, 19.469167"
	}),
	new Geo({
		IataCode: "GND",
		Location: "-61.786111, 12.004167"
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
		Location: "-63.047222, 18.099722"
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
		Location: "-91.696944, 14.520278"
	}),
	new Geo({
		IataCode: "BHG",
		Location: "-84.543333, 15.734722"
	}),
	new Geo({
		IataCode: "GJA",
		Location: "-85.9058, 16.445"
	}),
	new Geo({
		IataCode: "LCE",
		Location: "-86.857222, 15.740556"
	}),
	new Geo({
		IataCode: "PEU",
		Location: "-83.766667, 15.216667"
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
		Location: "-87.923611, 15.452778"
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
		Location: "-72.195, 19.732778"
	}),
	new Geo({
		IataCode: "JAK",
		Location: "-72.518611, 18.240556"
	}),
	new Geo({
		IataCode: "PAP",
		Location: "-72.2925, 18.58"
	}),
	new Geo({
		IataCode: "KIN",
		Location: "-76.7875, 17.935556"
	}),
	new Geo({
		IataCode: "MBJ",
		Location: "-77.9125, 18.501944"
	}),
	new Geo({
		IataCode: "NEG",
		Location: "-78.333333, 18.308333"
	}),
	new Geo({
		IataCode: "OCJ",
		Location: "-76.969722, 18.400556"
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
		Location: "-79.8875, 19.686667"
	}),
	new Geo({
		IataCode: "GCM",
		Location: "-81.358056, 19.2925"
	}),
	new Geo({
		IataCode: "LYB",
		Location: "-80.083333, 19.666667"
	}),
	new Geo({
		IataCode: "SLU",
		Location: "-60.992778, 14.019167"
	}),
	new Geo({
		IataCode: "UVF",
		Location: "-60.952222, 13.735556"
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
		Location: "-86.043562, 11.435385"
	}),
	new Geo({
		IataCode: "MGA",
		Location: "-86.168611, 12.141111"
	}),
	new Geo({
		IataCode: "NCR",
		Location: "-84.77, 11.1334"
	}),
	new Geo({
		IataCode: "PUZ",
		Location: "-83.383611, 14.045278"
	}),
	new Geo({
		IataCode: "RNI",
		Location: "-83.066667, 12.15"
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
		Location: "-77.993778, 9.190904"
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
		Location: "-82.251944, 9.34"
	}),
	new Geo({
		IataCode: "CHX",
		Location: "-82.515714, 9.458311"
	}),
	new Geo({
		IataCode: "CTD",
		Location: "-80.433333, 7.966667"
	}),
	new Geo({
		IataCode: "DAV",
		Location: "-82.433333, 8.383333"
	}),
	new Geo({
		IataCode: "JQE",
		Location: "-78.1572, 7.51778"
	}),
	new Geo({
		IataCode: "MPP",
		Location: "-77.733454, 8.945568"
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
		Location: "-79.0347, 8.62876"
	}),
	new Geo({
		IataCode: "PAC",
		Location: "-79.55558, 8.97334"
	}),
	new Geo({
		IataCode: "PTY",
		Location: "-79.383333, 9.083333"
	}),
	new Geo({
		IataCode: "PUE",
		Location: "-77.418333, 8.667222"
	}),
	new Geo({
		IataCode: "PYC",
		Location: "-79.605833, 9.574444"
	}),
	new Geo({
		IataCode: "RIH",
		Location: "-80.074, 8.2233"
	}),
	new Geo({
		IataCode: "SIC",
		Location: "-79.080076, 8.263402"
	}),
	new Geo({
		IataCode: "BQN",
		Location: "-67.13, 18.495833"
	}),
	new Geo({
		IataCode: "TJR",
		Location: "-65.643375, 18.245143"
	}),
	new Geo({
		IataCode: "CPX",
		Location: "-65.316667, 18.3"
	}),
	new Geo({
		IataCode: "MAZ",
		Location: "-67.148889, 18.257778"
	}),
	new Geo({
		IataCode: "PSE",
		Location: "-66.563611, 18.010833"
	}),
	new Geo({
		IataCode: "SIG",
		Location: "-66.102778, 18.458889"
	}),
	new Geo({
		IataCode: "SJU",
		Location: "-66.002222, 18.44"
	}),
	new Geo({
		IataCode: "VQS",
		Location: "-65.4225, 18.114167"
	}),
	new Geo({
		IataCode: "SAL",
		Location: "-89.053974, 13.441883"
	}),
	new Geo({
		IataCode: "SXM",
		Location: "-63.111944, 18.043611"
	}),
	new Geo({
		IataCode: "GDT",
		Location: "-71.1423, 21.4445"
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
		Location: "-71.529722, 21.515833"
	}),
	new Geo({
		IataCode: "POS",
		Location: "-61.35, 10.6"
	}),
	new Geo({
		IataCode: "TAB",
		Location: "-60.836667, 11.146389"
	}),
	new Geo({
		IataCode: "SVD",
		Location: "-61.210885, 13.143845"
	}),
	new Geo({
		IataCode: "EIS",
		Location: "-64.542778, 18.443889"
	}),
	new Geo({
		IataCode: "NGD",
		Location: "-64.3, 18.716667"
	}),
	new Geo({
		IataCode: "TOV",
		Location: "-64.583333, 18.45"
	}),
	new Geo({
		IataCode: "VIJ",
		Location: "-64.428077, 18.445456"
	}),
	new Geo({
		IataCode: "STT",
		Location: "-64.969444, 18.3375"
	}),
	new Geo({
		IataCode: "SSB",
		Location: "-64.69986, 17.749402"
	}),
	new Geo({
		IataCode: "STX",
		Location: "-64.798611, 17.701944"
	}),
	new Geo({
		IataCode: "TIA",
		Location: "19.716667, 41.416944"
	}),
	new Geo({
		IataCode: "GRZ",
		Location: "15.44, 46.993333"
	}),
	new Geo({
		IataCode: "INN",
		Location: "11.347222, 47.260833"
	}),
	new Geo({
		IataCode: "KLU",
		Location: "14.341667, 46.643056"
	}),
	new Geo({
		IataCode: "LNZ",
		Location: "14.193611, 48.234444"
	}),
	new Geo({
		IataCode: "SZG",
		Location: "13.005556, 47.793056"
	}),
	new Geo({
		IataCode: "VIE",
		Location: "16.55751, 48.1221"
	}),
	new Geo({
		IataCode: "BNX",
		Location: "17.3, 44.933333"
	}),
	new Geo({
		IataCode: "OMO",
		Location: "17.846667, 43.285556"
	}),
	new Geo({
		IataCode: "SJJ",
		Location: "18.338056, 43.818889"
	}),
	new Geo({
		IataCode: "TZL",
		Location: "18.709167, 44.409722"
	}),
	new Geo({
		IataCode: "ANR",
		Location: "4.46, 51.19"
	}),
	new Geo({
		IataCode: "BRU",
		Location: "4.494167, 50.901667"
	}),
	new Geo({
		IataCode: "CRL",
		Location: "4.453817, 50.459197"
	}),
	new Geo({
		IataCode: "LGG",
		Location: "5.441667, 50.636111"
	}),
	new Geo({
		IataCode: "MWW",
		Location: "3.2, 50.733333"
	}),
	new Geo({
		IataCode: "OST",
		Location: "2.8636, 51.1997"
	}),
	new Geo({
		IataCode: "BOJ",
		Location: "27.5152, 42.5696"
	}),
	new Geo({
		IataCode: "PDV",
		Location: "24.850833, 42.067778"
	}),
	new Geo({
		IataCode: "SOF",
		Location: "23.4, 42.7"
	}),
	new Geo({
		IataCode: "VAR",
		Location: "27.825556, 43.2325"
	}),
	new Geo({
		IataCode: "BQT",
		Location: "23.883333, 52.116667"
	}),
	new Geo({
		IataCode: "GME",
		Location: "31.016667, 52.526944"
	}),
	new Geo({
		IataCode: "GNA",
		Location: "24.055, 53.601667"
	}),
	new Geo({
		IataCode: "MSQ",
		Location: "28.03073, 53.88247"
	}),
	new Geo({
		IataCode: "MVQ",
		Location: "30.133333, 53.95"
	}),
	new Geo({
		IataCode: "SIP",
		Location: "33.975139, 45.052222"
	}),
	new Geo({
		IataCode: "ACH",
		Location: "9.5667, 47.4833"
	}),
	new Geo({
		IataCode: "BSL",
		Location: "7.529914, 47.589583"
	}),
	new Geo({
		IataCode: "BRN",
		Location: "7.499167, 46.915278"
	}),
	new Geo({
		IataCode: "GVA",
		Location: "6.110278, 46.239444"
	}),
	new Geo({
		IataCode: "LUG",
		Location: "8.908882, 46.002685"
	}),
	new Geo({
		IataCode: "SIR",
		Location: "7.333333, 46.25"
	}),
	new Geo({
		IataCode: "ZRH",
		Location: "8.551667, 47.458333"
	}),
	new Geo({
		IataCode: "ECN",
		Location: "33.4898, 35.1589"
	}),
	new Geo({
		IataCode: "LCA",
		Location: "33.630556, 34.877778"
	}),
	new Geo({
		IataCode: "PFO",
		Location: "32.483333, 34.716667"
	}),
	new Geo({
		IataCode: "BRQ",
		Location: "16.687202, 49.152745"
	}),
	new Geo({
		IataCode: "KLV",
		Location: "12.916667, 50.2"
	}),
	new Geo({
		IataCode: "OSR",
		Location: "18.133333, 49.7"
	}),
	new Geo({
		IataCode: "PED",
		Location: "15.738611, 50.013333"
	}),
	new Geo({
		IataCode: "PRG",
		Location: "14.266667, 50.1"
	}),
	new Geo({
		IataCode: "AGB",
		Location: "10.931667, 48.425278"
	}),
	new Geo({
		IataCode: "FKB",
		Location: "8.0803, 48.7792"
	}),
	new Geo({
		IataCode: "SXF",
		Location: "13.5, 52.366667"
	}),
	new Geo({
		IataCode: "TXL",
		Location: "13.2956, 52.5606"
	}),
	new Geo({
		IataCode: "BWE",
		Location: "10.55611, 52.31917"
	}),
	new Geo({
		IataCode: "BRE",
		Location: "8.79, 53.046667"
	}),
	new Geo({
		IataCode: "CGN",
		Location: "7.141944, 50.865833"
	}),
	new Geo({
		IataCode: "DTM",
		Location: "7.6, 51.516667"
	}),
	new Geo({
		IataCode: "DRS",
		Location: "13.766667, 51.133333"
	}),
	new Geo({
		IataCode: "DUS",
		Location: "6.752778, 51.281111"
	}),
	new Geo({
		IataCode: "NRN",
		Location: "6.15, 51.6056"
	}),
	new Geo({
		IataCode: "ERF",
		Location: "10.966667, 50.983333"
	}),
	new Geo({
		IataCode: "XFW",
		Location: "9.834652, 53.534288"
	}),
	new Geo({
		IataCode: "FRA",
		Location: "8.570556, 50.038889"
	}),
	new Geo({
		IataCode: "HHN",
		Location: "7.266667, 49.95"
	}),
	new Geo({
		IataCode: "FDH",
		Location: "9.5125, 47.667222"
	}),
	new Geo({
		IataCode: "HAM",
		Location: "9.995, 53.633889"
	}),
	new Geo({
		IataCode: "LBC",
		Location: "10.720556, 53.806111"
	}),
	new Geo({
		IataCode: "HAJ",
		Location: "9.684722, 52.461667"
	}),
	new Geo({
		IataCode: "HDF",
		Location: "14.15235, 53.87871"
	}),
	new Geo({
		IataCode: "KSF",
		Location: "9.375278, 51.408056"
	}),
	new Geo({
		IataCode: "LEJ",
		Location: "12.233333, 51.416667"
	}),
	new Geo({
		IataCode: "MHG",
		Location: "8.514264, 49.472706"
	}),
	new Geo({
		IataCode: "FMM",
		Location: "10.243611, 47.9925"
	}),
	new Geo({
		IataCode: "MUC",
		Location: "11.783333, 48.35"
	}),
	new Geo({
		IataCode: "FMO",
		Location: "7.683333, 52.133333"
	}),
	new Geo({
		IataCode: "NUE",
		Location: "11.083333, 49.5"
	}),
	new Geo({
		IataCode: "PAD",
		Location: "8.621111, 51.615"
	}),
	new Geo({
		IataCode: "RLG",
		Location: "12.266667, 53.92"
	}),
	new Geo({
		IataCode: "SCN",
		Location: "7.110214, 49.215579"
	}),
	new Geo({
		IataCode: "ZQW",
		Location: "7.400647, 49.209525"
	}),
	new Geo({
		IataCode: "STR",
		Location: "9.21, 48.688333"
	}),
	new Geo({
		IataCode: "GWT",
		Location: "8.3403, 54.9132"
	}),
	new Geo({
		IataCode: "OHR",
		Location: "8.529167, 54.685833"
	}),
	new Geo({
		IataCode: "AAL",
		Location: "9.85, 57.093056"
	}),
	new Geo({
		IataCode: "AAR",
		Location: "10.618056, 56.310278"
	}),
	new Geo({
		IataCode: "BLL",
		Location: "9.15, 55.738333"
	}),
	new Geo({
		IataCode: "CPH",
		Location: "12.633333, 55.608056"
	}),
	new Geo({
		IataCode: "RKE",
		Location: "12.133333, 55.583333"
	}),
	new Geo({
		IataCode: "EBJ",
		Location: "8.5525, 55.526389"
	}),
	new Geo({
		IataCode: "KRP",
		Location: "9.116667, 56.3"
	}),
	new Geo({
		IataCode: "ODE",
		Location: "10.328611, 55.476389"
	}),
	new Geo({
		IataCode: "RNN",
		Location: "14.757778, 55.065556"
	}),
	new Geo({
		IataCode: "SGD",
		Location: "9.791731, 54.964367"
	}),
	new Geo({
		IataCode: "KDL",
		Location: "22.8, 58.983333"
	}),
	new Geo({
		IataCode: "URE",
		Location: "22.5, 58.216667"
	}),
	new Geo({
		IataCode: "TLL",
		Location: "24.832844, 59.413317"
	}),
	new Geo({
		IataCode: "TAY",
		Location: "26.690556, 58.3075"
	}),
	new Geo({
		IataCode: "ALC",
		Location: "-0.566667, 38.283333"
	}),
	new Geo({
		IataCode: "LEI",
		Location: "-2.372222, 36.844444"
	}),
	new Geo({
		IataCode: "ACE",
		Location: "-13.605666, 28.950795"
	}),
	new Geo({
		IataCode: "OVD",
		Location: "-6.033333, 43.566667"
	}),
	new Geo({
		IataCode: "BJZ",
		Location: "-6.82, 38.891667"
	}),
	new Geo({
		IataCode: "BCN",
		Location: "2.094444, 41.302778"
	}),
	new Geo({
		IataCode: "BIO",
		Location: "-2.921667, 43.302778"
	}),
	new Geo({
		IataCode: "CDT",
		Location: "0.073333, 40.213889"
	}),
	new Geo({
		IataCode: "FUE",
		Location: "-13.863761, 28.452717"
	}),
	new Geo({
		IataCode: "GRO",
		Location: "2.763333, 41.909167"
	}),
	new Geo({
		IataCode: "LPA",
		Location: "-15.3847, 27.9325"
	}),
	new Geo({
		IataCode: "GRX",
		Location: "-3.780556, 37.187778"
	}),
	new Geo({
		IataCode: "IBZ",
		Location: "1.372778, 38.873611"
	}),
	new Geo({
		IataCode: "XRY",
		Location: "-6.058889, 36.745278"
	}),
	new Geo({
		IataCode: "LCG",
		Location: "-8.379167, 43.299444"
	}),
	new Geo({
		IataCode: "GMZ",
		Location: "-17.2, 28.016667"
	}),
	new Geo({
		IataCode: "SPC",
		Location: "-17.754167, 28.620833"
	}),
	new Geo({
		IataCode: "LEN",
		Location: "-5.650833, 42.584444"
	}),
	new Geo({
		IataCode: "ILD",
		Location: "0.5358, 41.7278"
	}),
	new Geo({
		IataCode: "RJL",
		Location: "-2.323611, 42.456944"
	}),
	new Geo({
		IataCode: "MAD",
		Location: "-3.563333, 40.472222"
	}),
	new Geo({
		IataCode: "AGP",
		Location: "-4.498056, 36.671667"
	}),
	new Geo({
		IataCode: "MLN",
		Location: "-2.955556, 35.28"
	}),
	new Geo({
		IataCode: "MAH",
		Location: "4.215278, 39.861389"
	}),
	new Geo({
		IataCode: "MJV",
		Location: "-0.811111, 37.774722"
	}),
	new Geo({
		IataCode: "PMI",
		Location: "2.7278, 39.5536"
	}),
	new Geo({
		IataCode: "PNA",
		Location: "-1.644444, 42.769444"
	}),
	new Geo({
		IataCode: "REU",
		Location: "1.169444, 41.15"
	}),
	new Geo({
		IataCode: "RGS",
		Location: "-3.621025, 42.357275"
	}),
	new Geo({
		IataCode: "RMU",
		Location: "-1.141831, 37.790325"
	}),
	new Geo({
		IataCode: "SLM",
		Location: "-5.501986, 40.952117"
	}),
	new Geo({
		IataCode: "SCQ",
		Location: "-8.4168, 42.9"
	}),
	new Geo({
		IataCode: "EAS",
		Location: "-1.79, 43.357778"
	}),
	new Geo({
		IataCode: "SDR",
		Location: "-3.826389, 43.429167"
	}),
	new Geo({
		IataCode: "SVQ",
		Location: "-5.8975, 37.415"
	}),
	new Geo({
		IataCode: "TFN",
		Location: "-16.332778, 28.473056"
	}),
	new Geo({
		IataCode: "TFS",
		Location: "-16.566667, 28.05"
	}),
	new Geo({
		IataCode: "VLC",
		Location: "-0.478611, 39.490278"
	}),
	new Geo({
		IataCode: "VLL",
		Location: "-4.85, 41.7"
	}),
	new Geo({
		IataCode: "VDE",
		Location: "-17.885278, 27.812778"
	}),
	new Geo({
		IataCode: "VGO",
		Location: "-8.627778, 42.226389"
	}),
	new Geo({
		IataCode: "VIT",
		Location: "-2.724469, 42.882836"
	}),
	new Geo({
		IataCode: "ZAZ",
		Location: "-1.011086, 41.663423"
	}),
	new Geo({
		IataCode: "ENF",
		Location: "23.416667, 68.35"
	}),
	new Geo({
		IataCode: "HEL",
		Location: "24.971667, 60.325556"
	}),
	new Geo({
		IataCode: "IVL",
		Location: "27.415556, 68.611111"
	}),
	new Geo({
		IataCode: "JOE",
		Location: "29.608889, 62.6625"
	}),
	new Geo({
		IataCode: "JYV",
		Location: "25.681944, 62.399167"
	}),
	new Geo({
		IataCode: "KAJ",
		Location: "27.688889, 64.277778"
	}),
	new Geo({
		IataCode: "KEM",
		Location: "24.585833, 65.78"
	}),
	new Geo({
		IataCode: "KTT",
		Location: "24.8469, 67.701"
	}),
	new Geo({
		IataCode: "KOK",
		Location: "23.15, 63.716667"
	}),
	new Geo({
		IataCode: "KUO",
		Location: "27.798333, 63.005556"
	}),
	new Geo({
		IataCode: "KAO",
		Location: "29.233889, 65.990278"
	}),
	new Geo({
		IataCode: "LPP",
		Location: "28.156667, 61.046111"
	}),
	new Geo({
		IataCode: "MHQ",
		Location: "19.896667, 60.123333"
	}),
	new Geo({
		IataCode: "OUL",
		Location: "25.358333, 64.929167"
	}),
	new Geo({
		IataCode: "POR",
		Location: "21.797222, 61.463056"
	}),
	new Geo({
		IataCode: "RVN",
		Location: "25.826667, 66.563056"
	}),
	new Geo({
		IataCode: "SVL",
		Location: "28.95, 61.95"
	}),
	new Geo({
		IataCode: "SJY",
		Location: "22.831667, 62.693333"
	}),
	new Geo({
		IataCode: "TMP",
		Location: "23.738889, 61.463889"
	}),
	new Geo({
		IataCode: "TKU",
		Location: "22.270556, 60.514167"
	}),
	new Geo({
		IataCode: "VAA",
		Location: "21.761389, 63.045"
	}),
	new Geo({
		IataCode: "FAE",
		Location: "-7.266667, 62.066667"
	}),
	new Geo({
		IataCode: "AGF",
		Location: "0.598611, 44.173611"
	}),
	new Geo({
		IataCode: "QXB",
		Location: "5.36778, 43.50555"
	}),
	new Geo({
		IataCode: "AJA",
		Location: "8.803056, 41.924167"
	}),
	new Geo({
		IataCode: "ANE",
		Location: "-0.31268, 47.56254"
	}),
	new Geo({
		IataCode: "NCY",
		Location: "6.100833, 45.930556"
	}),
	new Geo({
		IataCode: "AUR",
		Location: "2.418056, 44.8975"
	}),
	new Geo({
		IataCode: "AVN",
		Location: "4.9, 43.9"
	}),
	new Geo({
		IataCode: "BIA",
		Location: "9.486111, 42.549167"
	}),
	new Geo({
		IataCode: "EGC",
		Location: "0.518611, 44.825279"
	}),
	new Geo({
		IataCode: "BZR",
		Location: "3.354444, 43.324167"
	}),
	new Geo({
		IataCode: "BIQ",
		Location: "-1.522778, 43.469722"
	}),
	new Geo({
		IataCode: "BOD",
		Location: "-0.714444, 44.829444"
	}),
	new Geo({
		IataCode: "BES",
		Location: "-4.420556, 48.447222"
	}),
	new Geo({
		IataCode: "BVE",
		Location: "1.483498, 45.040355"
	}),
	new Geo({
		IataCode: "CFR",
		Location: "-0.448056, 49.173333"
	}),
	new Geo({
		IataCode: "CLY",
		Location: "8.791667, 42.527778"
	}),
	new Geo({
		IataCode: "CCF",
		Location: "2.3167, 43.2167"
	}),
	new Geo({
		IataCode: "DCM",
		Location: "2.284167, 43.555833"
	}),
	new Geo({
		IataCode: "CMF",
		Location: "5.879745, 45.639968"
	}),
	new Geo({
		IataCode: "CHR",
		Location: "1.730556, 46.862222"
	}),
	new Geo({
		IataCode: "CFE",
		Location: "3.1675, 45.785833"
	}),
	new Geo({
		IataCode: "DOL",
		Location: "0.164167, 49.362778"
	}),
	new Geo({
		IataCode: "DNR",
		Location: "-2.0836, 48.5878"
	}),
	new Geo({
		IataCode: "DLE",
		Location: "5.433333, 47.05"
	}),
	new Geo({
		IataCode: "FSC",
		Location: "9.098396, 41.503178"
	}),
	new Geo({
		IataCode: "GNB",
		Location: "5.329722, 45.362778"
	}),
	new Geo({
		IataCode: "LAI",
		Location: "-3.475285, 48.755114"
	}),
	new Geo({
		IataCode: "LRH",
		Location: "-1.185833, 46.180556"
	}),
	new Geo({
		IataCode: "LME",
		Location: "0.201667, 47.948611"
	}),
	new Geo({
		IataCode: "LPY",
		Location: "3.766667, 45.083333"
	}),
	new Geo({
		IataCode: "LTQ",
		Location: "1.628056, 50.515"
	}),
	new Geo({
		IataCode: "LIL",
		Location: "3.088056, 50.564444"
	}),
	new Geo({
		IataCode: "LIG",
		Location: "1.182222, 45.861944"
	}),
	new Geo({
		IataCode: "LRT",
		Location: "-3.439167, 47.761111"
	}),
	new Geo({
		IataCode: "LDE",
		Location: "-0.003611, 43.181944"
	}),
	new Geo({
		IataCode: "LYN",
		Location: "4.943333, 45.730833"
	}),
	new Geo({
		IataCode: "LYS",
		Location: "5.081667, 45.725556"
	}),
	new Geo({
		IataCode: "MRS",
		Location: "5.2164, 43.4356"
	}),
	new Geo({
		IataCode: "MEN",
		Location: "3.533333, 44.5"
	}),
	new Geo({
		IataCode: "ETZ",
		Location: "6.247778, 48.979167"
	}),
	new Geo({
		IataCode: "MPL",
		Location: "3.9675, 43.580833"
	}),
	new Geo({
		IataCode: "MLH",
		Location: "7.529914, 47.589583"
	}),
	new Geo({
		IataCode: "NTE",
		Location: "-1.609722, 47.158333"
	}),
	new Geo({
		IataCode: "NCE",
		Location: "7.2175, 43.663889"
	}),
	new Geo({
		IataCode: "FNI",
		Location: "4.416667, 43.75"
	}),
	new Geo({
		IataCode: "BVA",
		Location: "2.1125, 49.455833"
	}),
	new Geo({
		IataCode: "CDG",
		Location: "2.548611, 49.009722"
	}),
	new Geo({
		IataCode: "ORY",
		Location: "2.357222, 48.728889"
	}),
	new Geo({
		IataCode: "PUF",
		Location: "-0.417778, 43.38"
	}),
	new Geo({
		IataCode: "PGX",
		Location: "0.815392, 45.197462"
	}),
	new Geo({
		IataCode: "PGF",
		Location: "2.871667, 42.740833"
	}),
	new Geo({
		IataCode: "PIS",
		Location: "0.306389, 46.586111"
	}),
	new Geo({
		IataCode: "UIP",
		Location: "-4.170833, 47.974444"
	}),
	new Geo({
		IataCode: "RHE",
		Location: "4.050556, 49.310833"
	}),
	new Geo({
		IataCode: "RNS",
		Location: "-1.731389, 48.068611"
	}),
	new Geo({
		IataCode: "RDZ",
		Location: "2.482672, 44.407869"
	}),
	new Geo({
		IataCode: "URO",
		Location: "1.1875, 49.388611"
	}),
	new Geo({
		IataCode: "EBU",
		Location: "4.296944, 45.541389"
	}),
	new Geo({
		IataCode: "SNR",
		Location: "-2.147827, 47.310664"
	}),
	new Geo({
		IataCode: "SXB",
		Location: "7.633333, 48.533333"
	}),
	new Geo({
		IataCode: "TLN",
		Location: "6.15, 43.1"
	}),
	new Geo({
		IataCode: "TUF",
		Location: "0.7275, 47.428333"
	}),
	new Geo({
		IataCode: "TLS",
		Location: "1.365, 43.630278"
	}),
	new Geo({
		IataCode: "XCR",
		Location: "4.2011, 48.7678"
	}),
	new Geo({
		IataCode: "GCI",
		Location: "-2.602778, 49.436111"
	}),
	new Geo({
		IataCode: "GIB",
		Location: "-5.347222, 36.15"
	}),
	new Geo({
		IataCode: "AXD",
		Location: "25.95, 40.8556"
	}),
	new Geo({
		IataCode: "GPA",
		Location: "21.425556, 38.151111"
	}),
	new Geo({
		IataCode: "EFL",
		Location: "20.505556, 38.118056"
	}),
	new Geo({
		IataCode: "JTY",
		Location: "26.366667, 36.566667"
	}),
	new Geo({
		IataCode: "ATH",
		Location: "23.944467, 37.936358"
	}),
	new Geo({
		IataCode: "JKH",
		Location: "26.141667, 38.345"
	}),
	new Geo({
		IataCode: "CFU",
		Location: "19.910278, 39.601389"
	}),
	new Geo({
		IataCode: "CHQ",
		Location: "24.148333, 35.5325"
	}),
	new Geo({
		IataCode: "HER",
		Location: "25.183333, 35.340278"
	}),
	new Geo({
		IataCode: "JIK",
		Location: "26.333333, 37.666667"
	}),
	new Geo({
		IataCode: "IOA",
		Location: "20.825833, 39.696667"
	}),
	new Geo({
		IataCode: "JKL",
		Location: "26.940556, 36.963333"
	}),
	new Geo({
		IataCode: "KLX",
		Location: "22.028704, 37.056136"
	}),
	new Geo({
		IataCode: "AOK",
		Location: "27.15, 35.416667"
	}),
	new Geo({
		IataCode: "KSJ",
		Location: "26.916667, 35.421389"
	}),
	new Geo({
		IataCode: "KSO",
		Location: "21.273333, 40.450833"
	}),
	new Geo({
		IataCode: "KZS",
		Location: "29.576483, 36.141514"
	}),
	new Geo({
		IataCode: "KVA",
		Location: "24.61922, 40.91331"
	}),
	new Geo({
		IataCode: "KIT",
		Location: "23.025, 36.291667"
	}),
	new Geo({
		IataCode: "KGS",
		Location: "27.095278, 36.793056"
	}),
	new Geo({
		IataCode: "KZI",
		Location: "21.841944, 40.288611"
	}),
	new Geo({
		IataCode: "LXS",
		Location: "25.25, 39.916667"
	}),
	new Geo({
		IataCode: "LRS",
		Location: "26.800289, 37.184903"
	}),
	new Geo({
		IataCode: "JMK",
		Location: "25.344444, 37.436111"
	}),
	new Geo({
		IataCode: "MLO",
		Location: "24.476531, 36.696744"
	}),
	new Geo({
		IataCode: "MJT",
		Location: "26.599444, 39.056111"
	}),
	new Geo({
		IataCode: "JNX",
		Location: "25.383333, 37.1"
	}),
	new Geo({
		IataCode: "PAS",
		Location: "25.128137, 37.010161"
	}),
	new Geo({
		IataCode: "PVK",
		Location: "20.765833, 38.926389"
	}),
	new Geo({
		IataCode: "RHO",
		Location: "28.08629, 36.406501"
	}),
	new Geo({
		IataCode: "SMI",
		Location: "26.913889, 37.688889"
	}),
	new Geo({
		IataCode: "JSH",
		Location: "26.116667, 35.216667"
	}),
	new Geo({
		IataCode: "JSI",
		Location: "23.505556, 39.180556"
	}),
	new Geo({
		IataCode: "SKU",
		Location: "24.566667, 38.916667"
	}),
	new Geo({
		IataCode: "JSY",
		Location: "24.95, 37.423611"
	}),
	new Geo({
		IataCode: "SKG",
		Location: "22.972222, 40.520833"
	}),
	new Geo({
		IataCode: "JTR",
		Location: "25.473093, 36.402959"
	}),
	new Geo({
		IataCode: "VOL",
		Location: "22.794339, 39.219619"
	}),
	new Geo({
		IataCode: "ZTH",
		Location: "20.8883, 37.7558"
	}),
	new Geo({
		IataCode: "BWK",
		Location: "16.683333, 43.283333"
	}),
	new Geo({
		IataCode: "DBV",
		Location: "18.265278, 42.563333"
	}),
	new Geo({
		IataCode: "OSI",
		Location: "18.810156, 45.462667"
	}),
	new Geo({
		IataCode: "PUY",
		Location: "13.923611, 44.891667"
	}),
	new Geo({
		IataCode: "RJK",
		Location: "14.568333, 45.215833"
	}),
	new Geo({
		IataCode: "SPU",
		Location: "16.299187, 43.537888"
	}),
	new Geo({
		IataCode: "ZAD",
		Location: "15.356667, 44.097778"
	}),
	new Geo({
		IataCode: "ZAG",
		Location: "16.070278, 45.743056"
	}),
	new Geo({
		IataCode: "BUD",
		Location: "19.233333, 47.433333"
	}),
	new Geo({
		IataCode: "DEB",
		Location: "21.7, 47.55"
	}),
	new Geo({
		IataCode: "MCQ",
		Location: "20.833333, 48.116667"
	}),
	new Geo({
		IataCode: "PEV",
		Location: "18.24083, 45.99083"
	}),
	new Geo({
		IataCode: "SOB",
		Location: "17.159, 46.686"
	}),
	new Geo({
		IataCode: "QZD",
		Location: "20.08917, 46.25083"
	}),
	new Geo({
		IataCode: "ORK",
		Location: "-8.490278, 51.843333"
	}),
	new Geo({
		IataCode: "CFN",
		Location: "-8.340278, 55.041667"
	}),
	new Geo({
		IataCode: "DUB",
		Location: "-6.252222, 53.4325"
	}),
	new Geo({
		IataCode: "KIR",
		Location: "-9.523783, 52.180878"
	}),
	new Geo({
		IataCode: "NOC",
		Location: "-8.811254, 53.913203"
	}),
	new Geo({
		IataCode: "SNN",
		Location: "-8.918611, 52.700556"
	}),
	new Geo({
		IataCode: "NNR",
		Location: "-9.466667, 53.216667"
	}),
	new Geo({
		IataCode: "AHO",
		Location: "8.288889, 40.630556"
	}),
	new Geo({
		IataCode: "AOI",
		Location: "13.362319, 43.616342"
	}),
	new Geo({
		IataCode: "BRI",
		Location: "16.788333, 41.141111"
	}),
	new Geo({
		IataCode: "BLQ",
		Location: "11.2925, 44.530556"
	}),
	new Geo({
		IataCode: "BDS",
		Location: "17.946667, 40.658056"
	}),
	new Geo({
		IataCode: "CAG",
		Location: "9.061111, 39.247222"
	}),
	new Geo({
		IataCode: "CTA",
		Location: "15.062943, 37.466139"
	}),
	new Geo({
		IataCode: "CIY",
		Location: "14.606945, 36.991667"
	}),
	new Geo({
		IataCode: "CRV",
		Location: "17.083333, 39"
	}),
	new Geo({
		IataCode: "CUF",
		Location: "7.62125, 44.545585"
	}),
	new Geo({
		IataCode: "FLR",
		Location: "11.197778, 43.810278"
	}),
	new Geo({
		IataCode: "FOG",
		Location: "15.539444, 41.426667"
	}),
	new Geo({
		IataCode: "GOA",
		Location: "8.837778, 44.413056"
	}),
	new Geo({
		IataCode: "LMP",
		Location: "12.616667, 35.5"
	}),
	new Geo({
		IataCode: "SUF",
		Location: "16.240883, 38.907064"
	}),
	new Geo({
		IataCode: "BGY",
		Location: "9.700278, 45.668333"
	}),
	new Geo({
		IataCode: "LIN",
		Location: "9.277778, 45.441667"
	}),
	new Geo({
		IataCode: "MXP",
		Location: "8.716667, 45.633333"
	}),
	new Geo({
		IataCode: "NAP",
		Location: "14.291667, 40.886111"
	}),
	new Geo({
		IataCode: "OLB",
		Location: "9.51725, 40.898593"
	}),
	new Geo({
		IataCode: "PMO",
		Location: "13.1, 38.166667"
	}),
	new Geo({
		IataCode: "PNL",
		Location: "11.966111, 36.813611"
	}),
	new Geo({
		IataCode: "PMF",
		Location: "10.295906, 44.823491"
	}),
	new Geo({
		IataCode: "PEG",
		Location: "12.513428, 43.096721"
	}),
	new Geo({
		IataCode: "PSR",
		Location: "14.184444, 42.433889"
	}),
	new Geo({
		IataCode: "PSA",
		Location: "10.392778, 43.680556"
	}),
	new Geo({
		IataCode: "REG",
		Location: "15.650833, 38.075278"
	}),
	new Geo({
		IataCode: "RMI",
		Location: "12.612222, 44.020833"
	}),
	new Geo({
		IataCode: "CIA",
		Location: "12.593333, 41.799444"
	}),
	new Geo({
		IataCode: "FCO",
		Location: "12.238889, 41.800278"
	}),
	new Geo({
		IataCode: "TQR",
		Location: "15.483333, 42.116667"
	}),
	new Geo({
		IataCode: "TPS",
		Location: "12.486389, 37.911667"
	}),
	new Geo({
		IataCode: "TRS",
		Location: "13.466667, 45.833333"
	}),
	new Geo({
		IataCode: "TRN",
		Location: "7.648056, 45.201111"
	}),
	new Geo({
		IataCode: "TSF",
		Location: "12.194422, 45.6484"
	}),
	new Geo({
		IataCode: "VCE",
		Location: "12.35, 45.5"
	}),
	new Geo({
		IataCode: "VRN",
		Location: "10.888533, 45.395706"
	}),
	new Geo({
		IataCode: "VIF",
		Location: "16.176944, 41.885278"
	}),
	new Geo({
		IataCode: "PRN",
		Location: "21.035556, 42.573611"
	}),
	new Geo({
		IataCode: "KUN",
		Location: "24.084778, 54.963919"
	}),
	new Geo({
		IataCode: "PLQ",
		Location: "21.083333, 55.95"
	}),
	new Geo({
		IataCode: "VNO",
		Location: "25.283333, 54.633333"
	}),
	new Geo({
		IataCode: "LUX",
		Location: "6.206667, 49.627778"
	}),
	new Geo({
		IataCode: "LPX",
		Location: "21.1, 56.516667"
	}),
	new Geo({
		IataCode: "RIX",
		Location: "23.972222, 56.925"
	}),
	new Geo({
		IataCode: "MCM",
		Location: "7.416667, 43.733333"
	}),
	new Geo({
		IataCode: "KIV",
		Location: "28.933333, 46.916667"
	}),
	new Geo({
		IataCode: "TGD",
		Location: "19.251944, 42.358333"
	}),
	new Geo({
		IataCode: "TIV",
		Location: "18.725556, 42.403611"
	}),
	new Geo({
		IataCode: "OHD",
		Location: "20.743056, 41.185"
	}),
	new Geo({
		IataCode: "SKP",
		Location: "21.633333, 41.966667"
	}),
	new Geo({
		IataCode: "JCO",
		Location: "14.3333, 36.0167"
	}),
	new Geo({
		IataCode: "MLA",
		Location: "14.4775, 35.857497"
	}),
	new Geo({
		IataCode: "AMS",
		Location: "4.768056, 52.308333"
	}),
	new Geo({
		IataCode: "EIN",
		Location: "5.388889, 51.453333"
	}),
	new Geo({
		IataCode: "GRQ",
		Location: "6.575556, 53.120278"
	}),
	new Geo({
		IataCode: "MST",
		Location: "5.773611, 50.911111"
	}),
	new Geo({
		IataCode: "RTM",
		Location: "4.444444, 51.958333"
	}),
	new Geo({
		IataCode: "AES",
		Location: "6.105278, 62.5625"
	}),
	new Geo({
		IataCode: "ALF",
		Location: "23.354187, 69.979019"
	}),
	new Geo({
		IataCode: "ANX",
		Location: "16.141667, 69.293056"
	}),
	new Geo({
		IataCode: "BDU",
		Location: "18.54, 69.056111"
	}),
	new Geo({
		IataCode: "BJF",
		Location: "29.666667, 70.6"
	}),
	new Geo({
		IataCode: "BGO",
		Location: "5.219444, 60.293611"
	}),
	new Geo({
		IataCode: "BVG",
		Location: "29, 70.866667"
	}),
	new Geo({
		IataCode: "BOO",
		Location: "14.372222, 67.269167"
	}),
	new Geo({
		IataCode: "BNN",
		Location: "12.206944, 65.460278"
	}),
	new Geo({
		IataCode: "EVE",
		Location: "16.679722, 68.496667"
	}),
	new Geo({
		IataCode: "VDB",
		Location: "9.288056, 61.015556"
	}),
	new Geo({
		IataCode: "FRO",
		Location: "5.014444, 61.581944"
	}),
	new Geo({
		IataCode: "FDE",
		Location: "5.759411, 61.392363"
	}),
	new Geo({
		IataCode: "HFT",
		Location: "23.668333, 70.679444"
	}),
	new Geo({
		IataCode: "HAA",
		Location: "22.15, 70.466667"
	}),
	new Geo({
		IataCode: "HAU",
		Location: "5.279167, 59.405556"
	}),
	new Geo({
		IataCode: "HVG",
		Location: "25.983611, 71.009722"
	}),
	new Geo({
		IataCode: "KKN",
		Location: "29.893333, 69.722778"
	}),
	new Geo({
		IataCode: "KSU",
		Location: "7.844444, 63.114722"
	}),
	new Geo({
		IataCode: "KRS",
		Location: "8.079071, 58.199661"
	}),
	new Geo({
		IataCode: "LKL",
		Location: "24.973611, 70.067778"
	}),
	new Geo({
		IataCode: "LKN",
		Location: "13.608889, 68.153611"
	}),
	new Geo({
		IataCode: "LYR",
		Location: "15.465556, 78.246111"
	}),
	new Geo({
		IataCode: "MEH",
		Location: "27.833333, 71.033333"
	}),
	new Geo({
		IataCode: "MQN",
		Location: "14.3, 66.366667"
	}),
	new Geo({
		IataCode: "MOL",
		Location: "7.271111, 62.748611"
	}),
	new Geo({
		IataCode: "MJF",
		Location: "13.214914, 65.783997"
	}),
	new Geo({
		IataCode: "OSY",
		Location: "11.6, 64.466667"
	}),
	new Geo({
		IataCode: "NTB",
		Location: "9.283333, 59.583333"
	}),
	new Geo({
		IataCode: "OLA",
		Location: "9.616667, 63.7"
	}),
	new Geo({
		IataCode: "HOV",
		Location: "6.15, 62.183333"
	}),
	new Geo({
		IataCode: "OSL",
		Location: "11.083333, 60.2"
	}),
	new Geo({
		IataCode: "RYG",
		Location: "10.7856, 59.3789"
	}),
	new Geo({
		IataCode: "TRF",
		Location: "10.266667, 59.183333"
	}),
	new Geo({
		IataCode: "RVK",
		Location: "11.145629, 64.837262"
	}),
	new Geo({
		IataCode: "RRS",
		Location: "11.345556, 62.579167"
	}),
	new Geo({
		IataCode: "RET",
		Location: "12.103333, 67.527778"
	}),
	new Geo({
		IataCode: "SDN",
		Location: "6.108913, 61.830146"
	}),
	new Geo({
		IataCode: "SSJ",
		Location: "12.471389, 65.958333"
	}),
	new Geo({
		IataCode: "SOG",
		Location: "7.136944, 61.157778"
	}),
	new Geo({
		IataCode: "SOJ",
		Location: "20.933333, 69.783333"
	}),
	new Geo({
		IataCode: "SVG",
		Location: "5.634722, 58.879722"
	}),
	new Geo({
		IataCode: "SKN",
		Location: "15.027222, 68.581111"
	}),
	new Geo({
		IataCode: "SRP",
		Location: "5.34085, 59.791925"
	}),
	new Geo({
		IataCode: "SVJ",
		Location: "14.672222, 68.241667"
	}),
	new Geo({
		IataCode: "TOS",
		Location: "18.921667, 69.681389"
	}),
	new Geo({
		IataCode: "TRD",
		Location: "10.933333, 63.45"
	}),
	new Geo({
		IataCode: "VDS",
		Location: "29.845278, 70.065"
	}),
	new Geo({
		IataCode: "VRY",
		Location: "12.683333, 67.666667"
	}),
	new Geo({
		IataCode: "VAW",
		Location: "31.045556, 70.354722"
	}),
	new Geo({
		IataCode: "BZG",
		Location: "17.978611, 53.096667"
	}),
	new Geo({
		IataCode: "LUZ",
		Location: "22.690278, 51.231944"
	}),
	new Geo({
		IataCode: "GDN",
		Location: "18.470078, 54.376558"
	}),
	new Geo({
		IataCode: "KTW",
		Location: "19.080591, 50.473621"
	}),
	new Geo({
		IataCode: "KRK",
		Location: "19.784836, 50.077731"
	}),
	new Geo({
		IataCode: "LCJ",
		Location: "19.398333, 51.721944"
	}),
	new Geo({
		IataCode: "POZ",
		Location: "16.826325, 52.421031"
	}),
	new Geo({
		IataCode: "RDO",
		Location: "21.213611, 51.389167"
	}),
	new Geo({
		IataCode: "RZE",
		Location: "22.026901, 50.113533"
	}),
	new Geo({
		IataCode: "SZZ",
		Location: "14.9, 53.583333"
	}),
	new Geo({
		IataCode: "SZY",
		Location: "20.937778, 53.481944"
	}),
	new Geo({
		IataCode: "WAW",
		Location: "20.966667, 52.166667"
	}),
	new Geo({
		IataCode: "WMI",
		Location: "20.657294, 52.460298"
	}),
	new Geo({
		IataCode: "WRO",
		Location: "16.883333, 51.1"
	}),
	new Geo({
		IataCode: "IEG",
		Location: "15.798556, 52.138517"
	}),
	new Geo({
		IataCode: "BGC",
		Location: "-6.706477, 41.857799"
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
		Location: "-7.970833, 37.014444"
	}),
	new Geo({
		IataCode: "FNC",
		Location: "-16.778056, 32.694167"
	}),
	new Geo({
		IataCode: "GRW",
		Location: "-28.029847, 39.092169"
	}),
	new Geo({
		IataCode: "HOR",
		Location: "-28.717222, 38.52"
	}),
	new Geo({
		IataCode: "LIS",
		Location: "-9.133333, 38.781944"
	}),
	new Geo({
		IataCode: "PIX",
		Location: "-28.441333, 38.554333"
	}),
	new Geo({
		IataCode: "PDL",
		Location: "-25.681944, 37.747222"
	}),
	new Geo({
		IataCode: "OPO",
		Location: "-8.679714, 41.243611"
	}),
	new Geo({
		IataCode: "PRM",
		Location: "-8.533333, 37.133333"
	}),
	new Geo({
		IataCode: "PXO",
		Location: "-16.349373, 33.067521"
	}),
	new Geo({
		IataCode: "SJZ",
		Location: "-28.175817, 38.6655"
	}),
	new Geo({
		IataCode: "FLW",
		Location: "-31.15, 39.466667"
	}),
	new Geo({
		IataCode: "SMA",
		Location: "-25.170639, 36.97139"
	}),
	new Geo({
		IataCode: "TER",
		Location: "-27.094167, 38.756667"
	}),
	new Geo({
		IataCode: "VRL",
		Location: "-7.720835, 41.274629"
	}),
	new Geo({
		IataCode: "VSE",
		Location: "-7.916667, 40.65"
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
		IataCode: "OTP",
		Location: "26.1, 44.566667"
	}),
	new Geo({
		IataCode: "CLJ",
		Location: "23.683333, 46.783333"
	}),
	new Geo({
		IataCode: "CND",
		Location: "28.483333, 44.35"
	}),
	new Geo({
		IataCode: "CRA",
		Location: "23.886389, 44.318889"
	}),
	new Geo({
		IataCode: "IAS",
		Location: "27.6, 47.183333"
	}),
	new Geo({
		IataCode: "OMR",
		Location: "21.903056, 47.0275"
	}),
	new Geo({
		IataCode: "SUJ",
		Location: "22.883333, 47.7"
	}),
	new Geo({
		IataCode: "SBZ",
		Location: "24.083333, 45.783333"
	}),
	new Geo({
		IataCode: "SCV",
		Location: "26.356111, 47.689444"
	}),
	new Geo({
		IataCode: "TSR",
		Location: "21.333333, 45.816667"
	}),
	new Geo({
		IataCode: "TGM",
		Location: "24.412525, 46.467714"
	}),
	new Geo({
		IataCode: "BEG",
		Location: "20.312222, 44.819167"
	}),
	new Geo({
		IataCode: "INI",
		Location: "21.851667, 43.333889"
	}),
	new Geo({
		IataCode: "ABA",
		Location: "91.5, 53.716667"
	}),
	new Geo({
		IataCode: "AER",
		Location: "39.9333, 43.45"
	}),
	new Geo({
		IataCode: "AEM",
		Location: "137.678333, 45.841667"
	}),
	new Geo({
		IataCode: "ADH",
		Location: "125.4, 58.6"
	}),
	new Geo({
		IataCode: "DYR",
		Location: "177.75, 64.733333"
	}),
	new Geo({
		IataCode: "AAQ",
		Location: "37.347272, 45.002097"
	}),
	new Geo({
		IataCode: "ARH",
		Location: "40.716667, 64.600281"
	}),
	new Geo({
		IataCode: "ASF",
		Location: "48.006278, 46.283333"
	}),
	new Geo({
		IataCode: "BAX",
		Location: "83.543472, 53.364075"
	}),
	new Geo({
		IataCode: "EGO",
		Location: "36.5901, 50.6438"
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
		Location: "127.4, 50.416667"
	}),
	new Geo({
		IataCode: "ODO",
		Location: "114.235239, 57.862014"
	}),
	new Geo({
		IataCode: "BQG",
		Location: "140.4604, 52.3753"
	}),
	new Geo({
		IataCode: "BTK",
		Location: "101.698331, 56.370556"
	}),
	new Geo({
		IataCode: "BZK",
		Location: "34.333333, 53.266667"
	}),
	new Geo({
		IataCode: "UUA",
		Location: "52.816667, 54.616667"
	}),
	new Geo({
		IataCode: "CYX",
		Location: "161.35, 68.75"
	}),
	new Geo({
		IataCode: "CSY",
		Location: "47.3473, 56.0903"
	}),
	new Geo({
		IataCode: "CEK",
		Location: "61.5, 55.3"
	}),
	new Geo({
		IataCode: "CEE",
		Location: "38.017502, 59.274828"
	}),
	new Geo({
		IataCode: "HTA",
		Location: "113.3, 52.033333"
	}),
	new Geo({
		IataCode: "CKH",
		Location: "147.883333, 70.633333"
	}),
	new Geo({
		IataCode: "CSH",
		Location: "35.7333, 65.03"
	}),
	new Geo({
		IataCode: "DEE",
		Location: "145.682999, 43.958401"
	}),
	new Geo({
		IataCode: "DHG",
		Location: "135.491193, 44.559059"
	}),
	new Geo({
		IataCode: "DKS",
		Location: "80.366668, 73.516667"
	}),
	new Geo({
		IataCode: "DLR",
		Location: "133.731373, 45.877972"
	}),
	new Geo({
		IataCode: "DPT",
		Location: "139.901944, 69.3925"
	}),
	new Geo({
		IataCode: "EDN",
		Location: "138.640827, 47.18083"
	}),
	new Geo({
		IataCode: "SVX",
		Location: "60.802728, 56.743108"
	}),
	new Geo({
		IataCode: "ESL",
		Location: "44.333333, 46.366667"
	}),
	new Geo({
		IataCode: "ETL",
		Location: "138.318333, 46.541111"
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
		Location: "38.016667, 44.566667"
	}),
	new Geo({
		IataCode: "GRV",
		Location: "45.788784, 43.298385"
	}),
	new Geo({
		IataCode: "HTG",
		Location: "102.500001, 71.966667"
	}),
	new Geo({
		IataCode: "HMA",
		Location: "69.086667, 61.028333"
	}),
	new Geo({
		IataCode: "IAA",
		Location: "86.633333, 67.433333"
	}),
	new Geo({
		IataCode: "INA",
		Location: "60.110664, 66.054901"
	}),
	new Geo({
		IataCode: "IKT",
		Location: "104.416667, 52.266667"
	}),
	new Geo({
		IataCode: "IRM",
		Location: "64.45, 63.2"
	}),
	new Geo({
		IataCode: "ITU",
		Location: "147.955833, 45.256389"
	}),
	new Geo({
		IataCode: "IWA",
		Location: "40.933333, 56.941667"
	}),
	new Geo({
		IataCode: "IJK",
		Location: "53.466667, 56.833333"
	}),
	new Geo({
		IataCode: "JOK",
		Location: "47.895158, 56.705069"
	}),
	new Geo({
		IataCode: "KGD",
		Location: "20.592633, 54.89005"
	}),
	new Geo({
		IataCode: "KLF",
		Location: "36.266667, 54.5"
	}),
	new Geo({
		IataCode: "KZN",
		Location: "49.278728, 55.606186"
	}),
	new Geo({
		IataCode: "KDY",
		Location: "136.842222, 62.786111"
	}),
	new Geo({
		IataCode: "KEJ",
		Location: "86.107208, 55.270094"
	}),
	new Geo({
		IataCode: "KGP",
		Location: "74.533611, 62.195833"
	}),
	new Geo({
		IataCode: "KHV",
		Location: "135.183333, 48.516667"
	}),
	new Geo({
		IataCode: "KCK",
		Location: "108.0608, 57.772779"
	}),
	new Geo({
		IataCode: "KVK",
		Location: "33.583333, 67.583333"
	}),
	new Geo({
		IataCode: "KVX",
		Location: "49.35, 58.5"
	}),
	new Geo({
		IataCode: "KXK",
		Location: "136.95, 50.4"
	}),
	new Geo({
		IataCode: "KSZ",
		Location: "46.7, 61.233333"
	}),
	new Geo({
		IataCode: "KPW",
		Location: "166.138889, 67.846944"
	}),
	new Geo({
		IataCode: "KJA",
		Location: "92.493278, 56.172947"
	}),
	new Geo({
		IataCode: "KRR",
		Location: "38.916667, 45.066667"
	}),
	new Geo({
		IataCode: "KRO",
		Location: "65.3, 55.433333"
	}),
	new Geo({
		IataCode: "URS",
		Location: "36.266667, 51.75"
	}),
	new Geo({
		IataCode: "KVR",
		Location: "135.0289, 44.2725"
	}),
	new Geo({
		IataCode: "KYZ",
		Location: "94.466667, 51.7"
	}),
	new Geo({
		IataCode: "LPK",
		Location: "39.537907, 52.703227"
	}),
	new Geo({
		IataCode: "GDX",
		Location: "150.716667, 59.916667"
	}),
	new Geo({
		IataCode: "MQF",
		Location: "58.755661, 53.393131"
	}),
	new Geo({
		IataCode: "MCX",
		Location: "47.652294, 42.816822"
	}),
	new Geo({
		IataCode: "MRV",
		Location: "43.1, 44.216667"
	}),
	new Geo({
		IataCode: "MJZ",
		Location: "114.033334, 62.533333"
	}),
	new Geo({
		IataCode: "DME",
		Location: "37.8833, 55.4"
	}),
	new Geo({
		IataCode: "SVO",
		Location: "37.414722, 55.972778"
	}),
	new Geo({
		IataCode: "VKO",
		Location: "37.266667, 55.583333"
	}),
	new Geo({
		IataCode: "ZIA",
		Location: "37.906111, 55.408611"
	}),
	new Geo({
		IataCode: "MQJ",
		Location: "143.253056, 66.455833"
	}),
	new Geo({
		IataCode: "MMK",
		Location: "32.753034, 68.781208"
	}),
	new Geo({
		IataCode: "NBC",
		Location: "52.1, 55.566667"
	}),
	new Geo({
		IataCode: "NYM",
		Location: "72.716667, 65.483333"
	}),
	new Geo({
		IataCode: "NAL",
		Location: "43.636583, 43.512856"
	}),
	new Geo({
		IataCode: "NNM",
		Location: "53.15, 67.616667"
	}),
	new Geo({
		IataCode: "IGT",
		Location: "45.013, 43.3193"
	}),
	new Geo({
		IataCode: "NEI",
		Location: "136.590394, 45.08132"
	}),
	new Geo({
		IataCode: "NER",
		Location: "124.6, 56.65"
	}),
	new Geo({
		IataCode: "GOJ",
		Location: "43.784042, 56.230119"
	}),
	new Geo({
		IataCode: "NJC",
		Location: "76.483333, 60.95"
	}),
	new Geo({
		IataCode: "NLI",
		Location: "140.650278, 53.152778"
	}),
	new Geo({
		IataCode: "NGK",
		Location: "143.143428, 51.789874"
	}),
	new Geo({
		IataCode: "NOJ",
		Location: "75.27, 63.183333"
	}),
	new Geo({
		IataCode: "NSK",
		Location: "87.316667, 69.316667"
	}),
	new Geo({
		IataCode: "NOZ",
		Location: "86.87748, 53.809977"
	}),
	new Geo({
		IataCode: "NUX",
		Location: "76.516667, 66.083333"
	}),
	new Geo({
		IataCode: "NYA",
		Location: "65.6025, 62.1017"
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
		Location: "73.3, 54.966667"
	}),
	new Geo({
		IataCode: "ONK",
		Location: "112.479167, 68.515556"
	}),
	new Geo({
		IataCode: "REN",
		Location: "55.45674, 51.79579"
	}),
	new Geo({
		IataCode: "OSW",
		Location: "58.595586, 51.072506"
	}),
	new Geo({
		IataCode: "OVB",
		Location: "82.6167, 55.0167"
	}),
	new Geo({
		IataCode: "OVS",
		Location: "63.6007, 61.3172"
	}),
	new Geo({
		IataCode: "PEX",
		Location: "57.133333, 65.116667"
	}),
	new Geo({
		IataCode: "PEZ",
		Location: "45.023333, 53.11"
	}),
	new Geo({
		IataCode: "PEE",
		Location: "56.021214, 57.914517"
	}),
	new Geo({
		IataCode: "LED",
		Location: "30.3, 59.8"
	}),
	new Geo({
		IataCode: "PES",
		Location: "34.154744, 61.885161"
	}),
	new Geo({
		IataCode: "PKC",
		Location: "158.45367, 53.16789"
	}),
	new Geo({
		IataCode: "PWE",
		Location: "170.6, 69.783333"
	}),
	new Geo({
		IataCode: "PYJ",
		Location: "112.05, 66.416667"
	}),
	new Geo({
		IataCode: "RGK",
		Location: "85.8333, 51.9667"
	}),
	new Geo({
		IataCode: "ROV",
		Location: "39.925774, 47.489935"
	}),
	new Geo({
		IataCode: "RZH",
		Location: "133.903887, 42.92094"
	}),
	new Geo({
		IataCode: "SLY",
		Location: "66.6, 66.583333"
	}),
	new Geo({
		IataCode: "KUF",
		Location: "50.15, 53.5"
	}),
	new Geo({
		IataCode: "RTW",
		Location: "46.033329, 51.562115"
	}),
	new Geo({
		IataCode: "SKX",
		Location: "45.166667, 54.166667"
	}),
	new Geo({
		IataCode: "SBT",
		Location: "72.052222, 71.219167"
	}),
	new Geo({
		IataCode: "SEK",
		Location: "153.735, 67.479722"
	}),
	new Geo({
		IataCode: "EKS",
		Location: "142.083462, 49.190486"
	}),
	new Geo({
		IataCode: "STW",
		Location: "42.112778, 45.109165"
	}),
	new Geo({
		IataCode: "SUK",
		Location: "130.390833, 67.791944"
	}),
	new Geo({
		IataCode: "SGC",
		Location: "73.401842, 61.343694"
	}),
	new Geo({
		IataCode: "SUY",
		Location: "117.636111, 62.184722"
	}),
	new Geo({
		IataCode: "SWT",
		Location: "77.651575, 60.715994"
	}),
	new Geo({
		IataCode: "SWV",
		Location: "159.231111, 61.924444"
	}),
	new Geo({
		IataCode: "SCW",
		Location: "50.84505, 61.64705"
	}),
	new Geo({
		IataCode: "SYS",
		Location: "114.082222, 71.928889"
	}),
	new Geo({
		IataCode: "TBW",
		Location: "41.48333, 52.805"
	}),
	new Geo({
		IataCode: "TGP",
		Location: "89.973333, 61.59"
	}),
	new Geo({
		IataCode: "THX",
		Location: "87.93, 65.8"
	}),
	new Geo({
		IataCode: "IKS",
		Location: "128.9, 71.7"
	}),
	new Geo({
		IataCode: "TLK",
		Location: "111.040119, 59.867482"
	}),
	new Geo({
		IataCode: "TLY",
		Location: "136.2917, 44.8147"
	}),
	new Geo({
		IataCode: "TOF",
		Location: "85.211666, 56.383333"
	}),
	new Geo({
		IataCode: "TQL",
		Location: "77.797356, 64.92134"
	}),
	new Geo({
		IataCode: "TJM",
		Location: "65.3243, 57.189567"
	}),
	new Geo({
		IataCode: "OLZ",
		Location: "120.468611, 60.398889"
	}),
	new Geo({
		IataCode: "UFA",
		Location: "55.86462, 54.558128"
	}),
	new Geo({
		IataCode: "UKG",
		Location: "135.646667, 70.011111"
	}),
	new Geo({
		IataCode: "UCT",
		Location: "53.8, 63.566667"
	}),
	new Geo({
		IataCode: "UUD",
		Location: "107.437644, 51.807764"
	}),
	new Geo({
		IataCode: "ULK",
		Location: "114.825833, 60.720556"
	}),
	new Geo({
		IataCode: "ULV",
		Location: "48.22666, 54.268333"
	}),
	new Geo({
		IataCode: "ULY",
		Location: "48.802656, 54.401017"
	}),
	new Geo({
		IataCode: "UMS",
		Location: "134.437778, 60.358056"
	}),
	new Geo({
		IataCode: "URJ",
		Location: "64.833333, 60.116667"
	}),
	new Geo({
		IataCode: "USK",
		Location: "57.366829, 66.005177"
	}),
	new Geo({
		IataCode: "USR",
		Location: "143.110833, 64.549444"
	}),
	new Geo({
		IataCode: "UKX",
		Location: "105.733333, 56.85"
	}),
	new Geo({
		IataCode: "VUS",
		Location: "46.316667, 60.766667"
	}),
	new Geo({
		IataCode: "UTS",
		Location: "52.198889, 65.433333"
	}),
	new Geo({
		IataCode: "VHV",
		Location: "120.251894, 63.457634"
	}),
	new Geo({
		IataCode: "VVO",
		Location: "132.14802, 43.39895"
	}),
	new Geo({
		IataCode: "OGZ",
		Location: "44.6, 43.2"
	}),
	new Geo({
		IataCode: "VOG",
		Location: "44.345544, 48.782528"
	}),
	new Geo({
		IataCode: "VKT",
		Location: "63.983333, 67.483333"
	}),
	new Geo({
		IataCode: "VOZ",
		Location: "39.229589, 51.814211"
	}),
	new Geo({
		IataCode: "VYI",
		Location: "121.692213, 63.754825"
	}),
	new Geo({
		IataCode: "GYG",
		Location: "129.559444, 62.107222"
	}),
	new Geo({
		IataCode: "YKS",
		Location: "129.77067, 62.09325"
	}),
	new Geo({
		IataCode: "IAR",
		Location: "40.1574, 57.5607"
	}),
	new Geo({
		IataCode: "ERG",
		Location: "108.03, 61.275"
	}),
	new Geo({
		IataCode: "UUS",
		Location: "142.717531, 46.888672"
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
		Location: "19.285556, 65.591389"
	}),
	new Geo({
		IataCode: "BLE",
		Location: "15.518056, 60.423333"
	}),
	new Geo({
		IataCode: "GEV",
		Location: "20.816667, 67.134444"
	}),
	new Geo({
		IataCode: "GOT",
		Location: "12.283333, 57.666667"
	}),
	new Geo({
		IataCode: "HFS",
		Location: "13.569167, 60.0175"
	}),
	new Geo({
		IataCode: "HAD",
		Location: "12.8194, 56.6833"
	}),
	new Geo({
		IataCode: "AGH",
		Location: "12.8625, 56.293056"
	}),
	new Geo({
		IataCode: "HMV",
		Location: "15.082778, 65.806111"
	}),
	new Geo({
		IataCode: "JKG",
		Location: "14.071944, 57.758611"
	}),
	new Geo({
		IataCode: "KLR",
		Location: "16.287222, 56.685"
	}),
	new Geo({
		IataCode: "KSD",
		Location: "13.469444, 59.361667"
	}),
	new Geo({
		IataCode: "KRN",
		Location: "20.345833, 67.822222"
	}),
	new Geo({
		IataCode: "KRF",
		Location: "17.772778, 63.049444"
	}),
	new Geo({
		IataCode: "KID",
		Location: "14.088889, 55.919444"
	}),
	new Geo({
		IataCode: "LPI",
		Location: "15.6805, 58.4062"
	}),
	new Geo({
		IataCode: "LLA",
		Location: "22.1278, 65.5447"
	}),
	new Geo({
		IataCode: "LYC",
		Location: "18.716667, 64.533333"
	}),
	new Geo({
		IataCode: "MMX",
		Location: "13.373108, 55.538734"
	}),
	new Geo({
		IataCode: "MXX",
		Location: "14.511383, 60.957908"
	}),
	new Geo({
		IataCode: "NRK",
		Location: "16.25, 58.583333"
	}),
	new Geo({
		IataCode: "ORB",
		Location: "15.037956, 59.223733"
	}),
	new Geo({
		IataCode: "OER",
		Location: "18.991667, 63.408333"
	}),
	new Geo({
		IataCode: "OSK",
		Location: "16.497972, 57.350453"
	}),
	new Geo({
		IataCode: "OSD",
		Location: "14.489937, 63.196496"
	}),
	new Geo({
		IataCode: "PJA",
		Location: "23.075, 67.246667"
	}),
	new Geo({
		IataCode: "RNB",
		Location: "15.261111, 56.258333"
	}),
	new Geo({
		IataCode: "SFT",
		Location: "21.078333, 64.625"
	}),
	new Geo({
		IataCode: "ARN",
		Location: "17.933889, 59.661944"
	}),
	new Geo({
		IataCode: "BMA",
		Location: "17.946389, 59.352778"
	}),
	new Geo({
		IataCode: "NYO",
		Location: "16.912189, 58.788636"
	}),
	new Geo({
		IataCode: "VST",
		Location: "16.630556, 59.589167"
	}),
	new Geo({
		IataCode: "SDL",
		Location: "17.45, 62.533333"
	}),
	new Geo({
		IataCode: "EVG",
		Location: "14.42295, 62.047811"
	}),
	new Geo({
		IataCode: "TYF",
		Location: "13, 60.133333"
	}),
	new Geo({
		IataCode: "THN",
		Location: "12.342453, 58.319587"
	}),
	new Geo({
		IataCode: "UME",
		Location: "20.284444, 63.793611"
	}),
	new Geo({
		IataCode: "VXO",
		Location: "14.733333, 56.933333"
	}),
	new Geo({
		IataCode: "VHM",
		Location: "16.65, 64.616667"
	}),
	new Geo({
		IataCode: "VBY",
		Location: "18.349444, 57.663056"
	}),
	new Geo({
		IataCode: "XYI",
		Location: "16.58889, 59.05722"
	}),
	new Geo({
		IataCode: "LJU",
		Location: "14.460833, 46.224722"
	}),
	new Geo({
		IataCode: "MBX",
		Location: "15.686, 46.479"
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
		Location: "36.783333, 46.733333"
	}),
	new Geo({
		IataCode: "CWC",
		Location: "25.966667, 48.266667"
	}),
	new Geo({
		IataCode: "DNK",
		Location: "35.100556, 48.357222"
	}),
	new Geo({
		IataCode: "IFO",
		Location: "24.683333, 48.883333"
	}),
	new Geo({
		IataCode: "KHC",
		Location: "36.45, 45.366667"
	}),
	new Geo({
		IataCode: "HRK",
		Location: "36.283333, 49.933333"
	}),
	new Geo({
		IataCode: "KHE",
		Location: "32.627778, 46.675278"
	}),
	new Geo({
		IataCode: "IEV",
		Location: "30.4508, 50.4019"
	}),
	new Geo({
		IataCode: "KBP",
		Location: "30.9167, 50.35"
	}),
	new Geo({
		IataCode: "KWG",
		Location: "33.216667, 48.05"
	}),
	new Geo({
		IataCode: "LWO",
		Location: "23.956111, 49.8125"
	}),
	new Geo({
		IataCode: "ODS",
		Location: "30.683333, 46.433333"
	}),
	new Geo({
		IataCode: "PLV",
		Location: "34.533333, 49.583333"
	}),
	new Geo({
		IataCode: "VIN",
		Location: "28.483333, 49.233333"
	}),
	new Geo({
		IataCode: "OZH",
		Location: "35.315833, 47.8675"
	}),
	new Geo({
		IataCode: "ABZ",
		Location: "-2.198056, 57.204167"
	}),
	new Geo({
		IataCode: "ACI",
		Location: "-2.215278, 49.706944"
	}),
	new Geo({
		IataCode: "VLY",
		Location: "-4.54, 53.25"
	}),
	new Geo({
		IataCode: "BRR",
		Location: "-7.440278, 57.023333"
	}),
	new Geo({
		IataCode: "BFS",
		Location: "-6.224722, 54.653333"
	}),
	new Geo({
		IataCode: "BHD",
		Location: "-5.883333, 54.616667"
	}),
	new Geo({
		IataCode: "BEB",
		Location: "-7.364722, 57.482222"
	}),
	new Geo({
		IataCode: "BHX",
		Location: "-1.746389, 52.453056"
	}),
	new Geo({
		IataCode: "BLK",
		Location: "-3.036111, 53.771944"
	}),
	new Geo({
		IataCode: "BOH",
		Location: "-1.836944, 50.780556"
	}),
	new Geo({
		IataCode: "BRS",
		Location: "-2.708889, 51.381667"
	}),
	new Geo({
		IataCode: "CAL",
		Location: "-5.686667, 55.436389"
	}),
	new Geo({
		IataCode: "CWL",
		Location: "-3.346667, 51.3975"
	}),
	new Geo({
		IataCode: "IOM",
		Location: "-4.627778, 54.0825"
	}),
	new Geo({
		IataCode: "CBG",
		Location: "0.183333, 52.2"
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
		Location: "-6.2, 56.083333"
	}),
	new Geo({
		IataCode: "LDY",
		Location: "-7.153333, 55.043333"
	}),
	new Geo({
		IataCode: "DSA",
		Location: "-1.003889, 53.475278"
	}),
	new Geo({
		IataCode: "DND",
		Location: "-3.008333, 56.452778"
	}),
	new Geo({
		IataCode: "EDI",
		Location: "-3.3635, 55.9497"
	}),
	new Geo({
		IataCode: "EOI",
		Location: "-2.769842, 59.19123"
	}),
	new Geo({
		IataCode: "EXT",
		Location: "-3.421667, 50.734167"
	}),
	new Geo({
		IataCode: "FIE",
		Location: "-1.666667, 59.5"
	}),
	new Geo({
		IataCode: "FOA",
		Location: "-2.083333, 60.166667"
	}),
	new Geo({
		IataCode: "GLA",
		Location: "-4.433333, 55.866667"
	}),
	new Geo({
		IataCode: "PIK",
		Location: "-4.575556, 55.503056"
	}),
	new Geo({
		IataCode: "GLO",
		Location: "-2.167222, 51.894167"
	}),
	new Geo({
		IataCode: "HUY",
		Location: "-0.35, 53.583333"
	}),
	new Geo({
		IataCode: "INV",
		Location: "-4.048333, 57.5425"
	}),
	new Geo({
		IataCode: "ILY",
		Location: "-6.2542, 55.6819"
	}),
	new Geo({
		IataCode: "JER",
		Location: "-2.216667, 49.211111"
	}),
	new Geo({
		IataCode: "LBA",
		Location: "-1.6547, 53.8653"
	}),
	new Geo({
		IataCode: "LEQ",
		Location: "-5.670556, 50.102778"
	}),
	new Geo({
		IataCode: "LPL",
		Location: "-2.866667, 53.338333"
	}),
	new Geo({
		IataCode: "LCY",
		Location: "0.048512, 51.503753"
	}),
	new Geo({
		IataCode: "LGW",
		Location: "-0.196667, 51.148056"
	}),
	new Geo({
		IataCode: "LHR",
		Location: "-0.452778, 51.471389"
	}),
	new Geo({
		IataCode: "LTN",
		Location: "-0.375705, 51.878704"
	}),
	new Geo({
		IataCode: "SEN",
		Location: "0.7014, 51.5728"
	}),
	new Geo({
		IataCode: "STN",
		Location: "0.233333, 51.883333"
	}),
	new Geo({
		IataCode: "LYX",
		Location: "0.933333, 50.95"
	}),
	new Geo({
		IataCode: "MAN",
		Location: "-2.276667, 53.353333"
	}),
	new Geo({
		IataCode: "MME",
		Location: "-1.416667, 54.516667"
	}),
	new Geo({
		IataCode: "NDY",
		Location: "-2.583333, 59.25"
	}),
	new Geo({
		IataCode: "NCL",
		Location: "-1.686667, 55.037778"
	}),
	new Geo({
		IataCode: "NQY",
		Location: "-4.994722, 50.439444"
	}),
	new Geo({
		IataCode: "NWI",
		Location: "1.283333, 52.683333"
	}),
	new Geo({
		IataCode: "EMA",
		Location: "-1.329444, 52.83"
	}),
	new Geo({
		IataCode: "NQT",
		Location: "-1.079063, 52.921737"
	}),
	new Geo({
		IataCode: "NRL",
		Location: "-2.433333, 59.370278"
	}),
	new Geo({
		IataCode: "OBN",
		Location: "-5.399667, 56.4635"
	}),
	new Geo({
		IataCode: "KOI",
		Location: "-2.966667, 58.958611"
	}),
	new Geo({
		IataCode: "PZE",
		Location: "-5.516111, 50.111944"
	}),
	new Geo({
		IataCode: "PLH",
		Location: "-4.11026, 50.423394"
	}),
	new Geo({
		IataCode: "PPW",
		Location: "-2.900278, 59.351667"
	}),
	new Geo({
		IataCode: "PSV",
		Location: "-1.7, 60.316667"
	}),
	new Geo({
		IataCode: "ISC",
		Location: "-6.294539, 49.914936"
	}),
	new Geo({
		IataCode: "SOU",
		Location: "-1.351944, 50.951667"
	}),
	new Geo({
		IataCode: "SOY",
		Location: "-2.641869, 59.156484"
	}),
	new Geo({
		IataCode: "SYY",
		Location: "-6.329167, 58.216111"
	}),
	new Geo({
		IataCode: "LSI",
		Location: "-1.293056, 59.881111"
	}),
	new Geo({
		IataCode: "LWK",
		Location: "-1.243611, 60.191944"
	}),
	new Geo({
		IataCode: "SWS",
		Location: "-3.95, 51.633333"
	}),
	new Geo({
		IataCode: "TRE",
		Location: "-6.871389, 56.500556"
	}),
	new Geo({
		IataCode: "WIC",
		Location: "-3.086667, 58.456944"
	}),
	new Geo({
		IataCode: "WRY",
		Location: "-2.95, 59.35"
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
		Location: "13.236111, -8.853056"
	}),
	new Geo({
		IataCode: "LUO",
		Location: "19.89521, -11.768554"
	}),
	new Geo({
		IataCode: "MEG",
		Location: "16.333333, -9.533333"
	}),
	new Geo({
		IataCode: "MSZ",
		Location: "12.160833, -15.208611"
	}),
	new Geo({
		IataCode: "NOV",
		Location: "15.757222, -12.805556"
	}),
	new Geo({
		IataCode: "NZA",
		Location: "21.358066, -7.716081"
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
		Location: "16.956667, -12.404167"
	}),
	new Geo({
		IataCode: "SZA",
		Location: "12.3718, -6.14109"
	}),
	new Geo({
		IataCode: "VHC",
		Location: "20.55, -9.75"
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
		Location: "29.318333, -3.323889"
	}),
	new Geo({
		IataCode: "COO",
		Location: "2.385556, 6.354167"
	}),
	new Geo({
		IataCode: "BBK",
		Location: "25.1624, -17.83288"
	}),
	new Geo({
		IataCode: "FRW",
		Location: "27.4825, -21.16"
	}),
	new Geo({
		IataCode: "GBE",
		Location: "25.91821, -24.55522"
	}),
	new Geo({
		IataCode: "MUB",
		Location: "23.430556, -19.970833"
	}),
	new Geo({
		IataCode: "BDV",
		Location: "29.8, -7"
	}),
	new Geo({
		IataCode: "BKY",
		Location: "28.816667, -2.3"
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
		Location: "30.212778, 1.571667"
	}),
	new Geo({
		IataCode: "FBM",
		Location: "27.529678, -11.591369"
	}),
	new Geo({
		IataCode: "FIH",
		Location: "15.433334, -4.383333"
	}),
	new Geo({
		IataCode: "FKI",
		Location: "25.338, 0.48164"
	}),
	new Geo({
		IataCode: "FMI",
		Location: "29.245278, -5.878333"
	}),
	new Geo({
		IataCode: "GMA",
		Location: "19.768611, 3.235"
	}),
	new Geo({
		IataCode: "GOM",
		Location: "29.235, -1.67"
	}),
	new Geo({
		IataCode: "IRP",
		Location: "27.630833, 2.781944"
	}),
	new Geo({
		IataCode: "KGA",
		Location: "22.469167, -5.9"
	}),
	new Geo({
		IataCode: "KND",
		Location: "25.913889, -2.9225"
	}),
	new Geo({
		IataCode: "KWZ",
		Location: "25.506946, -10.766667"
	}),
	new Geo({
		IataCode: "LJA",
		Location: "23.6181, -3.463657"
	}),
	new Geo({
		IataCode: "MDK",
		Location: "18.292222, 0.023333"
	}),
	new Geo({
		IataCode: "MJM",
		Location: "23.633334, -6.15"
	}),
	new Geo({
		IataCode: "BGF",
		Location: "18.520278, 4.396111"
	}),
	new Geo({
		IataCode: "BOZ",
		Location: "16.583333, 6.416667"
	}),
	new Geo({
		IataCode: "BZV",
		Location: "15.254722, -4.251944"
	}),
	new Geo({
		IataCode: "DIS",
		Location: "12.661389, -4.205556"
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
		Location: "-3.926944, 5.256389"
	}),
	new Geo({
		IataCode: "BYK",
		Location: "-5.069167, 7.739444"
	}),
	new Geo({
		IataCode: "HGO",
		Location: "-5.616667, 9.413889"
	}),
	new Geo({
		IataCode: "KEO",
		Location: "-7.570833, 9.49"
	}),
	new Geo({
		IataCode: "MJC",
		Location: "-7.58736, 7.27207"
	}),
	new Geo({
		IataCode: "SPY",
		Location: "-6.626944, 4.730278"
	}),
	new Geo({
		IataCode: "BFX",
		Location: "10.4, 5.483333"
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
		Location: "9.709167, 4.013333"
	}),
	new Geo({
		IataCode: "GOU",
		Location: "13.375556, 9.336111"
	}),
	new Geo({
		IataCode: "MVR",
		Location: "14.256389, 10.452222"
	}),
	new Geo({
		IataCode: "NGE",
		Location: "13.561389, 7.356389"
	}),
	new Geo({
		IataCode: "NSI",
		Location: "11.55327, 3.72256"
	}),
	new Geo({
		IataCode: "YAO",
		Location: "11.523611, 3.833611"
	}),
	new Geo({
		IataCode: "BVC",
		Location: "-22.890508, 16.13489"
	}),
	new Geo({
		IataCode: "MMO",
		Location: "-23.166667, 15.25"
	}),
	new Geo({
		IataCode: "RAI",
		Location: "-23.503056, 14.925278"
	}),
	new Geo({
		IataCode: "SFL",
		Location: "-24.48, 14.885"
	}),
	new Geo({
		IataCode: "SID",
		Location: "-22.951667, 16.745"
	}),
	new Geo({
		IataCode: "SNE",
		Location: "-24.288611, 16.586944"
	}),
	new Geo({
		IataCode: "VXE",
		Location: "-24.966667, 16.85"
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
		Location: "3.217222, 36.693333"
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
		Location: "6.30859, 35.75211"
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
		Location: "6.63, 36.276944"
	}),
	new Geo({
		IataCode: "DJG",
		Location: "9.488889, 24.465278"
	}),
	new Geo({
		IataCode: "EBH",
		Location: "1.091389, 33.720833"
	}),
	new Geo({
		IataCode: "ELG",
		Location: "2.864722, 30.5675"
	}),
	new Geo({
		IataCode: "ELU",
		Location: "6.783333, 33.516667"
	}),
	new Geo({
		IataCode: "GHA",
		Location: "3.800556, 32.382222"
	}),
	new Geo({
		IataCode: "GJL",
		Location: "5.883333, 36.8"
	}),
	new Geo({
		IataCode: "HME",
		Location: "6.142778, 31.673889"
	}),
	new Geo({
		IataCode: "IAM",
		Location: "9.638056, 28.051111"
	}),
	new Geo({
		IataCode: "INZ",
		Location: "2.516667, 27.25"
	}),
	new Geo({
		IataCode: "LOO",
		Location: "2.983333, 33.833333"
	}),
	new Geo({
		IataCode: "OGX",
		Location: "5.4, 31.916667"
	}),
	new Geo({
		IataCode: "ORN",
		Location: "-0.610556, 35.627778"
	}),
	new Geo({
		IataCode: "QSF",
		Location: "5.3311, 36.181"
	}),
	new Geo({
		IataCode: "TEE",
		Location: "8.15, 35.466667"
	}),
	new Geo({
		IataCode: "TGR",
		Location: "6.084722, 33.058333"
	}),
	new Geo({
		IataCode: "TID",
		Location: "1.46315, 35.34114"
	}),
	new Geo({
		IataCode: "TIN",
		Location: "-8.166667, 27.716667"
	}),
	new Geo({
		IataCode: "TLM",
		Location: "-1.45, 35.016667"
	}),
	new Geo({
		IataCode: "TMR",
		Location: "5.459167, 22.814722"
	}),
	new Geo({
		IataCode: "TMX",
		Location: "0.283333, 29.233333"
	}),
	new Geo({
		IataCode: "VVZ",
		Location: "8.62265, 26.72354"
	}),
	new Geo({
		IataCode: "ABS",
		Location: "31.615278, 22.372222"
	}),
	new Geo({
		IataCode: "ALY",
		Location: "29.948889, 31.183903"
	}),
	new Geo({
		IataCode: "HBE",
		Location: "29.683333, 30.9"
	}),
	new Geo({
		IataCode: "ATZ",
		Location: "31, 27.033333"
	}),
	new Geo({
		IataCode: "ASW",
		Location: "32.821667, 23.965"
	}),
	new Geo({
		IataCode: "CAI",
		Location: "31.406944, 30.1375"
	}),
	new Geo({
		IataCode: "HRG",
		Location: "33.801069, 27.178759"
	}),
	new Geo({
		IataCode: "LXR",
		Location: "32.7075, 25.673056"
	}),
	new Geo({
		IataCode: "RMF",
		Location: "34.583711, 25.557111"
	}),
	new Geo({
		IataCode: "SSH",
		Location: "34.395, 27.977222"
	}),
	new Geo({
		IataCode: "HMB",
		Location: "31.737167, 26.338877"
	}),
	new Geo({
		IataCode: "TCP",
		Location: "34.778056, 29.587778"
	}),
	new Geo({
		IataCode: "ASA",
		Location: "42.638333, 13.07"
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
		Location: "38.798056, 8.977778"
	}),
	new Geo({
		IataCode: "AMH",
		Location: "37.576944, 6.036111"
	}),
	new Geo({
		IataCode: "ASO",
		Location: "34.536667, 10.047222"
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
		Location: "36.55, 5.783333"
	}),
	new Geo({
		IataCode: "BJR",
		Location: "37.384722, 11.590278"
	}),
	new Geo({
		IataCode: "DEM",
		Location: "34.883333, 8.571111"
	}),
	new Geo({
		IataCode: "DIR",
		Location: "41.850833, 9.622222"
	}),
	new Geo({
		IataCode: "DSE",
		Location: "39.715278, 11.075"
	}),
	new Geo({
		IataCode: "GDE",
		Location: "43.628333, 5.902222"
	}),
	new Geo({
		IataCode: "GDQ",
		Location: "37.445556, 12.514444"
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
		Location: "39.066667, 12.016667"
	}),
	new Geo({
		IataCode: "MQX",
		Location: "39.526389, 13.468333"
	}),
	new Geo({
		IataCode: "SHC",
		Location: "38.2725, 14.0781"
	}),
	new Geo({
		IataCode: "SZE",
		Location: "41.083333, 11.5"
	}),
	new Geo({
		IataCode: "LBV",
		Location: "9.415278, 0.459167"
	}),
	new Geo({
		IataCode: "MVB",
		Location: "13.433333, -1.65"
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
		Location: "-1.775, 4.891667"
	}),
	new Geo({
		IataCode: "TML",
		Location: "-0.863333, 9.557222"
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
		Location: "9.802222, 1.906667"
	}),
	new Geo({
		IataCode: "GEM",
		Location: "11.023889, 1.69"
	}),
	new Geo({
		IataCode: "NBN",
		Location: "5.621944, -1.410277"
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
		Location: "37.249276, -2.645286"
	}),
	new Geo({
		IataCode: "EDL",
		Location: "35.238889, 0.404444"
	}),
	new Geo({
		IataCode: "GAS",
		Location: "39.65, -0.45"
	}),
	new Geo({
		IataCode: "GGM",
		Location: "34.766965, 0.288068"
	}),
	new Geo({
		IataCode: "JJM",
		Location: "38.1951, 0.1651"
	}),
	new Geo({
		IataCode: "KIS",
		Location: "34.728611, -0.085556"
	}),
	new Geo({
		IataCode: "KTL",
		Location: "35, 1"
	}),
	new Geo({
		IataCode: "LAU",
		Location: "40.911667, -2.25"
	}),
	new Geo({
		IataCode: "LBN",
		Location: "36.083333, 0.666667"
	}),
	new Geo({
		IataCode: "LOK",
		Location: "35.6, 3.15"
	}),
	new Geo({
		IataCode: "LOY",
		Location: "36.716667, 2.75"
	}),
	new Geo({
		IataCode: "MBA",
		Location: "39.593056, -4.031389"
	}),
	new Geo({
		IataCode: "ANA",
		Location: "34.953816, -1.271505"
	}),
	new Geo({
		IataCode: "KEU",
		Location: "35.251667, -1.585832"
	}),
	new Geo({
		IataCode: "KTJ",
		Location: "-2.101611, 11.105417"
	}),
	new Geo({
		IataCode: "MRE",
		Location: "35.00974, -1.40534"
	}),
	new Geo({
		IataCode: "OLX",
		Location: "35.11, -1.40861"
	}),
	new Geo({
		IataCode: "MYD",
		Location: "40.100556, -3.226111"
	}),
	new Geo({
		IataCode: "NBO",
		Location: "36.930833, -1.316667"
	}),
	new Geo({
		IataCode: "WIL",
		Location: "36.816667, -1.316667"
	}),
	new Geo({
		IataCode: "NYK",
		Location: "37.066667, 0.016667"
	}),
	new Geo({
		IataCode: "UAS",
		Location: "37.55, 0.466667"
	}),
	new Geo({
		IataCode: "UKA",
		Location: "39.566667, -4.3"
	}),
	new Geo({
		IataCode: "VPG",
		Location: "39.805205, -3.842631"
	}),
	new Geo({
		IataCode: "WJR",
		Location: "40.09161, 1.73324"
	}),
	new Geo({
		IataCode: "AJN",
		Location: "44.429722, -12.126389"
	}),
	new Geo({
		IataCode: "NWA",
		Location: "43.766667, -12.283333"
	}),
	new Geo({
		IataCode: "HAH",
		Location: "43.266667, -11.533333"
	}),
	new Geo({
		IataCode: "MLW",
		Location: "-10.758333, 6.289444"
	}),
	new Geo({
		IataCode: "ROB",
		Location: "-10.358889, 6.239722"
	}),
	new Geo({
		IataCode: "MSU",
		Location: "27.558732, -29.455854"
	}),
	new Geo({
		IataCode: "AKF",
		Location: "23.333333, 24.2"
	}),
	new Geo({
		IataCode: "BEN",
		Location: "20.266667, 32.1"
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
		Location: "15.066667, 32.4"
	}),
	new Geo({
		IataCode: "SEB",
		Location: "14.4625, 27.016667"
	}),
	new Geo({
		IataCode: "TIP",
		Location: "13.158889, 32.663611"
	}),
	new Geo({
		IataCode: "TOB",
		Location: "23.917222, 31.854167"
	}),
	new Geo({
		IataCode: "ZIS",
		Location: "12.248611, 31.771667"
	}),
	new Geo({
		IataCode: "AGA",
		Location: "-9.412708, 30.325619"
	}),
	new Geo({
		IataCode: "AHU",
		Location: "-3.836944, 35.179722"
	}),
	new Geo({
		IataCode: "BEM",
		Location: "-6.323936, 32.397247"
	}),
	new Geo({
		IataCode: "CMN",
		Location: "-7.586667, 33.366667"
	}),
	new Geo({
		IataCode: "VIL",
		Location: "-15.935, 23.713333"
	}),
	new Geo({
		IataCode: "ERH",
		Location: "-4.4, 31.95"
	}),
	new Geo({
		IataCode: "ESU",
		Location: "-9.681667, 31.3975"
	}),
	new Geo({
		IataCode: "FEZ",
		Location: "-4.966667, 33.933333"
	}),
	new Geo({
		IataCode: "GLN",
		Location: "-10.066667, 29.016667"
	}),
	new Geo({
		IataCode: "EUN",
		Location: "-13.216667, 27.166667"
	}),
	new Geo({
		IataCode: "RAK",
		Location: "-8.038333, 31.608333"
	}),
	new Geo({
		IataCode: "NDR",
		Location: "-3.028333, 34.988889"
	}),
	new Geo({
		IataCode: "OZZ",
		Location: "-6.916667, 30.916667"
	}),
	new Geo({
		IataCode: "OUD",
		Location: "-1.933333, 34.783333"
	}),
	new Geo({
		IataCode: "RBA",
		Location: "-6.756944, 34.05"
	}),
	new Geo({
		IataCode: "TNG",
		Location: "-5.916667, 35.716667"
	}),
	new Geo({
		IataCode: "TTA",
		Location: "-11.16135, 28.44819"
	}),
	new Geo({
		IataCode: "TTU",
		Location: "-5.316667, 35.583333"
	}),
	new Geo({
		IataCode: "OZG",
		Location: "-5.852456, 30.267143"
	}),
	new Geo({
		IataCode: "ANM",
		Location: "50.316667, -15"
	}),
	new Geo({
		IataCode: "DIE",
		Location: "49.2925, -12.346111"
	}),
	new Geo({
		IataCode: "FTU",
		Location: "46.955556, -25.038056"
	}),
	new Geo({
		IataCode: "MJN",
		Location: "46.353056, -15.665833"
	}),
	new Geo({
		IataCode: "MOQ",
		Location: "44.318333, -20.283611"
	}),
	new Geo({
		IataCode: "NOS",
		Location: "48.313889, -13.311111"
	}),
	new Geo({
		IataCode: "SMS",
		Location: "49.816667, -17.083333"
	}),
	new Geo({
		IataCode: "SVB",
		Location: "50.175, -14.276944"
	}),
	new Geo({
		IataCode: "TLE",
		Location: "43.724167, -23.389722"
	}),
	new Geo({
		IataCode: "TMM",
		Location: "49.392222, -18.11"
	}),
	new Geo({
		IataCode: "TNR",
		Location: "47.483333, -18.8"
	}),
	new Geo({
		IataCode: "WMN",
		Location: "49.683333, -15.433333"
	}),
	new Geo({
		IataCode: "WMR",
		Location: "49.770556, -16.161944"
	}),
	new Geo({
		IataCode: "BKO",
		Location: "-7.933333, 12.533611"
	}),
	new Geo({
		IataCode: "NDB",
		Location: "-17.028333, 20.934167"
	}),
	new Geo({
		IataCode: "NKC",
		Location: "-15.951944, 18.091944"
	}),
	new Geo({
		IataCode: "OUZ",
		Location: "-12.35, 22.733333"
	}),
	new Geo({
		IataCode: "MRU",
		Location: "57.676389, -20.4275"
	}),
	new Geo({
		IataCode: "RRG",
		Location: "63.35, -19.75"
	}),
	new Geo({
		IataCode: "BLZ",
		Location: "34.970833, -15.674722"
	}),
	new Geo({
		IataCode: "CEH",
		Location: "33.8, -10.55"
	}),
	new Geo({
		IataCode: "CMK",
		Location: "35.1325, -14.3069"
	}),
	new Geo({
		IataCode: "LIX",
		Location: "34.733333, -12.083333"
	}),
	new Geo({
		IataCode: "LLW",
		Location: "33.783333, -13.783333"
	}),
	new Geo({
		IataCode: "MYZ",
		Location: "34.91667, -14.08333"
	}),
	new Geo({
		IataCode: "ZZU",
		Location: "34.012778, -11.442778"
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
		Location: "35.408333, -23.874444"
	}),
	new Geo({
		IataCode: "LFB",
		Location: "40.666667, -15.033333"
	}),
	new Geo({
		IataCode: "MNC",
		Location: "40.708611, -14.48"
	}),
	new Geo({
		IataCode: "MPM",
		Location: "32.566667, -25.916667"
	}),
	new Geo({
		IataCode: "POL",
		Location: "40.5225, -12.988333"
	}),
	new Geo({
		IataCode: "TET",
		Location: "33.638889, -16.103333"
	}),
	new Geo({
		IataCode: "UEL",
		Location: "36.865556, -17.847222"
	}),
	new Geo({
		IataCode: "VNX",
		Location: "35.283333, -22.016667"
	}),
	new Geo({
		IataCode: "VPY",
		Location: "33.42865, -19.150195"
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
		Location: "24.177303, -17.633716"
	}),
	new Geo({
		IataCode: "NDU",
		Location: "19.716667, -17.95"
	}),
	new Geo({
		IataCode: "OMD",
		Location: "16.45, -28.583333"
	}),
	new Geo({
		IataCode: "OND",
		Location: "15.9525, -17.87833"
	}),
	new Geo({
		IataCode: "ERS",
		Location: "17.083333, -22.616667"
	}),
	new Geo({
		IataCode: "WDH",
		Location: "17.466667, -22.483333"
	}),
	new Geo({
		IataCode: "WVB",
		Location: "14.517222, -22.978611"
	}),
	new Geo({
		IataCode: "AJY",
		Location: "7.993056, 16.964167"
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
		Location: "7.266667, 9"
	}),
	new Geo({
		IataCode: "AKR",
		Location: "5.30101, 7.24674"
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
		Location: "5.601667, 6.323889"
	}),
	new Geo({
		IataCode: "CBQ",
		Location: "8.342778, 4.963611"
	}),
	new Geo({
		IataCode: "ENU",
		Location: "7.566111, 6.475556"
	}),
	new Geo({
		IataCode: "GMO",
		Location: "11.166667, 10.283333"
	}),
	new Geo({
		IataCode: "IBA",
		Location: "3.911111, 7.431944"
	}),
	new Geo({
		IataCode: "ILR",
		Location: "4.533333, 8.5"
	}),
	new Geo({
		IataCode: "JOS",
		Location: "8.869167, 9.639722"
	}),
	new Geo({
		IataCode: "KAD",
		Location: "7.440278, 10.595833"
	}),
	new Geo({
		IataCode: "KAN",
		Location: "8.5239, 12.0464"
	}),
	new Geo({
		IataCode: "DKA",
		Location: "7.660803, 13.003712"
	}),
	new Geo({
		IataCode: "LOS",
		Location: "3.326389, 6.588889"
	}),
	new Geo({
		IataCode: "MIU",
		Location: "13.068056, 11.844167"
	}),
	new Geo({
		IataCode: "MXJ",
		Location: "6.533333, 9.616667"
	}),
	new Geo({
		IataCode: "QOW",
		Location: "7.21, 5.39"
	}),
	new Geo({
		IataCode: "PHC",
		Location: "6.95, 5.016667"
	}),
	new Geo({
		IataCode: "PHG",
		Location: "7.02, 4.8411"
	}),
	new Geo({
		IataCode: "QRW",
		Location: "5.68333, 5.5"
	}),
	new Geo({
		IataCode: "SKO",
		Location: "5.207222, 12.916389"
	}),
	new Geo({
		IataCode: "QUO",
		Location: "8.098889, 4.875833"
	}),
	new Geo({
		IataCode: "YOL",
		Location: "12.432222, 9.266111"
	}),
	new Geo({
		IataCode: "RUN",
		Location: "55.521389, -20.877222"
	}),
	new Geo({
		IataCode: "ZSE",
		Location: "55.423611, -21.32"
	}),
	new Geo({
		IataCode: "KGL",
		Location: "30.14, -1.967778"
	}),
	new Geo({
		IataCode: "KME",
		Location: "28.916667, -2.466667"
	}),
	new Geo({
		IataCode: "PRI",
		Location: "55.692778, -4.319167"
	}),
	new Geo({
		IataCode: "SEZ",
		Location: "55.5225, -4.672222"
	}),
	new Geo({
		IataCode: "EBD",
		Location: "30.234167, 13.159722"
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
		Location: "32.556111, 15.599444"
	}),
	new Geo({
		IataCode: "KSL",
		Location: "36.342222, 15.390278"
	}),
	new Geo({
		IataCode: "PZU",
		Location: "37.213889, 19.577778"
	}),
	new Geo({
		IataCode: "RSS",
		Location: "34.4, 11.783333"
	}),
	new Geo({
		IataCode: "UYL",
		Location: "24.894722, 12.071667"
	}),
	new Geo({
		IataCode: "ASI",
		Location: "-14.4, -7.966667"
	}),
	new Geo({
		IataCode: "HLE",
		Location: "-5.645, -15.958056"
	}),
	new Geo({
		IataCode: "FNA",
		Location: "-13.196944, 8.6175"
	}),
	new Geo({
		IataCode: "CSK",
		Location: "-16.75, 12.4"
	}),
	new Geo({
		IataCode: "DKR",
		Location: "-17.490556, 14.740833"
	}),
	new Geo({
		IataCode: "DSS",
		Location: "-17.072777, 14.670833"
	}),
	new Geo({
		IataCode: "KDA",
		Location: "-14.966667, 12.883333"
	}),
	new Geo({
		IataCode: "ZIG",
		Location: "-16.275833, 12.556111"
	}),
	new Geo({
		IataCode: "AAD",
		Location: "46.6375, 6.095833"
	}),
	new Geo({
		IataCode: "BSA",
		Location: "49.15, 11.283333"
	}),
	new Geo({
		IataCode: "GGR",
		Location: "48.333333, 8.283333"
	}),
	new Geo({
		IataCode: "GLK",
		Location: "47.433333, 6.766667"
	}),
	new Geo({
		IataCode: "GUO",
		Location: "45.9856, 5.3176"
	}),
	new Geo({
		IataCode: "HGA",
		Location: "44.091667, 9.515833"
	}),
	new Geo({
		IataCode: "KMU",
		Location: "42.459167, -0.377222"
	}),
	new Geo({
		IataCode: "MGQ",
		Location: "45.313333, 2.013333"
	}),
	new Geo({
		IataCode: "JUB",
		Location: "31.603889, 4.870556"
	}),
	new Geo({
		IataCode: "WUU",
		Location: "27.985278, 7.746389"
	}),
	new Geo({
		IataCode: "PCP",
		Location: "7.416667, 1.666667"
	}),
	new Geo({
		IataCode: "TMS",
		Location: "6.725, 0.3783"
	}),
	new Geo({
		IataCode: "MTS",
		Location: "31.311389, -26.524167"
	}),
	new Geo({
		IataCode: "SHO",
		Location: "31.720805, -26.356895"
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
		Location: "10.783333, 33.874167"
	}),
	new Geo({
		IataCode: "GAE",
		Location: "10.103333, 33.876919"
	}),
	new Geo({
		IataCode: "MIR",
		Location: "10.752778, 35.756944"
	}),
	new Geo({
		IataCode: "NBE",
		Location: "10.413889, 36.091944"
	}),
	new Geo({
		IataCode: "SFA",
		Location: "10.683333, 34.716667"
	}),
	new Geo({
		IataCode: "TBJ",
		Location: "8.876389, 36.978333"
	}),
	new Geo({
		IataCode: "TOE",
		Location: "8.133333, 33.916667"
	}),
	new Geo({
		IataCode: "TUN",
		Location: "10.227222, 36.851111"
	}),
	new Geo({
		IataCode: "ARK",
		Location: "36.683333, -3.366667"
	}),
	new Geo({
		IataCode: "BKZ",
		Location: "31.8, -1.3"
	}),
	new Geo({
		IataCode: "DAR",
		Location: "39.201944, -6.875278"
	}),
	new Geo({
		IataCode: "DOD",
		Location: "35.750278, -6.166667"
	}),
	new Geo({
		IataCode: "GTZ",
		Location: "34.224343, -2.16079"
	}),
	new Geo({
		IataCode: "IRI",
		Location: "35.750278, -7.670556"
	}),
	new Geo({
		IataCode: "JRO",
		Location: "37.066667, -3.433333"
	}),
	new Geo({
		IataCode: "KIY",
		Location: "39.511667, -8.911944"
	}),
	new Geo({
		IataCode: "LKY",
		Location: "35.81852, -3.37625"
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
		Location: "33.8, -1.497222"
	}),
	new Geo({
		IataCode: "MWZ",
		Location: "32.928056, -2.444722"
	}),
	new Geo({
		IataCode: "MYW",
		Location: "40.193611, -10.338889"
	}),
	new Geo({
		IataCode: "PMA",
		Location: "39.801944, -5.242222"
	}),
	new Geo({
		IataCode: "SEU",
		Location: "34.8225, -2.45806"
	}),
	new Geo({
		IataCode: "SGX",
		Location: "35.5775, -10.686667"
	}),
	new Geo({
		IataCode: "TBO",
		Location: "32.8375, -5.0725"
	}),
	new Geo({
		IataCode: "TGT",
		Location: "39.070278, -5.089444"
	}),
	new Geo({
		IataCode: "TKQ",
		Location: "29.67, -4.885"
	}),
	new Geo({
		IataCode: "ZNZ",
		Location: "39.221944, -6.219167"
	}),
	new Geo({
		IataCode: "EBB",
		Location: "32.438056, 0.0425"
	}),
	new Geo({
		IataCode: "JIN",
		Location: "33.192222, 0.456389"
	}),
	new Geo({
		IataCode: "KHX",
		Location: "29.699444, -0.716388"
	}),
	new Geo({
		IataCode: "KSE",
		Location: "30.100833, 0.185556"
	}),
	new Geo({
		IataCode: "PAF",
		Location: "31.616667, 2.2"
	}),
	new Geo({
		IataCode: "RUA",
		Location: "30.933333, 3.033333"
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
		Location: "31.522499, -24.744167"
	}),
	new Geo({
		IataCode: "BFN",
		Location: "26.3, -29.1"
	}),
	new Geo({
		IataCode: "CPT",
		Location: "18.602222, -33.964722"
	}),
	new Geo({
		IataCode: "DUR",
		Location: "30.956944, -29.969167"
	}),
	new Geo({
		IataCode: "ELS",
		Location: "27.823889, -33.036111"
	}),
	new Geo({
		IataCode: "GRJ",
		Location: "22.378889, -34.005556"
	}),
	new Geo({
		IataCode: "HDS",
		Location: "31.049767, -24.368677"
	}),
	new Geo({
		IataCode: "HLA",
		Location: "27.909444, -25.938611"
	}),
	new Geo({
		IataCode: "JNB",
		Location: "28.25, -26.133333"
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
		Location: "25.548056, -25.798333"
	}),
	new Geo({
		IataCode: "MGH",
		Location: "30.34302, -30.85741"
	}),
	new Geo({
		IataCode: "MQP",
		Location: "31.099444, -25.390833"
	}),
	new Geo({
		IataCode: "NGL",
		Location: "21.55, 2.45"
	}),
	new Geo({
		IataCode: "NLP",
		Location: "30.913889, -25.500833"
	}),
	new Geo({
		IataCode: "NTY",
		Location: "27.173333, -25.333889"
	}),
	new Geo({
		IataCode: "PBZ",
		Location: "23.329167, -34.0875"
	}),
	new Geo({
		IataCode: "PHW",
		Location: "31.156111, -23.933611"
	}),
	new Geo({
		IataCode: "PLZ",
		Location: "25.613889, -33.986111"
	}),
	new Geo({
		IataCode: "PRY",
		Location: "28.22423, -25.65386"
	}),
	new Geo({
		IataCode: "PTG",
		Location: "29.459152, -23.848947"
	}),
	new Geo({
		IataCode: "PZB",
		Location: "30.399444, -29.646111"
	}),
	new Geo({
		IataCode: "PZL",
		Location: "32.3, -27.866667"
	}),
	new Geo({
		IataCode: "RCB",
		Location: "32.093056, -28.740556"
	}),
	new Geo({
		IataCode: "SIS",
		Location: "22.99928, -27.64861"
	}),
	new Geo({
		IataCode: "SZK",
		Location: "31.586111, -24.9625"
	}),
	new Geo({
		IataCode: "ULD",
		Location: "31.433333, -28.283333"
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
		Location: "28.67569, -31.547527"
	}),
	new Geo({
		IataCode: "KAA",
		Location: "31.13, -10.215833"
	}),
	new Geo({
		IataCode: "KLB",
		Location: "22.644444, -14.975833"
	}),
	new Geo({
		IataCode: "LUN",
		Location: "28.449783, -15.329221"
	}),
	new Geo({
		IataCode: "LVI",
		Location: "25.822678, -17.821262"
	}),
	new Geo({
		IataCode: "MFU",
		Location: "31.933334, -13.266667"
	}),
	new Geo({
		IataCode: "NLA",
		Location: "28.661957, -12.99586"
	}),
	new Geo({
		IataCode: "SLI",
		Location: "26.366667, -12.172222"
	}),
	new Geo({
		IataCode: "JEK",
		Location: "29.603556, -15.633121"
	}),
	new Geo({
		IataCode: "RYL",
		Location: "29.296679, -15.726728"
	}),
	new Geo({
		IataCode: "BUQ",
		Location: "28.618611, -20.016389"
	}),
	new Geo({
		IataCode: "HRE",
		Location: "31.101389, -17.922778"
	}),
	new Geo({
		IataCode: "VFA",
		Location: "25.840278, -18.093056"
	}),
	new Geo({
		IataCode: "BWN",
		Location: "114.92835, 4.9442"
	}),
	new Geo({
		IataCode: "CCK",
		Location: "96.833889, -12.188333"
	}),
	new Geo({
		IataCode: "XCH",
		Location: "105.690278, -10.450556"
	}),
	new Geo({
		IataCode: "HHP",
		Location: "114.2, 22.318056"
	}),
	new Geo({
		IataCode: "HKG",
		Location: "113.916667, 22.316667"
	}),
	new Geo({
		IataCode: "ABU",
		Location: "124.883333, -9.133333"
	}),
	new Geo({
		IataCode: "AEG",
		Location: "99.430276, 1.400235"
	}),
	new Geo({
		IataCode: "AMQ",
		Location: "128.08914, -3.71026"
	}),
	new Geo({
		IataCode: "ARD",
		Location: "124.597, -8.13234"
	}),
	new Geo({
		IataCode: "BDJ",
		Location: "114.755724, -3.440015"
	}),
	new Geo({
		IataCode: "BDO",
		Location: "107.575833, -6.901667"
	}),
	new Geo({
		IataCode: "BEJ",
		Location: "117.432, 2.1555"
	}),
	new Geo({
		IataCode: "BIK",
		Location: "136.085556, -1.186667"
	}),
	new Geo({
		IataCode: "BJW",
		Location: "120.983333, -8.766667"
	}),
	new Geo({
		IataCode: "BKS",
		Location: "102.338869, -3.861238"
	}),
	new Geo({
		IataCode: "BMU",
		Location: "118.7, -8.55"
	}),
	new Geo({
		IataCode: "BPN",
		Location: "116.894444, -1.268333"
	}),
	new Geo({
		IataCode: "BTH",
		Location: "104.118889, 1.121111"
	}),
	new Geo({
		IataCode: "BTJ",
		Location: "95.419444, 5.52"
	}),
	new Geo({
		IataCode: "BTW",
		Location: "116, -3"
	}),
	new Geo({
		IataCode: "BUW",
		Location: "122.633333, -5.466667"
	}),
	new Geo({
		IataCode: "BWX",
		Location: "114.340278, -8.31"
	}),
	new Geo({
		IataCode: "BXB",
		Location: "133.416667, -2.55"
	}),
	new Geo({
		IataCode: "CBN",
		Location: "108.533333, -6.75"
	}),
	new Geo({
		IataCode: "CGK",
		Location: "106.65, -6.116667"
	}),
	new Geo({
		IataCode: "HLP",
		Location: "106.890278, -6.268056"
	}),
	new Geo({
		IataCode: "CXP",
		Location: "109, -7.733333"
	}),
	new Geo({
		IataCode: "DEX",
		Location: "139.485399, -4.854012"
	}),
	new Geo({
		IataCode: "DJB",
		Location: "103.641667, -1.634722"
	}),
	new Geo({
		IataCode: "DJJ",
		Location: "140.513889, -2.575"
	}),
	new Geo({
		IataCode: "DOB",
		Location: "134, -5.75"
	}),
	new Geo({
		IataCode: "DPS",
		Location: "115.165, -8.748611"
	}),
	new Geo({
		IataCode: "DTB",
		Location: "98.993838, 2.258886"
	}),
	new Geo({
		IataCode: "DTD",
		Location: "116.483333, 0.716667"
	}),
	new Geo({
		IataCode: "DUM",
		Location: "101.466667, 1.583333"
	}),
	new Geo({
		IataCode: "ENE",
		Location: "121.65, -8.833333"
	}),
	new Geo({
		IataCode: "FKQ",
		Location: "132.3, -2.916667"
	}),
	new Geo({
		IataCode: "FLZ",
		Location: "98.887854, 1.55637"
	}),
	new Geo({
		IataCode: "GLX",
		Location: "127.833333, 1.833333"
	}),
	new Geo({
		IataCode: "GNS",
		Location: "97.70468, 1.16638"
	}),
	new Geo({
		IataCode: "GTO",
		Location: "122.849936, 0.638438"
	}),
	new Geo({
		IataCode: "JBB",
		Location: "113.693889, -8.241111"
	}),
	new Geo({
		IataCode: "JOG",
		Location: "110.430556, -7.789722"
	}),
	new Geo({
		IataCode: "KAZ",
		Location: "127.866667, 1.166667"
	}),
	new Geo({
		IataCode: "KBU",
		Location: "116.333333, -3.333333"
	}),
	new Geo({
		IataCode: "KDI",
		Location: "122.417293, -4.077237"
	}),
	new Geo({
		IataCode: "KJT",
		Location: "108.157588, -6.65097"
	}),
	new Geo({
		IataCode: "KNG",
		Location: "133.69555, -3.64452"
	}),
	new Geo({
		IataCode: "KOE",
		Location: "123.667762, -10.168741"
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
		Location: "119.888067, -8.488771"
	}),
	new Geo({
		IataCode: "LKA",
		Location: "122.983333, -8.35"
	}),
	new Geo({
		IataCode: "LLO",
		Location: "120.245278, -3.084722"
	}),
	new Geo({
		IataCode: "LOP",
		Location: "116.276675, -8.757322"
	}),
	new Geo({
		IataCode: "LPU",
		Location: "114.972778, 1.709167"
	}),
	new Geo({
		IataCode: "LSW",
		Location: "96.95034, 5.22668"
	}),
	new Geo({
		IataCode: "LUV",
		Location: "132.716667, -5.666667"
	}),
	new Geo({
		IataCode: "LUW",
		Location: "122.783333, -0.933333"
	}),
	new Geo({
		IataCode: "LWE",
		Location: "123.366667, -8.5"
	}),
	new Geo({
		IataCode: "MDC",
		Location: "124.925833, 1.549444"
	}),
	new Geo({
		IataCode: "MEQ",
		Location: "96.116667, 4.15"
	}),
	new Geo({
		IataCode: "KNO",
		Location: "98.876556, 3.650824"
	}),
	new Geo({
		IataCode: "YYV",
		Location: "117.373611, 2.836389"
	}),
	new Geo({
		IataCode: "MJU",
		Location: "118.895, -2.67877"
	}),
	new Geo({
		IataCode: "MKQ",
		Location: "140.5, -8.516667"
	}),
	new Geo({
		IataCode: "MKW",
		Location: "134.052778, -0.893056"
	}),
	new Geo({
		IataCode: "MLG",
		Location: "112.716667, -7.933333"
	}),
	new Geo({
		IataCode: "MNA",
		Location: "126.7, 4.05"
	}),
	new Geo({
		IataCode: "MOF",
		Location: "122.25, -8.633333"
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
		Location: "125.52802, 3.68321"
	}),
	new Geo({
		IataCode: "NAM",
		Location: "127.1, -3.3"
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
		Location: "100.35, -0.875556"
	}),
	new Geo({
		IataCode: "PGK",
		Location: "106.141111, -2.160556"
	}),
	new Geo({
		IataCode: "PKN",
		Location: "111.666667, -2.7"
	}),
	new Geo({
		IataCode: "PKU",
		Location: "101.45, 0.466667"
	}),
	new Geo({
		IataCode: "PKY",
		Location: "113.933333, -2.216667"
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
		Location: "120.733333, -1.383333"
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
		Location: "103.379766, -4.022201"
	}),
	new Geo({
		IataCode: "RAQ",
		Location: "122.583333, -4.916667"
	}),
	new Geo({
		IataCode: "RGT",
		Location: "102.55, -0.4"
	}),
	new Geo({
		IataCode: "RJM",
		Location: "130.77362, -0.430536"
	}),
	new Geo({
		IataCode: "RKO",
		Location: "116, -2.083333"
	}),
	new Geo({
		IataCode: "RTG",
		Location: "120.45, -8.6"
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
		Location: "112.975073, -2.499798"
	}),
	new Geo({
		IataCode: "SOC",
		Location: "110.756944, -7.516111"
	}),
	new Geo({
		IataCode: "SOQ",
		Location: "131.116667, -0.933333"
	}),
	new Geo({
		IataCode: "SQG",
		Location: "111.583333, 0.083333"
	}),
	new Geo({
		IataCode: "SRG",
		Location: "110.38, -6.975833"
	}),
	new Geo({
		IataCode: "SRI",
		Location: "117.15, -0.5"
	}),
	new Geo({
		IataCode: "SUB",
		Location: "112.786944, -7.379722"
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
		Location: "136.916667, -4.533333"
	}),
	new Geo({
		IataCode: "TJG",
		Location: "103.966667, -1.4"
	}),
	new Geo({
		IataCode: "TJQ",
		Location: "107.753811, -2.754014"
	}),
	new Geo({
		IataCode: "TJS",
		Location: "117.366667, 2.85"
	}),
	new Geo({
		IataCode: "TKG",
		Location: "105.176754, -5.24088"
	}),
	new Geo({
		IataCode: "TLI",
		Location: "120.816667, 1.033333"
	}),
	new Geo({
		IataCode: "TMC",
		Location: "119.183056, -9.340278"
	}),
	new Geo({
		IataCode: "TMH",
		Location: "140.266667, -6.083333"
	}),
	new Geo({
		IataCode: "TNJ",
		Location: "104.527996, 0.92014"
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
		Location: "127.4, 0.8"
	}),
	new Geo({
		IataCode: "TTR",
		Location: "119.916667, -3.416667"
	}),
	new Geo({
		IataCode: "TXE",
		Location: "96.849444, 4.720833"
	}),
	new Geo({
		IataCode: "UOL",
		Location: "121.433333, 1.166667"
	}),
	new Geo({
		IataCode: "UPG",
		Location: "119.55, -5.066667"
	}),
	new Geo({
		IataCode: "VPM",
		Location: "121.622835, -0.865735"
	}),
	new Geo({
		IataCode: "WGP",
		Location: "120.3, -9.666667"
	}),
	new Geo({
		IataCode: "WMX",
		Location: "138.933333, -4.116667"
	}),
	new Geo({
		IataCode: "WNI",
		Location: "123.635288, -5.291152"
	}),
	new Geo({
		IataCode: "ZRI",
		Location: "136.239506, -1.874397"
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
		Location: "102.163889, 19.895833"
	}),
	new Geo({
		IataCode: "LXG",
		Location: "101.466667, 21.05"
	}),
	new Geo({
		IataCode: "NEU",
		Location: "104.066667, 20.416667"
	}),
	new Geo({
		IataCode: "ODY",
		Location: "101.994, 20.6827"
	}),
	new Geo({
		IataCode: "PCQ",
		Location: "101.905833, 21.645833"
	}),
	new Geo({
		IataCode: "PKZ",
		Location: "105.783889, 15.131667"
	}),
	new Geo({
		IataCode: "VTE",
		Location: "102.566667, 17.984722"
	}),
	new Geo({
		IataCode: "XKH",
		Location: "103.158, 19.45"
	}),
	new Geo({
		IataCode: "ZVK",
		Location: "104.7625, 16.553611"
	}),
	new Geo({
		IataCode: "AKY",
		Location: "92.880278, 20.130278"
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
		Location: "96.794444, 20.743889"
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
		Location: "99.616667, 21.3"
	}),
	new Geo({
		IataCode: "KHM",
		Location: "95.6744, 25.9883"
	}),
	new Geo({
		IataCode: "KMV",
		Location: "94.05, 23.183333"
	}),
	new Geo({
		IataCode: "KYP",
		Location: "93.533333, 19.433333"
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
		Location: "95.978056, 21.702222"
	}),
	new Geo({
		IataCode: "MGU",
		Location: "93.738889, 18.958333"
	}),
	new Geo({
		IataCode: "MGZ",
		Location: "98.616667, 12.45"
	}),
	new Geo({
		IataCode: "MNU",
		Location: "97.669444, 16.441667"
	}),
	new Geo({
		IataCode: "MOG",
		Location: "99.266667, 20.533333"
	}),
	new Geo({
		IataCode: "MYT",
		Location: "97.298889, 25.354167"
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
		Location: "95.0947, 22.2215"
	}),
	new Geo({
		IataCode: "PBU",
		Location: "97.416667, 27.333333"
	}),
	new Geo({
		IataCode: "RGN",
		Location: "96.138889, 16.906389"
	}),
	new Geo({
		IataCode: "SNW",
		Location: "94.300203, 18.46292"
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
		Location: "94.026133, 19.769156"
	}),
	new Geo({
		IataCode: "VBP",
		Location: "98.767, 11.267"
	}),
	new Geo({
		IataCode: "MFM",
		Location: "113.591667, 22.149444"
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
		Location: "103.670833, 1.638889"
	}),
	new Geo({
		IataCode: "KBR",
		Location: "102.293611, 6.165278"
	}),
	new Geo({
		IataCode: "KCH",
		Location: "110.340833, 1.484167"
	}),
	new Geo({
		IataCode: "KTE",
		Location: "103.428333, 4.538333"
	}),
	new Geo({
		IataCode: "KUA",
		Location: "103.210278, 3.772222"
	}),
	new Geo({
		IataCode: "KUD",
		Location: "116.834167, 6.925"
	}),
	new Geo({
		IataCode: "KUL",
		Location: "101.693333, 2.743333"
	}),
	new Geo({
		IataCode: "SZB",
		Location: "101.55, 3.133333"
	}),
	new Geo({
		IataCode: "LBP",
		Location: "115.4, 3.2"
	}),
	new Geo({
		IataCode: "LBU",
		Location: "115.248333, 5.300556"
	}),
	new Geo({
		IataCode: "LDU",
		Location: "118.326111, 5.035278"
	}),
	new Geo({
		IataCode: "LGK",
		Location: "99.733333, 6.333333"
	}),
	new Geo({
		IataCode: "LGL",
		Location: "115.154057, 3.421847"
	}),
	new Geo({
		IataCode: "LKH",
		Location: "114.783, 3.3"
	}),
	new Geo({
		IataCode: "LMN",
		Location: "115.01, 4.8083"
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
		Location: "102.253333, 2.264167"
	}),
	new Geo({
		IataCode: "MUR",
		Location: "114.316667, 4.183333"
	}),
	new Geo({
		IataCode: "MYY",
		Location: "113.986944, 4.321944"
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
		Location: "111.838333, 2.341667"
	}),
	new Geo({
		IataCode: "SDK",
		Location: "118.059722, 5.9"
	}),
	new Geo({
		IataCode: "TGC",
		Location: "111.202755, 2.17773"
	}),
	new Geo({
		IataCode: "TGG",
		Location: "103.109722, 5.381111"
	}),
	new Geo({
		IataCode: "TWU",
		Location: "118.12195, 4.31337"
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
		Location: "124.209967, 7.164512"
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
		Location: "120.55, 15.1833"
	}),
	new Geo({
		IataCode: "CRM",
		Location: "124.583333, 12.483333"
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
		Location: "123.30162, 9.334151"
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
		Location: "119.412778, 11.205556"
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
		Location: "122.543611, 10.714444"
	}),
	new Geo({
		IataCode: "JOL",
		Location: "121.008889, 6.055278"
	}),
	new Geo({
		IataCode: "KLO",
		Location: "122.377222, 11.682778"
	}),
	new Geo({
		IataCode: "LAO",
		Location: "120.530278, 18.183611"
	}),
	new Geo({
		IataCode: "LGP",
		Location: "123.730278, 13.156944"
	}),
	new Geo({
		IataCode: "KCV",
		Location: "-83.633333, 32.833333"
	}),
	new Geo({
		IataCode: "MBT",
		Location: "123.62924, 12.36937"
	}),
	new Geo({
		IataCode: "MNL",
		Location: "121.018333, 14.51"
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
		Location: "122.058889, 6.923056"
	}),
	new Geo({
		IataCode: "RXS",
		Location: "122.751111, 11.6"
	}),
	new Geo({
		IataCode: "SFS",
		Location: "120.267222, 14.785556"
	}),
	new Geo({
		IataCode: "SGS",
		Location: "119.743, 5.04699"
	}),
	new Geo({
		IataCode: "IAO",
		Location: "126.015372, 9.855132"
	}),
	new Geo({
		IataCode: "SJI",
		Location: "121.046795, 12.361581"
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
		Location: "125.019444, 11.234444"
	}),
	new Geo({
		IataCode: "TAG",
		Location: "123.854167, 9.664167"
	}),
	new Geo({
		IataCode: "TBH",
		Location: "122.079349, 12.309521"
	}),
	new Geo({
		IataCode: "TDG",
		Location: "126.16667, 9.06667"
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
		Location: "120.166667, 12.1"
	}),
	new Geo({
		IataCode: "VGN",
		Location: "120.35612, 17.55474"
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
		Location: "103.994444, 1.350278"
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
		IataCode: "DMK",
		Location: "100.610001, 13.91"
	}),
	new Geo({
		IataCode: "CEI",
		Location: "99.883056, 19.9525"
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
		Location: "100.416667, 6.933333"
	}),
	new Geo({
		IataCode: "HGN",
		Location: "97.976389, 19.298889"
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
		Location: "98.98527, 8.09985"
	}),
	new Geo({
		IataCode: "KKC",
		Location: "102.786667, 16.465"
	}),
	new Geo({
		IataCode: "KOP",
		Location: "104.646149, 17.388648"
	}),
	new Geo({
		IataCode: "LOE",
		Location: "101.733333, 17.45"
	}),
	new Geo({
		IataCode: "LPT",
		Location: "99.507222, 18.274167"
	}),
	new Geo({
		IataCode: "MAQ",
		Location: "98.583333, 16.666667"
	}),
	new Geo({
		IataCode: "NAW",
		Location: "101.75, 6.516667"
	}),
	new Geo({
		IataCode: "NNT",
		Location: "100.783333, 18.8"
	}),
	new Geo({
		IataCode: "NST",
		Location: "99.95, 8.466667"
	}),
	new Geo({
		IataCode: "PHS",
		Location: "100.279444, 16.788333"
	}),
	new Geo({
		IataCode: "PHY",
		Location: "101.198333, 16.681944"
	}),
	new Geo({
		IataCode: "PRH",
		Location: "100.133333, 18.15"
	}),
	new Geo({
		IataCode: "PYY",
		Location: "98.436667, 19.358889"
	}),
	new Geo({
		IataCode: "ROI",
		Location: "103.776944, 16.115278"
	}),
	new Geo({
		IataCode: "SNO",
		Location: "104.1, 17.283333"
	}),
	new Geo({
		IataCode: "TDX",
		Location: "102.316944, 12.268056"
	}),
	new Geo({
		IataCode: "THS",
		Location: "99.822222, 17.223056"
	}),
	new Geo({
		IataCode: "TST",
		Location: "99.616667, 7.5"
	}),
	new Geo({
		IataCode: "UBP",
		Location: "104.873611, 15.248889"
	}),
	new Geo({
		IataCode: "UNN",
		Location: "98.587532, 9.776562"
	}),
	new Geo({
		IataCode: "URT",
		Location: "99.136162, 9.1343"
	}),
	new Geo({
		IataCode: "USM",
		Location: "100.066667, 9.55"
	}),
	new Geo({
		IataCode: "UTH",
		Location: "102.792778, 17.385"
	}),
	new Geo({
		IataCode: "UTP",
		Location: "101.016667, 12.683333"
	}),
	new Geo({
		IataCode: "CMJ",
		Location: "119.418297, 23.212005"
	}),
	new Geo({
		IataCode: "CYI",
		Location: "120.383333, 23.466667"
	}),
	new Geo({
		IataCode: "GNI",
		Location: "121.46639, 22.67278"
	}),
	new Geo({
		IataCode: "HCN",
		Location: "120.833333, 21.933333"
	}),
	new Geo({
		IataCode: "HUN",
		Location: "121.6125, 24.022222"
	}),
	new Geo({
		IataCode: "KHH",
		Location: "120.345278, 22.5725"
	}),
	new Geo({
		IataCode: "KNH",
		Location: "118.344444, 24.420556"
	}),
	new Geo({
		IataCode: "KYD",
		Location: "121.5, 22.083333"
	}),
	new Geo({
		IataCode: "LZN",
		Location: "119.958333, 26.159444"
	}),
	new Geo({
		IataCode: "MFK",
		Location: "120.003, 26.2242"
	}),
	new Geo({
		IataCode: "MZG",
		Location: "119.618611, 23.569167"
	}),
	new Geo({
		IataCode: "RMQ",
		Location: "120.620833, 24.265"
	}),
	new Geo({
		IataCode: "TNN",
		Location: "120.2, 22.951944"
	}),
	new Geo({
		IataCode: "TPE",
		Location: "121.232778, 25.077778"
	}),
	new Geo({
		IataCode: "TSA",
		Location: "121.516667, 25.066667"
	}),
	new Geo({
		IataCode: "TTT",
		Location: "121.1, 22.75"
	}),
	new Geo({
		IataCode: "WOT",
		Location: "119.50389, 23.36944"
	}),
	new Geo({
		IataCode: "BMV",
		Location: "108.120278, 12.668333"
	}),
	new Geo({
		IataCode: "CAH",
		Location: "105.179444, 9.175556"
	}),
	new Geo({
		IataCode: "DAD",
		Location: "108.203611, 16.042222"
	}),
	new Geo({
		IataCode: "DIN",
		Location: "103, 21.383333"
	}),
	new Geo({
		IataCode: "DLI",
		Location: "108.377778, 11.749722"
	}),
	new Geo({
		IataCode: "VDH",
		Location: "106.59055, 17.515"
	}),
	new Geo({
		IataCode: "HAN",
		Location: "105.809927, 21.218661"
	}),
	new Geo({
		IataCode: "HPH",
		Location: "106.725, 20.819444"
	}),
	new Geo({
		IataCode: "HUI",
		Location: "107.703333, 16.399167"
	}),
	new Geo({
		IataCode: "CXR",
		Location: "109.225, 11.993611"
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
		Location: "105.467778, 19.901667"
	}),
	new Geo({
		IataCode: "UIH",
		Location: "109.042, 13.955"
	}),
	new Geo({
		IataCode: "VCA",
		Location: "105.712, 10.0851"
	}),
	new Geo({
		IataCode: "VCL",
		Location: "108.703889, 15.422222"
	}),
	new Geo({
		IataCode: "VCS",
		Location: "106.633, 8.73183"
	}),
	new Geo({
		IataCode: "VII",
		Location: "105.633333, 18.7"
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
		Location: "54.65, 24.433333"
	}),
	new Geo({
		IataCode: "AYM",
		Location: "54.610497, 24.464503"
	}),
	new Geo({
		IataCode: "DCG",
		Location: "55.331858, 25.242353"
	}),
	new Geo({
		IataCode: "DWC",
		Location: "55.172222, 24.886111"
	}),
	new Geo({
		IataCode: "DXB",
		Location: "55.357778, 25.25"
	}),
	new Geo({
		IataCode: "RHR",
		Location: "55.778, 25.691"
	}),
	new Geo({
		IataCode: "RKT",
		Location: "55.938889, 25.613333"
	}),
	new Geo({
		IataCode: "SHJ",
		Location: "55.500556, 25.328611"
	}),
	new Geo({
		IataCode: "XSB",
		Location: "52.583874, 24.283974"
	}),
	new Geo({
		IataCode: "ZDY",
		Location: "52.3358, 24.5031"
	}),
	new Geo({
		IataCode: "BAH",
		Location: "50.6375, 26.270833"
	}),
	new Geo({
		IataCode: "ETH",
		Location: "34.961389, 29.559722"
	}),
	new Geo({
		IataCode: "HFA",
		Location: "35.041667, 32.811111"
	}),
	new Geo({
		IataCode: "VDA",
		Location: "34.947222, 29.933333"
	}),
	new Geo({
		IataCode: "SDV",
		Location: "34.779444, 32.110833"
	}),
	new Geo({
		IataCode: "TLV",
		Location: "34.8825, 32.012222"
	}),
	new Geo({
		IataCode: "BGW",
		Location: "44.225, 33.2556"
	}),
	new Geo({
		IataCode: "BSR",
		Location: "47.662222, 30.549167"
	}),
	new Geo({
		IataCode: "EBL",
		Location: "43.963056, 36.2375"
	}),
	new Geo({
		IataCode: "ISU",
		Location: "45.314701, 35.5608"
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
		Location: "46.0925, 30.939722"
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
		Location: "54.825468, 26.532791"
	}),
	new Geo({
		IataCode: "BJB",
		Location: "57.305556, 37.488333"
	}),
	new Geo({
		IataCode: "BND",
		Location: "56.366667, 27.216667"
	}),
	new Geo({
		IataCode: "BUZ",
		Location: "50.8325, 28.949167"
	}),
	new Geo({
		IataCode: "BXR",
		Location: "58.451557, 29.086927"
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
		Location: "60.724167, 27.236944"
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
		Location: "56.9575, 30.263333"
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
		Location: "44.973611, 38.4275"
	}),
	new Geo({
		IataCode: "KIH",
		Location: "53.972054, 26.53233"
	}),
	new Geo({
		IataCode: "KKS",
		Location: "51.570521, 33.89436"
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
		Location: "53.203056, 27.3675"
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
		Location: "51.5, 36.666667"
	}),
	new Geo({
		IataCode: "OMH",
		Location: "45.067978, 37.671321"
	}),
	new Geo({
		IataCode: "PFQ",
		Location: "47.883053, 39.603374"
	}),
	new Geo({
		IataCode: "RAS",
		Location: "49.600001, 37.266667"
	}),
	new Geo({
		IataCode: "RJN",
		Location: "56.056667, 30.296944"
	}),
	new Geo({
		IataCode: "RZR",
		Location: "50.680556, 36.910833"
	}),
	new Geo({
		IataCode: "SDG",
		Location: "46.962778, 35.350278"
	}),
	new Geo({
		IataCode: "RUD",
		Location: "55.0945, 36.426792"
	}),
	new Geo({
		IataCode: "SRY",
		Location: "53.183333, 36.616667"
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
		IataCode: "IKA",
		Location: "51.1508, 35.4097"
	}),
	new Geo({
		IataCode: "THR",
		Location: "51.315833, 35.689722"
	}),
	new Geo({
		IataCode: "XBJ",
		Location: "59.281368, 32.894723"
	}),
	new Geo({
		IataCode: "PGU",
		Location: "52.7339, 27.3672"
	}),
	new Geo({
		IataCode: "YES",
		Location: "51.5451, 30.7005"
	}),
	new Geo({
		IataCode: "ZAH",
		Location: "60.906944, 29.461944"
	}),
	new Geo({
		IataCode: "ZBR",
		Location: "60.38211, 25.44335"
	}),
	new Geo({
		IataCode: "ADJ",
		Location: "35.983333, 31.95"
	}),
	new Geo({
		IataCode: "AMM",
		Location: "36, 31.716667"
	}),
	new Geo({
		IataCode: "AQJ",
		Location: "35.018067, 29.611619"
	}),
	new Geo({
		IataCode: "KWI",
		Location: "47.975278, 29.230278"
	}),
	new Geo({
		IataCode: "BEY",
		Location: "35.490278, 33.812778"
	}),
	new Geo({
		IataCode: "DQM",
		Location: "57.642778, 19.5"
	}),
	new Geo({
		IataCode: "KHS",
		Location: "56.233333, 26.183333"
	}),
	new Geo({
		IataCode: "MCT",
		Location: "58.279167, 23.591667"
	}),
	new Geo({
		IataCode: "OHS",
		Location: "56.610366, 24.394909"
	}),
	new Geo({
		IataCode: "SLL",
		Location: "54.101667, 17.036389"
	}),
	new Geo({
		IataCode: "DOH",
		Location: "51.608056, 25.273056"
	}),
	new Geo({
		IataCode: "ABT",
		Location: "41.633333, 20.285556"
	}),
	new Geo({
		IataCode: "AHB",
		Location: "42.65, 18.233333"
	}),
	new Geo({
		IataCode: "AJF",
		Location: "40.10001, 29.78513"
	}),
	new Geo({
		IataCode: "ULH",
		Location: "37.916667, 26.63333"
	}),
	new Geo({
		IataCode: "AQI",
		Location: "46.130556, 28.328056"
	}),
	new Geo({
		IataCode: "BHH",
		Location: "42.625, 19.986111"
	}),
	new Geo({
		IataCode: "DMM",
		Location: "49.8, 26.466667"
	}),
	new Geo({
		IataCode: "DWD",
		Location: "44.121111, 24.449722"
	}),
	new Geo({
		IataCode: "EAM",
		Location: "44.429722, 17.611667"
	}),
	new Geo({
		IataCode: "EJH",
		Location: "36.483333, 26.2"
	}),
	new Geo({
		IataCode: "ELQ",
		Location: "43.770833, 26.303333"
	}),
	new Geo({
		IataCode: "GIZ",
		Location: "42.585833, 16.901111"
	}),
	new Geo({
		IataCode: "HAS",
		Location: "41.68629, 27.43792"
	}),
	new Geo({
		IataCode: "HOF",
		Location: "49.48519, 25.28531"
	}),
	new Geo({
		IataCode: "JED",
		Location: "39.15, 21.683333"
	}),
	new Geo({
		IataCode: "MED",
		Location: "39.721111, 24.545"
	}),
	new Geo({
		IataCode: "RAE",
		Location: "41.133333, 30.9"
	}),
	new Geo({
		IataCode: "RAH",
		Location: "43.481111, 29.630278"
	}),
	new Geo({
		IataCode: "RUH",
		Location: "46.7, 24.966667"
	}),
	new Geo({
		IataCode: "SHW",
		Location: "47.1, 17.416667"
	}),
	new Geo({
		IataCode: "TIF",
		Location: "40.543333, 21.488333"
	}),
	new Geo({
		IataCode: "TUI",
		Location: "38.631667, 31.695"
	}),
	new Geo({
		IataCode: "TUU",
		Location: "36.625278, 28.372222"
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
		Location: "36.517778, 33.413889"
	}),
	new Geo({
		IataCode: "KAC",
		Location: "41.198611, 37.027778"
	}),
	new Geo({
		IataCode: "LTK",
		Location: "35.94512, 35.407626"
	}),
	new Geo({
		IataCode: "ADA",
		Location: "35.280833, 36.983611"
	}),
	new Geo({
		IataCode: "ADF",
		Location: "38.468936, 37.731369"
	}),
	new Geo({
		IataCode: "AJI",
		Location: "43.025, 39.65"
	}),
	new Geo({
		IataCode: "ESB",
		Location: "33, 40.133333"
	}),
	new Geo({
		IataCode: "AYT",
		Location: "30.790556, 36.905556"
	}),
	new Geo({
		IataCode: "AOE",
		Location: "30.582111, 39.784138"
	}),
	new Geo({
		IataCode: "BAL",
		Location: "41.083333, 37.916667"
	}),
	new Geo({
		IataCode: "BGG",
		Location: "40.5925, 38.861111"
	}),
	new Geo({
		IataCode: "BJV",
		Location: "27.683333, 37.25"
	}),
	new Geo({
		IataCode: "CKZ",
		Location: "26.4, 40.133333"
	}),
	new Geo({
		IataCode: "DLM",
		Location: "28.783333, 36.716667"
	}),
	new Geo({
		IataCode: "DNZ",
		Location: "29.703333, 37.787222"
	}),
	new Geo({
		IataCode: "DIY",
		Location: "40.203056, 37.895278"
	}),
	new Geo({
		IataCode: "EDO",
		Location: "27.033333, 39.583333"
	}),
	new Geo({
		IataCode: "EZS",
		Location: "39.291667, 38.608333"
	}),
	new Geo({
		IataCode: "ERC",
		Location: "39.516944, 39.711667"
	}),
	new Geo({
		IataCode: "ERZ",
		Location: "41.173611, 39.955556"
	}),
	new Geo({
		IataCode: "GZT",
		Location: "37.478683, 36.947183"
	}),
	new Geo({
		IataCode: "GZP",
		Location: "32.3014, 36.2993"
	}),
	new Geo({
		IataCode: "HTY",
		Location: "36.282349, 36.369604"
	}),
	new Geo({
		IataCode: "IGD",
		Location: "43.866389, 39.983056"
	}),
	new Geo({
		IataCode: "ISE",
		Location: "30.382222, 37.866111"
	}),
	new Geo({
		IataCode: "ISL",
		Location: "28.726826, 41.269849"
	}),
	new Geo({
		IataCode: "IST",
		Location: "28.815278, 40.976667"
	}),
	new Geo({
		IataCode: "SAW",
		Location: "29.309167, 40.899444"
	}),
	new Geo({
		IataCode: "ADB",
		Location: "27.15, 38.283333"
	}),
	new Geo({
		IataCode: "KSY",
		Location: "43.085833, 40.551667"
	}),
	new Geo({
		IataCode: "ASR",
		Location: "35.495428, 38.770386"
	}),
	new Geo({
		IataCode: "KCM",
		Location: "36.950556, 37.534444"
	}),
	new Geo({
		IataCode: "KCO",
		Location: "30.08334, 40.73503"
	}),
	new Geo({
		IataCode: "KFS",
		Location: "33.791111, 41.305556"
	}),
	new Geo({
		IataCode: "KYA",
		Location: "32.562222, 37.979167"
	}),
	new Geo({
		IataCode: "KZR",
		Location: "30.13, 39.111389"
	}),
	new Geo({
		IataCode: "MLX",
		Location: "38.091006, 38.435347"
	}),
	new Geo({
		IataCode: "MQM",
		Location: "40.631667, 37.223336"
	}),
	new Geo({
		IataCode: "MZH",
		Location: "35.521992, 40.829375"
	}),
	new Geo({
		IataCode: "MSR",
		Location: "41.661236, 38.747769"
	}),
	new Geo({
		IataCode: "NAV",
		Location: "34.53455, 38.771867"
	}),
	new Geo({
		IataCode: "OGU",
		Location: "38.066667, 40.966667"
	}),
	new Geo({
		IataCode: "ONQ",
		Location: "32.1, 41.516667"
	}),
	new Geo({
		IataCode: "SZF",
		Location: "36.55, 41.25"
	}),
	new Geo({
		IataCode: "GNY",
		Location: "38.90216, 37.44556"
	}),
	new Geo({
		IataCode: "SFQ",
		Location: "38.85, 37.085278"
	}),
	new Geo({
		IataCode: "NOP",
		Location: "35.066389, 42.015833"
	}),
	new Geo({
		IataCode: "NKT",
		Location: "42.057563, 37.362678"
	}),
	new Geo({
		IataCode: "VAS",
		Location: "36.904167, 39.813889"
	}),
	new Geo({
		IataCode: "SXZ",
		Location: "41.84, 37.98"
	}),
	new Geo({
		IataCode: "TEQ",
		Location: "27.91909, 41.13825"
	}),
	new Geo({
		IataCode: "TJK",
		Location: "36.367778, 40.302222"
	}),
	new Geo({
		IataCode: "TZX",
		Location: "39.776389, 40.998611"
	}),
	new Geo({
		IataCode: "USQ",
		Location: "29.471944, 38.682222"
	}),
	new Geo({
		IataCode: "VAN",
		Location: "43.332222, 38.458611"
	}),
	new Geo({
		IataCode: "YEI",
		Location: "29.55, 40.233333"
	}),
	new Geo({
		IataCode: "YKO",
		Location: "44.265939, 37.555561"
	}),
	new Geo({
		IataCode: "AAY",
		Location: "52.183333, 16.2"
	}),
	new Geo({
		IataCode: "ADE",
		Location: "45.030556, 12.827778"
	}),
	new Geo({
		IataCode: "AXK",
		Location: "46.82618, 14.55132"
	}),
	new Geo({
		IataCode: "GXF",
		Location: "48.78685, 15.962732"
	}),
	new Geo({
		IataCode: "HOD",
		Location: "42.982778, 14.747222"
	}),
	new Geo({
		IataCode: "RIY",
		Location: "49.37503, 14.66264"
	}),
	new Geo({
		IataCode: "SAH",
		Location: "44.219167, 15.478611"
	}),
	new Geo({
		IataCode: "SCT",
		Location: "54, 12.5"
	}),
	new Geo({
		IataCode: "TAI",
		Location: "44.1375, 13.688889"
	}),
	new Geo({
		IataCode: "SBH",
		Location: "-62.85, 17.9"
	}),
	new Geo({
		IataCode: "BDA",
		Location: "-64.6787, 32.36404"
	}),
	new Geo({
		IataCode: "AKV",
		Location: "-78.14861, 60.81861"
	}),
	new Geo({
		IataCode: "YCK",
		Location: "-125.67, 67.31"
	}),
	new Geo({
		IataCode: "YHY",
		Location: "-115.781822, 60.841063"
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
		Location: "-89.85, 53.013889"
	}),
	new Geo({
		IataCode: "LAK",
		Location: "-135.005833, 68.223333"
	}),
	new Geo({
		IataCode: "YQM",
		Location: "-64.670001, 46.11"
	}),
	new Geo({
		IataCode: "MSA",
		Location: "-91.7628, 53.4414"
	}),
	new Geo({
		IataCode: "QBC",
		Location: "-126.595833, 52.3875"
	}),
	new Geo({
		IataCode: "YZR",
		Location: "-82.30957, 42.999877"
	}),
	new Geo({
		IataCode: "SUR",
		Location: "-88.5475, 52.715278"
	}),
	new Geo({
		IataCode: "YWG",
		Location: "-97.238961, 49.908124"
	}),
	new Geo({
		IataCode: "WNN",
		Location: "-89.166667, 52.916667"
	}),
	new Geo({
		IataCode: "XBE",
		Location: "-91.031237, 53.962291"
	}),
	new Geo({
		IataCode: "XGR",
		Location: "-65.99267, 58.70973"
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
		Location: "-84.61361, 72.98222"
	}),
	new Geo({
		IataCode: "YAC",
		Location: "-91.822707, 51.726936"
	}),
	new Geo({
		IataCode: "YAG",
		Location: "-93.447222, 48.652778"
	}),
	new Geo({
		IataCode: "YAM",
		Location: "-84.507778, 46.483611"
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
		Location: "-89.576039, 53.842172"
	}),
	new Geo({
		IataCode: "YAY",
		Location: "-56.08306, 51.39194"
	}),
	new Geo({
		IataCode: "YAZ",
		Location: "-125.776389, 49.076944"
	}),
	new Geo({
		IataCode: "YBA",
		Location: "-115.566667, 51.166667"
	}),
	new Geo({
		IataCode: "YBB",
		Location: "-89.808056, 68.544444"
	}),
	new Geo({
		IataCode: "YBC",
		Location: "-68.207222, 49.133056"
	}),
	new Geo({
		IataCode: "YBE",
		Location: "-108.483333, 59.566667"
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
		Location: "-96.083333, 64.3"
	}),
	new Geo({
		IataCode: "YBL",
		Location: "-125.265556, 49.946389"
	}),
	new Geo({
		IataCode: "YHH",
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
		Location: "-57.18624, 51.44196"
	}),
	new Geo({
		IataCode: "YCB",
		Location: "-105.134697, 69.09847"
	}),
	new Geo({
		IataCode: "YCD",
		Location: "-123.866667, 49.05"
	}),
	new Geo({
		IataCode: "ZNA",
		Location: "-123.935652, 49.169022"
	}),
	new Geo({
		IataCode: "YCG",
		Location: "-117.632222, 49.295556"
	}),
	new Geo({
		IataCode: "YCL",
		Location: "-66.333333, 47.983333"
	}),
	new Geo({
		IataCode: "YCO",
		Location: "-115.083333, 67.833333"
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
		Location: "-139.120833, 64.041667"
	}),
	new Geo({
		IataCode: "YDF",
		Location: "-57.4, 49.216667"
	}),
	new Geo({
		IataCode: "YDL",
		Location: "-130.033333, 58.583333"
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
		IataCode: "YEG",
		Location: "-113.579722, 53.309722"
	}),
	new Geo({
		IataCode: "YXD",
		Location: "-113.516667, 53.566667"
	}),
	new Geo({
		IataCode: "YEK",
		Location: "-94.05, 61.116667"
	}),
	new Geo({
		IataCode: "YZF",
		Location: "-114.450001, 62.47"
	}),
	new Geo({
		IataCode: "YER",
		Location: "-87.833333, 56.033333"
	}),
	new Geo({
		IataCode: "YEV",
		Location: "-133.482778, 68.304167"
	}),
	new Geo({
		IataCode: "YFA",
		Location: "-81.679873, 52.204161"
	}),
	new Geo({
		IataCode: "YFB",
		Location: "-68.563889, 63.752222"
	}),
	new Geo({
		IataCode: "YFC",
		Location: "-66.533333, 45.866667"
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
		Location: "-101.683333, 54.683333"
	}),
	new Geo({
		IataCode: "YFS",
		Location: "-121.23333, 61.75"
	}),
	new Geo({
		IataCode: "YGB",
		Location: "-124.533333, 49.7"
	}),
	new Geo({
		IataCode: "YGG",
		Location: "-123.5, 48.85"
	}),
	new Geo({
		IataCode: "YGH",
		Location: "-128.650833, 66.240833"
	}),
	new Geo({
		IataCode: "YGK",
		Location: "-76.598396, 44.223306"
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
		Location: "-64.478611, 48.775278"
	}),
	new Geo({
		IataCode: "YGR",
		Location: "-61.900002, 47.366667"
	}),
	new Geo({
		IataCode: "YGT",
		Location: "-81.816667, 69.4"
	}),
	new Geo({
		IataCode: "YGV",
		Location: "-63.621826, 50.295481"
	}),
	new Geo({
		IataCode: "YGW",
		Location: "-77.766667, 55.279167"
	}),
	new Geo({
		IataCode: "YGX",
		Location: "-94.7, 56.35"
	}),
	new Geo({
		IataCode: "YGZ",
		Location: "-82.957222, 76.417778"
	}),
	new Geo({
		IataCode: "YHD",
		Location: "-92.744167, 49.831667"
	}),
	new Geo({
		IataCode: "YHI",
		Location: "-117.806111, 70.762778"
	}),
	new Geo({
		IataCode: "YHK",
		Location: "-95.878372, 68.637054"
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
		Location: "-59.636406, 50.469133"
	}),
	new Geo({
		IataCode: "YHS",
		Location: "-123.75, 49.466667"
	}),
	new Geo({
		IataCode: "YHZ",
		Location: "-63.516667, 44.883333"
	}),
	new Geo({
		IataCode: "YIF",
		Location: "-58.658964, 51.212352"
	}),
	new Geo({
		IataCode: "YIK",
		Location: "-77.92528, 62.41733"
	}),
	new Geo({
		IataCode: "YIO",
		Location: "-78, 72.683333"
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
		Location: "-70, 60"
	}),
	new Geo({
		IataCode: "YKL",
		Location: "-66.80528, 54.80528"
	}),
	new Geo({
		IataCode: "YKQ",
		Location: "-78.75, 51.4875"
	}),
	new Geo({
		IataCode: "YKU",
		Location: "-79, 53.833333"
	}),
	new Geo({
		IataCode: "YLC",
		Location: "-69.883333, 62.85"
	}),
	new Geo({
		IataCode: "YLE",
		Location: "-117.266668, 63.15"
	}),
	new Geo({
		IataCode: "YLH",
		Location: "-87.93, 52.183333"
	}),
	new Geo({
		IataCode: "YLL",
		Location: "-110.000001, 53.3"
	}),
	new Geo({
		IataCode: "YLW",
		Location: "-119.377778, 49.956111"
	}),
	new Geo({
		IataCode: "YMA",
		Location: "-135.873611, 63.616389"
	}),
	new Geo({
		IataCode: "YMM",
		Location: "-111.266668, 56.677778"
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
		IataCode: "YHU",
		Location: "-73.41667, 45.51667"
	}),
	new Geo({
		IataCode: "YMX",
		Location: "-74.03, 45.666667"
	}),
	new Geo({
		IataCode: "YUL",
		Location: "-73.75, 45.463889"
	}),
	new Geo({
		IataCode: "YMT",
		Location: "-74.527795, 49.778424"
	}),
	new Geo({
		IataCode: "YNA",
		Location: "-61.788346, 50.188545"
	}),
	new Geo({
		IataCode: "YNC",
		Location: "-78.816667, 53"
	}),
	new Geo({
		IataCode: "YNE",
		Location: "-97.845833, 53.954167"
	}),
	new Geo({
		IataCode: "YNL",
		Location: "-104.081111, 58.275"
	}),
	new Geo({
		IataCode: "YNO",
		Location: "-92.9711, 52.49"
	}),
	new Geo({
		IataCode: "YNP",
		Location: "-61.184444, 55.913889"
	}),
	new Geo({
		IataCode: "YNS",
		Location: "-76.13621, 51.69105"
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
		Location: "-117.168334, 58.618333"
	}),
	new Geo({
		IataCode: "YND",
		Location: "-75.56359, 45.52169"
	}),
	new Geo({
		IataCode: "YOW",
		Location: "-75.672778, 45.320833"
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
		Location: "-124.05861, 69.36111"
	}),
	new Geo({
		IataCode: "YPH",
		Location: "-78.166667, 58.433333"
	}),
	new Geo({
		IataCode: "YPJ",
		Location: "-69.666667, 59.3"
	}),
	new Geo({
		IataCode: "YPK",
		Location: "-122.705455, 49.210932"
	}),
	new Geo({
		IataCode: "YPL",
		Location: "-90.21417, 51.44639"
	}),
	new Geo({
		IataCode: "YPM",
		Location: "-93.974637, 51.819797"
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
		Location: "-130.440833, 54.287222"
	}),
	new Geo({
		IataCode: "YPW",
		Location: "-124.500589, 49.834135"
	}),
	new Geo({
		IataCode: "YPX",
		Location: "-77.166667, 60.033333"
	}),
	new Geo({
		IataCode: "YPY",
		Location: "-111.120833, 58.7625"
	}),
	new Geo({
		IataCode: "YQB",
		Location: "-71.38431, 46.79227"
	}),
	new Geo({
		IataCode: "YQC",
		Location: "-69.63333, 61.05"
	}),
	new Geo({
		IataCode: "YQD",
		Location: "-101.09111, 53.97139"
	}),
	new Geo({
		IataCode: "YQF",
		Location: "-113.893334, 52.176944"
	}),
	new Geo({
		IataCode: "YQG",
		Location: "-82.960596, 42.266702"
	}),
	new Geo({
		IataCode: "YQK",
		Location: "-94.358333, 49.7875"
	}),
	new Geo({
		IataCode: "YQL",
		Location: "-112.791668, 49.631944"
	}),
	new Geo({
		IataCode: "YQQ",
		Location: "-124.893333, 49.716667"
	}),
	new Geo({
		IataCode: "YQR",
		Location: "-104.653333, 50.433333"
	}),
	new Geo({
		IataCode: "YQT",
		Location: "-89.323889, 48.371944"
	}),
	new Geo({
		IataCode: "YQU",
		Location: "-118.894445, 55.184167"
	}),
	new Geo({
		IataCode: "YQX",
		Location: "-54.563333, 48.946667"
	}),
	new Geo({
		IataCode: "YQY",
		Location: "-60.05, 46.166667"
	}),
	new Geo({
		IataCode: "YQZ",
		Location: "-122.509722, 53.026667"
	}),
	new Geo({
		IataCode: "YRA",
		Location: "-117.416039, 64.129184"
	}),
	new Geo({
		IataCode: "YRB",
		Location: "-94.966667, 74.716667"
	}),
	new Geo({
		IataCode: "YRG",
		Location: "-58.416667, 54.333333"
	}),
	new Geo({
		IataCode: "YRL",
		Location: "-93.816667, 51.05"
	}),
	new Geo({
		IataCode: "YRS",
		Location: "-93.560534, 54.16732"
	}),
	new Geo({
		IataCode: "YRT",
		Location: "-92.108774, 62.808519"
	}),
	new Geo({
		IataCode: "YSB",
		Location: "-80.8, 46.616667"
	}),
	new Geo({
		IataCode: "YSF",
		Location: "-105.833333, 59.25"
	}),
	new Geo({
		IataCode: "YSG",
		Location: "-110.075557, 62.418611"
	}),
	new Geo({
		IataCode: "YSJ",
		Location: "-65.883333, 45.316667"
	}),
	new Geo({
		IataCode: "YSK",
		Location: "-79.216667, 56.55"
	}),
	new Geo({
		IataCode: "YSM",
		Location: "-111.96667, 60.016667"
	}),
	new Geo({
		IataCode: "YSO",
		Location: "-59.966667, 54.916667"
	}),
	new Geo({
		IataCode: "YST",
		Location: "-94.8519, 53.8456"
	}),
	new Geo({
		IataCode: "YZG",
		Location: "-75.633333, 62.2"
	}),
	new Geo({
		IataCode: "YSY",
		Location: "-125.246887, 71.99088"
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
		Location: "-74.755278, 46.515556"
	}),
	new Geo({
		IataCode: "YHM",
		Location: "-79.930556, 43.166944"
	}),
	new Geo({
		IataCode: "YKF",
		Location: "-80.378611, 43.460833"
	}),
	new Geo({
		IataCode: "YTZ",
		Location: "-79.39617, 43.6275"
	}),
	new Geo({
		IataCode: "YYZ",
		Location: "-79.633333, 43.683333"
	}),
	new Geo({
		IataCode: "YTQ",
		Location: "-69.95729, 58.66712"
	}),
	new Geo({
		IataCode: "YTS",
		Location: "-81.366667, 48.566667"
	}),
	new Geo({
		IataCode: "YUB",
		Location: "-133.034477, 69.429103"
	}),
	new Geo({
		IataCode: "YUD",
		Location: "-76.55, 56.55"
	}),
	new Geo({
		IataCode: "YUT",
		Location: "-86.229873, 66.524748"
	}),
	new Geo({
		IataCode: "YUX",
		Location: "-81.25, 68.783333"
	}),
	new Geo({
		IataCode: "YUY",
		Location: "-78.830556, 48.205556"
	}),
	new Geo({
		IataCode: "YVB",
		Location: "-65.483333, 48.05"
	}),
	new Geo({
		IataCode: "YVC",
		Location: "-105.261944, 55.151389"
	}),
	new Geo({
		IataCode: "YVM",
		Location: "-63.833333, 67.583333"
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
		Location: "-126.8, 65.283333"
	}),
	new Geo({
		IataCode: "CXH",
		Location: "-123.10404, 49.29851"
	}),
	new Geo({
		IataCode: "YDT",
		Location: "-123.183333, 49.183333"
	}),
	new Geo({
		IataCode: "YVR",
		Location: "-123.185278, 49.187222"
	}),
	new Geo({
		IataCode: "YVZ",
		Location: "-94.0614, 52.6558"
	}),
	new Geo({
		IataCode: "YWB",
		Location: "-71.95, 61.6"
	}),
	new Geo({
		IataCode: "YWJ",
		Location: "-123.41667, 65.183333"
	}),
	new Geo({
		IataCode: "YWK",
		Location: "-66.9, 52.95"
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
		Location: "-122.966667, 50.15"
	}),
	new Geo({
		IataCode: "YWY",
		Location: "-123.436667, 63.209722"
	}),
	new Geo({
		IataCode: "YXC",
		Location: "-115.78194, 49.61222"
	}),
	new Geo({
		IataCode: "YXE",
		Location: "-106.683333, 52.166667"
	}),
	new Geo({
		IataCode: "YXH",
		Location: "-110.720834, 50.015833"
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
		Location: "-122.67849, 53.88694"
	}),
	new Geo({
		IataCode: "YXT",
		Location: "-128.574444, 54.465556"
	}),
	new Geo({
		IataCode: "YXU",
		Location: "-81.15, 43.04"
	}),
	new Geo({
		IataCode: "YXX",
		Location: "-122.361944, 49.025556"
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
		Location: "-114.021263, 51.114084"
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
		Location: "-93.521118, 69.536198"
	}),
	new Geo({
		IataCode: "YWH",
		Location: "-123.370628, 48.423989"
	}),
	new Geo({
		IataCode: "YYJ",
		Location: "-123.423611, 48.648611"
	}),
	new Geo({
		IataCode: "YYQ",
		Location: "-94.065, 58.739167"
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
		Location: "-83.366667, 64.2"
	}),
	new Geo({
		IataCode: "YZT",
		Location: "-127.363889, 50.680556"
	}),
	new Geo({
		IataCode: "YZV",
		Location: "-66.265556, 50.223333"
	}),
	new Geo({
		IataCode: "YZZ",
		Location: "-117.609167, 49.055556"
	}),
	new Geo({
		IataCode: "ZAC",
		Location: "-96.089167, 56.089444"
	}),
	new Geo({
		IataCode: "ZBF",
		Location: "-65.738889, 47.629772"
	}),
	new Geo({
		IataCode: "ZEL",
		Location: "-128.15552, 52.18156"
	}),
	new Geo({
		IataCode: "ZEM",
		Location: "-78.5225, 52.226389"
	}),
	new Geo({
		IataCode: "ZFM",
		Location: "-134.860278, 67.407778"
	}),
	new Geo({
		IataCode: "ZFN",
		Location: "-125.566668, 64.916667"
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
		Location: "-60.673889, 50.259722"
	}),
	new Geo({
		IataCode: "ZKE",
		Location: "-81.677778, 52.2825"
	}),
	new Geo({
		IataCode: "ZKG",
		Location: "-61.265833, 50.195833"
	}),
	new Geo({
		IataCode: "ZLT",
		Location: "-58.975556, 50.830833"
	}),
	new Geo({
		IataCode: "ZMT",
		Location: "-132.125278, 54.0275"
	}),
	new Geo({
		IataCode: "ZPB",
		Location: "-92.196389, 53.891111"
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
		Location: "-59.383611, 50.674444"
	}),
	new Geo({
		IataCode: "ZTM",
		Location: "-92.081389, 55.865556"
	}),
	new Geo({
		IataCode: "ZUM",
		Location: "-64.106389, 53.561944"
	}),
	new Geo({
		IataCode: "ZWL",
		Location: "-103.173294, 58.106729"
	}),
	new Geo({
		IataCode: "ACA",
		Location: "-99.766944, 16.755556"
	}),
	new Geo({
		IataCode: "AGU",
		Location: "-102.316667, 21.7"
	}),
	new Geo({
		IataCode: "BJX",
		Location: "-101.47831, 20.987847"
	}),
	new Geo({
		IataCode: "CEN",
		Location: "-109.839167, 27.391944"
	}),
	new Geo({
		IataCode: "CJS",
		Location: "-106.42902, 31.63599"
	}),
	new Geo({
		IataCode: "CLQ",
		Location: "-103.5775, 19.276944"
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
		Location: "-88.326847, 18.504667"
	}),
	new Geo({
		IataCode: "CUA",
		Location: "-111.611643, 25.050419"
	}),
	new Geo({
		IataCode: "CUL",
		Location: "-107.474168, 24.764444"
	}),
	new Geo({
		IataCode: "CUN",
		Location: "-86.866667, 21.033333"
	}),
	new Geo({
		IataCode: "CUU",
		Location: "-105.964444, 28.702778"
	}),
	new Geo({
		IataCode: "CVM",
		Location: "-98.965278, 23.713889"
	}),
	new Geo({
		IataCode: "CZM",
		Location: "-86.933333, 20.516667"
	}),
	new Geo({
		IataCode: "DGO",
		Location: "-104.525, 24.125"
	}),
	new Geo({
		IataCode: "GDL",
		Location: "-103.3125, 20.523889"
	}),
	new Geo({
		IataCode: "GUB",
		Location: "-114.023494, 28.025482"
	}),
	new Geo({
		IataCode: "GYM",
		Location: "-110.922504, 27.968719"
	}),
	new Geo({
		IataCode: "HMO",
		Location: "-111.046111, 29.096389"
	}),
	new Geo({
		IataCode: "HUX",
		Location: "-96.235556, 15.768333"
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
		Location: "-110.298333, 24.125556"
	}),
	new Geo({
		IataCode: "LMM",
		Location: "-109.080833, 25.685278"
	}),
	new Geo({
		IataCode: "LTO",
		Location: "-111.35, 25.983333"
	}),
	new Geo({
		IataCode: "LZC",
		Location: "-102.216667, 18"
	}),
	new Geo({
		IataCode: "MAM",
		Location: "-97.523611, 25.770278"
	}),
	new Geo({
		IataCode: "MEX",
		Location: "-99.072778, 19.435278"
	}),
	new Geo({
		IataCode: "MID",
		Location: "-89.65, 20.933333"
	}),
	new Geo({
		IataCode: "MLM",
		Location: "-101.016667, 19.833333"
	}),
	new Geo({
		IataCode: "MTT",
		Location: "-94.580556, 18.103333"
	}),
	new Geo({
		IataCode: "MTY",
		Location: "-100.1, 25.766667"
	}),
	new Geo({
		IataCode: "MXL",
		Location: "-115.233333, 32.633333"
	}),
	new Geo({
		IataCode: "MZT",
		Location: "-106.27028, 23.166837"
	}),
	new Geo({
		IataCode: "NLD",
		Location: "-99.566667, 27.434722"
	}),
	new Geo({
		IataCode: "OAX",
		Location: "-96.733333, 17"
	}),
	new Geo({
		IataCode: "PAZ",
		Location: "-97.460833, 20.602778"
	}),
	new Geo({
		IataCode: "PBC",
		Location: "-98.3675, 19.135"
	}),
	new Geo({
		IataCode: "PCM",
		Location: "-87.082199, 20.6225"
	}),
	new Geo({
		IataCode: "PDS",
		Location: "-100.534086, 28.628377"
	}),
	new Geo({
		IataCode: "PNO",
		Location: "-98.069444, 16.3425"
	}),
	new Geo({
		IataCode: "PQM",
		Location: "-91.996422, 17.531767"
	}),
	new Geo({
		IataCode: "PVR",
		Location: "-105.265, 20.686667"
	}),
	new Geo({
		IataCode: "PXM",
		Location: "-97.069359, 15.865581"
	}),
	new Geo({
		IataCode: "QRO",
		Location: "-100.190001, 20.62"
	}),
	new Geo({
		IataCode: "REX",
		Location: "-98.23, 26.0125"
	}),
	new Geo({
		IataCode: "SFH",
		Location: "-114.809, 30.9302"
	}),
	new Geo({
		IataCode: "SJD",
		Location: "-109.7, 23.166667"
	}),
	new Geo({
		IataCode: "SLP",
		Location: "-100.988333, 22.177222"
	}),
	new Geo({
		IataCode: "SLW",
		Location: "-100.916667, 25.55"
	}),
	new Geo({
		IataCode: "TAM",
		Location: "-97.866383, 22.297514"
	}),
	new Geo({
		IataCode: "TAP",
		Location: "-92.37, 14.794444"
	}),
	new Geo({
		IataCode: "TGZ",
		Location: "-93.026111, 16.561944"
	}),
	new Geo({
		IataCode: "TIJ",
		Location: "-116.970278, 32.541389"
	}),
	new Geo({
		IataCode: "TLC",
		Location: "-99.566111, 19.336944"
	}),
	new Geo({
		IataCode: "TPQ",
		Location: "-104.8425, 21.419444"
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
		Location: "-92.8175, 17.996944"
	}),
	new Geo({
		IataCode: "ZCL",
		Location: "-102.686944, 22.897222"
	}),
	new Geo({
		IataCode: "ZIH",
		Location: "-101.555278, 17.643333"
	}),
	new Geo({
		IataCode: "ZLO",
		Location: "-104.558631, 19.144778"
	}),
	new Geo({
		IataCode: "FSP",
		Location: "-56.200562, 46.786897"
	}),
	new Geo({
		IataCode: "ABE",
		Location: "-75.438333, 40.654722"
	}),
	new Geo({
		IataCode: "ABI",
		Location: "-99.679722, 32.409444"
	}),
	new Geo({
		IataCode: "ABL",
		Location: "-157.845833, 67.0875"
	}),
	new Geo({
		IataCode: "ABQ",
		Location: "-106.609268, 35.042084"
	}),
	new Geo({
		IataCode: "ABR",
		Location: "-98.426111, 45.4525"
	}),
	new Geo({
		IataCode: "ABY",
		Location: "-84.196111, 31.532222"
	}),
	new Geo({
		IataCode: "ACK",
		Location: "-70.059722, 41.256667"
	}),
	new Geo({
		IataCode: "ACT",
		Location: "-97.230278, 31.607778"
	}),
	new Geo({
		IataCode: "ACV",
		Location: "-124.1075, 40.979167"
	}),
	new Geo({
		IataCode: "ADK",
		Location: "-176.644722, 51.882778"
	}),
	new Geo({
		IataCode: "ADQ",
		Location: "-152.483333, 57.754167"
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
		Location: "-92.55, 31.333333"
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
		Location: "-81.966944, 33.366389"
	}),
	new Geo({
		IataCode: "AIA",
		Location: "-102.806625, 42.050567"
	}),
	new Geo({
		IataCode: "AIN",
		Location: "-160.033333, 70.633333"
	}),
	new Geo({
		IataCode: "ACY",
		Location: "-74.583333, 39.45"
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
		Location: "-81.441667, 40.913889"
	}),
	new Geo({
		IataCode: "ALB",
		Location: "-73.805278, 42.745833"
	}),
	new Geo({
		IataCode: "ALO",
		Location: "-92.399722, 42.556111"
	}),
	new Geo({
		IataCode: "ALS",
		Location: "-105.865288, 37.436975"
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
		Location: "-101.705589, 35.221082"
	}),
	new Geo({
		IataCode: "ANC",
		Location: "-149.985278, 61.169167"
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
		Location: "-76.021389, 43.990833"
	}),
	new Geo({
		IataCode: "ASE",
		Location: "-106.86985, 39.224275"
	}),
	new Geo({
		IataCode: "ATK",
		Location: "-157.333333, 70.5"
	}),
	new Geo({
		IataCode: "ATL",
		Location: "-84.427222, 33.640833"
	}),
	new Geo({
		IataCode: "PDK",
		Location: "-84.30456, 33.87737"
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
		Location: "-97.666667, 30.2"
	}),
	new Geo({
		IataCode: "AUW",
		Location: "-89.623056, 44.923333"
	}),
	new Geo({
		IataCode: "CWA",
		Location: "-89.659167, 44.782222"
	}),
	new Geo({
		IataCode: "AVL",
		Location: "-82.541111, 35.435"
	}),
	new Geo({
		IataCode: "AVP",
		Location: "-75.725833, 41.339167"
	}),
	new Geo({
		IataCode: "CIB",
		Location: "-118.413889, 33.406111"
	}),
	new Geo({
		IataCode: "AZO",
		Location: "-85.553611, 42.236389"
	}),
	new Geo({
		IataCode: "BET",
		Location: "-161.831389, 60.784444"
	}),
	new Geo({
		IataCode: "BFD",
		Location: "-78.639444, 41.802222"
	}),
	new Geo({
		IataCode: "BFF",
		Location: "-103.595924, 41.873907"
	}),
	new Geo({
		IataCode: "BFL",
		Location: "-119.052222, 35.43"
	}),
	new Geo({
		IataCode: "BGM",
		Location: "-75.969167, 42.201389"
	}),
	new Geo({
		IataCode: "BGR",
		Location: "-68.827778, 44.807778"
	}),
	new Geo({
		IataCode: "BHB",
		Location: "-68.361667, 44.448889"
	}),
	new Geo({
		IataCode: "BHM",
		Location: "-86.755556, 33.563056"
	}),
	new Geo({
		IataCode: "BIL",
		Location: "-108.548012, 45.810376"
	}),
	new Geo({
		IataCode: "BIS",
		Location: "-100.745833, 46.772778"
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
		Location: "-114.859351, 35.946668"
	}),
	new Geo({
		IataCode: "BLI",
		Location: "-122.534722, 48.794444"
	}),
	new Geo({
		IataCode: "BLV",
		Location: "-89.853058, 38.542594"
	}),
	new Geo({
		IataCode: "BMG",
		Location: "-86.614722, 39.14"
	}),
	new Geo({
		IataCode: "BMI",
		Location: "-88.9275, 40.481944"
	}),
	new Geo({
		IataCode: "BNA",
		Location: "-86.681944, 36.126667"
	}),
	new Geo({
		IataCode: "BNW",
		Location: "-93.883333, 42.066667"
	}),
	new Geo({
		IataCode: "BOI",
		Location: "-116.226425, 43.562481"
	}),
	new Geo({
		IataCode: "BOS",
		Location: "-71.005278, 42.365"
	}),
	new Geo({
		IataCode: "BPT",
		Location: "-94.02, 29.950833"
	}),
	new Geo({
		IataCode: "BRD",
		Location: "-94.1375, 46.397222"
	}),
	new Geo({
		IataCode: "BRL",
		Location: "-91.123333, 40.786111"
	}),
	new Geo({
		IataCode: "BRO",
		Location: "-97.423333, 25.908889"
	}),
	new Geo({
		IataCode: "BRW",
		Location: "-156.769444, 71.283333"
	}),
	new Geo({
		IataCode: "BSF",
		Location: "-157.75, 21.383333"
	}),
	new Geo({
		IataCode: "BTI",
		Location: "-143.578333, 70.134722"
	}),
	new Geo({
		IataCode: "BTM",
		Location: "-112.493889, 45.951111"
	}),
	new Geo({
		IataCode: "BTR",
		Location: "-91.150556, 30.531667"
	}),
	new Geo({
		IataCode: "BTT",
		Location: "-151.526389, 66.915278"
	}),
	new Geo({
		IataCode: "BTV",
		Location: "-73.153056, 44.472778"
	}),
	new Geo({
		IataCode: "BUF",
		Location: "-78.736389, 42.941111"
	}),
	new Geo({
		IataCode: "BUR",
		Location: "-118.357778, 34.2"
	}),
	new Geo({
		IataCode: "MTN",
		Location: "-76.411667, 39.321667"
	}),
	new Geo({
		IataCode: "BZN",
		Location: "-111.151772, 45.77782"
	}),
	new Geo({
		IataCode: "CAE",
		Location: "-81.115833, 33.936389"
	}),
	new Geo({
		IataCode: "CCB",
		Location: "-117.688889, 34.113889"
	}),
	new Geo({
		IataCode: "CCR",
		Location: "-122.055556, 37.988889"
	}),
	new Geo({
		IataCode: "CDB",
		Location: "-162.719722, 55.199722"
	}),
	new Geo({
		IataCode: "CDC",
		Location: "-113.097382, 37.701479"
	}),
	new Geo({
		IataCode: "CDR",
		Location: "-103.097076, 42.835192"
	}),
	new Geo({
		IataCode: "CDV",
		Location: "-145.47, 60.493056"
	}),
	new Geo({
		IataCode: "CKU",
		Location: "-145.75, 60.55"
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
		Location: "-108.628006, 37.302733"
	}),
	new Geo({
		IataCode: "CGA",
		Location: "-133.146111, 55.479167"
	}),
	new Geo({
		IataCode: "CGI",
		Location: "-89.571667, 37.223611"
	}),
	new Geo({
		IataCode: "CHA",
		Location: "-85.203611, 35.036389"
	}),
	new Geo({
		IataCode: "DPA",
		Location: "-88.246389, 41.914444"
	}),
	new Geo({
		IataCode: "MDW",
		Location: "-87.751944, 41.785"
	}),
	new Geo({
		IataCode: "ORD",
		Location: "-87.906111, 41.978056"
	}),
	new Geo({
		IataCode: "PWK",
		Location: "-87.908889, 41.980833"
	}),
	new Geo({
		IataCode: "RFD",
		Location: "-89.097222, 42.195278"
	}),
	new Geo({
		IataCode: "CHO",
		Location: "-78.453056, 38.141389"
	}),
	new Geo({
		IataCode: "CHS",
		Location: "-80.038889, 32.899167"
	}),
	new Geo({
		IataCode: "CHU",
		Location: "-159, 61.833333"
	}),
	new Geo({
		IataCode: "CID",
		Location: "-91.706111, 41.884444"
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
		Location: "-80.229444, 39.295556"
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
		IataCode: "BKL",
		Location: "-81.683333, 41.516944"
	}),
	new Geo({
		IataCode: "CLE",
		Location: "-81.848056, 41.411944"
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
		Location: "-80.935833, 35.219167"
	}),
	new Geo({
		IataCode: "CMH",
		Location: "-82.878333, 39.991111"
	}),
	new Geo({
		IataCode: "LCK",
		Location: "-82.933333, 39.816667"
	}),
	new Geo({
		IataCode: "CMI",
		Location: "-88.279722, 40.039722"
	}),
	new Geo({
		IataCode: "CMX",
		Location: "-88.486389, 47.167778"
	}),
	new Geo({
		IataCode: "CNM",
		Location: "-104.262778, 32.337222"
	}),
	new Geo({
		IataCode: "CNY",
		Location: "-109.746112, 38.759444"
	}),
	new Geo({
		IataCode: "COD",
		Location: "-109.025917, 44.519031"
	}),
	new Geo({
		IataCode: "COS",
		Location: "-104.70108, 38.803865"
	}),
	new Geo({
		IataCode: "COU",
		Location: "-92.219167, 38.813611"
	}),
	new Geo({
		IataCode: "CPR",
		Location: "-106.462669, 42.903382"
	}),
	new Geo({
		IataCode: "CRP",
		Location: "-97.501389, 27.772222"
	}),
	new Geo({
		IataCode: "CRW",
		Location: "-81.593056, 38.372778"
	}),
	new Geo({
		IataCode: "CSG",
		Location: "-84.941483, 32.513815"
	}),
	new Geo({
		IataCode: "MKF",
		Location: "-84.983333, 32.466667"
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
		Location: "-84.668611, 39.047778"
	}),
	new Geo({
		IataCode: "LUK",
		Location: "-84.666667, 39.033333"
	}),
	new Geo({
		IataCode: "CVN",
		Location: "-103.079224, 34.427302"
	}),
	new Geo({
		IataCode: "CXF",
		Location: "-150.166667, 67.266667"
	}),
	new Geo({
		IataCode: "CYF",
		Location: "-164.2, 60.216667"
	}),
	new Geo({
		IataCode: "CYS",
		Location: "-104.818153, 41.156686"
	}),
	new Geo({
		IataCode: "CZN",
		Location: "-142.05, 62.070833"
	}),
	new Geo({
		IataCode: "DAB",
		Location: "-81.052778, 29.1825"
	}),
	new Geo({
		IataCode: "DAN",
		Location: "-79.335, 36.573056"
	}),
	new Geo({
		IataCode: "DAY",
		Location: "-84.221111, 39.9"
	}),
	new Geo({
		IataCode: "DBQ",
		Location: "-90.710833, 42.41"
	}),
	new Geo({
		IataCode: "DDC",
		Location: "-99.965, 37.761667"
	}),
	new Geo({
		IataCode: "DEC",
		Location: "-88.868611, 39.834167"
	}),
	new Geo({
		IataCode: "DEN",
		Location: "-104.675331, 39.862317"
	}),
	new Geo({
		IataCode: "DAL",
		Location: "-96.853333, 32.846944"
	}),
	new Geo({
		IataCode: "DFW",
		Location: "-97.029723, 32.894444"
	}),
	new Geo({
		IataCode: "DHN",
		Location: "-85.448333, 31.32"
	}),
	new Geo({
		IataCode: "DIK",
		Location: "-102.9, 46.833333"
	}),
	new Geo({
		IataCode: "DJN",
		Location: "-145.71722, 64.05028"
	}),
	new Geo({
		IataCode: "DLG",
		Location: "-158.5, 59.05"
	}),
	new Geo({
		IataCode: "DLH",
		Location: "-92.190278, 46.8425"
	}),
	new Geo({
		IataCode: "LKI",
		Location: "-92.1, 46.783333"
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
		Location: "-107.75322, 37.153202"
	}),
	new Geo({
		IataCode: "DRT",
		Location: "-100.92041, 29.374397"
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
		IataCode: "DET",
		Location: "-83.016667, 42.416667"
	}),
	new Geo({
		IataCode: "DTW",
		Location: "-83.348611, 42.218611"
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
		Location: "-106.919975, 39.642446"
	}),
	new Geo({
		IataCode: "EGX",
		Location: "-157.375202, 58.187719"
	}),
	new Geo({
		IataCode: "EKO",
		Location: "-115.789722, 40.823889"
	}),
	new Geo({
		IataCode: "ELD",
		Location: "-92.814722, 33.220556"
	}),
	new Geo({
		IataCode: "ELI",
		Location: "-162.270278, 64.613611"
	}),
	new Geo({
		IataCode: "ELM",
		Location: "-76.895278, 42.160833"
	}),
	new Geo({
		IataCode: "ELP",
		Location: "-106.398611, 31.801111"
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
		Location: "-71.133333, 44.783333"
	}),
	new Geo({
		IataCode: "ERV",
		Location: "-99.085007, 29.984379"
	}),
	new Geo({
		IataCode: "ESC",
		Location: "-87.086667, 45.720556"
	}),
	new Geo({
		IataCode: "DHB",
		Location: "-123.007865, 48.618343"
	}),
	new Geo({
		IataCode: "ESD",
		Location: "-122.9125, 48.708333"
	}),
	new Geo({
		IataCode: "EUG",
		Location: "-123.2175, 44.120833"
	}),
	new Geo({
		IataCode: "EVV",
		Location: "-87.5325, 38.036667"
	}),
	new Geo({
		IataCode: "EWB",
		Location: "-70.959167, 41.676944"
	}),
	new Geo({
		IataCode: "EWN",
		Location: "-77.0425, 35.073611"
	}),
	new Geo({
		IataCode: "EXI",
		Location: "-135.447222, 58.420833"
	}),
	new Geo({
		IataCode: "EYW",
		Location: "-81.759722, 24.556111"
	}),
	new Geo({
		IataCode: "FAI",
		Location: "-147.862778, 64.814444"
	}),
	new Geo({
		IataCode: "FAM",
		Location: "-90.428681, 37.761809"
	}),
	new Geo({
		IataCode: "FAR",
		Location: "-96.814722, 46.915556"
	}),
	new Geo({
		IataCode: "FAT",
		Location: "-119.713611, 36.771111"
	}),
	new Geo({
		IataCode: "FAY",
		Location: "-78.881111, 34.989444"
	}),
	new Geo({
		IataCode: "FBS",
		Location: "-123.006111, 48.543611"
	}),
	new Geo({
		IataCode: "FCA",
		Location: "-114.252663, 48.312885"
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
		Location: "-80.151667, 26.074167"
	}),
	new Geo({
		IataCode: "FXE",
		Location: "-80.17032, 26.19758"
	}),
	new Geo({
		IataCode: "FLO",
		Location: "-79.724444, 34.188889"
	}),
	new Geo({
		IataCode: "FMN",
		Location: "-108.230095, 36.741085"
	}),
	new Geo({
		IataCode: "FMY",
		Location: "-81.866667, 26.583333"
	}),
	new Geo({
		IataCode: "RSW",
		Location: "-81.755167, 26.536167"
	}),
	new Geo({
		IataCode: "FNT",
		Location: "-83.741667, 42.966667"
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
		Location: "-96.740833, 43.578889"
	}),
	new Geo({
		IataCode: "FSM",
		Location: "-94.37, 35.336111"
	}),
	new Geo({
		IataCode: "FWA",
		Location: "-85.1881, 40.9783"
	}),
	new Geo({
		IataCode: "FYU",
		Location: "-145.208333, 66.581111"
	}),
	new Geo({
		IataCode: "FYV",
		Location: "-94.17, 36.003611"
	}),
	new Geo({
		IataCode: "XNA",
		Location: "-94.306667, 36.281667"
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
		Location: "-105.542221, 44.348159"
	}),
	new Geo({
		IataCode: "GCK",
		Location: "-100.729722, 37.928611"
	}),
	new Geo({
		IataCode: "FLG",
		Location: "-111.669167, 35.140278"
	}),
	new Geo({
		IataCode: "GCN",
		Location: "-112.145004, 35.955221"
	}),
	new Geo({
		IataCode: "GDH",
		Location: "-158.166667, 59.716667"
	}),
	new Geo({
		IataCode: "GDV",
		Location: "-104.806137, 47.138826"
	}),
	new Geo({
		IataCode: "GEG",
		Location: "-117.537222, 47.616944"
	}),
	new Geo({
		IataCode: "GFK",
		Location: "-97.178611, 47.951944"
	}),
	new Geo({
		IataCode: "GGG",
		Location: "-94.715278, 32.386667"
	}),
	new Geo({
		IataCode: "GGW",
		Location: "-106.616135, 48.212091"
	}),
	new Geo({
		IataCode: "GJT",
		Location: "-108.515053, 39.118608"
	}),
	new Geo({
		IataCode: "GLH",
		Location: "-90.985, 33.484444"
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
		Location: "-82.275833, 29.689722"
	}),
	new Geo({
		IataCode: "GPT",
		Location: "-89.070278, 30.406111"
	}),
	new Geo({
		IataCode: "GRB",
		Location: "-88.130556, 44.488056"
	}),
	new Geo({
		IataCode: "GRI",
		Location: "-98.306667, 40.967222"
	}),
	new Geo({
		IataCode: "GRN",
		Location: "-102.200001, 42.8"
	}),
	new Geo({
		IataCode: "GRR",
		Location: "-85.524167, 42.881111"
	}),
	new Geo({
		IataCode: "GSO",
		Location: "-79.942778, 36.091944"
	}),
	new Geo({
		IataCode: "GSP",
		Location: "-82.21859, 34.896069"
	}),
	new Geo({
		IataCode: "GST",
		Location: "-135.705, 58.4275"
	}),
	new Geo({
		IataCode: "GTF",
		Location: "-111.361885, 47.484265"
	}),
	new Geo({
		IataCode: "GTP",
		Location: "-123.387999, 42.510111"
	}),
	new Geo({
		IataCode: "GUC",
		Location: "-106.939888, 38.532859"
	}),
	new Geo({
		IataCode: "HAR",
		Location: "-76.852222, 40.216111"
	}),
	new Geo({
		IataCode: "MDT",
		Location: "-76.762222, 40.193056"
	}),
	new Geo({
		IataCode: "HCR",
		Location: "-159.771667, 62.188889"
	}),
	new Geo({
		IataCode: "HDN",
		Location: "-107.221756, 40.482471"
	}),
	new Geo({
		IataCode: "BDL",
		Location: "-72.683333, 41.938611"
	}),
	new Geo({
		IataCode: "HFD",
		Location: "-72.65, 41.733056"
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
		Location: "-93.20055, 36.53208"
	}),
	new Geo({
		IataCode: "HLN",
		Location: "-111.981239, 46.605582"
	}),
	new Geo({
		IataCode: "HNH",
		Location: "-135.403333, 58.098056"
	}),
	new Geo({
		IataCode: "HIK",
		Location: "-157.866667, 21.316667"
	}),
	new Geo({
		IataCode: "HNL",
		Location: "-157.921667, 21.325833"
	}),
	new Geo({
		IataCode: "HNM",
		Location: "-156.018889, 20.795833"
	}),
	new Geo({
		IataCode: "HNS",
		Location: "-135.518889, 59.245833"
	}),
	new Geo({
		IataCode: "HOB",
		Location: "-103.216944, 32.688611"
	}),
	new Geo({
		IataCode: "HOM",
		Location: "-151.476389, 59.645278"
	}),
	new Geo({
		IataCode: "HOT",
		Location: "-93.096112, 34.478889"
	}),
	new Geo({
		IataCode: "HOU",
		Location: "-95.278611, 29.645"
	}),
	new Geo({
		IataCode: "IAH",
		Location: "-95.34, 29.983333"
	}),
	new Geo({
		IataCode: "HPB",
		Location: "-166.145278, 61.525"
	}),
	new Geo({
		IataCode: "HPN",
		Location: "-73.707778, 41.068889"
	}),
	new Geo({
		IataCode: "HRL",
		Location: "-97.65, 26.233333"
	}),
	new Geo({
		IataCode: "HRO",
		Location: "-93.155556, 36.261667"
	}),
	new Geo({
		IataCode: "HSL",
		Location: "-156.375, 65.7025"
	}),
	new Geo({
		IataCode: "HSV",
		Location: "-86.775556, 34.642778"
	}),
	new Geo({
		IataCode: "HTS",
		Location: "-82.556111, 38.366944"
	}),
	new Geo({
		IataCode: "HUS",
		Location: "-154.263333, 66.040556"
	}),
	new Geo({
		IataCode: "HVN",
		Location: "-72.888333, 41.265278"
	}),
	new Geo({
		IataCode: "HVR",
		Location: "-109.761314, 48.542296"
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
		Location: "-132.646265, 55.48182"
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
		Location: "-160.430556, 66.975556"
	}),
	new Geo({
		IataCode: "ICT",
		Location: "-97.428333, 37.6525"
	}),
	new Geo({
		IataCode: "IDA",
		Location: "-112.07119, 43.515693"
	}),
	new Geo({
		IataCode: "IFP",
		Location: "-114.559444, 35.156111"
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
		IataCode: "GRK",
		Location: "-97.822952, 31.059846"
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
		Location: "-86.281667, 39.728889"
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
		Location: "-92.543889, 40.0925"
	}),
	new Geo({
		IataCode: "ISN",
		Location: "-103.636111, 48.176111"
	}),
	new Geo({
		IataCode: "ISP",
		Location: "-73.100278, 40.795278"
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
		Location: "-110.737724, 43.606996"
	}),
	new Geo({
		IataCode: "JAN",
		Location: "-90.075188, 32.314121"
	}),
	new Geo({
		IataCode: "JAX",
		Location: "-81.689722, 30.4925"
	}),
	new Geo({
		IataCode: "JBR",
		Location: "-90.648333, 35.83"
	}),
	new Geo({
		IataCode: "JHM",
		Location: "-156.676667, 20.964722"
	}),
	new Geo({
		IataCode: "JHW",
		Location: "-79.258056, 42.150556"
	}),
	new Geo({
		IataCode: "JLN",
		Location: "-94.497778, 37.149722"
	}),
	new Geo({
		IataCode: "JMS",
		Location: "-98.678333, 46.93"
	}),
	new Geo({
		IataCode: "JNU",
		Location: "-134.574722, 58.355556"
	}),
	new Geo({
		IataCode: "JST",
		Location: "-78.834444, 40.316667"
	}),
	new Geo({
		IataCode: "KAE",
		Location: "-133.917332, 56.963977"
	}),
	new Geo({
		IataCode: "KAL",
		Location: "-158.736111, 64.321944"
	}),
	new Geo({
		IataCode: "KBC",
		Location: "-145.8, 66.266667"
	}),
	new Geo({
		IataCode: "KCC",
		Location: "-132.833333, 55.983333"
	}),
	new Geo({
		IataCode: "KCG",
		Location: "-158.373611, 56.310833"
	}),
	new Geo({
		IataCode: "KCL",
		Location: "-158.536577, 56.311395"
	}),
	new Geo({
		IataCode: "KCQ",
		Location: "-158.775702, 56.255462"
	}),
	new Geo({
		IataCode: "KEB",
		Location: "-151.922222, 59.352778"
	}),
	new Geo({
		IataCode: "KEH",
		Location: "-122.259979, 47.75655"
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
		Location: "-154, 57.533333"
	}),
	new Geo({
		IataCode: "KLW",
		Location: "-133.101554, 55.554612"
	}),
	new Geo({
		IataCode: "KMO",
		Location: "-159.035833, 58.984444"
	}),
	new Geo({
		IataCode: "KMY",
		Location: "-154.14583, 57.02556"
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
		Location: "-156.05, 19.733333"
	}),
	new Geo({
		IataCode: "KOT",
		Location: "-163.560278, 63.029722"
	}),
	new Geo({
		IataCode: "KOY",
		Location: "-154.2275, 57.162222"
	}),
	new Geo({
		IataCode: "KOZ",
		Location: "-152.507057, 57.921777"
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
		Location: "-159.157133, 55.908761"
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
		Location: "-131.712084, 55.355843"
	}),
	new Geo({
		IataCode: "WFB",
		Location: "-131.668333, 55.358056"
	}),
	new Geo({
		IataCode: "KTS",
		Location: "-166.471667, 65.329444"
	}),
	new Geo({
		IataCode: "KUK",
		Location: "-162.52472, 60.87194"
	}),
	new Geo({
		IataCode: "KVC",
		Location: "-162.313333, 55.055"
	}),
	new Geo({
		IataCode: "KVL",
		Location: "-164.547222, 67.731667"
	}),
	new Geo({
		IataCode: "KWF",
		Location: "-133.241667, 55.297222"
	}),
	new Geo({
		IataCode: "KWK",
		Location: "-163.133333, 59.833333"
	}),
	new Geo({
		IataCode: "KWN",
		Location: "-161.833333, 59.761111"
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
		Location: "-82.014722, 27.988889"
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
		Location: "-105.670624, 41.31495"
	}),
	new Geo({
		IataCode: "LAS",
		Location: "-115.15225, 36.080056"
	}),
	new Geo({
		IataCode: "LAW",
		Location: "-98.416111, 34.569722"
	}),
	new Geo({
		IataCode: "CCD",
		Location: "-118.266667, 34.066667"
	}),
	new Geo({
		IataCode: "LAX",
		Location: "-118.407222, 33.942222"
	}),
	new Geo({
		IataCode: "LBB",
		Location: "-101.822778, 33.662222"
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
		Location: "-100.960556, 37.044444"
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
		Location: "-84.602222, 38.039722"
	}),
	new Geo({
		IataCode: "LFT",
		Location: "-91.9875, 30.204722"
	}),
	new Geo({
		IataCode: "LGB",
		Location: "-118.151111, 33.8175"
	}),
	new Geo({
		IataCode: "LIH",
		Location: "-159.345833, 21.979167"
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
		Location: "-96.761389, 40.845833"
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
		Location: "-89.166667, 31.666667"
	}),
	new Geo({
		IataCode: "PIB",
		Location: "-89.3367, 31.4675"
	}),
	new Geo({
		IataCode: "LUP",
		Location: "-156.974444, 21.211111"
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
		Location: "-117.0168, 46.3728"
	}),
	new Geo({
		IataCode: "LYH",
		Location: "-79.201111, 37.326944"
	}),
	new Geo({
		IataCode: "MAF",
		Location: "-102.201389, 31.940833"
	}),
	new Geo({
		IataCode: "MBL",
		Location: "-86.253333, 44.273889"
	}),
	new Geo({
		IataCode: "MBS",
		Location: "-84.083333, 43.533333"
	}),
	new Geo({
		IataCode: "MCE",
		Location: "-120.512778, 37.284722"
	}),
	new Geo({
		IataCode: "MER",
		Location: "-120.566626, 37.379024"
	}),
	new Geo({
		IataCode: "MCG",
		Location: "-155.657639, 62.97875"
	}),
	new Geo({
		IataCode: "MCK",
		Location: "-100.59288, 40.210081"
	}),
	new Geo({
		IataCode: "MCN",
		Location: "-83.647778, 32.695556"
	}),
	new Geo({
		IataCode: "MCW",
		Location: "-93.329444, 43.156944"
	}),
	new Geo({
		IataCode: "MDF",
		Location: "-90.3057, 45.09941"
	}),
	new Geo({
		IataCode: "MEI",
		Location: "-88.749167, 32.337222"
	}),
	new Geo({
		IataCode: "MEM",
		Location: "-89.978889, 35.049722"
	}),
	new Geo({
		IataCode: "MFE",
		Location: "-98.238611, 26.175833"
	}),
	new Geo({
		IataCode: "MFR",
		Location: "-122.872222, 42.373611"
	}),
	new Geo({
		IataCode: "MGC",
		Location: "-86.82375, 41.704319"
	}),
	new Geo({
		IataCode: "MGM",
		Location: "-86.391111, 32.3"
	}),
	new Geo({
		IataCode: "MGW",
		Location: "-79.915833, 39.642778"
	}),
	new Geo({
		IataCode: "MHK",
		Location: "-96.668889, 39.142222"
	}),
	new Geo({
		IataCode: "MHT",
		Location: "-71.438889, 42.938333"
	}),
	new Geo({
		IataCode: "MIA",
		Location: "-80.286111, 25.7925"
	}),
	new Geo({
		IataCode: "MCI",
		Location: "-94.726667, 39.292778"
	}),
	new Geo({
		IataCode: "MKC",
		Location: "-94.591944, 39.124167"
	}),
	new Geo({
		IataCode: "MKE",
		Location: "-87.897222, 42.950278"
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
		Location: "-88.915278, 35.601389"
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
		Location: "-107.9095, 48.494417"
	}),
	new Geo({
		IataCode: "MLL",
		Location: "-162.068889, 61.865833"
	}),
	new Geo({
		IataCode: "MLU",
		Location: "-92.038889, 32.511111"
	}),
	new Geo({
		IataCode: "MLY",
		Location: "-150.643056, 64.996667"
	}),
	new Geo({
		IataCode: "MMH",
		Location: "-118.845291, 37.630003"
	}),
	new Geo({
		IataCode: "MMU",
		Location: "-74.415833, 40.799167"
	}),
	new Geo({
		IataCode: "MNT",
		Location: "-149.370289, 65.145393"
	}),
	new Geo({
		IataCode: "MOB",
		Location: "-88.240833, 30.688333"
	}),
	new Geo({
		IataCode: "MOT",
		Location: "-101.280833, 48.259722"
	}),
	new Geo({
		IataCode: "MOU",
		Location: "-163.716667, 62.089444"
	}),
	new Geo({
		IataCode: "MQT",
		Location: "-87.558333, 46.534167"
	}),
	new Geo({
		IataCode: "MRB",
		Location: "-77.985, 39.401667"
	}),
	new Geo({
		IataCode: "MRY",
		Location: "-121.848056, 36.588056"
	}),
	new Geo({
		IataCode: "MSL",
		Location: "-87.616111, 34.748611"
	}),
	new Geo({
		IataCode: "MSN",
		Location: "-89.336615, 43.140327"
	}),
	new Geo({
		IataCode: "MSO",
		Location: "-114.090614, 46.916972"
	}),
	new Geo({
		IataCode: "MSP",
		Location: "-93.217778, 44.886111"
	}),
	new Geo({
		IataCode: "MSS",
		Location: "-74.846667, 44.937778"
	}),
	new Geo({
		IataCode: "MSY",
		Location: "-90.251389, 29.991111"
	}),
	new Geo({
		IataCode: "NEW",
		Location: "-90.026667, 30.039444"
	}),
	new Geo({
		IataCode: "MTJ",
		Location: "-107.892952, 38.508147"
	}),
	new Geo({
		IataCode: "MTM",
		Location: "-131.583333, 55.133333"
	}),
	new Geo({
		IataCode: "MTW",
		Location: "-87.682222, 44.129722"
	}),
	new Geo({
		IataCode: "MUE",
		Location: "-155.673333, 20.0125"
	}),
	new Geo({
		IataCode: "MVL",
		Location: "-72.614, 44.53502"
	}),
	new Geo({
		IataCode: "MVY",
		Location: "-70.616667, 41.392778"
	}),
	new Geo({
		IataCode: "MWA",
		Location: "-89.016389, 37.751944"
	}),
	new Geo({
		IataCode: "MYR",
		Location: "-78.929722, 33.679167"
	}),
	new Geo({
		IataCode: "MYU",
		Location: "-166.268056, 60.372778"
	}),
	new Geo({
		IataCode: "MZJ",
		Location: "-111.333333, 32.516667"
	}),
	new Geo({
		IataCode: "NIR",
		Location: "-97.75, 28.4"
	}),
	new Geo({
		IataCode: "NKI",
		Location: "-133.216667, 55.366667"
	}),
	new Geo({
		IataCode: "NLG",
		Location: "-161.1525, 56.001389"
	}),
	new Geo({
		IataCode: "NME",
		Location: "-164.68556, 60.47028"
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
		IataCode: "EWR",
		Location: "-74.171667, 40.695833"
	}),
	new Geo({
		IataCode: "JFK",
		Location: "-73.776944, 40.638611"
	}),
	new Geo({
		IataCode: "LGA",
		Location: "-73.875833, 40.779444"
	}),
	new Geo({
		IataCode: "SWF",
		Location: "-74.097222, 41.505833"
	}),
	new Geo({
		IataCode: "OAJ",
		Location: "-77.611667, 34.830278"
	}),
	new Geo({
		IataCode: "OAK",
		Location: "-122.215556, 37.723611"
	}),
	new Geo({
		IataCode: "OBU",
		Location: "-156.883333, 66.910556"
	}),
	new Geo({
		IataCode: "OGD",
		Location: "-112.010833, 41.196389"
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
		Location: "-97.601667, 35.392222"
	}),
	new Geo({
		IataCode: "OLF",
		Location: "-105.575867, 48.094592"
	}),
	new Geo({
		IataCode: "OLH",
		Location: "-153.3, 57.204167"
	}),
	new Geo({
		IataCode: "OMA",
		Location: "-95.894167, 41.3025"
	}),
	new Geo({
		IataCode: "OME",
		Location: "-165.441667, 64.511389"
	}),
	new Geo({
		IataCode: "ONT",
		Location: "-117.608056, 34.057222"
	}),
	new Geo({
		IataCode: "OOK",
		Location: "-165.108333, 60.531944"
	}),
	new Geo({
		IataCode: "ORF",
		Location: "-76.201389, 36.895833"
	}),
	new Geo({
		IataCode: "ORH",
		Location: "-71.874444, 42.269167"
	}),
	new Geo({
		IataCode: "ORI",
		Location: "-152.843889, 57.886111"
	}),
	new Geo({
		IataCode: "MCO",
		Location: "-81.324921, 28.432166"
	}),
	new Geo({
		IataCode: "SFB",
		Location: "-81.2375, 28.777778"
	}),
	new Geo({
		IataCode: "ORT",
		Location: "-141.923889, 62.961944"
	}),
	new Geo({
		IataCode: "ORV",
		Location: "-161.023611, 66.829167"
	}),
	new Geo({
		IataCode: "OSB",
		Location: "-95.80224, 38.635277"
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
		Location: "-122.284444, 47.909722"
	}),
	new Geo({
		IataCode: "PAH",
		Location: "-88.7725, 37.061111"
	}),
	new Geo({
		IataCode: "PBI",
		Location: "-80.094167, 26.682222"
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
		Location: "-122.595, 45.589167"
	}),
	new Geo({
		IataCode: "PEC",
		Location: "-136.233333, 57.95"
	}),
	new Geo({
		IataCode: "ECP",
		Location: "-85.79892, 30.357803"
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
		IataCode: "GCW",
		Location: "-113.816389, 35.990278"
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
		Location: "-76.493889, 37.130833"
	}),
	new Geo({
		IataCode: "PHL",
		Location: "-75.242222, 39.871667"
	}),
	new Geo({
		IataCode: "TTN",
		Location: "-74.8125, 40.278056"
	}),
	new Geo({
		IataCode: "PHO",
		Location: "-166.8, 68.35"
	}),
	new Geo({
		IataCode: "AZA",
		Location: "-111.655556, 33.307778"
	}),
	new Geo({
		IataCode: "PHX",
		Location: "-112.011795, 33.43316"
	}),
	new Geo({
		IataCode: "PIA",
		Location: "-89.687222, 40.661389"
	}),
	new Geo({
		IataCode: "PIH",
		Location: "-112.590294, 42.909669"
	}),
	new Geo({
		IataCode: "PIP",
		Location: "-157.560833, 57.563611"
	}),
	new Geo({
		IataCode: "UGB",
		Location: "-157.742643, 57.424992"
	}),
	new Geo({
		IataCode: "PIR",
		Location: "-100.284167, 44.383611"
	}),
	new Geo({
		IataCode: "PIT",
		Location: "-80.235833, 40.496667"
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
		Location: "-81.438889, 39.345556"
	}),
	new Geo({
		IataCode: "PBG",
		Location: "-73.468056, 44.650833"
	}),
	new Geo({
		IataCode: "PLN",
		Location: "-84.792778, 45.570833"
	}),
	new Geo({
		IataCode: "PML",
		Location: "-160.265551, 56.03676"
	}),
	new Geo({
		IataCode: "PNS",
		Location: "-87.188333, 30.4725"
	}),
	new Geo({
		IataCode: "PPV",
		Location: "-133.610187, 56.328745"
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
		Location: "-112.424812, 34.649308"
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
		Location: "-70.8217, 43.07601"
	}),
	new Geo({
		IataCode: "PSP",
		Location: "-116.505, 33.826667"
	}),
	new Geo({
		IataCode: "PTA",
		Location: "-154.31861, 60.20417"
	}),
	new Geo({
		IataCode: "PTH",
		Location: "-158.6375, 56.956667"
	}),
	new Geo({
		IataCode: "PTU",
		Location: "-161.816944, 59.011389"
	}),
	new Geo({
		IataCode: "PUB",
		Location: "-104.504013, 38.28805"
	}),
	new Geo({
		IataCode: "PUW",
		Location: "-117.105, 46.744722"
	}),
	new Geo({
		IataCode: "PVC",
		Location: "-70.221667, 42.071944"
	}),
	new Geo({
		IataCode: "PVD",
		Location: "-71.426111, 41.728333"
	}),
	new Geo({
		IataCode: "PVU",
		Location: "-111.722222, 40.218056"
	}),
	new Geo({
		IataCode: "PWM",
		Location: "-70.303611, 43.644444"
	}),
	new Geo({
		IataCode: "RAP",
		Location: "-103.056221, 44.040466"
	}),
	new Geo({
		IataCode: "RBY",
		Location: "-155.460833, 64.73"
	}),
	new Geo({
		IataCode: "RCE",
		Location: "-123.166667, 48.583333"
	}),
	new Geo({
		IataCode: "RDD",
		Location: "-122.292222, 40.508333"
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
		Location: "-157.346944, 61.787222"
	}),
	new Geo({
		IataCode: "RHI",
		Location: "-89.4575, 45.631389"
	}),
	new Geo({
		IataCode: "RIC",
		Location: "-77.3225, 37.506111"
	}),
	new Geo({
		IataCode: "RIW",
		Location: "-108.453941, 43.06337"
	}),
	new Geo({
		IataCode: "RKD",
		Location: "-69.098056, 44.059167"
	}),
	new Geo({
		IataCode: "RKS",
		Location: "-109.065742, 41.594648"
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
		Location: "-104.523926, 33.297247"
	}),
	new Geo({
		IataCode: "RSH",
		Location: "-161.319167, 61.783056"
	}),
	new Geo({
		IataCode: "RST",
		Location: "-92.496389, 43.910278"
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
		IataCode: "SCK",
		Location: "-121.239167, 37.894444"
	}),
	new Geo({
		IataCode: "SMF",
		Location: "-121.5983, 38.6956"
	}),
	new Geo({
		IataCode: "CLD",
		Location: "-117.278194, 33.128136"
	}),
	new Geo({
		IataCode: "SAN",
		Location: "-117.187222, 32.732778"
	}),
	new Geo({
		IataCode: "MDA",
		Location: "-98.5, 29.416667"
	}),
	new Geo({
		IataCode: "SAT",
		Location: "-98.471944, 29.538333"
	}),
	new Geo({
		IataCode: "SAV",
		Location: "-81.199444, 32.127222"
	}),
	new Geo({
		IataCode: "SBA",
		Location: "-119.839444, 34.427778"
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
		Location: "-117.233333, 34.116667"
	}),
	new Geo({
		IataCode: "SBY",
		Location: "-75.51, 38.338611"
	}),
	new Geo({
		IataCode: "SCC",
		Location: "-148.454132, 70.194178"
	}),
	new Geo({
		IataCode: "SCE",
		Location: "-77.848611, 40.849167"
	}),
	new Geo({
		IataCode: "SCM",
		Location: "-165.593889, 61.846389"
	}),
	new Geo({
		IataCode: "SDF",
		Location: "-85.738611, 38.179722"
	}),
	new Geo({
		IataCode: "SDP",
		Location: "-160.513889, 55.316667"
	}),
	new Geo({
		IataCode: "SDY",
		Location: "-104.195366, 47.706527"
	}),
	new Geo({
		IataCode: "BFI",
		Location: "-122.299444, 47.528889"
	}),
	new Geo({
		IataCode: "LKE",
		Location: "-122.331667, 47.6275"
	}),
	new Geo({
		IataCode: "SEA",
		Location: "-122.305556, 47.447222"
	}),
	new Geo({
		IataCode: "JCC",
		Location: "-122.416667, 37.75"
	}),
	new Geo({
		IataCode: "SFO",
		Location: "-122.374889, 37.618972"
	}),
	new Geo({
		IataCode: "SGF",
		Location: "-93.385, 37.24"
	}),
	new Geo({
		IataCode: "SGT",
		Location: "-91.57457, 34.60037"
	}),
	new Geo({
		IataCode: "SGU",
		Location: "-113.59314, 37.092705"
	}),
	new Geo({
		IataCode: "SGY",
		Location: "-135.315556, 59.460556"
	}),
	new Geo({
		IataCode: "SHD",
		Location: "-78.896667, 38.263889"
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
		Location: "-106.977654, 44.771599"
	}),
	new Geo({
		IataCode: "SHV",
		Location: "-93.825556, 32.446667"
	}),
	new Geo({
		IataCode: "SHX",
		Location: "-159.566667, 62.695833"
	}),
	new Geo({
		IataCode: "SIT",
		Location: "-135.364051, 57.048551"
	}),
	new Geo({
		IataCode: "SJC",
		Location: "-121.928938, 37.363947"
	}),
	new Geo({
		IataCode: "SJT",
		Location: "-100.494444, 31.359722"
	}),
	new Geo({
		IataCode: "SKK",
		Location: "-161.138889, 64.324167"
	}),
	new Geo({
		IataCode: "SLC",
		Location: "-111.979523, 40.797437"
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
		Location: "-117.866944, 33.675556"
	}),
	new Geo({
		IataCode: "SNP",
		Location: "-170.217222, 57.152222"
	}),
	new Geo({
		IataCode: "SOV",
		Location: "-151.716667, 59.45"
	}),
	new Geo({
		IataCode: "SOW",
		Location: "-110.003014, 34.266296"
	}),
	new Geo({
		IataCode: "SPI",
		Location: "-89.678889, 39.844167"
	}),
	new Geo({
		IataCode: "SPS",
		Location: "-98.491944, 33.988333"
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
		IataCode: "BQK",
		Location: "-81.467056, 31.253607"
	}),
	new Geo({
		IataCode: "CIU",
		Location: "-84.470787, 46.250149"
	}),
	new Geo({
		IataCode: "STC",
		Location: "-94.060822, 45.546515"
	}),
	new Geo({
		IataCode: "STG",
		Location: "-169.665685, 56.577688"
	}),
	new Geo({
		IataCode: "STL",
		Location: "-90.3644, 38.7472"
	}),
	new Geo({
		IataCode: "STS",
		Location: "-122.811667, 38.508889"
	}),
	new Geo({
		IataCode: "SUN",
		Location: "-114.2962, 43.5044"
	}),
	new Geo({
		IataCode: "SUX",
		Location: "-96.384167, 42.401944"
	}),
	new Geo({
		IataCode: "SVA",
		Location: "-170.459444, 63.693333"
	}),
	new Geo({
		IataCode: "SVC",
		Location: "-108.154221, 32.632147"
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
		Location: "-164.833333, 62.533333"
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
		Location: "-92.140556, 37.741389"
	}),
	new Geo({
		IataCode: "TEB",
		Location: "-74.062222, 40.849722"
	}),
	new Geo({
		IataCode: "TEX",
		Location: "-107.909088, 37.953132"
	}),
	new Geo({
		IataCode: "TKE",
		Location: "-135.216667, 57.783333"
	}),
	new Geo({
		IataCode: "TKJ",
		Location: "-143, 63.3"
	}),
	new Geo({
		IataCode: "TLA",
		Location: "-166.331034, 65.240607"
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
		Location: "-165.266667, 60.570833"
	}),
	new Geo({
		IataCode: "TOG",
		Location: "-160.382222, 59.056667"
	}),
	new Geo({
		IataCode: "TOL",
		Location: "-83.800833, 41.590833"
	}),
	new Geo({
		IataCode: "FOE",
		Location: "-95.6625, 38.9525"
	}),
	new Geo({
		IataCode: "CLW",
		Location: "-82.758611, 27.976667"
	}),
	new Geo({
		IataCode: "PIE",
		Location: "-82.683333, 27.916667"
	}),
	new Geo({
		IataCode: "TPA",
		Location: "-82.535278, 27.973056"
	}),
	new Geo({
		IataCode: "TRI",
		Location: "-82.405701, 36.478448"
	}),
	new Geo({
		IataCode: "TUL",
		Location: "-95.889722, 36.197778"
	}),
	new Geo({
		IataCode: "TUP",
		Location: "-88.767222, 34.258889"
	}),
	new Geo({
		IataCode: "TUS",
		Location: "-110.928955, 32.107297"
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
		Location: "-160.27278, 59.07556"
	}),
	new Geo({
		IataCode: "TWF",
		Location: "-114.486668, 42.481944"
	}),
	new Geo({
		IataCode: "TXK",
		Location: "-93.989167, 33.456389"
	}),
	new Geo({
		IataCode: "TYR",
		Location: "-95.398889, 32.354722"
	}),
	new Geo({
		IataCode: "TYS",
		Location: "-83.9925, 35.812222"
	}),
	new Geo({
		IataCode: "GTR",
		Location: "-88.6, 33.45"
	}),
	new Geo({
		IataCode: "UGI",
		Location: "-153.5, 57.883333"
	}),
	new Geo({
		IataCode: "UIN",
		Location: "-91.197222, 39.944167"
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
		Location: "-81.339169, 29.959248"
	}),
	new Geo({
		IataCode: "UTO",
		Location: "-153.701667, 65.993333"
	}),
	new Geo({
		IataCode: "VAK",
		Location: "-165.590278, 61.528611"
	}),
	new Geo({
		IataCode: "VCT",
		Location: "-96.914444, 28.851111"
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
		Location: "-109.511032, 40.438847"
	}),
	new Geo({
		IataCode: "VIS",
		Location: "-119.393889, 36.319444"
	}),
	new Geo({
		IataCode: "VLD",
		Location: "-83.277222, 30.783889"
	}),
	new Geo({
		IataCode: "VPS",
		Location: "-86.527222, 30.489444"
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
		IataCode: "BWI",
		Location: "-76.671389, 39.175556"
	}),
	new Geo({
		IataCode: "DCA",
		Location: "-77.0369, 38.8517"
	}),
	new Geo({
		IataCode: "IAD",
		Location: "-77.45, 38.95"
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
		Location: "-161.978645, 60.690536"
	}),
	new Geo({
		IataCode: "WRG",
		Location: "-132.366667, 56.484444"
	}),
	new Geo({
		IataCode: "WSN",
		Location: "-156.940556, 58.7273"
	}),
	new Geo({
		IataCode: "WSX",
		Location: "-122.95289, 48.617364"
	}),
	new Geo({
		IataCode: "WTK",
		Location: "-162.984167, 67.563056"
	}),
	new Geo({
		IataCode: "WTL",
		Location: "-162.633333, 60.35"
	}),
	new Geo({
		IataCode: "WWP",
		Location: "-133.833333, 56.666667"
	}),
	new Geo({
		IataCode: "WWT",
		Location: "-164.648611, 60.922778"
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
		Location: "-120.537778, 46.566944"
	}),
	new Geo({
		IataCode: "YNG",
		Location: "-80.669722, 41.256111"
	}),
	new Geo({
		IataCode: "YUM",
		Location: "-114.606972, 32.655852"
	}),
	new Geo({
		IataCode: "SAF",
		Location: "-106.090164, 35.616837"
	}),
	new Geo({
		IataCode: "OFU",
		Location: "-169.7, -14.166667"
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
		Location: "117.805833, -34.945"
	}),
	new Geo({
		IataCode: "ARM",
		Location: "151.623333, -30.528333"
	}),
	new Geo({
		IataCode: "ASP",
		Location: "133.884167, -23.803333"
	}),
	new Geo({
		IataCode: "AUU",
		Location: "141.719856, -13.354882"
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
		Location: "139.46001, -24.3461"
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
		Location: "145.428333, -24.434167"
	}),
	new Geo({
		IataCode: "BME",
		Location: "122.23, -17.95"
	}),
	new Geo({
		IataCode: "BNE",
		Location: "153.116389, -27.385833"
	}),
	new Geo({
		IataCode: "BNK",
		Location: "153.55, -28.833333"
	}),
	new Geo({
		IataCode: "BQB",
		Location: "115.25, -33.716667"
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
		Location: "145.728333, -40.995833"
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
		Location: "148.166667, -40.333333"
	}),
	new Geo({
		IataCode: "CBR",
		Location: "149.195, -35.308889"
	}),
	new Geo({
		IataCode: "CED",
		Location: "133.705835, -32.131667"
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
		Location: "132.48194, -11.16444"
	}),
	new Geo({
		IataCode: "CMA",
		Location: "145.616111, -28.031389"
	}),
	new Geo({
		IataCode: "CNB",
		Location: "148.378333, -30.980833"
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
		Location: "145.751667, -16.883333"
	}),
	new Geo({
		IataCode: "CPD",
		Location: "134.752779, -29.044444"
	}),
	new Geo({
		IataCode: "CTL",
		Location: "146.26, -26.413333"
	}),
	new Geo({
		IataCode: "CTN",
		Location: "145.183333, -15.443333"
	}),
	new Geo({
		IataCode: "CUQ",
		Location: "143.113333, -13.763889"
	}),
	new Geo({
		IataCode: "CVQ",
		Location: "113.666667, -24.88"
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
		IataCode: "DCN",
		Location: "123.8172, -17.5672"
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
		Location: "121.824167, -33.685"
	}),
	new Geo({
		IataCode: "FIZ",
		Location: "125.554167, -18.178333"
	}),
	new Geo({
		IataCode: "FLS",
		Location: "147.996667, -40.095"
	}),
	new Geo({
		IataCode: "GBL",
		Location: "133.433333, -11.55"
	}),
	new Geo({
		IataCode: "GET",
		Location: "114.70139, -28.79722"
	}),
	new Geo({
		IataCode: "GFF",
		Location: "146.065833, -34.250833"
	}),
	new Geo({
		IataCode: "GFN",
		Location: "153.033889, -29.755833"
	}),
	new Geo({
		IataCode: "GIC",
		Location: "142.216667, -9.233333"
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
		Location: "136.453333, -13.972222"
	}),
	new Geo({
		IataCode: "GTS",
		Location: "133.616667, -26.966667"
	}),
	new Geo({
		IataCode: "GYL",
		Location: "128.453693, -16.640139"
	}),
	new Geo({
		IataCode: "HBA",
		Location: "147.483333, -42.833333"
	}),
	new Geo({
		IataCode: "HCQ",
		Location: "127.666667, -18.233333"
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
		Location: "148.880754, -20.060285"
	}),
	new Geo({
		IataCode: "HTI",
		Location: "148.952, -20.3581"
	}),
	new Geo({
		IataCode: "HVB",
		Location: "152.88028, -25.31889"
	}),
	new Geo({
		IataCode: "IRG",
		Location: "143.3125, -12.788889"
	}),
	new Geo({
		IataCode: "ISA",
		Location: "139.479167, -20.655833"
	}),
	new Geo({
		IataCode: "IVR",
		Location: "151.145, -29.89"
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
		Location: "137.635346, -35.655622"
	}),
	new Geo({
		IataCode: "KGI",
		Location: "121.466667, -30.766667"
	}),
	new Geo({
		IataCode: "KNS",
		Location: "143.883333, -39.883333"
	}),
	new Geo({
		IataCode: "KNX",
		Location: "128.708333, -15.785"
	}),
	new Geo({
		IataCode: "KRB",
		Location: "140.831944, -17.456667"
	}),
	new Geo({
		IataCode: "KTA",
		Location: "116.766667, -20.71"
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
		Location: "121.3, -28.883333"
	}),
	new Geo({
		IataCode: "LRE",
		Location: "144.275556, -23.437222"
	}),
	new Geo({
		IataCode: "LST",
		Location: "147.21, -41.545833"
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
		Location: "153.09, -26.604167"
	}),
	new Geo({
		IataCode: "AVV",
		Location: "144.46944, -38.03944"
	}),
	new Geo({
		IataCode: "MEB",
		Location: "144.90194, -37.72806"
	}),
	new Geo({
		IataCode: "MEL",
		Location: "144.84333, -37.67333"
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
		Location: "113.577222, -25.896389"
	}),
	new Geo({
		IataCode: "MKR",
		Location: "118.55, -26.6"
	}),
	new Geo({
		IataCode: "MKY",
		Location: "149.181389, -21.172778"
	}),
	new Geo({
		IataCode: "MMG",
		Location: "117.85, -28.083333"
	}),
	new Geo({
		IataCode: "MNG",
		Location: "134.233333, -12.066667"
	}),
	new Geo({
		IataCode: "MOV",
		Location: "148.077, -22.0578"
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
		Location: "150.146667, -35.901667"
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
		Location: "167.939444, -29.0425"
	}),
	new Geo({
		IataCode: "NRA",
		Location: "146.525, -34.701667"
	}),
	new Geo({
		IataCode: "NTL",
		Location: "151.833333, -32.795833"
	}),
	new Geo({
		IataCode: "NTN",
		Location: "141.069722, -17.688333"
	}),
	new Geo({
		IataCode: "OAG",
		Location: "149.123333, -33.379167"
	}),
	new Geo({
		IataCode: "OCM",
		Location: "117.273333, -22.539721"
	}),
	new Geo({
		IataCode: "OKR",
		Location: "143.466667, -9.766667"
	}),
	new Geo({
		IataCode: "OLP",
		Location: "136.877, -30.485"
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
		Location: "153.483333, -28.183333"
	}),
	new Geo({
		IataCode: "OOM",
		Location: "148.973333, -36.308333"
	}),
	new Geo({
		IataCode: "PBO",
		Location: "117.75, -23.166667"
	}),
	new Geo({
		IataCode: "PER",
		Location: "115.968333, -31.931667"
	}),
	new Geo({
		IataCode: "PHE",
		Location: "118.633333, -20.383333"
	}),
	new Geo({
		IataCode: "PKE",
		Location: "148.2425, -33.130833"
	}),
	new Geo({
		IataCode: "PLO",
		Location: "135.880557, -34.606111"
	}),
	new Geo({
		IataCode: "PMK",
		Location: "146.666667, -18.333333"
	}),
	new Geo({
		IataCode: "PPP",
		Location: "148.557222, -20.496111"
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
		Location: "137.767097, -32.499049"
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
		Location: "150.475, -23.377222"
	}),
	new Geo({
		IataCode: "RTS",
		Location: "115.536667, -32.006944"
	}),
	new Geo({
		IataCode: "RVT",
		Location: "120.116666, -33.6"
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
		Location: "130.666667, -11.416667"
	}),
	new Geo({
		IataCode: "RSE",
		Location: "151.216667, -33.8"
	}),
	new Geo({
		IataCode: "SYD",
		Location: "151.175833, -33.944167"
	}),
	new Geo({
		IataCode: "SYU",
		Location: "142.816667, -10.208333"
	}),
	new Geo({
		IataCode: "TCA",
		Location: "134.180833, -19.638056"
	}),
	new Geo({
		IataCode: "TMW",
		Location: "150.845556, -31.081944"
	}),
	new Geo({
		IataCode: "TRO",
		Location: "152.65, -31.816667"
	}),
	new Geo({
		IataCode: "TSV",
		Location: "146.766667, -19.25"
	}),
	new Geo({
		IataCode: "WTB",
		Location: "151.793333, -27.558333"
	}),
	new Geo({
		IataCode: "UBB",
		Location: "142.183333, -9.95"
	}),
	new Geo({
		IataCode: "ULP",
		Location: "144.3, -26.633333"
	}),
	new Geo({
		IataCode: "WEI",
		Location: "141.883333, -12.683611"
	}),
	new Geo({
		IataCode: "WGA",
		Location: "147.464444, -35.166667"
	}),
	new Geo({
		IataCode: "WIN",
		Location: "143.066667, -22.35"
	}),
	new Geo({
		IataCode: "WLP",
		Location: "118.703833, -23.136665"
	}),
	new Geo({
		IataCode: "WMB",
		Location: "142.448333, -38.295"
	}),
	new Geo({
		IataCode: "WNR",
		Location: "142.666667, -25.416667"
	}),
	new Geo({
		IataCode: "WOL",
		Location: "150.783333, -34.566667"
	}),
	new Geo({
		IataCode: "WUN",
		Location: "120.216667, -26.633333"
	}),
	new Geo({
		IataCode: "WWI",
		Location: "121.233333, -21.633333"
	}),
	new Geo({
		IataCode: "WYA",
		Location: "137.518617, -33.059608"
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
		Location: "150.524197, -24.401745"
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
		Location: "-158.1, -20.033333"
	}),
	new Geo({
		IataCode: "MGS",
		Location: "-157.933333, -21.933333"
	}),
	new Geo({
		IataCode: "MHX",
		Location: "-161, -10.366667"
	}),
	new Geo({
		IataCode: "MOI",
		Location: "-157.703, -19.8425"
	}),
	new Geo({
		IataCode: "MUK",
		Location: "-157.345, -20.1361"
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
		Location: "178.166667, -19.05"
	}),
	new Geo({
		IataCode: "KXF",
		Location: "179.833333, -17.333333"
	}),
	new Geo({
		IataCode: "LBS",
		Location: "179.340556, -16.464722"
	}),
	new Geo({
		IataCode: "LKB",
		Location: "-178.8, -18.23333"
	}),
	new Geo({
		IataCode: "LUC",
		Location: "-179.66701, -16.7481"
	}),
	new Geo({
		IataCode: "NAN",
		Location: "177.447778, -17.753056"
	}),
	new Geo({
		IataCode: "RTA",
		Location: "177.05, -12.5"
	}),
	new Geo({
		IataCode: "SUV",
		Location: "178.559602, -18.044993"
	}),
	new Geo({
		IataCode: "SVU",
		Location: "179.344444, -16.802778"
	}),
	new Geo({
		IataCode: "TVU",
		Location: "-179.87683, -16.69079"
	}),
	new Geo({
		IataCode: "VBV",
		Location: "-178.95, -17.233333"
	}),
	new Geo({
		IataCode: "KSA",
		Location: "162.958317, 5.358392"
	}),
	new Geo({
		IataCode: "PNI",
		Location: "158.208889, 6.985"
	}),
	new Geo({
		IataCode: "TKK",
		Location: "151.841011, 7.459582"
	}),
	new Geo({
		IataCode: "YAP",
		Location: "138.085785, 9.500874"
	}),
	new Geo({
		IataCode: "GUM",
		Location: "144.791111, 13.48"
	}),
	new Geo({
		IataCode: "ABF",
		Location: "173.304167, 1.670833"
	}),
	new Geo({
		IataCode: "BBG",
		Location: "172.80857, 3.0853"
	}),
	new Geo({
		IataCode: "CXI",
		Location: "-157.349722, 1.986111"
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
		Location: "173.2715, 2.05874"
	}),
	new Geo({
		IataCode: "NIG",
		Location: "176.409683, -1.314841"
	}),
	new Geo({
		IataCode: "TRW",
		Location: "173.146591, 1.383113"
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
		Location: "166.84997, 9.31865"
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
		Location: "162.25, 11.5"
	}),
	new Geo({
		IataCode: "JEJ",
		Location: "169, 7.5"
	}),
	new Geo({
		IataCode: "KBT",
		Location: "170.916667, 9.166667"
	}),
	new Geo({
		IataCode: "KIO",
		Location: "169.2, 5.65"
	}),
	new Geo({
		IataCode: "KWA",
		Location: "167.733333, 8.716667"
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
		Location: "171.270278, 7.063611"
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
		Location: "165.666667, 9.083333"
	}),
	new Geo({
		IataCode: "UTK",
		Location: "169.866667, 11.233333"
	}),
	new Geo({
		IataCode: "WJA",
		Location: "168.55131, 7.4522"
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
		Location: "145.249444, 14.168333"
	}),
	new Geo({
		IataCode: "SPN",
		Location: "145.711667, 15.122778"
	}),
	new Geo({
		IataCode: "BMY",
		Location: "163.666667, -19.75"
	}),
	new Geo({
		IataCode: "ILP",
		Location: "167.4475, -22.589722"
	}),
	new Geo({
		IataCode: "KNQ",
		Location: "164.83701, -21.0543"
	}),
	new Geo({
		IataCode: "KOC",
		Location: "164.416667, -20.5"
	}),
	new Geo({
		IataCode: "LIF",
		Location: "167.25, -20.766667"
	}),
	new Geo({
		IataCode: "MEE",
		Location: "168, -21.566667"
	}),
	new Geo({
		IataCode: "GEA",
		Location: "166.470833, -22.259722"
	}),
	new Geo({
		IataCode: "NOU",
		Location: "166.210833, -22.016944"
	}),
	new Geo({
		IataCode: "TGJ",
		Location: "167.8, -21"
	}),
	new Geo({
		IataCode: "TOU",
		Location: "165.259, -20.79"
	}),
	new Geo({
		IataCode: "UVE",
		Location: "166.572862, -20.641991"
	}),
	new Geo({
		IataCode: "INU",
		Location: "166.916388, -0.545145"
	}),
	new Geo({
		IataCode: "IUE",
		Location: "-169.933333, -19.083333"
	}),
	new Geo({
		IataCode: "AKL",
		Location: "174.799167, -37.011111"
	}),
	new Geo({
		IataCode: "MHB",
		Location: "174.784722, -36.845"
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
		Location: "-176.350001, -43.8"
	}),
	new Geo({
		IataCode: "DUD",
		Location: "170.2, -45.925"
	}),
	new Geo({
		IataCode: "GBZ",
		Location: "175.4702, -36.24188"
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
		Location: "175.333333, -37.861111"
	}),
	new Geo({
		IataCode: "IVC",
		Location: "168.320833, -46.4125"
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
		Location: "173.912544, -35.26202"
	}),
	new Geo({
		IataCode: "KTF",
		Location: "172.8, -40.85"
	}),
	new Geo({
		IataCode: "MON",
		Location: "170.136111, -43.766667"
	}),
	new Geo({
		IataCode: "MRO",
		Location: "175.65, -40.95"
	}),
	new Geo({
		IataCode: "NPE",
		Location: "176.865278, -39.468056"
	}),
	new Geo({
		IataCode: "NPL",
		Location: "174.176389, -39.01"
	}),
	new Geo({
		IataCode: "NSN",
		Location: "173.219444, -41.3"
	}),
	new Geo({
		IataCode: "NZK",
		Location: "172.104678, -41.236769"
	}),
	new Geo({
		IataCode: "PCN",
		Location: "174.033333, -41.35"
	}),
	new Geo({
		IataCode: "PMR",
		Location: "175.616667, -40.322222"
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
		Location: "171.225, -44.302778"
	}),
	new Geo({
		IataCode: "TRG",
		Location: "176.194444, -37.670833"
	}),
	new Geo({
		IataCode: "TUO",
		Location: "176.083889, -38.742222"
	}),
	new Geo({
		IataCode: "WAG",
		Location: "175.024167, -39.966667"
	}),
	new Geo({
		IataCode: "WHK",
		Location: "176.913889, -37.922222"
	}),
	new Geo({
		IataCode: "WKA",
		Location: "169.25, -44.733333"
	}),
	new Geo({
		IataCode: "WLG",
		Location: "174.801389, -41.323889"
	}),
	new Geo({
		IataCode: "WRE",
		Location: "174.361111, -35.772222"
	}),
	new Geo({
		IataCode: "WSZ",
		Location: "171.581944, -41.739722"
	}),
	new Geo({
		IataCode: "ZQN",
		Location: "168.738889, -45.021389"
	}),
	new Geo({
		IataCode: "AAA",
		Location: "-145.509956, -17.352606"
	}),
	new Geo({
		IataCode: "AHE",
		Location: "-146.256944, -14.428056"
	}),
	new Geo({
		IataCode: "APK",
		Location: "-146.41499, -15.5736"
	}),
	new Geo({
		IataCode: "AUQ",
		Location: "-139.016667, -9.766667"
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
		Location: "-145.657, -16.0541"
	}),
	new Geo({
		IataCode: "FGU",
		Location: "-140.88699, -15.8199"
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
		Location: "-142.533333, -17.533333"
	}),
	new Geo({
		IataCode: "HOI",
		Location: "-140.95, -18.15"
	}),
	new Geo({
		IataCode: "HUH",
		Location: "-151.021667, -16.687222"
	}),
	new Geo({
		IataCode: "KHZ",
		Location: "-145.116667, -15.766667"
	}),
	new Geo({
		IataCode: "KKR",
		Location: "-146.88499, -15.6633"
	}),
	new Geo({
		IataCode: "KXU",
		Location: "-144.403056, -16.339444"
	}),
	new Geo({
		IataCode: "MAU",
		Location: "-152.25, -16.433333"
	}),
	new Geo({
		IataCode: "MKP",
		Location: "-143.666667, -16.45"
	}),
	new Geo({
		IataCode: "MOZ",
		Location: "-149.766667, -17.483333"
	}),
	new Geo({
		IataCode: "MVT",
		Location: "-148.717, -14.8681"
	}),
	new Geo({
		IataCode: "NAU",
		Location: "-141.267, -14.1768"
	}),
	new Geo({
		IataCode: "NHV",
		Location: "-140.15, -8.766667"
	}),
	new Geo({
		IataCode: "NIU",
		Location: "-146.36673, -16.13422"
	}),
	new Geo({
		IataCode: "NUK",
		Location: "-138.7, -19.183333"
	}),
	new Geo({
		IataCode: "PKP",
		Location: "-138.966667, -14.75"
	}),
	new Geo({
		IataCode: "PPT",
		Location: "-149.60724, -17.55375"
	}),
	new Geo({
		IataCode: "PUK",
		Location: "-137, -18.266667"
	}),
	new Geo({
		IataCode: "REA",
		Location: "-136.4, -18.5"
	}),
	new Geo({
		IataCode: "RFP",
		Location: "-151.466667, -16.716667"
	}),
	new Geo({
		IataCode: "RGI",
		Location: "-147.6608, -14.95428"
	}),
	new Geo({
		IataCode: "RKA",
		Location: "-145.46667, -15.4833"
	}),
	new Geo({
		IataCode: "RMT",
		Location: "-152.854156, -22.63556"
	}),
	new Geo({
		IataCode: "RRR",
		Location: "-142.485809, -16.06297"
	}),
	new Geo({
		IataCode: "RUR",
		Location: "-151.333333, -22.433333"
	}),
	new Geo({
		IataCode: "RVV",
		Location: "-147.65, -25.883333"
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
		Location: "-145.246, -14.7095"
	}),
	new Geo({
		IataCode: "TKV",
		Location: "-138.333333, -17.283333"
	}),
	new Geo({
		IataCode: "TKX",
		Location: "-144.966667, -14.5"
	}),
	new Geo({
		IataCode: "TUB",
		Location: "-149.466667, -23.35"
	}),
	new Geo({
		IataCode: "UAH",
		Location: "-139.55, -8.933333"
	}),
	new Geo({
		IataCode: "UAP",
		Location: "-140.078, -9.35167"
	}),
	new Geo({
		IataCode: "VHZ",
		Location: "-138.853, -18.78"
	}),
	new Geo({
		IataCode: "XMH",
		Location: "-146.066667, -14.433333"
	}),
	new Geo({
		IataCode: "ZTA",
		Location: "-138.504639, -20.816457"
	}),
	new Geo({
		IataCode: "ATP",
		Location: "142.42957, -3.18985"
	}),
	new Geo({
		IataCode: "BUA",
		Location: "154.673941, -5.421125"
	}),
	new Geo({
		IataCode: "BUL",
		Location: "146.647778, -7.189722"
	}),
	new Geo({
		IataCode: "CMU",
		Location: "144.97099, -6.02429"
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
		Location: "150.334, -10.3115"
	}),
	new Geo({
		IataCode: "HGU",
		Location: "144.295, -5.827222"
	}),
	new Geo({
		IataCode: "HKN",
		Location: "150.416667, -5.475278"
	}),
	new Geo({
		IataCode: "KIE",
		Location: "155.725748, -6.304386"
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
		Location: "146.726111, -6.569722"
	}),
	new Geo({
		IataCode: "LNM",
		Location: "146.216667, -7.216667"
	}),
	new Geo({
		IataCode: "LNV",
		Location: "152.616667, -3.066667"
	}),
	new Geo({
		IataCode: "LSA",
		Location: "151.08099, -8.50582"
	}),
	new Geo({
		IataCode: "MAG",
		Location: "145.781667, -5.209167"
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
		Location: "152.838, -10.6892"
	}),
	new Geo({
		IataCode: "MXH",
		Location: "143.250556, -6.3525"
	}),
	new Geo({
		IataCode: "PNP",
		Location: "148.30901, -8.80454"
	}),
	new Geo({
		IataCode: "POM",
		Location: "147.216715, -9.442693"
	}),
	new Geo({
		IataCode: "RAB",
		Location: "152.366667, -4.333333"
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
		Location: "141.226, -5.27861"
	}),
	new Geo({
		IataCode: "TEP",
		Location: "146.5, -5.85"
	}),
	new Geo({
		IataCode: "TFI",
		Location: "149.31984, -9.07595"
	}),
	new Geo({
		IataCode: "TIZ",
		Location: "142.940556, -5.860556"
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
		Location: "143.895, -5.6433"
	}),
	new Geo({
		IataCode: "WWK",
		Location: "143.673333, -3.585833"
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
		Location: "159.816667, -11.3"
	}),
	new Geo({
		IataCode: "CHY",
		Location: "156.666667, -7"
	}),
	new Geo({
		IataCode: "EGM",
		Location: "157.85, -8.55"
	}),
	new Geo({
		IataCode: "FRE",
		Location: "159.583333, -8.1"
	}),
	new Geo({
		IataCode: "GZO",
		Location: "156.833333, -8.116667"
	}),
	new Geo({
		IataCode: "HIR",
		Location: "160.045556, -9.425278"
	}),
	new Geo({
		IataCode: "IRA",
		Location: "161.833333, -10.5"
	}),
	new Geo({
		IataCode: "KGE",
		Location: "157.586603, -7.331055"
	}),
	new Geo({
		IataCode: "KWS",
		Location: "160.775127, -8.360508"
	}),
	new Geo({
		IataCode: "MUA",
		Location: "157.266667, -8.333333"
	}),
	new Geo({
		IataCode: "NNB",
		Location: "162.5, -10.833333"
	}),
	new Geo({
		IataCode: "PRS",
		Location: "158, -8.166667"
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
		Location: "160.825, -9.86167"
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
		Location: "125.524722, -8.546667"
	}),
	new Geo({
		IataCode: "EUA",
		Location: "-174.959167, -21.375833"
	}),
	new Geo({
		IataCode: "HPA",
		Location: "-174.333333, -19.816667"
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
		Location: "-173.966667, -18.583333"
	}),
	new Geo({
		IataCode: "FUN",
		Location: "179.208333, -8.516667"
	}),
	new Geo({
		IataCode: "AUY",
		Location: "169.666667, -20.333333"
	}),
	new Geo({
		IataCode: "AWD",
		Location: "169.5, -19.25"
	}),
	new Geo({
		IataCode: "CCV",
		Location: "167.5, -16.2"
	}),
	new Geo({
		IataCode: "DLY",
		Location: "169.00101, -18.7694"
	}),
	new Geo({
		IataCode: "EAE",
		Location: "168.416667, -17.166667"
	}),
	new Geo({
		IataCode: "FTA",
		Location: "170.23199, -19.5164"
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
		Location: "168.172, -15.8656"
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
		Location: "168.166667, -15.166667"
	}),
	new Geo({
		IataCode: "NUS",
		Location: "167.4, -16.058333"
	}),
	new Geo({
		IataCode: "PBJ",
		Location: "168.216667, -16.433333"
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
		Location: "167.438, -16.495"
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
		Location: "166.638, -13.328"
	}),
	new Geo({
		IataCode: "ULB",
		Location: "168.333333, -16.416667"
	}),
	new Geo({
		IataCode: "VLI",
		Location: "168.319722, -17.699444"
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
		Location: "-178.16803, -14.268376"
	}),
	new Geo({
		IataCode: "WLS",
		Location: "-176.196153, -13.24051"
	}),
	new Geo({
		IataCode: "APW",
		Location: "-172, -13.833333"
	}),
	new Geo({
		IataCode: "FGI",
		Location: "-171.733333, -13.833333"
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
		Location: "-62.150556, -38.730556"
	}),
	new Geo({
		IataCode: "BRC",
		Location: "-71.158333, -41.149722"
	}),
	new Geo({
		IataCode: "AEP",
		Location: "-58.415833, -34.558889"
	}),
	new Geo({
		IataCode: "EZE",
		Location: "-58.533889, -34.82"
	}),
	new Geo({
		IataCode: "CNQ",
		Location: "-58.762222, -27.449722"
	}),
	new Geo({
		IataCode: "COC",
		Location: "-57.996389, -31.297222"
	}),
	new Geo({
		IataCode: "COR",
		Location: "-64.199444, -31.313056"
	}),
	new Geo({
		IataCode: "CPC",
		Location: "-71.133333, -40.066667"
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
		Location: "-71.75, -42"
	}),
	new Geo({
		IataCode: "EPA",
		Location: "-58.616266, -34.610111"
	}),
	new Geo({
		IataCode: "EQS",
		Location: "-71.1425, -42.909722"
	}),
	new Geo({
		IataCode: "FMA",
		Location: "-58.235, -26.212778"
	}),
	new Geo({
		IataCode: "FTE",
		Location: "-72.053333, -50.280278"
	}),
	new Geo({
		IataCode: "IGR",
		Location: "-54.482574, -25.73504"
	}),
	new Geo({
		IataCode: "IRJ",
		Location: "-66.783333, -29.383333"
	}),
	new Geo({
		IataCode: "JUJ",
		Location: "-65.083333, -24.4"
	}),
	new Geo({
		IataCode: "LGS",
		Location: "-69.583333, -35.5"
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
		Location: "-70.983611, -46.536389"
	}),
	new Geo({
		IataCode: "PMY",
		Location: "-65.102778, -42.759167"
	}),
	new Geo({
		IataCode: "PRA",
		Location: "-60.48, -31.795"
	}),
	new Geo({
		IataCode: "PSS",
		Location: "-55.97073, -27.38584"
	}),
	new Geo({
		IataCode: "RCQ",
		Location: "-59.7, -29.183333"
	}),
	new Geo({
		IataCode: "RCU",
		Location: "-64.261389, -33.085"
	}),
	new Geo({
		IataCode: "REL",
		Location: "-65.323333, -43.233333"
	}),
	new Geo({
		IataCode: "RES",
		Location: "-59.050833, -27.451389"
	}),
	new Geo({
		IataCode: "RGA",
		Location: "-67.75, -53.779167"
	}),
	new Geo({
		IataCode: "RGL",
		Location: "-69.283333, -51.616667"
	}),
	new Geo({
		IataCode: "RHD",
		Location: "-64.95, -27.533333"
	}),
	new Geo({
		IataCode: "ROS",
		Location: "-60.785, -32.90361"
	}),
	new Geo({
		IataCode: "RSA",
		Location: "-64.27569, -36.58832"
	}),
	new Geo({
		IataCode: "LUQ",
		Location: "-66.358611, -33.274444"
	}),
	new Geo({
		IataCode: "SDE",
		Location: "-64.322222, -27.765278"
	}),
	new Geo({
		IataCode: "SFN",
		Location: "-60.81167, -31.71167"
	}),
	new Geo({
		IataCode: "SLA",
		Location: "-65.472222, -24.855"
	}),
	new Geo({
		IataCode: "TDL",
		Location: "-59.216888, -37.233267"
	}),
	new Geo({
		IataCode: "TUC",
		Location: "-65.105, -26.840833"
	}),
	new Geo({
		IataCode: "UAQ",
		Location: "-68.418333, -31.571389"
	}),
	new Geo({
		IataCode: "USH",
		Location: "-68.29575, -54.84328"
	}),
	new Geo({
		IataCode: "VDM",
		Location: "-63.016667, -40.85"
	}),
	new Geo({
		IataCode: "VLG",
		Location: "-57.029901, -37.234565"
	}),
	new Geo({
		IataCode: "BYC",
		Location: "-63.65, -21.95"
	}),
	new Geo({
		IataCode: "CBB",
		Location: "-66.171667, -17.428333"
	}),
	new Geo({
		IataCode: "CCA",
		Location: "-65.1415, -16.98975"
	}),
	new Geo({
		IataCode: "CIJ",
		Location: "-68.782778, -11.040278"
	}),
	new Geo({
		IataCode: "GYA",
		Location: "-65.35, -10.81667"
	}),
	new Geo({
		IataCode: "LPB",
		Location: "-68.19226, -16.51334"
	}),
	new Geo({
		IataCode: "MHW",
		Location: "-63.966667, -19.8325"
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
		Location: "-66.093056, -11.006944"
	}),
	new Geo({
		IataCode: "SBL",
		Location: "-65.45, -13.716667"
	}),
	new Geo({
		IataCode: "SRE",
		Location: "-65.28875, -19.00708"
	}),
	new Geo({
		IataCode: "SRZ",
		Location: "-63.17148, -17.81158"
	}),
	new Geo({
		IataCode: "VVI",
		Location: "-63.13536, -17.64476"
	}),
	new Geo({
		IataCode: "TDD",
		Location: "-64.833333, -14.683333"
	}),
	new Geo({
		IataCode: "TJA",
		Location: "-64.701389, -21.555833"
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
		Location: "-56, -10"
	}),
	new Geo({
		IataCode: "AJU",
		Location: "-37.05, -10.983333"
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
		IataCode: "JTC",
		Location: "-49.068333, -22.157778"
	}),
	new Geo({
		IataCode: "BAZ",
		Location: "-62.933611, -0.966944"
	}),
	new Geo({
		IataCode: "BEL",
		Location: "-48.476111, -1.379167"
	}),
	new Geo({
		IataCode: "CNF",
		Location: "-43.968611, -19.633333"
	}),
	new Geo({
		IataCode: "PLU",
		Location: "-43.950556, -19.851111"
	}),
	new Geo({
		IataCode: "BPG",
		Location: "-52.390169, -15.859594"
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
		Location: "-60.097919, -12.693389"
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
		Location: "-53.5008, -25.0003"
	}),
	new Geo({
		IataCode: "CAF",
		Location: "-66.916667, -4.9"
	}),
	new Geo({
		IataCode: "CAW",
		Location: "-41.3, -21.75"
	}),
	new Geo({
		IataCode: "CCM",
		Location: "-49.42139, -28.72444"
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
		Location: "-50.00347, -6.11781"
	}),
	new Geo({
		IataCode: "CLV",
		Location: "-48.633333, -17.75"
	}),
	new Geo({
		IataCode: "CMG",
		Location: "-57.672222, -19.011111"
	}),
	new Geo({
		IataCode: "VCP",
		Location: "-47.13452, -23.00738"
	}),
	new Geo({
		IataCode: "CPV",
		Location: "-35.9, -7.266667"
	}),
	new Geo({
		IataCode: "CWB",
		Location: "-49.177778, -25.526667"
	}),
	new Geo({
		IataCode: "CXJ",
		Location: "-51.186848, -29.196677"
	}),
	new Geo({
		IataCode: "CZS",
		Location: "-72.783333, -7.583333"
	}),
	new Geo({
		IataCode: "DIQ",
		Location: "-44.869444, -20.181389"
	}),
	new Geo({
		IataCode: "DOU",
		Location: "-54.925556, -22.202778"
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
		Location: "-32.416667, -3.85"
	}),
	new Geo({
		IataCode: "FLN",
		Location: "-48.550556, -27.669722"
	}),
	new Geo({
		IataCode: "FOR",
		Location: "-38.534444, -3.776667"
	}),
	new Geo({
		IataCode: "FRC",
		Location: "-47.4375, -20.551944"
	}),
	new Geo({
		IataCode: "GEL",
		Location: "-54.168056, -28.281111"
	}),
	new Geo({
		IataCode: "GVR",
		Location: "-41.933333, -18.850278"
	}),
	new Geo({
		IataCode: "GYN",
		Location: "-49.210833, -16.638333"
	}),
	new Geo({
		IataCode: "HUW",
		Location: "-63.072222, -7.53222"
	}),
	new Geo({
		IataCode: "IGU",
		Location: "-54.483333, -25.6"
	}),
	new Geo({
		IataCode: "IMP",
		Location: "-47.480556, -5.531944"
	}),
	new Geo({
		IataCode: "IOS",
		Location: "-39.03, -14.813889"
	}),
	new Geo({
		IataCode: "IPN",
		Location: "-42.533333, -19.5"
	}),
	new Geo({
		IataCode: "IRZ",
		Location: "-65.033889, -0.416944"
	}),
	new Geo({
		IataCode: "ITB",
		Location: "-55.983334, -4.283333"
	}),
	new Geo({
		IataCode: "ITN",
		Location: "-39.3, -14.8"
	}),
	new Geo({
		IataCode: "JCB",
		Location: "-51.5533, -27.1714"
	}),
	new Geo({
		IataCode: "IZA",
		Location: "-43.173056, -21.513056"
	}),
	new Geo({
		IataCode: "JDF",
		Location: "-43.333333, -21.75"
	}),
	new Geo({
		IataCode: "JDO",
		Location: "-39.316667, -7.2"
	}),
	new Geo({
		IataCode: "JJD",
		Location: "-40.358055, -2.906666"
	}),
	new Geo({
		IataCode: "JJG",
		Location: "-49.060278, -28.675278"
	}),
	new Geo({
		IataCode: "JOI",
		Location: "-48.783333, -26.233333"
	}),
	new Geo({
		IataCode: "JPA",
		Location: "-34.951944, -7.146389"
	}),
	new Geo({
		IataCode: "JPR",
		Location: "-61.860452, -10.866561"
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
		Location: "-51.131944, -23.331944"
	}),
	new Geo({
		IataCode: "LEC",
		Location: "-41.281111, -12.48"
	}),
	new Geo({
		IataCode: "MAB",
		Location: "-49.166667, -5.366667"
	}),
	new Geo({
		IataCode: "MAO",
		Location: "-60.05, -3.033333"
	}),
	new Geo({
		IataCode: "MCP",
		Location: "-51.066667, 0.05"
	}),
	new Geo({
		IataCode: "MCZ",
		Location: "-35.795833, -9.515278"
	}),
	new Geo({
		IataCode: "MEA",
		Location: "-41.8, -22.35"
	}),
	new Geo({
		IataCode: "MGF",
		Location: "-51.933333, -23.383611"
	}),
	new Geo({
		IataCode: "MII",
		Location: "-49.933333, -22.2"
	}),
	new Geo({
		IataCode: "MOC",
		Location: "-43.817222, -16.707778"
	}),
	new Geo({
		IataCode: "MVF",
		Location: "-37.36435, -5.20192"
	}),
	new Geo({
		IataCode: "MVS",
		Location: "-39.566667, -18.083333"
	}),
	new Geo({
		IataCode: "NAT",
		Location: "-35.243611, -5.910556"
	}),
	new Geo({
		IataCode: "NVT",
		Location: "-48.633333, -26.866667"
	}),
	new Geo({
		IataCode: "OAL",
		Location: "-61.450608, -11.491223"
	}),
	new Geo({
		IataCode: "OPS",
		Location: "-55.58611, -11.885"
	}),
	new Geo({
		IataCode: "PAV",
		Location: "-38.222222, -9.397778"
	}),
	new Geo({
		IataCode: "PET",
		Location: "-52.324444, -31.718056"
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
		Location: "-48.354934, -10.294072"
	}),
	new Geo({
		IataCode: "PNZ",
		Location: "-40.490556, -9.393333"
	}),
	new Geo({
		IataCode: "POA",
		Location: "-51.170833, -29.993333"
	}),
	new Geo({
		IataCode: "PPB",
		Location: "-51.45, -22.1"
	}),
	new Geo({
		IataCode: "PVH",
		Location: "-63.9, -8.733333"
	}),
	new Geo({
		IataCode: "POJ",
		Location: "-46.490833, -18.671667"
	}),
	new Geo({
		IataCode: "RAO",
		Location: "-47.773333, -21.135833"
	}),
	new Geo({
		IataCode: "RBR",
		Location: "-67.894167, -9.869167"
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
		Location: "-52.166668, -32.083333"
	}),
	new Geo({
		IataCode: "GIG",
		Location: "-43.243611, -22.808889"
	}),
	new Geo({
		IataCode: "SDU",
		Location: "-43.16313, -22.91046"
	}),
	new Geo({
		IataCode: "ROO",
		Location: "-54.716667, -16.433333"
	}),
	new Geo({
		IataCode: "RVD",
		Location: "-50.955488, -17.83326"
	}),
	new Geo({
		IataCode: "CGH",
		Location: "-46.66, -23.625"
	}),
	new Geo({
		IataCode: "GRU",
		Location: "-46.483333, -23.433333"
	}),
	new Geo({
		IataCode: "SJK",
		Location: "-45.86274, -23.22817"
	}),
	new Geo({
		IataCode: "SJL",
		Location: "-67.082176, -0.119133"
	}),
	new Geo({
		IataCode: "SJP",
		Location: "-49.416667, -20.816667"
	}),
	new Geo({
		IataCode: "SLZ",
		Location: "-44.233333, -2.583333"
	}),
	new Geo({
		IataCode: "SMT",
		Location: "-55.673523, -12.480559"
	}),
	new Geo({
		IataCode: "OLC",
		Location: "-68.918889, -3.465556"
	}),
	new Geo({
		IataCode: "SRA",
		Location: "-54.5204, -27.9067"
	}),
	new Geo({
		IataCode: "SSA",
		Location: "-38.333333, -12.916667"
	}),
	new Geo({
		IataCode: "STM",
		Location: "-54.7, -2.433333"
	}),
	new Geo({
		IataCode: "TBT",
		Location: "-69.93583, -4.25567"
	}),
	new Geo({
		IataCode: "TFF",
		Location: "-64.7, -3.366667"
	}),
	new Geo({
		IataCode: "THE",
		Location: "-42.817778, -5.065278"
	}),
	new Geo({
		IataCode: "TJL",
		Location: "-51.683889, -20.754444"
	}),
	new Geo({
		IataCode: "TMT",
		Location: "-56.3968, -1.4896"
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
		Location: "-37.183333, -7.133333"
	}),
	new Geo({
		IataCode: "UBA",
		Location: "-47.958333, -19.776389"
	}),
	new Geo({
		IataCode: "UDI",
		Location: "-48.233333, -18.9"
	}),
	new Geo({
		IataCode: "URG",
		Location: "-57.038333, -29.781667"
	}),
	new Geo({
		IataCode: "VAG",
		Location: "-45.433333, -21.55"
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
		Location: "-52.6566, -27.1342"
	}),
	new Geo({
		IataCode: "ANF",
		Location: "-70.442778, -23.439444"
	}),
	new Geo({
		IataCode: "ARI",
		Location: "-70.33874, -18.34853"
	}),
	new Geo({
		IataCode: "BBA",
		Location: "-71.695, -45.916667"
	}),
	new Geo({
		IataCode: "CCP",
		Location: "-73.06, -36.768333"
	}),
	new Geo({
		IataCode: "CJC",
		Location: "-68.916667, -22.487222"
	}),
	new Geo({
		IataCode: "CPO",
		Location: "-70.536111, -27.416667"
	}),
	new Geo({
		IataCode: "ESR",
		Location: "-69.765278, -26.315278"
	}),
	new Geo({
		IataCode: "IPC",
		Location: "-109.429621, -27.160025"
	}),
	new Geo({
		IataCode: "IQQ",
		Location: "-70.181389, -20.535278"
	}),
	new Geo({
		IataCode: "KNA",
		Location: "-71.566667, -33.033333"
	}),
	new Geo({
		IataCode: "LSC",
		Location: "-71.197778, -29.913333"
	}),
	new Geo({
		IataCode: "PMC",
		Location: "-73.1, -41.433333"
	}),
	new Geo({
		IataCode: "PNT",
		Location: "-72.516667, -51.683333"
	}),
	new Geo({
		IataCode: "PUQ",
		Location: "-70.854722, -53.002778"
	}),
	new Geo({
		IataCode: "SCL",
		Location: "-70.7858, -33.39298"
	}),
	new Geo({
		IataCode: "ULC",
		Location: "-70.694722, -33.489722"
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
		IataCode: "MHC",
		Location: "-73.715667, -42.340389"
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
		Location: "-67.626389, -54.931111"
	}),
	new Geo({
		IataCode: "YAI",
		Location: "-72.116667, -36.6"
	}),
	new Geo({
		IataCode: "ZAL",
		Location: "-73.086111, -39.649444"
	}),
	new Geo({
		IataCode: "ZCO",
		Location: "-72.6372, -38.7669"
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
		Location: "-76.71643, 7.81196"
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
		Location: "-73.184722, 7.126389"
	}),
	new Geo({
		IataCode: "BOG",
		Location: "-74.15, 4.7"
	}),
	new Geo({
		IataCode: "BSC",
		Location: "-77.4, 6.183333"
	}),
	new Geo({
		IataCode: "BUN",
		Location: "-76.995833, 3.825"
	}),
	new Geo({
		IataCode: "CAQ",
		Location: "-75.25, 7.6"
	}),
	new Geo({
		IataCode: "CLO",
		Location: "-76.385, 3.546111"
	}),
	new Geo({
		IataCode: "COG",
		Location: "-76.663333, 5.079167"
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
		Location: "-75.282778, 9.3375"
	}),
	new Geo({
		IataCode: "EBG",
		Location: "-74.816667, 7.616667"
	}),
	new Geo({
		IataCode: "EJA",
		Location: "-73.799167, 7.015833"
	}),
	new Geo({
		IataCode: "EYP",
		Location: "-72.38324, 5.31842"
	}),
	new Geo({
		IataCode: "FLA",
		Location: "-75.558889, 1.588889"
	}),
	new Geo({
		IataCode: "GPI",
		Location: "-77.89762, 2.57103"
	}),
	new Geo({
		IataCode: "IBE",
		Location: "-75.14, 4.425833"
	}),
	new Geo({
		IataCode: "IPI",
		Location: "-77.67176, 0.86192"
	}),
	new Geo({
		IataCode: "LCR",
		Location: "-73.016667, -0.733333"
	}),
	new Geo({
		IataCode: "LET",
		Location: "-69.939444, -4.196389"
	}),
	new Geo({
		IataCode: "LMC",
		Location: "-73.9, 3.316667"
	}),
	new Geo({
		IataCode: "LQM",
		Location: "-74.7708, -0.18228"
	}),
	new Geo({
		IataCode: "EOH",
		Location: "-75.583333, 6.216667"
	}),
	new Geo({
		IataCode: "MDE",
		Location: "-75.423056, 6.164444"
	}),
	new Geo({
		IataCode: "MTR",
		Location: "-75.881389, 8.745833"
	}),
	new Geo({
		IataCode: "MVP",
		Location: "-70.23388, 1.25366"
	}),
	new Geo({
		IataCode: "MZL",
		Location: "-75.4647, 5.0296"
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
		Location: "-74.716667, 7"
	}),
	new Geo({
		IataCode: "PCR",
		Location: "-67.49316, 6.18472"
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
		Location: "-75.7, 3.3"
	}),
	new Geo({
		IataCode: "PPN",
		Location: "-76.608889, 2.45"
	}),
	new Geo({
		IataCode: "PSO",
		Location: "-77.25, 1.466667"
	}),
	new Geo({
		IataCode: "PTX",
		Location: "-76.033333, 1.85"
	}),
	new Geo({
		IataCode: "PUU",
		Location: "-76.50084, 0.50523"
	}),
	new Geo({
		IataCode: "RCH",
		Location: "-72.924444, 11.529167"
	}),
	new Geo({
		IataCode: "RVE",
		Location: "-71.85806, 6.95472"
	}),
	new Geo({
		IataCode: "SJE",
		Location: "-72.63936, 2.57969"
	}),
	new Geo({
		IataCode: "SMR",
		Location: "-74.228611, 11.122222"
	}),
	new Geo({
		IataCode: "SNT",
		Location: "-73, 7.666667"
	}),
	new Geo({
		IataCode: "SVI",
		Location: "-74.766667, 2.15"
	}),
	new Geo({
		IataCode: "TCO",
		Location: "-78.766667, 1.816667"
	}),
	new Geo({
		IataCode: "TLU",
		Location: "-75.583333, 9.516667"
	}),
	new Geo({
		IataCode: "UIB",
		Location: "-76.642778, 5.680278"
	}),
	new Geo({
		IataCode: "VGZ",
		Location: "-76.716667, 1.066667"
	}),
	new Geo({
		IataCode: "VUP",
		Location: "-73.252778, 10.436667"
	}),
	new Geo({
		IataCode: "VVC",
		Location: "-73.61376, 4.16788"
	}),
	new Geo({
		IataCode: "CUE",
		Location: "-78.983333, -2.866667"
	}),
	new Geo({
		IataCode: "ESM",
		Location: "-79.625, 0.966667"
	}),
	new Geo({
		IataCode: "ETR",
		Location: "-79.96167, -3.45222"
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
		Location: "-76.883333, 0.1"
	}),
	new Geo({
		IataCode: "LOH",
		Location: "-79.373611, -3.993611"
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
		Location: "-76.986667, -0.462778"
	}),
	new Geo({
		IataCode: "SCY",
		Location: "-89.61745, -0.91021"
	}),
	new Geo({
		IataCode: "SNC",
		Location: "-80.983333, -2.2"
	}),
	new Geo({
		IataCode: "TUA",
		Location: "-77.716667, 0.8"
	}),
	new Geo({
		IataCode: "UIO",
		Location: "-78.486111, -0.137778"
	}),
	new Geo({
		IataCode: "XMS",
		Location: "-78.133333, -2.316667"
	}),
	new Geo({
		IataCode: "MPN",
		Location: "-58.45, -51.816667"
	}),
	new Geo({
		IataCode: "CAY",
		Location: "-52.366667, 4.816667"
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
		Location: "-71.58308, -16.34107"
	}),
	new Geo({
		IataCode: "ATA",
		Location: "-77.6, -9.347222"
	}),
	new Geo({
		IataCode: "AYP",
		Location: "-74.204149, -13.155212"
	}),
	new Geo({
		IataCode: "CHH",
		Location: "-77.85, -6.216667"
	}),
	new Geo({
		IataCode: "CIX",
		Location: "-79.832222, -6.789722"
	}),
	new Geo({
		IataCode: "CJA",
		Location: "-78.4894, -7.13918"
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
		Location: "-73.309193, -3.781698"
	}),
	new Geo({
		IataCode: "JAE",
		Location: "-78.773728, -5.596002"
	}),
	new Geo({
		IataCode: "JAU",
		Location: "-75.4734, -11.7831"
	}),
	new Geo({
		IataCode: "JUL",
		Location: "-70.154444, -15.464167"
	}),
	new Geo({
		IataCode: "LIM",
		Location: "-77.110634, -12.024882"
	}),
	new Geo({
		IataCode: "MFT",
		Location: "-72.566667, -13.116667"
	}),
	new Geo({
		IataCode: "PCL",
		Location: "-74.633333, -8.333333"
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
		Location: "-76.398611, -6.511111"
	}),
	new Geo({
		IataCode: "TRU",
		Location: "-79.115, -8.09"
	}),
	new Geo({
		IataCode: "TYL",
		Location: "-81.252778, -4.564722"
	}),
	new Geo({
		IataCode: "AGT",
		Location: "-54.843611, -25.461415"
	}),
	new Geo({
		IataCode: "ASU",
		Location: "-57.519167, -25.239167"
	}),
	new Geo({
		IataCode: "PBM",
		Location: "-55.191111, 5.451389"
	}),
	new Geo({
		IataCode: "CYR",
		Location: "-57.5, -34.166667"
	}),
	new Geo({
		IataCode: "MVD",
		Location: "-56.033333, -34.833333"
	}),
	new Geo({
		IataCode: "PDP",
		Location: "-55.093517, -34.853115"
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
		Location: "-69.356111, 10.045278"
	}),
	new Geo({
		IataCode: "CBL",
		Location: "-63.5375, 8.128056"
	}),
	new Geo({
		IataCode: "CCS",
		Location: "-66.989167, 10.606389"
	}),
	new Geo({
		IataCode: "CUM",
		Location: "-64.134192, 10.451983"
	}),
	new Geo({
		IataCode: "CUP",
		Location: "-63.2625, 10.658889"
	}),
	new Geo({
		IataCode: "CZE",
		Location: "-69.681944, 11.415833"
	}),
	new Geo({
		IataCode: "LFR",
		Location: "-72.272222, 8.240556"
	}),
	new Geo({
		IataCode: "LRV",
		Location: "-66.75, 11.833333"
	}),
	new Geo({
		IataCode: "LSP",
		Location: "-70.144615, 11.781661"
	}),
	new Geo({
		IataCode: "MAR",
		Location: "-71.733333, 10.566667"
	}),
	new Geo({
		IataCode: "MRD",
		Location: "-71.157778, 8.583333"
	}),
	new Geo({
		IataCode: "MUN",
		Location: "-63.154167, 9.745833"
	}),
	new Geo({
		IataCode: "PMV",
		Location: "-63.966179, 10.911696"
	}),
	new Geo({
		IataCode: "PYH",
		Location: "-67.5, 5.6"
	}),
	new Geo({
		IataCode: "PZO",
		Location: "-62.763348, 8.287429"
	}),
	new Geo({
		IataCode: "SFD",
		Location: "-67.439167, 7.885278"
	}),
	new Geo({
		IataCode: "SOM",
		Location: "-64.145833, 8.949167"
	}),
	new Geo({
		IataCode: "STD",
		Location: "-72.066667, 7.583333"
	}),
	new Geo({
		IataCode: "SVZ",
		Location: "-72.438056, 7.843056"
	}),
	new Geo({
		IataCode: "TUV",
		Location: "-62.05, 9.091667"
	}),
	new Geo({
		IataCode: "VIG",
		Location: "-71.668196, 8.62269"
	}),
	new Geo({
		IataCode: "VLN",
		Location: "-67.926235, 10.150296"
	}),
	new Geo({
		IataCode: "VLV",
		Location: "-70.585833, 9.339167"
	}),
	new Geo({
		IataCode: "AGM",
		Location: "-37.683333, 65.6"
	}),
	new Geo({
		IataCode: "GOH",
		Location: "-51.675508, 64.191189"
	}),
	new Geo({
		IataCode: "JAV",
		Location: "-51.061014, 69.24132"
	}),
	new Geo({
		IataCode: "JEG",
		Location: "-52.78553, 68.722434"
	}),
	new Geo({
		IataCode: "JFR",
		Location: "-49.700278, 62.000278"
	}),
	new Geo({
		IataCode: "JHS",
		Location: "-53.704167, 66.936944"
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
		Location: "-56.130556, 72.787869"
	}),
	new Geo({
		IataCode: "KUS",
		Location: "-37.116667, 65.566667"
	}),
	new Geo({
		IataCode: "NAQ",
		Location: "-69.3887, 77.4886"
	}),
	new Geo({
		IataCode: "UAK",
		Location: "-45.426111, 61.160556"
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
		Location: "-50.719723, 67.012222"
	}),
	new Geo({
		IataCode: "THU",
		Location: "-68.7, 76.533333"
	}),
	new Geo({
		IataCode: "UMD",
		Location: "-52.117778, 70.668889"
	}),
	new Geo({
		IataCode: "AEY",
		Location: "-18.166667, 65.666667"
	}),
	new Geo({
		IataCode: "BIU",
		Location: "-23.983333, 65.833333"
	}),
	new Geo({
		IataCode: "BLO",
		Location: "-20.3, 65.666667"
	}),
	new Geo({
		IataCode: "EGS",
		Location: "-14.402778, 65.277778"
	}),
	new Geo({
		IataCode: "GJR",
		Location: "-21.35, 65.983333"
	}),
	new Geo({
		IataCode: "GRY",
		Location: "-18.009338, 66.542797"
	}),
	new Geo({
		IataCode: "HFN",
		Location: "-15.266667, 64.283333"
	}),
	new Geo({
		IataCode: "HZK",
		Location: "-17.427778, 65.955278"
	}),
	new Geo({
		IataCode: "IFJ",
		Location: "-23.127079, 66.058036"
	}),
	new Geo({
		IataCode: "KEF",
		Location: "-22.606111, 63.985"
	}),
	new Geo({
		IataCode: "RKV",
		Location: "-21.95, 64.133333"
	}),
	new Geo({
		IataCode: "THO",
		Location: "-15.333333, 66.2"
	}),
	new Geo({
		IataCode: "VEY",
		Location: "-20.277778, 63.426389"
	}),
	new Geo({
		IataCode: "VPN",
		Location: "-14.829444, 65.756944"
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
