$.ajax({
    url: "https://api.gousto.co.uk/products/v2.0/categories",
    dataType: 'json',
    success: function(results){
        console.log(results);
    }
});

$.ajax({
    url: "https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&i mage_sizes[]=400&period_id=120",
    dataType: 'json',
    success: function(results){
        console.log(results);
    }

});

$.getJSON("https://api.gousto.co.uk/products/v2.0/categories", callbackDataCat);

function callbackDataCat(data) {
    for (var key in data) {
        var obj = data[key];
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                console.log(JSON.stringify(obj[prop].title));
            }
        }
    }
}


$.getJSON("https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&i mage_sizes[]=400&period_id=120", callbackData);

function callbackData(data) {
    for (var key in data) {
        var obj = data[key];
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                console.log(JSON.stringify(obj[prop].title));
                console.log(JSON.stringify(obj[prop].description));
            }
        }
    }
}

        
var json = (function () {
    var json = null;
    $.ajax({
        'url': "https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&i mage_sizes[]=400&period_id=120",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 




        

