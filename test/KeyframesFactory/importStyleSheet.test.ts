import { describe, it, expect } from 'vitest';
import Keyframes from '../../src/index';


describe('importStyleSheet', () => {

  it('throws StyleSheetImportError on fetch failure', async () => {
    await expect(
      Keyframes.importStyleSheet('http://localhost:0/nonexistent.css')
    ).rejects.toThrow();
  });

});
