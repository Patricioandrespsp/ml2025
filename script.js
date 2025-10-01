// Publications Data
const publications = [
    {
        title: "Impact of PM2.5 Emitted by Wood Smoke on the Expression of Glucose Transporter 1 (GLUT1) and Sodium-Dependent Vitamin C Transporter 2 (SVCT2) in the Rat Placenta",
        description: "A Pregestational and Gestational Exposure Study. Antioxidants, 14(9)",
        keywords: ["Air Pollution", "Reproduction", "PM2.5", "Wood Smoke", "Ovary"],
        pdfLink: "/assets/pdf/paper1.pdf",
        doiLink: "https://doi.org/10.3390/antiox14091050"
    },
    {
        title: "Stereological and morphometric insights into epididymal development in domestic cats",
        description: "Felis silvestris catus from 6 to 48 months. Research in veterinary science, 191, 105690",
        keywords: ["Epididymis", "Cats", "Stereology", "Development", "Morphometry"],
        pdfLink: "/assets/pdf/paper2.pdf",
        doiLink: "https://doi.org/10.1016/j.rvsc.2025.105690"
    },
    {
        title: "Impact of PM2.5 Exposure from Wood Combustion on Reproductive Health",
        description: "Implications for Fertility, Ovarian Function, and Fetal Development. Toxics, 13(4), 238.",
        keywords: ["PM2.5", "Fertility", "Ovarian Function", "Fetal Development"],
        pdfLink: "/assets/pdf/paper3.pdf",
        doiLink: "https://doi.org/10.3390/toxics13040238"
    },
    {
        title: "On-demand dual-stimuli-responsive hydrogels for localized and sustained delivery of MP-L [I5R8]",
        description: "To treat bacterial wound infections. Colloids and Surfaces B: Biointerfaces.",
        keywords: ["Hydrogels", "Drug Delivery", "Wound Infections", "Biointerfaces"],
        pdfLink: "/assets/pdf/paper4.pdf",
        doiLink: "https://doi.org/10.1016/j.colsurfb.2025.114636"
    },
    {
        title: "Assessing the Impact of Exposure to PM2.5 Air Pollution on the Academic Performance of Schoolchildren in Chile",
        description: "El análisis del SIMCE 2019 reveló menor rendimiento en lenguaje y matemáticas en escolares de zonas con alta contaminación por PM2.5",
        keywords: ["Air Pollution", "PM2.5", "Academic Performance", "Children"],
        pdfLink: "/assets/pdf/Assessing.pdf",
        doiLink: "https://doi.org/10.3390/app15105474"
    },
    {
        title: "Effect of formative feedback on human anatomy learning",
        description: "A mixed-methods study on student perceptions and academic performance. Frontiers in Education, 2025.",
        keywords: ["Formative Feedback", "Anatomy Education", "Academic Performance", "Student Perception", "Higher Education"],
        pdfLink: "/assets/pdf/Effect.pdf",
        doiLink: "https://doi.org/10.3389/feduc.2025.1471254"
    },
    {
        title: "Histological and stereological insights into renal and adrenal changes in pregnant rats exposed to wood smoke-derived PM2.5",
        description: "La exposición gestacional a PM2.5 derivado de humo de leña indujo alteraciones histológicas y estereológicas en riñones y glándulas suprarrenales",
        keywords: ["PM2.5", "Kidney", "Adrenal Gland", "Pregnancy", "Stereology"],
        pdfLink: "/assets/pdf/Histological.pdf",
        doiLink: "https://pubmed.ncbi.nlm.nih.gov/39763392/"
    },
    {
        title: "Anatomy, 3D micro-CT and semiquantitative elemental microanalysis in common carp vertebrae",
        description: "El análisis anatómico y micro-CT de vértebras de carpa común reveló estructura trabecular compleja y composición elemental",
        keywords: ["Common Carp", "Cyprinus", "Teleost", "EDX", "Vertebrae"],
        pdfLink: "/assets/pdf/Anatomy.pdf",
        doiLink: "https://doi.org/10.1007/s00435-024-00683-2"
    },
    {
        title: "Anatomical and computed tomography study of the mandible of the Patagonian huemul",
        description: "Descripción anatómica y tomográfica de mandíbulas de huemul patagónico, revelando adaptaciones morfológicas vinculadas a la ecología trófica",
        keywords: ["Anatomy", "Computed Tomography", "Hippocamelus Bisulcus", "Mandible", "Mandibular Canal"],
        pdfLink: "/assets/pdf/Anatomical.pdf",
        doiLink: "https://doi.org/10.1111/ahe.13108"
    },
    {
        title: "Low-cost and accessible scale body maceration control system",
        description: "Integration of Internet of Things-NodeMCU with Arduino-IDE. Sistema de control IoT de bajo costo con NodeMCU-Arduino",
        keywords: ["Arduino IDE", "Internet Of Things", "Maceration Control", "NodeMCU", "Scale Body Preparation"],
        pdfLink: "/assets/pdf/Low-cost.pdf",
        doiLink: "https://dx.doi.org/10.4067/S0717-95022024000501239"
    },
    {
        title: "Exposure to fine particulate matter 2.5 from wood combustion smoke causes vascular changes in placenta",
        description: "La exposición materna a MP2.5 de humo de leña alteró angiogénesis placentaria, redujo difusión de oxígeno y disminuyó peso y talla fetal",
        keywords: ["Placenta", "Pollution", "Fine Particulate Matter", "PM2.5", "Angiogenesis", "Diffusion Capacity", "Hypoxia"],
        pdfLink: "/assets/pdf/Exposure.pdf",
        doiLink: "https://doi.org/10.1016/j.reprotox.2024.108610"
    },
    {
        title: "Histological and endocrine effects of chronic exposure to MP2.5 derived from wood smoke in the uterus",
        description: "La exposición crónica a MP2.5 por humo de leña en ratas nulíparas aumentó el colágeno y espesor uterino",
        keywords: ["Pollution", "Wood Smoke", "Uterus", "Reproductive System", "Particulate Matter 2.5", "PM2.5"],
        pdfLink: "/assets/pdf/Histological2.pdf",
        doiLink: "https://dx.doi.org/10.4067/s0717-95022024000300647"
    },
    {
        title: "Anatomy and computed tomography of the nasal cavity, nasal conchae, and paranasal sinuses of the endangered Patagonian huemul deer",
        description: "Mediante tomografía computarizada y reconstrucciones 3D, se caracterizó la cavidad nasal y senos paranasales del huemul",
        keywords: ["3D Reconstruction", "Computed Tomography", "Deer", "Huemul", "Nasal Cavity", "Paranasal Sinuses"],
        pdfLink: "/assets/pdf/Anatomy2.pdf",
        doiLink: "https://pubmed.ncbi.nlm.nih.gov/37084232/"
    },
    {
        title: "A glimpse into Chilean veterinary anatomy educators",
        description: "Encuesta nacional caracterizó a docentes de anatomía veterinaria en Chile, revelando formación mayoritariamente de magíster",
        keywords: ["Veterinary Medicine", "Veterinary Anatomy", "Educator", "Chile"],
        pdfLink: "/assets/pdf/Glimpse.pdf",
        doiLink: "https://www.scielo.cl/pdf/ijmorphol/v41n4/0717-9502-ijmorphol-41-04-1228.pdf"
    },
    {
        title: "Immunofluorescence analysis of estrogen and progesterone receptors and Ki-67 nuclear protein in canine uteri",
        description: "El acetato de medroxiprogesterona no modificó significativamente receptores esteroides, pero redujo proliferación celular endometrial",
        keywords: ["Canis Lupus Familiaris", "Uterus", "Medroxyprogesterone Acetate", "Estradiol", "Progesterone", "Ki-67"],
        pdfLink: "/assets/pdf/Immunofluorescence.pdf",
        doiLink: "https://www.scielo.cl/pdf/ijmorphol/v41n3/0717-9502-ijmorphol-41-03-725.pdf"
    },
    {
        title: "Skull anatomy of the endangered Patagonian huemul deer (Hippocamelus bisulcus)",
        description: "El estudio describió detalladamente la morfología craneana del huemul patagónico, evidenciando rasgos anatómicos distintivos",
        keywords: ["Skull", "Morphology", "Cervid", "Endangered Species", "Huemul"],
        pdfLink: "/assets/pdf/Skull.pdf",
        doiLink: "https://doi.org/10.1111/ahe.12553"
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
                <div class="keywords">
                    ${pub.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
                </div>
                <div class="paper-links">
                    <a href="${pub.pdfLink}" download class="btn btn-pdf">PDF</a>
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

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            organization: document.getElementById('organization').value,
            country: document.getElementById('country').value,
            comments: document.getElementById('comments').value
        };

        const subject = encodeURIComponent('Contacto desde Morpholab - ' + formData.name);
        const body = encodeURIComponent(
            `Nombre: ${formData.name}\n` +
            `Organización: ${formData.organization}\n` +
            `País: ${formData.country}\n\n` +
            `Comentarios:\n${formData.comments}`
        );
        
        const mailtoLink = `mailto:paulo.salinas@pucv.cl?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        
        showMessage('Su cliente de correo se abrirá para enviar el mensaje', 'success');
        contactForm.reset();
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

function showMessage(message, type) {
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    const form = document.getElementById('contactForm');
    form.insertBefore(messageDiv, form.firstChild);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}