#pragma strict
import System;
import System.Text;
import System.IO;

function Start () {
	// Source file
	var fileName = "angel_beats-hir_spaced.txt";
	var sr = StreamReader(Application.dataPath + "/" + fileName);
	var fileContent = sr.ReadToEnd();
	sr.Close();
	
	var sw : StreamWriter = new StreamWriter("converted.srt");
	var output : String;
	
	var lines = fileContent.Split("\n"[0]);	
		
	for (line in lines) {		
		if (timeStamp(line)) {
			// Delete all spaces except 7th and 8th						
			var sb = new StringBuilder(line);
			sb.Replace(" ", "", 0, 18);
			sb.Replace(" ", "", 18, 15);					
			
			// Add line to output			
			output += (sb.ToString() + "\n");			
		}
		else {
			// Copy unchanged line
			output += (line + "\n");;
		}					
	}
	
	sw.Write(output);
	sw.Close();
}

function Update () {

}

// Check if a given string is a TimeStamp
function timeStamp(s : String) {
	if (s[0] == '\r' || (s[0] != "0" || s[1] != "0")) {		
		return false;
	}
	else {
		return true;
	}	
}