import { Concept } from '../../models/concept.model';

export const aiConcepts: Concept[] = [
  {
    id: 'what-is-ai',
    title: 'What is AI?',
    category: 'AI',
    slangDefinition: `AI (Artificial Intelligence) na machine-ku human maadhiri "think" panni, "decide" panni tasks pannura capability kudukradhu - andha tasks normal-a human intelligence than venum nu solvom. Idhu oru "science/field" - programming vachi, data vachi, machine-a train panni, andha machine pattern-a recognize panni intelligent decisions eduka vaipom.`,
    interviewDefinition: `AI is a science of making machine perform tasks that normally require human intelligence.`,
    example: `// AI = Science of making machines perform tasks
// that normally require human intelligence

Examples of AI in action:
- Play chess               -> strategic reasoning
- Detect spam              -> pattern recognition
- Drives a car             -> real-time perception & decision-making
- Write poems              -> creativity / language generation
- Selfie with Tom Cruise   -> face detection & recognition
- Recommend movies         -> behavior analysis & prediction`
  },
  {
    id: 'rule-based-ai',
    title: 'Rule Based AI (1950-1980)',
    category: 'AI',
    slangDefinition: `Collection of predefined rules than nu solradhu. Example: Spam Detector-la "FREE", "$$$", "LOTTERY" maadhiri words irundha spam nu mark pannuvom. Medical-la if(Fever && Cold && Body Ache) irundha "FLU" nu decide pannuvom. Idhu ellame human experts than manual-a rules ezhudhi build pannanga - adhanala idha "Expert Systems" nu solvom.`,
    interviewDefinition: `Collection of predefined rules. For example, a spam detector flags emails containing words like "FREE", "$$$", or "LOTTERY", and a medical system might infer "FLU" if the conditions Fever, Cold, and Body Ache are all true. These systems, known as Expert Systems, were built by human experts manually writing large sets of rules rather than learning patterns from data.`,
    example: `// Rule Based AI (1950-1980)
// "Intelligence is simply a collection of Rules"

// Example: Spam Detector
if (email.Contains("FREE") || email.Contains("$$$") || email.Contains("LOTTERY"))
{
    isSpam = true;
}

// Example: Medical Diagnosis
if (hasFever && hasCold && hasBodyAche)
{
    diagnosis = "FLU";
}

// "Expert Systems were built by human experts
//  writing a lot of Rules"`
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    category: 'AI',
    slangDefinition: `Rule Based AI-la problem enna na, n number of rules ezhudhradhu possible illa - example: "F-R-E-E", "FREEE", "FREE!!!" nu ella spam variations-kum thani thani rule ezhudha mudiyadhu. Adhanala Machine Learning vandhichu - rules ezhudhradhukku badhila, examples (data) kudukkuvom, model andha examples-la irundhu pattern-a "learn" pannikum. Example: Cat vs Dog classify pannanumna, 1 million labelled pictures kudukkuvom, model atha vachi pattern-a identify pannikum. Spam Detection-um adhe maadhiri - rules ezhudhradhukku badhila, training data kudukkuvom, model learn panni predictions pannum.`,
    interviewDefinition: `Machine Learning emerged because Rule Based AI could not scale - it's impossible to manually write a rule for every possible variation (e.g., spam text like "F-R-E-E", "FREEE", "FREE!!!"). Instead of hardcoding rules, Machine Learning trains a model on examples (data), allowing it to learn patterns on its own. For instance, a Cat vs Dog classifier is trained using millions of labelled pictures rather than explicit rules, and a spam detector learns patterns from training data instead of relying on a fixed list of keywords. The key shift is from Rules to Examples: the model learns from training data and uses the learned patterns to make predictions.`,
    example: `// Rule Based AI - can't scale to infinite rule variations
if (email.Contains("F-R-E-E") || email.Contains("FREEE") || email.Contains("FREE!!!") ...)
// too many variations to hardcode manually

// Machine Learning - learns from examples instead of rules
// X Rules   -> can't cover every case
// V Examples -> model learns patterns from data

// Example: Cat vs Dog Classifier
// Train using 1 million labelled pictures (cat/dog)
// Model learns visual patterns (shapes, ears, fur) on its own

// Example: Spam Detection
// Training data: thousands of spam & non-spam emails
// Model learns the pattern of what "spam" looks like

// Core flow:
// Training Data -> Model Learns -> Learn Patterns -> Predictions`
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    category: 'AI',
    slangDefinition: `Machine Learning-la features (eye, ear, nose maadhiri) namba manual-a extract panni model-ku kudukkanum. Deep Learning-la andha question varum - "computer thaniya features-a learn pannikuma?" nu. Human "idhu eye" nu solradhukku badhila, computer thaniya "eye" nu detect panna try pannum - Neural Networks vachi than idhu sadhikkum (romba important concept). Idhu vachi than Image Recognition, Speech Recognition, Translation maadhiri periya breakthroughs vandhichu. Deep Learning boom aaganum na 3 factors venum: GPU revolution (fast computing), Internet (data easy-a kidaikkum), and Large datasets (train panna adhigam data).`,
    interviewDefinition: `In traditional Machine Learning, features (like edges, shapes, or an "eye") often need to be manually defined and extracted before feeding them to the model. Deep Learning removes this requirement by asking: can a computer learn to discover features on its own, rather than being explicitly told "this is an eye"? This is achieved through Neural Networks, a foundational concept in Deep Learning. This capability enabled major breakthroughs in areas like Image Recognition, Speech Recognition, and Translation. The rise of Deep Learning was driven by three key factors: the GPU revolution (enabling fast parallel computation), the growth of the Internet (making large amounts of data accessible), and the availability of Large datasets for training.`,
    example: `// Machine Learning - features often manually defined
// e.g., "this is an eye" -> told explicitly by humans

// Deep Learning - uses Neural Networks
// Question: Can the computer learn features (like 'eye') automatically?
// Answer: Yes - via Neural Networks (layers learn features on their own)

// Key breakthroughs enabled by Deep Learning:
// - Image Recognition
// - Speech Recognition
// - Translation

// Why Deep Learning became powerful:
// - GPU revolution (fast parallel computation)
// - Internet (massive data availability)
// - Large datasets (enough data to train deep networks)`
  },
  {
    id: 'ml-vs-dl',
    title: 'Machine Learning vs Deep Learning',
    category: 'AI',
    imageUrl: 'ml-vs-dl.png',
    slangDefinition: `Machine Learning (ML) na AI-oda subset - algorithms use panni data analyze panni, learn panni, decisions/predictions pannum. ML-ku smaller datasets podhum, structured data use pannum (tables maadhiri), aana feature extraction manual-a namba pannanum (example: Spam Detection-la "spam words" namba select pannanum). Flow: Input Data -> Feature Extraction (manual) -> ML Algorithm (Decision Tree, Random Forest) -> Output. Deep Learning (DL) na ML-oda specialized subset - Neural Networks (human brain-oda inspired) use pannum. DL-ku vast datasets (Big Data) venum, GPU pola computationally intensive, unstructured data (images, text, audio) handle pannum, features automatic-a learn pannikும் (manual extraction venum illa). Flow: Input Data (unstructured) -> Neural Network (feature learning + classification together) -> Output. Example: ML-la Spam Detection, Housing Price Prediction; DL-la Image Recognition ("CAT" nu classify pannum), NLP (voice command-a intent-a translate panni action eduka vaikkும்).`,
    interviewDefinition: `Machine Learning (ML) is a subset of AI that uses algorithms to analyze data, learn from it, and make decisions or predictions. It typically requires smaller, structured datasets and relies on manual feature engineering, though training is comparatively faster. The typical flow is: Input Data -> Feature Extraction (manual) -> ML Algorithm (e.g., Decision Tree, Random Forest) -> Output (Prediction/Classification). Examples include Spam Detection and Housing Price Prediction. Deep Learning (DL) is a specialized subset of ML based on Artificial Neural Networks (ANNs) inspired by the human brain. It requires vast datasets (Big Data), is computationally intensive (often requiring GPUs), works well with unstructured data (images, text, audio), and performs automated feature learning rather than manual extraction. The typical flow is: Input Data (unstructured) -> Neural Network (feature learning + classification combined) -> Output. Examples include Image Recognition (classifying an image as "CAT") and Natural Language Processing, such as translating a voice command into an intent and triggering an action.`,
    example: `// MACHINE LEARNING (ML)
// A subset of AI that uses algorithms to analyze data,
// learn from it, and make decisions/predictions.

// Features:
// - Requires smaller datasets
// - Structured Data
// - Faster training
// - Feature Engineering (manual)

// Flow:
// Input Data (structured) -> Feature Extraction (manual, select features)
//    -> ML Algorithm (Decision Tree / Random Forest) -> Output (Prediction/Classification)

// Example 1: Spam Detection
// Email -> [Spam / Not Spam]

// Example 2: Housing Price Prediction
// Size + Location -> Price


// DEEP LEARNING (DL)
// A specialized subset of ML based on artificial neural
// networks (ANNs) inspired by the human brain.

// Features:
// - Requires vast datasets (Big Data)
// - Computationally intensive (GPUs)
// - Unstructured Data (Images, Text, Audio)
// - Automated Feature Learning

// Flow:
// Input Data (unstructured) -> Neural Network
//    (Input Layer -> Multiple Hidden Layers -> Output Layer)
//    [Feature Learning + Classification combined] -> Output

// Example 1: Image Recognition
// Cat image -> DL Network layers -> "CAT"

// Example 2: Natural Language Processing (NLP)
// "Play music" -> DL Translation/Intent -> Action: Playing music`,
  },
  {
    id: 'llm',
    title: 'LLM (Large Language Model)',
    category: 'AI',
    slangDefinition: `LLM (Large Language Model) na Transformers architecture vachi build panna model, romba periya amount of text data (internet, books, articles) vachi train pannirukum. "Large" nu solradhukku rendu reasons - model-oda size (billions of parameters) and train panna use panna data-oda size rendum periysa irukum. Transformers na idhoda core architecture - andha "attention mechanism" vachi than sentence-la ovvoru word vera words-oda enna relationship irukku nu understand pannum. Idhu vachi than ChatGPT, Claude maadhiri models text-a generate panni, understand panni, respond pannuvanga.`,
    interviewDefinition: `An LLM (Large Language Model) is a model built on the Transformer architecture, trained on very large amounts of text data (such as books, articles, and internet text). It is called "large" because of both the model size (often billions of parameters) and the scale of training data used. Transformers are the core architecture behind LLMs, relying on an attention mechanism that allows the model to understand relationships between words in a sentence, regardless of their distance from each other. This architecture is what enables models like ChatGPT and Claude to generate, understand, and respond to natural language text.`,
    example: `// LLM = Large Language Model
// = Transformers trained on very large amounts of data

// Why "Large"?
// - Large model size (billions of parameters)
// - Large training data (books, articles, internet text)

// Core architecture: Transformers
// - Uses "Attention Mechanism"
// - Understands relationship between words in a sentence

// Examples of LLMs:
// - GPT (OpenAI)
// - Claude (Anthropic)
// - Gemini (Google)`
  },
  {
    id: 'generative-ai',
    title: 'Generative AI (Gen AI)',
    category: 'AI',
    slangDefinition: `LLM vandha apparam than Gen AI (Generative AI) nu oru pudhu stage vandhachu. Before Gen AI, AI panradhu na - Classification (idhu dog-a cat-a nu identify pannradhu), Predictions (idhu spam mail-a illaya nu solradhu), Recommendations (edhavadhu movie suggest pannradhu) - ivangalam already irukra options-la irundhu "choose" pannradhu than. Aana Transformers vachi train pannina apparam, AI pudhusa onnu "Generate" panna start pannichu - text, image, video, audio - vera vera formats-la output create panna mudiyum. Idhu than "Multi-Modal" nu solradhu - same model text-um generate pannum, image-um generate pannum, video-um generate pannum.`,
    interviewDefinition: `Generative AI (Gen AI) emerged as the next stage after LLMs. Before Gen AI, typical AI tasks were limited to Classification (identifying whether something is a dog or cat), Predictions (determining whether an email is spam or not), and Recommendations (suggesting a movie) - all of which involve choosing from a fixed set of existing options. After being trained on Transformers with massive datasets, AI gained the ability to Generate entirely new content - in text, image, video, or audio formats. This capability to produce output across multiple content formats is known as being Multi-Modal.`,
    example: `// Before Gen AI - AI chooses from existing options
// - Classification    -> "This is a Dog" or "This is a Cat"
// - Predictions        -> "This is Spam" or "Not Spam"
// - Recommendations    -> "You might like this Movie"

// After Gen AI (post-Transformers) - AI creates new content
// - Generate Text   -> write an essay, code, story
// - Generate Image  -> create a picture from a prompt
// - Generate Video   -> create a video from a prompt
// - Generate Audio    -> create music/speech

// This ability to generate across formats = "Multi-Modal"`
  },
  {
    id: 'ai-history-timeline',
    title: 'AI History Timeline',
    category: 'AI',
    slangDefinition: `AI history romba interesting-a evolve aagirukku, 1950-la irundhu 2025 varaikkum. 1950-la Alan Turing "can machine think?" nu oru question ketaru. 1956-la John McCarthy first-a "AI" nu oru word introduce pannaru. 1950s-80s-la Rule Based AI - if-else conditions vachi than intelligence build pannanga. 1997-la Deep Blue (IBM computer) chess-la Garry Kasparov-a defeat pannichu. 90's-la Machine Learning start aachu - rules-ku badhila examples/data vachi learn panna aarambichanga. 2000's-la Deep Learning vandhachu - Neural Networks vachi. 2012-la AlexNet vandhichu - computer vision-la breakthrough, computer-ku "see" panna mudinjachu. 2016-la Google-oda AlphaGo, Lee Sedol-a Go game-la beat pannichu. 2017-la Google "Attention is all you need" paper publish pannangа - Transformers architecture introduce aachu, idhu than LLM-oda foundation. 2022-la ChatGPT vandhichu, public-ku AI romba familiar aachu. 2025+ la Agentic AI - AI thaniya tasks plan pannitu, tools use pannitu, execute pannura stage.`,
    interviewDefinition: `The evolution of AI spans over 70 years. In 1950, Alan Turing posed the foundational question "can machines think?" In 1956, John McCarthy formally coined the term "Artificial Intelligence." From the 1950s-80s, Rule Based AI dominated, using if-else logic to simulate intelligence. In 1997, IBM's Deep Blue defeated chess champion Garry Kasparov. The 1990s marked the rise of Machine Learning, where systems began learning from data/examples instead of relying on fixed rules. The 2000s brought Deep Learning, powered by neural networks. In 2012, AlexNet achieved a major breakthrough in computer vision, enabling machines to effectively "see." In 2016, Google's AlphaGo defeated Go champion Lee Sedol. In 2017, Google published "Attention is all you need," introducing the Transformer architecture that became the foundation for modern LLMs. In 2022, ChatGPT brought AI into mainstream public use. From 2025 onward, the field has moved into Agentic AI, where AI systems can autonomously plan tasks, use tools, and execute multi-step actions.`,
    example: `// AI History Timeline

// 1950 - Alan Turing: "Can machines think?"
// 1956 - John McCarthy: term "AI" introduced
// 1950s-80s - Rule Based AI (if-else conditions)
// 1997 - Deep Blue defeats Garry Kasparov (Chess)
// 90's - Machine Learning begins
// 2000's - Deep Learning emerges (Neural Networks)
// 2012 - AlexNet: breakthrough in computer vision
// 2016 - AlphaGo (Google) beats Lee Sedol (Go)
// 2017 - Transformers: "Attention is all you need" (Google)
// 2022 - ChatGPT released
// 2025+ - Agentic AI`
  },
  {
    id: 'the-ai-today',
    title: 'The AI Today',
    category: 'AI',
    slangDefinition: `Earlier AI na questions mattum answer pannradhu - namma edhavadhu ketta, adhukku reply mattum tharum. Aana today AI romba mari poyachu - andha simple question-answer-a thaandi, AI ippo Think pannum, Plan pannum, APIs call pannum, Code write pannum, Understand pannum, Remember pannum, Web search pannum, Tools use pannum. Idhu mattum illama, AI ippo autonomous-a work pannum (namba thoduthu solla vendam), thaniya decisions edukkum, tasks complete pannum, context vachi puriyudhu, problems solve pannum, code write pannum, build panni test-um pannum. Idhu than "Agentic AI" stage - AI oru simple answer machine-la irundhu, oru independent worker maadhiri maari poyachu.`,
    interviewDefinition: `Earlier AI systems were largely limited to answering questions - a user would ask something, and the system would simply respond. Today's AI has moved far beyond this simple question-answer model. Modern AI can Think, Plan, call APIs, write code, understand context, remember prior information, search the web, and use tools. Beyond that, it can work autonomously (without step-by-step human instruction), make its own decisions, complete multi-step tasks, retain and use context, solve problems, write and build code, and even test its own output. This shift represents the move toward Agentic AI - AI evolving from a simple answer-generating system into an independent, task-completing worker.`,
    example: `// Earlier AI - could only answer questions
// User asks -> AI answers

// Today's AI capabilities:
// - Think
// - Plan
// - Call APIs
// - Write Code
// - Understand
// - Remember
// - Search Web
// - Use Tools
// - Work autonomously
// - Make decisions
// - Complete Tasks
// - Has Context
// - Solve Problems
// - Build & Test

// This shift = "Agentic AI"
// AI moved from a simple Q&A tool -> an independent, task-executing agent`
  },
  {
    id: 'ai-search-engines-vs-llms',
    title: 'Search Engines vs LLMs',
    category: 'AI',
    slangDefinition: `Search Engines (Google) and LLMs (ChatGPT) rendume different-a work pannum, aana pothu-a rendume "answer" tharudhu nu confuse aaguvom. Google-la flow enna na: Question kudukurom -> adhu oru index-a search pannum (already existing web pages) -> relevant documents-a rank pannum -> results return pannum. Idhu "Retrieve" pannradhu than - already irukra data-la irundhu best match-a kandu pidichu kaatuvom. ChatGPT-la flow vera maadhiri: Prompt kudukurom -> model training-la learnt panna patterns use pannum -> next word/text-a predict pannum -> pudhusa oru response generate pannum. Idhu "Generate" pannradhu than - pudhusa content create pannuvom, existing document-a retrieve panradhu illa.`,
    interviewDefinition: `Search Engines and LLMs both appear to "answer" a query, but they work fundamentally differently. A search engine like Google follows this flow: a Question is received -> it searches an existing index of web pages -> ranks the relevant documents -> and returns the results. This is a Retrieval process - the engine finds and surfaces the best matching content that already exists. An LLM like ChatGPT follows a different flow: a Prompt is received -> the model applies patterns learned during training -> it predicts the next word/token in sequence -> and generates a new response. This is a Generation process - the model creates new content rather than retrieving existing documents.`,
    example: `// Search Engines (Google)
// Question -> Search an Index -> Rank Relevant Documents -> Return Results

// LLMs (ChatGPT)
// Prompt -> Learnt Patterns -> Predict Next Text -> Generate Response

// Core Difference:
// Search Engines -> Retrieve (finds existing content)
// LLMs           -> Generate (creates new content)`
  },
  {
    id: 'how-search-engines-find-information',
    title: 'How Search Engines Find Information',
    category: 'AI',
    slangDefinition: `Internet-la irukra websites-a Crawlers/Spiders nu solra bots continuous-a visit pannitu irukum, andha pages-a padichi Index nu oru periya database-la store pannum (idha "library catalog" maadhiri). Namba search pannumbodhu, andha index-a search pannitu, Ranked documents-a return pannum - first place-la enna varum nu decide panna pala factors paakum: domain authority (andha site trust aana site-a), page speed (site fast-a load aaguma), keywords (search term match aaguthaa), avg. time spent (users andha page-la evlo neram irukanga), backlinks (vera sites andha page-a link pannirukangaa), meta tags, date (content freshness) - ellame combine panni ranking decide pannum.`,
    interviewDefinition: `Search engines find information through a multi-step process. Crawlers/Spiders (automated bots) continuously visit websites across the Internet and read their content. This content is then stored in an Index, essentially a massive, organized database similar to a library catalog. When a user searches, the search engine queries this index and returns Ranked documents. The ranking is determined by multiple factors, including domain authority (how trustworthy the site is), page speed (how fast the site loads), keyword relevance (how well the content matches the search term), average time spent by users on the page, backlinks (other sites linking to the page), meta tags, and content freshness (date). These factors are combined to determine the final ranking of results.`,
    example: `// How Search Engines Find Information

// 1. Crawlers/Spiders continuously scan the Internet
//    (visiting websites and reading their content)

// 2. Content gets stored in an Index
//    (a large, organized database of web pages)

// 3. User searches -> Index is queried -> Returns Ranked documents

// Ranking factors:
// - Domain authority
// - Page speed
// - Keywords
// - Avg. time spent
// - Backlinks
// - Meta tags
// - Date (freshness)`
  },
  {
    id: 'search-engine-pros-and-cons',
    title: 'Pros and Cons of Search Engines',
    category: 'AI',
    slangDefinition: `Cons: truth guarantee pannadhu (search result-la vandhadhu ellame correct-a irukanum-nu illa), outdated-a irukalam (old information kooda kaatalam), rankings imperfect-a irukalam (best content mattum top-la varanum-nu illa), misleading-a irukalam. Pros : eppovum "a trail back to source" tharum - andha information original-a evaru publish pannangaa nu check pannalam, date paakalam (idhu recent-a irukka pazhaya-a irukka nu theriyum), and multiple results compare pannalam - so namba manually verify pannikalam.`,
    interviewDefinition: `Flaws include: they do not guarantee truth (top results aren't necessarily accurate), information can be outdated, rankings can be imperfect (the best content may not always rank highest), and results can sometimes be misleading. However, search engines have key advantages: they always provide a trail back to the source, allowing users to check who published the information, see the publish date to judge how current it is, and compare multiple results before drawing conclusions - enabling manual verification.`,
    example: `// Flaws of Search Engines:
// - Does not guarantee truth
// - Can be outdated
// - Rankings can be imperfect
// - Misleading

// But, Pros:
// - A trail back to source
// - Check who published it
// - You can see the date
// - Compare multiple results`
  },
  {
    id: 'is-llm-just-autocomplete',
    title: 'Is an LLM Just an Autocomplete?',
    category: 'AI',
    slangDefinition: `Common doubt varum - "ChatGPT randomly words-a guess pannudha? LLM na oru fancy autocomplete than-aa?" nu. Idha understand panna, "The capital of India is ___" nu kudutha, model ella possible words-kum probability kudukum - Delhi 90%, Punjab 1%, Lucknow 0.5% - so idhu autocomplete maadhiri than "next word predict" pannuthu, correct. Aana modern LLM romba periya context use pannum, and romba complex patterns learn pannirukum - Grammar, Programming, Reasoning, Facts, Language, Stories, Maths, and people/places/events/ideas-oda association ellame purinjirukum. Adhanala idhu simple autocomplete illa - deep patterns and relationships understand pannitu than next word predict pannuthu.`,
    interviewDefinition: `A common question is whether ChatGPT is just randomly guessing words, or whether an LLM is essentially just an autocomplete system. Technically, when given a prompt like "The capital of India is ___", the model does assign probabilities to possible next words (e.g., Delhi 90%, Punjab 1%, Lucknow 0.5%) - so at a mechanical level, it is predicting the next word, similar to autocomplete. However, a modern LLM uses a much larger context window and has learned extremely complex patterns, including Grammar, Programming, Reasoning, Facts, Language, Stories, Maths, and the associations between people, places, events, and ideas. So while the underlying mechanism is next-word prediction, the depth of patterns learned makes it far more capable than a simple autocomplete system.`,
    example: `// Is ChatGPT just randomly guessing words?
// Is an LLM just an autocomplete?

// Example: "The capital of India is ___"
// Delhi   -> 90%
// Punjab  -> 1%
// Lucknow -> 0.5%
// (model predicts next word based on probability)

// But modern LLMs use much larger context
// and have learned extremely complex patterns:
// - Grammar
// - Programming
// - Reasoning
// - Facts
// - Language
// - Stories
// - Maths
// - Association between people, places, events, ideas`
  },
  {
    id: 'base-model-vs-ai-assistants',
    title: 'Base Model vs AI Assistants',
    category: 'AI',
    slangDefinition: `Base Model na core than - idhu primarily text predict panna train pannirukra model, adhu mattum than irukum, vera onnum illa. Aana ChatGPT maadhiri AI Assistant paathaal, andha Base Model-a center-la vachi, mela extra layers add pannirukanga - Instruction tuning (user commands purinjikuran maadhiri train pannradhu), Human Feedback (RLHF - human feedback vachi improve pannradhu), Safety Training, System Instructions, Tool Access, Web Search, Files, Memory, Retrieval, Content Filters, GuardRails, Security, Auth, Conversation Management. Idhu ellame add pannina apparam than, oru raw text-predictor model, oru safe, useful, tool-using AI Assistant-a maarum. Analogy: Car & its Engine - Base Model na Engine (core power), aana AI Assistant na full Car (steering, brakes, safety features, AC - everything added around the engine to make it usable and safe).`,
    interviewDefinition: `A Base Model is a model trained primarily to predict text - it exists in its raw form, without additional layers of refinement. An AI Assistant like ChatGPT, however, wraps this Base Model with many additional layers: Instruction tuning (training the model to follow user commands), Human Feedback (RLHF, refining behavior using human preferences), Safety Training, System Instructions, Tool Access, Web Search, File handling, Memory, Retrieval, Content Filters, GuardRails, Security, Authentication, and Conversation Management. These layers transform a raw text-prediction model into a safe, useful, tool-capable assistant. A helpful analogy is a Car and its Engine: the Base Model is the Engine (the core power source), while the AI Assistant is the complete Car - with steering, brakes, safety features, and more built around that engine to make it usable and safe in the real world.`,
    example: `// Base Model
// - Trained primarily to predict text
// - Just the raw prediction engine

// AI Assistant (e.g., ChatGPT) = Base Model + additional layers:
// - Instruction tuning
// - Human Feedback (RLHF)
// - Safety Training
// - System Instructions
// - Tool Access
// - Web Search
// - Files
// - Memory
// - Retrieval
// - Content Filters
// - GuardRails
// - Security
// - Auth
// - Conversation Management

// Analogy: Car & its Engine
// Base Model    -> Engine (core power)
// AI Assistant  -> Full Car (engine + steering, brakes, safety, comfort)`
  },
  {
    id: 'training-vs-inference',
    title: 'Training vs Inference',
    category: 'AI',
    slangDefinition: `Training na model-a "teach" panra process - romba periya amount of data (text, images) model-ku kudukurom, adhu andha data-la irukra patterns-a learn pannikum, adhu based-a andha model-oda internal parameters (weights) adjust aagum. Idhu romba expensive process - weeks/months time edukkum, massive GPU compute venum, oru thadava mattum than (illa periodic-a) pannuvom. Inference na already train pannina model-a "use" panra process - namba oru prompt kuduthaal, model andha learnt patterns vachi output generate pannikodukkum. Idhu fast-a and cheap-a nadakkum, real-time-la namba ChatGPT-la message anuppumbodhu ellame Inference than nadakkuthu. Simple-a solradhunna: Training = Studying for exam (once, takes long time), Inference = Writing the exam (using what you learned, quick, repeated every time).`,
    interviewDefinition: `Training is the process of teaching a model by exposing it to massive amounts of data (text, images, etc.), allowing it to learn underlying patterns and adjust its internal parameters (weights) accordingly. Training is computationally expensive and time-consuming - it can take weeks or months and requires significant GPU compute - and is typically done once (or periodically, for updates), not on every use. Inference is the process of using an already-trained model to generate output - given a prompt, the model applies its learned patterns to produce a response. Inference is comparatively fast and cheap, and happens every time a user interacts with the model (e.g., sending a message to ChatGPT). In short: Training is like studying for an exam (done once, takes a long time), while Inference is like writing the exam (using what was learned, quick, and repeated every time).`,
    example: `// TRAINING
// - Model learns patterns from massive datasets
// - Adjusts internal parameters (weights)
// - Expensive: weeks/months, massive GPU compute
// - Done once (or periodically for retraining)

// INFERENCE
// - Using the already-trained model to generate output
// - Given a prompt -> model produces a response
// - Fast & cheap, happens every time you use the model
// - Example: sending a message to ChatGPT = Inference

// Analogy:
// Training  -> Studying for an exam (once, time-consuming)
// Inference -> Writing the exam (using what you learned, quick, repeated)`
  },
  {
    id: 'ai-hallucination',
    title: 'AI Hallucination',
    category: 'AI',
    slangDefinition: `Hallucination na LLM confidently oru wrong or made-up answer generate pannradhu - fact-la illama irundhaalum, model romba sure-a solra maadhiri irukum. Idhu yean varum nu paathaal pala reasons irukku: Insufficient Info (model-ku training-la podhuma data illama irundha), Ambiguous Info (question clear-a illama irundha, model guess pannum), Outdated Knowledge (model training cutoff-ku apparam nadanda events theriyaadhu), False assumptions (wrong context-a base panni answer kudukum), Unreliable patterns (training data-la irundha noise/errors-a andha maadhiri patterns learn pannikum), Models are optimised to Answer (model "I don't know" solradha vida, edhavadhu answer generate panna than train pannirukanga), Generation is probabilistic (model ovvoru word-um probability vachi than predict pannum, so sometimes wrong path-a select pannum).`,
    interviewDefinition: `Hallucination refers to an LLM confidently generating incorrect or fabricated information, often presenting it as fact even when it isn't. This happens due to several reasons: Insufficient Info (the model lacks enough relevant training data on the topic), Ambiguous Info (unclear input leads the model to guess), Outdated Knowledge (the model has no awareness of events after its training cutoff), False assumptions (the model reasons from incorrect premises), Unreliable patterns (noisy or incorrect patterns picked up during training), Models are optimised to Answer (models are generally trained to produce a response rather than admit uncertainty), and Generation is probabilistic (since each word is predicted based on probability, the model can occasionally select an incorrect path).`,
    example: `// Why does Hallucination happen?

// - Insufficient Info      -> not enough training data on the topic
// - Ambiguous Info          -> unclear question, model guesses
// - Outdated Knowledge      -> no awareness of events after training cutoff
// - False assumptions        -> reasoning built on wrong premises
// - Unreliable patterns        -> noisy/incorrect patterns learned during training
// - Models are optimised to Answer -> trained to respond, not say "I don't know"
// - Generation is probabilistic     -> next-word prediction can pick a wrong path`
  },
  {
    id: 'how-tools-extend-the-models',
    title: 'How Tools Extend the Models',
    category: 'AI',
    slangDefinition: `LLM oru base model-a irundha, adhu training data-la irundha mattum answer tharum - real-time information, calculations, or external actions panna mudiyadhu. Idha overcome panna Tools add pannuvom, idhu model-ku "Super Powers" kudukra maadhiri than. Tools examples: Web Search (current information fetch pannradhu), Calculator (accurate math pannradhu), Code Execution (code run panni result kudukradhu), Weather (real-time weather check pannradhu), Location, Calendar (events check/create pannradhu), Email (send/read pannradhu), Database (query pannradhu), Internal Docs (company-specific info access pannradhu), Files (upload/read pannradhu) - and innum pala. Idhu ellame add pannina apparam than, model oru "static knowledge-only" system-la irundhu, oru "real-world actions panna mudiyara" powerful assistant-a maarum.`,
    interviewDefinition: `A base LLM can only respond using knowledge from its training data - it cannot access real-time information, perform precise calculations, or take external actions on its own. Tools extend a model's capabilities beyond this limitation, effectively giving it "superpowers." Common tools include Web Search (fetching current information), Calculator (performing accurate math), Code Execution (running code and returning results), Weather (checking real-time weather), Location, Calendar (checking or creating events), Email (sending or reading messages), Database (querying data), Internal Docs (accessing company-specific knowledge), and Files (uploading or reading documents), among many others. By integrating these tools, a model transforms from a static, knowledge-only system into a powerful assistant capable of taking real-world actions.`,
    example: `// How Tools Extend the Models
// LLM alone -> limited to training data, no real-time or external actions

// Tools give the model "Super Powers":
// - Web Search
// - Calculator
// - Code Execution
// - Weather
// - Location
// - Calendar
// - Email
// - Database
// - Internal Docs
// - Files
// - ...and much much more`
  },
  {
    id: 'rag-retrieval-augmented-generation',
    title: 'RAG (Retrieval Augmented Generation)',
    category: 'AI',
    slangDefinition: `RAG na Web Search (Retrieval) + LLMs (Generation) rendaiyum combine pannradhu. Retrieval na external evidence kudukkum - real-time-a relevant information-a fetch pannitu tharum (web search vachi illa document database vachi). Generation na andha retrieved information-a eduthu, oru useful, well-structured response-a convert pannikodukkum. Rendaiyum combine pannina apparam, model just training data mattum relay aagama, latest, accurate external data vachi answer tharum - idhu than RAG (Retrieval Augmented Generation). NOTE: Tools (RAG included) errors-a completely eliminate pannaadhu - hallucination chance kammiya iruku, aana zero-a illama pogaadhu.`,
    interviewDefinition: `RAG (Retrieval Augmented Generation) combines Retrieval (e.g., Web Search) with Generation (LLMs). Retrieval provides external evidence by fetching relevant, often real-time, information (from a web search or a document database). Generation then takes this retrieved information and converts it into a useful, coherent response. Together, this allows the model to answer using accurate, up-to-date external data instead of relying solely on its static training data - this combined approach is called Retrieval Augmented Generation (RAG). Note: tools like RAG reduce hallucination risk significantly but do not completely eliminate errors.`,
    example: `// RAG = Web Search (Retrieval) + LLMs (Generation)

// Retrieval  -> gives external evidence (fetches relevant info)
// Generation -> converts retrieved info into a useful response

// Together: Retrieval Augmented Generation (RAG)

// NOTE:
// Tools (including RAG) do NOT completely eliminate errors
// - hallucination risk is reduced, but not zero`
  },
  {
    id: 'token',
    title: 'Token',
    category: 'AI',
    slangDefinition: `Token nu solradhu oru text-oda chinna chinna unit, idha Tokenizer nu oru component dhan decide pannudhu evlo periya piece ah irukanumnu. Sometimes full word oru token aagum, sometimes oru word rendu illa moonu tokens ah split aagum. Idhu enna reason na, model ku vocabulary size kammiya vecha, puthu words kooda already irukura sub-parts vachi understand pannikalaam.`,
    interviewDefinition: `A Token is the smallest unit of text that a language model processes, and it is determined by a component called a Tokenizer. Depending on the tokenization strategy, a token can be a whole word, part of a word, or even a single character or punctuation mark. This subword tokenization helps the model handle a large vocabulary efficiently and understand unfamiliar or complex words by breaking them into known smaller pieces.`,
    example: `Explore at: https://platform.openai.com/tokenizer`
  },
  {
    id: 'words-vs-characters-vs-tokens',
    title: 'Words vs Characters vs Tokens',
    category: 'AI',
    slangDefinition: `Words, Characters, Tokens moonum vera vera unit dhan text ah split panna. Word nu solradhu namma usual ah pesra word, "Namaste" full ah oru word. Character nu solradhu oru letter, "N", "a", "m" ilaam individual character. Aana Token nu solradhu tokenizer decide pannura piece, idhu word ah irukalam, illa oru word rendu three pieces ah split aagalam. Example ku "Namaste AI is Amazing" nu eduthukalam, idhula "Namaste" rendu tokens ah split aagudhu, "AI" innoru token, "is" innoru token, "Amazing" innoru token. Ippo final ah indha tokens ellam numbers ah convert aagudhu, adhaan namma [45, 321, 4594, 9552, 318, 4998] nu paakurom. Idhu enna reason na, model ku text puriyadhu, model ku numbers dhan puriyum, so tokenizer text ah tokens ah split panni, apparam antha tokens ah unique numbers ah map pannudhu.`,
    interviewDefinition: `Words, Characters, and Tokens are three different ways to break down text, and they are not the same thing. A word is a natural language unit like "Namaste". A character is a single letter or symbol like "N", "a", "m". A token, however, is a unit defined by the tokenizer, and it may or may not match a full word. A single word can be split into multiple tokens depending on how common or complex it is. For example, "Namaste AI is Amazing" can be broken into tokens like "Namaste" (split into two tokens), "AI", "is", and "Amazing", which are then converted into numeric IDs such as [45, 321, 4594, 9552, 318, 4998]. This happens because language models do not understand raw text, they only understand numbers, so the tokenizer's job is to convert text into tokens and then map those tokens into unique numeric IDs.`,
    example: `// Words vs Characters vs Tokens

const sentence = "Namaste AI is Amazing";

// 1. Words (split by spaces)
const words = sentence.split(" ");
console.log(words);
// Output: ["Namaste", "AI", "is", "Amazing"]

// 2. Characters (split by letters)
const characters = sentence.replace(" ", "").split("");
console.log(characters);
// Output: ["N","a","m","a","s","t","e","A","I","i","s","A","m","a","z","i","n","g"]

// 3. Tokens (decided by a Tokenizer, not always equal to words)
// A tokenizer might split "Namaste" into 2 tokens,
// while "AI", "is", "Amazing" remain single tokens

const tokens = ["N", "am", "aste", "AI", "is", "Amazing"];
console.log(tokens);
// Output: ["N", "am", "aste", "AI", "is", "Amazing"]

// 4. Tokens are converted into numeric IDs before sending to the model
const tokenIds = [45, 321, 4594, 9552, 318, 4998];
console.log(tokenIds);
// Output: [45, 321, 4594, 9552, 318, 4998]`
  },
  {
    id: 'vocabulary-and-token-id',
    title: 'Vocabulary & Token ID',
    category: 'AI',
    slangDefinition: `Vocabulary nu solradhu oru tokenizer ku theriyura ella tokens oda collection. Ovvoru tokenizer ku oru fixed vocabulary irukum, adhula irukura tokens mattum dhan antha tokenizer directly represent panna mudiyum. Ovvoru token ku oru unique number assign panniruppanga, adha Token ID nu solvom. Example ku "the" nu token ku ID 10, " is" nu token ku ID 11, "Java" nu token ku ID 12, "Script" nu token ku ID 13 nu maadhiri irukum. Idhu enna reason na, model ku text puriyadhu, so vocabulary vachi tokenizer text ah numbers ah convert pannudhu, apparam antha numbers ah dhan model process pannudhu. Idhu ku use aagura popular technique oru "Byte Pair Encoding" nu solvom, short ah BPE.`,
    interviewDefinition: `Every tokenizer has a vocabulary, which is the fixed collection of tokens that the tokenizer knows how to represent directly. Each token in this vocabulary is mapped to a unique numeric identifier called a Token ID. For example, a simplified vocabulary might map "the" to 10, " is" to 11, "Java" to 12, "Script" to 13, "." to 14, and "ing" to 15. When text is tokenized, each resulting token is looked up in this vocabulary and converted into its corresponding Token ID, which is what the model actually processes. A common algorithm used to build such vocabularies is Byte Pair Encoding (BPE), which iteratively merges frequently occurring character or subword pairs to form the vocabulary.`,
    example: `// Vocabulary & Token ID

// A simplified tokenizer vocabulary
const vocabulary = {
  "the": 10,
  " is": 11,
  "Java": 12,
  "Script": 13,
  ".": 14,
  "ing": 15
};

// Tokenizing a piece of text using this vocabulary
function tokenize(tokens) {
  return tokens.map(token => vocabulary[token]);
}

const tokens = ["Java", "Script", " is", "the", "."];
const tokenIds = tokenize(tokens);

console.log(tokenIds);
// Output: [12, 13, 11, 10, 14]

// This mapping (token -> id) is exactly what a
// Byte Pair Encoding (BPE) based vocabulary provides.`
  },
  {
    id: 'special-tokens',
    title: 'Special Tokens',
    category: 'AI',
    slangDefinition: `Namma model ku kudukura question mattum pogadhu, adhoda kooda konjo "Special Tokens" nu solra extra markers um pogum. Idhu ella conversation ah structure pannikaraadhukku use aagum. Example ku System Instruction nu oru special token irukum, adhu model ku "nee eppadi behave pannanum" nu solli varum. Apparam Start of Message nu oru token irukum, adhu "idhu dhan message start aagudhu" nu mark pannum. Antha maadhiri End of Message nu oru token irukum, adhu "idhu dhan message mudinjidichu" nu solli separate pannum. Tools Output nu vera oru special token irukum, idhu function ah call panni result vandha antha result ah represent panna use aagum. Last Message nu innoru marker irukum, idhu conversation la latest message enna nu identify panna help pannum. Idhu ellam solradhu model ku clear ah conversation structure kaatuvom, adhanala model confuse aagama correct ah respond pannum.`,
    interviewDefinition: `When a request is sent to a language model, it is not just the user's plain question that gets sent. Along with it, the model receives several Special Tokens that help structure the conversation so the model can correctly interpret roles and boundaries. Common special tokens include a System Instruction token (defines how the model should behave), a Start of Message token (marks where a message begins), an End of Message token (marks where a message ends), a Tools Output token (represents the result returned from a function or tool call), and a Last Message marker (identifies the most recent message in the conversation). These special tokens are part of the vocabulary just like normal word tokens, and they allow the model to distinguish between system instructions, user input, assistant responses, and tool results within a single input sequence.`,
    example: `// Special Tokens example (conceptual representation)

const conversation = [
  { type: "SYSTEM_INSTRUCTION", content: "You are a helpful medical assistant." },
  { type: "START_OF_MESSAGE", content: null },
  { type: "USER_MESSAGE", content: "What is the normal heart rate for an adult?" },
  { type: "END_OF_MESSAGE", content: null },
  { type: "TOOLS_OUTPUT", content: "{ normalRange: '60-100 bpm' }" },
  { type: "START_OF_MESSAGE", content: null },
  { type: "ASSISTANT_MESSAGE", content: "The normal heart rate for an adult is 60-100 bpm." },
  { type: "END_OF_MESSAGE", content: null },
  { type: "LAST_MESSAGE", content: "ASSISTANT_MESSAGE" }
];

// Each "type" here represents a special token that gets
// converted into its own unique Token ID, just like normal words,
// so the model can understand conversation structure.

console.log(conversation);`
  },
  {
    id: 'vectorisation',
    title: 'Vectorisation',
    category: 'AI',
    slangDefinition: `Vectorisation nu solradhu edhavadhu information ah numerical vectors ah convert panradhu. Idhu enna reason na, computer ku text, image, user, product ellam directly puriyadhu, aana numbers vachi mathematical operations pannalaam. Example ku simple ah [2, 5] nu oru vector irukalam, illa [3, 8, 7] nu moonu numbers vechi irukalam, illa [0.12, -3.5, 4.20, 1.24, -6.81] nu decimal numbers vechi irukalam. Each value indha vector-la irukura adha "dimension" nu solvom. Example ku fruits ah rank pannanumna, Sweetness, Size, Crunchyness nu moonu properties eduthukalam, apparam Apple ku [0.7, 0.4, 0.8] nu oru vector kudukalam, Banana ku [0.8, 0.6, 0.2] nu vera vector kudukalam. Modern embedding models thousands of dimensions use pannudhu, andha dimensions ellam data-la irundhu automatic ah learn aagudhu, namma manual ah decide panna maatu.`,
    interviewDefinition: `Vectorisation is the process of converting information into numerical vectors so that computers can perform mathematical operations on it. Text, images, users, products, or virtually any kind of information can be vectorised. A vector can be as simple as [2, 5] or [3, 8, 7], or more complex with decimal values like [0.12, -3.5, 4.20, 1.24, -6.81]. Each individual value within a vector is called a dimension. For example, if we rank fruits on three properties such as Sweetness, Size, and Crunchyness, Apple might be represented as [0.7, 0.4, 0.8] and Banana as [0.8, 0.6, 0.2]. In real-world embedding models, there are thousands of such dimensions, and unlike this simple manual example, those dimensions are not hand-defined, they are automatically learned from data during training.`,
    example: `// Vectorisation example

// Simple numerical vectors
const vectorA = [2, 5];
const vectorB = [3, 8, 7];
const vectorC = [0.12, -3.5, 4.20, 1.24, -6.81];

// Each number inside a vector is called a "dimension"
console.log(vectorC.length); // 5 dimensions

// Example: Ranking fruits on 3 properties
// [Sweetness, Size, Crunchyness]

const fruits = {
  Apple: [0.7, 0.4, 0.8],
  Banana: [0.8, 0.6, 0.2],
  Carrot: [0.2, 0.5, 0.9],
  Watermelon: [0.6, 0.9, 0.5]
};

console.log(fruits.Apple);
// Output: [0.7, 0.4, 0.8]

// Real embedding models use THOUSANDS of dimensions,
// and those dimension values are learned from data,
// not manually assigned like this simplified example.`
  },
  {
    id: 'embedding',
    title: 'Embedding',
    category: 'AI',
    slangDefinition: `Embedding nu solradhu oru item-oda "learned numerical representation", idhu antha item ku innoru items kooda irukura useful relationships ah capture pannum. Example ku "king" nu word ku [0.81, 0.32, -0.52, 0.17] nu vector irukalam, "queen" ku [0.79, 0.36, -0.48, 0.22] nu vector irukalam, idhu rendum close ah irukura numbers, so king-um queen-um related words nu model puriyudhu. Aana "banana" ku [-0.24, 0.91, 0.11, -0.63] nu vera madhiri vector irukum, idhu king, queen rendukkum kooda unrelated nu kaatudhu. Idhu romba important point enna na, indha values ah human manual ah kudukala, training process-la model thaan indha values ah learn pannudhu. Model billions of text-la tokens eppadi use aaguthu nu observe pannudhu, similar context-la vara words gradually similar numbers develop pannum. Last ah oru imp point, embedding nu solradhu word-oda "meaning" illa, adhu antha word patha useful patterns ah capture pannura numerical representation mattum dhan.`,
    interviewDefinition: `An embedding is a learned numerical representation of an item that captures useful relationships with other items. For example, "king" might be represented as [0.81, 0.32, -0.52, 0.17] and "queen" as [0.79, 0.36, -0.48, 0.22], with these vectors being close to each other since the words are related, while "banana" as [-0.24, 0.91, 0.11, -0.63] would be numerically distant from both. Importantly, these values are not assigned by a human. During training, the model learns embedding values by observing how tokens are used across enormous amounts of text, and words that appear in similar linguistic environments gradually develop similar numerical relationships. It is important to note that an embedding is not the meaning of a word, it is a numerical representation that captures useful patterns about that word.`,
    example: `// Embedding example (conceptual)

const embeddings = {
  king:   [0.81, 0.32, -0.52, 0.17],
  queen:  [0.79, 0.36, -0.48, 0.22],
  banana: [-0.24, 0.91, 0.11, -0.63]
};

// These values are NOT manually assigned by a human.
// They are LEARNED during training by observing how
// words are used across huge amounts of text.

// Related words end up with similar vector values
console.log(embeddings.king);  // [0.81, 0.32, -0.52, 0.17]
console.log(embeddings.queen); // [0.79, 0.36, -0.48, 0.22]
// king & queen vectors are close to each other -> related

// Unrelated words end up with very different values
console.log(embeddings.banana); // [-0.24, 0.91, 0.11, -0.63]
// banana vector is far from king/queen -> unrelated

// Note: An embedding is NOT the "meaning" of a word.
// It's a numerical pattern representation learned from data.`
  },
  {
    id: 'embedding-as-coordinates',
    title: 'Embedding as Coordinates',
    category: 'AI',
    slangDefinition: `Real embeddings la 1000+ dimensions irukum, Embedding ah visualize panna romba easy ah 2D plot vechi paakalaam. Idhula similar meaning words ellam oru area-la cluster aagi irukum. Example ku Apple (1, 2) and Banana (1.5, 2.3) rendum fruits ah irukardhala lower-left-la close ah irukum. JavaScript (4, 8) and Python (4.5, 7.8) rendum programming languages ah irukardhala upper-center-la together irukum. Man (7, 4) and Woman (6.5, 4.2) human roles ah central-right-la irukum. King (8, 7) and Queen (7.5, 7.2) royalty ah upper-right-la irukum. Idhula innum oru interesting pattern irukku, King and Man ku oru diagonal line varudhu, Queen and Woman ku vera oru parallel diagonal line varudhu, idhu "gender" nu oru relationship ah represent pannudhu. Idhu maadhiri pattern ella words ku kooda form aagum. Oru important point, dimensions athigama irunthale model smart aagidum nu artham illa, athiga dimensions complex patterns capture pannum, aana adhukku athiga storage and computation venum, and training mudinja pinnadi indha numbers ellam adjust aagikittu irukum.`,
    interviewDefinition: `Embeddings can be visualized by plotting them as coordinates, even though real-world embeddings have over 1000 dimensions; for simplicity, we visualize them in just 2 dimensions. These coordinates illustrate semantic clustering and geometric vector relationships. Fruits like Apple (1, 2) and Banana (1.5, 2.3) cluster together in the lower-left region. Programming languages like JavaScript (4, 8) and Python (4.5, 7.8) group near the upper-center. Human roles like Man (7, 4) and Woman (6.5, 4.2) sit centrally on the right. Royalty terms like King (8, 7) and Queen (7.5, 7.2) sit in the upper-right. Interestingly, King and Man form one diagonal line, while Queen and Woman form a parallel diagonal line, representing a consistent "gender" relationship pattern that emerges across the embedding space. Similar geometric patterns form for other related word groups as well. It's important to note that more dimensions do not mean more intelligence; higher dimensions can capture more complex patterns, but they also require more storage and computation, and with each round of training, these numeric values get readjusted.`,
    example: `// Embedding as Coordinates (2D simplified example)

const wordEmbeddings2D = {
  Apple:      [1, 2],
  Banana:     [1.5, 2.3],
  JavaScript: [4, 8],
  Python:     [4.5, 7.8],
  Man:        [7, 4],
  Woman:      [6.5, 4.2],
  King:       [8, 7],
  Queen:      [7.5, 7.2]
};

// Fruits cluster together (similar region)
console.log(wordEmbeddings2D.Apple, wordEmbeddings2D.Banana);
// [1, 2] [1.5, 2.3] -> close together

// Programming languages cluster together
console.log(wordEmbeddings2D.JavaScript, wordEmbeddings2D.Python);
// [4, 8] [4.5, 7.8] -> close together

// King-Man and Queen-Woman form parallel diagonal relationships,
// representing a learned "gender" pattern in the vector space
// King - Man  =>  [8-7, 7-4]   = [1, 3]
// Queen - Woman => [7.5-6.5, 7.2-4.2] = [1, 3]
// Same direction/distance -> consistent relationship pattern

// Note: Real embeddings use 1000+ dimensions, not just 2.
// More dimensions = more captured patterns, but more
// storage & computation cost. Values keep adjusting with training.`
  },
  {
    id: 'why-many-dimensions-needed',
    title: 'Why Embeddings Need Many Dimensions',
    category: 'AI',
    slangDefinition: `Oru person ah describe panna rendu attributes mattum eduthukalam, Height and Weight, idhu namakku oru two-dimensional representation kudukum. Aana rendu properties mattum vechi oru person ah meaningful ah represent panna mudiyadhu, athanala namma innum add pannalaam, Age, Profession, Location, Skills, Interests, Experience, Languages nu ellam. Ovvoru dimension add pannumbodhu, antha representation innum richer ah aagikittu varudhu, person patha innum better ah define pannalaam. Idhu exact ah embeddings ku kooda apply aagudhu, language nu solradhu romba complex ah irukardhala, embeddings ku rendu moonu dimensions podhadhu, athanala thousands of dimensions venum, different patterns and relationships ah capture panna.`,
    interviewDefinition: `Imagine describing a person using only two attributes, Height and Weight; this gives a two-dimensional representation. However, people cannot be meaningfully represented using just those two properties. We can add more attributes like Age, Profession, Location, Skills, Interests, Experience, and Languages. As we add more dimensions, the representation becomes richer and more accurate. This same idea applies to embeddings: language is far more complex than a person's physical attributes, so embeddings require many dimensions (often thousands) to capture the different patterns and relationships that exist in language.`,
    example: `// Why embeddings need many dimensions (conceptual analogy)

// With only 2 attributes, representation is limited
const personBasic = {
  height: 175, // cm
  weight: 70   // kg
};

// Adding more attributes makes the representation richer
const personDetailed = {
  height: 175,
  weight: 70,
  age: 28,
  profession: "Developer",
  location: "Chennai",
  skills: ["Angular", "TypeScript"],
  interests: ["Music", "Gaming"],
  experience: 5,
  languages: ["English", "Tamil"]
};

// Same logic applies to embeddings:
// Language is far more complex than height/weight,
// so a real embedding needs THOUSANDS of dimensions
// to capture different semantic patterns & relationships.

const simplifiedEmbeddingDimensions = 2;      // like height & weight only
const realEmbeddingDimensions = 1536;         // example: many modern models

console.log(realEmbeddingDimensions > simplifiedEmbeddingDimensions);
// Output: true -> richer representation captures more meaning`
  },
  {
    id: 'semantic-similarity',
    title: 'Semantic Similarity',
    category: 'AI',
    slangDefinition: `Semantic Similarity nu solradhu rendu text pieces meaning-la evlo close ah irukunu measure pannuradhu. Example ku Query A "How do I centre a div?" nu kekaranga, Query B "How can I align an HTML element in the middle of its parent?" nu kekaranga, rendu different words use pannirundhalum, meaning same dhan. Oru keyword-based system exact word overlap mattum check pannumbodhu idha miss panniduvanga, aana embedding-based system rendu queries ah vectors ah represent panni, antha vectors meaning-la close ah irukunu discover pannidum. Interesting point enna na, oru vector romba long aa irukalam, innoru vector romba short aa irukalam, aana rendum same direction-la point pannina, rendum similar nu solalaam, length mukyam illai direction dhan mukyam. "How do I learn Java?" and "How do I make Java coffee?" rendula "Java" word common ah irundhalum, meaning completely different, so idhu similar illa. Idhu dhan embeddings oda power, exact word match illama broader meaning ah compare panna mudiyum.`,
    interviewDefinition: `Semantic similarity measures how close two pieces of text are in meaning, rather than how many words they have in common. For example, "How do I centre a div?" and "How can I align an HTML element in the middle of its parent?" use completely different words but mean the same thing. A keyword-based system may struggle here since it relies on exact word overlap, while an embedding-based system represents both queries as vectors and can discover that they are close in meaning. A key concept here is that one vector can have a very different magnitude (length) from another, but as long as both vectors point in a similar direction, they are considered semantically similar, direction matters more than length. Conversely, two sentences can share overlapping words yet have different meanings, such as "How do I learn Java?" versus "How do I make Java coffee?", where the word "Java" appears in both but refers to entirely different concepts. Embeddings allow systems to compare broader meaning rather than only matching identical words.`,
    example: `// Semantic Similarity example (conceptual)

// Similar meaning, different words -> close vectors
const queryA = "How do I centre a div?";
const queryB = "How can I align an HTML element in the middle of its parent?";

// Similar meaning, different words -> close vectors
const queryC = "How can I reset my password?";
const queryD = "I forgot my password. How do I create a new one?";

// Different meaning, overlapping word ("Java") -> distant vectors
const queryE = "How do I learn Java?";
const queryF = "How do I make Java coffee?";

// Simplified cosine similarity concept:
// Similarity depends on the DIRECTION of vectors, not their length

function cosineSimilarity(vecA, vecB) {
  const dotProduct = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
  return dotProduct / (magnitudeA * magnitudeB);
}

// Example vectors (one short, one long, but same direction)
const shortVector = [1, 2];
const longVector = [10, 20]; // same direction, different length

console.log(cosineSimilarity(shortVector, longVector));
// Output: 1 -> perfectly similar, because direction matches
// even though magnitude (length) is very different`
  },
  {
    id: 'cosine-similarity',
    title: 'Cosine Similarity',
    category: 'AI',
    imageUrl: 'cosine-similarity-vectors.jpg',
    slangDefinition: `Rendu vectors evlo similar nu kandupudika, "Cosine Similarity" nu oru technique use pannuvom, idhu rendu vectors-oda angle ah compare pannum, absolute length ah vida direction ah dhan athiga focus pannum. Example ku angle theta zero-ku close ah irundha, cos(theta) one-ku close ah varum, athu rendu vectors similar nu artham. Angle 90 degree ah irundha, cos(theta) zero ah varum, athu orthogonal vectors, meaning rendukkum nerupa relation illa. Angle 180 degree ah irundha, cos(theta) negative one ah varum, athu completely opposite vectors. Inda concept yean use panranga na, rendu text pieces different amount of detail vechi irundhalum, same general intent ah express panna, cosine similarity rendum close nu kandupudikum. Aana oru important warning irukku, cosine similarity "truth" nu puriyadhu, idhu meaning similarity mattum dhan kaatum. Rendu false statements kooda semantically similar ah irukalam, rendu harmful instructions kooda similar ah irukalam, rendu text topic-la close ah irundhu completely disagree pannalam. Example ku "JavaScript is the best language" and "JavaScript is the worst language" rendum JavaScript patha opinion pesurathala, embeddings similar ah varalam, aana meaning opposite. So embeddings relationships ah capture pannum, aana facts, intent, quality illa safety ah independent ah verify pannadhu.`,
    interviewDefinition: `Cosine similarity compares the angle between two vectors, focusing more on direction than on absolute length. When the angle (theta) between two vectors is close to 0 degrees, cos(theta) is close to 1, indicating similar vectors. When the angle is close to 90 degrees, cos(theta) is close to 0, indicating orthogonal (unrelated) vectors. When the angle is close to 180 degrees, cos(theta) is close to -1, indicating opposite vectors. This is useful because two pieces of text can contain different amounts of detail but still express the same general intent, and cosine similarity can detect that closeness despite length differences. However, cosine similarity does not "understand" truth, it only measures meaning-level closeness. Two false statements can be semantically similar, two harmful instructions can be semantically similar, and two texts can be close in topic while disagreeing completely. For example, "JavaScript is the best language" and "JavaScript is the worst language" may still have relatively similar embeddings because both discuss opinions about JavaScript, even though their meanings are opposite. Embeddings capture relationships, but they do not independently verify facts, intent, quality, or safety.`,
    example: `// Cosine Similarity example

function cosineSimilarity(vecA, vecB) {
  const dotProduct = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
  return dotProduct / (magnitudeA * magnitudeB);
}

// Case 1: Similar vectors (angle close to 0)
const x1 = [2, 5];
const y1 = [1, 2.4];
console.log(cosineSimilarity(x1, y1)); // close to 1 -> similar

// Case 2: Orthogonal vectors (angle close to 90)
const x2 = [0, 5];
const y2 = [5, 0];
console.log(cosineSimilarity(x2, y2)); // close to 0 -> unrelated

// Case 3: Opposite vectors (angle close to 180)
const x3 = [3, 2];
const y3 = [-3, -2];
console.log(cosineSimilarity(x3, y3)); // close to -1 -> opposite

// WARNING: High cosine similarity does NOT mean factual agreement
const opinionA = "JavaScript is the best language";
const opinionB = "JavaScript is the worst language";
// These may have relatively similar embeddings (same topic),
// even though their actual meaning/opinion is completely opposite.
// Embeddings capture relationships, NOT truth, intent, or safety.`
  },
  {
    id: 'embeddings-in-semantic-search',
    title: 'Embeddings in Semantic Search',
    category: 'AI',
    slangDefinition: `Traditional keyword search eduthukalam, oru student "How do I centre a div?" nu search pannudhu, aana document-la "Use CSS flexbox to horizontally and vertically align an element" nu irukku, rendu-layum exact words very few dhan share aagudhu. Purely keyword-based system idha struggle pannum, ஏன்னா exact word match illa. Embedding search idha vera maadhiri handle pannum, first user-oda query ah embedding ah convert pannuvanga, Query -> Query Vector, apparam ella documents-ayum embedding ah convert pannuvanga, Document -> Document Vector, apparam query vector ah document vectors kooda compare pannuvanga, last ah evanga highest semantic similarity irukura documents ah return pannuvanga. Idhu meaning-based search, exact word match theva illa. Aana keyword search ellame bad nu artham illa, "Hybrid Search" nu oru approach irukku, idhu rendum combine pannum. Enna na, Product ID, Error Code, important keyword, date, place, legal clauses madhiri things search pannanumna, keyword search exact match-ku romba accurate ah irukum, so idha embedding search-oda combine panna best result kidaikum.`,
    interviewDefinition: `In traditional keyword search, suppose a student searches "How do I centre a div?" while a document contains "Use CSS flexbox to horizontally and vertically align an element." The query and the document share very few exact words, so a purely keyword-based system may struggle to match them. Embedding search solves this differently: it converts the user's query into an embedding (Query → Query vector), converts every document into an embedding (Document → Document vector), compares the query vector with the document vectors, and returns the documents with the highest semantic similarity, regardless of exact word overlap. However, keyword search is not always bad. "Hybrid Search" combines both approaches, which is especially useful when searching for things like Product IDs, Error Codes, important keywords, dates, places, or legal clauses, where exact keyword matching is more reliable than semantic similarity alone.`,
    example: `// Embeddings in Semantic Search (conceptual)

// Traditional keyword search (exact word matching)
const query = "How do I centre a div?";
const document = "Use CSS flexbox to horizontally and vertically align an element.";

function keywordOverlap(a, b) {
  const wordsA = new Set(a.toLowerCase().split(" "));
  const wordsB = new Set(b.toLowerCase().split(" "));
  return [...wordsA].filter(w => wordsB.has(w));
}

console.log(keywordOverlap(query, document));
// Output: very few/no shared exact words -> keyword search struggles

// Embedding search approach
const queryVector = [0.21, -0.45, 0.78];       // Query -> embedding
const documentVector = [0.19, -0.42, 0.81];    // Document -> embedding

function cosineSimilarity(vecA, vecB) {
  const dot = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
  const magA = Math.sqrt(vecA.reduce((s, v) => s + v * v, 0));
  const magB = Math.sqrt(vecB.reduce((s, v) => s + v * v, 0));
  return dot / (magA * magB);
}

console.log(cosineSimilarity(queryVector, documentVector));
// High similarity score -> semantically relevant, even without exact word match

// Hybrid Search = combine keyword search + embedding search
// Useful for: Product IDs, Error Codes, exact keywords, dates, places, legal clauses
// where exact matching matters alongside semantic matching
function hybridSearch(query, document) {
  const keywordScore = keywordOverlap(query, document).length;
  const semanticScore = cosineSimilarity(queryVector, documentVector);
  return { keywordScore, semanticScore };
}

console.log(hybridSearch(query, document));`
  },
  {
    id: 'embedding-projector-visualization',
    title: 'Embedding Projector (N-Dimensional Visualization)',
    category: 'AI',
    referenceUrl: 'https://projector.tensorflow.org/',
    slangDefinition: `Namma humans ku 2D and 3D mattum dhan visually understand panna mudiyum, N-dimensional models (1000+ dimensions) ah namma directly imagine panna mudiyadhu. N dimensions ah 2D illa 3D ah "project" panna, namma understand panra madhiri oru website irukku. but indha 2D/3D visualization antha N-dimensional model-oda "actual" representation illa, idhu namma human visualization ku mattum convert pannadhu. Real relationships and distances high-dimensional space-la dhan exact ah irukum, 2D/3D-ku project panna konjo information loss aagum, aana overall pattern ah understand panna idhu help pannum.`,
    interviewDefinition: `Humans can only visually perceive up to 2D or 3D space, so we cannot directly understand or imagine N-dimensional embeddings, which often have 1000+ dimensions. To make these high-dimensional embeddings understandable, turn them down into 2D or 3D space for visualization purposes. One website is there. It is important to understand that this 2D/3D visualization is not the actual representation of the N-dimensional model, it is a simplified projection created purely for human visualization. The real relationships, distances, and patterns exist accurately only in the original high-dimensional space; projecting down to 2D/3D inevitably loses some information, but it still helps humans get an intuitive sense of how embeddings relate to each other.`,
    example: `// Embedding Projector concept (conceptual, not real computation)

// A real embedding vector might have 1000+ dimensions
const realEmbedding = [0.12, -0.45, 0.78, 0.33, /* ...996 more values... */];

console.log(realEmbedding.length); // e.g. 1000

// Humans cannot visualize 1000 dimensions directly.
// Tools like the Embedding Projector reduce dimensions
// (using techniques like PCA or t-SNE) down to 2D/3D
// ONLY for human visualization purposes.

const projectedTo2D = [4.2, 7.8]; // simplified x, y for visualization

// IMPORTANT:
// projectedTo2D is NOT the actual embedding.
// It's an approximation created to help humans
// visually explore relationships/clusters.
// Actual semantic relationships live in the
// full N-dimensional space, not in this 2D view.

Visualization tool: https://projector.tensorflow.org/`
  },
  {
    id: 'embeddings-for-different-data-types',
    title: 'Embeddings for Different Data Types',
    category: 'AI',
    slangDefinition: `Embedding nu solradhu oru word ku mattum limited aana concept illa, romba variety ah different things ku embedding iruka mudiyum. Example ku oru Token ku kooda embedding iruka mudiyum, oru Word ku kooda embedding iruka mudiyum, oru Line ku embedding iruka mudiyum, oru Paragraph full ah ethukum embedding create pannalaam. Idhu text mattum illa, Image ku kooda embedding iruka mudiyum, Audio ku kooda embedding iruka mudiyum, oru full PDF document ku kooda embedding iruka mudiyum. Idhu ella case-layum same concept dhan apply aagudhu, antha item ah numerical vector ah convert panni, adhoda meaning/patterns ah capture pannuradhu, whatever type of data ah irundhalum.`,
    interviewDefinition: `Embeddings are not limited to just words, they can be generated for many different types of data and at different levels of granularity. A single Token can have an embedding, a Word can have an embedding, a Line of text can have an embedding, and even a full Paragraph can have an embedding. This concept also extends beyond text: an Image can have an embedding, Audio can have an embedding, and even an entire PDF document can have an embedding. In every case, the same underlying idea applies, the item is converted into a numerical vector that captures its meaning or patterns, regardless of whether the input is text, image, audio, or a document.`,
    example: `// Embeddings can exist for many different data types/levels

const embeddingExamples = {
  token: {
    input: "play",
    embedding: [0.12, 0.45, -0.33] // example vector
  },
  word: {
    input: "JavaScript",
    embedding: [0.81, -0.22, 0.56]
  },
  line: {
    input: "console.log('Hello World');",
    embedding: [0.19, 0.67, -0.41, 0.05]
  },
  paragraph: {
    input: "This paragraph explains how closures work in JavaScript...",
    embedding: [0.33, -0.12, 0.78, 0.44, 0.09]
  },
  image: {
    input: "cat_photo.jpg",
    embedding: [0.65, -0.34, 0.21, 0.88]
  },
  audio: {
    input: "voice_note.mp3",
    embedding: [0.14, 0.72, -0.19, 0.53]
  },
  pdf: {
    input: "research_paper.pdf",
    embedding: [0.29, -0.61, 0.47, 0.18]
  }
};

// Same underlying idea for every type:
// Convert the item into a numerical vector
// that captures its meaning/patterns.

console.log(embeddingExamples.image);
// Output: { input: "cat_photo.jpg", embedding: [0.65, -0.34, 0.21, 0.88] }`
  },
  {
    id: 'token-embeddings',
    title: 'Token Embeddings',
    category: 'AI',
    slangDefinition: `Full flow ah paathoma, "Words -> Tokens -> Token IDs -> Embeddings" nu oru process irukku. First step la, "I love Apple" nu text ah tokenizer, small pieces ah break pannum, "I", " love", " App", "le" nu varalam, token nu solradhu always oru full word ah irukanum nu rule illa. ovvoru token ku model vocabulary la irundhu oru number assign pannuvanga, adha Token ID nu solvom, example ku "I" -> 40, " love" -> 892, " App" -> 15432, "le" -> 15 nu varalam. Idhula oru romba important point irukku, Token ID ku edhavum mathematical meaning illa, "love" ku 892 nu irundhalum "hate" ku 451 nu irundhalum, 892-um 451-um numbers-la close ah illa far ah irundhalum, adhukum rendu words relation-ku edhavum sambandham illa, idhu just oru meaningless index mattum dhan. Next step la, model oru "embedding table" nu solra huge lookup table use pannudhu, idhula ovvoru Token ID ku against oru dense vector irukum, example ku Token ID 40 ku [0.12, -0.45, 0.78, ...] nu vector kidaikum. Idhu dhan Token ID ah meaningful dense numerical vector ah convert pannudhu, idha "Embedding Lookup" nu solvom. Final ah namma puriyanum na, Token ID and Embedding rendum vera vera, Token ID nu solradhu just oru index, row number madhiri, Embedding nu solradhu antha row-la irukura actual learned dense numerical vector. Analogy ah paathanga na, Employee Name -> Employee ID -> Employee Record madhiri, ID antha record ah fetch panna help pannum, aana actual useful data irukradhu record-la dhan. Final ah indha vector dhan model ku antha token-oda initial representation ah irukum, aana context process pannumbodhu idhu change aagalam.`,
    interviewDefinition: `The complete flow from text to embeddings follows these steps: Words → Tokens → Token IDs → Embeddings. First, a tokenizer breaks text like "I love Apple" into smaller pieces called tokens, such as "I", " love", " App", "le", since a token does not necessarily equal a full word. each token is mapped to a Token ID from the model's vocabulary, for example "I" → 40, " love" → 892, " App" → 15432, "le" → 15. Importantly, a Token ID has no inherent mathematical meaning; numerical closeness or distance between IDs (like "love" → 892 and "hate" → 451) does not imply any relationship between the words, it is simply a meaningless index. Third, the model uses an embedding table, essentially a large lookup table, where each Token ID maps to a dense numerical vector. For example, Token ID 40 might map to [0.12, -0.45, 0.78, ...]. This is called an Embedding Lookup, and it replaces the meaningless token ID with a meaningful dense numerical vector. A key distinction is that Token ID ≠ Embedding: the Token ID is just an index telling the model which row to retrieve, while the Embedding is the actual learned vector retrieved from that row, analogous to how an Employee ID points to an Employee Record. This embedding vector becomes the model's initial representation of the token, though this representation may later change as the model processes surrounding context.`,
    example: `// Complete flow: Words -> Tokens -> Token IDs -> Embeddings

const text = "I love Apple";

// Step 1: Text -> Tokens
const tokens = ["I", " love", " App", "le"];

// Step 2: Tokens -> Token IDs (just meaningless indexes)
const tokenIds = [40, 892, 15432, 15];

// Note: Token ID closeness has NO mathematical meaning
// e.g. "love" -> 892 and "hate" -> 451
// 892 is not "more related to" 451 just because of number proximity

// Step 3: Token IDs -> Embeddings (via embedding lookup table)
const embeddingTable = {
  40:    [0.12, -0.45, 0.78],
  892:   [0.31, 0.22, -0.19],
  15432: [-0.51, 0.83, 0.14],
  15:    [-0.11, -0.13, 0.94]
};

const embeddings = tokenIds.map(id => embeddingTable[id]);
console.log(embeddings);
// Output:
// [
//   [0.12, -0.45, 0.78],
//   [0.31, 0.22, -0.19],
//   [-0.51, 0.83, 0.14],
//   [-0.11, -0.13, 0.94]
// ]

// Analogy: Employee Name -> Employee ID -> Employee Record
// "Chennai" -> 15432 -> [0.51, 0.83, -0.14, ...]
// Token ID = index (which row to fetch)
// Embedding = actual vector retrieved from that row

// This embedding becomes the token's INITIAL representation,
// but it may change later as the model processes surrounding context.`
  },
  {
    id: 'positional-embedding',
    title: 'Positional Embedding',
    category: 'AI',
    slangDefinition: `"Dog bites man" and "Man bites dog" nu rendu sentences-layum same words dhan irukku, "Dog", "bites", "man", aana meaning completely vera, because word order change aagiduchu. so, Token Embeddings mattum podha dhu, token embedding means antha token enna nu identify pannum, aana antha token sentence-la enda position-la irukunu solladhu. So model ku word order ah puriyanumna, order/position information um venum. Idhukaga model "Positional Embedding" nu oru technique use pannum, idhu ovvoru token-ku adhu sentence-la edhu position-la irukunu oru sense kudukum. Simple ah solanumna, Token Embedding token identity ah represent pannum, Positional Embedding position ah represent pannum. Model ku rendum venum, identity and order rendum sonna dhan correct meaning model ku puriyum.`,
    interviewDefinition: `Consider the sentences "Dog bites man" and "Man bites dog". Both sentences contain the exact same words, but the meaning is completely different because the word order changes. This demonstrates a key limitation: token embeddings alone identify which tokens are present, but they do not tell the model about the order or position of those tokens within the sentence. To solve this, models incorporate positional information using architecture-specific techniques, commonly known as Positional Embedding. Positional embedding is a technique used by large language models to give words a sense of order and sequence in a sentence. In short, the token embedding tells the model which token is present, while the positional embedding tells the model where that token appears in the sequence. The model needs both identity (token embedding) and order (positional embedding) to correctly understand meaning.`,
    example: `// Positional Embedding example (conceptual)

const sentence1 = ["Dog", "bites", "man"];
const sentence2 = ["Man", "bites", "dog"];

// Token embeddings alone (identity only) would look similar
// since both sentences use the same set of words
const tokenEmbeddings = {
  Dog:   [0.21, 0.55, -0.12],
  Man:   [0.18, 0.49, -0.09],
  bites: [0.63, -0.21, 0.44]
};

// Without position info, the model can't tell these apart:
// ["Dog", "bites", "man"] vs ["Man", "bites", "dog"]

// Positional embeddings add position-specific info
const positionalEmbeddings = {
  position0: [0.01, 0.02, 0.00],
  position1: [0.03, -0.01, 0.02],
  position2: [-0.02, 0.04, 0.01]
};

// Final representation = Token Embedding + Positional Embedding
function finalRepresentation(token, position) {
  const tokenVec = tokenEmbeddings[token];
  const posVec = positionalEmbeddings[position];
  return tokenVec.map((val, i) => val + posVec[i]);
}

console.log(finalRepresentation("Dog", "position0"));
// Dog at position 0 -> different final vector than...
console.log(finalRepresentation("Dog", "position2"));
// ...Dog at position 2, even though token embedding is same.

// This is how the model distinguishes
// "Dog bites man" from "Man bites dog".`
  },
  {
    id: 'token-vs-text-embeddings',
    title: 'Token Embeddings vs Text Embeddings',
    category: 'AI',
    slangDefinition: `Token Embedding and Text Embedding rendum completely vera purpose. Token Embedding na, "I love JavaScript" nu sentence eduthukalam, idhu first tokens ah break aagum, "I", "love", "JavaScript" nu, apparam ovvoru token ku thaniya oru vector kidaikum, example [12, 214, 18273] nu token IDs, apparam ovvoru ID ku [0.12, -0.32, 0.08...] madhiri vector. Idhu dhan Token Embedding, ovvoru individual piece ku thaniya vector, idhu model ku sequence ah internally process panna help pannum. Aana Text Embedding na full sentence/paragraph/document ku total aa "one vector" mattum kidaikum, example [0.02, 0.31, -1.81...] nu oru single vector full sentence "I love JavaScript" ku represent pannum. Idhu usually Search, Retrieval, Clustering, Recommendations, Classification, Duplicate detection madhiri tasks ku specifically produce pannuvanga. So "embedding" nu kekumbodhu always kekanum, "embedding of what, and for which task?" nu, token-ku ah illa full text-ku ah nu clarify pannikanum. Summary ah solanumna, Token Embeddings LLM ku individual tokens process panna help pannum, Text Embeddings applications ku periya content pieces ah compare panna retrieve panna help pannum.`,
    interviewDefinition: `Both Token Embeddings and Text Embeddings serve different purposes. Token Embeddings convert individual pieces of words (tokens) into numbers to help a model read and process a sequence internally. For example, "I love JavaScript" is broken into tokens, converted to Token IDs like [12, 214, 18273], and each ID is mapped to its own vector like [0.12, -0.32, 0.08...]. Text Embeddings, on the other hand, often called sentence or document embeddings, turn an entire sentence, paragraph, or document into a single mathematical summary vector, such as [0.02, 0.31, -1.81...] representing the whole sentence "I love JavaScript" as one vector. Text embeddings are typically produced specifically for tasks such as Search, Retrieval, Clustering, Recommendations, Classification, and Duplicate detection. Since the word "embedding" can refer to both concepts, it's important to always clarify: an embedding of what, and for which task? In summary, token embeddings help an LLM process individual tokens, while text embeddings help applications compare and retrieve larger pieces of content.`,
    example: `// Token Embeddings vs Text Embeddings

const sentence = "I love JavaScript";

// 1. Token Embeddings (one vector per token)
const tokens = ["I", "love", "JavaScript"];
const tokenIds = [12, 214, 18273];

const tokenEmbeddings = [
  [0.12, -0.32, 0.08],   // embedding for "I"
  [0.41, 0.73, -0.12],   // embedding for "love"
  [0.12, 0.43, 0.87]     // embedding for "JavaScript"
];

console.log(tokenEmbeddings.length); // 3 -> one vector PER token
// Used internally by the LLM to process the sequence

// 2. Text Embedding (one vector for the ENTIRE sentence)
const textEmbedding = [0.02, 0.31, -1.81]; // single summary vector

console.log(textEmbedding.length); // represents the WHOLE sentence
// Used for tasks like search, retrieval, clustering,
// recommendations, classification, duplicate detection

// Key question to always ask:
// "An embedding of WHAT, and for WHICH task?"
// - Token embedding -> helps LLM process individual tokens
// - Text embedding -> helps applications compare/retrieve content`
  },
  {
    id: 'static-vs-contextual-meaning',
    title: 'Static vs Contextual Meaning',
    category: 'AI',
    slangDefinition: `"I ate an Apple after lunch" and "Apple released a new device", rendu sentences-layum "Apple" word use aagudhu, aana rendu meaning completely vera, onnu fruit, innonu company. Oru simple static embedding system use panna, "apple" word ku oru fixed vector mattum assign pannuvanga, antha single vector rendu meaning-um represent pannanum, idhu problem create pannum. Idhu dhan "polysemy" nu solra concept, oru word ku multiple meanings iruka mudiyum, meaning context mele dhan depend aagum. "contextual representations" nu technique use panni. Idhula oru token-oda representation, adha surrouding words vechi change aagikittu irukum. So same token "Apple" different sentences-la different contextual representations develop pannum, sentence context enna irukunu based ah.`,
    interviewDefinition: `Consider the sentences "I ate an Apple after lunch" and "Apple released a new device". Both sentences use the word "Apple", but it carries completely different meanings, a fruit in one case and a company in the other. A simple static embedding system may assign one fixed vector to the word "apple", and that single vector would somehow need to represent both meanings, which creates a problem. This happens because words can have multiple meanings depending on context, a phenomenon called polysemy. where the representation of a token changes based on the surrounding words. As a result, the same token can develop different contextual representations depending on the sentence around it.`,
    example: `// Static vs Contextual Meaning

// Static embedding (WRONG approach for polysemy)
// One fixed vector for "apple" regardless of context
const staticEmbedding = {
  apple: [0.21, 0.55, -0.12] // same vector used everywhere
};

const sentence1 = "I ate an Apple after lunch";   // fruit meaning
const sentence2 = "Apple released a new device";  // company meaning

// Problem: staticEmbedding.apple is IDENTICAL for both sentences,
// even though the meanings are completely different (polysemy).

// Contextual representation (modern approach)
function getContextualEmbedding(token, surroundingWords) {
  // In real models, this is computed dynamically using
  // attention over the surrounding context, not a fixed lookup.
  if (surroundingWords.includes("ate") || surroundingWords.includes("lunch")) {
    return [0.21, 0.55, -0.12]; // leans toward "fruit" meaning
  }
  if (surroundingWords.includes("released") || surroundingWords.includes("device")) {
    return [0.78, -0.33, 0.19]; // leans toward "company" meaning
  }
}

console.log(getContextualEmbedding("Apple", ["ate", "lunch"]));
// Output: [0.21, 0.55, -0.12] -> fruit context

console.log(getContextualEmbedding("Apple", ["released", "device"]));
// Output: [0.78, -0.33, 0.19] -> company context

// Same token "Apple" -> different vectors based on surrounding context`
  },
  {
    id: 'contextualisation',
    title: 'Contextualisation',
    category: 'AI',
    slangDefinition: `"Context modifies representation" nu oru simple line-la summarise pannalaam idha. Example paakalaam, "I deposited money in the bank" and "We sat on the bank of the river" rendu sentences-layum "bank" word irukku, aana meaning vera, financial institution and river edge. Antha maadhiri "bat" word ku kooda "He hit the ball with a bat" and "A bat flew out of the cave" nu rendu vera meanings irukku. "Java" word ku moonu meanings kooda varalaam, programming language, island, illa coffee. Transformer-based language model-la, oru token first oru initial token embedding irukum, apparam model antha token ah adha surrounding other tokens kooda process pannum. Multiple layers process aana apram, antha representation "contextualised" aagidum, meaning antha token-oda final representation sentence-la irukura context mele depend aagum. So "bank" word-oda initial token embedding same ah start aana, "I deposited money in the bank" sentence-la irukura "bank" and "We sat beside the river bank" sentence-la irukura "bank", rendum model process panna aprom different internal representations ah maarum, athanaala model correct ah meaning puriyum.`,
    interviewDefinition: `Contextualisation refers to how modern LLMs handle words with multiple meanings. Consider examples like "I deposited money in the bank" vs "We sat on the bank of the river" (bank = financial institution vs riverbank), "He hit the ball with a bat" vs "A bat flew out of the cave" (bat = sports equipment vs animal), and "Java is a programming language" vs "Java is an island" vs "I ordered Java at the café" (three different meanings of Java). In a transformer-based language model, a token first receives an initial token embedding, and then the model processes it together with the surrounding tokens. Through multiple layers, this representation becomes contextualised, meaning the representation of "bank" in "I deposited money in the bank" can become different from the representation of "bank" in "We sat beside the river bank". In short, the initial token embedding may start out the same, but after the model processes the complete sentence, its internal representation changes according to the surrounding context, captured in the phrase "context modifies representation".`,
    example: `// Contextualisation in Transformer-based models (conceptual)

const sentence1 = "I deposited money in the bank";
const sentence2 = "We sat beside the river bank";

// Step 1: Both start with the SAME initial token embedding
const initialTokenEmbedding = {
  bank: [0.25, -0.10, 0.63] // same starting vector in both sentences
};

// Step 2: Model processes token together with surrounding context
// through multiple transformer layers (self-attention, etc.)

function contextualize(token, surroundingTokens) {
  if (surroundingTokens.includes("deposited") || surroundingTokens.includes("money")) {
    return [0.81, -0.44, 0.12]; // financial institution meaning
  }
  if (surroundingTokens.includes("river") || surroundingTokens.includes("sat")) {
    return [-0.30, 0.52, 0.19]; // riverbank meaning
  }
  return initialTokenEmbedding[token];
}

console.log(contextualize("bank", ["deposited", "money"]));
// Output: [0.81, -0.44, 0.12] -> financial sense

console.log(contextualize("bank", ["river", "sat"]));
// Output: [-0.30, 0.52, 0.19] -> riverbank sense

// Initial embedding was the SAME for "bank" in both cases,
// but after processing through the model's layers with context,
// the representations DIVERGE based on surrounding words.`
  },
  {
    id: 'embeddings-use-cases',
    title: 'Embeddings in Recommendation, Clustering & RAG',
    category: 'AI',
    slangDefinition: `Embeddings romba different use cases-la use aagum. First, "Recommendation" systems-la use aagum, example ku YouTube Algorithm illa Social Media Timeline, idhula user interests and content ah embeddings ah convert panni, similar items ah recommend pannuvanga. Rendavadhu, "Clustering" la use aagum, example ku thousands of student questions, comments, messages irukum bodhu, idha group panna, support tickets ah grouping panna, illa repeated/duplicate content ah detect panna embeddings help pannum, similar meaning content-ah automatic ah cluster pannidum. Moonavadhu, "RAG" (Retrieval Augmented Generation) nu solra technique-la embeddings use aagum, idhula similarity search chunks-la pannuvanga, meaning relevant document chunks ah embeddings vechi kandupudichu, antha chunks ah model ku context ah kudukuvanga, better answers kudukarathukaga.`,
    interviewDefinition: `Embeddings are used across several practical applications. In Recommendation systems, such as YouTube's algorithm or social media timelines, embeddings represent user interests and content so that similar items can be recommended. In Clustering, embeddings are used to group thousands of student questions, comments, or messages, group support tickets, or detect repeated/duplicate content by identifying items with similar meaning. In RAG (Retrieval Augmented Generation), embeddings are used to perform similarity search across chunks of text, retrieving the most relevant pieces of content as context to help a model generate better, more grounded answers.`,
    example: `// Embeddings use cases: Recommendation, Clustering, RAG

// 1. Recommendation (e.g. YouTube algorithm, social media timeline)
const userInterestEmbedding = [0.42, -0.18, 0.67];
const videoEmbeddings = {
  video1: [0.40, -0.20, 0.65], // close to user interest -> recommend
  video2: [-0.80, 0.55, 0.12]  // far from user interest -> skip
};

// 2. Clustering (e.g. grouping support tickets, detecting duplicates)
const ticketEmbeddings = [
  { id: "T1", text: "App crashes on login", vector: [0.3, 0.5, -0.2] },
  { id: "T2", text: "Application closes after sign in", vector: [0.31, 0.48, -0.19] }, // near-duplicate
  { id: "T3", text: "Payment page is slow", vector: [-0.6, 0.1, 0.4] }
];
// T1 and T2 cluster together -> likely duplicate/related tickets

// 3. RAG (Retrieval Augmented Generation)
// Similarity search across document chunks
const queryEmbedding = [0.21, 0.44, -0.12];
const documentChunks = [
  { chunk: "Chunk about refund policy", vector: [0.19, 0.46, -0.10] },
  { chunk: "Chunk about shipping info", vector: [-0.55, 0.20, 0.33] }
];
// Retrieve the chunk closest to queryEmbedding
// -> feed it as context to the model for a grounded answer`
  },
  {
    id: 'embedding-misconceptions',
    title: 'Embedding Misconceptions',
    category: 'AI',
    slangDefinition: `Embeddings patha romba per oru soru misconceptions vechirupanga, antha ella misconceptions ah correct pannalaam. First misconception, "embedding is a dictionary of tokens" nu nenaikanga, aana actual ah embedding nu solradhu oru numerical representation, antha item ku irukura learned relationships ah capture pannuradhu. Rendavadhu misconception, "each dimension has one clear human meaning" nu nenaikanga, aana meaning oru single dimension-la illa, pala dimensions full-layum distribute ah irukum. Moonavadhu misconception, "similar embeddings mean identical meaning" nu nenaikanga, aana similar embeddings topic similarity, association, opposition, category membership, illa shared context ah kooda indicate pannalaam, exact ah identical meaning solla theva illa. Naalavadhu misconception, "embedding similarity proves a statement is true" nu nenaikanga, aana similarity nu solradhu relatedness ah measure pannum, truth ah illa. Anjavadhu misconception, "one embedding model works equally well for every task" nu nenaikanga, aana performance language, domain, data type, text length, training objective ellam mele depend aagum. Aaravadhu misconception, "visual clusters perfectly represent the original space" nu nenaikanga, aana 2D/3D projections information lose pannidum, exact ah original high-dimensional space ah represent pannadhu. Easavadhu misconception, "a larger embedding dimension is always better" nu nenaikanga, aana larger representations storage, latency, cost, and quality-la trade-offs create pannidum, so always bigger-nu nalladhu nu artham illa.`,
    interviewDefinition: `There are several common misconceptions about embeddings that are important to clarify. Misconception 1: An embedding is a dictionary of tokens. Reality: An embedding is a numerical representation capturing learned relationships. Misconception 2: Each dimension has one clear human meaning. Reality: Meaning is distributed across many dimensions, not isolated to a single one. Misconception 3: Similar embeddings mean identical meaning. Reality: They may indicate topic similarity, association, opposition, category membership, or shared context, not necessarily identical meaning. Misconception 4: Embedding similarity proves a statement is true. Reality: Similarity measures relatedness, not truth. Misconception 5: One embedding model works equally well for every task. Reality: Performance depends on factors like language, domain, data type, text length, and training objective. Misconception 6: Visual clusters perfectly represent the original space. Reality: Two-dimensional and three-dimensional projections lose information compared to the original high-dimensional space. Misconception 7: A larger embedding dimension is always better. Reality: Larger representations create trade-offs in storage, latency, cost, and quality, so bigger is not automatically better.`,
    example: `// Common Embedding Misconceptions vs Reality

const embeddingMisconceptions = [
  {
    misconception: "An embedding is a dictionary of tokens",
    reality: "An embedding is a numerical representation capturing learned relationships"
  },
  {
    misconception: "Each dimension has one clear human meaning",
    reality: "Meaning is distributed across many dimensions"
  },
  {
    misconception: "Similar embeddings mean identical meaning",
    reality: "They may indicate topic similarity, association, opposition, category membership, or shared context"
  },
  {
    misconception: "Embedding similarity proves a statement is true",
    reality: "Similarity measures relatedness, not truth"
  },
  {
    misconception: "One embedding model works equally well for every task",
    reality: "Performance depends on language, domain, data type, text length, training objective, etc."
  },
  {
    misconception: "Visual clusters perfectly represent the original space",
    reality: "2D/3D projections lose information compared to the original high-dimensional space"
  },
  {
    misconception: "A larger embedding dimension is always better",
    reality: "Larger representations create trade-offs in storage, latency, cost, and quality"
  }
];

embeddingMisconceptions.forEach(item => {
  console.log("Myth:", item.misconception);
  console.log("Fact:", item.reality);
  console.log("---");
});`
  },
  {
    id: 'llm-next-token-prediction',
    title: 'LLM as a Next Token Predictor (Neural Network)',
    category: 'AI',
    slangDefinition: `Basically LLM nu solradhu oru "next word predictor" dhan. Example ku "The pizza is" nu oru sentence eduthukalam, idhula ovvoru token ku first oru Token ID kidaikum, "The" -> 23, "pizza" -> 46, "is" -> 73 nu. Apparam ovvoru Token ID um oru embedding vector ah convert aagum, example ku [0.1, 0.6, 1.2, -7.5, ...] nu. Indha embedding values ellam input ah oru "Neural Network" ku pogum. Neural Network nu solradhu, embedding values ah eduthukittu next token enna varum nu predict panna use panra algorithm. Idhu already "trained" aana model, so training time-la neraya text paathu patterns learn pannirukum. Neural Network antha input ah process panni, vocabulary-la irukura ella tokens ku oru probability score kudukum, example ku "hot" -> 0.68, "ready" -> 0.75, "delicious" -> 0.56, "round" -> 0.66, "cold" -> 0.40, aana "potato" -> 0.01, "bright" -> 0.02, "lazy" -> 0.08, "fast" -> 0.21 nu varum. Idhula "pizza is" ku apparam "ready", "hot", "delicious" madhiri words ku high score, "potato", "bright" madhiri words ku romba low score irukum, since, antha words context ku match aagadhu, how  hot and ready ku ivlo marks means, inda maadiri sentence naraya training data laa irukum. Finally highest probability irukura token ah next token ah select pannidum, apparam adha adutha input oda serthu mela repeat pannum, apdi dhan oru full sentence generate aagum.`,
    interviewDefinition: `At its core, an LLM is a next token predictor. Given an input like "The pizza is", each word is first converted into a Token ID (for example, "The" → 23, "pizza" → 46, "is" → 73), and each Token ID is then converted into an embedding vector. These embedding values are fed as input into a neural network, which is the algorithm that processes them to predict the next token. The neural network is already trained on large amounts of text, so it has learned patterns of language. Given the input, it outputs a probability score for every token in its vocabulary, for example "hot" → 0.68, "ready" → 0.75, "delicious" → 0.56, "round" → 0.66, "cold" → 0.40, while unlikely tokens such as "potato" → 0.01, "bright" → 0.02, "lazy" → 0.08, and "fast" → 0.21 receive very low scores. how hot and ready gets highest token means, it heared lot's of times from training data. The most suitable token is then selected as the next token, appended to the input, and the process repeats to generate a complete response one token at a time.`,
    imageUrl: 'llm-prediction-overview.png',
    example: `// LLM as a Next Token Predictor (conceptual)

// Step 1: Text -> Token IDs
const text = "The pizza is";
const tokenIds = [23, 46, 73];

// Step 2: Token IDs -> Embeddings
const embeddingTable = {
  23: [0.1, 0.6, 1.2],
  46: [-0.46, -0.64, 0.52],
  73: [0.52, -0.6, 0.8]
};
const inputEmbeddings = tokenIds.map(id => embeddingTable[id]);

// Step 3: Embeddings -> Neural Network (already trained)
// The network processes the input and outputs a probability score
// for EVERY token in its vocabulary
function neuralNetwork(embeddings) {
  return {
    ready: 0.75,
    hot: 0.68,
    round: 0.66,
    delicious: 0.56,
    cold: 0.40,
    fast: 0.21,
    lazy: 0.08,
    bright: 0.02,
    potato: 0.01
  };
}

const predictions = neuralNetwork(inputEmbeddings);

// Step 4: Pick the most suitable next token
const nextToken = Object.entries(predictions)
  .sort((a, b) => b[1] - a[1])[0][0];

console.log(nextToken);
// Output: "ready"

// Step 5: Append the predicted token and repeat
// "The pizza is ready" -> predict next token again...
// This loop is how an LLM generates a full response, one token at a time.`
  },
  {
    id: 'chatgpt-gpt-meaning',
    title: 'ChatGPT: What is GPT (Generative Pre-trained Transformer)',
    category: 'AI',
    slangDefinition: `ChatGPT-la irukura "GPT" nu solradhu oru short form, G = Generative, P = Pre-trained, T = Transformer. Generative na, idhu pudhusa content generate pannum, text eduthukittu next token predict panni, sentence sentence ah create pannum. Pre-trained na, model ah already periya amount of text data vachi mundhiye train pannitanga, so namma use panra time-la adhu already language patterns ah learn pannirukum. Transformer na oru type of neural network architecture, idhu sequences of information ah "attention" use panni process panna design pannadhu. Idhu 2017-la "Attention Is All You Need" nu oru paper-la introduce pannanga. Transformers-ku munnadi, sequence models-ku RNNs and LSTMs madhiri architectures dhan commonly use pannanga, aana avanga text ah romba sequential ah, oru oru word ah order-la process pannanga. Transformer vandha pinnadi, attention vechi sentence-la irukura words-oda relationship ah better ah handle panna mudinjidhu, adhanaala dhan modern LLMs ellam Transformer base-la irukku.`,
    interviewDefinition: `GPT stands for Generative Pre-trained Transformer. Generative means the model can generate new content, such as text, by predicting the next token repeatedly. Pre-trained means the model has already been trained on large amounts of data before being used, so it has learned language patterns in advance. Transformer refers to the underlying architecture: a Transformer is a type of neural network architecture designed to process sequences of information using attention. It was introduced in the 2017 paper "Attention Is All You Need". Before Transformers, sequence models commonly used architectures such as RNNs and LSTMs, which processed text more sequentially. Transformers use attention to model relationships between tokens more effectively, which is why most modern LLMs, including ChatGPT, are built on this architecture.`,
    example: `// GPT = Generative + Pre-trained + Transformer

const gpt = {
  G: "Generative",   // generates new content (next token by next token)
  P: "Pre-trained",  // already trained on large data before we use it
  T: "Transformer"   // neural network architecture that uses attention
};

console.log(gpt);

// Transformer background
const transformer = {
  whatItIs: "A neural network architecture that processes sequences using attention",
  introducedIn: "2017 paper 'Attention Is All You Need'",
  before: ["RNN", "LSTM"] // processed text more sequentially
};

// Conceptual comparison
function sequentialModel(tokens) {
  // RNN / LSTM style: one token after another, in strict order
  tokens.forEach(token => console.log("processing", token));
}

function transformerModel(tokens) {
  // Transformer style: attention looks at relationships
  // between ALL tokens in the sequence together
  tokens.forEach(token => {
    console.log("attending", token, "to", tokens.filter(t => t !== token));
  });
}

transformerModel(["The", "pizza", "is"]);`
  },
  {
    id: 'attention-and-self-attention',
    title: 'Attention & Self-Attention',
    category: 'AI',
    slangDefinition: `Attention nu solradhu model ku oru question-ku answer kudukura mechanism: "Ippo enna information-ku focus pannanum, and evlo focus pannanum?" nu. Idhu "Attention Is All You Need" paper-la solra main idea. Example ku rendu sentences paarunga, "The cat sat on the mat because it was tired" and "The cat sat on the mat because it was soft". Rendu sentences-layum "it" word irukku, aana first sentence-la "it" na cat, because tired aagradhu cat dhan. Rendavadhu sentence-la "it" na mat, because soft aagradhu mat dhan. Namma human ku idhu easy ah puriyum, aana model ku "it" enda word ah refer pannudhu nu epdi theriyum? Idhukku dhan Attention venum. Model "it" word ah, input-la irukura previous words kooda compare panni, antha words-oda relation ah kandupidichu, edhu word ku athiga importance kudukanum nu decide pannum. "Self-Attention" na, same sequence-la irukura tokens ku naduvula attention nadakkum, meaning each token antha same sentence-la irukura mathu tokens ah paakalam. another example, "I went to the bank to deposit money" and "I sat on the bank of the river" rendu sentences-layum "bank" word irukku, aana meaning vera. Surrounding words ah attention vechi paathaadhan "bank" enna meaning nu model ku puriyum, adhanaala dhan contextual representation possible aagudhu.`,
    interviewDefinition: `Attention is a mechanism that lets a model decide which pieces of information to focus on at a given moment, and how much weight to give each one. It was the core idea of the 2017 paper "Attention Is All You Need". Consider "The cat sat on the mat because it was tired" versus "The cat sat on the mat because it was soft". In the first sentence "it" refers to the cat, and in the second it refers to the mat. A model must work out which earlier word "it" relates to, and attention solves this by finding the relationship between a token and the other words in the input. Self-attention means attention between tokens of the same sequence: each token can look at the other tokens in that same sentence. Another example. In "I went to the bank to deposit money" and "I sat on the bank of the river", the word "bank" only gets its correct meaning from the surrounding words. Attention lets the model use that context, which makes contextual representations possible.`,
    example: `// Attention & Self-Attention (conceptual)

const sentence1 = ["The", "cat", "sat", "on", "the", "mat", "because", "it", "was", "tired"];
const sentence2 = ["The", "cat", "sat", "on", "the", "mat", "because", "it", "was", "soft"];

// Self-attention: the token "it" looks at the other tokens
// in the SAME sentence and assigns each one an attention weight.
// (Illustrative numbers, real models learn these weights.)

const attentionForIt_sentence1 = {
  The: 0.02, cat: 0.62, sat: 0.03, on: 0.01, the: 0.02,
  mat: 0.10, because: 0.03, was: 0.05, tired: 0.12
};
// "tired" fits a cat -> "it" attends most to "cat"

const attentionForIt_sentence2 = {
  The: 0.02, cat: 0.12, sat: 0.03, on: 0.01, the: 0.02,
  mat: 0.60, because: 0.03, was: 0.05, soft: 0.12
};
// "soft" fits a mat -> "it" attends most to "mat"

function mostAttendedWord(weights) {
  return Object.entries(weights).sort((a, b) => b[1] - a[1])[0][0];
}

console.log(mostAttendedWord(attentionForIt_sentence1)); // "cat"
console.log(mostAttendedWord(attentionForIt_sentence2)); // "mat"

// Same idea resolves ambiguous words like "bank":
// "I went to the bank to deposit money."  -> attends to "deposit", "money" -> financial bank
// "I sat on the bank of the river."       -> attends to "sat", "river"     -> river bank`
  },
  {
    id: 'llm-architecture-flow',
    title: 'LLM Architecture Flow',
    category: 'AI',
    slangDefinition: `Idhu oru LLM-kulla input enna ellam step-la process aagi, next token ah output aagudhu nu kaatura flow. "How to predict" nu input varudhu, adhu Token IDs ah maarum, apparam Token Embedding and Positional Embedding rendum add aagum. Adhu Transformer block kulla pogum, adhula layer norm, multi-head causal self-attention, feed forward ellam irukum, rendu idathula residual connection (+) irukum. Last ah layer norm, linear, softmax vazhiya poi next token probabilities varum, adhula highest token select aagi input-oda serthu, intha loop repeat aagum.`,
    interviewDefinition: `This diagram shows the end-to-end flow inside a Transformer-based LLM. Input text is converted into Token IDs, then Token Embeddings are combined with Positional Embeddings. The result passes through Transformer blocks, each containing layer normalization, multi-head causal self-attention, and a feed-forward network, with residual connections around both sub-layers. The output then goes through a final layer norm, a linear layer, and a softmax, which produces next-token probabilities. The selected token is appended to the input and the loop repeats.`,
    imageUrl: 'llm-architecture.png',
    referenceUrl:'https://bbycroft.net/llm',
    example: `Input: "How to predict"
                              |
                              v
                            Token IDs: [2437, 284, 4331]
                              |
                              v
+------------------------------ LLM ------------------------------+
|                                                                  |
|               tok embed (Token Embedding)                        |
|                        |                                         |
|                        v                                         |
|           (+) <--- pos embed (Positional Embedding)              |
|                        |                                         |
|                        v                                         |
|   +--------------- Transformer block (i) ---------------+        |
|   |                                                     |        |
|   |                 layer norm                          |        |
|   |                     |                               |        |
|   |                     v                               |        |
|   |         multi-head, causal self-attention           |        |
|   |                     |                               |        |
|   |                     v                               |        |
|   |    (+) <--- residual connection (from block input)  |        |
|   |                     |                               |        |
|   |                     v                               |        |
|   |                layer norm                           |        |
|   |                     |                               |        |
|   |                     v                               |        |
|   |               feed forward                          |        |
|   |                     |                               |        |
|   |                     v                               |        |
|   |    (+) <--- residual connection                     |        |
|   |                                                     |        |
|   +-----------------------------------------------------+        |
|                         |                                        |
|                         v                                        |
|                     layer norm                                   |
|                         |                                        |
|                         v                                        |
|                       linear                                     |
|                         |                                        |
|                         v                                        |
|                      softmax                                     |
|                                                                  |
+------------------------------------------------------------------+
                          |
                          v
                  Next token probabilities:
                    text   -> 2420
                    tokens -> 16326
                    words  -> 2456
                          |
                          v
Selected token is appended to the input, and the loop repeats`
  },
]