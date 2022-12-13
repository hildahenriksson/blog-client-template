post ();
async function post (){
    try {
        const posts = document.querySelector('.posts');
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts')  //data för funktion fetch sparas i variabel respons        
          .then(response => response.json())
        
        for(let post of response) { //i response hämtas klustret av data. I post läggs varje del av klustret i tur och ordning
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






