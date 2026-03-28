import { Concept } from '../../models/concept.model';

export const htmlConcepts: Concept[] = [
  {
    id: 'html-semantic',
    title: 'Semantic HTML',
    category: 'HTML',
    slangDefinition: `Semantic HTML na correct meaning kudukkura tags use pannradhu so code readable and SEO improve aagum. Idhu accessibility-kuvum helpful. Indha example-la div use pannradhukku badhila header, nav madhiri meaningful tags use pannirukkom.`,
    interviewDefinition: `Semantic HTML uses meaningful tags to describe content, improving readability, SEO, and accessibility. The example shows replacing generic div elements with semantic tags like header and nav.`,
    example: `<!-- Bad (Non-semantic) -->
<div class="header">
  <div class="nav">...</div>
</div>

<!-- Good (Semantic) -->
<header>
  <nav>...</nav>
</header>`
  }
];
