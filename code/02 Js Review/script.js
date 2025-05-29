const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;

}

function getBook(id) {
  return data.find((d) => d.id === id);
} 

let books = getBooks();
let book = getBook(3);
book


var [title,author]= [book.title, book.author]; //destructuring arrays
title
var {title, author,genres} = book;  //destructuring objects

genres

var [primary,secondary]= genres; //destructuring arrays inside objects


var [primary,secondary,...other]= genres; //spread operator

other

// how to duplicate the above array  and add a new one

var newGenres = [ genres,"epic fantasies"]
newGenres
// this is not we wanted
// now we can use the spread operator

var newGenres = [...genres,"epic fantasies"] // this spreads the array writing them one by one we can put epic n start

//same way we can do with the array too




const updatedBook={
  
  ...book,
  pages:987 ,//overites the pages property in books if only write it down
  moviePublications:"marvel" // adding a new propertyx  
}

updatedBook

const pages= book.pages
pages

const pageRange=pages>300?"more than 300":"less than 300";

pageRange

// use the arrow function for only writing single one line code


var {publicationDate} = book
publicationDate

//writing nrml and arrow function to get the yr from publication

function getYear(str){
    return str.split("-")[0]
}

console.log(getYear(publicationDate));  

// using arrow functions

const getyear= (str) =>str.split("-")[0];
console.log(getyear(publicationDate)) 

// can be also written like this if u have multiple lines

getyear1 = (str) =>{
  //somee lines of code
  return str.split("-")[0];
}


// shortciruiting can be used as a  if else block useful


console.log(true && "pine Apple") //and takes right on true
console.log(false && "pine Apple") //this can be used as if else


console.log(true || "pine apple") // or take the left on true
console.log(false || "pine apple")

// this or has drawback when the value is 0 is consider false
var reviewsCount = book.reviews.goodreads.reviewsCount;
reviewsCount
// here when the data is 0 it should show 0 but its showing no data

console.log( reviewsCount || "no data")

// for encountering this problem they have developed the nullish coalashing operator

console.log( reviewsCount ?? "no data")
//for this nullish opearator even if the data is zero it gives original number //only if is Nan or Undefined it shortcircuits


//chaining  in the properties of the javascript

//this is used to check any object has certain property inside it

var reviewGood = book.reviews?.goodreads?.reviewsCount
reviewGood

var reviewLibrary = book.reviews?.librarything?.ratingsCount
reviewLibrary



//using the map
//map is used in array to loop over all elements n perform someoperation and give same length array

const x= [1,2,3,4,5].map((a)=>a** 2)
x 

const titles = books.map((book)=> book.title)
titles
books

const essentialbooks = books.map((book)=>{
  //if u write multiple fields get in a books but this will act as function block
  
})


const essentialBooks = books.map((book)=>{
  //this will work
  return {
    "title":book.title,
    "author":book.author
  }
  
})
essentialBooks

const EssentialBooks = books.map((book)=>( {
    "title":book.title,
    "author":book.author
    //instead of return we can just use the parenthesis
  })
)
EssentialBooks