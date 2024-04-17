
document.getElementById('submit').addEventListener('click', function(){
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const Email = document.getElementById('Email').value;
    const Number  = document.getElementById('number').value;

    const post = {
        name:name,
        company:company,
        Email:Email,
        Number:number

    }
    newPostToServer(post)
    
})


function newPostToServer(postInfo){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(postInfo),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}