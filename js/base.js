function loadEgg(me) {
    // Clears the 'load javascript' message
    // Will also call the function to load multi-selects for form
    console.log("Hello Egg");
    document.getElementById("nowLoading").style.display = "none";
};

function quickOut() {
    // Display tbTest in eggOutput
    let displayThis = document.getElementById("tbCommentBody").value;
    console.log("We see:", displayThis);
    if (!(displayThis.length)) {
        document.getElementById("eggOutput").style.display = "none";
        return;
    };
    document.getElementById("eggOutput").style.display = "block";
    document.getElementById("eggOutput").textContent = displayThis;
};

function simpleComment() {
    let commentBody = document.getElementById("tbCommentBody").value;
    if (!(commentBody.length)) {
        document.getElementById("eggOutput").style.display = "none";
        return;
    };

    let maxWidth = document.getElementById("tbMaxWidth").value;
    let prefix = document.getElementById("tbCommentOpen").value;
    let postfix = document.getElementById("tbCommentClose").value;

    let commentSpace = maxWidth - (prefix.length + postfix.length);
    if (commentSpace <= 0) {
        console.log("Not enough space ya fool of a Took!");
        return;
    };

    let topBorder = prefix + _createBorder("╔", "═", "╗", "*.·: ·.✧    ✦    ✧.·: ·.*", commentSpace); + postfix;
    let bottomBorder = prefix + _createBorder("╚", "═", "╝", "*.·: ·.✧    ✦    ✧.·: ·.*", commentSpace); + postfix;
    
    commentBody = prefix + " ".repeat((commentSpace - commentBody.length) / 2) + commentBody + postfix;
    commentBody = topBorder + "\n" + commentBody + "\n" + bottomBorder;

    document.getElementById("eggOutput").style.display = "block";
    document.getElementById("eggOutput").textContent = commentBody;

};

function _createBorder(_left, _bar, _right, _center, _size) {
    // How wide does each bar need to be?
    barWidth = (_size - (_left.length + _right.length + _center.length)) / 2;
    let return_value = _left + _bar.repeat(barWidth) + _center + _bar.repeat(barWidth) + _right;
    return return_value;
};