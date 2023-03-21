const readXlsxFile = require("read-excel-file/node");
const validator = require("validator");

readXlsxFile("./Alunos.xlsx").then((rows) => {
  let linhas = rows;
  let linha = 1;
  let coluna = 0;

  for (let i = 0; i < linhas.length; i++) {
    if (
      validator.isEmpty(rows[linha][coluna]) == false &&
      validator.isEmail(rows[linha][coluna + 1]) == true &&
      rows[linha][coluna + 2] > 0 &&
      validator.isAlphanumeric(rows[linha][coluna + 3])
    ) {
      console.log(rows[linha]);
      linha++;
    } else {
      console.log("Information error");
    }
  }
});
