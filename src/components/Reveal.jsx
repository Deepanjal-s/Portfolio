import { useReveal } from '../hooks/useReveal'

/**
 * Wrapper that fades/slides its children in on scroll.
 * `delay` staggers sibling reveals (ms). `as` picks the rendered element.
 */
function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useReveal()
  const { style, ...other } = rest

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...other}
    >
      {children}
    </Tag>
  )
}

export default Reveal
