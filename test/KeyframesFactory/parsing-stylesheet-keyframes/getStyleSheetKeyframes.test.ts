import { describe, it, expect, assert } from 'vitest';
import KeyframeKit from '../../../src/index';
import { createStyleSheet } from './createStyleSheet-helper';


describe('getStyleSheetKeyframes', () => {

  it('extracts a named keyframes rule from a CSSStyleSheet', async () => {
    const sheet = await createStyleSheet(`
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
    `);

    const result = KeyframeKit.getStyleSheetKeyframes({ of: 'fadeIn', in: sheet });

    assert(result);
    expect(result).toBeInstanceOf(KeyframeKit.ParsedKeyframes);
    expect(result.keyframes).toHaveLength(2);
    expect(result.keyframes[0]).toMatchObject({ offset: 0, opacity: '0' });
    expect(result.keyframes[1]).toMatchObject({ offset: 1, opacity: '1' });
  });

  it('returns undefined for a non-existent rule name', async () => {
    const sheet = await createStyleSheet(`
      @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
    `);

    const result = KeyframeKit.getStyleSheetKeyframes({ of: 'doesNotExist', in: sheet });
    expect(result).toBeUndefined();
  });

  it('throws KeyframesRuleNameTypeError for non-string rule name', async () => {
    const sheet = await createStyleSheet('');

    expect(() => {
      KeyframeKit.getStyleSheetKeyframes({ of: 123 as any, in: sheet });
    }).toThrow(KeyframeKit.KeyframesRuleNameTypeError);
  });

  it('throws SourceTypeError for invalid source', () => {
    expect(() => {
      KeyframeKit.getStyleSheetKeyframes({ of: 'test', in: {} as any });
    }).toThrow(KeyframeKit.SourceTypeError);
  });

  it('searches through a StyleSheetList', async () => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        0% { transform: translateX(-100px); }
        100% { transform: translateX(0px); }
      }
    `;
    document.head.appendChild(style);

    try {
      const result = KeyframeKit.getStyleSheetKeyframes({
        of: 'slideIn',
        in: document.styleSheets
      });

      assert(result);
      expect(result).toBeInstanceOf(KeyframeKit.ParsedKeyframes);
      expect(result.keyframes).toHaveLength(2);
    } finally {
      document.head.removeChild(style);
    }
  });

});
