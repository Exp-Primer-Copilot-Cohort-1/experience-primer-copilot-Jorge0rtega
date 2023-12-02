// create web server
// run server
// open browser
// localhost:3000/comments
// localhost:3000/comments?postId=1
// localhost:3000/comments?postId=1&id=1

const http = require('http');
const url = require('url');
const comments = require('./data/comments.json');

const server = http.createServer((req, res) => {
  //console.log(req.url);
  //console.log(url.parse(req.url, true));
  const parsedUrl = url.parse(req.url, true);
  //console.log(parsedUrl.query);
  const { postId, id } = parsedUrl.query;
  //console.log(postId, id);
  //console.log(comments);
  const filteredComments = comments.filter(
    (comment) =>
      comment.postId === (postId ? parseInt(postId) : comment.postId) &&
      comment.id === (id ? parseInt(id) : comment.id)
  );
  //console.log(filteredComments);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(filteredComments));
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});