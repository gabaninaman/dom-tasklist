// Examine the document object

// //console.dir(document);

//console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// //console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[8]);
// // document.all[8].textContent = 'Hello'; it is problamatic if span tag is used
// console.log(document.forms);

// console.log(document.links);

// console.log(document.images);

// selector

//GET ELEMENT BY ID//
// console.log(document.getElementById('main-header'));
// var headerTitle=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='hello';
// headerTitle.innerText='goodbye';

// headerTitle.innerHTML='<h3>hello</h3>';


//get elements by calss name
// var item = document.getElementsByClassName('list-group-item');
// console.log(item);

// item[1].textContent='hello';
// item[1].style.fontWeight='bold';
// item[1].style.backgroundColor='yellow';
// gets error
// items.style.bakgroundColor='#f4f4f4';

// for(var i=0; i< item.length; i++){
//      item[i].style.backgroundColor='yellow';
// }



//get elements by tag name

// var li = document.getElementsByTagName('li');
// console.log(li);

// li[1].textContent='hello';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';
// // gets error
// // li.style.bakgroundColor='#f4f4f4';

// for(var i=0; i< li.length; i++){
//     li[i].style.backgroundColor='yellow';
// }

// QUERYSELECTOR //
// only used for one item

// var header= document.querySelector('#main-header');
// header.style.borderBottom= 'solid 4px black';

// var input = document.querySelector('input');
// input.value='hello world';

// var submit = document.querySelector('input[type-"submit"]');
// submit.value="SEND";

// var item= document.querySelector('.list-group-item');
// item.style.color='red';

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem=document.querySelector 
// ('.list-group-item:nth-child');
// lastItem.style.color='blue';

// var secondItem=document.querySelector 
// ('.list-group-item:nth-child(2)');
// secondItem.style.color='coral';


// QUERYSELECTORALL //

// var titles= document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent='Hello';

// var odd =document.querySelectorAll('li:nth-child(odd)');
// var even =document.querySelectorAll('li:nth-child(even)');


// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#ccc';
// 

// TRAVERSING THE DOM //
// var itemList = document.querySelector('#items');
// // parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor= '#f4f4f4';

// console.log(itemList.parentNode.parentNode.parentNode);



// PARENTELEMENT //
//var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
//  itemList.parentNode.style.backgroundColor= '#f4f4f4';

//  console.log(itemList.parentElement.parentElement.parentElement);


// childnodes //
// var itemList = document.querySelector('#items');
// console.log(itemList.childNodes);


// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// FirstChild
// console.log(itemList.firstChild);
//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello';
//lastElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello';


// //nextSibling

// console.log(itemList.nextSibling);
// //nextElementingSibling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green'

// creating elements in javaScript //

//Create a div
// var newDiv=document.createElement('div');
// // Add class
// newDiv.className='hello';
// //Add id
// newDiv.id='hello1';
// //Add attr
// newDiv.setAttribute('title','Hello Div');
// // Create text node
// var newDivText=document.createTextNode('hello World');

// //Add text to div
// newDiv.appendChild(newDivText);

// var container=document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize='30px'
// container.insertBefore(newDiv, h1);



//  //  EVENTS //  //

// var button= document.getElementById('button').addEventListener('click',buttonClick);


// function buttonClick(e){
//    // console.log('Button clicked');
// //    document.getElementById('header-title').textContent='changed';
// //    document.querySelector('#main').style.backgroundColor='black';
//     // console.log(e);

//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classlist);

//     // var output=document.getElementById('output');
//     // output.innerHTML='<h3>'+e.target.id+'</h3>';
//     // console.log(e.type);


//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     // console.log(e.offsetX);
//     // console.log(e.offsetY);

    
//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);

// }

//  var button= document.getElementById('button');
//  var box = document.getElementById('box');

//button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);

// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);

// box.addEventListener('mousemove', runEvent);

 var itemInput=document.querySelector('input[type="text"]');
 var form= document.querySelector('form');
 var select= document.querySelector('select');

//itemInput.addEventListener('keydown', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
//  itemInput.addEventListener('paste', runEvent);

//itemInput.addEventListener('input', runEvent);

// select.addEventListener('change',runEvent);
// select.addEventListener('input',runEvent);

// form.addEventListener('submit',runEvent)


function runEvent(e){
    e.preventDefault();
    // console.log('EVENT TYPE: '+e.type);
    // document.body.style.display='none';
    //console.log(e.target.value);
    // document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>'

   // output.innerHTML='<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';
//     box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
}
