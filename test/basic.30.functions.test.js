var obj = require("../src/delete-me");
console.log (obj.test);
describe("delete-me" , function(){
  it('isNumber("123") should throw an exception', function(){
    obj.isNumber("123").should.throw();
	});

  it('test should be equal to "test" ', function(){
    obj.test.should.be.exactly("test");
	});
})//end of describe 
