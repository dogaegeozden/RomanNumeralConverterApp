const convertBtn = document.querySelector("#convert-btn");

const form = document.querySelector("#form");

const output = document.querySelector("#output");

convertBtn.addEventListener("click", submitForm);

function submitForm(event) {

    event.preventDefault(); // Prevent form submission

    const inputValue = parseInt(document.querySelector("#number").value, 10);

    convertToRoman(inputValue); // Call the convertToRoman function

}

function convertToRoman(num) {

    const ref = [

        { value: 1000, numeral: 'M' },

        { value: 900, numeral: 'CM' },

        { value: 500, numeral: 'D' },

        { value: 400, numeral: 'CD' },

        { value: 100, numeral: 'C' },

        { value: 90, numeral: 'XC' },

        { value: 50, numeral: 'L' },

        { value: 40, numeral: 'XL' },

        { value: 10, numeral: 'X' },

        { value: 9, numeral: 'IX' },

        { value: 5, numeral: 'V' },

        { value: 4, numeral: 'IV' },

        { value: 1, numeral: 'I' }

    ];


    if (!num) {

        output.innerHTML = "Please enter a valid number";

    } else if (num < 0) {

        output.innerHTML = "Please enter a number greater than or equal to 1";

    } else if (num >= 4000) {

        output.innerHTML = "Please enter a number less than or equal to 3999";

    } else {

        let result = '';

        for (let i = 0; i < ref.length; i++) {

            while (num >= ref[i].value) {

                result += ref[i].numeral;

                num -= ref[i].value;

            }

        }

        output.innerHTML = result;

    }

}
