#pragma strict
import System;
import System.Text;
import System.IO;

var fileName = "angel_beats-hir_spaced.txt";

function Start () {
	var sr = StreamReader(Application.dataPath + "/" + fileName);
	var fileContent = sr.ReadToEnd();
	sr.Close();
	var sw : StreamWriter = new StreamWriter("converted.srt");
	var output : String;
	
	var lines = fileContent.Split("\n"[0]);
	// New StringBuilder?

		
	for (line in lines) {
		//line[0] = "x";
		//Debug.Log(line);
		// find line with timestamp [number, number, colon]
		if (timeStamp(line)) {
			// Delete all spaces except 7th and 8th						
			var sb = new StringBuilder(line);
			sb.Replace(" ", "", 0, 18);
			sb.Replace(" ", "", 18, 15);					
			
			output += (sb.ToString() + "\n");
			//output += (line + "\n");
			Debug.Log(sb);			
			//Debug.Log(line);
		}
		else {
			output += (line + "\n");;
		}					
	}
	//Debug.Log(lines);
	// save output to a new file
	sw.Write(output);
	sw.Close();
}

function Update () {

}

function timeStamp(s : String) {
	if (s[0] == '\r' || (s[0] != "0" || s[1] != "0")) {		
		return false;
	}
	else {
		return true;
	}
		
}