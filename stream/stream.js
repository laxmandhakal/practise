async function hari() {
    const { fs, createReadStream, createWriteStream } = require("fs");
    let writing = createWriteStream("ram.jpg");

    let reading = createReadStream("me.jpg");
    await new Promise((resolve, reject) => {
        reading.pipe(writing);
        reading.on("error", (err) => console.log(reject(err)));
        writing.on("finish", (val) => console.log(resolve(val)));
    });
}
hari();