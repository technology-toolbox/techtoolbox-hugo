# Technology Toolbox Hugo theme

This repository contains the [Hugo](https://gohugo.io) theme used for the
Technology Toolbox website:
[https://www.technologytoolbox.com](https://www.technologytoolbox.com).

![Technology Toolbox responsive website](https://assets.technologytoolbox.com/website/img/theme-screenshots/responsive-website-2300x1400.jpg)

## Features

- Responsive design (mobile friendly)
- Site structure designed for hundreds (or even thousands) of blog posts
  organized by year/month/day
- Multiple taxonomies for blog content (view posts by tags, categories, or date)
- [Bootstrap 5](https://getbootstrap.com/) (for styles and components)
- [Bootstrap Icons](https://icons.getbootstrap.com/) (for small, inline SVG images)
- [Commento](https://commento.io/) (for blog comments)
- Uses [Cloudflare](https://www.cloudflare.com/) content delivery network (CDN)
  for third-party libraries
- Improved Google Analytics to support
  [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
  for reducing the risk of cross-site scripting (XSS) attacks
- Syntax highlighting for code samples

## Installation

1. If you are using Hugo for the first time, complete the Hugo
   [Quick Start](https://gohugo.io/getting-started/quick-start/) first.

   > Important: This theme requires
   > [installing the "extended" version of Hugo](https://gohugo.io/getting-started/installing/)
   > in order to compile Sass/SCSS.

1. Copy the theme to your website (or, better yet, clone the
   [repository for the Technology Toolbox website](https://github.com/technology-toolbox/website)
   and add the theme to your local copy):

   ```Shell
   git submodule add https://github.com/technology-toolbox/techtoolbox-hugo themes/techtoolbox-hugo
   ```

1. Specify the theme in the configuration file:

   ```TOML
   theme = "techtoolbox-hugo"
   ```

1. Install NPM dependencies:

   ```Shell
   pushd themes/techtoolbox-hugo
   npm install
   popd
   ```

   > Note: If you are working with a local copy of the Technology Toolbox
   > website, then you also need to install the NPM dependencies for the website
   > itself. Assuming you are in the _website_ folder, simply run:

   ```Shell
   npm install
   ```

1. Start the Hugo server:

   ```Shell
   hugo server
   ```

   or

   ```Shell
   npm start
   ```

1. Browse the website: [http://localhost:1313/](http://localhost:1313/)

## Site configuration

**config.toml**

```TOML
baseURL = "https://www.technologytoolbox.com/"
languageCode = "en-us"
title = "Technology Toolbox"
theme = "techtoolbox-hugo"

enableGitInfo = true

googleAnalytics = "UA-12345678-1"

[markup]
  [markup.highlight]
    noClasses = false # Use class attributes for code syntax highlighting

  [markup.goldmark.renderer]
    unsafe= true

[menu]

  [[menu.main]]
    identifier = "services"
    name = "Services"
    url = "/services"
    weight = 10

  [[menu.main]]
    identifier = "company"
    name = "Company"
    url = "/company"
    weight = 20

  [[menu.main]]
    identifier = "blog"
    name = "Blog"
    url = "/blog/jjameson"
    weight = 30

[permalinks]
  categories = "/blog/jjameson/category/:title/"

[social]
  github = "technology-toolbox"
  twitter = "techtoolbox_"
```

## Contributing

If you find a bug, have a question, or would like to submit a feature idea,
please use the
[issues list](https://github.com/technology-toolbox/techtoolbox-hugo/issues).

If you would like to contribute, please
[fork the repository](https://github.com/technology-toolbox/techtoolbox-hugo/fork) and make
the changes in a feature branch.
[Pull requests](https://github.com/technology-toolbox/website/pulls) are
welcome!

## License

This theme is released under the
[MIT License](https://github.com/technology-toolbox/techtoolbox-hugo/blob/main/LICENSE).
