function popup() {
	if (confirm("Press a button!")) {
		txt = "You pressed OK!";
	} else {
		txt = "You pressed Cancel!";
	}
}

while (true) {
	popup();
}
