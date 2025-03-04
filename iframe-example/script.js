window.onload = function () {
    let counter = document.querySelector('.counter span');
    let count = parseInt(counter.textContent.replace(/[^0-9]/g, ''));

    function incrementCounter() {
        count++;
        counter.textContent = 'Visitors: ' + padNumber(count, 8);
    }

    function padNumber(num, size) {
        let s = "00000000" + num;
        return s.substr(s.length - size);
    }

    setInterval(function () {
        if (Math.random() > 0.8) {
            incrementCounter();
        }
    }, 10000);

    setTimeout(function () {
        document.getElementById('bonus-tip').style.left = '10px';
    }, 3000);

    let constructionDiv = document.createElement('div');
    constructionDiv.className = 'under-construction';
    constructionDiv.innerHTML = '<img src="construction.gif" alt="Under Construction" width="100"><p>Some sections still under construction!</p>';
    constructionDiv.style.position = 'fixed';
    constructionDiv.style.right = '10px';
    constructionDiv.style.bottom = '10px';
    constructionDiv.style.background = 'white';
    constructionDiv.style.border = '2px solid red';
    constructionDiv.style.padding = '5px';
    constructionDiv.style.textAlign = 'center';
    constructionDiv.style.fontSize = '12px';
    document.body.appendChild(constructionDiv);

    let now = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dateString = 'Last Updated: ' + months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();
    let dateElement = document.createElement('div');
    dateElement.textContent = dateString;
    document.querySelector('footer .footer-text').appendChild(dateElement);
};