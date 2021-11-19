const express = require('express');
const PORT = 3000;

function init() {
    const app = express();
    app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
    return app;
}

module.exports = init;
