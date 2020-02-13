require 'test_helper'

class Api::GuildsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_guilds_index_url
    assert_response :success
  end

  test "should get create" do
    get api_guilds_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_guilds_destroy_url
    assert_response :success
  end

end
