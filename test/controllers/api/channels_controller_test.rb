require 'test_helper'

class Api::ChannelsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_channels_create_url
    assert_response :success
  end

end
