/*eslint no-console: 0*/
var server = require('./server');
process.title = 'reactfluxrecipes';
server.listen(process.env.PORT || 3000, () => console.log(`The Recipe App is Running on Port 3000`));