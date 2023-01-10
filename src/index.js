const switchBtn = document.querySelector('.btn')
const switcher = document.querySelector('.switcher');
const outerContainer = document.querySelector('.outer-container')

function handleSwitchMode() {
    let isLight = outerContainer.getAttribute('data-is-light');
    switch(isLight) {
        case 'true':{
            outerContainer.setAttribute('data-is-light', 'false')
            switcher.setAttribute('data-is-checked', 'true')
            break;
        };
        case 'false': {
            outerContainer.setAttribute('data-is-light', 'true')
            switcher.setAttribute('data-is-checked', 'false')
            break;
        }
    };
}
switchBtn.addEventListener('click', handleSwitchMode)
console.log('Hi');
console.log('Bye')