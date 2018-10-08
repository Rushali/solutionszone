function init() {
  algaeInteract.addEventListener('mouseover', showAlgae);
algaeInteract.addEventListener('mouseout', stopAlgae);

  waste.addEventListener('mouseover', showWaste);
  waste.addEventListener('mouseout', stopWaste);

  solar.addEventListener('mouseover', showSolar);
  solar.addEventListener('mouseout', stopSolar);

  agri.addEventListener('mouseover', showAgri);
  agri.addEventListener('mouseout', stopAgri);

  setActive();
}

// algae function
function showAlgae() {
  document.getElementById('algaeInteract').src='assets/images/algae/algae2.jpg' ;
}
//algae static image
function stopAlgae() {
  document.getElementById('algaeInteract').src='assets/images/algae/algae1.JPG' ;
}

// waste function
function showWaste() {
  document.getElementById('hideandseek').src='assets/.gif' ;
}
//waste static image
function stopWaste() {
  document.getElementById('hideandseek').src='assets/.jpg' ;
}

// solar function
function showSolar() {
  document.getElementById('microgreens').src='assets/.gif' ;
}
//solar static image
function stopSolar() {
  document.getElementById('microgreens').src='assets/.jpg' ;
}

// agri function
function showAgri() {
  document.getElementById('traceroute').src='assets/.gif' ;
}
//agri static image
function stopAgri() {
  document.getElementById('traceroute').src='assets/.jpg' ;
}



// function to show active navigation tab
function setActive() {
    aObj = document.getElementById('nav').getElementsByTagName('a');
    for(i=0;i<aObj.length;i++) {
      if(document.location.href.indexOf(aObj[i].href)>=0) {
        aObj[i].className='active';
      }
    }
}

window.addEventListener('load', init);
