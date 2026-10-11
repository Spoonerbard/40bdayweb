# The Birthday Briefing

A mobile-first, static guest-information site for a Taskmaster-themed 40th birthday celebration. It uses plain HTML, CSS and JavaScript and has no build step or third-party dependencies.

## Personalise the briefing

Edit `index.html` and replace every bracketed value, including the guest name, date, arrival window, venue and address, travel details, dress code, food and drink, RSVP deadline, and organiser contact information.

Before sharing the site:

1. Replace the map link's `VENUE+ADDRESS` with the venue's location.
2. Replace the RSVP button URL (`https://example.com/replace-with-rsvp-form`) with the real form or RSVP destination.
3. Replace the dietary contact email placeholder with a working address.
4. Set `data-event-date` on the countdown element to the event's start date and time in ISO 8601 format, including its UTC offset, for example `2027-06-12T18:30:00+01:00`. Leave it empty until the date is confirmed.

The countdown deliberately displays “Event date to be announced” while its date is unset. The task envelopes use native `<details>` elements, so they remain usable without JavaScript.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.

The page and asset URLs are relative, so the site also works when published under a repository subpath. GitHub Pages will provide the published URL in the Pages settings.
