async function newPostHandler(event) {
    event.preventDefault(); 

    console.log("clicking");

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

        if (response.ok) {
            window.location.href = "/posts";
        }
        else {
            alert(response.statusText);
        }
    }
}

$(".post-submit").on('click', newPostHandler);