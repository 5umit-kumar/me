// --- DATASET ---
const elements = [
    { number: 1, symbol: "H", name: "Hydrogen", mass: "1.008", category: "nonmetal", group: 1, period: 1, config: "1s1", phase: "Gas" },
    { number: 2, symbol: "He", name: "Helium", mass: "4.0026", category: "noble", group: 18, period: 1, config: "1s2", phase: "Gas" },
    { number: 3, symbol: "Li", name: "Lithium", mass: "6.94", category: "alkali", group: 1, period: 2, config: "[He] 2s1", phase: "Solid" },
    { number: 4, symbol: "Be", name: "Beryllium", mass: "9.0122", category: "alkaline", group: 2, period: 2, config: "[He] 2s2", phase: "Solid" },
    { number: 5, symbol: "B", name: "Boron", mass: "10.81", category: "metalloid", group: 13, period: 2, config: "[He] 2s2 2p1", phase: "Solid" },
    { number: 6, symbol: "C", name: "Carbon", mass: "12.011", category: "nonmetal", group: 14, period: 2, config: "[He] 2s2 2p2", phase: "Solid" },
    { number: 7, symbol: "N", name: "Nitrogen", mass: "14.007", category: "nonmetal", group: 15, period: 2, config: "[He] 2s2 2p3", phase: "Gas" },
    { number: 8, symbol: "O", name: "Oxygen", mass: "15.999", category: "nonmetal", group: 16, period: 2, config: "[He] 2s2 2p4", phase: "Gas" },
    { number: 9, symbol: "F", name: "Fluorine", mass: "18.998", category: "halogen", group: 17, period: 2, config: "[He] 2s2 2p5", phase: "Gas" },
    { number: 10, symbol: "Ne", name: "Neon", mass: "20.180", category: "noble", group: 18, period: 2, config: "[He] 2s2 2p6", phase: "Gas" },
    { number: 11, symbol: "Na", name: "Sodium", mass: "22.990", category: "alkali", group: 1, period: 3, config: "[Ne] 3s1", phase: "Solid" },
    { number: 12, symbol: "Mg", name: "Magnesium", mass: "24.305", category: "alkaline", group: 2, period: 3, config: "[Ne] 3s2", phase: "Solid" },
    { number: 13, symbol: "Al", name: "Aluminium", mass: "26.982", category: "basic", group: 13, period: 3, config: "[Ne] 3s2 3p1", phase: "Solid" },
    { number: 14, symbol: "Si", name: "Silicon", mass: "28.085", category: "metalloid", group: 14, period: 3, config: "[Ne] 3s2 3p2", phase: "Solid" },
    { number: 15, symbol: "P", name: "Phosphorus", mass: "30.974", category: "nonmetal", group: 15, period: 3, config: "[Ne] 3s2 3p3", phase: "Solid" },
    { number: 16, symbol: "S", name: "Sulfur", mass: "32.06", category: "nonmetal", group: 16, period: 3, config: "[Ne] 3s2 3p4", phase: "Solid" },
    { number: 17, symbol: "Cl", name: "Chlorine", mass: "35.45", category: "halogen", group: 17, period: 3, config: "[Ne] 3s2 3p5", phase: "Gas" },
    { number: 18, symbol: "Ar", name: "Argon", mass: "39.948", category: "noble", group: 18, period: 3, config: "[Ne] 3s2 3p6", phase: "Gas" },
    { number: 19, symbol: "K", name: "Potassium", mass: "39.098", category: "alkali", group: 1, period: 4, config: "[Ar] 4s1", phase: "Solid" },
    { number: 20, symbol: "Ca", name: "Calcium", mass: "40.078", category: "alkaline", group: 2, period: 4, config: "[Ar] 4s2", phase: "Solid" },
    { number: 21, symbol: "Sc", name: "Scandium", mass: "44.956", category: "transition", group: 3, period: 4, config: "[Ar] 3d1 4s2", phase: "Solid" },
    { number: 22, symbol: "Ti", name: "Titanium", mass: "47.867", category: "transition", group: 4, period: 4, config: "[Ar] 3d2 4s2", phase: "Solid" },
    { number: 23, symbol: "V", name: "Vanadium", mass: "50.942", category: "transition", group: 5, period: 4, config: "[Ar] 3d3 4s2", phase: "Solid" },
    { number: 24, symbol: "Cr", name: "Chromium", mass: "51.996", category: "transition", group: 6, period: 4, config: "[Ar] 3d5 4s1", phase: "Solid" },
    { number: 25, symbol: "Mn", name: "Manganese", mass: "54.938", category: "transition", group: 7, period: 4, config: "[Ar] 3d5 4s2", phase: "Solid" },
    { number: 26, symbol: "Fe", name: "Iron", mass: "55.845", category: "transition", group: 8, period: 4, config: "[Ar] 3d6 4s2", phase: "Solid" },
    { number: 27, symbol: "Co", name: "Cobalt", mass: "58.933", category: "transition", group: 9, period: 4, config: "[Ar] 3d7 4s2", phase: "Solid" },
    { number: 28, symbol: "Ni", name: "Nickel", mass: "58.693", category: "transition", group: 10, period: 4, config: "[Ar] 3d8 4s2", phase: "Solid" },
    { number: 29, symbol: "Cu", name: "Copper", mass: "63.546", category: "transition", group: 11, period: 4, config: "[Ar] 3d10 4s1", phase: "Solid" },
    { number: 30, symbol: "Zn", name: "Zinc", mass: "65.38", category: "transition", group: 12, period: 4, config: "[Ar] 3d10 4s2", phase: "Solid" },
    { number: 31, symbol: "Ga", name: "Gallium", mass: "69.723", category: "basic", group: 13, period: 4, config: "[Ar] 3d10 4s2 4p1", phase: "Solid" },
    { number: 32, symbol: "Ge", name: "Germanium", mass: "72.630", category: "metalloid", group: 14, period: 4, config: "[Ar] 3d10 4s2 4p2", phase: "Solid" },
    { number: 33, symbol: "As", name: "Arsenic", mass: "74.922", category: "metalloid", group: 15, period: 4, config: "[Ar] 3d10 4s2 4p3", phase: "Solid" },
    { number: 34, symbol: "Se", name: "Selenium", mass: "78.971", category: "nonmetal", group: 16, period: 4, config: "[Ar] 3d10 4s2 4p4", phase: "Solid" },
    { number: 35, symbol: "Br", name: "Bromine", mass: "79.904", category: "halogen", group: 17, period: 4, config: "[Ar] 3d10 4s2 4p5", phase: "Liquid" },
    { number: 36, symbol: "Kr", name: "Krypton", mass: "83.798", category: "noble", group: 18, period: 4, config: "[Ar] 3d10 4s2 4p6", phase: "Gas" },
    { number: 37, symbol: "Rb", name: "Rubidium", mass: "85.468", category: "alkali", group: 1, period: 5, config: "[Kr] 5s1", phase: "Solid" },
    { number: 38, symbol: "Sr", name: "Strontium", mass: "87.62", category: "alkaline", group: 2, period: 5, config: "[Kr] 5s2", phase: "Solid" },
    { number: 39, symbol: "Y", name: "Yttrium", mass: "88.906", category: "transition", group: 3, period: 5, config: "[Kr] 4d1 5s2", phase: "Solid" },
    { number: 40, symbol: "Zr", name: "Zirconium", mass: "91.224", category: "transition", group: 4, period: 5, config: "[Kr] 4d2 5s2", phase: "Solid" },
    { number: 41, symbol: "Nb", name: "Niobium", mass: "92.906", category: "transition", group: 5, period: 5, config: "[Kr] 4d4 5s1", phase: "Solid" },
    { number: 42, symbol: "Mo", name: "Molybdenum", mass: "95.95", category: "transition", group: 6, period: 5, config: "[Kr] 4d5 5s1", phase: "Solid" },
    { number: 43, symbol: "Tc", name: "Technetium", mass: "(98)", category: "transition", group: 7, period: 5, config: "[Kr] 4d5 5s2", phase: "Solid" },
    { number: 44, symbol: "Ru", name: "Ruthenium", mass: "101.07", category: "transition", group: 8, period: 5, config: "[Kr] 4d7 5s1", phase: "Solid" },
    { number: 45, symbol: "Rh", name: "Rhodium", mass: "102.91", category: "transition", group: 9, period: 5, config: "[Kr] 4d8 5s1", phase: "Solid" },
    { number: 46, symbol: "Pd", name: "Palladium", mass: "106.42", category: "transition", group: 10, period: 5, config: "[Kr] 4d10", phase: "Solid" },
    { number: 47, symbol: "Ag", name: "Silver", mass: "107.87", category: "transition", group: 11, period: 5, config: "[Kr] 4d10 5s1", phase: "Solid" },
    { number: 48, symbol: "Cd", name: "Cadmium", mass: "112.41", category: "transition", group: 12, period: 5, config: "[Kr] 4d10 5s2", phase: "Solid" },
    { number: 49, symbol: "In", name: "Indium", mass: "114.82", category: "basic", group: 13, period: 5, config: "[Kr] 4d10 5s2 5p1", phase: "Solid" },
    { number: 50, symbol: "Sn", name: "Tin", mass: "118.71", category: "basic", group: 14, period: 5, config: "[Kr] 4d10 5s2 5p2", phase: "Solid" },
    { number: 51, symbol: "Sb", name: "Antimony", mass: "121.76", category: "metalloid", group: 15, period: 5, config: "[Kr] 4d10 5s2 5p3", phase: "Solid" },
    { number: 52, symbol: "Te", name: "Tellurium", mass: "127.60", category: "metalloid", group: 16, period: 5, config: "[Kr] 4d10 5s2 5p4", phase: "Solid" },
    { number: 53, symbol: "I", name: "Iodine", mass: "126.90", category: "halogen", group: 17, period: 5, config: "[Kr] 4d10 5s2 5p5", phase: "Solid" },
    { number: 54, symbol: "Xe", name: "Xenon", mass: "131.29", category: "noble", group: 18, period: 5, config: "[Kr] 4d10 5s2 5p6", phase: "Gas" },
    { number: 55, symbol: "Cs", name: "Cesium", mass: "132.91", category: "alkali", group: 1, period: 6, config: "[Xe] 6s1", phase: "Solid" },
    { number: 56, symbol: "Ba", name: "Barium", mass: "137.33", category: "alkaline", group: 2, period: 6, config: "[Xe] 6s2", phase: "Solid" },
    // Lanthanides (57-71)
    { number: 57, symbol: "La", name: "Lanthanum", mass: "138.91", category: "lanthanide", group: 3, period: 6, config: "[Xe] 5d1 6s2", phase: "Solid" },
    { number: 58, symbol: "Ce", name: "Cerium", mass: "140.12", category: "lanthanide", group: 4, period: 6, config: "[Xe] 4f1 5d1 6s2", phase: "Solid" },
    { number: 59, symbol: "Pr", name: "Praseodymium", mass: "140.91", category: "lanthanide", group: 5, period: 6, config: "[Xe] 4f3 6s2", phase: "Solid" },
    { number: 60, symbol: "Nd", name: "Neodymium", mass: "144.24", category: "lanthanide", group: 6, period: 6, config: "[Xe] 4f4 6s2", phase: "Solid" },
    { number: 61, symbol: "Pm", name: "Promethium", mass: "(145)", category: "lanthanide", group: 7, period: 6, config: "[Xe] 4f5 6s2", phase: "Solid" },
    { number: 62, symbol: "Sm", name: "Samarium", mass: "150.36", category: "lanthanide", group: 8, period: 6, config: "[Xe] 4f6 6s2", phase: "Solid" },
    { number: 63, symbol: "Eu", name: "Europium", mass: "151.96", category: "lanthanide", group: 9, period: 6, config: "[Xe] 4f7 6s2", phase: "Solid" },
    { number: 64, symbol: "Gd", name: "Gadolinium", mass: "157.25", category: "lanthanide", group: 10, period: 6, config: "[Xe] 4f7 5d1 6s2", phase: "Solid" },
    { number: 65, symbol: "Tb", name: "Terbium", mass: "158.93", category: "lanthanide", group: 11, period: 6, config: "[Xe] 4f9 6s2", phase: "Solid" },
    { number: 66, symbol: "Dy", name: "Dysprosium", mass: "162.50", category: "lanthanide", group: 12, period: 6, config: "[Xe] 4f10 6s2", phase: "Solid" },
    { number: 67, symbol: "Ho", name: "Holmium", mass: "164.93", category: "lanthanide", group: 13, period: 6, config: "[Xe] 4f11 6s2", phase: "Solid" },
    { number: 68, symbol: "Er", name: "Erbium", mass: "167.26", category: "lanthanide", group: 14, period: 6, config: "[Xe] 4f12 6s2", phase: "Solid" },
    { number: 69, symbol: "Tm", name: "Thulium", mass: "168.93", category: "lanthanide", group: 15, period: 6, config: "[Xe] 4f13 6s2", phase: "Solid" },
    { number: 70, symbol: "Yb", name: "Ytterbium", mass: "173.05", category: "lanthanide", group: 16, period: 6, config: "[Xe] 4f14 6s2", phase: "Solid" },
    { number: 71, symbol: "Lu", name: "Lutetium", mass: "174.97", category: "lanthanide", group: 17, period: 6, config: "[Xe] 4f14 5d1 6s2", phase: "Solid" },
    // Continue Period 6
    { number: 72, symbol: "Hf", name: "Hafnium", mass: "178.49", category: "transition", group: 4, period: 6, config: "[Xe] 4f14 5d2 6s2", phase: "Solid" },
    { number: 73, symbol: "Ta", name: "Tantalum", mass: "180.95", category: "transition", group: 5, period: 6, config: "[Xe] 4f14 5d3 6s2", phase: "Solid" },
    { number: 74, symbol: "W", name: "Tungsten", mass: "183.84", category: "transition", group: 6, period: 6, config: "[Xe] 4f14 5d4 6s2", phase: "Solid" },
    { number: 75, symbol: "Re", name: "Rhenium", mass: "186.21", category: "transition", group: 7, period: 6, config: "[Xe] 4f14 5d5 6s2", phase: "Solid" },
    { number: 76, symbol: "Os", name: "Osmium", mass: "190.23", category: "transition", group: 8, period: 6, config: "[Xe] 4f14 5d6 6s2", phase: "Solid" },
    { number: 77, symbol: "Ir", name: "Iridium", mass: "192.22", category: "transition", group: 9, period: 6, config: "[Xe] 4f14 5d7 6s2", phase: "Solid" },
    { number: 78, symbol: "Pt", name: "Platinum", mass: "195.08", category: "transition", group: 10, period: 6, config: "[Xe] 4f14 5d9 6s1", phase: "Solid" },
    { number: 79, symbol: "Au", name: "Gold", mass: "196.97", category: "transition", group: 11, period: 6, config: "[Xe] 4f14 5d10 6s1", phase: "Solid" },
    { number: 80, symbol: "Hg", name: "Mercury", mass: "200.59", category: "transition", group: 12, period: 6, config: "[Xe] 4f14 5d10 6s2", phase: "Liquid" },
    { number: 81, symbol: "Tl", name: "Thallium", mass: "204.38", category: "basic", group: 13, period: 6, config: "[Xe] 4f14 5d10 6s2 6p1", phase: "Solid" },
    { number: 82, symbol: "Pb", name: "Lead", mass: "207.2", category: "basic", group: 14, period: 6, config: "[Xe] 4f14 5d10 6s2 6p2", phase: "Solid" },
    { number: 83, symbol: "Bi", name: "Bismuth", mass: "208.98", category: "basic", group: 15, period: 6, config: "[Xe] 4f14 5d10 6s2 6p3", phase: "Solid" },
    { number: 84, symbol: "Po", name: "Polonium", mass: "(209)", category: "metalloid", group: 16, period: 6, config: "[Xe] 4f14 5d10 6s2 6p4", phase: "Solid" },
    { number: 85, symbol: "At", name: "Astatine", mass: "(210)", category: "halogen", group: 17, period: 6, config: "[Xe] 4f14 5d10 6s2 6p5", phase: "Solid" },
    { number: 86, symbol: "Rn", name: "Radon", mass: "(222)", category: "noble", group: 18, period: 6, config: "[Xe] 4f14 5d10 6s2 6p6", phase: "Gas" },
    { number: 87, symbol: "Fr", name: "Francium", mass: "(223)", category: "alkali", group: 1, period: 7, config: "[Rn] 7s1", phase: "Solid" },
    { number: 88, symbol: "Ra", name: "Radium", mass: "(226)", category: "alkaline", group: 2, period: 7, config: "[Rn] 7s2", phase: "Solid" },
    // Actinides (89-103)
    { number: 89, symbol: "Ac", name: "Actinium", mass: "(227)", category: "actinide", group: 3, period: 7, config: "[Rn] 6d1 7s2", phase: "Solid" },
    { number: 90, symbol: "Th", name: "Thorium", mass: "232.04", category: "actinide", group: 4, period: 7, config: "[Rn] 6d2 7s2", phase: "Solid" },
    { number: 91, symbol: "Pa", name: "Protactinium", mass: "231.04", category: "actinide", group: 5, period: 7, config: "[Rn] 5f2 6d1 7s2", phase: "Solid" },
    { number: 92, symbol: "U", name: "Uranium", mass: "238.03", category: "actinide", group: 6, period: 7, config: "[Rn] 5f3 6d1 7s2", phase: "Solid" },
    { number: 93, symbol: "Np", name: "Neptunium", mass: "(237)", category: "actinide", group: 7, period: 7, config: "[Rn] 5f4 6d1 7s2", phase: "Solid" },
    { number: 94, symbol: "Pu", name: "Plutonium", mass: "(244)", category: "actinide", group: 8, period: 7, config: "[Rn] 5f6 7s2", phase: "Solid" },
    { number: 95, symbol: "Am", name: "Americium", mass: "(243)", category: "actinide", group: 9, period: 7, config: "[Rn] 5f7 7s2", phase: "Solid" },
    { number: 96, symbol: "Cm", name: "Curium", mass: "(247)", category: "actinide", group: 10, period: 7, config: "[Rn] 5f7 6d1 7s2", phase: "Solid" },
    { number: 97, symbol: "Bk", name: "Berkelium", mass: "(247)", category: "actinide", group: 11, period: 7, config: "[Rn] 5f9 7s2", phase: "Solid" },
    { number: 98, symbol: "Cf", name: "Californium", mass: "(251)", category: "actinide", group: 12, period: 7, config: "[Rn] 5f10 7s2", phase: "Solid" },
    { number: 99, symbol: "Es", name: "Einsteinium", mass: "(252)", category: "actinide", group: 13, period: 7, config: "[Rn] 5f11 7s2", phase: "Solid" },
    { number: 100, symbol: "Fm", name: "Fermium", mass: "(257)", category: "actinide", group: 14, period: 7, config: "[Rn] 5f12 7s2", phase: "Solid" },
    { number: 101, symbol: "Md", name: "Mendelevium", mass: "(258)", category: "actinide", group: 15, period: 7, config: "[Rn] 5f13 7s2", phase: "Solid" },
    { number: 102, symbol: "No", name: "Nobelium", mass: "(259)", category: "actinide", group: 16, period: 7, config: "[Rn] 5f14 7s2", phase: "Solid" },
    { number: 103, symbol: "Lr", name: "Lawrencium", mass: "(262)", category: "actinide", group: 17, period: 7, config: "[Rn] 5f14 7s2 7p1", phase: "Solid" },
    // Continue Period 7
    { number: 104, symbol: "Rf", name: "Rutherfordium", mass: "(267)", category: "transition", group: 4, period: 7, config: "[Rn] 5f14 6d2 7s2", phase: "Solid" },
    { number: 105, symbol: "Db", name: "Dubnium", mass: "(268)", category: "transition", group: 5, period: 7, config: "[Rn] 5f14 6d3 7s2", phase: "Solid" },
    { number: 106, symbol: "Sg", name: "Seaborgium", mass: "(271)", category: "transition", group: 6, period: 7, config: "[Rn] 5f14 6d4 7s2", phase: "Solid" },
    { number: 107, symbol: "Bh", name: "Bohrium", mass: "(272)", category: "transition", group: 7, period: 7, config: "[Rn] 5f14 6d5 7s2", phase: "Solid" },
    { number: 108, symbol: "Hs", name: "Hassium", mass: "(270)", category: "transition", group: 8, period: 7, config: "[Rn] 5f14 6d6 7s2", phase: "Solid" },
    { number: 109, symbol: "Mt", name: "Meitnerium", mass: "(276)", category: "unknown", group: 9, period: 7, config: "[Rn] 5f14 6d7 7s2", phase: "Solid" },
    { number: 110, symbol: "Ds", name: "Darmstadtium", mass: "(281)", category: "unknown", group: 10, period: 7, config: "[Rn] 5f14 6d9 7s1", phase: "Solid" },
    { number: 111, symbol: "Rg", name: "Roentgenium", mass: "(280)", category: "unknown", group: 11, period: 7, config: "[Rn] 5f14 6d10 7s1", phase: "Solid" },
    { number: 112, symbol: "Cn", name: "Copernicium", mass: "(285)", category: "transition", group: 12, period: 7, config: "[Rn] 5f14 6d10 7s2", phase: "Gas" },
    { number: 113, symbol: "Nh", name: "Nihonium", mass: "(284)", category: "unknown", group: 13, period: 7, config: "[Rn] 5f14 6d10 7s2 7p1", phase: "Unknown" },
    { number: 114, symbol: "Fl", name: "Flerovium", mass: "(289)", category: "unknown", group: 14, period: 7, config: "[Rn] 5f14 6d10 7s2 7p2", phase: "Unknown" },
    { number: 115, symbol: "Mc", name: "Moscovium", mass: "(288)", category: "unknown", group: 15, period: 7, config: "[Rn] 5f14 6d10 7s2 7p3", phase: "Unknown" },
    { number: 116, symbol: "Lv", name: "Livermorium", mass: "(293)", category: "unknown", group: 16, period: 7, config: "[Rn] 5f14 6d10 7s2 7p4", phase: "Unknown" },
    { number: 117, symbol: "Ts", name: "Tennessine", mass: "(294)", category: "unknown", group: 17, period: 7, config: "[Rn] 5f14 6d10 7s2 7p5", phase: "Unknown" },
    { number: 118, symbol: "Og", name: "Oganesson", mass: "(294)", category: "unknown", group: 18, period: 7, config: "[Rn] 5f14 6d10 7s2 7p6", phase: "Unknown" }
];

