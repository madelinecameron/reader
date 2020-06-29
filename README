# Reader

> For people who don't read gud

According to many and evidenced by the many times I misunderstand sentences, I apparently struggle with slowing down and reading things.

In addition, I am by far an auditory learner.

This simple site is intended to be a self-hosted text-to-speech + speed-reading site. I never felt comfortable pasting text into a public site.

Google is the only one in the loop (It uses Google's text-to-speech), but I trust Google more than some random site.

## Set up
1. Have server with nginx and supervisor installed
	a. Alternatively, you can run `./startup` in the scripts folder
2. Have SSH access to server
3. Replace variables with proper variables in `.profile`
	a. For GOOGLE_APPLICATION_CREDENTIALS:
	https://www.npmjs.com/package/@google-cloud/text-to-speech#before-you-begin
4. Add your `server_name` param to `infra/reader` (nginx conf)
5. Replace 0.0.0.0 with your server's IP in `provision` along with the path to the SSH key
6. `./provision`
7. Replace 0.0.0.0 with your server's IP in `deploy` along with the path to the SSH key
8. `./deploy`
9. Replace "reader.domain.com" in `server/index.js` with your own domain

Or do it your way, I dunno.

## How to use it

Paste text into the text box, push "Read" button

## Disclaimer

I take no responsibility if you paste something super secret into this and it leaks out. It probably won't, but this isn't completely self-isolated

Be reasonable and thoughtful.
