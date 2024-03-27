const gameBoard = document.getElementById('gameBoard');
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultsBox = document.getElementById('results');
const lengthOfWord = 5;
const guesses = 6;
const wordlist = [
"aback",
"abaft",
"abase",
"abash",
"abate",
"abbey",
"abbot",
"abeam",
"abhor",
"abide",
"abler",
"abode",
"abort",
"about",
"above",
"abuse",
"abuzz",
"abyss",
"achoo",
"acorn",
"acrid",
"actor",
"acute",
"adage",
"adapt",
"adder",
"addle",
"adept",
"adieu",
"adios",
"adman",
"admen",
"admin",
"admit",
"admix",
"adobe",
"adopt",
"adore",
"adorn",
"adult",
"aegis",
"aerie",
"affix",
"afire",
"afoot",
"afoul",
"again",
"agape",
"agate",
"agave",
"agent",
"aggro",
"agile",
"aging",
"aglow",
"agony",
"agree",
"ahead",
"aided",
"aisle",
"aitch",
"alack",
"alarm",
"album",
"alder",
"alert",
"algae",
"algal",
"alias",
"alibi",
"alien",
"align",
"alike",
"alkyd",
"allay",
"alley",
"allot",
"allow",
"alloy",
"aloft",
"aloha",
"alone",
"along",
"aloof",
"aloud",
"alpha",
"altar",
"alter",
"amass",
"amaze",
"amber",
"ambit",
"amble",
"amend",
"amide",
"amigo",
"amine",
"amino",
"amiss",
"amity",
"among",
"amour",
"ample",
"amuse",
"anent",
"angel",
"anger",
"angle",
"angry",
"angst",
"anime",
"anion",
"anise",
"ankhs",
"ankle",
"annex",
"annoy",
"annul",
"anode",
"antic",
"antsy",
"anvil",
"aorta",
"apace",
"apart",
"aphid",
"apish",
"apple",
"apply",
"apron",
"apter",
"arbor",
"ardor",
"areal",
"arena",
"argon",
"argot",
"argue",
"arise",
"armed",
"armor",
"aroma",
"arose",
"arras",
"array",
"arrow",
"arsed",
"arson",
"artsy",
"ascot",
"aside",
"asked",
"askew",
"aspen",
"aspic",
"assay",
"asset",
"assoc",
"aster",
"astir",
"atilt",
"atlas",
"atoll",
"atone",
"atria",
"attar",
"attic",
"audio",
"audit",
"auger",
"aught",
"augur",
"aural",
"auxin",
"avail",
"avast",
"avert",
"avian",
"avoid",
"await",
"awake",
"award",
"aware",
"awash",
"awful",
"awoke",
"axial",
"axiom",
"ayahs",
"azure",
"babel",
"baccy",
"bacon",
"badge",
"bagel",
"baggy",
"bairn",
"baize",
"baked",
"baker",
"baldy",
"baler",
"balky",
"balls",
"bally",
"balmy",
"balsa",
"banal",
"bandy",
"banjo",
"banns",
"barge",
"barmy",
"baron",
"barre",
"basal",
"baser",
"basic",
"basil",
"basin",
"basis",
"basso",
"baste",
"batch",
"bathe",
"baths",
"batik",
"baton",
"batty",
"bawdy",
"bayou",
"beach",
"beady",
"beard",
"beast",
"beaut",
"bebop",
"bedim",
"beech",
"beefy",
"beery",
"befit",
"befog",
"began",
"begat",
"beget",
"begin",
"begot",
"begum",
"begun",
"beige",
"being",
"belay",
"belch",
"belie",
"belle",
"belly",
"below",
"bench",
"bendy",
"beret",
"berry",
"berth",
"beryl",
"beset",
"besom",
"besot",
"betel",
"bevel",
"bevvy",
"bezel",
"bhaji",
"bible",
"bicep",
"biddy",
"bidet",
"bight",
"bigot",
"bijou",
"biker",
"bilge",
"billy",
"bimbo",
"binge",
"bingo",
"biped",
"birch",
"birth",
"bison",
"bitch",
"biter",
"bitty",
"black",
"blade",
"blahs",
"blame",
"bland",
"blank",
"blare",
"blase",
"blast",
"blaze",
"bleak",
"blear",
"bleat",
"bleed",
"bleep",
"blend",
"bless",
"blimp",
"blind",
"blini",
"blink",
"bliss",
"blitz",
"bloat",
"block",
"bloke",
"blond",
"blood",
"bloom",
"bloop",
"blown",
"blowy",
"bluet",
"bluff",
"blunt",
"blurb",
"blurt",
"blush",
"board",
"boast",
"bobby",
"bodge",
"boffo",
"bogey",
"boggy",
"bogie",
"bogon",
"bogus",
"boink",
"bolus",
"bonce",
"boner",
"bongo",
"bonny",
"bonus",
"booby",
"boost",
"booth",
"booty",
"booze",
"boozy",
"borax",
"borer",
"borne",
"boron",
"bosom",
"bossy",
"botch",
"bough",
"bound",
"bowed",
"bowel",
"bower",
"boxer",
"brace",
"bract",
"braid",
"brain",
"brake",
"brand",
"brash",
"brass",
"brave",
"bravo",
"brawl",
"brawn",
"braze",
"bread",
"break",
"bream",
"breed",
"breve",
"bribe",
"brick",
"bride",
"brief",
"brier",
"brill",
"brine",
"bring",
"brink",
"briny",
"brisk",
"broad",
"broil",
"broke",
"bronc",
"brood",
"brook",
"broom",
"broth",
"brown",
"bruin",
"bruit",
"brunt",
"brush",
"brute",
"buddy",
"budge",
"buggy",
"bugle",
"build",
"built",
"bulge",
"bulgy",
"bulky",
"bully",
"bumph",
"bumpy",
"bunch",
"bunco",
"bunny",
"burbs",
"burgh",
"burka",
"burly",
"burnt",
"burro",
"bursa",
"burst",
"busby",
"bused",
"bushy",
"busty",
"butch",
"butte",
"butty",
"buxom",
"buyer",
"bylaw",
"byway",
"cabal",
"cabby",
"cabin",
"cable",
"cacao",
"cache",
"cacti",
"cadet",
"cadge",
"cadre",
"cagey",
"cairn",
"calla",
"calve",
"calyx",
"camel",
"cameo",
"campy",
"canal",
"candy",
"caner",
"canny",
"canoe",
"canon",
"canst",
"canto",
"caper",
"capon",
"carat",
"carbs",
"carer",
"caret",
"cargo",
"carny",
"carob",
"carol",
"carom",
"carpi",
"carry",
"carve",
"cased",
"caste",
"catch",
"cater",
"catty",
"caulk",
"cause",
"cavil",
"cease",
"cecal",
"cecum",
"cedar",
"ceder",
"celeb",
"cello",
"chafe",
"chaff",
"chain",
"chair",
"chalk",
"champ",
"chant",
"chaos",
"chard",
"charm",
"chart",
"chary",
"chase",
"chasm",
"cheap",
"cheat",
"check",
"cheek",
"cheep",
"cheer",
"chemo",
"chert",
"chess",
"chest",
"chewy",
"chick",
"chide",
"chief",
"child",
"chili",
"chill",
"chime",
"chimp",
"china",
"chine",
"chink",
"chino",
"chirp",
"chive",
"chivy",
"chock",
"choir",
"choke",
"chomp",
"chord",
"chore",
"chose",
"chuck",
"chump",
"chunk",
"churl",
"churn",
"chute",
"chyme",
"cider",
"cigar",
"cilia",
"cinch",
"circa",
"cirri",
"civet",
"civic",
"civil",
"clack",
"clade",
"claim",
"clamp",
"clang",
"clank",
"clash",
"clasp",
"class",
"clean",
"clear",
"cleat",
"cleft",
"clerk",
"click",
"cliff",
"climb",
"clime",
"cling",
"clink",
"cloak",
"clock",
"clomp",
"clone",
"clonk",
"close",
"cloth",
"cloud",
"clout",
"clove",
"clown",
"cluck",
"clump",
"clung",
"clunk",
"clvii",
"clxii",
"clxiv",
"clxix",
"clxvi",
"coach",
"coast",
"cobra",
"cocci",
"cocky",
"cocoa",
"coder",
"codex",
"codon",
"coley",
"colic",
"colon",
"color",
"combo",
"comet",
"comfy",
"comic",
"comma",
"compo",
"conch",
"condo",
"conga",
"conic",
"contd",
"copay",
"copra",
"copse",
"coral",
"corer",
"corgi",
"corny",
"corps",
"couch",
"cough",
"could",
"count",
"coupe",
"court",
"coven",
"cover",
"covet",
"covey",
"cower",
"coypu",
"cozen",
"crack",
"craft",
"cramp",
"crane",
"crank",
"crape",
"craps",
"crash",
"crass",
"crate",
"crave",
"crawl",
"craze",
"crazy",
"creak",
"cream",
"credo",
"creed",
"creek",
"creel",
"creep",
"creme",
"crepe",
"crept",
"cress",
"crest",
"crick",
"crier",
"crime",
"crimp",
"crisp",
"croak",
"crock",
"croft",
"crone",
"crony",
"crook",
"croon",
"cross",
"croup",
"crowd",
"crown",
"crude",
"cruel",
"cruet",
"cruft",
"crumb",
"cruse",
"crush",
"crust",
"crypt",
"cuber",
"cubic",
"cubit",
"cumin",
"cupid",
"cuppa",
"cured",
"curer",
"curia",
"curie",
"curio",
"curly",
"curry",
"curse",
"curve",
"curvy",
"cushy",
"cutey",
"cutie",
"cutup",
"cycle",
"cynic",
"dacha",
"daddy",
"daffy",
"daily",
"dairy",
"daisy",
"dally",
"dance",
"dandy",
"darer",
"dated",
"dater",
"datum",
"daunt",
"davit",
"dazed",
"dding",
"dealt",
"deary",
"death",
"debit",
"debut",
"decaf",
"decal",
"decay",
"decor",
"decoy",
"decry",
"deify",
"deign",
"deist",
"deity",
"delay",
"delft",
"delta",
"delve",
"demon",
"demur",
"denim",
"dense",
"depth",
"derby",
"deter",
"detox",
"deuce",
"devil",
"dhoti",
"diary",
"dices",
"dicey",
"dicta",
"didst",
"digit",
"dildo",
"dilly",
"dinar",
"diner",
"dingo",
"dingy",
"dinky",
"diode",
"dippy",
"dipso",
"dirge",
"dirty",
"disco",
"dishy",
"ditch",
"ditsy",
"ditto",
"ditty",
"divan",
"diver",
"divot",
"divvy",
"dizzy",
"dobro",
"dodge",
"dodgy",
"doggy",
"dogie",
"dogma",
"doily",
"doing",
"dolly",
"dolor",
"donor",
"doper",
"dopey",
"dorky",
"doter",
"dotty",
"doubt",
"dough",
"douse",
"dowdy",
"dowel",
"dower",
"downy",
"dowry",
"dowse",
"doyen",
"dozen",
"draft",
"drain",
"drake",
"drama",
"drank",
"drape",
"drawl",
"drawn",
"dread",
"dream",
"drear",
"dregs",
"dress",
"drier",
"drift",
"drill",
"drink",
"drive",
"droid",
"droll",
"drone",
"drool",
"droop",
"dross",
"drove",
"drown",
"druid",
"drunk",
"drupe",
"dryad",
"dryer",
"ducal",
"ducat",
"duchy",
"ducky",
"dully",
"dumbo",
"dummy",
"dumpy",
"dunce",
"dunno",
"duper",
"duple",
"durst",
"durum",
"dusky",
"dusty",
"dutch",
"duvet",
"dwarf",
"dweeb",
"dwell",
"dwelt",
"dying",
"eager",
"eagle",
"early",
"earth",
"easel",
"eaten",
"eater",
"ebony",
"echos",
"eclat",
"edema",
"edger",
"edict",
"edify",
"educe",
"eerie",
"egret",
"eider",
"eight",
"eject",
"eland",
"elate",
"elbow",
"elder",
"elect",
"elegy",
"elfin",
"elide",
"elite",
"elope",
"elude",
"elver",
"elves",
"email",
"embed",
"ember",
"emcee",
"emend",
"emery",
"emoji",
"emote",
"empty",
"enact",
"endow",
"endue",
"enema",
"enemy",
"enjoy",
"ennui",
"ensue",
"enter",
"entry",
"envoy",
"epoch",
"epoxy",
"equal",
"equip",
"equiv",
"erase",
"erect",
"ergot",
"erode",
"error",
"eruct",
"erupt",
"essay",
"ester",
"ether",
"ethic",
"ethos",
"ethyl",
"etude",
"evade",
"event",
"every",
"evict",
"evoke",
"exact",
"exalt",
"excel",
"exert",
"exile",
"exist",
"expat",
"expel",
"extol",
"extra",
"exude",
"exult",
"exurb",
"fable",
"facet",
"faddy",
"fagot",
"faint",
"fairy",
"faith",
"faker",
"fakir",
"false",
"fancy",
"fanny",
"farad",
"farce",
"fatal",
"fatso",
"fatty",
"fatwa",
"fault",
"fauna",
"favor",
"fazed",
"feast",
"fecal",
"feces",
"feign",
"feint",
"fella",
"felon",
"femur",
"fence",
"feral",
"ferny",
"ferry",
"fetal",
"fetch",
"fetid",
"fetus",
"fever",
"fiber",
"fiche",
"fichu",
"ficus",
"field",
"fiend",
"fiery",
"fifer",
"fifth",
"fifty",
"fight",
"filch",
"filer",
"filet",
"filly",
"filmy",
"filth",
"final",
"finch",
"finis",
"finny",
"firer",
"first",
"firth",
"fishy",
"fitly",
"fixed",
"fixer",
"fizzy",
"fjord",
"flack",
"flail",
"flair",
"flake",
"flaky",
"flame",
"flank",
"flare",
"flash",
"flask",
"fleck",
"fleet",
"flesh",
"flick",
"flier",
"fling",
"flint",
"flirt",
"float",
"flock",
"flood",
"floor",
"flora",
"floss",
"flour",
"flout",
"flown",
"fluff",
"fluid",
"fluke",
"fluky",
"flume",
"flung",
"flunk",
"flush",
"flute",
"flyby",
"foamy",
"focal",
"focus",
"foggy",
"foist",
"folic",
"folio",
"folly",
"footy",
"foray",
"force",
"forge",
"forgo",
"forte",
"forty",
"forum",
"fossa",
"found",
"fount",
"foyer",
"frack",
"frail",
"frame",
"franc",
"frank",
"fraud",
"freak",
"fresh",
"friar",
"frill",
"frisk",
"fritz",
"frizz",
"frock",
"frond",
"front",
"frosh",
"frost",
"froth",
"frown",
"froze",
"fruit",
"frump",
"fryer",
"fudge",
"fugal",
"fuggy",
"fugue",
"fully",
"fungi",
"funky",
"funny",
"furor",
"furry",
"furze",
"fusee",
"fussy",
"fusty",
"futon",
"fuzzy",
"gabby",
"gable",
"gaffe",
"gaily",
"gamin",
"gamma",
"gammy",
"gamut",
"ganja",
"gassy",
"gator",
"gaudy",
"gauge",
"gaunt",
"gauze",
"gauzy",
"gavel",
"gawky",
"gazer",
"gecko",
"geeky",
"geese",
"gelid",
"genes",
"genie",
"genii",
"genre",
"genus",
"geode",
"getup",
"ghost",
"ghoul",
"giant",
"giddy",
"gimme",
"gimpy",
"girly",
"girth",
"given",
"giver",
"gizmo",
"glace",
"glade",
"gland",
"glans",
"glare",
"glass",
"glaze",
"gleam",
"glean",
"glide",
"glint",
"glitz",
"gloat",
"globe",
"gloom",
"glory",
"gloss",
"glove",
"glued",
"gluey",
"gluon",
"glyph",
"gnarl",
"gnash",
"gnome",
"godly",
"gofer",
"going",
"golly",
"gonad",
"goner",
"gonna",
"gonzo",
"goods",
"goody",
"gooey",
"goofy",
"goose",
"gorge",
"gorse",
"goths",
"gotta",
"gouge",
"gourd",
"gouty",
"grace",
"grade",
"graft",
"grail",
"grain",
"grand",
"grant",
"grape",
"graph",
"grasp",
"grass",
"grate",
"grave",
"gravy",
"graze",
"great",
"grebe",
"greed",
"green",
"greet",
"grief",
"grill",
"grime",
"grimy",
"grind",
"gripe",
"grist",
"grits",
"groan",
"groat",
"groin",
"groom",
"grope",
"gross",
"group",
"grout",
"grove",
"growl",
"grown",
"gruel",
"gruff",
"grump",
"grunt",
"guano",
"guard",
"guava",
"guess",
"guest",
"guide",
"guild",
"guile",
"guilt",
"guise",
"gulag",
"gulch",
"gully",
"gumbo",
"gummy",
"gunge",
"gungy",
"gunky",
"gunny",
"guppy",
"gushy",
"gussy",
"gusto",
"gusty",
"gutsy",
"gutty",
"gypsy",
"habit",
"hadst",
"haiku",
"hairy",
"hajji",
"halal",
"halon",
"halve",
"hammy",
"handy",
"happy",
"hardy",
"harem",
"harpy",
"harry",
"harsh",
"haste",
"hasty",
"hatch",
"hater",
"haunt",
"haven",
"havoc",
"hazel",
"hazer",
"hdqrs",
"heady",
"heard",
"heart",
"heath",
"heave",
"heavy",
"hedge",
"hefty",
"heist",
"helix",
"hello",
"helot",
"helve",
"hence",
"henna",
"heron",
"hertz",
"hewer",
"hider",
"highs",
"hijab",
"hiker",
"hilly",
"hinge",
"hippo",
"hippy",
"hitch",
"hoard",
"hoary",
"hobby",
"hogan",
"hoick",
"hoist",
"hokey",
"hokum",
"holey",
"holly",
"homer",
"homey",
"honer",
"honey",
"honky",
"honor",
"hooch",
"hooey",
"hooky",
"horde",
"horny",
"horse",
"hotel",
"hound",
"houri",
"house",
"hovel",
"hover",
"howdy",
"hubby",
"huffy",
"human",
"humid",
"humor",
"humph",
"humus",
"hunch",
"hunky",
"hurry",
"husky",
"hussy",
"hutch",
"hydra",
"hydro",
"hyena",
"hying",
"hymen",
"iambi",
"icily",
"icing",
"ictus",
"ideal",
"idiom",
"idiot",
"idler",
"idyll",
"igloo",
"ileum",
"ilium",
"illus",
"image",
"imago",
"imbue",
"impel",
"imply",
"inane",
"inbox",
"incur",
"index",
"indie",
"inept",
"inert",
"infix",
"infra",
"ingot",
"innit",
"instr",
"intel",
"inter",
"intro",
"inure",
"ioctl",
"ionic",
"irate",
"irony",
"islet",
"issue",
"itchy",
"ivory",
"jabot",
"jaded",
"jammy",
"japan",
"jaunt",
"jazzy",
"jeans",
"jello",
"jelly",
"jemmy",
"jenny",
"jerky",
"jetty",
"jewel",
"jiffy",
"jihad",
"jimmy",
"jinni",
"joint",
"joist",
"joker",
"jokey",
"jolly",
"joule",
"joust",
"jowly",
"judge",
"juice",
"juicy",
"julep",
"jumbo",
"jumpy",
"junco",
"junta",
"juror",
"kanji",
"kapok",
"kappa",
"kaput",
"karat",
"karma",
"kayak",
"kazoo",
"kebab",
"ketch",
"khaki",
"kicky",
"kiddo",
"kinda",
"kinds",
"kinky",
"kiosk",
"kitty",
"kluge",
"klutz",
"knack",
"knave",
"knead",
"kneel",
"knell",
"knelt",
"knife",
"knish",
"knock",
"knoll",
"known",
"knurl",
"koala",
"kooky",
"korma",
"kraal",
"kraut",
"krill",
"krona",
"krone",
"kudos",
"kudzu",
"label",
"labia",
"labor",
"laden",
"ladle",
"lager",
"laird",
"laity",
"lanai",
"lance",
"lanky",
"lapel",
"lapin",
"lapse",
"larch",
"lardy",
"large",
"largo",
"larva",
"laser",
"lasso",
"latch",
"latex",
"lathe",
"laths",
"latte",
"laugh",
"layer",
"layup",
"leach",
"leafy",
"leaky",
"leapt",
"learn",
"lease",
"leash",
"least",
"leave",
"ledge",
"leech",
"leery",
"lefty",
"legal",
"leggy",
"legit",
"lemma",
"lemme",
"lemon",
"lemur",
"lento",
"leper",
"lepta",
"letup",
"levee",
"level",
"lever",
"lexer",
"lexis",
"libel",
"licit",
"liege",
"lifer",
"light",
"liken",
"liker",
"lilac",
"limbo",
"limey",
"limit",
"lined",
"linen",
"liner",
"lingo",
"lints",
"linty",
"lipid",
"lippy",
"lisle",
"liter",
"lithe",
"liven",
"liver",
"livid",
"llama",
"llano",
"loamy",
"loath",
"lobar",
"lobby",
"local",
"locum",
"locus",
"lodge",
"lofty",
"logic",
"login",
"logon",
"lolly",
"loner",
"loony",
"loopy",
"loose",
"loris",
"lorry",
"loser",
"lotto",
"lotus",
"lough",
"louse",
"lousy",
"loved",
"lover",
"lovey",
"lower",
"lowly",
"loyal",
"lucid",
"lucky",
"lucre",
"lumen",
"lumpy",
"lunar",
"lunch",
"lunge",
"lupus",
"lurch",
"lurgy",
"lurid",
"lusty",
"lxvii",
"lying",
"lymph",
"lynch",
"lyric",
"macaw",
"macho",
"macro",
"madam",
"mafia",
"magic",
"magma",
"magus",
"maize",
"major",
"maker",
"malty",
"mamba",
"mambo",
"mamma",
"mammy",
"manga",
"mange",
"mango",
"mangy",
"mania",
"manic",
"manky",
"manly",
"manna",
"manor",
"manse",
"manta",
"maple",
"march",
"marge",
"maria",
"marry",
"marsh",
"maser",
"mason",
"match",
"matey",
"matte",
"matzo",
"mauve",
"maven",
"maxim",
"maybe",
"mayor",
"mayst",
"mealy",
"meant",
"meany",
"meaty",
"mecca",
"medal",
"media",
"medic",
"melee",
"melon",
"mercy",
"merge",
"merit",
"merry",
"meson",
"messy",
"metal",
"meter",
"meths",
"metro",
"mezzo",
"micro",
"middy",
"midge",
"midst",
"might",
"milch",
"miler",
"milky",
"mimic",
"mince",
"miner",
"mingy",
"minim",
"minor",
"minty",
"minus",
"mirth",
"misdo",
"miser",
"misty",
"miter",
"mixed",
"mixer",
"mocha",
"modal",
"model",
"modem",
"moggy",
"mogul",
"moire",
"moist",
"molar",
"moldy",
"molly",
"mommy",
"monad",
"money",
"month",
"mooch",
"moody",
"moose",
"moped",
"moper",
"mopey",
"moral",
"moray",
"morel",
"mores",
"moron",
"morph",
"mosey",
"mossy",
"motel",
"motet",
"moths",
"motif",
"motor",
"motto",
"mound",
"mount",
"mourn",
"mouse",
"mousy",
"mouth",
"moved",
"mover",
"movie",
"mower",
"moxie",
"mucky",
"mucus",
"muddy",
"mufti",
"muggy",
"mulch",
"mulct",
"multi",
"mummy",
"mumps",
"munch",
"mural",
"murky",
"mushy",
"music",
"musky",
"mussy",
"musty",
"muzak",
"muzzy",
"myrrh",
"myths",
"nabob",
"nacho",
"nacre",
"nadir",
"naiad",
"naive",
"naked",
"named",
"nanny",
"nappy",
"narky",
"nasal",
"nasty",
"natal",
"natch",
"natty",
"naval",
"navel",
"navvy",
"neath",
"needy",
"negro",
"neigh",
"nerdy",
"nerve",
"nervy",
"never",
"nevus",
"newel",
"newsy",
"nexus",
"niche",
"niece",
"niffy",
"nifty",
"nigga",
"night",
"nimbi",
"nimby",
"ninja",
"ninny",
"ninth",
"nippy",
"nisei",
"niter",
"nitro",
"noble",
"nodal",
"noddy",
"nohow",
"noise",
"noisy",
"nomad",
"nonce",
"nooky",
"noose",
"north",
"notch",
"novae",
"novel",
"noway",
"nubby",
"nudge",
"nurse",
"nutty",
"nylon",
"nymph",
"oakum",
"oases",
"oasis",
"oaths",
"obese",
"occur",
"ocean",
"ocher",
"ocker",
"octal",
"octet",
"odium",
"offal",
"offer",
"often",
"ogler",
"okapi",
"oldie",
"olive",
"omega",
"onion",
"onset",
"oomph",
"opera",
"opine",
"opium",
"optic",
"orate",
"orbit",
"order",
"organ",
"oriel",
"orris",
"osier",
"other",
"otter",
"ought",
"ounce",
"outdo",
"outgo",
"outre",
"outta",
"ovary",
"ovate",
"overt",
"ovoid",
"ovule",
"owlet",
"owner",
"oxbow",
"oxide",
"ozone",
"pacer",
"pacey",
"paddy",
"padre",
"paean",
"pagan",
"pager",
"paint",
"paleo",
"palmy",
"palsy",
"panda",
"panel",
"panes",
"panic",
"pansy",
"panto",
"papal",
"paper",
"pappy",
"parch",
"parer",
"pares",
"parka",
"parky",
"parry",
"parse",
"party",
"pasha",
"passe",
"pasta",
"paste",
"pasty",
"patch",
"paths",
"patio",
"patsy",
"patty",
"pause",
"paved",
"payed",
"payee",
"payer",
"peace",
"peach",
"peaky",
"pearl",
"peaty",
"pecan",
"pedal",
"peeve",
"pekoe",
"penal",
"pence",
"penis",
"penny",
"peony",
"peppy",
"perch",
"peril",
"perky",
"pesky",
"pesto",
"petal",
"peter",
"petty",
"pewee",
"pewit",
"phage",
"phase",
"phial",
"phish",
"phlox",
"phone",
"phony",
"photo",
"phyla",
"piano",
"picky",
"picot",
"piece",
"piety",
"piggy",
"piker",
"pilaf",
"pilot",
"pinch",
"piney",
"pinko",
"pinny",
"pinon",
"pinto",
"pinup",
"pious",
"piper",
"pipit",
"pique",
"piste",
"pitch",
"pithy",
"piton",
"pitta",
"pivot",
"pixel",
"pixie",
"pizza",
"place",
"plaid",
"plain",
"plait",
"plane",
"plank",
"plant",
"plash",
"plate",
"platy",
"plaza",
"plead",
"pleat",
"plebe",
"plonk",
"pluck",
"plumb",
"plume",
"plump",
"plumy",
"plunk",
"plush",
"poach",
"poesy",
"point",
"poise",
"poker",
"pokey",
"polar",
"polio",
"polka",
"polyp",
"polys",
"pommy",
"ponce",
"poncy",
"pooch",
"poohs",
"poppa",
"poppy",
"popup",
"porch",
"porgy",
"porky",
"porno",
"poser",
"posit",
"posse",
"potty",
"pouch",
"pound",
"power",
"prang",
"prank",
"prate",
"prawn",
"preen",
"press",
"price",
"prick",
"pride",
"prier",
"prime",
"primp",
"print",
"prion",
"prior",
"prism",
"privy",
"prize",
"probe",
"prole",
"promo",
"prone",
"prong",
"proof",
"prose",
"prosy",
"proud",
"prove",
"prowl",
"proxy",
"prude",
"prune",
"psalm",
"pseud",
"pshaw",
"psych",
"pubes",
"pubic",
"pubis",
"pudgy",
"puffy",
"pukka",
"pulpy",
"pulse",
"punch",
"pupae",
"pupal",
"pupil",
"puppy",
"puree",
"purge",
"purse",
"pushy",
"pussy",
"putty",
"pygmy",
"pylon",
"pzazz",
"quack",
"quaff",
"quail",
"quake",
"quaky",
"qualm",
"quark",
"quart",
"quash",
"quasi",
"queen",
"queer",
"quell",
"query",
"quest",
"queue",
"quick",
"quiet",
"quiff",
"quill",
"quilt",
"quine",
"quint",
"quire",
"quirk",
"quirt",
"quite",
"quoin",
"quoit",
"quota",
"quote",
"rabbi",
"rabid",
"racer",
"radar",
"radii",
"radio",
"radon",
"ragga",
"rainy",
"raise",
"rajah",
"rally",
"ramie",
"ranch",
"randy",
"ranee",
"range",
"rangy",
"raper",
"rapid",
"raspy",
"rated",
"rater",
"ratio",
"ratty",
"ravel",
"raven",
"rayon",
"razor",
"reach",
"react",
"ready",
"realm",
"rebel",
"rebid",
"recap",
"recce",
"recon",
"recto",
"recur",
"redye",
"reedy",
"reeve",
"refer",
"regal",
"regex",
"rehab",
"reify",
"reign",
"relax",
"relay",
"relic",
"remit",
"remix",
"renal",
"renew",
"reorg",
"repel",
"resat",
"resit",
"retch",
"retro",
"revel",
"revue",
"rheum",
"rhino",
"rhyme",
"ricer",
"rider",
"ridge",
"ridgy",
"rifle",
"right",
"rigid",
"rigor",
"rinse",
"ripen",
"risen",
"riser",
"risky",
"ritzy",
"rival",
"river",
"rivet",
"riyal",
"roach",
"roast",
"robin",
"robot",
"rocky",
"rodeo",
"roger",
"rogue",
"roman",
"romeo",
"rondo",
"roomy",
"roost",
"roper",
"rosin",
"rotor",
"rouge",
"rough",
"round",
"rouse",
"roust",
"route",
"rover",
"rowan",
"rowdy",
"rowel",
"rower",
"royal",
"ruble",
"ruddy",
"rugby",
"ruler",
"rumba",
"rummy",
"rumor",
"runic",
"runny",
"runty",
"rupee",
"rural",
"rushy",
"rusty",
"rutty",
"saber",
"sable",
"sabot",
"sabra",
"sacra",
"sades",
"sadhu",
"saggy",
"sahib",
"saint",
"saith",
"salad",
"sally",
"salon",
"salsa",
"salty",
"salve",
"salvo",
"samba",
"samey",
"sandy",
"sappy",
"saran",
"sarge",
"sarky",
"sassy",
"satay",
"satin",
"satyr",
"sauce",
"saucy",
"sauna",
"saute",
"saved",
"saver",
"savor",
"savoy",
"savvy",
"scald",
"scale",
"scalp",
"scaly",
"scamp",
"scant",
"scare",
"scarf",
"scarp",
"scary",
"scene",
"scent",
"schmo",
"schwa",
"scion",
"scoff",
"scold",
"scone",
"scoop",
"scoot",
"scope",
"score",
"scorn",
"scour",
"scout",
"scowl",
"scrag",
"scram",
"scrap",
"scree",
"screw",
"scrim",
"scrip",
"scrod",
"scrog",
"scrub",
"scrum",
"scuba",
"scuff",
"scull",
"scurf",
"seamy",
"sebum",
"sedan",
"sedge",
"sedgy",
"seedy",
"segue",
"seine",
"seize",
"semen",
"senna",
"senor",
"sense",
"sepal",
"sepia",
"septa",
"serge",
"serif",
"serum",
"serve",
"servo",
"setup",
"seven",
"sever",
"sewer",
"shack",
"shade",
"shady",
"shaft",
"shahs",
"shake",
"shaky",
"shale",
"shall",
"shalt",
"shame",
"shank",
"shape",
"shard",
"share",
"shark",
"sharp",
"shave",
"shawl",
"sheaf",
"shear",
"sheen",
"sheep",
"sheer",
"sheet",
"shelf",
"shell",
"shewn",
"shift",
"shill",
"shine",
"shiny",
"shire",
"shirk",
"shirr",
"shirt",
"shoal",
"shoat",
"shock",
"shone",
"shook",
"shoot",
"shore",
"short",
"shout",
"shove",
"shown",
"showy",
"shred",
"shrew",
"shrub",
"shrug",
"shuck",
"shunt",
"shush",
"shyer",
"sibyl",
"sicko",
"sidle",
"siege",
"sieve",
"sighs",
"sight",
"sigma",
"silky",
"silly",
"silty",
"since",
"sinew",
"singe",
"sinus",
"siren",
"sisal",
"sissy",
"sitar",
"sixth",
"sixty",
"sizer",
"skate",
"skeet",
"skein",
"skier",
"skiff",
"skill",
"skimp",
"skint",
"skirt",
"skive",
"skoal",
"skulk",
"skull",
"skunk",
"slack",
"slain",
"slake",
"slang",
"slant",
"slash",
"slate",
"slave",
"sleek",
"sleep",
"sleet",
"slept",
"slice",
"slick",
"slide",
"slime",
"slimy",
"sling",
"slink",
"sloop",
"slope",
"slops",
"slosh",
"sloth",
"slump",
"slung",
"slunk",
"slurp",
"slush",
"smack",
"small",
"smart",
"smash",
"smear",
"smell",
"smelt",
"smile",
"smirk",
"smite",
"smith",
"smock",
"smoke",
"smoky",
"smote",
"smurf",
"snack",
"snafu",
"snail",
"snake",
"snaky",
"snare",
"snarf",
"snark",
"snarl",
"sneak",
"sneer",
"snick",
"snide",
"sniff",
"snipe",
"snips",
"snood",
"snoop",
"snoot",
"snore",
"snort",
"snout",
"snowy",
"snuff",
"soapy",
"sober",
"softy",
"soggy",
"solar",
"solid",
"solve",
"sonar",
"sonic",
"sonny",
"sooth",
"sooty",
"soppy",
"sorry",
"sorta",
"sough",
"sound",
"soupy",
"souse",
"south",
"sower",
"space",
"spade",
"spake",
"spank",
"spare",
"spark",
"spasm",
"spate",
"spawn",
"speak",
"spear",
"speck",
"specs",
"speed",
"spell",
"spend",
"spent",
"sperm",
"spice",
"spicy",
"spiel",
"spiff",
"spike",
"spiky",
"spill",
"spine",
"spiny",
"spire",
"spiry",
"spite",
"splat",
"splay",
"split",
"spoil",
"spoke",
"spoof",
"spook",
"spool",
"spoon",
"spoor",
"spore",
"sport",
"spout",
"sprat",
"spray",
"spree",
"sprig",
"sprog",
"spume",
"spumy",
"spunk",
"spurn",
"spurt",
"sputa",
"squab",
"squad",
"squat",
"squaw",
"squib",
"squid",
"stack",
"staff",
"stage",
"stagy",
"staid",
"stain",
"stair",
"stake",
"stale",
"stalk",
"stall",
"stamp",
"stand",
"stank",
"staph",
"stare",
"stark",
"start",
"stash",
"state",
"stave",
"stdio",
"stead",
"steak",
"steal",
"steam",
"steed",
"steel",
"steep",
"steer",
"stein",
"steno",
"stent",
"stern",
"stick",
"stiff",
"stile",
"still",
"stilt",
"sting",
"stink",
"stint",
"stoat",
"stock",
"stoic",
"stoke",
"stole",
"stomp",
"stone",
"stony",
"stood",
"stool",
"stoop",
"store",
"stork",
"storm",
"story",
"stoup",
"stout",
"stove",
"strap",
"straw",
"stray",
"strep",
"strew",
"stria",
"strip",
"strop",
"strum",
"strut",
"stuck",
"study",
"stuff",
"stump",
"stung",
"stunk",
"stunt",
"style",
"styli",
"suave",
"sudsy",
"suede",
"suety",
"sugar",
"suite",
"sulfa",
"sulky",
"sully",
"sumac",
"sunny",
"sunup",
"super",
"suppl",
"supra",
"surge",
"surly",
"sushi",
"swain",
"swami",
"swamp",
"swank",
"sward",
"swarm",
"swash",
"swath",
"swear",
"sweat",
"swede",
"sweep",
"sweet",
"swell",
"swept",
"swift",
"swill",
"swine",
"swing",
"swipe",
"swirl",
"swish",
"swizz",
"swoon",
"swoop",
"sword",
"swore",
"sworn",
"swung",
"sylph",
"synod",
"syrup",
"sysop",
"tabby",
"tabla",
"table",
"taboo",
"tabor",
"tacit",
"tacky",
"taffy",
"taiga",
"taint",
"taken",
"taker",
"talky",
"tally",
"talon",
"talus",
"tamed",
"tamer",
"tango",
"tangy",
"tansy",
"tapas",
"taper",
"tapir",
"tardy",
"tarot",
"tarry",
"tarsi",
"tarty",
"taser",
"taste",
"tasty",
"tater",
"tatty",
"taunt",
"taupe",
"tawny",
"taxer",
"taxon",
"teach",
"teary",
"tease",
"techs",
"teddy",
"teeny",
"telly",
"tempo",
"tempt",
"tench",
"tenet",
"tenon",
"tenor",
"tense",
"tenth",
"tepee",
"tepid",
"terry",
"terse",
"testy",
"tetra",
"thane",
"thank",
"theft",
"their",
"theme",
"there",
"therm",
"these",
"theta",
"thick",
"thief",
"thigh",
"thine",
"thing",
"think",
"third",
"thole",
"thong",
"thorn",
"those",
"three",
"threw",
"throb",
"throe",
"throw",
"thrum",
"thumb",
"thump",
"thunk",
"thyme",
"tiara",
"tibia",
"tidal",
"tiger",
"tight",
"tilde",
"tiler",
"timer",
"timid",
"tinge",
"tinny",
"tipsy",
"tired",
"titan",
"titch",
"tithe",
"title",
"titty",
"tizzy",
"toady",
"toast",
"today",
"toddy",
"token",
"tonal",
"toner",
"tonic",
"tonne",
"tooth",
"topaz",
"topee",
"topic",
"toque",
"torch",
"torso",
"torte",
"torus",
"total",
"totem",
"touch",
"tough",
"towel",
"tower",
"toxic",
"toxin",
"trace",
"track",
"tract",
"trade",
"trail",
"train",
"trait",
"tramp",
"trans",
"trash",
"trawl",
"tread",
"treas",
"treat",
"trend",
"tress",
"trews",
"triad",
"trial",
"tribe",
"trice",
"trick",
"tried",
"trier",
"trike",
"trill",
"tripe",
"trite",
"troll",
"tromp",
"troop",
"trope",
"troth",
"trout",
"trove",
"truce",
"truck",
"truly",
"trump",
"trunk",
"truss",
"trust",
"truth",
"tryst",
"tubal",
"tubby",
"tuber",
"tulip",
"tulle",
"tumid",
"tummy",
"tumor",
"tuner",
"tunic",
"tunny",
"tuple",
"tuque",
"turbo",
"turfy",
"turps",
"tutor",
"tutti",
"twain",
"twang",
"tweak",
"tweed",
"tween",
"tweet",
"twerk",
"twerp",
"twice",
"twill",
"twine",
"twink",
"twirl",
"twist",
"twixt",
"tying",
"udder",
"ukase",
"ulcer",
"ulnae",
"ulnar",
"ultra",
"umbel",
"umber",
"umbra",
"umiak",
"unary",
"unbid",
"unbox",
"uncap",
"uncle",
"uncut",
"under",
"undue",
"unfed",
"unfit",
"unfix",
"unify",
"union",
"unite",
"unity",
"unlit",
"unmet",
"unpin",
"unset",
"until",
"unwed",
"upend",
"upped",
"upper",
"upset",
"urban",
"urine",
"usage",
"usher",
"usual",
"usurp",
"usury",
"uteri",
"utter",
"uvula",
"vague",
"vagus",
"valet",
"valid",
"valor",
"value",
"valve",
"vapid",
"vapor",
"vault",
"vaunt",
"vegan",
"veges",
"velar",
"velum",
"venal",
"venom",
"venue",
"verge",
"versa",
"verse",
"verso",
"verve",
"vetch",
"viand",
"vibes",
"vicar",
"viced",
"video",
"vigil",
"vigor",
"villa",
"villi",
"vinyl",
"viola",
"viper",
"viral",
"vireo",
"virus",
"visit",
"visor",
"vista",
"vitae",
"vital",
"vivid",
"vixen",
"vocab",
"vocal",
"vodka",
"vogue",
"voice",
"voila",
"voile",
"vomit",
"voter",
"vouch",
"vowel",
"vulva",
"vying",
"wacko",
"wacky",
"wader",
"wadge",
"wafer",
"waged",
"wager",
"wagon",
"waist",
"waive",
"waken",
"waldo",
"wally",
"waltz",
"wanna",
"warez",
"warty",
"washy",
"waste",
"watch",
"water",
"waver",
"wazoo",
"weary",
"weave",
"wedge",
"weedy",
"weeny",
"weepy",
"weigh",
"weird",
"welly",
"welsh",
"wench",
"whack",
"whale",
"wharf",
"wheal",
"wheat",
"wheel",
"whelk",
"whelm",
"whelp",
"where",
"which",
"whiff",
"while",
"whine",
"whiny",
"whirl",
"whisk",
"whist",
"white",
"whole",
"whoop",
"whore",
"whorl",
"whose",
"whoso",
"widen",
"widow",
"width",
"wield",
"wight",
"wilds",
"willy",
"wimpy",
"wince",
"winch",
"windy",
"wiper",
"wired",
"wispy",
"witch",
"withe",
"witty",
"wodge",
"woman",
"women",
"wonky",
"woods",
"woody",
"wooer",
"woozy",
"wordy",
"works",
"world",
"wormy",
"worry",
"worse",
"worst",
"worth",
"would",
"wound",
"woven",
"wrack",
"wrath",
"wreak",
"wreck",
"wrest",
"wring",
"wrist",
"write",
"wrong",
"wrote",
"wroth",
"wrung",
"wryer",
"wurst",
"wussy",
"xenon",
"xerox",
"xylem",
"yacht",
"yahoo",
"yeahs",
"yearn",
"yeast",
"yield",
"yikes",
"yobbo",
"yodel",
"yogic",
"yokel",
"yonks",
"young",
"youth",
"yucca",
"yucky",
"yukky",
"yummy",
"zappy",
"zebra",
"zilch",
"zingy",
"zippy",
]

