var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";

script.onreadystatechange = handler;
script.onload = handler;

head.appendChild(script);

function handler() {
    $('#firmlogo').load('./templates/logo.html');
    $('#navigation').load('../templates/navigation.html', function() {
        $('a[href="' + document.location.pathname + '"]').addClass("current");
    });
    $('#header').load('../templates/header.html');
    $('#footer').load('../templates/footer.html');
}