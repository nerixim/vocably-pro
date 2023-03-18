import { Analysis, SrsCard, SrsItem } from '@vocably/model';
import { join } from '@vocably/sulna';
import { SimpleCard } from '../SimpleCard';

export const makeSimpleCards = (analysis: Analysis): SimpleCard[] => {
  if (analysis.items && analysis.items.length > 0) {
    return analysis.items.map((item) => ({
      language: analysis.translation.sourceLanguage,
      source: item.source,
      definition: join(item.definitions),
      translation: item.translation,
      partOfSpeech: item.partOfSpeech ?? '',
    }));
  }

  return [
    {
      language: analysis.translation.source,
      source: analysis.source,
      translation: analysis.translation.target,
      definition: '',
      partOfSpeech: '',
    },
  ];
};
