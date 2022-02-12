async function newPostHandler(event) {
    event.preventDefault();

    const postTitle = document.querySelector('#post-title').value.trim();
    const postBody = document.querySelector('#post-body').value.trim();

    if (postTitle && postBody) {
        const response = await fetch('/api/posts/test', {
            method: 'post',
            body: JSON.stringify({
                postTitle,
                postBody
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);

        if (response.ok) {
            console.log('success');
        }
        else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.new-post').addEventListener('submit', newPostHandler);