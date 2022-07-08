const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write(
      `<ul><li>Jirat Chutrakul</li><li>Prawich Thawansakdivudhi</li></ul>`
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/createUser" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("users.txt", message, (error) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write(
      `<h1>Hi There!</h1><body><form action="/createUser" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`
    );
    res.write("</html>");
    return res.end();
  }
});

server.listen(3000);
