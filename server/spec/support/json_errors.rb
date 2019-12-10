require "rails_helper"

shared_examples_for "unauthorized_error" do
  it "return 401 status code" do
    subject

    expect(response).to have_http_status :unauthorized
  end

  it "return proper errors json" do
    subject

    expect(json).to include(
      "errors" => ["アカウント登録もしくはログインしてください。"]
    )
  end
end

shared_examples_for "forbidden_error" do
  it "return 403 status code" do
    subject

    expect(response).to have_http_status :forbidden
  end

  it "return proper errors json" do
    subject

    expect(json).to include(
      "status" => 403,
      "message" => "権限がありません"
    )
  end
end

shared_examples_for "not_found_error" do
  it "return 404 status code" do
    subject

    expect(response).to have_http_status :not_found
  end

  it "return proper errors json" do
    subject

    expect(json).to include(
      "status" => 404,
      "message" => "Not found"
    )
  end
end
