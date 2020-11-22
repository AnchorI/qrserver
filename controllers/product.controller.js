const Product = require('../models/product.model');





//Simple version, without validation or sanitation
    exports.product_get = function (req, res) {
        Product.find(req.params.id, function (err, product) {
            if (err) return console.log(err);
            console.log(product);
            res.set('Access-Control-Allow-Origin', '*')
            res.send(product);
        })
    };
//<----------Create Product------------>
    exports.product_create = function (req,res){
        let product = new Product(
            {
                name: req.body.name,
                pd: req.body.pd,
                check: req.body.check
            }
        );
//<---------------------Just Test---------------->
        product.save(function (err){
            if (err) {
                return console.log(err);
            }
            res.send('Product Created successfully')
        })
    };
//<------------Find by ID------------->
    exports.product_details = function (req, res) {
        Product.findById(req.params.id, function (err, product) {
            if (err) return console.log(err);
            console.log(product);
            res.set('Access-Control-Allow-Origin', '*');
            res.send(product);
        })
    };
//<------------Update-------------->
    exports.product_update = function (req, res) {
        Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
            if (err) return console.log(err);
            res.send('Product udpated.');
        });
    };
//<------------Delete-------------->

    exports.product_delete = function (req, res) {
        Product.findByIdAndRemove(req.params.id, function (err) {
            if (err) return console.log(err);
            res.send('Deleted successfully!');
        })
    };


//<----------------HTTP------------->


