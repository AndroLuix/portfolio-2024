async function loadHTML(elementId, url) {
    const response = await fetch(url);
    const text = await response.text();
    document.getElementById(elementId).innerHTML = text;
}
loadHTML('header', 'header.html');
loadHTML('footer', 'footer.html');