const data = [
  {
    type: "국내 주식",
    asset: [
      { "name": "ARIRANG 200", "ticker": "152100", "explain": "한화자산운용에서 만든 KOSPI 200을 추종하는 ETF" },
      { "name": "KODEX MSCI Korea", "ticker": "156080", "explain": "한국주식시장을 대표하는 주식들로 구성된 MSCI Korea 지수에 투자하는 ETF" },
      { "name": "KBSTAR 우량업종", "ticker": "140580", "explain": "펀더멘탈이 우수한 10개 업종에 3개월간 로테이션 하는 ETF" },
      { "name": "ARIRANG 고배당주", "ticker": "161510", "explain": "유동시가총액 상위 200종목 중 예상 배당수익률이 상위 30위 이내 종목을 선정하여 투자하는 ETF" }
    ]
  },
  {
    type: "해외 주식",
    asset: [
      { "name": "TIGER 유로스탁스50(합성 H)", "ticker": "195930", "explain": "유로존 12개국에 상장된 주식 중 시가총액 상위 50종목에 투자하는 ETF" },
      { "name": "ARIRANG 신흥국MSCI(합성 H)", "ticker": "195980", "explain": "신흥국 대표 주가지수인 MSCI Emerging Markets 지수를 추종하는 ETF" },
      { "name": "ARIRANG 선진국MSCI(합성 H)", "ticker": "195970", "explain": "MCSI All Country World 수익률을 추종하는 ETF" },
      { "name": "TIGER 미국나스닥100", "ticker": "133690", "explain": "4차 산업혁명의 수혜가 기대되는 IT, 소비재, 헬스케어 중심으로 구성된 미국 나스닥 시장 분산 투자하는 ETF" },
      { "name": "S&P 500 index", "ticker": "SPY", "explain": "S&P500 index를 추종하는 ETF"}
    ]
  },
  {  
    type: "국내 채권",
    asset: [
      { "name": "KODEX 단기채권", "ticker": "153130", "explain": "대표적 안정 자산인 정부 및 한국은행이 발행한 1년 미만 국고채권과 통안채에 투자하는 ETF" },
      { "name": "KODEX 국채선물 10년", "ticker": "152380", "explain": "잔존만기 7년-10년 사이의 무위험 장기국고채권 투자와 같은 수익을 추구하는 ETF" },
      { "name": "ACE 국고채3년", "ticker": "114460", "explain": "가장 활발하게 거래되는 국고채권에 분산투자하는 상품에 투자하는 ETF" },
      { "name": "KBSTAR KIS국고채30년Enhanced", "ticker": "385560", "explain": "KIS국고채30년 Enhanced지수 일간수익률의 1배성과를 추구하여 금리 하락시 자본 이득을 추구하는 ETF" }
        
    ]
  },
  {  
    type: "원자재",
    asset: [
      { "name": "금 ETF", "ticker": "GLD", "explain": "LBMA Gold Price AM을 추종하는 미국 금 ETF" },
      { "name": "TIGER 구리실물", "ticker": "160580", "explain": "S&P GSCI Cash Copper Index의 원화환산가격을 추종하는 ETF" }
        
    ]
  },
];

export default data;
