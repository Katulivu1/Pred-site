document.getElementById("logout")?.addEventListener("click", function () {
    localStorage.removeItem("isAdmin");
    window.location.href = "login.html";
});

const predictions = [
    { match: "Team A vs Team B", sport: "Football", prediction: "Win A", confidence: "80%" },
    { match: "Team C vs Team D", sport: "Basketball", prediction: "Over 200", confidence: "75%" }
];

function loadPredictions() {
    const table = document.getElementById("predictions-table");
    predictions.forEach(pred => {
        const row = `<tr>
            <td>${pred.match}</td>
            <td>${pred.sport}</td>
            <td>${pred.prediction}</td>
            <td>${pred.confidence}</td>
        </tr>`;
        table.innerHTML += row;
    });
}
loadPredictions();