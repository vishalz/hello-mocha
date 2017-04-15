
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
