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
// 
// var audio_context;
// var recorder;
//
// function startUserMedia(stream) {
//   var input = audio_context.createMediaStreamSource(stream);
//   __log('Media stream created.');
//
//   // Uncomment if you want the audio to feedback directly
//   //input.connect(audio_context.destination);
//   //__log('Input connected to audio context destination.');
//
//   recorder = new Recorder(input);
//   __log('Recorder initialised.');
// }
//
// function startRecording(button) {
//   recorder && recorder.record();
//   button.disabled = true;
//   button.nextElementSibling.disabled = false;
//   __log('Recording...');
// }
//
// function stopRecording(button) {
//   recorder && recorder.stop();
//   button.disabled = true;
//   button.previousElementSibling.disabled = false;
//   __log('Stopped recording.');
//
//   // create WAV download link using audio data blob
//   createDownloadLink();
//
//   recorder.clear();
// }
//
// function createDownloadLink() {
//   recorder && recorder.exportWAV(function(blob) {
//     var url = URL.createObjectURL(blob);
//     // http://stackoverflow.com/questions/18801268/save-audio-file-in-rails
//     sendWaveToPost(blob);
//
//     //http://stackoverflow.com/questions/27373620/saving-an-audio-blob-as-a-file-in-a-rails-app
//     var li = document.createElement('li');
//     var au = document.createElement('audio');
//     var hf = document.createElement('a');
//     var saveButton = document.createElement('button');
//
//     au.controls = true;
//     au.src = url;
//     hf.href = url;
//     hf.download = new Date().toISOString() + '.wav';
//     hf.innerHTML = hf.download;
//     saveButton.innerHTML = 'SAVE';
//     // saveButton.onclick = moveBlobToFile(url);
//     li.appendChild(au);
//     li.appendChild(hf);
//     li.appendChild(saveButton)
//     recordingslist.appendChild(li);
//   });
//
// }
//
// function moveBlobToFile(blob) {
//   console.log(blob);
//   // document.getElementById('test-test').value = blob;
// }
//
// function sendWaveToPost(blob) {
//   console.log(blob);
//   var data = new FormData();
//   console.log(data);
//   data.append("audio", blob, (new Date()).getTime() + ".wav");
//
//   console.log(data.get("audio"));
//   var oReq = new XMLHttpRequest();
//   oReq.open("POST", "/audios");
//   oReq.send(data);
//   oReq.onload = function(oEvent) {
//     if (oReq.status == 200) {
//       console.log("Uploaded");
//     } else {
//       console.log("Error " + oReq.status + " occurred uploading your file.");
//     }
//   };
// }

// window.onload = function init() {
//   try {
//     // webkit shim
//     window.AudioContext = window.AudioContext || window.webkitAudioContext;
//     navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
//     window.URL = window.URL || window.webkitURL;
//
//     audio_context = new AudioContext;
//     __log('Audio context set up.');
//     __log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
//   } catch (e) {
//     alert('No web audio support in this browser!');
//   }
//
//   navigator.getUserMedia({
//     audio: true
//   }, startUserMedia, function(e) {
//     __log('No live audio input: ' + e);
//   });
// };
