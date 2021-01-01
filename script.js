// Backtracking-Algorithm

// init
var M = new Array(10);
var row = new Array(10);
var col = new Array(10);
var blk = new Array(10);
var ansFound = false;
for (var i = 0; i < M.length; i++) {
    M[i] = new Array(10, 0);
    row[i] = new Array(10, 0);
    col[i] = new Array(10, 0);
    blk[i] = new Array(10, 0);
}
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        M[i][j] = 0;
        row[i][j] = 0;
        col[i][j] = 0;
        blk[i][j] = 0;
    }
}

// find Major-block no.
function findBlockNo(i, j) {
    var block_no = (Math.floor((i - 1) / 3) * 3) + 1 + Math.floor((j - 1) / 3);
    return block_no;
}

function rec(i, j) {
    if (window.M[i][j] == 0) {
        for (var num = 1; num <= 9; num++) {
            if (window.row[i][num] === 0 && window.col[j][num] === 0 && window.blk[findBlockNo(i, j)][num] === 0) {
                window.M[i][j] = num;
                window.count++;
                window.row[i][num] = 1;
                window.col[j][num] = 1;
                window.M[i][j] = num;
                window.blk[findBlockNo(i, j)][num] = 1;
                if (i == 9 && j == 9) ansFound = true;
                else if (j == 9) rec(i + 1, 1);
                else rec(i, j + 1);
                if (window.ansFound) return;
                window.row[i][num] = 0;
                window.col[j][num] = 0;
                window.blk[findBlockNo(i, j)][num] = 0;
                window.M[i][j] = 0;
            }
        }
    } else {
        if (i == 9 && j == 9) ansFound = true;
        else if (j == 9) rec(i + 1, 1);
        else rec(i, j + 1);
        if (window.ansFound) return;
    }
}

function solve() {
    console.log(window.M);
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
            row[i][j] = 0;
            col[i][j] = 0;
            blk[i][j] = 0;
        }
    }
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
            if (window.M[i][j] != 0) {
                window.row[i][window.M[i][j]]++;
                window.col[j][window.M[i][j]]++;
                window.blk[findBlockNo(i, j)][window.M[i][j]]++;
            }
        }
    }
    var isValid = true;
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
            if (window.row[i][j] > 1 || window.col[i][j] > 1 || window.blk[i][j] > 1) {
                isValid = false;
                console.log(i + " " + j + " " + window.row[i][j] + " " + window.col[i][j] + " " + window.blk[i][j]);
            }
        }
    }
    if (!isValid) {
        document.getElementById("status").textContent = "Invalid Input";
        document.getElementById("status").style.color = 'rgb(' + 255 + ',' + 0 + ',' + 0 + ',' + 0.8 + ')';
        return;
    }
    rec(1, 1);
    document.getElementById("status").textContent = "Solution";
    document.getElementById("status").style.color = "green";
    document.getElementById("status").style.fontWeight = "bold";
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
            document.getElementById("m" + i + j).textContent = window.M[i][j];
            if (document.getElementById("m" + i + j).style.backgroundColor == "transparent" || document.getElementById("m" + i + j).style.backgroundColor == "")
                document.getElementById("m" + i + j).style.backgroundColor = '#1b4f2b';
        }
    }
}

// Button Selection
var btnClicked = 0;

function clk1() {
    document.getElementById("n" + btnClicked).style.backgroundColor = "transparent";
    document.getElementById("n1").style.backgroundColor = "green";
    btnClicked = 1;
}

function clk2() {
    document.getElementById("n" + btnClicked).style.backgroundColor = "transparent";
    document.getElementById("n2").style.backgroundColor = "green";
    btnClicked = 2;
}

function clk3() {
    document.getElementById("n" + btnClicked).style.backgroundColor = "transparent";
    document.getElementById("n3").style.backgroundColor = "green";
    btnClicked = 3;
}

function clk4() {
    document.getElementById("n" + btnClicked).style.backgroundColor = "transparent";
    document.getElementById("n4").style.backgroundColor = "green";
    btnClicked = 4;
}

function clk5() {
    document.getElementById("n" + btnClicked).style.backgroundColor = "transparent";
    document.getElementById("n5").style.backgroundColor = "green";
    btnClicked = 5;
}

function clk6() {
    document.getElementById("n" + btnClicked).style.backgroundColor = "transparent";
    document.getElementById("n6").style.backgroundColor = "green";
    btnClicked = 6;
}

function clk7() {
    document.getElementById("n" + btnClicked).style.backgroundColor = "transparent";
    document.getElementById("n7").style.backgroundColor = "green";
    btnClicked = 7;
}

function clk8() {
    document.getElementById("n" + btnClicked).style.backgroundColor = "transparent";
    document.getElementById("n8").style.backgroundColor = "green";
    btnClicked = 8;
}

function clk9() {
    document.getElementById("n" + btnClicked).style.backgroundColor = "transparent";
    document.getElementById("n9").style.backgroundColor = "green";
    btnClicked = 9;
}

function erase() {
    document.getElementById("n" + btnClicked).style.backgroundColor = "transparent";
    document.getElementById("n0").style.backgroundColor = 'rgb(' + 255 + ',' + 0 + ',' + 0 + ',' + 0.5 + ')';
    btnClicked = 0;
}

function reset() {
    document.getElementById("status").textContent = "Enter Valid Sudoku Input";
    document.getElementById("status").style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ',' + 0.85 + ')';
    erase();
    document.getElementById("n" + btnClicked).style.backgroundColor = "transparent";
    ansFound = false;
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
            M[i][j] = 0;
            row[i][j] = 0;
            col[i][j] = 0;
            blk[i][j] = 0;
            document.getElementById("m" + i + j).textContent = " ";
            document.getElementById("m" + i + j).style.backgroundColor = "transparent";
        }
    }
}

function putVal(id) {
    if (btnClicked == 0) {
        document.getElementById(id).textContent = " ";
        document.getElementById(id).style.backgroundColor = "transparent";
    } else {
        document.getElementById(id).textContent = btnClicked;
        document.getElementById(id).style.backgroundColor = "gray";
    }
    window.M[id.substring(1, 2) - '0'][id.substring(2, 3) - '0'] = btnClicked;
    console.log(id);
    console.log((id.substring(1, 2) - '0') + " " + (id.substring(2, 3) - '0'));
}