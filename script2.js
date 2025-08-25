let A;
let B;
A=[];
B=[];
let r1=0;
let c1=0;
function fun()
{
    const paragraph=document.getElementsByClassName("form-group");
    const rows=parseInt(paragraph[0].querySelectorAll("textarea")[0].value);
    const columns=parseInt(paragraph[0].querySelectorAll("textarea")[1].value);
    r1=rows;
    c1=columns;
    creatematrix(rows,columns);
    document.getElementById("button").style.display="flex";
}
function activate(){
intializematrix(r1,c1);
}
function intializematrix(rows,columns)
{
    const matrixa=document.querySelectorAll("table")[0];
    A=[],B=[];
    for (let i = 0; i < rows; i++) 
    {
    let row=[];
        for (let j = 0; j < columns; j++)
            {
            row.push(parseInt(matrixa.rows[i].cells[j].querySelector("textarea").value));
            }
    A.push(row);   
    }
    for (let i = 0; i < columns; i++) 
    {
    let row=[];
        for (let j = 0; j < rows; j++)
            {
            row.push(A[j][i]);
            }
    B.push(row);   
    }
    displaymatrix(rows,columns);
}
function creatematrix(rows,columns)
{
    const div=document.getElementById("matrixcreate");
    const heading=document.createElement("h3");
    const table=document.createElement("table");
    heading.innerText="MATRIX A";
    div.append(heading);
    div.append(table);
    table.innerHTML="";
    for (let i = 0; i < rows; i++) {
        const row=document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            const tabledata=document.createElement("td");
            const textarea=document.createElement("textarea");
            tabledata.append(textarea);
            row.append(tabledata);
        }
        table.append(row);
    }
   
}
function displaymatrix(rows,columns) {
    const div=document.getElementById("matrixprint");
    div.style.display="flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.innerHTML = "";
    const heading=document.createElement("h3");
    heading.innerText="RESULTANT MATRIX";
    div.append(heading);
    const table=document.createElement("table");
    div.append(table);
    for (let i = 0; i < columns; i++) {
        const row=document.createElement("tr");
        for (let j = 0; j < rows; j++) {
            const columnsdata=document.createElement("td");
            columnsdata.innerText=B[i][j];
            row.append(columnsdata);
        }
       table.append(row);
    }
}