

let urlParms = new URLSearchParams(window.location.search);
    let postId = urlParms.get('id');
    console.log('https://blog-api-assignment.up.railway.app/posts/' + postId);

fetchPost ();

async function fetchPost (){
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts/' + postId)  
          .then(response => response.json())

        console.log(response);

        let postDate = new Date(response.date)
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

        document.getElementById('post-wrapper').innerHTML =
        `<a class="admin-link" href="/admin/index.html">Admin</a>
        <h3 id="post-title">${response.title}</h3>
        <i id="post-author">${response.author} |</i>
        <i id="post-date">${formatDate.join('-')} ${formatTime.join(':')}</i>
        <p id="post-content">${response.content}</p>
        <i id="post-tags">${response.tags}</i><br>
        <a href="index.html">&#8592 Back</a>`;
        

    }
   catch (error){
    console.log(error)
   }
}