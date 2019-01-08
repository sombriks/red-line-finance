# Red Line Finance 2.0

Personal finance tracker.

You can see the 1.0 on sept2017 branch.

Easily track your financial life and get clues about how your money disappears.

## Feature-Storm

- entries
  - what you spent, what you earn
- projections (what you expect to spend or earn)
  - setup (crud)
- categories
  - a name for your spends or earnings
  - both entries and projections share categories
  - reasonable default categories
  - both entries and projections share categories
- graphs
  - line plots to see how entries and projections behave
  - pie plots to see how the expenses and earnings are distributed
- profiles
  - default
  - create
    - put a password on it

## Component-Count

- new entry (fast entry creation)
- entry listing
- red line graph (entries vs projections as the red line)
- entry detail (edit one entry)
- category listing
- category detail (create or edit category)
- projection listing
- projection detail
- projection pie (pie chart with projections)
- new profile
- profile listing
- profile login

## View-Count

- entries
  - new entry
  - entry listing
  - red line graph
- categories
  - category listing
  - category detail
- projections
  - projection listing
  - projection detail
  - projection pie
- profiles
  - new profile
  - profile listing
  - profile login
- about

## Tech-Stack

- vue
- vue-router
- vuex
- muse-ui
- chart.js
- dexie

## How to run

```bash
npm install
make fonts
make dev
```