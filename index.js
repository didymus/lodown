'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to return the value unchanged.
 * 
 * @param {Any Value} value: Any <value> that you want returned unchanged.
 * @returns {Same Value}: Returns <value> unchanged.
 */
function identity(value) {
  return value;  
};
module.exports.identity = identity;

/**
 * typeOf: Designed to return the data type of <value>.
 * 
 * @param {Any Value} value: Any value that you want the type of.
 * @returns {String}: Returns the type of <value> as a string. 
 * Types are one of:
 *          - "string"
 *          - "array"
 *          - "object"
 *          - "undefined"
 *          - "number"
 *          - "boolean"
 *          - "null"
 *          - "function"
 */
function typeOf(value) {
   if(Array.isArray(value) === true){
        return 'array';
    } else if(value === null){
       return 'null';
    } else {
        return typeof value;
    }
    
};
module.exports.typeOf = typeOf;

/**
 * first: Designed to return the first <number> of items in <array>.
 * 
 * @param {Array} array: The array you want to get the first values of.
 * @param {Number} number: The number of values you want to be returned.
 * @returns {Array}: Returns the first <number> items of <array>. If <number>
 * is not given or NaN returns first element. If <array> is not array returns
 * an empty array. If <number> is negative returns empty array. If <number> is 
 * greater than <array>.length returns the entire array.
 */
function first(array, number) {
    if(Array.isArray(array) === false || number < 0){
        return [];
    } else if(number === undefined || typeof number !== 'number'){
        return array[0];
    } else if(number > array.length){
        return array;
    } else {
        return array.splice(0, number);
        }
    
};
module.exports.first = first;

/**
 * last: Designed to return the last <number> values in <array>.
 * 
 * @param {Array} array: The array you want to get the last values of.
 * @param {Number} number: The number of values you want to be returned.
 * @returns {Array}: Returns the last <number> items of <array>. If <number>
 * is not given or NaN returns last element. If <array> is not array returns [].
 * If <number> is negative returns empty array. If <number> is greater than 
 * <array>.length returns the entire array.
 */
function last(array, number) {
    if(Array.isArray(array) === false || number < 0){
        return [];
    } else if(number === undefined || typeof number !== 'number'){
        return array[array.length - 1];
    } else if(number > array.length){
        return array;
    } else {
        return array.splice(number - 1, array.length);
        }
    
};
module.exports.last = last;

/**
 * indexOf: Designed to return the index of the first occurance of <value>
 * that exists in <array>.
 * 
 * @param {Array} array: The array which contains the index you want.
 * @param {Any Value} value: The value in <array> you want the index of.
 * @returns {Number}: Returns the index of <value>. Returns -1 if <value> is not
 * in <array>.
 */
function indexOf(array, value) {
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        } 
    } return -1;
};
module.exports.indexOf = indexOf;

/**
 * contains: Designed to return boolean value if <array> contains <value>.
 * 
 * @param {Array} array: The array in which to search.
 * @param {Any Value} value: The value you are looking for in <array>.{
 * @returns {Boolean}: Returns true if <array> contains <value>, otherwise false.
 */
function contains(array, value) {
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return true;
        }
    } return false;
};
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection.
 * @returns <no return value>
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
};
module.exports.each = each;

/**
 * unique: Designed to return a new array of all elements from <array> with 
 * duplicates removed.
 * 
 * @param {Array} array: The target array.
 * @returns {Array}: Returns new array of <array> with all duplicates removed.
 */
function unique(array) {
   const results = [];
   for(var i = 0; i < array.length; i++){
       if(indexOf(results, array[i]) === -1){
           results.push(array[i]);
       }
   }

  return results;
};
module.exports.unique = unique;

/**
 * filter: Designed to call <function> for each element in <array> and return 
 * a new array of elements for which calling <function> returned true.
 * 
 * @param {Array} array: The target array.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection.
 * @returns {Array}: Returns new array of elements from <array> for which 
 * calling <function> returned true.
 */
function filter(array, test) {
    let results = [];
    each(array, function(element, index, array){
        if(test(element, index, array)){
           results.push(element); 
        }
    }) 
    return results;
};
module.exports.filter = filter;

/**
 * reject: Designed to call <function> for each element in <array> and return a 
 * new array of elements for which calling <function> returned false.
 * 
 * @param {Array} array: The target array.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection.
 * @returns {Array}: Returns a new array of elements from <array> for which
 * calling <function> returned false.
 */
function reject(array, test) {
    let results = [];
    each(array, function(element, index, array){
        if(!test(element, index, array)){
           results.push(element); 
        }
    }) 
    return results;
};
module.exports.reject = reject;

