let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1

 const mainTitle = document.getElementById("main-title"); 
  mainTitle.textContent = "Dom's Website"; 

  // Part 2
  const websiteBody = document.querySelector("body"); 
  websiteBody.style.backgroundColor = "blue";  


  // Part 3
const removedItem = document.getElementById("favorite-things").children[5]; 
removedItem.remove();
console.log(removedItem); 


  // Part 4
 
const titles = document.querySelectorAll(".special-title"); 

for(let i = 0; i < titles.length; i++){
  titles[i].style.fontSize = "2rem"; 
}
console.log(titles);

  
  // Part 5

  const races = document.getElementById("past-races").children[3]; 
  races.remove(); 
  console.log(races); 


  // Part 6
const newCity = document.createElement('li'); 
const pastRaces = document.getElementById("past-races"); 
newCity.textContent = "New York"; 
pastRaces.append(newCity); 
console.log(newCity)
console.log(pastRaces)

  // Part 7
 const blogs = document.querySelector(".main"); 
 const newDiv = document.createElement("div"); 
 const heading = document.createElement("h1"); 
 const paragraph = document.createElement("p"); 
 newDiv.classList.add("blog-post", "purple"); 
 blogs.append(newDiv); 
 newDiv.append(heading); 
 newDiv.append(paragraph);
 heading.textContent = "New York"; 
 paragraph.textContent = "I GRABBED SOME PIZZA AND HIT THE DASH"; 
  // Part 8

const qOD = document.getElementById("quote-title");

qOD.addEventListener("click", (evt) =>{
  randomQuote(); 
});

  // Part 9

  const allBlogPosts = document.querySelectorAll("div > .blog-post"); 
  for(let i = 0; i < allBlogPosts.length; i++){
    allBlogPosts[i].addEventListener("mouseout", (evt) =>{
      evt.currentTarget.classList.toggle("purple"); 
    }); 

    allBlogPosts[i].addEventListener("mouseenter", (evt) =>{ 
      evt.currentTarget.classList.toggle("red"); 
    }); 
  };
});

