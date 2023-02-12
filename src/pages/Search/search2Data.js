const data = [
  {
    name: "3S",
    biznum: "1298116215",
    corpnum: 1101110746474.0,
    cash: 95.0
  },
  {
    name: "AJ네트웍스",
    biznum: "2148648586",
    corpnum: 1101111874654.0,
    cash: 760.0
  },
  {
    name: "AK홀딩스",
    biznum: "1138110894",
    corpnum: 1101110029721.0,
    cash: 5002.0
  },
  {
    name: "APS홀딩스",
    biznum: "2298122962",
    corpnum: 1101111315286.0,
    cash: 408.0
  },
  {
    name: "AP시스템",
    biznum: "2048700511",
    corpnum: 1348110400341.0,
    cash: 2050.0
  },
  {
    name: "AP위성",
    biznum: "1198638269",
    corpnum: 1101114531045.0,
    cash: 659.0
  },
  {
    name: "BGF",
    biznum: "1208144752",
    corpnum: 1101111105215.0,
    cash: 1240.0
  },
  {
    name: "BGF리테일",
    biznum: "8938800792",
    corpnum: 1101116555770.0,
    cash: 748.0
  },
  {
    name: "코프라",
    biznum: "1338134551",
    corpnum: 1350110079381.0,
    cash: 1064.0
  },
  {
    name: "BNK금융지주",
    biznum: "6058605385",
    corpnum: 1801110750893.0,
    cash: 15045.0
  },
  {
    name: "BYC",
    biznum: "1188103063",
    corpnum: 1101110005995.0,
    cash: 548.0
  },
  {
    name: "CBI",
    biznum: "1398116250",
    corpnum: 1201110007238.0,
    cash: 47.0
  },
  {
    name: "CJ",
    biznum: "1048126714",
    corpnum: 1101110015639.0,
    cash: 32853.0
  },
  {
    name: "CJ CGV",
    biznum: "1048145690",
    corpnum: 1101111673220.0,
    cash: 5096.0
  },
  {
    name: "CJ ENM",
    biznum: "1068151510",
    corpnum: 1101111109134.0,
    cash: 7353.0
  },
  {
    name: "CJ 바이오사이언스",
    biznum: "1198623145",
    corpnum: 1101114222503.0,
    cash: 589.0
  },
  {
    name: "CJ대한통운",
    biznum: "1108105034",
    corpnum: 1101110006167.0,
    cash: 4364.0
  },
  {
    name: "CJ씨푸드",
    biznum: "2298112289",
    corpnum: 1101110215578.0,
    cash: 17.0
  },
  {
    name: "CJ제일제당",
    biznum: "1048609535",
    corpnum: 1101113748253.0,
    cash: 16121.0
  },
  {
    name: "CJ프레시웨이",
    biznum: "6038111270",
    corpnum: 1801110083442.0,
    cash: 817.0
  },
  {
    name: "CMG제약",
    biznum: "1348171976",
    corpnum: 1350110115846.0,
    cash: 61.0
  },
  {
    name: "CNH",
    biznum: "1308126203",
    corpnum: 1243110025539.0,
    cash: 78.0
  },
  {
    name: "CNT85",
    biznum: "1208168259",
    corpnum: 1101111347940.0,
    cash: 52.0
  },
  {
    name: "CS",
    biznum: "2158174874",
    corpnum: 1101111644809.0,
    cash: 31.0
  },
  {
    name: "CSA 코스믹",
    biznum: "2068147219",
    corpnum: 1101110657499.0,
    cash: 13.0
  },
  {
    name: "CS홀딩스",
    biznum: "2208113170",
    corpnum: 1101110008486.0,
    cash: 767.0
  },
  {
    name: "DB",
    biznum: "2118119938",
    corpnum: 1101110210859.0,
    cash: 342.0
  },
  {
    name: "디비금융스팩10호",
    biznum: "8248602198",
    corpnum: 1101118043294.0,
    cash: 18.0
  },
  {
    name: "DB금융스팩8호",
    biznum: "4978701922",
    corpnum: 1101117635745.0,
    cash: 17.0
  },
  {
    name: "DB금융투자",
    biznum: "1168159557",
    corpnum: 1101110339956.0,
    cash: 5357.0
  },
  {
    name: "DB손해보험",
    biznum: "2018145593",
    corpnum: 1101110095285.0,
    cash: 5449.0
  },
  {
    name: "DB하이텍",
    biznum: "2118110771",
    corpnum: 1101110026206.0,
    cash: 1535.0
  },
  {
    name: "DGB금융지주",
    biznum: "5028610560",
    corpnum: 1701110429523.0,
    cash: 21476.0
  },
  {
    name: "디아이동일",
    biznum: "1208114879",
    corpnum: 1101110019219.0,
    cash: 406.0
  },
  {
    name: "DL",
    biznum: "1168135007",
    corpnum: 1101110084915.0,
    cash: 8061.0
  },
  {
    name: "DL건설",
    biznum: "1028134561",
    corpnum: 1101110163115.0,
    cash: 5128.0
  },
  {
    name: "DL이앤씨",
    biznum: "6768701904",
    corpnum: 1101117736808.0,
    cash: 18195.0
  },
  {
    name: "DMS",
    biznum: "1258129149",
    corpnum: 1346110012687.0,
    cash: 418.0
  },
  {
    name: "DN오토모티브",
    biznum: "6218101580",
    corpnum: 1845110000642.0,
    cash: 3862.0
  },
  {
    name: "DRB동일",
    biznum: "6218101635",
    corpnum: 1801110000339.0,
    cash: 1397.0
  },
  {
    name: "DSC인베스트먼트",
    biznum: "2208831804",
    corpnum: 1101114778267.0,
    cash: 116.0
  },
  {
    name: "DSR",
    biznum: "6178100224",
    corpnum: 1801110000777.0,
    cash: 125.0
  },
  {
    name: "DSR제강",
    biznum: "6178102687",
    corpnum: 1801110004753.0,
    cash: 112.0
  },
  {
    name: "디엑스앤브이엑스",
    biznum: "1018171321",
    corpnum: 1101112262890.0,
    cash: 259.0
  },
  {
    name: "E1",
    biznum: "1148116585",
    corpnum: 1101110381387.0,
    cash: 820.0
  },
  {
    name: "EDGC",
    biznum: "1318648582",
    corpnum: 1201110658289.0,
    cash: 35.0
  },
  {
    name: "EG",
    biznum: "3058108153",
    corpnum: 1615110003619.0,
    cash: 75.0
  },
  {
    name: "EMB",
    biznum: "1238639097",
    corpnum: 1341110364153.0,
    cash: 0
  },
  {
    name: "ES큐브",
    biznum: "6218121761",
    corpnum: 1801110031516.0,
    cash: 115.0
  },
  {
    name: "F&F",
    biznum: "1538102451",
    corpnum: 1101117875440.0,
    cash: 635.0
  },
  {
    name: "F&F 홀딩스",
    biznum: "2148609977",
    corpnum: 1101110126783.0,
    cash: 1083.0
  },
  {
    name: "FSN",
    biznum: "2208895545",
    corpnum: 1101115617076.0,
    cash: 286.0
  },
  {
    name: "GH신소재",
    biznum: "6158122009",
    corpnum: 1955110052004.0,
    cash: 33.0
  },
  {
    name: "GKL",
    biznum: "1048196184",
    corpnum: 1101113301457.0,
    cash: 1963.0
  },
  { name: "GRT", biznum: "1798794", corpnum: 0.0, cash: 3032.0 },
  {
    name: "GS",
    biznum: "2208687395",
    corpnum: 1101113045112.0,
    cash: 12581.0
  },
  {
    name: "GST",
    biznum: "1258139609",
    corpnum: 1313110038864.0,
    cash: 386.0
  },
  {
    name: "GS건설",
    biznum: "1048118121",
    corpnum: 1101110002694.0,
    cash: 22925.0
  },
  {
    name: "GS글로벌",
    biznum: "2028133028",
    corpnum: 1101110031479.0,
    cash: 1591.0
  },
  {
    name: "GS리테일",
    biznum: "1168118745",
    corpnum: 1101110090037.0,
    cash: 975.0
  },
  {
    name: "HB솔루션",
    biznum: "1298144690",
    corpnum: 1311110065514.0,
    cash: 437.0
  },
  {
    name: "HB테크놀러지",
    biznum: "1298123356",
    corpnum: 1311110030335.0,
    cash: 232.0
  },
  {
    name: "HDC",
    biznum: "1148158853",
    corpnum: 1101110279433.0,
    cash: 8101.0
  },
  {
    name: "HDC랩스",
    biznum: "1208193646",
    corpnum: 1101111775365.0,
    cash: 447.0
  },
  {
    name: "HDC현대EP",
    biznum: "3118113651",
    corpnum: 1650110006768.0,
    cash: 364.0
  },
  {
    name: "HDC현대산업개발",
    biznum: "3348600815",
    corpnum: 1101116740008.0,
    cash: 5799.0
  },
  {
    name: "HD현대",
    biznum: "5398600614",
    corpnum: 1701110638661.0,
    cash: 56347.0
  },
  {
    name: "HJ중공업",
    biznum: "6028142993",
    corpnum: 1801110602507.0,
    cash: 827.0
  },
  {
    name: "HK이노엔",
    biznum: "2018638914",
    corpnum: 1101115379692.0,
    cash: 971.0
  },
  {
    name: "HL D&I",
    biznum: "2158140656",
    corpnum: 1101110274699.0,
    cash: 707.0
  },
  {
    name: "HLB",
    biznum: "5148113250",
    corpnum: 1701110021600.0,
    cash: 773.0
  },
  {
    name: "HLB글로벌",
    biznum: "2258100025",
    corpnum: 1449110000072.0,
    cash: 158.0
  },
  {
    name: "HLB생명과학",
    biznum: "1168169278",
    corpnum: 1101111568885.0,
    cash: 529.0
  },
  {
    name: "HLB제약",
    biznum: "2088125623",
    corpnum: 1101111538391.0,
    cash: 134.0
  },
  {
    name: "HLB테라퓨틱스",
    biznum: "3148133883",
    corpnum: 1601110099451.0,
    cash: 569.0
  },
  {
    name: "HL만도",
    biznum: "1258625094",
    corpnum: 1313110140776.0,
    cash: 9638.0
  },
  {
    name: "HL홀딩스",
    biznum: "1258130627",
    corpnum: 1313110030042.0,
    cash: 1485.0
  },
  {
    name: "HMM",
    biznum: "2028146197",
    corpnum: 1101110193740.0,
    cash: 103123.0
  },
  {
    name: "HPSP",
    biznum: "2128700598",
    corpnum: 1348110401886.0,
    cash: 1846.0
  },
  {
    name: "HRS",
    biznum: "1368101710",
    corpnum: 1244110001008.0,
    cash: 179.0
  },
  {
    name: "HSD엔진",
    biznum: "6098140128",
    corpnum: 1942110038423.0,
    cash: 915.0
  },
  {
    name: "IBKS제13호스팩",
    biznum: "4228601713",
    corpnum: 1101117417309.0,
    cash: 22.0
  },
  {
    name: "IBKS제16호스팩",
    biznum: "2698702118",
    corpnum: 1101117889821.0,
    cash: 13.0
  },
  {
    name: "IBKS제17호스팩",
    biznum: "7378702187",
    corpnum: 1101118048343.0,
    cash: 11.0
  },
  {
    name: "IBKS제18호스팩",
    biznum: "6938702475",
    corpnum: 1101118233415.0,
    cash: 20.0
  },
  {
    name: "IBKS제19호스팩",
    biznum: "7538702175",
    corpnum: 1101118251277.0,
    cash: 23.0
  },
  {
    name: "아이에이치큐",
    biznum: "2118120395",
    corpnum: 1101110042393.0,
    cash: 41.0
  },
  {
    name: "ISC",
    biznum: "1298140132",
    corpnum: 1311110057876.0,
    cash: 1048.0
  },
  {
    name: "ITX-AI",
    biznum: "1208178820",
    corpnum: 1101111517709.0,
    cash: 15.0
  },
  {
    name: "JB금융지주",
    biznum: "4188144697",
    corpnum: 2101110091498.0,
    cash: 7072.0
  },
  {
    name: "JW생명과학",
    biznum: "1338125692",
    corpnum: 1350110057395.0,
    cash: 396.0
  },
  {
    name: "JW신약",
    biznum: "3128102332",
    corpnum: 1615110001291.0,
    cash: 25.0
  },
  {
    name: "JW중외제약",
    biznum: "1188102477",
    corpnum: 1101110019342.0,
    cash: 354.0
  },
  {
    name: "JW홀딩스",
    biznum: "1088180331",
    corpnum: 1101113710468.0,
    cash: 893.0
  },
  {
    name: "JYP Ent.",
    biznum: "2298109576",
    corpnum: 1101111264764.0,
    cash: 836.0
  },
  {
    name: "KBG",
    biznum: "3128147440",
    corpnum: 1615110041619.0,
    cash: 18.0
  },
  {
    name: "KBI메탈",
    biznum: "5148105779",
    corpnum: 1741110001294.0,
    cash: 221.0
  },
  {
    name: "KB금융",
    biznum: "2018608254",
    corpnum: 1101113975517.0,
    cash: 98219.0
  },
  {
    name: "KB스타리츠",
    biznum: "3808102408",
    corpnum: 1101118191613.0,
    cash: 10.0
  },
  {
    name: "KB오토시스",
    biznum: "2048112301",
    corpnum: 1101110408305.0,
    cash: 123.0
  },
  {
    name: "케이씨씨",
    biznum: "2148170045",
    corpnum: 1101110221814.0,
    cash: 4673.0
  },
  {
    name: "KCC건설",
    biznum: "2148169965",
    corpnum: 1101110607618.0,
    cash: 2355.0
  },
  {
    name: "케이씨씨글라스",
    biznum: "4018701412",
    corpnum: 1101117342473.0,
    cash: 683.0
  },
  {
    name: "KCI",
    biznum: "1338126385",
    corpnum: 1244110011884.0,
    cash: 107.0
  },
  {
    name: "케이씨티시",
    biznum: "2018110323",
    corpnum: 1101110149446.0,
    cash: 420.0
  },
  {
    name: "KC그린홀딩스",
    biznum: "1058170848",
    corpnum: 1101110155683.0,
    cash: 488.0
  },
  {
    name: "KC코트렐",
    biznum: "1058738796",
    corpnum: 1101114255463.0,
    cash: 163.0
  },
  {
    name: "KD",
    biznum: "1398104128",
    corpnum: 1201110012914.0,
    cash: 41.0
  },
  {
    name: "KEC",
    biznum: "1198191880",
    corpnum: 1101113525750.0,
    cash: 128.0
  },
  {
    name: "KG ETS",
    biznum: "2148640997",
    corpnum: 1101111799183.0,
    cash: 2069.0
  },
  {
    name: "KG모빌리언스",
    biznum: "2208182546",
    corpnum: 1101111911050.0,
    cash: 680.0
  },
  {
    name: "KG스틸",
    biznum: "1208142676",
    corpnum: 1101110393308.0,
    cash: 1130.0
  },
  {
    name: "KG이니시스",
    biznum: "2208155597",
    corpnum: 1101111602667.0,
    cash: 2246.0
  },
  {
    name: "KG케미칼",
    biznum: "1308109693",
    corpnum: 1243110008999.0,
    cash: 4592.0
  },
  {
    name: "KH 건설",
    biznum: "4248100184",
    corpnum: 1101115794494.0,
    cash: 489.0
  },
  {
    name: "KH 전자",
    biznum: "1308121004",
    corpnum: 1243110021149.0,
    cash: 47.0
  },
  {
    name: "KH 필룩스",
    biznum: "1278107398",
    corpnum: 1115110004162.0,
    cash: 282.0
  },
  {
    name: "KH바텍",
    biznum: "5138106659",
    corpnum: 1760110007234.0,
    cash: 746.0
  },
  {
    name: "KISCO홀딩스",
    biznum: "6088100778",
    corpnum: 1901110001872.0,
    cash: 645.0
  },
  {
    name: "KNN",
    biznum: "6078128429",
    corpnum: 1801110162585.0,
    cash: 80.0
  },
  {
    name: "KPX생명과학",
    biznum: "4178130958",
    corpnum: 2062110029823.0,
    cash: 27.0
  },
  {
    name: "KPX케미칼",
    biznum: "1108133923",
    corpnum: 1101110166903.0,
    cash: 623.0
  },
  {
    name: "KPX홀딩스",
    biznum: "1108175919",
    corpnum: 1101113520627.0,
    cash: 1739.0
  },
  {
    name: "KR모터스",
    biznum: "3058100020",
    corpnum: 1601110007032.0,
    cash: 205.0
  },
  {
    name: "KSS해운",
    biznum: "1018134423",
    corpnum: 1101110377055.0,
    cash: 476.0
  },
  {
    name: "케이티",
    biznum: "1028142945",
    corpnum: 1101111468754.0,
    cash: 30951.0
  },
  {
    name: "케이티앤지",
    biznum: "3068130866",
    corpnum: 1601110067804.0,
    cash: 15898.0
  },
  {
    name: "KTcs",
    biznum: "3148142683",
    corpnum: 1601110119712.0,
    cash: 546.0
  },
  {
    name: "KTis",
    biznum: "1018171660",
    corpnum: 1101112271510.0,
    cash: 241.0
  },
  {
    name: "KT서브마린",
    biznum: "6188118519",
    corpnum: 1801110181428.0,
    cash: 439.0
  },
  {
    name: "KX",
    biznum: "1018163762",
    corpnum: 1101112093237.0,
    cash: 1051.0
  },
  {
    name: "KX하이텍",
    biznum: "3128125747",
    corpnum: 1648110010780.0,
    cash: 167.0
  },
  {
    name: "LF",
    biznum: "2118787724",
    corpnum: 1101113555187.0,
    cash: 3322.0
  },
  {
    name: "LG",
    biznum: "1168118750",
    corpnum: 1101110003543.0,
    cash: 7028.0
  },
  {
    name: "LG디스플레이",
    biznum: "1208155297",
    corpnum: 1101110393134.0,
    cash: 15408.0
  },
  {
    name: "LG생활건강",
    biznum: "1078198143",
    corpnum: 1101112208000.0,
    cash: 5599.0
  },
  {
    name: "LG에너지솔루션",
    biznum: "8518102050",
    corpnum: 1101117701356.0,
    cash: 21895.0
  },
  {
    name: "LG유플러스",
    biznum: "2208139938",
    corpnum: 1101111296676.0,
    cash: 6433.0
  },
  {
    name: "LG이노텍",
    biznum: "1058174316",
    corpnum: 1101110192180.0,
    cash: 4718.0
  },
  {
    name: "LG전자",
    biznum: "1078614075",
    corpnum: 1101112487050.0,
    cash: 75677.0
  },
  {
    name: "LG헬로비전",
    biznum: "1178113423",
    corpnum: 1101111144297.0,
    cash: 1476.0
  },
  {
    name: "LG화학",
    biznum: "1078198139",
    corpnum: 1101112207995.0,
    cash: 49119.0
  },
  {
    name: "LIG넥스원",
    biznum: "2158635051",
    corpnum: 1101111516933.0,
    cash: 691.0
  },
  {
    name: "LS",
    biznum: "1168119007",
    corpnum: 1101110003965.0,
    cash: 13797.0
  },
  {
    name: "엘에스일렉트릭",
    biznum: "1168119273",
    corpnum: 1101110520076.0,
    cash: 5576.0
  },
  {
    name: "LS네트웍스",
    biznum: "6228104805",
    corpnum: 1801110044717.0,
    cash: 339.0
  },
  {
    name: "LS전선아시아",
    biznum: "8268600105",
    corpnum: 1341110411706.0,
    cash: 371.0
  },
  {
    name: "LX세미콘",
    biznum: "3148129147",
    corpnum: 1601110089395.0,
    cash: 3583.0
  },
  {
    name: "LX인터내셔널",
    biznum: "1168118686",
    corpnum: 1101110004632.0,
    cash: 11903.0
  },
  {
    name: "LX하우시스",
    biznum: "1078718122",
    corpnum: 1101114071207.0,
    cash: 1871.0
  },
  {
    name: "LX홀딩스",
    biznum: "7668601855",
    corpnum: 1101117875359.0,
    cash: 2150.0
  },
  {
    name: "MDS테크",
    biznum: "1178122859",
    corpnum: 1101111626188.0,
    cash: 468.0
  },
  {
    name: "MH에탄올",
    biznum: "6088103800",
    corpnum: 1901110003563.0,
    cash: 195.0
  },
  {
    name: "UCI",
    biznum: "4098106684",
    corpnum: 2043110000419.0,
    cash: 61.0
  },
  {
    name: "NAVER",
    biznum: "2208162517",
    corpnum: 1101111707178.0,
    cash: 28078.0
  },
  {
    name: "NEW",
    biznum: "1208729530",
    corpnum: 1101113922550.0,
    cash: 242.0
  },
  {
    name: "NE능률",
    biznum: "1058165267",
    corpnum: 1101111051137.0,
    cash: 20.0
  },
  {
    name: "엔에이치엔",
    biznum: "1448115549",
    corpnum: 1311110350139.0,
    cash: 5978.0
  },
  {
    name: "NHN벅스",
    biznum: "2118715555",
    corpnum: 1101112539322.0,
    cash: 82.0
  },
  {
    name: "NHN한국사이버결제",
    biznum: "1058168890",
    corpnum: 1101111113929.0,
    cash: 1604.0
  },
  {
    name: "NH올원리츠",
    biznum: "6068701550",
    corpnum: 1101117299294.0,
    cash: 155.0
  },
  {
    name: "NH투자증권",
    biznum: "1168103693",
    corpnum: 1101110098130.0,
    cash: 17138.0
  },
  {
    name: "NICE",
    biznum: "2148174186",
    corpnum: 1101110505614.0,
    cash: 5645.0
  },
  {
    name: "NICE평가정보",
    biznum: "1168115020",
    corpnum: 1101110393283.0,
    cash: 669.0
  },
  {
    name: "NI스틸",
    biznum: "2148171272",
    corpnum: 1101110137491.0,
    cash: 40.0
  },
  {
    name: "엔피씨",
    biznum: "1348126904",
    corpnum: 1101110212699.0,
    cash: 427.0
  },
  {
    name: "OCI",
    biznum: "5068100069",
    corpnum: 1746110000981.0,
    cash: 12217.0
  },
  {
    name: "PI첨단소재",
    biznum: "3018197858",
    corpnum: 1543110022729.0,
    cash: 214.0
  },
  {
    name: "PN풍년",
    biznum: "1348108319",
    corpnum: 1101110155378.0,
    cash: 116.0
  },
  {
    name: "POSCO홀딩스",
    biznum: "5068100017",
    corpnum: 1746110000741.0,
    cash: 74959.0
  },
  {
    name: "RFHIC",
    biznum: "6938100117",
    corpnum: 1101115695337.0,
    cash: 174.0
  },
  {
    name: "RF머트리얼즈",
    biznum: "1408126307",
    corpnum: 1355110186996.0,
    cash: 56.0
  },
  {
    name: "S&K폴리텍",
    biznum: "1348147990",
    corpnum: 1355110101465.0,
    cash: 859.0
  },
  {
    name: "S-Oil",
    biznum: "1168136743",
    corpnum: 1101110189955.0,
    cash: 8453.0
  },
  {
    name: "SBI인베스트먼트",
    biznum: "1208164573",
    corpnum: 1101110511273.0,
    cash: 208.0
  },
  {
    name: "SBI핀테크솔루션즈",
    biznum: "35194",
    corpnum: 0.0,
    cash: 1613.0
  },
  {
    name: "SBS",
    biznum: "1168139357",
    corpnum: 1101110731483.0,
    cash: 1008.0
  },
  {
    name: "SBS콘텐츠허브",
    biznum: "1168176255",
    corpnum: 1101111757694.0,
    cash: 235.0
  },
  {
    name: "SBW생명과학",
    biznum: "1248626732",
    corpnum: 1358110109900.0,
    cash: 390.0
  },
  {
    name: "SCI평가정보",
    biznum: "1148147958",
    corpnum: 1101110853419.0,
    cash: 107.0
  },
  {
    name: "SDN",
    biznum: "2078141182",
    corpnum: 1101111020299.0,
    cash: 39.0
  },
  {
    name: "SFA반도체",
    biznum: "3128130935",
    corpnum: 1615110027263.0,
    cash: 451.0
  },
  {
    name: "SG",
    biznum: "1378603486",
    corpnum: 1201110517154.0,
    cash: 52.0
  },
  {
    name: "SG&G",
    biznum: "2208140774",
    corpnum: 1101110984199.0,
    cash: 47.0
  },
  {
    name: "SGA",
    biznum: "1098152385",
    corpnum: 1101111487267.0,
    cash: 55.0
  },
  {
    name: "SGA솔루션즈",
    biznum: "1078801818",
    corpnum: 1101115221158.0,
    cash: 153.0
  },
  {
    name: "SGC에너지",
    biznum: "2148189700",
    corpnum: 1101110079817.0,
    cash: 2873.0
  },
  {
    name: "SGC이테크건설",
    biznum: "2148189369",
    corpnum: 1101110327555.0,
    cash: 1184.0
  },
  {
    name: "SG글로벌",
    biznum: "3148108778",
    corpnum: 1615110000037.0,
    cash: 121.0
  },
  {
    name: "SG세계물산",
    biznum: "1198101073",
    corpnum: 1101110048002.0,
    cash: 390.0
  },
  {
    name: "SHD",
    biznum: "1348129352",
    corpnum: 1101110028632.0,
    cash: 139.0
  },
  {
    name: "SH에너지화학",
    biznum: "4018109407",
    corpnum: 1341110000210.0,
    cash: 116.0
  },
  {
    name: "SIMPAC",
    biznum: "1228100819",
    corpnum: 1201110002189.0,
    cash: 2448.0
  },
  {
    name: "에스제이엠",
    biznum: "1348666202",
    corpnum: 1314110241465.0,
    cash: 384.0
  },
  {
    name: "에스제이엠홀딩스",
    biznum: "1348102386",
    corpnum: 1301110008862.0,
    cash: 458.0
  },
  {
    name: "SK",
    biznum: "2208116503",
    corpnum: 1101110769583.0,
    cash: 166837.0
  },
  {
    name: "SKC",
    biznum: "1358101250",
    corpnum: 1301110001585.0,
    cash: 10255.0
  },
  {
    name: "SK가스",
    biznum: "1168112528",
    corpnum: 1101110413247.0,
    cash: 3222.0
  },
  {
    name: "SK네트웍스",
    biznum: "1248100718",
    corpnum: 1301110005199.0,
    cash: 2757.0
  },
  {
    name: "SK디스커버리",
    biznum: "1358101191",
    corpnum: 1301110005727.0,
    cash: 5967.0
  },
  {
    name: "SK디앤디",
    biznum: "1018604792",
    corpnum: 1101113001685.0,
    cash: 516.0
  },
  {
    name: "SK렌터카",
    biznum: "1138132864",
    corpnum: 1101110577233.0,
    cash: 477.0
  },
  {
    name: "SK리츠",
    biznum: "2488602055",
    corpnum: 1101117815446.0,
    cash: 1.0
  },
  {
    name: "SK바이오사이언스",
    biznum: "8188600991",
    corpnum: 1311110523736.0,
    cash: 875.0
  },
  {
    name: "에스케이바이오팜",
    biznum: "1018662394",
    corpnum: 1101114570720.0,
    cash: 1154.0
  },
  {
    name: "SK스퀘어",
    biznum: "5408102301",
    corpnum: 1101118077821.0,
    cash: 6583.0
  },
  {
    name: "SK아이이테크놀로지",
    biznum: "5598601539",
    corpnum: 1101117064217.0,
    cash: 5884.0
  },
  {
    name: "SK이노베이션",
    biznum: "1018632319",
    corpnum: 1101113710385.0,
    cash: 64768.0
  },
  {
    name: "SK증권",
    biznum: "1168136307",
    corpnum: 1101110037112.0,
    cash: 2428.0
  },
  {
    name: "SK케미칼",
    biznum: "8468100915",
    corpnum: 1311110501021.0,
    cash: 2622.0
  },
  {
    name: "SK텔레콤",
    biznum: "1048137225",
    corpnum: 1101110371346.0,
    cash: 11915.0
  },
  {
    name: "SK하이닉스",
    biznum: "1268103725",
    corpnum: 1344110001387.0,
    cash: 47192.0
  },
  {
    name: "SM C&C",
    biznum: "2198111153",
    corpnum: 1101110275134.0,
    cash: 581.0
  },
  {
    name: "SM Life Design",
    biznum: "1138150713",
    corpnum: 1101111626063.0,
    cash: 90.0
  },
  {
    name: "SNT모티브",
    biznum: "6218147887",
    corpnum: 1801110396069.0,
    cash: 1904.0
  },
  {
    name: "SNT에너지",
    biznum: "6098181774",
    corpnum: 1942110090598.0,
    cash: 1139.0
  },
  {
    name: "SNT중공업",
    biznum: "1058132752",
    corpnum: 1101110042880.0,
    cash: 298.0
  },
  {
    name: "SNT홀딩스",
    biznum: "1268114881",
    corpnum: 1244110002907.0,
    cash: 3372.0
  },
  {
    name: "SPC삼립",
    biznum: "1338122244",
    corpnum: 1101110090516.0,
    cash: 290.0
  },
  {
    name: "STX",
    biznum: "6098101917",
    corpnum: 1942110000183.0,
    cash: 228.0
  },
  {
    name: "STX엔진",
    biznum: "6098162781",
    corpnum: 1942110066763.0,
    cash: 566.0
  },
  {
    name: "STX중공업",
    biznum: "6098148213",
    corpnum: 1942110048381.0,
    cash: 672.0
  },
  {
    name: "SUN&L",
    biznum: "1098133530",
    corpnum: 1101110027593.0,
    cash: 575.0
  },
  {
    name: "SV인베스트먼트",
    biznum: "1078677065",
    corpnum: 1101113433440.0,
    cash: 60.0
  },
  {
    name: "티비에이치글로벌",
    biznum: "6068164892",
    corpnum: 1801110346204.0,
    cash: 93.0
  },
  {
    name: "TCC스틸",
    biznum: "1078113810",
    corpnum: 1101110032112.0,
    cash: 241.0
  },
  {
    name: "THE E&M",
    biznum: "6038150424",
    corpnum: 1801110414837.0,
    cash: 28.0
  },
  {
    name: "THE MIDONG",
    biznum: "2148844319",
    corpnum: 1101114122604.0,
    cash: 86.0
  },
  {
    name: "TJ미디어",
    biznum: "1308144332",
    corpnum: 1101110770548.0,
    cash: 68.0
  },
  {
    name: "TKG애강",
    biznum: "3128107981",
    corpnum: 1545110001571.0,
    cash: 13.0
  },
  {
    name: "티케이지휴켐스",
    biznum: "2018176228",
    corpnum: 1101112611906.0,
    cash: 146.0
  },
  {
    name: "TPC",
    biznum: "1098114912",
    corpnum: 1101110245575.0,
    cash: 31.0
  },
  {
    name: "TS인베스트먼트",
    biznum: "2208761581",
    corpnum: 1101113840843.0,
    cash: 90.0
  },
  {
    name: "TS트릴리온",
    biznum: "4258701422",
    corpnum: 1101116982139.0,
    cash: 2.0
  },
  {
    name: "TYM",
    biznum: "1068128552",
    corpnum: 1101110032899.0,
    cash: 241.0
  },
  {
    name: "WISCOM",
    biznum: "1348103288",
    corpnum: 1301110009274.0,
    cash: 27.0
  },
  {
    name: "YBM넷",
    biznum: "2208189608",
    corpnum: 1101111990335.0,
    cash: 208.0
  },
  {
    name: "YG PLUS",
    biznum: "1208167338",
    corpnum: 1101111342289.0,
    cash: 47.0
  },
  {
    name: "YTN",
    biznum: "1028132883",
    corpnum: 1101110971873.0,
    cash: 175.0
  },
  {
    name: "YW",
    biznum: "1298117121",
    corpnum: 1311110021699.0,
    cash: 40.0
  },
  {
    name: "iMBC",
    biznum: "1078178996",
    corpnum: 1101111903643.0,
    cash: 48.0
  },
  {
    name: "가비아",
    biznum: "2148639239",
    corpnum: 1101111777585.0,
    cash: 390.0
  },
  {
    name: "가온미디어",
    biznum: "1298142066",
    corpnum: 1311110060978.0,
    cash: 837.0
  },
  {
    name: "가온전선",
    biznum: "1238100049",
    corpnum: 1341110000567.0,
    cash: 200.0
  },
  {
    name: "가온칩스",
    biznum: "1448104023",
    corpnum: 1311110319656.0,
    cash: 70.0
  },
  {
    name: "감성코퍼레이션",
    biznum: "1058166548",
    corpnum: 1101111061954.0,
    cash: 91.0
  },
  {
    name: "강남제비스코",
    biznum: "6058103330",
    corpnum: 1801110003391.0,
    cash: 622.0
  },
  {
    name: "강스템바이오텍",
    biznum: "1198634832",
    corpnum: 1101114461002.0,
    cash: 24.0
  },
  {
    name: "강원랜드",
    biznum: "2258110770",
    corpnum: 1449110001666.0,
    cash: 2343.0
  },
  {
    name: "강원에너지",
    biznum: "1248146960",
    corpnum: 1101110191398.0,
    cash: 4.0
  },
  {
    name: "갤럭시아머니트리",
    biznum: "1208160844",
    corpnum: 1101111081928.0,
    cash: 87.0
  },
  {
    name: "갤럭시아에스엠",
    biznum: "1348102367",
    corpnum: 1301110008771.0,
    cash: 33.0
  },
  {
    name: "경남스틸",
    biznum: "6098111206",
    corpnum: 1942110006090.0,
    cash: 60.0
  },
  {
    name: "경남제약",
    biznum: "1348142258",
    corpnum: 1350110085255.0,
    cash: 357.0
  },
  {
    name: "경농",
    biznum: "2148108779",
    corpnum: 1101110089395.0,
    cash: 203.0
  },
  {
    name: "경동나비엔",
    biznum: "1258101234",
    corpnum: 1347110001159.0,
    cash: 468.0
  },
  {
    name: "경동도시가스",
    biznum: "1438132491",
    corpnum: 2301110274751.0,
    cash: 807.0
  },
  {
    name: "경동인베스트",
    biznum: "6208100410",
    corpnum: 1812110000906.0,
    cash: 218.0
  },
  {
    name: "경동제약",
    biznum: "1248135518",
    corpnum: 1201110003765.0,
    cash: 119.0
  },
  {
    name: "경방",
    biznum: "1078105232",
    corpnum: 1101110013287.0,
    cash: 170.0
  },
  {
    name: "경보제약",
    biznum: "3128104567",
    corpnum: 1648110001961.0,
    cash: 75.0
  },
  {
    name: "경인양행",
    biznum: "1378100562",
    corpnum: 1201110005703.0,
    cash: 366.0
  },
  {
    name: "경인전자",
    biznum: "1198102373",
    corpnum: 1101110150229.0,
    cash: 123.0
  },
  {
    name: "경창산업",
    biznum: "5038104241",
    corpnum: 1701110007733.0,
    cash: 334.0
  },
  {
    name: "계룡건설산업",
    biznum: "3148107954",
    corpnum: 1601110003121.0,
    cash: 3936.0
  },
  {
    name: "계양전기",
    biznum: "1048134422",
    corpnum: 1101110212889.0,
    cash: 76.0
  },
  {
    name: "고려산업",
    biznum: "6048100024",
    corpnum: 1801110001494.0,
    cash: 253.0
  },
  {
    name: "고려시멘트",
    biznum: "1078818207",
    corpnum: 1101115403623.0,
    cash: 32.0
  },
  {
    name: "고려신용정보",
    biznum: "2148172290",
    corpnum: 1101110787080.0,
    cash: 113.0
  },
  {
    name: "고려아연",
    biznum: "2118111260",
    corpnum: 1101110168404.0,
    cash: 11378.0
  },
  {
    name: "고려제강",
    biznum: "6178100049",
    corpnum: 1801110001220.0,
    cash: 2015.0
  },
  {
    name: "고려제약",
    biznum: "1268104796",
    corpnum: 1344110001840.0,
    cash: 66.0
  },
  {
    name: "고바이오랩",
    biznum: "1198692996",
    corpnum: 1101115487437.0,
    cash: 467.0
  },
  {
    name: "고영",
    biznum: "1048171655",
    corpnum: 1101112508088.0,
    cash: 468.0
  },
  {
    name: "골드앤에스",
    biznum: "1208163837",
    corpnum: 1101111100926.0,
    cash: 3.0
  },
  {
    name: "골드퍼시픽",
    biznum: "2208145629",
    corpnum: 1101111430498.0,
    cash: 529.0
  },
  { 
    name: "골든센츄리", 
    biznum: "42590", 
    corpnum: 0.0, 
    cash: 2312.0 
  },
  {
    name: "골프존",
    biznum: "1228700053",
    corpnum: 1601110393069.0,
    cash: 686.0
  },
  {
    name: "골프존뉴딘홀딩스",
    biznum: "3058137721",
    corpnum: 1601110097976.0,
    cash: 397.0
  },
  {
    name: "공구우먼",
    biznum: "1278601517",
    corpnum: 2801110078161.0,
    cash: 18.0
  },
  {
    name: "광동제약",
    biznum: "1138108888",
    corpnum: 1101110152134.0,
    cash: 988.0
  },
  {
    name: "광림",
    biznum: "3018108302",
    corpnum: 1201110009268.0,
    cash: 698.0
  },
  {
    name: "광명전기",
    biznum: "1348104007",
    corpnum: 1301110006270.0,
    cash: 189.0
  },
  {
    name: "광무",
    biznum: "2208110756",
    corpnum: 1101110779152.0,
    cash: 750.0
  },
  {
    name: "광전자",
    biznum: "4038102808",
    corpnum: 2149110002560.0,
    cash: 240.0
  },
  {
    name: "광주신세계",
    biznum: "4108127563",
    corpnum: 2001110054795.0,
    cash: 1564.0
  },
  {
    name: "광진실업",
    biznum: "6038108305",
    corpnum: 1801110025882.0,
    cash: 161.0
  },
  {
    name: "교보10호기업인수목적",
    biznum: "1398701725",
    corpnum: 1101117471470.0,
    cash: 22.0
  },
  {
    name: "교보11호스팩",
    biznum: "2678702257",
    corpnum: 1101117980158.0,
    cash: 24.0
  },
  {
    name: "교보12호스팩",
    biznum: "8998102595",
    corpnum: 1101118199592.0,
    cash: 23.0
  },
  {
    name: "교보증권",
    biznum: "1168104407",
    corpnum: 1101110018089.0,
    cash: 1474.0
  },
  {
    name: "교촌에프앤비",
    biznum: "5138116574",
    corpnum: 1752110009005.0,
    cash: 110.0
  },
  {
    name: "구영테크",
    biznum: "5058104626",
    corpnum: 1747110001791.0,
    cash: 81.0
  },
  {
    name: "국도화학",
    biznum: "1198104497",
    corpnum: 1101110126642.0,
    cash: 823.0
  },
  {
    name: "국동",
    biznum: "2188106865",
    corpnum: 1101110084767.0,
    cash: 112.0
  },
  {
    name: "국보",
    biznum: "1048124870",
    corpnum: 1101110296073.0,
    cash: 44.0
  },
  {
    name: "국보디자인",
    biznum: "1028122615",
    corpnum: 1101110564066.0,
    cash: 423.0
  },
  {
    name: "국순당",
    biznum: "1248114925",
    corpnum: 2013110001155.0,
    cash: 481.0
  },
  {
    name: "국영지앤엠",
    biznum: "2078141843",
    corpnum: 1101110103707.0,
    cash: 116.0
  },
  {
    name: "국일신동",
    biznum: "1398102120",
    corpnum: 1201110082793.0,
    cash: 26.0
  },
  {
    name: "국일제지",
    biznum: "1358101449",
    corpnum: 1345110001377.0,
    cash: 36.0
  },
  {
    name: "국전약품",
    biznum: "1168701173",
    corpnum: 1101116868529.0,
    cash: 266.0
  },
  {
    name: "국제약품",
    biznum: "2078100309",
    corpnum: 1101110032154.0,
    cash: 99.0
  },
  {
    name: "그래디언트",
    biznum: "2208147821",
    corpnum: 1101111468093.0,
    cash: 944.0
  },
  {
    name: "그리티",
    biznum: "1098159281",
    corpnum: 1101111773799.0,
    cash: 16.0
  },
  {
    name: "그린케미칼",
    biznum: "3168103672",
    corpnum: 1614110012349.0,
    cash: 91.0
  },
  {
    name: "그린플러스",
    biznum: "1248152399",
    corpnum: 1348110033605.0,
    cash: 130.0
  },
  {
    name: "극동유화",
    biznum: "6218100510",
    corpnum: 1845110001335.0,
    cash: 86.0
  },
  { name: "글로벌에스엠", biznum: "OI216422", corpnum: 0.0, cash: 264.0 },
  {
    name: "글로벌텍스프리",
    biznum: "1048656135",
    corpnum: 1101115480233.0,
    cash: 603.0
  },
  {
    name: "글로본",
    biznum: "1168116261",
    corpnum: 1101110514011.0,
    cash: 11.0
  },
  {
    name: "금강공업",
    biznum: "6038115882",
    corpnum: 1801110034320.0,
    cash: 1005.0
  },
  {
    name: "금강철강",
    biznum: "2028109038",
    corpnum: 1101110207799.0,
    cash: 426.0
  },
  {
    name: "금비",
    biznum: "1268109409",
    corpnum: 1201110002022.0,
    cash: 121.0
  },
  {
    name: "금양",
    biznum: "6068104711",
    corpnum: 1801110003101.0,
    cash: 602.0
  },
  {
    name: "금호건설",
    biznum: "1048131309",
    corpnum: 1101110134877.0,
    cash: 2282.0
  },
  {
    name: "금호석유화학",
    biznum: "1028131147",
    corpnum: 1101110205975.0,
    cash: 4280.0
  },
  {
    name: "금호에이치티",
    biznum: "4098107801",
    corpnum: 2059110000169.0,
    cash: 556.0
  },
  {
    name: "금호전기",
    biznum: "1058100527",
    corpnum: 1101110028541.0,
    cash: 62.0
  },
  {
    name: "금호타이어",
    biznum: "1018195610",
    corpnum: 1101112810590.0,
    cash: 2004.0
  },
  {
    name: "금화피에스시",
    biznum: "1208106796",
    corpnum: 1101110295778.0,
    cash: 455.0
  },
  {
    name: "기가레인",
    biznum: "1078177264",
    corpnum: 1101111867831.0,
    cash: 186.0
  },
  {
    name: "기산텔레콤",
    biznum: "1208166080",
    corpnum: 1101111073454.0,
    cash: 106.0
  },
  {
    name: "기신정기",
    biznum: "1398116717",
    corpnum: 1201110046476.0,
    cash: 147.0
  },
  {
    name: "기아",
    biznum: "1198102316",
    corpnum: 1101110037998.0,
    cash: 148026.0
  },
  {
    name: "기업은행",
    biznum: "2028100978",
    corpnum: 1101350000903.0,
    cash: 53420.0
  },
  {
    name: "까뮤이앤씨",
    biznum: "6048116870",
    corpnum: 1101110243793.0,
    cash: 44.0
  },
  {
    name: "까스텔바작",
    biznum: "4128600376",
    corpnum: 1101116136877.0,
    cash: 65.0
  },
  {
    name: "깨끗한나라",
    biznum: "2018112618",
    corpnum: 1101110063779.0,
    cash: 168.0
  },
  {
    name: "나노",
    biznum: "1078804227",
    corpnum: 1101115248376.0,
    cash: 82.0
  },
  {
    name: "나노브릭",
    biznum: "1358191640",
    corpnum: 1358110139600.0,
    cash: 32.0
  },
  {
    name: "나노신소재",
    biznum: "3058136339",
    corpnum: 1601110094162.0,
    cash: 286.0
  },
  {
    name: "나노씨엠에스",
    biznum: "3128162155",
    corpnum: 1648110026753.0,
    cash: 6.0
  },
  {
    name: "나노엔텍",
    biznum: "2298108112",
    corpnum: 1101110550502.0,
    cash: 142.0
  },
  {
    name: "나노캠텍",
    biznum: "1358135463",
    corpnum: 1345110037710.0,
    cash: 39.0
  },
  {
    name: "나라엠앤디",
    biznum: "6098135789",
    corpnum: 1942110033580.0,
    cash: 145.0
  },
  {
    name: "나래나노텍",
    biznum: "1358118218",
    corpnum: 1345110017746.0,
    cash: 13.0
  },
  {
    name: "나무가",
    biznum: "1298177736",
    corpnum: 1311110126192.0,
    cash: 242.0
  },
  {
    name: "나무기술",
    biznum: "6388100309",
    corpnum: 1101116016673.0,
    cash: 57.0
  },
  {
    name: "나스미디어",
    biznum: "2208180363",
    corpnum: 1101111905516.0,
    cash: 611.0
  },
  {
    name: "나우IB",
    biznum: "1208718329",
    corpnum: 1101113731563.0,
    cash: 60.0
  },
  {
    name: "나이벡",
    biznum: "1018602611",
    corpnum: 1101112940933.0,
    cash: 239.0
  },
  {
    name: "나이스디앤비",
    biznum: "1078624874",
    corpnum: 1101112629347.0,
    cash: 176.0
  },
  {
    name: "나이스정보통신",
    biznum: "2208115770",
    corpnum: 1101110574453.0,
    cash: 2185.0
  },
  {
    name: "나인테크",
    biznum: "2278700493",
    corpnum: 1101116353116.0,
    cash: 113.0
  },
  {
    name: "남광토건",
    biznum: "1208101995",
    corpnum: 1101110017411.0,
    cash: 278.0
  },
  {
    name: "남선알미늄",
    biznum: "5028100107",
    corpnum: 1701110005042.0,
    cash: 498.0
  },
  {
    name: "남성",
    biznum: "1138107079",
    corpnum: 1101110054760.0,
    cash: 138.0
  },
  {
    name: "남양유업",
    biznum: "2028104367",
    corpnum: 1101110092976.0,
    cash: 1175.0
  },
  {
    name: "남해화학",
    biznum: "2018145104",
    corpnum: 1101110164717.0,
    cash: 1336.0
  },
  {
    name: "남화산업",
    biznum: "4088111016",
    corpnum: 2001110021009.0,
    cash: 102.0
  },
  {
    name: "남화토건",
    biznum: "4088108184",
    corpnum: 2001110002843.0,
    cash: 209.0
  },
  {
    name: "내츄럴엔도텍",
    biznum: "1068199964",
    corpnum: 1101112246414.0,
    cash: 7.0
  },
  {
    name: "네오리진",
    biznum: "1148657392",
    corpnum: 1101113623463.0,
    cash: 130.0
  },
  {
    name: "네오셈",
    biznum: "1418600436",
    corpnum: 1101116168614.0,
    cash: 109.0
  },
  {
    name: "네오오토",
    biznum: "1048625573",
    corpnum: 1101114255801.0,
    cash: 211.0
  },
  {
    name: "네오위즈",
    biznum: "1208714245",
    corpnum: 1101113667552.0,
    cash: 1200.0
  },
  {
    name: "네오위즈홀딩스",
    biznum: "2148616503",
    corpnum: 1101111419517.0,
    cash: 1582.0
  },
  { name: "네오이뮨텍", biznum: "47452", corpnum: 0.0, cash: 1390.0 },
  {
    name: "네오크레마",
    biznum: "2158693463",
    corpnum: 1101113594763.0,
    cash: 39.0
  },
  {
    name: "네오티스",
    biznum: "1258134040",
    corpnum: 1346110015095.0,
    cash: 219.0
  },
  {
    name: "네오팜",
    biznum: "3058138977",
    corpnum: 1601110100688.0,
    cash: 78.0
  },
  {
    name: "네오펙트",
    biznum: "1198629663",
    corpnum: 1101114362531.0,
    cash: 13.0
  },
  {
    name: "네온테크",
    biznum: "3358701207",
    corpnum: 1101116852431.0,
    cash: 47.0
  },
  {
    name: "네이블커뮤니케이션즈",
    biznum: "2148728030",
    corpnum: 1101112707367.0,
    cash: 29.0
  },
  {
    name: "네이처셀",
    biznum: "1308105606",
    corpnum: 1243110005721.0,
    cash: 335.0
  },
  {
    name: "네패스",
    biznum: "3038105198",
    corpnum: 1545110002355.0,
    cash: 1315.0
  },
  {
    name: "네패스아크",
    biznum: "4138601441",
    corpnum: 1501110267365.0,
    cash: 718.0
  },
  {
    name: "넥센",
    biznum: "6188115827",
    corpnum: 1846110000583.0,
    cash: 2180.0
  },
  {
    name: "넥센타이어",
    biznum: "6218110769",
    corpnum: 1101110014219.0,
    cash: 1492.0
  },
  {
    name: "넥스턴바이오",
    biznum: "1358139760",
    corpnum: 1345110042264.0,
    cash: 179.0
  },
  {
    name: "넥스트아이",
    biznum: "1248157924",
    corpnum: 1348110037954.0,
    cash: 280.0
  },
  {
    name: "넥스트칩",
    biznum: "3398601497",
    corpnum: 1311110541069.0,
    cash: 36.0
  },
  {
    name: "넥스틴",
    biznum: "1268632036",
    corpnum: 1344110044981.0,
    cash: 277.0
  },
  {
    name: "넥슨게임즈",
    biznum: "1868600123",
    corpnum: 1101115781277.0,
    cash: 586.0
  },
  {
    name: "넵튠",
    biznum: "8068800032",
    corpnum: 1101115671171.0,
    cash: 303.0
  },
  {
    name: "넷마블",
    biznum: "1058764746",
    corpnum: 1101114731299.0,
    cash: 7285.0
  },
  {
    name: "노랑풍선",
    biznum: "1048164440",
    corpnum: 1101112307539.0,
    cash: 97.0
  },
  {
    name: "노루페인트",
    biznum: "1238606034",
    corpnum: 1341110142575.0,
    cash: 445.0
  },
  {
    name: "노루홀딩스",
    biznum: "1238102601",
    corpnum: 1341110002878.0,
    cash: 863.0
  },
  {
    name: "노바렉스",
    biznum: "3178111175",
    corpnum: 1501110120399.0,
    cash: 247.0
  },
  {
    name: "노바텍",
    biznum: "1238609157",
    corpnum: 1351110083661.0,
    cash: 224.0
  },
  {
    name: "노블엠앤비",
    biznum: "1208604740",
    corpnum: 1101111905706.0,
    cash: 16.0
  },
  {
    name: "노을",
    biznum: "4828100161",
    corpnum: 1101115906974.0,
    cash: 5.0
  },
  {
    name: "노터스",
    biznum: "1328605757",
    corpnum: 2842110063231.0,
    cash: 114.0
  },
  {
    name: "녹십자",
    biznum: "3038117108",
    corpnum: 1101110109854.0,
    cash: 1620.0
  },
  {
    name: "녹십자엠에스",
    biznum: "1358167475",
    corpnum: 1345110076627.0,
    cash: 76.0
  },
  {
    name: "녹십자웰빙",
    biznum: "1358172584",
    corpnum: 1345110083218.0,
    cash: 101.0
  },
  {
    name: "녹십자홀딩스",
    biznum: "1358105009",
    corpnum: 1345110000014.0,
    cash: 2423.0
  },
  {
    name: "녹원씨엔아이",
    biznum: "2148113888",
    corpnum: 1101110529747.0,
    cash: 42.0
  },
  {
    name: "농심",
    biznum: "1188103914",
    corpnum: 1101110057574.0,
    cash: 1563.0
  },
  {
    name: "농심홀딩스",
    biznum: "1088161052",
    corpnum: 1101112819005.0,
    cash: 286.0
  },
  {
    name: "농우바이오",
    biznum: "1248116938",
    corpnum: 1301110015049.0,
    cash: 230.0
  },
  {
    name: "누리플랜",
    biznum: "1368116116",
    corpnum: 1101111015779.0,
    cash: 39.0
  },
  {
    name: "누리플렉스",
    biznum: "1168134196",
    corpnum: 1101111029671.0,
    cash: 169.0
  },
  {
    name: "누보",
    biznum: "4748601636",
    corpnum: 1101117182655.0,
    cash: 247.0
  },
  {
    name: "뉴보텍",
    biznum: "2248104616",
    corpnum: 1412110004279.0,
    cash: 44.0
  },
  {
    name: "뉴인텍",
    biznum: "1308102119",
    corpnum: 1243110003006.0,
    cash: 23.0
  },
  {
    name: "뉴지랩파마",
    biznum: "1308604354",
    corpnum: 1211110117424.0,
    cash: 80.0
  },
  {
    name: "뉴트리",
    biznum: "2148680043",
    corpnum: 1101112214429.0,
    cash: 426.0
  },
  {
    name: "뉴파워프라즈마",
    biznum: "2128144110",
    corpnum: 1101111784952.0,
    cash: 530.0
  },
  {
    name: "뉴프렉스",
    biznum: "1348156859",
    corpnum: 1350110103601.0,
    cash: 113.0
  },
  {
    name: "다날",
    biznum: "1138144055",
    corpnum: 1101111435810.0,
    cash: 1117.0
  },
  {
    name: "다믈멀티미디어",
    biznum: "2148628386",
    corpnum: 1101111621956.0,
    cash: 264.0
  },
  {
    name: "다보링크",
    biznum: "8238801453",
    corpnum: 1101117263174.0,
    cash: 39.0
  },
  {
    name: "다산네트웍스",
    biznum: "1298116613",
    corpnum: 1101110924765.0,
    cash: 568.0
  },
  {
    name: "다스코",
    biznum: "4088125446",
    corpnum: 2052110005288.0,
    cash: 307.0
  },
  {
    name: "다올인베스트먼트",
    biznum: "2208768075",
    corpnum: 1101113923764.0,
    cash: 144.0
  },
  {
    name: "다올투자증권",
    biznum: "1168100319",
    corpnum: 1101110878706.0,
    cash: 5056.0
  },
  {
    name: "다우기술",
    biznum: "2208102810",
    corpnum: 1101110414758.0,
    cash: 15119.0
  },
  {
    name: "다우데이타",
    biznum: "2208101733",
    corpnum: 1101110863484.0,
    cash: 16431.0
  },
  {
    name: "다원시스",
    biznum: "1348129935",
    corpnum: 1350110049607.0,
    cash: 1253.0
  },
  {
    name: "다이나믹디자인",
    biznum: "4108149892",
    corpnum: 2001110097272.0,
    cash: 47.0
  },
  {
    name: "대교",
    biznum: "1128141114",
    corpnum: 1101110514029.0,
    cash: 500.0
  },
  {
    name: "대구백화점",
    biznum: "5018100026",
    corpnum: 1701110003814.0,
    cash: 23.0
  },
  {
    name: "대덕",
    biznum: "1348106363",
    corpnum: 1301110007608.0,
    cash: 2153.0
  },
  {
    name: "대덕전자",
    biznum: "6748701704",
    corpnum: 1314110460809.0,
    cash: 1316.0
  },
  {
    name: "대동",
    biznum: "5148106690",
    corpnum: 1911110000104.0,
    cash: 1263.0
  },
  {
    name: "대동금속",
    biznum: "5148106365",
    corpnum: 1741110002630.0,
    cash: 19.0
  },
  {
    name: "대동기어",
    biznum: "6198103305",
    corpnum: 1911110000758.0,
    cash: 6.0
  },
  {
    name: "대동스틸",
    biznum: "1168135991",
    corpnum: 1101110150691.0,
    cash: 113.0
  },
  {
    name: "대동전자",
    biznum: "1198104629",
    corpnum: 1101110134819.0,
    cash: 374.0
  },
  {
    name: "대륙제관",
    biznum: "2208104875",
    corpnum: 1101110073877.0,
    cash: 179.0
  },
  {
    name: "대림비앤코",
    biznum: "6098100261",
    corpnum: 1942110000018.0,
    cash: 225.0
  },
  {
    name: "대림제지",
    biznum: "1248132409",
    corpnum: 1348110003020.0,
    cash: 251.0
  },
  {
    name: "대림통상",
    biznum: "1028101153",
    corpnum: 1101110021678.0,
    cash: 62.0
  },
  {
    name: "대명소노시즌",
    biznum: "6048115788",
    corpnum: 1801110068668.0,
    cash: 177.0
  },
  {
    name: "대명에너지",
    biznum: "1298136429",
    corpnum: 1311110051935.0,
    cash: 318.0
  },
  {
    name: "대모",
    biznum: "1138116826",
    corpnum: 1101110633556.0,
    cash: 47.0
  },
  {
    name: "대보마그네틱",
    biznum: "1308150004",
    corpnum: 1101111114589.0,
    cash: 197.0
  },
  {
    name: "대봉엘에스",
    biznum: "1398119806",
    corpnum: 1243110016976.0,
    cash: 42.0
  },
  {
    name: "대상",
    biznum: "1098114886",
    corpnum: 1101110327125.0,
    cash: 6106.0
  },
  {
    name: "대상홀딩스",
    biznum: "2068601066",
    corpnum: 1101113280099.0,
    cash: 6953.0
  },
  {
    name: "대성미생물",
    biznum: "1388102340",
    corpnum: 1341110000880.0,
    cash: 34.0
  },
  {
    name: "대성산업",
    biznum: "1018656344",
    corpnum: 1101114382612.0,
    cash: 1288.0
  },
  {
    name: "대성에너지",
    biznum: "5048183652",
    corpnum: 1701110387416.0,
    cash: 210.0
  },
  {
    name: "대성엘텍",
    biznum: "1198102446",
    corpnum: 1101110254344.0,
    cash: 23.0
  },
  {
    name: "대성창투",
    biznum: "5038114448",
    corpnum: 1701110031881.0,
    cash: 63.0
  },
  {
    name: "대성파인텍",
    biznum: "6088136825",
    corpnum: 1901110037223.0,
    cash: 69.0
  },
  {
    name: "대성하이텍",
    biznum: "5038152160",
    corpnum: 1701110205600.0,
    cash: 144.0
  },
  {
    name: "대성홀딩스",
    biznum: "5038106405",
    corpnum: 1701110017237.0,
    cash: 958.0
  },
  {
    name: "대신밸런스제10호스팩",
    biznum: "8078801747",
    corpnum: 1101117875177.0,
    cash: 15.0
  },
  {
    name: "대신밸런스제11호스팩",
    biznum: "1498802048",
    corpnum: 1101117976446.0,
    cash: 21.0
  },
  {
    name: "대신밸런스제12호스팩",
    biznum: "8868602648",
    corpnum: 1101118253512.0,
    cash: 16.0
  },
  {
    name: "대신밸런스제13호스팩",
    biznum: "4378602446",
    corpnum: 1101118357934.0,
    cash: 18.0
  },
  {
    name: "대신밸런스제14호스팩",
    biznum: "3218602419",
    corpnum: 1101118400014.0,
    cash: 22.0
  },
  {
    name: "대신정보통신",
    biznum: "4088118945",
    corpnum: 1101110542484.0,
    cash: 151.0
  },
  {
    name: "대신증권",
    biznum: "1168109076",
    corpnum: 1101110042955.0,
    cash: 8665.0
  },
  {
    name: "대아티아이",
    biznum: "1168137494",
    corpnum: 1101111195109.0,
    cash: 177.0
  },
  {
    name: "대양금속",
    biznum: "1348132459",
    corpnum: 1201110002212.0,
    cash: 107.0
  },
  {
    name: "대양전기공업",
    biznum: "6038109788",
    corpnum: 1801110081389.0,
    cash: 292.0
  },
  {
    name: "대양제지",
    biznum: "1238100184",
    corpnum: 1341110000400.0,
    cash: 17.0
  },
  {
    name: "대영포장",
    biznum: "1348101183",
    corpnum: 1101110254104.0,
    cash: 48.0
  },
  {
    name: "대우건설",
    biznum: "1048158180",
    corpnum: 1101112137895.0,
    cash: 11408.0
  },
  {
    name: "대우부품",
    biznum: "1238100262",
    corpnum: 1341110000822.0,
    cash: 2.0
  },
  {
    name: "대우조선해양",
    biznum: "1048157667",
    corpnum: 1101112095837.0,
    cash: 6842.0
  },
  {
    name: "대웅",
    biznum: "1298100178",
    corpnum: 1311110000271.0,
    cash: 1941.0
  },
  {
    name: "대웅제약",
    biznum: "1248601143",
    corpnum: 1348110075342.0,
    cash: 1331.0
  },
  {
    name: "대원",
    biznum: "3158101104",
    corpnum: 1501110003058.0,
    cash: 1351.0
  },
  {
    name: "대원강업",
    biznum: "1048115560",
    corpnum: 1101110015556.0,
    cash: 252.0
  },
  {
    name: "대원미디어",
    biznum: "1068103487",
    corpnum: 1101110222151.0,
    cash: 266.0
  },
  {
    name: "대원산업",
    biznum: "1348104254",
    corpnum: 1301110007533.0,
    cash: 447.0
  },
  {
    name: "대원전선",
    biznum: "1248105047",
    corpnum: 1348110001181.0,
    cash: 84.0
  },
  {
    name: "대원제약",
    biznum: "2078136336",
    corpnum: 1101110103955.0,
    cash: 134.0
  },
  {
    name: "대원화성",
    biznum: "2048136263",
    corpnum: 1101110165393.0,
    cash: 129.0
  },
  {
    name: "대유",
    biznum: "5158100326",
    corpnum: 1748110000309.0,
    cash: 66.0
  },
  {
    name: "대유에이텍",
    biznum: "1278100094",
    corpnum: 1115110000136.0,
    cash: 836.0
  },
  {
    name: "대유에이피",
    biznum: "7458600413",
    corpnum: 2101110118854.0,
    cash: 512.0
  },
  {
    name: "대유플러스",
    biznum: "1198101490",
    corpnum: 1101110085541.0,
    cash: 538.0
  },
  {
    name: "대정화금",
    biznum: "1018118476",
    corpnum: 1101110510415.0,
    cash: 204.0
  },
  {
    name: "대주산업",
    biznum: "2078139347",
    corpnum: 1101110036148.0,
    cash: 35.0
  },
  {
    name: "대주전자재료",
    biznum: "1338123923",
    corpnum: 1301110007616.0,
    cash: 217.0
  },
  {
    name: "대창",
    biznum: "1338123689",
    corpnum: 1301110007137.0,
    cash: 625.0
  },
  {
    name: "대창단조",
    biznum: "6068130107",
    corpnum: 1801110039396.0,
    cash: 376.0
  },
  {
    name: "대창솔루션",
    biznum: "6038114879",
    corpnum: 1801110028042.0,
    cash: 16.0
  },
  {
    name: "대창스틸",
    biznum: "1398100044",
    corpnum: 1101110276116.0,
    cash: 97.0
  },
  {
    name: "대한과학",
    biznum: "1018125905",
    corpnum: 1101110948997.0,
    cash: 33.0
  },
  {
    name: "대한광통신",
    biznum: "1238103459",
    corpnum: 1341110003545.0,
    cash: 129.0
  },
  {
    name: "대한그린파워",
    biznum: "2208143198",
    corpnum: 1101111384075.0,
    cash: 51.0
  },
  {
    name: "대한뉴팜",
    biznum: "2298110729",
    corpnum: 1101110383515.0,
    cash: 121.0
  },
  {
    name: "대한방직",
    biznum: "1168133353",
    corpnum: 1101110019350.0,
    cash: 110.0
  },
  {
    name: "대한약품",
    biznum: "1078134737",
    corpnum: 1101110080484.0,
    cash: 918.0
  },
  {
    name: "대한유화",
    biznum: "1048106794",
    corpnum: 1101110024698.0,
    cash: 1518.0
  },
  {
    name: "대한전선",
    biznum: "1198110062",
    corpnum: 1101110035835.0,
    cash: 2312.0
  },
  {
    name: "대한제강",
    biznum: "6038113259",
    corpnum: 1801110003268.0,
    cash: 1356.0
  },
  {
    name: "대한제당",
    biznum: "1218107309",
    corpnum: 1201110018368.0,
    cash: 1638.0
  },
  {
    name: "대한제분",
    biznum: "1048104345",
    corpnum: 1101110003733.0,
    cash: 1269.0
  },
  {
    name: "대한항공",
    biznum: "1108114794",
    corpnum: 1101110108484.0,
    cash: 11840.0
  },
  {
    name: "대한해운",
    biznum: "1018124624",
    corpnum: 1101110008212.0,
    cash: 1139.0
  },
  {
    name: "대한화섬",
    biznum: "2038143612",
    corpnum: 1101110012437.0,
    cash: 534.0
  },
  {
    name: "대현",
    biznum: "2118119302",
    corpnum: 1101110319320.0,
    cash: 26.0
  },
  {
    name: "대호에이엘",
    biznum: "5148146009",
    corpnum: 1701110233338.0,
    cash: 394.0
  },
  {
    name: "대호특수강",
    biznum: "6218105835",
    corpnum: 1845110003856.0,
    cash: 65.0
  },
  {
    name: "대화제약",
    biznum: "1338122322",
    corpnum: 2111110001529.0,
    cash: 92.0
  },
  {
    name: "더네이쳐홀딩스",
    biznum: "1068626388",
    corpnum: 1101112958259.0,
    cash: 254.0
  },
  {
    name: "더블유게임즈",
    biznum: "2148896326",
    corpnum: 1101114855924.0,
    cash: 4805.0
  },
  {
    name: "더블유씨피",
    biznum: "7048800570",
    corpnum: 1511110058698.0,
    cash: 4098.0
  },
  {
    name: "더블유에스아이",
    biznum: "2368101193",
    corpnum: 1101116748507.0,
    cash: 121.0
  },
  {
    name: "더존비즈온",
    biznum: "1348108473",
    corpnum: 1201110005266.0,
    cash: 356.0
  },
  {
    name: "더코디",
    biznum: "3128137108",
    corpnum: 1615110031686.0,
    cash: 186.0
  },
  {
    name: "덕산네오룩스",
    biznum: "3128674729",
    corpnum: 1615110176036.0,
    cash: 1243.0
  },
  {
    name: "덕산테코피아",
    biznum: "6208124727",
    corpnum: 2301110120607.0,
    cash: 239.0
  },
  {
    name: "덕산하이메탈",
    biznum: "6208119108",
    corpnum: 2301110056969.0,
    cash: 300.0
  },
  {
    name: "덕성",
    biznum: "1238100243",
    corpnum: 1341110000096.0,
    cash: 76.0
  },
  {
    name: "덕신하우징",
    biznum: "1368109463",
    corpnum: 1101110730732.0,
    cash: 153.0
  },
  {
    name: "덕양산업",
    biznum: "6208101234",
    corpnum: 1812110000922.0,
    cash: 543.0
  },
  {
    name: "덕우전자",
    biznum: "5138106227",
    corpnum: 1760110006963.0,
    cash: 122.0
  },
  {
    name: "데브시스터즈",
    biznum: "2118797881",
    corpnum: 1101113687568.0,
    cash: 130.0
  },
  {
    name: "데이타솔루션",
    biznum: "1198637009",
    corpnum: 1101114504901.0,
    cash: 106.0
  },
  {
    name: "덱스터",
    biznum: "1288668864",
    corpnum: 2850110209804.0,
    cash: 160.0
  },
  {
    name: "덴티스",
    biznum: "1348738310",
    corpnum: 1101116246759.0,
    cash: 42.0
  },
  {
    name: "덴티움",
    biznum: "1238157732",
    corpnum: 1351110052892.0,
    cash: 836.0
  },
  {
    name: "도이치모터스",
    biznum: "6098142811",
    corpnum: 1942110042721.0,
    cash: 1207.0
  },
  {
    name: "도화엔지니어링",
    biznum: "2118108009",
    corpnum: 1101110037740.0,
    cash: 587.0
  },
  {
    name: "동구바이오제약",
    biznum: "1138103336",
    corpnum: 1101110352156.0,
    cash: 198.0
  },
  {
    name: "동국S&C",
    biznum: "1048163193",
    corpnum: 1101112276784.0,
    cash: 107.0
  },
  {
    name: "동국산업",
    biznum: "2028147522",
    corpnum: 1101110085583.0,
    cash: 398.0
  },
  {
    name: "동국알앤에스",
    biznum: "6158135770",
    corpnum: 1955110069249.0,
    cash: 126.0
  },
  {
    name: "동국제강",
    biznum: "2028105158",
    corpnum: 1101110031338.0,
    cash: 5361.0
  },
  {
    name: "동국제약",
    biznum: "1208122608",
    corpnum: 1101110094477.0,
    cash: 183.0
  },
  {
    name: "동남합성",
    biznum: "1228117945",
    corpnum: 1101110057012.0,
    cash: 87.0
  },
  {
    name: "동방",
    biznum: "1058169429",
    corpnum: 1101110124521.0,
    cash: 663.0
  },
  {
    name: "동방선기",
    biznum: "6098119396",
    corpnum: 1941110002884.0,
    cash: 33.0
  },
  {
    name: "동방아그로",
    biznum: "1128130484",
    corpnum: 1101110124969.0,
    cash: 211.0
  },
  {
    name: "동부건설",
    biznum: "2018145685",
    corpnum: 1101110005002.0,
    cash: 181.0
  },
  {
    name: "동서",
    biznum: "1058138440",
    corpnum: 1101110180888.0,
    cash: 283.0
  },
  {
    name: "동성제약",
    biznum: "2118125288",
    corpnum: 1101110008200.0,
    cash: 26.0
  },
  {
    name: "동성케미컬",
    biznum: "6038168642",
    corpnum: 1801110633031.0,
    cash: 454.0
  },
  {
    name: "동성화인텍",
    biznum: "2148108385",
    corpnum: 1101110404361.0,
    cash: 61.0
  },
  {
    name: "동신건설",
    biznum: "5088102200",
    corpnum: 1748110000820.0,
    cash: 284.0
  },
  {
    name: "동아쏘시오홀딩스",
    biznum: "2048100130",
    corpnum: 1101110017990.0,
    cash: 1034.0
  },
  {
    name: "동아에스티",
    biznum: "2048640122",
    corpnum: 1101115079713.0,
    cash: 2136.0
  },
  {
    name: "동아엘텍",
    biznum: "1388119462",
    corpnum: 1341110065470.0,
    cash: 148.0
  },
  {
    name: "동아지질",
    biznum: "6218112675",
    corpnum: 1801110019843.0,
    cash: 1427.0
  },
  {
    name: "동아타이어",
    biznum: "6018600898",
    corpnum: 2341110096698.0,
    cash: 610.0
  },
  {
    name: "동아화성",
    biznum: "6228106443",
    corpnum: 1801110021509.0,
    cash: 336.0
  },
  {
    name: "동양",
    biznum: "1168134352",
    corpnum: 1101110005333.0,
    cash: 470.0
  },
  {
    name: "동양고속",
    biznum: "1388128578",
    corpnum: 1341110131073.0,
    cash: 123.0
  },
  {
    name: "동양생명",
    biznum: "2028138251",
    corpnum: 1101110624688.0,
    cash: 3333.0
  },
  {
    name: "동양에스텍",
    biznum: "3068103597",
    corpnum: 1601110004426.0,
    cash: 26.0
  },
  {
    name: "동양이엔피",
    biznum: "1248134668",
    corpnum: 1348110004870.0,
    cash: 313.0
  },
  {
    name: "동양철관",
    biznum: "1228100857",
    corpnum: 1201110002056.0,
    cash: 14.0
  },
  {
    name: "동양파일",
    biznum: "3128653248",
    corpnum: 1648110073035.0,
    cash: 90.0
  },
  {
    name: "동양피스톤",
    biznum: "1348101198",
    corpnum: 1243110003379.0,
    cash: 125.0
  },
  {
    name: "동우팜투테이블",
    biznum: "4018106526",
    corpnum: 2111110005365.0,
    cash: 83.0
  },
  {
    name: "동운아나텍",
    biznum: "2148792814",
    corpnum: 1101113487546.0,
    cash: 65.0
  },
  {
    name: "동원F&B",
    biznum: "2148668729",
    corpnum: 1101112101816.0,
    cash: 755.0
  },
  {
    name: "동원개발",
    biznum: "6048119275",
    corpnum: 1801110029438.0,
    cash: 950.0
  },
  {
    name: "동원금속",
    biznum: "5038106778",
    corpnum: 1701110021816.0,
    cash: 39.0
  },
  {
    name: "동원산업",
    biznum: "2298111150",
    corpnum: 1101110003098.0,
    cash: 2839.0
  },
  {
    name: "동원수산",
    biznum: "2208109792",
    corpnum: 1101110046204.0,
    cash: 220.0
  },
  {
    name: "동원시스템즈",
    biznum: "1238115163",
    corpnum: 1341110011712.0,
    cash: 559.0
  },
  {
    name: "동일고무벨트",
    biznum: "6218197752",
    corpnum: 1801110828129.0,
    cash: 449.0
  },
  {
    name: "동일금속",
    biznum: "5058124020",
    corpnum: 1701110020397.0,
    cash: 163.0
  },
  {
    name: "동일기연",
    biznum: "1238115843",
    corpnum: 1341110012687.0,
    cash: 33.0
  },
  {
    name: "동일산업",
    biznum: "5028100015",
    corpnum: 1701110002171.0,
    cash: 345.0
  },
  {
    name: "동일제강",
    biznum: "1138107346",
    corpnum: 1101110032005.0,
    cash: 107.0
  },
  {
    name: "동일철강",
    biznum: "6068106096",
    corpnum: 1801110002004.0,
    cash: 18.0
  },
  {
    name: "동진쎄미켐",
    biznum: "1378107814",
    corpnum: 1201110003848.0,
    cash: 2934.0
  },
  {
    name: "동화기업",
    biznum: "1378102333",
    corpnum: 1201110004218.0,
    cash: 218.0
  },
  {
    name: "동화약품",
    biznum: "1108100102",
    corpnum: 1101110043870.0,
    cash: 483.0
  },
  {
    name: "두산",
    biznum: "1078100237",
    corpnum: 1101110013774.0,
    cash: 23801.0
  },
  {
    name: "두산밥캣",
    biznum: "2018638888",
    corpnum: 1101115402237.0,
    cash: 6488.0
  },
  {
    name: "두산에너빌리티",
    biznum: "6098104684",
    corpnum: 1942110000943.0,
    cash: 14670.0
  },
  {
    name: "두산테스나",
    biznum: "1298154164",
    corpnum: 1311110082427.0,
    cash: 199.0
  },
  {
    name: "두산퓨얼셀",
    biznum: "7738801177",
    corpnum: 2149110058935.0,
    cash: 59.0
  },
  {
    name: "두올",
    biznum: "2208123514",
    corpnum: 1101110343957.0,
    cash: 354.0
  },
  {
    name: "듀오백",
    biznum: "1368107470",
    corpnum: 1201110040676.0,
    cash: 23.0
  },
  {
    name: "드래곤플라이",
    biznum: "1188103312",
    corpnum: 1101110685309.0,
    cash: 102.0
  },
  {
    name: "드림시큐리티",
    biznum: "1078822434",
    corpnum: 1101115448356.0,
    cash: 492.0
  },
  {
    name: "드림씨아이에스",
    biznum: "1018157329",
    corpnum: 1101111953953.0,
    cash: 79.0
  },
  {
    name: "드림어스컴퍼니",
    biznum: "2148629288",
    corpnum: 1101111637383.0,
    cash: 1398.0
  },
  {
    name: "드림텍",
    biznum: "3128131249",
    corpnum: 1615110027883.0,
    cash: 1125.0
  },
  {
    name: "디딤이앤에프",
    biznum: "8968100036",
    corpnum: 1101115680643.0,
    cash: 32.0
  },
  {
    name: "디모아",
    biznum: "1068150113",
    corpnum: 1101110340979.0,
    cash: 215.0
  },
  {
    name: "디바이스이엔지",
    biznum: "3128157991",
    corpnum: 1615110052450.0,
    cash: 205.0
  },
  {
    name: "디스플레이텍",
    biznum: "5138113956",
    corpnum: 1760110017077.0,
    cash: 105.0
  },
  {
    name: "디씨엠",
    biznum: "6218116744",
    corpnum: 1801110071794.0,
    cash: 295.0
  },
  {
    name: "디아이",
    biznum: "2118124974",
    corpnum: 1101110039209.0,
    cash: 521.0
  },
  {
    name: "디아이씨",
    biznum: "6208110295",
    corpnum: 1801110025147.0,
    cash: 191.0
  },
  {
    name: "디아이티",
    biznum: "1248637544",
    corpnum: 1348110112334.0,
    cash: 242.0
  },
  {
    name: "디아크",
    biznum: "6158103939",
    corpnum: 1913110002354.0,
    cash: 55.0
  },
  {
    name: "디알젬",
    biznum: "2208671516",
    corpnum: 1101112863789.0,
    cash: 274.0
  },
  {
    name: "디알텍",
    biznum: "1078840539",
    corpnum: 1101115633585.0,
    cash: 74.0
  },
  {
    name: "디앤디플랫폼리츠",
    biznum: "8398101589",
    corpnum: 1101117420211.0,
    cash: 343.0
  },
  {
    name: "디앤씨미디어",
    biznum: "1058767194",
    corpnum: 1101114767153.0,
    cash: 126.0
  },
  {
    name: "디어유",
    biznum: "1118700747",
    corpnum: 1101116450615.0,
    cash: 185.0
  },
  {
    name: "디에스앤엘",
    biznum: "1298600585",
    corpnum: 1311110170264.0,
    cash: 1.0
  },
  {
    name: "디에스케이",
    biznum: "1388113022",
    corpnum: 1341110045290.0,
    cash: 432.0
  },
  {
    name: "디에이테크놀로지",
    biznum: "1198138212",
    corpnum: 1101111958888.0,
    cash: 62.0
  },
  {
    name: "디에이피",
    biznum: "1398111954",
    corpnum: 1244110006602.0,
    cash: 140.0
  },
  {
    name: "디엔에이링크",
    biznum: "1048151912",
    corpnum: 1101111907760.0,
    cash: 76.0
  },
  {
    name: "디엔에프",
    biznum: "3148138516",
    corpnum: 1601110109896.0,
    cash: 201.0
  },
  {
    name: "디오",
    biznum: "6218101561",
    corpnum: 1845110003290.0,
    cash: 235.0
  },
  {
    name: "디와이",
    biznum: "1398104152",
    corpnum: 1942110000472.0,
    cash: 1209.0
  },
  {
    name: "디와이디",
    biznum: "5958100040",
    corpnum: 1101115703594.0,
    cash: 26.0
  },
  {
    name: "디와이씨",
    biznum: "5878101164",
    corpnum: 1101116902393.0,
    cash: 2.0
  },
  {
    name: "디와이파워",
    biznum: "6098622391",
    corpnum: 1942110234534.0,
    cash: 535.0
  },
  {
    name: "디와이피엔에프",
    biznum: "1138154363",
    corpnum: 1101111725386.0,
    cash: 275.0
  },
  {
    name: "디이엔티",
    biznum: "3128150095",
    corpnum: 1615110044697.0,
    cash: 193.0
  },
  {
    name: "디젠스",
    biznum: "3128180740",
    corpnum: 1648110035910.0,
    cash: 128.0
  },
  {
    name: "디지아이",
    biznum: "1278118162",
    corpnum: 1115110015359.0,
    cash: 23.0
  },
  {
    name: "디지캡",
    biznum: "1018157784",
    corpnum: 1101111928295.0,
    cash: 70.0
  },
  {
    name: "디지털대성",
    biznum: "1148196124",
    corpnum: 1101111902835.0,
    cash: 236.0
  },
  {
    name: "디지틀조선",
    biznum: "1048137808",
    corpnum: 1101111201071.0,
    cash: 49.0
  },
  {
    name: "디케이락",
    biznum: "6068162536",
    corpnum: 1801110121507.0,
    cash: 63.0
  },
  {
    name: "디케이앤디",
    biznum: "2148658707",
    corpnum: 1101111967243.0,
    cash: 246.0
  },
  {
    name: "디케이티",
    biznum: "1228624946",
    corpnum: 1201110615990.0,
    cash: 878.0
  },
  {
    name: "디티앤씨",
    biznum: "1298137694",
    corpnum: 1311110053874.0,
    cash: 208.0
  },
  {
    name: "딜리",
    biznum: "1278165587",
    corpnum: 1154110011579.0,
    cash: 40.0
  },
  {
    name: "딥노이드",
    biznum: "1078705990",
    corpnum: 1101113841627.0,
    cash: 79.0
  },
  {
    name: "라닉스",
    biznum: "1298165851",
    corpnum: 1311110103158.0,
    cash: 8.0
  },
  {
    name: "라온시큐어",
    biznum: "1388116484",
    corpnum: 1353110002964.0,
    cash: 34.0
  },
  {
    name: "라온테크",
    biznum: "1218135936",
    corpnum: 1201110216699.0,
    cash: 53.0
  },
  {
    name: "라온피플",
    biznum: "1298641679",
    corpnum: 1311110246859.0,
    cash: 59.0
  },
  {
    name: "라이온켐텍",
    biznum: "3068104257",
    corpnum: 1601110004947.0,
    cash: 382.0
  },
  {
    name: "라이트론",
    biznum: "3148123352",
    corpnum: 1601110075170.0,
    cash: 246.0
  },
  {
    name: "라이프시맨틱스",
    biznum: "1208788602",
    corpnum: 1101114969189.0,
    cash: 134.0
  },
  {
    name: "라파스",
    biznum: "1058690704",
    corpnum: 1101113430040.0,
    cash: 56.0
  },
  {
    name: "락앤락",
    biznum: "3128180212",
    corpnum: 1648110035647.0,
    cash: 2098.0
  },
  {
    name: "래몽래인",
    biznum: "1148657714",
    corpnum: 1101113629841.0,
    cash: 100.0
  },
  {
    name: "램테크놀러지",
    biznum: "1358149574",
    corpnum: 1345110053211.0,
    cash: 100.0
  },
  {
    name: "랩지노믹스",
    biznum: "1358153419",
    corpnum: 1345110059821.0,
    cash: 522.0
  },
  {
    name: "러셀",
    biznum: "1668100027",
    corpnum: 1101115677864.0,
    cash: 363.0
  },
  {
    name: "레고켐바이오",
    biznum: "3148182268",
    corpnum: 1601110206866.0,
    cash: 1324.0
  },
  {
    name: "레드캡투어",
    biznum: "1118126895",
    corpnum: 1101111303140.0,
    cash: 301.0
  },
  {
    name: "레몬",
    biznum: "5138172334",
    corpnum: 1760110078920.0,
    cash: 108.0
  },
  {
    name: "레이",
    biznum: "1358173282",
    corpnum: 1345110084018.0,
    cash: 196.0
  },
  {
    name: "레이언스",
    biznum: "1248713025",
    corpnum: 1348110216516.0,
    cash: 464.0
  },
  {
    name: "레이저쎌",
    biznum: "4168602207",
    corpnum: 1311110405091.0,
    cash: 115.0
  },
  {
    name: "레이크머티리얼즈",
    biznum: "8938600629",
    corpnum: 1101116525723.0,
    cash: 279.0
  },
  {
    name: "레인보우로보틱스",
    biznum: "3148621854",
    corpnum: 1601110293889.0,
    cash: 277.0
  },
  {
    name: "로보로보",
    biznum: "1078841033",
    corpnum: 1101115638741.0,
    cash: 12.0
  },
  {
    name: "로보스타",
    biznum: "1138151686",
    corpnum: 1101111655393.0,
    cash: 193.0
  },
  {
    name: "로보티즈",
    biznum: "2098122390",
    corpnum: 1101111670044.0,
    cash: 113.0
  },
  { name: "로스웰", biznum: "2034342", corpnum: 0.0, cash: 1634.0 },
  {
    name: "로지시스",
    biznum: "1058180119",
    corpnum: 1101111293119.0,
    cash: 70.0
  },
  {
    name: "로체시스템즈",
    biznum: "1248152574",
    corpnum: 1301110045012.0,
    cash: 162.0
  },
  {
    name: "롯데관광개발",
    biznum: "1018110173",
    corpnum: 1101110115504.0,
    cash: 251.0
  },
  {
    name: "롯데렌탈",
    biznum: "2148779183",
    corpnum: 1101113326588.0,
    cash: 4154.0
  },
  {
    name: "롯데리츠",
    biznum: "5648101254",
    corpnum: 1101117061081.0,
    cash: 86.0
  },
  {
    name: "롯데손해보험",
    biznum: "1048130770",
    corpnum: 1101110014459.0,
    cash: 2582.0
  },
  {
    name: "롯데쇼핑",
    biznum: "1048126067",
    corpnum: 1101110000086.0,
    cash: 27748.0
  },
  {
    name: "롯데정밀화학",
    biznum: "6108100029",
    corpnum: 1812110000013.0,
    cash: 2976.0
  },
  {
    name: "롯데정보통신",
    biznum: "6878100785",
    corpnum: 1101116557114.0,
    cash: 840.0
  },
  {
    name: "롯데제과",
    biznum: "1868100924",
    corpnum: 1101116536481.0,
    cash: 3059.0
  },
  {
    name: "롯데지주",
    biznum: "1078134848",
    corpnum: 1101110076300.0,
    cash: 10849.0
  },
  {
    name: "롯데칠성음료",
    biznum: "2148107770",
    corpnum: 1101110003684.0,
    cash: 3198.0
  },
  {
    name: "롯데케미칼",
    biznum: "1188115012",
    corpnum: 1101110193196.0,
    cash: 26372.0
  },
  {
    name: "롯데하이마트",
    biznum: "1048116860",
    corpnum: 1101110532633.0,
    cash: 925.0
  },
  {
    name: "루닛",
    biznum: "3148650626",
    corpnum: 1601110354045.0,
    cash: 404.0
  },
  {
    name: "루멘스",
    biznum: "1358119745",
    corpnum: 1301110038918.0,
    cash: 322.0
  },
  {
    name: "루트로닉",
    biznum: "2298128272",
    corpnum: 1101111437379.0,
    cash: 604.0
  },
  {
    name: "룽투코리아",
    biznum: "1078149583",
    corpnum: 1101110958590.0,
    cash: 8.0
  },
  {
    name: "리노공업",
    biznum: "6038129824",
    corpnum: 1801110220664.0,
    cash: 468.0
  },
  {
    name: "리노스",
    biznum: "2148607396",
    corpnum: 1101110747414.0,
    cash: 364.0
  },
  {
    name: "리더스 기술투자",
    biznum: "1168116053",
    corpnum: 1101110511588.0,
    cash: 30.0
  },
  {
    name: "리더스코스메틱",
    biznum: "1348112735",
    corpnum: 1341110021539.0,
    cash: 71.0
  },
  {
    name: "리드코프",
    biznum: "2138103413",
    corpnum: 1101110219398.0,
    cash: 517.0
  },
  {
    name: "리메드",
    biznum: "1298164250",
    corpnum: 1311110100021.0,
    cash: 91.0
  },
  {
    name: "리파인",
    biznum: "1208640033",
    corpnum: 1101112564478.0,
    cash: 1040.0
  },
  {
    name: "린드먼아시아",
    biznum: "1148652854",
    corpnum: 1101113489154.0,
    cash: 101.0
  },
  {
    name: "링네트",
    biznum: "1138160244",
    corpnum: 1101111927958.0,
    cash: 95.0
  },
  {
    name: "링크제니시스",
    biznum: "1198170245",
    corpnum: 1101112914459.0,
    cash: 54.0
  },
  {
    name: "마니커",
    biznum: "1358103151",
    corpnum: 1345110004149.0,
    cash: 86.0
  },
  {
    name: "마니커에프앤지",
    biznum: "1358170723",
    corpnum: 1345110080529.0,
    cash: 27.0
  },
  {
    name: "마스턴프리미어리츠",
    biznum: "1728801447",
    corpnum: 1101117408720.0,
    cash: 2.0
  },
  {
    name: "마이크로디지탈",
    biznum: "1248199109",
    corpnum: 1348110073536.0,
    cash: 36.0
  },
  {
    name: "마이크로컨텍솔",
    biznum: "6218137017",
    corpnum: 1845110022448.0,
    cash: 51.0
  },
  {
    name: "마이크로프랜드",
    biznum: "1238198238",
    corpnum: 1351110069710.0,
    cash: 87.0
  },
  {
    name: "마인즈랩",
    biznum: "3148655446",
    corpnum: 1601110362866.0,
    cash: 151.0
  },
  {
    name: "마크로젠",
    biznum: "2088124115",
    corpnum: 1101111423576.0,
    cash: 316.0
  },
  {
    name: "만호제강",
    biznum: "6068108662",
    corpnum: 1801110054659.0,
    cash: 74.0
  },
  {
    name: "매일유업",
    biznum: "8448100466",
    corpnum: 1101116390770.0,
    cash: 793.0
  },
  {
    name: "매일홀딩스",
    biznum: "2038143193",
    corpnum: 1101110099609.0,
    cash: 1043.0
  },
  {
    name: "매커스",
    biznum: "2208740140",
    corpnum: 1101113581075.0,
    cash: 410.0
  },
  {
    name: "맥스트",
    biznum: "1148683769",
    corpnum: 1101114445072.0,
    cash: 279.0
  },
  {
    name: "머큐리",
    biznum: "1378131255",
    corpnum: 1201110230277.0,
    cash: 15.0
  },
  {
    name: "멀티캠퍼스",
    biznum: "1048153114",
    corpnum: 1101111960792.0,
    cash: 264.0
  },
  {
    name: "메가스터디",
    biznum: "2148664631",
    corpnum: 1101112024026.0,
    cash: 1476.0
  },
  {
    name: "메가스터디교육",
    biznum: "7808700034",
    corpnum: 1101115685966.0,
    cash: 1482.0
  },
  {
    name: "메가엠디",
    biznum: "1208662487",
    corpnum: 1101112937857.0,
    cash: 277.0
  },
  {
    name: "메드팩토",
    biznum: "1358633854",
    corpnum: 1358110232363.0,
    cash: 3.0
  },
  {
    name: "메디아나",
    biznum: "2118637038",
    corpnum: 1101111168502.0,
    cash: 322.0
  },
  {
    name: "메디앙스",
    biznum: "2088103973",
    corpnum: 1101110252471.0,
    cash: 34.0
  },
  {
    name: "메디콕스",
    biznum: "2148629070",
    corpnum: 1101111640609.0,
    cash: 32.0
  },
  {
    name: "메디톡스",
    biznum: "3128142130",
    corpnum: 1648110016928.0,
    cash: 402.0
  },
  {
    name: "메디포스트",
    biznum: "2118661218",
    corpnum: 1101112007709.0,
    cash: 184.0
  },
  {
    name: "메디프론",
    biznum: "2038123576",
    corpnum: 1101111390816.0,
    cash: 33.0
  },
  {
    name: "메리츠금융지주",
    biznum: "2208814824",
    corpnum: 1101114566406.0,
    cash: 14863.0
  },
  {
    name: "메리츠증권",
    biznum: "1168122502",
    corpnum: 1101110141301.0,
    cash: 9611.0
  },
  {
    name: "메리츠화재",
    biznum: "1168103752",
    corpnum: 1101110013328.0,
    cash: 4907.0
  },
  {
    name: "메이슨캐피탈",
    biznum: "4028108740",
    corpnum: 2101110007510.0,
    cash: 147.0
  },
  {
    name: "메지온",
    biznum: "2048172221",
    corpnum: 1101112615578.0,
    cash: 333.0
  },
  {
    name: "메카로",
    biznum: "1318159560",
    corpnum: 1201110233338.0,
    cash: 191.0
  },
  {
    name: "메타랩스",
    biznum: "2118668400",
    corpnum: 1101112103953.0,
    cash: 83.0
  },
  {
    name: "메타바이오메드",
    biznum: "3158135211",
    corpnum: 1501110041925.0,
    cash: 123.0
  },
  {
    name: "멕아이씨에스",
    biznum: "1388118411",
    corpnum: 1341110063143.0,
    cash: 327.0
  },
  {
    name: "멜파스",
    biznum: "1198135461",
    corpnum: 1101111870347.0,
    cash: 37.0
  },
  {
    name: "명문제약",
    biznum: "1248135615",
    corpnum: 1341110013180.0,
    cash: 55.0
  },
  {
    name: "명성티엔에스",
    biznum: "5148142148",
    corpnum: 1701110207177.0,
    cash: 75.0
  },
  {
    name: "명신산업",
    biznum: "5058101731",
    corpnum: 1712110000958.0,
    cash: 723.0
  },
  {
    name: "모나리자",
    biznum: "1098107177",
    corpnum: 1101110220882.0,
    cash: 60.0
  },
  {
    name: "모나미",
    biznum: "1208108227",
    corpnum: 1101110005052.0,
    cash: 42.0
  },
  {
    name: "모다이노칩",
    biznum: "1348154564",
    corpnum: 1355110106027.0,
    cash: 290.0
  },
  {
    name: "모델솔루션",
    biznum: "1138196403",
    corpnum: 1101113176925.0,
    cash: 370.0
  },
  {
    name: "모두투어",
    biznum: "2028145295",
    corpnum: 1101110609771.0,
    cash: 169.0
  },
  {
    name: "모두투어리츠",
    biznum: "1048653123",
    corpnum: 1101115313731.0,
    cash: 17.0
  },
  {
    name: "모바일어플라이언스",
    biznum: "1298172027",
    corpnum: 1311110115054.0,
    cash: 170.0
  },
  {
    name: "모베이스",
    biznum: "1198130151",
    corpnum: 1101111665516.0,
    cash: 421.0
  },
  {
    name: "모베이스전자",
    biznum: "1348102523",
    corpnum: 1301110008961.0,
    cash: 66.0
  },
  {
    name: "모비데이즈",
    biznum: "8328701824",
    corpnum: 1101117588506.0,
    cash: 136.0
  },
  {
    name: "모비릭스",
    biznum: "1308628545",
    corpnum: 1211110160415.0,
    cash: 406.0
  },
  {
    name: "모비스",
    biznum: "7158700423",
    corpnum: 1101116108587.0,
    cash: 161.0
  },
  {
    name: "모아데이타",
    biznum: "2208876854",
    corpnum: 1101115373933.0,
    cash: 150.0
  },
  {
    name: "모아텍",
    biznum: "1178101820",
    corpnum: 1101110613607.0,
    cash: 143.0
  },
  {
    name: "모코엠시스",
    biznum: "5108601378",
    corpnum: 1101117189544.0,
    cash: 53.0
  },
  {
    name: "모토닉",
    biznum: "1018102940",
    corpnum: 1101110161317.0,
    cash: 266.0
  },
  {
    name: "모트렉스",
    biznum: "1088150292",
    corpnum: 1101112341850.0,
    cash: 244.0
  },
  {
    name: "모헨즈",
    biznum: "3128115972",
    corpnum: 1101110046197.0,
    cash: 24.0
  },
  {
    name: "무림P&P",
    biznum: "6108102842",
    corpnum: 1812110002548.0,
    cash: 1036.0
  },
  {
    name: "무림SP",
    biznum: "2118163282",
    corpnum: 1701110001082.0,
    cash: 316.0
  },
  {
    name: "무림페이퍼",
    biznum: "6138100289",
    corpnum: 1911110000782.0,
    cash: 2229.0
  },
  {
    name: "무학",
    biznum: "6088107131",
    corpnum: 1901110002721.0,
    cash: 78.0
  },
  {
    name: "문배철강",
    biznum: "1168100532",
    corpnum: 1101110139190.0,
    cash: 47.0
  },
  {
    name: "미디어젠",
    biznum: "2098125868",
    corpnum: 1101112001842.0,
    cash: 58.0
  },
  {
    name: "미래나노텍",
    biznum: "2148717187",
    corpnum: 1101112577885.0,
    cash: 863.0
  },
  {
    name: "미래산업",
    biznum: "3128115889",
    corpnum: 1243110030413.0,
    cash: 337.0
  },
  {
    name: "미래생명자원",
    biznum: "4928800056",
    corpnum: 1101115687615.0,
    cash: 73.0
  },
  {
    name: "미래아이앤지",
    biznum: "1148110728",
    corpnum: 1101110100951.0,
    cash: 320.0
  },
  {
    name: "미래에셋글로벌리츠",
    biznum: "2218801962",
    corpnum: 1101117896090.0,
    cash: 56.0
  },
  {
    name: "미래에셋대우스팩 5호",
    biznum: "7808701635",
    corpnum: 1101117437472.0,
    cash: 22.0
  },
  {
    name: "미래에셋벤처투자",
    biznum: "2118653095",
    corpnum: 1101111710527.0,
    cash: 575.0
  },
  {
    name: "미래에셋비전스팩1호",
    biznum: "5618802568",
    corpnum: 1101118103501.0,
    cash: 31.0
  },
  {
    name: "미래에셋생명",
    biznum: "3058108605",
    corpnum: 1601110014483.0,
    cash: 963.0
  },
  {
    name: "미래에셋증권",
    biznum: "1168105556",
    corpnum: 1101110011679.0,
    cash: 35859.0
  },
  {
    name: "미래컴퍼니",
    biznum: "2118196221",
    corpnum: 1101110911192.0,
    cash: 146.0
  },
  {
    name: "미스터블루",
    biznum: "1078830967",
    corpnum: 1101115535038.0,
    cash: 253.0
  },
  {
    name: "미원상사",
    biznum: "1348102843",
    corpnum: 1301110007707.0,
    cash: 171.0
  },
  {
    name: "미원에스씨",
    biznum: "7788700797",
    corpnum: 2101110123944.0,
    cash: 109.0
  },
  {
    name: "미원홀딩스",
    biznum: "4028181192",
    corpnum: 2101110063190.0,
    cash: 194.0
  },
  {
    name: "미원화학",
    biznum: "6108604700",
    corpnum: 2301110172244.0,
    cash: 253.0
  },
  {
    name: "미창석유공업",
    biznum: "6018108046",
    corpnum: 1801110000537.0,
    cash: 266.0
  },
  {
    name: "미코",
    biznum: "1258129377",
    corpnum: 1346110012744.0,
    cash: 1632.0
  },
  {
    name: "미코바이오메드",
    biznum: "3178112475",
    corpnum: 1501110123252.0,
    cash: 34.0
  },
  {
    name: "미투온",
    biznum: "1208755019",
    corpnum: 1101114358382.0,
    cash: 712.0
  },
  { name: "미투젠", biznum: "48063", corpnum: 0.0, cash: 684.0 },
  {
    name: "바다로19호",
    biznum: "6168190169",
    corpnum: 2201110086223.0,
    cash: 135.0
  },
  {
    name: "바디텍메드",
    biznum: "1078830220",
    corpnum: 1101115527168.0,
    cash: 270.0
  },
  {
    name: "바른손",
    biznum: "1148165451",
    corpnum: 1101110413990.0,
    cash: 107.0
  },
  {
    name: "바른손이앤에이",
    biznum: "2208141526",
    corpnum: 1101111354961.0,
    cash: 48.0
  },
  {
    name: "바이넥스",
    biznum: "6038107005",
    corpnum: 1801110058742.0,
    cash: 341.0
  },
  {
    name: "바이브컴퍼니",
    biznum: "1208608334",
    corpnum: 1101112021501.0,
    cash: 189.0
  },
  {
    name: "바이오노트",
    biznum: "1238187177",
    corpnum: 1348110324294.0,
    cash: 5286.0
  },
  {
    name: "바이오니아",
    biznum: "3018127217",
    corpnum: 1601110032542.0,
    cash: 265.0
  },
  {
    name: "바이오다인",
    biznum: "2148639452",
    corpnum: 1101111786057.0,
    cash: 95.0
  },
  {
    name: "바이오로그디바이스",
    biznum: "1078832553",
    corpnum: 1101115546217.0,
    cash: 50.0
  },
  {
    name: "바이오솔루션",
    biznum: "1248169186",
    corpnum: 1301110057421.0,
    cash: 19.0
  },
  {
    name: "바이오스마트",
    biznum: "2018149003",
    corpnum: 1101110414302.0,
    cash: 136.0
  },
  {
    name: "바이오에프디엔씨",
    biznum: "1318194024",
    corpnum: 1201110388092.0,
    cash: 120.0
  },
  {
    name: "바이오톡스텍",
    biznum: "3018145781",
    corpnum: 1501110048707.0,
    cash: 151.0
  },
  {
    name: "바이오플러스",
    biznum: "1018194737",
    corpnum: 1101112785355.0,
    cash: 524.0
  },
  {
    name: "바이온",
    biznum: "1168100978",
    corpnum: 1101110358956.0,
    cash: 23.0
  },
  {
    name: "바이옵트로",
    biznum: "1298135890",
    corpnum: 1311110051034.0,
    cash: 33.0
  },
  {
    name: "바이젠셀",
    biznum: "1148707720",
    corpnum: 1101115059773.0,
    cash: 11.0
  },
  {
    name: "바텍",
    biznum: "1238128203",
    corpnum: 1341110036348.0,
    cash: 854.0
  },
  {
    name: "박셀바이오",
    biznum: "4088185541",
    corpnum: 2052110029832.0,
    cash: 21.0
  },
  {
    name: "방림",
    biznum: "1078111490",
    corpnum: 1101110035108.0,
    cash: 442.0
  },
  {
    name: "배럴",
    biznum: "1058739951",
    corpnum: 1101114256924.0,
    cash: 107.0
  },
  {
    name: "백광산업",
    biznum: "1138101094",
    corpnum: 1101110003709.0,
    cash: 54.0
  },
  {
    name: "백금T&A",
    biznum: "2298125504",
    corpnum: 1101111353153.0,
    cash: 166.0
  },
  {
    name: "백산",
    biznum: "1338123001",
    corpnum: 1147110003729.0,
    cash: 654.0
  },
  {
    name: "밸로프",
    biznum: "7378101610",
    corpnum: 1101117171731.0,
    cash: 59.0
  },
  {
    name: "버킷스튜디오",
    biznum: "1208186617",
    corpnum: 1101111646889.0,
    cash: 341.0
  },
  {
    name: "범양건영",
    biznum: "3128109655",
    corpnum: 1101110015861.0,
    cash: 40.0
  },
  {
    name: "범한퓨얼셀",
    biznum: "7308601458",
    corpnum: 1942110310912.0,
    cash: 163.0
  },
  {
    name: "베노홀딩스",
    biznum: "1078829363",
    corpnum: 1101115518084.0,
    cash: 283.0
  },
  {
    name: "베뉴지",
    biznum: "1208114656",
    corpnum: 1101110252405.0,
    cash: 169.0
  },
  {
    name: "베셀",
    biznum: "1248621867",
    corpnum: 1358110105388.0,
    cash: 5.0
  },
  {
    name: "베스파",
    biznum: "1208798186",
    corpnum: 1101115131886.0,
    cash: 6.0
  },
  {
    name: "벽산",
    biznum: "2038143780",
    corpnum: 1101110113384.0,
    cash: 258.0
  },
  {
    name: "보광산업",
    biznum: "5088116437",
    corpnum: 1743110003882.0,
    cash: 145.0
  },
  {
    name: "보라티알",
    biznum: "4958800211",
    corpnum: 1101115879030.0,
    cash: 213.0
  },
  {
    name: "보락",
    biznum: "1248134203",
    corpnum: 1348110004474.0,
    cash: 13.0
  },
  {
    name: "보령",
    biznum: "2088100281",
    corpnum: 1101110012560.0,
    cash: 351.0
  },
  {
    name: "보로노이",
    biznum: "3408100023",
    corpnum: 1348110326191.0,
    cash: 217.0
  },
  {
    name: "보성파워텍",
    biznum: "1348102237",
    corpnum: 1301110007765.0,
    cash: 176.0
  },
  {
    name: "보해양조",
    biznum: "4118100209",
    corpnum: 2011110000036.0,
    cash: 160.0
  },
  {
    name: "본느",
    biznum: "5298600091",
    corpnum: 1101115794478.0,
    cash: 50.0
  },
  {
    name: "부광약품",
    biznum: "1188100450",
    corpnum: 1101110030405.0,
    cash: 748.0
  },
  {
    name: "부국증권",
    biznum: "1168108723",
    corpnum: 1101110031510.0,
    cash: 2937.0
  },
  {
    name: "부국철강",
    biznum: "4108105725",
    corpnum: 2001110001407.0,
    cash: 180.0
  },
  {
    name: "부방",
    biznum: "1208131617",
    corpnum: 1101110265523.0,
    cash: 90.0
  },
  {
    name: "부산산업",
    biznum: "6068156897",
    corpnum: 1101110522618.0,
    cash: 84.0
  },
  {
    name: "부산주공",
    biznum: "6068101596",
    corpnum: 1801110002682.0,
    cash: 0.0
  },
  {
    name: "부스타",
    biznum: "1308102064",
    corpnum: 1243110002628.0,
    cash: 135.0
  },
  {
    name: "뷰노",
    biznum: "1358650644",
    corpnum: 1348110319279.0,
    cash: 74.0
  },
  {
    name: "뷰웍스",
    biznum: "1208193796",
    corpnum: 1101111775894.0,
    cash: 248.0
  },
  {
    name: "브랜드엑스코퍼레이션",
    biznum: "5508600867",
    corpnum: 1101116496172.0,
    cash: 139.0
  },
  {
    name: "브레인즈컴퍼니",
    biznum: "2208180932",
    corpnum: 1101111909865.0,
    cash: 19.0
  },
  {
    name: "브리지텍",
    biznum: "1168153835",
    corpnum: 1101111143950.0,
    cash: 70.0
  },
  {
    name: "브릿지바이오",
    biznum: "2248700169",
    corpnum: 1311110423499.0,
    cash: 198.0
  },
  {
    name: "브이씨",
    biznum: "2098139552",
    corpnum: 1101113197088.0,
    cash: 196.0
  },
  {
    name: "브이원텍",
    biznum: "1298198032",
    corpnum: 1311110164978.0,
    cash: 152.0
  },
  {
    name: "브이티지엠피",
    biznum: "2028135574",
    corpnum: 1101110509872.0,
    cash: 207.0
  },
  {
    name: "블루베리 NFT",
    biznum: "3158100385",
    corpnum: 1501110000765.0,
    cash: 409.0
  },
  {
    name: "블루콤",
    biznum: "1128129823",
    corpnum: 1101110808357.0,
    cash: 56.0
  },
  {
    name: "블리츠웨이",
    biznum: "6408701749",
    corpnum: 1101117655868.0,
    cash: 163.0
  },
  {
    name: "비나텍",
    biznum: "1238149760",
    corpnum: 1341110067418.0,
    cash: 150.0
  },
  {
    name: "비덴트",
    biznum: "1078614610",
    corpnum: 1101112476376.0,
    cash: 1127.0
  },
  {
    name: "비디아이",
    biznum: "1338124034",
    corpnum: 1243110035801.0,
    cash: 5.0
  },
  {
    name: "비보존 제약",
    biznum: "1248199564",
    corpnum: 1358110085019.0,
    cash: 32.0
  },
  {
    name: "비비씨",
    biznum: "3148198760",
    corpnum: 1601110243678.0,
    cash: 165.0
  },
  {
    name: "비비안",
    biznum: "1078111092",
    corpnum: 1101110030934.0,
    cash: 87.0
  },
  {
    name: "비상교육",
    biznum: "2118707735",
    corpnum: 1101112427098.0,
    cash: 82.0
  },
  {
    name: "비스토스",
    biznum: "1208625954",
    corpnum: 1101112317653.0,
    cash: 1.0
  },
  {
    name: "비씨엔씨",
    biznum: "1268172260",
    corpnum: 1342110058902.0,
    cash: 89.0
  },
  {
    name: "비씨월드제약",
    biznum: "1398111269",
    corpnum: 1243110005515.0,
    cash: 48.0
  },
  {
    name: "비아트론",
    biznum: "1198152946",
    corpnum: 1101112405721.0,
    cash: 103.0
  },
  {
    name: "비에이치",
    biznum: "1228157587",
    corpnum: 1350110087483.0,
    cash: 1526.0
  },
  {
    name: "비에이치아이",
    biznum: "6158108287",
    corpnum: 1943110006262.0,
    cash: 257.0
  },
  {
    name: "비엔지티",
    biznum: "5138100034",
    corpnum: 1753110000126.0,
    cash: 99.0
  },
  {
    name: "비엘",
    biznum: "3148129870",
    corpnum: 1601110091332.0,
    cash: 194.0
  },
  {
    name: "비엘팜텍",
    biznum: "3038113820",
    corpnum: 1545110007397.0,
    cash: 62.0
  },
  {
    name: "비엠티",
    biznum: "6068128130",
    corpnum: 1801110331502.0,
    cash: 139.0
  },
  {
    name: "비올",
    biznum: "1268682517",
    corpnum: 1101117221677.0,
    cash: 29.0
  },
  {
    name: "비즈니스온",
    biznum: "2208758882",
    corpnum: 1101113805293.0,
    cash: 104.0
  },
  {
    name: "비츠로셀",
    biznum: "3118101999",
    corpnum: 1101110548771.0,
    cash: 357.0
  },
  {
    name: "비츠로시스",
    biznum: "2188101953",
    corpnum: 1101110657275.0,
    cash: 78.0
  },
  {
    name: "비츠로테크",
    biznum: "1348108395",
    corpnum: 1101110086169.0,
    cash: 529.0
  },
  {
    name: "비케이탑스",
    biznum: "2158144176",
    corpnum: 1101110766703.0,
    cash: 2.0
  },
  {
    name: "비케이홀딩스",
    biznum: "5138118626",
    corpnum: 1760110022266.0,
    cash: 35.0
  },
  {
    name: "비투엔",
    biznum: "3028700950",
    corpnum: 1101116869965.0,
    cash: 38.0
  },
  {
    name: "비트나인",
    biznum: "2208868408",
    corpnum: 1101115255214.0,
    cash: 73.0
  },
  {
    name: "비트컴퓨터",
    biznum: "2208129726",
    corpnum: 1101110397699.0,
    cash: 75.0
  },
  {
    name: "비플라이소프트",
    biznum: "2218113339",
    corpnum: 1401110011243.0,
    cash: 32.0
  },
  {
    name: "비피도",
    biznum: "1198132746",
    corpnum: 1101111787378.0,
    cash: 20.0
  },
  {
    name: "빅솔론",
    biznum: "1248602593",
    corpnum: 1358110087297.0,
    cash: 186.0
  },
  {
    name: "빅텍",
    biznum: "1238139826",
    corpnum: 1341110048674.0,
    cash: 143.0
  },
  {
    name: "빙그레",
    biznum: "1328100631",
    corpnum: 1152110000287.0,
    cash: 996.0
  },
  {
    name: "빛샘전자",
    biznum: "1248158831",
    corpnum: 1301110049246.0,
    cash: 66.0
  },
  {
    name: "사람인에이치알",
    biznum: "1138600917",
    corpnum: 1101113318387.0,
    cash: 84.0
  },
  {
    name: "사조대림",
    biznum: "1148134190",
    corpnum: 1101110042278.0,
    cash: 733.0
  },
  {
    name: "사조동아원",
    biznum: "1368101103",
    corpnum: 1244110000662.0,
    cash: 411.0
  },
  {
    name: "사조산업",
    biznum: "1108109699",
    corpnum: 1101110112328.0,
    cash: 504.0
  },
  {
    name: "사조씨푸드",
    biznum: "1208116542",
    corpnum: 1101110271596.0,
    cash: 108.0
  },
  {
    name: "사조오양",
    biznum: "1048127881",
    corpnum: 1101110104820.0,
    cash: 24.0
  },
  {
    name: "삼강엠앤티",
    biznum: "6158106111",
    corpnum: 1913110003485.0,
    cash: 1321.0
  },
  {
    name: "삼기",
    biznum: "1068669145",
    corpnum: 1101114249458.0,
    cash: 176.0
  },
  {
    name: "삼륭물산",
    biznum: "1288103148",
    corpnum: 1156110001401.0,
    cash: 193.0
  },
  {
    name: "삼목에스폼",
    biznum: "1338123898",
    corpnum: 1101110400377.0,
    cash: 717.0
  },
  {
    name: "삼보모터스",
    biznum: "2158126391",
    corpnum: 1101110545529.0,
    cash: 1090.0
  },
  {
    name: "삼보산업",
    biznum: "6098116685",
    corpnum: 1801110020246.0,
    cash: 181.0
  },
  {
    name: "삼보판지",
    biznum: "1308112669",
    corpnum: 1243110011322.0,
    cash: 426.0
  },
  {
    name: "삼부토건",
    biznum: "1048100771",
    corpnum: 1101110041634.0,
    cash: 839.0
  },
  {
    name: "삼성SDI",
    biznum: "1248131282",
    corpnum: 1101110394174.0,
    cash: 32011.0
  },
  {
    name: "삼성공조",
    biznum: "6098102070",
    corpnum: 1942110000034.0,
    cash: 168.0
  },
  {
    name: "삼성머스트스팩5호",
    biznum: "1588702235",
    corpnum: 1101117804564.0,
    cash: 14.0
  },
  {
    name: "삼성물산",
    biznum: "2028145975",
    corpnum: 1101110015762.0,
    cash: 31151.0
  },
  {
    name: "삼성바이오로직스",
    biznum: "1318627632",
    corpnum: 1201110566317.0,
    cash: 3754.0
  },
  {
    name: "삼성생명",
    biznum: "1048126688",
    corpnum: 1101110005953.0,
    cash: 26345.0
  },
  {
    name: "삼성스팩4호",
    biznum: "6358101895",
    corpnum: 1101117761665.0,
    cash: 14.0
  },
  {
    name: "삼성스팩6호",
    biznum: "4238702503",
    corpnum: 1101118237201.0,
    cash: 18.0
  },
  {
    name: "삼성에스디에스",
    biznum: "1108128774",
    corpnum: 1101110398556.0,
    cash: 13904.0
  },
  {
    name: "삼성엔지니어링",
    biznum: "1208156184",
    corpnum: 1101110240509.0,
    cash: 7137.0
  },
  {
    name: "삼성전기",
    biznum: "1248100979",
    corpnum: 1301110001626.0,
    cash: 16194.0
  },
  {
    name: "삼성전자",
    biznum: "1248100998",
    corpnum: 1301110006246.0,
    cash: 445154.0
  },
  {
    name: "삼성제약",
    biznum: "2078100726",
    corpnum: 1101110032568.0,
    cash: 594.0
  },
  {
    name: "삼성중공업",
    biznum: "1208152780",
    corpnum: 1101110168595.0,
    cash: 8272.0
  },
  {
    name: "삼성증권",
    biznum: "2028148588",
    corpnum: 1101110335649.0,
    cash: 28750.0
  },
  {
    name: "삼성출판사",
    biznum: "2148714287",
    corpnum: 1101112559411.0,
    cash: 112.0
  },
  {
    name: "삼성카드",
    biznum: "2028145602",
    corpnum: 1101110346901.0,
    cash: 7125.0
  },
  {
    name: "삼성화재해상보험",
    biznum: "2028145617",
    corpnum: 1101110005078.0,
    cash: 7583.0
  },
  {
    name: "삼아알미늄",
    biznum: "1238101882",
    corpnum: 1341110002365.0,
    cash: 71.0
  },
  {
    name: "삼아제약",
    biznum: "1388105823",
    corpnum: 1341110000765.0,
    cash: 72.0
  },
  {
    name: "삼양사",
    biznum: "1018666838",
    corpnum: 1101114720945.0,
    cash: 1577.0
  },
  {
    name: "삼양식품",
    biznum: "1028105450",
    corpnum: 1101110034308.0,
    cash: 982.0
  },
  {
    name: "삼양옵틱스",
    biznum: "6088600017",
    corpnum: 1942110216483.0,
    cash: 75.0
  },
  {
    name: "삼양통상",
    biznum: "2208130276",
    corpnum: 1101110033433.0,
    cash: 110.0
  },
  {
    name: "삼양패키징",
    biznum: "1018693655",
    corpnum: 1101115554418.0,
    cash: 535.0
  },
  {
    name: "삼양홀딩스",
    biznum: "2088101320",
    corpnum: 1101110026181.0,
    cash: 2099.0
  },
  {
    name: "삼영무역",
    biznum: "1058155304",
    corpnum: 1101110027569.0,
    cash: 340.0
  },
  {
    name: "삼영에스앤씨",
    biznum: "1298135115",
    corpnum: 1311110050086.0,
    cash: 17.0
  },
  {
    name: "삼영엠텍",
    biznum: "6088127893",
    corpnum: 1943110005149.0,
    cash: 66.0
  },
  {
    name: "삼영이엔씨",
    biznum: "6018126156",
    corpnum: 1801110172667.0,
    cash: 72.0
  },
  {
    name: "삼영전자공업",
    biznum: "1298100372",
    corpnum: 1311110000205.0,
    cash: 341.0
  },
  {
    name: "삼영화학공업",
    biznum: "1138106556",
    corpnum: 1101110010001.0,
    cash: 115.0
  },
  {
    name: "삼원강재",
    biznum: "5068112319",
    corpnum: 1746110014924.0,
    cash: 170.0
  },
  {
    name: "삼익THK",
    biznum: "5038110869",
    corpnum: 1701110000935.0,
    cash: 225.0
  },
  {
    name: "삼익악기",
    biznum: "1228101045",
    corpnum: 1201110001818.0,
    cash: 878.0
  },
  {
    name: "삼일",
    biznum: "5068100754",
    corpnum: 1746110001244.0,
    cash: 0.0
  },
  {
    name: "삼일기업공사",
    biznum: "2208128542",
    corpnum: 1101110012825.0,
    cash: 442.0
  },
  {
    name: "삼일씨엔에스",
    biznum: "1028137869",
    corpnum: 1101110061228.0,
    cash: 101.0
  },
  {
    name: "삼일제약",
    biznum: "1148116848",
    corpnum: 1101110016679.0,
    cash: 19.0
  },
  {
    name: "삼정펄프",
    biznum: "1258100201",
    corpnum: 1347110000333.0,
    cash: 158.0
  },
  {
    name: "삼지전자",
    biznum: "1198101883",
    corpnum: 1101110300303.0,
    cash: 688.0
  },
  {
    name: "삼진",
    biznum: "1238105888",
    corpnum: 1341110005351.0,
    cash: 146.0
  },
  {
    name: "삼진엘앤디",
    biznum: "1248134479",
    corpnum: 1348110004664.0,
    cash: 132.0
  },
  {
    name: "삼진제약",
    biznum: "1058100769",
    corpnum: 1101110088652.0,
    cash: 36.0
  },
  {
    name: "삼천당제약",
    biznum: "1248104295",
    corpnum: 1348110003327.0,
    cash: 345.0
  },
  {
    name: "삼천리",
    biznum: "1168100755",
    corpnum: 1101110005929.0,
    cash: 5117.0
  },
  {
    name: "삼천리자전거",
    biznum: "1198107359",
    corpnum: 1101110250136.0,
    cash: 19.0
  },
  {
    name: "삼표시멘트",
    biznum: "2298104571",
    corpnum: 1101110738637.0,
    cash: 1195.0
  },
  {
    name: "삼현철강",
    biznum: "6098105081",
    corpnum: 1901110005551.0,
    cash: 691.0
  },
  {
    name: "삼호개발",
    biznum: "2208114806",
    corpnum: 1101110190340.0,
    cash: 65.0
  },
  {
    name: "삼화네트웍스",
    biznum: "1148155119",
    corpnum: 1101110809595.0,
    cash: 98.0
  },
  {
    name: "삼화왕관",
    biznum: "1388103179",
    corpnum: 1341110003462.0,
    cash: 113.0
  },
  {
    name: "삼화전기",
    biznum: "3158100390",
    corpnum: 1501110000856.0,
    cash: 87.0
  },
  {
    name: "삼화전자공업",
    biznum: "1248102768",
    corpnum: 1348110000563.0,
    cash: 6.0
  },
  {
    name: "삼화콘덴서공업",
    biznum: "1358102429",
    corpnum: 1345110003696.0,
    cash: 651.0
  },
  {
    name: "삼화페인트공업",
    biznum: "1348117477",
    corpnum: 1101110014433.0,
    cash: 385.0
  },
  {
    name: "상보",
    biznum: "1368102854",
    corpnum: 1243110024177.0,
    cash: 272.0
  },
  {
    name: "상상인",
    biznum: "1228118380",
    corpnum: 1201110050104.0,
    cash: 2659.0
  },
  {
    name: "상상인인더스트리",
    biznum: "6158138175",
    corpnum: 1955110072268.0,
    cash: 5.0
  },
  {
    name: "상상인제3호스팩",
    biznum: "6378602352",
    corpnum: 1101118127733.0,
    cash: 0.0
  },
  {
    name: "상상인증권",
    biznum: "1168114318",
    corpnum: 1101110031560.0,
    cash: 32.0
  },
  {
    name: "상신브레이크",
    biznum: "5148103617",
    corpnum: 1741110000527.0,
    cash: 469.0
  },
  {
    name: "상신이디피",
    biznum: "1248117179",
    corpnum: 1348110016007.0,
    cash: 440.0
  },
  {
    name: "상신전자",
    biznum: "1388105124",
    corpnum: 1341110025060.0,
    cash: 69.0
  },
  {
    name: "상아프론테크",
    biznum: "1228116548",
    corpnum: 1201110038209.0,
    cash: 182.0
  },
  {
    name: "상지카일룸",
    biznum: "1298104500",
    corpnum: 1311110004554.0,
    cash: 525.0
  },
  {
    name: "새로닉스",
    biznum: "5138101294",
    corpnum: 1753110000762.0,
    cash: 46.0
  },
  {
    name: "새론오토모티브",
    biznum: "3128135376",
    corpnum: 1615110030026.0,
    cash: 939.0
  },
  {
    name: "새빗켐",
    biznum: "5108110800",
    corpnum: 1713110007259.0,
    cash: 40.0
  },
  {
    name: "샘씨엔에스",
    biznum: "5738700343",
    corpnum: 1311110449718.0,
    cash: 80.0
  },
  {
    name: "샘표",
    biznum: "2178100359",
    corpnum: 1101110123797.0,
    cash: 318.0
  },
  {
    name: "샘표식품",
    biznum: "4468700473",
    corpnum: 1101116110045.0,
    cash: 202.0
  },
  {
    name: "서남",
    biznum: "1298178832",
    corpnum: 1311110128338.0,
    cash: 14.0
  },
  {
    name: "서린바이오",
    biznum: "2138604488",
    corpnum: 1101110998124.0,
    cash: 108.0
  },
  {
    name: "서부T&D",
    biznum: "1178101927",
    corpnum: 1101110256788.0,
    cash: 352.0
  },
  {
    name: "서산",
    biznum: "4108100453",
    corpnum: 2042110000370.0,
    cash: 66.0
  },
  {
    name: "서암기계공업",
    biznum: "4108101068",
    corpnum: 2042110000784.0,
    cash: 27.0
  },
  {
    name: "서연",
    biznum: "1138101115",
    corpnum: 1101110129026.0,
    cash: 2623.0
  },
  {
    name: "서연이화",
    biznum: "2208882958",
    corpnum: 1101115455476.0,
    cash: 2074.0
  },
  {
    name: "서연탑메탈",
    biznum: "1398102284",
    corpnum: 1101110519003.0,
    cash: 19.0
  },
  {
    name: "서울도시가스",
    biznum: "1098131605",
    corpnum: 1101110360399.0,
    cash: 840.0
  },
  {
    name: "서울리거",
    biznum: "1398112555",
    corpnum: 1243110031007.0,
    cash: 60.0
  },
  {
    name: "서울바이오시스",
    biznum: "1348178872",
    corpnum: 1350110122156.0,
    cash: 49.0
  },
  {
    name: "서울반도체",
    biznum: "1128113675",
    corpnum: 1101110522436.0,
    cash: 514.0
  },
  {
    name: "서울식품공업",
    biznum: "1348107983",
    corpnum: 1101110059702.0,
    cash: 24.0
  },
  {
    name: "서울옥션",
    biznum: "1018146818",
    corpnum: 1101111627011.0,
    cash: 16.0
  },
  {
    name: "서울전자통신",
    biznum: "1308110787",
    corpnum: 1243110009781.0,
    cash: 124.0
  },
  {
    name: "서울제약",
    biznum: "1338130405",
    corpnum: 1301110008721.0,
    cash: 130.0
  },
  {
    name: "서원",
    biznum: "1348101655",
    corpnum: 1350110029881.0,
    cash: 155.0
  },
  {
    name: "서원인텍",
    biznum: "1238144144",
    corpnum: 1351110045041.0,
    cash: 234.0
  },
  {
    name: "서전기전",
    biznum: "1348121423",
    corpnum: 1101110816938.0,
    cash: 0.0
  },
  {
    name: "서진시스템",
    biznum: "1228197712",
    corpnum: 1201110447781.0,
    cash: 192.0
  },
  {
    name: "서진오토모티브",
    biznum: "1078730882",
    corpnum: 1101114264828.0,
    cash: 303.0
  },
  {
    name: "서플러스글로벌",
    biznum: "1208602460",
    corpnum: 1101111921140.0,
    cash: 456.0
  },
  {
    name: "서한",
    biznum: "5028116195",
    corpnum: 1701110023002.0,
    cash: 756.0
  },
  {
    name: "서호전기",
    biznum: "1238126054",
    corpnum: 1101110591928.0,
    cash: 280.0
  },
  {
    name: "서흥",
    biznum: "1308100576",
    corpnum: 1243110004252.0,
    cash: 481.0
  },
  {
    name: "서희건설",
    biznum: "2208119330",
    corpnum: 1101110335912.0,
    cash: 1571.0
  },
  {
    name: "석경에이티",
    biznum: "1348163122",
    corpnum: 1350110108445.0,
    cash: 88.0
  },
  {
    name: "선광",
    biznum: "1218101455",
    corpnum: 1201110000034.0,
    cash: 383.0
  },
  {
    name: "선도전기",
    biznum: "1348102431",
    corpnum: 1301110007989.0,
    cash: 41.0
  },
  {
    name: "선바이오",
    biznum: "2138632344",
    corpnum: 1101111424243.0,
    cash: 114.0
  },
  {
    name: "선익시스템",
    biznum: "1258113079",
    corpnum: 1101110700555.0,
    cash: 79.0
  },
  {
    name: "선진",
    biznum: "1268636352",
    corpnum: 1344110046664.0,
    cash: 1777.0
  },
  {
    name: "선진뷰티사이언스",
    biznum: "1348101179",
    corpnum: 1350110029576.0,
    cash: 147.0
  },
  {
    name: "성광벤드",
    biznum: "6038107330",
    corpnum: 1801110036425.0,
    cash: 561.0
  },
  {
    name: "성도이엔지",
    biznum: "2208110950",
    corpnum: 1101110574669.0,
    cash: 871.0
  },
  {
    name: "성문전자",
    biznum: "1298105116",
    corpnum: 1311110005114.0,
    cash: 57.0
  },
  {
    name: "성보화학",
    biznum: "1288100011",
    corpnum: 1147110000402.0,
    cash: 90.0
  },
  {
    name: "성신양회",
    biznum: "1018118194",
    corpnum: 1101110072928.0,
    cash: 739.0
  },
  {
    name: "성안",
    biznum: "5048101534",
    corpnum: 1701110006868.0,
    cash: 18.0
  },
  {
    name: "성우전자",
    biznum: "1228122467",
    corpnum: 1243110020000.0,
    cash: 167.0
  },
  {
    name: "성우테크론",
    biznum: "6098129822",
    corpnum: 1942110025941.0,
    cash: 104.0
  },
  {
    name: "성우하이텍",
    biznum: "6218114445",
    corpnum: 1801110042612.0,
    cash: 1826.0
  },
  {
    name: "성일하이텍",
    biznum: "5208800609",
    corpnum: 2111110049793.0,
    cash: 743.0
  },
  {
    name: "성창기업지주",
    biznum: "6038108663",
    corpnum: 1801110001717.0,
    cash: 119.0
  },
  {
    name: "성창오토텍",
    biznum: "1258120828",
    corpnum: 1313110020308.0,
    cash: 114.0
  },
  {
    name: "성호전자",
    biznum: "1198102505",
    corpnum: 1101110145860.0,
    cash: 218.0
  },
  {
    name: "세경하이테크",
    biznum: "1358183418",
    corpnum: 1345110097540.0,
    cash: 246.0
  },
  {
    name: "세기상사",
    biznum: "2018148800",
    corpnum: 1101110015853.0,
    cash: 8.0
  },
  {
    name: "세동",
    biznum: "6218109049",
    corpnum: 1845110001541.0,
    cash: 68.0
  },
  {
    name: "세림B&G",
    biznum: "2628701457",
    corpnum: 1101117262754.0,
    cash: 12.0
  },
  {
    name: "세명전기",
    biznum: "6068108323",
    corpnum: 1801110052091.0,
    cash: 8.0
  },
  {
    name: "세방",
    biznum: "6178103842",
    corpnum: 1801110015932.0,
    cash: 685.0
  },
  {
    name: "세방전지",
    biznum: "2208100490",
    corpnum: 1101110202765.0,
    cash: 1274.0
  },
  {
    name: "세보엠이씨",
    biznum: "1188100241",
    corpnum: 1101110236590.0,
    cash: 49.0
  },
  {
    name: "세아메카닉스",
    biznum: "5138116079",
    corpnum: 1760110019792.0,
    cash: 54.0
  },
  {
    name: "세아베스틸지주",
    biznum: "1138106798",
    corpnum: 1101110035794.0,
    cash: 2129.0
  },
  {
    name: "세아제강",
    biznum: "5688601173",
    corpnum: 1101116860640.0,
    cash: 975.0
  },
  {
    name: "세아제강지주",
    biznum: "1068160926",
    corpnum: 1101110118996.0,
    cash: 3453.0
  },
  {
    name: "세아특수강",
    biznum: "5068104497",
    corpnum: 1746110005478.0,
    cash: 132.0
  },
  {
    name: "세아홀딩스",
    biznum: "1048163174",
    corpnum: 1101112276809.0,
    cash: 3991.0
  },
  {
    name: "세우글로벌",
    biznum: "1078107055",
    corpnum: 1101110227177.0,
    cash: 62.0
  },
  {
    name: "세운메디칼",
    biznum: "2048111321",
    corpnum: 1101110324858.0,
    cash: 350.0
  },
  {
    name: "세원물산",
    biznum: "5048105369",
    corpnum: 1701110020694.0,
    cash: 74.0
  },
  {
    name: "세원이앤씨",
    biznum: "1078680236",
    corpnum: 1101113489609.0,
    cash: 325.0
  },
  {
    name: "세원정공",
    biznum: "5038111081",
    corpnum: 1701110039207.0,
    cash: 370.0
  },
  {
    name: "세이브존I&C",
    biznum: "2108141081",
    corpnum: 1101112520644.0,
    cash: 379.0
  },
  {
    name: "세종공업",
    biznum: "6208100119",
    corpnum: 1812110000758.0,
    cash: 1328.0
  },
  {
    name: "세종메디칼",
    biznum: "1418120572",
    corpnum: 2849110088798.0,
    cash: 232.0
  },
  {
    name: "세종텔레콤",
    biznum: "1238128751",
    corpnum: 1341110036992.0,
    cash: 714.0
  },
  {
    name: "세중",
    biznum: "1188113090",
    corpnum: 1101111220063.0,
    cash: 537.0
  },
  {
    name: "세진중공업",
    biznum: "6108137716",
    corpnum: 2301110060126.0,
    cash: 311.0
  },
  {
    name: "세진티에스",
    biznum: "1138138010",
    corpnum: 1101111279672.0,
    cash: 107.0
  },
  {
    name: "세코닉스",
    biznum: "1278112192",
    corpnum: 1158110006449.0,
    cash: 112.0
  },
  {
    name: "세토피아",
    biznum: "3278600082",
    corpnum: 1101115745520.0,
    cash: 88.0
  },
  {
    name: "세하",
    biznum: "5148103863",
    corpnum: 1741110000618.0,
    cash: 160.0
  },
  {
    name: "세화피앤씨",
    biznum: "8698700472",
    corpnum: 1101116153095.0,
    cash: 27.0
  },
  {
    name: "센코",
    biznum: "2268132985",
    corpnum: 1411110025962.0,
    cash: 241.0
  },
  {
    name: "센트랄모텍",
    biznum: "6228103825",
    corpnum: 1942110014431.0,
    cash: 82.0
  },
  {
    name: "센트럴인사이트",
    biznum: "2088107756",
    corpnum: 1101110220204.0,
    cash: 8.0
  },
  {
    name: "셀레믹스",
    biznum: "1198635850",
    corpnum: 1101114481282.0,
    cash: 52.0
  },
  {
    name: "셀루메드",
    biznum: "1348101408",
    corpnum: 1201110019225.0,
    cash: 116.0
  },
  {
    name: "셀리드",
    biznum: "1198194247",
    corpnum: 1101113572636.0,
    cash: 71.0
  },
  {
    name: "셀리버리",
    biznum: "6178616037",
    corpnum: 1801110902791.0,
    cash: 115.0
  },
  {
    name: "셀바스AI",
    biznum: "1148187983",
    corpnum: 1101111673816.0,
    cash: 78.0
  },
  {
    name: "셀바스헬스케어",
    biznum: "1078831025",
    corpnum: 1101115530111.0,
    cash: 33.0
  },
  {
    name: "셀트리온",
    biznum: "1338123603",
    corpnum: 1350110034038.0,
    cash: 5892.0
  },
  {
    name: "셀트리온제약",
    biznum: "2148671641",
    corpnum: 1101112112764.0,
    cash: 204.0
  },
  {
    name: "셀트리온헬스케어",
    biznum: "1238153473",
    corpnum: 1341112007066.0,
    cash: 2850.0
  },
  {
    name: "셀피글로벌",
    biznum: "5018123451",
    corpnum: 1701110141812.0,
    cash: 93.0
  },
  {
    name: "소니드",
    biznum: "1148193374",
    corpnum: 1101111833486.0,
    cash: 90.0
  },
  {
    name: "소룩스",
    biznum: "1308166262",
    corpnum: 1211110051797.0,
    cash: 26.0
  },
  { name: "소마젠", biznum: "D10331502", corpnum: 0.0, cash: 155.0 },
  {
    name: "소프트센",
    biznum: "1378102916",
    corpnum: 1101110570442.0,
    cash: 397.0
  },
  {
    name: "소프트캠프",
    biznum: "3468800563",
    corpnum: 1101116219037.0,
    cash: 29.0
  },
  {
    name: "손오공",
    biznum: "1398131076",
    corpnum: 1201110144999.0,
    cash: 42.0
  },
  {
    name: "솔고바이오",
    biznum: "1258115723",
    corpnum: 1347110014590.0,
    cash: 63.0
  },
  {
    name: "솔루스첨단소재",
    biznum: "6688101406",
    corpnum: 2149110058927.0,
    cash: 2490.0
  },
  {
    name: "솔루에타",
    biznum: "1238189952",
    corpnum: 1351110065750.0,
    cash: 51.0
  },
  {
    name: "솔루엠",
    biznum: "4908100105",
    corpnum: 1358110272682.0,
    cash: 1483.0
  },
  {
    name: "솔본",
    biznum: "2118607024",
    corpnum: 1101111064429.0,
    cash: 116.0
  },
  {
    name: "솔브레인",
    biznum: "5248601789",
    corpnum: 1311110597525.0,
    cash: 1654.0
  },
  {
    name: "솔브레인홀딩스",
    biznum: "2148103416",
    corpnum: 1101110610083.0,
    cash: 944.0
  },
  {
    name: "솔트룩스",
    biznum: "1028113061",
    corpnum: 1101110301632.0,
    cash: 123.0
  },
  {
    name: "솔트웨어",
    biznum: "3218101680",
    corpnum: 1101117128211.0,
    cash: 122.0
  },
  {
    name: "송원산업",
    biznum: "6108107100",
    corpnum: 1801110000636.0,
    cash: 1221.0
  },
  {
    name: "쇼박스",
    biznum: "1068179629",
    corpnum: 1101111712309.0,
    cash: 161.0
  },
  {
    name: "수산아이앤티",
    biznum: "2078151341",
    corpnum: 1101111518830.0,
    cash: 27.0
  },
  {
    name: "수산인더스트리",
    biznum: "3128102856",
    corpnum: 1615110001613.0,
    cash: 565.0
  },
  {
    name: "수산중공업",
    biznum: "1248131958",
    corpnum: 1348110002981.0,
    cash: 327.0
  },
  {
    name: "EV수성",
    biznum: "1398123988",
    corpnum: 1101110313728.0,
    cash: 98.0
  },
  {
    name: "수젠텍",
    biznum: "3148630542",
    corpnum: 1601110312126.0,
    cash: 933.0
  },
  {
    name: "슈프리마",
    biznum: "4318700369",
    corpnum: 1311110433589.0,
    cash: 332.0
  },
  {
    name: "슈프리마아이디",
    biznum: "7688600658",
    corpnum: 1311110478436.0,
    cash: 88.0
  },
  {
    name: "슈프리마에이치큐",
    biznum: "1198138018",
    corpnum: 1101111960437.0,
    cash: 165.0
  },
  {
    name: "슈피겐코리아",
    biznum: "1208736593",
    corpnum: 1101114045848.0,
    cash: 742.0
  },
  {
    name: "스마트솔루션즈",
    biznum: "1248177764",
    corpnum: 1301110064822.0,
    cash: 13.0
  },
  {
    name: "스맥",
    biznum: "3148114800",
    corpnum: 1601110052665.0,
    cash: 36.0
  },
  {
    name: "케이티스카이라이프",
    biznum: "1178131120",
    corpnum: 1101112149436.0,
    cash: 621.0
  },
  {
    name: "스카이문스테크놀로지",
    biznum: "1078157410",
    corpnum: 1101110674724.0,
    cash: 110.0
  },
  {
    name: "스코넥",
    biznum: "1078616262",
    corpnum: 1101112499641.0,
    cash: 77.0
  },
  {
    name: "스킨앤스킨",
    biznum: "1298198293",
    corpnum: 1311110165843.0,
    cash: 60.0
  },
  {
    name: "스타플렉스",
    biznum: "1368119262",
    corpnum: 1201110136459.0,
    cash: 32.0
  },
  {
    name: "스톤브릿지벤처스",
    biznum: "8178100862",
    corpnum: 1101116416683.0,
    cash: 105.0
  },
  {
    name: "스튜디오드래곤",
    biznum: "7478100388",
    corpnum: 1101116052164.0,
    cash: 832.0
  },
  {
    name: "스튜디오산타클로스",
    biznum: "1078826110",
    corpnum: 1101115488493.0,
    cash: 163.0
  },
  {
    name: "스틱인베스트먼트",
    biznum: "1348107979",
    corpnum: 1243110008204.0,
    cash: 73.0
  },
  {
    name: "스페코",
    biznum: "1248106497",
    corpnum: 1348110001545.0,
    cash: 282.0
  },
  {
    name: "승일",
    biznum: "1378101955",
    corpnum: 1201110007204.0,
    cash: 149.0
  },
  {
    name: "시공테크",
    biznum: "1208126128",
    corpnum: 1101110562896.0,
    cash: 183.0
  },
  {
    name: "시그네틱스",
    biznum: "1098100780",
    corpnum: 1101110070815.0,
    cash: 135.0
  },
  {
    name: "시너지이노베이션",
    biznum: "1208179246",
    corpnum: 1101111530959.0,
    cash: 31.0
  },
  {
    name: "시노펙스",
    biznum: "5068103805",
    corpnum: 1746110004644.0,
    cash: 311.0
  },
  {
    name: "시디즈",
    biznum: "2158748121",
    corpnum: 1101114493344.0,
    cash: 97.0
  },
  {
    name: "시스웍",
    biznum: "3058170225",
    corpnum: 1601110176572.0,
    cash: 68.0
  },
  {
    name: "시큐브",
    biznum: "1298133306",
    corpnum: 1311110047447.0,
    cash: 161.0
  },
  {
    name: "시티랩스",
    biznum: "1388132903",
    corpnum: 1211110142596.0,
    cash: 37.0
  },
  {
    name: "신대양제지",
    biznum: "1348102858",
    corpnum: 1301110008789.0,
    cash: 201.0
  },
  {
    name: "신도기연",
    biznum: "1308172842",
    corpnum: 1211110078395.0,
    cash: 382.0
  },
  {
    name: "신도리코",
    biznum: "2188100328",
    corpnum: 1101110034960.0,
    cash: 970.0
  },
  {
    name: "신라교역",
    biznum: "2198100919",
    corpnum: 1101110008254.0,
    cash: 965.0
  },
  {
    name: "신라섬유",
    biznum: "5028101407",
    corpnum: 1701110014522.0,
    cash: 8.0
  },
  {
    name: "신라에스지",
    biznum: "2198101029",
    corpnum: 1101110224727.0,
    cash: 18.0
  },
  {
    name: "신라젠",
    biznum: "6038161936",
    corpnum: 1801110550194.0,
    cash: 144.0
  },
  {
    name: "신성델타테크",
    biznum: "6098107658",
    corpnum: 1942110003096.0,
    cash: 547.0
  },
  {
    name: "신성이엔지",
    biznum: "1348103352",
    corpnum: 1301110008664.0,
    cash: 235.0
  },
  {
    name: "신성통상",
    biznum: "1048101106",
    corpnum: 1101110003345.0,
    cash: 915.0
  },
  {
    name: "신세계",
    biznum: "2018132195",
    corpnum: 1101110028848.0,
    cash: 8256.0
  },
  {
    name: "신세계I&C",
    biznum: "2018120549",
    corpnum: 1101111408867.0,
    cash: 1250.0
  },
  {
    name: "신세계건설",
    biznum: "2018144158",
    corpnum: 1101110759493.0,
    cash: 567.0
  },
  {
    name: "신세계인터내셔날",
    biznum: "2018153657",
    corpnum: 1101110282402.0,
    cash: 327.0
  },
  {
    name: "신세계푸드",
    biznum: "2158147377",
    corpnum: 1101110305288.0,
    cash: 245.0
  },
  {
    name: "신송홀딩스",
    biznum: "1168104391",
    corpnum: 1101110038061.0,
    cash: 43.0
  },
  {
    name: "신신제약",
    biznum: "1188104136",
    corpnum: 1101110027353.0,
    cash: 15.0
  },
  {
    name: "신영스팩6호",
    biznum: "4318801614",
    corpnum: 1101117301932.0,
    cash: 13.0
  },
  {
    name: "신영스팩7호",
    biznum: "1228802266",
    corpnum: 1101118173760.0,
    cash: 15.0
  },
  {
    name: "신영스팩8호",
    biznum: "3388102654",
    corpnum: 1101118282032.0,
    cash: 23.0
  },
  {
    name: "신영스팩9호",
    biznum: "7978102585",
    corpnum: 1101118431035.0,
    cash: 22.0
  },
  {
    name: "신영와코루",
    biznum: "1198101559",
    corpnum: 1101110094964.0,
    cash: 462.0
  },
  {
    name: "신영증권",
    biznum: "1168110802",
    corpnum: 1101110006612.0,
    cash: 1581.0
  },
  {
    name: "신원",
    biznum: "1058111908",
    corpnum: 1101110152770.0,
    cash: 293.0
  },
  {
    name: "신원종합개발",
    biznum: "1058117479",
    corpnum: 1101110350712.0,
    cash: 50.0
  },
  {
    name: "신일전자",
    biznum: "1348125389",
    corpnum: 1348110001256.0,
    cash: 460.0
  },
  {
    name: "신일제약",
    biznum: "3038113742",
    corpnum: 1152110000790.0,
    cash: 49.0
  },
  {
    name: "신진에스엠",
    biznum: "1248186623",
    corpnum: 1348110061937.0,
    cash: 98.0
  },
  {
    name: "신테카바이오",
    biznum: "1058735732",
    corpnum: 1101114179457.0,
    cash: 401.0
  },
  {
    name: "신풍",
    biznum: "1258105545",
    corpnum: 1347110002644.0,
    cash: 51.0
  },
  {
    name: "신풍제약",
    biznum: "1348103819",
    corpnum: 1301110011815.0,
    cash: 384.0
  },
  {
    name: "신한서부티엔디리츠",
    biznum: "1448801520",
    corpnum: 1101117343356.0,
    cash: 108.0
  },
  {
    name: "신한알파리츠",
    biznum: "2938100902",
    corpnum: 1101116601135.0,
    cash: 495.0
  },
  {
    name: "신한제10호스팩",
    biznum: "6458602862",
    corpnum: 1101118155015.0,
    cash: 13.0
  },
  {
    name: "신한제7호스팩",
    biznum: "3198701938",
    corpnum: 1101117615474.0,
    cash: 17.0
  },
  {
    name: "신한제8호스팩",
    biznum: "7958702029",
    corpnum: 1101117923934.0,
    cash: 22.0
  },
  {
    name: "신한제9호스팩",
    biznum: "7258102241",
    corpnum: 1101118048781.0,
    cash: 18.0
  },
  {
    name: "신한지주",
    biznum: "1048164625",
    corpnum: 1101112322438.0,
    cash: 128923.0
  },
  {
    name: "신화인터텍",
    biznum: "1248135935",
    corpnum: 1348110011677.0,
    cash: 111.0
  },
  {
    name: "신화콘텍",
    biznum: "2158633301",
    corpnum: 1101112637291.0,
    cash: 104.0
  },
  {
    name: "신흥",
    biznum: "1148143063",
    corpnum: 1101110047864.0,
    cash: 6.0
  },
  {
    name: "신흥에스이씨",
    biznum: "1248680186",
    corpnum: 1348110178873.0,
    cash: 538.0
  },
  {
    name: "실리콘투",
    biznum: "2148703359",
    corpnum: 1101112425448.0,
    cash: 31.0
  },
  {
    name: "심텍",
    biznum: "1338800123",
    corpnum: 1501110205802.0,
    cash: 475.0
  },
  {
    name: "심텍홀딩스",
    biznum: "3158101652",
    corpnum: 1501110006185.0,
    cash: 734.0
  },
  {
    name: "싸이맥스",
    biznum: "1298191801",
    corpnum: 1311110153525.0,
    cash: 196.0
  },
  {
    name: "싸이버원",
    biznum: "2148764564",
    corpnum: 1101113149287.0,
    cash: 138.0
  },
  {
    name: "싸이토젠",
    biznum: "1298644021",
    corpnum: 1311110251395.0,
    cash: 281.0
  },
  {
    name: "쌍방울",
    biznum: "1208727416",
    corpnum: 1101113891169.0,
    cash: 81.0
  },
  {
    name: "쌍용씨앤이",
    biznum: "2028133033",
    corpnum: 1101110037823.0,
    cash: 81.0
  },
  {
    name: "쌍용정보통신",
    biznum: "2028132975",
    corpnum: 1101110307870.0,
    cash: 323.0
  },
  {
    name: "쌍용자동차",
    biznum: "1258114248",
    corpnum: 1101110035132.0,
    cash: 843.0
  },
  {
    name: "써니전자",
    biznum: "1138106968",
    corpnum: 1101110070881.0,
    cash: 29.0
  },
  {
    name: "썸에이지",
    biznum: "2618119952",
    corpnum: 1101115545962.0,
    cash: 26.0
  },
  {
    name: "쎄노텍",
    biznum: "6768600117",
    corpnum: 1101115733509.0,
    cash: 10.0
  },
  {
    name: "쎄니트",
    biznum: "6088122767",
    corpnum: 1942110018855.0,
    cash: 105.0
  },
  {
    name: "쎄트렉아이",
    biznum: "3148129846",
    corpnum: 1601110091283.0,
    cash: 981.0
  },
  {
    name: "쎌마테라퓨틱스",
    biznum: "1188103215",
    corpnum: 1101110302565.0,
    cash: 1.0
  },
  {
    name: "쎌바이오텍",
    biznum: "1368113410",
    corpnum: 1244110020587.0,
    cash: 135.0
  },
  {
    name: "쏘카",
    biznum: "6168190529",
    corpnum: 2201110087049.0,
    cash: 1509.0
  },
  {
    name: "쏠리드",
    biznum: "2158172901",
    corpnum: 1101111603764.0,
    cash: 541.0
  },
  {
    name: "씨씨에스",
    biznum: "3038118621",
    corpnum: 1511110009906.0,
    cash: 40.0
  },
  {
    name: "씨아이에스",
    biznum: "1878600067",
    corpnum: 1101115731032.0,
    cash: 505.0
  },
  {
    name: "씨아이테크",
    biznum: "2108101231",
    corpnum: 1101110074479.0,
    cash: 80.0
  },
  {
    name: "씨앤씨인터내셔널",
    biznum: "1358638179",
    corpnum: 1358110238402.0,
    cash: 505.0
  },
  {
    name: "씨앤지하이테크",
    biznum: "1248198492",
    corpnum: 1348110072786.0,
    cash: 373.0
  },
  {
    name: "씨앤투스",
    biznum: "6108166526",
    corpnum: 2301110096064.0,
    cash: 326.0
  },
  {
    name: "씨에스베어링",
    biznum: "6068606640",
    corpnum: 1801110611863.0,
    cash: 476.0
  },
  {
    name: "씨에스윈드",
    biznum: "2128176626",
    corpnum: 1101113509887.0,
    cash: 2081.0
  },
  {
    name: "씨엔알리서치",
    biznum: "8298701755",
    corpnum: 1101117525110.0,
    cash: 77.0
  },
  {
    name: "씨엔플러스",
    biznum: "1318182038",
    corpnum: 1201110330796.0,
    cash: 10.0
  },
  {
    name: "씨유메디칼",
    biznum: "2248124096",
    corpnum: 1412110022619.0,
    cash: 61.0
  },
  {
    name: "씨유테크",
    biznum: "1258154366",
    corpnum: 1313110055652.0,
    cash: 655.0
  },
  {
    name: "씨이랩",
    biznum: "1198631534",
    corpnum: 1101114401438.0,
    cash: 195.0
  },
  {
    name: "씨젠",
    biznum: "1108147859",
    corpnum: 1101112070334.0,
    cash: 1889.0
  },
  { name: "씨케이에이치", biznum: "223523", corpnum: 0.0, cash: 824.0 },
  {
    name: "씨큐브",
    biznum: "3018147023",
    corpnum: 1543110010576.0,
    cash: 85.0
  },
  {
    name: "씨티씨바이오",
    biznum: "2158151094",
    corpnum: 1101111227077.0,
    cash: 220.0
  },
  {
    name: "씨티케이",
    biznum: "2148681682",
    corpnum: 1101112233560.0,
    cash: 306.0
  },
  {
    name: "아가방컴퍼니",
    biznum: "2208101830",
    corpnum: 1101110250855.0,
    cash: 309.0
  },
  {
    name: "아나패스",
    biznum: "1078627134",
    corpnum: 1101112663436.0,
    cash: 125.0
  },
  {
    name: "아난티",
    biznum: "1348107135",
    corpnum: 1301110026814.0,
    cash: 1404.0
  },
  {
    name: "아남전자",
    biznum: "1228102613",
    corpnum: 1201110018300.0,
    cash: 203.0
  },
  {
    name: "아모그린텍",
    biznum: "1378158268",
    corpnum: 1244110064402.0,
    cash: 70.0
  },
  {
    name: "아모레퍼시픽그룹",
    biznum: "1068100011",
    corpnum: 1101110026644.0,
    cash: 7738.0
  },
  {
    name: "아모레퍼시픽",
    biznum: "1068643373",
    corpnum: 1101113471036.0,
    cash: 5505.0
  },
  {
    name: "아모센스",
    biznum: "1378191480",
    corpnum: 1244110093120.0,
    cash: 106.0
  },
  {
    name: "아모텍",
    biznum: "1368112269",
    corpnum: 1244110019308.0,
    cash: 519.0
  },
  {
    name: "아미노로직스",
    biznum: "1298123337",
    corpnum: 1311110030369.0,
    cash: 138.0
  },
  {
    name: "아미코젠",
    biznum: "6138121213",
    corpnum: 1911110019783.0,
    cash: 269.0
  },
  {
    name: "아바코",
    biznum: "5038143827",
    corpnum: 1701110166737.0,
    cash: 302.0
  },
  {
    name: "아바텍",
    biznum: "5038146784",
    corpnum: 1701110179623.0,
    cash: 211.0
  },
  {
    name: "아비코전자",
    biznum: "1298100692",
    corpnum: 1311110000718.0,
    cash: 286.0
  },
  {
    name: "아세아",
    biznum: "2208123120",
    corpnum: 1101110030710.0,
    cash: 2392.0
  },
  {
    name: "아세아시멘트",
    biznum: "2208864630",
    corpnum: 1101115238096.0,
    cash: 1122.0
  },
  {
    name: "아세아제지",
    biznum: "2208102052",
    corpnum: 1101110006274.0,
    cash: 1058.0
  },
  {
    name: "아세아텍",
    biznum: "5148100212",
    corpnum: 1741110000098.0,
    cash: 130.0
  },
  {
    name: "아센디오",
    biznum: "1058104294",
    corpnum: 1101110253908.0,
    cash: 26.0
  },
  {
    name: "아셈스",
    biznum: "6038158974",
    corpnum: 1801110515685.0,
    cash: 95.0
  },
  {
    name: "아스타",
    biznum: "1298193717",
    corpnum: 1311110157098.0,
    cash: 20.0
  },
  {
    name: "아스트",
    biznum: "6138124511",
    corpnum: 1954110007168.0,
    cash: 11.0
  },
  {
    name: "아스플로",
    biznum: "1348176326",
    corpnum: 1350110119749.0,
    cash: 137.0
  },
  {
    name: "아시아경제",
    biznum: "1018615912",
    corpnum: 1101113251165.0,
    cash: 789.0
  },
  {
    name: "아시아나IDT",
    biznum: "1048122547",
    corpnum: 1101110801848.0,
    cash: 217.0
  },
  {
    name: "아시아나항공",
    biznum: "1048117480",
    corpnum: 1101110562804.0,
    cash: 6532.0
  },
  {
    name: "아시아종묘",
    biznum: "2158658597",
    corpnum: 1101113036096.0,
    cash: 36.0
  },
  {
    name: "아우딘퓨쳐스",
    biznum: "2208602474",
    corpnum: 1101112131821.0,
    cash: 26.0
  },
  {
    name: "아이디스",
    biznum: "3148625786",
    corpnum: 1601110302755.0,
    cash: 301.0
  },
  {
    name: "아이디스홀딩스",
    biznum: "3148120205",
    corpnum: 1601110065824.0,
    cash: 883.0
  },
  {
    name: "아이디피",
    biznum: "1138602012",
    corpnum: 1101113356410.0,
    cash: 39.0
  },
  {
    name: "아이마켓코리아",
    biznum: "1048158502",
    corpnum: 1101112125262.0,
    cash: 822.0
  },
  {
    name: "아이비김영",
    biznum: "1208827562",
    corpnum: 1101117257507.0,
    cash: 104.0
  },
  {
    name: "아이센스",
    biznum: "2108129428",
    corpnum: 1101111960924.0,
    cash: 672.0
  },
  {
    name: "아이스크림에듀",
    biznum: "1208797004",
    corpnum: 1101115125649.0,
    cash: 102.0
  },
  {
    name: "아이쓰리시스템",
    biznum: "3148123158",
    corpnum: 1601110072738.0,
    cash: 36.0
  },
  {
    name: "아이씨디",
    biznum: "1248170233",
    corpnum: 1301110058560.0,
    cash: 207.0
  },
  {
    name: "아이씨에이치",
    biznum: "1438104883",
    corpnum: 1348110250671.0,
    cash: 198.0
  },
  {
    name: "아이앤씨",
    biznum: "1208167380",
    corpnum: 1101111342213.0,
    cash: 3.0
  },
  {
    name: "아이에스동서",
    biznum: "2118631577",
    corpnum: 1101110208383.0,
    cash: 5017.0
  },
  {
    name: "아이에스이커머스",
    biznum: "1018168210",
    corpnum: 1101112192493.0,
    cash: 33.0
  },
  {
    name: "아이에이",
    biznum: "2118199077",
    corpnum: 1101110963341.0,
    cash: 227.0
  },
  {
    name: "아이엘사이언스",
    biznum: "8818801236",
    corpnum: 1101116859099.0,
    cash: 11.0
  },
  {
    name: "아이엠",
    biznum: "1248640961",
    corpnum: 1358110122283.0,
    cash: 144.0
  },
  {
    name: "아이오케이",
    biznum: "2118696978",
    corpnum: 1101111952567.0,
    cash: 100.0
  },
  {
    name: "아이윈",
    biznum: "6218132365",
    corpnum: 1845110020244.0,
    cash: 118.0
  },
  {
    name: "아이윈플러스",
    biznum: "1148631150",
    corpnum: 1101112870784.0,
    cash: 112.0
  },
  {
    name: "아이즈비전",
    biznum: "6078134770",
    corpnum: 1801110132801.0,
    cash: 198.0
  },
  {
    name: "아이진",
    biznum: "1018160412",
    corpnum: 1101112005018.0,
    cash: 61.0
  },
  {
    name: "아이컴포넌트",
    biznum: "1248172828",
    corpnum: 1301110060490.0,
    cash: 107.0
  },
  {
    name: "아이퀘스트",
    biznum: "1018142433",
    corpnum: 1101111346439.0,
    cash: 76.0
  },
  {
    name: "아이큐어",
    biznum: "1148199306",
    corpnum: 1101111982720.0,
    cash: 202.0
  },
  {
    name: "아이크래프트",
    biznum: "2208175308",
    corpnum: 1101111858814.0,
    cash: 59.0
  },
  {
    name: "아이텍",
    biznum: "1238600952",
    corpnum: 1351110074149.0,
    cash: 704.0
  },
  {
    name: "아이톡시",
    biznum: "2118623306",
    corpnum: 1101111434218.0,
    cash: 20.0
  },
  {
    name: "아이티센",
    biznum: "1208681451",
    corpnum: 1101113224849.0,
    cash: 568.0
  },
  {
    name: "아이티아이즈",
    biznum: "1178181348",
    corpnum: 1101114934273.0,
    cash: 34.0
  },
  {
    name: "아이티엠반도체",
    biznum: "1298132781",
    corpnum: 1311110046639.0,
    cash: 625.0
  },
  {
    name: "아이패밀리에스씨",
    biznum: "1208600633",
    corpnum: 1101111892333.0,
    cash: 121.0
  },
  {
    name: "아주IB투자",
    biznum: "1168141872",
    corpnum: 1101110169874.0,
    cash: 169.0
  },
  {
    name: "아주스틸",
    biznum: "5138116496",
    corpnum: 1760110020145.0,
    cash: 141.0
  },
  {
    name: "아즈텍WB",
    biznum: "6038119267",
    corpnum: 1801110145953.0,
    cash: 234.0
  },
  {
    name: "아진산업",
    biznum: "5158107635",
    corpnum: 1701110008913.0,
    cash: 319.0
  },
  {
    name: "아진엑스텍",
    biznum: "6218129249",
    corpnum: 1801110248369.0,
    cash: 132.0
  },
  {
    name: "아톤",
    biznum: "1078171649",
    corpnum: 1101111788566.0,
    cash: 36.0
  },
  {
    name: "아프리카TV",
    biznum: "2208110886",
    corpnum: 1101111263203.0,
    cash: 757.0
  },
  {
    name: "아하",
    biznum: "1128152488",
    corpnum: 1101111708085.0,
    cash: 127.0
  },
  {
    name: "안국약품",
    biznum: "1188104188",
    corpnum: 1101110026420.0,
    cash: 171.0
  },
  {
    name: "안랩",
    biznum: "2148183536",
    corpnum: 1101111138985.0,
    cash: 153.0
  },
  {
    name: "안트로젠",
    biznum: "1088121711",
    corpnum: 1101111909906.0,
    cash: 156.0
  },
  {
    name: "알로이스",
    biznum: "5318700960",
    corpnum: 1101116735067.0,
    cash: 90.0
  },
  {
    name: "알루코",
    biznum: "3068101212",
    corpnum: 1601110002313.0,
    cash: 170.0
  },
  {
    name: "알리코제약",
    biznum: "1348115033",
    corpnum: 1350110038048.0,
    cash: 282.0
  },
  {
    name: "알비더블유",
    biznum: "2118840371",
    corpnum: 1101114297944.0,
    cash: 444.0
  },
  {
    name: "알서포트",
    biznum: "1148682265",
    corpnum: 1101114398859.0,
    cash: 192.0
  },
  {
    name: "알에스오토메이션",
    biznum: "1428124514",
    corpnum: 1345110147171.0,
    cash: 102.0
  },
  {
    name: "알에프세미",
    biznum: "3148128793",
    corpnum: 1601110088660.0,
    cash: 7.0
  },
  {
    name: "알에프텍",
    biznum: "1358119560",
    corpnum: 1350110045639.0,
    cash: 733.0
  },
  {
    name: "알엔투테크놀로지",
    biznum: "1288169024",
    corpnum: 1156110036979.0,
    cash: 59.0
  },
  {
    name: "알체라",
    biznum: "6438700337",
    corpnum: 1101116080032.0,
    cash: 72.0
  },
  {
    name: "알테오젠",
    biznum: "3148197965",
    corpnum: 1601110242050.0,
    cash: 134.0
  },
  {
    name: "알톤스포츠",
    biznum: "1078733730",
    corpnum: 1101114313807.0,
    cash: 103.0
  },
  {
    name: "알티캐스트",
    biznum: "2118648990",
    corpnum: 1101111643736.0,
    cash: 31.0
  },
  {
    name: "알파홀딩스",
    biznum: "1358158772",
    corpnum: 1345110066131.0,
    cash: 77.0
  },
  {
    name: "알피바이오",
    biznum: "6208600448",
    corpnum: 1101116142668.0,
    cash: 210.0
  },
  {
    name: "압타머사이언스",
    biznum: "5068175181",
    corpnum: 1717110093010.0,
    cash: 29.0
  },
  {
    name: "압타바이오",
    biznum: "1358603821",
    corpnum: 1358110168906.0,
    cash: 78.0
  },
  {
    name: "애경산업",
    biznum: "1138111573",
    corpnum: 1101110398275.0,
    cash: 1038.0
  },
  {
    name: "애경케미칼",
    biznum: "1138663305",
    corpnum: 1101114951243.0,
    cash: 822.0
  },
  {
    name: "애니젠",
    biznum: "4098153794",
    corpnum: 2001110115802.0,
    cash: 3.0
  },
  {
    name: "애니플러스",
    biznum: "3188109181",
    corpnum: 1101116895217.0,
    cash: 168.0
  },
  {
    name: "애드바이오텍",
    biznum: "2158193416",
    corpnum: 1101111999444.0,
    cash: 11.0
  },
  { name: "애머릿지", biznum: "845223", corpnum: 0.0, cash: 89.0 },
  {
    name: "액션스퀘어",
    biznum: "1078827934",
    corpnum: 1101115501302.0,
    cash: 322.0
  },
  {
    name: "액토즈소프트",
    biznum: "2018155470",
    corpnum: 1101111335656.0,
    cash: 661.0
  },
  {
    name: "액트로",
    biznum: "1388178118",
    corpnum: 1352110033862.0,
    cash: 306.0
  },
  {
    name: "앤디포스",
    biznum: "3038158943",
    corpnum: 1545110045488.0,
    cash: 286.0
  },
  {
    name: "앤씨앤",
    biznum: "2138631520",
    corpnum: 1101111413361.0,
    cash: 151.0
  },
  {
    name: "앱코",
    biznum: "1068601413",
    corpnum: 1101112284729.0,
    cash: 161.0
  },
  {
    name: "앱클론",
    biznum: "1138640428",
    corpnum: 1101114379213.0,
    cash: 214.0
  },
  {
    name: "야스",
    biznum: "1108156305",
    corpnum: 1101112494451.0,
    cash: 21.0
  },
  {
    name: "양지사",
    biznum: "1198108488",
    corpnum: 1101110244965.0,
    cash: 1.0
  },
  {
    name: "어반리튬",
    biznum: "1138148008",
    corpnum: 1101111549108.0,
    cash: 36.0
  },
  {
    name: "어보브반도체",
    biznum: "3018188214",
    corpnum: 1501110093926.0,
    cash: 163.0
  },
  {
    name: "어스앤에어로스페이스",
    biznum: "6138127217",
    corpnum: 1954110007985.0,
    cash: 2.0
  },
  {
    name: "얼라인드",
    biznum: "1388149267",
    corpnum: 1341110170980.0,
    cash: 102.0
  },
  {
    name: "에너토크",
    biznum: "1288105641",
    corpnum: 1101110530687.0,
    cash: 30.0
  },
  {
    name: "에넥스",
    biznum: "2208131765",
    corpnum: 1101110192635.0,
    cash: 123.0
  },
  {
    name: "에브리봇",
    biznum: "1298692106",
    corpnum: 1311110396927.0,
    cash: 51.0
  },
  {
    name: "에스넷",
    biznum: "1208186581",
    corpnum: 1101111647671.0,
    cash: 191.0
  },
  {
    name: "에스디바이오센서",
    biznum: "1358613315",
    corpnum: 1358110191121.0,
    cash: 15460.0
  },
  {
    name: "에스디생명공학",
    biznum: "2118818506",
    corpnum: 1101113971466.0,
    cash: 73.0
  },
  {
    name: "에스디시스템",
    biznum: "1298142052",
    corpnum: 1311110060530.0,
    cash: 20.0
  },
  {
    name: "에스맥",
    biznum: "1248626275",
    corpnum: 1358110109364.0,
    cash: 739.0
  },
  {
    name: "에스씨디",
    biznum: "1358102166",
    corpnum: 1345110005858.0,
    cash: 537.0
  },
  {
    name: "에스씨엠생명과학",
    biznum: "1218634816",
    corpnum: 1201110715352.0,
    cash: 17.0
  },
  {
    name: "에스아이리소스",
    biznum: "5038108816",
    corpnum: 1701110031873.0,
    cash: 9.0
  },
  {
    name: "에스앤더블류",
    biznum: "6038111659",
    corpnum: 1801110095637.0,
    cash: 55.0
  },
  {
    name: "에스앤디",
    biznum: "3128132312",
    corpnum: 1615110028766.0,
    cash: 119.0
  },
  {
    name: "에스앤에스텍",
    biznum: "1298140113",
    corpnum: 1311110057925.0,
    cash: 475.0
  },
  {
    name: "에스에너지",
    biznum: "2068154253",
    corpnum: 1101112149890.0,
    cash: 91.0
  },
  {
    name: "에스에스알",
    biznum: "1138642090",
    corpnum: 1101114422103.0,
    cash: 74.0
  },
  {
    name: "에스에이엠티",
    biznum: "1208105647",
    corpnum: 1101110707674.0,
    cash: 255.0
  },
  {
    name: "에스에이티",
    biznum: "2298135230",
    corpnum: 1101111622540.0,
    cash: 173.0
  },
  {
    name: "에스에이티이엔지",
    biznum: "5328601719",
    corpnum: 1101117417458.0,
    cash: 19.0
  },
  {
    name: "에스에프에이",
    biznum: "6098135227",
    corpnum: 1942110032714.0,
    cash: 1913.0
  },
  {
    name: "에스엔유",
    biznum: "1128149514",
    corpnum: 1101111515191.0,
    cash: 200.0
  },
  {
    name: "에스엘",
    biznum: "5048100078",
    corpnum: 1701110000034.0,
    cash: 1593.0
  },
  {
    name: "에스엘바이오닉스",
    biznum: "1298611651",
    corpnum: 1311110191004.0,
    cash: 54.0
  },
  {
    name: "에스엠",
    biznum: "1148163109",
    corpnum: 1101111128340.0,
    cash: 2789.0
  },
  {
    name: "에스엠벡셀",
    biznum: "1258106772",
    corpnum: 1341110003058.0,
    cash: 105.0
  },
  {
    name: "에스엠코어",
    biznum: "1138117320",
    corpnum: 1101110128680.0,
    cash: 142.0
  },
  {
    name: "에스와이",
    biznum: "1248177032",
    corpnum: 1301110064351.0,
    cash: 269.0
  },
  {
    name: "에스원",
    biznum: "2088113302",
    corpnum: 1101110221939.0,
    cash: 2253.0
  },
  {
    name: "에스제이그룹",
    biznum: "2118810329",
    corpnum: 1101113856618.0,
    cash: 243.0
  },
  {
    name: "에스케이증권7호스팩",
    biznum: "3728102557",
    corpnum: 1101118073613.0,
    cash: 10.0
  },
  {
    name: "SK증권제8호스팩",
    biznum: "2728802391",
    corpnum: 1101118327721.0,
    cash: 9.0
  },
  {
    name: "에스코넥",
    biznum: "1298132103",
    corpnum: 1311110045540.0,
    cash: 141.0
  },
  {
    name: "에스텍",
    biznum: "6218135775",
    corpnum: 1845110021812.0,
    cash: 468.0
  },
  {
    name: "에스텍파마",
    biznum: "1238147345",
    corpnum: 1351110047782.0,
    cash: 170.0
  },
  {
    name: "에스트래픽",
    biznum: "1448109125",
    corpnum: 1311110332864.0,
    cash: 57.0
  },
  {
    name: "에스티아이",
    biznum: "1258123112",
    corpnum: 1346110009460.0,
    cash: 419.0
  },
  {
    name: "에스티오",
    biznum: "2068179031",
    corpnum: 1101112722761.0,
    cash: 55.0
  },
  {
    name: "에스티큐브",
    biznum: "1308126197",
    corpnum: 1243110025472.0,
    cash: 234.0
  },
  {
    name: "에스티팜",
    biznum: "3038152269",
    corpnum: 1545110039704.0,
    cash: 139.0
  },
  {
    name: "에스폴리텍",
    biznum: "2298138692",
    corpnum: 1101111716898.0,
    cash: 291.0
  },
  {
    name: "에스퓨얼셀",
    biznum: "1298686341",
    corpnum: 1311110367986.0,
    cash: 46.0
  },
  {
    name: "에스피시스템스",
    biznum: "6178116288",
    corpnum: 1801110078534.0,
    cash: 93.0
  },
  {
    name: "에스피지",
    biznum: "1398111459",
    corpnum: 1243110031213.0,
    cash: 186.0
  },
  {
    name: "에쎈테크",
    biznum: "1398105578",
    corpnum: 1201110087834.0,
    cash: 23.0
  },
  {
    name: "에쓰씨엔지니어링",
    biznum: "1168107777",
    corpnum: 1101110271497.0,
    cash: 199.0
  },
  {
    name: "에어부산",
    biznum: "6058184518",
    corpnum: 1801110605121.0,
    cash: 1225.0
  },
  {
    name: "에이디엠코리아",
    biznum: "1018198897",
    corpnum: 1101112887193.0,
    cash: 53.0
  },
  {
    name: "에이디칩스",
    biznum: "1208160709",
    corpnum: 1101111261405.0,
    cash: 1.0
  },
  {
    name: "에이디테크놀로지",
    biznum: "1298153729",
    corpnum: 1311110081627.0,
    cash: 521.0
  },
  {
    name: "에이루트",
    biznum: "1238177233",
    corpnum: 1341110095394.0,
    cash: 508.0
  },
  {
    name: "에이리츠",
    biznum: "1058750280",
    corpnum: 1101114464501.0,
    cash: 32.0
  },
  {
    name: "에이블씨엔씨",
    biznum: "1198134685",
    corpnum: 1101111846174.0,
    cash: 274.0
  },
  {
    name: "에이비엘바이오",
    biznum: "4528800266",
    corpnum: 1101115974020.0,
    cash: 219.0
  },
  {
    name: "에이비온",
    biznum: "2148807712",
    corpnum: 1101113660142.0,
    cash: 22.0
  },
  {
    name: "에이비프로바이오",
    biznum: "5038164797",
    corpnum: 1701110271528.0,
    cash: 256.0
  },
  {
    name: "에이스침대",
    biznum: "1298102666",
    corpnum: 1311110002772.0,
    cash: 254.0
  },
  {
    name: "에이스테크",
    biznum: "1318195829",
    corpnum: 1201110397241.0,
    cash: 143.0
  },
  {
    name: "에이스토리",
    biznum: "1078644564",
    corpnum: 1101112929276.0,
    cash: 376.0
  },
  {
    name: "에이에프더블류",
    biznum: "5048127679",
    corpnum: 1752110007968.0,
    cash: 44.0
  },
  {
    name: "에이엔피",
    biznum: "1308106245",
    corpnum: 1243110006456.0,
    cash: 44.0
  },
  {
    name: "에이치시티",
    biznum: "1268145399",
    corpnum: 1344110015635.0,
    cash: 183.0
  },
  {
    name: "에이치앤비디자인",
    biznum: "1068686334",
    corpnum: 1101114865569.0,
    cash: 82.0
  },
  {
    name: "에이치엘사이언스",
    biznum: "1238161032",
    corpnum: 1341110077704.0,
    cash: 42.0
  },
  {
    name: "에이치엠씨제4호스팩",
    biznum: "5328101728",
    corpnum: 1101117423413.0,
    cash: 16.0
  },
  {
    name: "에이치엠씨제5호스팩",
    biznum: "2248701760",
    corpnum: 1101117423554.0,
    cash: 20.0
  },
  {
    name: "에이치와이티씨",
    biznum: "1138602327",
    corpnum: 1101113364372.0,
    cash: 206.0
  },
  {
    name: "에이치케이",
    biznum: "1398105656",
    corpnum: 1201110059410.0,
    cash: 55.0
  },
  {
    name: "에이치피오",
    biznum: "1058770267",
    corpnum: 1101114838516.0,
    cash: 219.0
  },
  {
    name: "에이테크솔루션",
    biznum: "1358148139",
    corpnum: 1345110051645.0,
    cash: 7.0
  },
  {
    name: "에이텍",
    biznum: "2148156422",
    corpnum: 1101110954374.0,
    cash: 45.0
  },
  {
    name: "에이텍티앤",
    biznum: "6988800163",
    corpnum: 1311110416816.0,
    cash: 109.0
  },
  {
    name: "에이트원",
    biznum: "7218600251",
    corpnum: 1101115868041.0,
    cash: 78.0
  },
  {
    name: "에이티넘인베스트",
    biznum: "1248136410",
    corpnum: 1301110012050.0,
    cash: 434.0
  },
  {
    name: "에이티세미콘",
    biznum: "1268155539",
    corpnum: 1344110022747.0,
    cash: 119.0
  },
  {
    name: "에이팩트",
    biznum: "1268603851",
    corpnum: 1344110035203.0,
    cash: 101.0
  },
  {
    name: "에이프로",
    biznum: "1238158293",
    corpnum: 1351110053143.0,
    cash: 61.0
  },
  {
    name: "에이프로젠",
    biznum: "2198100146",
    corpnum: 1101110122731.0,
    cash: 546.0
  },
  {
    name: "에이프로젠 H&G",
    biznum: "1148182858",
    corpnum: 1101111511834.0,
    cash: 32.0
  },
  {
    name: "에이프로젠제약",
    biznum: "2188100518",
    corpnum: 1101110036396.0,
    cash: 142.0
  },
  {
    name: "에이프릴바이오",
    biznum: "2218142488",
    corpnum: 1401110050944.0,
    cash: 86.0
  },
  {
    name: "에이플러스에셋",
    biznum: "2148810653",
    corpnum: 1101113691973.0,
    cash: 463.0
  },
  {
    name: "에이피티씨",
    biznum: "1248193411",
    corpnum: 1348110068248.0,
    cash: 729.0
  },
  {
    name: "에치에프알",
    biznum: "2098700272",
    corpnum: 1101115855973.0,
    cash: 1019.0
  },
  {
    name: "에코마케팅",
    biznum: "2208660192",
    corpnum: 1101112743866.0,
    cash: 830.0
  },
  {
    name: "에코바이오",
    biznum: "2298128817",
    corpnum: 1101111448128.0,
    cash: 7.0
  },
  {
    name: "이엔드디",
    biznum: "1178151806",
    corpnum: 1101113085598.0,
    cash: 193.0
  },
  {
    name: "에코캡",
    biznum: "6058184196",
    corpnum: 1801110602755.0,
    cash: 113.0
  },
  {
    name: "에코프로",
    biznum: "2148626675",
    corpnum: 1101111598379.0,
    cash: 3088.0
  },
  {
    name: "에코프로비엠",
    biznum: "6388600376",
    corpnum: 1501110219184.0,
    cash: 2205.0
  },
  {
    name: "에코프로에이치엔",
    biznum: "2838702389",
    corpnum: 1501110307674.0,
    cash: 88.0
  },
  {
    name: "에코플라스틱",
    biznum: "5058102351",
    corpnum: 1712110001253.0,
    cash: 175.0
  },
  {
    name: "에프알텍",
    biznum: "2148669728",
    corpnum: 1101112090168.0,
    cash: 42.0
  },
  {
    name: "에프앤가이드",
    biznum: "2208191972",
    corpnum: 1101112017922.0,
    cash: 87.0
  },
  {
    name: "에프앤리퍼블릭",
    biznum: "1308132739",
    corpnum: 1243110033334.0,
    cash: 12.0
  },
  {
    name: "에프에스티",
    biznum: "1248123841",
    corpnum: 1101110546006.0,
    cash: 192.0
  },
  {
    name: "에프엔씨엔터",
    biznum: "2118790928",
    corpnum: 1101113580390.0,
    cash: 181.0
  },
  {
    name: "에프엔에스테크",
    biznum: "1358153423",
    corpnum: 1345110059459.0,
    cash: 199.0
  },
  {
    name: "엑사이엔씨",
    biznum: "1058147352",
    corpnum: 1101110774376.0,
    cash: 126.0
  },
  {
    name: "엑서지21",
    biznum: "1398109157",
    corpnum: 1101110527767.0,
    cash: 118.0
  },
  {
    name: "엑세스바이오",
    biznum: "0100888833",
    corpnum: 0.0,
    cash: 6361.0
  },
  {
    name: "엑셈",
    biznum: "1078827157",
    corpnum: 1101115496868.0,
    cash: 275.0
  },
  {
    name: "엑스큐어",
    biznum: "1348159986",
    corpnum: 1350110106150.0,
    cash: 28.0
  },
  {
    name: "엑시콘",
    biznum: "1298140428",
    corpnum: 1311110058402.0,
    cash: 118.0
  },
  {
    name: "엔바이오니아",
    biznum: "2148675308",
    corpnum: 1101112152067.0,
    cash: 67.0
  },
  {
    name: "엔브이에이치코리아",
    biznum: "6208101350",
    corpnum: 1812110003421.0,
    cash: 1158.0
  },
  {
    name: "엔비티",
    biznum: "2118883652",
    corpnum: 1101114962042.0,
    cash: 195.0
  },
  {
    name: "엔시스",
    biznum: "3128180677",
    corpnum: 1615110077268.0,
    cash: 190.0
  },
  {
    name: "엔시트론",
    biznum: "1138160337",
    corpnum: 1101111930787.0,
    cash: 30.0
  },
  {
    name: "엔씨소프트",
    biznum: "2208143000",
    corpnum: 1101111387748.0,
    cash: 2776.0
  },
  {
    name: "엔에스엔",
    biznum: "1198101879",
    corpnum: 1101110260218.0,
    cash: 13.0
  },
  {
    name: "엔에이치스팩19호",
    biznum: "4628102016",
    corpnum: 1101117804910.0,
    cash: 1.0
  },
  {
    name: "엔에이치스팩20호",
    biznum: "6258702055",
    corpnum: 1101117912309.0,
    cash: 6.0
  },
  {
    name: "엔에이치스팩22호",
    biznum: "4498602191",
    corpnum: 1101117968469.0,
    cash: 2.0
  },
  {
    name: "엔에이치스팩23호",
    biznum: "3268102326",
    corpnum: 1101118203195.0,
    cash: 1.0
  },
  {
    name: "엔에이치스팩26호",
    biznum: "2378102894",
    corpnum: 1101118367313.0,
    cash: 2.0
  },
  {
    name: "엔에이치스팩27호",
    biznum: "7048602609",
    corpnum: 1101118382428.0,
    cash: 2.0
  },
  {
    name: "엔에프씨",
    biznum: "1318637479",
    corpnum: 1201110608755.0,
    cash: 139.0
  },
  {
    name: "엔젠바이오",
    biznum: "4358800238",
    corpnum: 1101115877480.0,
    cash: 297.0
  },
  {
    name: "엔지스테크널러지",
    biznum: "2138636108",
    corpnum: 1101111574709.0,
    cash: 25.0
  },
  {
    name: "엔지켐생명과학",
    biznum: "3148127038",
    corpnum: 1601110084890.0,
    cash: 13.0
  },
  {
    name: "엔케이",
    biznum: "6038106888",
    corpnum: 1801110054641.0,
    cash: 217.0
  },
  {
    name: "엔케이맥스",
    biznum: "2068166254",
    corpnum: 1101112421157.0,
    cash: 36.0
  },
  {
    name: "엔켐",
    biznum: "3048125799",
    corpnum: 1512110026289.0,
    cash: 658.0
  },
  {
    name: "엔텔스",
    biznum: "2208193121",
    corpnum: 1101112029456.0,
    cash: 37.0
  },
  {
    name: "엔피",
    biznum: "7868700838",
    corpnum: 1101116652790.0,
    cash: 98.0
  },
  {
    name: "엔피디",
    biznum: "2118839044",
    corpnum: 1101114275958.0,
    cash: 721.0
  },
  {
    name: "엔피케이",
    biznum: "2118138347",
    corpnum: 1101110522311.0,
    cash: 92.0
  },
  {
    name: "엘디티",
    biznum: "3018131797",
    corpnum: 1501110031257.0,
    cash: 54.0
  },
  { name: "엘브이엠씨", biznum: "1048407756", corpnum: 0.0, cash: 168.0 },
  {
    name: "엘비루셈",
    biznum: "5138133971",
    corpnum: 1760110038073.0,
    cash: 937.0
  },
  {
    name: "엘비세미콘",
    biznum: "1298132684",
    corpnum: 1311110046291.0,
    cash: 1123.0
  },
  {
    name: "엘아이에스",
    biznum: "1238608352",
    corpnum: 1351110082861.0,
    cash: 1.0
  },
  {
    name: "엘앤씨바이오",
    biznum: "1298664008",
    corpnum: 1311110288992.0,
    cash: 66.0
  },
  {
    name: "엘앤에프",
    biznum: "5138119101",
    corpnum: 1760110022654.0,
    cash: 2314.0
  },
  {
    name: "엘앤케이바이오",
    biznum: "1058726820",
    corpnum: 1101114017227.0,
    cash: 80.0
  },
  {
    name: "엘엠에스",
    biznum: "2148629653",
    corpnum: 1101111651242.0,
    cash: 510.0
  },
  {
    name: "엘오티베큠",
    biznum: "3128156143",
    corpnum: 1615110049069.0,
    cash: 643.0
  },
  {
    name: "엘컴텍",
    biznum: "1248115996",
    corpnum: 1348110015546.0,
    cash: 112.0
  },
  {
    name: "엘티씨",
    biznum: "1388143899",
    corpnum: 1341110160494.0,
    cash: 304.0
  },
  {
    name: "엠게임",
    biznum: "1148193597",
    corpnum: 1101111838212.0,
    cash: 354.0
  },
  {
    name: "엠로",
    biznum: "2208181381",
    corpnum: 1101111906887.0,
    cash: 57.0
  },
  {
    name: "엠벤처투자",
    biznum: "1168115961",
    corpnum: 1101110512049.0,
    cash: 19.0
  },
  {
    name: "엠브레인",
    biznum: "1058198720",
    corpnum: 1101111670234.0,
    cash: 203.0
  },
  {
    name: "엠씨넥스",
    biznum: "1198177345",
    corpnum: 1101113136383.0,
    cash: 939.0
  },
  {
    name: "엠아이텍",
    biznum: "2038148392",
    corpnum: 1101110742406.0,
    cash: 71.0
  },
  {
    name: "엠에스씨",
    biznum: "6218109054",
    corpnum: 1845110000147.0,
    cash: 170.0
  },
  {
    name: "엠에스오토텍",
    biznum: "5058105299",
    corpnum: 1712110005114.0,
    cash: 720.0
  },
  {
    name: "엠에프엠코리아",
    biznum: "2818801488",
    corpnum: 1101117067138.0,
    cash: 22.0
  },
  {
    name: "엠케이전자",
    biznum: "1358106406",
    corpnum: 1345110004412.0,
    cash: 3028.0
  },
  {
    name: "엠투아이",
    biznum: "1238148572",
    corpnum: 1351110048798.0,
    cash: 40.0
  },
  {
    name: "엠투엔",
    biznum: "1358105130",
    corpnum: 1345110000600.0,
    cash: 41.0
  },
  {
    name: "엠플러스",
    biznum: "1238187371",
    corpnum: 1341110106357.0,
    cash: 250.0
  },
  {
    name: "엠피대산",
    biznum: "2148193179",
    corpnum: 1101111194739.0,
    cash: 27.0
  },
  {
    name: "엠피씨플러스",
    biznum: "1208133916",
    corpnum: 1101110793657.0,
    cash: 42.0
  },
  {
    name: "연우",
    biznum: "1378110376",
    corpnum: 1201110101890.0,
    cash: 390.0
  },
  {
    name: "영림원소프트랩",
    biznum: "2208123474",
    corpnum: 1101110944036.0,
    cash: 167.0
  },
  {
    name: "영보화학",
    biznum: "3148101120",
    corpnum: 1601110012742.0,
    cash: 418.0
  },
  {
    name: "영신금속",
    biznum: "1198101578",
    corpnum: 1101110123408.0,
    cash: 151.0
  },
  {
    name: "영우디에스피",
    biznum: "1298169992",
    corpnum: 1311110110921.0,
    cash: 119.0
  },
  {
    name: "영원무역",
    biznum: "1048621617",
    corpnum: 1101114129585.0,
    cash: 6647.0
  },
  {
    name: "영원무역홀딩스",
    biznum: "1108123629",
    corpnum: 1101110165830.0,
    cash: 8884.0
  },
  {
    name: "영진약품",
    biznum: "2188100352",
    corpnum: 1101110043127.0,
    cash: 2.0
  },
  {
    name: "영창케미칼",
    biznum: "5048141405",
    corpnum: 1701110202416.0,
    cash: 25.0
  },
  {
    name: "영풍",
    biznum: "2118111275",
    corpnum: 1101110003824.0,
    cash: 2194.0
  },
  {
    name: "영풍정밀",
    biznum: "2118115683",
    corpnum: 1101110342496.0,
    cash: 146.0
  },
  {
    name: "영풍제지",
    biznum: "1258100424",
    corpnum: 1347110000408.0,
    cash: 93.0
  },
  {
    name: "영화금속",
    biznum: "6098112296",
    corpnum: 1801110027078.0,
    cash: 86.0
  },
  {
    name: "영화테크",
    biznum: "3128143672",
    corpnum: 1615110038129.0,
    cash: 22.0
  },
  {
    name: "영흥",
    biznum: "6098102065",
    corpnum: 1942110000191.0,
    cash: 112.0
  },
  {
    name: "예림당",
    biznum: "1078150227",
    corpnum: 1101110611693.0,
    cash: 47.0
  },
  {
    name: "예선테크",
    biznum: "5698800415",
    corpnum: 1101116122470.0,
    cash: 55.0
  },
  {
    name: "예스24",
    biznum: "2298137000",
    corpnum: 1101111673288.0,
    cash: 60.0
  },
  {
    name: "예스코홀딩스",
    biznum: "2188106851",
    corpnum: 1101110290778.0,
    cash: 491.0
  },
  {
    name: "예스티",
    biznum: "1248170534",
    corpnum: 1348110048183.0,
    cash: 110.0
  },
  { name: "오가닉티코스메틱", biznum: "42651", corpnum: 0.0, cash: 1213.0 },
  {
    name: "오공",
    biznum: "1308101293",
    corpnum: 1243110001513.0,
    cash: 141.0
  },
  {
    name: "오디텍",
    biznum: "4038120067",
    corpnum: 2149110013103.0,
    cash: 288.0
  },
  {
    name: "오뚜기",
    biznum: "1388103238",
    corpnum: 1341110002258.0,
    cash: 3063.0
  },
  {
    name: "오로라",
    biznum: "2158102803",
    corpnum: 1101110407456.0,
    cash: 208.0
  },
  {
    name: "오로스테크놀로지",
    biznum: "1298166452",
    corpnum: 1311110104403.0,
    cash: 246.0
  },
  {
    name: "오르비텍",
    biznum: "1128127107",
    corpnum: 1101110753734.0,
    cash: 87.0
  },
  {
    name: "오리엔탈정공",
    biznum: "6038105967",
    corpnum: 1801110038447.0,
    cash: 113.0
  },
  {
    name: "오리엔트바이오",
    biznum: "2188101142",
    corpnum: 1101110030116.0,
    cash: 60.0
  },
  {
    name: "오리엔트정공",
    biznum: "6208101651",
    corpnum: 1812110008083.0,
    cash: 58.0
  },
  {
    name: "오리온",
    biznum: "7098100727",
    corpnum: 1101116417805.0,
    cash: 7774.0
  },
  {
    name: "오리온홀딩스",
    biznum: "1068104036",
    corpnum: 1101110004690.0,
    cash: 8066.0
  },
  {
    name: "오리콤",
    biznum: "2118134531",
    corpnum: 1101110176986.0,
    cash: 758.0
  },
  {
    name: "오비고",
    biznum: "2208659870",
    corpnum: 1101112739998.0,
    cash: 120.0
  },
  {
    name: "오상자이엘",
    biznum: "1228125877",
    corpnum: 1201110083303.0,
    cash: 41.0
  },
  {
    name: "오성첨단소재",
    biznum: "1228128215",
    corpnum: 1201110097940.0,
    cash: 650.0
  },
  {
    name: "오션브릿지",
    biznum: "1198653348",
    corpnum: 1101114809963.0,
    cash: 278.0
  },
  {
    name: "오스코텍",
    biznum: "3128132175",
    corpnum: 1615110028691.0,
    cash: 110.0
  },
  {
    name: "오스테오닉",
    biznum: "1138657540",
    corpnum: 1101114816570.0,
    cash: 137.0
  },
  {
    name: "오스템",
    biznum: "3128107773",
    corpnum: 1615110006796.0,
    cash: 148.0
  },
  {
    name: "오스템임플란트",
    biznum: "1128147103",
    corpnum: 1101111361669.0,
    cash: 3038.0
  },
  {
    name: "오이솔루션",
    biznum: "4098176875",
    corpnum: 2001110180384.0,
    cash: 266.0
  },
  {
    name: "오킨스전자",
    biznum: "1388116581",
    corpnum: 1341110059845.0,
    cash: 151.0
  },
  {
    name: "오텍",
    biznum: "2118639754",
    corpnum: 1101110795455.0,
    cash: 1277.0
  },
  {
    name: "오토앤",
    biznum: "1388172768",
    corpnum: 1352110032202.0,
    cash: 114.0
  },
  {
    name: "오파스넷",
    biznum: "2048188475",
    corpnum: 1101113104661.0,
    cash: 85.0
  },
  {
    name: "오픈베이스",
    biznum: "2208129255",
    corpnum: 1101110889836.0,
    cash: 164.0
  },
  {
    name: "오픈엣지테크놀로지",
    biznum: "4288101002",
    corpnum: 1311110501435.0,
    cash: 369.0
  },
  {
    name: "오하임아이엔티",
    biznum: "3518601217",
    corpnum: 1101116891801.0,
    cash: 76.0
  },
  {
    name: "올리패스",
    biznum: "1138609261",
    corpnum: 1101113562570.0,
    cash: 87.0
  },
  {
    name: "올릭스",
    biznum: "1248690516",
    corpnum: 1358110177957.0,
    cash: 160.0
  },
  {
    name: "옴니시스템",
    biznum: "1308151696",
    corpnum: 1211110054981.0,
    cash: 159.0
  },
  {
    name: "옵투스제약",
    biznum: "1078738943",
    corpnum: 1101114399906.0,
    cash: 160.0
  },
  {
    name: "옵트론텍",
    biznum: "3148126169",
    corpnum: 1601110082513.0,
    cash: 116.0
  },
  {
    name: "옵티시스",
    biznum: "1248167679",
    corpnum: 1301110056407.0,
    cash: 118.0
  },
  {
    name: "옵티팜",
    biznum: "1248175413",
    corpnum: 1301110062876.0,
    cash: 169.0
  },
  {
    name: "와이더플래닛",
    biznum: "1148682149",
    corpnum: 1101114391837.0,
    cash: 330.0
  },
  {
    name: "와이솔",
    biznum: "1358198089",
    corpnum: 1358110154111.0,
    cash: 768.0
  },
  {
    name: "와이아이케이",
    biznum: "2838600313",
    corpnum: 1101115869346.0,
    cash: 417.0
  },
  {
    name: "와이어블",
    biznum: "2148612657",
    corpnum: 1101111359630.0,
    cash: 11.0
  },
  {
    name: "와이엔텍",
    biznum: "4178105459",
    corpnum: 2062110001540.0,
    cash: 186.0
  },
  {
    name: "와이엠씨",
    biznum: "3128197106",
    corpnum: 1615110096292.0,
    cash: 234.0
  },
  {
    name: "와이엠텍",
    biznum: "3018176983",
    corpnum: 1501110081963.0,
    cash: 53.0
  },
  {
    name: "와이엠티",
    biznum: "1398139933",
    corpnum: 1201110185810.0,
    cash: 521.0
  },
  {
    name: "와이오엠",
    biznum: "1208186413",
    corpnum: 1101111631476.0,
    cash: 76.0
  },
  {
    name: "와이제이엠게임즈",
    biznum: "2048185390",
    corpnum: 1101113016999.0,
    cash: 212.0
  },
  {
    name: "와이즈버즈",
    biznum: "7038600909",
    corpnum: 1101116417590.0,
    cash: 42.0
  },
  {
    name: "와이지-원",
    biznum: "1228116515",
    corpnum: 1201110038639.0,
    cash: 509.0
  },
  {
    name: "와이지엔터테인먼트",
    biznum: "1058191810",
    corpnum: 1101111516397.0,
    cash: 600.0
  },
  {
    name: "와이투솔루션",
    biznum: "2208121836",
    corpnum: 1101110204498.0,
    cash: 167.0
  },
  {
    name: "와이팜",
    biznum: "5068159541",
    corpnum: 1717110071503.0,
    cash: 33.0
  },
  {
    name: "와토스코리아",
    biznum: "1368123922",
    corpnum: 1201110153916.0,
    cash: 42.0
  },
  {
    name: "용평리조트",
    biznum: "2268124374",
    corpnum: 1450110002801.0,
    cash: 372.0
  },
  {
    name: "우리금융지주",
    biznum: "3988701116",
    corpnum: 1101116981206.0,
    cash: 92769.0
  },
  {
    name: "우리기술",
    biznum: "1128138619",
    corpnum: 1101111118656.0,
    cash: 123.0
  },
  {
    name: "우리기술투자",
    biznum: "3148117637",
    corpnum: 1601110058887.0,
    cash: 197.0
  },
  {
    name: "우리넷",
    biznum: "1248168611",
    corpnum: 1301110057124.0,
    cash: 185.0
  },
  {
    name: "우리로",
    biznum: "4108148141",
    corpnum: 2001110093313.0,
    cash: 76.0
  },
  {
    name: "우리바이오",
    biznum: "1348155919",
    corpnum: 1350110103198.0,
    cash: 1015.0
  },
  {
    name: "우리산업",
    biznum: "4168602172",
    corpnum: 1345110257251.0,
    cash: 23.0
  },
  {
    name: "우리산업홀딩스",
    biznum: "1358104164",
    corpnum: 1341110026480.0,
    cash: 46.0
  },
  {
    name: "우리손에프앤지",
    biznum: "4048112594",
    corpnum: 2112110005321.0,
    cash: 255.0
  },
  {
    name: "우리엔터프라이즈",
    biznum: "1198107096",
    corpnum: 1101110061765.0,
    cash: 1037.0
  },
  {
    name: "우리이앤엘",
    biznum: "1348648994",
    corpnum: 1314110212929.0,
    cash: 406.0
  },
  {
    name: "우리종금",
    biznum: "4088100426",
    corpnum: 2001110000954.0,
    cash: 3098.0
  },
  {
    name: "우림피티에스",
    biznum: "6098140851",
    corpnum: 1942110039934.0,
    cash: 86.0
  },
  {
    name: "우성",
    biznum: "3058120439",
    corpnum: 1601110001167.0,
    cash: 501.0
  },
  {
    name: "우수AMS",
    biznum: "6088121958",
    corpnum: 1943110003995.0,
    cash: 342.0
  },
  {
    name: "우신시스템",
    biznum: "1078136263",
    corpnum: 1101110366719.0,
    cash: 363.0
  },
  {
    name: "우양",
    biznum: "3098101598",
    corpnum: 1644110000820.0,
    cash: 2.0
  },
  {
    name: "우원개발",
    biznum: "1168170168",
    corpnum: 1101111600794.0,
    cash: 273.0
  },
  {
    name: "우정바이오",
    biznum: "8108600018",
    corpnum: 1101115649938.0,
    cash: 32.0
  },
  {
    name: "우주일렉트로",
    biznum: "1248165313",
    corpnum: 1348110043711.0,
    cash: 847.0
  },
  {
    name: "우진",
    biznum: "1358105713",
    corpnum: 1345110001814.0,
    cash: 144.0
  },
  {
    name: "우진비앤지",
    biznum: "1248114283",
    corpnum: 1243110014409.0,
    cash: 118.0
  },
  {
    name: "우진아이엔에스",
    biznum: "1148133003",
    corpnum: 1101110175467.0,
    cash: 104.0
  },
  {
    name: "우진플라임",
    biznum: "1318139905",
    corpnum: 1101110822993.0,
    cash: 133.0
  },
  {
    name: "웅진",
    biznum: "2088106344",
    corpnum: 1101110346745.0,
    cash: 513.0
  },
  {
    name: "웅진씽크빅",
    biznum: "1418109131",
    corpnum: 2849110065613.0,
    cash: 280.0
  },
  {
    name: "원림",
    biznum: "1198101618",
    corpnum: 1101110095152.0,
    cash: 68.0
  },
  {
    name: "원바이오젠",
    biznum: "2058601156",
    corpnum: 1101116860442.0,
    cash: 47.0
  },
  {
    name: "원방테크",
    biznum: "3038111045",
    corpnum: 1101110645353.0,
    cash: 191.0
  },
  {
    name: "원익",
    biznum: "5138101732",
    corpnum: 1753110001158.0,
    cash: 37.0
  },
  {
    name: "원익IPS",
    biznum: "6958100374",
    corpnum: 1313110163174.0,
    cash: 1301.0
  },
  {
    name: "원익QnC",
    biznum: "5138131648",
    corpnum: 1760110035615.0,
    cash: 847.0
  },
  {
    name: "원익머트리얼즈",
    biznum: "3178102448",
    corpnum: 1501110101662.0,
    cash: 212.0
  },
  {
    name: "원익큐브",
    biznum: "2208105078",
    corpnum: 1101110425432.0,
    cash: 291.0
  },
  {
    name: "원익피앤이",
    biznum: "1248167704",
    corpnum: 1348110045535.0,
    cash: 508.0
  },
  {
    name: "원익홀딩스",
    biznum: "1338127249",
    corpnum: 1243110033235.0,
    cash: 899.0
  },
  {
    name: "원일특강",
    biznum: "1198101622",
    corpnum: 1101110220288.0,
    cash: 65.0
  },
  {
    name: "원준",
    biznum: "1248673730",
    corpnum: 1348110166589.0,
    cash: 212.0
  },
  {
    name: "원텍",
    biznum: "4968801552",
    corpnum: 1101117232799.0,
    cash: 70.0
  },
  {
    name: "원티드랩",
    biznum: "2998600021",
    corpnum: 1311110405166.0,
    cash: 140.0
  },
  {
    name: "원풍",
    biznum: "1098104258",
    corpnum: 1101110138382.0,
    cash: 138.0
  },
  {
    name: "원풍물산",
    biznum: "1378101974",
    corpnum: 1201110001769.0,
    cash: 0.0
  },
  {
    name: "월덱스",
    biznum: "5138117137",
    corpnum: 1760110020723.0,
    cash: 481.0
  },
  {
    name: "웨이버스",
    biznum: "5358101635",
    corpnum: 1101117224647.0,
    cash: 131.0
  },
  {
    name: "웨이브일렉트로",
    biznum: "1298130691",
    corpnum: 1311110043271.0,
    cash: 310.0
  },
  {
    name: "웰바이오텍",
    biznum: "1198104065",
    corpnum: 1101110179659.0,
    cash: 104.0
  },
  {
    name: "웰크론",
    biznum: "1208163730",
    corpnum: 1101110860216.0,
    cash: 226.0
  },
  {
    name: "웰크론한텍",
    biznum: "1268123094",
    corpnum: 1101111118276.0,
    cash: 27.0
  },
  {
    name: "웹스",
    biznum: "6068170604",
    corpnum: 1801110378835.0,
    cash: 67.0
  },
  {
    name: "웹젠",
    biznum: "2148657130",
    corpnum: 1101111955694.0,
    cash: 614.0
  },
  {
    name: "웹케시",
    biznum: "2148635102",
    corpnum: 1101111731135.0,
    cash: 77.0
  },
  {
    name: "위니아",
    biznum: "3128138164",
    corpnum: 1648110015300.0,
    cash: 670.0
  },
  {
    name: "위니아에이드",
    biznum: "4108707666",
    corpnum: 2001110418983.0,
    cash: 611.0
  },
  {
    name: "위닉스",
    biznum: "1338122434",
    corpnum: 1301110026260.0,
    cash: 219.0
  },
  {
    name: "위더스제약",
    biznum: "2148763871",
    corpnum: 1101113069534.0,
    cash: 65.0
  },
  {
    name: "위드텍",
    biznum: "3148163107",
    corpnum: 1601110166341.0,
    cash: 185.0
  },
  {
    name: "위메이드",
    biznum: "2098124419",
    corpnum: 1101111873755.0,
    cash: 1976.0
  },
  {
    name: "위메이드맥스",
    biznum: "2148615315",
    corpnum: 1101111401051.0,
    cash: 535.0
  },
  {
    name: "위메이드플레이",
    biznum: "1078732726",
    corpnum: 1101114291540.0,
    cash: 464.0
  },
  {
    name: "위세아이텍",
    biznum: "2148121976",
    corpnum: 1101110723969.0,
    cash: 3.0
  },
  {
    name: "위즈코프",
    biznum: "1168136215",
    corpnum: 1101111136145.0,
    cash: 250.0
  },
  {
    name: "위지윅스튜디오",
    biznum: "2898700337",
    corpnum: 1101116033833.0,
    cash: 435.0
  },
  {
    name: "위지트",
    biznum: "1058185147",
    corpnum: 1101111373755.0,
    cash: 125.0
  },
  {
    name: "윈스",
    biznum: "1298655101",
    corpnum: 1311110272002.0,
    cash: 321.0
  },
  {
    name: "윈텍",
    biznum: "5598601510",
    corpnum: 1101117032545.0,
    cash: 63.0
  },
  {
    name: "윈팩",
    biznum: "1268161690",
    corpnum: 1344110020543.0,
    cash: 33.0
  },
  {
    name: "윈하이텍",
    biznum: "3038163280",
    corpnum: 1545110049654.0,
    cash: 95.0
  },
  {
    name: "윌링스",
    biznum: "1348604069",
    corpnum: 1314110144073.0,
    cash: 89.0
  },
  {
    name: "윌비스",
    biznum: "1208114772",
    corpnum: 1101110172447.0,
    cash: 50.0
  },
  { name: "윙입푸드", biznum: "46295", corpnum: 0.0, cash: 1158.0 },
  {
    name: "유나이티드",
    biznum: "3078105244",
    corpnum: 1342110002769.0,
    cash: 294.0
  },
  {
    name: "유니드",
    biznum: "1048124846",
    corpnum: 1101110275069.0,
    cash: 2032.0
  },
  {
    name: "유니셈",
    biznum: "1248142101",
    corpnum: 1348110024878.0,
    cash: 631.0
  },
  {
    name: "유니슨",
    biznum: "1208130898",
    corpnum: 1101110382020.0,
    cash: 25.0
  },
  {
    name: "유니온",
    biznum: "1048124962",
    corpnum: 1101110200579.0,
    cash: 158.0
  },
  {
    name: "유니온머티리얼",
    biznum: "5148137645",
    corpnum: 1701110176489.0,
    cash: 119.0
  },
  {
    name: "유니온커뮤니티",
    biznum: "2118691935",
    corpnum: 1101111892903.0,
    cash: 43.0
  },
  {
    name: "유니켐",
    biznum: "1348103920",
    corpnum: 1301110011807.0,
    cash: 43.0
  },
  {
    name: "유니퀘스트",
    biznum: "1208156132",
    corpnum: 1101111216757.0,
    cash: 595.0
  },
  {
    name: "유니크",
    biznum: "6038103047",
    corpnum: 1801110024496.0,
    cash: 72.0
  },
  {
    name: "유니테스트",
    biznum: "1298133266",
    corpnum: 1311110047356.0,
    cash: 269.0
  },
  {
    name: "유니테크노",
    biznum: "6038142360",
    corpnum: 1801110327981.0,
    cash: 208.0
  },
  {
    name: "유니트론텍",
    biznum: "2298100105",
    corpnum: 1101111284449.0,
    cash: 66.0
  },
  {
    name: "유라테크",
    biznum: "3078102043",
    corpnum: 1101110529820.0,
    cash: 228.0
  },
  {
    name: "유바이오로직스",
    biznum: "2118840314",
    corpnum: 1101114294122.0,
    cash: 98.0
  },
  {
    name: "유비벨록스",
    biznum: "1198141677",
    corpnum: 1101112062167.0,
    cash: 949.0
  },
  {
    name: "유비온",
    biznum: "1198134860",
    corpnum: 1101111848675.0,
    cash: 7.0
  },
  {
    name: "유비케어",
    biznum: "2018155688",
    corpnum: 1101111105364.0,
    cash: 375.0
  },
  {
    name: "유비쿼스",
    biznum: "6558800491",
    corpnum: 1311110475341.0,
    cash: 350.0
  },
  {
    name: "유비쿼스홀딩스",
    biznum: "1068191981",
    corpnum: 1101112023185.0,
    cash: 722.0
  },
  {
    name: "유성기업",
    biznum: "1308104489",
    corpnum: 1243110000755.0,
    cash: 150.0
  },
  {
    name: "유성티엔에스",
    biznum: "2208119698",
    corpnum: 1101110217607.0,
    cash: 203.0
  },
  {
    name: "유수홀딩스",
    biznum: "1168135822",
    corpnum: 1101110003262.0,
    cash: 1853.0
  },
  {
    name: "유신",
    biznum: "2208118141",
    corpnum: 1101110061666.0,
    cash: 28.0
  },
  {
    name: "유아이디",
    biznum: "3078102854",
    corpnum: 1647110001608.0,
    cash: 65.0
  },
  {
    name: "유아이엘",
    biznum: "1118118357",
    corpnum: 1101110320955.0,
    cash: 280.0
  },
  {
    name: "유안타제10호스팩",
    biznum: "3668602881",
    corpnum: 1101118325329.0,
    cash: 18.0
  },
  {
    name: "유안타제8호스팩",
    biznum: "5578601853",
    corpnum: 1101117638393.0,
    cash: 7.0
  },
  {
    name: "유안타제9호스팩",
    biznum: "8758702418",
    corpnum: 1101118289856.0,
    cash: 18.0
  },
  {
    name: "유안타증권",
    biznum: "1168134293",
    corpnum: 1101110042492.0,
    cash: 8550.0
  },
  {
    name: "유에스티",
    biznum: "2748800730",
    corpnum: 1101116298148.0,
    cash: 92.0
  },
  {
    name: "유엔젤",
    biznum: "1298129383",
    corpnum: 1311110041192.0,
    cash: 38.0
  },
  {
    name: "유유제약",
    biznum: "1238101790",
    corpnum: 1341110002307.0,
    cash: 361.0
  },
  {
    name: "유일로보틱스",
    biznum: "1218613562",
    corpnum: 1201110592130.0,
    cash: 67.0
  },
  {
    name: "유일에너테크",
    biznum: "1248730932",
    corpnum: 1358110211565.0,
    cash: 181.0
  },
  {
    name: "유진기업",
    biznum: "1308122624",
    corpnum: 1101110376148.0,
    cash: 1210.0
  },
  {
    name: "유진로봇",
    biznum: "2118642832",
    corpnum: 1101110991467.0,
    cash: 29.0
  },
  {
    name: "유진스팩6호",
    biznum: "6748701873",
    corpnum: 1101117690517.0,
    cash: 0.0
  },
  {
    name: "유진스팩7호",
    biznum: "6818602024",
    corpnum: 1101117885499.0,
    cash: 0.0
  },
  {
    name: "유진스팩8호",
    biznum: "4938702235",
    corpnum: 1101118112669.0,
    cash: 23.0
  },
  {
    name: "유진테크",
    biznum: "1238153245",
    corpnum: 1351110051329.0,
    cash: 386.0
  },
  {
    name: "유진증권",
    biznum: "1168134177",
    corpnum: 1101110007826.0,
    cash: 7191.0
  },
  {
    name: "유테크",
    biznum: "1238606766",
    corpnum: 1351110081475.0,
    cash: 8.0
  },
  {
    name: "유티아이",
    biznum: "1238621786",
    corpnum: 1341110189717.0,
    cash: 113.0
  },
  {
    name: "유틸렉스",
    biznum: "8638600031",
    corpnum: 2850110287959.0,
    cash: 453.0
  },
  {
    name: "유한양행",
    biznum: "1188100601",
    corpnum: 1101110014409.0,
    cash: 2137.0
  },
  {
    name: "유화증권",
    biznum: "1168100100",
    corpnum: 1101110042484.0,
    cash: 208.0
  },
  {
    name: "육일씨엔에쓰",
    biznum: "1098607323",
    corpnum: 1101113637810.0,
    cash: 36.0
  },
  {
    name: "율촌화학",
    biznum: "1188101288",
    corpnum: 1101110145147.0,
    cash: 321.0
  },
  {
    name: "율호",
    biznum: "1138146922",
    corpnum: 1101111518418.0,
    cash: 263.0
  },
  {
    name: "이건산업",
    biznum: "1318106200",
    corpnum: 1201110001959.0,
    cash: 106.0
  },
  {
    name: "이건홀딩스",
    biznum: "1348101053",
    corpnum: 1301110028935.0,
    cash: 339.0
  },
  {
    name: "이구산업",
    biznum: "1348102580",
    corpnum: 1301110009498.0,
    cash: 18.0
  },
  {
    name: "이글루",
    biznum: "1078172385",
    corpnum: 1101111800659.0,
    cash: 105.0
  },
  {
    name: "이글벳",
    biznum: "2188115398",
    corpnum: 1101110361008.0,
    cash: 11.0
  },
  {
    name: "이노뎁",
    biznum: "1138618789",
    corpnum: 1101113820738.0,
    cash: 31.0
  },
  {
    name: "이노룰스",
    biznum: "2158693537",
    corpnum: 1101113598616.0,
    cash: 190.0
  },
  {
    name: "이노메트리",
    biznum: "1428114049",
    corpnum: 1345110127040.0,
    cash: 48.0
  },
  {
    name: "이노션",
    biznum: "2208709310",
    corpnum: 1101113229097.0,
    cash: 5756.0
  },
  {
    name: "이노시스",
    biznum: "2178113679",
    corpnum: 1101111453648.0,
    cash: 359.0
  },
  {
    name: "이노와이어리스",
    biznum: "1208612537",
    corpnum: 1101112078073.0,
    cash: 599.0
  },
  {
    name: "이노인스트루먼트",
    biznum: "4478700025",
    corpnum: 1101115658640.0,
    cash: 251.0
  },
  {
    name: "이노진",
    biznum: "1068638550",
    corpnum: 1101113301944.0,
    cash: 7.0
  },
  {
    name: "이노테라피",
    biznum: "1078734817",
    corpnum: 1101114327915.0,
    cash: 4.0
  },
  {
    name: "이녹스",
    biznum: "1258140130",
    corpnum: 1346110018221.0,
    cash: 305.0
  },
  {
    name: "이녹스첨단소재",
    biznum: "5018600680",
    corpnum: 1648110105010.0,
    cash: 1393.0
  },
  {
    name: "이니텍",
    biznum: "3148119071",
    corpnum: 1601110063240.0,
    cash: 213.0
  },
  {
    name: "이라이콤",
    biznum: "1248132073",
    corpnum: 1301110004620.0,
    cash: 852.0
  },
  {
    name: "이랜시스",
    biznum: "1758600569",
    corpnum: 1101116314449.0,
    cash: 49.0
  },
  {
    name: "이랜텍",
    biznum: "1248139417",
    corpnum: 1345110002375.0,
    cash: 686.0
  },
  {
    name: "이루다",
    biznum: "1238607799",
    corpnum: 1351110082291.0,
    cash: 86.0
  },
  {
    name: "이루온",
    biznum: "2148623042",
    corpnum: 1101111538664.0,
    cash: 83.0
  },
  {
    name: "이리츠코크렙",
    biznum: "1078667081",
    corpnum: 1101113275959.0,
    cash: 119.0
  },
  {
    name: "이마트",
    biznum: "2068650913",
    corpnum: 1101114594952.0,
    cash: 6349.0
  },
  {
    name: "이미지스",
    biznum: "1358169380",
    corpnum: 1358110102649.0,
    cash: 46.0
  },
  {
    name: "이베스트투자증권",
    biznum: "1078174175",
    corpnum: 1101111828362.0,
    cash: 447.0
  },
  {
    name: "이브이첨단소재",
    biznum: "5038163589",
    corpnum: 1701110262452.0,
    cash: 92.0
  },
  {
    name: "이삭엔지니어링",
    biznum: "1138610021",
    corpnum: 1101113569865.0,
    cash: 49.0
  },
  {
    name: "이상네트웍스",
    biznum: "1078178114",
    corpnum: 1101111892010.0,
    cash: 260.0
  },
  {
    name: "이수앱지스",
    biznum: "1108150558",
    corpnum: 1101112203951.0,
    cash: 254.0
  },
  {
    name: "이수페타시스",
    biznum: "5148116131",
    corpnum: 1101110186638.0,
    cash: 629.0
  },
  {
    name: "이수화학",
    biznum: "1148154648",
    corpnum: 1101110008600.0,
    cash: 1255.0
  },
  {
    name: "이스타코",
    biznum: "1338122225",
    corpnum: 1243110006042.0,
    cash: 0.0
  },
  {
    name: "이스트소프트",
    biznum: "2298103214",
    corpnum: 1101110974851.0,
    cash: 459.0
  },
  {
    name: "이스트아시아홀딩스",
    biznum: "5091880500007098",
    corpnum: 0.0,
    cash: 1478.0
  },
  {
    name: "이씨에스",
    biznum: "2208168054",
    corpnum: 1101111784457.0,
    cash: 33.0
  },
  {
    name: "이아이디",
    biznum: "5138127033",
    corpnum: 1752110014707.0,
    cash: 226.0
  },
  {
    name: "이엔에프테크놀로지",
    biznum: "2118697360",
    corpnum: 1101111957195.0,
    cash: 668.0
  },
  {
    name: "이엔코퍼레이션",
    biznum: "1258126555",
    corpnum: 1313110026091.0,
    cash: 124.0
  },
  {
    name: "이엔플러스",
    biznum: "1348608314",
    corpnum: 1355110144291.0,
    cash: 38.0
  },
  {
    name: "이엘피",
    biznum: "2148640186",
    corpnum: 1101111790834.0,
    cash: 130.0
  },
  {
    name: "이엠넷",
    biznum: "2148656053",
    corpnum: 1101111946601.0,
    cash: 174.0
  },
  {
    name: "이엠앤아이",
    biznum: "1348146818",
    corpnum: 1350110096608.0,
    cash: 63.0
  },
  {
    name: "이엠코리아",
    biznum: "6088151660",
    corpnum: 1943110012186.0,
    cash: 45.0
  },
  {
    name: "이엠텍",
    biznum: "6218142053",
    corpnum: 1801110348945.0,
    cash: 632.0
  },
  {
    name: "이연제약",
    biznum: "1068100516",
    corpnum: 1101110048143.0,
    cash: 131.0
  },
  {
    name: "이오테크닉스",
    biznum: "1388111553",
    corpnum: 1101110998629.0,
    cash: 1268.0
  },
  {
    name: "이오플로우",
    biznum: "1058762879",
    corpnum: 1101114694679.0,
    cash: 639.0
  },
  {
    name: "이원컴포텍",
    biznum: "3088105946",
    corpnum: 1613110004067.0,
    cash: 255.0
  },
  {
    name: "이월드",
    biznum: "5038168487",
    corpnum: 1701110290867.0,
    cash: 102.0
  },
  {
    name: "이즈미디어",
    biznum: "1248602685",
    corpnum: 1358110087437.0,
    cash: 50.0
  },
  {
    name: "이지바이오",
    biznum: "8238801642",
    corpnum: 1101117474424.0,
    cash: 323.0
  },
  {
    name: "이지스레지던스리츠",
    biznum: "3118601790",
    corpnum: 1101117375375.0,
    cash: 12.0
  },
  {
    name: "이지케어텍",
    biznum: "1018167322",
    corpnum: 1101112165838.0,
    cash: 91.0
  },
  {
    name: "이지트로닉스",
    biznum: "1428117139",
    corpnum: 1345110132792.0,
    cash: 118.0
  },
  {
    name: "이지홀딩스",
    biznum: "2208115028",
    corpnum: 1101110565163.0,
    cash: 3946.0
  },
  {
    name: "이큐셀",
    biznum: "1378161860",
    corpnum: 1244110067216.0,
    cash: 130.0
  },
  {
    name: "이크레더블",
    biznum: "1058628840",
    corpnum: 1101112303305.0,
    cash: 417.0
  },
  {
    name: "이트론",
    biznum: "1058604644",
    corpnum: 1101111803976.0,
    cash: 93.0
  },
  {
    name: "이퓨쳐",
    biznum: "2148647520",
    corpnum: 1101111860083.0,
    cash: 110.0
  },
  {
    name: "이화공영",
    biznum: "1058111500",
    corpnum: 1101110033839.0,
    cash: 11.0
  },
  {
    name: "이화산업",
    biznum: "1078113542",
    corpnum: 1101110018138.0,
    cash: 126.0
  },
  {
    name: "이화전기",
    biznum: "2158104548",
    corpnum: 1101110054520.0,
    cash: 124.0
  },
  {
    name: "인디에프",
    biznum: "1208117274",
    corpnum: 1101110279996.0,
    cash: 71.0
  },
  {
    name: "인바디",
    biznum: "2208113603",
    corpnum: 1101111271834.0,
    cash: 197.0
  },
  {
    name: "인바이오",
    biznum: "3048107641",
    corpnum: 1512110004847.0,
    cash: 151.0
  },
  {
    name: "인바이오젠",
    biznum: "1258173285",
    corpnum: 1313110080427.0,
    cash: 83.0
  },
  {
    name: "인베니아",
    biznum: "1248180691",
    corpnum: 1348110056871.0,
    cash: 20.0
  },
  {
    name: "인산가",
    biznum: "1398144493",
    corpnum: 1101116471554.0,
    cash: 60.0
  },
  {
    name: "인선이엔티",
    biznum: "1288131815",
    corpnum: 1159110017303.0,
    cash: 816.0
  },
  {
    name: "인성정보",
    biznum: "2158158985",
    corpnum: 1101110834378.0,
    cash: 64.0
  },
  {
    name: "인스코비",
    biznum: "1198103654",
    corpnum: 1101110018592.0,
    cash: 162.0
  },
  {
    name: "인지디스플레",
    biznum: "1348113942",
    corpnum: 1350110036315.0,
    cash: 95.0
  },
  {
    name: "인지소프트",
    biznum: "2208178872",
    corpnum: 1101111887491.0,
    cash: 53.0
  },
  {
    name: "인지컨트롤스",
    biznum: "1338122303",
    corpnum: 1301110006296.0,
    cash: 314.0
  },
  {
    name: "인천도시가스",
    biznum: "1378102459",
    corpnum: 1201110014027.0,
    cash: 1285.0
  },
  {
    name: "인카금융서비스",
    biznum: "2148816754",
    corpnum: 1101113773094.0,
    cash: 47.0
  },
  {
    name: "인콘",
    biznum: "1138163616",
    corpnum: 1101112039934.0,
    cash: 707.0
  },
  {
    name: "인크로스",
    biznum: "2148813475",
    corpnum: 1101113734955.0,
    cash: 312.0
  },
  {
    name: "인탑스",
    biznum: "1238106645",
    corpnum: 1341110013552.0,
    cash: 1335.0
  },
  {
    name: "인터로조",
    biznum: "1258134657",
    corpnum: 1313110033856.0,
    cash: 18.0
  },
  {
    name: "인터엠",
    biznum: "1278158989",
    corpnum: 1101110357403.0,
    cash: 9.0
  },
  {
    name: "인터지스",
    biznum: "6018100739",
    corpnum: 1801110001973.0,
    cash: 222.0
  },
  {
    name: "인터플렉스",
    biznum: "1348121874",
    corpnum: 1350110042924.0,
    cash: 300.0
  },
  {
    name: "인텍플러스",
    biznum: "1058174771",
    corpnum: 1101111204637.0,
    cash: 160.0
  },
  {
    name: "인텔리안테크",
    biznum: "2118745307",
    corpnum: 1101112948086.0,
    cash: 269.0
  },
  {
    name: "인트로메딕",
    biznum: "2208691337",
    corpnum: 1101113078907.0,
    cash: 86.0
  },
  {
    name: "인트론바이오",
    biznum: "2158174710",
    corpnum: 1101111636004.0,
    cash: 368.0
  },
  {
    name: "인팩",
    biznum: "1348102412",
    corpnum: 1301110008052.0,
    cash: 98.0
  },
  {
    name: "인포마크",
    biznum: "1198154094",
    corpnum: 1101112431669.0,
    cash: 141.0
  },
  {
    name: "인포바인",
    biznum: "1068186362",
    corpnum: 1101111877103.0,
    cash: 344.0
  },
  {
    name: "인포뱅크",
    biznum: "1148166066",
    corpnum: 1101111166803.0,
    cash: 96.0
  },
  {
    name: "인피니트헬스케어",
    biznum: "1208646702",
    corpnum: 1101112683179.0,
    cash: 100.0
  },
  {
    name: "인화정공",
    biznum: "6098136060",
    corpnum: 1942110032988.0,
    cash: 196.0
  },
  {
    name: "일동제약",
    biznum: "8038800431",
    corpnum: 1101116139277.0,
    cash: 638.0
  },
  {
    name: "일동홀딩스",
    biznum: "2298114690",
    corpnum: 1101110012776.0,
    cash: 874.0
  },
  {
    name: "일성건설",
    biznum: "1058129640",
    corpnum: 1101110234776.0,
    cash: 118.0
  },
  {
    name: "일성신약",
    biznum: "1068100710",
    corpnum: 1101110039019.0,
    cash: 3480.0
  },
  {
    name: "일승",
    biznum: "7928701467",
    corpnum: 1101117196523.0,
    cash: 53.0
  },
  {
    name: "일신바이오",
    biznum: "1278164875",
    corpnum: 1101111079155.0,
    cash: 53.0
  },
  {
    name: "일신방직",
    biznum: "1168140780",
    corpnum: 1101110041717.0,
    cash: 157.0
  },
  {
    name: "일신석재",
    biznum: "2148194289",
    corpnum: 1101110153273.0,
    cash: 57.0
  },
  {
    name: "일야",
    biznum: "1398101169",
    corpnum: 1101110226327.0,
    cash: 11.0
  },
  {
    name: "일양약품",
    biznum: "2098100872",
    corpnum: 1101110124802.0,
    cash: 555.0
  },
  {
    name: "일정실업",
    biznum: "1028119333",
    corpnum: 1101110141369.0,
    cash: 14.0
  },
  {
    name: "일지테크",
    biznum: "5048106257",
    corpnum: 1701110029802.0,
    cash: 120.0
  },
  {
    name: "일진다이아",
    biznum: "3038140972",
    corpnum: 1545110029242.0,
    cash: 362.0
  },
  {
    name: "일진디스플",
    biznum: "3038110352",
    corpnum: 1545110006076.0,
    cash: 188.0
  },
  {
    name: "일진머티리얼즈",
    biznum: "4038103729",
    corpnum: 2149110003625.0,
    cash: 1633.0
  },
  {
    name: "일진전기",
    biznum: "1248667922",
    corpnum: 1348110159279.0,
    cash: 677.0
  },
  {
    name: "일진파워",
    biznum: "1308142372",
    corpnum: 1101110673966.0,
    cash: 423.0
  },
  {
    name: "일진하이솔루스",
    biznum: "4028198956",
    corpnum: 2101110086548.0,
    cash: 78.0
  },
  {
    name: "일진홀딩스",
    biznum: "1248134732",
    corpnum: 1201110011990.0,
    cash: 1101.0
  },
  {
    name: "잇츠한불",
    biznum: "2208723971",
    corpnum: 1101113394048.0,
    cash: 257.0
  },
  { name: "잉글우드랩", biznum: "0101038103", corpnum: 0.0, cash: 92.0 },
  {
    name: "잉크테크",
    biznum: "1238129764",
    corpnum: 1101110866785.0,
    cash: 15.0
  },
  {
    name: "자비스",
    biznum: "5108700492",
    corpnum: 1101116178564.0,
    cash: 40.0
  },
  {
    name: "자연과환경",
    biznum: "2158178735",
    corpnum: 1101111727853.0,
    cash: 52.0
  },
  {
    name: "자이글",
    biznum: "1288635873",
    corpnum: 2850110153481.0,
    cash: 43.0
  },
  {
    name: "자이언트스텝",
    biznum: "2118813952",
    corpnum: 1101113909839.0,
    cash: 62.0
  },
  {
    name: "자이에스앤디",
    biznum: "1208603362",
    corpnum: 1101111934557.0,
    cash: 2447.0
  },
  {
    name: "자화전자",
    biznum: "3018105474",
    corpnum: 1501110005955.0,
    cash: 528.0
  },
  {
    name: "장원테크",
    biznum: "5138117030",
    corpnum: 1760110020559.0,
    cash: 30.0
  },
  {
    name: "재영솔루텍",
    biznum: "1398101306",
    corpnum: 1201110060450.0,
    cash: 56.0
  },
  {
    name: "전방",
    biznum: "1028117373",
    corpnum: 1101110005664.0,
    cash: 11.0
  },
  {
    name: "전진바이오팜",
    biznum: "5058139862",
    corpnum: 1701110273433.0,
    cash: 34.0
  },
  {
    name: "정다운",
    biznum: "1078831874",
    corpnum: 1101115542497.0,
    cash: 197.0
  },
  {
    name: "정상제이엘에스",
    biznum: "1308142974",
    corpnum: 1243110039762.0,
    cash: 33.0
  },
  {
    name: "정원엔시스",
    biznum: "2118108071",
    corpnum: 1101110105688.0,
    cash: 14.0
  },
  {
    name: "제너셈",
    biznum: "1218140894",
    corpnum: 1246110236750.0,
    cash: 82.0
  },
  {
    name: "제넥신",
    biznum: "5068131989",
    corpnum: 1717110036705.0,
    cash: 251.0
  },
  {
    name: "제넨바이오",
    biznum: "5148133009",
    corpnum: 1701110150847.0,
    cash: 54.0
  },
  {
    name: "제노레이",
    biznum: "2158606482",
    corpnum: 1101112215261.0,
    cash: 181.0
  },
  {
    name: "제노코",
    biznum: "1298178695",
    corpnum: 1311110127512.0,
    cash: 219.0
  },
  {
    name: "제노포커스",
    biznum: "3148132185",
    corpnum: 1601110095821.0,
    cash: 52.0
  },
  {
    name: "제놀루션",
    biznum: "2158682253",
    corpnum: 1101113403972.0,
    cash: 117.0
  },
  {
    name: "제닉",
    biznum: "1358149079",
    corpnum: 1345110052677.0,
    cash: 41.0
  },
  {
    name: "제로투세븐",
    biznum: "2208176684",
    corpnum: 1101111871072.0,
    cash: 189.0
  },
  {
    name: "제룡산업",
    biznum: "2068658555",
    corpnum: 1101114722917.0,
    cash: 131.0
  },
  {
    name: "제룡전기",
    biznum: "2198109069",
    corpnum: 1101110513633.0,
    cash: 30.0
  },
  {
    name: "제우스",
    biznum: "2298105323",
    corpnum: 1101110600430.0,
    cash: 757.0
  },
  {
    name: "제이브이엠",
    biznum: "5038131016",
    corpnum: 1701110111352.0,
    cash: 44.0
  },
  {
    name: "제이스코홀딩스",
    biznum: "1348115426",
    corpnum: 1101110045347.0,
    cash: 20.0
  },
  {
    name: "제이스텍",
    biznum: "1308148610",
    corpnum: 1243110046030.0,
    cash: 273.0
  },
  {
    name: "제이시스메디칼",
    biznum: "4248700852",
    corpnum: 1101116585826.0,
    cash: 336.0
  },
  {
    name: "제이씨케미칼",
    biznum: "1358185115",
    corpnum: 1358110124726.0,
    cash: 259.0
  },
  {
    name: "제이씨현시스템",
    biznum: "1108133772",
    corpnum: 1101110775853.0,
    cash: 170.0
  },
  {
    name: "제이알글로벌리츠",
    biznum: "2078158077",
    corpnum: 1101117263728.0,
    cash: 796.0
  },
  {
    name: "제이앤티씨",
    biznum: "1198122651",
    corpnum: 1101111334583.0,
    cash: 831.0
  },
  {
    name: "제이에스코퍼레이션",
    biznum: "2198103482",
    corpnum: 1101110554992.0,
    cash: 469.0
  },
  {
    name: "제이에스티나",
    biznum: "2158103705",
    corpnum: 1101110569074.0,
    cash: 40.0
  },
  {
    name: "제이엔케이히터",
    biznum: "1168169870",
    corpnum: 1101111591034.0,
    cash: 830.0
  },
  {
    name: "제이엘케이",
    biznum: "2648129857",
    corpnum: 1101115340065.0,
    cash: 50.0
  },
  {
    name: "제이엠아이",
    biznum: "1248146204",
    corpnum: 1101110922214.0,
    cash: 123.0
  },
  {
    name: "제이엠티",
    biznum: "2298132359",
    corpnum: 1101111551749.0,
    cash: 91.0
  },
  {
    name: "제이웨이",
    biznum: "1138129812",
    corpnum: 1101111025439.0,
    cash: 5.0
  },
  {
    name: "제이준코스메틱",
    biznum: "1388103204",
    corpnum: 1341110001672.0,
    cash: 119.0
  },
  {
    name: "제이티",
    biznum: "1308156518",
    corpnum: 1211110061910.0,
    cash: 391.0
  },
  {
    name: "제일기획",
    biznum: "2028145960",
    corpnum: 1101110139017.0,
    cash: 5734.0
  },
  {
    name: "제일바이오",
    biznum: "1348101956",
    corpnum: 1350110030490.0,
    cash: 98.0
  },
  {
    name: "제일약품",
    biznum: "6288800669",
    corpnum: 1101116420361.0,
    cash: 169.0
  },
  {
    name: "제일연마",
    biznum: "5068107010",
    corpnum: 1801110021806.0,
    cash: 122.0
  },
  {
    name: "제일전기공업",
    biznum: "6038103203",
    corpnum: 1801110037887.0,
    cash: 52.0
  },
  {
    name: "제일테크노스",
    biznum: "5068100676",
    corpnum: 1746110001179.0,
    cash: 108.0
  },
  {
    name: "제일파마홀딩스",
    biznum: "1148101234",
    corpnum: 1101110026652.0,
    cash: 206.0
  },
  {
    name: "제주맥주",
    biznum: "6168627415",
    corpnum: 2201110123463.0,
    cash: 195.0
  },
  {
    name: "제주반도체",
    biznum: "1298133683",
    corpnum: 1311110047918.0,
    cash: 189.0
  },
  {
    name: "제주은행",
    biznum: "6168100615",
    corpnum: 2201110000819.0,
    cash: 586.0
  },
  {
    name: "제주항공",
    biznum: "6168150527",
    corpnum: 2201110050575.0,
    cash: 1606.0
  },
  {
    name: "제테마",
    biznum: "1358603665",
    corpnum: 1358110168568.0,
    cash: 358.0
  },
  {
    name: "젠큐릭스",
    biznum: "2068657589",
    corpnum: 1101114690768.0,
    cash: 88.0
  },
  {
    name: "젬백스",
    biznum: "3148121219",
    corpnum: 1601110069636.0,
    cash: 91.0
  },
  {
    name: "젬백스링크",
    biznum: "1198137606",
    corpnum: 1101111931230.0,
    cash: 756.0
  },
  {
    name: "조광ILI",
    biznum: "6038121370",
    corpnum: 1801110157643.0,
    cash: 38.0
  },
  {
    name: "조광페인트",
    biznum: "6068100205",
    corpnum: 1801110007088.0,
    cash: 69.0
  },
  {
    name: "조광피혁",
    biznum: "3158107132",
    corpnum: 1501110001036.0,
    cash: 176.0
  },
  {
    name: "조비",
    biznum: "2148108783",
    corpnum: 1101110086599.0,
    cash: 133.0
  },
  {
    name: "조선내화",
    biznum: "4168107056",
    corpnum: 2011110000440.0,
    cash: 1245.0
  },
  {
    name: "조선선재",
    biznum: "5068170186",
    corpnum: 1717111186312.0,
    cash: 514.0
  },
  {
    name: "조아제약",
    biznum: "6088124071",
    corpnum: 1943110004498.0,
    cash: 44.0
  },
  {
    name: "조이시티",
    biznum: "1168154101",
    corpnum: 1101111041633.0,
    cash: 131.0
  },
  {
    name: "조일알미늄",
    biznum: "5028107788",
    corpnum: 1701110021543.0,
    cash: 268.0
  },
  {
    name: "조흥",
    biznum: "1138106497",
    corpnum: 1101110019334.0,
    cash: 157.0
  },
  {
    name: "종근당",
    biznum: "1108608069",
    corpnum: 1101115260669.0,
    cash: 1064.0
  },
  {
    name: "종근당바이오",
    biznum: "1108153652",
    corpnum: 1101112373308.0,
    cash: 6.0
  },
  {
    name: "종근당홀딩스",
    biznum: "1138106667",
    corpnum: 1101110028955.0,
    cash: 530.0
  },
  {
    name: "좋은사람들",
    biznum: "1058158242",
    corpnum: 1101110939326.0,
    cash: 56.0
  },
  {
    name: "주성엔지니어링",
    biznum: "1248129001",
    corpnum: 1301110033281.0,
    cash: 1071.0
  },
  {
    name: "주연테크",
    biznum: "1168123200",
    corpnum: 1101110574164.0,
    cash: 139.0
  },
  {
    name: "줌인터넷",
    biznum: "5988700226",
    corpnum: 1101115970961.0,
    cash: 198.0
  },
  {
    name: "중앙디앤엠",
    biznum: "1058199490",
    corpnum: 1101111686728.0,
    cash: 17.0
  },
  {
    name: "중앙백신",
    biznum: "3058119849",
    corpnum: 1601110042533.0,
    cash: 66.0
  },
  {
    name: "중앙에너비스",
    biznum: "1068108726",
    corpnum: 1101110003428.0,
    cash: 0.0
  },
  {
    name: "지나인제약",
    biznum: "1298130916",
    corpnum: 1311110043776.0,
    cash: 28.0
  },
  {
    name: "지노믹트리",
    biznum: "3148136987",
    corpnum: 1601110105498.0,
    cash: 479.0
  },
  {
    name: "지놈앤컴퍼니",
    biznum: "6278700257",
    corpnum: 1341110422240.0,
    cash: 981.0
  },
  {
    name: "지누스",
    biznum: "1248128792",
    corpnum: 1347110002553.0,
    cash: 1507.0
  },
  {
    name: "지니너스",
    biznum: "2038801251",
    corpnum: 1101116728781.0,
    cash: 254.0
  },
  {
    name: "지니뮤직",
    biznum: "3148103453",
    corpnum: 1601110024284.0,
    cash: 315.0
  },
  {
    name: "지니언스",
    biznum: "1298180148",
    corpnum: 1311110131159.0,
    cash: 36.0
  },
  {
    name: "지니틱스",
    biznum: "8468101097",
    corpnum: 1101116793007.0,
    cash: 23.0
  },
  {
    name: "지더블유바이텍",
    biznum: "5028128269",
    corpnum: 1701110074493.0,
    cash: 25.0
  },
  {
    name: "지란지교시큐리티",
    biznum: "1078831670",
    corpnum: 1101115527019.0,
    cash: 171.0
  },

  {
    name: "지씨셀",
    biznum: "1428137741",
    corpnum: 1345110172532.0,
    cash: 453.0
  },
  {
    name: "지아이텍",
    biznum: "3128639116",
    corpnum: 1648110065785.0,
    cash: 57.0
  },
  {
    name: "지앤비에스엔지니어링",
    biznum: "1248631287",
    corpnum: 1348110105579.0,
    cash: 89.0
  },
  {
    name: "지어소프트",
    biznum: "2118645334",
    corpnum: 1101111574874.0,
    cash: 1678.0
  },
  {
    name: "지에스이",
    biznum: "1058137529",
    corpnum: 1101110624969.0,
    cash: 173.0
  },
  {
    name: "지엔씨에너지",
    biznum: "1078142450",
    corpnum: 1101110952055.0,
    cash: 352.0
  },
  {
    name: "지엔원에너지",
    biznum: "5808600757",
    corpnum: 1101116383543.0,
    cash: 136.0
  },
  {
    name: "지엔코",
    biznum: "2208145177",
    corpnum: 1101111421257.0,
    cash: 46.0
  },
  {
    name: "지엘팜텍",
    biznum: "1078825483",
    corpnum: 1101115478626.0,
    cash: 51.0
  },
  {
    name: "지엠비코리아",
    biznum: "6098102857",
    corpnum: 1942110000399.0,
    cash: 280.0
  },
  {
    name: "지역난방공사",
    biznum: "1298202760",
    corpnum: 1112710005962.0,
    cash: 246.0
  },
  {
    name: "지오엘리먼트",
    biznum: "1258157795",
    corpnum: 1313110059571.0,
    cash: 37.0
  },
  {
    name: "지투알",
    biznum: "1058129368",
    corpnum: 1101110375398.0,
    cash: 495.0
  },
  {
    name: "지투파워",
    biznum: "1238625235",
    corpnum: 1351110102065.0,
    cash: 9.0
  },
  {
    name: "지티지웰니스",
    biznum: "2298136321",
    corpnum: 1101111651101.0,
    cash: 15.0
  },
  {
    name: "진도",
    biznum: "1198187523",
    corpnum: 1101113411024.0,
    cash: 156.0
  },
  {
    name: "진로발효",
    biznum: "1348104841",
    corpnum: 1301110009365.0,
    cash: 110.0
  },
  {
    name: "진매트릭스",
    biznum: "1018165547",
    corpnum: 1101112124389.0,
    cash: 52.0
  },
  {
    name: "진바이오텍",
    biznum: "3078114821",
    corpnum: 1612110007815.0,
    cash: 100.0
  },
  {
    name: "진성티이씨",
    biznum: "1248130717",
    corpnum: 1348110002155.0,
    cash: 263.0
  },
  {
    name: "진시스템",
    biznum: "3128615545",
    corpnum: 1615110116305.0,
    cash: 197.0
  },
  {
    name: "진양산업",
    biznum: "1028134256",
    corpnum: 1801110043610.0,
    cash: 89.0
  },
  {
    name: "진양제약",
    biznum: "2148110673",
    corpnum: 1101110233629.0,
    cash: 68.0
  },
  {
    name: "진양폴리우레탄",
    biznum: "1258118884",
    corpnum: 1345110000387.0,
    cash: 9.0
  },
  {
    name: "진양홀딩스",
    biznum: "6058186253",
    corpnum: 1801110618091.0,
    cash: 451.0
  },
  {
    name: "진양화학",
    biznum: "1108149202",
    corpnum: 1101112141672.0,
    cash: 63.0
  },
  {
    name: "진에어",
    biznum: "1218189086",
    corpnum: 1201110454976.0,
    cash: 528.0
  },
  {
    name: "진원생명과학",
    biznum: "1208114898",
    corpnum: 1101110191562.0,
    cash: 185.0
  },
  {
    name: "진코스텍",
    biznum: "1348668063",
    corpnum: 1314110243742.0,
    cash: 23.0
  },
  {
    name: "진흥기업",
    biznum: "1068132769",
    corpnum: 1101110006349.0,
    cash: 11.0
  },
  {
    name: "차바이오텍",
    biznum: "1358158340",
    corpnum: 1345110065662.0,
    cash: 900.0
  },
  {
    name: "차백신연구소",
    biznum: "2098125738",
    corpnum: 1101111992670.0,
    cash: 40.0
  },
  {
    name: "참엔지니어링",
    biznum: "5068100661",
    corpnum: 1746110001096.0,
    cash: 127.0
  },
  {
    name: "참좋은여행",
    biznum: "2118793420",
    corpnum: 1101113624007.0,
    cash: 186.0
  },
  {
    name: "창해에탄올",
    biznum: "4168100072",
    corpnum: 2013110000107.0,
    cash: 43.0
  },
  {
    name: "천보",
    biznum: "3038149444",
    corpnum: 1511110031157.0,
    cash: 382.0
  },
  {
    name: "천일고속",
    biznum: "6048100854",
    corpnum: 1801110006915.0,
    cash: 83.0
  },
  {
    name: "청담글로벌",
    biznum: "6788101062",
    corpnum: 1201110905317.0,
    cash: 27.0
  },
  {
    name: "체리부로",
    biznum: "3018112903",
    corpnum: 1543110001997.0,
    cash: 216.0
  },
  {
    name: "체시스",
    biznum: "5158102135",
    corpnum: 1748110004244.0,
    cash: 5.0
  },
  {
    name: "초록뱀미디어",
    biznum: "2208152270",
    corpnum: 1101111549786.0,
    cash: 352.0
  },
  {
    name: "초록뱀컴퍼니",
    biznum: "3148112966",
    corpnum: 1601110048870.0,
    cash: 394.0
  },
  {
    name: "초록뱀헬스케어",
    biznum: "5048184573",
    corpnum: 1701110391532.0,
    cash: 80.0
  },
  {
    name: "칩스앤미디어",
    biznum: "2148730098",
    corpnum: 1101112732413.0,
    cash: 24.0
  },
  {
    name: "카나리아바이오",
    biznum: "3128102894",
    corpnum: 1615110001572.0,
    cash: 141.0
  },
  {
    name: "카스",
    biznum: "1278108271",
    corpnum: 1115110005269.0,
    cash: 140.0
  },
  {
    name: "카이노스메드",
    biznum: "7848700768",
    corpnum: 1101116558469.0,
    cash: 202.0
  },
  {
    name: "카카오",
    biznum: "1208147521",
    corpnum: 1101111129497.0,
    cash: 46003.0
  },
  {
    name: "카카오게임즈",
    biznum: "1448118454",
    corpnum: 1311110351682.0,
    cash: 6381.0
  },
  {
    name: "카카오뱅크",
    biznum: "3758800197",
    corpnum: 1311110435767.0,
    cash: 79.0
  },
  {
    name: "카카오페이",
    biznum: "5278800686",
    corpnum: 1311110478337.0,
    cash: 14529.0
  },
  {
    name: "카페24",
    biznum: "1188120586",
    corpnum: 1101111698145.0,
    cash: 299.0
  },
  {
    name: "카프로",
    biznum: "1018124186",
    corpnum: 1101110111825.0,
    cash: 47.0
  },
  {
    name: "캐리소프트",
    biznum: "1138691776",
    corpnum: 1101115551646.0,
    cash: 13.0
  },
  {
    name: "캐스텍코리아",
    biznum: "6068120370",
    corpnum: 1801110273986.0,
    cash: 59.0
  },
  {
    name: "캠시스",
    biznum: "1398103094",
    corpnum: 1201110081951.0,
    cash: 630.0
  },
  {
    name: "커넥트웨이브",
    biznum: "1178140065",
    corpnum: 1101112551996.0,
    cash: 124.0
  },
  {
    name: "커머스마이너",
    biznum: "1138645520",
    corpnum: 1101114519281.0,
    cash: 60.0
  },
  {
    name: "컨버즈",
    biznum: "1258179538",
    corpnum: 1313110088017.0,
    cash: 96.0
  },
  { name: "컬러레이", biznum: "1979772", corpnum: 0.0, cash: 1711.0 },
  {
    name: "컴투스",
    biznum: "1088116843",
    corpnum: 1101111571250.0,
    cash: 1799.0
  },
  {
    name: "컴투스홀딩스",
    biznum: "1198134778",
    corpnum: 1101111848914.0,
    cash: 307.0
  },
  {
    name: "컴퍼니케이",
    biznum: "2118788121",
    corpnum: 1101113544263.0,
    cash: 9.0
  },
  {
    name: "케스피온",
    biznum: "1098154326",
    corpnum: 1101111551608.0,
    cash: 78.0
  },
  {
    name: "케어랩스",
    biznum: "2208836643",
    corpnum: 1201110607278.0,
    cash: 260.0
  },
  {
    name: "케어젠",
    biznum: "2148688555",
    corpnum: 1101112310946.0,
    cash: 346.0
  },
  {
    name: "케이디켐",
    biznum: "3028103955",
    corpnum: 1341110013255.0,
    cash: 66.0
  },
  {
    name: "케이비아이동국실업",
    biznum: "1068112972",
    corpnum: 1101110028939.0,
    cash: 299.0
  },
  {
    name: "케이비제21호스팩",
    biznum: "7818702409",
    corpnum: 1101118228987.0,
    cash: 23.0
  },
  {
    name: "케이비제22호스팩",
    biznum: "1578102773",
    corpnum: 1101118336946.0,
    cash: 20.0
  },
  {
    name: "케이비제23호스팩",
    biznum: "2468102559",
    corpnum: 1101118375720.0,
    cash: 3.0
  },
  {
    name: "케이사인",
    biznum: "1148713936",
    corpnum: 1101115300647.0,
    cash: 168.0
  },
  {
    name: "케이씨",
    biznum: "1208105593",
    corpnum: 1101110703210.0,
    cash: 1395.0
  },
  {
    name: "케이씨에스",
    biznum: "5138128411",
    corpnum: 1760110032132.0,
    cash: 24.0
  },
  {
    name: "케이씨텍",
    biznum: "6128153314",
    corpnum: 1346110087565.0,
    cash: 207.0
  },
  {
    name: "케이씨티",
    biznum: "1248603350",
    corpnum: 1358110088245.0,
    cash: 1.0
  },
  {
    name: "케이씨피드",
    biznum: "5058100799",
    corpnum: 1747110000187.0,
    cash: 100.0
  },
  {
    name: "케이아이엔엑스",
    biznum: "1018159273",
    corpnum: 1101111999593.0,
    cash: 123.0
  },
  {
    name: "케이에스피",
    biznum: "6068127539",
    corpnum: 1801110328550.0,
    cash: 95.0
  },
  {
    name: "케이엔더블유",
    biznum: "1298139315",
    corpnum: 1311110056480.0,
    cash: 197.0
  },
  {
    name: "케이엔제이",
    biznum: "1248632229",
    corpnum: 1348110106600.0,
    cash: 95.0
  },
  {
    name: "케이엘넷",
    biznum: "2208102504",
    corpnum: 1101111023889.0,
    cash: 54.0
  },
  {
    name: "케이엠",
    biznum: "2258101359",
    corpnum: 1450110000540.0,
    cash: 176.0
  },
  {
    name: "케이엠더블유",
    biznum: "1248125403",
    corpnum: 1348110020579.0,
    cash: 1096.0
  },
  {
    name: "케이엠제약",
    biznum: "4208600149",
    corpnum: 1101115779909.0,
    cash: 6.0
  },
  {
    name: "케이옥션",
    biznum: "1018617910",
    corpnum: 1101113306861.0,
    cash: 384.0
  },
  {
    name: "케이카",
    biznum: "7878700729",
    corpnum: 1101116583490.0,
    cash: 122.0
  },
  {
    name: "케이탑리츠",
    biznum: "1078743354",
    corpnum: 1101114465004.0,
    cash: 31.0
  },
  {
    name: "케이티알파",
    biznum: "2118179649",
    corpnum: 1101110822026.0,
    cash: 841.0
  },
  {
    name: "케이프",
    biznum: "6218122339",
    corpnum: 1801110051770.0,
    cash: 1035.0
  },
  {
    name: "케이피에스",
    biznum: "2098126571",
    corpnum: 1101112063743.0,
    cash: 279.0
  },
  {
    name: "케이피에프",
    biznum: "1348102988",
    corpnum: 1301110010841.0,
    cash: 245.0
  },
  {
    name: "케이피엠테크",
    biznum: "1348107682",
    corpnum: 1301110010932.0,
    cash: 186.0
  },
  {
    name: "케이피티유",
    biznum: "1348127602",
    corpnum: 1350110047883.0,
    cash: 48.0
  },
  {
    name: "케일럼",
    biznum: "1098617840",
    corpnum: 1101114097518.0,
    cash: 28.0
  },
  {
    name: "켄코아에어로스페이스",
    biznum: "6138169798",
    corpnum: 1954110024732.0,
    cash: 92.0
  },
  {
    name: "켐트로닉스",
    biznum: "1298121998",
    corpnum: 1311110028116.0,
    cash: 666.0
  },
  {
    name: "켐트로스",
    biznum: "8388800039",
    corpnum: 1101115723120.0,
    cash: 53.0
  },
  {
    name: "코나아이",
    biznum: "1098153365",
    corpnum: 1101111521700.0,
    cash: 1534.0
  },
  {
    name: "코난테크놀로지",
    biznum: "2298137316",
    corpnum: 1101111682932.0,
    cash: 66.0
  },
  {
    name: "코닉오토메이션",
    biznum: "3998702253",
    corpnum: 1101117914785.0,
    cash: 76.0
  },
  {
    name: "코다코",
    biznum: "1398131377",
    corpnum: 1201110147422.0,
    cash: 3.0
  },
  {
    name: "코데즈컴바인",
    biznum: "1148166713",
    corpnum: 1101111187031.0,
    cash: 292.0
  },
  {
    name: "코드네이처",
    biznum: "1218167699",
    corpnum: 1201110350124.0,
    cash: 16.0
  },
  {
    name: "코디",
    biznum: "1248160808",
    corpnum: 1301110050847.0,
    cash: 45.0
  },
  {
    name: "코렌텍",
    biznum: "1078184746",
    corpnum: 1101111983653.0,
    cash: 112.0
  },
  {
    name: "코리아나",
    biznum: "3128107545",
    corpnum: 1101110597166.0,
    cash: 137.0
  },
  {
    name: "코리아써키트",
    biznum: "1348107528",
    corpnum: 1301110026749.0,
    cash: 1241.0
  },
  {
    name: "코리아에셋투자증권",
    biznum: "1208197564",
    corpnum: 1101111844970.0,
    cash: 248.0
  },
  {
    name: "코리아에프티",
    biznum: "1078732411",
    corpnum: 1101114290039.0,
    cash: 256.0
  },
  {
    name: "코리안리",
    biznum: "1028116957",
    corpnum: 1101110226533.0,
    cash: 5952.0
  },
  {
    name: "코맥스",
    biznum: "1298101726",
    corpnum: 1311110001964.0,
    cash: 48.0
  },
  {
    name: "코메론",
    biznum: "6038105797",
    corpnum: 1801110047399.0,
    cash: 342.0
  },
  {
    name: "코미코",
    biznum: "1258614826",
    corpnum: 1346110062393.0,
    cash: 898.0
  },
  {
    name: "코미팜",
    biznum: "1338123355",
    corpnum: 1101110134372.0,
    cash: 93.0
  },
  {
    name: "코세스",
    biznum: "1308136434",
    corpnum: 1243110041444.0,
    cash: 60.0
  },
  {
    name: "코센",
    biznum: "2068134034",
    corpnum: 1101110162191.0,
    cash: 5.0
  },
  {
    name: "코스나인",
    biznum: "5138122697",
    corpnum: 1760110025872.0,
    cash: 52.0
  },
  {
    name: "코스맥스",
    biznum: "1438119635",
    corpnum: 1348110294273.0,
    cash: 1142.0
  },
  {
    name: "코스맥스비티아이",
    biznum: "1248122463",
    corpnum: 1348110018641.0,
    cash: 990.0
  },
  {
    name: "코스맥스엔비티",
    biznum: "2148701803",
    corpnum: 1101112407470.0,
    cash: 615.0
  },
  {
    name: "코스메카코리아",
    biznum: "3038124119",
    corpnum: 1545110016091.0,
    cash: 207.0
  },
  {
    name: "코스모신소재",
    biznum: "1378101917",
    corpnum: 1201110018251.0,
    cash: 442.0
  },
  {
    name: "코스모화학",
    biznum: "1058133052",
    corpnum: 1101110152738.0,
    cash: 468.0
  },
  {
    name: "코스온",
    biznum: "1068184011",
    corpnum: 1101111823289.0,
    cash: 12.0
  },
  {
    name: "코아스",
    biznum: "1178109929",
    corpnum: 1101110881642.0,
    cash: 3.0
  },
  {
    name: "코아스템켐온",
    biznum: "3018173201",
    corpnum: 1501110077665.0,
    cash: 101.0
  },
  {
    name: "코아시아",
    biznum: "2148155613",
    corpnum: 1101110944622.0,
    cash: 552.0
  },
  {
    name: "코아시아옵틱스",
    biznum: "1428172016",
    corpnum: 1345110233665.0,
    cash: 169.0
  },
  {
    name: "코엔텍",
    biznum: "6108116574",
    corpnum: 1812110024485.0,
    cash: 600.0
  },
  {
    name: "코오롱",
    biznum: "2028144660",
    corpnum: 1101110030528.0,
    cash: 2683.0
  },
  {
    name: "코오롱글로벌",
    biznum: "1208150012",
    corpnum: 1101110036502.0,
    cash: 1792.0
  },
  {
    name: "코오롱생명과학",
    biznum: "1048152769",
    corpnum: 1101111948277.0,
    cash: 51.0
  },
  {
    name: "코오롱인더",
    biznum: "1388156604",
    corpnum: 1353110013606.0,
    cash: 2497.0
  },
  {
    name: "코오롱티슈진",
    biznum: "20174063267",
    corpnum: 0.0,
    cash: 561.0
  },
  {
    name: "코오롱플라스틱",
    biznum: "5108105710",
    corpnum: 1713110003504.0,
    cash: 207.0
  },
  {
    name: "코원플레이",
    biznum: "2138627332",
    corpnum: 1101111319858.0,
    cash: 2.0
  },
  {
    name: "코웨이",
    biznum: "3078106054",
    corpnum: 1101110626501.0,
    cash: 1515.0
  },
  {
    name: "코웰패션",
    biznum: "1248122987",
    corpnum: 1101110166127.0,
    cash: 678.0
  },
  {
    name: "코위버",
    biznum: "1058608183",
    corpnum: 1101111883225.0,
    cash: 45.0
  },
  {
    name: "코윈테크",
    biznum: "1238146782",
    corpnum: 1351110047419.0,
    cash: 404.0
  },
  {
    name: "코이즈",
    biznum: "1278197643",
    corpnum: 2801110073830.0,
    cash: 54.0
  },
  {
    name: "코콤",
    biznum: "1308105192",
    corpnum: 1243110005359.0,
    cash: 47.0
  },
  {
    name: "코텍",
    biznum: "1308144628",
    corpnum: 1101110522494.0,
    cash: 343.0
  },
  {
    name: "코퍼스코리아",
    biznum: "2068801212",
    corpnum: 1101117062716.0,
    cash: 111.0
  },
  {
    name: "콘텐트리중앙",
    biznum: "2168110039",
    corpnum: 1101110545751.0,
    cash: 3874.0
  },
  {
    name: "콜마비앤에이치",
    biznum: "1048654817",
    corpnum: 1101115399517.0,
    cash: 1241.0
  },
  {
    name: "콤텍시스템",
    biznum: "2298112824",
    corpnum: 1101110414126.0,
    cash: 424.0
  },
  {
    name: "쿠콘",
    biznum: "1078685702",
    corpnum: 1101113579947.0,
    cash: 784.0
  },
  {
    name: "쿠쿠홀딩스",
    biznum: "6218102895",
    corpnum: 1845110000634.0,
    cash: 1151.0
  },
  {
    name: "쿠쿠홈시스",
    biznum: "5908700993",
    corpnum: 1355110319406.0,
    cash: 752.0
  },
  {
    name: "퀀타매트릭스",
    biznum: "1198635864",
    corpnum: 1101114481274.0,
    cash: 24.0
  },
  {
    name: "큐라클",
    biznum: "7408100539",
    corpnum: 1101116058485.0,
    cash: 64.0
  },
  {
    name: "큐렉소",
    biznum: "1068138424",
    corpnum: 1101110839071.0,
    cash: 14.0
  },
  {
    name: "큐로",
    biznum: "6108102779",
    corpnum: 1812110002275.0,
    cash: 84.0
  },
  {
    name: "큐로컴",
    biznum: "2158162801",
    corpnum: 1101111407314.0,
    cash: 7.0
  },
  {
    name: "큐로홀딩스",
    biznum: "1298119361",
    corpnum: 1101110555479.0,
    cash: 53.0
  },
  {
    name: "큐리언트",
    biznum: "2098147197",
    corpnum: 1101113926875.0,
    cash: 60.0
  },
  {
    name: "큐브엔터",
    biznum: "1078799106",
    corpnum: 1101115192036.0,
    cash: 105.0
  },
  {
    name: "큐에스아이",
    biznum: "3128143181",
    corpnum: 1615110037709.0,
    cash: 64.0
  },
  {
    name: "큐캐피탈",
    biznum: "2208108089",
    corpnum: 1101110339691.0,
    cash: 10.0
  },
  {
    name: "크라운제과",
    biznum: "4118700569",
    corpnum: 1101116332590.0,
    cash: 430.0
  },
  {
    name: "크라운해태홀딩스",
    biznum: "2168100486",
    corpnum: 1101110093552.0,
    cash: 544.0
  },
  {
    name: "크래프톤",
    biznum: "2208745316",
    corpnum: 1101113645772.0,
    cash: 12722.0
  },
  {
    name: "크레버스",
    biznum: "2118716710",
    corpnum: 1101112541575.0,
    cash: 278.0
  },
  {
    name: "크로바하이텍",
    biznum: "3038107177",
    corpnum: 1101110171168.0,
    cash: 83.0
  },
  {
    name: "크루셜텍",
    biznum: "3128148041",
    corpnum: 1648110019948.0,
    cash: 11.0
  },
  {
    name: "크리스에프앤씨",
    biznum: "2078152490",
    corpnum: 1101111572612.0,
    cash: 475.0
  },
  {
    name: "크리스탈신소재",
    biznum: "BS-266537",
    corpnum: 0.0,
    cash: 1409.0
  },
  {
    name: "크리스탈지노믹스",
    biznum: "3148134562",
    corpnum: 1601110101016.0,
    cash: 332.0
  },
  {
    name: "크린앤사이언스",
    biznum: "4048100477",
    corpnum: 2112110000553.0,
    cash: 47.0
  },
  {
    name: "클라우드에어",
    biznum: "1248122158",
    corpnum: 1301110023349.0,
    cash: 109.0
  },
  {
    name: "클래시스",
    biznum: "1078839288",
    corpnum: 1101115618355.0,
    cash: 667.0
  },
  {
    name: "클리노믹스",
    biznum: "1358616587",
    corpnum: 1358110198797.0,
    cash: 72.0
  },
  {
    name: "클리오",
    biznum: "2118622189",
    corpnum: 1101111421273.0,
    cash: 273.0
  },
  {
    name: "키네마스터",
    biznum: "1208641987",
    corpnum: 1101112605793.0,
    cash: 139.0
  },
  {
    name: "키다리스튜디오",
    biznum: "1068149784",
    corpnum: 1101110539382.0,
    cash: 677.0
  },
  {
    name: "키움제6호스팩",
    biznum: "1948602326",
    corpnum: 1101118113691.0,
    cash: 13.0
  },
  {
    name: "키움제7호스팩",
    biznum: "6328102750",
    corpnum: 1101118306949.0,
    cash: 13.0
  },
  {
    name: "키움증권",
    biznum: "1078176756",
    corpnum: 1101111867948.0,
    cash: 14570.0
  },
  {
    name: "키이스트",
    biznum: "1208166644",
    corpnum: 1101111327869.0,
    cash: 231.0
  },
  {
    name: "타이거일렉",
    biznum: "1218138874",
    corpnum: 1201110228610.0,
    cash: 60.0
  },
  {
    name: "탑엔지니어링",
    biznum: "5138107376",
    corpnum: 1760110007937.0,
    cash: 411.0
  },
  {
    name: "탑코미디어",
    biznum: "2208742930",
    corpnum: 1101113615121.0,
    cash: 162.0
  },
  {
    name: "태경비케이",
    biznum: "1098127101",
    corpnum: 1101110301111.0,
    cash: 150.0
  },
  {
    name: "태경산업",
    biznum: "1248130662",
    corpnum: 1348110002080.0,
    cash: 478.0
  },
  {
    name: "태경케미컬",
    biznum: "2208110227",
    corpnum: 1101110040793.0,
    cash: 86.0
  },
  {
    name: "태광",
    biznum: "6038107233",
    corpnum: 1801110045559.0,
    cash: 575.0
  },
  {
    name: "태광산업",
    biznum: "2038143626",
    corpnum: 1101110185276.0,
    cash: 6251.0
  },
  {
    name: "태림포장",
    biznum: "1338122623",
    corpnum: 1301110010015.0,
    cash: 183.0
  },
  {
    name: "태성",
    biznum: "7378601274",
    corpnum: 1101117067972.0,
    cash: 35.0
  },
  {
    name: "태양",
    biznum: "3128107206",
    corpnum: 1615110006118.0,
    cash: 380.0
  },
  
  {
    name: "태양금속공업",
    biznum: "1348100016",
    corpnum: 1101110003212.0,
    cash: 58.0
  },
  {
    name: "태영건설",
    biznum: "1058174543",
    corpnum: 1101110155451.0,
    cash: 2143.0
  },
  {
    name: "태웅",
    biznum: "6038116009",
    corpnum: 1801110073922.0,
    cash: 68.0
  },
  {
    name: "태웅로직스",
    biznum: "2028153193",
    corpnum: 1101111234543.0,
    cash: 583.0
  },
  {
    name: "태원물산",
    biznum: "1208165136",
    corpnum: 1101110086771.0,
    cash: 9.0
  },
  {
    name: "태평양물산",
    biznum: "1348105011",
    corpnum: 1301110010031.0,
    cash: 270.0
  },
  {
    name: "테고사이언스",
    biznum: "3148140292",
    corpnum: 1601110114126.0,
    cash: 7.0
  },
  {
    name: "테라사이언스",
    biznum: "6098124002",
    corpnum: 1901110021119.0,
    cash: 378.0
  },
  {
    name: "테라젠이텍스",
    biznum: "1338122943",
    corpnum: 1101110724107.0,
    cash: 129.0
  },
  {
    name: "테스",
    biznum: "1358157375",
    corpnum: 1345110064482.0,
    cash: 454.0
  },
  {
    name: "테이팩스",
    biznum: "1398115931",
    corpnum: 1201110095499.0,
    cash: 172.0
  },
  {
    name: "테크엘",
    biznum: "1308155315",
    corpnum: 1211110060136.0,
    cash: 162.0
  },
  {
    name: "테크윙",
    biznum: "1248198532",
    corpnum: 1348110072942.0,
    cash: 234.0
  },
  {
    name: "텔레칩스",
    biznum: "1208194951",
    corpnum: 1101111799513.0,
    cash: 117.0
  },
  {
    name: "텔레필드",
    biznum: "1208611843",
    corpnum: 1101112072330.0,
    cash: 24.0
  },
  {
    name: "텔코웨어",
    biznum: "1208197865",
    corpnum: 1101111848394.0,
    cash: 15.0
  },
  {
    name: "텔콘RF제약",
    biznum: "1358129641",
    corpnum: 1345110031382.0,
    cash: 65.0
  },
  {
    name: "토니모리",
    biznum: "1148653270",
    corpnum: 1101113500249.0,
    cash: 113.0
  },
  {
    name: "토박스코리아",
    biznum: "1968100028",
    corpnum: 1101115648518.0,
    cash: 86.0
  },
  {
    name: "토비스",
    biznum: "1338137806",
    corpnum: 1349110013457.0,
    cash: 302.0
  },
  {
    name: "토탈소프트",
    biznum: "6018118506",
    corpnum: 1801110085076.0,
    cash: 100.0
  },
  {
    name: "톱텍",
    biznum: "6218122815",
    corpnum: 1845110014990.0,
    cash: 1275.0
  },
  {
    name: "투비소프트",
    biznum: "2118661993",
    corpnum: 1101112021395.0,
    cash: 47.0
  },
  {
    name: "툴젠",
    biznum: "1088118555",
    corpnum: 1101111785827.0,
    cash: 58.0
  },
  {
    name: "트루윈",
    biznum: "3148182384",
    corpnum: 1601110207244.0,
    cash: 25.0
  },
  {
    name: "트윔",
    biznum: "3178116772",
    corpnum: 1501110132344.0,
    cash: 54.0
  },
  {
    name: "특수건설",
    biznum: "2038146827",
    corpnum: 1101110115885.0,
    cash: 128.0
  },
  {
    name: "티라유텍",
    biznum: "2148795621",
    corpnum: 1101113516105.0,
    cash: 64.0
  },
  {
    name: "티로보틱스",
    biznum: "1298178206",
    corpnum: 1311110126936.0,
    cash: 91.0
  },
  {
    name: "티비씨",
    biznum: "5028127241",
    corpnum: 1701110080458.0,
    cash: 20.0
  },
  {
    name: "티사이언티픽",
    biznum: "2208154389",
    corpnum: 1101111577604.0,
    cash: 289.0
  },
  {
    name: "티씨케이",
    biznum: "1258119772",
    corpnum: 1346110007844.0,
    cash: 432.0
  },
  {
    name: "티앤알바이오팹",
    biznum: "1408173187",
    corpnum: 1355110249041.0,
    cash: 82.0
  },
  {
    name: "티앤엘",
    biznum: "1358127264",
    corpnum: 1345110028404.0,
    cash: 91.0
  },
  {
    name: "티에스넥스젠",
    biznum: "2148191598",
    corpnum: 1101111182726.0,
    cash: 237.0
  },
  {
    name: "티에스아이",
    biznum: "1258196518",
    corpnum: 1313110109110.0,
    cash: 150.0
  },
  {
    name: "티에스이",
    biznum: "3128121630",
    corpnum: 1615110017818.0,
    cash: 412.0
  },
  {
    name: "티에이치엔",
    biznum: "5038119351",
    corpnum: 1701110022781.0,
    cash: 257.0
  },
  {
    name: "티엘비",
    biznum: "1348677072",
    corpnum: 1314110255979.0,
    cash: 295.0
  },
  {
    name: "티엘아이",
    biznum: "1298126130",
    corpnum: 1311110035640.0,
    cash: 121.0
  },
  {
    name: "티와이홀딩스",
    biznum: "7558101772",
    corpnum: 1101117608502.0,
    cash: 940.0
  },
  {
    name: "티움바이오",
    biznum: "2918700645",
    corpnum: 1101116250940.0,
    cash: 90.0
  },
  {
    name: "티웨이항공",
    biznum: "1018194800",
    corpnum: 1101112782046.0,
    cash: 150.0
  },
  {
    name: "티웨이홀딩스",
    biznum: "2078100110",
    corpnum: 1101110073413.0,
    cash: 7.0
  },
  {
    name: "티케이케미칼",
    biznum: "1078701960",
    corpnum: 1101113783457.0,
    cash: 147.0
  },
  {
    name: "티플랙스",
    biznum: "1078134004",
    corpnum: 1101110822159.0,
    cash: 51.0
  },
  {
    name: "티피씨글로벌",
    biznum: "5158113874",
    corpnum: 1748110017627.0,
    cash: 133.0
  },
  {
    name: "팅크웨어",
    biznum: "2298126731",
    corpnum: 1101111394420.0,
    cash: 660.0
  },
  {
    name: "파나진",
    biznum: "5058123225",
    corpnum: 1701110007098.0,
    cash: 77.0
  },
  {
    name: "파나케이아",
    biznum: "1078144588",
    corpnum: 1101111005879.0,
    cash: 78.0
  },
  {
    name: "파라다이스",
    biznum: "2038143553",
    corpnum: 1101110129274.0,
    cash: 3343.0
  },
  {
    name: "파라텍",
    biznum: "1308100241",
    corpnum: 1243110000573.0,
    cash: 452.0
  },
  {
    name: "파루",
    biznum: "4168113067",
    corpnum: 2013110006783.0,
    cash: 15.0
  },
  {
    name: "파마리서치",
    biznum: "2208607450",
    corpnum: 1101112183749.0,
    cash: 325.0
  },
  {
    name: "파멥신",
    biznum: "3148600316",
    corpnum: 1601110247141.0,
    cash: 201.0
  },
  {
    name: "파미셀",
    biznum: "3148100664",
    corpnum: 1601110005177.0,
    cash: 140.0
  },
  {
    name: "파버나인",
    biznum: "1318144728",
    corpnum: 1201110155011.0,
    cash: 100.0
  },
  {
    name: "파세코",
    biznum: "1348105608",
    corpnum: 1301110026228.0,
    cash: 78.0
  },
  {
    name: "파수",
    biznum: "1208606582",
    corpnum: 1101111991680.0,
    cash: 34.0
  },
  {
    name: "파워넷",
    biznum: "2248107438",
    corpnum: 1412110006738.0,
    cash: 137.0
  },
  {
    name: "파워로직스",
    biznum: "1058189099",
    corpnum: 1101111459191.0,
    cash: 217.0
  },
  {
    name: "파이버프로",
    biznum: "3368601784",
    corpnum: 1101117648186.0,
    cash: 144.0
  },
  {
    name: "파이오링크",
    biznum: "1198141089",
    corpnum: 1101112035578.0,
    cash: 370.0
  },
  {
    name: "파인디앤씨",
    biznum: "1198130184",
    corpnum: 1101111667273.0,
    cash: 17.0
  },
  {
    name: "파인디지털",
    biznum: "2138191028",
    corpnum: 1101110896683.0,
    cash: 69.0
  },
  {
    name: "파인엠텍",
    biznum: "5818102559",
    corpnum: 1341110618279.0,
    cash: 292.0
  },
  {
    name: "파인테크닉스",
    biznum: "1238616212",
    corpnum: 1341110173489.0,
    cash: 44.0
  },
  {
    name: "파인텍",
    biznum: "1288635081",
    corpnum: 2850110151881.0,
    cash: 90.0
  },
  {
    name: "파커스",
    biznum: "1228116892",
    corpnum: 1201110041327.0,
    cash: 186.0
  },
  {
    name: "파크시스템스",
    biznum: "2148615106",
    corpnum: 1101111397648.0,
    cash: 465.0
  },
  {
    name: "파트론",
    biznum: "1248605362",
    corpnum: 1358110090117.0,
    cash: 655.0
  },
  {
    name: "판타지오",
    biznum: "3018126727",
    corpnum: 1601110023757.0,
    cash: 184.0
  },
  {
    name: "팜스빌",
    biznum: "1208601608",
    corpnum: 1101111908338.0,
    cash: 169.0
  },
  {
    name: "팜스코",
    biznum: "1298130202",
    corpnum: 1311110042950.0,
    cash: 868.0
  },
  {
    name: "팜스토리",
    biznum: "3038105937",
    corpnum: 1543110001715.0,
    cash: 1399.0
  },
  {
    name: "팜젠사이언스",
    biznum: "1248136540",
    corpnum: 1243110000812.0,
    cash: 227.0
  },
  {
    name: "패션플랫폼",
    biznum: "2328103753",
    corpnum: 1101115782473.0,
    cash: 47.0
  },
  {
    name: "팬스타엔터프라이즈",
    biznum: "1398123687",
    corpnum: 1201110126038.0,
    cash: 112.0
  },
  {
    name: "팬엔터테인먼트",
    biznum: "1208180345",
    corpnum: 1101111531460.0,
    cash: 101.0
  },
  {
    name: "팬오션",
    biznum: "1048119101",
    corpnum: 1101110004286.0,
    cash: 9287.0
  },
  {
    name: "팬젠",
    biznum: "1298642227",
    corpnum: 1311110248194.0,
    cash: 20.0
  },
  {
    name: "퍼스텍",
    biznum: "6098101805",
    corpnum: 1942110000133.0,
    cash: 49.0
  },
  {
    name: "퍼시스",
    biznum: "2158120534",
    corpnum: 1101110345630.0,
    cash: 670.0
  },
  {
    name: "펄어비스",
    biznum: "1388162479",
    corpnum: 1341110195582.0,
    cash: 1722.0
  },
  {
    name: "펌텍코리아",
    biznum: "1308180997",
    corpnum: 1211110088451.0,
    cash: 186.0
  },
  {
    name: "페이퍼코리아",
    biznum: "4018100013",
    corpnum: 2111110000042.0,
    cash: 519.0
  },
  {
    name: "펩트론",
    biznum: "3148120409",
    corpnum: 1601110067234.0,
    cash: 70.0
  },
  {
    name: "평화산업",
    biznum: "5148157898",
    corpnum: 1701110309329.0,
    cash: 9.0
  },
  {
    name: "평화홀딩스",
    biznum: "5148106346",
    corpnum: 1701110006412.0,
    cash: 338.0
  },
  {
    name: "포메탈",
    biznum: "1348106140",
    corpnum: 1301110010669.0,
    cash: 18.0
  },
  {
    name: "포바이포",
    biznum: "7128700690",
    corpnum: 1101116501830.0,
    cash: 127.0
  },
  {
    name: "포스코 ICT",
    biznum: "2198100428",
    corpnum: 1101110658637.0,
    cash: 786.0
  },
  {
    name: "포스코스틸리온",
    biznum: "5068105517",
    corpnum: 1746110006492.0,
    cash: 907.0
  },
  {
    name: "포스코엠텍",
    biznum: "5068100055",
    corpnum: 1746110000866.0,
    cash: 116.0
  },
  {
    name: "포스코인터내셔널",
    biznum: "1048158195",
    corpnum: 1101112137358.0,
    cash: 16712.0
  },
  {
    name: "포스코케미칼",
    biznum: "5068101452",
    corpnum: 1746110001947.0,
    cash: 3319.0
  },
  {
    name: "포시에스",
    biznum: "1088185184",
    corpnum: 1101113940221.0,
    cash: 55.0
  },
  {
    name: "포인트모바일",
    biznum: "1198191385",
    corpnum: 1101113501601.0,
    cash: 35.0
  },
  {
    name: "포인트엔지니어링",
    biznum: "5738700509",
    corpnum: 1101116201737.0,
    cash: 156.0
  },
  {
    name: "포커스에이치엔에스",
    biznum: "5548701400",
    corpnum: 1101117167128.0,
    cash: 32.0
  },
  {
    name: "폴라리스세원",
    biznum: "1258117473",
    corpnum: 1348110015885.0,
    cash: 649.0
  },
  {
    name: "폴라리스오피스",
    biznum: "2208143747",
    corpnum: 1101111398117.0,
    cash: 112.0
  },
  {
    name: "폴라리스우노",
    biznum: "4188119261",
    corpnum: 2101110024308.0,
    cash: 322.0
  },
  {
    name: "푸드나무",
    biznum: "1058781968",
    corpnum: 1101115045045.0,
    cash: 196.0
  },
  {
    name: "푸드웰",
    biznum: "5028100145",
    corpnum: 1701110001628.0,
    cash: 77.0
  },
  {
    name: "푸른기술",
    biznum: "2298128699",
    corpnum: 1101111444241.0,
    cash: 26.0
  },
  {
    name: "푸른저축은행",
    biznum: "1148164092",
    corpnum: 1101110117211.0,
    cash: 735.0
  },
  {
    name: "풀무원",
    biznum: "3158101744",
    corpnum: 1101110375439.0,
    cash: 1346.0
  },
  {
    name: "풍국주정",
    biznum: "5148120391",
    corpnum: 1701110000745.0,
    cash: 100.0
  },
  {
    name: "풍산",
    biznum: "1258175323",
    corpnum: 1313110083497.0,
    cash: 2318.0
  },
  {
    name: "풍산홀딩스",
    biznum: "1228102549",
    corpnum: 1201110018110.0,
    cash: 293.0
  },
  {
    name: "풍원정밀",
    biznum: "1348130029",
    corpnum: 1350110049673.0,
    cash: 47.0
  },
  {
    name: "퓨런티어",
    biznum: "1298632694",
    corpnum: 1311110230307.0,
    cash: 282.0
  },
  {
    name: "퓨쳐켐",
    biznum: "1218146715",
    corpnum: 1246110260311.0,
    cash: 21.0
  },
  {
    name: "프럼파스트",
    biznum: "3058115765",
    corpnum: 1601110031099.0,
    cash: 54.0
  },
  {
    name: "프레스티지바이오로직스",
    biznum: "7778600083",
    corpnum: 1101115739804.0,
    cash: 298.0
  },
  {
    name: "프레스티지바이오파마",
    biznum: "49190",
    corpnum: 0.0,
    cash: 2881.0
  },
  {
    name: "프로스테믹스",
    biznum: "1148718509",
    corpnum: 1101115448520.0,
    cash: 60.0
  },
  {
    name: "프로이천",
    biznum: "7698601155",
    corpnum: 1101117042271.0,
    cash: 64.0
  },
  {
    name: "프로텍",
    biznum: "1338134226",
    corpnum: 1349110012243.0,
    cash: 596.0
  },
  {
    name: "프롬바이오",
    biznum: "1358186512",
    corpnum: 1358110127754.0,
    cash: 97.0
  },
  {
    name: "프리시젼바이오",
    biznum: "3148608943",
    corpnum: 1601110265995.0,
    cash: 19.0
  },
  {
    name: "프리엠스",
    biznum: "1308130556",
    corpnum: 1101110660830.0,
    cash: 55.0
  },
  {
    name: "플래스크",
    biznum: "1168171323",
    corpnum: 1101111625271.0,
    cash: 44.0
  },
  {
    name: "플래티어",
    biznum: "1148642166",
    corpnum: 1101113175969.0,
    cash: 89.0
  },
  {
    name: "플랜티넷",
    biznum: "2148660218",
    corpnum: 1101111985914.0,
    cash: 240.0
  },
  {
    name: "플레이그램",
    biznum: "1068130984",
    corpnum: 1101110286412.0,
    cash: 538.0
  },
  {
    name: "플레이디",
    biznum: "1298643885",
    corpnum: 1311110251048.0,
    cash: 240.0
  },
  {
    name: "플레이위드",
    biznum: "3068106027",
    corpnum: 1601110007660.0,
    cash: 2.0
  },
  {
    name: "플리토",
    biznum: "2158772878",
    corpnum: 1101114945246.0,
    cash: 47.0
  },
  {
    name: "피델릭스",
    biznum: "1058152326",
    corpnum: 1101110717441.0,
    cash: 92.0
  },
  {
    name: "피씨디렉트",
    biznum: "1168169467",
    corpnum: 1101111577977.0,
    cash: 50.0
  },
  {
    name: "피씨엘",
    biznum: "1388145543",
    corpnum: 1352110022823.0,
    cash: 286.0
  },
  {
    name: "피앤씨테크",
    biznum: "1388119079",
    corpnum: 1341110064711.0,
    cash: 47.0
  },
  {
    name: "피에스엠씨",
    biznum: "1168116183",
    corpnum: 1101110234312.0,
    cash: 61.0
  },
  {
    name: "피에스케이",
    biznum: "1508801336",
    corpnum: 1348110493354.0,
    cash: 595.0
  },
  {
    name: "피에스케이홀딩스",
    biznum: "1258106879",
    corpnum: 1347110004377.0,
    cash: 416.0
  },
  {
    name: "피에스텍",
    biznum: "2188103742",
    corpnum: 1101110033623.0,
    cash: 262.0
  },
  {
    name: "피에이치씨",
    biznum: "1298125015",
    corpnum: 1311110033389.0,
    cash: 71.0
  },
  {
    name: "피에이치에이",
    biznum: "5038106628",
    corpnum: 1701110021006.0,
    cash: 1568.0
  },
  {
    name: "피엔에이치테크",
    biznum: "1298636614",
    corpnum: 1311110237931.0,
    cash: 54.0
  },
  {
    name: "피엔케이피부임상연구센타",
    biznum: "1088193781",
    corpnum: 1101114445725.0,
    cash: 18.0
  },
  {
    name: "피엔티",
    biznum: "5138132083",
    corpnum: 1752110017454.0,
    cash: 161.0
  },
  {
    name: "피제이메탈",
    biznum: "1208756037",
    corpnum: 1101114382878.0,
    cash: 16.0
  },
  {
    name: "피제이전자",
    biznum: "1308147931",
    corpnum: 1101110053465.0,
    cash: 112.0
  },
  {
    name: "피코그램",
    biznum: "1098176863",
    corpnum: 1101112463654.0,
    cash: 30.0
  },
  {
    name: "피플바이오",
    biznum: "2148718925",
    corpnum: 1101112606171.0,
    cash: 66.0
  },
  {
    name: "피피아이",
    biznum: "4098149801",
    corpnum: 2001110105176.0,
    cash: 21.0
  },
  {
    name: "픽셀플러스",
    biznum: "3148132491",
    corpnum: 1601110096473.0,
    cash: 98.0
  },
  {
    name: "핀텔",
    biznum: "2038800359",
    corpnum: 1101115829944.0,
    cash: 6.0
  },
  {
    name: "필옵틱스",
    biznum: "1238613175",
    corpnum: 1351110088083.0,
    cash: 298.0
  },
  {
    name: "핌스",
    biznum: "4698100377",
    corpnum: 1201110799950.0,
    cash: 91.0
  },
  {
    name: "핑거",
    biznum: "1208615854",
    corpnum: 1101112139776.0,
    cash: 193.0
  },
  {
    name: "하나금융16호스팩",
    biznum: "5428101671",
    corpnum: 1101117293957.0,
    cash: 13.0
  },
  {
    name: "하나금융19호스팩",
    biznum: "7298602006",
    corpnum: 1101117880952.0,
    cash: 6.0
  },
  {
    name: "하나금융20호스팩",
    biznum: "1808602138",
    corpnum: 1101117999886.0,
    cash: 8.0
  },
  {
    name: "하나금융21호스팩",
    biznum: "1378702276",
    corpnum: 1101118051990.0,
    cash: 26.0
  },
  {
    name: "하나금융22호스팩",
    biznum: "2688701945",
    corpnum: 1101118164959.0,
    cash: 20.0
  },
  {
    name: "하나금융23호스팩",
    biznum: "6608102420",
    corpnum: 1101118261911.0,
    cash: 19.0
  },
  {
    name: "하나금융24호스팩",
    biznum: "1548802676",
    corpnum: 1101118277942.0,
    cash: 30.0
  },
  {
    name: "하나금융지주",
    biznum: "1078671509",
    corpnum: 1101113352004.0,
    cash: 85868.0
  },
  {
    name: "하나기술",
    biznum: "1248607579",
    corpnum: 1348110080937.0,
    cash: 475.0
  },
  {
    name: "하나마이크론",
    biznum: "3128150630",
    corpnum: 1648110021208.0,
    cash: 944.0
  },
  {
    name: "하나머스트7호스팩",
    biznum: "2488701863",
    corpnum: 1101117685386.0,
    cash: 14.0
  },
  {
    name: "하나머티리얼즈",
    biznum: "3128188209",
    corpnum: 1615110086227.0,
    cash: 583.0
  },
  {
    name: "하나제약",
    biznum: "1248137632",
    corpnum: 1311110002409.0,
    cash: 8.0
  },
  {
    name: "하나투어",
    biznum: "1028139440",
    corpnum: 1101110981038.0,
    cash: 659.0
  },
  {
    name: "하림",
    biznum: "4038161113",
    corpnum: 2149110034430.0,
    cash: 799.0
  },
  {
    name: "하림지주",
    biznum: "3068103054",
    corpnum: 1601110003931.0,
    cash: 16796.0
  },
  {
    name: "하이드로리튬",
    biznum: "1388110821",
    corpnum: 1101111125289.0,
    cash: 10.0
  },
  {
    name: "하이딥",
    biznum: "4978601885",
    corpnum: 1101117616620.0,
    cash: 245.0
  },
  {
    name: "하이로닉",
    biznum: "2068621359",
    corpnum: 1101113802992.0,
    cash: 79.0
  },
  {
    name: "하이록코리아",
    biznum: "6038106103",
    corpnum: 1801110029321.0,
    cash: 613.0
  },
  {
    name: "하이브",
    biznum: "1208678223",
    corpnum: 1101113166546.0,
    cash: 9030.0
  },
  {
    name: "하이비젼시스템",
    biznum: "1048627794",
    corpnum: 1101114324127.0,
    cash: 656.0
  },
  {
    name: "하이소닉",
    biznum: "1348166610",
    corpnum: 1350110111703.0,
    cash: 22.0
  },
  {
    name: "하이스틸",
    biznum: "2018178906",
    corpnum: 1101112686024.0,
    cash: 195.0
  },
  {
    name: "하이제6호스팩",
    biznum: "6318701968",
    corpnum: 1101117760188.0,
    cash: 18.0
  },
  {
    name: "하이제7호스팩",
    biznum: "4278602323",
    corpnum: 1101118009072.0,
    cash: 17.0
  },
  {
    name: "하이즈항공",
    biznum: "2158617709",
    corpnum: 1101112376401.0,
    cash: 142.0
  },
  {
    name: "하이텍팜",
    biznum: "3038120127",
    corpnum: 1545110012907.0,
    cash: 51.0
  },
  {
    name: "하이트론씨스템즈",
    biznum: "3128106094",
    corpnum: 1243110017841.0,
    cash: 4.0
  },
  {
    name: "하이트진로",
    biznum: "2148100777",
    corpnum: 1101110028591.0,
    cash: 5408.0
  },
  {
    name: "하이트진로홀딩스",
    biznum: "1078100955",
    corpnum: 1101110013766.0,
    cash: 5440.0
  },
  {
    name: "하인크코리아",
    biznum: "3488801710",
    corpnum: 1101117695210.0,
    cash: 35.0
  },
  {
    name: "하츠",
    biznum: "1288106145",
    corpnum: 1156110003902.0,
    cash: 181.0
  },
  {
    name: "한국가구",
    biznum: "1368105002",
    corpnum: 1244110005688.0,
    cash: 42.0
  },
  {
    name: "한국가스공사",
    biznum: "1208200557",
    corpnum: 1146710006125.0,
    cash: 11127.0
  },
  {
    name: "한국경제TV",
    biznum: "1078170183",
    corpnum: 1101111767510.0,
    cash: 64.0
  },
  {
    name: "한국공항",
    biznum: "1098133068",
    corpnum: 1101110003692.0,
    cash: 683.0
  },
  {
    name: "한국금융지주",
    biznum: "2148726478",
    corpnum: 1101112691651.0,
    cash: 26888.0
  },
  {
    name: "한국기업평가",
    biznum: "1168140193",
    corpnum: 1101110362808.0,
    cash: 1081.0
  },
  {
    name: "한국내화",
    biznum: "6228106900",
    corpnum: 1846110000319.0,
    cash: 33.0
  },
  {
    name: "한국단자공업",
    biznum: "1398113632",
    corpnum: 1201110002957.0,
    cash: 470.0
  },
  {
    name: "한국맥널티",
    biznum: "2148620763",
    corpnum: 1101111495971.0,
    cash: 62.0
  },
  {
    name: "한국비엔씨",
    biznum: "4048600676",
    corpnum: 1101116202305.0,
    cash: 1218.0
  },
  {
    name: "한국석유공업",
    biznum: "1068103639",
    corpnum: 1101110048490.0,
    cash: 161.0
  },
  {
    name: "한국선재",
    biznum: "6068138360",
    corpnum: 1801110102359.0,
    cash: 84.0
  },
  {
    name: "한국수출포장공업",
    biznum: "2148144931",
    corpnum: 1101110008882.0,
    cash: 244.0
  },
  {
    name: "한국쉘석유",
    biznum: "6178100016",
    corpnum: 1801110002591.0,
    cash: 126.0
  },
  {
    name: "한국알콜",
    biznum: "6108105494",
    corpnum: 1812110003728.0,
    cash: 350.0
  },
  {
    name: "한국앤컴퍼니",
    biznum: "2208102784",
    corpnum: 1101110034233.0,
    cash: 364.0
  },
  {
    name: "한국유니온제약",
    biznum: "6078121765",
    corpnum: 1801110007062.0,
    cash: 80.0
  },
  {
    name: "한국자산신탁",
    biznum: "1078197673",
    corpnum: 1101112196304.0,
    cash: 929.0
  },
  {
    name: "한국전력공사",
    biznum: "1208200052",
    corpnum: 1146710001456.0,
    cash: 58734.0
  },
  {
    name: "한국전자금융",
    biznum: "2148645634",
    corpnum: 1101111848980.0,
    cash: 1413.0
  },
  {
    name: "한국전자인증",
    biznum: "2148630830",
    corpnum: 1101111665350.0,
    cash: 144.0
  },
  {
    name: "한국전자홀딩스",
    biznum: "2298101123",
    corpnum: 1101110101470.0,
    cash: 257.0
  },
  {
    name: "한국정밀기계",
    biznum: "6088131228",
    corpnum: 1943110006189.0,
    cash: 24.0
  },
  {
    name: "한국정보공학",
    biznum: "2298118298",
    corpnum: 1101110735766.0,
    cash: 28.0
  },
  {
    name: "한국정보인증",
    biznum: "1108141568",
    corpnum: 1101111727332.0,
    cash: 74.0
  },
  {
    name: "한국정보통신",
    biznum: "1168119948",
    corpnum: 1101110426688.0,
    cash: 1330.0
  },
  {
    name: "한국제10호스팩",
    biznum: "6898102284",
    corpnum: 1101118080014.0,
    cash: 16.0
  },
  {
    name: "한국조선해양",
    biznum: "6208100012",
    corpnum: 1812110000386.0,
    cash: 36345.0
  },
  {
    name: "한국종합기술",
    biznum: "1298120591",
    corpnum: 1101110038326.0,
    cash: 224.0
  },
  {
    name: "한국주강",
    biznum: "6088105400",
    corpnum: 1943110000537.0,
    cash: 4.0
  },
  {
    name: "한국주철관공업",
    biznum: "6038104347",
    corpnum: 1801110000587.0,
    cash: 551.0
  },
  {
    name: "한국철강",
    biznum: "6098184470",
    corpnum: 1942110094318.0,
    cash: 130.0
  },
  {
    name: "한국카본",
    biznum: "6158101585",
    corpnum: 1801110054691.0,
    cash: 340.0
  },
  {
    name: "한국캐피탈",
    biznum: "3148115454",
    corpnum: 1601110019277.0,
    cash: 5172.0
  },
  {
    name: "한국컴퓨터",
    biznum: "5138108185",
    corpnum: 1760110008737.0,
    cash: 114.0
  },
  {
    name: "한국콜마",
    biznum: "3078138444",
    corpnum: 1647110030756.0,
    cash: 2287.0
  },
  {
    name: "한국콜마홀딩스",
    biznum: "3078102816",
    corpnum: 1647110001591.0,
    cash: 1431.0
  },
  {
    name: "한국큐빅",
    biznum: "1348100374",
    corpnum: 1350110031042.0,
    cash: 33.0
  },
  {
    name: "한국타이어앤테크놀로지",
    biznum: "2208843431",
    corpnum: 1101114952093.0,
    cash: 8696.0
  },
  {
    name: "한국테크놀로지",
    biznum: "1238144182",
    corpnum: 1351110045025.0,
    cash: 13.0
  },
  {
    name: "한국토지신탁",
    biznum: "1208163986",
    corpnum: 1101111258220.0,
    cash: 2249.0
  },
  {
    name: "한국특강",
    biznum: "6068101728",
    corpnum: 1801110015362.0,
    cash: 409.0
  },
  {
    name: "한국파마",
    biznum: "1248115899",
    corpnum: 1801110059112.0,
    cash: 82.0
  },
  {
    name: "한국팩키지",
    biznum: "1348118419",
    corpnum: 1350110040291.0,
    cash: 19.0
  },
  {
    name: "한국프랜지공업",
    biznum: "6208100079",
    corpnum: 1812110000443.0,
    cash: 198.0
  },
  {
    name: "한국항공우주",
    biznum: "1108142397",
    corpnum: 1101111827570.0,
    cash: 5776.0
  },
  {
    name: "한국화장품",
    biznum: "1018655141",
    corpnum: 1101114342228.0,
    cash: 65.0
  },
  {
    name: "한국화장품제조",
    biznum: "1028120368",
    corpnum: 1101110037427.0,
    cash: 297.0
  },
  {
    name: "한글과컴퓨터",
    biznum: "1078152230",
    corpnum: 1101110725064.0,
    cash: 1219.0
  },
  {
    name: "한네트",
    biznum: "1188116705",
    corpnum: 1101111402851.0,
    cash: 304.0
  },
  {
    name: "한농화성",
    biznum: "4018101273",
    corpnum: 2111110001090.0,
    cash: 55.0
  },
  {
    name: "한독",
    biznum: "2208100530",
    corpnum: 1101110037005.0,
    cash: 160.0
  },
  {
    name: "한독크린텍",
    biznum: "3058166527",
    corpnum: 1601110165806.0,
    cash: 34.0
  },
  {
    name: "한라IMS",
    biznum: "6068157969",
    corpnum: 1801110186907.0,
    cash: 104.0
  },
  {
    name: "한미글로벌",
    biznum: "2208133593",
    corpnum: 1101111283657.0,
    cash: 563.0
  },
  {
    name: "한미반도체",
    biznum: "1378102051",
    corpnum: 1201110038423.0,
    cash: 384.0
  },
  {
    name: "한미사이언스",
    biznum: "1248132296",
    corpnum: 1348110003187.0,
    cash: 180.0
  },
  {
    name: "한미약품",
    biznum: "1248700613",
    corpnum: 1348110197550.0,
    cash: 1779.0
  },
  {
    name: "한빛소프트",
    biznum: "1188119570",
    corpnum: 1101111628928.0,
    cash: 55.0
  },
  {
    name: "한샘",
    biznum: "1338122865",
    corpnum: 1341110003595.0,
    cash: 367.0
  },
  {
    name: "한섬",
    biznum: "1208126337",
    corpnum: 1101110531578.0,
    cash: 132.0
  },
  {
    name: "한성기업",
    biznum: "6018108347",
    corpnum: 1801110000230.0,
    cash: 51.0
  },
  {
    name: "한세실업",
    biznum: "1378192214",
    corpnum: 1201110484303.0,
    cash: 2804.0
  },
  {
    name: "한세엠케이",
    biznum: "2038157509",
    corpnum: 1101111144073.0,
    cash: 91.0
  },
  {
    name: "한세예스24홀딩스",
    biznum: "1378108720",
    corpnum: 1201110019382.0,
    cash: 3086.0
  },
  {
    name: "한솔피엔에스",
    biznum: "1208159861",
    corpnum: 1101110175970.0,
    cash: 193.0
  },
  {
    name: "한솔로지스틱스",
    biznum: "1028141359",
    corpnum: 1101110150659.0,
    cash: 301.0
  },
  {
    name: "한솔아이원스",
    biznum: "1248633892",
    corpnum: 1348110109828.0,
    cash: 130.0
  },
  {
    name: "한솔인티큐브",
    biznum: "1208661116",
    corpnum: 1101112915605.0,
    cash: 56.0
  },
  {
    name: "한솔제지",
    biznum: "1048658322",
    corpnum: 1101115604700.0,
    cash: 244.0
  },
  {
    name: "한솔케미칼",
    biznum: "1028134955",
    corpnum: 1101110270895.0,
    cash: 663.0
  },
  {
    name: "한솔테크닉스",
    biznum: "1208153945",
    corpnum: 1101110004682.0,
    cash: 709.0
  },
  {
    name: "한솔홀딩스",
    biznum: "1048125772",
    corpnum: 1101110017867.0,
    cash: 643.0
  },
  {
    name: "한솔홈데코",
    biznum: "1028137194",
    corpnum: 1101110825624.0,
    cash: 172.0
  },
  {
    name: "한송네오텍",
    biznum: "5688800222",
    corpnum: 1101115796789.0,
    cash: 8.0
  },
  {
    name: "한스바이오메드",
    biznum: "2068117637",
    corpnum: 1101111773872.0,
    cash: 75.0
  },
  {
    name: "한신공영",
    biznum: "1148104605",
    corpnum: 1101110075683.0,
    cash: 3000.0
  },
  {
    name: "한신기계공업",
    biznum: "1348103309",
    corpnum: 1301110010346.0,
    cash: 186.0
  },
  {
    name: "한양디지텍",
    biznum: "1248619959",
    corpnum: 1348110094160.0,
    cash: 77.0
  },
  {
    name: "한양이엔지",
    biznum: "1248137874",
    corpnum: 1101110582547.0,
    cash: 1353.0
  },
  {
    name: "한양증권",
    biznum: "1168115073",
    corpnum: 1101110026834.0,
    cash: 1896.0
  },
  {
    name: "한온시스템",
    biznum: "3068124501",
    corpnum: 1347110002206.0,
    cash: 9829.0
  },
  {
    name: "한올바이오파마",
    biznum: "3068105479",
    corpnum: 1641110000397.0,
    cash: 177.0
  },
  {
    name: "한익스프레스",
    biznum: "1308116025",
    corpnum: 1243110015051.0,
    cash: 134.0
  },
  {
    name: "한일단조",
    biznum: "2038151830",
    corpnum: 1243110019293.0,
    cash: 79.0
  },
  {
    name: "한일사료",
    biznum: "1358105182",
    corpnum: 1345110004008.0,
    cash: 274.0
  },
  {
    name: "한일시멘트",
    biznum: "4638701012",
    corpnum: 1101116799203.0,
    cash: 184.0
  },
  {
    name: "한일진공",
    biznum: "1078733496",
    corpnum: 1101114305614.0,
    cash: 51.0
  },
  {
    name: "한일철강",
    biznum: "2018144712",
    corpnum: 1101110048987.0,
    cash: 76.0
  },
  {
    name: "한일현대시멘트",
    biznum: "2148124240",
    corpnum: 1101110111867.0,
    cash: 63.0
  },
  {
    name: "한일홀딩스",
    biznum: "2208103255",
    corpnum: 1101110040165.0,
    cash: 1026.0
  },
  {
    name: "한일화학",
    biznum: "1338126110",
    corpnum: 1201110003111.0,
    cash: 147.0
  },
  {
    name: "한전KPS",
    biznum: "2038158100",
    corpnum: 1101110371148.0,
    cash: 852.0
  },
  {
    name: "한전기술",
    biznum: "1208101490",
    corpnum: 1101110186307.0,
    cash: 268.0
  },
  {
    name: "한전산업",
    biznum: "2038158148",
    corpnum: 1101110692875.0,
    cash: 390.0
  },
  {
    name: "한주라이트메탈",
    biznum: "6108106722",
    corpnum: 1812110008538.0,
    cash: 75.0
  },
  {
    name: "한진",
    biznum: "2018102823",
    corpnum: 1101110003668.0,
    cash: 1856.0
  },
  {
    name: "한진중공업홀딩스",
    biznum: "6018108008",
    corpnum: 1101110110083.0,
    cash: 1690.0
  },
  {
    name: "한진칼",
    biznum: "2018634368",
    corpnum: 1101115197193.0,
    cash: 1630.0
  },
  {
    name: "한창",
    biznum: "6078117053",
    corpnum: 1801110000602.0,
    cash: 88.0
  },
  {
    name: "한창산업",
    biznum: "1248133499",
    corpnum: 1348110003715.0,
    cash: 69.0
  },
  {
    name: "한창제지",
    biznum: "6218109073",
    corpnum: 1845110000105.0,
    cash: 216.0
  },
  {
    name: "한컴라이프케어",
    biznum: "1358121955",
    corpnum: 1345110021549.0,
    cash: 528.0
  },
  {
    name: "한컴위드",
    biznum: "1168172773",
    corpnum: 1101111673585.0,
    cash: 109.0
  },
  {
    name: "한탑",
    biznum: "6178100559",
    corpnum: 1801110005834.0,
    cash: 54.0
  },
  {
    name: "한화",
    biznum: "2028116825",
    corpnum: 1101110002959.0,
    cash: 72298.0
  },
  {
    name: "한화생명",
    biznum: "1168111757",
    corpnum: 1101110003204.0,
    cash: 19225.0
  },
  {
    name: "한화손해보험",
    biznum: "1168146445",
    corpnum: 1101110006456.0,
    cash: 3352.0
  },
  {
    name: "한화솔루션",
    biznum: "2028116577",
    corpnum: 1101110360935.0,
    cash: 22482.0
  },
  {
    name: "한화시스템",
    biznum: "5138117175",
    corpnum: 1760110020640.0,
    cash: 10087.0
  },
  {
    name: "한화에어로스페이스",
    biznum: "6098102992",
    corpnum: 1942110000480.0,
    cash: 18079.0
  },
  {
    name: "한화투자증권",
    biznum: "1168119031",
    corpnum: 1101110003155.0,
    cash: 2570.0
  },
  {
    name: "한화플러스제2호스팩",
    biznum: "2298142385",
    corpnum: 1101117866803.0,
    cash: 13.0
  },
  {
    name: "한화플러스제3호스팩",
    biznum: "7568602503",
    corpnum: 1101118282602.0,
    cash: 18.0
  },
  {
    name: "해성디에스",
    biznum: "6098618048",
    corpnum: 1942110223694.0,
    cash: 983.0
  },
  {
    name: "해성산업",
    biznum: "1208116746",
    corpnum: 1101110028145.0,
    cash: 1647.0
  },
  {
    name: "해성옵틱스",
    biznum: "1248194098",
    corpnum: 1348110069163.0,
    cash: 60.0
  },
  {
    name: "해성티피씨",
    biznum: "1398130494",
    corpnum: 1201110148800.0,
    cash: 92.0
  },
  {
    name: "해태제과식품",
    biznum: "3128149680",
    corpnum: 1615110044225.0,
    cash: 87.0
  },
  {
    name: "핸디소프트",
    biznum: "1298639907",
    corpnum: 1311110243912.0,
    cash: 224.0
  },
  {
    name: "핸즈코퍼레이션",
    biznum: "1378103633",
    corpnum: 1201110000323.0,
    cash: 549.0
  },
  { name: "헝셩그룹", biznum: "530657", corpnum: 0.0, cash: 2660.0 },
  {
    name: "헥토이노베이션",
    biznum: "2148839117",
    corpnum: 1101114063535.0,
    cash: 1966.0
  },
  {
    name: "헥토파이낸셜",
    biznum: "1018163383",
    corpnum: 1101112085523.0,
    cash: 1619.0
  },
  {
    name: "헬릭스미스",
    biznum: "1018142428",
    corpnum: 1101111343930.0,
    cash: 239.0
  },
  {
    name: "현대건설",
    biznum: "1018116293",
    corpnum: 1101110007909.0,
    cash: 33636.0
  },
  {
    name: "현대건설기계",
    biznum: "5288800622",
    corpnum: 1101116363868.0,
    cash: 6085.0
  },
  {
    name: "현대공업",
    biznum: "6108101557",
    corpnum: 1812110001102.0,
    cash: 205.0
  },
  {
    name: "현대그린푸드",
    biznum: "2118108241",
    corpnum: 1101110095201.0,
    cash: 484.0
  },
  {
    name: "현대글로비스",
    biznum: "1068197118",
    corpnum: 1101112177388.0,
    cash: 23598.0
  },
  {
    name: "현대두산인프라코어",
    biznum: "1218140254",
    corpnum: 1201110234469.0,
    cash: 4636.0
  },
  {
    name: "현대로템",
    biznum: "6098137486",
    corpnum: 1942110036336.0,
    cash: 3370.0
  },
  {
    name: "현대리바트",
    biznum: "1358132239",
    corpnum: 1345110034097.0,
    cash: 125.0
  },
  {
    name: "현대모비스",
    biznum: "1018116406",
    corpnum: 1101110215536.0,
    cash: 44516.0
  },
  {
    name: "현대무벡스",
    biznum: "7968701173",
    corpnum: 1101117016870.0,
    cash: 274.0
  },
  {
    name: "현대미포조선",
    biznum: "6208100900",
    corpnum: 1812110000526.0,
    cash: 4263.0
  },
  {
    name: "현대바이오",
    biznum: "1268145614",
    corpnum: 1344110015693.0,
    cash: 57.0
  },
  {
    name: "현대바이오랜드",
    biznum: "3128124525",
    corpnum: 1101111192981.0,
    cash: 107.0
  },
  {
    name: "현대백화점",
    biznum: "2118721455",
    corpnum: 1101112644725.0,
    cash: 2031.0
  },
  {
    name: "현대비앤지스틸",
    biznum: "1208128432",
    corpnum: 1101110065395.0,
    cash: 120.0
  },
  {
    name: "현대에너지솔루션",
    biznum: "1188122037",
    corpnum: 1101116265410.0,
    cash: 628.0
  },
  {
    name: "현대에버다임",
    biznum: "1078145758",
    corpnum: 1101111042574.0,
    cash: 48.0
  },
  {
    name: "현대에이치티",
    biznum: "2208151999",
    corpnum: 1101111539597.0,
    cash: 40.0
  },
  {
    name: "현대엘리베이터",
    biznum: "1268104267",
    corpnum: 1344110001519.0,
    cash: 1998.0
  },
  {
    name: "현대오토에버",
    biznum: "1048153190",
    corpnum: 1101111935638.0,
    cash: 2485.0
  },
  {
    name: "현대위아",
    biznum: "6098101770",
    corpnum: 1942110000125.0,
    cash: 4976.0
  },
  {
    name: "현대이지웰",
    biznum: "1018190575",
    corpnum: 1101112693235.0,
    cash: 44.0
  },
  {
    name: "현대일렉트릭",
    biznum: "2668600531",
    corpnum: 1101116363850.0,
    cash: 1462.0
  },
  {
    name: "현대제철",
    biznum: "1218110385",
    corpnum: 1201110001743.0,
    cash: 13207.0
  },
  {
    name: "현대중공업",
    biznum: "2528701412",
    corpnum: 2301110312741.0,
    cash: 15141.0
  },
  {
    name: "현대자동차",
    biznum: "1018109147",
    corpnum: 1101110085450.0,
    cash: 195845.0
  },
  {
    name: "현대차증권",
    biznum: "1168134691",
    corpnum: 1101110019962.0,
    cash: 5681.0
  },
  {
    name: "현대코퍼레이션",
    biznum: "1018116269",
    corpnum: 1101110205850.0,
    cash: 3498.0
  },
  {
    name: "현대코퍼레이션홀딩스",
    biznum: "8138800272",
    corpnum: 1101115851559.0,
    cash: 474.0
  },
  {
    name: "현대퓨처넷",
    biznum: "1128131178",
    corpnum: 1101110842785.0,
    cash: 267.0
  },
  {
    name: "현대해상",
    biznum: "1028132035",
    corpnum: 1101110035893.0,
    cash: 7468.0
  },
  {
    name: "현대홈쇼핑",
    biznum: "2118676540",
    corpnum: 1101112248882.0,
    cash: 452.0
  },
  {
    name: "현우산업",
    biznum: "1378115371",
    corpnum: 1201110140484.0,
    cash: 120.0
  },
  {
    name: "협진",
    biznum: "1408101965",
    corpnum: 1355110151022.0,
    cash: 25.0
  },
  {
    name: "형지I&C",
    biznum: "1198105079",
    corpnum: 1101110192271.0,
    cash: 16.0
  },
  {
    name: "형지엘리트",
    biznum: "1058639463",
    corpnum: 1101112507551.0,
    cash: 204.0
  },
  {
    name: "혜인",
    biznum: "1208127641",
    corpnum: 1101110030413.0,
    cash: 157.0
  },
  {
    name: "호전실업",
    biznum: "1058164268",
    corpnum: 1101110393457.0,
    cash: 501.0
  },
  {
    name: "호텔신라",
    biznum: "2038143363",
    corpnum: 1101110145519.0,
    cash: 4983.0
  },
  {
    name: "홈센타홀딩스",
    biznum: "5048117069",
    corpnum: 1760110003901.0,
    cash: 401.0
  },
  {
    name: "홈캐스트",
    biznum: "2158191010",
    corpnum: 1101111954513.0,
    cash: 353.0
  },
  {
    name: "화성밸브",
    biznum: "5038108664",
    corpnum: 1701110030958.0,
    cash: 26.0
  },
  {
    name: "화성산업",
    biznum: "5018100050",
    corpnum: 1701110001131.0,
    cash: 1349.0
  },
  {
    name: "화승알앤에이",
    biznum: "3058640935",
    corpnum: 2341110120538.0,
    cash: 48.0
  },
  {
    name: "화승엔터프라이즈",
    biznum: "6858100299",
    corpnum: 1101115891943.0,
    cash: 2021.0
  },
  {
    name: "화승인더스트리",
    biznum: "6068101863",
    corpnum: 1801110004323.0,
    cash: 2647.0
  },
  {
    name: "화승코퍼레이션",
    biznum: "6218105780",
    corpnum: 1845110001252.0,
    cash: 1346.0
  },
  {
    name: "화신",
    biznum: "5058120965",
    corpnum: 1701110014936.0,
    cash: 1042.0
  },
  {
    name: "화신정공",
    biznum: "1078735359",
    corpnum: 1101114339415.0,
    cash: 237.0
  },
  {
    name: "화인베스틸",
    biznum: "6088168647",
    corpnum: 1951110010951.0,
    cash: 11.0
  },
  {
    name: "화일약품",
    biznum: "1248127624",
    corpnum: 1344110000719.0,
    cash: 494.0
  },
  {
    name: "화천기계",
    biznum: "1148145488",
    corpnum: 1101110342181.0,
    cash: 210.0
  },
  {
    name: "화천기공",
    biznum: "4108100996",
    corpnum: 2001110001704.0,
    cash: 235.0
  },
  {
    name: "환인제약",
    biznum: "2158136171",
    corpnum: 1101110339542.0,
    cash: 411.0
  },
  {
    name: "황금에스티",
    biznum: "1078118697",
    corpnum: 1101110504195.0,
    cash: 502.0
  },
  {
    name: "효성",
    biznum: "1058159519",
    corpnum: 1101110030497.0,
    cash: 1440.0
  },
  {
    name: "효성 ITX",
    biznum: "1208173505",
    corpnum: 1101111412256.0,
    cash: 2.0
  },
  {
    name: "효성오앤비",
    biznum: "3128103710",
    corpnum: 1648110001094.0,
    cash: 95.0
  },
  {
    name: "효성중공업",
    biznum: "5788700896",
    corpnum: 1101116770154.0,
    cash: 635.0
  },
  {
    name: "효성첨단소재",
    biznum: "1988700929",
    corpnum: 1101116770170.0,
    cash: 295.0
  },
  {
    name: "효성티앤씨",
    biznum: "8808701070",
    corpnum: 1101116770138.0,
    cash: 1839.0
  },
  {
    name: "효성화학",
    biznum: "1758801164",
    corpnum: 1101116770188.0,
    cash: 1813.0
  },
  {
    name: "후성",
    biznum: "1348634812",
    corpnum: 1314110189425.0,
    cash: 300.0
  },
  {
    name: "휠라홀딩스",
    biznum: "1148144271",
    corpnum: 1101110792667.0,
    cash: 5594.0
  },
  {
    name: "휴네시온",
    biznum: "2148746095",
    corpnum: 1101112919938.0,
    cash: 40.0
  },
  {
    name: "휴니드테크놀러지스",
    biznum: "1238106174",
    corpnum: 1341110005202.0,
    cash: 266.0
  },
  {
    name: "휴럼",
    biznum: "4258601594",
    corpnum: 1101117442710.0,
    cash: 40.0
  },
  {
    name: "휴림네트웍스",
    biznum: "1248152292",
    corpnum: 1301110044808.0,
    cash: 270.0
  },
  {
    name: "휴림로봇",
    biznum: "1098160401",
    corpnum: 1101111817828.0,
    cash: 267.0
  },
  {
    name: "휴마시스",
    biznum: "1078827778",
    corpnum: 1101115503308.0,
    cash: 881.0
  },
  {
    name: "휴맥스",
    biznum: "1428122888",
    corpnum: 1345110144268.0,
    cash: 478.0
  },
  {
    name: "휴맥스홀딩스",
    biznum: "2158137923",
    corpnum: 1101110604200.0,
    cash: 487.0
  },
  {
    name: "휴먼엔",
    biznum: "2118129606",
    corpnum: 1101110412778.0,
    cash: 37.0
  },
  {
    name: "휴메딕스",
    biznum: "2048176343",
    corpnum: 1101112727141.0,
    cash: 118.0
  },
  {
    name: "휴비스",
    biznum: "2158198804",
    corpnum: 1101112102070.0,
    cash: 180.0
  },
  {
    name: "휴비츠",
    biznum: "1238148801",
    corpnum: 1341110065636.0,
    cash: 76.0
  },
  {
    name: "휴센텍",
    biznum: "1078841260",
    corpnum: 1101115642726.0,
    cash: 1.0
  },
  {
    name: "휴스틸",
    biznum: "1078111563",
    corpnum: 1101110077283.0,
    cash: 1539.0
  },
  {
    name: "휴엠앤씨",
    biznum: "1378146699",
    corpnum: 1201110290289.0,
    cash: 51.0
  },
  {
    name: "휴온스",
    biznum: "8638700270",
    corpnum: 1311110446029.0,
    cash: 445.0
  },
  {
    name: "휴온스글로벌",
    biznum: "1298107002",
    corpnum: 1101110400202.0,
    cash: 1531.0
  },
  {
    name: "휴젤",
    biznum: "2118704515",
    corpnum: 1101112380890.0,
    cash: 917.0
  },
  {
    name: "흥구석유",
    biznum: "5018100268",
    corpnum: 1701110002676.0,
    cash: 6.0
  },
  {
    name: "흥국",
    biznum: "1358100912",
    corpnum: 1345110001228.0,
    cash: 203.0
  },
  {
    name: "흥국에프엔비",
    biznum: "1278610281",
    corpnum: 2801110086726.0,
    cash: 165.0
  },
  {
    name: "흥국화재",
    biznum: "1028107837",
    corpnum: 1101110016728.0,
    cash: 699.0
  },
  {
    name: "흥아해운",
    biznum: "1208162522",
    corpnum: 1101110515275.0,
    cash: 535.0
  },
  {
    name: "희림",
    biznum: "2148115867",
    corpnum: 1101110660806.0,
    cash: 307.0
  },
  {
    name: "힘스",
    biznum: "2298135638",
    corpnum: 1101111634272.0,
    cash: 88.0
  },
];

export default data;
