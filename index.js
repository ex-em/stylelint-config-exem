'use strict';

module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-html',
    'stylelint-config-html/vue',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'alpha-value-notation': 'number',

    // at-rule
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
    'at-rule-no-vendor-prefix': true,

    'color-function-notation': 'legacy',
    'color-hex-length': 'long',

    // comment
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
    'comment-whitespace-inside': 'always',

    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'custom-media-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected custom media query name to be kebab-case',
      },
    ],
    'custom-property-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected custom property name to be kebab-case',
      },
    ],

    // declaration
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],

    'font-family-name-quotes': 'always-where-recommended',

    // function
    'function-name-case': 'lower',
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: [/^\*|\+|-|\//g],
      },
    ],
    'function-url-quotes': 'always',

    'hue-degree-notation': 'angle',
    'import-notation': 'string',
    'keyframes-name-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected keyframe name to be kebab-case',
      },
    ],
    // general
    'length-zero-no-unit': true,
    'max-nesting-depth': 3,
    'no-empty-source': true,

    // media
    'media-feature-name-no-vendor-prefix': true,

    // number
    'number-max-precision': 4,

    // property
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'never-multi-line',
      {
        ignore: ['after-comment', 'inside-block'],
      },
    ],

    // scss
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-_]+[a-z0-9]+)?$',
    'scss/at-rule-conditional-no-parentheses': true,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-_]+[a-z0-9]+)?$',
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-_]+[a-z0-9]+)?$',
    'scss/selector-no-redundant-nesting-selector': true,

    // selector
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': '^[a-z][a-zA-Z0-9_-]+$',
    'selector-id-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected id selector to be kebab-case',
      },
    ],
    'selector-max-compound-selectors': 3,
    'selector-no-vendor-prefix': true,
    'selector-not-notation': 'complex',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-no-qualifying-type': true,

    // value
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true,

    // order
    'order/order': [
      {
        type: 'at-rule',
        name: 'import',
      },
      'custom-properties',
      'dollar-variables',
      {
        type: 'at-rule',
        name: 'extend',
      },
      'declarations',
      'at-rules',
    ],
    'order/properties-order': [
      // Display
      'display',
      'box-sizing',
      // Position
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      // Flex
      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      // Grid
      'grid',
      'grid-area',
      'grid-template',
      'grid-template-areas',
      'grid-template-rows',
      'grid-template-columns',
      'grid-row',
      'grid-row-start',
      'grid-row-end',
      'grid-column',
      'grid-column-start',
      'grid-column-end',
      'grid-auto-rows',
      'grid-auto-columns',
      'grid-auto-flow',
      'grid-gap',
      'grid-row-gap',
      'grid-column-gap',
      'gap',
      'row-gap',
      'column-gap',
      // Layout
      'place-items',
      'align-content',
      'align-items',
      'align-self',
      'justify-content',
      'justify-items',
      'justify-self',
      // Box
      'float',
      'visibility',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clear',
      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',
      'opacity',
      'filter',
      'resize',
      'cursor',
      'pointer-events',
      'user-select',
      // Table
      'table-layout',
      'empty-cells',
      'caption-side',
      'border-spacing',
      'border-collapse',
      // Border
      'border',
      'border-spacing',
      'border-collapse',
      'border-width',
      'border-style',
      'border-color',
      'border-top',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-right',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-bottom',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'border-left',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-image',
      'border-image-source',
      'border-image-slice',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',
      'border-top-image',
      'border-right-image',
      'border-bottom-image',
      'border-left-image',
      'border-corner-image',
      'border-top-left-image',
      'border-top-right-image',
      'border-bottom-right-image',
      'border-bottom-left-image',
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
      // Background
      'background',
      'background-color',
      'background-image',
      'background-attachment',
      'background-position',
      'background-position-x',
      'background-position-y',
      'background-clip',
      'background-origin',
      'background-size',
      'background-repeat',
      'box-shadow',
      // Font
      'font',
      'font-family',
      'font-size',
      'font-style',
      'font-weight',
      'font-variant',
      'font-size-adjust',
      'font-stretch',
      'line-height',
      'letter-spacing',
      'color',
      'text-align',
      'text-align-last',
      'text-decoration',
      'text-indent',
      'text-justify',
      'text-transform',
      'text-overflow',
      'text-shadow',
      'white-space',
      'word-spacing',
      'word-wrap',
      'word-break',
      'hyphens',
      'quotes',
      'counter-reset',
      'counter-increment',
      // Animate
      'transition',
      'transition-delay',
      'transition-timing-function',
      'transition-duration',
      'transition-property',
      'transform',
      'transform-origin',
      'animation',
      'animation-name',
      'animation-duration',
      'animation-play-state',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      //
      'content',
    ],
  },
};
