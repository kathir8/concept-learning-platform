import { Concept } from '../../models/concept.model';

export const typeScriptConcepts: Concept[] = [
    {
        id: 'typescript',
        title: 'TypeScript',
        category: 'TypeScript',
        slangDefinition: `TypeScript na JavaScript-ku type safety add pannradhu so wrong data assign panna error varum and bugs avoid pannalaam. Indha example-la string variable-ku number assign panna compile time-la error varudhu.`,
        interviewDefinition: `TypeScript adds static typing to JavaScript to prevent type-related errors. It helps catch mistakes during development. The example shows assigning a number to a string variable causing a compile-time error.`,
        example: `// JavaScript (No error until runtime)
// let message = "Hello";
// message = 42;

// TypeScript (Error at compile time)
let message: string = "Hello";
// message = 42; // Error: Type 'number' is not assignable to type 'string'.`
    },
    {
        id: 'private-vs-protected',
        title: 'Private vs Protected',
        category: 'TypeScript',
        slangDefinition: `Access control use pannradhu data secure panna and restrict panna. Indha example-la private variable class-kulla mattum use pannalam, protected variable child class-la use pannalam.`,
        interviewDefinition: `Access modifiers control visibility of class members to enforce encapsulation. Private restricts access to the same class, while protected allows access in subclasses. The example shows protected accessible in child class but private is not.`,
        example: `class Parent {
  private secret = "Only Parent knows";
  protected familyHeirloom = "Parent and Child know";
}

class Child extends Parent {
  show() {
    console.log(this.familyHeirloom); // OK
    // console.log(this.secret); // Error: Property 'secret' is private
  }
}`
    },
    {
        id: 'getters-setters',
        title: 'Getters and Setters',
        category: 'TypeScript',
        slangDefinition: `Getters & setters use pannradhu na property access control panna so value read/write pannumbodhu logic add panna mudiyum. Idhu validation and transformation-ku useful. Indha example-la getter value uppercase-la return pannudhu, setter value check pannitu assign pannudhu.`,
        interviewDefinition: `Getters and setters are used to control how properties are accessed and modified, allowing validation and transformation. They improve encapsulation. The example shows a getter converting data to uppercase and a setter validating before assignment.`,
        example: `@Injectable({ providedIn: 'root' })
export class DataService {
  private _data: string = '';
  
  // Getter
  get data(): string {
    return this._data.toUpperCase(); // Add logic on read
  }
  
  // Setter
  set data(value: string) {
    if (value) { // Add validation on write
      this._data = value;
    }
  }
}`
    }
];
