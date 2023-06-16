import { AnalysisItem, Translation } from '@vocably/model';
import { addArticle } from '../lambdas/analyze/addArticle';
import { extractTranslation } from '../lambdas/analyze/extractTranslation';
import { LexicalaSearchResultItem } from '../lexicala';
import { extractHeadword } from './extractHeadword';

export const lexicalaSearchResultToAnalysisItem =
  (originalTranslation: Translation) =>
  async (item: LexicalaSearchResultItem): Promise<AnalysisItem> => {
    const translationResult = await extractTranslation(
      originalTranslation,
      item
    );
    const headword = extractHeadword(item);
    return {
      source: addArticle(item.language, headword),
      definitions: item.senses
        .slice(0, 3)
        .filter((s) => s.definition)
        .map((s) => s.definition),
      partOfSpeech: headword.pos,
      translation: translationResult.success ? translationResult.value : '',
    };
  };
