require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "POST /users" do
    context "when params invalid" do
      let(:invalid_params) do
        {
          user: {
            name: "",
            email: "",
            password: ""
          }
        }
      end
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

    context "when valid params" do
      let(:user) { build :user }
      let(:valid_params) do
        {
          user: {
            name: user.name,
            email: user.email,
            password: user.password
          }
        }
      end

      subject { post api_users_path, params: valid_params }

      it "should return 201 status code" do
        subject

        expect(response).to have_http_status :created
      end

      it "should return json body" do
        subject

        expect(json).to include({
          "name" => user.name,
          "email" => user.email
        })
      end
    end
  end
end
