#pragma strict

import UnityEngine.UI;

var lugia : Transform;
private var lugiaAnim : Animator;
var nowIndex : int = 0;
var arr = [""];

function Start () {
	lugiaAnim = lugia.GetComponent(Animator);
}

function Update () {
	if(Input.GetButtonDown("Fire1")) {
		if(nowIndex + 1 < arr.Length)nowIndex ++;
	}
	
	if(nowIndex==3)lugiaAnim.SetBool("born",true);
	if(nowIndex==10)Application.LoadLevel(2);
	
	GetComponent(Text).text = arr[nowIndex];
}