let A = [];
let n = 0;

function fun() {
    const paragraph = document.getElementsByClassName("form-group");
    const rows = parseInt(paragraph[0].querySelectorAll("textarea")[0].value);
    const columns = parseInt(paragraph[0].querySelectorAll("textarea")[1].value);

    if (rows !== columns) {
        alert("❌ Determinant can only be calculated for a square matrix!");
        return;
    }

    n = rows;
    creatematrix(rows, columns);
    document.getElementById("button").style.display = "flex";
}

function activate() {
    intializematrix(n);
}

// read values from table into matrix A
function intializematrix(size) {
    const matrixa = document.querySelectorAll("table")[0];
    A = [];

    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(parseFloat(matrixa.rows[i].cells[j].querySelector("textarea").value) || 0);
        }
        A.push(row);
    }

    displaydeterminant(size);
}

// create input table
function creatematrix(rows, columns) {
    const div = document.getElementById("matrixcreate");
    div.innerHTML = ""; // reset old table
    const heading = document.createElement("h3");
    const table = document.createElement("table");
    heading.innerText = "MATRIX A";
    div.append(heading);
    div.append(table);

    table.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            const tabledata = document.createElement("td");
            const textarea = document.createElement("textarea");
            tabledata.append(textarea);
            row.append(tabledata);
        }
        table.append(row);
    }
}

// recursive determinant function
function determinant(matrix) {
    const size = matrix.length;
    if (size === 1) return matrix[0][0];
    if (size === 2) return matrix[0][0]*matrix[1][1] - matrix[0][1]*matrix[1][0];

    let det = 0;
    for (let col = 0; col < size; col++) {
        let submatrix = matrix.slice(1).map(row => row.filter((_, j) => j !== col));
        det += ((col % 2 === 0 ? 1 : -1) * matrix[0][col] * determinant(submatrix));
    }
    return det;
}

// show result
function displaydeterminant(size) {
    const div = document.getElementById("matrixprint");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.innerHTML = "";

    // Heading
    const heading = document.createElement("h3");
    heading.innerText = "DETERMINANT RESULT";
    div.append(heading);

    // Result box
    const resultBox = document.createElement("div");
    resultBox.style.marginTop = "15px";
    resultBox.style.padding = "12px 20px";
    resultBox.style.background = "linear-gradient(135deg, #111213ff, #06b6d4)";
    resultBox.style.color = "#00f5d4";
    resultBox.style.fontSize = "1.2rem";
    resultBox.style.fontWeight = "bold";
    resultBox.style.borderRadius = "12px";
    resultBox.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    resultBox.style.textAlign = "center";

    // Calculate determinant
    const detValue = determinant(A);
    resultBox.innerText = "Determinant = " + detValue;

    div.append(resultBox);
}

