/* Read data from datasource */
const books = require('./mock/books.json');

/* Libs */
const Color = require('./libs/color.helper');
const ExpressModule = require('./libs/express.module');

const app = ExpressModule();
app.get('*', (req, res) => {
    const arr = [];
    /* Analyse data */
    books.forEach((item) => {
        arr.push(
            `Book ${Color.BgGreen}${Color.FgMagenta}${item.name}${Color.Reset} published by ${item.publisher} at ${item.year}`
        );
    });

    res.send(arr.join('\n'));
});
