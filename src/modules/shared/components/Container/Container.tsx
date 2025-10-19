import classNames from 'classnames'
import {CSSProperties, PropsWithChildren} from 'react'
import styles from './Container.module.scss'

type Props = PropsWithChildren & {
   className?: string
   style?: CSSProperties
}
export function Container({children, className, style}: Props) {
   return (
      <div className={classNames(styles.container, className)} style={style}>
         {children}
      </div>
   )
}
