require 'test_helper'

class ChannelsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get channels_create_url
    assert_response :success
  end

end
