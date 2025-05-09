let index = 0;
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

function afficherDossierIteratif(dossierPrincipal) {
    let contenuDossierPrincipal = dossierPrincipal.contenu;
    console.log(dossierPrincipal.nom);

    for (let index = 0; index < contenuDossierPrincipal.length; index++) {
        let dossierSecondaire = contenuDossierPrincipal[index];
        console.log(dossierSecondaire.nom);

        if (dossierSecondaire.contenu !== undefined) {
            let contenuDossierSecondaire = dossierSecondaire.contenu;

            for (let index = 0; index < contenuDossierSecondaire.length; index++) {
                let dossierTroisiemeNiveau = contenuDossierSecondaire[index];
                console.log(dossierTroisiemeNiveau.nom);

                if (dossierTroisiemeNiveau.contenu !== undefined) {
                    let contenuDossierTroisiemeNiveau = dossierTroisiemeNiveau.contenu;
                    for (let index = 0; index < contenuDossierTroisiemeNiveau.length; index++) {
                        let dossierQuatriemeNiveau = contenuDossierTroisiemeNiveau[index];
                        console.log(dossierQuatriemeNiveau.nom);
                    }
                }
            }
        }
    }
}

function afficherDossierRecursif(dossierPrincipal) {
    let contenuDossierPrincipal = dossierPrincipal.contenu;
    console.log(dossierPrincipal.nom);

    for (let index = 0; index < contenuDossierPrincipal.length; index++) {
        let dossierSecondaire = contenuDossierPrincipal[index];
        
        if (dossierSecondaire.contenu !== undefined) {
            afficherDossierIteratif(dossierSecondaire);
        } else { console.log(dossierSecondaire.nom)}
    }

}

afficherDossier(dossierPrincipal);
afficherDossierIteratif(dossierPrincipal);
afficherDossierRecursif(dossierPrincipal);