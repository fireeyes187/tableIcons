document.addEventListener('DOMContentLoaded', function () {
    // Get all cells in the table, except the header
    var body = document.querySelectorAll("tbody tr");
    //cycle through each row
    for(var i=0, row; row=body[i]; i++) {
        for(var j=0, col; col=row.cells[j]; j++) {
            // Check if the cell contains a URL
            if (isValidUrl(col.textContent)) {
                // Call the function to embed the social media
                socialEmbed(col.textContent, col);
            }
        }
    }
});

function socialEmbed(url, cell) {
    var row = cell.parentElement;
    if (url.includes("facebook.com")) {
        var icon=createIcon(url, "fa-brands fa-facebook icons", row);
        cell.textContent="";
        cell.append(icon);
    }
    else if (url.includes("twitter.com") || url.includes("x.com")) {
        var icon=createIcon(url, "fa-brands fa-x-twitter icons", row);
        cell.textContent="";
        cell.appendChild(icon);
    }
    else if (url.includes("instagram.com")){
        var icon=createIcon(url, "fa-brands fa-instagram icons", row);
        cell.textContent="";
        cell.appendChild(icon);
    }
    else if (url.includes("youtube.com")){
        var icon=createIcon(url, "fa-brands fa-youtube icons", row);
        cell.textContent="";
        cell.appendChild(icon);
    }
    else if (url.includes("linkedin.com")){
        var icon=createIcon(url, "fa-brands fa-linkedin icons", row);
        cell.textContent="";
        cell.appendChild(icon);
    }
}

function createIcon(url, classes, row){
    var a = document.createElement('a');
    var linkIcon = document.createElement('i');
    linkIcon.className = classes;
    a.href = url;
    a.target = "_blank";
    var name = row.cells[0].textContent;
    console.log(name);
    a.ariaDescription=ariaCreation(classes, name);
    a.appendChild(linkIcon);
    return a;
}

// Function to check if a string is a valid URL
function isValidUrl(string) {
    // Regular expression to match URLs
    if (string.includes("http://") || string.includes("https://")) {
        return true;
    }
}

function ariaCreation(classes, name){
    var ariaDescription;
    name=name.trim();
    switch (classes){
        case "fa-brands fa-facebook icons":
            ariaDescription = name + " on Facebook";
            break;
        case "fa-brands fa-x-twitter icons":
            ariaDescription = name + " on Twitter";
            break;
        case "fa-brands fa-instagram icons":
            ariaDescription  = name + " on Instagram";
            break;
        case "fa-brands fa-youtube icons":
            ariaDescription  = name + " on Youtube";
            break;
        case "fa-brands fa-linkedin icons":
            ariaDescription  = name + " on Linkedin";
            break;
    }
    return ariaDescription;
}
