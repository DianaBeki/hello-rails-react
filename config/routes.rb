Rails.application.routes.draw do
  get 'greetings/index'
  root 'root#index'
  resources :greetings, only: [:index] do
  end
  
end
