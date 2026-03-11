const sports = [
  {
    source: {
      id: null,
      name: "Patriots.com"
    },
    author: null,
    title: "2026 Patriots Free Agent Tracker - New England Patriots",
    description: "Tracking all of the Patriots transactions during the free agent signing period.",
    url: "https://www.patriots.com/news/2026-patriots-free-agent-tracker",
    urlToImage: "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/patriots/adx2yrwo703yrltrixoy",
    publishedAt: "2026-03-10T16:18:45Z",
    content: null
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post"
    },
    author: "Mariana Alfaro, Adam Taylor, Victoria Craw",
    title: "Australia grants asylum to 5 Iranian soccer players after Trump pressure - The Washington Post",
    description: "Authorities granted visas to five Iranian soccer players after criticism back home.",
    url: "https://www.washingtonpost.com/politics/2026/03/09/trump-iran-soccer-womens-asylum-australia/",
    urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://cloudfront-us-east-1.images.arcpublishing.com/wapo/CFPO2RRIMDA6IBREWMNUZAW2AA.JPG&w=1440",
    publishedAt: "2026-03-10T14:38:47Z",
    content: "Australia granted asylum to members of the Iranian women's soccer team."
  },
  {
    source: {
      id: "nfl-news",
      name: "NFL News"
    },
    author: null,
    title: "2026 NFL Draft order for all seven rounds - NFL.com",
    description: "The full draft order for all rounds of the 2026 NFL Draft.",
    url: "https://www.nfl.com/news/2026-nfl-draft-order-for-all-seven-rounds",
    urlToImage: "https://static.www.nfl.com/image/upload/t_editorial_landscape_12_desktop/league/gxsgmit9wp25odp7yooh",
    publishedAt: "2026-03-10T13:52:00Z",
    content: null
  },
  {
    source: {
      id: null,
      name: "SB Nation"
    },
    author: "Jarrett Bailey",
    title: "NFL’s 6 worst free agent deals of 2026 so far - SB Nation",
    description: "The worst contracts handed out on the first day of free agency.",
    url: "https://www.sbnation.com/nfl/1105570/nfl-free-agency-deals-alec-pierce-jaelan-phillips-tyler-linderbaum",
    urlToImage: "https://platform.sbnation.com/wp-content/uploads/sites/2/2026/03/gettyimages-2253443655.jpg",
    publishedAt: "2026-03-10T13:18:22Z",
    content: "The beginning of NFL free agency brought big contracts and surprises."
  },
  {
    source: {
      id: "associated-press",
      name: "Associated Press"
    },
    author: "Tim Reynolds",
    title: "NBA cancels Atlanta Hawks celebration of Magic City club - AP News",
    description: "The NBA canceled a planned promotional event tied to the club.",
    url: "https://apnews.com/article/atlanta-hawks-magic-city-strip-club-promotion-canceled-a1733d815e4ec7b50eed9666c85abd25",
    urlToImage: "https://dims.apnews.com/dims4/default/bf88a22/2147483647/strip/true/crop/3019x2012+0+1/resize/980x653!/quality/90/",
    publishedAt: "2026-03-10T12:26:00Z",
    content: "The NBA said concerns led to the cancellation of the promotion."
  },
  {
    source: {
      id: null,
      name: "NBCSports.com"
    },
    author: "Michael David Smith",
    title: "Packers agree to contract with former Chargers CB Benjamin St-Juste",
    description: "Green Bay signs cornerback Benjamin St-Juste to a two-year deal.",
    url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/packers-agree-to-contract-with-former-chargers-cornerback-benjamin-st-juste",
    urlToImage: "https://nbcsports.brightspotcdn.com/dims4/default/71e6408/2147483647/strip/true/crop/5827x3278+0+305/resize/1440x810!",
    publishedAt: "2026-03-10T12:12:28Z",
    content: "The Packers added depth in the secondary with a two-year contract."
  },
  {
    source: {
      id: null,
      name: "Sports Illustrated"
    },
    author: "Kevin Sweeney",
    title: "Men’s Basketball Bracket Watch: Bubble Teams’ Chances Dwindle",
    description: "Championship week begins as teams compete for NCAA tournament spots.",
    url: "https://www.si.com/college-basketball/mens-basketball-bracket-watch-bubble-teams-chances-dwindle",
    urlToImage: "https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_0,w_6440,h_3622/c_fill,w_1440",
    publishedAt: "2026-03-10T11:00:00Z",
    content: "Conference tournaments are underway as teams try to secure tournament bids."
  },
  {
    source: {
      id: "espn",
      name: "ESPN"
    },
    author: null,
    title: "Gary Woodland: Done wasting energy trying to hide PTSD - ESPN",
    description: "Golfer Gary Woodland discusses his battle with PTSD after brain surgery.",
    url: "https://www.espn.com/golf/story/_/id/48159223/gary-woodland-done-wasting-energy-trying-hide-ptsd",
    urlToImage: "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0612%2Fr1505752_1296x729_16%2D9.jpg",
    publishedAt: "2026-03-10T03:52:00Z",
    content: "Woodland opened up about mental health after surgery."
  },
  {
    source: {
      id: null,
      name: "NBCSports.com"
    },
    author: "Kurt Helin",
    title: "Shai Gilgeous-Alexander ties Wilt Chamberlain record, hits game winner",
    description: "Thunder star leads team to victory against Denver.",
    url: "https://www.nbcsports.com/nba/news/shai-gilgeous-alexanders-big-night-ties-wilt-chamberlain-in-record-books-hits-game-winner-vs-denver",
    urlToImage: "https://nbcsports.brightspotcdn.com/dims4/default/206bafc/2147483647/strip/true/crop/3637x2046+0+190/resize/1440x810!",
    publishedAt: "2026-03-10T02:57:09Z",
    content: "Shai Gilgeous-Alexander delivered a game-winning shot against Denver."
  },
  {
    source: {
      id: "nfl-news",
      name: "NFL News"
    },
    author: null,
    title: "Steelers signing RB Rico Dowdle to two-year, $12.25M deal - NFL.com",
    description: "The former Cowboys running back joins Pittsburgh.",
    url: "https://www.nfl.com/news/steelers-signing-rb-rico-dowdle-to-two-year-12-25-million-deal",
    urlToImage: "https://static.www.nfl.com/image/upload/t_editorial_landscape_12_desktop/league/lrzxuo0mb0o5ohmp8uic",
    publishedAt: "2026-03-10T02:25:00Z",
    content: "Dowdle signs with the Steelers after a 1,000-yard season."
  }
];

export default sports;
