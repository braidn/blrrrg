require File.dirname(__FILE__) + "/../acceptance_helper"

describe 'Home Page' do
  before do
    visit '/'
  end

  it 'correctly names the blog' do
    expect(page).to have_content('CloudBacon')
  end

  it 'has a list of links as a header' do
    expect(page).to have_css('ul > li > a')
  end

  it 'has a list of posts' do
    expect(page).to have_css('.cards > .card')
  end

   it 'has a google analytics container to track traffic' do
    expect(page).to have_css('.analytics')
   end
end
