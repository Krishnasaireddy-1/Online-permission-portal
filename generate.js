const fs = require('fs');

const data = {
  posts: [
    { id: 1, title: 'Post 1', content: 'Content of Post 1' },
    { id: 2, title: 'Post 2', content: 'Content of Post 2' }
  ],
  comments: [
    { id: 1, postId: 1, text: 'Comment on Post 1' },
    { id: 2, postId: 1, text: 'Another comment on Post 1' },
    { id: 3, postId: 2, text: 'Comment on Post 2' }
  ]
};

fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
