# README
Project for Beatrocker class

###Link Dump
* [Oauth google] (https://richonrails.com/articles/google-authentication-in-ruby-on-rails)
* [simple form](https://github.com/plataformatec/simple_form)
* [bootstrap-sass](https://github.com/twbs/bootstrap-sass)
* [Bcrypt authentication](https://gist.github.com/thebucknerlife/10090014)
* [Waveform](https://github.com/benalavi/waveform) - needed to run the following command prior to bundle install `brew install libsndfile
`
* [Minicolors](https://github.com/kostia/jquery-minicolors-rails)
* [Paperclip](https://github.com/thoughtbot/paperclipas)
* [RecorderJS](https://github.com/JulienDefrance/recorderjs-rails wa)

### Notes
#### To convert
ffmpeg -i Hai_audio_Test.m4a test.wav
waveform test.wav Hai.png


##TO DO
* Add a colour to the tags
* classify by tags
* add section detail to show in students
* switch to postgres
* How does audio addition work??

Adding an admin

To use the admin side of the webpage, you would have to add yourself as an admin
Run rails c
To add a user, (with email admin , password admin123 name adminname ) run the below User.create(:name => 'adminname', :password => 'admin123', :email => 'admin', :is_admin =>true)
Once this goes through, go to localhost:3000/login and login with email and password
