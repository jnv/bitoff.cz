# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) { |repo_name| "https://github.com/#{repo_name}" }

gem 'github-pages', '~> 226', group: :jekyll_plugins

group :development do
  gem "forematter", git: "https://github.com/jnv/forematter", require: false
end
