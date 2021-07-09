var urls = [
	"https://www.tine.no/merkevarer/tine-sjokomelk",
	"https://www.q-meieriene.no/Produktkategorier/q-R-sjokolademelk/q-R-fersk-sjokolademelk-1-l",
	"https://www.tine.no/merkevarer/litago",
	"https://cocio.no/produkter/cocio-classic/",
	"https://www.oboy.no/produkter/oboy-original",
	"https://www.varden.no/nyheter/sjokomelk-handler-om-frihet-og-mangfold/"
]

var randomUrl = urls[Math.floor(Math.random()*urls.length)];
window.location.replace(randomUrl);