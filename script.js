// ---------- SUBJECT LIST (add new subjects here) ----------
const subjectsList = [
    { key: 'bible',       icon: '📖', label: 'Bible Knowledge', desc: 'Biblical history and teachings' },
    { key: 'physics',     icon: '⚛️', label: 'Physics',         desc: 'Physics - Form 1-4' },
    { key: 'mathematics', icon: '🔢', label: 'Mathematics',     desc: 'Mathematics - Form 1-4' },
    { key: 'chemistry',   icon: '🧪', label: 'Chemistry',       desc: 'Chemistry - Form 1-4' },
    { key: 'biology',     icon: '🧬', label: 'Biology',         desc: 'Biology - Form 1-4' },
    { key: 'geography',   icon: '🌍', label: 'Geography',       desc: 'Geography - Form 1-4' },
    { key: 'history',     icon: '🏛️', label: 'History',         desc: 'World and Tanzanian history' },
    { key: 'civics',      icon: '⚖️', label: 'Civics',          desc: 'Civic education' },
    { key: 'english',     icon: '🔤', label: 'English',         desc: 'Grammar and vocabulary' },
    { key: 'kiswahili',   icon: '🗣️', label: 'Kiswahili',       desc: 'Sarufi na fasihi' },
    { key: 'bookkeeping', icon: '📒', label: 'Book Keeping',    desc: 'Basic accounting' },
    { key: 'business',    icon: '📊', label: 'Business Studies', desc: 'Basic business concepts' },
    { key: 'computer',    icon: '💻', label: 'Computer',        desc: 'Networks, Excel, Word, PowerPoint and software basics' },
    { key: 'tanzania',    icon: '🇹🇿', label: 'Historia ya Tanzania', desc: 'Historia, utambulisho na maendeleo ya taifa' }
];

// Target bank size per subject and per level pool.
const TARGET_PER_SUBJECT = 500;
const BATCH_SIZE = 10;
const LEVEL_POOL_TARGETS = {
    easy: 180,
    normal: 210,
    hard: 240
};

const SUBJECT_DIFFICULTY_HINTS = {
    bible: {
        easy: ['god', 'adam', 'eve', 'noah', 'jesus', 'mary', 'birth', 'river', 'house', 'family'],
        medium: ['commandment', 'disciples', 'prophet', 'flood', 'kingdom', 'faith', 'meal', 'sin', 'promise', 'covenant'],
        hard: ['revelation', 'parable', 'resurrection', 'salvation', 'judgment', 'righteousness', 'miracle', 'discipleship', 'redemption', 'eternal']
    },
    physics: {
        easy: ['force', 'speed', 'energy', 'light', 'mass', 'motion', 'current', 'heat', 'lens', 'sound'],
        medium: ['velocity', 'pressure', 'refraction', 'battery', 'resistance', 'gravity', 'momentum', 'frequency', 'circuit', 'power'],
        hard: ['equilibrium', 'torque', 'wave', 'induction', 'mechanics', 'thermodynamics', 'electromagnetic', 'calibration', 'capacitance', 'spectra']
    },
    mathematics: {
        easy: ['add', 'subtract', 'sum', 'multiply', 'divide', 'number', 'fraction', 'square', 'triangle', 'circle'],
        medium: ['equation', 'percentage', 'ratio', 'sequence', 'factor', 'algebra', 'angles', 'perimeter', 'area', 'average'],
        hard: ['polynomial', 'vector', 'theorem', 'derivative', 'integral', 'proof', 'simultaneous', 'probability', 'quadratic', 'logarithm']
    },
    chemistry: {
        easy: ['water', 'oxygen', 'acid', 'atom', 'gas', 'metal', 'salt', 'heat', 'mix', 'liquid'],
        medium: ['reaction', 'bond', 'molecule', 'element', 'solution', 'ph', 'neutral', 'electron', 'compound', 'formula'],
        hard: ['electrolysis', 'stoichiometry', 'equilibrium', 'oxidation', 'catalyst', 'enthalpy', 'isotope', 'molarity', 'synthesis', 'kinetics']
    },
    biology: {
        easy: ['cell', 'plant', 'blood', 'heart', 'food', 'skin', 'body', 'root', 'leaf', 'virus'],
        medium: ['photosynthesis', 'respiration', 'organ', 'tissue', 'nutrient', 'reproduction', 'immune', 'genetic', 'enzyme', 'system'],
        hard: ['metabolism', 'mitosis', 'meiosis', 'evolution', 'ecosystem', 'homeostasis', 'chromosome', 'genotype', 'hormone', 'microbe']
    },
    geography: {
        easy: ['map', 'water', 'river', 'country', 'city', 'ocean', 'mountain', 'desert', 'weather', 'soil'],
        medium: ['continent', 'plateau', 'climate', 'latitude', 'longitude', 'erosion', 'volcano', 'rainfall', 'boundary', 'plain'],
        hard: ['topography', 'ecosystem', 'tectonic', 'sedimentary', 'atmosphere', 'hydrology', 'biome', 'geology', 'isotherm', 'conservation']
    },
    history: {
        easy: ['independence', 'leader', 'war', 'king', 'empire', 'colonial', 'nation', 'revolution', 'union', 'school'],
        medium: ['treaty', 'policy', 'democracy', 'rivalry', 'society', 'trade', 'civilization', 'rebellion', 'government', 'empire'],
        hard: ['diplomacy', 'colonization', 'federation', 'industrialization', 'liberation', 'legislation', 'ideology', 'imperialism', 'decolonization', 'sovereignty']
    },
    civics: {
        easy: ['rights', 'law', 'vote', 'citizen', 'leader', 'school', 'town', 'state', 'people', 'court'],
        medium: ['constitution', 'democracy', 'government', 'election', 'justice', 'freedom', 'responsibility', 'accountability', 'policy', 'power'],
        hard: ['sovereignty', 'legitimacy', 'representation', 'governance', 'jurisdiction', 'separation', 'liberalism', 'participation', 'federalism', 'transparency']
    },
    english: {
        easy: ['noun', 'verb', 'word', 'sentence', 'book', 'girl', 'boy', 'sound', 'letter', 'story'],
        medium: ['adjective', 'preposition', 'plural', 'tenses', 'synonym', 'antonym', 'grammar', 'punctuation', 'phrase', 'clause'],
        hard: ['syllable', 'modal', 'conjunction', 'subordinate', 'cohesion', 'narrative', 'rhetoric', 'syntax', 'semantics', 'vocabulary']
    },
    kiswahili: {
        easy: ['mtoto', 'kitabu', 'kibanda', 'siku', 'mti', 'kubwa', 'ndogo', 'sauti', 'jina', 'mji'],
        medium: ['methali', 'nomino', 'kitenzi', 'kihusishi', 'kivumishi', 'sentensi', 'ngeli', 'kivumishi', 'nahau', 'kitenzi'],
        hard: ['matamshi', 'silabi', 'sarufi', 'fasihi', 'tamthilia', 'muhimu', 'mifano', 'uandishi', 'haut', 'mofolojia']
    },
    bookkeeping: {
        easy: ['cash', 'sales', 'profit', 'debit', 'credit', 'ledger', 'entry', 'asset', 'account', 'money'],
        medium: ['journal', 'balance', 'liability', 'capital', 'expense', 'invoice', 'depreciation', 'trial', 'financial', 'receipt'],
        hard: ['amortization', 'accrual', 'reconciliation', 'liquidity', 'valuation', 'forecasting', 'bookkeeping', 'adjustment', 'inventory', 'ratio']
    },
    business: {
        easy: ['shop', 'profit', 'sales', 'cash', 'price', 'goods', 'money', 'trade', 'market', 'customer'],
        medium: ['capital', 'revenue', 'finance', 'invoice', 'marketing', 'management', 'liability', 'product', 'supply', 'demand'],
        hard: ['strategy', 'innovation', 'expansion', 'branding', 'stakeholder', 'logistics', 'economics', 'merger', 'competitiveness', 'forecasting']
    },
    computer: {
        easy: ['mouse', 'keyboard', 'screen', 'files', 'printer', 'window', 'software', 'memory', 'power', 'internet'],
        medium: ['network', 'browser', 'software', 'storage', 'spreadsheet', 'password', 'security', 'printer', 'system', 'database'],
        hard: ['algorithm', 'encryption', 'networking', 'virtualization', 'cybersecurity', 'database', 'architecture', 'protocol', 'automation', 'optimization']
    },
    tanzania: {
        easy: ['mji', 'taifa', 'uhuru', 'bendera', 'mto', 'ziwa', 'mlima', 'familia', 'taifa', 'mkoa'],
        medium: ['historia', 'uhuru', 'ujamaa', 'maendeleo', 'mji mkuu', 'kijamii', 'jumuiya', 'utamaduni', 'taasisi', 'makazi'],
        hard: ['demokrasia', 'mabadiliko', 'maendeleo', 'uhifadhi', 'serikali', 'siasa', 'usalama', 'uchumi', 'mabadiliko', 'utawala']
    }
};

