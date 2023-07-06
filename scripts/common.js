'use strict';

// This section will be migrated once we have react or vue.js

/**
 * Object Section
 */
// SECTIONS Objects
let sections = [
    {
        id: "section1",
        name: "COLLARES PERSONALIZADOS",
        description: "Collares Personalizados para tu mascota con su nombre y tu número de teléfono."
    },
    {
        id: "section2",
        name: "PLAQUITAS ALUMINIO",
        description: "Plaquitas de aluminio para tu mascota con su nombre y tu número de teléfono."
    },
    {
        id: "section3",
        name: "PAÑALES REUSABLES",
        description: "Pañales reusables para tu mascota."
    },
    {
        id: "section4",
        name: "CINTURONES & CORREAS",
        description: "Correas & Correas para tu mascota, su seguridad es importante."
    },
    {
        id: "section5",
        name: "CUIDADO DE MI MASCOTA",
        description: "Aromaterapia para tu mascota, su salud es importante."
    },
    {
        id: "section6",
        name: "KITS PARA MI MASCOTA",
        description: "Lo mejor biene en Kits para tu mascota, su comodidad es importante."
    }
];

// Buttons Properties
const buttonsBySections = {

    // Section 1 Collares
    section1: [
        {
            id: "slim",
            name: "Slim",
            title: "Collar Slim",
            description: "½ pulgada de ancho Nombre y 1 numero de tel bordado.",
            price: 120,
            sub: [
                {
                    id: "sxs",
                    name: "Slim XS",
                    description: "XS 16 a 22 cm",
                    price: 120
                },
                {
                    id: "ss",
                    name: "Slim S",
                    description: "S 20 a 31 cm",
                    price: 125
                },
                {
                    id: "sm",
                    name: "Slim M",
                    description: "M 25 a 42 cm",
                    price: 130
                },
                {
                    id: "sg",
                    name: "Slim G",
                    description: "G 39 a 61 cm",
                    price: 135
                }
            ]
        },
        {
            id: "normal",
            name: "Normal",
            description: "Collares Normal para tu mascota con su nombre y tu número de teléfono.",
            price: 130,
            sub: [
                {
                    id: "nxs",
                    name: "Normal XS",
                    description: "XS 16 a 22 cm",
                    price: 120
                },
                {
                    id: "ns",
                    name: "Normal S",
                    description: "S 20 a 31 cm",
                    price: 125
                },
                {
                    id: "nm",
                    name: "Normal M",
                    description: "M 25 a 42 cm",
                    price: 130
                },
                {
                    id: "ng",
                    name: "Normal G",
                    description: "G 39 a 61 cm",
                    price: 135
                }
            ]
        },
        {
            id: "ancho",
            name: "Ancho",
            description: "Collares Ancho para tu mascota con su nombre y tu número de teléfono.",
            price: 140
        },
        {
            id: "especial",
            name: "Especial",
            description: "Collares Especial para tu mascota con su nombre y tu número de teléfono.",
            price: 150
        },
        {
            id: "termporal",
            name: "Temporal",
            description: "Collares Temporal para tu mascota con su nombre y tu número de teléfono.",
            price: 150
        }
    ],
    section2: [
        {
            id: "idHuesitos",
            name: "Plaquita Hueso",
            description: "Plaquitas de Huesito para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        },
        {
            id: "idCirculo",
            name: "Plaquita Circulo",
            description: "Plaquitas de Circulo para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        },
        {
            id: "idImage",
            name: "Extra",
            description: "Plaquitas de Extra para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        },
        {
            id: "idIfa",
            name: "IFA",
            description: "Plaquitas de IFA para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        }
    ],
    section3: [
        {
            id: "idMacho",
            name: "Pañal Macho",
            description: "Pañal para macho para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        },
        {
            id: "idHembra",
            name: "Pañal Hembra",
            description: "Pañal para hembra para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        }
    ],
    section4: [
        {
            id: "idCorreaSlim",
            name: "Correa Slim",
            description: "Correa Slim para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        },
        {
            id: "idCorreaNormal",
            name: "Correa Normal",
            description: "Correa Normal ara tu mascota con su nombre y tu número de teléfono.",
            price: 120
        },
        {
            id: "idCorreaAncha",
            name: "Correa Ancha",
            description: "Correa Ancha para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        },
        {
            id: "idCinturonSeguridad",
            name: "Cinturon de Seguridad",
            description: "Cinturon de Seguridad para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        },
        {
            id: "idCorreaEspecial",
            name: "Correa & Cinto Especial",
            description: "Correa & Cinto Especial para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        }
    ],
    section5: [
        {
            id: "idAromaterapia",
            name: "Aromaterapia",
            description: "Aromaterapia para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        },
        {
            id: "idFlores",
            name: "Flores de Bach",
            description: "Flores de Bach para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        },
        {
            id: "idHomeopatia",
            name: "Homeopatia",
            description: "Homeopatia para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        },
        {
            id: "idPomada",
            name: "Pomada",
            description: "Pomada para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        }
    ],
    section6: [
        {
            id: "idKitCP",
            name: "KIT DE ID (Collar + Plaquita)",
            description: "Aromaterapia para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        },
        {
            id: "idKitPaseo",
            name: "KIT PASEO",
            description: "Flores de Bach para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        },
        {
            id: "idKitMipekicha",
            name: "KIT MIPEKICHA",
            description: "Homeopatia para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        },
        {
            id: "idKitPlus",
            name: "KIT PLUS",
            description: "Pomada para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        },
        {
            id: "idKitCuidado",
            name: "KIT CUIDADO",
            description: "Pomada para tu mascota con su nombre y tu número de teléfono.",
            price: 120
        }
    ]
};

/**
* @description Add Elements to the HTML by Methods
*/

// Main Object Creation
const addHeadersObject = document.getElementById('secCotikicha');

function createButton(id, className, buttonText) {
    const button = document.createElement("button"); // Button Created
    button.setAttribute("id", id);
    button.setAttribute("class", className);
    button.textContent = buttonText;
    return button;
}

function createSection(section) {
    const tagMainDiv = document.createElement("div"); // Div Created
    tagMainDiv.setAttribute("id", section.id);
    tagMainDiv.setAttribute("class", "col-sm");

    const tagHeaderCard = document.createElement("h2"); // H2 Created
    tagHeaderCard.setAttribute("id", `h${section.id}`);
    tagHeaderCard.setAttribute("class", "card-title pb-3");
    tagHeaderCard.textContent = section.name;

    tagMainDiv.appendChild(tagHeaderCard); // Add Text Node as property of H2 Element

    const buttons = buttonsBySections[section.id];
    if (buttons) {
        for (const button of buttons) {
            const tagButton = createButton(`btn${button.id}`, "btn btn-outline-primary", button.name);
            tagMainDiv.appendChild(tagButton);

            if (button.sub) {
                tagButton.setAttribute("onclick", `fnShowHide('sub${section.id}${button.name}')`);
                const tagSubDiv = document.createElement("div");
                tagSubDiv.setAttribute("id", `sub${section.id}${button.name}`);
                tagSubDiv.setAttribute("class", "col-sm");
                tagSubDiv.setAttribute("style", "display: none;");
                
                for (const subButton of button.sub) {
                    const tagSubButton = createButton(`subBtn${subButton.id}`, "btn btn-outline-primary subButton", `${subButton.name} - ${subButton.price}`);
                    tagSubDiv.appendChild(tagSubButton);
                }

                tagMainDiv.appendChild(tagSubDiv);
            }
        }
    }

    return tagMainDiv;
}

/**
 * Print On Screen
 */
for (const section of sections) {
    const sectionElement = createSection(section);
    addHeadersObject.appendChild(sectionElement);
}