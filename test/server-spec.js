var server = require('../server');
var request = require('supertest');

describe("App Server", function () {

    it("load the home page",
        fin => request(server)
            .get('/')
            .expect(200)
            .expect('Content-Type', /html/)
            .end(fin)
    );

});