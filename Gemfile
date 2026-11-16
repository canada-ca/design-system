source "https://rubygems.org"
# Use major.minor from .ruby-version ("3.2", "3.2.3" or "ruby-3.2.3"). "~> X.Y.0" accepts any X.Y patch.
ruby_minor = File.read(File.join(__dir__, ".ruby-version"))[/\d+\.\d+/] or
  raise "Cannot read a Ruby version (for example 3.2) from .ruby-version"
ruby "~> #{ruby_minor}.0"
gem "jekyll", "~> 4.3"
gem "jekyll-remote-theme", github: "benbalter/jekyll-remote-theme", branch: "master"

# Some stdlib libraries (logger, csv) are required by Jekyll and newer Ruby
# installations may warn or fail if they're not explicitly included in the
# bundle on some CI builders (Netlify's Ruby setup in particular). Include
# them here so Bundler ensures a compatible copy is available during build.
gem 'logger'
gem 'csv'
gem 'base64'
gem 'bigdecimal'
# Ensure rake is available for native gem builds (e.g. google-protobuf)
gem 'rake', '>= 0.a'
