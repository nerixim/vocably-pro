/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AddCardPayload, GoogleLanguage, RemoveCardPayload, Result, TranslationCard, TranslationCards } from "@vocably/model";
export namespace Components {
    interface VocablyButton {
    }
    interface VocablyCloseButton {
    }
    interface VocablyIconAdd {
    }
    interface VocablyIconRemove {
    }
    interface VocablyIconSpin {
    }
    interface VocablyLanguage {
        "sourceLanguage": string;
        "targetLanguage": string;
        "waiting": boolean;
    }
    interface VocablyLogo {
    }
    interface VocablyPopup {
    }
    interface VocablySideB {
        "item": TranslationCard;
    }
    interface VocablySignIn {
    }
    interface VocablySpinner {
    }
    interface VocablySubscribe {
        "trial": boolean;
    }
    interface VocablyTranslation {
        "existingLanguages": GoogleLanguage[];
        "isFeedbackEnabled": boolean;
        "isUpdating": TranslationCard | null;
        "language": string;
        "loading": boolean;
        "phrase": string;
        "result": Result<TranslationCards> | null;
    }
}
export interface VocablyCloseButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVocablyCloseButtonElement;
}
export interface VocablyLanguageCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVocablyLanguageElement;
}
export interface VocablyPopupCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVocablyPopupElement;
}
export interface VocablySignInCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVocablySignInElement;
}
export interface VocablySubscribeCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVocablySubscribeElement;
}
export interface VocablyTranslationCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVocablyTranslationElement;
}
declare global {
    interface HTMLVocablyButtonElement extends Components.VocablyButton, HTMLStencilElement {
    }
    var HTMLVocablyButtonElement: {
        prototype: HTMLVocablyButtonElement;
        new (): HTMLVocablyButtonElement;
    };
    interface HTMLVocablyCloseButtonElement extends Components.VocablyCloseButton, HTMLStencilElement {
    }
    var HTMLVocablyCloseButtonElement: {
        prototype: HTMLVocablyCloseButtonElement;
        new (): HTMLVocablyCloseButtonElement;
    };
    interface HTMLVocablyIconAddElement extends Components.VocablyIconAdd, HTMLStencilElement {
    }
    var HTMLVocablyIconAddElement: {
        prototype: HTMLVocablyIconAddElement;
        new (): HTMLVocablyIconAddElement;
    };
    interface HTMLVocablyIconRemoveElement extends Components.VocablyIconRemove, HTMLStencilElement {
    }
    var HTMLVocablyIconRemoveElement: {
        prototype: HTMLVocablyIconRemoveElement;
        new (): HTMLVocablyIconRemoveElement;
    };
    interface HTMLVocablyIconSpinElement extends Components.VocablyIconSpin, HTMLStencilElement {
    }
    var HTMLVocablyIconSpinElement: {
        prototype: HTMLVocablyIconSpinElement;
        new (): HTMLVocablyIconSpinElement;
    };
    interface HTMLVocablyLanguageElement extends Components.VocablyLanguage, HTMLStencilElement {
    }
    var HTMLVocablyLanguageElement: {
        prototype: HTMLVocablyLanguageElement;
        new (): HTMLVocablyLanguageElement;
    };
    interface HTMLVocablyLogoElement extends Components.VocablyLogo, HTMLStencilElement {
    }
    var HTMLVocablyLogoElement: {
        prototype: HTMLVocablyLogoElement;
        new (): HTMLVocablyLogoElement;
    };
    interface HTMLVocablyPopupElement extends Components.VocablyPopup, HTMLStencilElement {
    }
    var HTMLVocablyPopupElement: {
        prototype: HTMLVocablyPopupElement;
        new (): HTMLVocablyPopupElement;
    };
    interface HTMLVocablySideBElement extends Components.VocablySideB, HTMLStencilElement {
    }
    var HTMLVocablySideBElement: {
        prototype: HTMLVocablySideBElement;
        new (): HTMLVocablySideBElement;
    };
    interface HTMLVocablySignInElement extends Components.VocablySignIn, HTMLStencilElement {
    }
    var HTMLVocablySignInElement: {
        prototype: HTMLVocablySignInElement;
        new (): HTMLVocablySignInElement;
    };
    interface HTMLVocablySpinnerElement extends Components.VocablySpinner, HTMLStencilElement {
    }
    var HTMLVocablySpinnerElement: {
        prototype: HTMLVocablySpinnerElement;
        new (): HTMLVocablySpinnerElement;
    };
    interface HTMLVocablySubscribeElement extends Components.VocablySubscribe, HTMLStencilElement {
    }
    var HTMLVocablySubscribeElement: {
        prototype: HTMLVocablySubscribeElement;
        new (): HTMLVocablySubscribeElement;
    };
    interface HTMLVocablyTranslationElement extends Components.VocablyTranslation, HTMLStencilElement {
    }
    var HTMLVocablyTranslationElement: {
        prototype: HTMLVocablyTranslationElement;
        new (): HTMLVocablyTranslationElement;
    };
    interface HTMLElementTagNameMap {
        "vocably-button": HTMLVocablyButtonElement;
        "vocably-close-button": HTMLVocablyCloseButtonElement;
        "vocably-icon-add": HTMLVocablyIconAddElement;
        "vocably-icon-remove": HTMLVocablyIconRemoveElement;
        "vocably-icon-spin": HTMLVocablyIconSpinElement;
        "vocably-language": HTMLVocablyLanguageElement;
        "vocably-logo": HTMLVocablyLogoElement;
        "vocably-popup": HTMLVocablyPopupElement;
        "vocably-side-b": HTMLVocablySideBElement;
        "vocably-sign-in": HTMLVocablySignInElement;
        "vocably-spinner": HTMLVocablySpinnerElement;
        "vocably-subscribe": HTMLVocablySubscribeElement;
        "vocably-translation": HTMLVocablyTranslationElement;
    }
}
declare namespace LocalJSX {
    interface VocablyButton {
    }
    interface VocablyCloseButton {
        "onClose"?: (event: VocablyCloseButtonCustomEvent<void>) => void;
    }
    interface VocablyIconAdd {
    }
    interface VocablyIconRemove {
    }
    interface VocablyIconSpin {
    }
    interface VocablyLanguage {
        "onConfirm"?: (event: VocablyLanguageCustomEvent<{
    sourceLanguage: string;
    targetLanguage: string;
  }>) => void;
        "sourceLanguage"?: string;
        "targetLanguage"?: string;
        "waiting"?: boolean;
    }
    interface VocablyLogo {
    }
    interface VocablyPopup {
        "onClose"?: (event: VocablyPopupCustomEvent<void>) => void;
    }
    interface VocablySideB {
        "item"?: TranslationCard;
    }
    interface VocablySignIn {
        "onConfirm"?: (event: VocablySignInCustomEvent<any>) => void;
    }
    interface VocablySpinner {
    }
    interface VocablySubscribe {
        "onConfirm"?: (event: VocablySubscribeCustomEvent<any>) => void;
        "trial"?: boolean;
    }
    interface VocablyTranslation {
        "existingLanguages"?: GoogleLanguage[];
        "isFeedbackEnabled"?: boolean;
        "isUpdating"?: TranslationCard | null;
        "language"?: string;
        "loading"?: boolean;
        "onAddCard"?: (event: VocablyTranslationCustomEvent<AddCardPayload>) => void;
        "onChangeLanguage"?: (event: VocablyTranslationCustomEvent<string>) => void;
        "onRemoveCard"?: (event: VocablyTranslationCustomEvent<RemoveCardPayload>) => void;
        "phrase"?: string;
        "result"?: Result<TranslationCards> | null;
    }
    interface IntrinsicElements {
        "vocably-button": VocablyButton;
        "vocably-close-button": VocablyCloseButton;
        "vocably-icon-add": VocablyIconAdd;
        "vocably-icon-remove": VocablyIconRemove;
        "vocably-icon-spin": VocablyIconSpin;
        "vocably-language": VocablyLanguage;
        "vocably-logo": VocablyLogo;
        "vocably-popup": VocablyPopup;
        "vocably-side-b": VocablySideB;
        "vocably-sign-in": VocablySignIn;
        "vocably-spinner": VocablySpinner;
        "vocably-subscribe": VocablySubscribe;
        "vocably-translation": VocablyTranslation;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "vocably-button": LocalJSX.VocablyButton & JSXBase.HTMLAttributes<HTMLVocablyButtonElement>;
            "vocably-close-button": LocalJSX.VocablyCloseButton & JSXBase.HTMLAttributes<HTMLVocablyCloseButtonElement>;
            "vocably-icon-add": LocalJSX.VocablyIconAdd & JSXBase.HTMLAttributes<HTMLVocablyIconAddElement>;
            "vocably-icon-remove": LocalJSX.VocablyIconRemove & JSXBase.HTMLAttributes<HTMLVocablyIconRemoveElement>;
            "vocably-icon-spin": LocalJSX.VocablyIconSpin & JSXBase.HTMLAttributes<HTMLVocablyIconSpinElement>;
            "vocably-language": LocalJSX.VocablyLanguage & JSXBase.HTMLAttributes<HTMLVocablyLanguageElement>;
            "vocably-logo": LocalJSX.VocablyLogo & JSXBase.HTMLAttributes<HTMLVocablyLogoElement>;
            "vocably-popup": LocalJSX.VocablyPopup & JSXBase.HTMLAttributes<HTMLVocablyPopupElement>;
            "vocably-side-b": LocalJSX.VocablySideB & JSXBase.HTMLAttributes<HTMLVocablySideBElement>;
            "vocably-sign-in": LocalJSX.VocablySignIn & JSXBase.HTMLAttributes<HTMLVocablySignInElement>;
            "vocably-spinner": LocalJSX.VocablySpinner & JSXBase.HTMLAttributes<HTMLVocablySpinnerElement>;
            "vocably-subscribe": LocalJSX.VocablySubscribe & JSXBase.HTMLAttributes<HTMLVocablySubscribeElement>;
            "vocably-translation": LocalJSX.VocablyTranslation & JSXBase.HTMLAttributes<HTMLVocablyTranslationElement>;
        }
    }
}
