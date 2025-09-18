
//created an empty array shoppingList
let shoppingList = [];

//function called addItem taking item as parameter and adding said item to the shoopingList array
function addItem (item) {
    let hasItem;
    for(let product of shoppingList){
        if(product==item){
            hasItem=true;
        }
    }
    if(!hasItem){
        shoppingList.push(item)
    }
   
}


addItem('mouse')
addItem('pc')
addItem('bag')
addItem('headphones')
addItem('speaker')
addItem('bag')
addItem('mac-pc')


filterItems('pc')


//Write a function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive).
function filterItems(searchTerm){
    const result = shoppingList.filter((item) => item.includes(searchTerm))
    console.log(result);
}



//a function called removeLastItem that removes the last item from the shoppingList array
function removeLastItem(){
    shoppingList.pop()
}

//the string name isnt written in the argument(the parenthesis) cuz the function includes the method pop which automatically removes the last element from an array 
removeLastItem()

function displayList(){
    console.log(shoppingList)
}


//call displayList 
displayList()


//this is us calling the function or executing the function in which the string mouse is the argument that wwe're passing into the parameter for the function addItem meaning this here is adding the item 'mouse' and'bag'

//shows you what happens
// console.log(shoppingList);


//select or query elements
const input = document.getElementById("item-input");
const addButton = document.getElementById("add-btn");
const itemsUl = document.getElementById("shopping-list");
const removeBtn = document.getElementById("remove-btn")


function addAndDisplayItems(){
    //add the items to the array
    shoppingList.push(input.value);
    //create a new element
    let li = document.createElement('li')
    //update the element with the text
    li.textContent = input.value;
    //append the new eelement to the ul
    itemsUl.appendChild(li);
//clears the append value
     input.value = " ";

    // console.log(shoppingList);
}

function removeLastItemAndUpdate(){
    //remove the last item in the array
    shoppingList.pop();
    // remove the last item from the ul
    itemsUl.lastElementChild.remove();
}

addButton.addEventListener('click', addAndDisplayItems);
removeBtn.addEventListener('click', removeLastItemAndUpdate);
