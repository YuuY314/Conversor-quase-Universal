// eu sei que o código está bem bruto

const toConvertInput = document.querySelector("#to-convert");
const convertedInput = document.querySelector("#converted");

const selectedCategory = document.querySelector("#selected-category");

const toConvertMoneyComboBox = document.querySelector("#to-convert-money");
const toConvertDistanceComboBox = document.querySelector("#to-convert-distance");
const toConvertTimeComboBox = document.querySelector("#to-convert-time");
let toConvertMoneySelect;
let toConvertDistanceSelect;
let toConvertTimeSelect;

const convertedMoneyComboBox = document.querySelector("#converted-money");
const convertedDistanceComboBox = document.querySelector("#converted-distance");
const convertedTimeComboBox = document.querySelector("#converted-time");
let convertedMoneySelect;
let convertedDistanceSelect;
let convertedTimeSelect;

let tempNum;

const comboBoxes = document.querySelectorAll(".combo-box");

comboBoxes.forEach(comboBox => {
    comboBox.addEventListener("click", conversion);
});

toConvertInput.addEventListener("click", conversion);

toConvertInput.addEventListener("keyup", conversion);

function conversion() {
    if(selectedCategory.value == "money"){
        toConvertMoneySelect = toConvertMoneyComboBox.options[toConvertMoneyComboBox.selectedIndex].value;
        convertedMoneySelect = convertedMoneyComboBox.options[convertedMoneyComboBox.selectedIndex].value;

        if(toConvertMoneySelect == "dolar"){
            if(convertedMoneySelect == "euro"){
                tempNum = toConvertInput.value * 0.92;
            } else if(convertedMoneySelect == "real"){
                tempNum = toConvertInput.value * 5.08;
            } else if(convertedMoneySelect == "iene"){
                tempNum = toConvertInput.value * 130.18;
            } else if(convertedMoneySelect == "rublo"){
                tempNum = toConvertInput.value * 70.59;
            }
        }

        if(toConvertMoneySelect == "euro"){
            if(convertedMoneySelect == "dolar"){
                tempNum = toConvertInput.value * 1.09;
            } else if(convertedMoneySelect == "real"){
                tempNum = toConvertInput.value * 5.52;
            } else if(convertedMoneySelect == "iene"){
                tempNum = toConvertInput.value * 141.49;
            } else if(convertedMoneySelect == "rublo"){
                tempNum = toConvertInput.value * 76.72;
            }
        }

        if(toConvertMoneySelect == "real"){
            if(convertedMoneySelect == "dolar"){
                tempNum = toConvertInput.value * 0.2;
            } else if(convertedMoneySelect == "euro"){
                tempNum = toConvertInput.value * 0.18;
            } else if(convertedMoneySelect == "iene"){
                tempNum = toConvertInput.value * 25.6;
            } else if(convertedMoneySelect == "rublo"){
                tempNum = toConvertInput.value * 13.89;
            }
        }

        if(toConvertMoneySelect == "iene"){
            if(convertedMoneySelect == "dolar"){
                tempNum = toConvertInput.value * 0.0077;
            } else if(convertedMoneySelect == "euro"){
                tempNum = toConvertInput.value * 0.0071;
            } else if(convertedMoneySelect == "real"){
                tempNum = toConvertInput.value * 0.039;
            } else if(convertedMoneySelect == "rublo"){
                tempNum = toConvertInput.value * 0.54;
            }
        }

        if(toConvertMoneySelect == "rublo"){
            if(convertedMoneySelect == "dolar"){
                tempNum = toConvertInput.value * 0.014;
            } else if(convertedMoneySelect == "euro"){
                tempNum = toConvertInput.value * 0.013;
            } else if(convertedMoneySelect == "real"){
                tempNum = toConvertInput.value * 0.072;
            } else if(convertedMoneySelect == "iene"){
                tempNum = toConvertInput.value * 1.84;
            }
        }

        if(toConvertMoneySelect == convertedMoneySelect){
            tempNum = toConvertInput.value;
            convertedInput.value = toConvertInput.value;
        }

        if(tempNum % 1 != 0){
            tempNum = tempNum.toFixed(2);
        }
    }

    if(selectedCategory.value == "distance"){
        toConvertDistanceSelect = toConvertDistanceComboBox.options[toConvertDistanceComboBox.selectedIndex].value;
        convertedDistanceSelect = convertedDistanceComboBox.options[convertedDistanceComboBox.selectedIndex].value;

        if(toConvertDistanceSelect == "meter"){
            if(convertedDistanceSelect == "kilometer"){
                tempNum = toConvertInput.value * 0.001;
            } else if(convertedDistanceSelect == "centimeter"){
                tempNum = toConvertInput.value * 100;
            } else if(convertedDistanceSelect == "milimeter"){
                tempNum = toConvertInput.value * 1000;
            } else if(convertedDistanceSelect == "feet"){
                tempNum = toConvertInput.value * 3.2808399;
            } else if(convertedDistanceSelect == "yard"){
                tempNum = toConvertInput.value * 1.09361329834;
            } else if(convertedDistanceSelect == "inch"){
                tempNum = toConvertInput.value * 39.37007874;
            } else if(convertedDistanceSelect == "mile"){
                tempNum = toConvertInput.value * 0.0006213712;   
            }
        }

        if(toConvertDistanceSelect == "kilometer"){
            if(convertedDistanceSelect == "meter"){
                tempNum = toConvertInput.value * 1000;
            } else if(convertedDistanceSelect == "centimeter"){
                tempNum = toConvertInput.value * 100000;
            } else if(convertedDistanceSelect == "milimeter"){
                tempNum = toConvertInput.value * 1000000;
            } else if(convertedDistanceSelect == "feet"){
                tempNum = toConvertInput.value * 3280.8399;
            } else if(convertedDistanceSelect == "yard"){
                tempNum = toConvertInput.value * 1093.61329834;
            } else if(convertedDistanceSelect == "inch"){
                tempNum = toConvertInput.value * 39370.07874;
            } else if(convertedDistanceSelect == "mile"){
                tempNum = toConvertInput.value * 0.6213712;
            }
        }

        if(toConvertDistanceSelect == "centimeter"){
            if(convertedDistanceSelect == "meter"){
                tempNum = toConvertInput.value * 0.01;
            } else if(convertedDistanceSelect == "kilometer"){
                tempNum = toConvertInput.value * 0.00001;
            } else if(convertedDistanceSelect == "milimeter"){
                tempNum = toConvertInput.value * 10;
            } else if(convertedDistanceSelect == "feet"){
                tempNum = toConvertInput.value * 0.32808399;
            } else if(convertedDistanceSelect == "yard"){
                tempNum = toConvertInput.value * 0.109361329834;
            } else if(convertedDistanceSelect == "inch"){
                tempNum = toConvertInput.value * 3.937007874;
            } else if(convertedDistanceSelect == "mile"){
                tempNum = toConvertInput.value * 0.00006213712;
            }
        }

        if(toConvertDistanceSelect == "milimeter"){
            if(convertedDistanceSelect == "meter"){
                tempNum = toConvertInput.value * 0.001;
            } else if(convertedDistanceSelect == "kilometer"){
                tempNum = toConvertInput.value * 0.000001;
            } else if(convertedDistanceSelect == "centimeter"){
                tempNum = toConvertInput.value * 0.1;
            } else if(convertedDistanceSelect == "feet"){
                tempNum = toConvertInput.value * 0.0032808399;
            } else if(convertedDistanceSelect == "yard"){
                tempNum = toConvertInput.value * 0.00109361329834;
            } else if(convertedDistanceSelect == "inch"){
                tempNum = toConvertInput.value * 0.03937007874;
            } else if(convertedDistanceSelect == "mile"){
                tempNum = toConvertInput.value * 0.000006213712;
            }
        }

        if(toConvertDistanceSelect == "feet"){
            if(convertedDistanceSelect == "meter"){
                tempNum = toConvertInput.value * 0.3048;
            } else if(convertedDistanceSelect == "kilometer"){
                tempNum = toConvertInput.value * 0.0003048;
            } else if(convertedDistanceSelect == "centimeter"){
                tempNum = toConvertInput.value * 30.48;
            } else if(convertedDistanceSelect == "milimeter"){
                tempNum = toConvertInput.value * 304.8;
            } else if(convertedDistanceSelect == "yard"){
                tempNum = toConvertInput.value * 0.33333333;
            } else if(convertedDistanceSelect == "inch"){
                tempNum = toConvertInput.value * 12;
            } else if(convertedDistanceSelect == "mile"){
                tempNum = toConvertInput.value * 0.000189394;
            }
        }

        if(toConvertDistanceSelect == "yard"){
            if(convertedDistanceSelect == "meter"){
                tempNum = toConvertInput.value * 0.9144;
            } else if(convertedDistanceSelect == "kilometer"){
                tempNum = toConvertInput.value * 0.0009144;
            } else if(convertedDistanceSelect == "centimeter"){
                tempNum = toConvertInput.value * 91.44;
            } else if(convertedDistanceSelect == "milimeter"){
                tempNum = toConvertInput.value * 914.4;
            } else if(convertedDistanceSelect == "feet"){
                tempNum = toConvertInput.value * 3;
            } else if(convertedDistanceSelect == "inch"){
                tempNum = toConvertInput.value * 36;
            } else if(convertedDistanceSelect == "mile"){
                tempNum = toConvertInput.value * 0.000568182;
            }
        }

        if(toConvertDistanceSelect == "inch"){
            if(convertedDistanceSelect == "meter"){
                tempNum = toConvertInput.value * 0.0254;
            } else if(convertedDistanceSelect == "kilometer"){
                tempNum = toConvertInput.value * 0.00000254;
            } else if(convertedDistanceSelect == "centimeter"){
                tempNum = toConvertInput.value * 2.54;
            } else if(convertedDistanceSelect == "milimeter"){
                tempNum = toConvertInput.value * 25.4;
            } else if(convertedDistanceSelect == "feet"){
                tempNum = toConvertInput.value / 12;
            } else if(convertedDistanceSelect == "yard"){
                tempNum = toConvertInput.value / 36;
            } else if(convertedDistanceSelect == "mile"){
                tempNum = toConvertInput.value * 0.0000015783;
            }
        }

        if(toConvertDistanceSelect == "mile"){
            if(convertedDistanceSelect == "meter"){
                tempNum = toConvertInput.value * 1609;
            } else if(convertedDistanceSelect == "kilometer"){
                tempNum = toConvertInput.value * 1.609;
            } else if(convertedDistanceSelect == "centimeter"){
                tempNum = toConvertInput.value * 160900;
            } else if(convertedDistanceSelect == "milimeter"){
                tempNum = toConvertInput.value * 1609000;
            } else if(convertedDistanceSelect == "feet"){
                tempNum = toConvertInput.value * 5280;
            } else if(convertedDistanceSelect == "yard"){
                tempNum = toConvertInput.value * 1760;
            } else if(convertedDistanceSelect == "inch"){
                tempNum = toConvertInput.value * 63360;
            }
        }

        if(toConvertDistanceSelect == convertedDistanceSelect){
            tempNum = toConvertInput.value;
            convertedInput.value = toConvertInput.value;
        }

        if(tempNum % 1 != 0){
            if(countDecimals(tempNum) == 4){
                tempNum = tempNum.toFixed(4);
            } else if(countDecimals(tempNum) == 5){
                tempNum = tempNum.toFixed(5);
            } else if(countDecimals(tempNum) == 6){
                tempNum = tempNum.toFixed(6);
            } else if(countDecimals(tempNum) >= 7){
                tempNum = tempNum.toFixed(7);
            }
        }
    }

    if(selectedCategory.value == "time"){
        toConvertTimeSelect = toConvertTimeComboBox.options[toConvertTimeComboBox.selectedIndex].value;
        convertedTimeSelect = convertedTimeComboBox.options[convertedTimeComboBox.selectedIndex].value;

        if(toConvertTimeSelect == "second"){
            if(convertedTimeSelect == "minute"){
                tempNum = toConvertInput.value / 60;
            } else if(convertedTimeSelect == "hour"){
                tempNum = toConvertInput.value / 3600;
            } else if(convertedTimeSelect == "day"){
                tempNum = toConvertInput.value / 86400;
            } else if(convertedTimeSelect == "week"){
                tempNum = toConvertInput.value / 604800;
            } else if(convertedTimeSelect == "month"){
                tempNum = toConvertInput.value / 2592000;
            } else if(convertedTimeSelect == "year"){
                tempNum = toConvertInput.value / 31536000;
            }
        }

        if(toConvertTimeSelect == "minute"){
            if(convertedTimeSelect == "second"){
                tempNum = toConvertInput.value * 60;
            } else if(convertedTimeSelect == "hour"){
                tempNum = toConvertInput.value / 60;
            } else if(convertedTimeSelect == "day"){
                tempNum = toConvertInput.value / 1440;
            } else if(convertedTimeSelect == "week"){
                tempNum = toConvertInput.value / 10080;
            } else if(convertedTimeSelect == "month"){
                tempNum = toConvertInput.value / 43200;
            } else if(convertedTimeSelect == "year"){
                tempNum = toConvertInput.value / 525600;
            }
        }

        if(toConvertTimeSelect == "hour"){
            if(convertedTimeSelect == "second"){
                tempNum = toConvertInput.value * 3600;
            } else if(convertedTimeSelect == "minute"){
                tempNum = toConvertInput.value * 60;
            } else if(convertedTimeSelect == "day"){
                tempNum = toConvertInput.value / 24;
            } else if(convertedTimeSelect == "week"){
                tempNum = toConvertInput.value / 168;
            } else if(convertedTimeSelect == "month"){
                tempNum = toConvertInput.value / 720;
            } else if(convertedTimeSelect == "year"){
                tempNum = toConvertInput.value / 8760;
            }
        }

        if(toConvertTimeSelect == "day"){
            if(convertedTimeSelect == "second"){
                tempNum = toConvertInput.value * 86400;
            } else if(convertedTimeSelect == "minute"){
                tempNum = toConvertInput.value * 1440;
            } else if(convertedTimeSelect == "hour"){
                tempNum = toConvertInput.value * 24;
            } else if(convertedTimeSelect == "week"){
                tempNum = toConvertInput.value / 7;
            } else if(convertedTimeSelect == "month"){
                tempNum = toConvertInput.value / 30;
            } else if(convertedTimeSelect == "year"){
                tempNum = toConvertInput.value / 365;
            }
        }
        
        if(toConvertTimeSelect == "week"){
            if(convertedTimeSelect == "second"){
                tempNum = toConvertInput.value * 604800;
            } else if(convertedTimeSelect == "minute"){
                tempNum = toConvertInput.value * 10080;
            } else if(convertedTimeSelect == "hour"){
                tempNum = toConvertInput.value * 4032;
            } else if(convertedTimeSelect == "day"){
                tempNum = toConvertInput.value * 7;
            } else if(convertedTimeSelect == "month"){
                tempNum = toConvertInput.value / 4.34524;
            } else if(convertedTimeSelect == "year"){
                tempNum = toConvertInput.value / 52.1429;
            }
        }

        if(toConvertTimeSelect == "month"){
            if(convertedTimeSelect == "second"){
                tempNum = toConvertInput.value * 2592000;
            } else if(convertedTimeSelect == "minute"){
                tempNum = toConvertInput.value * 43200;
            } else if(convertedTimeSelect == "hour"){
                tempNum = toConvertInput.value * 720;
            } else if(convertedTimeSelect == "day"){
                tempNum = toConvertInput.value * 30;
            } else if(convertedTimeSelect == "week"){
                tempNum = toConvertInput.value * 4.34524;
            } else if(convertedTimeSelect == "year"){
                tempNum = toConvertInput.value / 12;
            }
        }

        if(toConvertTimeSelect == "year"){
            if(convertedTimeSelect == "second"){
                tempNum = toConvertInput.value * 31536000;
            } else if(convertedTimeSelect == "minute"){
                tempNum = toConvertInput.value * 525600;
            } else if(convertedTimeSelect == "hour"){
                tempNum = toConvertInput.value * 8760;
            } else if(convertedTimeSelect == "day"){
                tempNum = toConvertInput.value * 365;
            } else if(convertedTimeSelect == "week"){
                tempNum = toConvertInput.value * 52.1429;
            } else if(convertedTimeSelect == "month"){
                tempNum = toConvertInput.value * 12;
            }
        }

        if(toConvertTimeSelect == convertedTimeSelect){
            tempNum = toConvertInput.value;
            convertedInput.value = toConvertInput.value;
        }

        if(tempNum % 1 != 0){
            tempNum = tempNum.toFixed(9);
        }
    }

    convertedInput.value = tempNum;
}

function countDecimals(value){
    if(Math.floor(value) !== value){
        return value.toString().split(".")[1].length || 0;
    }

    return 0;
}