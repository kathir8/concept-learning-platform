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
];
