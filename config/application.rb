require File.expand_path('../boot', __FILE__)

# Pick the frameworks you want:
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module NrsInvoices
  class Application < Rails::Application
    config.autoload_paths += %W(#{config.root}/lib)
    require 'ext/string'
    # bootstrap-sass asset paths
    root.join('vendor/assets/components/bootstrap-sass/assets').tap do |path|
      config.sass.load_paths << path.join('stylesheets')
      config.assets.paths += %w(javascripts fonts images).map(&path.method(:join))
      
      # include Bower components in compiled assets
    config.assets.paths << Rails.root.join('vendor', 'assets', 'components')
    end

    # via https://github.com/sstephenson/sprockets/issues/347#issuecomment-25543201

    # We don't want the default of everything that isn't js or css, because it pulls too many things in
    config.assets.precompile.shift

    # Explicitly register the extensions we are interested in compiling
    config.assets.precompile.push(Proc.new do |path|
      File.extname(path).in? [
        '.html', '.erb', '.haml',                 # Templates
        '.png',  '.gif', '.jpg', '.jpeg', '.svg', # Images
        '.eot',  '.otf', '.svc', '.woff', '.ttf', # Fonts
      ]
    end)
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
  end
end
