var mongoose = require('mongoose');
var {Get_offers} = require('./offers/offers_schema');
 
////incomplete....
var getoffers_fun =function(req,res) {
    Get_offers.find({ 
        shop_id:  req.body.shop_id
    }).then((shop_found) =>{
        if(!shop_found)
        {
            res.status(404).send("no shop found");
        }
        else
        {
            var categories={};
            var count=0;
            shop_found.cateogory_ids.array.forEach(cat_id => {
                Get_category.find({
                    cateogory_id:cat_id
                }).then((category_found)=>{
                    categories[count++]={cateogory_id:shop.cateogory_id,
                        category_name:shop.category_name};
                });
            });
            res.status(302).send(categories);
        }
    });
};
module.exports = getcategory_fun;
