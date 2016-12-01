class AudiosController < ApplicationController
  before_action :set_audio, only: [:show, :edit, :update, :destroy, :save_file]

  # GET /audios
  # GET /audios.json
  def index
    @audios = Audio.all
  end

  # GET /audios/1
  # GET /audios/1.json
  def show
     @students = Student.all
     @users = User.all
  end

  # GET /audios/new
  def new
    @audio = Audio.new
    @students = Student.all
    @users = User.all
  end

  # GET /audios/1/edit
  def edit
  end

  # POST /audios
  # POST /audios.json
  def create
    # binding.pry
    @audio = Audio.new(audio_params)

    respond_to do |format|
      if @audio.save
        format.html { redirect_to @audio, notice: 'Audio was successfully created.' }
        format.json { render :show, status: :created, location: @audio }
      else
        format.html { render :new }
        format.json { render json: @audio.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /audios/1
  # PATCH/PUT /audios/1.json
  def update
    respond_to do |format|
      if @audio.update(audio_params)
        format.html { redirect_to @audio, notice: 'Audio was successfully updated.' }
        format.json { render :show, status: :ok, location: @audio }
      else
        format.html { render :edit }
        format.json { render json: @audio.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /audios/1
  # DELETE /audios/1.json
  def destroy
    @audio.destroy
    respond_to do |format|
      format.html { redirect_to audios_url, notice: 'Audio was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def save_file
      @audio = Audio.new(params)
      # audio = params[:audio]
      save_path = Rails.root.join("public/#{audio.original_filename}")

        # Open and write the file to file system.
        File.open(save_path, 'wb') do |f|
          f.write params[:audio].read
        end

      render :text=> 'hi'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_audio
      @audio = Audio.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def audio_params
      params.require(:audio).permit(:name, :audio, :student_ids => [], :user_ids => []).tap do |base_params|
        if params[:recorded_audio]
          base_params.merge(audio: params[:recorded_audio])
        end
      end
    end
end
