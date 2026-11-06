import { Fragment } from 'react';

/**
 * Renders a content.ts string with light formatting:
 *   **bold** → <b>bold</b>
 *   \n       → <br />
 */
export default function RichText({ text }: { text: string }) {
  return text.split('\n').map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line.split(/\*\*(.+?)\*\*/).map((part, j) => (j % 2 === 1 ? <b key={j}>{part}</b> : part))}
    </Fragment>
  ));
}
