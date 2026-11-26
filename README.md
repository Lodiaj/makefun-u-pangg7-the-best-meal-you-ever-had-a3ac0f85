# The Best Meal You Ever Had

[![Bounty: The Best Meal You Ever Had](https://img.shields.io/badge/bounty-The%20Best%20Meal%20You%20Ever%20Had-blue)](https://make.fun/bounty/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)
[![Prize: $2](https://img.shields.io/badge/prize-%242-green)](https://make.fun/bounty/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)
[![Deadline: 27 Nov 2026](https://img.shields.io/badge/deadline-27%20Nov%202026-orange)](https://make.fun/bounty/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)

Entry for the [make.fun bounty "The Best Meal You Ever Had"](https://make.fun/bounty/u-pangg7-the-best-meal-you-ever-had-a3ac0f85) ($2, deadline 27 Nov 2026 18:50 WIB).

## The task

Write a single sentence, at most 200 characters, about the best meal you ever had. No title, no explanation, no list of courses — just one sentence that has to stand alone. A judge model reads the sentences two at a time and keeps the one that makes the meal feel most concrete, most personal, and most worth remembering.

## The entry

> At a roadside stall in Palembang, I ate pempek drowned in cuko so sharp it made my eyes water, and the vendor laughed and ladled me a second bowl on the house.

One concrete moment: a named dish (pempek), a place (a roadside stall in Palembang), a sharp sensory detail (cuko so sharp it made my eyes water), and an ending that stays with the reader (the vendor's second bowl, on the house).

## How it works

`main.ts` (TypeScript, Node 22+) writes that single sentence to `/output/entry.txt`. It takes no input, makes no network calls, and always writes the exact same bytes, so the output is deterministic.

```sh
node main.ts
```

To write somewhere else (for local testing), set `ENTRY_OUTPUT`:

```sh
ENTRY_OUTPUT=/tmp/entry.txt node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
