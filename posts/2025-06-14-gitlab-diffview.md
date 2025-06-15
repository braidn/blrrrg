---
title: GitLab Diffview
date: '2025-06-14'
---

Recently, we've moved all our managed [Git][git] repositories over to [GitLab][glb].
Originally the spirit of the plan: use their self hosted option but,
eventually the org saw the light and went to their enterprise system.
Having never used [GitLab][glb] all that much,
I never once thought that I would be deactivating [syntax highlighting][syn].

GitLab's DiffView,
especially when working through any kind of code review,
seems to break my brain. An example of this view can be [found at this link][dif].
For an unknown reason,
these colors and (the shade of green and red to highlight changes),
along with the colors of the HTML,
create massive difficulties for me to discern positive and negative changes.

Daily I find myself writing feedback to someone's code that is
actually a bit that's being removed.
Due to this constant confusion,
I have tweaked the overall colors of the added/removed files,
attempted to increase the overall contrast of the coloring,
and just recently completely disabled [syntax highlighting][syn] to perhaps fix the issue.

This of course could be my aging eyes but,
I continue to do just fine with [GitHub][ghb].
What this comes down to though is a suboptimal view of code when
a developer may need it the most (during code review).
If you struggle with this and have come up with a solid solution,
feel free to reach out on [Mastodon][mst] and let's chat.


[git]: https://git-scm.com/
[glb]: https://about.gitlab.com/
[syn]: https://en.wikipedia.org/wiki/Syntax_highlighting
[dif]: https://about.gitlab.com/images/12_2/diff-expansion.png
[ghb]: https://github.com/
[mst]: https://ruby.social/@braidn

