Rails.application.routes.draw do
  resources :messages, Only: [:new, :create, :destroy ]
  devise_for :users
  devise_scope :user do
    get 'sign_up', to: 'devise/registrations#new'
    post 'sign_up', to: 'devise/registrations#create'
    root 'devise/sessions#new'
    get 'sign_in', to: 'devise/sessions#new'
    post 'sign_in', to: 'devise/sessions#create'
    get 'sign_out', to: 'devise/sessions#destroy', as: :sign_out
    delete 'sign_out', to: 'devise/sessions#destroy'
    get 'profile/edit', to: 'devise/registrations#edit'
    get 'forget-pass', to: 'devise/passwords#new'
  
  end
  get 'chatroom', to: 'chatroom#index'
  get 'info', to: 'chatroom#info'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
