$(document).ready(function () {
    var configBlocks = $("div.configuration-block");

    // XXX use config.find to find deeper blocks

    $("div.configuration-block [class^=highlight-]").hide();
    $("div.configuration-block [class^=highlight-]").width($("div.configuration-block").width());

    configBlocks.addClass("jsactive");
    configBlocks.addClass("clearfix");
    configBlocks.each(function () {
        var a = $("[class^=highlight-]:first", $(this));

        a.show();
        a.parents("ul:eq(0)").height(a.height() + 40);
    });

    $("div.configuration-block li").each(function () {
        var a = $(":first", $(this)).html();

        $(":first ", $(this)).html("");
        $(":first ", $(this)).append('<a href="#">' + a + "</a>");
        $(":first", $(this)).bind("click", function () {
            $("[class^=highlight-]", $(this).parents("ul")).hide();
            $("li", $(this).parents("ul")).removeClass("selected");
            $(this).parent().addClass("selected");

            var b = $("[class^=highlight-]", $(this).parent("li"));
            b.show();
            b.parents("ul:eq(0)").height(b.height() + 40);

            return false;
        });
    });

    configBlocks.each(function () {
        $("li:first", $(this)).addClass("selected");
    });
});
