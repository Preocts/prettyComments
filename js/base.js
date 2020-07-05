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
    if (!(document.getElementById("tbCommentBody").value.length)) {
        document.getElementById("eggOutput").style.display = "none";
        return;
    };
    let commentFinal = ""
    let maxWidth = document.getElementById("tbMaxWidth").value;
    let prefix = document.getElementById("tbCommentOpen").value;
    let postfix = document.getElementById("tbCommentClose").value;
    let commentSpace = maxWidth - (prefix.length + postfix.length);
    console.log(maxWidth, commentSpace);

    if (commentSpace <= 0) {
        console.log("Not enough space ya fool of a Took!");
        return;
    };

    // Split comment into lines that fit within the max width
    let commentLines = buildLines(document.getElementById("tbCommentBody").value, commentSpace);
    
    // Add Top
    commentFinal += `${prefix}${createBorder("top", commentSpace)}${postfix}\n`;
    // Add Comment Lines
    for (let idx = 0; idx < commentLines.length; idx++) {
        commentFinal += `${prefix}${bufferCenter(commentLines[idx], commentSpace)}${postfix}\n`;
    }
    // Add Bottom
    commentFinal += `${prefix}${createBorder("bottom", commentSpace)}${postfix}`;
    
    // Displays debug bar
    // let debugBar = "-".repeat(maxWidth);
    // commentFinal = `${debugBar}\n${commentFinal}\n${debugBar}`
    
    document.getElementById("eggOutput").style.display = "block";
    document.getElementById("eggOutput").textContent = commentFinal;

};

function createBorder(_type, _size) {
    let topLeft =     "╔";
    let topRight =    "╗";
    let bottomLeft =  "╚";
    let bottomRight = "╝";
    let borderPiece = "═";
    let centerPiece = "*.·: ·. .·: ·.*";
    let _left, _right = "";

    if (_type.toLowerCase() == "top") {
        _left = topLeft;
        _right = topRight;
    };
    if (_type.toLowerCase() == "bottom") {
        _left = bottomLeft;
        _right = bottomRight;
    };
    
    // How wide does each bar need to be?
    barWidth = (_size - (_left.length + _right.length + centerPiece.length)) / 2;

    return `${_left}${borderPiece.repeat(barWidth)}${centerPiece}${borderPiece.repeat(barWidth)}${_right}`;
};

function bufferCenter(commentText, commentSpace) {
    // Centers our text using spaces. Extra space is added to the end
    if (commentText.length > commentSpace){
        return commentText;
    };
    // Leading spaces
    return_text = " ".repeat((commentSpace - commentText.length) / 2);
    // Add commentText
    return_text += commentText;
    // Trailing spaces so that return_text.length == commentSpace
    return_text += " ".repeat(commentSpace - (return_text.length));
    return return_text;
};

function buildLines(commentBody, maxWidth) {
    let words = commentBody.split(' ');
    let line = "";
    let outLines = [];
    for (let idx = 0; idx < words.length; idx++) {
        if ((line + " " + words[idx] + " ").length > maxWidth) {
            outLines.push(line + " ");
            line = "";
        };
        line += " " + words[idx];
    };
    if (line.length) {
        outLines.push(line + " ");
    };
    return outLines;
};
