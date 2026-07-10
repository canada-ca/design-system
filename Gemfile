source "https://rubygems.org"
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
