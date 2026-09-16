# MASS Question Program

A simple browser-based quiz app for revision and practice across multiple school subjects.

## Features

- Subject selection
- Difficulty levels: Easy, Normal, Hard
- Large question banks per subject
- 25-question exam-style batches
- Progress tracking and final score summary
- Results and accuracy report

## How to use

1. Open the project folder in a browser.
2. Start a local web server if needed.
3. Open the app in the browser.
4. Select a subject.
5. Choose a difficulty level.
6. Answer each question in the quiz round.
7. Continue to the next batch until the subject is completed.
8. View the final results, score, accuracy, and time taken.

## Run locally

From the project folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Files in the project

- `index.html` – app structure
- `styles.css` – styling and layout
- `script.js` – quiz logic and question banks
- `image/` – logo and image assets

## Notes

- The app is fully static and works in a browser without a database.
- Each subject has a large question pool, and questions are selected to avoid repetition during a session.
- The game is designed for study, revision, and practice.

## Suggested use

Use this program for:

- classroom revision
- personal study
- exam preparation
- subject practice across different levels
