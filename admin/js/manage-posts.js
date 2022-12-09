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
            console.log(formatDate);
            console.log(formatTime);

            let newTr = document.createElement('tr');
            newTr.innerHTML = `<td>${post.title}</td>
                                <td>${post.author}</td>
                                <td>${tags}</td>
                                <td>${formatDate.join('-')} ${formatTime.join(':')}</td>
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