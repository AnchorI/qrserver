const http = require('http');
const fs = require('fs');
const path = require('path');


    exports.views_html = function (req, res) {
        fs.readFile('../views/index.html', function (err, html) {

            if (req.url === '/') {
                fs.readFile(
                    path.join(__dirname, '../client/public', 'index.html'),
                    'utf-8',
                    (err, content) => {
                        if (err) {
                            console.log(err)
                        }

                        res.end(content)
                    }
                )
            } //else if
        })
    }