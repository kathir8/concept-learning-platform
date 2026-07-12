import { Concept } from "../../models/concept.model";

export const oopsConcepts: Concept[] = [
    {
        id: 'oops-overview',
        title: 'What is OOPS?',
        category: 'OOPS',
        slangDefinition: `OOPS (Object-Oriented Programming System) na code-a "objects" vachi organize pannura programming style. Real world entities (Patient, Doctor, Nurse) maadhiri class/object vachi data (properties) and behavior (methods) rendaiyum order idatula vekkirom. Idhu code reuse panna, maintain panna, and real-world problems-a easy-a model panna help pannum. OOPS-la 4 main pillars irukku: Encapsulation (data + methods oru unit-la bundle pannradhu, access control vachi protect pannradhu), Abstraction (unnecessary details hide panni, important features mattum expose pannradhu), Inheritance (oru class vera class-oda properties/methods-a reuse pannradhu, parent-child relationship), Polymorphism (same method name, but different objects-ku different behavior - runtime-la decide aagum).`,
        interviewDefinition: `Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects," which bundle data (properties/fields) and behavior (methods) together, typically modeled around real-world entities. It promotes code reusability, modularity, and easier maintenance. OOP is built on four core pillars: Encapsulation (bundling data and methods within a class while restricting direct access using access modifiers), Abstraction (hiding implementation details and exposing only essential features), Inheritance (allowing a class to acquire properties and behavior from a parent class, establishing a parent-child relationship), and Polymorphism (allowing the same method or interface to exhibit different behavior depending on the actual object type, resolved at compile-time or runtime).`,
        example: `// The 4 Pillars of OOPS:
// 1. Encapsulation - bundling data + methods, controlling access
// 2. Abstraction    - hiding complexity, exposing only what's needed
// 3. Inheritance    - reusing parent class properties/methods in child class
// 4. Polymorphism   - same method, different behavior based on object type`
    },
    {
        id: 'class',
        title: 'Class',
        category: 'OOPS',
        slangDefinition: `Class na related data-va oru single unit-la group panni vekkura oru blueprint. Company-la Patient, Doctor mathiri business entity-ku data thanithaniya variable-a (patient1Name, patient2Name...) vechikitte pona, thousands of variables varum, maintain panna impossible aagum. Adha thavirkka ella related data-vayum (Name, Age, Gender, BloodGroup) oru Patient nu oru class-a define pannuvom. Class na actual data illa, "Patient ku enna properties irukum" nu solra structure mattum thaan. Dictionary mathiri flexible-a vechikkalam-nu therinjaalum, typo (patient["Agge"]) illa wrong type assign panna (Age = "Twenty Six") compile-time-la catch aagadhu - Class use panna indha errors ellam compile-time-lene kandupudichiralam.`,
        interviewDefinition: `A class is a blueprint that groups related data (properties) and behavior (methods) into a single, strongly-typed structure representing a business entity. It solves the problem of managing large numbers of unrelated variables by organizing them into one cohesive unit. A class itself defines only the structure; actual data is created via objects/instances. Compared to loosely-typed alternatives like Dictionary<string, object>, classes provide compile-time type safety, IntelliSense support, and refactoring safety - catching mistakes like misspelled keys or wrong data types at compile time rather than at runtime.`,
        example: `// ==========================================
// 1. REAL COMPANY PROBLEM
// ==========================================
// Client: "Create a Patient API. Patient has Name, Age, Gender, Blood Group."

// ==========================================
// 2. BAD APPROACH (Beginner way)
// ==========================================
string patientName = "Kathiravan";
int patientAge = 26;
string patientGender = "Male";
string patientBloodGroup = "O+";

// Week 1: "Looks okay"

// After a week -> "We have another patient"
string patient1Name = "Kathiravan";
int patient1Age = 26;
string patient2Name = "John";
int patient2Age = 30;
// Still okay... barely.

// After a month -> Hospital has 10,000 patients
// patient1Name, patient2Name, patient3Name ... patient10000Name  😂 IMPOSSIBLE

// New developer joins and asks: "Which variables belong to Patient?"
string patientName2;
string doctorName;
string hospitalName;
string roomName;
string cityName;
string medicineName;
// Everything mixed. No organization. Maintenance nightmare.

// ==========================================
// 3. BETTER APPROACH (OOP solution)
// ==========================================
// Microsoft engineers' idea: instead of 100 separate variables,
// create ONE thing called "Patient" and keep everything related to it inside.
// That idea became a CLASS.

public class Patient
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Gender { get; set; }
    public string BloodGroup { get; set; }
}

// NOTE: This is still just a DEFINITION - "what a Patient looks like".
// No real data yet. Just: Patient has Name, Age, Gender, BloodGroup.

// ==========================================
// 4. ACTUAL COMPANY CODE (Real folder structure)
// ==========================================
// Models/
//     Patient.cs
//     Doctor.cs
//     Appointment.cs
//     Medicine.cs
// -> Each file = one business entity. This is how you'll see it at your company.

// Patient.cs
public class Patient
{
    public int Id { get; set; }
    public string Name { get; set; }
    public DateTime DOB { get; set; }
}

// Doctor.cs
public class Doctor
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Specialization { get; set; }
}

// Real example: Vital Signs module
public class VitalSign
{
    public decimal Temperature { get; set; }
    public decimal PulseRate { get; set; }
    public decimal Oxygen { get; set; }
    public decimal PainScore { get; set; }
    public DateTime RecordedDate { get; set; }
}
// Tomorrow, another dev opens VitalSign.cs and within 30 seconds understands
// "Okay, this file represents Vital Signs." That's THE reason companies use classes.

// Storing many patients -> List<Patient> (Patient defines ONE object's shape,
// List<Patient> stores MANY of them)
List<Patient> patients = new List<Patient>
{
    new Patient { Id = 1, Name = "Kathiravan", Age = 26, Gender = "Male", BloodGroup = "O+" },
    new Patient { Id = 2, Name = "John", Age = 30, Gender = "Male", BloodGroup = "A+" }
};

// ==========================================
// 5. WHY NOT ANOTHER APPROACH?
// ==========================================

// Why not just use a single "Everything" class with all business concepts inside?
public class Everything
{
    // Patient
    // Doctor
    // Appointment
    // Invoice
    // Medicine
    // Nurse
    // Lab Report
    // Insurance
}
// -> 20,000 lines, 100 developers editing the same file, constant merge conflicts.
// Impossible to maintain. So companies split code into one class per business concept.

// Why not Dictionary<string, object> instead of a Class?
Dictionary<string, object> patientDict = new();
patientDict["Name"] = "Kathiravan";
patientDict["Age"] = 26;
patientDict["Gender"] = "Male";

// patientDict["Agge"] = 26;              // Typo! No compile-time error, silently wrong
// patientDict["Age"] = "Twenty Six";     // Wrong type! No compile-time error either

// With a class, both mistakes are caught IMMEDIATELY:
// patients[0].Agge = 26;                 // ❌ Compile-time error (typo caught)
// patients[0].Age = "Twenty Six";        // ❌ Compile-time error (wrong type)
patients[0].Age = 27;                     // ✅ Correct usage

// CONCLUSION:
// Before Class: thousands of unrelated variables, no organization, hard to maintain
// After Class : related data grouped, strongly typed, one file per business concept,
//               compile-time safety, easy for any developer to understand instantly
`
    },
    {
        id: 'object',
        title: 'Object',
        category: 'OOPS',
        slangDefinition: `Object na class-la irundhu create panna oru real data piece. Yesterday nama Patient class create pannom - Name, Age, Gender irukum nu sonnom, aana adhu oru actual patient-a illa. Hospital-la 1,00,000 patients irundha, ovvoru patient-kum thani thani class create panna mudiyaadhu (PatientClass1, PatientClass2...😂 illa). Adhaan ore oru Patient class vechikittu, puthusa patient varum bothu "new Patient()" nu oru Object create pannuvom. Object na memory-la irukura real patient - Kathiravan, John, David nu ovvoruthukum thani thani object, thani thani values. Class oru blueprint mattum, object dhaan actual usable data. "new" keyword use pannama class variable declare panna, adhu memory allocate aagadhu, andha variable enna object-ayum point pannadhu.`,
        interviewDefinition: `An object is a real, in-memory instance created from a class, holding actual data values. While a class only defines the structure (what properties exist), an object represents a specific real-world entity with actual values assigned to those properties. Multiple objects can be created from a single class, each maintaining its own independent copy of data - changing one object's properties doesn't affect another. Objects are created using the 'new' keyword, which allocates memory for the object; without it, a variable simply doesn't point to any actual data and attempting to access its properties results in a compile-time or runtime error. Objects are essential because a single class definition needs to represent potentially millions of real entities (e.g., patients in a hospital system), and frameworks like ASP.NET Core automatically deserialize incoming JSON into objects behind the scenes.`,
        example: `// ==========================================
// 1. REAL COMPANY PROBLEM
// ==========================================
// We already created the Patient class:
public class Patient
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Gender { get; set; }
}

// Client says: "Display Kathiravan's details."
// Can we do it directly with the class? NO.
// The class only says "every patient HAS a Name, Age, Gender."
// It never says "Kathiravan" or "John" - there's no actual patient yet.

// Hospital doesn't have ONE patient, it has:
// Kathiravan, John, David, Arun, Rahul ... 1,00,000 patients

// ==========================================
// 2. BAD APPROACH (Beginner instinct)
// ==========================================
// "Should we create Patient1 class, Patient2 class, Patient3 class...?" 😂 NO.
// That would mean 1,00,000 separate classes for 1,00,000 patients. Insane.

// Also, without objects, we're back to the old variable-explosion problem:
string patient1Name; int patient1Age;
string patient2Name; int patient2Age;
string patient3Name; int patient3Age;
// 10,000 patients = 30,000 variables. Impossible.

// ==========================================
// 3. BETTER APPROACH (OOP solution - Object)
// ==========================================
// Keep only ONE class. Whenever a new patient comes, create ONE OBJECT.
// Object = one real patient sitting in memory.

Patient patient1 = new Patient();
patient1.Name = "Kathiravan";
patient1.Age = 26;
patient1.Gender = "Male";

Patient patient2 = new Patient();
patient2.Name = "John";
patient2.Age = 35;
patient2.Gender = "Male";

Patient patient3 = new Patient();
patient3.Name = "David";
patient3.Age = 50;
patient3.Gender = "Male";

// Notice: the CLASS (Patient) is same for all three.
// Only the VALUES differ. Each object has its own independent copy of data -
// changing patient1.Age never touches patient2.Age or patient3.Age.

// Why "new"? Without it:
Patient patientX;
// Nothing happened. Just a variable declared. No memory allocated. No object exists.
// patientX.Name = "Kathiravan";   // ❌ Compiler complains - nothing to point to

// With "new":
Patient patientY = new Patient();  // .NET allocates memory for one Patient object
patientY.Name = "Kathiravan";      // ✅ Works - the object actually exists

// ==========================================
// 4. ACTUAL COMPANY CODE (What you see in real projects)
// ==========================================
// API returns JSON:
// [
//   { "id": 1, "name": "Kathiravan" },
//   { "id": 2, "name": "John" }
// ]
// .NET does NOT store raw JSON. It converts JSON into OBJECTS internally:
//   Patient patient1 -> Id = 1, Name = "Kathiravan"
//   Patient patient2 -> Id = 2, Name = "John"
// This is exactly what you're looking at when you debug an API in Visual Studio.

// In your controller:
public IActionResult SavePatient(Patient patient)
{
    // "patient" here is ALREADY an object.
    // Frontend (Angular) sent: { "name": "Kathiravan", "age": 26 }
    // ASP.NET Core conceptually did:
    //     Patient patient = new Patient();
    //     patient.Name = "Kathiravan";
    //     patient.Age = 26;
    // ...and passed that object straight into this method.
    return Ok();
}

// Where do these objects live?
// They sit in memory (Heap) while the app runs. Once nothing references them
// anymore, the Garbage Collector (GC) automatically frees that memory.
// (Heap, Stack, References, GC - covered in detail later.)

// ==========================================
// 5. WHY NOT ANOTHER APPROACH?
// ==========================================

// Why not Dictionary<string, object> instead of a real object?
Dictionary<string, object> patientDict = new();
patientDict["Name"] = "Kathiravan";
patientDict["Age"] = 26;
// Everywhere you need: patientDict["Name"], patientDict["Age"]
// No IntelliSense. No compile-time checking. Easy to typo "Naem" and never know.

// With a real object:
Patient cleanPatient = new Patient();
cleanPatient.Name = "Kathiravan";   // ✅ IntelliSense + compile-time safety
cleanPatient.Age = 26;

// CONCLUSION:
// Before Object: one class couldn't represent multiple real patients;
//                needed thousands of unrelated variables; no clean way to copy data
// After Object : one class creates unlimited patients, each with its own data,
//                cleanly passed between Controller -> Service -> Repository
`
    },
    {
        id: 'constructor',
        title: 'Constructor',
        category: 'OOPS',
        slangDefinition: `Constructor na class create aagum bothu automatic-a run aagura oru special method. Idhu yaen venum na, PatientService-la Save(), Delete(), Update() mathiri 25 methods irundha, ovvoru method-layum "new Database()" nu type panna vekkanum na romba duplicate code aagum, and nalaikku Database class-a SqlDatabase-a change pannanum na 100 places search panni replace pannanum. Adha thavirkka, Database-a oru vaati mattum PatientService create aagum bothu (constructor-la) create pannitu, ella methods-um andha same database variable-a reuse pannalaam. Innum better-a, PatientService thaane Database create pannama, veliyila irundhu yaaravadhu (ASP.NET Core framework) create pannitu kudukkum - idhukku Constructor Injection nu per, indha mari class thana dependencies create panradha nirthitu, focus pannura vela mattum pannum.`,
        interviewDefinition: `A constructor is a special method that runs automatically when an object is created, primarily used to initialize the object's state. In real-world applications, constructors solve the problem of repeated object creation - instead of instantiating dependencies (like a database connection) inside every method, they're created once when the class itself is instantiated. The more advanced and commonly used pattern in company codebases is Constructor Injection (a form of Dependency Injection), where a class does not create its own dependencies with 'new' but instead receives them through its constructor - typically supplied by a framework like ASP.NET Core's DI container. This decouples classes from the responsibility of creating dependencies, making code easier to test, maintain, and swap implementations for (e.g., switching from SQL Server to Oracle) without modifying every consuming class.`,
        example: `// ==========================================
// 1. REAL COMPANY PROBLEM
// ==========================================
// PatientService needs: Database, Logger, Email Service, Cache

// ==========================================
// 2. BAD APPROACH (Beginner way - no constructor)
// ==========================================
public class PatientService
{
    public void SavePatient()
    {
        Database database = new Database();
        database.Save();
    }

    public void DeletePatient()
    {
        Database database = new Database();
        database.Delete();
    }

    public void UpdatePatient()
    {
        Database database = new Database();
        database.Update();
    }
}
// Looks okay... for now.

// After 6 months: PatientService has 25 methods.
// EVERY method starts with:
//   new Database();
//   new Logger();
//   new Cache();
//   new EmailService();
// Repeated in Save(), Update(), Delete(), Get(), Search(), Import(),
// Export(), Approve(), Reject(), Merge()... everywhere. Developer frustrated.

// Client says: "Change Database class to SqlDatabase."
// Now search the ENTIRE project, replace "new Database()" in 100 places.
// Huge maintenance nightmare.

// ==========================================
// 3. BETTER APPROACH (Constructor solves creation-duplication)
// ==========================================
public class PatientService
{
    private Database database;

    public PatientService()
    {
        database = new Database();   // Created ONCE, here
    }

    public void Save()   { database.Save(); }
    public void Delete() { database.Delete(); }
}
// Cleaner - only ONE place creates Database now.

// But still a problem: if Database needs to become OracleDatabase,
// you still have to modify this ONE constructor line - not ideal, but better.

// ==========================================
// 4. ACTUAL COMPANY CODE (Constructor Injection / Dependency Injection)
// ==========================================
// Bigger companies go further: PatientService doesn't create Database at all.
// Someone ELSE creates it and simply GIVES it to PatientService.

public class PatientService
{
    private readonly Database database;

    public PatientService(Database database)   // received, not created
    {
        this.database = database;
    }
}

// Who gives it? ASP.NET Core's DI container.
// Program.cs:
//     builder.Services.AddScoped<PatientService>();
// Internally, ASP.NET Core does something conceptually like:
//     Database db = new Database();
//     PatientService service = new PatientService(db);
// You never write this yourself - the framework does it.

// Real flow:
// ASP.NET Core -> creates Database -> passes it -> PatientService
// PatientService doesn't know (or care) WHO created Database. It just uses it.

// What you'll see every day in your company's codebase:
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

    public void Save()
    {
        logger.LogInformation("Saving patient");
        repository.Save();
    }
}
// Notice: PatientService NEVER writes "new PatientRepository()" or "new Logger()".
// It simply receives them through the constructor.

// Same pattern flows upward - Controller receives Service the same way:
public class PatientController
{
    private readonly PatientService _service;

    public PatientController(PatientService service)   // DI container supplies this
    {
        _service = service;
    }
}
// Tomorrow PatientService's internals change? Controller doesn't care.
// Tomorrow Repository changes? PatientService constructor changes, Controller still doesn't care.
// Each class focuses only on its own job.

// ==========================================
// 5. WHY NOT ANOTHER APPROACH?
// ==========================================

// Why not just use static methods instead of a constructor?
//     Database.Save();   // No object, no constructor needed - looks simple
// Problem: Hospital A needs Database Connection A, Hospital B needs Connection B.
// With static, everyone shares the SAME state - hard to manage, hard to test,
// impossible to swap implementations per situation.

// Why not just "new" the dependency wherever it's needed instead of injecting it?
// Imagine 100 services, each creating its own Logger, Cache, Email, Database, Redis...
// Every class becomes responsible for creating EVERYTHING it touches.
// One dependency changes -> you touch dozens of files.
// Constructor Injection centralizes creation in ONE place (the DI container),
// so classes stay focused, testable, and easy to maintain.

// CONCLUSION:
// Before Constructor: objects re-created in every method, duplicated code,
//                      tightly coupled to how dependencies were built
// After Constructor : dependencies created once (or supplied once via DI),
//                      cleaner code, easier maintenance, foundation for DI
`
    },
    {
        id: 'property',
        title: 'Property',
        category: 'OOPS',
        slangDefinition: `Property na object oda data-va outside code direct-a touch panna vidama, oru gate mathiri control panra mechanism. Field/variable public-a vechikitta na, "patient.age = -50" mathiri yaar venumna nu edhavadhu invalid value assign panniralam, compiler ku problem theriyaadhu, aana DB-la wrong data poyiralam. Adha thavirkka, variable-a private-a vechikitta, get/set nu oru property vekkuvom - set-la validation potu, "value >= 0" na mattum accept pannuvom, illana ignore pannuvom. Romba company code-la "public string Name { get; set; }" nu simple-a irukum - idhu Auto Property, validation edhuvum thevaipadaama irundha, compiler thanaave private variable-a background-la create pannikkum. private set; vecha, veliyila irundhu read panna mudiyum aana modify panna mudiyaadhu - Id, CreatedDate mathiri fields-ku romba common.`,
        interviewDefinition: `A property is a controlled access point (get/set accessor) to a class's private data field, allowing validation, logic, or restrictions to be applied when data is read or written, while still offering clean, field-like syntax. Without properties, publicly exposed fields can be assigned any value without validation, leading to invalid data (e.g., negative age, empty required strings). Properties solve this by placing get/set accessors between the outside code and the underlying private variable, so business rules can be enforced centrally. C# also offers Auto-Properties (e.g., public string Name { get; set; }) as a shorthand when no custom validation logic is needed - the compiler automatically generates the backing private field. A property can also have a private setter (get; private set;) to allow read access from outside the class while restricting modification to within the class itself. Properties are also essential for frameworks like ASP.NET Core, Entity Framework, and JSON serializers, which bind data to objects through properties rather than raw fields.`,
        example: `// ==========================================
// 1. REAL COMPANY PROBLEM
// ==========================================
// Hospital software rule: Patient Age cannot be negative.

// ==========================================
// 2. BAD APPROACH (Public field - no control)
// ==========================================
public class Patient
{
    public string name;
    public int age;
    public string gender;
}

Patient patient = new Patient();
patient.name = "Kathiravan";
patient.age = 26;    // Works fine... for now

// But another developer, somewhere else in a 100-file project, writes:
patient.age = -50;      // ✅ Compiler says okay - no rule broken!
patient.name = "";      // Empty name - also "okay" to the compiler
patient.gender = null;  // Also "okay"

// Now the Database has Age = -50. Impossible in real life. BUG.
// Company realizes: we cannot let everyone directly touch our data.

// ==========================================
// 3. BETTER APPROACH (Property - a controlled gate)
// ==========================================
public class Patient
{
    private int age;   // hidden from outside world

    public int Age
    {
        get { return age; }
        set
        {
            if (value >= 0)      // validation gate
            {
                age = value;
            }
            // else: silently rejected (or could throw/log)
        }
    }
}

Patient p = new Patient();
p.Age = 26;    // ✅ Accepted
p.Age = -10;   // ❌ Ignored - rule enforced automatically, every time

// Another real rule: Salary cannot exceed 10 Lakhs
public class Employee
{
    private decimal salary;

    public decimal Salary
    {
        get { return salary; }
        set
        {
            if (value <= 1000000)
            {
                salary = value;
            }
        }
    }
}
// Every developer automatically follows this rule - no one can bypass it.

// ==========================================
// 4. ACTUAL COMPANY CODE (Auto-Properties + real usage)
// ==========================================
// Most of the time, you don't need custom validation, so instead of writing:
//     private string name;
//     public string Name { get { return name; } set { name = value; } }
// You simply write the shorthand (Auto Property):

public class PatientDto
{
    public string Name { get; set; }
    public int Age { get; set; }
}
// Compiler secretly creates the private backing field for you.

// When Angular sends:
// { "name": "Kathiravan", "age": 26 }
// ASP.NET Core creates the object and internally does:
//     patient.Name = "Kathiravan";   // calls the PROPERTY, not a raw field
//     patient.Age = 26;

// Properties can also silently do extra work on every assignment:
public class PatientAudited
{
    private string name;
    public string Name
    {
        get { return name; }
        set
        {
            logger.LogInformation("Name Changed");   // auto logging
            name = value;
        }
    }
}
// Every time someone sets Name, it gets logged automatically - caller doesn't
// even need to know this is happening.

// Read-only-from-outside properties (very common in company code):
public class Patient
{
    public Guid Id { get; private set; }          // readable everywhere, settable only inside class
    public DateTime CreatedDate { get; private set; }
}
Console.WriteLine(patient.Id);        // ✅ Allowed
// patient.Id = Guid.NewGuid();       // ❌ Compile-time error - only class itself can set it

// Real API model, exactly what you'll see in your company:
public class VitalSign
{
    public decimal Temperature { get; set; }
    public decimal PulseRate { get; set; }
    public decimal Oxygen { get; set; }
    public decimal PainScore { get; set; }
}
// Angular sends: { "temperature":98.6, "pulseRate":72, "oxygen":98, "painScore":2 }
// ASP.NET Core maps JSON values directly into these properties.

// ==========================================
// 5. WHY NOT ANOTHER APPROACH?
// ==========================================

// Why not use public fields directly (skip properties entirely)?
public class EmployeeBad
{
    public decimal Salary;   // no gate at all
}
// employee.Salary = -5000;   // ✅ Compiles fine - NO validation, NO control, NO business rule

// Why not use GetAge()/SetAge() methods instead (like Java-style getters/setters)?
//     patient.SetAge(26);
//     int age = patient.GetAge();
// This works, and other languages use it heavily. But Microsoft felt it was too
// much boilerplate for something this common, so C# introduced Properties:
//     patient.Age = 26;
//     int age = patient.Age;
// Same safety, cleaner and more readable syntax, and validation logic can still
// be added inside get/set whenever needed.

// CONCLUSION:
// Before Properties: anyone could set any value directly, no validation, no logging, no control
// After Properties : data access is validated and controlled, code stays clean and
//                     readable, and frameworks (ASP.NET Core, EF, JSON serializers)
//                     can bind data naturally through properties
`
    },
    {
        id: 'method',
        title: 'Method',
        category: 'OOPS',
        slangDefinition: `Method na class-kulla irukura oru function, business logic-a oru single place-la vekkura purpose-ku use pannuvom. Method illama irundha, ovvoru developer-um "Save Patient" venumna, Validation, DB Save, Logging, Email ellathayum thani thaniya copy-paste pannuvanga. Developer A validate pannitu save pannuvaru, Developer B save pannitu validate pannuvaru - order different-a irukum, bug varum. Client "Age > 0 irukanum" nu rule add pannachu na, 100 places-la search panni edit pannanum. Adha thavirkka, andha logic-a oru method-a (SavePatient()) create pannitu, edhavadhu venum-na andha method-a call panna sollitrom - "patientService.SavePatient(patient)". Nalaikku "Audit create pannanum, Cache clear pannanum" nu new step add pannanum-na, andha method oru edam mattum modify pannina podhum, ella API-um automatic-a andha new behavior-a pera.`,
        interviewDefinition: `A method is a function defined inside a class that encapsulates a specific business operation or behavior, allowing that logic to be reused instead of duplicated across multiple places. Without methods, the same sequence of operations (validation, database save, logging, notifications) gets copy-pasted into every controller or class, leading to inconsistent implementations and difficult maintenance - a single rule change requires updating code in many places. By moving that logic into a single method, callers simply invoke the method (e.g., patientService.SavePatient(patient)), and any future changes to the underlying logic automatically apply everywhere it's called. Methods differ from constructors (which only prepare/initialize an object, not perform ongoing business work) and from properties (which should stay lightweight for validation/formatting rather than trigger heavy business logic). Companies also favor small, single-responsibility methods (e.g., breaking SavePatient() into Validate(), CheckDuplicate(), SaveDatabase(), SendEmail()) over one large method, since it improves testability, debugging, and maintainability. Static methods are generally avoided for business logic because they don't participate naturally in Dependency Injection, unlike instance methods on injectable service classes.`,
        example: `// ==========================================
// 1. REAL COMPANY PROBLEM
// ==========================================
// Hospital API. Client says: "Save patient."

public class Patient
{
    public string Name { get; set; }
    public int Age { get; set; }
}

// ==========================================
// 2. BAD APPROACH (No methods - logic duplicated everywhere)
// ==========================================
// Developer A's controller:
Patient patient = new Patient();
patient.Name = "Kathiravan";
patient.Age = 26;
// Validation code...
// Database save code...
// Logging code...
// Email code...
// Cache code...

// Developer B's controller (copy-pasted, slightly different order):
Patient patient2 = new Patient();
patient2.Name = "John";
// Save DB
// Validate    <- order swapped! Now validation happens AFTER save. BUG.
// Log
// Email

// Developer C's controller:
Patient patient3 = new Patient();
// Save only  <- forgot validation and logging entirely! BUG.

// Now imagine 100 APIs, each copying Validation + DB + Logging + Email + Cache.
// Client adds a new rule: "Age must be > 0, Email is mandatory."
// Now you must search the ENTIRE project and fix it in 100 places. Nightmare.

// ==========================================
// 3. BETTER APPROACH (Method - one place for the logic)
// ==========================================
public class PatientService
{
    public void SavePatient(Patient patient)
    {
        // Validation
        // Save DB
        // Log
        // Email
    }
}

// Now every controller simply does:
public IActionResult Save(Patient patient)
{
    patientService.SavePatient(patient);
    return Ok();
}
// Controller shrinks from 400 lines to 5 lines. One consistent behavior everywhere.

// ==========================================
// 4. ACTUAL COMPANY CODE (Real Vital Signs API example)
// ==========================================
public class VitalSignController
{
    private readonly VitalService vitalService;

    public VitalSignController(VitalService vitalService)
    {
        this.vitalService = vitalService;
    }

    public IActionResult SaveVital(VitalSign vital)
    {
        vitalService.SaveVital(vital);   // Controller stays clean and thin
        return Ok();
    }
}

public class VitalService
{
    public void SaveVital(VitalSign vital)
    {
        Validate(vital);
        CalculatePainScore(vital);
        repository.Save(vital);
        cache.Remove();
        eventPublisher.Publish();
    }

    // Small, single-responsibility methods - easy to debug, test, maintain
    private void Validate(VitalSign vital) { /* ... */ }
    private void CalculatePainScore(VitalSign vital) { /* ... */ }
}
// Client later says: "Also create Audit, clear cache, publish event, send SMS."
// You only touch SaveVital() ONCE - every API using it automatically gets the new behavior.

// ==========================================
// 5. WHY NOT ANOTHER APPROACH?
// ==========================================

// Why not put the save logic inside the Constructor?
public class PatientServiceBad
{
    public PatientServiceBad()
    {
        SavePatient();   // ❌ Runs EVERY time the object is created!
    }
    private void SavePatient() { /* ... */ }
}
// Even if you only wanted to SEARCH a patient, creating the service would
// accidentally save one. Constructor's job is to PREPARE the object,
// not perform business work - that's what methods are for.

// Why not put the save logic inside a Property setter?
public class PatientBad
{
    public string Name
    {
        set
        {
            SavePatient();   // ❌ Changing a name silently triggers a DB save!
        }
    }
}
// Developers assigning patient.Name = "Kathiravan" would NEVER expect that to
// hit the database. Properties should stay lightweight (validation/formatting);
// real business logic belongs in methods.

// Why not use a static method instead of an instance method?
//     PatientService.SavePatient(patient);   // No object needed, looks simple
// Problem: tomorrow PatientService needs Repository, Logger, Cache, Email as
// dependencies. Static methods can't naturally receive these via Dependency
// Injection like instance methods can. So companies use:
//     IPatientService -> PatientService -> patientService.SavePatient(patient);

// CONCLUSION:
// Before Methods: duplicated logic everywhere, inconsistent behavior, hard to
//                 maintain, painful to update a single business rule
// After Methods : one place holds each business operation, easy to reuse,
//                 easy to test, easy to maintain, and safely composable with DI
`
    },
    {
        id: 'inheritance',
        title: 'Inheritance',
        category: 'OOPS',
        slangDefinition: `Inheritance na common properties/methods-a oru base class-la vechitu, adha vera vera classes share pannikkura mechanism. Hospital project-la Patient, Doctor, Nurse - moonu classes-layum Id, Name, Phone, Address - same properties copy panni vechurundhom nu vachikkonga. Client "Email add pannunga" nu sonna, moonu files-um edit pannanum. Next month CreatedDate, next month UpdatedDate - ovvoru sprint-layum 10 files edit panna vendiyadhu varum, oru developer miss pannitta data inconsistent aagiralaam. Adha thavirkka, common properties-a oru Person class-la vechitu, "public class Doctor : Person" nu write pannina, Doctor automatic-a Id, Name, Phone, Address ellathayum receive pannikkum. Aana, ella tuliyu IS-A relationship irukkanum - Doctor IS A Person correct, aana Invoice IS A Person? No, Penguin : Bird (fly panna mudiyaadhadhu) mathiri wrong inheritance pannakoodadhu. Adha thavirkka HAS-A relationship irundha (Patient HAS Address), inheritance illama Composition (Patient class-ku Address property vekurathu) use pannanum.`,
        interviewDefinition: `Inheritance is an OOP mechanism that allows a class (child/derived class) to acquire the properties and behaviors of another class (parent/base class), reducing code duplication when multiple classes share common data or functionality. It solves the real-world problem of maintaining identical properties (Id, Name, Phone, Address) across many classes (Patient, Doctor, Nurse, etc.) - instead of updating every class individually when a new common field is added, only the base class needs to change, and all derived classes automatically inherit it. Inheritance should only be used when a true IS-A relationship exists between the classes (e.g., "Doctor IS A Person"); using it for convenience without a genuine IS-A relationship (e.g., "Invoice IS A Person", or forcing a "Penguin" to inherit "Fly()" from "Bird") leads to incorrect and fragile designs. When the relationship is actually HAS-A rather than IS-A (e.g., "Patient HAS AN Address"), Composition (holding a reference to another class as a property) is the preferred and more flexible alternative, and is favored in much of modern .NET design.`,
        example: `// ==========================================
// 1. REAL COMPANY PROBLEM
// ==========================================
// Hospital project has three modules: Patient, Doctor, Nurse

// ==========================================
// 2. BAD APPROACH (Copy-pasted common properties everywhere)
// ==========================================
public class Patient
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public string Address { get; set; }
}

public class Doctor
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public string Address { get; set; }
    public string Specialization { get; set; }
}

public class Nurse
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public string Address { get; set; }
    public string Shift { get; set; }
}
// Looks okay... for now.

// Client says: "Add Email." -> Modify Patient, Doctor, Nurse (3 files)
// Next month: "Add CreatedDate." -> Modify all 3 files again
// Next month: "Add UpdatedDate." -> Modify all 3 files again

// After a year: Patient, Doctor, Nurse, Receptionist, Pharmacist,
// LabTechnician, InsuranceStaff, Admin, Manager -> 10 classes,
// EVERY one has Id, Name, Phone, Email, Address, CreatedDate, UpdatedDate.

// Developer A updates Patient. Developer B forgets Doctor.
// Developer C forgets Nurse. Data becomes inconsistent. BUG.

// ==========================================
// 3. BETTER APPROACH (Inheritance - common code in one base class)
// ==========================================
public class Person
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public string Address { get; set; }
}

public class Patient : Person
{
    // Automatically gets Id, Name, Phone, Address - nothing to rewrite
}

public class Doctor : Person
{
    public string Specialization { get; set; }   // only what's DIFFERENT
}

public class Nurse : Person
{
    public string Shift { get; set; }   // only what's DIFFERENT
}
// "public class Doctor : Person" means Doctor automatically inherits
// everything from Person. No duplicate code.

// Now client says "Add Email" -> Modify ONLY Person:
public class Person
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public string Address { get; set; }
    public string Email { get; set; }   // added once, ALL children get it
}

// ==========================================
// 4. ACTUAL COMPANY CODE (BaseEntity pattern - very common)
// ==========================================
public class BaseEntity
{
    public DateTime CreatedDate { get; set; }
    public DateTime UpdatedDate { get; set; }
}

public class Patient : BaseEntity { }
public class Doctor : BaseEntity { }
public class Appointment : BaseEntity { }
// Business later says: "Rename CreatedDate to CreatedOn."
// Copy-paste world: edit 100 files.
// Inheritance world: edit ONE file (BaseEntity). Every entity updates automatically.

// ==========================================
// 5. WHY NOT ANOTHER APPROACH? (Inheritance misuse + Composition)
// ==========================================

// MISTAKE 1: Forcing inheritance where there's no real IS-A relationship
public class Person2 { public string Name { get; set; } }
// public class Invoice : Person2  // ❌ "Invoice IS A Person"? Makes no sense!

// MISTAKE 2: Base class forces behavior that not all children can support
public class Bird
{
    public void Fly() { /* ... */ }
}
// public class Penguin : Bird  // ❌ Penguin inherits Fly() but can't actually fly!
// Rule: only inherit when there's a TRUE IS-A relationship.
// "Doctor IS A Person" ✅   "Invoice IS A Person" ❌   "Database IS A Logger" ❌

// Why not inherit when the relationship is actually HAS-A? Use Composition instead:
public class Address
{
    public string City { get; set; }
    public string Street { get; set; }
}

// public class Patient : Address   // ❌ WRONG - "Patient IS AN Address"? No.
public class Patient2
{
    public Address Address { get; set; }   // ✅ "Patient HAS AN Address" - Composition
}

// Real company example: Patient HAS LatestVital, not IS A PainScore
public class LatestVital
{
    public decimal PainScore { get; set; }
    public decimal Temperature { get; set; }
}

public class Patient3
{
    public LatestVital LatestVital { get; set; }   // Composition, not inheritance
}

// CONCLUSION:
// Before Inheritance: duplicate properties/methods across many classes,
//                      inconsistent updates, copy-paste everywhere
// After Inheritance : shared code lives in one base class, easy maintenance,
//                      less duplication - but only when a genuine IS-A
//                      relationship exists; use Composition (HAS-A) otherwise
`
    },
    {
        id: 'interface',
        title: 'Interface',
        category: 'OOPS',
        slangDefinition: `Interface na "enna methods irukanum" nu solra oru contract mattum - actual implementation edhuvum irukaadhu. Hospital project-la Controller neraya PatientService-a directly use pannitu irundha ("PatientService service = new PatientService()"), Hospital A SQL Server, Hospital B Oracle, Hospital C MongoDB use pannanum-nu vandha, PatientService-a modify pannikittu iruka vendiyadhu varum. Testing team "fake data use pannunga, real DB venaam" nu sonna, adhuvum impossible-a irukum, because Controller epothume real PatientService-a thaan create pannikkittu irukum. Adha thavirkka, Controller "IPatientService" nu oru interface-a mattum therinjukum, actual implementation (PatientService, OraclePatientService, MongoPatientService) yaaru nu therinjukkaadhu. ASP.NET Core Program.cs-la "AddScoped<IPatientService, PatientService>()" nu register pannitta, framework thaan andha correct implementation-a create panni Controller-ku kudukkum. Nalaikku Oracle venumna, "OraclePatientService : IPatientService" nu oru puthu class create pannitu, Program.cs-la oru line mattum maathina podhum - Controller onnume touch panna vendaam.`,
        interviewDefinition: `An interface defines a contract - a set of method/property signatures without any implementation - that any implementing class must fulfill. It solves the problem of tight coupling between layers: when a Controller directly references a concrete class like PatientService, it becomes tied to that specific implementation (and its underlying dependency, such as SQL Server), making it difficult to swap implementations (e.g., switching to Oracle or MongoDB for a different client) or to substitute fake/mock implementations for unit testing. By having the Controller depend on an abstraction (IPatientService) rather than a concrete class, the actual implementation can be swapped freely (SQLPatientService, OraclePatientService, MongoPatientService, or a mock for testing) without any changes to the Controller. This is enabled in ASP.NET Core via Dependency Injection registration (builder.Services.AddScoped<IPatientService, PatientService>()), where the DI container decides which concrete implementation to inject at runtime. This pattern - depending on interfaces rather than concrete implementations - is the foundation of loose coupling, testability, and the Dependency Inversion Principle in layered architectures (Controller → Service → Repository → Database).`,
        example: `// ==========================================
// 1. REAL COMPANY PROBLEM
// ==========================================
// Hospital project. Controller needs to save/get patients.

// ==========================================
// 2. BAD APPROACH (Controller tightly coupled to a concrete class)
// ==========================================
public class PatientController
{
    private PatientService service = new PatientService();   // ❌ direct dependency

    public void Save(Patient patient)
    {
        service.Save(patient);
    }
}
// Works fine... until the client base grows.

// After a year:
// Hospital A -> SQL Server
// Hospital B -> Oracle
// Hospital C -> MongoDB
// Current chain: PatientController -> PatientService -> SQL Server (hardcoded)
// Oracle comes? Modify PatientService. MongoDB comes? Modify it again.

// Testing team says: "Don't connect to a real database, use fake data."
// Impossible right now - PatientController ALWAYS creates a real PatientService,
// which ALWAYS talks to a real database. No way to substitute fake data.

// ==========================================
// 3. BETTER APPROACH (Depend on an Interface, not a concrete class)
// ==========================================
// Controller should only know: "I need SOMEONE who knows how to Save()."
// It shouldn't care WHO that someone is.

public interface IPatientService
{
    List<Patient> GetPatients();
    void Save(Patient patient);
}
// New chain: PatientController -> IPatientService -> PatientService
// Controller no longer knows about PatientService directly.

// ==========================================
// 4. ACTUAL COMPANY CODE (Full layered structure with interfaces)
// ==========================================

// PatientController.cs
[ApiController]
[Route("api/patient")]
public class PatientController
{
    private readonly IPatientService service;

    public PatientController(IPatientService service)   // depends on abstraction
    {
        this.service = service;
    }

    [HttpGet]
    public IActionResult GetPatients()
    {
        var patients = service.GetPatients();
        return Ok(patients);
    }
}

// IPatientService.cs - contract
public interface IPatientService
{
    List<Patient> GetPatients();
}

// PatientService.cs - implementation
public class PatientService : IPatientService
{
    private readonly IPatientRepository repository;

    public PatientService(IPatientRepository repository)
    {
        this.repository = repository;
    }

    public List<Patient> GetPatients()
    {
        // Business logic
        return repository.GetAll();
    }
}

// IPatientRepository.cs - contract
public interface IPatientRepository
{
    List<Patient> GetAll();
}

// PatientRepository.cs - implementation (today: SQL Server)
public class PatientRepository : IPatientRepository
{
    public List<Patient> GetAll()
    {
        // Normally a SQL query
        return new List<Patient>
        {
            new Patient { Id = 1, Name = "Kathiravan", Age = 26 },
            new Patient { Id = 2, Name = "John", Age = 30 }
        };
    }
}

// Program.cs - DI registration (framework decides the real implementation)
builder.Services.AddScoped<IPatientRepository, PatientRepository>();
builder.Services.AddScoped<IPatientService, PatientService>();

// Controller NEVER writes "new PatientService()". It simply receives IPatientService.
// Today: PatientController -> IPatientService -> SQLPatientService
// Tomorrow (Oracle client): just add:
//     public class OraclePatientService : IPatientService { ... }
//     builder.Services.AddScoped<IPatientService, OraclePatientService>();
// Controller changes? NOTHING.
// Next year (MongoDB client): same story - add MongoPatientService, swap one DI line.

// Testing team's problem solved too:
public class FakePatientService : IPatientService
{
    public List<Patient> GetPatients() => new List<Patient> { /* fake data */ };
}
// Inject FakePatientService in tests - no real database needed, Controller code untouched.

// Real company layered structure:
// Controller -> IPatientService -> PatientService -> IPatientRepository -> PatientRepository -> SQL Server

// ==========================================
// 5. WHY NOT ANOTHER APPROACH?
// ==========================================

// Why not just use the concrete class directly and switch it manually when needed?
// public class PatientController
// {
//     private PatientService service = new PatientService();  // ❌
// }
// Every time the underlying implementation changes (SQL -> Oracle -> Mongo, or
// real -> fake for testing), you'd have to find and edit the Controller itself.
// Defeats the entire purpose of layered, swappable architecture.

// Why interface instead of just inheriting a base class?
// Interfaces define ONLY a contract (no shared implementation), which is exactly
// what's needed here - PatientService and OraclePatientService don't share
// common code, they just need to guarantee the SAME set of methods exists.
// (Abstract classes, covered separately, are for when there IS shared code
// to inherit alongside the contract.)

// CONCLUSION:
// Before Interface: Controller tightly coupled to one concrete implementation,
//                    impossible to swap databases or use fake data for testing
// After Interface : Controller depends only on a contract (IPatientService),
//                    real implementation is swapped via DI with zero Controller changes

Real company structure

Controller (handles API calls)
    ↓
IPatientService (interface - defines contract)
    ↓
PatientService (contains business logic)
    ↓
IPatientRepository (interface - defines contract)
    ↓
PatientRepository (talks to the database)
    ↓
SQL Server (databsase)

`
    },
    {
        id: 'abstract',
        title: 'Abstract Class',
        category: 'OOPS',
        slangDefinition: `Abstract class na common implementation-a share pannikittu, "sila methods na ovvoru child class thanoda own way-la implement pannanum" nu force pannura mechanism. Patient, Doctor, Nurse - moonu services-layum Save() same code-a copy panni vechurundhom nu vachikkonga. Interface use panni paatha ("IService" nu Save() method mattum declare panni), duplicate code problem solve aagalaye - ovvoru class-um "public void Save() { Console.WriteLine(...) }" nu andha same code-a thirumbavum type panna vendiyadhu than. Adha thavirkka, Abstract class-la common code-a (Log(), Audit()) already vechitu, ovvoru class-um automatic-a inherit pannikkum - duplicate illa. Aana "ovvoru service-um thana Save()-a vera vera-a implement pannanum" nu business rule irundha, "public abstract void Save();" nu oru Abstract Method potuvom - idhu compulsory task, andha abstract class-a inherit panra ovvoru child class-um IMANDATORY-a andha method-a override pannitu implement pannanum, illana compile error varum. C# oru class-ku ONE base class mattum thaan allow pannum, adhanala multiple unrelated capabilities venumna Interface use pannanum (Interface unlimited implement panna mudiyum), aana real shared code venumna Abstract use pannanum.`,
        interviewDefinition: `An abstract class is a class that cannot be instantiated directly and can contain both shared, concrete implementation (regular methods) and abstract methods (method signatures with no implementation) that derived classes are mandatorily required to override. It solves a problem that plain interfaces (historically) cannot: sharing actual common implementation across multiple related classes without duplicating code. If several classes need identical shared behavior (like logging or auditing) but also require class-specific implementations of certain operations (like Save()), an abstract class lets the shared code live once in the base class while forcing each derived class to supply its own required implementation via an abstract method - if a class inherits an abstract class, it MUST implement every abstract method before it can be used, or the code won't compile. This differs fundamentally from interfaces: interfaces describe a pure capability contract with no shared code (every implementing class rewrites everything), while abstract classes provide real shared implementation plus enforced customization points. A key constraint is that C# supports only single inheritance from one abstract/base class, whereas a class can implement unlimited interfaces - so abstract classes are used when there's genuine shared implementation to provide (e.g., ASP.NET Core's ControllerBase supplying Ok(), BadRequest(), NotFound()), while interfaces are used to describe capabilities (e.g., ICanSave, ICanExport) that may span otherwise unrelated classes.`,
        example: `// ==========================================
// 1. REAL COMPANY PROBLEM
// ==========================================
// Hospital system: Patient, Doctor, Nurse services all need Save(), Delete(), Validate()

public class PatientService
{
    public void Save() { Console.WriteLine("Saving..."); }
}
public class DoctorService
{
    public void Save() { Console.WriteLine("Saving..."); }
}
public class NurseService
{
    public void Save() { Console.WriteLine("Saving..."); }
}
// Three classes, IDENTICAL code. Client says: "Every Save should Log -> Save -> Audit."
// Now modify PatientService, DoctorService, NurseService... again, again, again.

// ==========================================
// 2. BAD APPROACH (Interface alone - doesn't remove duplication)
// ==========================================
public interface IService
{
    void Save();
}

public class PatientServiceI : IService
{
    public void Save() { Console.WriteLine("Saving..."); }   // still duplicated!
}
public class DoctorServiceI : IService
{
    public void Save() { Console.WriteLine("Saving..."); }   // still duplicated!
}
// Interface only guarantees a method NAME exists - it forces NO shared code.
// Every class still writes the same body itself. Duplication NOT solved.

// ==========================================
// 3. BETTER APPROACH (Abstract Class - shared code + compulsory overrides)
// ==========================================
public abstract class BaseService
{
    // SHARED implementation - inherited automatically, written ONCE
    public void Log()
    {
        Console.WriteLine("Log");
    }

    public void Audit()
    {
        Console.WriteLine("Audit");
    }

    // ABSTRACT METHOD = a compulsory task every child MUST complete
    // before it can be used. No default body here - each child decides its own way.
    public abstract void Save();
}

public class PatientService : BaseService
{
    public override void Save()   // MANDATORY - won't compile without this
    {
        Console.WriteLine("Patient Saved");
    }
}

public class DoctorService : BaseService
{
    public override void Save()   // MANDATORY - Doctor's own version
    {
        Console.WriteLine("Doctor Saved");
    }
}
// Log() and Audit() -> shared, written once, inherited automatically.
// Save() -> each child is FORCED to implement it their own way.
// If a class inherits BaseService but forgets to override Save() -> compile error.

// ==========================================
// 4. ACTUAL COMPANY CODE (ASP.NET Core ControllerBase - real-world example)
// ==========================================
// You've already seen this pattern everywhere:
public abstract class ControllerBaseExample
{
    // Ok(), BadRequest(), NotFound(), Created() - already implemented by Microsoft
    protected object Ok(object value) => value;
    protected object NotFound() => null;
}

public class PatientController : ControllerBaseExample
{
    public object GetPatient(int id)
    {
        var patient = id; // fetch logic
        return patient != null ? Ok(patient) : NotFound();
        // PatientController never rewrote Ok()/NotFound() - inherited automatically
    }
}

// Another real example: BaseRepository sharing CreatedDate, ModifiedDate, CreatedBy
public abstract class BaseRepository
{
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string CreatedBy { get; set; }
}
public class PatientRepository : BaseRepository { }
public class DoctorRepository : BaseRepository { }
// Every repository automatically inherits these - zero duplication.

// ==========================================
// 5. WHY NOT ANOTHER APPROACH?
// ==========================================

// Why not just use an Interface with Log() and Save() both declared?
public interface IServiceFull
{
    void Log();
    void Save();
}
public class PatientServiceFull : IServiceFull
{
    public void Log() { Console.WriteLine("Log"); }     // duplicated across EVERY class
    public void Save() { Console.WriteLine("Patient Saved"); }
}
// Interface CANNOT share real implementation - every implementing class
// must rewrite Log() itself. Defeats the purpose of removing duplication.

// Why not use Abstract class for EVERYTHING then?
// Because C# allows only ONE base class per class:
// public class PatientService : BaseService, LoggingBase   // ❌ ILLEGAL - only one base class
// But a class CAN implement unlimited interfaces:
// public class PatientService : BaseService, IDisposable, IPatientService, ILogger  // ✅ fine

// Real company rule:
// Use INTERFACE when describing a CAPABILITY (Can Save, Can Print, Can Export)
// Use ABSTRACT when you want to SHARE real implementation (Log, Audit, Ok(), BadRequest())

// CONCLUSION:
// Before Abstract: duplicate implementation copy-pasted across every class
// After Abstract : shared code lives once in the base class, and abstract
//                   methods act as a compulsory contract - every child class
//                   MUST implement them before it can be used, ensuring
//                   consistency while still allowing class-specific behavior
`
    },
    {
        id: 'inheritance-vs-interface-vs-abstract',
        title: 'Inheritance vs Interface vs Abstract Class',
        category: 'OOPS',
        slangDefinition: `Moonu concepts-um "code reuse pannalam" nu solra madhiri thonum, aana ovvoruthukum vera vera purpose irukku. Inheritance na "IS-A" relationship - Doctor IS A Person, so Doctor Person oda properties/behavior share pannikkum. Interface na "CAN DO" capability mattum - "Someone CAN Save" nu sollum, aana EPADI save pannanum nu assumption edhuvum irukaadhu, implementation ovvoru class-um thana pannanum. Abstract class na "everyone does it differently, but some parts are exactly the same" - example-ku, PatientService, DoctorService rendume Save() panradhu vera vera-a irukkalam, aana Log() pannuradhu ellarukkum same-a irukkum, so Log()-a abstract class-la share pannitu, Save()-a mattum ovvoru child thana define pannikkum. Wrong-a use pannina - Invoice-a Person-nu inherit pannradhu, illa shared code venum-nu interface use pannradhu (adhu duplicate code-a lead pannum) - romba problems varum.`,
        interviewDefinition: `While Inheritance, Interface, and Abstract Class can all appear to enable "code reuse," they solve fundamentally different design problems and should be chosen based on the actual relationship being modeled. Inheritance models a true IS-A relationship (e.g., "Doctor IS A Person"), sharing both data and behavior between a base and derived class, and should only be used when that relationship genuinely holds. An Interface describes a pure capability contract - "someone CAN Save" - with no assumption about how that capability is implemented; every implementing class supplies its own implementation, and a class can implement unlimited interfaces. An Abstract Class sits between the two: it's used when multiple classes need to share identical implementation for some members (e.g., logging, auditing) while being required to provide their own distinct implementation for others (e.g., Save()) - but a class can inherit from only one abstract/base class. Choosing the wrong tool leads to real problems: using inheritance without a true IS-A relationship creates nonsensical hierarchies (e.g., "Invoice IS A Person"), while using only an interface when shared implementation is needed results in duplicated code across every implementing class.`,
        example: `// ==========================================
// 1. REAL COMPANY PROBLEM
// ==========================================
// Hospital system has: Person-like entities (Patient, Doctor), services that
// need a "Save" capability, and services that share some behavior but differ
// in others. Which tool do you reach for in each case?

// ==========================================
// 2. BAD APPROACH (Using the wrong tool for the wrong relationship)
// ==========================================

// MISUSE 1: Using inheritance where there's no real IS-A relationship
public class Person { public string Name { get; set; } }
// public class Invoice : Person   // ❌ "Invoice IS A Person"? Makes no sense.

// MISUSE 2: Using ONLY an interface when shared implementation is actually needed
public interface IService
{
    void Log();
    void Save();
}
public class PatientServiceBad : IService
{
    public void Log() { Console.WriteLine("Log"); }     // duplicated...
    public void Save() { Console.WriteLine("Patient Saved"); }
}
public class DoctorServiceBad : IService
{
    public void Log() { Console.WriteLine("Log"); }     // ...again, and again
    public void Save() { Console.WriteLine("Doctor Saved"); }
}
// Log() is IDENTICAL in both classes but has to be rewritten every time.
// Interface guarantees WHAT exists, never HOW - zero shared code.

// ==========================================
// 3. BETTER APPROACH (Right tool for the right relationship)
// ==========================================

// INHERITANCE - true IS-A relationship, shares data + behavior
public class PersonGood
{
    public int Id { get; set; }
    public string Name { get; set; }
}
public class Doctor : PersonGood      // Doctor IS A Person ✅
{
    public string Specialization { get; set; }
}
public class Patient : PersonGood     // Patient IS A Person ✅
{
}

// INTERFACE - pure capability, no implementation assumptions
public interface ICanSave
{
    void Save();   // "Someone CAN Save" - HOW is entirely up to the implementer
}

// ABSTRACT CLASS - shared implementation + enforced customization
public abstract class BaseService
{
    public void Log()                    // Everyone logs the SAME way - shared
    {
        Console.WriteLine("Log");
    }

    public abstract void Save();         // Everyone saves DIFFERENTLY - must override
}

// ==========================================
// 4. ACTUAL COMPANY CODE (All three working together)
// ==========================================
public class PatientService : BaseService, ICanSave
{
    public override void Save()          // required by BaseService (abstract)
    {
        Console.WriteLine("Patient Saved");
    }
}

public class DoctorService : BaseService, ICanSave
{
    public override void Save()          // required by BaseService (abstract)
    {
        Console.WriteLine("Doctor Saved");
    }
}
// Log() -> inherited once from BaseService (Abstract Class solves duplication)
// Save() -> each class's own implementation (Abstract Method enforces the contract)
// ICanSave -> declares the capability separately, so other unrelated classes
//             (e.g., a ReportExporter) could ALSO implement ICanSave without
//             needing to inherit BaseService at all.

// Real-world example you've already seen: ASP.NET Core's ControllerBase
public abstract class ControllerBase
{
    // Ok(), NotFound(), BadRequest() - shared implementation, inherited by everyone
}
public class PatientController : ControllerBase   // shares implementation
{
}

// ==========================================
// 5. WHY NOT ANOTHER APPROACH?
// ==========================================

// Why not just always use Inheritance since it "gives the most for free"?
// Because C# allows only ONE base class:
// public class PatientService : BaseService, LoggingBase   // ❌ ILLEGAL
// If PatientService also needs LoggingBase AND CachingBase, inheritance alone can't do it.

// Why not just always use Interfaces since they're unlimited?
// public class PatientService : BaseService, IDisposable, ICanSave, ILogger  // ✅ fine
// But interfaces carry NO shared implementation - if 10 classes need identical
// logging logic, an interface-only design means writing that logic 10 times.

// Why not always use Abstract Class instead of Interface?
// Because sometimes you genuinely only want to describe a CAPABILITY across
// otherwise UNRELATED classes (e.g., both a PatientService and a ReportExporter
// "CAN Save", but they share nothing else in common) - forcing them under one
// abstract base class would create a false, unnecessary relationship.

// DECISION RULE:
// Doctor IS A Person              -> Inheritance
// Someone CAN Save                -> Interface
// Everyone saves differently,
//   but everyone logs the same way -> Abstract Class
`
    },
    {
        id: 'abstract-vs-interface',
        title: 'Abstract Class vs Interface',
        category: 'OOPS',
        slangDefinition: `Abstract class um Interface um rendume "child class idha implement pannanum" nu solra madhiri thonum, aana core difference enna kudukkardhu-la irukku. Company-la Cash, Card, UPI - moonu payment methods irundha vachikkonga. Interface use panna ("IPaymentService" with Pay()), adhu variables-um illa, methods implementation-um illa, common code-um illa - "everyone should have Pay()" nu mattum sollum, EPADI pay pannanum nu ovvoru class-um thaana ezhudhanum. Abstract class use panna ("PaymentService" with Log() + abstract Pay()), Log() already IMPLEMENT panni kudukkum - CashPaymentService, CardPaymentService rendume Log()-a free-a receive pannikkum, Pay() mattum thaana implement pannanum. Chumma sollanumna: Interface = "I'll give you nothing, just a promise." Abstract = "I'll give you some ready-made stuff, plus a promise for the rest."`,
        interviewDefinition: `While both Interface and Abstract Class define contracts that implementing/derived classes must fulfill, the fundamental difference lies in what they provide. An Interface provides absolutely nothing concrete - no fields, no implemented methods, no shared logic - it only declares that a method with a given signature must exist (e.g., "everyone should have Pay()"); every implementing class writes its own full implementation from scratch. An Abstract Class, by contrast, can provide real, ready-to-use implementation (e.g., a Log() method) alongside abstract members that still must be overridden (e.g., Pay()) - derived classes inherit the concrete functionality for free and only need to implement the parts that genuinely differ. In short: an Interface says "I'll give you nothing, just a promise you must keep," while an Abstract Class says "I'll give you some working code, plus a promise for the rest."`,
        example: `// ==========================================
// 1. REAL COMPANY PROBLEM
// ==========================================
// Company has three payment methods: Cash, Card, UPI - all need to "Pay()"

// ==========================================
// 2. OPTION A - Interface (gives NOTHING but a promise)
// ==========================================
public interface IPaymentService
{
    void Pay();   // just a signature - no body, no logic
}

public class CashPaymentService : IPaymentService
{
    public void Pay()
    {
        Console.WriteLine("Cash payment received");   // written from scratch
    }
}

public class CardPaymentService : IPaymentService
{
    public void Pay()
    {
        Console.WriteLine("Card payment processed");  // written from scratch, AGAIN
    }
}

// Question: Does the interface give the child anything?
// Variables?      ❌ No
// Methods?        ❌ No
// Implementation? ❌ No
// Common code?    ❌ No
// It ONLY says: "Everyone must have a Pay() method." That's it.

// ==========================================
// 3. OPTION B - Abstract Class (gives SOME real implementation)
// ==========================================
public abstract class PaymentService
{
    public void Log()                     // ALREADY implemented - shared, free
    {
        Console.WriteLine("Logging...");
    }

    public abstract void Pay();           // still a compulsory promise, no body
}

public class CashPaymentServiceAbs : PaymentService
{
    public override void Pay()
    {
        Console.WriteLine("Cash payment received");
    }
    // Log() was NEVER rewritten - it came for free from PaymentService
}

public class CardPaymentServiceAbs : PaymentService
{
    public override void Pay()
    {
        Console.WriteLine("Card payment processed");
    }
    // Log() came for free here too
}

// Question: What did the child actually GET this time?
// Log() -> already implemented, inherited, ready to use immediately.
// Pay()  -> still must be implemented individually (genuinely different per method)

// ==========================================
// 4. ACTUAL COMPANY CODE (Using both together, each for its own purpose)
// ==========================================
public interface IPaymentService
{
    void Pay();               // capability contract - "CAN pay"
}

public abstract class PaymentServiceBase : IPaymentService
{
    public void Log(string message)       // shared implementation
    {
        Console.WriteLine($"[LOG] {message}");
    }

    public abstract void Pay();           // each payment type differs
}

public class UpiPaymentService : PaymentServiceBase
{
    public override void Pay()
    {
        Log("Initiating UPI payment");    // reused, not rewritten
        Console.WriteLine("UPI payment successful");
    }
}
// UpiPaymentService gets Log() for free (from abstract class) AND satisfies
// IPaymentService's capability contract (Pay() exists) at the same time.

// ==========================================
// 5. WHY NOT ANOTHER APPROACH?
// ==========================================

// Why not use ONLY interface, even when there's shared logic like Log()?
public interface IPaymentServiceOnly
{
    void Log();
    void Pay();
}
public class CashOnlyInterface : IPaymentServiceOnly
{
    public void Log() { Console.WriteLine("Logging..."); }   // duplicated
    public void Pay() { }
}
public class CardOnlyInterface : IPaymentServiceOnly
{
    public void Log() { Console.WriteLine("Logging..."); }   // duplicated AGAIN
    public void Pay() { }
}
// Log() is IDENTICAL in every class, yet has to be manually rewritten each time.
// Interface literally cannot share implementation - that's not what it's for.

// Why not use ONLY abstract class, skipping the interface entirely?
// Works fine here, but if some completely unrelated class also needs "Pay()"
// capability (say, a RefundProcessor that has nothing else in common with
// PaymentServiceBase), forcing it to inherit PaymentServiceBase just to get
// Pay() would create a fake, unnecessary relationship. Interface alone would
// describe that capability more honestly, without dragging in unrelated shared code.

// CONCLUSION:
    // Abstract Class -> I'll give you some things.
    // Interface      -> I'll give you nothing.
        -----------------------------------------
    // Abstract Class -> I'll give you common code and common data, but I also expect you to complete the parts I can't implement.
    // Interface      -> I won't give you anything. I only define what you must do.
`
    },
    {
        id: 'polymorphism',
        title: 'Polymorphism',
        category: 'OOPS',
        slangDefinition: `Polymorphism na "same method call, but different actual behavior" nu solra concept - oru common type (interface/base class) variable vechitu, adhukulla vera vera actual objects vechi, same method call panna, ovvoru object-um adhoda own way-la respond pannum. Hospital-la notification-ku Email mattum irundhapo, "NotificationService.Send()" nu simple-a irundhudhu. SMS, WhatsApp add pannachu na, "if(type=="Email") ... else if(type=="SMS") ..." nu Controller-layae ella conditions-um ezhudhanum, next year Push, Teams, Slack, Telegram add pannachu na, Controller 100 lines aayidum, puthu type varum bothellam Controller-a modify pannikittu irukanum. Adha thavirkka, "INotificationService" nu oru interface create pannitu, EmailService, SmsService, WhatsappService - ellame andha interface implement pannuvom. Appo "INotificationService service" nu oru variable-ku EmailService-yum vekkalaam, SmsService-yum vekkalaam, WhatsappService-yum vekkalaam - SAME variable type, DIFFERENT actual objects. "service.Send()" nu call pannumbodhu, .NET andha variable-la actual-a enna object irukko (EmailService-a, SmsService-a) nu paathu, andha object oda Send()-a run pannum. Idhu thaan Polymorphism - Controller-ku "enna object" nu therinjikkave venaam, adhu just "Send()" nu call pannikittu irukkum.`,
        interviewDefinition: `Polymorphism is the ability of a single reference type (an interface or base class) to point to different concrete object types, such that calling the same method on that reference executes different behavior depending on the actual object at runtime. It solves the problem of Controllers or calling code needing to know about every specific implementation type and branch on it explicitly (if/else if chains checking a "type" string), which becomes unmanageable as the number of variants grows - every new notification channel (Email, SMS, WhatsApp, Push, Teams, Slack, Telegram) would otherwise require modifying the Controller's conditional logic. By introducing a common interface (e.g., INotificationService with a Send() method), each concrete implementation (EmailService, SmsService, WhatsappService) provides its own version of Send(), and the Controller depends only on the interface type. The same variable (INotificationService notification) can hold any of these concrete objects, and calling notification.Send() executes whichever implementation the object actually is at runtime - the Controller never needs conditional branching or knowledge of which specific class it's using. This is typically combined with Dependency Injection (registering the desired concrete implementation in Program.cs), so the Controller's code never changes even as new notification types are added.`,
        example: `// ==========================================
// 1. REAL COMPANY PROBLEM
// ==========================================
// Hospital system needs to send notifications. Initially, only Email.

public class NotificationService
{
    public void Send(string message)
    {
        Console.WriteLine("Email Sent");
    }
}

NotificationService service = new NotificationService();
service.Send("Patient Saved");
// Works fine... for now.

// ==========================================
// 2. BAD APPROACH (If/else branching on type, growing forever)
// ==========================================
// Client adds SMS and WhatsApp:
public class NotificationServiceBad
{
    public void SendEmail() { Console.WriteLine("Email"); }
    public void SendSms() { Console.WriteLine("SMS"); }
    public void SendWhatsapp() { Console.WriteLine("WhatsApp"); }
}

// Controller has to know EVERY type and branch on it:
string type = "SMS";
var service2 = new NotificationServiceBad();
if (type == "Email")
{
    service2.SendEmail();
}
else if (type == "SMS")
{
    service2.SendSms();
}
else
{
    service2.SendWhatsapp();
}
// Looks manageable... for now.

// A year later: Push Notification, Teams, Slack, Telegram also needed.
// if / else if / else if / else if / else if ... 100 lines.
// EVERY new notification channel means modifying the Controller directly.
// Controller now "knows" about every single notification type. Huge maintenance burden.

// ==========================================
// 3. BETTER APPROACH (Interface + Polymorphism)
// ==========================================
// Controller should just say: "I don't care HOW you send. I only want Send()."

public interface INotificationService
{
    void Send(string message);
}

public class EmailService : INotificationService
{
    public void Send(string message) => Console.WriteLine("Email");
}

public class SmsService : INotificationService
{
    public void Send(string message) => Console.WriteLine("SMS");
}

public class WhatsappService : INotificationService
{
    public void Send(string message) => Console.WriteLine("WhatsApp");
}

// THE MAGIC - same variable TYPE, different actual OBJECTS:
INotificationService notificationService;

notificationService = new EmailService();      // ✅ allowed
notificationService.Send("Hello");              // Output: Email

notificationService = new SmsService();         // ✅ allowed - SAME variable
notificationService.Send("Hello");              // Output: SMS

notificationService = new WhatsappService();    // ✅ allowed - SAME variable
notificationService.Send("Hello");              // Output: WhatsApp

// THIS is Polymorphism: one reference type (INotificationService), many
// possible actual objects, same method call, different behavior each time.

// ==========================================
// 4. ACTUAL COMPANY CODE (Combined with Dependency Injection)
// ==========================================
// Program.cs - decide the actual implementation in ONE place:
// builder.Services.AddScoped<INotificationService, EmailService>();

public class PatientController
{
    private readonly INotificationService notification;

    public PatientController(INotificationService notification)
    {
        this.notification = notification;   // could be EmailService, SmsService, etc.
    }

    public void NotifyPatientSaved()
    {
        notification.Send("Patient Saved");   // no idea WHICH implementation this is
    }
}
// Output today: "Email"
// Tomorrow, switch Program.cs to:
// builder.Services.AddScoped<INotificationService, SmsService>();
// Output becomes: "SMS" - PatientController's code is UNTOUCHED.

// Adding Push, Teams, Slack, Telegram later? Just add new classes implementing
// INotificationService and register the one you want. Zero Controller changes.

// ==========================================
// 5. WHY NOT ANOTHER APPROACH?
// ==========================================

// Why not keep the if/else chain but just organize it better (e.g., switch statement)?
string type2 = "WhatsApp";
var svc = new NotificationServiceBad();
switch (type2)
{
    case "Email": svc.SendEmail(); break;
    case "SMS": svc.SendSms(); break;
    case "WhatsApp": svc.SendWhatsapp(); break;
    // Every new channel still means editing THIS switch statement.
}
// Cleaner syntax, but the core problem remains: Controller/caller still needs
// to know about and branch on every single type. Doesn't scale.

// Why not just create a separate variable for each notification type?
EmailService emailSvc = new EmailService();
SmsService smsSvc = new SmsService();
WhatsappService whatsappSvc = new WhatsappService();
// Now the caller needs to know WHICH variable to use for WHICH situation -
// defeats the purpose. Polymorphism's value is having ONE variable/reference
// that can transparently represent ANY of them.

// CONCLUSION:
// Before Polymorphism: Controller branches on type explicitly, grows with
//                        every new variant, tightly coupled to every implementation
// After Polymorphism : Controller depends on ONE interface type, calls ONE
//                        method (Send()), and the ACTUAL behavior is decided
//                        by whichever concrete object is behind that reference
//                        at runtime - new types added with zero Controller changes
`
    },
    {
        id: 'interface-vs-polymorphism',
        title: 'Interface vs Polymorphism',
        category: 'OOPS',
        slangDefinition: `Interface um Polymorphism um rendu vera vera concepts, aana together work pannum. Interface na oru RULE mattum - "IPatientService"-nu declare pannina, "yaaru IPatientService nu solli kolluravanga ellarukkum Save() method irukkanum" nu contract sollum, adhu implementation edhuvum illa. "PatientService : IPatientService" nu class ezhudhina, PatientService andha rule-a follow panna agree pannudhu - idhu innum Interface usage thaan. Controller-la "IPatientService service" nu type vecha, "naan specific class-a therinjikka maaten" nu solradhu - idhuvum Interface usage thaan, polymorphism illa. Program.cs-la DI register panradhu ("AddScoped<IPatientService, PatientService>") - ASP.NET Core "yaaru IPatientService kekkaraanga, PatientService kudu" nu solradhu - idhuvum polymorphism illa, Dependency Injection mattum thaan. REAL polymorphism na - "service.Save()" nu call panra andha exact moment - variable oda TYPE "IPatientService" aana, ADHUKKULLA irukkura ACTUAL OBJECT "PatientService". .NET runtime-la, "compile-time type IPatientService, aana runtime-la actual object PatientService" nu therinjikittu, PatientService oda Save() method-a thaan execute pannudhu. Idhu thaan Polymorphism - same interface reference, but different actual objects run different code.`,
        interviewDefinition: `Interface and Polymorphism are related but distinct concepts. An Interface is purely a contract/rule declaration - it states that any class claiming to be that interface type must implement certain members (e.g., "anyone who is an IPatientService must have a Save() method"), but defines zero behavior itself. When a class declares "PatientService : IPatientService", that's still just the class agreeing to follow the interface's rules - not polymorphism. Similarly, a Controller depending on the interface type ("IPatientService service") rather than a concrete class, and ASP.NET Core's Dependency Injection registration (AddScoped<IPatientService, PatientService>) telling the framework which concrete type to supply - both of these are still just interface usage and DI, not polymorphism. Polymorphism actually occurs at the moment a method is called through the interface reference (service.Save()): the variable's compile-time type is IPatientService, but the actual object in memory at runtime is a PatientService instance. The runtime resolves the call based on the ACTUAL object type, not the declared reference type, and executes PatientService's specific implementation of Save(). This is the essence of polymorphism - the same interface reference can, depending on what concrete object it actually holds at runtime, execute different implementations.`,
        example: `// ==========================================
// 1. REAL COMPANY PROBLEM
// ==========================================
// Distinguish: where does "Interface" end and "Polymorphism" actually begin?

public interface IPatientService
{
    void Save();
}

public class PatientService : IPatientService
{
    public void Save()
    {
        Console.WriteLine("Patient Saved");
    }
}

public class PatientController
{
    private readonly IPatientService service;

    public PatientController(IPatientService service)
    {
        this.service = service;
    }

    public void SavePatient()
    {
        service.Save();
    }
}

// ==========================================
// 2. BAD APPROACH (Assuming every line above is "polymorphism")
// ==========================================
// A beginner might say: "This whole thing IS polymorphism."
// That's imprecise. Let's walk through it step by step and see EXACTLY
// where interface usage ends and polymorphism begins.

// STEP 1: The interface itself
public interface IPatientServiceStep
{
    void Save();   // just a RULE: "whoever is this type MUST have Save()"
}
// This defines the rule only. Nothing runs. This is Interface. Not polymorphism.

// STEP 2: A class agreeing to the rule
public class PatientServiceStep : IPatientServiceStep
{
    public void Save()   // MUST write this, or compiler error
    {
        Console.WriteLine("Patient Saved");
    }
}
// "PatientServiceStep : IPatientServiceStep" reads as:
// "I agree to follow IPatientServiceStep's rules."
// Still just Interface usage. No polymorphism yet.

// STEP 3: Depending on the interface type, not the concrete class
public class PatientControllerStep
{
    private readonly IPatientServiceStep service;   // NOT "PatientServiceStep service"

    public PatientControllerStep(IPatientServiceStep service)
    {
        this.service = service;
    }
}
// Controller says "I don't want to depend on ONE specific class."
// Still Interface usage. Still no polymorphism.

// STEP 4: Program.cs - Dependency Injection
// builder.Services.AddScoped<IPatientServiceStep, PatientServiceStep>();
// ASP.NET Core says: "Whenever someone asks for IPatientServiceStep, give PatientServiceStep."
// This is Dependency Injection. Still NOT polymorphism.

// ==========================================
// 3. BETTER APPROACH (Pinpointing the EXACT polymorphism moment)
// ==========================================
// STEP 5 - THE important line:
IPatientServiceStep service2 = new PatientServiceStep();
service2.Save();
// service2's DECLARED (compile-time) type -> IPatientServiceStep
// service2's ACTUAL (runtime) object      -> PatientServiceStep
// .NET looks at the ACTUAL object at runtime and executes
// PatientServiceStep's Save() - THIS moment, right here, is Polymorphism.

// ==========================================
// 4. ACTUAL COMPANY CODE (Polymorphism paying off with multiple implementations)
// ==========================================
public class OraclePatientService : IPatientServiceStep
{
    public void Save()
    {
        Console.WriteLine("Patient Saved to Oracle DB");
    }
}

public class MongoPatientService : IPatientServiceStep
{
    public void Save()
    {
        Console.WriteLine("Patient Saved to MongoDB");
    }
}

// Program.cs - just change WHICH concrete type is registered:
// builder.Services.AddScoped<IPatientServiceStep, OraclePatientService>();
// or
// builder.Services.AddScoped<IPatientServiceStep, MongoPatientService>();

// Controller code NEVER changes:
public class PatientControllerFinal
{
    private readonly IPatientServiceStep service;

    public PatientControllerFinal(IPatientServiceStep service)
    {
        this.service = service;
    }

    public void SavePatient()
    {
        service.Save();   // Same line of code, but executes DIFFERENT logic
                           // depending on which concrete object was actually injected.
                           // That's polymorphism doing real work.
    }
}

// ==========================================
// 5. WHY NOT ANOTHER APPROACH?
// ==========================================

// Why not just call the concrete class directly and skip the interface entirely?
public class DirectController
{
    private readonly PatientServiceStep service = new PatientServiceStep();
    public void SavePatient() => service.Save();
}
// This technically "runs the right code" too, but there's no polymorphism here -
// the reference type and actual object type are the SAME. There's no runtime
// decision being made, and swapping implementations means changing this class directly.

// Why does polymorphism specifically NEED the interface (or base class) reference?
// Polymorphism relies on having ONE reference TYPE (IPatientServiceStep) that can
// point to MANY possible ACTUAL types (PatientServiceStep, OraclePatientService,
// MongoPatientService). Without the shared interface/base type, there'd be no
// common reference to call service.Save() through in the first place - each
// concrete class would need its own separately-typed variable and separate call.

// CONCLUSION:
// Interface     -> defines the RULE ("must have Save()") - purely compile-time contract
// DI            -> decides WHICH concrete object gets created and handed over
// Polymorphism  -> happens at the CALL ("service.Save()") - runtime resolves to
//                   the ACTUAL object's implementation, not the declared reference type
`
    },
    {
        id: 'oops-real-world-example',
        title: 'Real-World OOPS Example',
        category: 'OOPS',
        slangDefinition: `Idhu oru complete real-world example - Patient save panra flow-la ella OOPS concepts-um together eppudi use aagudhu nu kaamikkirom. **Class & Object**: Patient oru class, "new Patient{...}" nu create panradhu object. **Property**: Age property-la get/set vachi validation add pannirukom (negative age throw exception). **Interface**: IPatientService, IPatientRepository - "what to do" nu define pannum, "how" nu implement pannradhu class-la. **Abstract Class**: BaseService-la Validate() abstract method (implementation illa, child class mandatory override pannanum), Log() concrete method (direct use pannalam), SendNotification() virtual method (default implementation irukku, aana override optional). **Inheritance**: PatientService, BaseService-a inherit pannudhu (: BaseService), so Log() automatic-a kidaikkum. **Polymorphism**: PatientController-la "service.Save(patient)" nu call panrom - IPatientService interface reference vachi, aana actual-a PatientService object than run aagudhu (runtime-la decide aagudhu, override methods call aagudhu). **Dependency Injection**: Program.cs-la AddScoped() vachi interface-a concrete class-oda register pannirukom, Controller/Service-la constructor vachi inject pannirukom (tightly coupled aagama, testing easy-a irukkum).`,
        interviewDefinition: `This example demonstrates how multiple OOP concepts work together in a real ASP.NET Core patient-save flow. **Class & Object**: Patient is a class; "new Patient{...}" creates an object instance of it. **Property**: The Age property uses get/set accessors to add validation logic (throwing an exception for negative values), which a plain field cannot do. **Interface**: IPatientService and IPatientRepository define contracts ("what" a class must do), while the implementing classes define "how". **Abstract Class**: BaseService contains an abstract method Validate() (no implementation, must be overridden by derived classes), a concrete method Log() (used directly by all subclasses), and a virtual method SendNotification() (has a default implementation but can optionally be overridden). **Inheritance**: PatientService inherits from BaseService, gaining access to Log() without redefining it. **Polymorphism**: In PatientController, calling "service.Save(patient)" through the IPatientService interface reference resolves to the actual PatientService implementation at runtime, and any overridden methods (Validate, SendNotification) execute their derived-class behavior. **Dependency Injection**: In Program.cs, interfaces are registered with their concrete implementations via AddScoped(), and dependencies are injected through constructors in the Controller and Service, promoting loose coupling and testability.`,
        example: `// Program.cs
// Dependency Injection
builder.Services.AddScoped<IPatientService, PatientService>();
builder.Services.AddScoped<IPatientRepository, PatientRepository>();


// Model (Class + Property)
public class Patient
{
    public int Id { get; set; }
    public string Name { get; set; }

    private string _age;

    public string Age
    {
        get
        {
            return _age;
        }

        set
        {
           if (value < 0)
            {
                throw new Exception("Age cannot be negative.");
            }

            _age = value;
        }
    }
}

// Controller
public class PatientController
{
    private readonly IPatientService service;

    // Constructor Injection
    public PatientController(IPatientService service)
    {
        this.service = service;
    }

    public void SavePatient()
    {
        // Object
        Patient patient = new Patient
        {
            Id = 1,
            Name = "Kathir",
            Age = 26
        };

        // Polymorphism
        service.Save(patient);
    }
}

// Interface
public interface IPatientService
{
    void Save(Patient patient);
}


// Service
// Inheritance
// Interface
public class PatientService : BaseService, IPatientService
{
    private readonly IPatientRepository repository;

    // Constructor
    public PatientService(IPatientRepository repository)
    {
        this.repository = repository;
    }

    // Override Abstract Method
    public override void Validate(Patient patient)
    {
        Console.WriteLine("Patient Validated");
    }

    // Override Virtual Method
    public override void SendNotification()
    {
        Console.WriteLine("SMS Notification Sent");
    }

    // Interface Method
    public void Save(Patient patient)
    {
        Log();
        Validate(patient);
        repository.Save(patient);
        SendNotification();
    }
}

// Abstract Class
public abstract class BaseService
{
    public void Log()
    {
        Console.WriteLine("Log Created");
    }

    public abstract void Validate(Patient patient);

    public virtual void SendNotification()
    {
        Console.WriteLine("Default Notification");
    }
}


// Repository Interface
public interface IPatientRepository
{
    void Save(Patient patient);
}


// Repository
public class PatientRepository : IPatientRepository
{
    public void Save(Patient patient)
    {
        Console.WriteLine("Patient Saved to SQL");
    }
}`
    },
]