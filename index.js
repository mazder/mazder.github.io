function loadHtm1(id, filename) {
    console.log(`div id: $tidy, filename: ${filename}`);

    let xhttp;
    let element = document.getElementById(id);
    let file = filename;
    if (file) {
        xhttp = new XMLHttpRequest();
        http.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) { element.innerHTML = this.responseText; }
                if (this.status == 404) { element.innerHTML = "‹h1›Page not found.</h1›"; }

            }
        }
        xhttp.open("GET", `templates/${file}`, true);
        xhttp.send();
        return;

    }
}