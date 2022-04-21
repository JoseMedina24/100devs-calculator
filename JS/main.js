//Required abilities of a calculator:
//accept user inputs
//store inputs
//recognice inputs and perform calculations
//return a result

//Optional features:
//Should accept longer arithmetic operations.
//display all input as it is being entered.
//store previous total as start of next operation.
//clear button should clear all entries.
//should prevent invalid (operators next to each other, two decimal points)

const keys = document.querySelector('.calculator-buttons')
    keys.addEventListener('click', event => {
        const { target } = event;
        const { value } = target;
        if (!target.matches('button')) {
            return;
        } else {
            //calculator.parseInput(value)
            //console.log(event)
        }
    })
 
const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value) {
        if (this.displayText === '0') {
            this.displayText = ''
        }
        //have any of the "special button" been clicked?
        switch (value) {
            case '=':
                //calculate the answer 
                break;
            case 'AC':
                //clear screen and store values
                break;
            case '.':
                if (this.displayText == 0) {
                    addText('0.')
                } else {
                    addText(value) 
                }
                break;
            default:
                addText(value)
                break;

        }

    },
    addText(value) {
        if (this.displayText === '0') {
            this.displayText = ''
        } else if (this.prevTotal !== null) {
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        if (isNaN(+(value)) && isNaN(+(this.displayText))) {
            if (isNaN(this.displayText.slice(-1))) {
                return;
            }
        }
        this.displayText += value
            //output display text to screen
    },
    
    outputText(text) {
        document.querySelector('.calculator-screen').value = text
    }
}
