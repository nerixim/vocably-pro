/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CardItem, Language, Result, TranslationCards } from "@vocably/model";
export namespace Components {
    interface VocablyAlert {
        "cta": string;
        "message": string;
    }
    interface VocablyButton {
    }
    interface VocablyGoogleIcon {
    }
    interface VocablyLogo {
    }
    interface VocablyPopup {
    }
    interface VocablySideB {
        "item": CardItem;
    }
    interface VocablySignIn {
    }
    interface VocablySpinner {
    }
    interface VocablySubscribe {
        "trial": boolean;
    }
    interface VocablyTranslation {
        "existingLanguages": Language[];
        "loading": boolean;
        "phrase": string;
        "result": Result<TranslationCards> | null;
    }
}
declare global {
    interface HTMLVocablyAlertElement extends Components.VocablyAlert, HTMLStencilElement {
    }
    var HTMLVocablyAlertElement: {
        prototype: HTMLVocablyAlertElement;
        new (): HTMLVocablyAlertElement;
    };
    interface HTMLVocablyButtonElement extends Components.VocablyButton, HTMLStencilElement {
    }
    var HTMLVocablyButtonElement: {
        prototype: HTMLVocablyButtonElement;
        new (): HTMLVocablyButtonElement;
    };
    interface HTMLVocablyGoogleIconElement extends Components.VocablyGoogleIcon, HTMLStencilElement {
    }
    var HTMLVocablyGoogleIconElement: {
        prototype: HTMLVocablyGoogleIconElement;
        new (): HTMLVocablyGoogleIconElement;
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
        "vocably-alert": HTMLVocablyAlertElement;
        "vocably-button": HTMLVocablyButtonElement;
        "vocably-google-icon": HTMLVocablyGoogleIconElement;
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
    interface VocablyAlert {
        "cta"?: string;
        "message"?: string;
        "onConfirm"?: (event: CustomEvent<any>) => void;
    }
    interface VocablyButton {
    }
    interface VocablyGoogleIcon {
    }
    interface VocablyLogo {
    }
    interface VocablyPopup {
        "onClose"?: (event: CustomEvent<void>) => void;
    }
    interface VocablySideB {
        "item"?: CardItem;
    }
    interface VocablySignIn {
        "onConfirm"?: (event: CustomEvent<any>) => void;
    }
    interface VocablySpinner {
    }
    interface VocablySubscribe {
        "onConfirm"?: (event: CustomEvent<any>) => void;
        "trial"?: boolean;
    }
    interface VocablyTranslation {
        "existingLanguages"?: Language[];
        "loading"?: boolean;
        "onLanguage"?: (event: CustomEvent<string>) => void;
        "phrase"?: string;
        "result"?: Result<TranslationCards> | null;
    }
    interface IntrinsicElements {
        "vocably-alert": VocablyAlert;
        "vocably-button": VocablyButton;
        "vocably-google-icon": VocablyGoogleIcon;
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
            "vocably-alert": LocalJSX.VocablyAlert & JSXBase.HTMLAttributes<HTMLVocablyAlertElement>;
            "vocably-button": LocalJSX.VocablyButton & JSXBase.HTMLAttributes<HTMLVocablyButtonElement>;
            "vocably-google-icon": LocalJSX.VocablyGoogleIcon & JSXBase.HTMLAttributes<HTMLVocablyGoogleIconElement>;
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
