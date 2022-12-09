fetchAllPosts();

async function fetchAllPosts() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        let posts = await response.json();
        console.log(posts);

        for(let post of posts) {
            let postDate = new Date(post.date)

            let newTr = document.createElement('tr');
            newTr.innerHTML = `<td>${post.title}</td>
                                <td>${post.author}</td>
                                <td>${post.tags}</td>
                                <td>${postDate.getFullYear()}-${postDate.getMonth() + 1}-${postDate.getDate()} ${postDate.getHours()}:${postDate.getMinutes()}:${postDate.getSeconds()}</td>
                                <td>
                                    <button class="update-btn">Update</button>
                                    <button class="delete-btn">Delete</button>
                                </td>`
            document.querySelector('tbody').append(newTr);

        }

    } catch(error) {
        console.log(error);
    }
}