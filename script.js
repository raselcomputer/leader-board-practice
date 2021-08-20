function topFunction(){
    document.getElementById('top-line').style.color = 'green';
}
function blogFunction(){
    document.getElementById('blog-line').style.color = 'red';
}





document.getElementById('add-now').addEventListener('click', function(event){
    const listContainer = document.getElementById('list-container').innerText;
    const newList = document.createElement('li');
    newList.appendChild(document.createTextNode('karim'));
    newList.setAttribute('id', 'karim');
    listContainer.appendChild(newList);
    
})