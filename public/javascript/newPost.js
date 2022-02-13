async function newPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const description = document.querySelector('#post-body').value.trim();

    if (title && description) {
        const response = await fetch('/api/posts/newPost', {
            method: 'post',
            body: JSON.stringify({
                title,
                description
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