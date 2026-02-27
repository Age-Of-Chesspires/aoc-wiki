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
      { title: "Index", path: "roe/index", tags: ["rules of engagement", "roe", "roe", "index"], hidden: true, isIndex: true },

      { title: "Advisement", path: "roe/advisement", tags: ["rules of engagement", "roe", "roe", "advisement"] },
      { title: "Blitzkrieg", path: "roe/blitzkrieg", tags: ["rules of engagement", "roe", "roe", "blitzkrieg"] },
      { title: "Castle 2", path: "roe/castle-2", tags: ["rules of engagement", "roe", "roe", "castle-2"] },
      { title: "Dame", path: "roe/dame", tags: ["rules of engagement", "roe", "roe", "dame"] },
      { title: "Dark Age", path: "roe/dark-age", tags: ["rules of engagement", "roe", "roe", "dark-age"] },
      { title: "Emergency Coronations", path: "roe/emergency-coronations", tags: ["rules of engagement", "roe", "roe", "emergency-coronations"] },
      { title: "Failed Joust", path: "roe/failed-joust", tags: ["rules of engagement", "roe", "roe", "failed-joust"] },
      { title: "Feudalism", path: "roe/feudalism", tags: ["rules of engagement", "roe", "roe", "feudalism"] },
      { title: "Fletching", path: "roe/fletching", tags: ["rules of engagement", "roe", "roe", "fletching"] },
      { title: "Fog of War", path: "roe/fog-of-war", tags: ["rules of engagement", "roe", "roe", "fog-of-war"] },
      { title: "Horse Shoes", path: "roe/horse-shoes", tags: ["rules of engagement", "roe", "roe", "horse-shoes"] },
      { title: "Inquisitors", path: "roe/inquisitors", tags: ["rules of engagement", "roe", "roe", "inquisitors"] },
      { title: "Junshi", path: "roe/junshi", tags: ["rules of engagement", "roe", "roe", "junshi"] },
      { title: "Lancers", path: "roe/lancers", tags: ["rules of engagement", "roe", "roe", "lancers"] },
      { title: "Manifest Destiny", path: "roe/manifest-destiny", tags: ["rules of engagement", "roe", "roe", "manifest-destiny"] },
      { title: "Missionaries", path: "roe/missionaries", tags: ["rules of engagement", "roe", "roe", "missionaries"] },
      { title: "Momentum", path: "roe/momentum", tags: ["rules of engagement", "roe", "roe", "momentum"] },
      { title: "Morganatic Marriage", path: "roe/morganatic-marriage", tags: ["rules of engagement", "roe", "roe", "morganatic-marriage"] },
      { title: "Mounted Momentum", path: "roe/mounted-momentum", tags: ["rules of engagement", "roe", "roe", "mounted-momentum"] },
      { title: "Murder Holes", path: "roe/murder-holes", tags: ["rules of engagement", "roe", "roe", "murder-holes"] },
      { title: "Noble Sacrifice", path: "roe/noble-sacrifice", tags: ["rules of engagement", "roe", "roe", "noble-sacrifice"] },
      { title: "Pyrrhic Victory", path: "roe/pyrrhic-victory", tags: ["rules of engagement", "roe", "roe", "pyrrhic-victory"] },
      { title: "Scorched Earth", path: "roe/scorched-earth", tags: ["rules of engagement", "roe", "roe", "scorched-earth"] },
      { title: "Skirmishing", path: "roe/skirmishing", tags: ["rules of engagement", "roe", "roe", "skirmishing"] },
      { title: "Sneaky Queen", path: "roe/sneaky-queen", tags: ["rules of engagement", "roe", "roe", "sneaky-queen"] },
      { title: "Tactical Retreat", path: "roe/tactical-retreat", tags: ["rules of engagement", "roe", "roe", "tactical-retreat"] },
      { title: "Transgression", path: "roe/transgression", tags: ["rules of engagement", "roe", "roe", "transgression"] },
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
