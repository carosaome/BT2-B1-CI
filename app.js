

let table = document.getElementById('table');

let btnCreate = document.getElementById('btn-create');



const createTable = {
    getElement: function (callback1, callback2) {
         btnCreate.addEventListener('click', () => {
            let row = parseInt(document.getElementById('row').value);
            let column = parseInt(document.getElementById('column').value);
            callback2();
            callback1(row, column)

        }),

        window.addEventListener('keydown',(e)=>{
            if(e.keyCode == 13){
                document.getElementById('column').focus()
                 btnCreate.click()

            }
        })
        

    },

    renderTable: function (row, column) {
     

        if(row || column > 0){
            for (let i = 0; i < row; i++) {
                table.innerHTML +=
                    `<tr id="tr-${i}">
            </tr>`
    
                for (let j = 0; j < column; j++) {
                    document.querySelector(`#tr-${i}`).innerHTML += `
                <td contenteditable ="" ></td>
            `
                }
            }
        }

        if(row == 0){
            for (let j = 0; j < column; j++) {
                table.innerHTML += `
            <td contenteditable ="" ></td>
        `
            }
        }
        if(column == 0){
            for (let j = 0; j < row; j++) {
                table.innerHTML += `
            <td contenteditable ="" ></td>
        `
            }
        }
        
    },


    clearInput: function () {
        let row = document.getElementById('row')
        let column = document.getElementById('column')
        row.value = null
        column.value = null

        row.focus()

    },
    start: function () {
        this.getElement(this.renderTable, this.clearInput);
       
    }


}


createTable.start();

