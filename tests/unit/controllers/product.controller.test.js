const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = chai;
chai.use(sinonChai);
const { productService } = require("../../../src/services");
const { productController } = require("../../../src/controllers");
const { allProductsMock, newProductsMock } = require("../mocks/product.mocks");
const { insertProductService} = require("../../../src/services/product.service");

describe("verificando controller de Products", function () {
  it("listando todos os produtos", async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, "productServiceGetAll")
      .resolves({ type: null, message: allProductsMock });

    await productController.productControllerGetAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProductsMock);
  });

  it("buscando um produto pelo ID, com status 200", async function () {
    const res = {};
    const req = { params: { id: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, "productServiceGetById")
      .resolves({ type: null, message: allProductsMock[0] });

    await productController.productControllerGetById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProductsMock[0]);
  });

  it("cadastrando um produto com sucesso", async function () {
    const res = {};
    const req = { body: { name: "Capa do Superman" } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, "insertProductService")
      .resolves({ type: null, message: newProductsMock });

    await productController.insertProductController(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProductsMock);
  });
  afterEach(sinon.restore);
});
