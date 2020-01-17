// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function Tab (response) {

//  Create Element
    const tab = document.createElement('div');

// Class
    tab.classList.add('tab');

// Text Content
    tab.textContent = `${response.topics}`;

return tab;

}


const entryPoint = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log(response.data);
    response.data.topics.forEach( item => {
        const newTab = Tab(item);
        entryPoint.append(newTab);
        console.log(item);
    })
})
.catch ( error => {
    console.log('Error', error);
})
