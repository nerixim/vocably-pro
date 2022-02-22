/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Result, TranslationCards } from "@vocably/model";
export namespace Components {
    interface VocablyButton {
    }
    interface VocablyDefinition {
        "text": string;
    }
    interface VocablyLogo {
    }
    interface VocablyPopup {
    }
    interface VocablySpinner {
    }
    interface VocablyTranslation {
        "phrase": string;
        "result": Result<TranslationCards> | null;
    }
    interface VocablyUnauthorized {
    }
}
declare global {
    interface HTMLVocablyButtonElement extends Components.VocablyButton, HTMLStencilElement {
    }
    var HTMLVocablyButtonElement: {
        prototype: HTMLVocablyButtonElement;
        new (): HTMLVocablyButtonElement;
    };
    interface HTMLVocablyDefinitionElement extends Components.VocablyDefinition, HTMLStencilElement {
    }
    var HTMLVocablyDefinitionElement: {
        prototype: HTMLVocablyDefinitionElement;
        new (): HTMLVocablyDefinitionElement;
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
    interface HTMLVocablySpinnerElement extends Components.VocablySpinner, HTMLStencilElement {
    }
    var HTMLVocablySpinnerElement: {
        prototype: HTMLVocablySpinnerElement;
        new (): HTMLVocablySpinnerElement;
    };
    interface HTMLVocablyTranslationElement extends Components.VocablyTranslation, HTMLStencilElement {
    }
    var HTMLVocablyTranslationElement: {
        prototype: HTMLVocablyTranslationElement;
        new (): HTMLVocablyTranslationElement;
    };
    interface HTMLVocablyUnauthorizedElement extends Components.VocablyUnauthorized, HTMLStencilElement {
    }
    var HTMLVocablyUnauthorizedElement: {
        prototype: HTMLVocablyUnauthorizedElement;
        new (): HTMLVocablyUnauthorizedElement;
    };
    interface HTMLElementTagNameMap {
        "vocably-button": HTMLVocablyButtonElement;
        "vocably-definition": HTMLVocablyDefinitionElement;
        "vocably-logo": HTMLVocablyLogoElement;
        "vocably-popup": HTMLVocablyPopupElement;
        "vocably-spinner": HTMLVocablySpinnerElement;
        "vocably-translation": HTMLVocablyTranslationElement;
        "vocably-unauthorized": HTMLVocablyUnauthorizedElement;
    }
}
declare namespace LocalJSX {
    interface VocablyButton {
    }
    interface VocablyDefinition {
        "text"?: string;
    }
    interface VocablyLogo {
    }
    interface VocablyPopup {
        "onClose"?: (event: CustomEvent<void>) => void;
    }
    interface VocablySpinner {
    }
    interface VocablyTranslation {
        "phrase"?: string;
        "result"?: Result<TranslationCards> | null;
    }
    interface VocablyUnauthorized {
        "onSignIn"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "vocably-button": VocablyButton;
        "vocably-definition": VocablyDefinition;
        "vocably-logo": VocablyLogo;
        "vocably-popup": VocablyPopup;
        "vocably-spinner": VocablySpinner;
        "vocably-translation": VocablyTranslation;
        "vocably-unauthorized": VocablyUnauthorized;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "vocably-button": LocalJSX.VocablyButton & JSXBase.HTMLAttributes<HTMLVocablyButtonElement>;
            "vocably-definition": LocalJSX.VocablyDefinition & JSXBase.HTMLAttributes<HTMLVocablyDefinitionElement>;
            "vocably-logo": LocalJSX.VocablyLogo & JSXBase.HTMLAttributes<HTMLVocablyLogoElement>;
            "vocably-popup": LocalJSX.VocablyPopup & JSXBase.HTMLAttributes<HTMLVocablyPopupElement>;
            "vocably-spinner": LocalJSX.VocablySpinner & JSXBase.HTMLAttributes<HTMLVocablySpinnerElement>;
            "vocably-translation": LocalJSX.VocablyTranslation & JSXBase.HTMLAttributes<HTMLVocablyTranslationElement>;
            "vocably-unauthorized": LocalJSX.VocablyUnauthorized & JSXBase.HTMLAttributes<HTMLVocablyUnauthorizedElement>;
        }
    }
}