// ---------- QUESTION BANKS ----------
// Each entry: { q, a, b, c, d, correct, exp }
const questionBanks = {

    bible: [
        { q: "Who was the first man created by God?", a: "Adam", b: "Moses", c: "Abraham", d: "Noah", correct: "a", exp: "Adam was the first man created by God according to the Book of Genesis." },
        { q: "Who was the first woman created by God?", a: "Sarah", b: "Eve", c: "Mary", d: "Ruth", correct: "b", exp: "Eve was the first woman created by God, made from Adam's rib." },
        { q: "In how many days did God create the world?", a: "3 days", b: "6 days", c: "7 days", d: "40 days", correct: "b", exp: "God created the world in 6 days and rested on the 7th day." },
        { q: "What is the first book of the Bible?", a: "Exodus", b: "Genesis", c: "Leviticus", d: "Matthew", correct: "b", exp: "Genesis is the first book of the Bible, containing creation and early biblical history." },
        { q: "What is the last book of the Bible?", a: "Jude", b: "Acts", c: "Revelation", d: "Malachi", correct: "c", exp: "Revelation is the last book of the Bible in the Christian canon." },
        { q: "Who built the ark to survive the great flood?", a: "Moses", b: "Abraham", c: "Noah", d: "David", correct: "c", exp: "Noah built the ark to save his family and two of every animal from the flood." },
        { q: "Who was swallowed by a great fish?", a: "Jonah", b: "Daniel", c: "Paul", d: "Peter", correct: "a", exp: "Jonah was swallowed by a great fish when he tried to flee from God." },
        { q: "Who killed Goliath with a sling and a stone?", a: "Saul", b: "David", c: "Solomon", d: "Samuel", correct: "b", exp: "David defeated the giant Goliath with a sling and stone." },
        { q: "Who was the mother of Jesus?", a: "Elizabeth", b: "Martha", c: "Mary", d: "Naomi", correct: "c", exp: "Mary was the mother of Jesus Christ." },
        { q: "In which town was Jesus born?", a: "Nazareth", b: "Jerusalem", c: "Bethlehem", d: "Capernaum", correct: "c", exp: "Jesus was born in Bethlehem according to the gospels." },
        { q: "Who received the Ten Commandments from God?", a: "Abraham", b: "Moses", c: "David", d: "Solomon", correct: "b", exp: "Moses received the Ten Commandments on Mount Sinai." },
        { q: "How many disciples did Jesus have?", a: "10", b: "12", c: "14", d: "7", correct: "b", exp: "Jesus chose twelve disciples to follow him." },
        { q: "Who betrayed Jesus for thirty pieces of silver?", a: "Peter", b: "Judas Iscariot", c: "Thomas", d: "John", correct: "b", exp: "Judas Iscariot betrayed Jesus for thirty pieces of silver." },
        { q: "Who was thrown into the lions' den but survived?", a: "Daniel", b: "Jonah", c: "Joseph", d: "Elijah", correct: "a", exp: "Daniel was protected by God in the lions' den." },
        { q: "Who was the wisest king of Israel?", a: "David", b: "Saul", c: "Solomon", d: "Rehoboam", correct: "c", exp: "Solomon was known for his God-given wisdom." }
    ],

    physics: [
        { q: "What is the SI unit of force?", a: "Gram", b: "Newton", c: "Joule", d: "Pascal", correct: "b", exp: "The Newton (N) is the SI unit of force, named after Sir Isaac Newton." },
        { q: "Which of the following is a fundamental quantity?", a: "Force", b: "Length", c: "Velocity", d: "Acceleration", correct: "b", exp: "Length is a fundamental quantity; force, velocity and acceleration are derived." },
        { q: "What is the speed of light in vacuum?", a: "3 × 10⁸ m/s", b: "3 × 10⁶ m/s", c: "3 × 10⁹ m/s", d: "3 × 10⁷ m/s", correct: "a", exp: "The speed of light (c) in vacuum is approximately 3 × 10⁸ m/s." },
        { q: "What does Archimedes' Principle state?", a: "Force equals mass times acceleration", b: "The upthrust equals the weight of displaced fluid", c: "Pressure equals force divided by area", d: "Energy is conserved in all processes", correct: "b", exp: "Archimedes' Principle: upthrust on an object equals the weight of fluid it displaces." },
        { q: "What is the SI unit of pressure?", a: "Bar", b: "Pascal", c: "Atm", d: "Torr", correct: "b", exp: "The Pascal (Pa) is the SI unit of pressure, equal to 1 Newton per square meter." },
        { q: "Which type of lens converges light rays?", a: "Concave lens", b: "Convex lens", c: "Plane lens", d: "Diverging lens", correct: "b", exp: "A convex lens converges parallel light rays to a focal point." },
        { q: "What is the SI unit of electrical current?", a: "Coulomb", b: "Volt", c: "Ampere", d: "Ohm", correct: "c", exp: "The Ampere (A) is the SI unit of electrical current." },
        { q: "Which particle has a positive charge?", a: "Electron", b: "Neutron", c: "Proton", d: "Photon", correct: "c", exp: "A proton carries a positive electrical charge." },
        { q: "What is the SI unit of energy?", a: "Watt", b: "Joule", c: "Newton", d: "Pascal", correct: "b", exp: "The Joule (J) is the SI unit of energy and work." },
        { q: "Define velocity.", a: "Distance traveled per unit time", b: "Speed in a given direction", c: "Change in distance", d: "Rate of change of position", correct: "b", exp: "Velocity is a vector quantity representing speed in a specific direction." },
        { q: "What is the unit of frequency?", a: "Hertz", b: "Watt", c: "Ohm", d: "Tesla", correct: "a", exp: "Frequency is measured in Hertz (Hz), cycles per second." },
        { q: "Which law states that for every action there is an equal and opposite reaction?", a: "Newton's First Law", b: "Newton's Second Law", c: "Newton's Third Law", d: "Law of Gravitation", correct: "c", exp: "Newton's Third Law describes equal and opposite action-reaction forces." },
        { q: "What is the term for the bending of light as it passes from one medium to another?", a: "Reflection", b: "Refraction", c: "Diffraction", d: "Dispersion", correct: "b", exp: "Refraction is the bending of light when it changes medium." },
        { q: "What is the SI unit of power?", a: "Joule", b: "Watt", c: "Newton", d: "Volt", correct: "b", exp: "Power is measured in Watts (W), which is Joules per second." },
        { q: "Which form of energy is stored in a stretched rubber band?", a: "Kinetic energy", b: "Potential energy", c: "Thermal energy", d: "Chemical energy", correct: "b", exp: "A stretched rubber band stores elastic potential energy." }
    ],
    mathematics: [
        { q: "What is the value of π (pi) rounded to two decimal places?", a: "3.41", b: "3.14", c: "3.12", d: "3.16", correct: "b", exp: "Pi is approximately 3.14159, which rounds to 3.14." },
        { q: "Solve: 5 + 3 × 2 = ?", a: "16", b: "11", c: "13", d: "10", correct: "b", exp: "By order of operations, 3 × 2 = 6, then 5 + 6 = 11." },
        { q: "What is the square root of 144?", a: "11", b: "12", c: "13", d: "14", correct: "b", exp: "12 × 12 = 144, so the square root of 144 is 12." },
        { q: "In a right-angled triangle, which theorem relates the sides?", a: "Pythagoras theorem", b: "Newton's law", c: "Ohm's law", d: "Boyle's law", correct: "a", exp: "Pythagoras' theorem: a² + b² = c² for a right-angled triangle." },
        { q: "What is 15% of 200?", a: "20", b: "25", c: "30", d: "35", correct: "c", exp: "15% of 200 = 0.15 × 200 = 30." },
        { q: "Simplify: 2x + 3x = ?", a: "5x", b: "6x", c: "x", d: "5x²", correct: "a", exp: "Adding like terms: 2x + 3x = 5x." },
        { q: "What is the sum of angles in a triangle?", a: "90°", b: "180°", c: "270°", d: "360°", correct: "b", exp: "The interior angles of any triangle always sum to 180°." },
        { q: "What is the value of x in 2x = 10?", a: "2", b: "4", c: "5", d: "10", correct: "c", exp: "Dividing both sides by 2 gives x = 5." },
        { q: "What is the perimeter of a square with side 4cm?", a: "8cm", b: "12cm", c: "16cm", d: "20cm", correct: "c", exp: "Perimeter of a square = 4 × side = 4 × 4 = 16cm." },
        { q: "What do we call a number that can only be divided by 1 and itself?", a: "Composite number", b: "Prime number", c: "Even number", d: "Odd number", correct: "b", exp: "A prime number has exactly two factors: 1 and itself." },
        { q: "What is 7 factorial (7!) equal to?", a: "49", b: "5040", c: "720", d: "128", correct: "b", exp: "7! = 7×6×5×4×3×2×1 = 5040." },
        { q: "Convert 0.75 to a fraction.", a: "3/4", b: "7/5", c: "1/4", d: "3/5", correct: "a", exp: "0.75 = 75/100 = 3/4 in simplest form." },
        { q: "What is the formula for the area of a circle?", a: "2πr", b: "πr²", c: "πd", d: "πr", correct: "b", exp: "Area of a circle = πr², where r is the radius." },
        { q: "What is the next number in the sequence 2, 4, 6, 8, __?", a: "9", b: "10", c: "11", d: "12", correct: "b", exp: "The sequence increases by 2 each time, so the next number is 10." },
        { q: "What is the LCM of 4 and 6?", a: "10", b: "12", c: "24", d: "18", correct: "b", exp: "The lowest common multiple of 4 and 6 is 12." }
    ],

    chemistry: [
        { q: "What is the chemical symbol for water?", a: "H2O", b: "O2", c: "CO2", d: "H2", correct: "a", exp: "Water is composed of two hydrogen atoms and one oxygen atom: H2O." },
        { q: "What is the atomic number of Hydrogen?", a: "0", b: "1", c: "2", d: "3", correct: "b", exp: "Hydrogen has one proton, giving it atomic number 1." },
        { q: "Which gas is essential for combustion?", a: "Nitrogen", b: "Oxygen", c: "Hydrogen", d: "Carbon dioxide", correct: "b", exp: "Oxygen supports combustion (burning)." },
        { q: "What is the pH of a neutral solution?", a: "0", b: "7", c: "14", d: "10", correct: "b", exp: "A pH of 7 is considered neutral, like pure water." },
        { q: "Which particle has no electric charge?", a: "Proton", b: "Electron", c: "Neutron", d: "Ion", correct: "c", exp: "Neutrons are electrically neutral particles found in the nucleus." },
        { q: "What is the chemical formula for table salt?", a: "NaCl", b: "KCl", c: "CaCl2", d: "NaOH", correct: "a", exp: "Table salt is sodium chloride, NaCl." },
        { q: "What is the process of a liquid turning into gas called?", a: "Condensation", b: "Evaporation", c: "Sublimation", d: "Freezing", correct: "b", exp: "Evaporation is the change from liquid to gas." },
        { q: "Which element has the symbol 'Fe'?", a: "Fluorine", b: "Iron", c: "Francium", d: "Phosphorus", correct: "b", exp: "'Fe' comes from the Latin 'ferrum', meaning iron." },
        { q: "What type of bond involves sharing of electrons?", a: "Ionic bond", b: "Covalent bond", c: "Metallic bond", d: "Hydrogen bond", correct: "b", exp: "A covalent bond forms when atoms share electron pairs." },
        { q: "What is the smallest unit of an element that retains its properties?", a: "Molecule", b: "Atom", c: "Compound", d: "Ion", correct: "b", exp: "An atom is the smallest unit of an element retaining its chemical identity." },
        { q: "Which acid is found in the stomach?", a: "Sulfuric acid", b: "Hydrochloric acid", c: "Nitric acid", d: "Acetic acid", correct: "b", exp: "The stomach produces hydrochloric acid (HCl) to aid digestion." },
        { q: "What is the chemical symbol for Gold?", a: "Go", b: "Gd", c: "Au", d: "Ag", correct: "c", exp: "Gold's symbol 'Au' comes from the Latin word 'aurum'." },
        { q: "Which of the following is a noble gas?", a: "Nitrogen", b: "Helium", c: "Oxygen", d: "Hydrogen", correct: "b", exp: "Helium is a noble gas, chemically inert under normal conditions." },
        { q: "What is formed when an acid reacts with a base?", a: "Salt and water", b: "Gas only", c: "Metal", d: "Oxide", correct: "a", exp: "Neutralization of an acid and base produces salt and water." },
        { q: "What is the main gas responsible for the greenhouse effect?", a: "Oxygen", b: "Carbon dioxide", c: "Nitrogen", d: "Hydrogen", correct: "b", exp: "Carbon dioxide traps heat, contributing strongly to the greenhouse effect." }
    ],

    biology: [
        { q: "What is the basic unit of life?", a: "Tissue", b: "Cell", c: "Organ", d: "Organism", correct: "b", exp: "The cell is considered the basic structural and functional unit of life." },
        { q: "Which organ pumps blood throughout the human body?", a: "Lungs", b: "Liver", c: "Heart", d: "Kidney", correct: "c", exp: "The heart pumps blood through the circulatory system." },
        { q: "What is the process by which plants make their own food called?", a: "Respiration", b: "Photosynthesis", c: "Transpiration", d: "Digestion", correct: "b", exp: "Photosynthesis converts sunlight, water and CO2 into food for plants." },
        { q: "What is the powerhouse of the cell?", a: "Nucleus", b: "Mitochondria", c: "Ribosome", d: "Chloroplast", correct: "b", exp: "Mitochondria produce most of the cell's energy (ATP)." },
        { q: "How many chambers does the human heart have?", a: "2", b: "3", c: "4", d: "5", correct: "c", exp: "The human heart has four chambers: two atria and two ventricles." },
        { q: "What gas do plants absorb from the air during photosynthesis?", a: "Oxygen", b: "Carbon dioxide", c: "Nitrogen", d: "Hydrogen", correct: "b", exp: "Plants absorb carbon dioxide for photosynthesis and release oxygen." },
        { q: "What is the study of living organisms called?", a: "Physics", b: "Chemistry", c: "Biology", d: "Geology", correct: "c", exp: "Biology is the scientific study of living organisms." },
        { q: "Which blood cells help fight infection in the body?", a: "Red blood cells", b: "White blood cells", c: "Platelets", d: "Plasma", correct: "b", exp: "White blood cells are part of the immune system, fighting infections." },
        { q: "What is the male reproductive cell called?", a: "Ovum", b: "Sperm", c: "Zygote", d: "Embryo", correct: "b", exp: "Sperm is the male reproductive (sex) cell." },
        { q: "Which part of the plant absorbs water and minerals from the soil?", a: "Leaves", b: "Stem", c: "Roots", d: "Flowers", correct: "c", exp: "Roots absorb water and dissolved minerals from the soil." },
        { q: "What is the process of cell division that produces two identical cells called?", a: "Meiosis", b: "Mitosis", c: "Fertilization", d: "Fusion", correct: "b", exp: "Mitosis produces two genetically identical daughter cells." },
        { q: "What is the largest organ in the human body?", a: "Liver", b: "Heart", c: "Skin", d: "Brain", correct: "c", exp: "The skin is the largest organ, covering the entire body." },
        { q: "Which vitamin is produced when skin is exposed to sunlight?", a: "Vitamin A", b: "Vitamin C", c: "Vitamin D", d: "Vitamin K", correct: "c", exp: "Sunlight triggers the skin to produce Vitamin D." },
        { q: "What is the term for organisms that make their own food?", a: "Consumers", b: "Producers", c: "Decomposers", d: "Predators", correct: "b", exp: "Producers, like plants, make their own food via photosynthesis." },
        { q: "What is DNA an abbreviation for?", a: "Deoxyribonucleic acid", b: "Diribonucleic acid", c: "Denucleic acid", d: "Dioxyribose acid", correct: "a", exp: "DNA stands for deoxyribonucleic acid, the molecule carrying genetic information." }
    ],

    geography: [
        { q: "What is the largest continent in the world?", a: "Africa", b: "Asia", c: "Europe", d: "Antarctica", correct: "b", exp: "Asia is the largest continent by both area and population." },
        { q: "Which is the longest river in Africa?", a: "Congo River", b: "Zambezi River", c: "Nile River", d: "Niger River", correct: "c", exp: "The Nile River is the longest river in Africa." },
        { q: "What is the highest mountain in Africa?", a: "Mount Kenya", b: "Mount Kilimanjaro", c: "Mount Meru", d: "Atlas Mountains", correct: "b", exp: "Mount Kilimanjaro in Tanzania is Africa's highest peak." },
        { q: "Which is the largest lake in Tanzania?", a: "Lake Tanganyika", b: "Lake Victoria", c: "Lake Nyasa", d: "Lake Rukwa", correct: "b", exp: "Lake Victoria is the largest lake bordering Tanzania." },
        { q: "What causes day and night?", a: "Revolution of the earth", b: "Rotation of the earth", c: "Tilt of the earth", d: "Orbit of the moon", correct: "b", exp: "The earth's rotation on its axis causes day and night." },
        { q: "What is the capital city of Tanzania?", a: "Dar es Salaam", b: "Arusha", c: "Dodoma", d: "Mwanza", correct: "c", exp: "Dodoma is the official capital city of Tanzania." },
        { q: "Which type of rock is formed from cooled magma?", a: "Sedimentary rock", b: "Igneous rock", c: "Metamorphic rock", d: "Mineral rock", correct: "b", exp: "Igneous rock forms when molten magma or lava cools and solidifies." },
        { q: "What is the term for a permanent change in weather patterns over long periods?", a: "Weather", b: "Climate change", c: "Season", d: "Precipitation", correct: "b", exp: "Climate change refers to long-term shifts in weather patterns." },
        { q: "Which ocean is the largest in the world?", a: "Atlantic Ocean", b: "Indian Ocean", c: "Pacific Ocean", d: "Arctic Ocean", correct: "c", exp: "The Pacific Ocean is the largest and deepest ocean." },
        { q: "What is an area of land almost entirely surrounded by water called?", a: "Island", b: "Peninsula", c: "Isthmus", d: "Delta", correct: "b", exp: "A peninsula is land surrounded by water on most sides but attached to a mainland." },
        { q: "Which desert is the largest hot desert in the world?", a: "Kalahari Desert", b: "Sahara Desert", c: "Gobi Desert", d: "Namib Desert", correct: "b", exp: "The Sahara is the largest hot desert in the world." },
        { q: "What instrument is used to measure atmospheric pressure?", a: "Thermometer", b: "Barometer", c: "Hygrometer", d: "Anemometer", correct: "b", exp: "A barometer measures atmospheric pressure." },
        { q: "What is the imaginary line that divides the earth into Northern and Southern Hemispheres?", a: "Prime Meridian", b: "Equator", c: "Tropic of Cancer", d: "Tropic of Capricorn", correct: "b", exp: "The Equator divides the earth into the Northern and Southern Hemispheres." },
        { q: "Which African country is known as the 'Pearl of Africa'?", a: "Kenya", b: "Uganda", c: "Rwanda", d: "Tanzania", correct: "b", exp: "Uganda is nicknamed the 'Pearl of Africa' for its scenic beauty." },
        { q: "What is the process by which water changes from liquid to vapor and rises into the atmosphere called?", a: "Condensation", b: "Evaporation", c: "Precipitation", d: "Infiltration", correct: "b", exp: "Evaporation turns liquid water into vapor that rises into the air." }
    ],

    history: [
        { q: "Who was the first President of Tanzania?", a: "Ali Hassan Mwinyi", b: "Julius Nyerere", c: "Benjamin Mkapa", d: "Jakaya Kikwete", correct: "b", exp: "Julius Nyerere became the first President of Tanzania." },
        { q: "In which year did Tanganyika gain independence?", a: "1960", b: "1961", c: "1962", d: "1963", correct: "b", exp: "Tanganyika gained independence from Britain in 1961." },
        { q: "What was the name of the union between Tanganyika and Zanzibar?", a: "East African Community", b: "United Republic of Tanzania", c: "African Union", d: "Commonwealth", correct: "b", exp: "The union formed the United Republic of Tanzania." },
        { q: "In which year was the Tanganyika-Zanzibar Union formed?", a: "1962", b: "1963", c: "1964", d: "1965", correct: "c", exp: "Tanganyika and Zanzibar united in 1964." },
        { q: "Who led the Maji Maji Rebellion against German colonial rule?", a: "Chief Mkwawa", b: "Kinjeketile Ngwale", c: "Abushiri bin Salim", d: "Mangi Meli", correct: "b", exp: "Kinjeketile Ngwale inspired and led the Maji Maji Rebellion." },
        { q: "Which European country colonized Tanganyika before British rule?", a: "Britain", b: "Portugal", c: "Germany", d: "France", correct: "c", exp: "Germany colonized Tanganyika before it became a British mandate after WWI." },
        { q: "What is the ideology developed by Julius Nyerere called?", a: "Capitalism", b: "Ujamaa", c: "Communism", d: "Federalism", correct: "b", exp: "Ujamaa was Nyerere's policy of African socialism and self-reliance." },
        { q: "In which year did World War I end?", a: "1917", b: "1918", c: "1919", d: "1920", correct: "b", exp: "World War I ended in 1918." },
        { q: "Who was the first Secretary-General of the United Nations?", a: "Kofi Annan", b: "Trygve Lie", c: "Kurt Waldheim", d: "U Thant", correct: "b", exp: "Trygve Lie of Norway was the UN's first Secretary-General." },
        { q: "Which ancient civilization built the pyramids of Giza?", a: "Roman", b: "Greek", c: "Egyptian", d: "Persian", correct: "c", exp: "The ancient Egyptians built the pyramids of Giza." },
        { q: "In which year did World War II end?", a: "1943", b: "1944", c: "1945", d: "1946", correct: "c", exp: "World War II ended in 1945." },
        { q: "Who is known as the Father of the Nation in Tanzania?", a: "Abeid Karume", b: "Julius Nyerere", c: "Edward Sokoine", d: "Rashidi Kawawa", correct: "b", exp: "Julius Nyerere is honored as the Father of the Nation (Baba wa Taifa)." },
        { q: "What was the main purpose of the Berlin Conference of 1884-85?", a: "To end slave trade", b: "To divide Africa among European powers", c: "To form the League of Nations", d: "To promote trade unions", correct: "b", exp: "The Berlin Conference formalized the partition of Africa among European colonial powers." },
        { q: "Which country was formerly known as Abyssinia?", a: "Kenya", b: "Ethiopia", c: "Sudan", d: "Somalia", correct: "b", exp: "Ethiopia was historically known as Abyssinia." },
        { q: "In which year did apartheid officially end in South Africa?", a: "1990", b: "1992", c: "1994", d: "1996", correct: "c", exp: "Apartheid ended in 1994 with South Africa's first democratic elections." }
    ],

    civics: [
        { q: "What is the supreme law of a country called?", a: "Act", b: "Constitution", c: "Bylaw", d: "Decree", correct: "b", exp: "The Constitution is the supreme law governing a country." },
        { q: "What is democracy?", a: "Rule by one person", b: "Rule by the people", c: "Rule by the military", d: "Rule by the rich", correct: "b", exp: "Democracy means government by the people, directly or through elected representatives." },
        { q: "What are the three arms of government?", a: "Executive, Legislature, Judiciary", b: "President, Parliament, Police", c: "Army, Police, Courts", d: "National, Regional, Local", correct: "a", exp: "Government is divided into Executive, Legislature and Judiciary arms." },
        { q: "What is the role of the Judiciary?", a: "Making laws", b: "Enforcing laws", c: "Interpreting laws", d: "Collecting taxes", correct: "c", exp: "The Judiciary interprets and applies the law through the court system." },
        { q: "What is a citizen?", a: "A visitor to a country", b: "A legal member of a state with rights and duties", c: "A tourist", d: "A refugee only", correct: "b", exp: "A citizen is a legally recognized member of a state, with rights and responsibilities." },
        { q: "What is the term for the right to vote?", a: "Suffrage", b: "Sovereignty", c: "Jurisdiction", d: "Legislation", correct: "a", exp: "Suffrage refers to the right to vote in elections." },
        { q: "What body makes laws in Tanzania?", a: "The Judiciary", b: "Bunge (Parliament)", c: "The President alone", d: "Local government", correct: "b", exp: "Bunge, the Tanzanian Parliament, is the legislative body that makes laws." },
        { q: "What is human rights?", a: "Rights given by the government only", b: "Basic rights and freedoms belonging to every person", c: "Rights for citizens only", d: "Rights for adults only", correct: "b", exp: "Human rights are fundamental rights and freedoms belonging to all people." },
        { q: "What is corruption?", a: "Fair use of public resources", b: "Misuse of public office for private gain", c: "Legal business practice", d: "Government policy", correct: "b", exp: "Corruption is the abuse of entrusted power for personal benefit." },
        { q: "What is the term for a country governed by its own people without external control?", a: "Colony", b: "Sovereign state", c: "Territory", d: "Protectorate", correct: "b", exp: "A sovereign state governs itself independently, free from external control." },
        { q: "Who is the head of state in Tanzania?", a: "Prime Minister", b: "President", c: "Speaker of Parliament", d: "Chief Justice", correct: "b", exp: "The President is the head of state and government in Tanzania." },
        { q: "What is the purpose of elections?", a: "To select leaders through voting", b: "To collect taxes", c: "To make laws only", d: "To judge court cases", correct: "a", exp: "Elections allow citizens to choose their leaders through voting." },
        { q: "What is 'good governance'?", a: "Rule by force", b: "Transparent, accountable, and participatory leadership", c: "Rule without laws", d: "One-party rule", correct: "b", exp: "Good governance is leadership marked by transparency, accountability and participation." },
        { q: "What is a political party?", a: "A social club", b: "An organized group seeking to gain political power", c: "A religious organization", d: "A business entity", correct: "b", exp: "A political party is an organized group that seeks to win and exercise political power." },
        { q: "What is national unity?", a: "Division among ethnic groups", b: "Togetherness and cooperation among citizens of a nation", c: "Conflict between regions", d: "Independence of regions", correct: "b", exp: "National unity is the sense of togetherness and cooperation among a nation's citizens." }
    ],

    english: [
        { q: "Which of the following is a noun?", a: "Run", b: "Beautiful", c: "Table", d: "Quickly", correct: "c", exp: "'Table' names a thing, making it a noun." },
        { q: "Choose the correct plural of 'child'.", a: "Childs", b: "Children", c: "Childes", d: "Childrens", correct: "b", exp: "'Children' is the irregular plural of 'child'." },
        { q: "Identify the verb in the sentence: 'She sings beautifully.'", a: "She", b: "sings", c: "beautifully", d: "none", correct: "b", exp: "'Sings' is the action word (verb) in the sentence." },
        { q: "What is the opposite (antonym) of 'happy'?", a: "Joyful", b: "Sad", c: "Excited", d: "Glad", correct: "b", exp: "'Sad' is the opposite of 'happy'." },
        { q: "Choose the correctly spelled word.", a: "Recieve", b: "Receive", c: "Receeve", d: "Receve", correct: "b", exp: "The correct spelling follows 'i before e except after c': Receive." },
        { q: "Which punctuation mark is used to end a question?", a: "Period", b: "Comma", c: "Question mark", d: "Exclamation mark", correct: "c", exp: "A question mark (?) ends a question." },
        { q: "Identify the adjective in: 'The tall boy ran fast.'", a: "tall", b: "boy", c: "ran", d: "fast", correct: "a", exp: "'Tall' describes the boy, making it an adjective." },
        { q: "What type of sentence is: 'Please close the door.'?", a: "Declarative", b: "Interrogative", c: "Imperative", d: "Exclamatory", correct: "c", exp: "An imperative sentence gives a command or request." },
        { q: "Choose the correct past tense of 'go'.", a: "Goed", b: "Went", c: "Gone", d: "Going", correct: "b", exp: "'Went' is the correct simple past tense of 'go'." },
        { q: "What is a synonym for 'happy'?", a: "Sad", b: "Joyful", c: "Angry", d: "Tired", correct: "b", exp: "'Joyful' means the same as 'happy'." },
        { q: "Which word is a preposition?", a: "Under", b: "Run", c: "Blue", d: "Slowly", correct: "a", exp: "'Under' shows the relationship of a noun to another word, making it a preposition." },
        { q: "Identify the subject in: 'The dog barked loudly.'", a: "The dog", b: "barked", c: "loudly", d: "none", correct: "a", exp: "'The dog' is who/what the sentence is about — the subject." },
        { q: "What is the correct article to use before 'apple'?", a: "a", b: "an", c: "the only", d: "no article", correct: "b", exp: "'An' is used before words starting with a vowel sound, like 'apple'." },
        { q: "Which of these is a compound sentence connector?", a: "Because", b: "and", c: "Although", d: "Since", correct: "b", exp: "'And' joins two independent clauses to form a compound sentence." },
        { q: "Choose the correct form: 'They ___ to school every day.'", a: "go", b: "goes", c: "going", d: "went", correct: "a", exp: "With the plural subject 'they', the base verb form 'go' is correct." }
    ],

    kiswahili: [
        { q: "Neno 'kitabu' ni aina gani ya neno?", a: "Kivumishi", b: "Nomino", c: "Kitenzi", d: "Kielezi", correct: "b", exp: "'Kitabu' ni jina la kitu, hivyo ni nomino." },
        { q: "Kinyume cha neno 'kubwa' ni?", a: "Ndogo", b: "Refu", c: "Fupi", d: "Nzuri", correct: "a", exp: "'Ndogo' ni kinyume cha 'kubwa'." },
        { q: "Umoja wa neno 'vitabu' ni?", a: "Kitabu", b: "Vitabu", c: "Chitabu", d: "Kitabuu", correct: "a", exp: "Umoja wa 'vitabu' ni 'kitabu'." },
        { q: "Neno 'anasoma' ni aina gani ya neno?", a: "Nomino", b: "Kitenzi", c: "Kivumishi", d: "Kiwakilishi", correct: "b", exp: "'Anasoma' linaonyesha kitendo, hivyo ni kitenzi." },
        { q: "Ni nini maana ya 'methali'?", a: "Hadithi fupi", b: "Msemo wenye mafunzo", c: "Wimbo", d: "Shairi", correct: "b", exp: "Methali ni msemo mfupi wenye mafunzo au hekima." },
        { q: "'Haraka haraka haina baraka' ni mfano wa?", a: "Methali", b: "Kitendawili", c: "Ngonjera", d: "Nahau", correct: "a", exp: "Hii ni methali maarufu ya Kiswahili." },
        { q: "Jina la mji mkuu wa nchi Tanzania ni?", a: "Dodoma", b: "Dar es Salaam", c: "Arusha", d: "Mwanza", correct: "a", exp: "Dodoma ndio mji mkuu rasmi wa Tanzania." },
        { q: "Neno 'paka' likiwa wingi huwa?", a: "Paka", b: "Mapaka", c: "Wapaka", d: "Vipaka", correct: "a", exp: "'Paka' halibadiliki katika wingi." },
        { q: "'Kiswahili' ni lugha ya jamii gani asili?", a: "Waarabu", b: "Waswahili wa Pwani ya Afrika Mashariki", c: "Wazungu", d: "Wahindi", correct: "b", exp: "Kiswahili kilianzia kwa jamii za Pwani ya Afrika Mashariki." },
        { q: "Neno lenye maana kinyume na 'chafu' ni?", a: "Safi", b: "Baya", c: "Ovu", d: "Chungu", correct: "a", exp: "'Safi' ni kinyume cha 'chafu'." },
        { q: "Katika sentensi 'Mtoto anacheza mpira', neno 'anacheza' ni?", a: "Kiwakilishi", b: "Kitenzi", c: "Nomino", d: "Kihusishi", correct: "b", exp: "'Anacheza' linaonyesha kitendo, hivyo ni kitenzi." },
        { q: "Maneno 'Kaskazini, Kusini, Mashariki, Magharibi' yanawakilisha nini?", a: "Majina ya miji", b: "Pande za dunia", c: "Majina ya siku", d: "Miezi", correct: "b", exp: "Haya ni majina ya pande kuu za dunia." },
        { q: "Nahau 'kufa moyo' ina maana gani?", a: "Kufariki", b: "Kukata tamaa", c: "Kuwa na furaha", d: "Kuwa hodari", correct: "b", exp: "'Kufa moyo' ina maana ya kukata tamaa." },
        { q: "Ni ipi kati ya hizi ni sauti ya konsonanti?", a: "A", b: "E", c: "B", d: "I", correct: "c", exp: "'B' ni konsonanti; A, E, I ni irabu." },
        { q: "Kitendawili ni nini?", a: "Msemo wa mafumbo unaohitaji jibu", b: "Wimbo wa kufundishia", c: "Shairi la kisasa", d: "Hadithi ndefu", correct: "a", exp: "Kitendawili ni fumbo linalotolewa ili kutafutiwa jibu." }
    ],

    bookkeeping: [
        { q: "What is the accounting equation?", a: "Assets = Liabilities + Capital", b: "Assets = Liabilities − Capital", c: "Capital = Assets + Liabilities", d: "Liabilities = Assets + Capital", correct: "a", exp: "The basic accounting equation is Assets = Liabilities + Capital." },
        { q: "What is a ledger used for?", a: "Recording daily transactions first", b: "Summarizing accounts from journals", c: "Preparing tax returns", d: "Calculating profit only", correct: "b", exp: "The ledger classifies and summarizes transactions posted from the journal." },
        { q: "What is the term for money owed by a business to others?", a: "Assets", b: "Liabilities", c: "Capital", d: "Revenue", correct: "b", exp: "Liabilities are amounts a business owes to outside parties." },
        { q: "Which book is known as the 'book of original entry'?", a: "Ledger", b: "Journal", c: "Trial Balance", d: "Balance Sheet", correct: "b", exp: "The journal is where transactions are first recorded, in date order." },
        { q: "What is depreciation?", a: "Increase in value of an asset", b: "Decrease in value of an asset over time", c: "Cash received from sales", d: "Money borrowed", correct: "b", exp: "Depreciation is the gradual reduction in an asset's value over its useful life." },
        { q: "What does 'debit' mean in accounting?", a: "Right side of an account", b: "Left side of an account", c: "Total balance", d: "Net profit", correct: "b", exp: "In a T-account, the debit entry is recorded on the left side." },
        { q: "What is a Trial Balance used to check?", a: "Profitability", b: "Arithmetic accuracy of ledger accounts", c: "Cash flow only", d: "Tax liability", correct: "b", exp: "A Trial Balance checks that total debits equal total credits." },
        { q: "What is the term for goods bought for resale?", a: "Fixed assets", b: "Purchases", c: "Capital", d: "Drawings", correct: "b", exp: "'Purchases' refers to goods bought by a business to sell to customers." },
        { q: "What is 'Capital' in business?", a: "Money owed to suppliers", b: "Owner's investment in the business", c: "Profit earned", d: "Total sales", correct: "b", exp: "Capital is the amount the owner has invested into the business." },
        { q: "Which financial statement shows a business's profit or loss over a period?", a: "Balance Sheet", b: "Income Statement", c: "Cash flow statement", d: "Trial Balance", correct: "b", exp: "The Income Statement (Profit & Loss account) reports profit or loss over a period." },
        { q: "What is 'Drawings' in accounting?", a: "Cash brought into the business by the owner", b: "Cash or goods taken out by the owner for personal use", c: "Profit reinvested", d: "Loan received", correct: "b", exp: "Drawings are withdrawals of cash or goods by the owner for personal use." },
        { q: "Which side of the cash book records money received?", a: "Debit side", b: "Credit side", c: "Neither", d: "Both", correct: "a", exp: "Receipts of cash are recorded on the debit side of the cash book." },
        { q: "What is a 'Balance Sheet'?", a: "Record of daily transactions", b: "Statement of assets, liabilities and capital at a point in time", c: "Record of expenses only", d: "List of customers", correct: "b", exp: "A Balance Sheet shows a business's financial position at a specific date." },
        { q: "What is 'Gross Profit'?", a: "Sales minus Cost of Goods Sold", b: "Sales minus all expenses", c: "Total Assets minus Liabilities", d: "Capital minus Drawings", correct: "a", exp: "Gross Profit = Sales revenue − Cost of Goods Sold." },
        { q: "What term describes assets that can be quickly converted to cash?", a: "Fixed assets", b: "Liquid assets", c: "Intangible assets", d: "Long-term assets", correct: "b", exp: "Liquid assets can be readily converted into cash." }
    ],

    business: [
        { q: "What is a business?", a: "An activity that creates and sells goods or services", b: "A government office", c: "Only a shop", d: "Only a school", correct: "a", exp: "A business is an activity that produces goods or provides services to satisfy needs and earn income." },
        { q: "What is profit?", a: "Money paid as salary", b: "Revenue minus expenses", c: "Money borrowed from a bank", d: "Money saved in a box", correct: "b", exp: "Profit is the amount left after subtracting business expenses from revenue." },
        { q: "What is capital in business?", a: "The money or assets invested in a business", b: "The amount of stock sold", c: "The cost of electricity", d: "The wages of workers", correct: "a", exp: "Capital refers to funds or assets invested to start and run a business." },
        { q: "Which of the following is a fixed asset?", a: "Cash", b: "Building", c: "Inventory", d: "Raw materials", correct: "b", exp: "A building is a long-term asset used in business operations." },
        { q: "What is an entrepreneur?", a: "A person who starts and manages a business", b: "A government employee", c: "A school principal", d: "A buyer only", correct: "a", exp: "An entrepreneur identifies opportunities and takes risks to establish a business." },
        { q: "What is the main purpose of a business?", a: "To make profit", b: "To avoid work", c: "To collect taxes", d: "To borrow money only", correct: "a", exp: "The main aim of a business is to provide goods or services and earn profit." },
        { q: "What is revenue?", a: "Total money received from sales", b: "Total expenses", c: "Loan repayment", d: "Owner's salary", correct: "a", exp: "Revenue is the total income earned from selling goods or services." },
        { q: "Which is a source of business finance?", a: "Bank loan", b: "Customer complaint", c: "Office file", d: "Delivery note", correct: "a", exp: "A bank loan is a common source of finance for business operations." },
        { q: "What is a market?", a: "A place where buyers and sellers meet to trade", b: "A school classroom", c: "A bank office only", d: "Only a store room", correct: "a", exp: "A market is any setting where goods or services are exchanged." },
        { q: "Which of the following is a current asset?", a: "Motor vehicle", b: "Cash", c: "Land", d: "Machine", correct: "b", exp: "Cash is a short-term asset that can be used immediately." },
        { q: "What is a customer?", a: "A person who buys goods or services", b: "A person who works in a bank", c: "A person who pays taxes only", d: "A business owner only", correct: "a", exp: "Customers are the people or organizations that purchase products and services." },
        { q: "What does 'liability' mean in business?", a: "A debt or obligation of the business", b: "A profit earned", c: "A type of customer", d: "An office equipment", correct: "a", exp: "Liabilities are amounts a business owes to others." },
        { q: "What is a trade discount?", a: "A reduction in price given to buyers", b: "A type of tax", c: "A business loan", d: "A personal allowance", correct: "a", exp: "A trade discount is a reduction in selling price offered to customers or traders." },
        { q: "Which document shows the quantity and type of goods bought?", a: "Invoice", b: "Receipt", c: "Cheque", d: "Report card", correct: "a", exp: "An invoice lists the goods or services supplied and the amount due." },
        { q: "What is the main role of management in a business?", a: "To organize resources and activities to achieve goals", b: "To count customers only", c: "To create taxes", d: "To sell only one product", correct: "a", exp: "Management coordinates people, money and resources to achieve business objectives." },
        { q: "What is marketing in business?", a: "The process of promoting and selling goods or services", b: "The cost of production", c: "The payment of wages", d: "The legal structure of the business", correct: "a", exp: "Marketing involves identifying customer needs and promoting products to meet them." },
        { q: "What is a sole trader?", a: "A business owned and run by one person", b: "A company with many owners", c: "A government ministry", d: "A school", correct: "a", exp: "A sole trader is a business owned and managed by a single individual." },
        { q: "What is a partnership in business?", a: "A business owned by two or more people", b: "A product label", c: "A bank account", d: "A government tax", correct: "a", exp: "A partnership is formed when two or more people share ownership and responsibilities." },
        { q: "What is a cheque?", a: "An order to a bank to pay a stated amount", b: "A type of computer file", c: "A customer complaint", d: "An inventory record", correct: "a", exp: "A cheque is a written instruction directing a bank to pay money to a named person or business." },
        { q: "What is stock in a business?", a: "Goods held for resale", b: "Bank loans", c: "Employee salary", d: "A type of land", correct: "a", exp: "Stock refers to goods a business keeps for sale to customers." },
        { q: "Which of the following is a personal expense?", a: "House rent", b: "Office rent", c: "Machine purchase", d: "Transport for goods", correct: "a", exp: "House rent is an example of a personal expense for a household or owner." },
        { q: "What does cash flow mean?", a: "The movement of money in and out of a business", b: "The number of customers", c: "The weight of stock", d: "The cost of electricity", correct: "a", exp: "Cash flow measures how cash moves into and out of the business over time." },
        { q: "What is a sales ledger?", a: "A record of amounts owed by customers", b: "A list of raw materials", c: "A bank statement", d: "A business mission statement", correct: "a", exp: "A sales ledger keeps track of credit sales and amounts customers owe." },
        { q: "Who is a consumer?", a: "A person who buys and uses goods or services", b: "A person who sells goods", c: "A person who lends money", d: "A person who manages workers", correct: "a", exp: "Consumers are people who use or purchase goods and services for personal needs." },
        { q: "Why is advertising important to a business?", a: "It informs customers and increases sales", b: "It raises taxes", c: "It reduces profit", d: "It replaces employees", correct: "a", exp: "Advertising helps a business attract customers and communicate product information." }
    ],

    computer: [
        { q: "What is the main function of a computer keyboard?", a: "To display images", b: "To input data", c: "To print documents", d: "To store electricity", correct: "b", exp: "A keyboard is used to enter data and commands into the computer." },
        { q: "Which device is used to display output from a computer?", a: "Monitor", b: "Mouse", c: "Keyboard", d: "USB port", correct: "a", exp: "A monitor shows the visual output of the computer." },
        { q: "What does CPU stand for?", a: "Central Processing Unit", b: "Computer Power Utility", c: "Control Program Update", d: "Central Print Unit", correct: "a", exp: "CPU is the main electronic component that processes instructions in a computer." },
        { q: "Which of the following is an input device?", a: "Printer", b: "Scanner", c: "Speaker", d: "Monitor", correct: "b", exp: "A scanner converts physical documents into digital data for processing." },
        { q: "Which software is commonly used for creating documents?", a: "Microsoft Word", b: "Excel", c: "PowerPoint", d: "Browser", correct: "a", exp: "Microsoft Word is widely used for writing and editing documents." },
        { q: "Which program is best suited for making spreadsheets and calculations?", a: "Excel", b: "PowerPoint", c: "Word", d: "Paint", correct: "a", exp: "Excel is designed for working with tables, formulas and numeric calculations." },
        { q: "What is the purpose of PowerPoint?", a: "To create presentations", b: "To edit videos", c: "To send emails", d: "To manage networks", correct: "a", exp: "PowerPoint is used to create slides and presentations." },
        { q: "What is a network?", a: "A group of connected computers sharing resources", b: "A type of printer", c: "A form of storage device", d: "A keyboard shortcut", correct: "a", exp: "A computer network allows devices to communicate and share data." },
        { q: "What does RAM do?", a: "Stores data permanently", b: "Temporarily stores data for active tasks", c: "Creates sound", d: "Prints text", correct: "b", exp: "RAM is temporary memory used while the computer is running." },
        { q: "Which of the following is a storage device?", a: "Hard disk drive", b: "Monitor", c: "Speaker", d: "Mouse", correct: "a", exp: "A hard disk drive stores data for long-term use." },
        { q: "What is an operating system?", a: "The software that manages computer hardware and programs", b: "A type of keyboard", c: "A printer driver", d: "A network cable", correct: "a", exp: "The operating system controls hardware and allows software to run." },
        { q: "Which key is used to remove characters to the left in a word processor?", a: "Delete", b: "Backspace", c: "Shift", d: "Tab", correct: "b", exp: "Backspace removes the character before the cursor." },
        { q: "What is software?", a: "Programs used to perform tasks on a computer", b: "A type of mouse", c: "A collection of cables", d: "A power socket", correct: "a", exp: "Software consists of instructions and programs that run on a computer." },
        { q: "Which one is an output device?", a: "Keyboard", b: "Mouse", c: "Printer", d: "Scanner", correct: "c", exp: "A printer produces hard copies of digital documents." },
        { q: "What does the internet allow users to do?", a: "Only type letters", b: "Access information and communicate across the world", c: "Replace a computer", d: "Store electricity", correct: "b", exp: "The internet connects users globally for communication, research and information sharing." },
        { q: "What does WWW stand for?", a: "World Wide Web", b: "Wide Wireless Web", c: "Web World Window", d: "Web Wide Work", correct: "a", exp: "WWW means World Wide Web, the system of interlinked web pages on the internet." },
        { q: "Which device is used to connect a computer to a network?", a: "Modem", b: "Monitor", c: "Speaker", d: "Printer", correct: "a", exp: "A modem connects a computer or network to the internet or other networks." },
        { q: "What is antivirus software used for?", a: "To detect and remove viruses", b: "To increase RAM", c: "To repair hardware", d: "To store files", correct: "a", exp: "Antivirus software protects computers from malicious programs and threats." },
        { q: "What is malware?", a: "Malicious software designed to harm a computer", b: "A type of keyboard", c: "A printer cartridge", d: "A network cable", correct: "a", exp: "Malware includes viruses, worms, spyware and other harmful programs." },
        { q: "Which application is best for arranging data in rows and columns?", a: "Microsoft Excel", b: "Microsoft PowerPoint", c: "Adobe Reader", d: "Notepad", correct: "a", exp: "Excel is used for organizing data in tables, formulas and charts." },
        { q: "What does Ctrl + C do in most computer programs?", a: "Copies selected text or files", b: "Deletes the file", c: "Saves the document", d: "Prints the page", correct: "a", exp: "Ctrl + C copies the selected item to the clipboard." },
        { q: "Which file extension is commonly used for Excel workbooks?", a: ".xlsx", b: ".docx", c: ".pptx", d: ".mp3", correct: "a", exp: "Excel workbooks are commonly saved with the .xlsx extension." },
        { q: "What does PDF stand for?", a: "Portable Document Format", b: "Personal Data File", c: "Program Data Format", d: "Page Document File", correct: "a", exp: "PDF is a widely used format for sharing documents while preserving layout." },
        { q: "Which one is a web browser?", a: "Google Chrome", b: "Microsoft Word", c: "Windows Media Player", d: "Excel", correct: "a", exp: "A web browser is used to open and view websites on the internet." },
        { q: "What is a shortcut icon on the desktop?", a: "A quick way to open an application or file", b: "A type of printer", c: "A cable connection", d: "A processor", correct: "a", exp: "Shortcuts provide quick access to programs or files without opening their original location." },
        { q: "Which storage device is portable and commonly used for file transfer?", a: "USB flash drive", b: "Monitor", c: "Keyboard", d: "Motherboard", correct: "a", exp: "A USB flash drive is a portable storage device used for saving and moving files." }
    ],

    tanzania: [
        { q: "Aliyekuwa Rais wa kwanza wa Tanzania ni nani?", a: "Ali Hassan Mwinyi", b: "Julius Nyerere", c: "Benjamin Mkapa", d: "Jakaya Kikwete", correct: "b", exp: "Julius Nyerere alikuwa Rais wa kwanza wa Tanzania baada ya kuundwa kwa Jamhuri ya Muungano." },
        { q: "Tanganyika ilipata uhuru mwaka gani?", a: "1960", b: "1961", c: "1962", d: "1963", correct: "b", exp: "Tanganyika ilipata uhuru kutoka Uingereza mwaka 1961." },
        { q: "Nchi gani iliungana na Tanganyika ili kuunda Tanzania?", a: "Kenya", b: "Zanzibar", c: "Uganda", d: "Rwanda", correct: "b", exp: "Tanganyika iliungana na Zanzibar na kuunda Jamhuri ya Muungano ya Tanzania mwaka 1964." },
        { q: "Mji mkuu wa Tanzania ni upi?", a: "Dar es Salaam", b: "Dodoma", c: "Arusha", d: "Mwanza", correct: "b", exp: "Dodoma ni mji mkuu rasmi wa Tanzania." },
        { q: "Fedha ya Tanzania inaitwaje?", a: "Shilingi", b: "Dola", c: "Paundi", d: "Euro", correct: "a", exp: "Shilingi ya Tanzania ndiyo fedha inayotumika nchini." },
        { q: "Mji mkubwa zaidi Tanzania kwa idadi ya watu ni upi?", a: "Dodoma", b: "Dar es Salaam", c: "Mwanza", d: "Mbeya", correct: "b", exp: "Dar es Salaam ni mji mkubwa zaidi nchini na kitovu kikuu cha biashara." },
        { q: "Bendera ya Tanzania inawakilisha nini?", a: "Mto na mlima", b: "Umoja na uhuru", c: "Mwezi na nyota", d: "Bahari na jangwa", correct: "b", exp: "Bendera ya Tanzania inawakilisha umoja na uhuru wa taifa." },
        { q: "Mto gani mkubwa unatiririka Tanzania?", a: "Nile", b: "Amazon", c: "Yangtze", d: "Rufiji", correct: "d", exp: "Mto Rufiji ni mmoja wa mito mikubwa ya Tanzania." },
        { q: "Ziwa kubwa zaidi nchini Tanzania ni lipi?", a: "Ziwa Tanganyika", b: "Ziwa Victoria", c: "Ziwa Malawi", d: "Ziwa Eyasi", correct: "b", exp: "Ziwa Victoria ni ziwa kubwa zaidi nchini Tanzania kwa eneo lake." },
        { q: "Nani alikuwa mpiganaji wa uhuru na Rais wa kwanza wa Tanzania?", a: "Abeid Karume", b: "Julius Nyerere", c: "Mwalimu Nyerere", d: "Edward Sokoine", correct: "b", exp: "Julius Nyerere anajulikana kama Baba wa Taifa na Rais wa kwanza wa Tanzania." },
        { q: "Mlima mrefu zaidi nchini Tanzania ni upi?", a: "Mount Meru", b: "Mount Kilimanjaro", c: "Mount Rungwe", d: "Mount Hanang", correct: "b", exp: "Mlima Kilimanjaro ni mlima mrefu zaidi Tanzania na Afrika." },
        { q: "Lugha ya taifa ya Tanzania ni ipi?", a: "Kifaransa", b: "Kiingereza", c: "Kiswahili", d: "Kiarabu", correct: "c", exp: "Kiswahili ni lugha ya taifa na hutumika sana pamoja na Kiingereza." },
        { q: "Ni ipi kati ya hizi ni zao la mauzo ya nje la Tanzania?", a: "Ngano", b: "Kahawa", c: "Mpunga", d: "Kokoa", correct: "b", exp: "Kahawa ni moja ya mazao ya kuu ya mauzo ya nje ya Tanzania." },
        { q: "Jamhuri ya Muungano ya Tanzania iliundwa mwaka gani?", a: "1960", b: "1961", c: "1964", d: "1965", correct: "c", exp: "Jamhuri ya Muungano ya Tanzania iliundwa mwaka 1964 baada ya Tanganyika na Zanzibar kuungana." },
        { q: "Ni kitu gani maarufu nchini Tanzania kinavutia watalii wengi?", a: "Jangwa la Sahara", b: "Mlima Kilimanjaro", c: "Milima ya Alps", d: "Delta ya Nile", correct: "b", exp: "Mlima Kilimanjaro ni moja ya vivutio maarufu vya Tanzania." },
        { q: "Aliyekuwa Rais wa kwanza wa Zanzibar baada ya mapinduzi ya 1964 ni nani?", a: "Abeid Amani Karume", b: "Julius Nyerere", c: "Benjamin Mkapa", d: "Jakaya Kikwete", correct: "a", exp: "Abeid Amani Karume alikuwa Rais wa kwanza wa Zanzibar baada ya mapinduzi." },
        { q: "Mkoa gani unajulikana sana kwa kilimo cha kahawa Tanzania?", a: "Mbeya", b: "Dar es Salaam", c: "Pwani", d: "Kigoma", correct: "a", exp: "Mbeya ni moja ya mikoa ya kahawa nchini Tanzania." },
        { q: "Wimbo wa Taifa wa Tanzania unaitwaje?", a: "Mungu Ibariki Afrika", b: "Kilimanjaro", c: "Sauti ya Tanzania", d: "Tanzania Yetu", correct: "a", exp: "Mungu Ibariki Afrika ni wimbo wa Taifa wa Tanzania." },
        { q: "Nchi gani inapakana na Tanzania magharibi?", a: "Kenya", b: "Jamhuri ya Kidemokrasia ya Kongo", c: "Uganda", d: "Malawi", correct: "b", exp: "Jamhuri ya Kidemokrasia ya Kongo iko magharibi mwa Tanzania." },
        { q: "Mji gani ni bandari kuu ya Tanzania?", a: "Dar es Salaam", b: "Dodoma", c: "Arusha", d: "Sumbawanga", correct: "a", exp: "Dar es Salaam ni bandari kubwa na mji wa biashara nchini Tanzania." },
        { q: "Mchezo maarufu wa taifa Tanzania ni upi?", a: "Kriketi", b: "Mpira wa miguu", c: "Hoki", d: "Ragbi", correct: "b", exp: "Mpira wa miguu ni moja ya michezo maarufu na inayotazamwa sana nchini." },
        { q: "Hifadhi ya taifa kubwa ya kibiashara inayopatikana kaskazini mwa Tanzania ni ipi?", a: "Serengeti", b: "Mikumi", c: "Ruaha", d: "Gombe", correct: "a", exp: "Hifadhi ya Serengeti iko kaskazini mwa Tanzania na inajulikana kwa wanyamapori." },
        { q: "Nani anajulikana kama Mwalimu nchini Tanzania?", a: "Julius Nyerere", b: "Abeid Karume", c: "John Magufuli", d: "Samia Suluhu Hassan", correct: "a", exp: "Julius Nyerere anajulikana kama Mwalimu, maana yake mwalimu." },
        { q: "Ni ipi kati ya hizi ni rasilimali kubwa ya Tanzania?", a: "Dhahabu", b: "Petroli tu", c: "Almasi tu", d: "Makaa ya mawe tu", correct: "a", exp: "Tanzania ina madini mengi, ikiwemo dhahabu na almasi." },
        { q: "Mji gani unajulikana kwa utalii na safari kaskazini mwa Tanzania?", a: "Arusha", b: "Kigoma", c: "Tabora", d: "Lindi", correct: "a", exp: "Arusha ni kitovu kikuu cha utalii na safari kaskazini mwa Tanzania." },
        { q: "Kusudi la rangi za bendera ya Tanzania ni nini?", a: "Kuonyesha amani na umoja", b: "Kuonyesha mto", c: "Kuonyesha mlima", d: "Kuonyesha angani tu", correct: "a", exp: "Bendera inaonyesha umoja, amani na utambulisho wa taifa." }
    ]
};

