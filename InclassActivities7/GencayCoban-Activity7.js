var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function () {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
    $("name").focus();
};

function displayResults() {
    let average = 0;
    let highScore = 0;
    let highestInTheRoom = "";
    for (let i = 0; i < scores.length; i++) {
        average = (average * i + scores[i]) / (i + 1);
        if (scores[i] > highScore) {
            highScore = scores[i];
            highestInTheRoom = names[i];
        }
    }

    $("results").innerHTML =
        "<h2> Results </h2><br /> Average score is " +
        average.toFixed(2) +
        "<br > " +
        "High score = " +
        highestInTheRoom +
        " with a score of " +
        highScore;
}

let hasTitle = false;
function displayScores() {
    if (!hasTitle) {
        const title = document.createElement("h2");
        title.innerHTML = "Scores";
        document
            .getElementsByTagName("main")[0]
            .insertBefore(title, $("scores_table"));
        hasTitle = true;
    }
    let content = "<thead><tr><th>Name</th><th>Score</th></tr></thead><tbody>";
    for (let i = 0; i < names.length && scores.length; i++)
        content += `<tr><td>${names[i]}</td><td>${scores[i]}</td></tr>`;
    content += "</tbody>";
    $("scores_table").innerHTML = content;
}

function addScore() {
    $("name").focus();
    const name = $("name").value;
    const score = parseFloat($("score").value);
    if (name == "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score");
        return;
    }

    names.push(name);
    scores.push(score);
}
