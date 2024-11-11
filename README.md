# White Rose Talent Agency (Next.JS + Headless WordPress)

A modern web application built using NextJS for the frontend and WordPress as a headless CMS.

## Features

- Server-side rendering with NextJS
- Headless WordPress integration
- REST API
- SEO optimized
- Responsive design
- Fast page loading
- WordPress as a backend CMS

## Project Structure

```
├── app
│   ├── (routes)
│   │   ├── about
|   |   |   ├── aboutpage.css
|   |   |   └── page.jsx
│   │   ├── entertainment
|   |   |   ├── [slug]
|   |   |   |    ├── not-found.jsx
|   |   |   |    └── page.jsx
|   |   |   └── page.jsx
│   │   ├── fashion
|   |   |   ├── [slug]
|   |   |   |    ├── not-found.jsx
|   |   |   |    └── page.jsx
|   |   |   └── page.jsx
│   │   ├── news
|   |   |   ├── [slug]
|   |   |   |    ├── news-article.css
|   |   |   |    ├── not-found.jsx
|   |   |   |    └── page.jsx
|   |   |   ├── components/LatestCard
|   |   |   |    ├── index.jsx
|   |   |   |    └── latestcard.jsx
|   |   |   └── page.jsx
│   │   ├── sports
|   |   |   ├── [slug]
|   |   |   |    ├── not-found.jsx
|   |   |   |    └── page.jsx
|   |   |   └── page.jsx
│   │   └── error.jsx
│   │ 
│   ├── assets
│   │   ├── icons
│   │   ├── images
│   │   └── logo
│   │ 
│   ├── components
│   │   ├── common
|   |   |   ├── CoverSection
|   |   |   |    └── index.jsx
|   |   |   ├── GallerySection
|   |   |   |    └── index.jsx
|   |   |   ├── NewsCards
|   |   |   |    └── index.jsx
|   |   |   ├── TalentCards
|   |   |   |    └── index.jsx
|   |   |   └── TalentProfileSection
|   |   |        └── index.jsx
│   │   |
│   │   └── layout
|   |       ├── footer
|   |       |    ├── footer.css
|   |       |    └── index.jsx
|   |       ├── navbar
|   |       |    ├── navbar.css
|   |       |    └── index.jsx
|   |       └── sections
|   |            ├── contact
|   |            |    ├── index.jsx  
|   |            |    └── contact.css  
|   |            ├── hero.jsx
|   |            |    ├── index.jsx  
|   |            |    └── hero.css  
|   |            ├── latest
|   |            |    ├── index.jsx  
|   |            |    └── latest.css  
|   |            ├── newsletter
|   |            |    ├── index.jsx  
|   |            |    └── newsletter.css  
|   |            └── spotlight
|   |                 ├── index.jsx  
|   |                 └── talent.css  
│   │   
│   ├── fonts
│   ├── lib
│   ├── styles
│   │   ├── error.css
│   │   ├── globals.css
│   │   ├── newscard.css
│   │   ├── notfound.css
│   │   ├── responsive.css
│   │   ├── talentcards.css
│   │   ├── talentpage-slug.css
│   │   └── variables.css
│   │   
│   ├── error.jsx
│   ├── layout.jsx
│   ├── not-found.jsx
│   ├── page.jsx
│   └── page.module.css
|
├── public
├── .eslintrc.json
├── .gitignore
├── README.md
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
└── package.json
```