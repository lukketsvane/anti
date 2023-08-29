// NOTE This file is auto-generated by Contentlayer

export { isType } from 'contentlayer/client'

// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.
// During (production) builds Contentlayer it imports from `.json` files to improve build performance.
import allPages from './Page/_index.json' assert { type: 'json' }
import allProjects from './Project/_index.json' assert { type: 'json' }
import allGalleryImages from './GalleryImage/_index.json' assert { type: 'json' }
import allGalleryProjects from './GalleryProject/_index.json' assert { type: 'json' }

export { allPages, allProjects, allGalleryImages, allGalleryProjects }

export const allDocuments = [...allPages, ...allProjects, ...allGalleryImages, ...allGalleryProjects]


