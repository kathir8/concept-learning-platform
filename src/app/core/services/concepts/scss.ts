import { Concept } from '../../models/concept.model';

export const scssConcepts: Concept[] = [
    {
        id: 'scss-overview',
        title: 'What is SCSS?',
        category: 'SCSS',
        slangDefinition: `SCSS na CSS-ku extra features add pannradhu so reusable and maintain panna easy aagum. Idhu styling clean-a manage panna help pannum. Indha example-la variable define pannitu adha reuse pannitu color apply pannrom.`,
        interviewDefinition: `SCSS is an extension of CSS that adds features like variables to improve maintainability and reusability. It simplifies styling. The example shows defining a variable and using it in a CSS rule.`,
        example: `// SCSS compiles down to standard CSS
$primary: #007bff;
.box { color: $primary; }`
    },
    {
        id: 'scss-nesting',
        title: 'Nesting',
        category: 'SCSS',
        slangDefinition: `Nesting use pannradhu parent-child structure clean-a ezhutha so repetition avoid pannalaam. Idhu readable code kudukkum. Indha example-la container inside p and button styles nest pannirukkom.`,
        interviewDefinition: `Nesting allows writing CSS in a hierarchical structure, reducing repetition and improving readability. The example shows nesting child selectors inside a parent container.`,
        example: `.container {
  padding: 20px;
  p {
    font-size: 16px;
    line-height: 1.5;
  }
  .button {
    background-color: #007bff;
    &:hover {
      background-color: #0056b3;
    }
  }
}`
    },
    {
        id: 'scss-variables',
        title: 'Variables',
        category: 'SCSS',
        slangDefinition: `Variables use pannradhu common values store pannitu reuse panna so easy maintenance. Idhu changes fast-a panna help pannum. Indha example-la color and font-size variable define pannitu use pannrom.`,
        interviewDefinition: `SCSS variables store reusable values to maintain consistency and simplify updates. They improve maintainability. The example shows defining and using variables for color and font size.`,
        example: `// Define variables
$primary-color: #007bff;
$font-size-medium: 16px;

// Use them
.container {
  background-color: $primary-color;
  font-size: $font-size-medium;
}`
    },
    {
        id: 'scss-functions',
        title: 'Functions',
        category: 'SCSS',
        slangDefinition: `Functions use pannradhu calculation pannitu value return panna so dynamic styling panna mudiyum. Idhu reusable logic kudukkum. Indha example-la function create pannitu width calculate pannitu apply pannrom.`,
        interviewDefinition: `SCSS functions are used to compute and return dynamic values for styling. They improve reusability and flexibility. The example shows a function calculating width based on input.`,
        example: `@function calculate-width($percentage) {
  @return $percentage * 10;
}

.container {
  width: calculate-width(50) + px; // Outputs: 500px
}`
    },
    {
        id: 'scss-partials',
        title: 'Partials & Importing',
        category: 'SCSS',
        slangDefinition: `Partials use pannradhu SCSS files split pannitu manage panna so big file avoid pannalaam. Idhu maintain easy aagum. Indha example-la _variables.scss-la variable define pannitu main.scss-la @import use pannitu reuse pannrom.`,
        interviewDefinition: `Partials help split SCSS into smaller reusable files, improving maintainability. They are imported into a main file for compilation. The example shows defining a variable in a partial and importing it into another file.`,
        example: `// _variables.scss (partial)
$primary-color: #007bff;

// main.scss
@import "variables";

.container {
  background-color: $primary-color;
}`
    },
    {
        id: 'scss-mixins',
        title: 'Mixins',
        category: 'SCSS',
        slangDefinition: `Mixins use pannradhu reusable CSS group create panna so duplicate code avoid pannalaam. Idhu consistent styling-ku useful. Indha example-la mixin create pannitu @include use pannitu button style apply pannrom.`,
        interviewDefinition: `Mixins are used to reuse a group of CSS properties across multiple selectors, reducing duplication. They improve consistency. The example shows defining a mixin and including it in a class.`,
        example: `@mixin button {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 4px;
}

.button-primary {
  @include button;
  background-color: #007bff;
}`
    },
    {
        id: 'scss-extend',
        title: 'Extending & Inheritance',
        category: 'SCSS',
        slangDefinition: `Extend use pannradhu existing styles inherit panna so repeated styles avoid pannalaam. Idhu cleaner CSS kudukkum. Indha example-la base-button styles extend pannitu reuse pannrom.`,
        interviewDefinition: `The @extend directive allows one selector to inherit styles from another, reducing duplication and improving maintainability. The example shows extending base styles and reusing them.`,
        example: `%base-button {
  padding: 10px 20px;
  background-color: #007bff;
}

.button-primary {
  @extend %base-button;
  color: #fff;
}

.button-disabled {
  @extend .button-primary;
  opacity: 0.5;
}`
    },
    {
        id: 'scss-control-directives',
        title: 'Control Directives (@if, @for, @each)',
        category: 'SCSS',
        slangDefinition: `Control directives use pannradhu dynamic CSS generate panna so manual writing avoid pannalaam. Idhu flexible styling-ku useful. Indha example-la @each loop use pannitu classes generate pannrom and @if use pannitu condition check pannrom.`,
        interviewDefinition: `Control directives enable dynamic and conditional CSS generation using loops and conditions, improving flexibility. The example shows using @each for iteration and @if for conditional styling.`,
        example: `// Loop through a list
@each $color in blue, red, green {
  .text-#{$color} {
    color: $color;
  }
}

// Conditional
@mixin btn($type) {
  @if $type == primary {
    background: blue;
  } @else {
    background: gray;
  }
}`
    }
];
