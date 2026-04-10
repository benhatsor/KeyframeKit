import { describe, it, expect } from 'vitest';
import KeyframeKit from '../../../src/index';


describe('getDocumentStyleSheetsOnLoad', () => {

  it('returns document.styleSheets when document is already loaded', async () => {
    const sheets = await KeyframeKit.getDocumentStyleSheetsOnLoad();
    expect(sheets).toBe(document.styleSheets);
  });

});
