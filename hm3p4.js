window.onload = math_problem;
$(".tooltip").tooltip();

function math_problem() {
    /* Generate random integers for the math problem */
    let integer1, integer2;

    integer1 = Math.floor(Math.random() * 10);
    integer2 = Math.floor(Math.random() * 10);

    document.getElementById("integer1").textContent = integer1;
    document.getElementById("integer2").textContent = integer2;
}

$(document).ready(function() {
    /* Setup validation */
    $("#answer_form").validate({
        rules:
            {
                answer: {required: true, number: true},
            },
    });
})

function process() {
    /* Checking validation */
    if ($("#answer_form").valid()) {
        let answer, integer1, integer2;

        answer = parseInt(document.getElementById("answer").value);
        integer1 = parseInt(document.getElementById("integer1").textContent);
        integer2 = parseInt(document.getElementById("integer2").textContent);

        /*Check if input correctly solves the problem*/
        if (isCorrect(answer, integer1, integer2)) {
            document.getElementById("comment").textContent = "Good Job!";

            /*Delays the confirm box by 1 second*/
            setTimeout(function() {
                if (confirm("Do you want to try another problem?")) {
                    location.reload()
                }
            }, 1000);
        }
        else {
            document.getElementById("comment").textContent = "No. Please try again.";
            reset();
        }
    }
}

function isCorrect(answer, integer1, integer2) {
    return answer === (integer1 * integer2);
}

function reset() {
    document.getElementById("answer").value = "";
}
