let keyword = "bread";


function changeKeywoard(str){
    keyword = str;
    updateBread();
}

function updateBread(){
    $(".loading").show();
    $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    {
        tags: keyword,
        tagmode: "any",
        format: "json"
    },
    function(data) {
        var rnd = Math.floor(Math.random() * data.items.length);

        var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");

        document.getElementById("breadImage").src = image_src;

    });
    $(".loading").hide();

}

$(document).ready(function(){updateBread();});