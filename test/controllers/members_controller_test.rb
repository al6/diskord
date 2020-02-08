require 'test_helper'

class MembersControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get members_create_url
    assert_response :success
  end

end
