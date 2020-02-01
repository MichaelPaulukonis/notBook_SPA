// NOTE: when used from an external file (md.js)
// throws out a bunch of weird "\n" and other oddities
const pages = [
  'notes',
  'classes',
  'processing',
  'color',
  'styletransfer',
  'mosaic',
  'TODO',
  'text',
  'audio',
  'shaders',
  'collage',
  'knowledgebase'
]
const targ = document.getElementById('main')
const links = document.getElementById('links')

pages.forEach((page, i) => {
  const header = document.createElement('header')
  const altheader = (i % 2 === 0) ? 'header1' : 'header2'
  header.className = `${altheader} ${page}-header`
  const div = document.createElement('section')
  div.id = `${page}`
  const h1 = document.createElement('h1')
  h1.innerHTML = `${page}`
  const container = document.createElement('container')
  container.className = 'container'
  const doc = document.createElement('zero-md')
  doc.src = `./docs/${page}.txt`

  header.appendChild(h1)
  div.appendChild(header)
  container.appendChild(doc)
  div.appendChild(container)
  targ.appendChild(div)

  const anchor = document.createElement('a')
  anchor.href = `about:srcdoc#${div.id}`
  anchor.innerHTML = page
  const li = document.createElement('li')
  li.appendChild(anchor)
  links.appendChild(li)
})