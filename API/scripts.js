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