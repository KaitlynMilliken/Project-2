async function commentHandler(event) {
    event.preventDefault();
    
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_text) {
        const response = await fetch('/api/comment/', {
            method: 'post',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log("WOOOOOO");
            //document.location.replace('/posts');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.new-comment').addEventListener('submit', commentHandler);