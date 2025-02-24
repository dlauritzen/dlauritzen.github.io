---
layout: page
title: About Me
permalink: /about-me
---

Hey, you've found my website! Good for you. Odds are you already know me, but then, why are you reading this?

I'm an Android software engineer located in Seattle, Washington. I graduated from [BYU][1] with a BS in Computer Science in 2013 and now work for Google, but I'm a lazy bum by night and on weekends. Take a look at my [portfolio][2] for more details. I got interested in programming after learning basic webpage design in high school and taught myself for a few years before entering college. I love how programming combines creativity and problem solving with art.

I am now an atheist, though I was raised as a Mormon and served a brief proselytizing mission among the wonderful people of Hawaii in 2009. [This lengthy blog post][3] explains my religious story.

I am also gay. This blog in its current form began with my [coming-out][4] and chronicles my evolution ever since. I welcome questions about anything. Seriously, I need blog topics…

I'm a Ravenclaw at Hogwarts and a Wampus at Ilvermorny.

<ul class="social-media-list">
  {%- if site.bluesky_username -%}<li><a href="https://bsky.app/profile/{{ site.bluesky_username| cgi_escape | escape }}"><img class="svg-icon" src="/assets/icons/nucleo-bluesky.svg" /></a></li>{%- endif -%}
  
  {%- if site.facebook_username -%}<li><a href="https://www.facebook.com/{{ site.facebook_username| cgi_escape | escape }}"><img class="svg-icon" src="/assets/icons/nucleo-facebook.svg" /></a></li>{%- endif -%}
  
  {%- if site.instagram_username -%}<li><a href="https://instagram.com/{{ site.instagram_username| cgi_escape | escape }}"><img class="svg-icon" src="/assets/icons/nucleo-instagram.svg" /></a></li>{%- endif -%}

  {%- if site.twitter_username -%}<li><a href="https://www.x.com/{{ site.twitter_username| cgi_escape | escape }}"><img class="svg-icon" src="/assets/icons/nucleo-twitterx.svg" /></a></li>{%- endif -%}

  {%- for mst in site.mastodon -%}{%- if mst.username and mst.instance -%}<li><a href="https://{{ mst.instance| cgi_escape | escape}}/@{{mst.username}}"><img class="svg-icon" src="/assets/icons/nucleo-mastodon.svg" /></a></li>{%- endif -%}{%- endfor -%}

  {%- if site.linkedin_username -%}<li><a href="https://www.linkedin.com/in/{{ site.linkedin_username| cgi_escape | escape }}"><img class="svg-icon" src="/assets/icons/nucleo-linkedin.svg" /></a></li>{%- endif -%}
  
  {%- if site.github_username -%}<li><a href="https://github.com/{{ site.github_username| cgi_escape | escape }}"><img class="svg-icon" src="/assets/icons/nucleo-github.svg" /></a></li>{%- endif -%}

  {%- if site.youtube_username -%}<li><a href="https://youtube.com/{{ site.youtube_username| cgi_escape | escape }}"><img class="svg-icon" src="/assets/icons/nucleo-youtube.svg" /></a></li>{%- endif -%}

  {%- if site.rss -%}<li><a href="{{ 'feed.xml' | relative_url }}"><img class="svg-icon" src="/assets/icons/nucleo-rss.svg" /></a></li>{%- endif -%}
</ul>


[1]: http://byu.edu/ "Brigham Young University"
  {: .external target="_blank"}
[2]: {% link portfolio.md %}
[3]: {% post_url /2024/2024-09-30-exodus %}
[4]: {% post_url /2014/2014-05-01-no-more-secrets %}
