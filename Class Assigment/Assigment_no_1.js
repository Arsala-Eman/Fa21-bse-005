/**Array methods in javascript  */
/**1: JavaScript Array length
 * The Lenght property return the lenght  of an array
 * for example 
 */
let names = ["Arsala", "Eman", "Asma", "Abeera", "Anaya"];
let length_of_array = names.length; 
console.log(length_of_array);
/**2:  Array toString()
*Convert array to a String value seperated by a coma 
* for exmple 
*/
let Convert_to_String = names.toString;
console.log(Convert_to_String);
/** Array at()
 * we give the index no and it return it the value who are in the index 
 */
let index_name= names.at(2)
console.log(index_name)
/** Array join()
 * The join() method also joins all array elements into a string.
 * It behaves just like toString(), but in addition you can specify the separator:
 */
 let name_join = names.join("+");
 console.log(name_join);
 /**Popping and Pushing 
  * popping means delete the item of array and pushing mean adding an item of an array 
 */
 let pop_name = names.pop();
 console.log(pop_name);
 let push_name=names.push("Waleed");
 console.log(push_name);
 /**Array shift()
  * same as poping but in poping we do it last but in shift we do  it in first 
  */
 let shift_name = names.shift();
 console.log(shift_name);
 /** Array unshift()
  * The unshift() method adds new elements to the beginning of an array:
  */
 let unShift_name = names.unshift("Khan");
 console.log(unShift_name);
 /**Array delete()
  * Using delete() leaves undefined holes in the array.
  * Use pop() or shift() instead.
  */
  delete names[0];
 console.log(names[0]);
 /**Array concat()
  * oncatenation means joining strings end-to-end.
  * The concat() method creates a new array by merging (concatenating) existing arrays:
  */
 let first_name =["arsala"];
 let last_name = ["Eman"];
 let full_name = first_name.concat(last_name);
 /**copyWithin()
  * copyWithin() copies array elements to another position in an array, overwriting existing values:
  * Copy to index 2, all elements from index 0:
  */
 let copy_name = names.copyWithin(2,0);
 console.log(copy_name);
 /**flat()
  * Flattening an array is the process of reducing the dimensionality of an array.
  * Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
  * */
 const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
/**splice()
 * The splice() method can be used to add new items to an array with the given idex no 
 */
let splice_name = first_name.splice(1,0,"eman");
console.log(splice_name);
/**Using splice() to Remove Elements
 * With clever parameter setting, you can use splice() 
 * to remove elements without leaving "holes" in the array
 **/
 let removing =  names.splice(0,1);
 console.log(removing);
 /**slice() 
  * The slice() method slices out a piece of an array into a new array:
 */
 const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 const citrus = fruits.slice(1);


 /**Basic String Methods */
 /**String Length
  * The length property returns the length of a string:
  */
 let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let length = text.length;
 console.log(length);
 /**charAt() */
 /**The charAt() method returns the character at a specified index (position) in a string: */
 let texts = "Hello World";
let char = texts.charAt(0);
console.log(char);
/**charCodeAt()
 * The charCodeAt() method returns the code of the character at a specified index in a string
 * The method returns a UTF-16 code (an integer between 0 and 65535).
 */
let char_code_at = texts.charCodeAt(0);
console.log(char_code_at);
/**at()
 * The at() method returns the character at a specified index (position) in a string.
 */
 let at_method = texts.at(0);
 console.log(at_method);
 /**slice()
  * slice() extracts a part of a string and returns the extracted part in a new string.
  * The method takes 2 parameters: start position, and end position (end not included).
  */
 let string_methods=["slice", "at","charat"];
 let string_slicing= string_methods.slice(1,2);
 console.log(string_slicing);
 /**toUpperCase()
  * convert all character to upper case 
  */
 let convert_To_capital= texts.toUpperCase();
 console.log(convert_To_capital);
/**tolowercase
 * convert string to lower case
 */
let convert_to_lowercase= texts.toLowerCase();
console.log(convert_to_lowercase);
/**concat()
 * concat() joins two or more strings
 */
let text1= "hello";
let text2 = "world";
let text3= text1.concat(" "+text2);
console.log(text3);
/**trim()
 * The trim() method removes whitespace from both sides of a string:
 */
let text11= "              hello world          ";
let result= text11.trim();
console.log(result);
/**padStart()
 * The padStart() method pads a string from the start.
 * It pads a string with another string (multiple times) until it reaches a given length.
*/
let no = "5";
result = no.padStart(3,"0");
console.log(result);
/**repeat()
 * The repeat() method returns a string with a number of copies of a string.
 * The repeat() method returns a new string.
 * The repeat() method does not change the original string.
 */
result= texts.repeat(2);
console.log(result);
/**Replacing String Content
 * The replace() method replaces a specified value with another value in a string
 */
let changein_string = "hello world "
result= changein_string.replace("world","universe");
console.log(result);
/**ReplaceAll() */
 text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
console.log(text);
/**String split()
 * 
 */
text = "a,b,c,d,e,f";
const myArray = text.split(",");
console.log(myArray[0]);



