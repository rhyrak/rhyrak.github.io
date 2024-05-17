function updateContent({ title, image, month, speaker, text }) {
    const content = `<h1>${title}</h1>
    <img id="image" src="${image}">
    <h2>${month}<br>${speaker}</h2>
    <p>${text}</p>`;
    $("main").empty().append(content);
}

async function fetchJSON(path) {
    let content = {};
    await $.getJSON(path, function (data) {
        content = data.speakers[0];
    });
    return content;
}

$(document).ready(function () {
    $("a").click(async function name() {
        const speaker = $(this).attr("title");
        const data = await fetchJSON("./json_files/" + speaker + ".json");
        updateContent(data);
    });
});
