$("li").click(function()
{
    $(this).toggleClass("done");
});

$(".deleteIcon").click(function()
{
    console.log($(this).parent());
});

$(".addIcon").click(function ()
{
    console.log($("input").textContent);
});

$("input").keypress("13", function()
{
    console.log($(this).val);
});