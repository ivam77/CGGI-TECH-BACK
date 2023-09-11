import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js';

describe('API para buscar productos', () => {

  describe('GET /api/product/:id', () => {
    it('Debería obtener un producto por su ID', function (done) {
        const productId = '64cfe58186689dc6f586cb14';
        this.timeout(5000);

      request(app)
        .get(`/api/product/${productId}`)
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property('title');
          expect(response.body).to.have.property('price');
          
          done();
        })
        .catch((error) => {
          console.error(error);
          done(error);
        });
    });
  });
});

