export const Errors = [
  'AS_IS_TRANSLATION_REQUEST_EXCEPTION',
  'AS_IS_TRANSLATION_UNABLE_TO_TRANSLATE',
  'TRANSLATION_REQUEST_MISSING_PHRASE',
  'TRANSLATION_REQUEST_UNAVAILABLE_REQUESTED_LANGUAGE',
  'TRANSLATION_REQUEST_UNAVAILABLE_DETECTED_LANGUAGE',
  'S3_SAVE_ERROR',
  'S3_LOAD_ERROR',
  'S3_LOAD_MISSING_KEY',
  'S3_REMOVE_ERROR',
  'CARD_COLLECTION_UPDATE_MISSING_CARD',
] as const;

export type VocablyErrorCode = typeof Errors[number];
