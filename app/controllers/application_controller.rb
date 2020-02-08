class ApplicationController < ActionController::Base
  
  helper_method :current_member, :logged_in?
  def current_member
    return nil unless session[:session_token]
    @current_member ||= Member.find_by(session_token: session[:session_token])
  end

  def ensure_logged_in
    redirect_to new_session_url unless current_member
  end

  def login(member)
    session[:session_token] = member.session_token
  end
  
  def logout
    current_member.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_member
  end
end
