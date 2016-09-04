require 'stringex'
require 'thor'

class Post < Thor # :nodoc:
  desc 'new Title', 'Create a Post'
  method_option :date, aliases: '-d',
                       default: Time.now.strftime('%Y-%m-%d'),
                       desc: 'Overide the current date as the post timestamp'
  def new(*title)
    title = title.join(' ')
    filename = "_drafts/#{options[:date]}-#{title.to_url}.md"

    abort("#{filename} already exists") if File.exist?(filename)

    build_post_frontmatter(filename, title)
    puts "Successfully created new post: #{filename}"
  end

  private

  def build_post_frontmatter(filename, title)
    open(filename, 'w') do |post|
      post.puts '---'
      post.puts 'layout: post'
      post.puts 'published: false'
      post.puts "title: #{title}"
      post.puts "tags: 'some, tags, separated, by, commas'"
      post.puts '---'
    end
  end
end
