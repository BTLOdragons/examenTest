async function fetchTags() {
//stap 1 FETCH

    const res = await fetch("/api/tags");
    console.log(res, "1");
//stap 2 JSON
    console.log("starting jsoning")
    const tags = await res.json();
    console.log(tags, "2");
//stap 3 DOM
    displayTags(tags);
};



function displayTags(tags) {
    const tagList = document.getElementById("tags");
    tags.forEach((tag) => {
        const tagItem = document.createElement("li");
        tagItem.textContent = tag.name;
        tagList.appendChild(tagItem);
    });
};

fetchTags();