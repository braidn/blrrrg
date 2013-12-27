require File.dirname(__FILE__) + "/../acceptance_helper"

describe 'A Random Post Button' do
  before do
    visit '/'
  end

  it 'links a new or random post on refresh' do
    click_link 'random'
    previous_post_path = current_path
    visit page.driver.request.env['HTTP_REFERER']
    click_link 'random'
    expect(previous_post_path).not_to eq current_path
  end
end
