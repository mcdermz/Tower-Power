require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require './models/user'
require './models/tower'
require 'sinatra/json'

set :public_folder, 'public'
set :database, {adapter: 'postgresql', database: 'towerpower'}
mime_type :json, "application/json"

get '/' do
  send_file File.join(settings.public_folder, 'index.html')
end

before do
  content_type :json
end

helpers do
 def json( dataset )
  if !dataset #.empty?
   return no_data!
  else
   JSON.pretty_generate(JSON.load(dataset.to_json)) + "\n"
  end
 end
 def no_data!
  status 204
  #json :message => "no data"
 end
end

get '/users' do
  @users = User.all
  json @users
end

# add new user
post '/users' do
 new_user = MultiJson.load(request.body.read)
 @user = User.new( new_user )
 if @user.save
   json @user
 else
   no_data!
 end
end

# add new tower (save game)
post '/users/:id/towers' do
  new_tower = MultiJson.load(request.body.read)
  new_tower[:user_id] = params[:id]
  @tower = Tower.new( new_tower )

  if @tower.save
    json @tower
  else
    no_data!
  end
end
