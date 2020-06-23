var modalStatus = false;

$(document).ready(function() {

    $("[data-option='modal']").click(function() {

        var target = $(this).attr("data-target");

        $(".modals").css("display", "block");
        $("body").addClass("modal-open");
        setTimeout(function() {
            $(target).addClass("in");
        }, 300);

        modalStatus = true;

        return false;
    });

    $("a.close-modal").click(function() {
        modalStatus = false;

        $(".modal").removeClass("in");

        setTimeout(function() {
            $(".modals").css("display", "none");
            $("body").removeClass("modal-open");
        }, 300);

        return false;
    });

});