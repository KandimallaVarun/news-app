const technology = [
  {
    source: {
      id: null,
      name: "Nintendo Life"
    },
    author: "Nintendo Life",
    title: "Review: Fatal Frame II: Crimson Butterfly Remake (Switch 2)",
    description: "Great atmosphere but the remake never quite comes into focus.",
    url: "https://www.nintendolife.com/reviews/nintendo-switch-2/fatal-frame-ii-crimson-butterfly-remake",
    urlToImage: "https://images.nintendolife.com/61354a16e6180/1280x720.jpg",
    publishedAt: "2026-03-10T14:00:00Z",
    content: "Captured on Nintendo Switch 2 (Docked). Though survival horror games like Resident Evil dominate the genre..."
  },
  {
    source: {
      id: null,
      name: "Nintendo Life"
    },
    author: "Jim Norman",
    title: "Yoshi And The Mysterious Book Lands Switch 2 Release Date",
    description: "Nintendo reveals the release date for Yoshi’s new platformer.",
    url: "https://www.nintendolife.com/news/2026/03/yoshi-and-the-mysterious-book-lands-switch-2-release-date",
    urlToImage: "https://images.nintendolife.com/2f23952839415/large.jpg",
    publishedAt: "2026-03-10T13:59:00Z",
    content: "Nintendo revealed the release date for Yoshi and the Mysterious Book."
  },
  {
    source: {
      id: "mashable",
      name: "Mashable"
    },
    author: "Matt Binder",
    title: "Apple plans a high-end Ultra line including iPhone Fold",
    description: "Apple could introduce an Ultra lineup of premium products.",
    url: "https://mashable.com/article/apple-ultra-line-high-end-products-touchscreen-macbook-report",
    urlToImage: "https://helios-i.mashable.com/imagery/articles/013IAQxZyBdOaMfEAh0J8mA/hero-image.fill.size_1200x675.v1773080591.jpg",
    publishedAt: "2026-03-10T13:22:03Z",
    content: null
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch"
    },
    author: "Aisha Malik",
    title: "Google rolls out new Gemini capabilities to Docs, Sheets, Slides, and Drive",
    description: "New AI features aim to help users work faster within Google apps.",
    url: "https://techcrunch.com/2026/03/10/google-rolls-out-new-gemini-capabilities-to-docs-sheets-slides-and-drive/",
    urlToImage: "https://techcrunch.com/wp-content/uploads/2026/02/google-logo.jpg",
    publishedAt: "2026-03-10T13:00:00Z",
    content: "Google is introducing Gemini-powered features across its productivity apps."
  },
  {
    source: {
      id: null,
      name: "9to5Google"
    },
    author: "Ben Schoon",
    title: "Google Photos adds toggle to switch between Ask Photos and classic search",
    description: "A new toggle allows users to switch between AI and classic search.",
    url: "http://9to5google.com/2026/03/10/google-photos-ask-search-toggle/",
    urlToImage: "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2026/03/google-photos-ask-photos-toggle.jpg",
    publishedAt: "2026-03-10T12:30:00Z",
    content: "Google Photos introduces a new toggle for switching search experiences."
  },
  {
    source: {
      id: null,
      name: "9to5Mac"
    },
    author: "Ben Lovejoy",
    title: "Apple promotes its new MacBook Neo with a cute Finder character",
    description: "Apple markets the MacBook Neo to new Mac users via social media.",
    url: "https://9to5mac.com/2026/03/10/apple-creates-adorable-little-finder-guy-to-promote-its-adorable-little-mac/",
    urlToImage: "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2026/03/Apple-creates-adorable-little-Finder-guy-to-promote-its-adorable-little-Mac.jpg",
    publishedAt: "2026-03-10T12:29:00Z",
    content: "Apple is promoting the MacBook Neo to a new generation of users."
  },
  {
    source: {
      id: null,
      name: "GamesIndustry.biz"
    },
    author: "Alex Forbes-Calvin",
    title: "Microsoft vows to keep investing in gaming after Xbox leadership change",
    description: "Satya Nadella reaffirmed Microsoft's commitment to gaming.",
    url: "https://www.gamesindustry.biz/microsoft-boss-nadella-vows-to-always-invest-in-video-games-following-xbox-leadership-change",
    urlToImage: "https://assetsio.gnwcdn.com/Satya_Nadella.jpeg",
    publishedAt: "2026-03-10T10:18:23Z",
    content: "Microsoft CEO Satya Nadella said the company remains committed to gaming."
  },
  {
    source: {
      id: null,
      name: "GSMArena"
    },
    author: "Vlad",
    title: "Google Pixel 11 Pro Fold renders leak",
    description: "Leaked renders show minor design changes in Pixel 11 Pro Fold.",
    url: "https://www.gsmarena.com/google_pixel_11_pro_fold_renders_leak-news-71879.php",
    urlToImage: "https://fdn.gsmarena.com/imgroot/news/26/03/google-pixel-11-pro-fold-cad-renders/-952x498w6/gsmarena_000.jpg",
    publishedAt: "2026-03-09T22:41:02Z",
    content: "Leaks reveal the design of Google's upcoming foldable phone."
  },
  {
    source: {
      id: "bloomberg",
      name: "Bloomberg"
    },
    author: "Olivia Poh",
    title: "Human brain cells run experimental data centers",
    description: "Researchers are testing data centers powered by human neurons.",
    url: "https://www.bloomberg.com/news/articles/2026-03-09/human-brain-cells-run-new-data-centers-in-singapore-melbourne",
    urlToImage: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/id4D5NaGfnFI/v0/1200x800.jpg",
    publishedAt: "2026-03-09T22:00:00Z",
    content: "Scientists experiment with neurons on silicon to power computing systems."
  },
  {
    source: {
      id: "ars-technica",
      name: "Ars Technica"
    },
    author: "Andrew Cunningham",
    title: "Testing Apple’s 2026 16-inch MacBook Pro with M5 Max chip",
    description: "Apple’s new M5 Max processor brings improved performance cores.",
    url: "https://arstechnica.com/gadgets/2026/03/testing-apples-2026-16-inch-macbook-pro-m5-max-and-its-new-performance-cores/",
    urlToImage: "https://cdn.arstechnica.net/wp-content/uploads/2026/03/IMG_3650-1152x648.jpeg",
    publishedAt: "2026-03-09T20:00:21Z",
    content: null
  }
];

export default technology;