const categories = {
    alkali: "Alkali Metal",
    alkaline: "Alkaline Earth",
    transition: "Transition Metal",
    basic: "Basic Metal",
    metalloid: "Metalloid",
    nonmetal: "Nonmetal",
    halogen: "Halogen",
    noble: "Noble Gas",
    lanthanide: "Lanthanide",
    actinide: "Actinide",
    unknown: "Unknown"
};

const container = document.getElementById('table-container');
const legendContainer = document.getElementById('legend');
const overlay = document.getElementById('overlay');

function getColor(cat) {
    return getComputedStyle(document.documentElement).getPropertyValue(`--cat-${cat}`).trim();
}

// --- LEGEND GENERATION ---
Object.keys(categories).forEach(cat => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    
    item.innerHTML = `
        <div class="legend-box" style="background-color: var(--cat-${cat})"></div>
        <div class="legend-name">${categories[cat]}</div>
    `;
    
    item.onclick = (e) => {
        // Toggle active class
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.legend-item').forEach(i => i.classList.remove('active'));
        
        if (!isActive) {
            item.classList.add('active');
            highlightCategory(cat);
        } else {
            resetHighlights();
        }
        e.stopPropagation();
    };
    legendContainer.appendChild(item);
});

function highlightCategory(cat) {
    document.querySelectorAll('.element').forEach(el => {
        if (el.dataset.category === cat) {
            el.style.opacity = '1';
            el.style.transform = 'translate(-2px, -2px)';
            el.style.boxShadow = '6px 6px 0px #000';
            el.style.filter = 'none';
            el.style.zIndex = '5';
        } else {
            el.style.opacity = '0.1';
            el.style.filter = 'grayscale(100%)';
            el.style.transform = 'none';
            el.style.boxShadow = '1px 1px 0px #000';
            el.style.zIndex = '0';
        }
    });
}

