function generalOnMouseOver(n) {
    let text = document.getElementsByClassName("program_element_text_child_horse")[n];
    let title = document.getElementsByClassName("program_element_general_title")[n];
    text.style.transitionDelay = "0s";
    text.style.opacity = "0";
    title.style.transitionDelay = "0.2s";
    title.style.width = "50%";
}

function generalOnMouseOut(n) {
    let text = document.getElementsByClassName("program_element_text_child_horse")[n];
    let title = document.getElementsByClassName("program_element_general_title")[n];
    text.style.transitionDelay = "0.2s";
    text.style.opacity = "1";
    title.style.transitionDelay = "0s";
    title.style.width = "0%";
}

function horseOnMouseOver(n) {
    let text = document.getElementsByClassName("program_element_text_child_general")[n];
    let title = document.getElementsByClassName("program_element_horse_title")[n];
    text.style.transitionDelay = "0s";
    text.style.opacity = "0";
    title.style.transitionDelay = "0.2s";
    title.style.width = "50%";
}

function horseOnMouseOut(n) {
    let text = document.getElementsByClassName("program_element_text_child_general")[n];
    let title = document.getElementsByClassName("program_element_horse_title")[n];
    text.style.transitionDelay = "0.2s";
    text.style.opacity = "1";
    title.style.transitionDelay = "0s";
    title.style.width = "0%";
}