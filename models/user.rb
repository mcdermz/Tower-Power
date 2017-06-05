require 'sinatra'
require 'sinatra/activerecord'

class User < ActiveRecord::Base
  has_many :towers, dependent: :destroy

  validates :name, presence: true
end
