require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "POST /users" do
    context "when params invalid" do
      it "should return 422 status code" do
        post users_path, params: invalid_params

        expect(response).to have_http_status :unprocessable_entity
      end
    end
  end
end
