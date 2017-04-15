Hello Mocha

# Setup 

## Setup project folders

```
mkdir -p ~/code/hello-mocha/test
mkdir -p ~/code/hello-mocha/src 


```

## Setup npm packages 

```
npm init 
npm install --save mocha 
npm install --save should 
npm install --save chai 

```

## Setup package.json script and test directory 

```

"directories": {
    "test": "test"
  },
  "scripts": {
    "test": "mocha --grep"
  },

```

## create mocha options file test/mocha.opts

```
--reporter spec 

```

## create a src file in src directory src/functions.js

```
module.exports = function(){

  // incremento
	let incremento = function (x){
	
    //Several ways to specify what type is used to throw the error
	 
    if (typeof(x) !== 'number'){
      let err = "x is not a number";            //  throw a string
      throw (err);
	  }

    if (isNaN(x)){
      let err = new Error('x is a NaN');        // throw an error object using new
      throw (err);
    }

	  if (!isFinite(x)){
      let err = Object.create(Error.prototype); //  throw an error object using Object.create
      err.message = "x is not Finite";
      throw (err);
    }

	  ++x;
	  return x;
	
	}//end of incremento


  let obj = {};
  (typeof(incremento) !== 'undefined') && (obj.incremento = incremento);
  return obj;

}(); //end of module.exports 
```
## Create a file with tests test/functions.test.js

```
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



```

## create a .gitignore file 

```
	# ignore these directories
	node_modules
	out
	build
	.settings
	
	# ignore these files 
	.project

```	
## setup git repo local and on github  

```
		echo  "Hello Mocha" >> README.md
		git init 
		git add . 
		git commit -m "First Commit"
		git remote add origin git@github.com:vishalz/hello-mocha.git

```

## run tests 

```
npm test functions

```

# References 
1. [Testing Node.js With Mocha and Chai](http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.WOo551PyszY)
1. [Mocha Chai Istanbul](https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/)


