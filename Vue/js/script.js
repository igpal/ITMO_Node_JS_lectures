let obj = {
    x: document.querySelector(".x"),
    y: document.querySelector(".y"),
    res: document.querySelector(".res"),
}

obj.x.addEventListener("input", handler);
obj.y.addEventListener("input", handler);

function handler(e) {
    obj.res.value = parseInt(obj.x.value) +
        parseInt(obj.y.value);
}