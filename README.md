# Reader

> For people who don't read gud

As attested by many, I suck at staying focused on reading. This is a self-hosted site that uses Google's WaveNet to read to me.

Use it if you trust me or setup your own thing.

Generated MP3s (and therefore what you type) are retained for 24 hours until the server clears out the folder.

## Set up
1. Have server with nginx and supervisor installed

	a. Alternatively, you can run `./startup` in the scripts folder

2. Have SSH access to server
3. Replace variables with proper variables in `.profile`

	a. For GOOGLE_APPLICATION_CREDENTIALS:
	https://www.npmjs.com/package/@google-cloud/text-to-speech#before-you-begin

4. Run `make browser`
5. Add your `server_name` param to `infra/reader` (nginx conf)
6. Replace 0.0.0.0 with your server's IP in `provision` along with the path to the SSH key
7. `./provision`
8. Replace 0.0.0.0 with your server's IP in `deploy` along with the path to the SSH key
9. `./deploy`
10. Replace "reader.domain.com" in `server/index.js` with your own domain

Or do it your way, I dunno.

## How to use it

Paste text into the text box, push "Read" button

## Disclaimer

I take no responsibility if you paste something super secret into this and it leaks out. It probably won't, but this isn't completely self-isolated.

Be reasonable and thoughtful.
