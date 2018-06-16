window.onload = function() {
    const Input = document.querySelector('.numeric');
    const contBox = document.querySelector('.cont');
    let NumArr = [];
    contBox.addEventListener('click', function(e) {
        let event = e || window.event;
        let target = event.target || event.srcElement;
        if (target.nodeName == 'SPAN') {
            console.log(target.innerHTML);
            if (target.innerHTML == '=') {
                console.log(NumArr);
            }

            NumArr.push(target.innerHTML)
        }
    }, false)
}