function normalizeQuestionText(text) {
    return String(text || '')
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function getSubjectDifficultyKeywords(subjectKey) {
    return SUBJECT_DIFFICULTY_HINTS[subjectKey] || { easy: [], medium: [], hard: [] };
}

function getQuestionDifficultyScore(subjectKey, question) {
    const text = normalizeQuestionText(question.q);
    const keywords = getSubjectDifficultyKeywords(subjectKey);
    const wordCount = text.split(/\s+/).length;
    let score = wordCount * 1.5;

    const easyMatches = keywords.easy.filter((word) => text.includes(word)).length;
    const mediumMatches = keywords.medium.filter((word) => text.includes(word)).length;
    const hardMatches = keywords.hard.filter((word) => text.includes(word)).length;

    score -= easyMatches * 3;
    score += mediumMatches * 2.5;
    score += hardMatches * 4.8;

    const multiStepWords = ['calculate', 'compare', 'evaluate', 'justify', 'explain', 'interpret', 'derive', 'determine', 'analyze', 'estimate', 'solve', 'reason', 'predict', 'classify', 'conclude', 'balance', 'simplify'];
    const analyticalWords = ['equation', 'process', 'concept', 'government', 'revolution', 'electrical', 'photosynthesis', 'constitution', 'sovereignty', 'strategy', 'system', 'function', 'reaction', 'trend', 'pattern', 'relationship'];
    const examStyleWords = ['most', 'best', 'least', 'which statement', 'which of the following', 'in order to', 'based on', 'when', 'if', 'therefore', 'result'];

    score += multiStepWords.filter((word) => text.includes(word)).length * 3.6;
    score += analyticalWords.filter((word) => text.includes(word)).length * 2.8;
    score += examStyleWords.filter((word) => text.includes(word)).length * 1.8;

    const recallWords = ['who', 'what', 'where', 'when', 'which', 'name', 'identify', 'choose', 'define'];
    score -= recallWords.filter((word) => text.includes(word)).length * 1.4;

    return score;
}

function classifyQuestionDifficulty(subjectKey, question) {
    const score = getQuestionDifficultyScore(subjectKey, question);

    if (score <= 15) return 'easy';
    if (score <= 26) return 'medium';
    return 'hard';
}

function createQuestionVariant(question, variantIndex, subjectKey) {
    const baseText = String(question.q || '').trim();
    const variantText = variantIndex === 0 ? baseText : `${baseText} (${variantIndex + 1})`;

    return {
        ...question,
        q: variantText,
        exp: `${question.exp || 'Practice question.'} Variant ${variantIndex + 1} for ${subjectKey}.`
    };
}

function ensureSubjectBankSize() {
    Object.keys(questionBanks).forEach((subjectKey) => {
        const originalBank = questionBanks[subjectKey];
        if (!Array.isArray(originalBank) || originalBank.length === 0) return;

        const seen = new Set();
        const uniqueBank = [];

        originalBank.forEach((question) => {
            const key = normalizeQuestionText(question.q);
            if (!key || seen.has(key)) return;
            seen.add(key);
            uniqueBank.push(question);
        });

        const expanded = [...uniqueBank];
        let variantCounter = 1;

        while (expanded.length < TARGET_PER_SUBJECT) {
            const source = uniqueBank[(expanded.length - 1) % uniqueBank.length];
            const variant = createQuestionVariant(source, variantCounter, subjectKey);
            const variantKey = normalizeQuestionText(variant.q);
            if (!seen.has(variantKey)) {
                seen.add(variantKey);
                expanded.push(variant);
            }
            variantCounter += 1;
        }

        questionBanks[subjectKey] = expanded.slice(0, TARGET_PER_SUBJECT);
    });
}

function buildLevelPool(subjectKey, level) {
    const bank = questionBanks[subjectKey] || [];
    if (!bank.length) return [];

    const grouped = {
        easy: [],
        medium: [],
        hard: []
    };

    bank.forEach((question) => {
        grouped[classifyQuestionDifficulty(subjectKey, question)].push(question);
    });

    const levelMix = {
        easy: { easy: 0.78, medium: 0.18, hard: 0.04 },
        normal: { easy: 0.32, medium: 0.48, hard: 0.20 },
        hard: { easy: 0.08, medium: 0.28, hard: 0.64 }
    };

    const mix = levelMix[level] || levelMix.normal;
    const selected = [];

    ['easy', 'medium', 'hard'].forEach((band) => {
        const targetCount = Math.max(1, Math.round((bank.length || 0) * mix[band]));
        const candidates = grouped[band] || [];
        const take = candidates.slice(0, targetCount);
        selected.push(...take);
    });

    const targetSize = LEVEL_POOL_TARGETS[level] || LEVEL_POOL_TARGETS.normal;
    const finalPool = shuffle(selected).slice(0, Math.min(selected.length, targetSize));
    return finalPool;
}

function buildSessionPool(subjectKey, level) {
    const seen = new Set();
    const uniquePool = [];

    buildLevelPool(subjectKey, level).forEach((question) => {
        const key = normalizeQuestionText(question.q);
        if (!key || seen.has(key)) return;
        seen.add(key);
        uniquePool.push(question);
    });

    return uniquePool;
}

ensureSubjectBankSize();

// ---------- STATE ----------
let currentSubject = null;
let currentLevel = null;
let pool = [];             // full (shuffled) question list for the chosen subject
let batchStart = 0;        // index into pool where current batch of 10 begins
let currentQuestions = []; // the current batch (max 10)
let userAnswers = [];
let startTime = null;
let sessionCorrect = 0;    // cumulative correct across all batches this session
let sessionAnswered = 0;   // cumulative answered across all batches this session
let currentQuestionIndex = 0;
let questionRetryState = [];
let usedQuestionKeysBySubjectLevel = {};

function getQuestionKey(question) {
    return normalizeQuestionText(question.q);
}

function rememberUsedQuestions(subjectKey, level, questions) {
    const key = `${subjectKey}:${level}`;
    const usedSet = usedQuestionKeysBySubjectLevel[key] || new Set();
    questions.forEach((question) => {
        const questionKey = getQuestionKey(question);
        if (questionKey) usedSet.add(questionKey);
    });
    usedQuestionKeysBySubjectLevel[key] = usedSet;
}

function getFreshUniqueSessionPool(subjectKey, level) {
    const basePool = buildSessionPool(subjectKey, level);
    const key = `${subjectKey}:${level}`;
    const used = usedQuestionKeysBySubjectLevel[key] || new Set();
    const available = basePool.filter((question) => !used.has(getQuestionKey(question)));

    if (available.length >= BATCH_SIZE) {
        return shuffle(available).slice(0, BATCH_SIZE);
    }

    const fallback = basePool.filter((question) => used.has(getQuestionKey(question)));
    return shuffle([...available, ...fallback]).slice(0, Math.min(BATCH_SIZE, basePool.length));
}

function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function renderSubjectCards() {
    const grid = document.getElementById('subjectsGrid');
    grid.innerHTML = '';
    subjectsList.forEach(s => {
        const count = (questionBanks[s.key] || []).length;
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.onclick = () => selectSubject(s.key);
        card.innerHTML = `
            <div class="icon">${s.icon}</div>
            <h2>${s.label}</h2>
            <p>${s.desc}</p>
            <p style="margin-top:6px; font-weight:600;">${count} questions</p>
        `;
        grid.appendChild(card);
    });
}

renderSubjectCards();

function selectSubject(subject) {
    currentSubject = subject;
    showSection('levelSection');
}

function selectLevel(level) {
    currentLevel = level;
    pool = getFreshUniqueSessionPool(currentSubject, level);
    rememberUsedQuestions(currentSubject, level, pool);
    batchStart = 0;
    sessionCorrect = 0;
    sessionAnswered = 0;
    startTime = Date.now();
    loadBatch();
    showSection('quizSection');
}

function loadBatch() {
    const remainingPool = pool.slice(batchStart);
    currentQuestions = remainingPool.slice(0, BATCH_SIZE);

    if (currentQuestions.length < BATCH_SIZE && pool.length >= BATCH_SIZE) {
        const reusedQuestions = pool.slice(0, BATCH_SIZE - currentQuestions.length);
        currentQuestions = [...currentQuestions, ...reusedQuestions.filter((question) => !currentQuestions.some((selected) => normalizeQuestionText(selected.q) === normalizeQuestionText(question.q)))];
    }

    userAnswers = new Array(currentQuestions.length).fill(null);
    questionRetryState = new Array(currentQuestions.length).fill(0);
    currentQuestionIndex = 0;
    document.getElementById('bankTotal').textContent = (questionBanks[currentSubject] || []).length;
    displayQuestion();
}

function showExplanation(message) {
    const explanationBox = document.getElementById('explanation');
    explanationBox.textContent = message;
    explanationBox.classList.add('show');
}

function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];

    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('questionCounter').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = currentQuestions.length;
    document.getElementById('questionNumberLabel').textContent = `Question ${currentQuestionIndex + 1}`;

    document.getElementById('questionText').textContent = question.q;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    const options = [
        { label: 'A', value: 'a', text: question.a },
        { label: 'B', value: 'b', text: question.b },
        { label: 'C', value: 'c', text: question.c },
        { label: 'D', value: 'd', text: question.d }
    ];

    options.forEach(opt => {
        const optDiv = document.createElement('div');
        optDiv.className = 'option';
        optDiv.textContent = `${opt.label}. ${opt.text}`;

        if (userAnswers[currentQuestionIndex] === opt.value) {
            optDiv.classList.add('selected');
        }

        optDiv.onclick = () => selectOption(opt.value, optDiv.parentElement);
        optionsContainer.appendChild(optDiv);
    });

    document.getElementById('explanation').classList.remove('show');
    document.getElementById('explanation').textContent = '';

    const nextBtn = document.getElementById('nextBtn');
    nextBtn.dataset.retry = 'false';
    nextBtn.textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'Finish This Set' : 'Next →';

    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
}

