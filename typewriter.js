// typewriter function for title from w3schools (edited and simplified)
function typeWriterTitle(txt, speed) {
    if (i < txt.length) {
        // insert letter
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(function() { typeWriterTitle(txt, speed); }, speed);
    }

}
// typewriter function for title from w3schools (edited and simplified)
function typeWriter(txt, speed) {
    if (j < txt.length) {
        // insert letter
        target.innerHTML += txt.charAt(j);
        j++;
        setTimeout(function() { typeWriter(txt, speed); }, speed);
    }
}