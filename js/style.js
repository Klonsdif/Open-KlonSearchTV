
window.addEventListener('load', function () {
    var selectedStyle = localStorage.getItem('selectedStyle');
    var cdto = document.querySelector('.st');
    if (selectedStyle ==='style-color-red') {
        document.body.style.background ='red';
    } else if (selectedStyle ==='style-color-yellow') {
        document.body.style.background = 'yellow';
    } else if (selectedStyle ==='style-color-green') {
        document.body.style.background = 'green';
    } else if (selectedStyle ==='style-color-blue') {
        document.body.style.background = 'blue';
    } else if (selectedStyle ==='style-color-orange') {
        document.body.style.background = 'orange';
    } else if (selectedStyle ==='style-color-black') {
        document.body.style.background = 'black';
    } else if (selectedStyle ==='style-color-purple') {
        document.body.style.background = 'purple';
    } else if (selectedStyle ==='style-color-white') {
        document.body.style.background = 'white';
    } else if (selectedStyle ==='style-color-gradient-orange') {
        document.body.style="background:linear-gradient(to bottom right, orange, red);";
    } else if (selectedStyle ==='style-color-gradient-green') {
        document.body.style='background:linear-gradient(to bottom right, green, blue);';
    } else if (selectedStyle === 'img-clear') {
        document.body.style.background = "url('https://api.dujin.org/bing/1920.php')";
        document.body.style="backdrop-filter:blur(0px)";
        cdto.style="background:rgba(225, 225, 225, 0.7);"
    } else if (selectedStyle === 'img-gaussian-blur') {
         document.body.style.background = "url('https://api.dujin.org/bing/1920.php')"
        document.body.style="backdrop-filter:blur(15px)";
    }
});
