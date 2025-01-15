const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    if (inputTemp === "") {
        document.getElementById("result").innerHTML = "Please enter a valid temperature.";
        return;
    }

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        return ((cel * 9) / 5 + 32).toFixed(1);
    };
    const fahToCel = (fah) => {
        return (((fah - 32) * 5) / 9).toFixed(1);
    };

    if (valueTemp === 'cel') {
        document.getElementById("result").innerHTML = `${celToFah(inputTemp)}&#176; Fahrenheit`;
    } else if (valueTemp === 'fah') {
        document.getElementById("result").innerHTML = `${fahToCel(inputTemp)}&#176; Celsius`;
    }
};
