// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    console.log("I am an axios call from the cards", response)

    Object.values(response.data.articles).forEach(elements => {
        elements.forEach(element => {
            cardContainer.append(createCards(element));

        })
    })
})
.catch(error => {
    console.log("error")
})

function createCards(obj) {

// Create Element

const newCard = document.createElement('div'),
    newHead = document.createElement('div'),
    newAuth = document.createElement('div'),
    newImgContainer = document.createElement('div'),
    newImage = document.createElement('img'),
    newAuthName = document.createElement('span')

// add classes

    newCard.classList.add('card');
    newHead.classList.add('headline');
    newAuth.classList.add('author');
    newImgContainer.classList.add('img-container');

// TextContent

    newHead.textContent = obj.headline;
    newImage.setAttribute('src', obj.authorPhoto);
    newAuthName.textContent = obj.authorName;

// Append Elements

    newCard.append(newHead);
    newCard.append(newAuth);
    newAuth.append(newImgContainer);
    newImgContainer.append(newImage);
    newAuth.append(newAuthName);

    return newCard;

}