var str = 'Some very long string';
if(str.length > 10) str = str.substring(0,10);
console.log(str);

post ();
async function post (){
    try {
        const posts = document.querySelector('.posts');
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts')  
          .then(response => response.json())
        
        for(let post of response) { 
            console.log(post);
            console.log(post._id);
            let newdiv = document.createElement('div');
            newdiv.innerHTML =
            `<div>${post.title} </div>
            <div>${post.author}</div>
            <div>${post.date}</div><br>
            <div>${post.content.substring(0,100)}...<a href="post.html?id=${post._id}">read more</a></div><br>
            <div>${post.tags}</div>`
            console.log(newdiv) 
            console.log(posts)                
            posts.append(newdiv);

        }
    }
   catch (error){
    console.log(error)
   }
}






