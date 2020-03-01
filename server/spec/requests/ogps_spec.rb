require "rails_helper"

RSpec.describe "Ogp", type: :request do
  describe "GET /ogp" do
    context "when success get ogp" do
      subject(:success_request) { get api_ogp_path, params: { url: "https://github.com/jcouture/ogp" } }

      let(:proper_response) do
        {
          "title" => "jcouture/ogp",
          "url" => "https://github.com/jcouture/ogp",
          "description" => "Simple Ruby library for parsing Open Graph prototocol information. See http://ogp.me for more information. - jcouture/ogp"
        }
      end

      it "return 200 status code" do
        success_request

        expect(response).to have_http_status :ok
      end

      it "return proper json data" do
        success_request

        expect(json).to include(proper_response)
      end
    end
  end
end
