import { Concept } from '../../models/concept.model';

export const csharpConcepts: Concept[] = [
    {
        id: 'basic-variables',
        title: 'Basic Variable Syntax',
        category: 'C#',
        slangDefinition: `C# la variable declare panna type first, apram name kudukanum - idhu "statically typed" language. int, string, bool, double, decimal - ivanga fixed types. DateTime na date/time store panna use pannuvom. Nullable types (int?, decimal?) na value illama null-um store panna mudiyum - andha ? mark than nullable-ah convert pannudhu. var na compiler automatic-ah type detect pannikum (type inference), but once assign pannaachu apparam type change panna mudiyadhu. const na compile-time fixed value, readonly na runtime-la set panni apparam change panna mudiyadhu (mostly constructor-la set pannuvom).`,
        interviewDefinition: `C# is a statically typed language, so every variable must have a declared type before use. Common value types include int, string, bool, double, and decimal, while DateTime is used to represent dates and times. Nullable types (declared with a '?' suffix like int? or decimal?) allow value types to hold a null value, which they normally cannot. The 'var' keyword enables type inference, where the compiler determines the type at compile time based on the assigned value, but the type remains fixed afterward. 'const' defines a compile-time constant that cannot change, while 'readonly' allows a value to be assigned once, typically in a constructor, and remain immutable thereafter.`,
        example: `int age = 25;
string name = "Kathiravan";
bool isActive = true;
double height = 175.5;
decimal salary = 50000.75m;
DateTime today = DateTime.Now;
DateTime dob = new DateTime(2000, 5, 20);
int? marks = null;
decimal? amount = null;
var city = "Chennai";
const double PI = 3.14159;
public readonly string Company = "Dedalus";`
    },
    {
        id: 'collections-overview',
        title: 'Collections Overview (Array, List, Dictionary, HashSet)',
        category: 'C#',
        slangDefinition: `C#-la data group-a store panna 4 main collections use pannுவோம். Array na fixed size - once size define pannaachu, atha change panna mudiyadhu, duplicate allowed, index vachi access mudiyum - fixed number of items irukra scenario-ku use pannுவோம். List<T> na dynamic array - Angular-la array maadhiri than, size automatic-a grow/shrink aagum, Add(), Remove() methods irukku, index vachi access mudiyum - CRUD APIs, DB results handle panna mostly use pannுவோம். Dictionary<TKey, TValue> na Angular-la JSON object/key-value pair maadhiri than - key unique-a irukanum, key vachi than access panna mudiyum (index-a access panna mudiyadhu), fast lookup ID/Code/Name vachi panna use pannுவோம். HashSet<T> na Angular-la Set() maadhiri - duplicate values reject aagidum, index access illa, unique values Roles/Permissions/Tags maadhiri store panna use pannுவோம்.`,
        interviewDefinition: `C# provides several built-in collection types to store groups of data. Array has a fixed size that cannot change after creation, allows duplicates, and supports index-based access - suited for scenarios with a fixed number of items. List<T> is a dynamic array similar to a JavaScript array, whose size grows or shrinks automatically, provides Add() and Remove() methods, and supports index-based access - commonly used for CRUD APIs and database results. Dictionary<TKey, TValue> is similar to a JSON object or key-value map, requires unique keys, and is accessed by key rather than by index - ideal for fast lookups using an ID, code, or name. HashSet<T> is similar to a JavaScript Set, automatically rejects duplicate values, does not support index-based access, and is best suited for storing unique values like roles, permissions, or tags.`,
        example: `// Array - Fixed size
int[] patientIds = { 101, 102, 103 };

string[] names = new string[3];
names[0] = "Kathiravan";
names[1] = "John";
names[2] = "David";


// List<T> - Dynamic array
List<string> patients = new List<string>();

patients.Add("Kathiravan");
patients.Add("John");
patients.Add("David");

patients.Remove("John");
patients[0] = "Karthik";

foreach (var patient in patients)
{
    Console.WriteLine(patient);
}


// Dictionary<TKey, TValue> - similar to JSON object in Angular
Dictionary<int, string> patients = new Dictionary<int, string>();

patients.Add(101, "Kathiravan");
patients.Add(102, "John");
patients.Add(103, "David");

Console.WriteLine(patients[101]);

patients[101] = "Karthik";

foreach (var patient in patients)
{
    Console.WriteLine($"{patient.Key} - {patient.Value}");
}


// HashSet<T> - similar to new Set() in Angular
HashSet<string> roles = new HashSet<string>();

roles.Add("Admin");
roles.Add("Doctor");
roles.Add("Doctor"); // duplicate, ignored
roles.Add("Nurse");

foreach (var role in roles)
{
    Console.WriteLine(role);
}

bool exists = roles.Contains("Doctor");
Console.WriteLine(exists); // true

// Quick Comparison:
// Collection             | Fixed Size | Duplicate Allowed | Access by Index | Real-Time Usage
// Array                  | Yes        | Yes                | Yes             | Fixed number of items
// List                   | No         | Yes                | Yes             | CRUD APIs, DB results, API responses
// Dictionary<TKey,TValue>| No         | No (key unique)    | No (by key)     | Fast lookup using ID, Code, Name
// HashSet                | No         | No duplicates      | No              | Unique values like Roles, Permissions, Tags`
    },
    {
        id: 'access-modifiers',
        title: 'Access Modifiers',
        category: 'C#',
        slangDefinition: `Access modifiers na oru class, method illa variable-a evlo access panna mudiyum nu control pannura keywords. public na eppudi vendalum, engayum irundhum (same project, other project) access pannalaam. private na andha class-kulla mattum than access pannalaam, outside-la irundhu access panna mudiyadhu. protected na same class-um, adha inherit panna child class-um access pannalaam, aana outside object vachi access panna mudiyadhu. internal na same project (assembly) kulla mattum access pannalaam, other project-la irundhu access panna mudiyadhu. protected internal na protected + internal rendu combine pannadhu - same project-lam access pannalaam, other project-la inherit panna child class-um access pannalaam. private protected na kammiyaaga use pannura modifier - same project-la irukra derived class mattum than access pannalaam, other project-la irundha derived class kooda access panna mudiyadhu.`,
        interviewDefinition: `Access modifiers in C# control the visibility and accessibility of classes, methods, and variables. 'public' allows access from anywhere, including other classes and other projects. 'private' restricts access to only within the same class. 'protected' allows access within the same class and any derived (child) classes, but not from outside via an object instance. 'internal' restricts access to within the same project (assembly) only. 'protected internal' combines protected and internal - it is accessible within the same project, and also accessible from derived classes in other projects. 'private protected' is the most restrictive combination - it is accessible only within the same project AND only by derived classes (not by unrelated classes in the same project, and not by derived classes in other projects).`,
        example: `// public - Accessible from anywhere (same project or other project)
public class Patient
{
    public string Name { get; set; }
}

// private - Accessible only inside the same class
public class Patient
{
    private string secretCode = "ABC123";
}

// protected - Accessible in the class and derived (child) classes
// Parent class
public class Person
{
    protected string Name = "Kathiravan";
}

// Child class
public class Patient : Person
{
    public void Show()
    {
        Console.WriteLine(Name);
    }
}

// Outside
Patient patient = new Patient();
Console.WriteLine(patient.Name); // Error

// Quick Comparison:
// Modifier              | Same Class | Same Project           | Child Class          | Other Project
// public                | Yes        | Yes                    | Yes                   | Yes
// private                | Yes        | No                     | No                    | No
// protected              | Yes        | No (unless inherited)  | Yes                   | Yes (if inherited)
// internal               | Yes        | Yes                    | Yes (same project)    | No
// protected internal     | Yes        | Yes                    | Yes                   | Yes (if inherited)
// private protected      | Yes        | Yes (derived classes)  | Yes (same project)    | No`
    },
    {
        id: 'generics-real-time-model',
        title: 'Generics - Real-Time Model Example',
        category: 'C#',
        slangDefinition: `Generic class na TData maadhiri placeholder type vachi class define pannradhu - andha type-a use pannum bodhu than exact type kudukanum. Idha vachi same VitalEntry<TData> class-a Pain-ku, Pulse-ku, BP-ku - eppudi vendalum reuse pannalaam, ovvoru vital-kum thani thani class ezhutha vendaam. Indha example-la VitalEntry<PainData> nu specify pannradhala, Data property PainData type-a than hold pannum, so compile-time-le type safety kidaikkum (wrong type assign panna try panna error varum). Idhu real-time-la vital signs (Pain, Pulse, BP, Temperature) common structure (Date, AuthorID) share pannradhukum, but ovvoruthukum vera vera data structure irukkradhukum romba useful.`,
        interviewDefinition: `Generics allow a class to be defined with a placeholder type (like TData) that is specified when the class is used, enabling type-safe reusability. Here, VitalEntry<TData> is a generic class with common properties (Date, AuthorID) and a Data property whose type is determined by the type argument passed in. By using VitalEntry<PainData>, the Data property is strongly typed to PainData, giving compile-time type safety and IntelliSense support. This pattern is useful in real-world applications like healthcare systems, where multiple vital sign types (Pain, Pulse, BP, Temperature) share a common structure but each has its own distinct data shape, avoiding the need to write a separate class for each vital type.`,
        example: `public class LatestVitalPayloadFormation
{
    public VitalEntry<PainData> Pain { get; set; }
}

public class VitalEntry<TData>
{
    public DateTime Date { get; set; }
    public long? AuthorID { get; set; }
    public TData Data { get; set; }
}

public class PainData
{
    public long? P_PainScoreID { get; set; }
    public string P_Comments { get; set; }
}

var vitalValue = new LatestVitalPayloadFormation
{
    Pain = new VitalEntry<PainData>
    {
        Date = DateTime.Now,
        AuthorID = 1001,
        Data = new PainData
        {
            P_PainScoreID = 5,
            P_Comments = "Patient reports moderate pain."
        }
    }
};`
    },
    {
        id: 'type-conversion',
        title: 'Type Conversion',
        category: 'C#',
        slangDefinition: `Type Conversion na oru type-a vera type-ku convert pannradhu. C#-la Convert class use panni idha easy-a pannalaam. Convert.ToBoolean() na oru value-a Boolean-ku convert pannum. Convert.ToChar() na char-ku convert pannum. Convert.ToDouble() na double-ku convert pannum. Convert.ToInt16(), ToInt32(), ToInt64() na respective-a 16-bit, 32-bit, 64-bit integer-ku convert pannum. Convert.ToString() na eppudi vendalum oru value-a string-ku convert pannum. Indha example-la int number = 5 nu irundhadhu, Convert.ToString(number) vachi adha string "5" ah convert pannirukkom, apparam Console.WriteLine vachi print pannirukkom.`,
        interviewDefinition: `Type Conversion in C# refers to converting one data type into another. The Convert class provides several static methods to perform this safely. ToBoolean() converts a value to a Boolean type, ToChar() converts to a char type, and ToDouble() converts to a double type. ToInt16(), ToInt32(), and ToInt64() convert a value to 16-bit, 32-bit, and 64-bit integer types respectively. ToString() converts a value into its string representation. In the example, an integer value is converted to a string using Convert.ToString() and then printed to the console.`,
        example: `using System;

public class Program
{
    public static void Main(string[] args)
    {
        int number = 5;
        string text = Convert.ToString(number);
        Console.WriteLine(text);
    }
}

// Common Convert methods:
// Convert.ToBoolean(value) - converts to Boolean
// Convert.ToChar(value)    - converts to char
// Convert.ToDouble(value)  - converts to double
// Convert.ToInt16(value)   - converts to 16-bit int
// Convert.ToInt32(value)   - converts to 32-bit int
// Convert.ToInt64(value)   - converts to 64-bit int
// Convert.ToString(value)  - converts to string`
    },
    {
        id: 'linq',
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
    },
    {
        id: 'static-class',
        title: 'Static Class / Method',
        category: 'C#',
        slangDefinition: `Static na object create pannama nerava class peru vechae method call panra approach - "PatientService.SavePatient(patient)" nu direct-a call panna mudiyum, "new" venaam. First-a paakumbodhu idhu simple-a theriyum. Aana company vaḷaracha, SavePatient() method-ku Repository, Logger, Cache, Email, Redis, Configuration mathiri pala dependencies venum-nu aaguthu, andha method thanave "new PatientRepository()", "new Logger()" nu ellathayum create pannanum - idhu tightly coupled aayidum, nalaikku Repository maara na method-a modify pannanum. Adha thavirkka, PatientService oru normal (static illama) class-a vechitu, constructor via andha dependencies-a "receive" panna vekurom - ASP.NET Core framework thaan andha dependencies-a create panni kudukkum (Dependency Injection). Static classes-ku constructor DI mathiri work aagadhu, adhanala andha dependencies-a manually ella caller-um pass pannanum - romba messy. Adha thavirkka MathHelper, StringHelper mathiri, dependencies edhuvum thevaipadaadha utility classes-ku mattum static use pannuvom.`,
        interviewDefinition: `A static class/method can be called directly without creating an object (e.g., PatientService.SavePatient(patient)), which initially looks simpler than instance-based services. However, as real business services grow to depend on multiple collaborators (Repository, Logger, Cache, Email, Configuration), a static method ends up creating all these dependencies itself internally, resulting in tight coupling - any change to how a dependency is constructed requires modifying the static method directly. Instance classes solve this through Constructor Injection: the class receives its dependencies via its constructor, and a Dependency Injection container (like ASP.NET Core's built-in DI) is responsible for creating and supplying them. Static classes cannot participate naturally in constructor-based DI, since the DI container instantiates objects and injects dependencies into constructors - a static class has neither. While a static method could technically accept dependencies as parameters, every caller would then need to manually supply them, which becomes unmanageable as the number of dependencies grows. As a result, the accepted convention is: use static classes only for stateless utility/helper logic with no external dependencies (e.g., MathHelper, StringHelper, DateHelper), and use regular instance classes with constructor injection for business services (e.g., PatientService, OrderService, UserService) that depend on repositories, loggers, or other services.`,
        example: `// ==========================================
// 1. REAL COMPANY PROBLEM
// ==========================================
// You have a simple service:
public class PatientService
{
    public void SavePatient(Patient patient)
    {
        // Save to DB
    }
}
PatientService service = new PatientService();
service.SavePatient(patient);
// Works fine. Then someone asks: "Why not just make it static? Looks simpler."

// ==========================================
// 2. BAD APPROACH (Static - looks simple at first, breaks down as it grows)
// ==========================================
public static class PatientServiceBad
{
    public static void SavePatient(Patient patient)
    {
        Console.WriteLine(patient.Name);   // fine initially
    }
}
PatientServiceBad.SavePatient(patient);   // no object needed - looks great!

// A month later: "Also save into database."
public static class PatientServiceBad2
{
    public static void SavePatient(Patient patient)
    {
        PatientRepository repository = new PatientRepository();  // created HERE
        repository.Save(patient);
    }
}

// Another month: "Log every request." Then: "Add Cache." Then: "Add Email." Then: "Add Redis."
public static class PatientServiceBad3
{
    public static void SavePatient(Patient patient)
    {
        PatientRepository repository = new PatientRepository();
        Logger logger = new Logger();
        Cache cache = new Cache();
        EmailService email = new EmailService();
        RedisService redis = new RedisService();

        repository.Save(patient);
        logger.Log();
        email.Send();
    }
}
// This method is creating EVERYTHING itself.
// Tomorrow: Repository changes from "new PatientRepository()" to
// "new OraclePatientRepository()" -> must modify this method directly.
// Same for Logger, Cache... PatientService is now tightly coupled to every dependency.

// ==========================================
// 3. BETTER APPROACH (Instance class + Constructor Injection)
// ==========================================
public class PatientService
{
    private readonly PatientRepository repository;

    public PatientService(PatientRepository repository)   // received, not created
    {
        this.repository = repository;
    }

    public void SavePatient(Patient patient)
    {
        repository.Save(patient);
    }
}
// PatientService no longer knows or cares WHO created Repository.

// ==========================================
// 4. ACTUAL COMPANY CODE (ASP.NET Core Dependency Injection)
// ==========================================
// Program.cs:
// builder.Services.AddScoped<IPatientRepository, PatientRepository>();
// ASP.NET Core creates the Repository and injects it automatically.

public class PatientService : IPatientService
{
    private readonly IPatientRepository repository;
    private readonly ILogger<PatientService> logger;

    public PatientService(
        IPatientRepository repository,
        ILogger<PatientService> logger)
    {
        this.repository = repository;
        this.logger = logger;
    }

    public void SavePatient(Patient patient)
    {
        logger.LogInformation("Saving patient");
        repository.Save(patient);
    }
}
// Think of it like Swiggy:
// Static approach   -> Chef goes to market, buys vegetables, oil, gas, THEN cooks
// DI approach        -> Kitchen Manager provides everything, Chef ONLY cooks
// Companies want PatientService to focus only on ITS job, not on building dependencies.

// Static utility classes are still perfectly fine when there ARE no dependencies:
public static class MathHelper
{
    public static int Add(int a, int b) => a + b;
}
int result = MathHelper.Add(10, 20);   // no DB, no logger, no repository needed - ideal for static

// ==========================================
// 5. WHY NOT ANOTHER APPROACH?
// ==========================================

// Why not keep PatientService static and just pass dependencies as parameters?
public static class PatientServiceParam
{
    public static void SavePatient(
        Patient patient,
        IPatientRepository repository,
        ILogger logger)
    {
        repository.Save(patient);
    }
}
// Now EVERY caller must manually supply repository and logger:
// PatientServiceParam.SavePatient(patient, repository, logger);
// Imagine 5-6 dependencies passed manually into every single call, everywhere
// in the app. Unmanageable. This is exactly why constructor-injected instance
// services are the ASP.NET Core standard, not static classes.

// Why is static rejected specifically for services but fine for helpers?
// ✅ Static OK   : MathHelper, DateHelper, StringHelper, EncryptionHelper (no dependencies, no state)
// ❌ Static BAD  : PatientService, DoctorService, OrderService, UserService
//                  (these depend on Repository, Logger, Cache, Config, Email, HTTP clients...)

// CONCLUSION:
// Before (Static)  : method creates all its own dependencies internally,
//                     tightly coupled, hard to change, can't use constructor DI
// After (Instance) : dependencies are received via constructor, supplied by the
//                     DI container, class stays focused only on its own job
`
    },
    {
        id: 'get-set-property',
        title: 'Getter - Setter Property',
        category: 'C#',
        slangDefinition: `"Validation illama irundha, public string Name; nu field-a vecha podhadhu, yaen { get; set; } venum?" nu kekkalam. Answer validation-a illa - it's about future-proofing your public contract. Field-a vechi release pannitu, 100 developers "patient.Name = 'John'" nu use panniruntha, aprom adha Property-a maathina, andha compiled DLL-a use pannura ella app-um recompile pannanum, because Field mattum Property .NET metadata-la rendu vera vera members. Same project-kulla mattum irundha (no shared DLL/NuGet), recompile pannina problem varaadhu, aana companies "epothum Property use pannunga, Field vekkadha" nu oru standard rule vechurupanga - consistency-ku, ASP.NET Core/EF/Swagger/Data Annotations/Model Binding/JSON Serialization ellame Property expect pannurathala, and nalaikku validation venumna (Name-a uppercase pannanum nu) silent-a add panna mudiyum, veliya irukura yaarum onnume change panna vendaam.`,
        interviewDefinition: `Auto-properties (public string Name { get; set; }) are preferred over public fields (public string Name;) even without validation logic today, primarily because of API stability, not validation. A public field and a public property are different members in .NET's compiled metadata (IL) - changing a field to a property later is a binary-breaking change for any external consumers (compiled DLLs, NuGet packages), requiring them to recompile. Within a single project with no external consumers, this distinction has minimal practical impact after a full rebuild, but companies still enforce "always use properties, never public fields" as a coding standard for three main reasons: (1) consistency across a codebase with many developers, (2) framework expectations - ASP.NET Core, Entity Framework, Swagger, Data Annotations, model binding, and JSON serializers are all designed around properties, with fields receiving inconsistent or limited support, and (3) encapsulation - starting with a property allows you to later add logic (e.g., trimming, uppercasing, validation) inside the getter/setter without changing the public contract or requiring any caller code changes. In short, { get; set; } signals "this member is exposed as a property, not a raw field," preserving the flexibility to add behavior later transparently.`,
        example: `// ==========================================
// 1. REAL COMPANY PROBLEM
// ==========================================
// "If there's no validation today, why not just use a public field?"
public class PatientV1
{
    public string Name;   // simple field - works today, no validation needed
}
// Looks completely fine right now. So what's the actual issue?

// ==========================================
// 2. BAD APPROACH (Public field - looks fine until you need to change it)
// ==========================================
// You release this class. 100 developers across your company/library use it:
PatientV1 patient = new PatientV1();
patient.Name = "John";

// Two years later, business says: "Name should always be trimmed."
// You change the field into a property:
public class PatientV1Updated
{
    private string _name;
    public string Name
    {
        get => _name;
        set => _name = value.Trim();
    }
}
// Source code LOOKS similar to callers. But internally:
//   BEFORE: Name was a FIELD
//   AFTER : Name is a PROPERTY
// These are DIFFERENT members in .NET's compiled metadata (IL).
// Any already-compiled DLL/app referencing the old field now has a BROKEN
// binary contract and needs RECOMPILATION. This is a breaking change.

// (Note: if this is all inside ONE project with no external DLL/NuGet consumers,
// a full rebuild usually fixes it silently - the risk is mainly for public APIs.)

// ==========================================
// 3. BETTER APPROACH (Start with a Property from Day 1)
// ==========================================
public class Patient
{
    public string Name { get; set; }   // property from the start, even with no logic
}
// Two years later, add logic WITHOUT breaking anyone's code:
public class PatientImproved
{
    private string _name;
    public string Name
    {
        get => _name;
        set => _name = value.Trim();   // logic added silently
    }
}
// Callers still write: patient.Name = "John";  -> nothing changes for them.
// The public contract (it's a property) never changed - only the internal
// implementation did. No recompilation needed for consumers.

// ==========================================
// 4. ACTUAL COMPANY CODE (Why every DTO looks like this)
// ==========================================
// Company rule: "Never expose public fields. Always expose properties."
// Enforced for CONSISTENCY across 50 developers, so every model looks the same:

public class PatientDto
{
    public string Name { get; set; }
    public int Age { get; set; }
}
// Even with ZERO validation, this is the standard - because frameworks are
// BUILT around properties:

public class PatientRequest
{
    [Required]                          // Data Annotations -> needs a property
    public string Name { get; set; }
}
// ASP.NET Core model binding, Entity Framework, Swagger, and JSON serializers
// all work naturally and consistently with properties. Field support is
// often limited or inconsistent depending on the framework/feature.

// ==========================================
// 5. WHY NOT ANOTHER APPROACH?
// ==========================================

// Why not just keep using public fields since "it's simpler"?
public class Mixed
{
    public string Name;                    // Developer A's style
    public string Age { get; set; }        // Developer B's style
    public string Address;                 // Developer C's style
    public string City { get; set; }       // Developer D's style
}
// Every model looks inconsistent. No team-wide standard. Confusing to maintain.

// Why not wait and convert fields to properties only "when validation is needed"?
// Because by then, the field may already be part of a released/shared contract
// (DLL, NuGet package, or even just an established team convention), and
// converting it later is a breaking change requiring recompilation everywhere
// it's used - whereas starting with a property costs nothing extra today.

// This is exactly why Microsoft introduced Auto-Properties as a shortcut:
// Instead of writing this every single time:
private string _name2;
public string Name2
{
    get { return _name2; }
    set { _name2 = value; }
}
// You just write:
public string Name2 { get; set; }
// Meaning: "I don't need custom logic today, but I'm exposing this as a
// PROPERTY (not a raw field) so I can add behavior later without breaking anyone."

// CONCLUSION:
// Before (Field)   : simple today, but changing it later breaks binary/public
//                     contracts and requires recompilation of consumers
// After (Property) : same simplicity today via auto-properties, but the public
//                     contract never has to change later - internal logic can
//                     evolve freely, and it aligns with how ASP.NET Core, EF,
//                     Swagger, and JSON serializers expect data to be exposed
`
    },
    {
        id: 'virtual-override',
        title: 'Virtual and Override',
        category: 'C#',
        slangDefinition: `Virtual/override na parent class oda method-a child class REPLACE panna explicit-a "allow" pannura mechanism. Hospital project-la BaseService-la "Log()" nu oru method irundhu, ella services-um adha inherit panni use pannikittu irundhanga. Client "PatientService 'Patient Log' nu, DoctorService 'Doctor Log' nu vera vera-a log pannanum" nu sonna, developer PatientService-la "public void Log()" nu ANOTHER Log() method ezhudhina, compiler confuse aagum - "parent Log()-a REPLACE panna nenaikkiraya, illa VERA oru puthu method create panna nenaikkiraya" nu theriyaadhu, so warning kudukkum ("hiding parent method"). Idha clear-a sollanumna, parent method-la "virtual" nu keyword potu ("I'm giving a default implementation, children CAN replace it if they want, aana forced illa"), child-la "override" nu keyword potu ("naan Base Log venaam, en Log-a use pannu" nu clearly sollum) - appo runtime-la, andha object ACTUAL-a evvளவு class-nu paathu, andha class oda Log()-a thaan execute pannum. Virtual illama override use panna compile ERROR varum ("no suitable method found to override") - override-ku oru virtual (or abstract) parent method compulsory.`,
        interviewDefinition: `The 'virtual' and 'override' keywords work together to enable explicit, intentional method replacement in inheritance hierarchies, and form the underlying mechanism that makes runtime polymorphism possible for regular methods (as opposed to abstract methods, which mandate overriding). When a base class method needs to allow customization by derived classes, it's marked 'virtual', signaling: "I provide a default implementation, and derived classes MAY optionally replace it - but they're not required to." A derived class that wants to replace that behavior marks its own version with 'override', explicitly declaring: "I intend to replace the base class's implementation, not create an unrelated method with the same name." Without 'virtual' on the base method, simply redefining a method with the same name in a derived class causes member hiding (a compiler warning), since the compiler cannot tell whether the developer intended to replace the parent's method or accidentally created a new, unrelated one. Attempting to use 'override' without a corresponding 'virtual' (or 'abstract') method in the base class results in a compile-time error, since there's nothing valid to override. Once properly declared, calling the method through a base-class-typed reference at runtime resolves to the derived class's overridden implementation, based on the actual object type - this is polymorphism in action.`,
        example: `// ==========================================
// 1. REAL COMPANY PROBLEM
// ==========================================
// Hospital project. Every service should log.

public class BaseService
{
    public void Log()
    {
        Console.WriteLine("Log from BaseService");
    }
}

public class PatientService : BaseService
{
    // nothing here - just inherits Log() as-is
}

PatientService service1 = new PatientService();
service1.Log();
// Output: "Log from BaseService"  -- works fine, for now

// ==========================================
// 2. BAD APPROACH (Redefining a method without virtual/override - ambiguous!)
// ==========================================
// Client says: "PatientService should log 'Patient Log', DoctorService should log 'Doctor Log'"

public class BaseServiceBad
{
    public void Log()
    {
        Console.WriteLine("Base Log");
    }
}

public class PatientServiceBad : BaseServiceBad
{
    public void Log()   // ⚠️ Compiler WARNING: hiding parent's method
    {
        Console.WriteLine("Patient Log");
    }
}
// Now there are TWO Log() methods - parent's and child's.
// Compiler doesn't know your intent:
//   Did you want to REPLACE the parent's Log()?
//   Or accidentally create an UNRELATED method with the same name?
// This ambiguity is exactly why the compiler warns you.

// It gets worse with polymorphic (base-typed) references:
BaseServiceBad refA = new PatientServiceBad();
refA.Log();
// Output: "Base Log"  -- NOT what you'd expect! Method hiding does NOT
// participate in polymorphism - the reference TYPE decides which Log() runs,
// not the actual object.

// ==========================================
// 3. BETTER APPROACH (virtual + override - explicit, intentional replacement)
// ==========================================
public class BaseServiceGood
{
    public virtual void Log()      // "I provide a default. Children MAY replace it."
    {
        Console.WriteLine("Base Log");
    }
}

public class PatientServiceGood : BaseServiceGood
{
    public override void Log()     // "I explicitly REPLACE the base implementation."
    {
        Console.WriteLine("Patient Log");
    }
}

PatientServiceGood service2 = new PatientServiceGood();
service2.Log();
// Output: "Patient Log"

// And crucially, it works correctly through a base-typed reference too:
BaseServiceGood refB = new PatientServiceGood();
refB.Log();
// Output: "Patient Log"  -- TRUE polymorphism: runtime resolves to the
// ACTUAL object's overridden method, regardless of the reference's declared type.

// ==========================================
// 4. ACTUAL COMPANY CODE (Multiple services overriding shared behavior)
// ==========================================
public class BaseService
{
    public virtual void Log()
    {
        Console.WriteLine("Generic log entry");
    }
}

public class PatientService : BaseService
{
    public override void Log()
    {
        Console.WriteLine("Patient Log");
    }
}

public class DoctorService : BaseService
{
    public override void Log()
    {
        Console.WriteLine("Doctor Log");
    }
}

public class NurseService : BaseService
{
    // doesn't override - happy with the default "Generic log entry"
}

List<BaseService> services = new List<BaseService>
{
    new PatientService(),
    new DoctorService(),
    new NurseService()
};

foreach (var svc in services)
{
    svc.Log();
    // PatientService -> "Patient Log"
    // DoctorService  -> "Doctor Log"
    // NurseService   -> "Generic log entry" (used the base default)
}
// Each object logs according to its OWN class - the same loop, same method
// call, different behavior. This is why virtual/override matters at scale.

// ==========================================
// 5. WHY NOT ANOTHER APPROACH?
// ==========================================

// Why not just use 'override' without marking the base method 'virtual'?
public class BaseServiceNoVirtual
{
    public void Log() { Console.WriteLine("Base Log"); }
}
// public class PatientServiceError : BaseServiceNoVirtual
// {
//     public override void Log() { }   // ❌ COMPILE ERROR:
//     // "no suitable method found to override" - there's nothing virtual/abstract to override
// }

// Why not just redefine the method with 'new' instead of virtual/override?
public class BaseServiceHide
{
    public void Log() { Console.WriteLine("Base Log"); }
}
public class PatientServiceHide : BaseServiceHide
{
    public new void Log() { Console.WriteLine("Patient Log"); }   // explicit hiding
}
// 'new' silences the warning but does NOT enable polymorphism:
BaseServiceHide refC = new PatientServiceHide();
refC.Log();   // Output: "Base Log" - reference type decides, not actual object
// This is rarely what you actually want in a business application; virtual/override
// is almost always the correct choice when derived classes need to customize behavior
// that should still work correctly through base-class references.

// CONCLUSION:
// Without virtual/override : ambiguous method hiding, compiler warning,
//                              base-typed references ignore the child's version
// With virtual + override  : explicit, intentional replacement; true runtime
//                              polymorphism works correctly through any reference type
`
    },
    {
        id: 'models-vs-entities-vs-dto',
        title: 'Models vs Entities vs DTOs',
        category: 'C#',
        slangDefinition: `Mூnnu different purposes-ku use aagura classes - confuse pannama vera vera-a puriyanum. **Entity** na Database table-a direct-a represent pannura class - EF Core (Entity Framework) vachi DB table structure-oda match aagum, [Table], [Key] maadhiri attributes irukkum, DB operations (CRUD) direct-a idha vachi than pannuவோம். **Model** na business logic-oda work panra class - Entity-oda close-a irukkalam, aana app-oda internal logic/validation/computed properties irukkum, DB structure exact-a follow aaganum nu kidayadhu. **DTO (Data Transfer Object)** na API request/response-ku mattum use pannura class - client-ku evlo data venuma adha mattum expose pannுவோம் (sensitive fields like password, internal IDs hide pannuவோம்), over-fetching/under-fetching avoid pannalam, frontend requirement-ku according shape pannalam. Real project-la: PatientEntity (DB) -> PatientModel (business logic) -> PatientDto (API response, only Name & Age expose, SSN hide).`,
        interviewDefinition: `These three class types serve distinct architectural purposes and should not be used interchangeably. An **Entity** directly represents a database table, typically mapped via an ORM like Entity Framework Core, and is used for CRUD operations against the database. A **Model** represents business/domain logic within the application - it may closely resemble the Entity but can include computed properties, validation, or logic not tied to the database schema. A **DTO (Data Transfer Object)** is used specifically to shape data sent to or received from an API - it exposes only the fields the client needs, hides sensitive or internal data (like passwords or internal IDs), and helps prevent over-fetching or under-fetching of data. A typical flow is: PatientEntity (database) -> PatientModel (business logic) -> PatientDto (API response, exposing only necessary fields).`,
        example: `// Entity - maps directly to DB table (using EF Core)
[Table("Patients")]
public class PatientEntity
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string SSN { get; set; }       // sensitive, stored in DB
    public string PasswordHash { get; set; }
    public DateTime CreatedAt { get; set; }
}

// Model - business/domain logic layer
public class PatientModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int Age { get; set; }

    // computed / business logic property
    public bool IsSenior => Age >= 60;
}

// DTO - shape exposed to API clients only
public class PatientDto
{
    public string Name { get; set; }
    public int Age { get; set; }
    // SSN, PasswordHash, Id intentionally NOT exposed
}

// Usage in Controller
[HttpGet("{id}")]
public PatientDto GetPatient(int id)
{
    PatientEntity entity = repository.GetById(id);   // from DB

    PatientDto dto = new PatientDto
    {
        Name = entity.Name,
        Age = CalculateAge(entity)
    };

    return dto; // only safe, required fields sent to client
}`
    },
    {
        id: 'configuration',
        title: 'Configuration (appsettings & IConfiguration)',
        category: 'C#',
        slangDefinition: `Configuration na app-oda settings (DB connection string, API keys, logging level, feature flags) code-la hardcode pannama, vera oru file-la (appsettings.json) store pannradhu. Idhu vachi environment change aana (Dev, Staging, Production) code touch pannama, just config file change panni deploy pannalam. appsettings.json main file, appsettings.Development.json / appsettings.Production.json nu environment-specific override files-um irukkum. C#-la IConfiguration interface vachi idha read pannuவோம் (Program.cs-la already register aayiruchu), illa strongly-typed-a venumna IOptions<T> pattern use pannுவோம் - config section-a class-oda bind pannitu, DI vachi inject pannikalam. Idhu security-kum useful - production secrets (passwords, API keys) Azure Key Vault illa environment variables-la vachi, appsettings.json-la placeholder mattum vekalam.`,
        interviewDefinition: `Configuration refers to externalizing application settings - such as database connection strings, API keys, logging levels, and feature flags - outside of source code, typically into files like appsettings.json. This allows different environments (Development, Staging, Production) to use different settings without modifying or recompiling code; ASP.NET Core supports environment-specific override files like appsettings.Development.json and appsettings.Production.json. Configuration values are accessed via the IConfiguration interface, which is registered automatically in the application's dependency injection container. For stronger type safety, the IOptions<T> pattern is commonly used - it binds a configuration section to a strongly-typed C# class, which can then be injected via constructor injection. This approach also supports better security practices, since sensitive values (passwords, API keys) can be stored in environment variables or secret managers (e.g., Azure Key Vault) rather than committed directly into appsettings.json.`,
        example: `// appsettings.json
{
  "ConnectionStrings": {
    "PatientDb": "Server=localhost;Database=PatientDB;Trusted_Connection=True;"
  },
  "NotificationSettings": {
    "SmsProvider": "Twilio",
    "MaxRetryCount": 3
  }
}

// Option 1: Read directly via IConfiguration
public class PatientRepository
{
    private readonly string connectionString;

    public PatientRepository(IConfiguration configuration)
    {
        connectionString = configuration.GetConnectionString("PatientDb");
    }
}

// Option 2: Strongly-typed via IOptions<T> (preferred, more maintainable)
public class NotificationSettings
{
    public string SmsProvider { get; set; }
    public int MaxRetryCount { get; set; }
}

// Program.cs - bind config section to class
builder.Services.Configure<NotificationSettings>(
    builder.Configuration.GetSection("NotificationSettings"));

// Usage in Service (via constructor injection)
public class PatientService
{
    private readonly NotificationSettings settings;

    public PatientService(IOptions<NotificationSettings> options)
    {
        settings = options.Value;
    }

    public void Notify()
    {
        Console.WriteLine($"Sending via {settings.SmsProvider}, retries: {settings.MaxRetryCount}");
    }
}`
    },
    {
        id: 'helper-class',
        title: 'Helper Class',
        category: 'C#',
        slangDefinition: `Helper class na oru specific business entity-oda sambandham illama, app engayume use pannalaam-nu common/reusable logic vachi irukra static class. Example-ku date format panradhu, string validate panradhu, encryption/decryption panradhu, file operations - ivanga entha particular Patient/Doctor logic-oda bandham illama, "utility" maadhiri use aagum. Static class-a define pannuவோம் (object create pannradhu vendaam), static methods vachi direct-a ClassName.MethodName() nu call pannalam. Idhu code duplication avoid pannum - same logic pala places-la copy-paste pannama, oru central place-la vachi reuse pannalam. Business logic (Service layer) vera, Helper (utility logic) vera - Helper-la DB call illa dependency injection generally irukkadhu, pure standalone functions than irukkum.`,
        interviewDefinition: `A Helper class is a static class that contains common, reusable utility logic not tied to any specific business entity or domain model. Typical examples include date formatting, string validation, encryption/decryption, and file operations. Helper classes are usually defined as static (so no instantiation is needed) with static methods, allowing them to be called directly as ClassName.MethodName(). Their main purpose is to avoid code duplication by centralizing common logic used across multiple parts of the application. Unlike Service classes, which typically contain business logic and may depend on repositories or other injected services, Helper classes are generally pure, standalone functions with no external dependencies or database access.`,
        example: `public static class DateHelper
{
    public static string FormatToDisplayDate(DateTime date)
    {
        return date.ToString("dd-MMM-yyyy");
    }

    public static int CalculateAge(DateTime dateOfBirth)
    {
        int age = DateTime.Now.Year - dateOfBirth.Year;
        if (DateTime.Now.DayOfYear < dateOfBirth.DayOfYear)
        {
            age--;
        }
        return age;
    }
}

public static class StringHelper
{
    public static bool IsValidEmail(string email)
    {
        return !string.IsNullOrWhiteSpace(email) && email.Contains("@");
    }
}

// Usage - no object creation needed, called directly on the class
public class PatientService
{
    public void Register(Patient patient)
    {
        string dob = DateHelper.FormatToDisplayDate(patient.DateOfBirth);
        int age = DateHelper.CalculateAge(patient.DateOfBirth);

        if (!StringHelper.IsValidEmail(patient.Email))
        {
            throw new Exception("Invalid email address.");
        }

        Console.WriteLine($"{patient.Name}, DOB: {dob}, Age: {age}");
    }
}`
    },
    {
        id: 'middleware',
        title: 'Middleware',
        category: 'C#',
        slangDefinition: `Middleware na ASP.NET Core-la HTTP request ஒரு pipeline maadhiri pass aagum bodhu, ovvoru stage-layum konjam processing pannura component. Request client-la irundhu varum bodhu middleware pipeline-a pass pannitu than Controller-ku pogum, response Controller-la irundhu client-ku poga munnadi middleware pipeline-a thirumba pass pannum. Common use cases: Authentication (user login check pannradhu), Logging (request/response details log pannradhu), Exception Handling (error-a catch panni proper response kudukradhu), CORS, Rate Limiting. Ovvoru middleware-um "next()" nu call pannanum, adhu than pipeline-la next middleware-ku control pass pannum - next() call pannalana, pipeline andha place-laye stop aagidum (short-circuit). Program.cs-la app.Use...() vachi order-a register pannuவோம், andha order than execution order-a decide pannum.`,
        interviewDefinition: `Middleware in ASP.NET Core is a component that sits in the HTTP request processing pipeline, handling requests and responses as they flow through the application. Each incoming request passes through the middleware pipeline before reaching the Controller (or endpoint), and the response passes back through the same pipeline (in reverse order) before returning to the client. Common use cases include Authentication, Logging, centralized Exception Handling, CORS, and Rate Limiting. Each middleware component can either process the request and call the next() delegate to pass control to the next middleware, or short-circuit the pipeline by not calling next() (e.g., returning an error response early). Middleware is registered in Program.cs using app.Use...() methods, and the order of registration determines the execution order.`,
        example: `// Custom Middleware - Exception Handling
public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate next;

    public ExceptionHandlingMiddleware(RequestDelegate next)
    {
        this.next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await next(context); // pass control to next middleware
        }
        catch (Exception ex)
        {
            context.Response.StatusCode = 500;
            await context.Response.WriteAsync($"Error: {ex.Message}");
        }
    }
}

// Custom Middleware - Request Logging
public class RequestLoggingMiddleware
{
    private readonly RequestDelegate next;

    public RequestLoggingMiddleware(RequestDelegate next)
    {
        this.next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        Console.WriteLine($"Incoming request: {context.Request.Path}");
        await next(context);
        Console.WriteLine($"Outgoing response: {context.Response.StatusCode}");
    }
}

// Program.cs - registering middleware (order matters!)
app.UseMiddleware<ExceptionHandlingMiddleware>();
app.UseMiddleware<RequestLoggingMiddleware>();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();`
    },
    {
        id: 'program-cs',
        title: 'Program.cs',
        category: 'C#',
        slangDefinition: `Program.cs na .NET application-oda entry point - app run aagum bodhu first execute aagura file idhu than. Modern ASP.NET Core (.NET 6+) la, Program.cs oru single file-la app-oda ellame setup pannuவோம் - services register pannradhu (Dependency Injection), middleware pipeline configure pannradhu, routing setup pannradhu, app-a run pannradhu. Munnadi (older .NET versions) Program.cs + Startup.cs nu rendu files-la split panniருந்தோம் (Program.cs app start pannum, Startup.cs services/middleware configure pannum) - aana .NET 6-la irundhu ellame Program.cs oru file-lame combine pannirukanga (minimal hosting model). Why use pannuவோம்: DB connection setup pannanum, Controllers/Services register pannanum, Authentication/Authorization enable pannanum, Swagger enable pannanum - ivangalam Program.cs-la than pannுவோம். When: app project create panra bodhu automatic-a generate aagum, adha edit panni namma requirement-ku customize pannுவோம்.`,
        interviewDefinition: `Program.cs is the entry point of a .NET application - it is the first file executed when the application starts. In modern ASP.NET Core (.NET 6 and above), Program.cs uses the minimal hosting model, where application setup - registering services for Dependency Injection, configuring the middleware pipeline, setting up routing, and running the app - is all done in a single file. In earlier .NET versions, this was split across two files: Program.cs (started the app) and Startup.cs (configured services and middleware via ConfigureServices() and Configure() methods). Program.cs is used to register services (like DbContext, Repositories, custom Services), enable Authentication/Authorization, configure middleware (like exception handling, CORS), and enable tools like Swagger. It is automatically generated when a new ASP.NET Core project is created, and developers customize it based on the application's requirements.`,
        example: `// Program.cs (.NET 6+ minimal hosting model)

var builder = WebApplication.CreateBuilder(args);

// 1. Register services (Dependency Injection)
builder.Services.AddControllers();
builder.Services.AddDbContext<PatientDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("PatientDb")));

builder.Services.AddScoped<IPatientService, PatientService>();
builder.Services.AddScoped<IPatientRepository, PatientRepository>();

builder.Services.AddSwaggerGen();

var app = builder.Build();

// 2. Configure middleware pipeline (order matters)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

// 3. Run the app
app.Run();`
    },
    {
        id: 'project-structure',
        title: 'Project Structure (Hospital.API)',
        category: 'C#',
        slangDefinition: `Idhu oru typical layered ASP.NET Core project structure - ovvoru folder-um oru specific responsibility handle pannum, so code organized-a, maintain panna easy-a irukkum. Request flow: Controller -> Service -> Repository -> DB, idha support panna Models/Entities/DTO/Interfaces/Configurations/Helpers/Middlewares separate-a vைrukkanga.`,
        interviewDefinition: `This represents a typical layered architecture for an ASP.NET Core project, where each folder has a single, clear responsibility, keeping the codebase organized and maintainable. The general request flow follows Controller -> Service -> Repository -> Database, supported by separate layers for Models, Entities, DTOs, Interfaces, Configurations, Helpers, and Middlewares.`,
        example: `Hospital.API
├── Controllers        // handles HTTP requests/responses
│     PatientController.cs
│
├── Services           // business logic
│     PatientService.cs
│
├── Repositories        // DB access logic
│     PatientRepository.cs
│
├── Models              // in-app/business models (e.g. search/filter models)
│     PatientSearchModel.cs
│
├── Entities             // DB table mappings
│     Patient.cs
│
├── DTO                  // API request/response shapes
│     PatientDto.cs
│
├── Interfaces            // contracts for Services/Repositories
│     IPatientService.cs
│     IPatientRepository.cs
│
├── Configurations         // strongly-typed app settings
│     JwtConfiguration.cs
│
├── Helpers                 // reusable utility/static logic
│     AgeHelper.cs
│
├── Middlewares              // request/response pipeline components
│     ExceptionMiddleware.cs
│
└── Program.cs                // app entry point, DI + middleware setup`
    },
    {
        id: 'request-response-flow',
        title: 'Request-Response Flow (Angular to SQL Server)',
        category: 'C#',
        slangDefinition: `Idhu oru typical full-stack request flow - Angular-la irundhu SQL Server varaikkum, apparam thirumba Angular-kum data return aagum path idhu. Request Angular-la irundhu API call pannum bodhu, adhu first Middleware pipeline pass pannum (Auth check, Exception handling, Logging), apparam Controller-ku pogum (HTTP request receive pannum), Controller andha request-a Service-ku pass pannum (business logic run aagum), Service Repository-a call pannum (data access logic), Repository DbContext (EF Core) vachi SQL Server-oda communicate pannum. Response path reverse-a varum: SQL Server -> Repository (raw data) -> Service (business logic apply pannum) -> DTO-ku convert pannum (client-ku venum fields mattum) -> Controller (HTTP response-a wrap pannum) -> Angular (UI-la display pannum). Ovvoru layer-um adhoda specific responsibility mattum handle pannum, idhu than separation of concerns.`,
        interviewDefinition: `This represents a typical end-to-end request-response flow in a layered ASP.NET Core + Angular application. A request from Angular first passes through the Middleware pipeline (authentication, exception handling, logging), then reaches the Controller, which delegates to the Service layer for business logic. The Service calls the Repository for data access, and the Repository uses DbContext (EF Core) to communicate with SQL Server. The response follows the reverse path: SQL Server returns raw data to the Repository, the Service applies any business logic, the data is mapped to a DTO (exposing only client-required fields), and the Controller returns the HTTP response back to Angular for rendering. Each layer has a single, well-defined responsibility, reflecting the separation of concerns principle.`,
        example: `Angular (HTTP request)
   ↓
Middleware        // Auth check, Exception handling, Logging
   ↓
Controller        // receives HTTP request
   ↓
Service           // business logic
   ↓
Repository        // data access logic
   ↓
DbContext         // EF Core - translates to SQL
   ↓
SQL Server        // actual data storage
   ↓
Repository        // returns raw entity data
   ↓
Service           // applies business logic / calculations
   ↓
DTO               // maps entity to client-safe shape
   ↓
Controller        // wraps DTO in HTTP response
   ↓
Angular           // renders data in UI`
    },
    {
        id: 'iactionresult-vs-actionresult',
        title: 'IActionResult vs ActionResult<T>',
        category: 'C#',
        slangDefinition: `Rendume Controller action methods-oda return type-ku use pannுவோம், rendukum konjam difference irukku. **IActionResult** na interface - Ok(), NotFound(), BadRequest() maadhiri pala types of results return panna use pannுவோம், aana return type-a specific-a mention pannradhu illa (compiler-ku exact data type theriyadhu), so Swagger documentation-la response type clear-a varadhu. **ActionResult<T>** na generic version - Ok(data), NotFound() rendume return pannalam (IActionResult-oda flexibility irukku), aana kooda T type-a specify pannuவோம் (example: ActionResult<Patient>), so Swagger-la exact response type clear-a show aagum, compile-time-la type safety-um kidaikkum. Adhanala modern .NET-la mostly ActionResult<T> than recommend pannுவோம் - especially data return pannum APIs-ku (GET requests), IActionResult na simple actions-ku (Delete, Post confirmation) use pannலாம்.`,
        interviewDefinition: `Both IActionResult and ActionResult<T> are used as return types for Controller action methods, but they differ in type specificity. IActionResult is an interface that allows returning various result types (Ok(), NotFound(), BadRequest(), etc.), but it does not specify the actual data type being returned, which means Swagger/OpenAPI documentation cannot infer the exact response shape. ActionResult<T> is a generic wrapper that provides the same flexibility (can still return Ok(), NotFound(), etc.) while also specifying the concrete return type T, giving compile-time type safety and accurate Swagger documentation of the response shape. As a result, ActionResult<T> is generally the recommended choice for endpoints that return data (like GET requests), while plain IActionResult is often sufficient for actions that don't return a specific data payload (like Delete or simple confirmation responses).`,
        example: `// IActionResult - no specific return type declared
[HttpGet("{id}")]
public IActionResult GetPatient(int id)
{
    var patient = repository.GetById(id);
    if (patient == null)
        return NotFound();

    return Ok(patient);
    // Swagger doesn't know the exact shape of "patient"
}

// ActionResult<T> - specific return type declared
[HttpGet("{id}")]
public ActionResult<PatientDto> GetPatient(int id)
{
    var patient = repository.GetById(id);
    if (patient == null)
        return NotFound();

    return Ok(patient);
    // Swagger correctly shows response type as PatientDto
}

// Simple action with no data payload - IActionResult is fine
[HttpDelete("{id}")]
public IActionResult DeletePatient(int id)
{
    repository.Delete(id);
    return NoContent();
}`
    },
    {
        id: 'folder-vs-class-library',
        title: 'Folder vs Class Library',
        category: 'C#',
        slangDefinition: `Folder na same project-kulla than oru logical grouping - Controllers, Services, Repositories maadhiri folders vachi code-a organize pannுவோம், aana ellame same .csproj (same assembly/DLL) kulla than compile aagும். Class Library na completely vera oru project (.csproj) - thani-a compile aagi thani DLL create pannும், idha namma main project (or vேra projects-um) reference vachi use pannலாம். Ne when folder use pannanum: same project-kulla, small-medium app, reuse veLiya vேண்டாம்-na folder podhum. When class library use pannanum: code-a multiple projects-la share pannanum-na (example: Common validation logic, Entities rendu API projects-um use pannும்), independent-a version pannanum-na, build time reduce pannanum-na (unchanged library recompile aagாது), illa NuGet package-a publish pannanum-na. Real project-la: Hospital.API (main), Hospital.Common (class library - shared DTOs, Helpers), Hospital.Data (class library - Entities, DbContext) - idhu maadhiri separate pannுவோம்.`,
        interviewDefinition: `A Folder is simply a logical grouping of files within the same project (e.g., Controllers, Services, Repositories) - all code inside these folders compiles into the same assembly (.dll) as the rest of the project. A Class Library is a separate, standalone project (its own .csproj) that compiles into its own independent assembly (.dll), which can then be referenced and reused by one or more other projects. Folders are appropriate when code only needs to be organized within a single project and doesn't need to be shared elsewhere. A Class Library is preferred when code needs to be shared across multiple projects (e.g., common DTOs, validation logic, or Entities used by multiple APIs), needs to be versioned or built independently, needs to reduce overall build time (an unchanged library doesn't need to be recompiled), or needs to be published as a reusable NuGet package. In a real-world solution, this often looks like: Hospital.API (main project), Hospital.Common (class library for shared DTOs/Helpers), and Hospital.Data (class library for Entities/DbContext).`,
        example: `// Folder approach - everything inside one project (Hospital.API.csproj)
Hospital.API
├── Controllers
├── Services
├── Repositories
├── Entities
└── Program.cs
// All folders compile into a single Hospital.API.dll

// Class Library approach - split across multiple projects
Hospital.sln
├── Hospital.API            (project - references the libraries below)
│     ├── Controllers
│     └── Program.cs
│
├── Hospital.Common         (class library - Hospital.Common.dll)
│     ├── DTO
│     └── Helpers
│
└── Hospital.Data           (class library - Hospital.Data.dll)
      ├── Entities
      └── PatientDbContext.cs

// Hospital.API.csproj references the class libraries:
// <ProjectReference Include="..\Hospital.Common\Hospital.Common.csproj" />
// <ProjectReference Include="..\Hospital.Data\Hospital.Data.csproj" />

// Now Hospital.Common and Hospital.Data can be reused
// by another project (e.g., Hospital.BackgroundJobs) without duplication`
    },
    {
        id: 'dependency-injection',
        title: 'Dependency Injection',
        category: 'C#',
        slangDefinition: `Dependency Injection (DI) na oru class-ku venum dependency (example: IPatientRepository) andha class internal-a "new" pannama, outside-la irundhu inject pannradhu (constructor vachi kudukradhu). Idhu vachi classes loosely coupled-a irukkும் - PatientService, IPatientRepository interface mattum theriyum, actual implementation (PatientRepository, SQL vera, MongoDB vera edhu vandhalum) idha பாதிக்காது. .NET-la built-in DI container irukku (IServiceCollection) - Program.cs-la AddScoped(), AddSingleton(), AddTransient() vachi register pannுவோம், app run aagும் bodhu automatic-a required dependencies resolve pannி constructor-la pass pannிடும். Testing-ku romba useful - unit test ezhudhum bodhu real DB-a hit pannாம, fake/mock repository inject pannி test pannலாம்.`,
        interviewDefinition: `Dependency Injection (DI) is a design pattern where a class receives its dependencies (e.g., IPatientRepository) from an external source, typically via its constructor, rather than creating them internally with "new". This results in loosely coupled code - a class like PatientService only depends on an interface, remaining unaware of the concrete implementation (whether it's backed by SQL Server, MongoDB, or a mock for testing). ASP.NET Core has a built-in DI container (IServiceCollection); services are registered in Program.cs using AddScoped(), AddSingleton(), or AddTransient(), and the framework automatically resolves and injects the required dependencies at runtime. DI is especially valuable for unit testing, since a fake or mock implementation of a dependency can be injected instead of hitting a real database.`,
        example: `// Interface - defines the contract
public interface IPatientRepository
{
    Patient GetById(int id);
}

// Concrete implementation
public class PatientRepository : IPatientRepository
{
    public Patient GetById(int id)
    {
        // fetch from SQL Server
        return new Patient { Id = id, Name = "Kathiravan" };
    }
}

// Service depends on the interface, NOT the concrete class
public class PatientService
{
    private readonly IPatientRepository repository;

    // Constructor Injection - dependency is "injected" from outside
    public PatientService(IPatientRepository repository)
    {
        this.repository = repository;
    }

    public Patient GetPatient(int id)
    {
        return repository.GetById(id);
    }
}

// Program.cs - register with DI container
builder.Services.AddScoped<IPatientRepository, PatientRepository>();
builder.Services.AddScoped<PatientService>();

// .NET automatically resolves and injects PatientRepository
// wherever IPatientRepository is required (e.g., PatientController)

// Types of lifetimes:
// AddTransient  -> new instance every time it's requested
// AddScoped     -> one instance per HTTP request
// AddSingleton  -> one instance for the entire application lifetime`
    },
    {
        id: 'linq-vs-js',
        title: 'LINQ Methods vs JavaScript Array Methods',
        category: 'C#',
        slangDefinition: `LINQ (Language Integrated Query) na C#-la collections (List, Array) query panna use pannura methods - JS-la namma array methods use panra maadhiri than, syntax konjam different. Where() na JS-oda filter() maadhiri - condition match aagra items mattum return pannும். Select() na JS-oda map() maadhiri - each item-a transform pannி new shape return pannும். First() na JS-oda find()[0] maadhiri, aana match illana Exception throw pannும் (empty-a return pannாது). FirstOrDefault() na match illana null/default return pannும் (safe-a use pannலாம், real-time-la First() velaikkum FirstOrDefault() than mostly use pannுவோம்). Any() na JS-oda some() maadhiri - condition match aagra element irukka nu boolean return pannும். All() na JS-oda every() maadhiri - ella elements-um condition match aaganum. OrderBy() na JS-oda sort() maadhiri - ascending order-la sort pannும் (OrderByDescending() descending-ku). GroupBy() na JS-la reduce() vachi manual-a group pannுவோம் (JS-la direct method illa), C#-la key vachi automatic-a group pannிடும். Join() na JS-oda equivalent illa - SQL JOIN maadhiri rendu collections-a common key vachi combine pannும்.`,
        interviewDefinition: `LINQ (Language Integrated Query) provides a set of methods to query and manipulate collections in C#, conceptually similar to JavaScript's array methods but with different syntax and behavior. Where() filters elements based on a condition, equivalent to JavaScript's filter(). Select() projects/transforms each element into a new shape, equivalent to map(). First() returns the first matching element but throws an exception if no match is found, whereas FirstOrDefault() returns the default value (null for reference types) instead of throwing - making it the safer, more commonly used choice. Any() checks whether at least one element satisfies a condition, equivalent to some(). All() checks whether every element satisfies a condition, equivalent to every(). OrderBy() sorts elements in ascending order (OrderByDescending() for descending), similar to sort(). GroupBy() groups elements by a key, which JavaScript does not provide natively (typically implemented manually using reduce()). Join() combines two collections based on a matching key, conceptually similar to a SQL JOIN, with no single direct JavaScript equivalent.`,
        example: `List<Patient> patients = new List<Patient>
{
    new Patient { Id = 1, Name = "Kathir", Age = 26, Dept = "Cardiology" },
    new Patient { Id = 2, Name = "John", Age = 45, Dept = "Neurology" },
    new Patient { Id = 3, Name = "David", Age = 32, Dept = "Cardiology" }
};

// Where() -> filter()
var adults = patients.Where(p => p.Age >= 18).ToList();
// JS: patients.filter(p => p.age >= 18)

// Select() -> map()
var names = patients.Select(p => p.Name).ToList();
// JS: patients.map(p => p.name)

// First() -> throws if no match
var first = patients.First(p => p.Age > 40);
// JS: patients.find(p => p.age > 40) -> but find() returns undefined, not throw

// FirstOrDefault() -> safe, returns null if no match
var firstOrNull = patients.FirstOrDefault(p => p.Age > 100);
// JS: patients.find(p => p.age > 100) -> undefined

// Any() -> some()
bool hasSenior = patients.Any(p => p.Age >= 60);
// JS: patients.some(p => p.age >= 60)

// All() -> every()
bool allAdults = patients.All(p => p.Age >= 18);
// JS: patients.every(p => p.age >= 18)

// OrderBy() -> sort()
var sorted = patients.OrderBy(p => p.Age).ToList();
// JS: patients.sort((a, b) => a.age - b.age)`
    },
    {
        id: 'linq-groupby',
        title: 'GroupBy()',
        category: 'C#',
        slangDefinition: `GroupBy() na oru collection-a oru key vachi group pannradhu - same key irukra items ella ஒரே group-la varும். Result na IEnumerable<IGrouping<TKey, TSource>> nu varும் - ஒவ்வொரு group-kum "Key" (group panna use panna value) and andha group-kula irukra items ellame irukும். JS-la idhu maadhiri direct method illa, reduce() vachi manual-a implement pannணும். Real-time-la Department vachi Patients group pannradhu, Status vachi Orders group pannradhu maadhiri use pannுவோம் - dashboard, report generate panna romba useful.`,
        interviewDefinition: `GroupBy() groups elements of a collection based on a specified key selector, returning an IEnumerable<IGrouping<TKey, TSource>> where each group has a Key property (the grouping value) and contains all matching elements from the original collection. JavaScript has no direct built-in equivalent - grouping is typically implemented manually using reduce(). GroupBy() is commonly used in real-world scenarios like grouping patients by department or orders by status, which is especially useful for generating dashboards and reports.`,
        example: `// Input
List<Patient> patients = new List<Patient>
{
    new Patient { Id = 1, Name = "Kathir", Dept = "Cardiology" },
    new Patient { Id = 2, Name = "John", Dept = "Neurology" },
    new Patient { Id = 3, Name = "David", Dept = "Cardiology" },
    new Patient { Id = 4, Name = "Priya", Dept = "Neurology" }
};

// Code
var groupedByDept = patients.GroupBy(p => p.Dept);

// Output (conceptual shape - Key = Dept, items = matching patients)
{
    "Cardiology":
    [
        {
            Id: 1,
            Name: "Kathir",
            Dept: "Cardiology"
        },
        {
            Id: 3,
            Name: "David",
            Dept: "Cardiology"
        }
    ],
    "Neurology":
    [
        {
            Id: 2,
            Name: "John",
            Dept: "Neurology"
        },
        {
            Id: 4,
            Name: "Priya",
            Dept: "Neurology"
        }
    ]
}`
    },
    {
        id: 'linq-join',
        title: 'Join()',
        category: 'C#',
        slangDefinition: `Join() na rendu different collections-a common key vachi combine pannradhu - SQL-la INNER JOIN pannura maadhiri than. Rendu lists-um irukanum (example: Patients, Departments), oru common field vachi match pannி (Dept name = Department name) rendu-oda data-a merge panni oru new shape create pannுவோம். Match aagாma irukra items automatic-a skip aagும் (INNER JOIN behavior). JS-la idhukku direct method illa, filter() + map() combine panni manual-a pannணும். Real-time-la Patient-oda Department details join pannradhu, Order-oda Customer details join pannradhu maadhiri use pannுவோம்.`,
        interviewDefinition: `Join() combines two collections based on a matching key, similar to an INNER JOIN in SQL. It takes an outer collection, an inner collection, key selectors for both, and a result selector that defines the shape of the combined output. Elements that do not have a matching key in both collections are excluded from the result, consistent with inner-join behavior. JavaScript has no direct built-in equivalent - this is typically implemented manually using a combination of filter() and map(). Join() is commonly used in real-world scenarios like combining Patient records with their Department details, or Order records with Customer details.`,
        example: `// Input
List<Patient> patients = new List<Patient>
{
    new Patient { Id = 1, Name = "Kathir", Dept = "Cardiology" },
    new Patient { Id = 2, Name = "John", Dept = "Neurology" },
    new Patient { Id = 3, Name = "David", Dept = "Cardiology" }
};

List<Department> departments = new List<Department>
{
    new Department { Name = "Cardiology", Floor = 3 },
    new Department { Name = "Neurology", Floor = 5 }
};

// Code
var result = patients.Join(
    departments,
    p => p.Dept,          // key from outer collection (patients)
    d => d.Name,           // key from inner collection (departments)
    (p, d) => new
    {
        p.Id,
        p.Name,
        p.Dept,
        Floor = d.Floor
    });

// Output
[
    {
        Id: 1,
        Name: "Kathir",
        Dept: "Cardiology",
        Floor: 3
    },
    {
        Id: 2,
        Name: "John",
        Dept: "Neurology",
        Floor: 5
    },
    {
        Id: 3,
        Name: "David",
        Dept: "Cardiology",
        Floor: 3
    }
]`
    },
];
