Hello Mocha

# Setup 

## Directory Structure 

```
	mkdir -p ~/code/hello-mocha/test
	mkdir -p ~/code/hello-mocha/src 


```

## Setup project folders

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
	--require should
	--reporter spec 

```

## create a src file in src directory src/functions.js

```
	module.exports = function(){
	
	var test = "test";
	
	var isNumber = function(number){
	  
	  if (typeof(x) !== 'number'){
		  console.log( "in isNumber throwing error");
	    //throw and exception and return 
			throw ( { name : "Invalid Parameter Value" , message : "x is not a number" });
	    //throw ( new Error("test"));
	
	  } else {
	    return true;
	  }  
	
	  }// end of isNumber
	
	
	  var obj = {};
		
		obj.isNumber = isNumber;
	  obj.test = test;
	  
		return obj;
	
	
	}(); //end of module.exports 
	
	


```
## Create a file with tests test/functions.test.js

```
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




