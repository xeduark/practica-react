import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import styles from './contenido.module.css'
import Header from './Header.jsx'
import Contenido from './Contenido.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <div className={styles.contenido}>
      <Contenido />
      <section>
        <article>
          <h2>Título de contenido #1</h2>
        </article>
        <article>
          <h2>Título de contenido #2</h2>
        </article>
      </section>
    </div>
  </StrictMode>,
)
