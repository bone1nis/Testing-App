import { createRoot } from 'react-dom/client'
import App from './components/app/App.tsx'

import "./assets/style/style.scss"

createRoot(document.getElementById('root')!).render(
    <App />
)
