function GetPageID(){
    let url = window.location.href;
    let split  = url.split("#");
    
    if(split[1] != undefined && !isNaN(split[1]))
        return split[1];

    return 0;
}

function ShowPost(postid = 0){

    $(".post").hide();
    $(".main").hide();

    let post_id = postid;

    if(post_id == 0)
        post_id = GetPageID();

    if(post_id > 0)
        $("#post-"+post_id).show();
    else
        $(".main").show();
}

$(".link-post").click(function(){
    if($(this).data()){
        let data = $(this).data();
        ShowPost(data['post']);
    }
});

$("#send").click(function(){
    if ($("#name").val().length < 2 || $("#name").val().length > 40)
        return;

    var url = "https://www.shaiya.com.br/ericnot.es/" + $("#name").val();
    window.open(url, '_blank').focus();
});

$(".logo").click(function(){
    ShowPost();
});

ShowPost();