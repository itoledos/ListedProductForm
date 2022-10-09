const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')

require('./config/mongoose.config')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extend: true}));

const AllProductsRoutes = require('./routes/product.routes');
AllProductsRoutes(app);

app.listen(port, () => console.log(`Port: ${port}`));
