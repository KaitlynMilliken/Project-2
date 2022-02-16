async function commentHandler(event) {
    event.preventDefault();

    const comment = document.querySelector('#comment-body').value.trim();

    if (comment) {
        const response = await fetch('/api/comment/', {
            method: 'post',
            body: JSON.stringify({
                comment
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('ayo');
            //document.location.replace('/posts');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.new-comment').addEventListener('submit', commentHandler);