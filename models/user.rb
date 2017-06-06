require 'sinatra'
require 'sinatra/activerecord'

class User < ActiveRecord::Base
  has_many :towers, dependent: :destroy

  validates :username, presence: true
end
