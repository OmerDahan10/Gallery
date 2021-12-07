'use strict';

var gProj;

function createProject(name, title, desc) {
    var project = {
        id: name,
        name: name,
        title: title,
        desc: desc,
        img: `img/portfolio/${name}.jpg`,
        publishedAt: new Date().toLocaleDateString()
    }
    return project;

}

function createProjects() {
    gProj = loadFromStorage('projects');
    if (!gProj || gProj.length === 0) {
        gProj = [createProject('Mine Sweeper', 'Try not to die', 'Avoid exploding by finding all the open spots'),
        createProject('Book Shop', 'Run your own book shop', 'Manage your own book shop by adding/deleting/selling books'),
        createProject('Guess Who', 'Think of someone...', 'think of someone and we will try to guess who is it by asking some qustions. If we didnt make it so help us get smarter.')];

    }
    saveToStorage('projects', gProj);
}

function addProject(name, title, desc) {
    gProj.push(createProject(name, title, desc));
    saveToStorage('projects', gProj);
    renderProjects();
}


function getProjToShow() {
    return gProj;
}

function getProjById(id) {
    var proj = gProj.find(obj => obj.id === id)
    return proj;
}

function getUrl(name) {
    var urlName = name.split(' ');
    return `https://omerdahan10.github.io/${urlName.join('-')}/`;

}

function openInNewTab(name) {
    var url = getUrl(name);
    console.log(url)
    window.open(url, '_blank').focus();
}
