/* Read data from datasource */
const books = require('./mock/books.json');

/* Libs */
const Color = require('./libs/color.helper');

/* Analyse data */
books.forEach((item) => {
    console.log(
        `Book ${Color.BgGreen}${Color.FgMagenta}${item.name}${Color.Reset} published by ${item.publisher} at ${item.year}`
    );
});
