var likes = [1, 1, 1];
var spans = [
    document.querySelector("#button2"),
    document.querySelector("#button3"),
    document.querySelector("#button4")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + "like(s)";
}