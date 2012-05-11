# Use the app.rb file to load Ruby code, modify or extend the models, or
# do whatever else you fancy when the theme is loaded.

module Nesta
  class App
    # Uncomment the Rack::Static line below if your theme has assets
    # (i.e images or JavaScript).
    #
    # Put your assets in themes/nesta-matic/public/nesta-matic.
    #
    use Rack::Static, :urls => ["/nesta-matic"], :root => "themes/nesta-matic/public"

    helpers do
      # Add new helpers here.
      def load_snippet(file)
         File.new(file).read if File.exist? file
      end
    end

    # Add new routes here.
    get "/stylesheets/:sheet.css" do
      content_type "text/css", :charset => "utf-8"
      cache scss(params[:sheet].to_sym)
    end
  end
end
