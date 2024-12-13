```javascript
const myQuery = { name: /John/i }; // Case-insensitive query

// Assuming 'users' is a collection
const cursor = db.collection('users').find(myQuery);

cursor.forEach(user => {
  console.log(user.name); // Accessing the 'name' property
});
```