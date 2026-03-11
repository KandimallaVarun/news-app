const business = [
  {
    source: {
      id: null,
      name: "Investor's Business Daily"
    },
    author: null,
    title: "Stock Market Today: Dow, Nasdaq Climb As Oil Prices Plummet Amid Ongoing U.S.-Iran Conflict (Live Coverage) - Investor's Business Daily",
    description: "Stock Market Today: The Dow Jones index reverses higher Tuesday while oil prices crumble. A retailer and a Chinese EV stock rally.",
    url: "https://www.investors.com/market-trend/stock-market-today/dow-jones-sp500-nasdaq-trump-iran-oil-prices-tsmc/",
    urlToImage: "https://www.investors.com/wp-content/uploads/2017/03/stock-wallstreet2-031317-shutter.jpg",
    publishedAt: "2026-03-10T16:41:28Z",
    content: "Information in Investors Business Daily is for informational and educational purposes only and should not be construed as an offer, recommendation, solicitation, or rating to buy or sell securities."
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment"
    },
    author: "Bailey Lipschultz",
    title: "Ackman’s Pershing Square Seeks Up to $10 Billion in NYSE IPO - Yahoo Finance",
    description: "The initial public offering for Pershing Square USA Ltd., the closed-end fund, would also give investors stakes in Pershing Square Inc.",
    url: "https://finance.yahoo.com/news/ackman-seeks-10-billion-us-104616327.html",
    urlToImage: "https://s.yimg.com/ny/api/res/1.2/VK_uv7hWAs8yREWVJFl2Fg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_holding_pen_162/50602793b12587c87c728c29453fbb2a",
    publishedAt: "2026-03-10T14:20:38Z",
    content: "Bill Ackman is returning to the IPO market with a combined offering for his hedge fund manager and a new closed-end fund."
  },
  {
    source: {
      id: "politico",
      name: "Politico"
    },
    author: "Carmen Paun",
    title: "FDA backs away from RFK Jr.’s claims about drug’s promise for autism patients - Politico",
    description: "Food and Drug Administration Commissioner Marty Makary said in September he was changing leucovorin’s label.",
    url: "https://www.politico.com/news/2026/03/10/fda-backs-away-from-rfk-jr-s-claims-about-drugs-promise-for-autism-patients-00820221",
    urlToImage: "https://www.politico.com/dims4/default/resize/1200/quality/90/format/jpg?url=https://static.politico.com/74/aa/f8ace132457c9c7dce32bf14375f/white-house-21498.jpg",
    publishedAt: "2026-03-10T13:39:29Z",
    content: "The agency approved the drug not for autism but for a form of cerebral folate deficiency."
  },
  {
    source: {
      id: "associated-press",
      name: "Associated Press"
    },
    author: "Michelle Chapman",
    title: "FAA briefly grounds all JetBlue flights after a request from the airline - AP News",
    description: "All JetBlue flights were briefly grounded by the Federal Aviation Administration early Tuesday.",
    url: "https://apnews.com/article/faa-ground-stop-jetblue-e990b118812f467d904d92375b984d71",
    urlToImage: "https://dims.apnews.com/dims4/default/60436b0/2147483647/strip/true/crop/3000x1999+0+1/resize/980x653!/quality/90/",
    publishedAt: "2026-03-10T13:23:00Z",
    content: "The ground stop was lifted about 40 minutes after it was imposed."
  },
  {
    source: {
      id: null,
      name: "BBC News"
    },
    author: null,
    title: "Volkswagen to cut 50,000 jobs as profits drop - BBC",
    description: "Europe's largest carmaker said post-tax profits had dropped to their lowest level since 2016.",
    url: "https://www.bbc.com/news/articles/c4gqyyly9v8o",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/1363/live/3224dbe0-1c6f-11f1-8206-178b2777dfa1.jpg",
    publishedAt: "2026-03-10T11:29:25Z",
    content: "Around 50,000 jobs are due to be cut by 2030 across the Volkswagen Group in Germany."
  },
  {
    source: {
      id: null,
      name: "MarketWatch"
    },
    author: "Barbara Kollmeyer",
    title: "Return to the 2022 stock-market playbook as Iran conflict drags on - MarketWatch",
    description: "Barclays says the chasm between winners and losers is about to get massive.",
    url: "https://www.marketwatch.com/story/return-to-the-2022-stock-market-playbook-as-iran-conflict-drags-on-say-these-strategists-7bb7e01b",
    urlToImage: "https://images.mktw.net/im-08226732/social",
    publishedAt: "2026-03-10T11:00:00Z",
    content: "Volatile markets continue to swing around as markets weigh up Iran conflict headlines."
  },
  {
    source: {
      id: null,
      name: "TheStreet"
    },
    author: "Hillary Remy, Dana Sullivan Kilroy",
    title: "JPMorgan delivers a stark message for investors in stocks - thestreet.com",
    description: "The bank's message this week is hard to ignore.",
    url: "https://www.thestreet.com/investing/stocks/jpmorgan-delivers-a-stark-message-for-investors-in-stocks",
    urlToImage: "https://www.thestreet.com/.image/w_1200,h_630,g_auto,c_fill/NDA6MDAwMDAwMDAyOTA2NzA0/gettyimages-2241014390-1.jpg",
    publishedAt: "2026-03-10T10:33:00Z",
    content: "JPMorgan warns of short-term market weakness due to geopolitical tensions."
  },
  {
    source: {
      id: null,
      name: "Motley Fool"
    },
    author: "John Ballard",
    title: "3 Monster Stocks to Hold for the Next 20 Years - The Motley Fool",
    description: "These top consumer brands still have a large market for expansion.",
    url: "https://www.fool.com/investing/2026/03/10/3-monster-stocks-hold-for-next-20-years/",
    urlToImage: "https://g.foolcdn.com/image/?url=https://g.foolcdn.com/editorial/images/858623/rocket-growth.jpg",
    publishedAt: "2026-03-10T08:50:00Z",
    content: "Building wealth in the stock market can seem more challenging than it really is."
  },
  {
    source: {
      id: null,
      name: "DW (English)"
    },
    author: "Nik Martin",
    title: "Iran war: How long before Gulf nations stop pumping oil? - DW",
    description: "The oil price spiked near $120 after strikes on Iran's energy sites.",
    url: "https://www.dw.com/en/iran-war-how-long-before-gulf-nations-stop-pumping-oil/a-76272635",
    urlToImage: "https://static.dw.com/image/67074429_6.jpg",
    publishedAt: "2026-03-10T06:39:57Z",
    content: "The price of oil soared to nearly $120 a barrel after strikes on Iran's energy infrastructure."
  }
];

export default business;
