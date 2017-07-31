---
layout: page
title: About
permalink: /about/
js:
     - js/about.js
     - lib/p5.js
---

<div id="sketch-holder" style="width:800px; margin:0 auto; justify-content: center; align-items: center;"/>

{% for js in page.js %}
<script type="text/javascript">
{% include {{ js }} %}
</script>
{% endfor %}
