setInterval(shapeQuotes, 2000);
setInterval(shapeFacts, 3000);
setInterval(shapeSpells, 5000);

function showModal() {
    $(".ui.modal").modal('show');
}

function shapeQuotes() {
    $('#quotes').shape('flip up');
}

function shapeFacts() {
    $('#facts').shape('flip up');
}

function shapeSpells() {
    $('#spells').shape('flip down');
}

$(document).ready(function() {
    $('.right.menu.open').on("click", function(e) {
        e.preventDefault();
        $('.ui.vertical.menu').toggle();
    });
});

function validateSignIn() {
    $('.ui.form').form({
        fields: {
            email: 'empty',
            password: ['minLength[6]', 'empty'],
        }
    });
}
