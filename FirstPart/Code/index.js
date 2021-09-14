var likes = [1];
var spans = [
    document.querySelector("#Button2")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + " like(s)";
}