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
    interface VocablyPopup {
    }
    interface VocablySideB {
        "text": string;
    }
    interface VocablySpinner {
    }
    interface VocablyTranslation {
        "phrase": string;
        "result": Result<TranslationCards> | null;
    }
}
declare global {
    interface HTMLVocablyButtonElement extends Components.VocablyButton, HTMLStencilElement {
    }
    var HTMLVocablyButtonElement: {
        prototype: HTMLVocablyButtonElement;
        new (): HTMLVocablyButtonElement;
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
    interface HTMLElementTagNameMap {
        "vocably-button": HTMLVocablyButtonElement;
        "vocably-popup": HTMLVocablyPopupElement;
        "vocably-side-b": HTMLVocablySideBElement;
        "vocably-spinner": HTMLVocablySpinnerElement;
        "vocably-translation": HTMLVocablyTranslationElement;
    }
}
declare namespace LocalJSX {
    interface VocablyButton {
    }
    interface VocablyPopup {
        "onClose"?: (event: CustomEvent<void>) => void;
    }
    interface VocablySideB {
        "text"?: string;
    }
    interface VocablySpinner {
    }
    interface VocablyTranslation {
        "phrase"?: string;
        "result"?: Result<TranslationCards> | null;
    }
    interface IntrinsicElements {
        "vocably-button": VocablyButton;
        "vocably-popup": VocablyPopup;
        "vocably-side-b": VocablySideB;
        "vocably-spinner": VocablySpinner;
        "vocably-translation": VocablyTranslation;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "vocably-button": LocalJSX.VocablyButton & JSXBase.HTMLAttributes<HTMLVocablyButtonElement>;
            "vocably-popup": LocalJSX.VocablyPopup & JSXBase.HTMLAttributes<HTMLVocablyPopupElement>;
            "vocably-side-b": LocalJSX.VocablySideB & JSXBase.HTMLAttributes<HTMLVocablySideBElement>;
            "vocably-spinner": LocalJSX.VocablySpinner & JSXBase.HTMLAttributes<HTMLVocablySpinnerElement>;
            "vocably-translation": LocalJSX.VocablyTranslation & JSXBase.HTMLAttributes<HTMLVocablyTranslationElement>;
        }
    }
}
