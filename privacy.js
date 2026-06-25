/*prevent right click */

document.oncontextmenu = () => {
    alert("HEH YOU WILL NEVER COPY MY WORK -RAP2M0");
    return false;
};

//prevent f12 key
document.onkeydown = e => {
    if (e.key == "F12") {
        alert("HEH YOU WILL NEVER COPY MY WORK -RAP2M0");
        return false;
    }

    if (e.ctrlKey && e.key == "u") {
        alert("HEH YOU WILL NEVER COPY MY WORK -RAP2M0");
        return false;
    }

    if (e.ctrlKey && e.key == "c") {
        alert("HEH YOU WILL NEVER COPY MY WORK -RAP2M0");
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.key == "i") {
        alert("HEH YOU WILL NEVER COPY MY WORK -RAP2M0");
        return false;
    }
}




