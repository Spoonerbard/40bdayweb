# The Birthday Briefing

A mobile-first, static guest-information site for a Taskmaster-themed 40th birthday celebration. It uses plain HTML, CSS and JavaScript and has no build step or third-party dependencies.

## Personalise the briefing

Edit `index.html` and replace its bracketed values, including the guest name, date, arrival window, venue and address, travel details, dress code, food and drink, RSVP deadline, and organiser contact information. Also complete or remove the bracketed guidance on `rules.html` before sharing it.

Before sharing the site:

1. Replace the map link's `VENUE+ADDRESS` with the venue's location.
2. Replace the RSVP button URL (`https://example.com/replace-with-rsvp-form`) with the real form or RSVP destination.
3. Replace the dietary contact email placeholder with a working address.
4. Set `data-event-date` on the countdown element to the event's start date and time in ISO 8601 format, including its UTC offset, for example `2027-06-12T18:30:00+01:00`. Leave it empty until the date is confirmed.

The countdown deliberately displays “Event date to be announced” while its date is unset. The task envelopes use native `<details>` elements, so they remain usable without JavaScript.

## Tasks and rules

- The task catalogue is at `tasks/index.html` (visit `/tasks/`). It starts empty until task briefings are added.
- To add a task, copy `tasks/task-template.html` to a new file in `tasks/` (for example, `task-01.html`), replace its bracketed content and page title, and add a link for it in `tasks/index.html`.
- Keep new task pages beside the template so their `../assets/css/style.css` and links back to `./` continue to resolve.
- When the first task is ready, remove the catalogue's empty-state section and add links inside a `<div class="task-index">`, using the existing card classes. For example:

  ```html
  <a class="task-card" href="./task-01.html">
    <span class="task-card__number">Task 01</span>
    <span class="task-card__title">[TASK TITLE]</span>
    <span class="task-card__description">[SHORT TASK DESCRIPTION]</span>
    <span class="task-card__seal" aria-hidden="true">Open</span>
  </a>
  ```

- The separate gameplay rules page is `rules.html`. Replace its bracketed guidance with the organiser's final rules, or remove sections that are not needed. Event logistics remain on the home page.
- The template is a starting point, not an issued task; link only completed task pages from the public catalogue.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.

The page and asset URLs are relative, so the site also works when published under a repository subpath. GitHub Pages will provide the published URL in the Pages settings.
