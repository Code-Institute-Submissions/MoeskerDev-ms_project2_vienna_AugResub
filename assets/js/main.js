$(".buttons").on("click", function () {
    let allButtonsSelector = ".btn";
    let thisButtonsSelector = "." + this.id;
    $(allButtonsSelector).removeClass("btn-succes");
    $(thisButtonsSelector).addClass("btn-danger");
});

function submitClick() {
    if ("name" && "email" && "question" !== null) {
        alert("Thank you for submitting your question(s)!");
    } else if ("name" &&
        "email" &&
        "question" == null) {
        alert("Please fill out all fields on the form.");
    } else
        alert("Sorry, something went wrong.. Please try again.")
};