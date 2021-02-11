import { sentenceCase } from '../../utils/sentence-case';

describe('sentenceCase', () => {
  it('should be a function', () => {
    expect(typeof sentenceCase).toBe('function');
  });
});
