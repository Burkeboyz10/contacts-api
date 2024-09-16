import express from 'express';
// added 
import contactsRouter from './routes/contacts.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//added
app.use('/api/contacts', contactsRouter);

app.get('/', (req, res) => {
  res.send('Lab 1 express app!!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
