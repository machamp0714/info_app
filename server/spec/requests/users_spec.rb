require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "POST /users" do
    let(:invalid_params) do
      {
        user: {
          name: "",
          email: "",
          password: ""
        }
      }
    end

    context "when params invalid" do
      subject { post api_users_path, params: invalid_params }

      it "should return 422 status code" do
        subject

        expect(response).to have_http_status :unprocessable_entity
      end

      it "should return errors json" do
        errors = {
          "errors" => {
            "password" => [
              "can't be blank",
              "is too short (minimum is 8 characters)"
            ],
            "name" => [
              "can't be blank"
            ],
            "email" => [
              "can't be blank",
              "is invalid"
            ]
          }
        }
        subject

        expect(json).to eq errors
      end
    end
  end
end
