// Regression tests for: lucide-react@1.62.0 upgrade
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ArrowUpRight } from 'lucide-react';

describe('lucide-react icon rendering', () => {
  it('renders the ArrowUpRight icon as an accessible SVG', () => {
    const markup = renderToStaticMarkup(
      createElement(ArrowUpRight, { 'aria-label': 'External link' }),
    );

    expect(markup).toContain('<svg');
    expect(markup).toContain('aria-label="External link"');
  });
});
