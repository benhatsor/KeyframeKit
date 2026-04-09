import { describe, it, expect } from 'vitest';
import Keyframes from '../../src/index';


describe('getDocumentStyleSheetsOnLoad', () => {

  it('returns document.styleSheets when document is already loaded', async () => {
    const sheets = await Keyframes.getDocumentStyleSheetsOnLoad();
    expect(sheets).toBe(document.styleSheets);
  });

});
