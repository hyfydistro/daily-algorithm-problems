# YouTube Data API & YouTube IFrame Player API

\#Third Party API #RESTful API

See YouTube Video search example.

* The _YouTube Data API_ to search for YouTube Videos and return results.
* The _YouTube IFRAME Player API_ to display the returned video examples inside IFrame video players so you can watch them.

It shows two related third-party APIs being used together to build an app. Both of the APIs require a JavaScript library to be applied to the page. The RESTful API has functions available to handle making the HTTP requests and returning the results.

## Prerequisites

* Get an API Key from _Google Cloud_.

To get a key for your own application:
1. Go to https://console.cloud.google.com/apis/dashboard
2. Create a new project if you've not already got one
3. Click the Enable API button
4. Choose YouTube Data API
5. Click the Enable button
6. Click create credentials
7. Select "web browser (JavaScript)" from the second dropdown
8. Click the "Public data" radio button
9. Click the "What credentials do I need?" button
10. Copy your API key and past it in the following:

        gapi.client.setApiKey('[Enter API Key Here]');

> We recommend restricting this key before using it in production. Restrictions limit which web sites, IP addresses, or apps can call APIs with this key.

_See how to 'restrict' your API key._

* Run the example through a web server. It won't work if you just run it directly in the browser (i.e. via a `file://` URL).

## Keynotes

* The YouTube Data API lets you incorporate functions normally executed on the YouTube website into your own website or application.

* YouTube Player API Reference for iframe Embeds

The IFrame player API lets you embed a YouTube player on your website and control the player using JavaScript.

Using the API's JavaScript functions, you can queue videos for playback; play, pause, or stop those videos; adjust the player volume; or retrieve information about the video being played. You can also add event listeners that will execute in response to certain player events, such as a player state change.

* There is an error in the console:

        Failed to execute 'postMessage' on 'DOMWindow': The target origin provided ('<URL>') does not match the recipient window's origin ('<URL>').

It looks like it require talking to the server (which Im not sure of yet).

[Unsolved Error]

Suggestions:

[Solution #1](https://stackoverflow.com/questions/27573017/failed-to-execute-postmessage-on-domwindow-https-www-youtube-com-http)

[Solution #2](https://stackoverflow.com/questions/47833687/youtube-api-failed-to-execute-postmessage-on-domwindow)

Solution #3

Run it on the web server. It won't work if you just run it directly in the browser (i.e. via a file:// URL). Try Githubpages

[Unsolved Error]

## Credits

- _MDN_ - Third Party APIs

- YouTube API - [API Reference](https://developers.google.com/youtube/v3/docs/)

- YouTube API - [YouTube Player API Reference for iframe Embeds](https://developers.google.com/youtube/iframe_api_reference)

- YouTube Google Cloud Platform
