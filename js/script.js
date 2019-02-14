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
    if (event.which === 13 && $("input").val() != "")
    {
        let trashIcon = '<span class="deleteIcon"><i class="fas fa-trash-alt"></i></span>';
        let todoText = $("input").val();

        let todo = `<li>${trashIcon}<span class="todo">${todoText}</span></li>`;
        
        $("#toDoList").append(todo);

        $("input").val("");
    }
});