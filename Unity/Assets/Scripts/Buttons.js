#pragma strict

var GUI_Skin: GUISkin;

function Update(){
	//quit game if escape key is pressed
	if (Input.GetKey(KeyCode.Escape)) {
		Application.Quit();
	}
}

// JavaScript
function OnGUI () {
	GUI.skin = GUI_Skin;
	if (GUI.Button (Rect (Screen.width/2 - 149, Screen.height - 232, 100, 32), "NewGame")) {
		// This code is executed when the Button is clicked
		audio.Play();
		Application.LoadLevel("Game");
	}
	if (GUI.Button (Rect (Screen.width/2 - 50, Screen.height - 232, 100, 32), "Options")) {
		// This code is executed when the Button is clicked
		audio.Play();
		Application.LoadLevel("Options");
	}
	if (GUI.Button (Rect (Screen.width/2 + 49, Screen.height - 232, 100, 32), "Quit")) {
		// This code is executed when the Button is clicked
		audio.Play();
		Application.Quit();
	}
}

