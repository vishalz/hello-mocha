
module.exports = function(){

var isNumber = function(number){
  
  if (typeof(x) !== 'number'){
    //throw and exception and return 
		//    throw ( { name : "Invalid Parameter Value" , message : "x is not a number" });
	  console.log( "isNumber throwing error");
    throw ( new Error("test"));

  } else {
    return true;
  }  

  }// end of isNumber


  var obj = {};
  obj.isNumber = isNumber;
  obj.test = "test"
  return obj;


}(); //end of module.exports 
