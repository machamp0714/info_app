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

      render json: result, status: :ok
    rescue OGP::MissingAttributeError, OGP::MalformedSourceError
      render json: {}, status: :not_found
    end
  end
end
