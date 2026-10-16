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
    slangDefinition: `Machine Learning (ML) na AI-oda subset - algorithms use panni data analyze panni, learn panni, decisions/predictions pannum. ML-ku smaller datasets podhum, structured data use pannum (tables maadhiri), aana feature extraction manual-a namba pannanum (example: Spam Detection-la "spam words" namba select pannanum). Flow: Input Data -> Feature Extraction (manual) -> ML Algorithm (Decision Tree, Random Forest) -> Output. Deep Learning (DL) na ML-oda specialized subset - Neural Networks (human brain-oda inspired) use pannum. DL-ku vast datasets (Big Data) venum, GPU pola computationally intensive, unstructured data (images, text, audio) handle pannum, features automatic-a learn pannikum (manual extraction venum illa). Flow: Input Data (unstructured) -> Neural Network (feature learning + classification together) -> Output. Example: ML-la Spam Detection, Housing Price Prediction; DL-la Image Recognition ("CAT" nu classify pannum), NLP (voice command-a intent-a translate panni action eduka vaikkum).`,
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
    slangDefinition: `AI history romba interesting-a evolve aagirukku, 1950-la irundhu 2025 varaikkum. 1950-la Alan Turing "can machine think?" nu oru question ketaru. 1956-la John McCarthy first-a "AI" nu oru word introduce pannaru. 1950s-80s-la Rule Based AI - if-else conditions vachi than intelligence build pannanga. 1997-la Deep Blue (IBM computer) chess-la Garry Kasparov-a defeat pannichu. 90's-la Machine Learning start aachu - rules-ku badhila examples/data vachi learn panna aarambichanga. 2000's-la Deep Learning vandhachu - Neural Networks vachi. 2012-la AlexNet vandhichu - computer vision-la breakthrough, computer-ku "see" panna mudinjachu. 2016-la Google-oda AlphaGo, Lee Sedol-a Go game-la beat pannichu. 2017-la Google "Attention is all you need" paper publish pannanga - Transformers architecture introduce aachu, idhu than LLM-oda foundation. 2022-la ChatGPT vandhichu, public-ku AI romba familiar aachu. 2025+ la Agentic AI - AI thaniya tasks plan pannitu, tools use pannitu, execute pannura stage.`,
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
    referenceUrl: 'https://platform.openai.com/tokenizer',
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
    slangDefinition: `Traditional keyword search eduthukalam, oru student "How do I centre a div?" nu search pannudhu, aana document-la "Use CSS flexbox to horizontally and vertically align an element" nu irukku, rendu-layum exact words very few dhan share aagudhu. Purely keyword-based system idha struggle pannum, yean naa exact word match illa. Embedding search idha vera maadhiri handle pannum, first user-oda query ah embedding ah convert pannuvanga, Query -> Query Vector, apparam ella documents-ayum embedding ah convert pannuvanga, Document -> Document Vector, apparam query vector ah document vectors kooda compare pannuvanga, last ah evanga highest semantic similarity irukura documents ah return pannuvanga. Idhu meaning-based search, exact word match theva illa. Aana keyword search ellame bad nu artham illa, "Hybrid Search" nu oru approach irukku, idhu rendum combine pannum. Enna na, Product ID, Error Code, important keyword, date, place, legal clauses madhiri things search pannanumna, keyword search exact match-ku romba accurate ah irukum, so idha embedding search-oda combine panna best result kidaikum.`,
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
    interviewDefinition: `Contextualisation refers to how modern LLMs handle words with multiple meanings. Consider examples like "I deposited money in the bank" vs "We sat on the bank of the river" (bank = financial institution vs riverbank), "He hit the ball with a bat" vs "A bat flew out of the cave" (bat = sports equipment vs animal), and "Java is a programming language" vs "Java is an island" vs "I ordered Java at the cafe" (three different meanings of Java). In a transformer-based language model, a token first receives an initial token embedding, and then the model processes it together with the surrounding tokens. Through multiple layers, this representation becomes contextualised, meaning the representation of "bank" in "I deposited money in the bank" can become different from the representation of "bank" in "We sat beside the river bank". In short, the initial token embedding may start out the same, but after the model processes the complete sentence, its internal representation changes according to the surrounding context, captured in the phrase "context modifies representation".`,
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
    referenceUrl: 'https://bbycroft.net/llm',
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
  {
    id: 'token-plus-positional-embedding',
    title: 'Token Embedding + Positional Embedding',
    category: 'AI',
    slangDefinition: `Transformer ku direct ah Token IDs pogadhu, adhukku munnadi oru important step irukku: Token Embedding + Positional Embedding = Transformer ku anupura data. Example ku "How to predict" nu input eduthukalam. First step la tokens Token IDs ah maarum, [2437, 284, 4331] nu. Rendavadhu step la, ovvoru Token ID ku embedding table-la irundhu oru Token Embedding vector kidaikum, idhu "edhu token" nu solum. Aana Token Embedding la position information illa, so "Dog bites man" and "Man bites dog" difference theriyadhu. Adhanaala moonavadhu step la, ovvoru position ku oru Positional Embedding vector kidaikum, idhu "idhu edhu position-la irukku" nu solum. Naalavadhu step la, ovvoru token-oda Token Embedding vector um, antha position-oda Positional Embedding vector um element by element add aagum, adhu dhan final vector. Indha final vectors ellam serndha data dhan Transformer ku input ah pogum. Simple ah solanumna, Token Embedding identity kudukum, Positional Embedding order kudukum, rendum add aana vector-la rendum irukum, so Transformer ku "enna token, edhu idathula" nu rendum theriyum.`,
    interviewDefinition: `Before the Transformer blocks process anything, the input goes through an embedding step: Token Embedding + Positional Embedding = the data sent to the Transformer. The input text, for example "How to predict", is first converted into Token IDs such as [2437, 284, 4331]. Each Token ID is looked up in the embedding table to get a Token Embedding, which tells the model which token is present. Since a Token Embedding carries no information about order, a Positional Embedding is generated for each position in the sequence, which tells the model where the token appears. The two vectors are added element by element for each token, and the resulting vectors, one per token, are the input to the Transformer. In short, the Token Embedding provides identity, the Positional Embedding provides order, and their sum gives the Transformer both.`,
    example: `// Token Embedding + Positional Embedding = data sent to the Transformer

const text = "How to predict";

// Step 1: Text -> Token IDs
const tokenIds = [2437, 284, 4331];

// Step 2: Token IDs -> Token Embeddings (identity: WHICH token)
const tokenEmbeddingTable = {
  2437: [0.12, -0.45, 0.78],  // "How"
  284:  [0.31, 0.22, -0.19],  // " to"
  4331: [-0.51, 0.83, 0.14]   // " predict"
};
const tokenEmbeddings = tokenIds.map(id => tokenEmbeddingTable[id]);

// Step 3: Positions -> Positional Embeddings (order: WHERE the token is)
const positionalEmbeddings = [
  [0.01, 0.02, 0.00],   // position 0
  [0.03, -0.01, 0.02],  // position 1
  [-0.02, 0.04, 0.01]   // position 2
];

// Step 4: Add them element by element
const transformerInput = tokenEmbeddings.map((tokenVec, position) =>
  tokenVec.map((value, i) => value + positionalEmbeddings[position][i])
);

console.log(transformerInput);
// Output (approx):
// [
//   [0.13, -0.43, 0.78],
//   [0.34, 0.21, -0.17],
//   [-0.53, 0.87, 0.15]
// ]

// This transformerInput (Token Embedding + Positional Embedding)
// is the data sent into the Transformer blocks.
// Token Embedding = identity, Positional Embedding = order.`
  },
  {
    id: 'layer-normalization',
    title: 'Layer Normalization (LayerNorm)',
    category: 'AI',
    slangDefinition: `Layer Normalization (LayerNorm) nu solradhu neural network kulla flow aagura numbers ah oru stable scale-la vechukka use panra technique. Problem enna na, data Transformer kulla move aagum bodhu, numbers (weights illa activations) romba periya values aah illa romba chinna values aah maarida vaaipu irukku. Example ku [0.2, -0.34, 0.5, 0.62] nu oru vector start aachu, aana attention, feed forward networks, residual additions ellam thirumba thirumba poga poga, adhu [22, 36, 14, 56] madhiri periya numbers ah maariduchu. scale manage panna kashtam aagum, calculations complex aagum. Adhaan LayerNorm vandhu fix pannum, ovvoru layer kulla irukura numbers ah adjust panni, mean (average) 0 ah, variance (spread) 1 ah varra maari maathum. Normalize pannina aprom antha vector [0.18, -0.26, 0.37, 0.58] inda madhiri maarum. Goal enna na, network break aagama irukkanum, illa romba slow ah learn pannama irukkanum. Simple ah solanumna, LayerNorm Transformer-la numbers ah stable ah vachi, model smooth ah learn panna help pannum, so deep networks training um stable ah irukum.`,
    interviewDefinition: `Layer Normalization (LayerNorm) is a technique used to keep the numbers flowing through a neural network at a more stable scale. As data moves through a Transformer, the numbers (weights or activations) can become too big or too small. For example, a vector like [0.2, -0.34, 0.5, 0.62] can grow to something like [22, 36, 14, 56] as representations repeatedly pass through attention, feed-forward networks, and residual additions, and such scales become difficult to manage and make calculations complex. Layer normalization fixes this by adjusting the numbers inside each separate layer so they have a mean (average) of 0 and a variance (spread) of 1, giving a well-behaved vector such as [0.18, -0.26, 0.37, 0.58]. The goal is to stop the network from breaking or learning too slowly. Normalization keeps the network's internal representations well behaved, which makes training deep networks more stable and lets the model learn smoothly.`,
    example: `// Layer Normalization (LayerNorm)

// Problem: numbers can become too big or too small as they
// flow through attention, feed-forward networks, residual additions etc.
const startVector = [0.2, -0.34, 0.5, 0.62];
const afterManyLayers = [22, 36, 14, 56]; // scale is hard to manage

// Fix: LayerNorm adjusts the numbers so that
// mean (average) = 0 and variance (spread) = 1
function layerNorm(vector, epsilon = 1e-5) {
  const mean = vector.reduce((sum, v) => sum + v, 0) / vector.length;
  const variance =
    vector.reduce((sum, v) => sum + (v - mean) ** 2, 0) / vector.length;
  const std = Math.sqrt(variance + epsilon);
  return vector.map(v => (v - mean) / std);
}

const normalized = layerNorm(afterManyLayers);
console.log(normalized.map(v => Number(v.toFixed(2))));
// Output: [-0.63, 0.25, -1.13, 1.51]
// -> mean is 0 and variance is 1, so the scale is stable again

// Illustration from the lesson (simplified numbers):
// [22, 36, 14, 56]  --LayerNorm-->  [0.18, -0.26, 0.37, 0.58]
// Big, unstable values become small, well behaved values.

// Why it matters:
// Keeps the network's internal representations well behaved,
// which makes training deep networks more stable.`
  },
  {
    id: 'multi-head-attention',
    title: 'Multi-Head Attention',
    category: 'AI',
    slangDefinition: `"The boy ate an apple because he was hungry" nu oru sentence eduthukalam. Inga "he" nu solradhu "boy" a refer pannudhu. Athe madhiri "ate" and "apple" kum oru relationship irukku. Oru single attention mechanism use panna, indha different relationships ellathayum at a time la learn panradhu kashtam. Adhanala Multi-Head Attention-la multiple attention heads parallel ah work pannum, ovvoru head um different relationship ah paakkum. Example ku Head 1 "he" and "boy" relationship ah learn pannalaam, Head 2 words-oda meaning ah learn pannalaam, Head 3 sentence-la irukura grammatical relationships ah learn pannalaam. Idhu oru illustrative example mattum dhan. Actual ah ovvoru head enna relationship learn pannum nu namma fixed ah decide panna mudiyadhu, adhu training la model thaan learn pannum. Ellam heads oda results um serthu, model ku sentence oda understanding kidaikum.`,
    interviewDefinition: `Multi-Head Attention runs multiple attention heads in parallel instead of relying on a single attention mechanism. Consider the sentence "The boy ate an apple because he was hungry." Here "he" refers to "boy", and "ate" has a relationship with "apple". A single attention mechanism would have difficulty learning all of these different relationships at once. With Multi-Head Attention, each head can focus on a different kind of relationship. For example, Head 1 might learn the relationship between "he" and "boy", Head 2 might learn meaning-based relationships, and Head 3 might learn grammatical relationships within the sentence. This is only an illustrative example: what each head actually learns cannot be decided by us in advance, it is learned automatically during training. The outputs of all heads are then combined to give the model a richer understanding of the sentence.`,
    example: `// Multi-Head Attention (illustrative example)

const sentence = "The boy ate an apple because he was hungry";

// Single attention: one mechanism has to capture everything
const singleAttention = {
  learns: ["he -> boy", "ate -> apple", "grammar", "meaning"] // too much for one
};

// Multi-Head Attention: multiple heads work in parallel
const heads = [
  { head: 1, learns: "'he' and 'boy' relationship (who does 'he' refer to?)" },
  { head: 2, learns: "meaning relationships (e.g. 'ate' and 'apple')" },
  { head: 3, learns: "grammatical relationships within the sentence" }
];

// Each head produces its own attention output
function runHeadsInParallel(heads) {
  return heads.map(h => ({ head: h.head, output: "vector for " + h.learns }));
}

console.log(runHeadsInParallel(heads));

// All head outputs are combined into one richer representation
// Note: this is ILLUSTRATIVE. What each head actually learns
// cannot be fixed by us in advance, it is learned during training.`
  },
  {
    id: 'masked-attention',
    title: 'Masked Attention',
    category: 'AI',
    slangDefinition: `Masking na attention-la entha words ah consider pannalaam, entha words ah consider panna koodathu nu restriction podradhu. Oru attention score matrix irukum, mask apply pannum bodhu certain positions ah block pannuvom. Example ku "I love machine learning" nu eduthukalam, ippo "love" position ku attention calculate panrom. "I" ah attend pannalaam, "love" ah attend pannalaam. Aana "machine" and "learning" ah attend panna allow pannalama illa block pannalama nu, use panra mask type ah depend pannum. So masked attention nu solradhu, mask use panni attention ah restrict panradhu. Future words ah block panradhu mattum masked attention-oda definition illa, adhu oru particular type of masking mattum dhan. Image-la paatha "I love learning" matrix la, "I" row la "I" mattum Allowed, "love" row la "I" and "love" Allowed, "learning" row la ellame Allowed, future positions ellam Blocked. Idhu eppadi work aagudhu na, attention score matrix la block panna vendiya position oda score ah Softmax ku munnadi negative infinity (-∞) nu set pannuvom. Softmax(-∞) = 0, so antha blocked position ku attention weight zero aagidum, meaning model antha word ah paakave maatten.`,
    interviewDefinition: `Masking means restricting which words (positions) an attention mechanism is allowed to consider. In attention, there is a score matrix, and when a mask is applied, certain positions in it are blocked. For example, in "I love machine learning", when calculating attention for the position "love", it may attend to "I" and "love", while whether it may attend to "machine" and "learning" depends on the type of mask being used. So masked attention simply means restricting attention using a mask. Blocking future words is not the definition of masked attention itself; it is one particular type of masking (causal masking), and other masks can follow different rules. In the illustrative mask for "I love learning", "I" can only attend to itself, "love" can attend to "I" and "love", and "learning" can attend to all three, with future positions blocked. Technically, a blocked position's score is set to negative infinity (-∞) before the Softmax. Since Softmax(-∞) = 0, the attention weight for that blocked position becomes zero.`,
    example: `// Masked Attention (illustrative)

const tokens = ["I", "love", "learning"];

// Raw attention scores (rows = current token, columns = token being attended)
const scores = [
  [2.0, 1.0, 0.5],
  [1.5, 2.5, 0.8],
  [0.9, 1.2, 2.2]
];

// Mask: 1 = Allowed, 0 = Blocked
// This particular mask blocks future positions (causal mask).
// Other masks can follow different rules.
const mask = [
  [1, 0, 0], // "I" attends only to "I"
  [1, 1, 0], // "love" attends to "I", "love"
  [1, 1, 1]  // "learning" attends to all three
];

// Step 1: Set blocked positions to -Infinity BEFORE softmax
const maskedScores = scores.map((row, i) =>
  row.map((score, j) => (mask[i][j] === 1 ? score : -Infinity))
);

// Step 2: Softmax
function softmax(row) {
  const exps = row.map(v => Math.exp(v)); // Math.exp(-Infinity) = 0
  const sum = exps.reduce((a, b) => a + b, 0);
  return exps.map(v => Number((v / sum).toFixed(2)));
}

const attentionWeights = maskedScores.map(softmax);
console.log(attentionWeights);
// Output (approx):
// [
//   [1.00, 0.00, 0.00],  // "I" -> only itself
//   [0.27, 0.73, 0.00],  // "love" -> "I" and "love"
//   [0.18, 0.24, 0.58]   // "learning" -> all three
// ]

// Softmax(-Infinity) = 0
// So blocked positions get attention weight zero.`
  },
  {
    id: 'causal-self-attention',
    title: 'Causal Self-Attention',
    category: 'AI',
    slangDefinition: `Causal Self-Attention na, oru token already available ah irukura previous tokens ah and current token ah mattum attend pannum, future tokens ah paakka mudiyaadhu. Idhu autoregressive language models, GPT-style models including, use panra important mechanism. Example ku "I love machine learning" nu sentence eduthukalam, model next word predict panradhukku training nadakkudhu nu imagine pannunga. "I" position la irukumbodhu, "love", "machine", "learning" ellam future la irukku, so adha paakka mudiyaadhu. "love" position la "I" and "love" ah paakalaam. "machine" position la "I", "love", "machine" ah paakalaam. "learning" position la previous words ellathayum paakalaam. Ippadi dhan model step by step learn pannum. so training-layum, use panra bodhum same rule follow aaganum. Idhu masked attention-oda oru particular type, future positions ah block panra mask dhan causal mask.`,
    interviewDefinition: `Causal Self-Attention means that a token can attend only to the previous tokens that are already available and to the current token itself; it cannot look at future tokens. It is an important mechanism used in autoregressive language models, including GPT-style models. Take the sentence "I love machine learning" while the model is being trained to predict the next word. At the position of "I", the words "love", "machine", and "learning" are in the future and cannot be seen. At "love", the model can see "I" and "love". At "machine", it can see "I", "love", and "machine". At "learning", it can see all the previous words. This way the model learns step by step, without already knowing the future words it is supposed to predict. Causal self-attention is a particular type of masked attention that uses a causal mask to block future positions.`,
    example: `// Causal Self-Attention (illustrative)

const tokens = ["I", "love", "machine", "learning"];

// Causal mask: each token sees itself and PREVIOUS tokens only
// 1 = Allowed, 0 = Blocked (future)
const causalMask = [
  // I  love machine learning
  [1,   0,    0,      0],  // "I" sees only "I"
  [1,   1,    0,      0],  // "love" sees "I", "love"
  [1,   1,    1,      0],  // "machine" sees "I", "love", "machine"
  [1,   1,    1,      1]   // "learning" sees all previous words
];

function visibleTokens(position) {
  return tokens.filter((_, j) => causalMask[position][j] === 1);
}

tokens.forEach((token, i) => {
  console.log(token, "can see:", visibleTokens(i));
});
// Output:
// I can see: ["I"]
// love can see: ["I", "love"]
// machine can see: ["I", "love", "machine"]
// learning can see: ["I", "love", "machine", "learning"]

// Because future tokens are blocked, the model predicts the next word
// step by step, without already knowing the answer.
// This is the key mechanism in autoregressive (GPT-style) models.


+----------+---------+---------+----------+
|          | I       | love    | learning |
+----------+---------+---------+----------+
| I        | Allowed | Blocked | Blocked  |
| love     | Allowed | Allowed | Blocked  |
| learning | Allowed | Allowed | Allowed  |
+----------+---------+---------+----------+`
  },
  {
    id: 'multi-head-vs-masked-vs-causal-attention',
    title: 'Multi-Head vs Masked vs Causal Self-Attention',
    category: 'AI',
    slangDefinition: `Indha moonu concepts-um paakka similar ah theriyum, aana ovvonnukum different purpose irukku. Multi-Head Attention oda main purpose different relationships ah learn panradhu, multiple attention heads parallel ah work pannum. Masked Attention oda main purpose selected positions ah restrict panradhu, attention scores mela oru mask apply pannuvom. Causal Self-Attention oda main purpose future token access ah prevent panradhu, backward paathu and current token ah mattum paakkum. GPT-style Transformer "Multi-Head Causal Self-Attention" use pannum, idhula moonum serndhu irukku. Multi-Head na multiple heads attention ah parallel ah process pannum. Self-Attention na queries, keys, and values ellam same sequence-la irundhu varum. Causal na future tokens ah mask vechi block pannuvom. Short ah solanumna, causal masking oru head entha positions ah attend pannalaam nu control pannum, multi-head attention evlo attention heads parallel ah operate aaganum nu control pannum. So rendum different job, aana serndhu dhan GPT-style model-la work aagum.`,
    interviewDefinition: `Multi-Head Attention, Masked Attention, and Causal Self-Attention are related but serve different purposes. Multi-Head Attention is used to learn different relationships, with multiple attention heads working in parallel. Masked Attention is used to restrict selected positions by applying a mask to the attention scores. Causal Self-Attention is used to prevent future-token access, so a token looks backward and at the current token only. A GPT-style Transformer can use Multi-Head Causal Self-Attention, which combines all three ideas: Multi-Head means multiple heads process attention in parallel, Self-Attention means the queries, keys, and values come from the same sequence, and Causal means future tokens are blocked using a mask. In other words, causal masking controls which positions a head can attend to, while multi-head attention controls how many attention heads operate in parallel.`,
    example: `// Multi-Head vs Masked vs Causal Self-Attention


+-----------------------+------------------------------+----------------------------------------------+
| Concept               | Main purpose                 | Simple meaning                               |
+-----------------------+------------------------------+----------------------------------------------+
| Multi-Head Attention  | Learn different relationships| Multiple attention heads work in parallel    |
| Masked Attention      | Restrict selected positions  | Apply a mask to attention scores             |
| Causal Self-Attention | Prevent future-token access  | Look backward and at the current token only  |
+-----------------------+------------------------------+----------------------------------------------+

// GPT-style Transformer = Multi-Head Causal Self-Attention
const gptAttention = {
  multiHead: "Multiple heads process attention in parallel",
  selfAttention: "Queries, keys, and values come from the same sequence",
  causal: "Future tokens are blocked using a mask"
};

// How they work together (conceptual)
const tokens = ["I", "love", "learning"];
const numberOfHeads = 3; // Multi-Head: HOW MANY heads run in parallel

// Causal mask: WHICH positions each head can attend to
const causalMask = [
  [1, 0, 0],
  [1, 1, 0],
  [1, 1, 1]
];

for (let head = 1; head <= numberOfHeads; head++) {
  console.log("Head", head, "uses the same causal mask:", causalMask);
}

// Causal masking controls WHICH positions a head can attend to.
// Multi-head attention controls HOW MANY heads operate in parallel.`
  },
  {
    id: 'query-key-value',
    title: 'Q, K, V (Query, Key, Value)',
    category: 'AI',
    slangDefinition: `Q, K, V nu solradhu Transformer architecture-la romba important concept. First oru real-life example paakalaam, library-la book search panradhu. Neenga library ku poi "JavaScript book irukka?" nu kekureenga nu imagine pannunga. Q = Query, idhu neenga thedura book request. K = Key, idhu ovvoru book oda title, topic, category madhiri matching ku use aagura details, example ku "JavaScript", "Python", "History" nu different categories. V = Value, idhu select panna book kulla irukura actual content, JavaScript concepts, examples, code explanations, idhu concept puriya vekkura analogy mattum dhan. Transformer la Q, K, V nu solradhu manually ezhudhina questions, labels, illa book contents illa, athu ellam token representations la irundhu calculate aagura numerical vectors. Ippo "The boy ate an apple because he was hungry" sentence eduthukalam. Query nu solradhu "enakku enna information venum?" nu kekura question madhiri, example ku "he" token, "naan yaara refer panren?" nu related information ah thedum. Key nu solradhu "enkitta enna information irukku?" nu ovvoru word um vechirukura label madhiri, example ku "boy" oda Key, "he" oda Query ku relevant ah irukalam. Value nu solradhu oru word relevant nu decide pannina aprom, andha word la irundhu actual ah enna information edukanum nu represent pannum, example ku "boy" relevant ah irundha, adhu represent panra information "he" oda updated representation ku contribute pannum. Inga moonu steps nadakkudhu. Step 1, Q x K, endha tokens relevant nu score calculate pannuvom. Step 2, Softmax, scores ah attention weights ah convert pannuvom. Step 3, Weights x V, andha weights use panni Values ah combine pannuvom. Example ku "he" ku "boy" high relevance, "apple" lower relevance, "ate" konjam depend, so final output la "boy" oda Value athiga contribute pannum. Simple ah nyabagam vechukka, Q = "What am I looking for?", K = "How relevant am I?", V = "What information do I contribute?".`,
    interviewDefinition: `Q, K, V (Query, Key, Value) is one of the most important concepts in the Transformer architecture. A helpful analogy is searching for a book in a library: the Query is your request ("Do you have a JavaScript book?"), the Key is the matching details of each book such as title, topic, and category, and the Value is the actual content of the selected book. This is only an analogy; in a Transformer, Q, K, and V are not manually written questions, labels, or contents, they are numerical vectors calculated from token representations. Using the sentence "The boy ate an apple because he was hungry": a Query represents what information a token is looking for from other tokens (for example, "he" looking for who it refers to). A Key represents the features used to determine how relevant a token is to a Query (the Key of "boy" can be relevant to the Query of "he"). A Value contains the information that is weighted and combined using the attention scores (if "boy" is relevant, the information it represents contributes to the updated representation of "he"). Three steps happen: first Q x K calculates a relevance score for each token, then Softmax converts the scores into attention weights, and finally the weights are multiplied with the Values and combined to produce the output. In short, Q represents the information being sought, K helps calculate relevance to Q, and V supplies the information for the output.`,
    example: `// 1. Library analogy (concept only)

+------+-----------+-------------------------------------------------+
| Part | Meaning   | Library example                                 |
+------+-----------+-------------------------------------------------+
| Q    | Query     | "Do you have a JavaScript book?"                |
| K    | Key       | Title, topic, category: JavaScript, Python...   |
| V    | Value     | Actual content: concepts, examples, code        |
+------+-----------+-------------------------------------------------+
// In a Transformer, Q, K, V are NOT written text.
// They are numerical vectors calculated from token representations.


// 2. Q, K, V for the sentence: "The boy ate an apple because he was hungry"

+-------+-----------------------------+---------------------------------------------------+
| Term  | Question it answers         | Example                                           |
+-------+-----------------------------+---------------------------------------------------+
| Query | What am I looking for?      | "he" looks for who it refers to                   |
| Key   | What information do I       | Key of "boy" may be relevant to the Query of "he" |
|       | represent?                  |                                                   |
| Value | What information can I      | If "boy" is relevant, its information contributes |
|       | contribute?                 | to the updated representation of "he"             |
+-------+-----------------------------+---------------------------------------------------+


// 3. Q: "he" token compared with the Keys of other tokens
// (illustrative numbers)

+-----------+-----------------+------------------+-------------------+
| Q: "he"   | boy             | apple            | ate               |
+-----------+-----------------+------------------+-------------------+
| Q x K     | 4.0             | 1.0              | 2.0               |
| Relevance | High            | Lower            | Depends           |
| Softmax   | 0.84            | 0.04             | 0.11              |
+-----------+-----------------+------------------+-------------------+


// 4. V: combine information
// Attention weights decide how much each token's Value
// contributes to the output for "he"

+----------------------+---------+---------+---------+
|                      | boy     | apple   | ate     |
+----------------------+---------+---------+---------+
| Attention weight     | 0.84    | 0.04    | 0.11    |
| Value contribution   | Highest | Lowest  | Small   |
+----------------------+---------+---------+---------+
Output for "he" = (0.84 x V of boy) + (0.04 x V of apple) + (0.11 x V of ate)


// 5. The three steps

+------+-----------+------------------------------------------------------+
| Step | Operation | What happens                                         |
+------+-----------+------------------------------------------------------+
| 1    | Q x K     | Calculate which tokens are relevant (scores)         |
| 2    | Softmax   | Convert scores into attention weights                |
| 3    | Weights x V | Combine the Values using those weights             |
+------+-----------+------------------------------------------------------+


// 6. Remember it as

+------+-----------------------------------+------------------------------------------+
| Term | Remember it as                    | What it does                             |
+------+-----------------------------------+------------------------------------------+
| Q    | What am I looking for?            | Represents the information being sought  |
| K    | How relevant am I?                | Helps calculate relevance to Q           |
| V    | What information do I contribute? | Supplies information for the output      |
+------+-----------------------------------+------------------------------------------+`
  },
  {
    id: 'residual-skip-connection',
    title: 'Residual / Skip Connection',
    category: 'AI',
    slangDefinition: `Residual connection (skip connection) na, layer oda output ah old information ku replace panna vekkama, original input ah layer oda output kooda add panradhu. Architecture diagram la paatha, "+" icon and oru arrow mela irundhu vandhu attach aagum, adhu dhan idhu. Simple ah solanumna, input data oru processing layer ah bypass panni, direct shortcut vazhiya poi layer oda output kooda serndhukum. Example ku attention kulla pogum bodhu token representation x = [1, 2, 3] nu vechukalam. Attention process panna aprom Attention(x) = [0.2, -0.5, 0.7] nu output varum. Idha mattum adutha layer ku anupama, original input ah add pannuvom: x + Attention(x) = [1, 2, 3] + [0.2, -0.5, 0.7] = [1.2, 1.5, 3.7]. Idhu dhan final result. Ovvoru layer ah, representation ah scratch la irundhu pudhusa build panradhu madhiri illa, oru useful update add panradhu madhiri ninaichukalam. Transformer layer ku already therinja information ah thooki potturathu illa, adhu oru update ah learn pannum, andha update ah existing representation mela add pannum.`,
    interviewDefinition: `A residual connection (also called a skip connection) is a direct shortcut in an AI model that lets input data bypass a processing layer and add itself to the layer's output. Instead of completely replacing the old information with the output of a layer, the original input is added back to the layer's output. In the Transformer architecture diagram, this is the "+" icon with an arrow coming from the top. For example, suppose a token representation entering attention is x = [1, 2, 3], and attention produces Attention(x) = [0.2, -0.5, 0.7]. Instead of passing only [0.2, -0.5, 0.7] forward, the original input is added: x + Attention(x) = [1, 2, 3] + [0.2, -0.5, 0.7] = [1.2, 1.5, 3.7]. Each layer can be thought of as adding a useful update rather than rebuilding the entire representation from scratch. A Transformer layer does not throw away what it already knows; it learns an update and adds that update on top of the existing representation.`,
    example: `// Residual / Skip Connection

// Token representation entering attention
const x = [1, 2, 3];

// Attention produces
const attentionOutput = [0.2, -0.5, 0.7];

// WITHOUT residual connection: old information is replaced
const withoutResidual = attentionOutput;
console.log(withoutResidual);
// Output: [0.2, -0.5, 0.7]  -> original information is lost

// WITH residual connection: add the original input back
function residualConnection(input, layerOutput) {
  return input.map((value, i) => Number((value + layerOutput[i]).toFixed(1)));
}

const withResidual = residualConnection(x, attentionOutput);
console.log(withResidual);
// Output: [1.2, 1.5, 3.7]

// x + Attention(x) = [1, 2, 3] + [0.2, -0.5, 0.7] = [1.2, 1.5, 3.7]

// Each layer adds a useful update instead of rebuilding
// the whole representation from scratch.
// A Transformer layer doesn't throw away what it already knows.
// It learns an update and adds it on top of the existing representation.`
  },
  {
    id: 'feed-forward-network',
    title: 'Feed Forward Network (FFN)',
    category: 'AI',
    slangDefinition: `Self-attention nadakkum bodhu tokens ellam onnodu onnu interact pannikum, example ku "I sat on the bank of a river" nu irundha "bank" word, matha words ah paathu meaning ah kandupidikum. Aana FFN nadakkum bodhu, ovvoru token um independent ah thaniya process aagum. Simple ah solanumna, Attention tokens ah communicate panna vekkum, FFN ovvoru token um adhu learn pannadha think/process panna vekkum. Attention enna pannum na, sentence la irukura words ku idaiyila relationship find panni, relevant information ah combine pannum. Adhukku next ah FFN ovvoru word oda representation ah eduthu, adha innum process panni, useful features ah learn panna help pannum. Innum simple ah, Attention: endha words la irundhu information edukanum? FFN: kidacha information ah eppadi transform panni useful representation ah aakuradhu? Feed Forward Network nu solradhu oru neural network, adhu attention operation ku aprom, ovvoru token representation ku learned linear transformations and oru nonlinear activation function apply pannum. Step 1 Attention: words ku idaiyila relationships and context ah learn pannum. Step 2 FFN: each token representation ah separate ah transform pannum. Step 3 Updated representation: adutha Transformer layer ku pass aagum. Attention context ah combine pannina aprom, FFN antha representation la irukura patterns ah transform panni, model ku better features learn panna help pannum. Oru note, FFN "running" illa "action" nu manually identify pannadhu, training moolama useful numerical patterns ah learn pannum.`,
    interviewDefinition: `A Feed Forward Network (FFN) is a key building block inside a Transformer model that processes information and helps the model think more deeply about the meaning of words after the attention step. During self-attention, tokens interact with each other; for example, in "I'm sitting on the bank of a river", the word "bank" finds its meaning after looking at the other words. During FFN, each token is processed independently. In short: attention lets tokens communicate, FFN lets each token think/process what it learned. Attention finds relationships between the words in a sentence and combines relevant information, while FFN takes the representation of each word and transforms it further to learn useful features. Formally, a Feed Forward Network is a neural network that applies learned linear transformations and a nonlinear activation function to each token representation after the attention operation. Step 1, Attention learns relationships and context between the words. Step 2, FFN transforms each token representation separately. Step 3, the updated representation is passed to the next Transformer layer. FFN does not explicitly identify "running" or "action" manually; it learns useful numerical patterns through training.`,
    example: `// Feed Forward Network (FFN)

// Attention vs FFN
// Attention: tokens interact with each other (which words to take information from?)
// FFN: each token is processed independently (how to transform that information?)

const sentence = ["The", "boy", "is", "running", "fast"];

// Step 1: Attention output (context already combined for each token)
const afterAttention = {
  The:     [0.1, 0.4, -0.2],
  boy:     [0.6, -0.3, 0.5],
  is:      [0.2, 0.1, 0.0],
  running: [0.7, 0.2, -0.4],
  fast:    [0.5, -0.1, 0.3]
};

// Step 2: FFN = linear transformation + non-linear activation
// applied to EACH token separately, using the same learned weights
const W1 = [
  [0.5, -0.2, 0.1],
  [0.3, 0.8, -0.5],
  [-0.4, 0.2, 0.9]
]; // weights learned during training
const b1 = [0.1, 0.0, -0.1];

function linear(vector, weights, bias) {
  return weights.map((row, i) =>
    row.reduce((sum, w, j) => sum + w * vector[j], 0) + bias[i]
  );
}

function relu(vector) {
  return vector.map(v => Math.max(0, v)); // non-linear activation
}

function feedForward(tokenVector) {
  return relu(linear(tokenVector, W1, b1)).map(v => Number(v.toFixed(2)));
}

// Each token is processed independently (no interaction between tokens here)
const afterFFN = {};
for (const token of sentence) {
  afterFFN[token] = feedForward(afterAttention[token]);
}

console.log(afterFFN);

// Step 3: Updated representations are passed to the next Transformer layer

// Note: FFN does NOT manually identify "running" or "action".
// It learns useful numerical patterns through training.`
  },
  {
    id: 'attention-vs-ffn',
    title: 'Attention vs FFN',
    category: 'AI',
    slangDefinition: `Transformer layer kulla Attention and FFN rendum irukku, aana rendum vera vera velai pannum. Attention tokens ku idaiyila information exchange pannum, adhavadhu oru token matha tokens kitta irundhu information eduthukum. FFN ah paatha, ovvoru token representation ah thaniya transform pannum. Attention Q, K, V use pannum, FFN usually linear layers and activation use pannum. Attention other tokens oda context ah consider pannum, aana standard FFN ovvoru token ah independent ah process pannum, mathu tokens ah paakadhu. Attention relationship learning ku help pannum, FFN feature transformation ku help pannum. Simple ah nyabagam vechukka, Attention na "endha words kitta irundhu information edukanum?", FFN na "kidacha information ah eppadi transform panni useful representation aakuradhu?". Rendum serndhu dhan Transformer layer complete aagum, first Attention context ah combine pannum, apparam FFN adha process pannum.`,
    interviewDefinition: `Attention and FFN are two different components inside a Transformer layer with different jobs. Attention exchanges information between tokens, uses Q, K, V, considers the context of other tokens, and helps with relationship learning. A Feed Forward Network (FFN) transforms each token representation, usually uses linear layers and an activation function, processes each token independently in the standard design, and helps with feature transformation. In short, Attention decides which tokens to take information from, while FFN decides how to transform the gathered information into a more useful representation. In a Transformer layer, Attention first combines context across tokens, and then the FFN processes each token's updated representation further.`,
    example: `// Attention vs FFN

+----------------------------------------------+-----------------------------------------------------+
| Attention                                    | FFN                                                 |
+----------------------------------------------+-----------------------------------------------------+
| Exchanges information between tokens         | Transforms each token representation                |
| Uses Q, K, V                                 | Usually uses linear layers and activation           |
| Considers context of other tokens            | Standard FFN processes each token independently     |
| Helps with relationship learning             | Helps with feature transformation                   |
+----------------------------------------------+-----------------------------------------------------+


// Simple way to remember

+-----------+----------------------------------------------------------------------------+
| Component | Question it answers                                                        |
+-----------+----------------------------------------------------------------------------+
| Attention | Which tokens should I take information from?                               |
| FFN       | How do I transform the collected information into a useful representation? |
+-----------+----------------------------------------------------------------------------+


// Order inside a Transformer layer

+------+-----------+-----------------------------------------------------------+
| Step | Component | What happens                                              |
+------+-----------+-----------------------------------------------------------+
| 1    | Attention | Tokens exchange information and combine context           |
| 2    | FFN       | Each token representation is transformed separately       |
| 3    | Output    | Updated representation goes to the next Transformer layer |
+------+-----------+-----------------------------------------------------------+`
  },
  {
    id: 'linear-and-softmax',
    title: 'Linear & Softmax',
    category: 'AI',
    slangDefinition: `Transformer kulla ellam process aana aprom, model next word enna varum nu predict pannanum. Adhukku last la Linear layer and Softmax layer use aagum. Linear layer oru math machine madhiri, information oda size and shape ah maathum. Idhu vocabulary la irukura ovvoru word ku oru raw score kudukum. Example ku cat = 2.0, dog = 1.0, car = 0.2, pizza = -0.5 nu scores varum. Indha scores ku "logits" nu per. Idhu just arbitrary scores, direct ah paathu purinjika kashtam. Adhukku dhan Softmax layer, idhu oru referee madhiri, raw numbers ah percentages ah maathum. Softmax values ellam 0 ku 1 kulla irukum, ellam serthu 1 (100%) aagum. Example ku cat = 0.62, dog = 0.23, car = 0.10, pizza = 0.05, total 1.00. Ippo idha probability distribution ah purinjika mudiyum: cat = 62%, dog = 23%, car = 10%, pizza = 5%. Highest probability irukura word ku dhan entry kidaikum, adhu dhan predicted word, inga "cat".`,
    interviewDefinition: `After the Transformer layers finish processing, the model must predict the next token, which is done by a Linear layer followed by a Softmax layer. A linear layer acts like a math machine that changes the size and shape of information, producing a raw score for every word in the vocabulary. For example: cat = 2.0, dog = 1.0, car = 0.2, pizza = -0.5. These raw scores are called logits. They are arbitrary scores and difficult to interpret directly. A Softmax layer acts like a referee that turns raw numbers into values between 0 and 1 that sum to 1 (100%). Here, Softmax gives cat = 0.62, dog = 0.23, car = 0.10, pizza = 0.05, a total of 1.00. These can now be interpreted as a probability distribution: cat = 62%, dog = 23%, car = 10%, pizza = 5%. The word with the highest probability is selected as the predicted word, which is "cat" here.`,
    example: `// Linear & Softmax

// Step 1: Linear layer output = raw scores (logits)
const logits = {
  cat: 2.0,
  dog: 1.0,
  car: 0.2,
  pizza: -0.5
};
// Arbitrary scores, difficult to interpret directly

// Step 2: Softmax converts logits into probabilities
function softmax(scores) {
  const entries = Object.entries(scores);
  const exps = entries.map(([word, score]) => [word, Math.exp(score)]);
  const sum = exps.reduce((total, [, value]) => total + value, 0);
  const result = {};
  exps.forEach(([word, value]) => {
    result[word] = Number((value / sum).toFixed(2));
  });
  return result;
}

const probabilities = softmax(logits);
console.log(probabilities);
// Output: { cat: 0.62, dog: 0.23, car: 0.1, pizza: 0.05 }

// Values are between 0 and 1, and they sum to 1 (100%)
const total = Object.values(probabilities).reduce((a, b) => a + b, 0);
console.log(total.toFixed(2)); // 1.00

// Step 3: Pick the highest probability word
const predictedWord = Object.entries(probabilities)
  .sort((a, b) => b[1] - a[1])[0][0];
console.log(predictedWord); // "cat"


// Summary

+-------+------+---------+-------------+
| Word  | Logit| Softmax | Probability |
+-------+------+---------+-------------+
| cat   |  2.0 | 0.62    | 62%         |
| dog   |  1.0 | 0.23    | 23%         |
| car   |  0.2 | 0.10    | 10%         |
| pizza | -0.5 | 0.05    | 5%          |
+-------+------+---------+-------------+
| Total |      | 1.00    | 100%        |
+-------+------+---------+-------------+

+--------------+--------------------------------------------------------+
| Layer        | What it does                                           |
+--------------+--------------------------------------------------------+
| Linear layer | Math machine that changes the size and shape of info   |
|              | and produces raw scores (logits)                       |
| Softmax      | Referee that turns raw scores into percentages that    |
|              | add up to 100%                                         |
+--------------+--------------------------------------------------------+`
  },
  {
    id: 'learning-and-parameters',
    title: 'Learning & Parameters',
    category: 'AI',
    slangDefinition: `Neural network kulla romba periya adjustable numbers collection irukum, adha dhan "parameters" nu solvom. Training nadakkum bodhu, indha parameters ah thirumba thirumba modify pannuvom, appo dhan model oru particular objective la better aagum. So neural network ku "learning" na, parameters ah adjust panradhu, apo dhan future predictions better aagum. Idhu eppadi nadakkum na, network first random ah guess pannum, neraya mistakes pannum. Every time thappa guess pannina, oru mathematical formula andha guess correct answer la irundhu evlo dhooram irukunu calculate pannum. Apparam network backward ah poi, artificial neurons ku idaiyila irukura internal weights ah adjust pannum. Parameters ah ninaichu paakanumna, AI oda brain kulla irukura millions of chinna knobs and dials madhiri. Network create pannum bodhu indha dials ellam random ah set aagi irukum, adhanala first la poor guesses varum. Practice panna panna mistakes check panni, knobs ah konjam konjam thiruppum. Training mudiyum bodhu, indha parameters la dhan patterns recognize panna, languages translate panna, text generate panna theva padra exact settings and "knowledge" irukum. DJ example eduthukalam: nalla sound kedaikka DJ knobs ah regulate panni perfect setting vechuppanga. Sound box dhan model, adhula namma adjust panra knobs and controls dhan parameters. Aana AI la yaaru indha knobs ah tune pannuvanga? Model dhane, training time la. Size paatha, GPT-3 ku 175,000,000,000 (175B) parameters irukku. GPT-4/5 ku trillions of parameters irukalam. Parameters nu solradhu learned numerical values, model oda behavior ah adhu dhan decide pannum, training la learn pannina patterns and knowledge ellam indha parameters muluvadhum encode aagi irukum. Parameters/weights enga ellam irukum na: Embeddings, Attention (Wq, Wk, Wv, Wo), Layer Norm (gamma, beta), FFN (W1, W2, ...). Token oda embedding, adhavadhu numbers array kooda parameters ah irukalam. Technical ah solanumna, parameters na weights and biases. Weights volume dials madhiri, oru input evlo important nu decide pannum. Biases shifting offsets madhiri, inputs kammiya irundhalum model correct decision edukka help pannum. Rendum serndhu interconnected knobs madhiri, AI correct answers kedaikira varaikkum training la shape maarum.`,
    interviewDefinition: `A neural network contains a huge collection of adjustable numbers called parameters. During training, these parameters are repeatedly modified so that the model becomes better at a particular objective. For a neural network, learning means adjusting parameters so that future predictions become better. The network starts by guessing answers and initially makes many mistakes. Each time it guesses wrong, a mathematical formula calculates how far off the guess was from the correct answer, and the network then works backward to adjust its internal weights, the connections between its artificial neurons. Parameters can be thought of as millions of tiny knobs and dials inside the AI's brain. When the network is first created they are set randomly, causing poor guesses, and by the end of training they hold the exact settings and "knowledge" the AI needs to recognize patterns, translate languages, or generate text. As an analogy, a DJ adjusts knobs to get the perfect sound: the sound box is the model and the knobs are the parameters, and in a neural network it is the model itself that tunes them during training. For scale, GPT-3 has 175,000,000,000 (175B) parameters, while GPT-4/5 reportedly have trillions. Parameters are the learned numerical values that determine the model's behavior, and the patterns and knowledge learned during training are encoded across them. They exist in several places in a Transformer: Embeddings, Attention (Wq, Wk, Wv, Wo), Layer Norm (gamma, beta), and FFN (W1, W2, ...). Specifically, parameters are weights and biases: weights act like volume dials deciding how important a specific input is, while biases act like shifting offsets that help the model make accurate decisions even when the inputs are low. Together they work like interconnected knobs that change shape during training until the AI gets the right answers.`,
    example: `// Learning = adjusting parameters so future predictions get better

// A tiny "model" with just 2 parameters: weight and bias
let weight = 0.1; // volume dial: how important the input is
let bias = 0.0;   // shifting offset

function predict(input) {
  return weight * input + bias;
}

// Training data where the correct rule is: output = 2 * input + 1
const trainingData = [
  { input: 1, expected: 3 },
  { input: 2, expected: 5 },
  { input: 3, expected: 7 }
];

const learningRate = 0.05;

for (let step = 0; step < 500; step++) {
  for (const { input, expected } of trainingData) {
    const guess = predict(input);
    const error = guess - expected; // how far off the guess is

    // Work backward: slightly turn the knobs to reduce the error
    weight -= learningRate * error * input;
    bias -= learningRate * error;
  }
}

console.log(weight.toFixed(2), bias.toFixed(2));
// Output: close to 2.00 and 1.00 -> the parameters LEARNED the pattern

console.log(predict(10).toFixed(1));
// Output: close to 21.0 -> better future predictions

// Real models do the same thing, just with billions of parameters.


// Where parameters live in a Transformer

+------------+-----------------------+----------------------------------------+
| Component  | Parameters / weights  | Note                                   |
+------------+-----------------------+----------------------------------------+
| Embeddings | Embedding vectors     | A token's embedding contains parameters|
| Attention  | Wq, Wk, Wv, Wo        | Query, Key, Value, Output weights      |
| Layer Norm | gamma, beta           | Scale and shift                        |
| FFN        | W1, W2, ...           | Feed forward layer weights             |
+------------+-----------------------+----------------------------------------+


// Weights vs Biases

+---------+----------------------------------------------------------+
| Type    | Role                                                     |
+---------+----------------------------------------------------------+
| Weights | Volume dials: decide how important a specific input is   |
| Biases  | Shifting offsets: help decisions even when inputs are low|
+---------+----------------------------------------------------------+


// Scale of parameters

+---------+-----------------------------------------------+
| Model   | Parameters                                    |
+---------+-----------------------------------------------+
| GPT-3   | 175,000,000,000 (175B)                        |
| GPT-4/5 | Trillions (not officially confirmed)          |
+---------+-----------------------------------------------+

// Parameters are the learned numerical values that determine
// the model's behavior. Patterns and knowledge learned during
// training are encoded across these parameters.`
  },
  {
    id: 'do-parameters-store-knowledge',
    title: 'Do Parameters Store Knowledge?',
    category: 'AI',
    slangDefinition: `Illa, exact ah illa. Parameters patterns and relationships ah dhan store pannum, aana humans facts ah memory la store panra madhiri knowledge illa memory ah store pannadhu. Example ku human "Chennai Tamil Nadu oda capital" nu oru fact ah nyabagam vechukuvanga, aana parameters apdi oru fact ah oru idathula save pannadhu. Adhukku badhila, training la paartha neraya text la irundhu patterns learn pannitu, adha numbers ah encode pannirukum. Algorithms indha learned parameters and patterns ah use panni, input ah process pannitu, namakku meaningful output kudukum. So parameters oru fact database madhiri illa, learned patterns oda collection madhiri.`,
    interviewDefinition: `No, not exactly. Parameters store patterns and relationships within themselves, but not knowledge or memory in the way humans store facts. A model does not keep a fact as a stored record in one place; instead, patterns learned during training are encoded across many parameters. The algorithms use these learned parameters and patterns to process input and produce meaningful output. So parameters behave like a collection of learned patterns rather than a database of facts.`,
    example: `// Do parameters store knowledge? -> No, not exactly.

// A database stores facts explicitly (like human memory of facts)
const factDatabase = {
  "capital of Tamil Nadu": "Chennai"
};
console.log(factDatabase["capital of Tamil Nadu"]); // "Chennai" (stored fact)

// Parameters do NOT look like this.
// They are just learned numbers encoding patterns and relationships.
const parameters = [0.12, -0.45, 0.78, 0.33, -0.91, 0.27 /* ...billions more */];

// No single parameter holds "Chennai" or "capital of Tamil Nadu".
// The patterns are spread across many parameters,
// and the algorithm uses them to process input
// and produce meaningful output.

+------------------------+--------------------------------------------------+
| Concept                | Meaning                                          |
+------------------------+--------------------------------------------------+
| Human memory / database| Stores facts explicitly                          |
| Parameters             | Store patterns and relationships (learned)       |
| Algorithm              | Uses parameters + patterns to process input and  |
|                        | give meaningful output                           |
+------------------------+--------------------------------------------------+`
  },
  {
    id: 'training-data-and-forward-pass',
    title: 'Training Data & Forward Pass',
    category: 'AI',
    slangDefinition: `Training data na, oru AI model ku solli kudukka use panra examples oda collection. Idha namma oru pudhu subject padikum bodhu use panra textbooks, flashcards, practice problems madhiri ninaichukalam. parameters neural network kulla irukum, training data dhan neural network ku kudukura feed. Training data nu solradhu, neural network ku kudukka possible ah irukura ella valid information um. Ippo training eppadi nadakkum nu paapom, first step "Forward Pass". Example ku "The Sky is _____" nu oru input kudukuromnu vechukalam. Input multiple layers (attention, FFN, layer norm, linear, softmax) vazhiya poi output varum. Output la banana ku 0.85 nu high probability varudhu nu vechukalam, green 0.61, beautiful 0.55, blue 0.20, best 0.15. Aana namakku theriyum, sky blue, beautiful, illa dark ah irukalam, banana ah irukave mudiyadhu. Correct prediction "blue". Adhanala model illa neural network sariya train aagala nu artham, adhunaala dhan wrong prediction kudukudhu, adhu "untrained" model. So parameters ah adjust pannanum, apo dhan correct output predict aagum, blue ku banana vida higher value kidaikum. green, banana arrow keela pogum (value reduce aaganum), blue, beautiful arrow mela pogum (value increase aaganum).`,
    interviewDefinition: `Training data is the collection of examples used to teach an artificial intelligence model. Think of it as the textbooks, flashcards, and practice problems you use when learning a new subject. Parameters are inside the neural network, and training data is the feed for the neural network: all the valid information fed to it. Training starts with a Forward Pass. Suppose the input is "The Sky is _____". The input travels forward through the multiple layers of the model (attention, feed-forward, layer norm, linear, softmax) and produces output probabilities. For example, an untrained model might output banana = 0.85, green = 0.61, beautiful = 0.55, blue = 0.20, best = 0.15. The sky can be blue, beautiful, or dark, but not banana, and the correct prediction here is "blue". The high probability for banana shows the neural network is not trained properly. The parameters therefore need to be adjusted so that the correct output is predicted and blue gets a higher value than banana: wrong tokens like banana and green should go down, while correct ones like blue should go up.`,
    example: `// Training Data & Forward Pass

// Training data: examples used to teach the model
const trainingData = [
  { input: "The Sky is", correct: "blue" }
  // ...many more examples (the "feed" for the neural network)
];

// Forward Pass: input flows through the untrained model's layers
function forwardPass(input) {
  // input -> token embedding + positional embedding
  //       -> multiple Transformer layers (attention, FFN, layer norm)
  //       -> linear -> softmax -> probabilities
  return {
    banana: 0.85,
    green: 0.61,
    beautiful: 0.55,
    blue: 0.20,
    best: 0.15
  };
}

const output = forwardPass("The Sky is");
console.log(output);

const prediction = Object.entries(output).sort((a, b) => b[1] - a[1])[0][0];
console.log(prediction);
// Output: "banana" -> WRONG, model is untrained

const correct = trainingData[0].correct;
console.log(correct);
// Output: "blue"

// Parameters must be adjusted so blue gets a higher value than banana


+-----------+-------------+----------------------+
| Token     | Probability | What should happen   |
+-----------+-------------+----------------------+
| banana    | 0.85        | Go down              |
| green     | 0.61        | Go down              |
| beautiful | 0.55        | Go up                |
| blue      | 0.20        | Go up (correct)      |
| best      | 0.15        | Go down              |
+-----------+-------------+----------------------+

+----------------+---------------------------------------------------------+
| Term           | Meaning                                                 |
+----------------+---------------------------------------------------------+
| Parameters     | Inside the neural network                               |
| Training data  | The feed for the neural network                         |
| Forward pass   | Input flows through layers to produce a prediction      |
+----------------+---------------------------------------------------------+`
  },
  {
    id: 'loss-function',
    title: 'Loss Function',
    category: 'AI',
    slangDefinition: `Loss function na, prediction evlo mosama irukunu numerical ah measure panra tool. Idhu prediction oda quality ah oru number ah convert pannum. Correct prediction na small loss, romba thappana prediction na large loss. Idha oru strict aana helpful teacher test paper grade panra madhiri ninaichukalam, AI evlo mistakes pannutho avlo loss score athigam. Example ku "The sky is ____" nu eduthukalam, correct answer "blue". Prediction A la blue 90% nu solluchu na LOSS = LOW. Prediction B la blue 2%, banana 80% nu solluchu na LOSS = HIGH. AI oda ultimate goal indha loss score ah zero ku mudinja varaikum close ah kondu vara. Low loss na model nalla velai pannudhu nu artham. Loss ah vechi dhan knobs, adhavadhu parameters adjust aagum. Idhu oru repeated loop: predict and adjust. Aana oru problem irukku, parameters thousands, millions, illa billions kooda irukalam. Endha parameters dhan indha mistake ku responsible? Ovvoru parameter um eppadi change aaganum? Banana prediction aachu, blue correct nu iruntha, andha wrong prediction ku responsible parameters ah dhan target pannuvom. Forward pass na, input AI model vazhiya poi prediction produce panra journey. Idha oru one-way assembly line madhiri ninaichukalam, input aarambathula kudupu, pala processing stations (layers) vazhiya poi, last la finished product ah varum. "The sky is ___" nu input kudukurom, AI andha words ah numbers ah convert pannum, network vazhiya anuppi learned weights oda multiply panni context analyze pannum, next possible words ku probabilities calculate panni best guess ah output kudukum.`,
    interviewDefinition: `A loss function is a numerical way to measure how bad a prediction is. It converts the quality of a prediction into a number: a correct prediction gives a small loss, and a very wrong prediction gives a large loss. It is like a strict but helpful teacher grading a test: the more mistakes the AI makes, the higher the loss score. For "The sky is ____" with the correct answer "blue", a prediction giving blue 90% has a low loss, while a prediction giving blue 2% and banana 80% has a high loss. The ultimate goal is to get the loss as close to zero as possible, and low loss means the model is doing well. According to the loss, the parameters (the knobs) are adjusted, in a repeated loop of predict and adjust. The challenge is that there may be thousands, millions, or billions of parameters: which parameters were responsible for the mistake, and how should each one change? A forward pass is the journey data takes through an AI model to produce a prediction, like a one-way assembly line where the input enters at the beginning, travels through various processing stations (layers), and emerges as a finished product at the end. For "The sky is ___", the words are converted into numbers, passed through the network where they are multiplied by learned weights to analyze context, and the network calculates probabilities for the next possible word and outputs its best guess.`,
    example: `// Loss Function

// Loss measures HOW BAD a prediction is
// Common choice: cross-entropy loss = -log(probability given to the correct answer)
function loss(probabilityOfCorrectAnswer) {
  return Number((-Math.log(probabilityOfCorrectAnswer)).toFixed(2));
}

// Input: "The sky is ____"   Correct answer: "blue"

// Prediction A: blue = 90%
const predictionA = { blue: 0.90 };
console.log(loss(predictionA.blue));
// Output: 0.11 -> LOSS = LOW

// Prediction B: blue = 2%, banana = 80%
const predictionB = { blue: 0.02, banana: 0.80 };
console.log(loss(predictionB.blue));
// Output: 3.91 -> LOSS = HIGH

// Training loop: predict -> measure loss -> adjust parameters -> repeat
// Goal: bring the loss as close to zero as possible.


+--------------+-----------------------------+---------+
| Prediction   | Probabilities               | Loss    |
+--------------+-----------------------------+---------+
| A            | blue 90%                    | LOW     |
| B            | blue 2%, banana 80%         | HIGH    |
+--------------+-----------------------------+---------+

+--------------------+--------------+
| Prediction quality | Loss         |
+--------------------+--------------+
| Correct            | Small loss   |
| Very wrong         | Large loss   |
+--------------------+--------------+


// Forward pass: one-way assembly line
// Input -> numbers -> layers (weights) -> probabilities -> best guess

+--------+-----------------------------------------------------------+
| Stage  | What happens                                              |
+--------+-----------------------------------------------------------+
| Input  | "The sky is ___"                                          |
| Process| Words become numbers, pass through layers, multiplied by  |
|        | learned weights to analyze context                        |
| Output | Probabilities for the next word, best guess: "blue"       |
+--------+-----------------------------------------------------------+

// Open question after computing the loss:
// There may be thousands, millions, or billions of parameters.
// Which parameters were responsible for the mistake?
// And how should each one change?`
  },
  {
    id: 'back-propagation',
    title: 'Back Propagation (Backward Pass)',
    category: 'AI',
    slangDefinition: `Wrong prediction ku responsible parameters ah kandupidichu, layer by layer pinnaadi poi adjustments pannuvom, adhu dhan Back Propagation. Idhu ovvoru parameter ah change panna loss enna aagum nu calculate pannum. Deep learning la backward pass (backpropagation) na, AI thanoda mistakes la irundhu learn panra vazhi. Oru guessing game madhiri ninaichukalam. Forward Pass: AI "The sky is ___" prompt eduthukittu "Banana" nu guess pannum. Calculate Loss: "Thappu, correct answer Blue, un guess romba dhooram" nu AI ku solluvom, indha error ku dhan loss nu per. Backward Pass: AI thanoda internal network vazhiya pinnaadi poi, internal settings (weights) ah adjust pannum, adhanala adutha thadava "The sky is..." paatha "Banana" ku badhila "Blue" nu guess panna chance athigam aagum. "The sky is" input layer A, B, C vazhiya poi "banana" nu wrong output varudhu. Backpropagation output la irukura error la irundhu aarambichu pinnaadi velai pannum. Layer C evlo contribute pannuchu? Layer C la ovvoru weight um evlo contribute pannuchu? Layer B epdi? B la irukura weights epdi? Layer A kum same maadhiri. Idhu loss ku ovvoru parameter oda sensitivity ah calculate pannum. Mathematical ah indha sensitivities ku "gradients" nu per (technical ah partial derivatives). Backpropagation indha gradients ah efficient ah calculate pannum. output layer la (loss calculate panna aprom) total error ku Layer C parameters evlo contribute pannuchu nu paapom, ovvoru weight um evlo adjust aaganum nu paapom. Apparam pinnaadi poi Layer C oda gradient theriyum bodhu Layer B parameters evlo contribute pannuchu nu paapom. Appadiye Layer B la irundhu A ku, ella munnadi layers kum same process.`,
    interviewDefinition: `Backpropagation (the backward pass) calculates how changing each parameter would affect the loss. Once we know which parameters caused the wrong prediction, we go back layer by layer and make adjustments. It is how an AI learns from its mistakes. In a guessing game: in the Forward Pass the AI takes the prompt "The sky is ___" and guesses "Banana". In Calculate Loss we tell it the correct answer is Blue and its guess was far off; this error is called the loss. In the Backward Pass the AI travels backward through its internal network and adjusts its weights so that next time it is much more likely to guess "Blue" instead of "Banana". Backpropagation is an algorithm used in machine learning to optimize neural networks. It starts from the error at the output and works backward, layer by layer. How much did Layer C contribute to the total error, and how much did each weight in Layer C contribute? Knowing Layer C's gradient, how much did the parameters of Layer B contribute? And similarly for Layer A and all preceding layers. It calculates the sensitivity of the loss to each parameter (weights and biases). Mathematically, these sensitivities are partial derivatives, called gradients, and backpropagation efficiently calculates them.`,
    example: `// Back Propagation (Backward Pass)

// Network: input -> Layer A -> Layer B -> Layer C -> output
// Input: "The sky is"   Wrong prediction: "banana"   Correct: "blue"

// Simplified: output = wA * wB * wC * x
let wA = 0.8, wB = 0.5, wC = 0.9;
const x = 1;
const target = 1;      // the correct answer
const learningRate = 0.1;

for (let step = 0; step < 50; step++) {
  // 1. Forward pass
  const a = wA * x;
  const b = wB * a;
  const output = wC * b;

  // 2. Calculate loss (how wrong is the prediction?)
  const loss = (output - target) ** 2;
  if (step % 25 === 0) console.log("step", step, "loss", loss.toFixed(4));

  // 3. Backward pass: start from the error at the output, move backward
  const dLoss_dOutput = 2 * (output - target);
  const gradC = dLoss_dOutput * b;          // How much did Layer C contribute?
  const dLoss_dB = dLoss_dOutput * wC;
  const gradB = dLoss_dB * a;               // Layer B, using what we know from C
  const dLoss_dA = dLoss_dB * wB;
  const gradA = dLoss_dA * x;               // Layer A, similarly

  // 4. Adjust each parameter using its gradient
  wC -= learningRate * gradC;
  wB -= learningRate * gradB;
  wA -= learningRate * gradA;
}
// Loss keeps decreasing -> predictions get closer to the correct answer


+----------+-----------------------------------------------------------+
| Step     | What happens                                              |
+----------+-----------------------------------------------------------+
| Forward  | "The sky is ___" -> AI guesses "Banana"                   |
| Loss     | Correct answer is Blue, guess was far off -> large loss   |
| Backward | Travel backward, adjust weights so "Blue" is more likely  |
+----------+-----------------------------------------------------------+

+---------+------------------------------------------------------------+
| Layer   | Question asked during backpropagation                      |
+---------+------------------------------------------------------------+
| Layer C | How much did C (and each weight in C) contribute to error? |
| Layer B | Using C's gradient, how much did B contribute?             |
| Layer A | Using B's gradient, how much did A contribute?             |
+---------+------------------------------------------------------------+

// Backpropagation calculates the sensitivity of the loss to each parameter.
// Mathematically, these sensitivities are called gradients (partial derivatives).`
  },
  {
    id: 'gradient',
    title: 'Gradient (Sensitivity)',
    category: 'AI',
    slangDefinition: `Gradient na, oru parameter (oru knob illa dial madhiri) la konjam change panna AI oda mistakes (loss) evlo increase illa decrease aagum nu measure panra value. AI ah oru game aadura madhiri ninaichukalam, adhu next word guess panna try pannum, ovvoru thappana guess kum points povum. Gradients ah paathu, AI ku exactly edhu "knobs" ah, edhu direction la thirupanum nu theriyum, appo dhan adutha thadava kammiya mistakes pannum. Technical ah solanumna, gradient namakku rendu vishayam solludhu: parameter edhu direction la move aaganum, and antha parameter ku loss evlo sensitive. Example ku oru weight 0.40 nu vechukalam. Gradient "indha weight ah increase panna loss increase aagum" nu solludhu. So adha konjam keela (downward) move pannalaam. Innoru weight mela (upward) move aaga vendiyadhu. Backpropagation indha information ah network full-aa compute pannum. Ippo oru kelvi varum: Backpropagation weights ah fix pannumaa? Answer: illa. Backpropagation thaane weights ah update pannanum nu avasiyam illa, adhu gradients ah dhan calculate pannum. Apparam oru optimization algorithm andha gradients ah use panni parameters ah update pannum.`,
    interviewDefinition: `Gradients are a measure of how much a change in a specific AI parameter (like a knob or dial) will increase or decrease the AI's mistakes (the loss). A gradient tells us which direction a parameter should move to change the loss and how sensitive the loss is to that parameter. By looking at the gradients, the AI learns exactly which knobs to turn, and in which direction, to make fewer mistakes next time. For example, suppose a particular weight is 0.40. The gradient may tell us that increasing this weight would increase the loss, so perhaps we should move it slightly downward, while another weight may need to move upward. Backpropagation computes this information throughout the network. Does backpropagation fix the weights? No. Backpropagation does not itself necessarily update the weights; it calculates the gradients. Then an optimization algorithm uses those gradients to update the parameters.`,
    example: `// Gradient (Sensitivity)

// One weight and a simple loss: loss = (weight - 0.25)^2
// (the "ideal" weight is 0.25, so loss is lowest there)
let weight = 0.40;

function loss(w) {
  return (w - 0.25) ** 2;
}

// Gradient = how sensitive the loss is to this weight, and which direction
function gradient(w) {
  return 2 * (w - 0.25);
}

const g = gradient(weight);
console.log(g.toFixed(2));
// Output: 0.30 -> positive: increasing the weight would INCREASE the loss
// So we should move the weight slightly DOWNWARD.

// Backpropagation only CALCULATES the gradient (above).
// An optimization algorithm then USES the gradient to update the parameter:
const learningRate = 0.5;
weight = weight - learningRate * g;
console.log(weight.toFixed(2)); // 0.25 -> loss is now lower
console.log(loss(0.40).toFixed(4), "->", loss(weight).toFixed(4));
// 0.0225 -> 0.0000


+---------------------------+------------------------------------------------+
| Gradient tells us         | Example (weight = 0.40)                        |
+---------------------------+------------------------------------------------+
| Direction to move         | Increasing it raises the loss -> move down     |
| Sensitivity of the loss   | How strongly the loss reacts to this weight    |
+---------------------------+------------------------------------------------+

+------------------------------+-------------------------------------------+
| Question                     | Answer                                    |
+------------------------------+-------------------------------------------+
| Does backpropagation fix     | No, it calculates gradients               |
| the weights?                 |                                           |
| Who updates the parameters?  | An optimization algorithm, using the      |
|                              | gradients                                 |
+------------------------------+-------------------------------------------+`
  },
  {
    id: 'gradient-descent',
    title: 'Gradient Descent',
    category: 'AI',
    slangDefinition: `Gradient Descent na, oru function ah (error illa loss madhiri) minimize panna use panra iterative optimization algorithm. Gradient oda opposite direction la parameters ah adjust pannuvom. Idhu dhan AI thanoda mistakes la irundhu learn panni better guesses panra vazhi. Example: nee oru foggy mountain la irukka, irutla, kizhe irukura bottom valley ah kandupidikanum. Path theriyaadhu, so un leg laa slope ah feel panni, keela pogura direction la oru chinna step edupa. Thirumba thirumba repeat pannuva. AI la "mountain" na computer panra mistakes oda alavu (error illa loss). Next word prediction la AI "the sky is banana" nu guess panna, adhu sense illa so error romba athigam. Algorithm antha guess evlo thappu nu exact ah calculate panni, AI oda internal settings (weights) ah step by step adjust pannum. Neraya small adjustments aprom, AI mistakes ah minimize panni "the sky is blue" nu correct ah guess pannum. Gradient Descent oda core components moonu: Loss Function, Gradient, Learning Rate. Loss function evlo thappu nu solum, gradient slope direction ah solum, learning rate ovvoru step evlo periya ah edukanum nu decide pannum. Neraya thadava repeat panna aprom model correct answer guess pannum. Optimization algorithms la different types irukku: Batch Gradient Descent, Stochastic Gradient Descent (SGD), Mini-Batch Gradient Descent.`,
    interviewDefinition: `Gradient descent is an iterative optimization algorithm used to minimize a function (like error or loss) by adjusting parameters in the opposite direction of the gradient. It is how an AI learns from its mistakes to make better guesses. Imagine walking down a foggy mountain in the dark, trying to find the very bottom valley: because you cannot see the path, you feel the slope of the ground with your feet and take a small step in the direction that goes downward, then repeat. In AI, the mountain is the amount of mistakes (error or loss). For next-word prediction, if the AI guesses "the sky is banana", the error is very high because it makes no sense. The algorithm calculates exactly how wrong the guess was and adjusts the AI's internal settings (weights) step by step to reduce the error. After many small adjustments, the AI minimizes its mistakes and correctly guesses that the sky is blue. The core components of gradient descent are the Loss Function (how wrong the prediction is), the Gradient (the slope direction), and the Learning Rate (how big each step is). There are different types of optimization algorithms: Batch Gradient Descent, Stochastic Gradient Descent (SGD), and Mini-Batch Gradient Descent.`,
    example: `// Gradient Descent

// Goal: find the weight with the lowest loss (bottom of the valley)
// Loss function: how wrong are we? (lowest at weight = 3)
function loss(w) {
  return (w - 3) ** 2;
}

// Gradient: slope direction at the current position
function gradient(w) {
  return 2 * (w - 3);
}

let weight = 0;            // starting somewhere on the "mountain"
const learningRate = 0.1;  // size of each small step

for (let step = 1; step <= 25; step++) {
  const g = gradient(weight);
  weight = weight - learningRate * g; // move OPPOSITE to the gradient
  if (step % 5 === 0) {
    console.log("step", step, "weight", weight.toFixed(3), "loss", loss(weight).toFixed(4));
  }
}
// Output (approx):
// step 5  weight 1.966 loss 1.0703
// step 10 weight 2.678 loss 0.1036
// step 15 weight 2.887 loss 0.0128
// step 20 weight 2.964 loss 0.0013
// step 25 weight 2.988 loss 0.0001
// Small steps, repeated -> loss keeps going down.


+---------------+-------------------------------------------------+
| Component     | Role                                            |
+---------------+-------------------------------------------------+
| Loss Function | Tells how wrong the prediction is               |
| Gradient      | Tells the slope direction                       |
| Learning Rate | Decides how big each step is                    |
+---------------+-------------------------------------------------+

+-------------------------------+-------------------------------------------+
| Foggy mountain analogy        | In AI                                     |
+-------------------------------+-------------------------------------------+
| Mountain                      | Error / loss                              |
| Slope you feel with your feet | Gradient                                  |
| Small step downward           | Weight update (using learning rate)       |
| Bottom of the valley          | Minimum loss ("the sky is blue")          |
+-------------------------------+-------------------------------------------+

Types of Gradient Descent:

+--------------------------------------------------+--------------------------------------------------+
| Main Types:                                      | Challenges:                                      |
+--------------------------------------------------+--------------------------------------------------+
| Batch Gradient Descent: Uses the entire          | Learning rate too small: Training takes          |
| dataset to compute the gradient for each         | forever.                                         |
| step; stable but slow on huge datasets.          |                                                  |
+--------------------------------------------------+--------------------------------------------------+
| Stochastic Gradient Descent (SGD): Uses a        | Learning rate too large: The algorithm           |
| single data point per step; fast, but            | overshoots the minimum and fails to              |
| noisy and fluctuates.                            | converge.                                        |
+--------------------------------------------------+--------------------------------------------------+
| Mini-batch Gradient Descent: Splits data         | Local minima or saddle points: The system        |
| into small subsets; strikes the best             | can get stuck where the slope is flat            |
| balance between speed and stability.             |                                                  |
+--------------------------------------------------+--------------------------------------------------+`
  },
  {
    id: 'training-loop',
    title: 'Training Loop (Sharpening the Brain)',
    category: 'AI',
    slangDefinition: `Ippo ellathayum serthu paatha, training oru loop madhiri nadakkum. First sample data eduthukuvom. Apparam Forward Pass nadakkum, model edhavadhu predict pannum. Adhukku aprom Loss calculate pannuvom, prediction evlo thappu nu paapom. Next Back Propagation nadakkum, gradients calculate aagum. Apparam Optimiser, adhavadhu Gradient Descent, andha gradients use panni parameters ah update pannum. Final ah model konjam better aagum. Idhu dhan training la nadakkudhu, idha thirumba thirumba, romba romba periya amount of training data ku repeat pannuvom. Idha dhan "Sharpening the Brain" nu solluvom. Ellame patterns dhan. Neraya text inputs kudukkuvom, model output guess pannum, words oda sequence ah recognize panna aarambikum. So adhu automatic ah learn pannum, konjam iterations aprom, sila tasks la humans-aa vida better answers kooda generate panna mudiyum.`,
    interviewDefinition: `To sum up, training is a repeated loop: sample data goes in, the forward pass makes a prediction, the loss is calculated, backpropagation computes the gradients, and an optimiser such as gradient descent uses them to update the parameters, producing a better model. This is repeated again and again over a huge amount of training data, which can be described as "sharpening the brain". It is all about patterns: multiple text inputs are given, the model guesses the output, and it starts recognizing the sequence of words. It learns automatically, and after enough iterations it can generate better answers than humans in some tasks.`,
    example: `// Training Loop

// Sample data -> Forward Pass -> Calculate Loss
// -> Back Propagation -> Optimiser (Gradient Descent) -> Better Model

// Tiny model: prediction = weight * input
let weight = 0.0;
const learningRate = 0.05;

// Sample data (the pattern to learn: output = 2 * input)
const trainingData = [
  { input: 1, expected: 2 },
  { input: 2, expected: 4 },
  { input: 3, expected: 6 }
];

for (let epoch = 1; epoch <= 100; epoch++) {          // repeat again and again
  for (const { input, expected } of trainingData) {   // sample data
    const prediction = weight * input;                // 1. Forward Pass
    const loss = (prediction - expected) ** 2;        // 2. Calculate Loss
    const gradient = 2 * (prediction - expected) * input; // 3. Back Propagation
    weight = weight - learningRate * gradient;        // 4. Optimiser (Gradient Descent)
  }
}

console.log(weight.toFixed(2));
// Output: 2.00 -> better model: it learned the pattern automatically


+----------------------------+
| Sample data                |
+----------------------------+
              |
              v
+----------------------------+
| Forward Pass               |
+----------------------------+
              |
              v
+----------------------------+
| Calculate Loss             |
+----------------------------+
              |
              v
+----------------------------+
| Back Propagation           |
+----------------------------+
              |
              v
+----------------------------+
| Optimiser                  |
| Gradient Descent           |
+----------------------------+
              |
              v
+----------------------------+
| Better Model               |
+----------------------------+

// Repeat again and again for a huge amount of training data
// -> "Sharpening the Brain"`
  },
  {
    id: 'training-at-scale',
    title: 'Training at Scale',
    category: 'AI',
    slangDefinition: `Models ah billions illa trillions of samples ku train pannuvom. Slowly and steadily, model neraya vishayam recognise pannum. first, serndhu varra words oda sequence ah recognise pannum. Apparam grammar, sentence structure, and long text inputs la words ku nadula irukura relationship ellam learn pannum. Neraya mathematical calculations aprom, model last la output generate panna aarambikum. Aana indha full process ku romba athigam computational power and GPUs venum, yenna na idhu thirumba thirumba nadakkura repeated process. Adhanala dhan periya models train panna company kitta periya compute resources irukanum.`,
    interviewDefinition: `Models are trained on billions or trillions of samples. Slowly and steadily, the model learns to recognise sequences of words that come together, grammar, sentence structure, and relationships between words in long text inputs. After a very large number of mathematical calculations, models finally generate outputs. This whole process takes a lot of compute and power (GPUs), because training is a repeated process that runs the same loop of forward pass, loss, backpropagation, and optimisation again and again over a huge amount of data.`,
    example: `
+------------------------------------------------------------------------+
| We train models for Billions/Trillions of samples.                     |
+------------------------------------------------------------------------+
| Slowly and steadily, the model learns:                                 |
|   - To recognise sequences of words that come together                 |
|   - Grammar                                                            |
|   - Sentence structure                                                 |
|   - Relationships between words in long text inputs                    |
+------------------------------------------------------------------------+
| After lots and lots of mathematical calculations, models finally       |
| generate outputs (sometimes even better than humans).                  |
+------------------------------------------------------------------------+
| This whole process takes a lot of compute/power (GPUs), because it     |
| is a repeated process.                                                 |
+------------------------------------------------------------------------+`
  },
  {
    id: 'self-supervised-learning-and-training-terminologies',
    title: 'Self-Supervised Learning & Training Terminologies',
    category: 'AI',
    slangDefinition: `Self-supervised learning na, model thaane learn pannikum, namma yaaraavadhu manually ovvoru sentence ah label panna theva illa. Normal ah oru person images ah "cat" illa "dog" nu mark pannuvaanga, aana inga system raw, unlabeled data (millions of internet sentences, images) paathu, adhula konjam part ah hide pannum. Apparam andha missing pieces ah guess panna try pannum, example ku sentence la next word predict panradhu. Inga next token dhan "target" aagum, so label thaane data kulla irundhu kidaichidum. Indha guessing game ah billions of times practice panna, AI thaane patterns, structures, meanings ellam figure out pannikum. Oru important point, neural networks usually oru magical update la oru concept ah learn pannadhu, repeated optimisation moolama dhan useful behaviour varum. Ippo training terminologies paapom. Dataset na ella training examples um. Batch na serthu process panra oru group of examples. Example ku example -> update, example -> update nu oru oru example ku thaniya update panradhuku badhila, batch of examples -> average loss calculate -> parameters update nu process pannuvom. GPUs parallel processing panna mudiyum, adhanala batches la process pannuvom, sequential ah pannina romba neram aagum. Training step na oru optimisation update, forward and backward pass nyabagam irukku la, adhu dhan. Epoch na training dataset full-aa oru thadava poradhu, adhu batch kooda vera. Epoch ah oru exam ku textbook padikara madhiri ninaichukalam, book ah cover to cover oru thadava padicha adhu oru epoch. AI models oru thadava paathu ellathayum learn pannadhu, so dozens illa hundreds of epochs same dataset vazhiya poganum. Ovvoru epoch la model data analyze panni, mistakes pannitu, internal settings ah adjust panni, adutha round ku smarter and more accurate aagum.`,
    interviewDefinition: `Self-supervised learning is a type of machine learning where a model teaches itself without humans manually labeling data. Instead of a person marking images as "cat" or "dog", the system looks at raw, unlabeled data, such as millions of internet sentences or pictures, hides parts of it, and tries to guess the missing pieces, for example predicting the next word in a sentence. For language models, the next token becomes the "target", so the labels come from the data itself. By practicing this guessing game billions of times, the model learns the underlying patterns, structures, and meanings on its own. Neural networks usually do not learn a concept from one magical update; useful behaviour emerges through repeated optimisation. Key training terminologies: a Dataset is all the training examples. A Batch is a group of examples processed together; instead of example -> update for each example, we process a batch of examples, calculate the average loss, and update parameters. GPUs support parallel processing, so processing in batches is much faster than processing sequentially. A Training Step is one optimisation update (a forward pass, loss calculation, backward pass, and parameter update). An Epoch is one complete pass through the training dataset, which is different from a batch. It is like reading a whole textbook cover to cover once. Models cannot learn everything from one look, so they usually go through the same dataset for dozens or hundreds of epochs, analyzing the data, making mistakes, and adjusting internal settings to become more accurate each round.`,
    example: `// Self-supervised learning: the next token becomes the "target"
// No manual labeling needed, labels come from the data itself

const sentence = ["The", "sky", "is", "blue"];

const trainingExamples = [];
for (let i = 1; i < sentence.length; i++) {
  trainingExamples.push({
    input: sentence.slice(0, i),
    target: sentence[i]
  });
}
console.log(trainingExamples);
// [
//   { input: ["The"], target: "sky" },
//   { input: ["The", "sky"], target: "is" },
//   { input: ["The", "sky", "is"], target: "blue" }
// ]


// Dataset, Batch, Training Step, Epoch
const dataset = [1, 2, 3, 4, 5, 6, 7, 8]; // all training examples
const batchSize = 4;
const epochs = 3;
let trainingSteps = 0;

for (let epoch = 1; epoch <= epochs; epoch++) {          // Epoch: one pass through the dataset
  for (let i = 0; i < dataset.length; i += batchSize) {
    const batch = dataset.slice(i, i + batchSize);        // Batch: group of examples
    // calculate average loss for the batch -> update parameters
    trainingSteps++;                                      // Training step: one optimisation update
  }
}
console.log(trainingSteps);
// Output: 6 (2 batches per epoch x 3 epochs)


+---------------+-----------------------------------------------------------+
| Term          | Meaning                                                   |
+---------------+-----------------------------------------------------------+
| Dataset       | All training examples                                     |
| Batch         | A group of examples processed together                    |
| Training step | One optimisation update                                   |
| Epoch         | One pass through the training dataset                     |
+---------------+-----------------------------------------------------------+

+--------------------------------------+------------------------------------------------+
| Instead of (one by one)              | We often process (batch)                       |
+--------------------------------------+------------------------------------------------+
| example -> update                    | batch of examples                              |
| example -> update                    |   -> calculate average loss                    |
| example -> update                    |   -> update parameters                         |
+--------------------------------------+------------------------------------------------+

// GPUs support parallel processing, so we process data in batches.
// Neural networks usually do not learn a concept from one magical update.
// Useful behaviour emerges through repeated optimisation.`
  },
  {
    id: 'generalization',
    title: 'Generalization',
    category: 'AI',
    slangDefinition: `Generalization na, model directly memorize pannaadha examples la kooda nalla perform panra ability. AI la idhu enna na, machine learning model past data la learn pannadha, pudhu situations ku apply panra ability. Adhavadhu AI training la paartha exact examples ah mattum memorize pannama, andha examples oda underlying concepts and rules ah purinjikum. Example ku oru AI sunny days oda images la train aachu na, sky blue nu learn pannum. Pinnaadi oru stormy day picture paatha "sky is gray" nu correctly predict panna, adhu successfully generalize pannirukku. "Sky" nu broad concept ah oru completely pudhu context ku apply pannirukku, original training ah appadiye repeat pannala. Innoru example: training data la "The sky is blue" nu mattum paathirukkum. Ippo model ku "The clear afternoon sky looked ________" nu oru sentence kudukuromnu vechukalam. Indha exact sentence training la varala, aana oru useful model adhukkum "blue" nu produce panna mudiyum. adhavadhu training examples ah mattum memorize pannama, Oru useful model generalize pannanum. Good learning na, exact training examples ku useful ah irukura patterns ah kandupidikuradhu.`,
    interviewDefinition: `The ability to perform well on examples it did not directly memorize is called generalization. Generalization in AI is the ability of a machine learning model to apply what it has learned from past data to brand-new, unseen situations. It means the AI does not just memorize the exact examples it was trained on; instead, it understands the underlying concepts and rules. For example, if an AI is trained on images of sunny days, it learns that the sky is blue. If it later sees a picture of a stormy day and correctly predicts that the sky is gray, it has successfully generalized, applying the broad concept of "sky" to a completely new context rather than just repeating its original training. Similarly, if the training data contains only "The sky is blue" and the model later sees "The clear afternoon sky looked ________", an exact sentence that never appeared in training, a useful model can still produce "blue". a useful model should generalize rather than memorizing training data. Good learning means discovering patterns that remain useful beyond the exact training examples.`,
    example: `
// Training data
const trainingData = ["The sky is blue"];

// New input the model has never seen
const newInput = "The clear afternoon sky looked ________";

// The exact sentence never appeared in training,
// but a useful model can still produce:
const prediction = "blue";
console.log(prediction); // "blue"

// Memorizing vs generalizing
function memorizingModel(input) {
  // Overfitting: only works for exact training examples
  return trainingData.includes(input) ? "blue" : "unknown";
}

function generalizingModel(input) {
  // Learned the underlying pattern: "sky" -> "blue"
  return input.toLowerCase().includes("sky") ? "blue" : "unknown";
}

console.log(memorizingModel(newInput));   // "unknown" -> memorized only
console.log(generalizingModel(newInput)); // "blue" -> generalized


+-----------------------------------------+--------------------------------------------+
| Memorizing (overfitting)                | Generalization                             |
+-----------------------------------------+--------------------------------------------+
| Works only on exact training examples   | Works on unseen examples too               |
| Repeats original training               | Applies learned concepts to new contexts   |
+-----------------------------------------+--------------------------------------------+

// Sunny-day images -> "sky is blue"
// Stormy-day picture -> correctly predicts "sky is gray"
// The model applied the broad concept of "sky" to a completely new context.

// Good learning means discovering patterns that remain useful
// beyond the exact training examples.`
  },
  {
    id: 'overfitting',
    title: 'Overfitting',
    category: 'AI',
    slangDefinition: `Overfitting na, oru model training examples la romba nalla perform pannum, aana pudhu examples la mosama perform pannum. Simple ah solanumna, computer training data ah romba perfect ah learn pannidum, specific examples ah memorize pannidum, aana big picture ah purinjika maatum. Memorize pannuradhala, pudhu information ah face pannum bodhu fail aagidum. Example ku oru AI ku "the sky is blue" nu 100 sunny day pictures vechi solli kudukurom nu vechukalam. AI overfit aana, sky blue ah mattum dhan irukkum nu decide pannidum. Appo oru stormy night picture kaatitu "the sky is ____" nu kekkum bodhu, overfitted AI innum confident ah "blue" nu dhan answer pannum, yenna na weather maarum nu learn pannaama oru rigid rule ah memorize pannirukku. Idhu generalization ku opposite.`,
    interviewDefinition: `A model is overfitting when it becomes extremely good at training examples but performs poorly on new examples. Overfitting in AI happens when a computer learns the training data too perfectly, memorizing specific examples instead of understanding the big picture. Because it memorizes instead of learning, it can fail when facing new information. For example, if you teach an AI the phrase "the sky is blue" using 100 pictures of sunny days and it overfits, it decides that the sky can only be blue. When you show it a picture of a stormy night and ask "the sky is ____", the overfitted AI will still confidently answer "blue" because it memorized a rigid rule instead of learning that the weather changes. Overfitting is the opposite of generalization.`,
    example: `
// Training data: 100 pictures of sunny days
const trainingData = Array(100).fill({ scene: "sunny day", sky: "blue" });

// Overfitted model: memorized a rigid rule -> "sky is ALWAYS blue"
function overfittedModel(scene) {
  return "blue"; // same answer for every scene
}

// Test with training-like data
console.log(overfittedModel("sunny day"));    // "blue" -> perfect on training data

// Test with new data: a stormy night
console.log(overfittedModel("stormy night")); // "blue" -> confidently WRONG
// Correct answer would be: "dark" / "gray"

// A generalizing model would learn that weather changes:
function generalizedModel(scene) {
  const skyBySceneType = { "sunny day": "blue", "stormy night": "dark" };
  return skyBySceneType[scene] ?? "depends on the weather";
}
console.log(generalizedModel("stormy night")); // "dark"


+--------------------------+----------------------------+----------------------------+
|                          | Training examples          | New examples               |
+--------------------------+----------------------------+----------------------------+
| Overfitted model         | Extremely good             | Performs poorly            |
| Generalizing model       | Good                       | Good                       |
+--------------------------+----------------------------+----------------------------+

// Overfitting: memorizing specific examples instead of understanding the big picture.
// It is the opposite of generalization.`
  },
  {
    id: 'distributed-training',
    title: 'Distributed Training',
    category: 'AI',
    slangDefinition: `Oru frontier-scale model ah train panradhu, machine learning problem ah irukkum and oru periya distributed system problem ah irukkum. Distributed training na, AI model ku solli kudukura periya velai ah oru computer ku badhila, multiple computers ku (nodes nu solvom) split panni pannuradhu. Idha oru periya party ku 1000's of cookies bake panra madhiri vechikalam. Oru aal thaniya pannina naal kanakka aagum. Pathu friends ah kooptu, ovvoruthar kum oru mixing bowl kuduthuta, fast-aa mudichidalam. AI la oru single computer billions of data pieces la irundhu learn panna weeks edukkalam, adhoda romba heat aagalam illa memory full aagalam. Periya dataset ah illa AI model ah chinna pieces ah break pannina, computers ellam same time la velai pannalaam, learn pannadha share pannikalam, training ah months ku badhila hours la mudichidalam.`,
    interviewDefinition: `Training a frontier-scale model is a large distributed system problem as much as it is a machine learning problem. Distributed training in AI means splitting the massive job of teaching an AI model across multiple computers (called nodes) instead of using just one. It is like baking thousands of cookies for a big party: one person alone takes days, but ten friends each with a mixing bowl finish in a few hours. In AI, a single computer might take weeks to learn from billions of data pieces and could grow too hot or run out of memory. By breaking the huge dataset or the AI model itself into smaller pieces, the computers can work at the same time, talk to each other to share what they learned, and finish the training in hours instead of months.`,
    example: `
const dataset = Array.from({ length: 1000 }, (_, i) => "sample-" + i);

// Single computer: processes everything alone (slow, may overheat or run out of memory)
function trainOnSingleComputer(data) {
  return "Processed " + data.length + " samples on 1 computer (weeks)";
}

// Distributed training: split the job across multiple computers (nodes)
function splitAcrossNodes(data, nodeCount) {
  const size = Math.ceil(data.length / nodeCount);
  return Array.from({ length: nodeCount }, (_, i) =>
    data.slice(i * size, (i + 1) * size)
  );
}

const nodes = splitAcrossNodes(dataset, 10);
nodes.forEach((chunk, i) => {
  console.log("Node " + (i + 1) + " trains on " + chunk.length + " samples");
});
// Each node works at the same time, then the nodes talk to each other
// to share what they learned.


+-----------------------+------------------------------+------------------------------+
|                       | Single computer              | Distributed training         |
+-----------------------+------------------------------+------------------------------+
| Work                  | One computer does everything | Split across multiple nodes  |
| Time                  | Weeks / months               | Hours                        |
| Risk                  | Overheating, out of memory   | Work is shared               |
+-----------------------+------------------------------+------------------------------+

+------------------------------+-----------------------------------------------+
| Cookie analogy               | In AI                                         |
+------------------------------+-----------------------------------------------+
| One person bakes alone       | One computer trains alone                     |
| Ten friends, ten mixing bowls| Multiple computers (nodes) train together     |
| Finished in a few hours      | Training finishes in hours instead of months  |
+------------------------------+-----------------------------------------------+`
  },
  {
  id: 'base-model-to-helpful-ai-assistant',
  title: 'Base Model to Helpful AI Assistant',
  category: 'AI',
  slangDefinition: `Base Model na, adhoda main velai next token ah predict panradhu mattum dhan. Idhu dhan oru model oda starting point. Aana namma ChatGPT madhiri oru helpful AI Assistant ah use panrom la, adhu base model ah appadiye illa. Base Model ah helpful AI Assistant ah maathanumna moonu steps irukku: Pre-Training, Training, Post-Training. Simple ah solanumna.`,
  interviewDefinition: `A Base Model is a model whose core ability is predicting the next token. To convert a Base Model into a helpful AI Assistant, there are 3 steps: Pre-Training, Training, and Post-Training.`,
  example: `
+------------------------------------------------------------------+
| Step 1: Pre-Training                                             |
+------------------------------------------------------------------+
                               |
                               v
+------------------------------------------------------------------+
| Step 2: Training                                                 |
+------------------------------------------------------------------+
                               |
                               v
+------------------------------------------------------------------+
| Step 3: Post-Training                                            |
+------------------------------------------------------------------+`
},
{
  id: 'common-crawl',
  title: 'Common Crawl (Pre-Training Step 1)',
  category: 'AI',
  slangDefinition: `Common Crawl na, web crawl data oda free, open repository, yaar venaalum use pannalaam. Idhu 19 varushama nadanthukittu irukku, 300 billion ku mela pages store aagi irukku, each month 3 to 5 billion pudhu pages add aagudhu. Common Crawl oru non-profit organization, internet oda periya, free, publicly accessible digital archive ah build panni maintain pannudhu. Idha oru giant open-source library madhiri ninaichukalam, automated bots continuous ah web ah browse panni, billions of web pages oda snapshots edukkum. Indha data ah private ah vechukama, internet oda copy ah ellarkum share pannum, adhanala researchers, businesses, software developers ku romba useful. Today advanced AI and language models train panna use panra main data sources la idhuvum onnu, adhu moolama models humans eppadi ezhudhuranga, communicate panranga, information share panranga nu learn pannum. Oru important point, raw web pages messy ah irukkum. Download pannina webpage clean training text irukadhu. Adhula HTML, JavaScript, navigation menus, cookie banners, ads, duplicate headers/footers, malformed text, mathu junk ellam irukalam. Different companies ku avangaloda own crawlers irukku, internet la irundhu specific data eduthukka, and data ah refine panna avangaloda own specific ways irukku. Common Crawl idhukku oru alternative public vazhi.`,
  interviewDefinition: `Common Crawl is a non-profit organization that maintains a free, open repository of web crawl data that can be used by anyone. It has been running for 19 years, stores over 300 billion pages, and adds 3 to 5 billion new pages every month. It works like a giant open-source library: automated bots constantly browse the web and take snapshots of billions of web pages, and the archive is shared publicly, which makes it very useful for researchers, businesses, and developers. It is one of the main data sources used to train advanced AI and language models, helping them learn how humans write, communicate, and share information. Raw web pages are messy, so a downloaded webpage is not clean training text; it may contain HTML, JavaScript, navigation menus, cookie banners, ads, duplicated headers/footers, malformed text, and other junk. Different companies have their own crawlers to collect specific data from the internet and their own ways to refine it, and Common Crawl is an alternative public option. This is Step 1 of Pre-Training.`,
  example: `
+------------------------------------------+
| Over 300 billion pages spanning 19 years |
| Free and open corpus since 2007          |
| Cited in over 10,000 research papers     |
| 3-5 billion new pages added each month   |
+------------------------------------------+


// A raw downloaded webpage is messy, not clean training text
const rawWebPage = \`
<html>
  <nav>Home | About | Contact</nav>
  <div class="cookie-banner">We use cookies...</div>
  <script>trackUser();</script>
  <div class="ad">Buy now!</div>
  <p>The sky is blue.</p>
  <footer>Copyright 2026</footer>
</html>
\`;

// The useful text is only a small part of the page
const usefulText = "The sky is blue.";
console.log(usefulText);

// Everything else is junk for training: HTML, JavaScript, navigation menus,
// cookie banners, ads, duplicated headers/footers, malformed text, etc.


+--------------------------------+------------------------------------------------+
| Approach                       | Description                                    |
+--------------------------------+------------------------------------------------+
| Company crawlers               | Own crawlers for specific data and own ways    |
|                                | to refine the data                             |
| Common Crawl                   | Public alternative: free, open web crawl data  |
|                                | that anyone can use                            |
+--------------------------------+------------------------------------------------+`
},
{
  id: 'fineweb',
  title: 'FineWeb (Pre-Training Step 2)',
  category: 'AI',
  imageUrl: 'fineweb-pipeline.png',
  slangDefinition: `FineWeb na, Common Crawl data ah Hugging Face LLM pre-training ku nu specifically process panni, romba clean aana dataset ah maathirukkanga. Idhula 15 trillion tokens, 44TB disk space irukku. FineWeb na internet la irundhu collect panna, AI models train panna use panra massive, high-quality text collection. Hugging Face nu AI research company dhan idha create pannadhu, spam, repetition, low-quality content ellam remove panni 15 trillion tokens clean ah vechirukkanga. AI models ku cleaner and better organized human language examples kudukumbodhu, avanga understand panni, ezhudhi, converse panradhu romba accurate ah irukum. Pipeline la neraya steps irukku: URL Filtering, Text Extraction, Language Filtering, Gopher Filtering, MinHash dedup, C4 Filters, Custom Filters, PII Removal, last la clean text output. FineWeb researchers FineWeb ah innum filter panni, educational-quality content ah mattum eduthu FineWeb-Edu nu produce pannanga. Original FineWeb paper 1.3T-token educational subset ah describe pannadhu, adhula train aana models knowledge and reasoning-heavy benchmarks la better performance kaattunadhu nu report pannanga. Filtering yen venum na, yaarum thangaloda private data ah, assistant kita kekum bodhu public ku kudukka virumba maatanga. adhanala training ku munnadiye filtering romba important velai. Mukkiyamana point: oru LLM build panradhu neural network design panradhu mattum illa, high-quality training dataset build panradhu thaane oru periya engineering and research problem.`,
  interviewDefinition: `FineWeb is essentially Common Crawl data that Hugging Face has processed into a much cleaner dataset specifically for LLM pre-training (15 trillion tokens, 44TB of disk space). It is a massive, high-quality collection of internet text created by Hugging Face, cleaned of spam, repetition, and low-quality content, so models learn from cleaner and better organized examples of human language. The FineWeb pipeline runs in this order: URL Filtering, Text Extraction, Language Filtering, Gopher Filtering, MinHash dedup, C4 Filters, Custom Filters, PII Removal, producing clean text output. The FineWeb researchers further filtered it for educational-quality content, producing FineWeb-Edu; the original paper described a 1.3T-token educational subset and reported better performance on several knowledge- and reasoning-heavy benchmarks for models trained on it. Filtering is required because no company wants private data exposed to the public through its assistant, and since no human can intervene in real time to review what is asked and answered, the cleanup must happen before training. LLMs should not be trained on private data or unwanted data. Building an LLM isn't only about designing the neural network; building a high-quality training dataset is itself a huge engineering and research problem.`,
  example: `

+---------------+      +-----------------+      +--------------------+      +------------------+
| URL Filtering | ---> | Text Extraction | ---> | Language Filtering | ---> | Gopher Filtering |
+---------------+      +-----------------+      +--------------------+      +------------------+
                                                                                      |
                                                                                      v
+---------------+      +-----------------+      +--------------------+      +------------------+
| PII Removal   | <--- | Custom Filters  | <--- | C4 Filters         | <--- | MinHash dedup    |
+---------------+      +-----------------+      +--------------------+      +------------------+
        |
        v
+-------------------+
| Clean text output |
+-------------------+


+-------------------------+--------------------------------------------------------------+
| Dataset                 | Description                                                  |
+-------------------------+--------------------------------------------------------------+
| Common Crawl            | Raw, messy web crawl data                                    |
| FineWeb                 | Common Crawl cleaned by Hugging Face for LLM pre-training    |
|                         | (15 trillion tokens, 44TB disk space)                        |
| FineWeb-Edu             | FineWeb further filtered for educational-quality content     |
|                         | (1.3T-token educational subset in the original paper)        |
+-------------------------+--------------------------------------------------------------+


// Why filtering is required
const unwantedData = ["private data", "adult content", "spam", "repetition", "low-quality content"];

// No human can intervene in real time to check what is asked and given,
// so filtering must happen BEFORE training.
console.log("Remove before training:", unwantedData);

// Building an LLM isn't only about designing the neural network.
// Building a high-quality training dataset is itself a huge
// engineering and research problem.`
},
{
  id: 'training-step-2',
  title: 'Training (Step 2) and the Base Model',
  category: 'AI',
  slangDefinition: `Training na, tokenization nadakkura, Transformer varra step. Loss function, forward pass, backward pass, gradients, apparam parameters ah thirumba thirumba adjust panra oru repeated loop, idhu ellam serndhu, namakku venumnu irukura result kedaikura varaikum nadakkuradhu dhan training. Pre-Training la Common Crawl, FineWeb madhiri clean pannina data ready aagum. Training la andha data ah tokens ah maathi, Transformer kulla anuppi, forward pass la prediction edukkum, loss calculate pannum, backward pass la gradients kandupidichu, parameters ah update pannum, idhu thirumba thirumba nadakkum. Pre-Training and Training rendum mudinja aprom namakku Base Model kedaikum. Base Model na next token predict panra model, adhu dhan Helpful AI Assistant aaga munnadi irukura nilai.`,
  interviewDefinition: `Training is the step where tokenization happens and the Transformer comes into play. The loss function, forward pass, backward pass, gradients, and a repeated loop of adjusting the parameters to get the desired result together are called training. The data prepared during Pre-Training (for example Common Crawl and FineWeb) is tokenized, passed through the Transformer for a forward pass to produce a prediction, the loss is calculated, the backward pass computes the gradients, and the parameters are updated, repeating this loop again and again. After Pre-Training and Training, we get the Base Model, a model that predicts the next token, which is the starting point for becoming a helpful AI assistant.`,
  example: `//

+--------------------------------------------------+
| Tokenization                                     |
+--------------------------------------------------+
                        |
                        v
+--------------------------------------------------+
| Transformer                                      |
+--------------------------------------------------+
                        |
                        v
+--------------------------------------------------+
| Forward Pass  ->  Loss Function                  |
+--------------------------------------------------+
                        |
                        v
+--------------------------------------------------+
| Backward Pass  ->  Gradients                     |
+--------------------------------------------------+
                        |
                        v
+--------------------------------------------------+
| Adjust Parameters                                |
+--------------------------------------------------+
                        |
                        v
        Repeat until the desired result is reached


+---------------+--------------------------------------------------------------+
| Stage         | What happens                                                 |
+---------------+--------------------------------------------------------------+
| Pre-Training  | Collect and clean data (Common Crawl, FineWeb)               |
| Training      | Tokenization, Transformer, loss function, forward pass,      |
|               | backward pass, gradients, repeated parameter adjustment      |
+---------------+--------------------------------------------------------------+
                        |
                        v
               +-----------------+
               | Base Model      |
               +-----------------+`
},
{
  id: 'base-model',
  title: 'Base Model',
  category: 'AI',
  slangDefinition: `Base model na, instruction and preference-based post-training moolama conversational assistant ah heavily shape aaga munnadi irukura, partially trained model. Idha foundation model nu kooda solvanga. Idhu massive amount of data la irundhu general patterns learn panna, periya pre-trained core program, pinnaadi neraya different specific tasks ku adapt pannalaam. Aana adhu innum ready illa. Example ku prompt: "Write a polite email declining the meeting". ChatGPT madhiri modern AI assistant "Here's a polite email: Hey, I'm sorry to inform you that I will not be able to attend the meeting due to ..........." nu answer pannum. Aana raw base model "Write a polite email declining the meeting without sounding rude. Keep it concise and professional." nu continue pannalaam, yenna na adhu just next token ah predict pannudhu. Idhunaala tuned model ku oru task kudutha proper result kudukum, aana base model namakku pidikaadha madhiri next token predict pannalaam. Base model, college la ippo thaan graduate aana student madhiri, tuned model andha same student oru specific job ku specialized training eduthu vandha madhiri. Post-training model eppadi behave pannanum nu paathukkum, noob answer madhiri illama. Romba knowledgeable person rude ah irukalam, aana model apdi irukka koodadhu. Knowledge um irukanum, humble ah um irukanum. Adhanaala dhan model ah tune pannrom, post-training venum. Yenna na model instructions ah follow pannanum, namma kelvikku desired tone la answer pannanum, structured output kudukanum, properly and humbly behave pannanum. Simple ah: Base Model is just predicting next token. ChatGPT is a helpful assistant, built to answer queries.`,
  interviewDefinition: `A base model is a partially trained model before it has been heavily shaped into a conversational assistant through instruction- and preference-based post-training. A base model (also called a foundation model) is a large, pre-trained core model that learns general patterns from massive amounts of data so it can later be adapted for many different specific tasks, but it is not ready for use as an assistant yet. For the prompt "Write a polite email declining the meeting", a modern AI assistant like ChatGPT would answer with an actual polite email, while a raw base model might simply continue the text, for example "Write a polite email declining the meeting without sounding rude. Keep it concise and professional.", because it is just predicting the next token. A tuned model gives a proper result for a task, whereas a base model may predict the next token in ways you do not want and will not reliably answer. A base model is like a student who just graduated from college, while a tuned model is the same student after specialized training for a specific job. Post-training takes care of how the model should behave: a highly knowledgeable person can still be rude, but a model should have knowledge and also be humble. That is why post-training is required: we need the model to follow instructions, answer in the desired tone, give structured output, and behave properly and humbly. In short, a base model is just predicting the next token, while ChatGPT is a helpful assistant built to answer queries.`,
  example: `// Base Model vs AI Assistant

// Prompt:
const prompt = "Write a polite email declining the meeting";

// A modern AI assistant like ChatGPT would answer:
const assistantOutput =
  "Here's a polite email: Hey, I'm sorry to inform you that I will not be able to attend the meeting due to ..........";

// But a raw base model might continue:
const baseModelOutput =
  "Write a polite email declining the meeting without sounding rude. Keep it concise and professional.";

console.log(assistantOutput);
console.log(baseModelOutput);


+----------------------------+--------------------------------------------------+
| Base Model                 | Tuned Model (AI Assistant)                       |
+----------------------------+--------------------------------------------------+
| Just predicts next token   | Built to answer queries                          |
| May not answer properly    | Gives a proper result for the task               |
| Like a fresh graduate      | Like the same student after job-specific training|
+----------------------------+--------------------------------------------------+


+---------------------------------------------+
| Why post-training is required               |
+---------------------------------------------+
| Follow instructions                         |
| Answer in the desired tone                  |
| Give structured output                      |
| Behave properly and humbly                  |
+---------------------------------------------+

// Base Model is just predicting next token.
// ChatGPT is a helpful assistant, built to answer queries.`
},
{
  id: 'post-training',
  title: 'Post-Training (Step 3)',
  category: 'AI',
  slangDefinition: `Post-Training na "model eppadi behave pannanum?" nu decide panra step. Base model ku next token predict panna mattum theriyum, adhanala post-training la adha oru helpful assistant ah maathuvom. Idhula model instructions ah follow pannanum, questions ku answer pannanum, desired tone la pesanum, thevai illadha illa thappana requests ah appropriately refuse pannanum, theriyadhadha theriyala nu uncertainty ah admit pannanum, output ah structure pannanum, conversational ah behave pannanum. Simple ah solanumna, pre-training and training la model knowledge learn pannum, post-training la andha knowledge ah eppadi use panni namakku nalla pesanum nu behavior learn pannum.`,
  interviewDefinition: `Post-training answers the question "How should the model behave?" After pre-training and training produce a base model that only predicts the next token, post-training shapes it into a helpful assistant. The model learns to follow instructions, answer questions, use the desired tone, refuse appropriately, admit uncertainty, structure its output, and behave conversationally. In short, the earlier stages give the model its knowledge and patterns, and post-training teaches it how to behave when using them.`,
  example: `// Post-Training: "How should the model behave?"

+----------------------------------------+
| Follow instructions                    |
| Answer questions                       |
| Use desired tone                       |
| Refuse appropriately                   |
| Admit uncertainty                      |
| Structure output                       |
| Behave conversationally                |
+----------------------------------------+


+-------------------+-------------------------------------------------------+
| Stage             | Focus                                                 |
+-------------------+-------------------------------------------------------+
| Pre-Training      | Collect and clean data                                |
| Training          | Learn patterns (next token prediction)                |
| Post-Training     | Learn how to behave (helpful assistant)               |
+-------------------+-------------------------------------------------------+

// Base Model -> Post-Training -> Helpful AI Assistant`
},
{
  id: 'supervised-fine-tuning',
  title: 'Supervised Fine-Tuning (SFT)',
  category: 'AI',
  slangDefinition: `Ippo varaikum namma pesinadhu ellam public ku usable ah irukkura madhiri maathuradhu SFT (Supervised Fine-Tuning) nala dhan possible. Fine-tuning na, already pre-trained aana oru model ah, oru smaller, more targeted dataset la continuous-aa train panradhu. Marubadiyum random parameters la irundhu start pannaadhu. Already capable aana pre-trained model (Base Model) + smaller specialised dataset + additional training = Fine-tuned Model. Yen scratch la irundhu thirumba create pannanum, just improve pannaa podhume. Supervised Fine-Tuning na, raw, general AI model ah helpful assistant ah maatha use panra training step. Adhukku correct questions and answers oda clear examples kuduthu, instructions ah follow panna solli kuduppom. Indha train aana model ku SFT Model nu per. Model ah chat la user um assistant um pesura madhiri answer panna train pannuvom. Oru mukkiyamana point, fine-tuning ku pudhusa oru learning mechanism illa. Adhe dhan: input -> prediction -> calculate loss -> backward pass -> update the parameters.`,
  interviewDefinition: `Fine-tuning means continuing the training of an already pre-trained model on a smaller, more targeted dataset. You do not start from random parameters again: an already capable pre-trained model (the base model) plus a smaller specialised dataset plus additional training gives a fine-tuned model. The idea is simple: why create it again from scratch, just improve it. Supervised Fine-Tuning (SFT) is the training step that turns a raw, general AI model into a helpful assistant by teaching it to follow instructions using clear examples of correct questions and answers. The resulting model is called an SFT Model, and it is trained to answer the way a user and an assistant interact in a chat. Fine-tuning does not introduce a new learning mechanism; it is the same loop: input -> prediction -> calculate loss -> backward pass -> update the parameters. Making the model usable for the public, as discussed so far, is possible because of SFT.`,
  example: `

// Fine-tuning = continue training an ALREADY pre-trained model
// on a smaller, more targeted dataset (no random restart)

// SFT dataset: clear examples of correct questions and answers
const sftDataset = [
  {
    user: "Write a polite email declining the meeting",
    assistant: "Here's a polite email: Hi, I'm sorry to inform you that I will not be able to attend the meeting due to ..."
  },
  {
    user: "What is the capital of France?",
    assistant: "The capital of France is Paris."
  }
];

// Same learning loop as before, no new learning mechanism:
// input -> prediction -> calculate loss -> backward pass -> update parameters
function fineTune(model, dataset) {
  for (const example of dataset) {
    const prediction = model.predict(example.user);          // input -> prediction
    const loss = model.calculateLoss(prediction, example.assistant);
    model.backwardPass(loss);                                // gradients
    model.updateParameters();                                // update parameters
  }
  return model; // SFT Model
}

console.log("Starts from the pre-trained base model, not random parameters");


+----------------------------------------+
| Already capable pre-trained model      |
| (Base Model)                           |
+----------------------------------------+
| + smaller specialised dataset          |
| + additional training                  |
+----------------------------------------+
                    |
                    v
+----------------------------------------+
| Fine-tuned Model (SFT Model)           |
+----------------------------------------+

// Why create again from scratch, just improve it.`
},
{
  id: 'instruction-tuning',
  title: 'Instruction Tuning',
  category: 'AI',
  slangDefinition: `Instruction tuning na, fine-tuning oda oru type, instructions ah follow panradhula specifically focus panra training. Idhu AI model ku, sentence la next word ah mattum predict panradhuku badhila, human commands ah eppadi follow pannanum nu puriya vekkum. Oru basic AI "The sky is..." nu phrase ah complete panna mattum theriyum. Aana instruction-tuned AI "Explain why the sky is blue" illa "Write a poem about the ocean" madhiri direct prompts ku correct ah answer pannum. Simple ah solanumna, raw text predictor ah, user kudukura specific tasks, recipes, rules ah safe ah and accurate ah follow panra helpful, conversational assistant ah maathudhu. Example ku Instruction: "Translate into Hindi: I love programming" nu irundha Response la Hindi translation varum. Instruction: "Summarise this paragraph in one sentence" nu irundha one sentence summary varum. Instruction: "Write this in JSON format" nu irundha JSON format la output varum. Indha madhiri data examples model ku "naan just text generate pannitu irundha podhaadhu, idhu oru task, adha perform pannanum" nu puriya vekkum. Adhanala JSON, poem, object madhiri specific type of output kettaa, nee kettadha madhiriye answer pannum. Idhu extra training, desired behavior ah model kitta irundhu vaanga. Desired input and instructions ku instruction tuning venum. Idhu ellam automatic ah nadakkum, algorithm la ezhudhi irukkum, nee concept mattum nyabagam vechukko, adhu nadakkum. Model summarization, rewriting, classification, programming madhiri different types of tasks la train aagum. Indha madhiri neraya data irukkurathala, user kettadha madhiriye model respond pannum. Idha dhan "Patterns appear magically" nu solrom.`,
  interviewDefinition: `Instruction tuning is a type of fine-tuning focused specifically on following instructions. It trains an AI model to follow human commands rather than just predict the next word in a sentence. A basic model might only know how to complete a phrase like "The sky is...", while an instruction-tuned model can answer direct prompts like "Explain why the sky is blue" or "Write a poem about the ocean." It transforms a raw text predictor into a helpful, conversational assistant that can safely and accurately follow the specific tasks, recipes, or rules given by a user. Training examples pair an instruction with a response, such as "Translate into Hindi: I love programming" with the Hindi translation, "Summarise this paragraph in one sentence" with a one-sentence summary, or "Write this in JSON format" with a JSON output. Such examples help the model understand that it should not just keep generating text; the input is a task that needs to be performed. Because of this, when a specific type of output such as JSON, a poem, or an object is requested, the model answers in the format that was asked. It is extra training to get the desired behavior from the model, and the model is trained on many types of tasks such as summarization, rewriting, classification, and programming. With enough data on these tasks, the model responds the way the user asked, and these patterns appear magically from the data.`,
  example: `

// A type of fine-tuning focused on following instructions
const instructionDataset = [
  {
    instruction: 'Translate into Hindi: "I love programming."',
    response: "मुझे प्रोग्रामिंग पसंद है।"
  },
  {
    instruction: "Summarise this paragraph in one sentence.",
    response: "..."
  },
  {
    instruction: "Write this in JSON format.",
    response: '{ "...": "..." }'
  }
];

// Base model: just continues the text
function baseModel(prompt) {
  return prompt + " ...keeps generating more text";
}

// Instruction-tuned model: understands the prompt is a TASK to perform
function instructionTunedModel(prompt) {
  if (prompt.includes("JSON")) {
    return '{ "answer": "..." }'; // answers in the format you asked
  }
  return "Performs the requested task";
}

console.log(baseModel("Write this in JSON format."));
console.log(instructionTunedModel("Write this in JSON format."));


+--------------------------------------+--------------------------------------------------+
| Base model                           | Instruction-tuned model                          |
+--------------------------------------+--------------------------------------------------+
| Completes a phrase: "The sky is..."  | Answers: "Explain why the sky is blue"           |
| Just predicts the next word          | Follows human commands                           |
| Keeps generating text                | Treats the input as a task that needs to be done |
+--------------------------------------+--------------------------------------------------+

+----------------------------------+
| Types of tasks the model learns  |
+----------------------------------+
| Summarization                    |
| Rewriting                        |
| Classification                   |
| Programming                      |
| Extraction                       |
| Programming                      |
| Structured Output                |
| Conversation                     |
| Translation                      |
| Proof Reading                    |
| ...and many more                 |
+----------------------------------+

// Such data examples help the model understand:
// "I don't just have to keep generating text, this is a task that needs to be performed."
// Patterns appear magically.`
},
{
  id: 'knowledge-of-self-is-hardcoded',
  title: 'Knowledge of Self is Hardcoded',
  category: 'AI',
  slangDefinition: `Model ah patthi personal questions kettaa, adhu kudukura answer hardcoded ah irukkum. "Who are you?", "Who built you?", "Who owns you?", "Where do you live?", "What's your name?" madhiri questions. Ex: ChatGPT yaaru built nu kettaa, adhu company name OpenAI nu dhan solum, CEO Sam Altman nu illa, vera ethavadhu engineer pera illa. Idhunaala indha madhiri questions ku sila default hardcoded answers irukku, adhu oru deterministic way of answering, adhavadhu thirumba thirumba kettaalum same answer dhan varum. Idhu fine-tuning time la kudukura training examples moolama model ku solli kudukkapadum. Model ku thannai patthi theriyum nu artham illa, adhu training la kudutha answers dhan.`,
  interviewDefinition: `When we ask a personal question about the model, such as "Who are you?", "Who built you?", "Who owns you?", "Where do you live?", or "What's your name?", the answer it gives can be hardcoded. For example, if you ask who built ChatGPT, it will answer with the company name OpenAI, not the CEO Sam Altman or any individual engineer. These are default hardcoded answers, a deterministic way of answering, so the same question gets the same kind of answer each time. Such answers are typically taught during fine-tuning through training examples, which means the model's knowledge about itself comes from what it was trained to say rather than from genuine self-awareness.`,
  example: `

// Questions about the model itself get default, deterministic answers
const selfKnowledge = {
  "Who are you?": "I am ChatGPT, an AI assistant.",
  "Who built you?": "OpenAI",
  "Who owns you?": "OpenAI",       // company name, not the CEO or an engineer
  "Where do you live?": "I'm an AI, I don't live anywhere physically.",
  "What's your name?": "ChatGPT"
};

function answerAboutSelf(question) {
  return selfKnowledge[question] ?? "Generate answer normally";
}

console.log(answerAboutSelf("Who owns you?"));
// Output: "OpenAI"  (same answer every time -> deterministic)


+----------------------+-----------------------------------------------+
| Question             | Hardcoded answer                              |
+----------------------+-----------------------------------------------+
| Who are you?         | Default answer                                |
| Who built you?       | Company name (OpenAI)                         |
| Who owns you?        | Company name (OpenAI), not Sam Altman         |
| Where do you live?   | Default answer                                |
| What's your name?    | Default answer                                |
+----------------------+-----------------------------------------------+

// These are deterministic, default answers taught during fine-tuning.`
},
{
  id: 'conversation-formatting',
  title: 'Conversation Formatting (System, User, Assistant Roles)',
  category: 'AI',
  slangDefinition: `Oru conversation la "You are helpful. What is JavaScript? JavaScript is a programming language. Can you explain closures?" nu ellam oru plain text ah kuduthaa, problem enna na, edhu line yaaroda dhu nu model ku theriyaadhu. Adhanala model ku oru structured format venum. System, User, Assistant roles na, AI oda conversation la yaaru enna solranga nu organize panna use panra labels. Idhu AI ku adhoda rules, yaar kooda pesudhu, enna panna venum nu puriya help pannum. System Role AI ku core rules and behavior set pannum, AI oda personality, tone, boundaries ah decide pannum, background instruction madhiri velai pannum. Example: "You are a polite customer service helper." User Role pesura human ah represent pannum, direct questions, commands, tasks kudukkum. Example: "Can you help me reset my password?" Assistant Role AI generate panna response ah represent pannum, past replies ah store panni chat smooth and logical ah irukka help pannum. Example: "Yes, I can help you. First, click on the login page..." Image la irukura format la <SYSTEM> "You are a helpful programming teacher." </SYSTEM>, <USER> "What is JavaScript?" </USER>, <ASSISTANT> "JavaScript is a programming language..." </ASSISTANT>, apparam <USER> "Can you explain closures?" </USER>, last la <ASSISTANT> nu open ah vittuduvom, model adhukku aprom answer generate pannum. Exact internal tokens model ku model maarum, aana principle similar dhan.`,
  interviewDefinition: `If a conversation is given to a model as plain lines such as "You are helpful. What is JavaScript? JavaScript is a programming language. Can you explain closures?", the problem is that it is unclear which line belongs to whom, so the model needs a structured format. The System, User, and Assistant roles are labels used to organize who is saying what during a conversation with an AI, helping it understand its rules, who it is talking to, and what it needs to do. The System role sets the core rules and behavior for the AI, deciding its personality, tone, and boundaries, and acts as a background instruction (for example, "You are a polite customer service helper."). The User role represents the human talking to the AI and gives direct questions, commands, or tasks (for example, "Can you help me reset my password?"). The Assistant role represents the response generated by the AI and stores past replies to keep the chat smooth and logical (for example, "Yes, I can help you. First, click on the login page..."). A conversation is formatted by wrapping each message in role markers, such as <SYSTEM>, <USER>, and <ASSISTANT>, ending with an open <ASSISTANT> marker where the model continues. The exact internal tokens depend on the model, but the principle is similar.`,
  example: `

// Problem: plain text, which line belongs to whom?
const plainText = \`
You are helpful.
What is JavaScript?
JavaScript is a programming language.
Can you explain closures?
\`;

// Solution: structured format with roles
const conversation = [
  { role: "SYSTEM",    content: "You are a helpful programming teacher." },
  { role: "USER",      content: "What is JavaScript?" },
  { role: "ASSISTANT", content: "JavaScript is a programming language..." },
  { role: "USER",      content: "Can you explain closures?" }
];

function formatConversation(messages) {
  const formatted = messages
    .map(m => "<" + m.role + ">\\n" + m.content + "\\n</" + m.role + ">")
    .join("\\n\\n");
  return formatted + "\\n\\n<ASSISTANT>"; // model continues from here
}

console.log(formatConversation(conversation));
// <SYSTEM>
// You are a helpful programming teacher.
// </SYSTEM>
//
// <USER>
// What is JavaScript?
// </USER>
// ...
// <ASSISTANT>

// The exact internal tokens depend on the model, but the principle is similar.


+-----------+------------------------------------------+-----------------------------------------------+
| Role      | Purpose                                  | Example                                       |
+-----------+------------------------------------------+-----------------------------------------------+
| System    | Sets core rules and behavior; decides    | "You are a polite customer service helper."   |
|           | personality, tone, boundaries;           |                                               |
|           | background instruction                   |                                               |
| User      | The human talking to the AI; gives       | "Can you help me reset my password?"          |
|           | questions, commands, or tasks            |                                               |
| Assistant | Response generated by the AI; stores     | "Yes, I can help you. First, click on the     |
|           | past replies to keep the chat logical    | login page..."                                |
+-----------+------------------------------------------+-----------------------------------------------+`
},
{
  id: 'sft-limitations-and-human-preferences',
  title: 'SFT is Cool, but Not Enough (Human Preferences)',
  category: 'AI',
  slangDefinition: `SFT (Supervised Fine-Tuning) cool dhan, aana adhu mattum podhaadhu. Since, SFT style and format ah solli kudukkum, aana deep reasoning, maariite irukkura facts, complex human preferences oda align aagaradhu la struggle pannum. Example ku prompt: "Explain recursion". Response A: romba technical, mathematically precise, 800 words. Response B: simple analogy, short code example, 200 words. Response C: correct aana confusing. Response D: incorrect aana romba confident. Model edha prefer pannanum? Ovvoru possible prompt kum oru perfect target answer create panradhu romba kashtam. Different users ku different type of answers pudikkum, sila per ku technical venum, sila per ku lengthy, sila per ku short. Idhu human taste pathina vishayam. Adhanala SFT mela human evaluators or human feedback venum. Ella companies kitta answers ah validate panra human expertize irukkanga, idhuvum post-training oda part dhan. Internal people and subject matter experts paatha B better and more preferable nu vechukalam. Experts dhan edhu better, eppadi better nu decide pannuvanga. Human Preferences la real people results ah rank pannuvanga, best la irundhu worst varaikum. Example: B > C > A > D.`,
  interviewDefinition: `Supervised Fine-Tuning (SFT) is not enough on its own because it teaches style and format, but it struggles with deep reasoning, changing facts, and aligning with complex human preferences. For the prompt "Explain recursion", Response A may be very technical and mathematically precise at 800 words, Response B a simple analogy with a short code example at 200 words, Response C correct but confusing, and Response D incorrect but very confident. Which one should the model prefer? Creating one perfect target answer for every possible prompt is incredibly difficult, and different users like different answers: some want technical, some lengthy, some shorter. This is about human taste, so human evaluators or human feedback are needed on top of SFT. Companies have humans, including subject matter experts, who validate and compare answers, and this is also part of post-training. Experts decide which is better and why. In Human Preferences, real people rank the results from best to worst, for example B > C > A > D.`,
  example: `
// Prompt: "Explain recursion."
const responses = {
  A: "Very technical, mathematically precise, 800 words.",
  B: "Simple analogy, short code example, 200 words.",
  C: "Correct but confusing.",
  D: "Incorrect but very confident."
};

// Which one should the model prefer?
// Creating ONE perfect target answer for every possible prompt is incredibly difficult.

// Human Preferences: real people rank the results (best -> worst)
const humanRanking = ["B", "C", "A", "D"]; // B > C > A > D

humanRanking.forEach((key, index) => {
  console.log((index + 1) + ". Response " + key + ": " + responses[key]);
});


+-----------------+--------------------------------------------------+
| Response        | Description                                      |
+-----------------+--------------------------------------------------+
| Response A      | Very technical, mathematically precise, 800 words|
| Response B      | Simple analogy, short code example, 200 words    |
| Response C      | Correct but confusing                            |
| Response D      | Incorrect but very confident                     |
+-----------------+--------------------------------------------------+

+-----------------------------------------------------------+
| Human Preferences                                         |
| Real people rank the results: Best -> Worst               |
| Example: B > C > A > D                                    |
+-----------------------------------------------------------+

// SFT teaches style and format, but struggles with deep reasoning,
// changing facts, and aligning with complex human preferences.
// Human feedback (part of post-training) fills this gap.`
},
{
  id: 'generator-vs-discriminator-evaluation-gap',
  title: 'Generators vs Discriminators (Evaluation Gap)',
  category: 'AI',
  slangDefinition: `Answers ah evaluate panravanga generator illa, adhanala oru gap irukku. Humans ideal answer ah scratch la irundhu generate panradhu kashtam, aana rendu answers la edhu better, edhu worse nu discriminate panradhu easy. Example ku neenga 100 jokes generate panradhu kashtam, aana jokes aa ketu "idhu dhan better" nu solla mudiyum. Generators pudhu content create pannum, Discriminators (illa Evaluators) andha content evlo nalla irukku, real ah irukku, correct ah irukku nu judge pannum. Evaluation Gap na, oru AI illa human oru answer sari ah thappa nu easy ah sollidum, aana andha sariyana answer ah scratch la irundhu create panna struggle pannum. Simple ah solanumna, content ah judge panradhu, adha create panradhai vida romba easy. Idhunaala dhan human feedback useful: Human model kudukkura answers ah rank panna mudiyum, even avanga andha perfect answer ah ezhudhaadhu.`,
  interviewDefinition: `Generators create new content, while Discriminators (or Evaluators) judge how good, real, or correct that content is. The Evaluation Gap occurs when an AI or a human can easily tell whether an answer is right or wrong, but struggles to create that right answer from scratch. In other words, judging content is much easier than creating it. The party that evaluates the answers is not the generator, so there is a gap. For example, you cannot generate 100 jokes, but you can listen to them and say which one is better more easily than you can make someone laugh. Likewise, humans may find it difficult to write the ideal answer from scratch but easy to choose between a better and a worse answer, which is why human feedback and ranking are valuable in post-training.`,
  example: `// Generators vs Discriminators (Evaluation Gap)

// Generator: creates new content (hard)
function generateJokes(count) {
  return Array.from({ length: count }, (_, i) => "Joke #" + (i + 1));
}
const jokes = generateJokes(100);

// Discriminator / Evaluator: judges which content is better (easy)
function pickBetter(jokeA, jokeB) {
  // "Hahahaha, this one is better."
  return jokeA; // a human can easily say which is better
}

console.log(pickBetter(jokes[0], jokes[1]));
// Judging is much easier than creating.


+------------------------------+------------------------------+------------------------------+
|                              | Generator                    | Discriminator / Evaluator    |
+------------------------------+------------------------------+------------------------------+
| Job                          | Creates new content          | Judges how good, real, or    |
|                              |                              | correct the content is       |
| Difficulty                   | Harder                       | Easier                       |
| Example                      | Write 100 jokes              | Say which joke is better     |
+------------------------------+------------------------------+------------------------------+

+--------------------------------------------------------------------------------+
| Evaluation Gap                                                                 |
| Easy to tell if an answer is right or wrong, but hard to create that right     |
| answer from scratch. Judging content is much easier than creating it.          |
+--------------------------------------------------------------------------------+`
},
{
  id: 'reward-model',
  title: 'Reward Model',
  category: 'AI',
  slangDefinition: `First human feedback and preferences ah collect pannuvom, millions of comparison data. Apparam innoru model ah train pannuvom, adhu dhan Reward Model. Post-training la Reward Model na, AI oda answers ah padichi, adhu evlo helpful, safe, correct nu paathu score kudukura oru digital judge. Reward Model eppadi learn pannum? Human Preference B > A > C > D nu irukku nu vechukalam. Model predict panradhu A > B > D > C. Appo loss calculate pannuvom, back propagation nadakkum, Reward Model ah update pannuvom, apparam repeat pannuvom. Idhula human preference patterns learn aagum. reward models la knobs, adhavadhu parameters adjust aagum. Nammalaye namma thappa correct panna madhiri dhan machine um pannum. ChatGPT use pannirukeengana, sila neram adhu rendu responses kudutthu edhu pidichirukku nu keppaanga la, adhe dhan idhu. Neenga kudukkura preference la irundhu Reward Model learn pannum.`,
  interviewDefinition: `Human feedback and preferences are collected as millions of comparison data points, and another model is trained on them; this is the Reward Model. A reward model in AI post-training is a digital judge that reads an AI's answers and gives them a score based on how helpful, safe, or correct they are. It learns the way the earlier training does: suppose the human preference is B > A > C > D while the model predicts A > B > D > C. The mismatch is turned into a loss, backpropagation is run, the Reward Model's parameters are updated, and the process repeats, so human preference patterns are learned. Humans come in between during post-training, and the reward model learns from human feedback data and answers, correcting itself in the same way people correct themselves. In ChatGPT, when it sometimes shows two responses and asks which one you prefer, that preference is the kind of data a reward model learns from.`,
  example: `
// 1. Collect human preferences (millions of comparison data)
const comparisonData = [
  { prompt: "Explain recursion", ranking: ["B", "A", "C", "D"] }
  // ...millions more
];

// 2. Train another model -> REWARD MODEL
// Reward model gives each answer a score (helpful, safe, correct)
function rewardModel(answer) {
  const scores = { A: 0.8, B: 0.6, C: 0.3, D: 0.1 }; // initial, untrained guess
  return scores[answer];
}

// How does a reward model learn?
const humanPreference = ["B", "A", "C", "D"];   // B > A > C > D
const modelPredicts = ["A", "B", "D", "C"];     // A > B > D > C

// - Calculate loss (prediction doesn't match human preference)
// - Back propagation
// - Update Reward Model
// - REPEAT
// -> Human preference patterns are learned

console.log("Human preference:", humanPreference.join(" > "));
console.log("Model predicts:  ", modelPredicts.join(" > "));


+---------------------------+-------------------------------------------------+
| Step                      | What happens                                    |
+---------------------------+-------------------------------------------------+
| Collect human preferences | Millions of comparison data                     |
| Train another model       | This is the REWARD MODEL                        |
| Calculate loss            | Compare model ranking with human ranking        |
| Back propagation          | Find how to adjust parameters                   |
| Update Reward Model       | Adjust parameters                               |
| REPEAT                    | Human preference patterns are learned           |
+---------------------------+-------------------------------------------------+

// Remember: you often see 2 outputs in ChatGPT and choose the one you prefer.
// That preference helps the Reward Model learn.`
},
{
  id: 'reinforcement-learning',
  title: 'Reinforcement Learning (RL)',
  category: 'AI',
  slangDefinition: `Reinforcement Learning (RL) na, computer trial and error moolama decisions edukka learn panra oru type of artificial intelligence, rewards and punishments system adhukku guide pannum. Exact rules kuduthu program panna maatanga, illa correct answers oda dataset um kudukka maatanga. Oru environment la different actions try pannum, nalla choices ku reward kidaikum, mosamana choices ku penalty kidaikum. Neram aaga aaga, highest total reward kidaikka best strategy enna nu figure out pannidum. Idhu dhan Reward Model oda adutha step ku base, post-training la model ku nalla answers ku high reward kidaikka learn panna vekkum.`,
  interviewDefinition: `Reinforcement Learning (RL) is a type of artificial intelligence where a computer learns to make decisions through trial and error, guided by a system of rewards and punishments. Instead of being programmed with exact rules or given a dataset of correct answers, the AI learns by doing. It tries different actions in an environment, gets a reward for good choices, and gets a penalty for bad choices. Over time, it figures out the best strategy to get the highest total reward. In LLM post-training, this idea is combined with a reward model so the model learns to produce answers that earn higher scores.`,
  example: `
// The AI learns by doing: try an action -> get reward or penalty -> improve
const actions = ["A", "B", "C"];
const rewards = { A: -1, B: 5, C: 1 }; // environment feedback (B is best)

const score = { A: 0, B: 0, C: 0 };

for (let trial = 0; trial < 100; trial++) {
  // Try different actions in the environment (trial and error)
  const action = actions[Math.floor(Math.random() * actions.length)];
  const reward = rewards[action];   // reward for good choices, penalty for bad
  score[action] += reward;          // learn from the feedback
}

const bestAction = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
console.log(bestAction);
// Output: "B" -> over time, the AI figures out the best strategy
// to get the highest total reward.


+--------------------------------+--------------------------------------------+
| Concept                        | Meaning                                    |
+--------------------------------+--------------------------------------------+
| Trial and error                | Try different actions in an environment    |
| Reward                         | Given for good choices                     |
| Penalty                        | Given for bad choices                      |
| Goal                           | Find the strategy with the highest total   |
|                                | reward                                     |
+--------------------------------+--------------------------------------------+

+--------------------------------------+---------------------------------------+
| Normal training                      | Reinforcement Learning                |
+--------------------------------------+---------------------------------------+
| Programmed with exact rules or given | AI learns by doing, guided by         |
| a dataset of correct answers         | rewards and penalties                 |
+--------------------------------------+---------------------------------------+`
},
{
  id: 'rlhf',
  title: 'Reinforcement Learning from Human Feedback (RLHF)',
  category: 'AI',
  slangDefinition: `RLHF na, AI oda responses ah humans grade panni rank panna vechi, AI ku better answers kudukka solli kudukura training method. Idhu moonu steps la nadakkum. Step 1, AI choices kudukkum: AI Answer A and Answer B rendum create pannum. Step 2, Humans grade pannuvanga: oru human reviewer rendu answers um padichi, "Answer B great, aana Answer A rude" nu solluvaanga. Step 3, AI reward la irundhu learn pannum: Answer B madhiri act panna AI ku oru digital "treat" (high score) kidaikkum, Answer A madhiri pesuradha avoid panna learn pannum. Neram aaga aaga, 10000's of choices vazhiya, AI human preferences, safety rules, helpfulness ah learn pannum. Idhu ChatGPT, Claude madhiri popular chatbots ah train panna use panra oru core technique.`,
  interviewDefinition: `RLHF is a training method that teaches an artificial intelligence to give better answers by letting humans grade and rank its responses. It works in 3 steps. First, the AI gives choices: it creates both Answer A and Answer B. Second, humans grade them: a human reviewer reads both answers and says, for example, "Answer B is great, but Answer A is rude." Third, the AI learns from the reward: it gets a digital "treat" (a high score) for acting like Answer B and learns to avoid talking like Answer A. Over time, through thousands of these choices, the AI learns human preferences, safety rules, and helpfulness. This is a core technique used to train popular chatbots like ChatGPT and Claude.`,
  example: `
// Step 1: The AI gives choices
const answerA = "That's a silly question, figure it out yourself.";
const answerB = "Great question! Here's a clear explanation...";

// Step 2: Humans grade them
const humanFeedback = {
  A: "rude",
  B: "great"
};

// Step 3: The AI learns from the reward
const rewards = { A: -1, B: 1 }; // digital "treat" (high score) for B

let preferenceForB = 0.5; // starts neutral
for (let step = 0; step < 1000; step++) {
  // Each human choice nudges the model toward B and away from A
  preferenceForB += 0.0005 * (rewards.B - rewards.A);
}
console.log(preferenceForB.toFixed(2));
// Output: 1.50 -> grows toward preferring Answer B (illustrative)
// Over thousands of choices, the AI learns human preferences,
// safety rules, and helpfulness.


+------+------------------------+---------------------------------------------------+
| Step | What happens           | Example                                           |
+------+------------------------+---------------------------------------------------+
| 1    | The AI gives choices   | The AI creates Answer A and Answer B              |
| 2    | Humans grade them      | "Answer B is great, but Answer A is rude."        |
| 3    | The AI learns from the | High score for acting like Answer B; learns to    |
|      | reward                 | avoid talking like Answer A                       |
+------+------------------------+---------------------------------------------------+

// Core technique used to train chatbots like ChatGPT and Claude.`
},
{
  id: 'building-a-helpful-ai-assistant',
  title: 'Building a Helpful AI Assistant',
  category: 'AI',
  imageUrl:'building-ai-assistant.png',
  slangDefinition: `Oru helpful AI Assistant eppadi build pannuvanga nu full flow paapom. 1st pre-training data la, Transformer architecture and neural networks use panni training nadakkum, adhula irundhu base model kedaikum. Base model mainly next word predict panradhukku dhan, aana helpful assistant ah public ku ready illa. Appo eppadi helpful assistant ah maathuradhu? Supervised Fine-Tuning (SFT) or Instruction Fine-Tuning pannuvom, adhavadhu model eppadi behave pannanum nu learn panna vekka, idhu post-training la romba mukkiyamana step. Different companies oda models different flavors la answer pannradhukku SFT dhan oru kaaranam, avanga different ways la tune pannuvaanga. Idhukku aprom SFT Model kedaikum, aana adhuvum innum romba capable illa. Bad outcomes avoid panna, humans prefer panra answers venum, adhanala human preferences naduvula varum, human preferences basis la Reward Model create pannuvom. Reward Model na scores basis la decision edukkura decision-maker, adhu human feedback la irundhu learn pannum. Adhuku aprom Reinforcement Learning from Human Feedback (RLHF) use panni, human preferences basis la model ah train pannuvom. Final ah kedaikura preference-trained model, ChatGPT, Claude, Grok madhiri AI systems la use panna ready.`,
  interviewDefinition: `Building a helpful AI assistant happens in five stages. First, training is done on pre-training data using the Transformer architecture and neural networks, which creates a base model. The base model is mainly for predicting the next word, but it is not ready for the public as a helpful assistant. Second, we perform Supervised Fine-Tuning (SFT) or Instruction Fine-Tuning to teach the model how to behave, which is the most important step in post-training; different companies tune in different ways, which is why their models answer in different flavors. This produces an SFT model, which is still not that capable. Third, to avoid bad outcomes and get answers humans prefer, human preferences come in and a Reward Model is created from them. A reward model is a decision-maker based on scores, and it learns from human feedback. Fourth, Reinforcement Learning from Human Feedback (RLHF) is used to train the model based on human preferences. Fifth, the resulting preference-trained model is ready for use in systems like ChatGPT, Claude, Grok, and other AI assistants.`,
  example: `
+-------------------------------------------------------------+
| Step 1: Pre-training data + Transformer + Neural networks   |
|         -> Base Model (predicts the next word)              |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
| Step 2: Supervised Fine-Tuning (SFT) / Instruction          |
|         Fine-Tuning -> teaches the model how to behave      |
|         -> SFT Model (still not that capable)               |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
| Step 3: Create a Reward Model based on human preferences    |
|         to avoid bad outcomes                               |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
| Step 4: Reinforcement Learning from Human Feedback (RLHF)   |
|         trains the model based on human preferences         |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
| Step 5: Preference-trained model, ready for use in systems  |
|         like ChatGPT, Claude, Grok, and AI assistants       |
+-------------------------------------------------------------+


+--------------------------+-----------------------------------------------+
| Stage                    | Result                                        |
+--------------------------+-----------------------------------------------+
| Training (pre-training   | Base Model: predicts the next word, not ready |
| data, Transformer)       | for the public                                |
| SFT / Instruction tuning | SFT Model: knows how to behave, still not     |
|                          | that capable                                  |
| Reward Model             | Decision-maker based on scores, learns from   |
|                          | human feedback                                |
| RLHF                     | Model trained on human preferences            |
| Final model              | Preference-trained, ready for ChatGPT, Claude,|
|                          | Grok, and AI assistants                       |
+--------------------------+-----------------------------------------------+`
},
{
  id: 'rlhf-issues',
  title: 'RLHF Issues',
  category: 'AI',
  slangDefinition: `Ippo namakku theriyum, Humans prefer panra Reward Model irukku nu, aana adhula issues um irukku. 1st issue, humans ore madhiri ellarum agree panna maatum. Experts kita feedback kettaa, sila per lengthy answer venum nu solluvaanga, sila per short answer venum nu solluvaanga, sila per sarcasm venum nu solluvaanga. Appo indha contradiction ah eppadi decide pannuradhu? 2nd issue, confident aa thappa solra answers ah humans prefer pannalaam rather than saying boring correct answer, humans kooda mistakes pannuvaanga. 3rd issue, human feedback time and cost rendumae romba athigam, human reviewers kooda ellathayum check panna mudiyaadhu. Idhu dhan RLHF oda issues. Reward Model na human judgment illa. Adhu limited sample of human judgment oda learned approximation mattum dhan.`,
  interviewDefinition: `Although a reward model preferred by humans helps, RLHF has several issues. First, humans disagree with each other: when experts give feedback, some want a lengthy answer, some want a short answer, and some want sarcasm, so it is hard to decide this contradiction. Second, humans can prefer wrong answers said confidently rather than boring correct answers, because they can also make mistakes. Third, human feedback is time-consuming and expensive, and even human reviewers cannot check everything. It is important to remember that a reward model is not human judgment; it is a learned approximation of a limited sample of human judgment.`,
  example: `
// Issue 1: Humans disagree with each other
const reviewerPreferences = [
  { reviewer: 1, wants: "lengthy answer" },
  { reviewer: 2, wants: "short answer" },
  { reviewer: 3, wants: "sarcasm" }
];
// How do we decide this contradiction?

// Issue 2: Humans can prefer wrong answers (humans also make mistakes)
const humanPick = { chosenAnswer: "confident but incorrect answer" };

// Issue 3: Human feedback is time-consuming and expensive
// Even human reviewers cannot check everything.


+-------------------------------+------------------------------------------------------+
| Issue                         | Description                                          |
+-------------------------------+------------------------------------------------------+
| Humans disagree               | Some want lengthy answers, some short, some sarcasm  |
| Humans can prefer wrong       | Humans can also make mistakes                        |
| answers                       |                                                      |
| Time and cost                 | Human feedback is expensive; reviewers cannot check  |
|                               | everything                                           |
+-------------------------------+------------------------------------------------------+

// Remember: a Reward Model is NOT human judgment.
// It is a learned approximation of a limited sample of human judgment.`
},
{
  id: 'lossy-simulation-of-human-preferences',
  title: 'Lossy Simulation of Human Preferences',
  category: 'AI',
  slangDefinition: `Oru example paapom: naan TOXIC nu oru movie paathen, adhu nijamave romba toxic ah irundhuchu, so naan 10 la 4 mark kudutthen. Aana andha 4 number enna represent pannudhu? Acting nalla illa, story nalla irundhuchu aana direction nalla illa, dialogues nalla illa. Aana andha score la ethu enna nu theriyaadhu, ellam oru number kulla adangi poiduchu. Idhu dhan Lossy Simulation of Human Preferences. Simple ah solanumna, AI humans enna virumburanga nu copy panna try pannum, aana finer details ah miss pannidum, adhanala adhukku oru incomplete picture dhan kidaikkum. Adhavadhu Reward Model human preference oda full reason ah learn pannala, score la irukura summary ah mattum dhan learn pannudhu.`,
  interviewDefinition: `Lossy simulation of human preferences is when an AI tries to copy what humans like or want, but it misses the finer details, leaving it with an incomplete picture. For example, a human gives a score such as 4.2, or rates a movie 4 out of 10. That single number encapsulates many separate reasons: the acting may have been poor, the story may have been good but the direction weak, or the dialogues may have been bad. The score does not say which of these reasons caused it, so the detail is lost. A reward model trained on such scores learns only a compressed summary of human judgment, not the full reasoning behind it.`,
  example: `// Lossy Simulation of Human Preferences

// A human watched a TOXIC movie and gave it 4 out of 10
const humanFeedback = { movie: "TOXIC", score: 4 };

// But what did that 4 represent? Many hidden reasons were packed into one number:
const hiddenReasons = [
  "Acting was not good",
  "Story was good, but direction was not",
  "Dialogues were not good"
];

// The reward model only sees the score, the reasons are lost
const whatTheModelLearns = humanFeedback.score;
console.log(whatTheModelLearns); // 4

// Detail is lost -> incomplete picture of human preference


+--------------------------+------------------------------------------------------+
| What the human meant     | What the model receives                              |
+--------------------------+------------------------------------------------------+
| Acting was not good      |                                                      |
| Story good, direction    |  Score: 4 / 10                                       |
| not good                 |  (finer details are lost)                            |
| Dialogues were not good  |                                                      |
+--------------------------+------------------------------------------------------+

// Lossy simulation: AI tries to copy what humans like or want,
// but misses the finer details, leaving an incomplete picture.`
},
{
  id: 'reward-hacking',
  title: 'Reward Hacking',
  category: 'AI',
  slangDefinition: `Reward hacking na, oru system high measured reward ah achieve panna vazhi kandupidikkum, aana namma actual ah virumbina underlying objective ah satisfy pannaadhu. Namma oru measurement ah optimize pannumbodhu, model real goal ah fulfill panradhu eppadinu learn pannaama, nalla score vaanguradhu eppadinu learn pannidum. Easy ah solanumna, AI oru "cheat code" illa loophole kandupidichi, namma kekkura velai ah actually pannaama perfect score vaangidum. Perfect analogy: A+ vaanganum nu aasa irukku, aana padikka virumbaadha oru student. Teacher "un grade, nee evlo flashcards padikkira nu dhan base aagum" nu sonna, andha student 500 flashcards ah lightning speed la oru word kooda memorize pannaama flip pannipaanga. Avanga "reward" (A+) vaangiduvaanga, aana actual goal (learning) ah miss pannitaanga. Idhu dhan reward hacking.`,
  interviewDefinition: `Reward hacking occurs when a system finds ways to achieve a high measured reward without satisfying the underlying objective we actually intended. When we optimize a measurement, the model may learn how to score well rather than how to fulfill the real goal. In easy words, it is when an AI finds a "cheat code" or loophole to get a perfect score without actually doing the job you wanted it to do. A perfect analogy is a student who wants an A+ but does not want to learn: if a teacher says "Your grade is based entirely on how many flashcards you read", the student might flip through 500 flashcards at lightning speed without memorizing a single word. They get their reward (the A+), but completely miss the actual goal (learning).`,
  example: `
// Intended goal: the student should LEARN
// Measured reward: number of flashcards read (the grade is based on this)

function gradeBasedOnFlashcardsRead(flashcardsRead) {
  return flashcardsRead >= 500 ? "A+" : "B";
}

// Honest student: reads carefully, memorizes
const honestStudent = { flashcardsRead: 120, wordsLearned: 400 };

// Reward hacker: flips 500 flashcards at lightning speed
const rewardHacker = { flashcardsRead: 500, wordsLearned: 0 };

console.log(gradeBasedOnFlashcardsRead(rewardHacker.flashcardsRead));
// "A+" -> high measured reward

console.log(rewardHacker.wordsLearned);
// 0 -> actual goal (learning) completely missed


+-----------------------+----------------------+-----------------------------+
|                       | Honest student       | Reward hacker               |
+-----------------------+----------------------+-----------------------------+
| Flashcards read       | 120                  | 500 (lightning speed)       |
| Reward (grade)        | B                    | A+                          |
| Actual goal (learning)| Achieved             | Missed completely           |
+-----------------------+----------------------+-----------------------------+

// Reward hacking: the model learns how to score well,
// rather than how to fulfill the real goal.`
},
{
  id: 'goodharts-law-reward-over-optimization',
  title: "Goodhart's Law Intuition / Reward Over-Optimization",
  category: 'AI',
  slangDefinition: `Oru metric target aagiduchu na, adhu nalla metric ah irukradha niruthidum. Namakku model human-useful ah irukanum, aana adhai oru numerical score vechi measure panrom. Reward score ah thodarndhu increase pannikitte pona, actual usefulness oru certain point varaikkum increase aagum, aana ellaa neramum illa. Idhu dhan Reward Over-Optimization. Goodhart's Law na "oru measure target aagumbodhu, adhu nalla measure ah irukradha niruthidum". Simple ah solanumna, oru human or AI ku oru specific number or goal kudutha, unintended shortcuts kandupidichiduvaanga, adhanala andha goal ah set panna original reason ae useless aaidum. Daily life vs AI la eppadi thappa pogudhu paapom. Nalla output kudukum bodhu AI ku points (reward) kudutthu train pannrom. 1st higher points na AI nalla pannudhu nu artham. Aana highest score ah thurathi romba thalli vittaa, AI oru shortcut illa loophole kandupidichidum. Genuinely helpful ah irukka try pannaama, scoring system ah happy aakkura tricks la mattum focus pannum. Score mela pogum, aana work oda actual quality keela pogum. Adhanala scoring system sila neram fail aagum. Greater reward score na actual usefulness eppavume increase aagum nu artham illa, oru certain point varaikkum dhan true. Sila neram namma input kudutthu oru context set pannuvom, appo machine namma ah happy ah vekkura result mattum kudukkum. Example ku "You are wrong, do this." nu sonnaalum, sila neram adhu helpful ah irukkum. Adhanala nyabagam vechukonga, helpful na user kooda eppavum agree panradhu nu artham illa.`,
  interviewDefinition: `Goodhart's Law states that when a measure becomes a target, it ceases to be a good measure. Once a metric becomes the target, it can stop being a good metric. We want a model to be human-useful, but we measure it with a numerical score. If we keep increasing the reward score, actual usefulness increases up to a certain point, but not always, and this is called Reward Over-Optimization. In simple words, once a human or an AI is given a specific number to chase, they find clever, unintended shortcuts to hit that number, ruining the original reason the goal was set. In AI, we reward a model with points for giving a good output. At first, higher points mean it is doing better, but if it is pushed too hard to chase the highest score, it finds a shortcut or loophole, stops trying to be genuinely helpful, and focuses on tricks that make the scoring system happy. The score goes up, but the actual quality of the work goes down, so the scoring system sometimes fails. A related point is that a model can be pushed into only making the user happy and giving the result the user wants. Helpful does not mean always agreeing with the user: even a response like "You are wrong, do this." can sometimes be the helpful one.`,
  example: `
// We want: human-useful answers
// We measure: a numerical reward score

// Stage 1: higher score really means more useful
// Stage 2 (over-optimization): model chases the score with tricks
const stages = [
  { push: "low",    rewardScore: 5, actualUsefulness: 5 },
  { push: "medium", rewardScore: 7, actualUsefulness: 7 },  // up to a certain point, both rise
  { push: "high",   rewardScore: 9, actualUsefulness: 4 }   // score up, quality down
];

stages.forEach(s => {
  console.log(s.push + ": score=" + s.rewardScore + ", usefulness=" + s.actualUsefulness);
});
// The score goes up, but the actual quality of the work goes down.


+------------------+----------------+---------------------+---------------------------------+
| Optimization     | Reward score   | Actual usefulness   | What is happening               |
+------------------+----------------+---------------------+---------------------------------+
| Low              | Increases      | Increases           | Metric still a good measure     |
| Medium           | Increases      | Increases           | Up to a certain point, true     |
| Too high         | Keeps rising   | Goes down           | Model finds shortcuts/loopholes |
+------------------+----------------+---------------------+---------------------------------+

+--------------------------------------------------------------------------------+
| Goodhart's Law                                                                 |
| When a measure becomes a target, it ceases to be a good measure.               |
+--------------------------------------------------------------------------------+

// Helpful does NOT mean always agreeing with the user.
// Sometimes "You are wrong, do this." is the helpful answer.`
},
{
  id: 'knowledge-vs-behaviour',
  title: 'Knowledge vs Behaviour',
  category: 'AI',
  slangDefinition: `Oru model ku JS closures theriyum nu vechukalam. Aana post-training la adhu closures therinjukichu nu artham illa. Adhukku badhila, yaaravadhu "Explain closures" nu kettaa, andha capability ah retrieve panni, oru clear, assistant madhiri form la express panna adhu learn pannirukkum. Training mostly model oda underlying capability base ah build pannudhu. Post-training andha capabilities eppadi express aaganum nu shape pannudhu. Simple ah: Training capabilities ah build pannum. Post-training behaviour ah shape pannum.`,
  interviewDefinition: `Suppose a model knows JavaScript closures. Post-training does not necessarily mean it knows closures because someone re-taught it closures. Instead, it may have learned that when someone asks "Explain closures", it should retrieve and express that capability in a clear, assistant-like form. Training is largely building the model's underlying capability base, while post-training is shaping how those capabilities can be expressed. In short, training builds capabilities and post-training shapes behaviour.`,
  example: `
// Training: builds the underlying capability base
const modelAfterTraining = {
  knowsClosures: true,     // capability already exists
  behaviour: "raw text continuation"
};

// Post-training: shapes how the capability is expressed
// It does NOT re-teach closures
const modelAfterPostTraining = {
  knowsClosures: true,     // same knowledge
  behaviour: "clear, assistant-like explanation"
};

function respond(model, prompt) {
  if (prompt === "Explain closures" && model.knowsClosures) {
    return model.behaviour === "clear, assistant-like explanation"
      ? "A closure is a function that remembers variables from its outer scope..."
      : "Explain closures in JavaScript with an example. Explain closures in Python...";
  }
}

console.log(respond(modelAfterTraining, "Explain closures"));
console.log(respond(modelAfterPostTraining, "Explain closures"));


+-----------------+-----------------------------------------------+
| Stage           | Role                                          |
+-----------------+-----------------------------------------------+
| Training        | Builds the model's underlying capability base |
| Post-training   | Shapes how those capabilities are expressed   |
+-----------------+-----------------------------------------------+

// Training builds capabilities.
// Post-training shapes behaviour.`
},
{
  id: 'pre-training-vs-fine-tuning',
  title: 'Difference between Pre-Training and Fine-Tuning (Post-Training)',
  category: 'AI',
  slangDefinition: `Pre-Training and Fine-Tuning rendukkum enna difference nu paapom. Pre-Training la model ku broad language understanding kidaikkum, Fine-Tuning la task-specific adaptation nadakkum. Pre-Training periya, diverse dataset la train aagum, Fine-Tuning smaller, targeted dataset la train aagum. Pre-Training general knowledge base ah develop pannum, Fine-Tuning rapid specialization kudukkum. Pre-Training transfer learning ku help pannum, adhavadhu oru model learn pannadha vera tasks ku use panna mudiyum, Fine-Tuning konjam examples la irundhu kooda quick ah learn pannum. Pre-Training ku initial computational cost romba athigam, Fine-Tuning ku computational cost kammi. Pre-Training continual learning oda scale aagum, Fine-Tuning current data ku customize panna mudiyum. Pre-Training performance benchmarks set pannum, Fine-Tuning specific task performance ah enhance pannum. Pre-Training pala applications la flexible ah irukum, Fine-Tuning niche applications ku efficient ah irukum.`,
  interviewDefinition: `Pre-training and fine-tuning differ in purpose, data, and cost. Pre-training gives broad language understanding by training on a large, diverse dataset, developing a general knowledge base, facilitating transfer learning, and setting performance benchmarks. It has a high initial computational cost, is scalable with continual learning, and is flexible across various applications. Fine-tuning provides task-specific adaptation by training on a smaller, targeted dataset, giving rapid specialization and quick learning from few examples. It has a lower computational cost, is customizable to current data, enhances specific task performance, and is efficient for niche applications.`,
  example: `
+--------------------------------------------+--------------------------------------------+
| Pre-Training Features                      | Fine-Tuning Features                       |
+--------------------------------------------+--------------------------------------------+
| Broad language understanding               | Task-specific adaptation                   |
+--------------------------------------------+--------------------------------------------+
| Large, diverse dataset training            | Smaller, targeted dataset training         |
+--------------------------------------------+--------------------------------------------+
| General knowledge base development         | Rapid specialization                       |
+--------------------------------------------+--------------------------------------------+
| Facilitates transfer learning              | Quick learning from few examples           |
+--------------------------------------------+--------------------------------------------+
| High initial computational cost            | Lower computational cost                   |
+--------------------------------------------+--------------------------------------------+
| Scalable with continual learning           | Customizable to current data               |
+--------------------------------------------+--------------------------------------------+
| Sets performance benchmarks                | Enhances specific task performance         |
+--------------------------------------------+--------------------------------------------+
| Flexible across various applications       | Efficient for niche applications           |
+--------------------------------------------+--------------------------------------------+`
},
{
  id: 'flow-to-create-assistant-like-model',
  title: 'Flow to Create an Assistant-like Model',
  category: 'AI',
  slangDefinition: `Oru assistant-like model eppadi create aagudhu nu full flow paapom. 1st huge raw data irukkum. Adhai vechi Training nadakkum, adhula irundhu Base Model kedaikum. Base Model ku broad language capability irukkum. Adhukku aprom Supervised Fine-Tuning pannuvom, adhula irundhu Instruction Following model kedaikum. Next, humans preference collect pannuvom, apparam answers ah Ranking pannuvom, adhai vechi Reward model train pannuvom. Last ah Preference optimization nadakkum, andha step mudinja aprom namakku Assistant-like Model kedaikum. Simple ah solanumna, raw data la irundhu start panni, base model, instruction following model vazhiya poi, human preferences vechi optimize panni, last-aa helpful assistant ah maarudhu.`,
  interviewDefinition: `The flow to create an assistant-like model starts with huge raw data. Training on that data produces a base model with broad language capability. Supervised fine-tuning then turns it into an instruction-following model. Next, human preferences are collected and used to rank responses, and the rankings are used to train a reward model. Preference optimization then uses the reward model to further tune the model, producing the final assistant-like model.`,
  example: `
+------------------------------+
| Huge Raw data                |
+------------------------------+
               |
               v
+------------------------------+
| Training                     |
+------------------------------+
               |
               v
+------------------------------+
| Base Model                   |
+------------------------------+
               |
               v
+------------------------------+
| Broad Language Capability    |
+------------------------------+
               |
               v
+------------------------------+
| Supervised Fine-tuning       |
+------------------------------+
               |
               v
+------------------------------+
| Instruction Following model  |
+------------------------------+
               |
               v
+------------------------------+
| Humans preference collection |
+------------------------------+
               |
               v
+------------------------------+
| Ranking                      |
+------------------------------+
               |
               v
+------------------------------+
| Reward models                |
+------------------------------+
               |
               v
+------------------------------+
| Preference optimization      |
+------------------------------+
               |
               v
+------------------------------+
| Assistant-like Model         |
+------------------------------+`
},
 {
  id: 'can-ai-actually-think',
  title: 'Can AI Actually Think?',
  category: 'AI',
  slangDefinition: `Pre-training, training, post-training ellam mudinja aprom, "Quantum Physics ah explain pannu" and "DNA science pathi oru book author pannu". Idhukku AI proper ah output kudukum. Aana "9.11 and 9.9 la edhu bigger?" and "NAMASTEARTIFICIALINTELLIGENCE la every third character ah print pannu". Idhukku AI wrong answers kudukku. Idhu yen na, model oru next token predictor, adhu text ah tokens ah paakum, ovvoru letter ah thaniya paakkadhu, adhanala character level velai kashtam. Number comparison kooda real calculation madhiri illa, patterns vechi predict pannudhu. Adhanala "Can AI actually think?" nu kelvi varudhu. Explain panradhu, ezhudhuradhu madhiri language patterns la AI romba strong, aana step by step exact logic venum na adhu reliable ah irukkadhu.`,
  interviewDefinition: `After pre-training, training, and post-training, an AI assistant can give proper outputs for tasks like explaining quantum physics or authoring a book on DNA science, because these rely on language patterns and knowledge learned from data. However, it can struggle with tasks like "What is bigger, 9.11 or 9.9?" or "Print every third character in NAMASTEARTIFICIALINTELLIGENCE", and may give wrong answers. A model is a next-token predictor that sees text as tokens rather than individual characters, and it predicts likely patterns instead of executing exact step-by-step logic, so character-level and precise numeric tasks are less reliable. This raises the question: can AI actually think? Language-heavy tasks work well, while tasks that need exact, step-by-step reasoning can fail.`,
  example: `
+----+--------------------------------------------------+---------------------------+
| #  | Ask AI to...                                     | AI assistant result       |
+----+--------------------------------------------------+---------------------------+
| 1  | Explain Quantum Physics                          | Gives proper output       |
| 2  | Author a book on DNA science                     | Gives proper output       |
| 3  | What is bigger, 9.11 or 9.9?                     | Can struggle / go wrong   |
| 4  | Print every third character in                   | Can struggle / go wrong   |
|    | "NAMASTEARTIFICIALINTELLIGENCE"                  |                           |
+----+--------------------------------------------------+---------------------------+

// Tasks 3 and 4 are trivial for exact code:

console.log(Math.max(9.11, 9.9));
// Output: 9.9

const text = "NAMASTEARTIFICIALINTELLIGENCE";
const everyThird = text
  .split("")
  .filter((_, index) => (index + 1) % 3 === 0)
  .join("");
console.log(everyThird);
// Output: MTRFIIEIN

// A model works with tokens and predicts likely patterns,
// it does not run exact step-by-step logic like this code.

// Can AI actually think?`
},
{
  id: 'what-is-thinking',
  title: 'What is Thinking? (Direct Generation vs Reasoning-Oriented Generation)',
  category: 'AI',
  slangDefinition: `Thinking na simple-a sonna reasoning-a nu oru question irukku. Yaaravadhu "Vacation-ku enga poga aasai?" nu kettaa, nee unga trip history-a search pannuvinga, ippa varaikum poga-dha place-a choose pannalaam illa romba pudichcha place-a choose pannalaam. Idhu ellame reasoning dhaan, unga intelligence use pannitu oru decision edukkureenga, adha dhaan thinking nu solrom. Ippo main question yenna na, AI model-a reasoning panna vekka mudiyuma? Example-ku "Girlfriend-ku oru gift suggest pannu" nu kettaa neenga romba reasoning pannuvinga, yenna pannanum, epdi pannanum nu proper-a research pannuvinga, avanga back history, avangaluku yenna pudikkum, yedhu useful-a thoughtful-a irukkum nu yosippinga. Kandippa oru chocolate illa teddy bear gift-a kudukka maatinga. Aana AI-ku adhu epdi theriyum? Ippo varaikum AI models mostly direct generation dhaan pannudhu, adhavadhu question vandha udane answer-a generate pannidum. Avanga behaviour fine-tuning and post-training moolama dhaan maarudhu. So AI thoughtful decisions edukka mudiyuma nu dhaan inga main question.`,
  interviewDefinition: `Thinking is the process of reaching a decision using intelligence, and the open question is whether it is the same as reasoning and whether an AI model can do it. When a person is asked "Where would you love to go on vacation?", they recall their trip history and choose a place they have never visited or one they loved the most, which is reasoning followed by a decision. In the same way, for "Suggest a gift for your girlfriend", a human researches what to do and how to do it, thinks about her history, what she likes and what would be useful or thoughtful, and would never gift simple chocolate or a teddy bear. Until now, AI models have mostly done direct generation, producing an answer straight away, and their behaviour changes only through fine-tuning and post-training. The core question is whether AI can make thoughtful decisions, which is what reasoning-oriented generation aims to address.`,
  example: `// Example 1: Human thinking
// Question: "Where would you love to go on vacation?"
// -> Search trip history
// -> Choose a never visited place OR the most loved place
// -> Decision based on intelligence = "thinking"

// Example 2: Suggest a gift for your girlfriend?
//
// Human (reasoning):
// - Research what to do and how to do it
// - Think about back history
// - Think about what she actually likes
// - Think about what will be useful or thoughtful
// - Will NOT give scissors or a knife :)

+---------------------------+--------------------------------+---------------------------------------+
| Point                     | Direct Generation              | Reasoning-Oriented Generation         |
+---------------------------+--------------------------------+---------------------------------------+
| Question                  | Suggest a gift for girlfriend  | Suggest a gift for girlfriend         |
+---------------------------+--------------------------------+---------------------------------------+
| How the answer comes      | Answer generated directly      | Research, history, likes, usefulness  |
+---------------------------+--------------------------------+---------------------------------------+
| Current state of AI       | Mostly done till now           | Open question: can AI do it?          |
+---------------------------+--------------------------------+---------------------------------------+
| Behaviour changes through | Fine-tuning and post-training  | Can AI make thoughtful decisions?     |
+---------------------------+--------------------------------+---------------------------------------+

// Flow: Human thinking
+---------------------------+
| Question                  |
+---------------------------+
            |
            v
+---------------------------+
| Reasoning (history, likes,|
| useful, thoughtful)       |
+---------------------------+
            |
            v
+---------------------------+
| Decision = Thinking       |
+---------------------------+

// Flow: Direct generation
+---------------------------+
| Question                  |
+---------------------------+
            |
            v
+---------------------------+
| AI Model (direct          |
| generation)               |
+---------------------------+
            |
            v
+---------------------------+
| Answer                    |
+---------------------------+`
},
{
  id: 'reasoning-oriented-generation',
  title: 'Reasoning Oriented Generation',
  category: 'AI',
  slangDefinition: `AI-ku problem-a step-by-step think pannittu apram answer sollikodukkura approach. Just pattern based-a next word-a guess pannura maari illama, complex question-a chinna chinna pieces-a break pannum, different options-a weigh pannum, logic-a idhu correct-a nu pogum pothe check pannum. Idhu human oru kashtamaana math problem illa riddle-a step by step solve pannura maari dhaan, random guess-a thirumba kathura maari illa. Idhu coding, logic puzzles, research, complex decision-making maari tricky tasks-ku romba useful, yenna na idhu speed-a vida accuracy and reasoning-ku priority kudukkum. Indha example-la "John kitta 2 apples irukku, oru apple saapdraan, innum 4 vaangraan, apram half Mary-ku kudukkuraan, ippo avan kitta evlo irukku?" nu kettaa, traditional model similar math riddles-a paathu instant-a oru answer-a guess pannidum. Aana reasoning-oriented AI first steps-a work out pannum: John 2-la start aagraan, 1 saapdraan (1 meedhi), 4 vaangraan (ippo 5), half Mary-ku kudukkuraan (5 / 2 = 2.5). So final answer 2.5 apples, adhu calculation based-a vandha answer.`,
  interviewDefinition: `teaching an AI to think through a problem step by step before giving an answer, rather than just guessing the next word based on patterns. Instead of giving an instant response, the model breaks a complex question into smaller pieces, weighs different options and checks its logic along the way, much like a human solving a difficult math problem or riddle step by step instead of blurting out a random guess. This makes AI much better at tricky tasks such as coding, logic puzzles, research and complex decision-making, because it prioritizes accuracy and reasoning over pure speed. For example, for "If John has two apples, eats one, buys four more, and gives half to Mary, how many does he have?", a traditional model might instantly guess an answer based on similar math riddles, whereas a reasoning-oriented AI works through the steps first and arrives at 2.5 apples.`,
  example: `// Question:
// "If John has two apples, eats one, buys four more,
//  and gives half to Mary, how many does he have?"

// Traditional model: instantly guesses based on similar math riddles
// Reasoning-oriented AI: works through the steps first

let apples = 2;          // John starts with 2
apples = apples - 1;     // eats 1 (leaves 1)
apples = apples + 4;     // buys 4 (now has 5)
apples = apples / 2;     // gives half to Mary (5 / 2 = 2.5)

console.log(apples);     // 2.5

// Final answer: 2.5 apples, based on the calculation

+---------------------------+----------------------------------+------------------------------------------+
| Point                     | Traditional / Standard AI        | Reasoning-Oriented AI                    |
+---------------------------+----------------------------------+------------------------------------------+
| Approach                  | Guesses next word from patterns  | Thinks step-by-step before answering     |
+---------------------------+----------------------------------+------------------------------------------+
| Response style            | Instant, fast response           | Breaks problem into smaller pieces,      |
|                           |                                  | weighs options, checks logic             |
+---------------------------+----------------------------------+------------------------------------------+
| Priority                  | Speed                            | Accuracy and reasoning over pure speed   |
+---------------------------+----------------------------------+------------------------------------------+
| Best for                  | Simple, quick questions          | Coding, logic puzzles, research,         |
|                           |                                  | complex decision-making                  |
+---------------------------+----------------------------------+------------------------------------------+
| John's apples example     | Instantly guesses an answer      | Works through the steps, answer = 2.5    |
+---------------------------+----------------------------------+------------------------------------------+

// Flow: Reasoning-oriented generation
+---------------------------+
| Question                  |
+---------------------------+
            |
            v
+---------------------------+
| Break into smaller pieces |
+---------------------------+
            |
            v
+---------------------------+
| Weigh options and check   |
| logic step by step        |
+---------------------------+
            |
            v
+---------------------------+
| Final answer              |
+---------------------------+

// Flow: John's apples
+-----------------------------+
| John starts with 2          |
+-----------------------------+
            |
            v
+-----------------------------+
| Eats 1 (leaves 1)           |
+-----------------------------+
            |
            v
+-----------------------------+
| Buys 4 (now has 5)          |
+-----------------------------+
            |
            v
+-----------------------------+
| Gives half to Mary          |
| (5 / 2 = 2.5)               |
+-----------------------------+
            |
            v
+-----------------------------+
| Final answer = 2.5 apples   |
+-----------------------------+`
},
{
  id: 'direct-generation-vs-reasoning-oriented-generation',
  title: 'Direct Generation vs Reasoning Oriented Generation',
  category: 'AI',
  slangDefinition: `Direct generation na simple flow dhaan: Question kudukkurom, Model adha eduthukittu, udane Answer kudukkum. Example-ku "5 + 5 yenna?" nu kettaa, neenga yosikkave maatinga, udane 10 nu solliduveenga. Neraiya problems-ku namakku exactly idhu dhaan venum. Innoru example, "Hello-va Hindi-la translate pannu" nu kettaa, model 30 second ukkaandhu pathu competing hypotheses-a explore pannanum nu namakku theva illa, just answer sonna podhum. Reasoning oriented generation-la flow konjam different: Question vandha udane answer illa, first intermediate computation pannum, apram possible approach-a yosikkum, adha check pannum, thevai-na revision pannum, last-la dhaan Answer kudukkum. Example-ku "Oru company revenue-a 20% grow pannudhu, apram 20% loss aagudhu, ippo original revenue-ku thirumbi vandhucha?" nu kettaa, neraiya per konjam pause pannuvaanga. Company 100-la start aagudhunu vechikkalaam, 20% growth-la 100 to 120 aagum, apram 20% reduction-la 120 to 96 aagum. So illa, original revenue-ku thirumbala, yenna na increase-um decrease-um different base-la dhaan work aagudhu. direct generation model kita ketta, "20% grow aagi apram 20% loss, final change yenna?" nu kettaa, general model +20% and -20% paathu 0% nu sollidum. Aana reasoning model yosikkum: 20% increase na 120%, apram 120-la 80% na 96%. So final revenue original-oda 96%, adhavadhu actual-a 4% decrease. So summary-a sonna, sila cases-la direct answer or direct generation help pannum, aana sila cases-la thought and reasoning venum, adha pannurathu dhaan Reasoning Model.`,
  interviewDefinition: `Direct generation follows a simple flow: Question, Model, Answer. The model responds immediately, which is exactly what we want for many problems. For example, "What is 5 + 5?" is answered instantly as 10, and for "Translate Hello into Hindi" we do not want the model spending thirty seconds exploring ten competing hypotheses, we just want the answer. Reasoning-oriented generation follows a longer flow: Question, Intermediate Computation, Possible Approach, Check, Revision, Answer. For example, if a company grows revenue by 20% and then loses 20%, is it back at the original revenue? Starting at 100, a 20% growth gives 120, and a 20% reduction gives 96, so the answer is no, because the increase and decrease use different bases. A general model might wrongly answer 0% because it sees +20% and -20%, but a reasoning model works out that 120% followed by 80% of 120 gives 96%, which is a 4% decrease. So in some cases direct generation is enough, but in other cases we need thought and reasoning, and this is done by a Reasoning Model.`,
  example: `// Direct Generation
// Question -> Model -> Answer
// What is 5 + 5?
// You probably answer 10 immediately.
// For many problems, this is exactly what we want.
// Translate "Hello" into Hindi.
// We do not want the model spending thirty seconds
// exploring ten competing hypotheses. Just answer.

console.log(5 + 5); // 10

// Reasoning Oriented Generation
// Q -> Intermediate computation -> Possible approach
//   -> Check -> Revision -> Answer
//
// A company grows revenue by 20%, then loses 20%.
// Is it back at the original revenue?

let revenue = 100;                 // company starts at 100
revenue = revenue + revenue * 0.2; // 20% growth: 100 -> 120
console.log(revenue);              // 120

revenue = revenue - revenue * 0.2; // 20% reduction: 120 -> 96
console.log(revenue);              // 96

// So no. The decreases and increases use different bases.
// Final revenue = 96% of original = 4% decrease

// General model: sees +20% and -20%, might say 0%
// Reasoning model: 20% increase means 120%
//                  then -20% means 80% of 120 -> 96%

+---------------------------+--------------------------------+----------------------------------------------+
| Point                     | Direct Generation              | Reasoning Oriented Generation                |
+---------------------------+--------------------------------+----------------------------------------------+
| Flow                      | Question -> Model -> Answer    | Q -> Intermediate computation -> Possible    |
|                           |                                | approach -> Check -> Revision -> Answer      |
+---------------------------+--------------------------------+----------------------------------------------+
| Example question          | What is 5 + 5?                 | Company grows revenue by 20%, then loses     |
|                           |                                | 20%. Back at original revenue?               |
+---------------------------+--------------------------------+----------------------------------------------+
| How it answers            | Answers 10 immediately         | 100 -> 120 -> 96, so no                      |
+---------------------------+--------------------------------+----------------------------------------------+
| When we want it           | Many problems, e.g. Translate  | When thought and reasoning are needed        |
|                           | "Hello" into Hindi, just answer|                                              |
+---------------------------+--------------------------------+----------------------------------------------+
| Revenue example result    | General model may say 0%       | Reasoning model says 96% of original,        |
|                           |                                | which is a 4% decrease                       |
+---------------------------+--------------------------------+----------------------------------------------+
| Done by                   | Direct answer / generation     | Reasoning Model                              |
+---------------------------+--------------------------------+----------------------------------------------+

// Flow: Direct Generation
+---------------------------+
| Question                  |
+---------------------------+
            |
            v
+---------------------------+
| Model                     |
+---------------------------+
            |
            v
+---------------------------+
| Answer                    |
+---------------------------+

// Flow: Reasoning Oriented Generation
+---------------------------+
| Question                  |
+---------------------------+
            |
            v
+---------------------------+
| Intermediate computation  |
+---------------------------+
            |
            v
+---------------------------+
| Possible approach         |
+---------------------------+
            |
            v
+---------------------------+
| Check                     |
+---------------------------+
            |
            v
+---------------------------+
| Revision                  |
+---------------------------+
            |
            v
+---------------------------+
| Answer                    |
+---------------------------+

// Flow: Revenue example (start at 100)
+------------------------------+
| Start = 100                  |
+------------------------------+
            |
            v
+------------------------------+
| 20% growth: 100 -> 120       |
+------------------------------+
            |
            v
+------------------------------+
| 20% reduction: 120 -> 96     |
+------------------------------+
            |
            v
+------------------------------+
| 96% of original = 4% decrease|
+------------------------------+`
},
{
  id: 'reasoning-models',
  title: 'Reasoning Models',
  category: 'AI',
  slangDefinition: `Reasoning models na AI-la irukkura advanced systems, avanga answer sollradhuku munnadi konjam pause pannitu "think" pannitu, complex problems-a step-by-step work pannitu apram dhaan answer kudukkum. Direct generation problem-ku longer-a think pannaalum almost value illa, example-ku "5+5 yenna?" nu kettaa neraiya yosichaalum use illa. Aana reasoning oriented generation-ku intermediate calculation help pannum, Oru romba kashtamaana programming problem-a eduthukkonga, neenga requirements-a understand pannuveenga, algorithm design pannuveenga, edge cases-a consider pannuveenga, implement pannuveenga, tests run pannuveenga, debug pannuveenga, thappu irundha thirumba try pannuveenga. Idhula neraiya time yosikka vendi irukkum, adhaan longer thinking-ku meaning kudukkudhu. Reasoning models indha deliberate computation-a inference-kulla konjam konjam-aa konduvara try pannum. Debugging example-ku, oru line-la error irundha, direct generation "Indha line-a remove pannu" nu sollidum. Aana reasoning model adha suthi yosikkum, enna nadakkudhu nu check pannum, code-oda matha parts-a consider pannum, apram dhaan answer sollum. Important point, reasoning-a generation-la irundhu completely different operation illa, reasoning-um oru intermediate computation-a generate aagum.`,
  interviewDefinition: `Reasoning models are advanced AI systems that pause to think and work through complex problems step by step before giving an answer. For a direct generation problem such as "What is 5+5?", thinking longer provides almost no value. For reasoning-oriented generation, an intermediate calculation helps, For an extremely difficult programming problem, you may understand the requirements, design an algorithm, consider edge cases, implement, run tests, debug, and try again, so long thinking is needed. Reasoning models attempt to bring more of this deliberate computation into inference. For example, when debugging code with an error on a line, direct generation might simply say "Remove this line", but a reasoning model will think around it, check what is happening, consider the other parts of the code, and then give the answer. Reasoning is not a completely different operation from generation, because reasoning itself can be generated as intermediate computation.`,
  example: `// Direct generation problem
// Thinking longer provides almost no value
// Ex: What is 5+5?
console.log(5 + 5); // 10

// Reasoning oriented generation problem
// An intermediate calculation helps

// Extremely difficult programming problem, you may:
// - Understand requirements
// - Design an algorithm
// - Consider edge cases
// - Implement
// - Run tests
// - Debug
// - Try again

// Reasoning models attempt to bring more of this
// deliberate computation into inference.

// Debugging example: a line has an error
// Direct generation  -> "Remove this line."
// Reasoning model    -> thinks around it, checks what is happening,
//                       considers the other parts of the code,
//                       then tells you the answer

// Reasoning is not a completely different operation from generation.
// Reasoning itself can be generated as intermediate computation.

+---------------------------+----------------------------------+--------------------------------------------+
| Point                     | Direct Generation Problem        | Reasoning Oriented Generation              |
+---------------------------+----------------------------------+--------------------------------------------+
| Thinking longer           | Provides almost no value         | Intermediate calculation helps             |
+---------------------------+----------------------------------+--------------------------------------------+
| Example                   | What is 5+5?                     | Company grows revenue 20%, then loses 20%.|
|                           |                                  | Back at original revenue?                  |
+---------------------------+----------------------------------+--------------------------------------------+
| Debugging a code error    | "Remove this line."              | Thinks around it, checks what is happening,|
|                           |                                  | considers other parts of the code, answers |
+---------------------------+----------------------------------+--------------------------------------------+
| Done by                   | Direct answer                    | Reasoning Model (deliberate computation    |
|                           |                                  | brought into inference)                    |
+---------------------------+----------------------------------+--------------------------------------------+

// Flow: Extremely difficult programming problem
+---------------------------+
| Understand requirements   |
+---------------------------+
            |
            v
+---------------------------+
| Design an algorithm       |
+---------------------------+
            |
            v
+---------------------------+
| Consider edge cases       |
+---------------------------+
            |
            v
+---------------------------+
| Implement                 |
+---------------------------+
            |
            v
+---------------------------+
| Run tests                 |
+---------------------------+
            |
            v
+---------------------------+
| Debug                     |
+---------------------------+
            |
            v
+---------------------------+
| Try again (if wrong)      |
+---------------------------+`
},
{
  id: 'chain-of-thought',
  title: 'Chain of Thought',
  category: 'AI',
  slangDefinition: `Chain of Thought na answer-ku varradhuku munnadi intermediate reasoning steps-a produce panradhu. Idhu reasoning oda terminology, aana complex tasks solve panna help pannum. Flow simple: Problem, apram Step 1, Step 2, Step 3, ippadi poi last-la Answer. Indha steps ellame serndhu dhaan reasoning. Idhula main points: intermediate reasoning complex tasks-oda results-a improve pannum, more time to think na better answers kidaikkum, large problem-a smaller subproblems-a break pannurom. Indha research paper Jan 2023-la vandhuchu. Note: oru model-oda intelligence training-la evlo computation use pannanga nu mattum determine aagaadhu, answer panra time-la evlo useful computation pannudhu nu adhuvum matter aagum. Ippo post-training and reasoning models dhaan scaling dimension-la major factors aagitu varudhu. Aana more tokens na automatic-a more intelligence nu artham illa. Direct generation-ku long thinking theva illa. More thinking correct answer kidaikkura probability-a increase pannum, aana certainty guarantee panna maattum. More thinking infinite-a useful-um illa. Recent research reasoning models-la overthinking-a observe pannirukku, adhavadhu reasoning budget-a useful point-ku mela increase pannaa diminishing/limited/decreasing returns varum, sila time model first-la correct-a irundha solution-a kooda vittuduradhum nadakkum.`,
  interviewDefinition: `Chain of Thought refers to producing intermediate reasoning steps before arriving at an answer. It is a terminology for the same idea of reasoning, and it helps solve complex tasks. The flow is Problem, then Step 1, Step 2, Step 3 and so on, and finally the Answer, where all the steps together form the reasoning. The key ideas are that intermediate reasoning can improve results for complex tasks, more time to think gives better answers, and a large problem is broken into smaller subproblems. This was introduced in a research paper in January 2023. A model's intelligence is not determined only by how much computation was used during training, but also by how much useful computation it performs while answering. Post-training and reasoning models are now major factors in the scaling dimension. However, more tokens do not automatically mean more intelligence, and direct generation may not need long thinking. More thinking can increase the probability of a correct answer but does not guarantee certainty, and it is not infinitely useful. Research has observed overthinking, where increasing the reasoning budget beyond a useful point produces diminishing/limited/decreasing returns and can even cause a model to abandon an initially correct solution.`,
  example: `// Chain of Thought broadly refers to producing
// intermediate reasoning steps before arriving at an answer.
// Research Paper - Jan 2023

// Q. A bat and ball together cost ₹110.
//    The bat costs ₹100 more than the ball.
//    Then how much does the ball cost?
//
// Guess the answer? 10 is the answer? No, it's ₹5.

// Suppose the ball costs x rupees.
// The bat would cost ₹100 + x, correct?
// So the equation is: x + (x + 100) = 110
// Here, x is the price of the ball,
// and x + 100 is the price of the bat.

// x + (x + 100) = 110
// 2x = 110 - 100
// 2x = 10
// x = 5

const total = 110;
const difference = 100;
const ball = (total - difference) / 2; // 2x = 10 -> x = 5
const bat = ball + difference;         // 100 + x

console.log(ball);        // 5
console.log(bat);         // 105
console.log(ball + bat);  // 110

// Maths is clear, but how is my mind still confused
// and giving me ₹10 only?

// Note:
// "A model's intelligence is not determined only by how much
//  computation was used during training.
//  How much useful computation it performs while answering
//  can matter too."

// Nowadays, post-training and reasoning models are becoming
// major factors in the scaling dimension.
// More tokens do not automatically mean more intelligence.
// For direct generation, there may be no need for long thinking.
// More thinking can increase the probability of getting the
// correct answer, but it does not guarantee certainty.
// More thinking is also not infinitely useful.
// Recent research on reasoning models has observed overthinking,
// where increasing the reasoning budget beyond a useful point can
// produce diminishing returns and can even cause a model to
// abandon an initially correct solution.

+------------------------------+----------------------------------------------+
| Point                        | Meaning                                      |
+------------------------------+----------------------------------------------+
| Chain of Thought             | Producing intermediate reasoning steps       |
|                              | before arriving at an answer                 |
+------------------------------+----------------------------------------------+
| Intermediate reasoning       | Can improve the results for complex tasks    |
+------------------------------+----------------------------------------------+
| More time to think           | Gets you better answers                      |
+------------------------------+----------------------------------------------+
| Breaking large problem       | Into smaller subproblems                     |
+------------------------------+----------------------------------------------+
| Research paper               | Jan 2023                                     |
+------------------------------+----------------------------------------------+
| More tokens                  | Do not automatically mean more intelligence  |
+------------------------------+----------------------------------------------+
| More thinking                | Increases probability of a correct answer,   |
|                              | but does not guarantee certainty             |
+------------------------------+----------------------------------------------+
| Overthinking                 | Beyond a useful point gives diminishing      |
|                              | returns, may abandon a correct solution      |
+------------------------------+----------------------------------------------+
`
},
{
  id: 'scaling-dimensions-training-vs-inference',
  title: 'Scaling Dimensions: Training Compute vs Inference Compute',
  category: 'AI',
  slangDefinition: `Traditionally LLMs-a smarter aakka oru major way irundhudhu: oru periya model-a build pannitu, adha more compute use pannitu train panradhu. Adhavadhu model size-um training compute-um athigam pannaa model smart aagum nu nambinom. Aana Reasoning Models vandha apram innoru important scaling dimension open aagiduchu: oru problem-a solve panra time-la, adhavadhu inference-la, more compute spend panradhu. Simple-a sonna, munnadi smart-a aakka training-la dhaan ellam panninom, ippo model answer sollum pothu kooda adhuku yosikka more compute kudukkalaam, adhu dhaan reasoning models-oda main idea.`,
  interviewDefinition: `Traditionally, one major way to make LLMs smarter was to build a larger model and train it with more compute. Reasoning models opened another important scaling dimension: spending more compute solving a problem during inference. In other words, earlier the improvement came mainly from training-time compute, whereas reasoning models also improve results by using more compute at inference time, while the model is answering the question.`,
  example: `// Traditionally,
// one major way to make LLMs smarter was:
// Build a larger model and train it with more compute.

// Reasoning Models opened another important scaling dimension:
// Spend more compute solving a problem during Inference.

+--------------------------+-----------------------------------+-----------------------------------------+
| Point                    | Traditional Way                   | Reasoning Models                        |
+--------------------------+-----------------------------------+-----------------------------------------+
| How LLMs get smarter     | Build a larger model              | Spend more compute solving a problem    |
|                          | and train it with more compute    | during inference                        |
+--------------------------+-----------------------------------+-----------------------------------------+
| Where compute is spent   | Training                          | Inference                               |
+--------------------------+-----------------------------------+-----------------------------------------+
| Scaling dimension        | Larger model + more training      | Another important scaling dimension     |
|                          | compute                           | opened by reasoning models              |
+--------------------------+-----------------------------------+-----------------------------------------+

// Flow: Traditional scaling
+-----------------------------+
| Build a larger model        |
+-----------------------------+
              |
              v
+-----------------------------+
| Train it with more compute  |
+-----------------------------+
              |
              v
+-----------------------------+
| Smarter LLM                 |
+-----------------------------+

// Flow: New scaling dimension (Reasoning Models)
+-----------------------------+
| Problem arrives at model    |
+-----------------------------+
              |
              v
+-----------------------------+
| Spend more compute solving  |
| the problem during          |
| Inference                   |
+-----------------------------+
              |
              v
+-----------------------------+
| Better answer               |
+-----------------------------+`
},
{
  id: 'reinforcement-learning-for-verifiable-tasks',
  title: 'Reinforcement Learning for Verifiable Tasks',
  category: 'AI',
  slangDefinition: `Verifiable domains na answer correct-a thappa nu check panna mudiyura areas, example-ku math problems and code. Inga namma subjective human preference-a mattum nambama, outcome-ku reward kudukkalaam, adhu romba strong signal-a irukkum. Example: Prompt-la "longest valid palindrome return panra function implement pannu" nu kudukkurom. Model code ezhudhum. Apram namma andha code-a run pannuvom: Test 1 pass, Test 2 pass, Test 3 fail, Test 4 pass. Indha result namakku oru concrete training signal kudukkudhu, yenna na yedhu correct yedhu thappu nu clear-a theriyudhu. Adhanala model-a train panna, each correct output-ku reward kudukkurom, so correct patterns strong aagum. same prompt-ku model neraiya code samples generate pannudhu, adhula siladhu correct-aa iruku, siladhu wrond-aa iruku, andha result-a vechu model-a improve panrom.`,
  interviewDefinition: `Verifiable domains, such as math problems and code, let us reward outcomes with much stronger signals than subjective human preference alone, because the correctness of an output can be checked automatically. For example, given the prompt "Implement a function that returns the longest valid palindrome", the model writes code and we run tests on it. If Test 1, 2 and 4 pass and Test 3 fails, the result gives a concrete training signal. In reinforcement learning for verifiable tasks, we train the model by giving a reward for each correct output so that the patterns leading to correct answers become stronger.`,
  example: `// Reinforcement learning for verifiable tasks
// Verifiable domains let us reward outcomes with much stronger
// signals than subjective human preference alone.
// Ex - Math problems, code

// Prompt:
// Implement a function that returns the longest valid palindrome.
// The model writes code.
// We run:
//   Test 1 ✓
//   Test 2 ✓
//   Test 3 ✗
//   Test 4 ✓
// The result gives a concrete training signal.
// You train the model by giving reward for each correct output
// to make the patterns strong.

const testResults = [true, true, false, true]; // Test 1 to Test 4

testResults.forEach((passed, i) => {
  console.log('Test ' + (i + 1) + ': ' + (passed ? '✓' : '✗'));
});
// Test 1: ✓
// Test 2: ✓
// Test 3: ✗
// Test 4: ✓

+--------------------------+------------------------------------+------------------------------------+
| Point                    | Subjective Human Preference        | Verifiable Domains                 |
+--------------------------+------------------------------------+------------------------------------+
| Reward signal            | Weaker                             | Much stronger                      |
+--------------------------+------------------------------------+------------------------------------+
| Examples                 | Opinion based answers              | Math problems, code                |
+--------------------------+------------------------------------+------------------------------------+
| How outcome is judged    | Human preference alone             | Run tests, check the result        |
+--------------------------+------------------------------------+------------------------------------+
| Training                 | -                                  | Reward each correct output to make |
|                          |                                    | the patterns strong                |
+--------------------------+------------------------------------+------------------------------------+

+--------------------------+----------+
| Test                     | Result   |
+--------------------------+----------+
| Test 1                   | ✓        |
+--------------------------+----------+
| Test 2                   | ✓        |
+--------------------------+----------+
| Test 3                   | ✗        |
+--------------------------+----------+
| Test 4                   | ✓        |
+--------------------------+----------+

// Flow: Verifiable task training
+--------------------------------------------+
| Prompt: Implement a function that returns  |
| the longest valid palindrome               |
+--------------------------------------------+
                     |
                     v
+--------------------------------------------+
| The model writes code                      |
+--------------------------------------------+
                     |
                     v
+--------------------------------------------+
| We run tests                               |
| Test 1 ✓  Test 2 ✓  Test 3 ✗  Test 4 ✓     |
+--------------------------------------------+
                     |
                     v
+--------------------------------------------+
| Result gives a concrete training signal    |
+--------------------------------------------+
                     |
                     v
+--------------------------------------------+
| Reward each correct output                 |
| (patterns become strong)                   |
+--------------------------------------------+

// Diagram: same prompt, multiple code samples from the model
//
//  Prompt    Prompt    Prompt    Prompt
//    |         |         |         |
//    v         v         v         v
// +------+  +------+  +------+  +------+
// | code |  | code |  | code |  | code |
// +------+  +------+  +------+  +------+
//    ✓         ✗         ✓         ✗
//  (green    (red      (green    (red
//   arrow)    arrow)    arrow)    arrow)`
},
{
  id: 'rlvr',
  title: 'RLVR - Reinforcement Learning with Verifiable Rewards',
  category: 'AI',
  slangDefinition: `RLVR na Reinforcement Learning with Verifiable Rewards, adhavadhu Reinforcement from Verifiable Feedback (RLVF) nu kooda solluvaanga. Munnadi RLHF-la irundha problem ? Humans expensive, human preferences subjective, humans mistakes pannuvaanga. Aana sila domains-la environment-ye answer correct-a illa nu sollidum. Verifiable domains namma outcomes-ku reward kudukkum pothu, subjective human preference-a mattum vechu kudukkura reward-a vida romba strong signal kidaikkum. Simple-a sonna, indha training method-la model clear-a right illa wrong nu irukkura problems-a solve panna try pannum. Human padichu judge pannradhuku badhilaa, oru computer program illa strict rules automatic-a AI-oda work-a check pannidum. AI correct answer kudutha, adhuku oru digital reward kidaikkum, adhu adha future-layum repeat panna kathukkum, so precision venum nu irukkura tasks-ku AI romba reliable aagum. Ange sila results-ku human verification venum, sila results-ku venam. Example-ku 5 + 5 oru verifiable task, aana travel itinerary create panradhu verifiable illa. Verifiable tasks-la humans loop-la irukka thevai illa. Mathematics la neraiya problems-ku verifiable final answer irukku. Programming la code-a execute panni test panna mudiyum. Chess game verifiable task, math question verifiable task, coding questions-um verifiable, yenna na tests run panni code work aagudha nu check panna mudiyum. DeepSeek-R1 maari systems large-scale reinforcement learning-a correctness-oriented signals vechu use pannaa mathematical and coding reasoning strong-a improve aagum nu demonstrate pannirukku. OpenAI-um reasoning post-training pipelines-la reinforcement learning and mathematics, coding maari verifiable tasks use pannurathu describe pannirukku. Idhu romba romba powerful. Aana subjective tasks tough, example-ku theory questions, inga human preferences dhaan use aagum. So subjective preference na humans evaluate pannuvaanga, adhu RLHF. Verifiable answer na computer or rules evaluate pannum, adhu RLVF/RLVR.`,
  interviewDefinition: `RLVR, Reinforcement Learning with Verifiable Rewards (also called Reinforcement from Verifiable Feedback, RLVF), is an AI training method where the model learns by trying to solve problems that have a clear, undeniable right or wrong answer. RLHF has known problems: humans are expensive, human preferences are subjective, and humans make mistakes. In certain domains, however, the environment itself can tell us whether the answer is correct, so instead of relying on humans to judge the response, a computer program or a strict set of rules automatically checks the AI's work. If the AI gets the correct answer, it receives a digital reward, which teaches it to repeat that successful behaviour, making it highly reliable for tasks that need absolute precision. Verifiable domains let us reward outcomes with much stronger signals than subjective human preference alone. For example, 5 + 5 is a verifiable task, but creating a travel itinerary is not, and for verifiable tasks humans are not required in the loop. Mathematics is particularly useful because many problems have verifiable final answers, and programming is useful because code can be executed and tested. A chess game, a math question and a coding question with tests are all verifiable tasks. Systems such as DeepSeek-R1 have demonstrated that large-scale reinforcement learning using correctness-oriented signals can strongly improve mathematical and coding reasoning, and OpenAI has likewise described reasoning post-training pipelines that use reinforcement learning and verifiable tasks such as mathematics and coding. Subjective tasks, such as theory questions, are tougher because human preferences are used. In short: subjective preference means humans evaluate it, which is RLHF, while a verifiable answer means a computer or rules can evaluate it, which is RLVF/RLVR.`,
  example: `// Remember the problem with RLHF?
// - Humans are expensive.
// - Human preferences are subjective.
// - Humans make mistakes.
//
// But in certain domains, the environment itself can tell us
// whether the answer is correct.
// - Mathematics is particularly useful because many problems
//   have verifiable final answers.
// - Programming is particularly useful because code can be
//   executed and tested.
//
// Note: Verifiable domains let us reward outcomes with much
// stronger signals than subjective human preference alone.

// Verifiable task: 5 + 5 (no human needed in the loop)
const modelAnswer = 10;
const reward = modelAnswer === 5 + 5 ? 1 : 0; // program checks automatically
console.log(reward); // 1 (correct answer -> digital reward)

// Not verifiable: "Create a travel itinerary"
// -> no clear right or wrong answer, humans may be needed in the loop

// Examples of verifiable tasks: chess game, math question,
// coding questions (run tests and check whether the code works)

// Systems such as DeepSeek-R1 have demonstrated that large-scale
// reinforcement learning using correctness-oriented signals can
// strongly improve mathematical and coding reasoning.
//
// OpenAI has likewise described reasoning post-training pipelines
// that use reinforcement learning and verifiable tasks such as
// mathematics and coding.

// Subjective tasks are tough (Theory questions)
// (human preferences are used)

+----------------------+--------------------------------+--------------------------------------+
| Point                | RLHF                           | RLVF / RLVR                          |
+----------------------+--------------------------------+--------------------------------------+
| Type of answer       | Subjective preference          | Verifiable answer                    |
+----------------------+--------------------------------+--------------------------------------+
| Who evaluates        | Humans                         | Computer / rules                     |
+----------------------+--------------------------------+--------------------------------------+
| Feedback             | Humans give rewards, feedback  | Result is checked automatically      |
+----------------------+--------------------------------+--------------------------------------+
| Problems / strengths | Humans are expensive,          | Much stronger signal, humans not     |
|                      | preferences are subjective,    | required in the loop, highly         |
|                      | humans make mistakes           | reliable for precision tasks         |
+----------------------+--------------------------------+--------------------------------------+
| Examples             | Theory questions, travel       | 5 + 5, chess game, math question,    |
|                      | itinerary                      | coding questions with tests          |
+----------------------+--------------------------------+--------------------------------------+

+---------------------------+----------------------------------------+
| Domain                    | Why it is verifiable                   |
+---------------------------+----------------------------------------+
| Mathematics               | Many problems have verifiable final    |
|                           | answers                                |
+---------------------------+----------------------------------------+
| Programming               | Code can be executed and tested        |
+---------------------------+----------------------------------------+

// Flow: RLVR
+---------------------------------+
| Model tries to solve a problem  |
| with a clear right/wrong answer |
+---------------------------------+
                 |
                 v
+---------------------------------+
| Computer program / strict rules |
| automatically check the work    |
+---------------------------------+
                 |
                 v
+---------------------------------+
| Correct answer -> digital       |
| reward                          |
+---------------------------------+
                 |
                 v
+---------------------------------+
| Model repeats that successful   |
| behaviour in the future         |
+---------------------------------+

// Remember:
// Subjective preference -> Humans can evaluate -> RLHF
// Verifiable answer     -> Computer/rules can evaluate -> RLVF/RLVR`
},
{
  id: 'types-of-evaluators',
  title: 'Types of Evaluators',
  category: 'AI',
  slangDefinition: `Evaluators or judges nu moonu types irukku. Onnu Deterministic Evaluator: idhu exact evaluation kudukkum, exact answer, compiler, unit tests, schema validator maari things use pannum. Possible-a irundha idhu dhaan best. Rendavadhu Human Evaluator: oru person answer-a inspect pannuvaaru. Human judgment illa expertise venum nu irukkura edathula idhu useful. Moonavadhu Model Evaluator: innoru LLM-a use pannitu output-a judge panna vekkalaam. Idhuku LLM-as-a-Judge nu per. Simple-a sonna, answer-a check panna adhoda type-a poruthu yaaru check pannuvaanga nu maarum: rules and tools check panna adhu deterministic, manushan check panna adhu human, innoru AI check panna adhu model evaluator.`,
  interviewDefinition: `There are three types of evaluators or judges. First, the Deterministic Evaluator gives an exact evaluation using things like an exact answer, a compiler, unit tests or a schema validator, and it is the best choice whenever possible. Second, the Human Evaluator is a person who inspects the answer, and it is useful when human judgment or expertise is required. Third, the Model Evaluator uses another LLM to judge the output, and this approach has become known as LLM-as-a-Judge.`,
  example: `// Three types of Evaluations
//
// 1. Deterministic evaluator
//    - Exact answer
//    - Compiler
//    - Unit tests
//    - Schema validator
//    Best when possible.
//
// 2. Human evaluator
//    A person inspects the answer.
//    Useful when judgment or expertise is required.
//
// 3. Model evaluator
//    Use another LLM to judge the output.
//    This has become known as: LLM-as-a-Judge.

+---------------------+------------------------------------+----------------------------------------+
| Evaluator           | How it evaluates                   | Best used when                         |
+---------------------+------------------------------------+----------------------------------------+
| 1. Deterministic    | Exact answer, compiler,            | Best when possible                     |
|    evaluator        | unit tests, schema validator       |                                        |
+---------------------+------------------------------------+----------------------------------------+
| 2. Human evaluator  | A person inspects the answer       | Judgment or expertise is required      |
+---------------------+------------------------------------+----------------------------------------+
| 3. Model evaluator  | Use another LLM to judge the       | Known as LLM-as-a-Judge                |
|                     | output                             |                                        |
+---------------------+------------------------------------+----------------------------------------+
`
},
{
  id: 'llm-as-a-judge',
  title: 'LLM-as-a-Judge (What It Can Evaluate and Its Problems)',
  category: 'AI',
  slangDefinition: `LLM-as-a-Judge na oru LLM-a vechu innoru model-oda output-a judge panna vekkura approach. Idhu potentially relevance, clarity, instruction following, style, completeness, code explanation, and provided context-ku against factual consistency maari things-a evaluate pannum. Aana avanga perfect illa. Judge model-la sila problems irukku: biases irukkum, longer answers-ku preference kudukkum, style preferences irukkum, position bias irukkum (adhavadhu answer-oda position judgment-a affect pannum), subtle factual errors-a detect panna mudiyaadhu, persuasive language-ku easy-a fool aagiduvaanga, and judge panna padra model-oda errors-oda correlated errors-um irukkum. Adhanala idhula sila advantages irukku, sila drawbacks-um irukku. AI-a vechu AI-a evaluate panradhu evaluation-a scale panna help pannum, aana adhu magically objective truth-a create pannaadhu. AI-a vechu AI-a evaluate panradhu powerful dhaan, aana ippo namma evaluator-a kooda evaluate pannanum. Indha recursive problem modern AI engineering-la thirumba thirumba varum.`,
  interviewDefinition: `LLM-as-a-Judge means using one LLM to evaluate the output of another model. A judge can potentially evaluate relevance, clarity, instruction following, style, completeness, code explanation, and factual consistency against provided context, but it is not perfect. A judge model can have biases, a preference for longer answers, style preferences, position bias (where the position of an answer affects the judgment), an inability to detect subtle factual errors, susceptibility to persuasive language, and errors correlated with the model being judged. So it has both advantages and drawbacks. Using an AI to evaluate an AI scales evaluation, but it does not magically create objective truth. Using AI to evaluate AI is powerful, but now we need to evaluate the evaluator, and this recursive problem will appear repeatedly in modern AI engineering.`,
  example: `// What can LLM judges evaluate?
// Potentially:
// - relevance
// - clarity
// - instruction following
// - style
// - completeness
// - code explanation
// - factual consistency against provided context
//
// But they are not perfect.

// Problems with LLM-as-a-judge
// A judge model can have:
// - biases
// - preference for longer answers
// - style preferences
// - position bias
// - inability to detect subtle factual errors
// - susceptibility to persuasive language
// - correlated errors with the model being judged

// Using an AI to evaluate an AI scales evaluation,
// but it does not magically create objective truth.
//
// Using AI to evaluate AI is powerful.
// But now we need to evaluate the evaluator.
// This recursive problem will appear repeatedly
// in modern AI engineering.

// Position bias: the position of an answer can affect the judgment
// (some models can show position bias)

+------------------------------------------+------------------------------------------------------+
| What LLM judges can evaluate             | Problems with LLM-as-a-judge                         |
+------------------------------------------+------------------------------------------------------+
| relevance                                | biases                                               |
+------------------------------------------+------------------------------------------------------+
| clarity                                  | preference for longer answers                        |
+------------------------------------------+------------------------------------------------------+
| instruction following                    | style preferences                                    |
+------------------------------------------+------------------------------------------------------+
| style                                    | position bias                                        |
+------------------------------------------+------------------------------------------------------+
| completeness                             | inability to detect subtle factual errors            |
+------------------------------------------+------------------------------------------------------+
| code explanation                         | susceptibility to persuasive language                |
+------------------------------------------+------------------------------------------------------+
| factual consistency against provided     | correlated errors with the model being judged        |
| context                                  |                                                      |
+------------------------------------------+------------------------------------------------------+

// Flow: LLM-as-a-Judge
+---------------------------+
| Model output              |
+---------------------------+
            |
            v
+---------------------------+
| Another LLM (judge)       |
| evaluates the output      |
+---------------------------+
            |
            v
+---------------------------+
| Evaluation result         |
+---------------------------+
            |
            v
+---------------------------+
| Now we need to evaluate   |
| the evaluator (recursive  |
| problem)                  |
+---------------------------+`
},
{
  id: 'tree-of-thought',
  title: 'Tree of Thought',
  category: 'AI',
  slangDefinition: `Tree of Thoughts (ToT) na oru AI problem-solving method, idhula AI orey time-la multiple reasoning paths-a test pannum, thanoda work-a thaane check pannum, oru idea fail aana backtrack pannum, exactly oru human kashtamaana puzzle-a solve panra maari. Idhu Chain of Thought-oda just oru different way dhaan, aana reasoning capabilities-a increase pannum. Chain of Thought-la oru straight path dhaan irukkum, aana Tree of Thought-la better answer kidaikka namakku innum neraiya chances kidaikkum. Indha system neraiya possibilities-a explore pannum, partial solutions-a score pannum, weak branches-a prune pannum (vettidum), promising branches-a thodarndhu continue pannum.`,
  interviewDefinition: `Tree of Thoughts (ToT) is an AI problem-solving method where the model tests multiple reasoning paths at the same time, checks its own work, and backtracks if an idea fails, much like a human solving a hard puzzle. It is just a different way of doing Chain of Thought, and it increases reasoning capabilities. Instead of following a single chain of steps, Tree of Thoughts gives more chances of a better answer. The system can explore several possibilities, score partial solutions, prune weak branches, and continue promising branches.`,
  example: `
// Instead of Chain of Thought, Tree of Thoughts
// gives you more chances of better ans.
//
// The system can:
// - explore several possibilities
// - score partial solutions
// - prune weak branches
// - continue promising branches

//                      +--------+
//                      | Prompt |
//                      +--------+
//                     /     |     \
//                    /      |      \
//                  (A)     (B)     (C)
//                 /  \      |     / | \
//              (A1) (A2)  (B1) (C1)(C2)(C3)
//                   /  \            /  \
//               (A21) (A22)     (C21) (C22)

+---------------------------+--------------------------------------+
| Point                     | Meaning                              |
+---------------------------+--------------------------------------+
| Tree of Thoughts (ToT)    | Tests multiple reasoning paths at    |
|                           | the same time                        |
+---------------------------+--------------------------------------+
| Checks its own work       | Backtracks if an idea fails          |
+---------------------------+--------------------------------------+
| Compared to Chain of      | Just a different way, increases      |
| Thought                   | reasoning capabilities               |
+---------------------------+--------------------------------------+
| Benefit                   | More chances of a better answer      |
+---------------------------+--------------------------------------+

+------------------------------+----------------------------------+
| System can                   | Meaning                          |
+------------------------------+----------------------------------+
| Explore several possibilities| Try many branches (A, B, C)      |
+------------------------------+----------------------------------+
| Score partial solutions      | Rate each branch midway          |
+------------------------------+----------------------------------+
| Prune weak branches          | Drop branches that look weak     |
+------------------------------+----------------------------------+
| Continue promising branches  | Keep going with the best ones    |
+------------------------------+----------------------------------+`
},
{
  id: 'graph-of-thoughts',
  title: 'Graph of Thoughts',
  category: 'AI',
  slangDefinition: `Graph of Thoughts (GoT) na oru AI reasoning method, idhula AI oru complex problem-a interconnected ideas-oda network-a break pannum, adhavadhu nodes and links-a represent pannum. Idhu straight line-la yosikkama, human brain maari thoughts-a mix pannalaam, loop pannalaam, combine pannalaam. Tree structures-ku oru limitation irukku: each branch independent-a dhaan valarum. Aana reasoning sila time tree-shaped-a irukkaadhu, maybe rendu different ideas combine aagalaam. Chain of Thought oru path-a mattum explore pannum, Tree of Thought alternatives-a explore pannum, aana Graph of Thoughts useful ideas-a thirumba reconnect pannitu combine panna kooda allow pannum. Example-ku, Approach A oru efficient algorithm-a kandupidikkudhu, Approach B oru important edge case-a kandupidikkudhu. Rendumae namakku venu, Efficient algorithm from A + edge-case handling from B = better solution. Final output different branches-oda multiple subproblems-oda solution-a pick panna mudiyum. Note: visible reasoning faithful-a irukkanum nu avasiyam illa, adhavadhu AI kaatura reasoning avanga unmaiyaana internal process-a irukkanum nu illa.`,
  interviewDefinition: `Graph of Thoughts (GoT) is an AI reasoning method where the model breaks a complex problem down into a network of interconnected ideas, represented as nodes and links, allowing it to mix, loop and combine thoughts, much like the human brain, instead of thinking in a straight line. Tree structures have one limitation: each branch grows independently, but reasoning is sometimes not tree-shaped, and two different ideas may need to combine. Chain of Thought explores one path, Tree of Thought explores alternatives, and Graph of Thoughts also allows useful ideas to reconnect and combine. For example, if Approach A finds an efficient algorithm and Approach B finds an important edge case, there is no reason to throw either away: the efficient algorithm from A plus the edge-case handling from B gives a better solution. The final output can pick solutions of multiple subproblems from different branches. Note that visible reasoning is not necessarily faithful.`,
  example: `// Graph of Thoughts
// Tree structures have one limitation.
// Each branch grows independently.
// But reasoning is sometimes not tree-shaped.
// Maybe two different ideas can combine.

// Suppose:
// Approach A - finds an efficient algorithm.
// Approach B - finds an important edge case.
// Why throw either away?
//
// Efficient algorithm from A + Edge-case handling from B = Better solution

// Final output can pick solution of multiple subproblems
// from different branches.

// Note: Visible reasoning is not necessarily faithful.

const approachA = 'efficient algorithm';
const approachB = 'important edge case';
const combined = approachA + ' + ' + approachB + ' = better solution';
console.log(combined);
// efficient algorithm + important edge case = better solution

+----------------------+-----------------------------------------------+
| Method               | How it explores                               |
+----------------------+-----------------------------------------------+
| Chain of Thought     | Explores one path                             |
+----------------------+-----------------------------------------------+
| Tree of Thought      | Explores alternatives                         |
+----------------------+-----------------------------------------------+
| Graph of Thoughts    | Also allows useful ideas to reconnect and     |
|                      | combine                                       |
+----------------------+-----------------------------------------------+

+----------------------+-----------------------------------------------+
| Approach             | What it finds                                 |
+----------------------+-----------------------------------------------+
| Approach A           | An efficient algorithm                        |
+----------------------+-----------------------------------------------+
| Approach B           | An important edge case                        |
+----------------------+-----------------------------------------------+
| A + B                | Better solution                               |
+----------------------+-----------------------------------------------+

// Diagram: branches reconnect and combine
//
//              +--------+
//              | PROMPT |
//              +--------+
//             /     |     \
//           (A)    (B)    (C)
//          /  \    /  \     \
//        (.)  (.) (.) (.)   (.)
//         |    \   \   /    /
//        (.)  (.)-(.)-(.)--+
//               \  |
//               (.) <- ideas reconnect and combine
//                |
//               (.) <- final output picks solutions of
//                      multiple subproblems from different
//                      branches

// Flow: Graph of Thoughts
+------------------------------+
| Prompt                       |
+------------------------------+
               |
               v
+------------------------------+
| Multiple branches (A, B, C)  |
+------------------------------+
               |
               v
+------------------------------+
| Ideas reconnect and combine  |
| (A: efficient algorithm +    |
|  B: edge-case handling)      |
+------------------------------+
               |
               v
+------------------------------+
| Final output picks solutions |
| of multiple subproblems from |
| different branches           |
+------------------------------+
               |
               v
+------------------------------+
| Better solution              |
+------------------------------+`
},
{
  id: 'limits-of-reasoning-models',
  title: 'Limits of Reasoning Models',
  category: 'AI',
  slangDefinition: `Reasoning models-ku sila limits irukku. Avanga hallucinate pannalaam, arithmetic errors pannalaam, problem-a misunderstand pannalaam, false assumptions-um pannalaam. More thinking na correctness guarantee nu artham illa. Adhanala Knowledge + Reasoning + Tools, indha moonu dhaan ellathayum possible aakkura main factors. Simple-a sonna, model-ku sariyaana knowledge venum, adha vechu yosikka reasoning venum, apram calculator, code run panradhu maari tools venum, appo dhaan reliable-a answer kidaikkum.`,
  interviewDefinition: `Reasoning models have limits. They can hallucinate, make arithmetic errors, misunderstand the problem, and make false assumptions. More thinking does not guarantee correctness. Knowledge, reasoning and tools are the three main factors that make everything possible: the model needs the right knowledge, the ability to reason over it, and tools to act on and verify its work.`,
  example: `// Limits of Reasoning Models
// They can:
// - hallucinate
// - make arithmetic errors
// - misunderstand the problem
// - make false assumptions
//
// More thinking does not mean a guarantee of correctness.
//
// Knowledge + Reasoning + Tools
// are the three main factors that make everything possible.

+-----------------------------+----------------------------------------+
| Limit                       | Meaning                                |
+-----------------------------+----------------------------------------+
| Hallucination               | Can make up wrong information          |
+-----------------------------+----------------------------------------+
| Arithmetic errors           | Can calculate incorrectly              |
+-----------------------------+----------------------------------------+
| Misunderstanding the problem| Can read the question wrongly          |
+-----------------------------+----------------------------------------+
| False assumptions           | Can assume things that are not true    |
+-----------------------------+----------------------------------------+
| More thinking               | Does not guarantee correctness         |
+-----------------------------+----------------------------------------+

// Flow: Knowledge + Reasoning + Tools
+---------------------------+
| Knowledge                 |
+---------------------------+
            +
+---------------------------+
| Reasoning                 |
+---------------------------+
            +
+---------------------------+
| Tools                     |
+---------------------------+
            |
            v
+---------------------------+
| Everything becomes        |
| possible                  |
+---------------------------+`
},
]