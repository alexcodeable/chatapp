class Message < ApplicationRecord
    belongs_to :user

    scope :custom_results, -> { order(:created_at).last(20)}
end
