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

            let postDate = new Date(post.date)
            let formatDate = [
                postDate.getFullYear(),
                ('0' + postDate.getMonth()).slice(-2),
                ('0' + postDate.getDate()).slice(-2)
            ]
            let formatTime = [
                ('0' + postDate.getHours()).slice(-2),
                ('0' + postDate.getMinutes()).slice(-2),
                ('0' + postDate.getSeconds()).slice(-2)
            ]
            
            console.log(post);
            console.log(post._id);
            let newdiv = document.createElement('div');
            newdiv.innerHTML =
            `<div class = "title">${post.title} </div>  
            <div>${post.author}</div>
            <div>${formatDate.join('-')} ${formatTime.join(':')}</div><br>
            <div>${post.content.substring(0,100)}...<a href="post.html?id=${post._id}">read more</a></div><br>
            <div>tags: ${post.tags}</div> <div class = "line"> </div>`
            
            console.log(newdiv) 
            console.log(posts)                
            posts.append(newdiv);


        }
    }
   catch (error){
    console.log(error)
   }
}






