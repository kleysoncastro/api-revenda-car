import express from 'express';

const app = express();

app.get('/', (req, res) => res.send({ dmesg: 'hello' }));
app.listen(3333);
