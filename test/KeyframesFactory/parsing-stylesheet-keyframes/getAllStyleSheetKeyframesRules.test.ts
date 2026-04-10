import { describe, it, expect } from 'vitest';
import KeyframeKit from '../../../src/index';
import { createStyleSheet } from './createStyleSheet-helper';


describe('getAllStyleSheetKeyframesRules', () => {

  it('extracts all keyframes rules from a stylesheet', async () => {
    const sheet = await createStyleSheet(`
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes slideUp {
        0% { transform: translateY(100px); }
        100% { transform: translateY(0px); }
      }
      .some-class { color: red; }
    `);

    const result = KeyframeKit.getAllStyleSheetKeyframesRules({ in: sheet });

    expect(Object.keys(result)).toHaveLength(2);
    expect(result['fadeIn']).toBeInstanceOf(KeyframeKit.ParsedKeyframes);
    expect(result['slideUp']).toBeInstanceOf(KeyframeKit.ParsedKeyframes);
  });

  it('returns empty object when no keyframes rules exist', async () => {
    const sheet = await createStyleSheet('.foo { color: red; }');

    const result = KeyframeKit.getAllStyleSheetKeyframesRules({ in: sheet });
    expect(Object.keys(result)).toHaveLength(0);
  });

  it('works with StyleSheetList', async () => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
    `;
    document.head.appendChild(style);

    try {
      const result = KeyframeKit.getAllStyleSheetKeyframesRules({
        in: document.styleSheets
      });
      expect(result['bounce']).toBeInstanceOf(KeyframeKit.ParsedKeyframes);
    } finally {
      document.head.removeChild(style);
    }
  });

  it('throws SourceTypeError for invalid source', () => {
    expect(() => {
      KeyframeKit.getAllStyleSheetKeyframesRules({ in: 'bad' as any });
    }).toThrow(KeyframeKit.SourceTypeError);
  });

});