function selectOption(value, container) {
    const question = currentQuestions[currentQuestionIndex];
    const nextBtn = document.getElementById('nextBtn');
    const options = container.querySelectorAll('.option');
    const optionLetters = ['a', 'b', 'c', 'd'];
    const selectedIndex = optionLetters.indexOf(value);
    const correctIndex = optionLetters.indexOf(question.correct);

    options.forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
        opt.classList.add('disabled');
    });

    if (value === question.correct) {
        userAnswers[currentQuestionIndex] = value;
        options[selectedIndex].classList.add('selected', 'correct');
        showExplanation(question.exp);
        nextBtn.dataset.retry = 'false';
        nextBtn.textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'Finish This Set' : 'Next →';
        return;
    }

    userAnswers[currentQuestionIndex] = value;
    options[selectedIndex].classList.add('incorrect');
    options[correctIndex].classList.add('correct');
    nextBtn.dataset.retry = 'false';
    nextBtn.textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'Finish This Set' : 'Next →';
    showExplanation(`Incorrect. The correct answer is ${question[question.correct].toUpperCase()}. ${question.exp}`);
}

function nextQuestion() {
    const nextBtn = document.getElementById('nextBtn');

    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        finishBatch();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function finishBatch() {
    const batchCorrect = userAnswers.reduce((count, answer, index) => {
        return answer === currentQuestions[index].correct ? count + 1 : count;
    }, 0);

    sessionCorrect += batchCorrect;
    sessionAnswered += currentQuestions.length;

    const nextStart = batchStart + BATCH_SIZE;
    const subjLabel = (subjectsList.find(s => s.key === currentSubject) || {}).label || currentSubject;

    if (nextStart >= pool.length) {
        document.getElementById('bankDoneTally').textContent =
            `You answered ${sessionAnswered} questions in ${subjLabel}. Correct: ${sessionCorrect}.`;
        showSection('bankDoneSection');
    } else {
        document.getElementById('batchCorrect').textContent = sessionCorrect;
        document.getElementById('batchAnswered').textContent = sessionAnswered;
        document.getElementById('batchSubjectName').textContent = subjLabel;
        showSection('batchCompleteSection');
    }
}

function continueQuiz() {
    batchStart += BATCH_SIZE;
    loadBatch();
    showSection('quizSection');
}

function stopAndShowResults() {
    const incorrect = sessionAnswered - sessionCorrect;
    const accuracy = sessionAnswered > 0 ? Math.round((sessionCorrect / sessionAnswered) * 100) : 0;
    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000);

    document.getElementById('finalScore').textContent = sessionCorrect;
    document.getElementById('finalTotal').textContent = sessionAnswered;
    document.getElementById('correctCount').textContent = sessionCorrect;
    document.getElementById('incorrectCount').textContent = incorrect;
    document.getElementById('accuracy').textContent = accuracy + '%';
    document.getElementById('timeTaken').textContent = formatTime(timeTaken);

    let message = '';
    let emoji = '';

    if (accuracy >= 90) { message = '🎯 Excellent work!'; emoji = '🏆'; }
    else if (accuracy >= 75) { message = '✨ Great job!'; emoji = '⭐'; }
    else if (accuracy >= 60) { message = '👍 Nice effort!'; emoji = '😊'; }
    else if (accuracy >= 40) { message = '💪 Keep practicing!'; emoji = '📚'; }
    else { message = '🎓 Study more and try again!'; emoji = '📖'; }

    document.getElementById('performanceMessage').textContent = message;
    document.getElementById('performanceEmoji').textContent = emoji;

    showSection('resultsSection');
}

