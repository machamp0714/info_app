module UserAuthenticator
  def login(user)
    session[:access_token] = user.access_token.token
  end
end