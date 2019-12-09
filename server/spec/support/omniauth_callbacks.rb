# frozen_string_literal: true

module OmniauthCallbacks
  def google_hash
    {
      "provider" => "google_oauth2",
      "uid" => "123456789",
      "info" => {
        "name" => "sampleuser",
        "email" => "sampleuser@gmail.com",
        "image" => "https://lh3.googleusercontent.com/a-/AAuE7mCMN705AGgF7qq2SXlibyrQ0Y7bVR7XRpJQBb1ulQ"
      }
    }
  end

  def omniauth_params
    {
      "namespace_name" => "api",
      "resource_class" => "User"
    }
  end
end
