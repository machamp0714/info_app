class Api::OgpController < ApplicationController
  def ogp
    begin
      response = Faraday.get(params[:url])
      ogp = OGP::OpenGraph.new(response.body)
      result = {
        title: ogp.title,
        url: ogp.url,
        description: ogp.description
      }

      render json: { data: result, url: params[:url] }, status: :ok
    rescue OGP::MissingAttributeError, OGP::MalformedSourceError, ArgumentError, Faraday::ConnectionFailed
      render json: { url: params[:url] }, status: :not_found
    end
  end
end
