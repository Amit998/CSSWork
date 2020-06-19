//Get Modal Elements//
var modal = document.getElementById('simplemodal');

//Get Open model button
var modalbtn=document.getElementById('modalbtn');
//get close botton
var closebtn=document.getElementsByClassName('closebtn')[0];

//listen for a click open click button
modalbtn.addEventListener('click',openModal);

//listen for a click open click button
closebtn.addEventListener('click',closeModal);

// outside click listen for outside click
window.addEventListener('click',outsideClick);

//function to open modal
function openModal(){
	modal.style.display='block';
}
function closeModal(){
	modal.style.display='none';
}
function outsideClick(e){
	if (e.target==modal) {
	modal.style.display='none';
  }
}