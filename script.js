// Publications Data
const publications = [
    {
        title: "Impact of PM2.5 Emitted by Wood Smoke on the Expression of Glucose Transporter 1 (GLUT1) and Sodium-Dependent Vitamin C Transporter 2 (SVCT2) in the Rat Placenta: A Pregestational and Gestational Exposure Study",
        description: "La exposición a MP2.5 alteró expresión y localización de GLUT1 y SVCT2 en placenta de rata, afectando transporte de glucosa y vitamina C según ventana de exposición",
        keywords: ["PM2.5", "Placental transporters", "GLUT1", "SVCT2", "Oxidative stress", "Air pollution", "Pregnancy"],
        journal: "Antioxidants",
        year: "2025",
        pdfLink: "/assets/pdf/210547.pdf",
        doiLink: "https://doi.org/10.3390/antiox14091050"
    },
    {
        title: "El mal uso del término \"candidato a doctor\" / The Misuse of the Term \"Candidato a Doctor\"",
        description: "El artículo analiza el uso inadecuado del término \"candidato a doctor\" en Hispanoamérica, destacando sus implicancias éticas y la necesidad de promover integridad y transparencia académica",
        keywords: ["Integridad académica", "Candidato a doctor", "Ética académica", "Credenciales académicas", "Formación doctoral"],
        journal: "International Journal of Morphology",
        year: "2025",
        pdfLink: "/assets/pdf/210548.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022025000300718"
    },
    {
        title: "Impact of PM2.5 Exposure from Wood Combustion on Reproductive Health: Implications for Fertility, Ovarian Function, and Fetal Development",
        description: "La exposición crónica a PM2.5 de humo de leña en ratas afectó la ciclicidad ovárica, folículos y hormonas, reduciendo crecimiento fetal sin alterar significativamente fertilidad",
        keywords: ["air pollution", "reproduction", "wood smoke", "reproductive outcomes", "ovary", "PM2.5"],
        journal: "Toxics",
        year: "2025",
        pdfLink: "/assets/pdf/210549.pdf",
        doiLink: "https://doi.org/10.3390/toxics13040238"
    },
    {
        title: "Assessing the Impact of Exposure to PM2.5 Air Pollution on the Academic Performance of Schoolchildren in Chile",
        description: "El análisis del SIMCE 2019 reveló menor rendimiento en lenguaje y matemáticas en escolares de zonas con alta contaminación por PM2.5, especialmente en colegios subvencionados",
        keywords: ["air pollution", "PM2.5", "children", "academic performance"],
        journal: "Applied Sciences",
        year: "2025",
        pdfLink: "/assets/pdf/210550.pdf",
        doiLink: "https://doi.org/10.3390/app15105474"
    },
    {
        title: "On-demand dual-stimuli-responsive hydrogels for localized and sustained delivery of MP-L [I5R8] to treat bacterial wound infections",
        description: "Se desarrollaron hidrogeles inyectables dual-responsivos que liberan sostenidamente el péptido antimicrobiano MP-L [I5R8], mostrando eficacia contra Staphylococcus aureus y Pseudomonas aeruginosa en modelos in vitro e in vivo",
        keywords: ["stimuli-responsive hydrogel", "sustained release", "drug delivery", "antimicrobial peptide", "multidrug-resistant bacteria"],
        journal: "Colloids and Surfaces B: Biointerfaces",
        year: "2025",
        pdfLink: "/assets/pdf/210551.pdf",
        doiLink: "https://doi.org/10.1016/j.colsurfb.2025.114636"
    },
    {
        title: "Effect of formative feedback on human anatomy learning: a mixed-methods study on student perceptions and academic performance",
        description: "El estudio analizó percepciones estudiantiles y rendimiento en anatomía, mostrando que la retroalimentación formativa mejora motivación y autorregulación, pero no impacta significativamente en calificaciones a corto plazo",
        keywords: ["formative feedback", "anatomy education", "academic performance", "student perception", "higher education"],
        journal: "Frontiers in Education",
        year: "2025",
        pdfLink: "/assets/pdf/210552.pdf",
        doiLink: "https://doi.org/10.3389/feduc.2025.1471254"
    },
    {
        title: "Stereological and morphometric insights into epididymal development in domestic cats (Felis silvestris catus) from 6 to 48 months",
        description: "Estudio estereológico y morfométrico de 42 epidídimos felinos mostró cambios estructurales dependientes de la edad, destacando variaciones en diámetro luminal y altura epitelial en caput y cauda",
        keywords: ["epididymis", "epididymal duct", "age", "histology", "stereology", "morphometry"],
        journal: "Research in Veterinary Science",
        year: "2025",
        pdfLink: "/assets/pdf/210553.pdf",
        doiLink: "https://doi.org/10.1016/j.rvsc.2025.105690"
    },
    {
        title: "Histological and Stereological Insights into Renal and Adrenal Changes in Pregnant Rats Exposed to Wood Smoke-Derived PM2.5",
        description: "La exposición gestacional a PM2.5 derivado de humo de leña indujo alteraciones histológicas y estereológicas en riñones y glándulas suprarrenales de ratas preñadas",
        keywords: ["PM2.5", "kidney", "adrenal gland", "pregnancy", "rat", "stereology"],
        journal: "International Journal of Morphology",
        year: "2024",
        pdfLink: "/assets/pdf/210554.pdf",
        doiLink: "https://doi.org/10.14670/HH-18-863"
    },
    {
        title: "Anatomy, 3D micro-CT and semiquantitative elemental microanalysis in common carp vertebrae (Cyprinus carpio; Linnaeus, 1758)",
        description: "El análisis anatómico y micro-CT de vértebras de carpa común reveló estructura trabecular compleja y composición elemental compatible con buena salud ósea en teleósteos",
        keywords: ["common carp", "Cyprinus", "teleost", "vertebrae", "anatomy", "EDX", "wildlife"],
        journal: "Zoomorphology",
        year: "2024",
        pdfLink: "/assets/pdf/210555.pdf",
        doiLink: "https://doi.org/10.1007/s00435-024-00683-2"
    },
    {
        title: "Histological and endocrine effects of chronic exposure to MP2.5 derived from wood smoke in the uterus of nulliparous adult rats",
        description: "La exposición crónica a MP2.5 por humo de leña en ratas nulíparas aumentó el colágeno y espesor uterino, alterando estructura reproductiva sin cambios significativos en estradiol ni progesterona",
        keywords: ["Pollution", "Wood smoke", "Uterus", "Reproductive system", "Particulate matter 2.5", "PM2.5"],
        journal: "International Journal of Morphology",
        year: "2024",
        pdfLink: "/assets/pdf/210556.pdf",
        doiLink: "http://dx.doi.org/10.4067/s0717-95022024000300647"
    },
    {
        title: "Exposure to fine particulate matter 2.5 from wood combustion smoke causes vascular changes in placenta and reduces fetal size",
        description: "La exposición materna a MP2.5 de humo de leña alteró angiogénesis placentaria, redujo difusión de oxígeno y disminuyó peso y talla fetal en ratas gestantes",
        keywords: ["Placenta", "Pollution", "Fine particulate matter", "PM2.5", "Angiogenesis", "Diffusion capacity", "Hypoxia"],
        journal: "Reproductive Toxicology",
        year: "2024",
        pdfLink: "/assets/pdf/210557.pdf",
        doiLink: "https://doi.org/10.1016/j.reprotox.2024.108610"
    },
    {
        title: "Anatomy and computed tomography of the nasal cavity, nasal conchae, and paranasal sinuses of the endangered Patagonian huemul deer (Hippocamelus bisulcus)",
        description: "Mediante tomografía computarizada y reconstrucciones 3D, se caracterizó la cavidad nasal y senos paranasales del huemul, identificando particularidades morfológicas con implicancias clínicas y de conservación",
        keywords: ["3D reconstruction", "computed tomography", "deer", "huemul", "nasal cavity", "paranasal sinuses"],
        journal: "The Anatomical Record",
        year: "2024",
        pdfLink: "/assets/pdf/210558.pdf",
        doiLink: "https://doi.org/10.1002/ar.25230"
    },
    {
        title: "Anatomical and Computed Tomography Study of the Mandible of the Patagonian Huemul (Hippocamelus bisulcus): Ecological and Clinical Insights",
        description: "Descripción anatómica y tomográfica de mandíbulas de huemul patagónico, revelando adaptaciones morfológicas vinculadas a la ecología trófica y con implicancias para conservación y práctica clínica",
        keywords: ["anatomy", "computed tomography", "conservation", "Hippocamelus bisulcus", "mandible", "mandibular canal"],
        journal: "Anatomia, Histologia, Embryologia",
        year: "2024",
        pdfLink: "/assets/pdf/210559.pdf",
        doiLink: "https://doi.org/10.1111/ahe.13108"
    },
    {
        title: "Low-cost and accessible scale body maceration control system: Integration of Internet of Things-NodeMCU with Arduino-IDE",
        description: "Sistema de control IoT de bajo costo con NodeMCU-Arduino para procesos de maceración, mejorando accesibilidad y eficiencia en la preparación de cuerpos a escala",
        keywords: ["Arduino IDE", "Internet of Things", "maceration control", "NodeMCU", "scale body preparation"],
        journal: "HardwareX",
        year: "2024",
        pdfLink: "/assets/pdf/210560.pdf",
        doiLink: "https://doi.org/10.1016/j.ohx.2023.e00558"
    },
    {
        title: "A Glimpse into Chilean Veterinary Anatomy Educators",
        description: "Encuesta nacional caracterizó a docentes de anatomía veterinaria en Chile, revelando formación mayoritariamente de magíster, limitaciones en investigación y fortalezas en docencia y extensión",
        keywords: ["veterinary medicine", "veterinary anatomy", "educator", "Chile"],
        journal: "International Journal of Morphology",
        year: "2023",
        pdfLink: "/assets/pdf/210561.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022023000401228"
    },
    {
        title: "Immunofluorescence Analysis of Estrogen and Progesterone Receptors and Ki-67 Nuclear Protein in Canine Uteri Treated with Medroxyprogesterone Acetate During Anestrus",
        description: "El acetato de medroxiprogesterona no modificó significativamente receptores esteroides, pero redujo proliferación celular endometrial en perras tratadas durante anestro",
        keywords: ["Canis lupus familiaris", "uterus", "medroxyprogesterone acetate", "estradiol", "progesterone", "Ki67"],
        journal: "International Journal of Morphology",
        year: "2023",
        pdfLink: "/assets/pdf/210562.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022023000300725"
    },
    {
        title: "Evaluation of Mineralization in Jaw and Teeth of Rainbow Trout (Oncorhynchus mykiss) Using Variable Pressure Scanning Electron Microscopy Coupled to Energy-Dispersive X-ray Spectroscopy Detector",
        description: "El estudio comparó mandíbulas y dientes de truchas sanas y con deformidad mandibular mediante VP-SEM-EDX, evidenciando reducción de Ca y P y aumento de C en peces deformes",
        keywords: ["microanálisis elemental", "espectroscopía de rayos X (EDX)", "hueso", "trucha arcoíris"],
        journal: "International Journal of Morphology",
        year: "2022",
        pdfLink: "/assets/pdf/210563.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022022000200530"
    },
    {
        title: "Skull anatomy of the endangered Patagonian huemul deer (Hippocamelus bisulcus)",
        description: "El estudio describió detalladamente la morfología craneana del huemul patagónico, evidenciando rasgos anatómicos distintivos respecto a otros cérvidos, relevantes para su conservación, investigación biomédica y docencia",
        keywords: ["skull", "morphology", "cervid", "endangered species", "huemul"],
        journal: "Anatomia, Histologia, Embryologia",
        year: "2022",
        pdfLink: "/assets/pdf/210564.pdf",
        doiLink: "https://doi.org/10.1111/ahe.12553"
    },
    {
        title: "Phenotypic response of male and neomale of Oncorhynchus mykiss parr subjected to 8º and 16ºC water temperature during early life stage",
        description: "La temperatura de crianza temprana influenció el desarrollo fenotípico en machos y neomachos de trucha arcoíris, con diferencias relevantes en crecimiento y maduración sexual",
        keywords: ["Oncorhynchus mykiss", "trout", "temperature", "neomale", "phenotype", "aquaculture"],
        journal: "Aquaculture Reports",
        year: "2022",
        pdfLink: "/assets/pdf/210565.pdf",
        doiLink: "https://doi.org/10.1016/j.aqrep.2022.101088"
    },
    {
        title: "Profile of Morphology Teachers in Chilean Universities / Perfil de los Docentes de Morfología en Universidades Chilenas",
        description: "Encuesta nacional describió a 213 docentes de morfología en Chile, revelando predominio de fisioterapeutas y dentistas, alta proporción con magíster, y concentración en la Región Metropolitana",
        keywords: ["teaching", "morphology", "university", "Chile"],
        journal: "International Journal of Morphology",
        year: "2021",
        pdfLink: "/assets/pdf/210566.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022021000601615"
    },
    {
        title: "Intrauterine and Postnatal Exposure to Tobacco and Wood Smoke on Hypothalamic Development and Cognition: An Integrative Review of the Literature",
        description: "La revisión integra evidencia sobre exposición prenatal y postnatal a humo de tabaco y leña, asociándola con alteraciones del desarrollo hipotalámico y funciones cognitivas en infancia y adolescencia",
        keywords: ["tobacco smoke", "wood smoke", "air pollution", "hypothalamic development", "cognition"],
        journal: "International Journal of Morphology",
        year: "2021",
        pdfLink: "/assets/pdf/210567.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022021000300773"
    },
    {
        title: "Polymorphisms in DSSP (rs36094464) and RUNX2 (rs566712) Genes Contribute to the Susceptibility of Dental Caries in Childhood",
        description: "Estudio transversal en 125 niños chilenos evidenció asociación entre polimorfismos en genes DSPP y RUNX2 con mayor susceptibilidad a caries, sin asociación para KLK4",
        keywords: ["caries", "childhood", "polymorphisms", "DSPP", "RUNX2"],
        journal: "International Journal of Morphology",
        year: "2021",
        pdfLink: "/assets/pdf/210568.pdf",
        doiLink: "No disponible"
    },
    {
        title: "Navicular Syndrome-related changes to collagen proportion of different cross-sections of the flexor tendons in equine distal forelimb",
        description: "Se cuantificaron proporciones de colágeno en tendones flexores de equinos con síndrome navicular, encontrando aumento de colágeno no alineado y reducción del alineado en inserción distal",
        keywords: ["equine", "collagen", "tendon", "navicular syndrome", "forelimb"],
        journal: "Research in Veterinary Science",
        year: "2021",
        pdfLink: "/assets/pdf/210569.pdf",
        doiLink: "https://doi.org/10.1016/j.rvsc.2021.01.002"
    },
    {
        title: "Anatomical and Histological Characterization of the Digestive Canal of the Golden Kingklip (Genypterus blacodes)",
        description: "Se describió la anatomía e histología del canal digestivo del congrio dorado, mostrando adaptaciones tróficas propias de peces carnívoros bentónicos, con estómago en J y ciegos pilóricos",
        keywords: ["golden kingklip", "digestive canal", "stomach", "intestine", "teleost", "fish"],
        journal: "International Journal of Morphology",
        year: "2020",
        pdfLink: "/assets/pdf/210570.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022020000300677"
    },
    {
        title: "Exposure to Wood Smoke Pollution During Pre-Gestational Period of Rat Has Effects on Placenta Volume and Fetus Size",
        description: "La exposición pregestacional al humo de leña en ratas redujo significativamente volumen placentario y tamaño fetal, evidenciando efectos adversos en la interfase materno-fetal",
        keywords: ["pollution", "wood smoke", "placenta", "stereology", "rat", "Temuco"],
        journal: "International Journal of Morphology",
        year: "2020",
        pdfLink: "/assets/pdf/210571.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022020000501250"
    },
    {
        title: "Impact of Maternal Exposure to Wood Smoke Pollution on Fetal Lung Morphology in a Rat Model",
        description: "La exposición materna a humo de leña en ratas alteró la morfología pulmonar fetal, evidenciada por cambios en desarrollo alveolar y volúmenes pulmonares",
        keywords: ["wood smoke", "fetal lung", "morphology", "stereology", "pollution", "rat model"],
        journal: "International Journal of Morphology",
        year: "2020",
        pdfLink: "/assets/pdf/210572.pdf",
        doiLink: "No disponible"
    },
    {
        title: "Morphometric, Anatomic and Radiographic Study of Bone of the Pelvic Limb of Endangered Patagonian Huemul Deer (Hippocamelus bisulcus)",
        description: "Se describieron características morfométricas, anatómicas y radiográficas de huesos del miembro pélvico en huemules, aportando referencia para conservación, clínica y docencia",
        keywords: ["anatomy", "deer", "osteology", "huemul", "skeleton", "wildlife"],
        journal: "International Journal of Morphology",
        year: "2020",
        pdfLink: "/assets/pdf/210573.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022020000300747"
    },
    {
        title: "Anatomy, Morphometry and Radiography in the Thoracic Limb Bones of the Patagonian Huemul Deer (Hippocamelus bisulcus)",
        description: "Se analizaron características anatómicas, morfométricas y radiográficas del miembro torácico en huemules, destacando diferencias con ungulados domésticos relevantes para conservación y cirugía",
        keywords: ["anatomy", "deer", "huemul", "osteology", "skeleton", "wildlife"],
        journal: "Anatomia, Histologia, Embryologia",
        year: "2020",
        pdfLink: "/assets/pdf/210574.pdf",
        doiLink: "https://doi.org/10.1111/ahe.12553"
    },
    {
        title: "Effects on the Female Reproductive System of Air Pollution Produced by the Use of Wood Combustion for Residential Heating: Challenges and Perspectives of Morphological Studies",
        description: "Revisión que analiza la contaminación por humo de leña en Chile y su impacto potencial sobre la morfo-función reproductiva femenina, destacando vacíos de investigación y desafíos",
        keywords: ["air pollution", "reproductive system", "wood combustion", "uterus"],
        journal: "International Journal of Morphology",
        year: "2018",
        pdfLink: "/assets/pdf/210575.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022018000200623"
    },
    {
        title: "Color-Based Segmentation vs. Stereology: A Simple Comparison Between Two Semi-Automated Methods of Image Analysis for the Quantification of Collagen",
        description: "Se compararon la segmentación basada en color y la estereología para cuantificar colágeno en mandíbulas de Salmo salar, encontrando alta concordancia entre ambos métodos semiautomatizados",
        keywords: ["collagen", "stereology", "segmentation", "image analysis", "histology"],
        journal: "International Journal of Morphology",
        year: "2018",
        pdfLink: "/assets/pdf/210576.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022018000301118"
    },
    {
        title: "Freezing dog semen using −80 °C ultra-freezer: Sperm function and in vivo fertility",
        description: "Comparación de congelación de semen canino en nitrógeno líquido y ultrafreezer −80 °C, evaluando función espermática y fertilidad in vivo, mostrando resultados similares en preñez",
        keywords: ["dog semen", "sperm function", "freezing", "ultra-freezer", "artificial insemination", "pregnancy"],
        journal: "Theriogenology",
        year: "2017",
        pdfLink: "/assets/pdf/210577.pdf",
        doiLink: "https://doi.org/10.1016/j.theriogenology.2017.05.007"
    },
    {
        title: "Quantitative Analysis of Collagen Fibrillar Structure in Canine Uterus Exposed to Acetate of Medroxyprogesterone Using Second Harmonic Generation Microscopy",
        description: "Mediante microscopía SHG, se determinó que dos dosis de MPA (5 mg/kg) no alteran significativamente la deposición de colágeno en el útero de perras adultas",
        keywords: ["canine", "medroxyprogesterone acetate", "collagen", "second harmonic generation"],
        journal: "International Journal of Morphology",
        year: "2017",
        pdfLink: "/assets/pdf/210578.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022017000100025"
    },
    {
        title: "Histomorphometrics and Quantitative Unbiased Stereology in Canine Uteri Treated with Medroxyprogesterone Acetate",
        description: "El tratamiento con medroxiprogesterona produjo cambios cuantitativos en endometrio y miometrio, aumentando grosor uterino y densidad de glándulas endometriales respecto a nulíparas y multíparas",
        keywords: ["Canine", "Uterus", "Medroxyprogesterone acetate", "Progestin", "Morphometry", "Stereology"],
        journal: "Theriogenology",
        year: "2017",
        pdfLink: "/assets/pdf/210579.pdf",
        doiLink: "https://doi.org/10.1016/j.theriogenology.2017.03.008"
    },
    {
        title: "Quantification of collagen fibers in canine uteri treated with medroxyprogesterone acetate",
        description: "Estudio histoquímico mostró que dos dosis de acetato de medroxiprogesterona no modifican significativamente fibras colágenas uterinas tipo I y III en perras",
        keywords: ["Canis lupus familiaris", "uterus", "medroxyprogesterone acetate", "collagen", "Picrosirius red"],
        journal: "Pesquisa Veterinária Brasileira",
        year: "2016",
        pdfLink: "/assets/pdf/210580.pdf",
        doiLink: "https://doi.org/10.1590/S0100-736X2016001200014"
    },
    {
        title: "Flow Cytometry and Sperm Sexing in Animals",
        description: "Revisión que describe fundamentos, procedimientos y eficiencia del sexaje espermático mediante citometría de flujo, evaluando precisión, daños celulares y su aplicación en reproducción animal",
        keywords: ["flow cytometry", "spermatozoa", "sexing", "animals"],
        journal: "International Journal of Medical and Surgical Sciences",
        year: "2016",
        pdfLink: "/assets/pdf/210581.pdf",
        doiLink: "https://doi.org/10.32457/ijmss.2016.022"
    },
    {
        title: "Anatomy of Prehiliar Segment of the Renal Artery in Dogs",
        description: "Disección de 30 pares de riñones caninos evidenció alta variabilidad anatómica en ramas y bifurcación prehiliar de arterias renales, relevante para cirugía y modelos experimentales",
        keywords: ["canine", "renal artery", "anatomical variation", "prehiliar segment"],
        journal: "International Journal of Morphology",
        year: "2015",
        pdfLink: "/assets/pdf/210582.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022015000300035"
    },
    {
        title: "Planimetric and Stereological Characteristics of Lateral and Medial Palmar Nerves in Hands of Equine with and without Navicular Syndrome",
        description: "Se caracterizaron morfológica y estereológicamente nervios palmares de equinos con y sin síndrome navicular, encontrándose mínimas diferencias en axones mielinizados y proporción de fascículos",
        keywords: ["Equino", "Síndrome navicular", "Estereología", "Planimetría", "Morfología", "Nervio palmar lateral", "Nervio palmar medial"],
        journal: "International Journal of Morphology",
        year: "2015",
        pdfLink: "/assets/pdf/210583.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022015000400041"
    },
    {
        title: "Estudio histoquímico de la distribución de las fibras de colágeno en hueso sesamoídeo distal de equinos con y sin síndrome navicular / Histochemical Study of the Distribution of Collagen Fibers on Distal Sesamoid Bone in Equine With and Without Navicular Syndrome",
        description: "Mediante técnicas histoquímicas y luz polarizada, se evidenció remodelación y orientación transversal del colágeno en hueso sesamoídeo distal de equinos con síndrome navicular",
        keywords: ["equino", "síndrome navicular", "hueso sesamoídeo distal", "colágeno", "Rojo Picrosirius"],
        journal: "International Journal of Morphology",
        year: "2014",
        pdfLink: "/assets/pdf/210584.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022014000400023"
    },
    {
        title: "Morfometría, planimetría y estereología en el hueso sesamoídeo distal en manos de equinos con y sin síndrome navicular / Morphometry, Planimetry and Stereology in the Distal Sesamoid Bone in Equine Foot with and without Navicular Syndrome",
        description: "Estudio cuantitativo reveló que el síndrome navicular induce cambios mesoscópicos y microscópicos en el hueso sesamoídeo distal, aunque sin alterar significativamente sus características macroscópicas",
        keywords: ["equino", "síndrome navicular", "hueso sesamoídeo distal", "morfometría", "planimetría", "estereología"],
        journal: "International Journal of Morphology",
        year: "2014",
        pdfLink: "/assets/pdf/210585.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022014000100056"
    },
    {
        title: "Validación de SYBR-14 y 6-CFDA para evaluar la viabilidad e integridad de la membrana plasmática en espermatozoides caninos de raza Chihuahua / Validation of SYBR-14 and 6-CFDA to Evaluate the Viability and Plasma Membrane Integrity in Sperm of Chihuahua Canine Breed",
        description: "Se validó el uso de SYBR-14 y 6-CFDA combinados con ioduro de propidio para evaluar viabilidad e integridad de membrana espermática en semen canino Chihuahua mediante citometría de flujo",
        keywords: ["caninos", "Chihuahua", "semen", "espermatozoides", "SYBR-14", "6-CFDA", "citometría de flujo"],
        journal: "International Journal of Morphology",
        year: "2014",
        pdfLink: "/assets/pdf/210586.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022014000100003"
    },
    {
        title: "Criopreservación de espermatozoides caninos a -80 ºC / Cryopreservation of Canine Spermatozoa at -80 ºC",
        description: "Se evaluó el uso de un ultracongelador −80 ºC como alternativa al nitrógeno líquido para semen canino, observando resultados similares en integridad, aunque con menor motilidad",
        keywords: ["canino", "espermatozoide", "congelación", "ultracongelador −80 ºC"],
        journal: "International Journal of Morphology",
        year: "2013",
        pdfLink: "/assets/pdf/210587.pdf",
        doiLink: "http://dx.doi.org/10.4067/S0717-95022013000100036"
    }
];

