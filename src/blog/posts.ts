export type BlogPost = {
  number: string
  slug: string
  title: string
  subtitle: string
  summary: string
  metric: string
  readTime: string
  date: string
  tags: string[]
  intro: string[]
  sections: {
    id: string
    heading: string
    paragraphs: string[]
    bullets?: string[]
    paragraphsAfterBullets?: string[]
    note?: string
  }[]
  takeaways: string[]
}

export const posts: BlogPost[] = [
  {
    number: '01',
    slug: 'faster-app-launch',
    title: 'What a 40% faster app launch really takes',
    subtitle: 'Startup speed is not a benchmark. It is the first promise your product makes.',
    summary:
      'A faster launch is rarely the result of one clever fix. It comes from defining what “fast” means, measuring the full path to the first useful screen, and protecting the gain after release.',
    metric: '40% faster startup',
    readTime: '8 min read',
    date: 'Nov 2026',
    tags: ['Performance', 'React Native', 'Product'],
    intro: [
      'The first few seconds of a mobile app carry more weight than most teams admit. Before a user reads a screen, taps a button or evaluates a feature, they have already formed an impression: this feels quick, or this feels heavy.',
      'In one of my production projects, the measured result was a 40% faster app launch. The useful part of that work was not the number itself. It was the discipline behind it — defining the problem clearly, resisting random optimization and making sure the improvement survived future releases.',
    ],
    sections: [
      {
        id: 'product-metric',
        heading: 'Startup time is a product metric',
        paragraphs: [
          'It is tempting to treat startup as an engineering chore. The dashboard shows a duration, someone profiles the app, a few changes go in, and the number moves. That framing is too narrow.',
          'Users do not experience CPU time. They experience waiting. A slow start breaks momentum, increases abandonment and makes even a well-designed product feel less trustworthy. A faster start does the opposite: it removes friction before the product has said anything.',
          'That is why I frame startup as part of the product experience. The question is not “can we make this function faster?” It is “how quickly can someone get to the first moment where this app is useful to them?”',
        ],
      },
      {
        id: 'define-fast',
        heading: 'Define what “faster” actually means',
        paragraphs: [
          'The word “startup” hides several different problems. If a team agrees to improve startup without agreeing on which moment they are measuring, they can easily optimize one number while the user still waits.',
          'I separate the path into clear checkpoints before touching code:',
        ],
        bullets: [
          'Cold start — the app is not in memory and must launch from scratch.',
          'Warm start — the process exists but the app is returning to a usable state.',
          'First paint — the user sees something, even if it is not interactive yet.',
          'Time to interactive — the user can actually use the first screen.',
          'First useful screen — the user reaches the content or action they came for.',
        ],
        paragraphsAfterBullets: [
          'The last checkpoint matters most. A fast splash screen that leads to a slow first screen is not a fast app; it is a well-animated wait.',
        ],
      },
      {
        id: 'whole-path',
        heading: 'Look at the whole path before the first screen',
        paragraphs: [
          'Performance work often fails because teams optimize the layer they know best. A React Native developer may jump straight into JavaScript. A native developer may focus only on process launch. Both views are incomplete.',
          'The startup path crosses several boundaries: process creation, native initialization, JavaScript loading, framework setup, navigation, state restoration, API calls and the first render. Any one of these can dominate the total time depending on the app.',
          'So I start by asking a simpler question: what has to happen before the user can do the first meaningful thing? Then I look for work that happens too early, too often or on the critical path when it does not need to be there.',
        ],
        note: 'The goal is not to make every part faster. The goal is to remove the work that sits between the user and value.',
      },
      {
        id: 'usual-costs',
        heading: 'The categories that usually carry the cost',
        paragraphs: [
          'Every app is different, but a few categories show up repeatedly in mobile startup work. I use them as a checklist, not a conclusion.',
        ],
        bullets: [
          'Initialization work — services, SDKs and configuration that run at launch whether or not the first screen needs them.',
          'Rendering on the critical path — screens that mount more than the user can see or understand in the first moment.',
          'Navigation setup — deep route trees and eager registration that delay the first usable screen.',
          'Heavy dependencies — libraries loaded early because they are convenient, not because the first screen needs them.',
          'Initial data waits — blocking the interface on data that could arrive after the shell is usable.',
        ],
      },
      {
        id: 'measure-change',
        heading: 'Measure, change one thing, measure again',
        paragraphs: [
          'There is a strong temptation to bundle many optimizations into one release. It feels efficient. It is also a good way to lose track of what worked.',
          'My rule is simple: measure, change one thing, measure again. If the number moves in the right direction on a real build, keep it. If it does not, question the assumption. Sometimes the change was never on the critical path. Sometimes the measurement was too noisy. Either way, the team learns something.',
          'This is slower in the short term and faster in the long term. It builds a map of the app instead of leaving behind a pile of unexplained edits.',
        ],
      },
      {
        id: 'perceived-performance',
        heading: 'Real speed and perceived speed are both worth designing for',
        paragraphs: [
          'Not every improvement has to reduce measured startup time to improve the experience. Showing meaningful structure early, avoiding blank states and making the first interaction feel immediate can change how wait time is perceived.',
          'But perceived performance is not a substitute for real performance. Skeletons and placeholders should make an honest wait easier, not hide a slow system. If the underlying work is still expensive, users will feel it at the next tap.',
          'The strongest result comes from doing both: reduce the real work and make the remaining time understandable.',
        ],
      },
      {
        id: 'protect-the-gain',
        heading: 'Protect the gain after release',
        paragraphs: [
          'A 40% improvement is only useful if it is still there three months later. Performance work has a short memory unless the team gives it a long one.',
          'That means treating startup time as something the team watches, not a one-time cleanup task. It means being careful about new initialization work. It means asking what a new dependency costs at launch, not only what it adds to the codebase.',
          'In my experience, this is the real difference between a performance project and a performance culture. One produces a good release. The other keeps producing good releases.',
        ],
      },
      {
        id: 'what-the-number-means',
        heading: 'What the 40% number represents',
        paragraphs: [
          'The verified production outcome I draw from was a 40% faster app launch during legacy migration work. I do not treat that number as a universal recipe or a promise for every codebase.',
          'I treat it as evidence of a way of working: define the user-visible problem, measure the real path, remove the expensive work that matters, and keep the result under watch. That approach travels well across products even when the exact technical changes do not.',
        ],
      },
    ],
    takeaways: [
      'Define startup by the first useful screen, not by a technical checkpoint alone.',
      'Measure the full cross-layer path before choosing a fix.',
      'A performance gain only counts if it survives the next releases.',
    ],
  },
  {
    number: '02',
    slug: 'crash-free-sessions',
    title: 'Engineering for 98%+ crash-free sessions',
    subtitle: 'Reliability is not luck. It is a release habit.',
    summary:
      'Crash-free sessions make stability visible. Fewer incidents come from short feedback loops, careful releases and ownership that continues after the build ships.',
    metric: '98%+ crash-free',
    readTime: '9 min read',
    date: 'Nov 2026',
    tags: ['Reliability', 'Production', 'Leadership'],
    intro: [
      'A crash is a small technical event with a large human cost. It interrupts a task, breaks trust and creates support work. It also tells you something important: the team’s feedback loop was not fast enough to catch a problem before it reached the user.',
      'On production mobile work, I have seen crash-free sessions held above 98% and incident volume reduced by 60–70%. Those numbers did not come from a single heroic fix. They came from treating reliability as a system of decisions.',
    ],
    sections: [
      {
        id: 'crash-free-meaning',
        heading: 'What crash-free sessions actually tell you',
        paragraphs: [
          'Crash-free sessions are useful because they translate stability into a shared language. engineers, product leads and stakeholders can all understand what a percentage means, even if they do not share the same technical vocabulary.',
          'The number is not perfect. It does not capture every slow screen, broken flow or silent failure. But it gives the team a clear signal about whether the app is staying alive while people use it.',
          'I prefer seeing it alongside incident trends, release notes and supporting data. One number can start a conversation; several signals help you make a decision.',
        ],
      },
      {
        id: 'reliability-vs-speed',
        heading: 'Why reliability competes with feature speed',
        paragraphs: [
          'Teams often talk about stability as if it slows delivery down. In the short term, that can be true. Extra checks, staged rollouts and careful rollbacks take time.',
          'In the long term, unreliable delivery is much slower. Every incident pulls engineers away from planned work. Every unclear regression makes the next release more stressful. Every broken session chips away at user confidence.',
          'Stable teams move faster because they spend less time recovering. That is the trade I am willing to make on production apps.',
        ],
      },
      {
        id: 'incident-reduction',
        heading: 'What a 60–70% incident reduction really means',
        paragraphs: [
          'Reducing incidents by 60–70% sounds dramatic, but the mechanism is usually ordinary. Problems are found earlier, understood faster and contained before they spread.',
          'In the work I am referring to, this came from a combination of production awareness, release discipline and regression thinking. The important part was not one tool. It was the habit of asking, after every change, what signal would tell us if this went wrong.',
          'When a team builds that habit, incident reduction becomes a side effect of better decisions rather than the target of a one-off campaign.',
        ],
      },
      {
        id: 'feedback-loop',
        heading: 'Build a short feedback loop',
        paragraphs: [
          'A good reliability loop has four parts: observe, detect, understand, respond. If any part is slow, the user feels it.',
          'Observability tells you what the app is doing in the real world. Detection tells you when behaviour changes. Understanding connects the change to a release or a path. Response gets the fix or mitigation in front of users.',
          'I do not need a dashboard for every possible metric. I need the right signals around the flows that matter and a team that knows what to do when those signals move.',
        ],
        note: 'Monitoring is only useful if someone owns the moment it becomes a signal.',
      },
      {
        id: 'release-discipline',
        heading: 'Release discipline is reliability work',
        paragraphs: [
          'Many stability problems are introduced long before users see them. They begin when a change is hard to reason about, a release contains too much at once, or nobody has agreed what would count as a safe rollout.',
          'I like releases that are small enough to understand and observable enough to judge. That does not mean shipping slowly for its own sake. It means knowing which changes are risky enough to stage, which paths need extra attention and what the rollback plan is.',
          'Hotfixes are part of this discipline too. In one banking project, hotfixes were delivered with zero regressions. The point was not speed alone; it was speed with control.',
        ],
      },
      {
        id: 'ownership',
        heading: 'Ownership continues after the release',
        paragraphs: [
          'A feature is not finished when the build goes out. It is finished when the team knows how it behaves in production and has learned whatever the release taught them.',
          'That means looking at signals after rollout, watching the flows that changed and being willing to act quickly. It also means writing down the lesson in a way the next release can use.',
          'This is where senior ownership shows up. It is easy to own the code you wrote. It is more valuable to own the outcome that code creates.',
        ],
      },
      {
        id: 'starting-today',
        heading: 'If a team is starting today',
        paragraphs: [
          'I would not begin by promising a perfect crash-free number. I would begin by agreeing on the signals the team trusts, making releases easier to judge and choosing one reliability problem to improve at a time.',
          'Then I would keep the loop running long enough for the change to become normal. Reliability is not a campaign. It is the way the team works when nobody is watching a dashboard.',
        ],
      },
    ],
    takeaways: [
      'Crash-free sessions are a product signal, not just an engineering metric.',
      'Fewer incidents come from shorter feedback loops and calmer releases.',
      'Ownership includes the behaviour of the code after it ships.',
    ],
  },
  {
    number: '03',
    slug: 'smaller-react-native-app',
    title: 'Taking a React Native app from 67 MB to 45 MB',
    subtitle: 'App size is part of the first impression.',
    summary:
      'A smaller shipped app reduces download friction, storage pressure and update pain. The work only matters if the result stays maintainable and safe to release.',
    metric: '67 MB → 45 MB',
    readTime: '8 min read',
    date: 'Nov 2026',
    tags: ['App Size', 'Android', 'Delivery'],
    intro: [
      'App size is easy to ignore because it is not a screen. Nobody opens an app and says, “this is a beautifully optimized artifact.” But people do abandon downloads, delay updates and uninstall apps when storage gets tight.',
      'Reducing an Android artifact from 67 MB to 45 MB is useful because it removes friction before the product even opens. It is also a good example of engineering restraint: the target is not the smallest possible app, but the smallest app that still supports reliable delivery.',
    ],
    sections: [
      {
        id: 'size-is-ux',
        heading: 'App size is user experience',
        paragraphs: [
          'A large app affects people differently depending on their device, network and storage situation. On a flagship phone with fast internet, it may be barely noticeable. On a lower-end device or a constrained network, it can be the difference between installing and giving up.',
          'Updates matter too. A large package makes every release heavier, especially in markets where users watch data usage and storage carefully. Size is not only about the first download; it shapes the whole update lifecycle.',
          'That is why I treat app size as part of product quality rather than a narrow technical metric.',
        ],
      },
      {
        id: 'measure-artifact',
        heading: 'Measure the shipped artifact',
        paragraphs: [
          'Size work starts with the real build, not assumptions. I look at what actually ships: assets, native components, dependencies and build outputs. The goal is to understand where the weight sits before deciding what to change.',
          'This matters because the biggest-looking folder in a repository is not necessarily the biggest part of the final package. Build systems transform things. Native outputs, bundled resources and dependency graphs all have their own effects.',
          'Once the artifact is measured, the conversation becomes much more useful. Instead of “the app feels big,” the team can discuss what each part costs and what it gives back.',
        ],
      },
      {
        id: 'usual-drivers',
        heading: 'What usually drives size',
        paragraphs: [
          'I use a few broad categories when investigating size. They are not accusations; they are places to look.',
        ],
        bullets: [
          'Assets — images, fonts and other resources included at higher resolution or in more places than needed.',
          'Dependencies — libraries that add value but also bring native code or bundled resources.',
          'Native additions — platform components that solve a real problem but increase the shipped package.',
          'Build configuration — outputs that include more than a specific release needs.',
          'Duplication — the same capability or resource carried through more than one path.',
        ],
        paragraphsAfterBullets: [
          'The mistake is assuming every large item should be removed. Some weight buys reliability, speed of development or a capability the product needs. The work is to decide deliberately.',
        ],
      },
      {
        id: 'release-mindset',
        heading: 'Optimize with a release mindset',
        paragraphs: [
          'Any size change has to survive real releases. That means checking behaviour on target devices, watching for regressions and making sure the team can still maintain the result.',
          'A smaller app that is harder to build, harder to debug or easier to break is not a win. The measure is not only the number of megabytes removed. It is whether the product remains easier to ship afterward.',
          'This is why I prefer measured, reviewable changes over aggressive cleanup. Each step should be understandable by the team that has to live with it.',
        ],
        note: 'A lean app should be easier to maintain, not just smaller on a dashboard.',
      },
      {
        id: 'validate',
        heading: 'Validate where it matters',
        paragraphs: [
          'Validation is not a formality. After size work, the app needs to be checked on realistic devices and realistic release paths. The flows that depend on assets, native modules or bundled data deserve particular attention.',
          'I also pay attention to the build process itself. If the optimization only works on one machine or one branch, it is not really an improvement. It is a fragile trick.',
          'The result is credible when the team can reproduce it and trust it in the next release.',
        ],
      },
      {
        id: 'maintenance-benefit',
        heading: 'The maintenance benefit is real',
        paragraphs: [
          'A leaner app is often easier to reason about. Fewer unnecessary pieces mean fewer interactions to understand, fewer things to test and fewer places for a regression to hide.',
          'That benefit compounds. As the product grows, the decisions made during size work continue to shape how expensive the next feature is.',
          'So the long-term value of 67 MB to 45 MB is not only the download. It is a product that stays easier to carry forward.',
        ],
      },
      {
        id: 'closing',
        heading: 'Closing thought',
        paragraphs: [
          'App size work does not need to be dramatic to be valuable. Measure the real artifact, understand the cost of each part, change what is worth changing and protect the release process.',
          'Done that way, a smaller app is not a vanity metric. It is delivery quality that users can feel.',
        ],
      },
    ],
    takeaways: [
      'Size affects download, storage, updates and first impressions.',
      'Measure the shipped artifact before choosing what to change.',
      'The result must remain maintainable and repeatable in future releases.',
    ],
  },
]

export function getPost(slug?: string | null) {
  return posts.find((post) => post.slug === slug)
}

export function getNextPost(slug: string) {
  const index = posts.findIndex((post) => post.slug === slug)
  if (index === -1) return posts[0]
  return posts[(index + 1) % posts.length]
}
