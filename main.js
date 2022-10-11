function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  x=ml5.imageClassifier('MobileNet',afnoyc)
}
function afnoyc(){
  console.log("Loaded");
}
function draw(){
  image(video,0,0,300,300);
  x.classify(video,anoyc);
}
var p="";
function anoyc(error,result){
  if(error){
    console.log(error);
  }
  else{
    if((result[0].confidence>0.5)&&(p != result[0].label)){
      console.log(result);
      p=result[0].label;
      var synth=window.speechSynthesis;
      y="Object detected is"+result[0].label;
      var z=new SpeechSynthesisUtterance(y);
      synth.speak(z);
      document.getElementById("ydfre").innerHTML=result[0].label;
      document.getElementById("ydfren").innerHTML=(result[0].confidence*100).toFixed(2)+"%";
    }
  }
}


