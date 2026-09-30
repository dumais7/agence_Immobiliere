import styles from './Entete.module.css';

// on réutilise toujours la même entête dans les sections projets, services, apropos, nous joindre
// Évite la répétition
export default function Entete({soustitre, titre, children}) {
  return (
    <div className={styles.entete}>
        <span className={styles.soustitre}>{soustitre}</span>
        <h2 className={styles.titre}>{titre}</h2>
        {children && <p className={styles.texte}>{children}</p>}
    </div>
  )
}
