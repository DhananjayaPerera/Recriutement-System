// JavaScript Document
base_url = 'http://hitad.lk/';
site_url = base_url + 'index.php';


function showData(cat_id){
    var dataURL = "cat_id=" + cat_id;

    if(cat_id==1){
        $('#hp-bt').removeClass('hp');
        $('#af-bt').addClass('af');
        $('#cp-bt').removeClass('cp');
        $('#mb-bt').removeClass('mb');
        $('#ml-bt').removeClass('ml');
    }
    else if(cat_id==2){
        $('#hp-bt').addClass('hp');
        $('#af-bt').removeClass('af');
        $('#cp-bt').removeClass('cp');
        $('#mb-bt').removeClass('mb');
        $('#ml-bt').removeClass('ml');
    }
    else if(cat_id==3){
        $('#cp-bt').addClass('cp');
        $('#af-bt').removeClass('af');
        $('#hp-bt').removeClass('hp');
        $('#mb-bt').removeClass('mb');
        $('#ml-bt').removeClass('ml');
    }
    else if(cat_id==4){
        $('#mb-bt').addClass('mb');
        $('#hp-bt').removeClass('hp');
        $('#cp-bt').removeClass("cp");
        $('#af-bt').removeClass("af");
        $('#ml-bt').removeClass("ml");
    }
    else{
        $("#ml-bt").addClass("ml");
        $('#hp-bt').removeClass("hp");
        $('#cp-bt').removeClass("cp");
        $('#mb-bt').removeClass("mb");
        $('#af-bt').removeClass("af");
    }

    $.ajax({
        type:"post",
        url: site_url + '/widget/loadRelevent',
        data:dataURL,
        success:function(msg) {
            $('#news-container').hide().html(msg).fadeIn();
        }

    });


}


function unlinkImageEight(){

    var imagename  = $('#imagename-eight').val();
    var imagethumbname = $('#imagethumbname-eight').val();

    var dataURL = "imagename=" + imagename + "&imagethumbname=" + imagethumbname;

    $.ajax({
        type:"post",
        url: site_url + '/adtype/unlinkImage',
        data:dataURL,
        success:function(msg) {
            if(msg==1){
                $('#image_thumb-eight').html('<img src="' + base_url + 'template/resources/css/form_image/hitad-image.jpg" />');
                $('#imagename-eight').val('');
                $('#imagethumbname-eight').val('');
            }
        }

    });

}

function openFeatured(it, box){
    var vis = (box.checked) ? "block" : "none";
    document.getElementById(it).style.display = vis;

    var price = (box.checked) ? "1000.00" : "0";

    $('#featuredprice').val(price);

}

function getPriceWeb(radioValue){

    $('#publisher').val(radioValue);

    var adsize = $('#adsizeid').val();

    if(adsize==1 && radioValue==3){
        $('#websmallprice').html('This is a free service');
        $('#websmallprice').fadeIn();
    }
    else if(adsize!=1 && radioValue==3){
        $('#websmallprice').hide();
        $('#websmallprice').html('Additional Rs.100.00');
        $('#websmallprice').fadeIn();

    }
    else{
        $('#websmallprice').hide();
    }

}




