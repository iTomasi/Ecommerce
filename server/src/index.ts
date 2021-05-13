import app from "./app";
import "./databases/mongoose";

app.listen(app.get("port"), () => console.log(`SV ON PORT ${app.get("port")}`));