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
    imageUrl: '/images/ai/ml-vs-dl.png'
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
]