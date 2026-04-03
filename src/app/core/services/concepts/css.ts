import { Concept } from "../../models/concept.model";

export const cssConcepts: Concept[] = [
    {
        id: 'what-is-css',
        title: 'What is CSS?',
        category: 'css',
        slangDefinition: `CSS = Cascading Style Sheets. HTML elements-a style panna use pannuvom. Plain HTML-la just text and structure mattum irukku — CSS add pannа color, size, spacing, layout ellam control panna mudiyudhu. Oru building-a compare pannа — HTML = structure (walls, roof), CSS = interior design (paint, furniture, decoration).`,
        interviewDefinition: `CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML elements. It controls visual aspects like color, typography, spacing, and layout. CSS separates content (HTML) from presentation (CSS), making code more maintainable. The "Cascading" in CSS means styles are applied in a specific order of priority — inline > internal > external, and more specific selectors override less specific ones.`,
        example: `<!-- Without CSS — Plain text -->
<p>Hello World</p>

<!-- With CSS — Styled text -->
<p style="color: red; font-size: 20px;">Hello World</p>

/* CSS Rule */
p {
  color: red;        /* Text color */
  font-size: 20px;   /* Text size  */
}

/* Result → Red colored text with bigger size ✅ */`
    },


    {
        id: 'css-syntax',
        title: 'CSS Syntax',
        category: 'css',
        slangDefinition: `CSS always oru pattern follow pannudhu — selector { property: value; }. Selector na edha style panna porom nu specify pannudhu. Property na enna change pannanum nu solvom. Value na epdi look aaganum nu solvom. Simple-a solla: "yaarai (selector), enna panni (property), epdi maathu (value)".`,
        interviewDefinition: `CSS syntax consists of a selector and a declaration block. The selector targets the HTML element to style. The declaration block contains one or more declarations, each with a property-value pair separated by a colon and ended with a semicolon. Multiple declarations are wrapped in curly braces. Understanding this structure is fundamental to writing valid CSS.`,
        example: `/* Basic CSS Syntax */
selector {
  property: value;
}

/* Example */
h1 {
  color: blue;
}

/* Multiple properties */
p {
  color: green;
  font-size: 18px;
  font-weight: bold;
}

/* Breakdown:
  selector  → p         (which element)
  property  → color     (what to change)
  value     → green     (how it should look)
*/`
    },


    {
        id: 'ways-to-add-css',
        title: 'Ways to Add CSS (Inline / Internal / External)',
        category: 'css',
        slangDefinition: `CSS add panna 3 ways irukku. Inline CSS na directly element-la style attribute use pannuvom — quick but messy, reuse panna mudiyathu. Internal CSS na HTML file-la <style> tag-la write pannuvom — small projects-ku okay. External CSS na separate .css file create panni link pannuvom — best practice, reuse panna mudiyudhu, maintain panna easy. Production-la always external CSS use pannuvom.`,
        interviewDefinition: `CSS can be applied in three ways. Inline CSS uses the style attribute directly on HTML elements — highest specificity but hard to maintain and cannot be reused. Internal CSS is written inside a <style> tag in the HTML <head> — useful for single-page styles. External CSS links a separate .css file using <link> tag — recommended for all projects as it separates concerns, enables reuse across pages, and is browser-cacheable. Specificity order: Inline > Internal > External.`,
        example: `<!-- ❌ 1. Inline CSS — Not recommended -->
<p style="color: red; font-size: 18px;">Hello</p>
<!-- Hard to maintain, no reuse, messy HTML ❌ -->

<!-- ⚠️ 2. Internal CSS — Small projects okay -->
<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>

<!-- ✅ 3. External CSS — Best Practice -->
<!-- HTML File -->
<head>
  <link rel="stylesheet" href="style.css">
</head>

/* style.css */
p {
  color: green;
  font-size: 18px;
}

/* ✅ Reusable across multiple HTML files
   ✅ Browser caches the CSS file
   ✅ Clean separation of HTML and CSS
   ✅ Easy to maintain */`
    },


    {
        id: 'css-selectors',
        title: 'CSS Selectors',
        category: 'css',
        slangDefinition: `CSS Selectors na "edha element-ku style apply pannanum" nu target panna use pannuvom. Element selector na tag name use pannudhu — ellа p tags-ku apply aagudhu. Class selector na . use pannudhu — reusable, multiple elements-ku apply pannalaam. ID selector na # use pannudhu — unique, oru element mattum-ku. Class use pannuvom mostly — ID specific cases-ku mattum use pannuvom.`,
        interviewDefinition: `CSS selectors determine which HTML elements a style rule applies to. Element selectors target all instances of an HTML tag. Class selectors (.) target elements with a specific class attribute — reusable across multiple elements. ID selectors (#) target a unique element with a specific id — should be used only once per page. Specificity order: ID (100) > Class (10) > Element (1). Classes are preferred in practice for reusability and lower specificity conflicts.`,
        example: `/* ✅ 1. Element Selector — All matching tags */
p {
  color: red;  /* All <p> tags become red */
}

h1 {
  font-size: 32px; /* All <h1> tags */
}

/* ✅ 2. Class Selector — Reusable (.classname) */
.title {
  color: blue;
  font-weight: bold;
}

.card {
  border: 1px solid gray;
  padding: 20px;
}

<!-- HTML -->
<p class="title">Hello</p>          <!-- Blue ✅ -->
<h2 class="title">Welcome</h2>      <!-- Blue ✅ (reused!) -->
<div class="card title">Product</div> <!-- Both applied ✅ -->

/* ✅ 3. ID Selector — Unique (#idname) */
#header {
  background: black;
  color: white;
}

#footer {
  background: gray;
}

<!-- HTML -->
<div id="header">Top Nav</div>   <!-- Black bg ✅ -->
<div id="footer">Bottom</div>   <!-- Gray bg ✅ -->

/* ✅ 4. Multiple Selectors */
h1, h2, h3 {
  font-family: Arial;   /* All headings same font */
}

/* ✅ 5. Descendant Selector */
.card p {
  color: gray;   /* Only <p> inside .card */
}

/* Specificity:
   ID       → #header    = 100 points
   Class    → .title     = 10 points
   Element  → p          = 1 point
   Higher specificity wins! */`
    },


    {
        id: 'css-colors',
        title: 'Colors in CSS',
        category: 'css',
        slangDefinition: `CSS-la colors specify panna multiple ways irukku. Named colors na english words use pannuvom (red, blue, green) — simple but limited. Hex codes na #rrggbb format use pannuvom — most common, designers use pannuvanga. RGB na red green blue values use pannuvom (0-255). RGBA na transparency add pannudhu (0 = transparent, 1 = solid). HSL na hue saturation lightness — theming-ku useful. Daily use-la hex code and rgba use pannuvom mostly.`,
        interviewDefinition: `CSS supports multiple color formats. Named colors use predefined names like red, blue. Hexadecimal (#RRGGBB) is the most common format using 6 hex digits for red, green, and blue channels. RGB uses decimal values 0-255 for each channel. RGBA adds an alpha channel (0-1) for transparency. HSL (Hue, Saturation, Lightness) is intuitive for creating color themes. HSLA adds transparency. Modern CSS also supports oklch and color() for wider color gamuts.`,
        example: `/* ✅ Named Colors */
color: red;
color: blue;
background-color: yellow;

/* ✅ Hex Code — Most Common */
color: #ff0000;            /* Red */
color: #0000ff;            /* Blue */
color: #333333;            /* Dark gray */
color: #fff;               /* White (shorthand) */
background-color: #f5f5f5; /* Light gray bg */

/* ✅ RGB */
color: rgb(255, 0, 0);     /* Red */
color: rgb(0, 0, 255);     /* Blue */
color: rgb(51, 51, 51);    /* Dark gray */

/* ✅ RGBA — With transparency */
color: rgba(255, 0, 0, 1);    /* Red — fully solid */
color: rgba(255, 0, 0, 0.5);  /* Red — 50% transparent */
color: rgba(0, 0, 0, 0.3);    /* Black — 30% transparent */
background-color: rgba(0, 0, 0, 0.8); /* Dark overlay ✅ */

/* ✅ HSL */
color: hsl(0, 100%, 50%);    /* Red */
color: hsl(240, 100%, 50%);  /* Blue */
color: hsl(0, 0%, 20%);      /* Dark gray */

/* ✅ Real World Usage */
.button {
  background-color: #007bff;   /* Primary blue */
  color: #ffffff;              /* White text */
  border: 1px solid #0056b3;  /* Darker blue border */
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
}

.success { color: #28a745; } /* Green */
.danger  { color: #dc3545; } /* Red */
.warning { color: #ffc107; } /* Yellow */`
    },


    {
        id: 'css-text-styling',
        title: 'CSS Text Styling',
        category: 'css',
        slangDefinition: `CSS-la text-a style panna multiple properties irukku. font-size na text size control pannudhu. font-weight na bold, normal control pannudhu. text-align na left, center, right align pannudhu. text-decoration na underline, line-through add pannudhu. font-family na font type control pannudhu. line-height na line spacing control pannudhu. letter-spacing na character-ku character spacing control pannudhu. Google Fonts use panna — beautiful fonts import pannalaam.`,
        interviewDefinition: `CSS text styling properties control the visual appearance of text content. font-size sets text size in px, em, rem, or %. font-weight controls thickness (100-900 or bold/normal). text-align aligns text horizontally. text-decoration adds underlines or strikethroughs. font-family specifies the typeface. line-height controls vertical spacing between lines. letter-spacing adjusts space between characters. rem units are preferred for accessibility as they respect user browser settings.`,
        example: `/* ✅ Basic Text Styling */
p {
  font-size: 16px;           /* Text size */
  font-weight: bold;         /* Bold text (or 400/700) */
  text-align: center;        /* left | center | right | justify */
  text-decoration: underline; /* underline | line-through | none */
  color: #333;               /* Text color */
}

/* ✅ Font Family */
body {
  font-family: Arial, sans-serif;          /* System font */
  font-family: 'Roboto', sans-serif;       /* Google Font */
  font-family: Georgia, serif;             /* Serif font */
}

/* ✅ Advanced Text Properties */
h1 {
  font-size: 32px;
  font-weight: 700;          /* Bold */
  letter-spacing: 2px;       /* Space between letters */
  line-height: 1.5;          /* Line height (1.5x font-size) */
  text-transform: uppercase; /* UPPERCASE | lowercase | capitalize */
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3); /* Shadow */
}

/* ✅ Responsive Font Sizes */
h1 { font-size: 2rem; }    /* 32px (2 × 16px base) */
h2 { font-size: 1.5rem; }  /* 24px */
p  { font-size: 1rem; }    /* 16px */
small { font-size: 0.875rem; } /* 14px */

/* ✅ Real World — Typography System */
.heading-primary {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
}

.body-text {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;    /* Comfortable reading ✅ */
  color: #555;
}

.link {
  color: #007bff;
  text-decoration: none;    /* Remove default underline */
}

.link:hover {
  text-decoration: underline; /* Add on hover ✅ */
}`
    },


    {
        id: 'css-box-model',
        title: 'CSS Box Model',
        category: 'css',
        slangDefinition: `CSS-la every element oru box maari treat aagudhu — Content, Padding, Border, Margin. Content na actual text/image area. Padding na content-ku inside spacing (content-ku around). Border na element-oda outer line. Margin na element-ku outside spacing (elements-ku nadula gap). Simple-a solla: Gift box maari — gift = content, bubble wrap = padding, box = border, gap between boxes = margin. box-sizing: border-box use pannа padding and border, total width-la include aagudhu — always use pannuvom.`,
        interviewDefinition: `The CSS Box Model describes how every HTML element is rendered as a rectangular box with four layers — Content (actual element dimensions), Padding (space inside between content and border), Border (visible outline around padding), and Margin (space outside the border separating elements). By default, width and height apply only to content (content-box). Setting box-sizing: border-box makes width and height include padding and border, which is more intuitive and widely used in modern CSS. Understanding the box model is essential for precise layout control.`,
        example: `/* ✅ Box Model Layers */
div {
  /* Content — actual size */
  width: 300px;
  height: 150px;

  /* Padding — inside spacing */
  padding: 20px;              /* All sides */
  padding: 10px 20px;         /* Top/bottom | Left/right */
  padding: 10px 20px 15px 5px; /* Top Right Bottom Left */

  /* Border — outline */
  border: 2px solid black;    /* width style color */
  border-radius: 8px;         /* Rounded corners */

  /* Margin — outside spacing */
  margin: 10px;               /* All sides */
  margin: 0 auto;             /* Center horizontally ✅ */
}

/* ❌ Default box-sizing — confusing */
.box-default {
  box-sizing: content-box;  /* Default */
  width: 300px;
  padding: 20px;
  border: 2px solid black;
  /* Actual rendered width = 300 + 20+20 + 2+2 = 344px ❌ */
}

/* ✅ Border-box — use always! */
* {
  box-sizing: border-box;   /* Apply globally ✅ */
}

.box-border {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
  /* Actual rendered width = 300px (padding+border inside) ✅ */
}

/* ✅ Real World — Card Component */
.card {
  box-sizing: border-box;
  width: 300px;
  padding: 24px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  margin: 16px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* ✅ Margin tricks */
.center-block {
  width: 800px;
  margin: 0 auto;   /* Center horizontally ✅ */
}

.stack > * + * {
  margin-top: 16px; /* Space between stacked elements ✅ */
}

/* Box Model Visual:
┌─────────────────────────────┐  ← Margin (outside)
│  ┌───────────────────────┐  │  ← Border
│  │  ┌─────────────────┐  │  │  ← Padding (inside)
│  │  │    CONTENT      │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘ */`
    },


    {
        id: 'css-width-height',
        title: 'CSS Width & Height',
        category: 'css',
        slangDefinition: `CSS-la width and height panna multiple units irukku. px na fixed size — screen size matter pannaamal same size irukkum. % na parent element-based — responsive-ku useful. vw/vh na viewport width/height based — full screen layouts-ku useful. min/max width height na responsive design-la important — element certain size-ku below/above pogarathai prevent pannudhu. auto na browser calculate pannudhu. rem/em na font-size based units — accessible design-ku good.`,
        interviewDefinition: `CSS width and height can be set using various units. px provides fixed dimensions. Percentage (%) is relative to the parent element. vw/vh are relative to the viewport width/height. min-width/max-width/min-height/max-height set size constraints for responsive design. auto lets the browser calculate dimensions. rem is relative to the root font size — preferred for accessibility. fit-content, min-content, and max-content are modern intrinsic sizing keywords.`,
        example: `/* ✅ Fixed Units */
.box {
  width: 300px;
  height: 200px;
}

/* ✅ Percentage — relative to parent */
.full-width {
  width: 100%;     /* Same as parent width */
  height: 50%;     /* Half of parent height */
}

/* ✅ Viewport Units */
.hero {
  width: 100vw;    /* Full viewport width */
  height: 100vh;   /* Full viewport height */
}

.half-screen {
  height: 50vh;    /* Half viewport height */
}

/* ✅ Min / Max — Responsive constraints */
.container {
  width: 100%;
  max-width: 1200px;  /* Never wider than 1200px ✅ */
  min-width: 320px;   /* Never narrower than 320px ✅ */
  margin: 0 auto;     /* Center it */
}

.card {
  width: 300px;
  min-height: 200px;  /* At least 200px, grows with content ✅ */
}

/* ✅ Auto */
.block {
  width: auto;     /* Takes full available width (block default) */
  height: auto;    /* Grows with content ✅ */
}

/* ✅ Real World — Responsive Card */
.product-card {
  box-sizing: border-box;
  width: 100%;
  max-width: 350px;     /* Limit card width ✅ */
  min-height: 400px;    /* Consistent card height ✅ */
  padding: 24px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
}

/* ✅ Modern — fit-content */
.button {
  width: fit-content;  /* Only as wide as content ✅ */
  padding: 10px 20px;
}`
    },


    {
        id: 'css-display-property',
        title: 'CSS Display Property',
        category: 'css',
        slangDefinition: `Display property na element browser-la epdi render aaganum nu control pannudhu. block na full width eduthukkum, next element new line-la varum (div, p, h1). inline na content width mattum edukum, next element same line-la varum, width/height set panna mudiyathu (span, a). inline-block na inline maari same line-la varum, aana width/height set panna mudiyudhu. flex na children-a flexible-a align panna use pannuvom. grid na 2D layout create panna use pannuvom. none na element hide aagudhu, space-um edukkaathu.`,
        interviewDefinition: `The CSS display property controls how an element is rendered in the document flow. block elements take full available width and start on a new line (div, p, h1). inline elements occupy only their content width and flow within text (span, a) — width and height have no effect. inline-block combines both — flows inline but respects width/height. flex enables Flexbox layout for one-dimensional alignment. grid enables CSS Grid for two-dimensional layouts. none removes the element from the layout entirely (unlike visibility: hidden which preserves space).`,
        example: `/* ✅ block — Full width, new line */
div, p, h1, h2, section, article {
  display: block;  /* Default for these elements */
}

.block-example {
  display: block;
  width: 200px;       /* Width works ✅ */
  height: 100px;      /* Height works ✅ */
  background: lightblue;
  /* Takes full line, next element below */
}

/* ✅ inline — Content width, same line */
span, a, strong, em {
  display: inline;  /* Default for these elements */
}

.inline-example {
  display: inline;
  /* width: 200px; ❌ No effect on inline! */
  /* height: 100px; ❌ No effect on inline! */
  background: lightyellow;
  /* Flows with text, same line */
}

/* ✅ inline-block — Same line + width/height works */
.inline-block-example {
  display: inline-block;
  width: 100px;     /* Width works ✅ */
  height: 100px;    /* Height works ✅ */
  background: lightgreen;
  margin: 5px;
  /* Flows inline but respects dimensions ✅ */
}

/* ✅ flex — Flexible layout */
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Children become flex items ✅ */
}

/* ✅ grid — Two dimensional layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

/* ✅ none — Hide element */
.hidden {
  display: none;       /* Element hidden + no space ✅ */
}

.invisible {
  visibility: hidden;  /* Hidden but space preserved ⚠️ */
}

/* ✅ Real World Usage */
nav a {
  display: inline-block;  /* Nav links side by side ✅ */
  padding: 10px 16px;
  text-decoration: none;
}

.badge {
  display: inline-block; /* Width/height on inline element ✅ */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: red;
  color: white;
  text-align: center;
  line-height: 20px;
}`
    },


    {
        id: 'css-flexbox',
        title: 'CSS Flexbox',
        category: 'css',
        slangDefinition: `Flexbox na one-dimensional layout system — items-a row-a illa column-a align panna use pannuvom. Container-la display: flex add pannа — children automatically flex items aagudhu. justify-content na main axis (horizontal)-la align pannudhu. align-items na cross axis (vertical)-la align pannudhu. flex-wrap na items wrap aaga allow pannudhu. flex-direction na row illa column change pannudhu. gap na items-ku nadula spacing add pannudhu. Center panna — justify-content: center + align-items: center = perfect center ✅. Modern CSS-la mostly flexbox use pannuvom for component-level layouts.`,
        interviewDefinition: `Flexbox (Flexible Box Layout) is a one-dimensional CSS layout model that efficiently arranges items in a row or column. The flex container (display: flex) controls its children (flex items). justify-content aligns items along the main axis (horizontal in row). align-items aligns along the cross axis (vertical in row). flex-direction changes the main axis direction. flex-wrap allows items to wrap to the next line. gap sets spacing between flex items. Individual items can be controlled using flex-grow, flex-shrink, and flex-basis. Flexbox excels at component-level layouts and one-dimensional alignment.`,
        example: `/* ✅ Basic Flexbox Setup */
.container {
  display: flex;               /* Enable flexbox ✅ */
  flex-direction: row;         /* Default: horizontal */
}

/* ✅ justify-content — Main axis (horizontal) */
.container {
  justify-content: flex-start;    /* Default — left align */
  justify-content: flex-end;      /* Right align */
  justify-content: center;        /* Center ✅ */
  justify-content: space-between; /* Equal space between ✅ */
  justify-content: space-around;  /* Equal space around */
  justify-content: space-evenly;  /* Perfectly equal space */
}

/* ✅ align-items — Cross axis (vertical) */
.container {
  align-items: stretch;     /* Default — full height */
  align-items: flex-start;  /* Top align */
  align-items: flex-end;    /* Bottom align */
  align-items: center;      /* Vertical center ✅ */
}

/* ✅ Perfect Center — Most used trick */
.center-everything {
  display: flex;
  justify-content: center;  /* Horizontal center ✅ */
  align-items: center;      /* Vertical center ✅ */
  height: 100vh;            /* Full screen height */
}

/* ✅ flex-direction — Change main axis */
.column-layout {
  display: flex;
  flex-direction: column;   /* Stack vertically */
}

.row-layout {
  display: flex;
  flex-direction: row;      /* Side by side (default) */
}

/* ✅ flex-wrap — Allow wrapping */
.wrapping-container {
  display: flex;
  flex-wrap: wrap;          /* Items wrap to next line ✅ */
  gap: 16px;                /* Space between items ✅ */
}

/* ✅ gap — Spacing between items */
.nav {
  display: flex;
  gap: 24px;                /* Clean spacing, no margin hacks ✅ */
}

/* ✅ Flex Item Properties */
.flex-item {
  flex-grow: 1;     /* Take available space ✅ */
  flex-shrink: 1;   /* Shrink if needed */
  flex-basis: 200px; /* Base width */
  flex: 1;          /* Shorthand (grow:1 shrink:1 basis:0) ✅ */
}

/* ✅ Real World — Navbar */
.navbar {
  display: flex;
  justify-content: space-between; /* Logo left, links right ✅ */
  align-items: center;
  padding: 16px 24px;
  background: #333;
}

/* ✅ Real World — Card Grid */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  flex: 1;
  min-width: 250px;    /* Min width before wrapping ✅ */
  max-width: 350px;
}

/* ✅ Real World — Login Form Center */
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f5f5;
}`
    },


    {
        id: 'css-practical-card',
        title: 'CSS Practical — Product Card',
        category: 'css',
        slangDefinition: `Theory padichathellam practical-la apply pannuvom — oru product card build pannuvom. HTML structure create panni, CSS use panni style pannuvom. Box model use pannи padding, border, margin. Flexbox use panni center pannuvom. Colors, typography use pannuvom. Button hover effect add pannuvom. Indha simple card-la ellа basic concepts-um use aagudhu.`,
        interviewDefinition: `A product card component demonstrates the practical application of multiple CSS concepts together — box model for spacing, flexbox for layout, typography for text styling, colors for visual design, and pseudo-classes for interactive states. Building UI components like cards, navbars, and forms is the best way to solidify CSS fundamentals.`,
        example: `<!-- HTML Structure -->
<div class="card-container">
  <div class="card">
    <img src="product.jpg" alt="Product" class="card-image" />
    <div class="card-body">
      <h2 class="card-title">Product Name</h2>
      <p class="card-description">
        Short product description goes here.
      </p>
      <div class="card-footer">
        <span class="card-price">Rs. 500</span>
        <button class="btn-buy">Buy Now</button>
      </div>
    </div>
  </div>
</div>

/* CSS Styling */

/* Page Center */
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

/* Card */
.card {
  box-sizing: border-box;
  width: 300px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;             /* Image corners clip ✅ */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Card Image */
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;            /* Image fill without stretch ✅ */
}

/* Card Body */
.card-body {
  padding: 20px;
}

/* Card Title */
.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px 0;
}

/* Card Description */
.card-description {
  font-size: 0.875rem;
  color: #666;
  line-height: 1.5;
  margin: 0 0 16px 0;
}

/* Card Footer */
.card-footer {
  display: flex;
  justify-content: space-between;  /* Price left, button right ✅ */
  align-items: center;
}

/* Price */
.card-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #007bff;
}

/* Buy Button */
.btn-buy {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease; /* Smooth hover ✅ */
}

.btn-buy:hover {
  background-color: #0056b3;    /* Darker on hover ✅ */
}

.btn-buy:active {
  background-color: #004094;    /* Even darker on click ✅ */
}`
    },


    {
        id: 'css-advanced-concepts',
        title: 'Advanced CSS Concepts Overview',
        category: 'css',
        slangDefinition: `Basic CSS pudichathukku aparam advanced concepts learn pannanum. Grid na 2D layout — rows and columns both control pannalaam, complex page layouts-ku use pannuvom. Responsive design na different screen sizes-ku different styles apply pannuvom. Media queries na screen width based styles change pannuvom. Position na element-a page-la specific place-la fix panna use pannuvom. Pseudo classes na :hover, :focus, :nth-child maari — user interaction based styles apply pannuvom. Indha 6 concepts learn aana — any UI build panna mudiyum.`,
        interviewDefinition: `Advanced CSS concepts build upon the basics to create professional, responsive UIs. CSS Grid is a two-dimensional layout system for complex page structures. Responsive design adapts layouts for different screen sizes. Media queries apply styles conditionally based on screen width, orientation, or device capabilities. Position (relative, absolute, fixed, sticky) controls element placement outside normal flow. Pseudo-classes (:hover, :focus, :nth-child) and pseudo-elements (::before, ::after) enable state-based and decorative styling. Mastering these 6 areas enables building any modern UI.`,
        example: `/* ✅ 1. CSS Grid — 2D Layout */
.grid-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns ✅ */
  grid-template-rows: auto;
  gap: 20px;
}

.grid-layout .featured {
  grid-column: span 2;  /* Take 2 columns ✅ */
}

/* ✅ 2. Responsive Design + Media Queries */
/* Mobile first approach */
.container {
  width: 100%;
  padding: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }
  .grid-layout {
    grid-template-columns: repeat(3, 1fr); /* 3 col desktop ✅ */
  }
}

/* Mobile — single column */
@media (max-width: 767px) {
  .grid-layout {
    grid-template-columns: 1fr; /* Single column ✅ */
  }
}

/* ✅ 3. Position */
/* relative — offset from normal position */
.relative-box {
  position: relative;
  top: 10px;    /* Move 10px down */
  left: 20px;   /* Move 20px right */
}

/* absolute — relative to nearest positioned parent */
.parent {
  position: relative;  /* Anchor for absolute child */
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;   /* Top-right corner of parent ✅ */
}

/* fixed — relative to viewport, stays on scroll */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;   /* Sticky top navbar ✅ */
  z-index: 100;
}

/* sticky — normal flow until scroll threshold */
.table-header {
  position: sticky;
  top: 0;        /* Sticks when scrolled to top ✅ */
  background: white;
}

/* ✅ 4. Pseudo Classes */
/* :hover — mouse over */
.button:hover {
  background-color: #0056b3;
  transform: translateY(-2px); /* Lift effect ✅ */
}

/* :focus — keyboard/input focus */
input:focus {
  outline: 2px solid #007bff;
  border-color: #007bff;
}

/* :nth-child — target specific children */
li:nth-child(odd)  { background: #f5f5f5; } /* Odd rows ✅ */
li:nth-child(even) { background: #ffffff; } /* Even rows ✅ */
li:first-child { border-top: none; }
li:last-child  { border-bottom: none; }

/* :not — exclude elements */
.list-item:not(:last-child) {
  border-bottom: 1px solid #e0e0e0; /* All except last ✅ */
}

/* ✅ 5. Pseudo Elements */
/* ::before and ::after — decorative content */
.section-title::before {
  content: '';
  display: block;
  width: 40px;
  height: 4px;
  background: #007bff;
  margin-bottom: 8px; /* Blue line above title ✅ */
}

.required-field::after {
  content: ' *';
  color: red;         /* Required asterisk ✅ */
}

/* 📌 Learning Order for Freshers:
  1. HTML basics          → Structure
  2. CSS syntax           → Selectors, properties
  3. Colors + Text        → Typography, colors
  4. Box Model            → Spacing, sizing
  5. Flexbox              → Component layouts
  6. Build small UI       → Card, navbar, form
  7. Grid                 → Page layouts
  8. Responsive + Media   → Mobile friendly
  9. Position             → Overlays, fixed nav
  10. Pseudo classes      → Interactive states */`
    },
]