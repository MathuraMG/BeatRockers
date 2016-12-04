// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap
//= require jquery.minicolors
//= require jquery.minicolors.simple_form

var ready = function() {
  $('.tag-list input[type=checkbox]').click(function() {
    console.log('hi');
    if ($('.tag-list :checked').length > 0) {
      $('.lesson').hide();
    } else {
      $('.lesson').show();
    }

    $('.tag-list :checked').each(function() {
      // console.log($(this).val())
      var className = '.lesson-' + $(this).val();
      $(className).show();
    });

  })

}

$(document).ready(ready);
$(document).on('turbolinks:load', ready);

function __log(e, data) {
  console.log("\n" + e + " " + (data || ''));
}

var audio_context;
var recorder;
var globBlob;

function startUserMedia(stream) {
  var input = audio_context.createMediaStreamSource(stream);
  __log('Media stream created.');

  // Uncomment if you want the audio to feedback directly
  //input.connect(audio_context.destination);
  //__log('Input connected to audio context destination.');

  recorder = new Recorder(input);
  __log('Recorder initialised.');
}

function startRecording(button) {
  recorder && recorder.record();
  button.disabled = true;
  button.nextElementSibling.disabled = false;
  __log('Recording...');
}

function stopRecording(button) {
  recorder && recorder.stop();
  button.disabled = true;
  button.previousElementSibling.disabled = false;
  __log('Stopped recording.');
  // create WAV download link using audio data blob
  displayFile();
  recorder.clear();
}

function displayFile() {
  recorder && recorder.exportWAV(function(blob) {
    var url = URL.createObjectURL(blob);
    // http://stackoverflow.com/questions/18801268/save-audio-file-in-rails

    //http://stackoverflow.com/questions/27373620/saving-an-audio-blob-as-a-file-in-a-rails-app
    var li = document.createElement('li');
    var au = document.createElement('audio');

    au.controls = true;
    au.src = url;

    // saveButton.onclick = moveBlobToFile(url);
    li.appendChild(au);
    recordingslist.appendChild(li);

    globBlob = blob;
  });

}

function saveFile() {
  // console.log(blob);
  uploadForm(globBlob);

}

function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}

function postData(data)
{
  var oReq = new XMLHttpRequest();
  oReq.open("POST", "/audios");
  oReq.send(data);
  oReq.onload = function(oEvent) {
    if (oReq.status == 200) {
      console.log("Uploaded");
    } else {
      console.log("Error " + oReq.status + " occurred uploading your file.");
    }
  };
}

function uploadForm(blob) {
  var data = new FormData();
  // var data = {audio: {name: "seomthing", audio: blob}}
  var formInputs = $('#audio-form').serializeArray();

  if(blob) { // implying we have audio recording
    formInputs.forEach(function(input){
      console.log(input.name + ' : ' + input.value);
      if(input.name.localeCompare('audio[audio]')){ //when the inout is not the audio file
        data.append(input.name, input.value);
      }
    });
    data.append("audio[audio]", blob, (new Date()).getTime() + ".wav");
    postData(data);

  } else { //implying we have uploaded an audio file
    console.log('audio upload testing');
    formInputs.forEach(function(input){
      console.log(input.name + ' : ' + input.value);
      data.append(input.name, input.value);
    });
    var file = $('#audio-upload')[0].files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function (e) {
      var dataURL = e.target.result;
      data.append("audio[audio]", dataURLtoBlob(dataURL), (new Date()).getTime() + ".wav");
      postData(data);
    };
  }
}

window.onload = function init() {
  try {
    // webkit shim
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
    window.URL = window.URL || window.webkitURL;

    audio_context = new AudioContext;
    __log('Audio context set up.');
    __log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
  } catch (e) {
    alert('No web audio support in this browser!');
  }

  navigator.getUserMedia({
    audio: true
  }, startUserMedia, function(e) {
    __log('No live audio input: ' + e);
  });
};
