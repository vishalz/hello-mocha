
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
