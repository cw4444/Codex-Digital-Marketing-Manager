# Codex-Digital-Marketing-Manager

JobSpec Studio is a lightweight browser app that audits UK job ads, flags suspicious wording, compares them against a pasted CV, and can rank multiple ads in a Hall of Shame leaderboard.

## What it does

- extracts the likely role title, salary, location, working style, and experience signal
- scores the ad for balance, transparency, and candidate leverage
- flags common red flags such as wide scope for weak pay, vague package details, and buzzword-heavy wording
- treats phrases like `competitive salary`, `we're a family`, and culture-heavy fluff as suspicion triggers when the offer is vague
- highlights green flags, stakeholder load, and likely pressure points
- compares a pasted CV or profile summary against the ad and estimates overlap, likely gaps, and match strength
- supports a Hall of Shame mode where multiple ads can be pasted and ranked from worst to least bad
- suggests negotiation leverage based on what the ad itself reveals
- shows a structured JSON version of the analysis

## Run it

Open `index.html` in a browser.

No install step is required.

## Hall of Shame mode

Paste multiple ads into the Hall of Shame box and separate each one with a line that contains only `---`.
