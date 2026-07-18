/* Adapted from React Bits by David Haz — MIT + Commons Clause. */
export default function ShinyText({ text, className = '' }) {
  return <span className={`shiny-text ${className}`}>{text}</span>;
}

