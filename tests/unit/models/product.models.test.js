const { expect } = require("chai");
const sinon = require("sinon");
const { productModel } = require("../../../src/models");
const connection = require("../../../src/models/db/connection");
const { allProductsMock, newProducMock, insertProductMock } = require("../mocks/product.mocks");

describe("verificando camada model de produtos", function () {
  it("listando todos os produtos", async function () {
    sinon.stub(connection, "execute").resolves([allProductsMock]);

    const result = await productModel.productModelGetAll();

    expect(result).to.be.deep.equal(allProductsMock);
  });

  it("buscando um produto a partir do seu id", async function () {
    sinon.stub(connection, "execute").resolves([[allProductsMock[0]]]);

    const result = await productModel.productModelGetById(1);

    expect(result).to.be.deep.equal(allProductsMock[0]);
  });

  it("cadastrando um produto", async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 4 }]);

    const result = await productModel.insertProductModel(insertProductMock);

    expect(result).to.equal(4);
  });
  
  afterEach(sinon.restore);
});
