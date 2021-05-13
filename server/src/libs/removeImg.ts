import fs from "fs";
import path from "path";

export default (userImg: string) => {
    if (userImg === "default.jpg") return;

    console.log(userImg)
    fs.unlinkSync(path.join(__dirname, "../../public/users/" + userImg));
}