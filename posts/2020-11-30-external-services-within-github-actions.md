---
title: Running Service Containers in GitHub Actions
date: '2020-11-30'
---

Recently I have been exploring [Sorbet][sb] in a hyper small [e-commerce project][om].
The impetus of the project is to strip the complexity out of running a custom store.
To accomplish this,
I opted to drive all product info into Stripe (along with the obvious orders and pricing).
In the past, many of my projects utilized the [Stripe Mock gem][sm].
While the gem works great,
it seems to be a bit long in the tooth and not a first class citizen from the Stripe folks.

Turns out that those aformentioned Stripe folks [maintain a mock server][ss].
Even better? That mock server is completely containerized.
This means that any application,
no matter the language,
can access a mock server that's _always_ up-to-date.
Getting this wired up locally was a breeze however,
the project's CI runs on [GitHub Actions][ga].

Although GitHub's Actions yaml file resembles a Docker Compose file,
I struggled to get the tests to be able to connect to the running Stripe Mock container.
After doing a bit further digging,
It appears that the conventional action setup runs each task on the VM that hosts the job.
When using a container name and image,
then the actions use the containerized environment; much like Docker Compose.

Although each action runtime exposes their port and url differently,
they both can access services created from Docker images.
When running conventional actions (without the container declaration),
the services all run at `localhost` and on their designated ports.
This means the Stripe Mock library would be accessible at `localhost:12111`.
This is way different than if run in a container.

The containers version,
like Docker Compose,
will expose the container using the name of the service,
not localhost.
Both methods are fairly easy to configure however,
it seems the runtime differences are sparsly documented?
Below is an example of a GitHub Action file with a Stripe Mock server available at `localhost:12111`.

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    services:
      stripe:
        image: stripemock/stripe-mock:latest
        ports:
          - 12111:12111
        options: >-
          --health-cmd "curl -H 'Authorization: Bearer sk_test_nH1uriQSPitliwjtAuGugMvx' -sS http://stripe:12111/v1/products || echo exit 1"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    steps:
      - uses: actions/checkout@v2
      - name: Set up Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: 2.7
          bundler-cache: true
      - name: Install dependencies
        run: bundle install
      - name: Run tests
        run: bundle exec ruby -Itest -e 'Dir["./test/**/{test_*,*_test}.rb"].each &method(:require)' --
        env:
          STRIPE_API_KEY: sk_test_nH1uriQSPitliwjtAuGugMvx
          STRIPE_URL: localhost
```

**one more thing**...  
As a 'best practice' when building testing suites that rely on Docker containers,
It's often prudent to block _all_ external communication except to allowed sources.
This is a breeze using something like [WebMock][wm]:

```ruby
WebMock.disable_net_connect!(allow: "#{ENV['STRIPE_URL']}:12111")
```

Now there's zero chance that anyone can add test data to the real Stripe test instance.


[sb]: https://sorbet.org/
[om]: https://github.com/braidn/omura
[sm]: https://github.com/stripe-ruby-mock/stripe-ruby-mock
[ss]: https://github.com/stripe/stripe-mock
[ga]: https://github.com/features/actions
[wm]: https://github.com/bblimke/webmock
