class WorkspaceSerializer < ActiveModel::Serializer
  attributes :name

  belongs_to :user
end
