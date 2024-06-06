document.querySelectorAll(".text-card p").forEach(function(paragraph){
    let maxWords=30;
    let text=paragraph.textContent.trim();
    let words=text.split(" ");
    if(words.length>maxWords){
        paragraph.textContent=words.slice(0,maxWords).join(' ')+'...';
    }

});
/*------------------progress bar js starts here ---------------------*/
document.addEventListener("DOMContentLoaded", function() {
    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let scrollTop = document.documentElement.scrollTop; // Get the scroll position
        let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Calculate the total scrollable height
        let topPosition = scrollTop / scrollHeight; // Calculate the position from the top
        let scrollValue = Math.round(topPosition * 100); // Calculate the scroll progress percentage

        if (scrollTop > 100) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }

        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });

        scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
});
/*------------------progress bar js ends here ---------------------*/
function toggleText(button) {
    // Find the parent text-card element of the clicked button
    var card = button.parentNode;
    
    // Find the .more-text element within the parent text-card element
    var moreText = card.querySelector('.more-text');
    
    // Toggle the display of the additional text
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        button.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        button.textContent = "Read More";
    }
}
