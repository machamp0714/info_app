class Api::OgpController < ApplicationController
  def ogp
    response = Faraday.get(params[:url])
    ogp = OGP::OpenGraph.new(response.body)

    result = {
      title: ogp.title,
      url: ogp.url,
      description: ogp.description
    }

    render json: result, status: :ok
  end
end
