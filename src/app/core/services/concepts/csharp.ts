import { Concept } from '../../models/concept.model';

export const csharpConcepts: Concept[] = [
  {
    id: 'csharp-linq',
    title: 'LINQ',
    category: 'C#',
    slangDefinition: `LINQ use pannradhu collections-la data filter panna easy-a so loops avoid pannalaam. Idhu readable code kudukkum. Indha example-la scores array-la 80 mela irukura values filter pannitu eduthom using query syntax and method syntax.`,
    interviewDefinition: `LINQ is used to query and filter data from collections in a readable and declarative way, avoiding manual loops. The example shows filtering values greater than 80 using both query syntax and method syntax.`,
    example: `var scores = new int[] { 97, 92, 81, 60 };

var highScores = from score in scores
                 where score > 80
                 select score;

// Or using method syntax:
var highScoresMethod = scores.Where(s => s > 80);`
  }
];
