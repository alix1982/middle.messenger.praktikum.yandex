
if (window.location.pathname.includes('errorRout404')) {
    console.log(window.location.pathname);
    window.location.href = 'errorRout404.html'
} else if (window.location.pathname.includes('errorRout500')) {
    console.log(window.location.pathname);
    window.location.href = 'errorRout500.html'
} else {
    console.log(window.location.pathname);
    window.location.href = 'login.html'
}