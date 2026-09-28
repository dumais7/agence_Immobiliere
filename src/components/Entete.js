import styles from './Entete.module.css';

// on reutilise toujours la meme entete dans les sections projets, services, apropos, nous joindre
// evite la repitition
export default function Entete({}) {
  return (
    <div className={styles.entete}>
        <span className={styles.soustitre}>{soustitre}</span>
        <h2 className={styles.titre}>{titre}</h2>
        {children && <p className={styles.texte}>{children}</p>}
    </div>
  )
}
