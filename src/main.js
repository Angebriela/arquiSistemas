import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <h1> Cloudfront </h1>
  <p> La página trabajada con vite y con despliegue en Github </p>
  <p>Build: ${new Date().getFullYear()} </p>
`
