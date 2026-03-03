const shopData = [
    {
        "categoria": "Sistemi di Confezionamento e Conservazione",
        "prodotti": [
            {
                "nome": "Sistema Conservazione Sottovuoto Professionale",
                "descrizione": "Buste sottovuoto professionali per ogni esigenza: modelli Micro 90 e 145. Disponibili in versione Liscia, Goffrata e specifica per Cottura a bassa temperatura.",
                "misure": ["Mod. Micro 90", "Mod. Micro 145", "Goffrate Artigianali", "Specifiche per Cottura", "Vari formati: 20x30, 25x35, 30x40, 40x50", "Altre misure su richiesta"],
                "settori": ["Macelleria", "Gastronomia", "Pescheria", "Ristorazione", "Salumeria"]
            },
            {
                "nome": "Sistemi Sigillatura Gastronomia",
                "descrizione": "Vaschette specifiche predisposte per sigillatura con film. Soluzioni professionali per mantenere integrità e freschezza.",
                "misure": ["Vaschette per Sigillatrice", "Bobine Film per Sigillatura", "Misure varie su richiesta"],
                "settori": ["Gastronomia", "Macelleria", "Pastificio", "Ristorazione"]
            },
            {
                "nome": "Vaschette Professionali in PET (Ovali/Quadre)",
                "descrizione": "Contenitori trasparenti PET ad alta visibilità con coperchio, ideali per gastronomia fredda e asporto.",
                "capacita": ["150 cc", "250 cc", "390 cc", "500 cc", "750 cc", "1000 cc", "1500 cc", "2000 cc"],
                "settori": ["Gastronomia", "Take-Away", "Ristorazione", "Bar", "Pasticceria"]
            },
            {
                "nome": "Linea Caldo: Alluminio, Microonde e OPS",
                "descrizione": "Contenitori idonei al riscaldamento e mantenimento temperatura, dalle monoporzioni ai grandi formati catering.",
                "misure": ["Alluminio: da mezza a 8 porzioni", "Microonde: da 250cc a 1500cc", "OPS: da 150cc a 1500cc"],
                "settori": ["Gastronomia", "Take-Away", "Catering", "Ristorazione", "Pizzeria"]
            },
            {
                "nome": "Vassoi Specialistici (Polistirolo / EPS)",
                "descrizione": "Supporti leggeri e resistenti per il confezionamento a banco di carne, pesce e ortofrutta.",
                "misure": ["Mod. 168", "Mod. 172", "Mod. 25", "Mod. 70EP", "Mod. 162", "Mod. 166-45", "Mod. 70", "Mod. 73", "Mod. 60", "Mod. 86/22", "Mod. 10/I", "Mod. 222", "Altre misure su richiesta"],
                "settori": ["Macelleria", "Pescheria", "Ortofrutta", "Gastronomia"]
            },
            {
                "nome": "Linea Speciale Gastronomia: Parmacotto",
                "descrizione": "Contenitori dedicati di alta gamma, ideali per affettati e pronti al consumo di prestigio.",
                "misure": ["h30", "h35", "h45", "Altre altezze su richiesta"],
                "settori": ["Gastronomia", "Macelleria", "Salumeria"]
            }
        ]
    },
    {
        "categoria": "Carta e Packaging Specialistico",
        "prodotti": [
            {
                "nome": "Linea Sacchetti in Carta Kraft, Avana e Sealing",
                "descrizione": "Sacchetti resistenti per panifici, ortofrutta e pasticceria. Disponibili in carta Kraft, Sealing, Bianca e Avana.",
                "misure": ["12x26", "14x28", "17x36", "19x38", "22x44", "25x50", "30x60"],
                "settori": ["Panificio", "Ortofrutta", "Pasticceria", "Gastronomia", "Macelleria"],
                "personalizzabile": true
            },
            {
                "nome": "Linea Carta Tecnica (Politenata / Accoppiata)",
                "descrizione": "Massima barriera protettiva per salumi, formaggi e prodotti umidi. Personalizzabile con il tuo logo.",
                "misure": ["18x25", "25x37", "33x40", "37x50", "40x66", "50x75", "75x100"],
                "settori": ["Macelleria", "Gastronomia", "Latticini", "Salumeria", "Pescheria"],
                "personalizzabile": true
            },
            {
                "nome": "Carta Vegetale per Pescheria",
                "descrizione": "Resistente all'umidità, specifica per il confezionamento di prodotti ittici freschi.",
                "misure": ["18x25", "25x37", "33x40", "37x50", "50x75", "75x100"],
                "settori": ["Pescheria", "Gastronomia"]
            },
            {
                "nome": "Supporti Avvolgimento Alimentare (MOCA)",
                "descrizione": "Bobine e rotoli alluminio professionali. Certificate per contatto alimentare diretto.",
                "misure": ["Alluminio 125mt / 150mt", "Pellicola estensibile 300mt", "Bobine h28-h40-h45 (Certificate)"],
                "settori": ["Macelleria", "Gastronomia", "Pescheria", "Pasticceria", "Ristorazione", "Cucina"]
            }
        ]
    },
    {
        "categoria": "Dolce, Pane e Pasticceria",
        "prodotti": [
            {
                "nome": "Linea Pasticceria e Panificazione",
                "descrizione": "Vassoi dorati, cartone bianco, strisce protettive e sacchetti antigrasso specialistici. Carta forno professionale.",
                "misure": ["Vassoi da 1 a 11", "Sacchetti Antigrasso (Misure Varie)", "Carta Forno 40x60 e 60x80", "Strisce 5/7x100"],
                "settori": ["Pasticceria", "Panificio", "Bar", "Gastronomia"],
                "personalizzabile": true
            },
            {
                "nome": "Packaging Specializzato Pizza",
                "descrizione": "Soluzioni per pizzeria: Cubi, Calzoni, Valigette e coperchi coordinati. Personalizzabili con stampa logo.",
                "misure": ["Cubo 325x325", "Calzone 335x160", "Valigette 500x500"],
                "settori": ["Pizzeria", "Ristorazione", "Asporto"],
                "personalizzabile": true
            },
            {
                "nome": "Coppette e Dessert Pack",
                "descrizione": "Soluzioni trasparenti coperchiabili per gelaterie e pasticcerie.",
                "capacita": ["400 ml", "500 ml"],
                "settori": ["Pasticceria", "Bar", "Gelateria", "Ristorazione"]
            }
        ]
    },
    {
        "categoria": "Shopper e Soluzioni per il Trasporto",
        "prodotti": [
            {
                "nome": "Linea Shopper Bio Compostabili",
                "descrizione": "Borse certificate compostabili ad alta resistenza. Personalizzabili con il tuo brand.",
                "misure": ["Piccole 23x40", "Medie 27x50", "Grandi 30x60", "Maxi 34x65"],
                "settori": ["Macelleria", "Gastronomia", "Pescheria", "Ortofrutta", "Pasticceria", "Panificio", "Ristorazione", "Farmacia"],
                "personalizzabile": true
            },
            {
                "nome": "Shopper Ortofrutta e Borse Forate",
                "descrizione": "Soluzioni bio a rotolo e borse forate trasparenti per una visibilità totale del prodotto.",
                "misure": ["Borse Forate 24x45, 28x50", "Bio a rotolo 25x50", "Bio a Strappo 22x44, 17x36, 25x50"],
                "settori": ["Ortofrutta", "Macelleria", "Pescheria", "Panificio", "Gastronomia"]
            },
            {
                "nome": "Sacchi Salvafreschezza Termici",
                "descrizione": "Sacchi alluminati spruzzati per il trasporto sicuro di prodotti freschi e piatti caldi.",
                "misure": ["22x32"],
                "settori": ["Macelleria", "Gastronomia", "Pescheria", "Ristorazione"]
            }
        ]
    },
    {
        "categoria": "Servizio Tavola e Professional Service",
        "prodotti": [
            {
                "nome": "Servizio Tavola e Accessori",
                "descrizione": "Kit Posate Bio Legno, Buste Portaposate personalizzabili, tovaglioli e bicchieri.",
                "formati": ["Kit Posate Bio Legno", "Buste Portaposate (Personalizzabili)", "Stecchi Spiedo", "Bicchieri 200cc", "Tovaglioli 33x33", "Tovagliette"],
                "settori": ["Ristorazione", "Gastronomia", "Bar", "Pizzeria", "Catering"],
                "personalizzabile": true
            },
            {
                "nome": "Linea Detergenza e Igiene",
                "descrizione": "Soluzioni professionali per la pulizia delle superfici e degli ambienti di lavoro.",
                "formati": ["Vetri 750ml", "Sgrassatore 750ml", "Multiactiv 750ml", "Cloractiv 750ml"],
                "settori": ["Macelleria", "Gastronomia", "Pescheria", "Pasticceria", "Ristorazione", "Logistica", "Panificio", "Ortofrutta"]
            },
            {
                "nome": "Dispositivi Protezione Individuale (DPI)",
                "descrizione": "Guanti professionali (Lattice, Vinile, Nitrile) certificati per manipolazione alimenti.",
                "misure": ["S, M, L, XL"],
                "settori": ["Macelleria", "Gastronomia", "Pescheria", "Pasticceria", "Panificio", "Ortofrutta", "Logistica", "Ristorazione"]
            },
            {
                "nome": "Sistemi di Asciugatura Professionale",
                "descrizione": "Soluzioni per l'asciugatura industriale e sistemi di pulizia a secco.",
                "formati": ["Bobine Asciugatutto (Vari Formati)", "Asciugamani a C, Z, V"],
                "settori": ["Macelleria", "Gastronomia", "Pescheria", "Pasticceria", "Panificio", "Ristorazione", "Logistica", "Ortofrutta"]
            },
            {
                "nome": "Consumabili Punto Vendita",
                "descrizione": "Rotoli termici per cassa, bilancia e sistemi POS.",
                "formati": ["Carta Termica Bilancia/POS", "Rotoli Cassa h57mm"],
                "settori": ["Macelleria", "Gastronomia", "Pescheria", "Pasticceria", "Panificio", "Ortofrutta", "Ristorazione", "Retail"]
            }
        ]
    },
    {
        "categoria": "Packaging Industriale e Logistica",
        "prodotti": [
            {
                "nome": "Imballo Industriale: Film Estensibile",
                "descrizione": "Film professionale per stabilizzazione bancali. Alta resistenza.",
                "formati": ["Rotolo h50 - 2,2kg", "Confezione da 6", "Colori: Trasparente, Nero, Bianco"],
                "settori": ["Logistica", "Magazzino", "Industria", "Trasporti"]
            },
            {
                "nome": "Linea Bottiglie in Plastica",
                "descrizione": "Contenitori trasparenti per liquidi alimentari con capsule.",
                "misure": ["0,5 lt", "1 lt", "1,5 lt", "2 lt", "3 lt", "5 lt"],
                "settori": ["Industria Alimentare", "Gastronomia", "Bevande", "Agricoltura"]
            }
        ]
    }
];
