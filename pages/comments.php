<?php
// Get the comment data from the POST request
$name = $_POST['name'];
$comment = $_POST['comment'];
$dateTime = date('Y-m-d H:i:s');

// Format the comment
$formattedComment = "Name: $name\nComment: $comment\nDate and Time: $dateTime\n\n";

// Append the comment to the comments.txt file
file_put_contents('comments.txt', $formattedComment, FILE_APPEND);

// Return a response (optional)
echo json_encode(['status' => 'success']);
?>