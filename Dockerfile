FROM ruby:2.5.0-alpine
MAINTAINER Braden Douglass <braden@glossier.com>
ENV REFRESHED_AT 2018-03-12
ENV REPO_DIR /src/repo
ENV GEM_HOME /src/bundle

RUN mkdir -p $GEM_HOME $REPO_DIR

WORKDIR $REPO_DIR
# Copy the rest of the app
ADD . $REPO_DIR
COPY Gemfile* $REPO_DIR/

ENV BUNDLE_GEMFILE=$REPO_DIR/Gemfile \
    BUNDLE_JOBS=6 \
    BUNDLE_PATH=$GEM_HOME \
    GEM_PATH=$GEM_HOME

RUN \
  apk --update --upgrade add build-base libffi-dev && \
  gem install -N bundler

RUN echo 'gem: --no-document' >> ~/.gemrc && \
  # cleanup and settings
  find / -type f -iname \*.apk-new -delete && \
  rm -rf /var/cache/apk/* && \
  rm -rf /usr/lib/lib/ruby/gems/*/cache/* && \
  rm -rf ~/.gem
