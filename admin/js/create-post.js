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
        title: titleInput.trim(),
        author: authorInput.trim(),
        content: contentInput.trim(),
        tags: selectedTags
    }

    validateForm(formDataObject);
    
    if(checkValidation(formDataObject)) {

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
    
}


function validateForm(object) {
    for(var key in object) {
        if(object[key] === "" || object[key].length === 0) {
           console.log(key + " is blank");
           addStarSymbol(key);
           addErrorMessage();
        } else {
            removeStarSymbol(key);
        }
    }
}

function addStarSymbol(label) {
    document.getElementById(`${label}-label`).innerHTML = `${label.charAt(0).toUpperCase() + label.slice(1)}<span class="red">*</span>`;
}

function removeStarSymbol(label) {
    document.getElementById(`${label}-label`).innerHTML = `${label.charAt(0).toUpperCase() + label.slice(1)}`;
}

function addErrorMessage() {
    document.getElementById('error-message').innerHTML = 'Fields with * are required.'
}

function checkValidation(object) {
    let check = true;
    for(var key in object) {
        if(object[key] === "" || object[key].length === 0) {
           check = false;
        }
    }
    return check;
}
