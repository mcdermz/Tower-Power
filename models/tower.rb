require 'sinatra'
require 'sinatra/activerecord'

class Tower < ActiveRecord::Base
  belongs_to :user

  validates :name, presence: true
  validates :user_id, presence: true
end
