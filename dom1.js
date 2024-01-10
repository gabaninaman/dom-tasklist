var form = document.getElementById('addForm');
var itmeList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event

itmeList.addEventListener('click', removeItem);

// Add item
function addItem(e){
    e.preventDefault();
    
    // Get input value
    var newItem= document.getElementById('item').value;

    // Create new li element
    var li= document.createElement('li');
    // Add classs
    li.className= 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    var deleteBtn= document.createElement('button');

    // Add classes to del button
    deleteBtn.className= 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    itmeList.appendChild(li);

}

// Remove item
function removeItem(e){
    console.log(1);
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure')){
            var li = e.target.parentElement;
            itmeList.removeChild(li);
        }
    }

}


// // // APPLYING FILTER // // //


// var filter = document.getElementById('filter');

// // Fitler Event
// filter.addEventListener('keyup', filterItems);

// // Filter items
// function filterItems(){
//     // convert everything to lower text
//     var text=e.target.value.tolowerCase();
//     // Get Lis
//     itmeList.getElementsByTagName('li');
//     // Convert to an array
//     Array.from(items).forEach(function(){
//         var itemName=item.firstChild.textContent;
//         if(itemName.tolowerCase().indexof(text) !=-1){
//             item.style.display='block';

//         } else{
//             item.style.display='none';
//         }
//     });
    



