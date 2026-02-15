// Add pages by:
// 1) creating content/<path>.md
// 2) adding an entry here (title/path/tags)
// Tags power the built-in lightweight search.

window.WIKI_NAV = [
  {
    section: "Getting Started",
    items: [
      { title: "Welcome", path: "welcome", tags: ["overview", "rules", "start"] },
      { title: "How to Play", path: "chess", tags: ["terms", "definitions", "rules", "guide"] },
      { title: "FAQ", path: "faq", tags: ["help", "questions"] },
    ]
  },
  {
    section: "Pieces",
    items: [
      { title: "Pieces Index", path: "pieces/index", tags: ["pieces", "index"], hidden: true, isIndex: true},
      { title: "Pawn", path: "pieces/pawn", tags: ["piece", "pawn"] },
      { title: "Bishop", path: "pieces/bishop", tags: ["piece", "bishop"] },
      { title: "Knight", path: "pieces/knight", tags: ["piece", "knight"] },
      { title: "Rook", path: "pieces/rook", tags: ["piece", "rook"] },
      { title: "Queen", path: "pieces/queen", tags: ["piece", "queen"] },
      { title: "King", path: "pieces/king", tags: ["piece", "king"] },
      { title: "Emperor", path: "pieces/emperor", tags: ["piece", "emperor"] },
      { title: "Pharaoh", path: "pieces/pharaoh", tags: ["piece", "pharaoh"] },
      { title: "Horseman", path: "pieces/horseman", tags: ["piece", "horseman"] },
      { title: "Ninja", path: "pieces/ninja", tags: ["piece", "ninja"] },
    ]
  },
  {
    section: "Civilizations",
    items: [
      { title: "Civilizations Index", path: "civilizations/index", tags: ["civs", "civilizations", "index"], hidden: true, isIndex: true},
      // Add each civ as its own markdown page:
      { title: "Britons", path: "civilizations/britons", tags: ["civ","britons"] },
      { title: "Burgundians", path: "civilizations/burgundians", tags: ["civ","burgundians"] },
      { title: "Chinese", path: "civilizations/chinese", tags: ["civ","chinese"] },
      { title: "Egyptians", path: "civilizations/egyptians", tags: ["civ","egyptians"] },
      { title: "French", path: "civilizations/french", tags: ["civ","french"] },
      { title: "Huns", path: "civilizations/huns", tags: ["civ","huns"] },
      { title: "Japanese", path: "civilizations/japanese", tags: ["civ","japanese"] },
      { title: "Mongols", path: "civilizations/mongols", tags: ["civ","mongols"] },
      { title: "Spanish", path: "civilizations/spanish", tags: ["civ","spanish"] },
      { title: "Teutons", path: "civilizations/teutons", tags: ["civ","teutons"] },
      { title: "Traditional", path: "civilizations/traditional", tags: ["civ","traditional"] },
      { title: "Vikings", path: "civilizations/vikings", tags: ["civ","vikings"] },
    ]
  },
  {
    section: "Rules of Engagement",
    items: [
      { title: "Index", path: "research/index", tags: ["rules of engagement", "roe", "research", "index"], hidden: true, isIndex: true },

      { title: "Advisement", path: "research/advisement", tags: ["rules of engagement", "roe", "research", "advisement"] },
      { title: "Blitzkrieg", path: "research/blitzkrieg", tags: ["rules of engagement", "roe", "research", "blitzkrieg"] },
      { title: "Castle 2", path: "research/castle-2", tags: ["rules of engagement", "roe", "research", "castle-2"] },
      { title: "Dame", path: "research/dame", tags: ["rules of engagement", "roe", "research", "dame"] },
      { title: "Dark Age", path: "research/dark-age", tags: ["rules of engagement", "roe", "research", "dark-age"] },
      { title: "Emergency Coronations", path: "research/emergency-coronations", tags: ["rules of engagement", "roe", "research", "emergency-coronations"] },
      { title: "Failed Joust", path: "research/failed-joust", tags: ["rules of engagement", "roe", "research", "failed-joust"] },
      { title: "Feudalism", path: "research/feudalism", tags: ["rules of engagement", "roe", "research", "feudalism"] },
      { title: "Fletching", path: "research/fletching", tags: ["rules of engagement", "roe", "research", "fletching"] },
      { title: "Fog of War", path: "research/fog-of-war", tags: ["rules of engagement", "roe", "research", "fog-of-war"] },
      { title: "Horse Shoes", path: "research/horse-shoes", tags: ["rules of engagement", "roe", "research", "horse-shoes"] },
      { title: "Inquisitors", path: "research/inquisitors", tags: ["rules of engagement", "roe", "research", "inquisitors"] },
      { title: "Junshi", path: "research/junshi", tags: ["rules of engagement", "roe", "research", "junshi"] },
      { title: "Lancers", path: "research/lancers", tags: ["rules of engagement", "roe", "research", "lancers"] },
      { title: "Manifest Destiny", path: "research/manifest-destiny", tags: ["rules of engagement", "roe", "research", "manifest-destiny"] },
      { title: "Missionaries", path: "research/missionaries", tags: ["rules of engagement", "roe", "research", "missionaries"] },
      { title: "Momentum", path: "research/momentum", tags: ["rules of engagement", "roe", "research", "momentum"] },
      { title: "Morganatic Marriage", path: "research/morganatic-marriage", tags: ["rules of engagement", "roe", "research", "morganatic-marriage"] },
      { title: "Mounted Momentum", path: "research/mounted-momentum", tags: ["rules of engagement", "roe", "research", "mounted-momentum"] },
      { title: "Murder Holes", path: "research/murder-holes", tags: ["rules of engagement", "roe", "research", "murder-holes"] },
      { title: "Noble Sacrifice", path: "research/noble-sacrifice", tags: ["rules of engagement", "roe", "research", "noble-sacrifice"] },
      { title: "Pyrrhic Victory", path: "research/pyrrhic-victory", tags: ["rules of engagement", "roe", "research", "pyrrhic-victory"] },
      { title: "Scorched Earth", path: "research/scorched-earth", tags: ["rules of engagement", "roe", "research", "scorched-earth"] },
      { title: "Skirmishing", path: "research/skirmishing", tags: ["rules of engagement", "roe", "research", "skirmishing"] },
      { title: "Sneaky Queen", path: "research/sneaky-queen", tags: ["rules of engagement", "roe", "research", "sneaky-queen"] },
      { title: "Tactical Retreat", path: "research/tactical-retreat", tags: ["rules of engagement", "roe", "research", "tactical-retreat"] },
      { title: "Transgression", path: "research/transgression", tags: ["rules of engagement", "roe", "research", "transgression"] },
    ]
  },
  {
    section: "Cosmetics",
    items: [
      { title: "Emotes", path: "cosmetics/emotes", tags: ["emotes", "cosmetics", "social"] },
    ]
  },
  {
    section: "Patch Notes",
    items: [
      { title: "Current Patch Notes", path: "patch-notes/current", tags: ["patch", "patch notes", "notes"], hidden: true, isIndex: true},
      // Add each civ as its own markdown page:
      { title: "0.0.0", path: "patch-notes/0-0-0"}
    ]
  },
];
