$("#toDoList").on("click", "li", function()
{
    $(this).toggleClass("done");
});

$("#toDoList").on("click", ".deleteIcon", (function(event)
{
    $(this).parent().fadeOut("1500", function()
    {
        $(this).remove();
    });
    event.stopPropagation();
}));

$("input").keypress(function(event)
{
    if (event.which === 13 && $("input").val() != "" )
    {
        let trashIcon = '<i class="fas fa-trash-alt deleteIcon"></i>';
        let todoText = $("input").val();
        
        let todo = `<li>${trashIcon} ${todoText}</li>`;

        $("#toDoList").append(todo);

        $("input").val("");
    }
});