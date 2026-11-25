# Ahmad's Personal Portfolio

This is the personal portfolio of Ahmad Abdullahi, live at **[ahmadabdullahi.com](https://ahmadabdullahi.com)**. It shows my design work and gives people a place to learn more about me.

The site is built with [Astro](https://astro.build) and hosted for free on GitHub Pages. Every time a change is merged into the `main` branch, the site rebuilds and goes live automatically, usually in about a minute.

This README is my manual for updating the site myself. Everything below can be done on the **GitHub website**, so you don't need to install anything.

---

## Contents

1. [How making a change works](#1-how-making-a-change-works)
2. [Editing on the GitHub website, step by step](#2-editing-on-the-github-website-step-by-step)
3. [Rules for editing text safely](#3-rules-for-editing-text-safely)
4. [Where everything lives](#4-where-everything-lives)
5. [Section-by-section guides](#5-section-by-section-guides)
   - [Hero (headline, supporting line, buttons, photo)](#hero)
   - [Navigation bar](#navigation-bar)
   - [Tools I've used](#tools-ive-used)
   - [My Work: project cards and case studies](#my-work-project-cards-and-case-studies)
   - [About Me](#about-me)
   - [When I'm not designing (game, beat, activities)](#when-im-not-designing)
   - [Experiences and resume](#experiences-and-resume)
   - [Certifications](#certifications)
   - [Contact card](#contact-card)
   - [Footer](#footer)
   - [Email, LinkedIn and other links](#email-linkedin-and-other-links)
   - [Browser tab title, Google description and share image](#browser-tab-title-google-description-and-share-image)
   - [Credits & licensing page](#credits--licensing-page)
   - [Colors and fonts](#colors-and-fonts)
6. [Images and audio: sizes and tips](#6-images-and-audio-sizes-and-tips)
7. [Pull requests, merging and undoing a change](#7-pull-requests-merging-and-undoing-a-change)
8. [If something breaks](#8-if-something-breaks)
9. [Domain and hosting reference](#9-domain-and-hosting-reference)
10. [Working on your computer (optional)](#10-working-on-your-computer-optional)

---

## 1. How making a change works

Every change follows the same five steps:

1. **Edit** a file (or upload a new image) on a separate *branch*, which is a safe copy of the site.
2. **Open a pull request (PR)**, a page that shows exactly what changed.
3. **Merge** the pull request into `main`.
4. GitHub **rebuilds** the site automatically (watch it under the **Actions** tab).
5. About a minute later the change is **live** on ahmadabdullahi.com.

If you ever make a mistake, nothing is lost. Every version is saved, and you can undo any merge (see [section 7](#7-pull-requests-merging-and-undoing-a-change)).

> **Tip:** you *can* commit straight to `main` for a tiny typo fix. Using a branch and pull request is safer, because a broken change never reaches the live site until you merge it.

---

## 2. Editing on the GitHub website, step by step

### Edit an existing file

1. Go to the repository: **github.com/ahmad-a01/personal-portfolio**.
2. Click through the folders to the file (for example `src` → `data` → `site.ts`).
3. Click the **pencil icon ✏️** ("Edit this file") at the top right of the file.
4. Make your change.
5. Click the green **Commit changes…** button.
6. In the pop-up:
   - Write a short message, like `Update currently playing game`.
   - Choose **"Create a new branch for this commit and start a pull request"**. GitHub suggests a branch name; that's fine.
   - Click **Propose changes**.
7. On the next page, click **Create pull request**.
8. Scroll down and wait a moment. Click **Merge pull request**, then **Confirm merge**.
9. Open the **Actions** tab. A run called "Deploy to GitHub Pages" appears. When it shows a green check ✅, your change is live. Refresh ahmadabdullahi.com to see it. On a phone you may need to pull down to refresh.

### Upload a new image or audio file

1. Open the folder where the file should go (for example `src/assets/images`).
2. Click **Add file** → **Upload files**.
3. Drag the file in.
4. Choose **"Create a new branch for this commit and start a pull request"** and click **Propose changes**.

> **Doing an upload *and* a text edit together?** After uploading on a new branch, stay on that branch: use the branch dropdown at the top left of the file list to switch to it. Then edit the file there. Both changes land in the same pull request, so they go live together.

### Replace an image with a new one of the same name

1. Upload the new file with **exactly the same name** (including `.jpg` or `.png`) into the same folder.
2. GitHub replaces the old one. No code changes are needed.

### Delete a file

1. Open the file.
2. Click the **⋯** menu at the top right, then **Delete file**.
3. Commit on a new branch and open a pull request, as above.

---

## 3. Rules for editing text safely

Most text lives in **`src/data/site.ts`**. It's a code file, so a few rules keep it from breaking.

- **Text sits inside single quotes:** `'like this'`. Change only what's *between* the quotes. Keep the quotes and the comma at the end of the line.
- **Apostrophes:** use the curly apostrophe **’** (as in `I’m`), not the straight `'`. A straight `'` inside a `'…'` text ends the text early and breaks the build. To be safe, copy one from this line: **’**
  - ✅ `'I’m always open to chat!'`
  - ❌ `'I'm always open to chat!'`
- **Quotation marks inside text:** use curly quotes “like this”.
- **Lists** are wrapped in `[ … ]` and every item is followed by a comma. When copying an item to add another, copy the whole `{ … },` including the comma.
- **Don't change the names on the left** of a colon, like `title:` or `href:`. The site looks those up by name. Only change the value on the right.
- **Links** must start with `https://`. For email, use `mailto:you@example.com`.

If you break something, the **Actions** run turns red ❌ and the live site **stays on the previous version**. Nothing breaks for visitors. See [section 8](#8-if-something-breaks).

---

## 4. Where everything lives

| What you want to change | File |
| --- | --- |
| Hero headline, supporting line and button labels | `src/data/site.ts` → `hero` |
| Contact card text and button labels | `src/data/site.ts` → `contact` |
| Navigation links | `src/data/site.ts` → `nav` |
| Email, resume link, LinkedIn and other links | `src/data/site.ts` → `site` and `socials` |
| About Me story, Now card and Education card | `src/data/site.ts` → `about` and `site.current` |
| Currently playing game, favorite beat, FL Studio link, activities | `src/data/site.ts` → `offTheClock` |
| Experiences list | `src/data/site.ts` → `experience` |
| Certifications | `src/data/site.ts` → `certificates`, with images in `src/assets/certificates/` |
| Tools I've used | `src/data/tools.ts` |
| Case studies (project pages and cards) | `src/content/projects/<project-folder>/index.mdx` |
| Home page photos | `src/assets/images/` |
| Beat audio files | `public/audio/` |
| Section headings ("My Work", "About Me", "Experiences") | `src/pages/index.astro` |
| "When I’m not designing" headings, chip labels and card labels | `src/components/OffTheClock.astro` |
| Footer | `src/components/Footer.astro` (text comes from `site.ts`) |
| Credits & licensing page | `src/pages/licensing.astro` |
| Colors, fonts and spacing | `src/styles/global.css` |
| Favicon and link-share image | `public/favicon.png`, `public/og-image.png` |

---

## 5. Section-by-section guides

### Hero

The hero is the first screen: the headline, a supporting line, two buttons and your round photo.

**Change the headline or supporting line:** open `src/data/site.ts` and find `hero`:

```ts
export const hero = {
  headlineStart: 'Designer, creative thinker, and builder based in ',
  headlineEmphasis: 'Indiana',
  headlineEnd: '.',
  subheading: 'Improving digital product experiences that feel right for the people who use them.',
  emailButton: 'Let’s Work',
  linkedinButton: 'Let’s Connect',
};
```

- The headline is shown as `headlineStart` + **`headlineEmphasis`** + `headlineEnd`. The emphasis part is shown in navy italics.
- To emphasize a different word, move it into `headlineEmphasis` and split the rest around it. Watch the spaces: `headlineStart` should end with a space if a word follows.
- If you don't want any word emphasized, put the whole sentence in `headlineStart` and set the other two to `''` (empty quotes).

**Change the button labels:** edit `emailButton` and `linkedinButton`.
- "Let’s Work" opens an email to your `site.email`.
- "Let’s Connect" opens the LinkedIn link from `socials`.
- To change where they go, see [Email, LinkedIn and other links](#email-linkedin-and-other-links).

**Change the round profile photo:**
1. Pick a **square** photo with your face roughly centered, at least **600 × 600 px**.
2. Name it **`avatar.jpg`**.
3. Upload it to `src/assets/images/` to replace the old one.

The circle crops to the center, and the dark ring around it is added by the site.

---

### Navigation bar

The links in the top bar (Work, About, Experiences, Contact) come from `nav` in `src/data/site.ts`:

```ts
export const nav = [
  { label: 'Work', href: '/#work' },
  ...
];
```

- **Rename a link:** change its `label`.
- **Remove a link:** delete its whole line.
- **The `href` part** jumps to a section of the home page: `#work`, `#about`, `#off-the-clock`, `#experience` or `#contact`.
- The same links appear in the phone menu and the footer.

---

### Tools I've used

The logo pills under "My Work" come from `src/data/tools.ts`. Each tool looks like:

```ts
{ name: 'Figma', path: 'M15.852 8.981h-4.588V0h4.588c2.476 …' },
```

- **Remove a tool:** delete its line.
- **Reorder:** move lines up or down.
- **Add a tool:**
  1. Go to [simpleicons.org](https://simpleicons.org) and search for the tool.
  2. Click it, then choose **Download SVG**. Open the downloaded file in a text editor; Notepad or TextEdit works.
  3. Copy the long text inside `d="…"`. It starts with `M` and is just letters and numbers.
  4. Add a new line to the list: `{ name: 'Tool Name', path: 'PASTE HERE' },`
  5. Add the tool's name to the "Tool logos" credit on the licensing page.
- **Change the "Tools I’ve used" label:** edit it in `src/pages/index.astro` (search for `Tools I’ve used`).

On phones only the icons show. The names are still read out by screen readers.

---

### My Work: project cards and case studies

Each project is a folder in `src/content/projects/`. The folder name becomes the page address. For example, `src/content/projects/iulart/` becomes `ahmadabdullahi.com/projects/iulart`. Each folder contains:

- `index.mdx`, the case study text and settings
- `hero.png`, the image on the project card and at the top of the case study
- any other images used in the case study

The **project card** on the home page and the **case study page** are built from the same `index.mdx`, so updating one file updates both.

#### The settings block (top of `index.mdx`)

Every case study starts with a block between two `---` lines:

```yaml
---
title: "IU Luddy Autonomous Racing Team"
short: "IU LART"
subtitle: "Designing and building a public web presence for Indiana University's student autonomous racing team."
role: "UX & Web Designer"
industry: "Research / Education"
tools: "Figma, Cursor, GitHub"
year: "2026"
order: 1
liveUrl: "https://ahmad-a01.github.io/IU-LART/"
hero: ./hero.png
heroAlt: "Homepage of the IU LART website"
---
```

| Setting | What it does |
| --- | --- |
| `title` | Big title on the card and the case study page |
| `short` | Short name (required, but not currently shown on the site) |
| `subtitle` | One-line description under the title on the card and page |
| `role`, `industry`, `year` | Shown as tags on the card (industry is hidden on phones) and as facts on the case study |
| `tools` | Shown as a fact on the case study (optional; delete the line to hide it) |
| `order` | Position on the home page: `1` comes first |
| `liveUrl` | Adds a "Visit live site" button (optional; delete the line to hide it) |
| `hero` | The cover image file in the same folder |
| `heroAlt` | A short description of the cover image for screen readers |
| `draft` | Add `draft: true` to hide a project without deleting it |

In this block, the text goes inside **double quotes** `"…"`, so a normal apostrophe is fine here. If the text itself contains a double quote, use curly quotes “ ” instead.

#### Writing the case study text

Everything below the second `---` is the case study, written in **Markdown**:

```md
## A main heading

A normal paragraph. Leave an empty line between paragraphs.

### A smaller heading

- A bullet point
- Another bullet point

**Bold text** and *italic text*.

[A link](https://example.com)
```

#### Adding images inside a case study

1. Upload the image into the project's folder (for example `src/content/projects/iulart/`).
2. Where you want it to appear, add its own line: `![Short description of the image](./my-image.png)`

The description inside `[ ]` is the alt text for screen readers.

#### Side-by-side image galleries

To show 2 or 3 images in a grid:

1. Near the top, under the settings block, make sure this line exists (it already does in the current case studies):
   ```js
   import Gallery from '../../../components/Gallery.astro';
   ```
2. Import each image, one line per image, with a simple name of your choice:
   ```js
   import shot1 from './screen-1.png';
   import shot2 from './screen-2.png';
   ```
3. Where you want the gallery, add:
   ```jsx
   <Gallery images={[shot1, shot2]} alt="Project screens" />
   ```

With **2 images** they sit side by side. With **3**, the first one is full width and the other two sit underneath.

#### Add a new project

1. On GitHub, open `src/content/projects/`.
2. Click **Add file** → **Create new file**.
3. In the name box type `my-project/index.mdx` (lowercase, use dashes, no spaces). Typing the `/` creates the folder.
4. Copy everything from an existing case study's `index.mdx`, paste it in, and replace the settings and text with the new project.
5. Commit on a new branch and open a pull request. Don't merge yet.
6. Switch to that branch (branch dropdown at the top left), open the new `my-project` folder and **upload** `hero.png` plus any other images.
7. Merge the pull request.

> The site won't build until `hero.png` (or whatever file `hero:` points to) exists in the folder. Upload the images before merging.

#### Reorder, hide or delete a project

- **Reorder:** change the `order` numbers. `1` shows first, then `2`, and so on.
- **Hide:** add `draft: true` to the settings block. The card and page disappear, but the files stay.
- **Delete:** delete the whole project folder (each file inside it).

The home page uses a two-column grid on desktop. With an odd number of projects, the last card sits alone on its row.

---

### About Me

Everything here is in `src/data/site.ts`.

#### The story paragraphs

```ts
export const about = {
  story: [
    'First paragraph…',
    'Second paragraph…',
    'Third paragraph…',
  ],
```

- **Each item is one paragraph.** Keep the quotes and the comma after each.
- **Layout:** the **first two** paragraphs go in the top card next to your overlook photo. **Everything after that** goes in the second card next to the coastline photo.
- **Adding a paragraph:** add another `'…',` line. A new paragraph at the end goes in the second card.
- **Fewer paragraphs:** if you only have two, the second card will be empty, so keep at least three.
- **Apostrophes:** remember the curly apostrophe rule: `I’ve`, `didn’t`.

#### The "Now" card (dark card)

This comes from `current` inside `site`:

```ts
current: { role: 'Product Designer', company: 'Elanco Animal Health', since: 'July 2026' },
```

#### The Education card

This comes from `education` inside `about`: `school`, `degree`, `detail` and `year`.

#### The three photos

All three are in `src/assets/images/`. To replace one, upload a new photo with the **same file name**:

| Photo | File | Best shape |
| --- | --- | --- |
| Overlook photo (next to paragraphs 1–2) | `portrait.jpg` | Landscape (wider than tall) |
| Coastline photo (next to paragraph 3) | `coastline.jpg` | Any; it's cropped to fit |
| Mountains photo with the camera tag | `landscape.jpg` | Landscape |

Photos are cropped to fill their card. To control which part stays visible, open `src/pages/index.astro`, search for `object-position` and change the two percentages:
- `50% 50%` is the center.
- The first number moves the crop left/right: `0%` is the left edge, `100%` the right.
- The second number moves it up/down: `0%` is the top, `100%` the bottom.

**Change the camera tag text** ("Shot on Canon EOS Rebel T7"): in `src/pages/index.astro`, search for `Shot on`.

**Change the heading "About Me":** in `src/pages/index.astro`, search for `About Me`.

---

### When I'm not designing

Most of this is `offTheClock` in `src/data/site.ts`.

#### Change the game you're currently playing

1. Upload the game's cover art to `src/assets/images/` (for example `elden-ring.jpg`). Tall or wide both work; the important part (a face or the logo) should be near the **top third**.
2. In `src/data/site.ts`, update `game`:
   ```ts
   game: {
     title: 'Elden Ring',
     href: 'https://store.steampowered.com/app/1245620/ELDEN_RING/',
     cover: 'images/elden-ring.jpg', // file in src/assets
   },
   ```
   - `title` is the text on the card.
   - `href` is the page the title links to, such as the Steam page.
   - `cover` is `images/` + the exact file name you uploaded.
3. Optional: delete the old cover image file.

**Change which part of the cover is visible:** in `src/components/OffTheClock.astro`, search for `object-position: 50% 28%` and adjust it. The second number moves the crop up/down.

#### Change your favorite beat

1. Export the beat as an **MP3**, ideally under about 5 MB (128–192 kbps is plenty).
2. Upload it to `public/audio/`, for example `public/audio/new-beat.mp3`. Use lowercase with no spaces.
3. In `src/data/site.ts`, update `beat`:
   ```ts
   beat: { title: 'new beat', spoken: 'new beat', src: '/audio/new-beat.mp3', duration: '2:30' },
   ```
   - `title` is the beat's name as written (not shown on screen).
   - `spoken` is how screen readers say it, for example "Play new beat".
   - `src` is `/audio/` + the file name.
   - `duration` is the length, shown before the audio loads.
4. Optional: delete the old MP3.

#### Change the FL Studio link

Edit `daw` in `src/data/site.ts`: `title` is the text and `href` is the link.

#### Change the activity cards (Biking, Running, Strength training)

Edit `activities` in `src/data/site.ts`:

```ts
{ label: 'Biking', icon: 'bike', detail: 'Giant Escape 3' },
```

- `label` is the card title.
- `detail` is the small line under it.
- Leave `icon` as is. The three cards use the `bike`, `run` and `gym` icons.

**Swap an icon image:**
- Bike and shoe: replace `src/assets/images/bike.png` or `running-shoe.png` with a new **PNG with a transparent background**, using the same name. The site colors it to match the theme automatically.
- The dumbbell is drawn in code in `src/components/OffTheClock.astro`.

Adding a fourth activity or a new icon type needs a small code change in `OffTheClock.astro`.

#### Change headings and labels

These are in `src/components/OffTheClock.astro`. Search for the text:
- `When I’m not designing`
- `Currently playing`, `My favorite beat`, `Where I make music`
- The chips at the top ("Gaming", "Music", "Fitness") are the `label`s in the `tags` list near the top of the file. Change only `label`, not `key`.

---

### Experiences and resume

Edit `experience` in `src/data/site.ts`. Each job is one line, newest first:

```ts
{ role: 'Product Designer', company: 'Elanco Animal Health', dates: 'July 2026 – Present', current: true },
```

- **Add a job:** copy a line, paste it where it belongs in the list and edit it.
- **The blue "Current" badge** shows when a line ends with `current: true`. Remove `, current: true` from a job you've left.
- **Dates:** use an en dash `–` between dates to match the others.

**Update the resume link** (used by "View resume" and the footer "Resume" link):
1. Upload the new PDF to Google Drive.
2. Click **Share** → **General access** → **Anyone with the link** (Viewer) → **Copy link**.
3. Paste it as `resume:` inside `site` in `src/data/site.ts`.

> **Tip:** in Google Drive you can **Manage versions** → **Upload new version** on the existing file. The link stays the same, so the site doesn't need changing at all.

---

### Certifications

Certifications appear at the bottom of the Experiences section.

**Add a certificate:**
1. Upload an image of the certificate to `src/assets/certificates/` (for example `google-ux.jpg`).
2. In `src/data/site.ts`, add an entry to `certificates`:
   ```ts
   {
     title: 'Google UX Design Certificate',
     issuer: 'Google',
     image: 'certificates/google-ux.jpg', // file in src/assets
     href: 'https://link-to-the-certificate',
   },
   ```
   - `href` is where "View certificate" goes.
   - The label switches from "Certification" to "Certifications" automatically when there's more than one.

**Remove a certificate:** delete its `{ … },` block and its image. Keep at least one entry. To remove the whole area, that needs a small code change.

---

### Contact card

This is the dark "Interested in connecting?" card near the bottom. Edit `contact` in `src/data/site.ts`:

```ts
export const contact = {
  titleStart: 'Interested in ',
  titleEmphasis: 'connecting?',
  text: 'Feel free to reach out…',
  linkedinButton: 'Message Me',
  emailButton: 'Email Me',
};
```

The heading is `titleStart` + *`titleEmphasis`*; the emphasis part is in italics. The buttons use the same LinkedIn link and email as the hero.

---

### Footer

- **Name:** `name` in `site`.
- **Tagline** ("Designer based in Indiana, USA."): built from `role` and `location` in `site`.
- **Links:** the same `nav` links plus "Resume".
- **"Credits & licensing"** links to the licensing page.
- To change the layout or add something, edit `src/components/Footer.astro`.

---

### Email, LinkedIn and other links

All in `src/data/site.ts`:

| What | Where |
| --- | --- |
| Email address (hero "Let’s Work", contact "Email Me") | `email` in `site` |
| LinkedIn (hero "Let’s Connect", contact "Message Me") | the `LinkedIn` line in `socials` |
| Dribbble, GitHub | the other lines in `socials` (currently not shown on the page) |
| Resume link | `resume` in `site` |
| Calendly | `calendly` in `site` (currently not shown on the page) |

---

### Browser tab title, Google description and share image

- **Tab title and Google search title:** `title` in `site` (currently "Ahmad Abdullahi — Product Designer").
- **Google description:** `description` in `site`. Keep it under about 155 characters.
- **Share image** (the preview when you paste the link into LinkedIn, iMessage and so on): replace `public/og-image.png`. Use **1200 × 630 px** and keep the same name.
- **Favicon** (the tiny icon in the browser tab): replace `public/favicon.png`. Use a square image, at least 192 × 192 px.

LinkedIn caches previews. After changing the share image, paste your URL into [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/) to refresh it.

---

### Credits & licensing page

Edit `src/pages/licensing.astro`. Each credit near the top looks like:

```ts
{
  title: 'Tool logos',
  body: 'Description text…',
  href: 'https://link',   // optional
},
```

Add, edit or remove entries the same way as in `site.ts`, following the same apostrophe rule.

---

### Colors and fonts

Colors are defined once at the top of `src/styles/global.css`.

- **Light mode** colors are in the `:root { … }` block; **dark mode** colors are in `:root[data-theme='dark'] { … }`.
- **Key colors:**
  - `--bg`: page background
  - `--surface`: cards
  - `--ink`: main text
  - `--muted`: grey text
  - `--line`: borders
  - `--accent`: navy highlights, such as "Indiana"
- Colors are hex codes like `#1f3a5f`. Change the code and every place that uses that color updates.
- **Fonts:** Fraunces for headings and Manrope for body text. Changing fonts needs a code change.

---

## 6. Images and audio: sizes and tips

- **Formats:** use `.jpg` for photos and `.png` for screenshots or anything with transparency. `.webp` also works. **Convert `.heic` or `.avif`** files to JPG first: on a Mac, open the file in Preview → **File** → **Export** → **JPEG**.
- **Size:** around **2000 px on the longest side** is plenty. The site automatically makes smaller, fast-loading versions, so don't worry about compressing.
- **File names:** lowercase, dashes instead of spaces, no special characters: `my-new-photo.jpg`.
- **Privacy:** phone photos can contain your GPS location. Exporting a copy as JPEG from Preview, or taking a screenshot of it, removes most of that.
- **Audio:** MP3, ideally under 5 MB.

---

## 7. Pull requests, merging and undoing a change

**What's a pull request?** A page that shows exactly what changed, before it goes live. Lines in red were removed and lines in green were added.

### Merge a pull request

1. Open the **Pull requests** tab and click the pull request.
2. Check the **Files changed** tab if you want to review it.
3. Go back to **Conversation**, click **Merge pull request**, then **Confirm merge**.
4. Optional: click **Delete branch** to keep things tidy.
5. Watch the **Actions** tab for the green check ✅.

### Undo a change that's already live

1. Open the **Pull requests** tab → **Closed**, and open the pull request you want to undo.
2. Near the bottom, click **Revert**. GitHub creates a new pull request that undoes it.
3. Merge that new pull request. The site goes back to how it was.

### Close a pull request without using it

Open it and click **Close pull request** at the bottom. Nothing changes on the site.

### See the history of a file

Open the file and click **History** at the top right. You can view, or copy text from, any earlier version.

---

## 8. If something breaks

**The Actions run shows a red ❌:** the live site is safe and stays on the last working version. To find the problem:
1. Click the failed run, then the **build** job.
2. Expand the red step, usually "Run npm run build".
3. Look for the error. It usually names the file and line.

**Common causes:**

| Error mentions | Usual fix |
| --- | --- |
| `site.ts` and `Unexpected token` or `expected ","` | A straight apostrophe `'` inside text (use **’**), a missing quote, or a missing comma at the end of a line |
| `Image "src/assets/… " was not found` | The file name in `site.ts` doesn't exactly match the uploaded file (check `.jpg` vs `.png`, upper/lower case) |
| `Could not find requested image` or `hero` in an `index.mdx` | The `hero:` image isn't in the project folder, or the name is different |
| An `index.mdx` file and `Unexpected character` | A `<`, `{` or `}` in normal text; MDX treats those as code. Write them as words, or remove them |

Fix the file on the same branch, or with a new pull request, and merge again.

**The change isn't showing up:**
- Wait a minute after the green check ✅.
- Hard-refresh the page: **Cmd + Shift + R** on a Mac, **Ctrl + Shift + R** on Windows. On a phone, pull down to refresh or open a private tab.

**Still stuck?** Revert the last pull request (see [section 7](#7-pull-requests-merging-and-undoing-a-change)) to get back to a working site, then try again.

---

## 9. Domain and hosting reference

- **Live site:** https://ahmadabdullahi.com, hosted on GitHub Pages.
- **Deploy settings:** in this repo, **Settings** → **Pages**.
  - **Source:** GitHub Actions (the workflow file is `.github/workflows/deploy.yml`).
  - **Custom domain:** `ahmadabdullahi.com`, with **Enforce HTTPS** ticked.
- **DNS:** managed in **Hostinger** → **Domains** → `ahmadabdullahi.com` → **DNS / Nameservers**. Keep Hostinger's own nameservers. The records that point the domain to GitHub are:

  | Type | Name | Value |
  | --- | --- | --- |
  | A | @ | 185.199.108.153 |
  | A | @ | 185.199.109.153 |
  | A | @ | 185.199.110.153 |
  | A | @ | 185.199.111.153 |
  | CNAME | www | ahmad-a01.github.io |

- **Renewal:** renew the domain in Hostinger before it expires, or the site goes offline.
- **Manual redeploy:** **Actions** → **Deploy to GitHub Pages** → **Run workflow** → **Run workflow**. Useful after changing Pages settings.

---

## 10. Working on your computer (optional)

This lets you preview changes before publishing. You need [Node.js](https://nodejs.org) (version 22 or newer) and [GitHub Desktop](https://desktop.github.com) or Git.

```bash
npm install      # once, to download what the site needs
npm run dev      # preview at http://localhost:4321 (updates as you save)
npm run build    # checks for errors and builds the site, the same way GitHub does
```

Then commit and push from GitHub Desktop to a new branch and open a pull request on GitHub.

### How the code is organized

| Folder | What's inside |
| --- | --- |
| `src/data/` | Site text and lists (`site.ts`, `tools.ts`) |
| `src/content/projects/` | Case studies, one folder each |
| `src/assets/` | Images that get optimized automatically |
| `public/` | Files served as-is (audio, favicon, share image, robots.txt) |
| `src/components/` | Reusable pieces (header, footer, project card, hobbies section, contact card) |
| `src/pages/` | Pages: the home page (`index.astro`), case studies, licensing and 404 |
| `src/styles/global.css` | Colors, fonts, spacing and shared styles |
| `src/lib/` | Small helpers (site links, image lookup) |