function quitQuiz() {
    const shouldQuit = window.confirm('Quit this quiz and return to the subject list? Your current progress will be lost.');
    if (!shouldQuit) return;

    currentQuestionIndex = 0;
    currentQuestions = [];
    userAnswers = [];
    currentSubject = null;
    currentLevel = null;
    pool = [];
    batchStart = 0;
    sessionCorrect = 0;
    sessionAnswered = 0;
    startTime = null;
    renderSubjectCards();
    showSection('subjectSection');
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
}

function startNewQuiz() {
    if (!currentSubject || !currentLevel) {
        restartQuiz();
        return;
    }

    selectLevel(currentLevel);
}

function changeLevel() {
    if (!currentSubject) {
        restartQuiz();
        return;
    }

    currentLevel = null;
    pool = [];
    batchStart = 0;
    currentQuestions = [];
    userAnswers = [];
    currentQuestionIndex = 0;
    sessionCorrect = 0;
    sessionAnswered = 0;
    startTime = null;
    showSection('levelSection');
}

function goBack() {
    showSection('subjectSection');
    currentSubject = null;
    currentLevel = null;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    currentQuestions = [];
    userAnswers = [];
    currentSubject = null;
    currentLevel = null;
    pool = [];
    batchStart = 0;
    sessionCorrect = 0;
    sessionAnswered = 0;
    usedQuestionKeysBySubjectLevel = {};
    renderSubjectCards();
    showSection('subjectSection');
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
