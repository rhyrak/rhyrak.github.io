$(document).ready(function () {
    // preload images
    $("#image_list a").each(function () {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links
    $("#image_list a").click(function (evt) {
        var caption = $(this).attr("title");
        var imageURL = $(this).attr("href");

        // fade out -> change text -> fade in
        $("#caption")
            .fadeOut(1000, function changeText() {
                $("#caption").text(caption);
            })
            .fadeIn(1000);

        // fade out -> change image src -> fade in
        $("#image")
            .fadeOut(1000, function changeImageSrc() {
                $("#image").attr("src", imageURL);
            })
            .fadeIn(1000);

        // cancel the default action of the link
        evt.preventDefault();
    }); // end click

    // move focus to first thumbnail
    $("li:first-child a").focus();
}); // end ready
