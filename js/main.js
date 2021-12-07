'use strict';
console.log('Starting up');

function init() {
    createProjects();
    renderProjects();
    // renderModal()
}

// createProjects();
// renderProjects();

function renderProjects() {
    const projs = getProjToShow();
    var strHTMLs = projs.map(proj => {
        return `<div class="col-md-4 col-sm-6 portfolio-item" >
            <div class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${proj.id}')" >
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src="${proj.img}" alt="">
            </div>
            <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text-muted">${proj.title}</p>
            </div>
        </div>`
    })
    $('.row.main-portfolio').html(strHTMLs.join(''));
}



function renderModal(id) {
    const proj = getProjById(id)
    var modalHTML = `<h2>${proj.name}</h2>
        <p class="item-intro text-muted">${proj.title}</p>
        <img class="img-fluid d-block mx-auto" src="${proj.img}" alt="">
        <p>${proj.desc}</p>
        <ul class="list-inline">
          <li>Date: ${proj.publishedAt}</li>
        </ul>
        <button class="btn btn-primary" onclick="openInNewTab('${proj.name}')"> Check it out!</button>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
            <i class="fa fa-times"></i>
        Close Project</button>`


    $('.modal-body').html(modalHTML);
}
