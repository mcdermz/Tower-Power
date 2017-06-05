require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require './models/user'
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

post "/users" do
 new_user = MultiJson.load(request.body.read)
 @user = User.new( new_user )
 if @user.save
 json @user
 else
 no_data!
 end
end
