const data = [
  {
    type: "Equity",
    asset: [
      { "name": "Russell", "ticker": "IWM", "explain": "지수로, 미국추식을 시가총액 순으로 나열하여 1,001위~3,000위에 해당하는 총목에 투자하는 ETF" },
      { "name": "EAFE", "ticker": "EFA", "explain": "미국과 캐나다를 제외한 전세계 선진시장에 투자하는 ETF" },
    ]
  },
  {
    type: "US",
    asset: [
      { name: "QQQ", ticker: "QQQ", explain: "나스닥 100 지수를 추종하는 ETF" },
      { name: "S&P500", ticker: "SPY", explain: "미국 증권시장에 상장된 대형주 500개 종목에 투자하는 ETF" },
      { name: "Dow Jones", ticker: "DIA", explain: "다우 츤스 지수를 추송하는 ETF" },
    ]
  },
  {
    type: "Emerging Market",
    asset: [
      { name: "Korea", ticker: "EWY", explain: "한국에 투자하는 ETF로, MSCI Korea Index 지수를 추종"},
      { name: "India", ticker: "INDY", explain: "인도에 투자하는 ETF로, MSCI India Index 지수를 추종" },
      { name: "Vietnam", ticker: "VNM", explain: "베트남에 투자하는 ETF로, MSCI Vietnam Index 지수를 추종" },
      { name: "Indonesia", ticker: "EIDO", explain: "인도네시아에 투자하는 ETF로, MsCI Indonesia Index 지수를 추종" },
      { name: "China", ticker: "MCHI", explain: "중국에 투자하는 ETF로, MSCI China Index 지수를 추중" },
      { name: "Brazil", ticker: "EWZ", explain: "브라질에 투자하는 ETF로, MSCI Brazil Index 지수를 주종" },
    ]
  },
  {
    type: "Bonds",
    asset: [
      { name: "20+Bond", ticker: "TLT", explain: "20년 이상 만기의 미국장기채권을 약 30종목으로 보유하는 ETF" },
      { name: "Investment Grade Corporate Bond ", ticker: "LQD", explain: "미국 달러로 표시된 투자적격등급 회사채로 구성된 지수에 투자를 하는 ETF" },
      { name: "High Yield Corporate Bond", ticker: "HYG", explain: "회사채 중에서도 신용등급이 상대적으로 낮은 채권들에 투자하는 ETF" },
      { name: "TIPS Bond", ticker: "TIP", explain: "미국 재무부에서 발행하는 물가연동채에 투자하는 ETF" },
      { name: "Emerging Market Bond", ticker: "EMB", explain: "신흥시장 채권에 투자하는 ETF" },
    ]
  },
  {
    type: "Alternative Assets",
    asset: [
      { name: "Dow Jones Real Estate", ticker: "IYR", explain: "미국을 대표하는 부동산 지수인 Dow Jones Us. Real Estate Index를 추종하는 ETF" },
      { name: "GSCI Commodity", ticker: "GSG", explain: "대표적위 원자재 지수를 주종하는 Passive형 ETF" },
      { name: "Gold", ticker: "GLD", explain: "실물 금에 투자하는 ETF" },
      { name: "VIXY", ticker: "VIXY", explain: "short Term VIX 선물 지수를 추증하는 ETF" },
      { name: "VIX Inverse", ticker: "SVXY", explain: "s&P500의 변동성 MX)을 매도하는 구조에서 수익을 창출하는 미국 금융 상" },
    ]
  },
  {
    type: "ESG",
    asset: [
      { name: "iShares ESG", ticker: "ESGU", explain: "미국의 테마형 청정에너지 종목이 편입되어 있는 ETF로, 친환경 외에도 석유회사 엑슨모빌, 셰브론 등이 포함되어 있음" },
      // { name: "Vanguard ESG", ticker: "ESGV", explain: "뱅가드그룹이 운영하는 ESG Er로 성인, 오락, 술, 담배, 화석연료 등이 배제됨" },
      // { name: "US Diversity", ticker: "VDNI", explain: "다양성(성별)을 츤중하는 기업에 투자하는 ET" },
    ]
  },
  {
    type: "Anti ESG",
    asset: [
      { name: "Anti ESG", ticker: "BAD", explain: "술, 담배, 카지노 등에 투자하는 ETF" },
    ]
  }
];

export default data;
