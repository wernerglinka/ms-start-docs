# `ms-start-docs ` built notes

## Modifications to the original template files
Since we are using precompiled templates, some modifications to the original template files are required. 

All files that use Nunjuck's `include` statement need to be modified to be used in precompiled templates.

### `text.njk`
**From**
```njk
<div class="text-wrapper section-inner">
  {% include "params/particles/text.njk" %}
  {% include "params/particles/ctas.njk" %}
</div>
```
**To**
```njk
<div class="text-wrapper section-inner">
  {% include "sections/particles/text.njk" %}
  {% include "sections/particles/ctas.njk" %}
</div>
```

### `icon.njk`
For icons the whole icons folder needed to be moved into the sections folder as the sections folder is the root folder for the precompiled templates.
**From**
```njk
<div class="icon-wrapper section-inner">
  {% include "../icons/" + params.icon.name + ".njk" ignore missing %}
  <p class="caption">{{ params.icon.caption }}</p>
</div>

```
**To**
```njk
<div class="icon-wrapper section-inner">
  {% include "icons/" + section.icon.name + ".njk" ignore missing %}
  <p class="caption">{{ section.icon.caption }}</p>
</div>

```

### `lottie.njk`
The lottie player script was moved to 'layouts.njk'.
```html
<script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></script>
```

## Adding new sections

- Add the new section layout files to `layouts/sections` and modify them to use the precompiled templates.
- Add the original template files to `layputs/page-sections`.`