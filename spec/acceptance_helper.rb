require File.dirname(__FILE__) + "/spec_helper"
require_relative "../themes/bootstrap/app"

require 'capybara'
require 'capybara/dsl'
Capybara.app = Nesta::App

RSpec.configure do |config|
  config.include Capybara::DSL
end
