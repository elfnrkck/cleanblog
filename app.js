const express = require('express');

const app = express();

app.use('/static', express.static('public'));

app.get('/', (req, res) => {

  const blog = {
   id: 1,
   name: "Elif'in Bloğu",
   description: "Elif Nur Küçük blog tasarımı "
}
res.send(blog)
})


const port = 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
