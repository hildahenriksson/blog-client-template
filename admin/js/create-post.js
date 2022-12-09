jQuery('option').mousedown(function(e) {
    e.preventDefault();
    jQuery(this).toggleClass('selected');
  
    jQuery(this).prop('selected', !jQuery(this).prop('selected'));
    return false;
});

document.getElementById('new-post-form').addEventListener('submit', createPost);

async function createPost(e) {
    e.preventDefault();
    

    let titleInput = document.getElementById('title-input').value;
    let authorInput = document.getElementById('author-input').value;
    let contentInput = document.getElementById('content-input').value;
    let selectedTags = [];
    for (var option of document.getElementById('tags-input').options) {
        if (option.selected) {
        selectedTags.push(option.value);
        }
    }
    
    let formDataObject = {
        title: titleInput,
        author: authorInput,
        content: contentInput,
        tags: selectedTags
    }

    
    try {
        let data = await fetch('https://blog-api-assignment.up.railway.app/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(formDataObject)
        })
        location.replace('../admin/index.html');
        
    }
    catch(error) {
        console.log(error);
    }
}
