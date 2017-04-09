var obj = require("../src/functions");

describe("functions.isNumber" , function(){
  it('isNumber("123") should throw an exception', function(){
    obj.isNumber("123").should.throw();
	});
	it('isNumber(123) return true', function(){
    obj.isNumber(123).should.be.exactly(true);
	});


  it('test should be equal to "test" ', function(){
    obj.test.should.be.exactly("test");
	});


})//end of describe 