/**
 * partition: Designed to call <function> for each element in <array> and return
 *  an array that is made up of 2 sub-arrays:
 *       0) An array that contains all the values for which <function> returned
 *          something truthy.
 *       1) An array that contains all the values for which <function> returned 
 *          something falsy.
 * 
 * @param {Array} array: The target array.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection.
 * @returns {Array(s)}: Returns an array with 2 sub-arrays. One that contains all
 * the values for which <function> returned something truthy. The other that
 * contains all the values for which <function> returned something falsy.
 */
function partition(array, test) {
     const trueArray = [];
     const falseArray = [];
     const arrayOfArrays = []; 
     
     each(array, function(element, key, array){
        if(test(element, key, array) === true){
           trueArray.push(element); 
        } else {
            falseArray.push(element);
        }
    }) 
    arrayOfArrays.push(trueArray, falseArray);
    return arrayOfArrays;
 };
module.exports.partition = partition;

/**
 * map: Designed to call <function> for each element in <collection> and save
 *   the return value of each <function> call in a new array and return it.
 *  
 * @param {Array or Object} collection: The target collection.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection.
 * @returns {Array}: Returns an array of the return values of each <function>
 * call. 
 */
function map(collection, test) {
    const results = [];
     if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            const element = collection[i];
            results.push(test(element, i, collection));
        }
    } else {
        for(let key in collection){
            const element = collection[key];
            results.push(test(element, key, collection))
        }
    } return results;
}; 
module.exports.map = map;

/**
 * pluck: Designed to return an array containing the value of <property> for 
 *        every element in <array>.
 * 
 * @param {Array of Objects} collection: The collection over which to iterate.
 * @param {Any Value} property: The target key.
 * @returns {Array}: Returns an array containing the value of <property> for 
 *           every element in <array>.
 */
function pluck(collection, property) {
    let results = map(collection, function(collection){
        return collection[property];
    });
    return results;
};
module.exports.pluck = pluck;

/**
 * every: Designed to call <function> for every element of <collection>.
*      If the return value of calling <function> for every element is true, 
*      returns true.
*      If even one of them returns false, returns false.
*      If <function> is not provided, returns true if every element is truthy,
*      otherwise returns false.
 * 
 * @param {Array or Object} collection: The target collection.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection.
 * @returns {Boolean}: Returns true if the return value of calling <function>
 * for every element is true. Returns false if even one of them returns false.
 * If <function> is not provided it returns true if every element is truthy,
 * otherwise returns false.
 */
function every(collection, test) {
  if(test === undefined){
      return !contains(collection, false);
  } 
  return !contains(map(collection, test), false)
};
module.exports.every = every;

/**
 * some: Designed to call <function> for every element of <collection>.
 *      If the return value of calling <function> is true for at least one 
 *      element, returns true.
 *      If it is false for all elements, returns false.
 *      If <function> is not provided returns true if at least one element is 
 *      truthy, otherwise returns false.
 * 
 * @param {Array or Object} collection: The target collection.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection.
 * @returns {Boolean}: Returns true if the return value of calling <function> is
 * at least true once. Returns false if the return value is false for all 
 * elements.
 */
function some(collection, test) {
    if(test === undefined){
      return contains(collection, true);
  } 
  return contains(map(collection, test), true);
};
module.exports.some = some;

/**
 * reduce: Designed to call <function> for every element in <collection>.
 *         Uses the return value of <function> as the "previous result"
 *         for the next iteration.
 *         On the very first iteration, uses <seed> as the "previous result"
 *         If no <seed> was given, uses the first element/value of <collection> 
 *         as <seed> and continues to the next element.
 *         After the last iteration, returns the return value of the final 
 *         <function> call.
 * 
 * @param {Array} array: The collection over which to iterate.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection
 * @param {Number} seed: An accumulator. Carries the values from function to
 *                      function. Best to start at 0 depending on the output of
 *                      the test function, but if none is selected the seed will 
 *                      start at array[0];
 * @returns {Number}: Returns the final result seed (accumulator)holds after 
 * <function> is called for every element in <array>.
 */
function reduce(array, test, seed) {
for(let i = 0; i < array.length; i++){
    if(seed === undefined){
        seed = array[i];
    } else {
        seed = test(seed, array[i], i, array);
    }
}
return seed;
};
module.exports.reduce = reduce;

/**
 * extend: Designed to copy properties from <object 2> to <object 1>.
 *         If more objects are passed in, copies their properties to <object 1> as 
 *         well, in the order they are passed in.
 *         Returns the updated <object 1>.
 * 
 * @param {Object} object1: The source object.
 * @param {Object} ...objects: However many other objects.
 * @returns {Object}: Returns <object 1> after all the properties of the other 
 * <...objects> are copied to <object 1> in the order they are passed.
 */
function extend(object1, ...objects) {
    return Object.assign(object1, ...objects);
 };
module.exports.extend = extend;