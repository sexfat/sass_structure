## 1 install node.js

https://nodejs.org/en/




## 2 install sass

###mac

<code>sudo gem install sass</code>




###pc installer

1. Install Ruby installer
2. <code>gem install sass</code>




## 3 Install grunt

<code>npm install -g grunt-cli</code>




## 4 plugins install

<code>npm i</code>




##Sass Structure

```
sass/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Typography rules
|   |– _variables.scss   # Sass Variables
|   |– _color.scss       # Sass Variables color
|   ...                  # Etc…
|
|– components/
|   |– _buttons.scss     # Buttons
|   ...                  # Etc…
|
|– layout/
|   |– _navigation.scss  # Navigation
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   |– _forms.scss       # Forms
|   ...                  # Etc…
|
|– pages/
|   |– _home.scss        # Home specific styles
|   |– _about.scss       # about specific styles
|   |– _contact.scss     # Contact specific styles
|   ...                  # Etc…
|
|– mixins/
|– - mixin/..            # Sass mixin group
|   |– _mixins.scss      # Sass Mixins
|   |– _helpers.scss     # Class & placeholders helpers
|

|– animation/
|– - animation/..        # Sass animation group
|   |– animation.scss   # Sass animation styles
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # Etc…
|
|
`– style.scss            # Primary Sass file
`– animation.scss        # animation Sass file
```
