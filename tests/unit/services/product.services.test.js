const { expect } = require("chai");
const sinon = require("sinon");
const { productService } = require("../../../src/services");
const { productModel } = require("../../../src/models");
const { allProductsMock, newProducMock } = require("../mocks/product.mocks");

describe("Verificando camada service de produtos", function () {
  it("retorna a lista completa de produtos", async function () {
    sinon
      .stub(productModel, "productModelGetAll")
      .resolves(allProductsMock);

    const result = await productService.productServiceGetAll();

    expect(result.message).to.deep.equal(allProductsMock);
  });

  it("retorna um erro caso seja passado um ID inválido", async function () {
    const result = await productService.productServiceGetById('abc');

    expect(result.type).to.equal("PRODUCT_NOT_FOUND");
    expect(result.message).to.equal("Product not found");
  });

  it("retorna um erro caso seja o campo name não seja preenchido", async function () {
    const result = await productService.insertProductService(undefined);

    expect(result.type).to.equal("FIELD_IS_REQUIRED");

    expect(result.message).to.equal('"name" is required');
  });
  
  it("retorna um erro caso seja passado um nome inválido", async function () {
    const result = await productService.insertProductService('mar');
    const resultTwo = await productService.insertProductService(123);
    
    expect(result.type).to.equal("INVALID_VALUE");
    expect(resultTwo.type).to.equal("INVALID_VALUE");
    
    expect(result.message).to.equal('"name" length must be at least 5 characters long');
    expect(resultTwo.message).to.equal('"name" must be a string');
  });

  it("retorna um produto com o id e nome caso seja passado um ID válido", async function () {
    sinon
      .stub(productModel, "productModelGetById")
      .resolves(allProductsMock[0]);

    const result = await productService.productServiceGetById(1);

    expect(result.type).to.equal(null);
    expect(result.message).to.deep.equal(allProductsMock[0]);
  });
});
afterEach(function () {
  sinon.restore();
});
