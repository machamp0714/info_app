# frozen_string_literal: true

class ErrorsSerializer
  def initialize(model)
    @model = model
  end

  def serialized_json
    errors = @model.errors.messages.map do |attribute, messages|
      messages.map do |error_message|
        {
          source: attribute.to_s,
          message: error_message
        }
      end
    end
    errors.flatten
  end
end
