    function addComment() {
        var nameInput = document.getElementById('nameInput');
        var commentInput = document.getElementById('commentInput');
        var nameText = nameInput.value;
        var commentText = commentInput.value;
        var dateTime = new Date().toLocaleString();

        if (nameText.trim() === '' || commentText.trim() === '') {
            alert('Please enter both your name and a comment.');
            return;
        }

        // Format the comment
        var formattedComment = `Name: ${nameText}\nComment: ${commentText}\nDate and Time: ${dateTime}\n\n`;

        var commentsContainer = document.getElementById('comments');

        var li = document.createElement('li');
        li.className = 'list-group-item comment';
        li.appendChild(document.createTextNode(`${dateTime}: ${nameText}: ${commentText}`));

        commentsContainer.appendChild(li);

        nameInput.value = '';
        commentInput.value = '';
        appendToCommentsFile(formattedComment);
    }
    document.addEventListener('DOMContentLoaded', function() {
        var searchButton = document.getElementById('searchButton');
        searchButton.addEventListener('click', function() {
            alert('This feature will be available soon!');
        });
    });


    function appendToCommentsFile(comment) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'comments.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
        // Send the comment data as a POST request
        xhr.send('comment=' + encodeURIComponent(comment));
    
        // Listen for the response from the server
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Success: Do something if needed
                    console.log('Comment added successfully!');
                } else {
                    // Error: Handle the error if needed
                    console.error('Error adding comment: ' + xhr.statusText);
                }
            }
        };
    }
    