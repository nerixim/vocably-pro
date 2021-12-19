import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'vocably-spinner',
  styleUrl: 'vocably-spinner.scss',
  shadow: true,
})
export class VocablySpinner {
  render() {
    return (
      <Host>
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </Host>
    );
  }
}
