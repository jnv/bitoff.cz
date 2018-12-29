source "https://rubygems.org"

gem 'github-pages', group: :jekyll_plugins

# TODO: Remove for Jekyll 3.7
group :jekyll_plugins do
    gem "jekyll-livereload"
end

group :development do
  gem "forematter", git: "https://github.com/jnv/forematter", require: false
end
