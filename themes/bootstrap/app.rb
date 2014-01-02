# Use the app.rb file to load Ruby code, modify or extend the models, or
# do whatever else you fancy when the theme is loaded.
require 'date'

module Nesta
  class App
    # Uncomment the Rack::Static line below if your theme has assets
    # (i.e images or JavaScript).
    #
    # Put your assets in themes/bootstrap/public/bootstrap.
    #
    use Rack::Static, :urls => ["/components"], :root => "themes/bootstrap/public"
    Tilt.prefer Tilt::KramdownTemplate

    not_found do
      haml :error
    end

    helpers do
      def container
        if @page && @page.flagged_as?('fluid')
          'container-fluid'
        else
          'container'
        end
      end

      def random_post_path
        randomPost = rand(Nesta::Page.find_articles.length)
        Nesta::Page.find_articles[randomPost].abspath
      end
    end

    # Add new routes here.
  end
end
