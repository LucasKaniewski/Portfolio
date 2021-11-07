function ouverture() {
	/* Pour ouvrir le menu */
  document.getElementById("mySidenav").style.width = "250px"; /* La taille du menu */
  document.getElementById("main").style.marginLeft = "250px";
}


function fermeture() {
		/* Pour la fermeture du menu */
  document.getElementById("mySidenav").style.width = "0"; /* Pour pouvoir caher le menu */
  document.getElementById("main").style.marginLeft = "0";
}