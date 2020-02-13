require 'test_helper'

class Api::GuildMembershipsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_guild_memberships_index_url
    assert_response :success
  end

  test "should get create" do
    get api_guild_memberships_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_guild_memberships_destroy_url
    assert_response :success
  end

end