const inputs = [];
const results = [];

let solutionWord = '';




function GenerateSoluton() {
    solutionWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    solutionWord = solutionWord.toUpperCase();
}

function validate(word) {
    word = word.toUpperCase();
    solutionWord = solutionWord.toUpperCase();
    inputs.push(word);
    let result = ""
    for (let i = 0; i<lengthOfWord; i++) {
        if (word[i] == solutionWord[i]) {
            result += "+"
        }
        else if (solutionWord.includes(word[i])) {
            result += "x"
        }
        else {
            result += "-"
        }
    }
    results.push(result);
    guessInput.value = "";
    refreshGame();
    console.log(word,result,solutionWord);
}

function refreshGame() {
    if (results[results.length - 1] == "+".repeat(lengthOfWord)) {
        resultsBox.innerHTML = `<h1> You won! </h1> <br> <button onClick="window.location.reload();">Replay</button>`
    }
    else {
        if (inputs.length == guesses) {
            resultsBox.innerHTML = `<h1> You lost :( The word was ${solutionWord} </h1> <br> <button onClick="window.location.reload();">Replay</button>`
        }
    }
  const cells = gameBoard.getElementsByClassName('cell');
    for (let i = 0; i < lengthOfWord*guesses; i++) { // 6 attempts, 5 letters each
        let cell = cells[i];
        let y = Math.floor(i / lengthOfWord);
        let x = i - y * lengthOfWord;
      if(inputs.length > y && inputs[y][x]) {
        const result = results[y][x] === "+" ? "correct" : results[y][x] === "x" ? "semi-correct" : "incorrect";
        cell.textContent = inputs[y][x].toUpperCase();
        cell.classList.add(result);
      }
    }
}

function initializeGame() {
    GenerateSoluton();
    for (let i = 0; i < lengthOfWord*guesses; i++) { // 6 attempts, 5 letters each
        let cell = document.createElement('div');
        cell.classList.add('cell');
        let y = Math.floor(i / lengthOfWord);
        let x = i - y * lengthOfWord;
      if(inputs.length > y && inputs[y][x]) {
        const result = results[y][x] === "+" ? "correct" : results[y][x] === "x" ? "semi-correct" : "incorrect";
        cell.textContent = inputs[y][x].toUpperCase();
        cell.classList.add(result);
      }
        gameBoard.appendChild(cell);
    }
}

guessButton.addEventListener('click', function() {
    let guess = guessInput.value.toLowerCase();
    if (guess.length === lengthOfWord) {
        validate(guess)
    } else {
        alert(`Please enter a ${lengthOfWord}-letter word.`);
    }
});

initializeGame();
