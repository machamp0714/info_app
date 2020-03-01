class Api::OgpController < ApplicationController
  def ogp
    response = Faraday.get(params[:url])
    begin
      ogp = OGP::OpenGraph.new(response.body)
      result = {
        title: ogp.title,
        url: ogp.url,
        description: ogp.description
      }

      render json: { data: result, url: params[:url] }, status: :ok
    rescue OGP::MissingAttributeError, OGP::MalformedSourceError
      render json: { url: params[:url] }, status: :not_found
    end
  end
end
