import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`\n\n --- Server running on port: ${PORT}\n\n`);
});
