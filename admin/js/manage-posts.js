fetchAllPosts();

async function fetchAllPosts() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        let posts = await response.json();
        console.log(posts);

        

        for(let post of posts) {
            let postDate = new Date(post.date)

            let tags = '';
            if(post.tags == null){
                tags = ''
            } else {
                tags = post.tags.join(', ')
            }

            let newTr = document.createElement('tr');
            newTr.innerHTML = `<td>${post.title}</td>
                                <td>${post.author}</td>
                                <td>${tags}</td>
                                <td>${postDate.getFullYear()}-${postDate.getMonth() + 1}-${postDate.getDate()} ${postDate.getHours()}:${postDate.getMinutes()}:${postDate.getSeconds()}</td>
                                <td>
                                    <button class="update-btn">Update</button>
                                    <button data-id="${post._id}" class="delete-btn">Delete</button>
                                </td>`
            document.querySelector('tbody').append(newTr);

        }

        let deleteButtons = document.getElementsByClassName('delete-btn');
        for(let deleteButton of deleteButtons) {
            deleteButton.addEventListener('click', deletePost)
        }


    } catch(error) {
        console.log(error);
    }
}


async function deletePost(e) {
    e.preventDefault();
    console.log(e.target.dataset.id);
    try {
        await fetch('https://blog-api-assignment.up.railway.app/posts' + e.target.dataset.id, {
        method: 'DELETE'
        })
        e.target.parentNode.parentNode.remove();
    }
    catch(error) {
        console.log(error);
    }
}


// DETTA SKA LIGGA VID TAGS

// ${post.tags.join(', ')}