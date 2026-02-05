// importazione express
const express = require('express');
// inizializziamo express invocandolo come una funzione e salvando il risultato in una variabile
const app = express();
// definizione porta
const port = 3000

// attivazione cartella public per file statici
app.use(express.static('public'));

// rotta index app(la prima che viene proiettata)
app.get('/', (req, res) => {
    res.send('<h1>Server del mio blog</h1>')
})

// settagio rotta per bacheca per app
app.get('/bacheca', (req, res) => {

    // settagio dati json da ritornare alla rotta bacheca
    const bacheca = [
        {
            id: 1,
            titolo: ciambellone,
            contenuto: immagine,
            img: "/imgs/ciambellone.jpeg",
            tag: ["zucchero", "uova", "limone"],
        }, {
            id: 2,
            titolo: cracker_barbabietola,
            contenuto: immagine,
            img: "/imgs/cracker_barbabietola.jpeg",
            tag: ["zucchero", "uova", "limone"],
        }, {
            id: 3,
            titolo: pane_fritto_dolce,
            contenuto: immagine,
            img: "/imgs/pane_fritto_dolce.jpeg",
            tag: ["zucchero", "uova", "limone"],
        }, {
            id: 4,
            titolo: pasta_barbabietola,
            contenuto: immagine,
            img: "/imgs/pasta_barbabietola.jpeg",
            tag: ["zucchero", "uova", "limone"],
        }, {
            id: 5,
            titolo: torta_paesana,
            contenuto: immagine,
            img: "/imgs/torta_paesana.jpeg",
            tag: ["zucchero", "uova", "limone"],
        }
    ];

    // ritorniamo res con json array di oggetti blog
    res.json(bacheca);
})


app.listen(port, () => {
    console.log(` verifica ascolto della porta ${port}`)
})