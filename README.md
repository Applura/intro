# Introduction

If you are a new Applura user, welcome! **You've found Applura's introductory front-end application.** It's the first
front-end your project will use. **You can replace it at any time**, and you're not required _or expected_ to use it.

**We provide this project as a simple demonstration** of a few key features and best-practices to know when developing a
front-end application on Applura. If ever you have a question or concern, please don't hesitate to [open a new issue](https://github.com/Applura/intro/issues/new)!

When you're ready to build your own application, **you can start here or start from scratch** or dive into our
[examples](https://github.com/Applura/release-examples) of more representative, "real-world" applications for inspiration.

## Overview

This project contains a fully-functioning client and server-side rendered front-end application. It uses React and
webpack as a _lingua franca_, but Applura can be used with your favorite tools. **You are not required to use React or
webpack** for your front-end application. The **code in this project also contains comments** intended to introduce
you to key concepts and considerations.

Source code is bundled into **two critical files**. They are:

- `dist/main.js`: The client-side version of your application. Configured via `webpack.config.cjs`.
- `dist/render.js`: The server-side version of your application. Configured via `webpack.config.server.cjs`.

## Architecture

This application uses a root component named `App`.

`App` receives a `resource` object provided by [Applura's official JavaScript client](https://github.com/Applura/client)
and renders the appropriate page/screen of your application for that resource. Each resource corresponds to a single
URL that can be customized via the management UI.

Notably, this application does _not_ use client-side routing. This is an important _feature_ of Applura applications.
This decouples your front-end code from the structure and mechanics of your application, so you can focus entirely on
presentation and interaction. Instead of using hard-coded URL patterns to determine which components of your application
to render, every `resource` object has a `type` parameter. These correspond to your application's resource types built
in the management UI.

### Client-side specifics

The Applura JavaScript client is instantiated by importing a `bootstrap` function in `src/index.js`. This reads dynamic
data in the `<head>` of the HTML to find the URL of the initial resource to load.

After bootstrapping the client, it is important to `start` and `stop` the client. An example is provided in
`src/components/socket.jsx`. The `Socket` component in that file integrates the `App` component with the Applura
client.

### Server-side specifics

This application will be automatically rendered by Applura's infrastructure before it is delivered to end-users. This
is enabled by including a file named `render.js` in root of the deployment artifact uploaded in the management UI.

The `render.js` file **MUST** `export` a function named `render`. That function **MUST** accept a `resource` object and
**MUST** return a string containing the HTML of your application's root component. The string returned by `render` will
be injected into your `index.html` file's `<div id="app">` element. It **SHOULD** render HTML even if an error is
encountered to provide a better experience for your end-users.

## Callouts

[Open an issue](https://github.com/Applura/intro/issues/new) to tell us what deserves a callout. What do you wish
you knew up front?
