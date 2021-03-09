function main(){
    let disp = "";
    let imgnum = 25612;
    let src = "https://mars.nasa.gov/embed/" + imgnum.toString() + "/";
    let iframetemp = "<iframe src=\"" + src + "\" height=\"240pt\"  scrolling=\"no\" frameborder=\"0\"></iframe>";
    while (imgnum <= 25700){
        imgnum += 1;
        src = "https://mars.nasa.gov/embed/" + imgnum.toString() + "/";
        iframetemp = "<div class=\"frame_item\"><iframe src=\"" + src + "\" height=\"240pt\"  scrolling=\"no\" frameborder=\"0\"></iframe></div>";
        disp += iframetemp;
    };
    $("#image_space").html(disp);
};
main();