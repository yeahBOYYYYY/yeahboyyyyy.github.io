let whitemode;


document.addEventListener('DOMContentLoaded', initialize);

async function initialize(){
    whiteMode();
    lastCommitFetch();
}

function whiteModeToggle(){
    whitemode = JSON.parse(localStorage.getItem('whitemode'));
    document.body.classList.toggle('whitemode');
    localStorage.setItem('whitemode', !whitemode);
}

function whiteMode(){
    const themeSwitch = document.getElementById('theme-switch');

    whitemode = localStorage.getItem('whitemode');
    if (whitemode == null) localStorage.setItem('whitemode', false);
    whitemode = JSON.parse(localStorage.getItem('whitemode'));

    if (whitemode) document.body.classList.toggle('whitemode');

    themeSwitch.addEventListener("click", () => {
        whiteModeToggle();
    });
}

function lastCommitFetch(){
    try {
        fetch('https://api.github.com/repos/yeahBOYYYYY/yeahboyyyyy.github.io/commits?per_page=1')
        .then(res => res.json())
        .then(res => {
            document.getElementById('lastCommitName').innerHTML = res[0].commit.message;
        })
    } catch (error) {
        console.warn('Not found the last commit.');
        document.getElementById('lastCommitName').innerHTML = "didn't found the last commit";
    }
}

