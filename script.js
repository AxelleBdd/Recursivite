let index = 0
const dossierPrincipal = {
    nom: 'Ada',
    contenu: [{
        nom: 'Projets collectifs',
        contenu: [{
            nom: 'Pico8',
            contenu: [{
                nom: 'mariokart.p8'
            }]
        },
        {
            nom: 'Dataviz',
            contenu: [{
                nom: 'index.html'
            },
            {
                nom: 'script.js'
            }
            ]
        }
        ]
    },
    { nom: 'CV.pdf' },
    {
        nom: 'Projets persos',
        contenu: [{
            nom: 'Portfolio',
            contenu: [{
                nom: 'index.html'
            },
            {
                nom: 'script.js'
            }
            ]
        }]
    },
    ],
}

function afficherDossier(dossierPrincipal) {
    console.log(dossierPrincipal.nom)
}

function afficherDossierIteratif (dossierPrincipal) {
    let array = dossierPrincipal.contenu;

    for (let index = 0; index < array.length; index++) {
        console.log(array[index].nom);
    }
}

function afficherDossierRecursif (dossierPrincipal) {
    let array = dossierPrincipal.contenu;
    if (index < array.length) {
        console.log(array[index].nom);
        index++;
        afficherDossierRecursif(dossierPrincipal);
    }
}

afficherDossier(dossierPrincipal);
afficherDossierIteratif(dossierPrincipal);
afficherDossierRecursif(dossierPrincipal);