#### things to learn before react

  

1) Destructing, spread, template literals, ternaries

2) Promises

3) Async/await

4)  Map, filter, reduce, sort

extension -> quokka in vscode

---

### 1) Destructing, spread, template literals, ternaries

#### => Destructuring objects n arrays

  

here we have can create a the new variable from an object at once

  

```js

const {title,author,genre} = book; //book is array
const [title]=[book.title]

    // here the name should be same as the book properties

// we can also assign them to new vars using the array

const [primaryGenre,secondaryGenre] = genres; //here both are array so no need to use . operator
  
```

#### => Rest n spread operator

spread operator in arrays

```js
const [primary,secondary,...other]=genres
//other has all remaining elements in array
```

rest operator --> only used in function--> #function(...args)



#### String template literal

```js
const hi = `hello ${name}` //can write names inside strings

```

#### Using ternary instead of if/else

```js
pages > 1000?"more than thousand":"lwss than thousand"
```


#### Arrow Functions

 > helpful for writing quick n one line functions
 

```js
function getYear(str){
	return str.split("-")[0];
}
```

```js
const getYear = (str) => str.split("-")[0];
```

#### Short circuiting n logical operators

```js
// shortciruiting can be used as a  if else block useful
console.log(true && "pine Apple") //and takes right on true

console.log(false && "pine Apple") //this can be used as if else


console.log(true || "pine apple") // or take the left on true

console.log(false || "pine apple")

// this or has drawback when the value is 0 is consider false

var reviewsCount = book.reviews.librarything.reviewsCount;

reviewsCount

// here when the data is 0 it should show 0 but its showing no data
console.log( reviewsCount || "no data")

  

// for encountering this problem they have developed the nullish coalashing operator

console.log( reviewsCount ?? "no data")

//for this nullish opearator even if the data is zero it gives original number //only if is Nan or Undefined it shortcircuits
```
