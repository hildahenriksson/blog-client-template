post ();
async function post (){
    try {
        const posts = document.querySelector('.posts');
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts')  
          .then(response => response.json())
        
        for(let post of response) { 
            console.log(post);
            let newdiv = document.createElement('div');
            newdiv.innerHTML =
            `<div>${post.title} </div>
            <div>${post.author}</div>
            <div>${post.date}</div>
            <div>${post.content}</div>
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






