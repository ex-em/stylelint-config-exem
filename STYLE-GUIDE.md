# EXEM CSS 스타일 가이드

## Example

```css
@import url(x.css);
@import url(y.css);

/**
* Multi-line comment
*/

.selector-1,
.selector-2,
.selector-3[type='text'] {
  display: block;
  box-sizing: border-box;
  background: linear-gradient(#FFFFFF, rgba(0, 0, 0, 0.8));
  color: #333333;
}

.selector-a,
.selector-b:not(:first-child) {
  top: calc(calc(1em * 2) / 3);
  padding: 10px !important;
}

.selector-x {
  width: 10%;
}
.selector-y {
  width: 20%;
}

/* Single-line comment */

@media (min-width >= 60em) {
  .selector {
    /* Flush to parent comment */
    transform: translate(1, 1) scale(3);
  }
}

@media (orientation: portrait), projection and (color) {
  .selector-i + .selector-ii {
    background: color(rgb(0, 0, 0) lightness(50%));
    font-family: helvetica, 'arial black', sans-serif;
  }
}

/* Flush single line comment */
.selector {
  height: 10rem;
  margin: 10px;
  margin-bottom: 5px;
  background-image:
    repeating-linear-gradient(
      -45deg,
      transparent,
      #FFFFFF 25px,
      rgba(255, 255, 255, 1) 50px
    );
  box-shadow:
    0 1px 1px #000000,
    0 1px 0 #FFFFFF,
    2px 2px 1px 1px #CCCCCC inset;
}

@media
  screen and (min-resolution: 192dpi),
  screen and (min-resolution: 2dppx) {
  /* Flush nested single line comment */
  .selector::after {
    background-image: url(x.svg);
    content: '→';
  }
}
```

```scss
@import 'path/x';
@import 'path/y.css';

$action-color: #4285F4;
$reset-color: #CDDC39;

@mixin mixin-source() {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

%selector-source {
  box-sizing: border-box;
  width: 100%;
  padding: 16px 0;
  border-top: 1px rgba(#000000, 0.12) solid;

  &:hover {
    border: 2px rgba(#000000, 0.5) solid;
  }
}

.selector-x {
  @extend %selector-source;

  color: $action-color;

  @include mixin-source;
}

.selector-y {
  @extend %selector-source;

  color: $reset-color;
}
```

## Documentation

### Plugins

- [`stylelint-order`](https://github.com/hudochenkov/stylelint-order)
- [`stylelint-scss`](https://github.com/kristerkari/stylelint-scss)
