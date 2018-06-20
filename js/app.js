/*
 * Modules
 */

app = {

	/*
	 * Chargement du DOM
	 */
	init: function() {
		console.info("app.init")

		$(document).click(app.clickIt)
	},

	clickIt: function(e){
		console.info("app.clickIt")

		// On créé de la forme ronde
		var rond = $("<div>")

		// On génère le diamètre aléatoirement
		var diametre = (Math.floor(Math.random()*100)+1)

		// On génère aléatoirement les valeurs rgb
		var color = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' +
			(Math.floor((256-199)*Math.random()) + 200) + ',' +
			(Math.floor((256-199)*Math.random()) + 200) + ')'

		// On positionne le curseur au centre du rond
		var x = e.pageX - diametre/2 + "px"
		var y = e.pageY - diametre/2 + "px"

		// Style du rond
		rond.css({
			backgroundColor: color,
			height: diametre,
			width: diametre,
			borderRadius: diametre,
			top: y,
			left: x,
			position: "absolute"
		})

		// On met le rond dans le body
		$("body").append(rond)

		// Compte à rebours avant de lancer fall()
		setTimeout(app.fall, 5000)		
	},

	fall: function(){
		console.info("app.fall")

		var docHeight = $(document).height()
		var divHeight = $("div").height()

		$("div").animate({top: docHeight - divHeight},{
			duration: "slow",
			complete: function(){$("body div").remove()}
		})
	}
}





/*
 * Chargement du DOM
 */
$(function() {
	app.init()
})