
const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");

const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main")

const setValues = (fontSize, bgColor) => {
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
}


// load LocalStorage Value
const initialSetup = () => {
    const bgColor = localStorage.getItem("bgColor");
    const fontSize = localStorage.getItem("fontSize");

    if(bgColor && fontSize){
        setValues(fontSize, bgColor)
    }

    if(!bgColor && !fontSize){
        setValues("16px", "aqua");
    }

    if(!bgColor && fontSize){
        setValues(fontSize, "aqua");
    }

    if(bgColor && !fontSize){
        setValues("16px", bgColor);
    }
};


// changeFontSize
const changeFontSize = (even) => {
    const selectedFontSize = even.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize", selectedFontSize);
};

// changeBgColor
const changeBgColor = (even) => {
    const selectedBgColor = even.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem("bgColor", selectedBgColor);
};


// clearLocalStroage
const clearLocalStroage = () => {
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
    setValues("16px", "aqua");
};


// add event listeners
selectFontSize.addEventListener("change", changeFontSize );
selectBgColor.addEventListener("change", changeBgColor );
resetButton.addEventListener("click", clearLocalStroage);

