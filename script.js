$(document).ready(function () {
    let cellContainer = $(".input-cell-container");
    for (let i = 1; i <= 100; i++) {
        let n = i;
        let ans = "";

        while (n > 0) {
            let rem = n % 26;
            if (rem == 0) {
                ans = "z" + ans;
                n = Math.floor(n / 26) - 1;
            } else {
                ans = String.fromCharCode(rem - 1 + 65) + ans;
                n = Math.floor(n / 26);
            }
        }
        let column = $(`<div class="column-name" id="colId-${i}" data="colCode-${ans}">${ans}</div>`);
        $(".column-name-container").append(column);
        let row = $(`<div class="row-name" id="rowId-${i}">${i}</div>`);
        $(".row-name-container").append(row);
    }

    for (let i = 1; i <= 100; i++) {
        let row = $(`<div class="input-cell-row"></div>`);
        for (let j = 1; j <= 100; j++) {
            let colCode = $(`#colId-${j}`).attr("data").split("-")[0];
            let cell = $(
                `<div class="input-cell" id="rowId-${i}-colId-${j}" contenteditable="true" data="colCode-${colCode}"></div>`
            );
            row.append(cell);
        }
        $(".input-cell-container").append(row);
    }
});
