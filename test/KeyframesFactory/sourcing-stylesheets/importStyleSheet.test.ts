import { describe, it, expect } from 'vitest';
import KeyframeKit from '../../../src/index';


describe('importStyleSheet', () => {

  it('throws StyleSheetImportError on fetch failure', async () => {
    await expect(
      KeyframeKit.importStyleSheet('http://localhost:0/nonexistent.css')
    ).rejects.toThrow();
  });

});
