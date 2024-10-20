    const http = require('http');
    const fs = require('fs');
    let requests = require('requests');

    const homeFile = fs.readFileSync('home.html', 'utf-8');

    const replaceVal = (tempVal, orgVal) => {
        let temprature = tempVal.replace("{%tempVal%}", (orgVal.main.temp - 273.15).toFixed(2));
        temprature = temprature.replace("{%tempmin%}", (orgVal.main.temp_min - 273.15).toFixed(2));
        temprature = temprature.replace("{%tempmax%}", (orgVal.main.temp_min - 273.15).toFixed(2));
        temprature = temprature.replace("{%location%}", orgVal.name);
        temprature = temprature.replace("{%country%}", orgVal.sys.country);
        temprature = temprature.replace("{%tempstatus%}", orgVal.weather[0].main);
        return temprature;
    };

    const server = http.createServer((req, res) =>{
        if(req.url == "/"){
            requests("https://api.openweathermap.org/data/2.5/weather?lat=25.335649&lon=83.0076292&appid=1b827c92f85d53cc63490a8d1f50b6e3")
            .on('data', (chunk) => {
                // console.log(chunk);

                const objData = JSON.parse(chunk);
                const arrData = [objData];
                
                // console.log(objData);
                // console.log(arrData);

                // let temperature = arrData[0].main.temp;
                // console.log(temperature - 273);

                // console.log(arrData[0].main.temp - 273);

                const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
                // console.log(realTimeData);
                res.write(realTimeData, (err) => {
                    if (err) {
                        console.error("Error writing to stream:", err);
                        res.writeHead(500, { "Content-Type": "text/html" });
                        res.write("Server encountered an error.");
                        return res.end();
                    }
                    console.log("Response data written successfully.");
                    res.end();  
                });
            })
            .on('end', (err) => {
            if (err) return console.log('connection closed due to errors', err);
            res.end();
            });
        }
        else if (req.url == "/style.css") {
            // Serve the CSS file
            fs.readFile('style.css', (err, data) => {
                if (err) {
                    res.writeHead(404, { "Content-Type": "text/plain" });
                    res.write("CSS file not found");
                    res.end();
                } else {
                    res.writeHead(200, { "Content-Type": "text/css" });
                    res.write(data);
                    res.end();
                }
            });
        } else {
            // Serve a 404 for any other routes
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("<h1>404 Not Found</h1>");
            res.end();
        }
    });

    server.listen(8000, "127.0.0.1", () =>{
        console.log("Server running at port 8000");
    });