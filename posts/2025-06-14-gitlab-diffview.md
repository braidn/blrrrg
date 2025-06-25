---
title: GitLab Diffview
date: '2025-06-14'
---

Recently, we've moved all our managed [Git][git] repositories over to [GitLab][glb].
Originally the plan was to use their self hosted option but,
eventually the org saw the light and settled on their enterprise solution.
Having never used [GitLab][glb] all that frequently,
the idea of deactivating [syntax highlighting][syn] wasn't top mind during this transition.

GitLab's [diff view][dfv],
especially when working through any sized code review,
seems to break my brain.
[This link][dif] contains a perfect example of the dilemma.
For an unknown reason,
these colors (the shade of green and red to highlight changes),
along with the colors of the HTML,
create a problem when discerning additions or subtractions to the code.

Often I find myself writing feedback to someone's code that looks to be an addition but,
is a removal.
Due to this constant confusion,
I have attempted the following potential solutions (in no order):

1. Tweaking the colors of the added/removed hunks,
1. Attempted to increase the contrast of the coloring of each diff hunk.
1. Deactivated all [syntax highlighting][syn].

all in an attempt to conquer this issue.

The concept of: 'aging eyes' could be at fault here but,
I continue to do just fine with [GitHub][ghb].
This view (in GitLab) is suboptimal at assisting engineers performing thorough code reviews.
If you struggle with this and have come up with a solid solution,
feel free to reach out on [Mastodon][mst] and fire up a chat.
I would love to be incorrect in my assertion.


[git]: https://git-scm.com/
[glb]: https://about.gitlab.com/
[syn]: https://en.wikipedia.org/wiki/Syntax_highlighting
[dif]: https://about.gitlab.com/images/12_2/diff-expansion.png
[ghb]: https://github.com/
[mst]: https://ruby.social/@braidn
[dfv]: https://diffcheck.io/

