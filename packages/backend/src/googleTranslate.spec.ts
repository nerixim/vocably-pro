import { googleTranslate } from './googleTranslate';

describe('googleTranslate', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('returns successful result', async () => {
    const result = await googleTranslate('машина', null, 'en');

    if (result.success === false) {
      expect(result.success).toBeTruthy();
      return;
    }

    expect(result.value.target).toContain('machine');
    expect(result.value.sourceLanguage).toEqual('bg');
  });

  it('considers input language', async () => {
    const result = await googleTranslate('ывываыва', 'nl', 'en');

    if (result.success === false) {
      console.log({ inappropriateResult: result });
      expect(result.success).toBeTruthy();
      return;
    }

    expect(result.value.target).toEqual('ывываыва');
    expect(result.value.sourceLanguage).toEqual('nl');
  });

  it('works properly when source and target languages are the same', async () => {
    const result = await googleTranslate('asylum', 'en', 'en');

    if (result.success === false) {
      console.log({ inappropriateResult: result });
      expect(result.success).toBeTruthy();
      return;
    }

    expect(result.value.target).toEqual('asylum');
    expect(result.value.sourceLanguage).toEqual('en');
  });
});