function resetHighlights() {
    document.querySelectorAll('.element').forEach(el => {
        el.style.opacity = '1';
        el.style.filter = 'none';
        el.style.transform = '';
        el.style.boxShadow = '';
        el.style.zIndex = '';
    });
}

document.body.addEventListener('click', (e) => {
    if (!e.target.closest('.legend-item') && !e.target.closest('.element')) {
        resetHighlights();
        document.querySelectorAll('.legend-item').forEach(i => i.classList.remove('active'));
    }
});

// --- TABLE GENERATION ---
elements.forEach(el => {
    const div = document.createElement('div');
    div.className = `element`;
    
    // Grid Alignment Logic
    // Lanthanides (57-71) -> Row 8, Cols 3-17
    // Actinides (89-103) -> Row 9, Cols 3-17
    // Main Table -> Use el.group and el.period
    
    if (el.number >= 57 && el.number <= 71) {
        div.classList.add('row-8');
        div.style.gridColumn = (el.number - 57) + 3; // Start col 3
    } else if (el.number >= 89 && el.number <= 103) {
        div.classList.add('row-9');
        div.style.gridColumn = (el.number - 89) + 3; // Start col 3
    } else {
        div.style.gridColumn = el.group;
        div.style.gridRow = el.period;
    }

    div.dataset.category = el.category;
    div.style.setProperty('--element-color', `var(--cat-${el.category})`);

    div.innerHTML = `
        <div class="element-header">
            <span class="element-number">${el.number}</span>
        </div>
        <div class="element-symbol">${el.symbol}</div>
        <div class="element-name">${el.name}</div>
    `;

    div.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(el);
    });

    container.appendChild(div);
});

// --- MODAL LOGIC ---
function openModal(el) {
    document.getElementById('modal-number').innerText = el.number;
    document.getElementById('modal-symbol').innerText = el.symbol;
    document.getElementById('modal-name').innerText = el.name;
    document.getElementById('modal-mass').innerText = el.mass;
    document.getElementById('modal-category').innerText = categories[el.category];
    document.getElementById('modal-period').innerText = el.period;
    document.getElementById('modal-group').innerText = el.group > 0 ? el.group : 'f-block'; // Handle lanth/actin
    document.getElementById('modal-config').innerText = el.config;
    document.getElementById('modal-phase').innerText = el.phase;

    const color = getColor(el.category);
    document.getElementById('card-header').style.background = color;
    
    overlay.classList.add('active');
}

function closeModal() {
    overlay.classList.remove('active');
}

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
