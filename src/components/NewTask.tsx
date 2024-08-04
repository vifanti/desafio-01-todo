import { PlusCircle } from '@phosphor-icons/react';

import styles from './NewTask.module.css'

export function NewTask () {
  return (
    <div className={styles.newTask}>
      <input />
      <button>Criar <PlusCircle size={20} /></button>
    </div>
  )
}