// Publications Management
let currentDisplayed = 4;
const itemsPerLoad = 4;

function createPublicationCard(pub) {
    return `
        <div class="publication-card">
            <div class="card-content">
                <h3>${pub.title}</h3>
                <p>${pub.description}</p>
                <div class="journal-year">
                    <span class="journal">${pub.journal}</span>
                    <span class="year">${pub.year}</span>
                </div>
                <div class="keywords">
                    ${pub.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
                </div>
                <div class="paper-links">
                    <a href="${pub.pdfLink}" target="_blank" class="btn btn-pdf">PDF</a>
                    <a href="${pub.doiLink}" target="_blank" class="btn btn-link">Link</a>
                </div>
            </div>
        </div>
    `;
}

function loadPublications() {
    const grid = document.getElementById('publicationsGrid');
    grid.innerHTML = publications.map(pub => createPublicationCard(pub)).join('');
    
    const cards = grid.querySelectorAll('.publication-card');
    cards.forEach((card, index) => {
        if (index < currentDisplayed) {
            card.classList.add('visible');
        }
    });

    updateShowMoreButton();
}

function updateShowMoreButton() {
    const btn = document.getElementById('showMoreBtn');
    if (currentDisplayed >= publications.length) {
        btn.classList.add('hidden');
    } else {
        btn.classList.remove('hidden');
    }
}

// Show More Button Handler
document.addEventListener('DOMContentLoaded', function() {
    loadPublications();

    document.getElementById('showMoreBtn').addEventListener('click', function() {
        const cards = document.querySelectorAll('.publication-card');
        const nextBatch = Math.min(currentDisplayed + itemsPerLoad, publications.length);
        
        for (let i = currentDisplayed; i < nextBatch; i++) {
            cards[i].classList.add('visible');
        }
        
        currentDisplayed = nextBatch;
        updateShowMoreButton();
    });

    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});