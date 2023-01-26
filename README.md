# Customer Feedback App

## Running the App

```
npm i && npm start
```

## Tests

```
npm test
```

## Tech Stack

Technologies I used to build this chat app:

- React - for rendering UI
- Next.js - to set up a basic SSR React app
- TypeScript - for type safety
- Styled Components - for styling
- Normalize.css - to initialise styles
- Rechart - for data visualisation
- Formik - for form state management
- Jest - for testing
- React Testing Library - for testing React
- A JSON file - to provide some initial data

## Improvements

Improvements I would make with more time:

- More unit tests - I wrote a couple to start with, but would ideally like full coverage
- End to end tests - with Cypress, testing the overall functionally
- Persisted feedback data - currently I'm storing feedback in memory, ideally new additions would be written to the JSON file, or stored in a database
- Better rating UI - more intuitive UI for leaving a rating (like the [star rating component](https://www.bonappetit.com/recipe/simple-is-best-dressing) I built for Bon Appétit in 2020)
- Accessibility audit - a full review of accessibility using automated tools - specifically there needs to be a strategy around making the chart accessible
