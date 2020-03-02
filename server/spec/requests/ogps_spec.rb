require "rails_helper"

RSpec.describe "Ogp", type: :request do
  describe "GET /ogp" do
    context "when success get ogp" do
      subject(:success_request) { post api_ogp_path, params: params }

      let(:params) { { url: "https://github.com/jcouture/ogp" } }
      let(:proper_response) do
        {
          "data" => {
            "title" => "jcouture/ogp",
            "url" => "https://github.com/jcouture/ogp",
            "description" => "Simple Ruby library for parsing Open Graph prototocol information. See http://ogp.me for more information. - jcouture/ogp"
          },
          "url" => "https://github.com/jcouture/ogp"
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

    context "when don't find attribute" do
      subject(:request_not_found) { post api_ogp_path, params: params }

      let(:params) { { url: "https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%99%E4%BA%BA%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AERuby%E5%85%A5%E9%96%80-%E8%A8%80%E8%AA%9E%E4%BB%95%E6%A7%98%E3%81%8B%E3%82%89%E3%83%86%E3%82%B9%E3%83%88%E9%A7%86%E5%8B%95%E9%96%8B%E7%99%BA%E3%83%BB%E3%83%87%E3%83%90%E3%83%83%E3%82%B0%E6%8A%80%E6%B3%95%E3%81%BE%E3%81%A7-Software-Design-plus%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA/dp/4774193976/ref=pd_rhf_gw_p_img_2?_encoding=UTF8&psc=1&refRID=5R3X64KM3DRCC0TS5NJZ" } }

      it "return 404 status code" do
        request_not_found

        expect(response).to have_http_status :not_found
      end

      it "return proper json" do
        request_not_found

        expect(json).to include(
          "url" => "https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%99%E4%BA%BA%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AERuby%E5%85%A5%E9%96%80-%E8%A8%80%E8%AA%9E%E4%BB%95%E6%A7%98%E3%81%8B%E3%82%89%E3%83%86%E3%82%B9%E3%83%88%E9%A7%86%E5%8B%95%E9%96%8B%E7%99%BA%E3%83%BB%E3%83%87%E3%83%90%E3%83%83%E3%82%B0%E6%8A%80%E6%B3%95%E3%81%BE%E3%81%A7-Software-Design-plus%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA/dp/4774193976/ref=pd_rhf_gw_p_img_2?_encoding=UTF8&psc=1&refRID=5R3X64KM3DRCC0TS5NJZ"
        )
      end
    end
  end
end
