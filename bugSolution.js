```javascript
//More precise case insensitive query using $regex operator with case insensitive flag
const myQuery = { name: { $regex: 'John', $options: 'i' } };

const cursor = db.collection('users').find(myQuery);

cursor.forEach(user => {
  console.log(user.name);
});

//Alternative approach using $regex with case insensitive flag and ensuring that only the specific name is matched
const myQuery2 = { name: { $regex: '^John$', $options: 'i' } };

const cursor2 = db.collection('users').find(myQuery2);

cursor2.forEach(user => {
  console.log(user.name);
});
```