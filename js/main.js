const memberList = [
    {
        fullName: "catherina gail",
        fLink: "",
        tLink: "",
        gLink: "",
        description: "My name is catherina"
    },
    {
        fullName: "harvey rube",
        fLink: "",
        tLink: "",
        gLink: "",
        description: "My name is harvey rube"
    },
    {
        fullName: "Janet Pris",
        fLink: "",
        tLink: "",
        gLink: "",
        description: "My name is Janet Pris"
    },
    {
        fullName: "kevin ward",
        fLink: "",
        tLink: "",
        gLink: "",
        description: "My name is Kevin Ward"
    }
]


function showMoreImage() {
    var myButton = document.getElementsByClassName('work-btn')[0];
    var workArea = document.getElementsByClassName('work-image-area')[1];
    var toSection = document.getElementsByClassName('work-section')[0];
    if (workArea.style.display === 'none') {
        workArea.style.display = "flex";
        workArea.style.margin = "3rem 0 0 0";
        myButton.innerHTML = "show less";
    } else {
        workArea.style.display = "none";
        myButton.innerHTML = "show more";
        toSection.scrollIntoView();
    }

}

