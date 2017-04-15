
let chai   = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let should = chai.should();
let obj    = require("../src/functions");

describe('f.incremento', function(){

  it('testing with should' , function(){
    (() => obj.incremento('4')).should.throw("x is not a number");
    (() => obj.incremento(NaN)).should.throw("x is a NaN");
    (() => obj.incremento(Infinity)).should.throw("x is not Finite");

  });

  it('testing with assert' , function(){
    assert.throws(() => obj.incremento("4"),"x is not a number");
    assert.throws(() => obj.incremento(NaN),"x is a NaN");
    assert.throws(() => obj.incremento(Infinity),"x is not Finite");
  });

  it('testing with expect' , function(){
    expect(() => obj.incremento("4")).to.throw("x is not a number");
    expect(() => obj.incremento(NaN)).to.throw("x is a NaN");
    expect(() => obj.incremento(Infinity)).to.throw("x is not Finite");
  });

 }); //end of describe 



