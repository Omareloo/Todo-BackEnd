import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";

const PORT = process.env.PORT;

app.listen(PORT || 5000, () => {
  console.log(`Server running on port ${PORT}`);
});
