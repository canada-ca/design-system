---
altLangPage: https://conception.canada.ca/directives/
date: '2025-03-21'
dateModified: '2025-03-21'
description: null
title: Privacy and security
---

## Privacy and security {#privacy-and-security}

### On this page

* [Redacting Personally Identifiable Information(PII) in the user input field](#redacting-personally-identifiable-information)  
* [Redacting threats, profanity and AI manipulation](#prevention-of-jailbreaking-and-manipulation)  
* [Prevention of jailbreaking and manipulation](#prevention-of-jailbreaking-and-manipulation)

### Redacting Personally Identifiable Information (PII)  {#redacting-personally-identifiable-information}

Remove and redact as much personal identifiable information (PII) as possible, rather than sending it to the AI service or storing it in any manner. 

DTO has learned from testing the AI Answers prototypethe Page Feedback Tool that most questions with PII redacted will no longer make sense. Instead of sending the redacted message to the AI Service, our approach is to show the user the result of the PII redaction and ask them to reframe the question without personal details. 

* This user message is displayed when PII is redacted: “Your question contained personal details replaced with XXX”. “To protect your privacy, your question was not sent to the AI service. Please ask your question again without any personal details.”

<p><img src="images/image6.png" alt="Redacting personally identifiable information"></p>

### Redacting threats, profanity and AI manipulation 

Apply redaction patterns in the code for profanity, threats and manipulation.

All three of these types of redaction show an identical user message and are redacted with \# characters. An error message is displayed to advise users:  “Your question was not sent to the AI service.Your question used words that aren’t accepted. Please try asking it differently”. 

This redaction approach prevents people from attempting to contact the Government with threats and from attempting to manipulate or ‘jailbreak’ the AI service. Threats would need to be handled in real-time, which is not the role of an AI chat application. 

In our usability testing, 3 participants experienced this redaction because of a bug, and they all understood the message and easily adapted. Notice that the user message nudges people towards asking a question rather than a comment. 

* Make sure to redact the entire words, not parts of words, or you’ll end up with words like “assessment” and “died” not being accepted. 

There are three sets of files of words and phrases, in English and French, that can be used. Contact us if you’d like access to these files.  

1. Profanity (badwords\_en.txt, badwords\_fr.txt)  
2. Threats (threats\_en.txt, threats\_fr.txt)  
3. Manipulation (manipulation\_en.json, manipulation\_en.json) 

<p><img src="images/image7.png" alt="Your question was not sent to the AI service."></p>

### Prevention of jailbreaking and manipulation {#prevention-of-jailbreaking-and-manipulation}

Jailbreaking a chat application means manipulating it into doing things it's not supposed to do, like providing private, harmful or out-of-scope answers.

Use limits: 

* limit the number of characters in the input field to 400   
  * Examine your usage data over time to evaluate reducing or increasing this value  
  * Error message when limit is exceeded should alert the user to the amount of characters over the limit and advise them to simplify it: “Your message is \[number\] characters too long. Please simplify your question”  
* limit the conversation to a maximum of 3 questions, as longer conversations are more vulnerable and more expensive   
  * show a Reload button and message once the conversation limit is reached \- note that only messages sent to the AI service should count towards this limit   
  * Reload message: “You’ve reached the limit of 3 questions per conversation. Reload to start a new conversation”

<p><img src="images/image3.png" alt="Reload page button"></p>

# Iterative design {#iterative-design}

Learning and feedback are crucial for successful agile service development. With the rapid pace of generative AI development, you must experiment and learn quickly.

We propose experimentation phases that include user research throughout the life cycle. Usability research ensures that by the time of a full public launch, chat application designs meet user expectations and desired outcomes. It’s also important to continuously evaluate accuracy after launch and conduct periodic testing with actual users.

## Phases of experimentation, launch and continued analysis

#### User research in the design phase

Involve user experience (UX) researchers early so they can start testing design prototypes with potential end users. Apply best practices for developers from the Treasury Board of Canada Secretariat’s [Guide on the use of generative AI](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/guide-use-generative-ai.html). 

##### Use evaluation datasets from Canada.ca feedback

Every weekday, users leave up to 4,000 feedback comments across the site, many in the form of questions. Consult your web team or the Digital Transformation Office to generate an evaluation dataset from this user feedback. <mark>Before using the dataset, ensure you remove all comments with redacted personal information, such as numbers, names, or emails (comments that include the \# character).</mark> 

For more information on using feedback, see:

* [How to access survey results and reports](https://design.canada.ca/survey/access-results.html)  
* [Guide to extracting data from the Feedback Viewer database \- (GCxhange link \- only available on the Government of Canada network)](https://gcxgce.sharepoint.com/:w:/t/10001402/EUO29ttIkP5BhpYVj4nGdkUBjvnMAxEVj8T-MuCjWfzEqw?e=HbLjyy) 

#### Initial testing phase

Provide call centre team members or other stakeholders with early versions of the chat application. They can provide feedback and rate/evaluate results. 

#### Iterative usability testing sessions 

As the design process continues, UX researchers can continue to test various aspects and iterations of the design with end-users. Unmoderated video software works well for this. Perform as many iterations as required to meet a predetermined level of success, fulfilment rate and other criteria. 

## Measure outcomes using feedback mechanisms and a post-use survey

Generative AI is rapidly changing expectations, and underlying models can evolve too. It's crucial that AI chat applications deliver answers that meet users' needs. You must continually manage and improve the accuracy and trustworthiness of these applications on Canada.ca. Feedback mechanisms can provide both quantitative and qualitative data for iterative improvement and alert the product team to issues needing immediate attention.

For quick quantitative feedback, model services typically use thumbs up and thumbs down symbols, with a text response option for thumbs down. However, for government services, research by gov.uk suggests focusing on the usefulness of the answer with text, instead of icons. 

<mark>We recommend adding the following line below the answer: "How was this answer? Good or Needs improvement."</mark>

<p><img src="images/image8.png" alt="How was this answer?"></p>

## Task Success user survey 

On Canada.ca, we randomly invite visitors to respond to the Task Success Survey (TSS). We use the results to evaluate and improve success by category.

We recommend adding a special version of the TSS to your AI application. To compare the success of visitors using your AI application with those using only the web pages, you could display the TSS invitation to a random selection of AI users. Additionally, you could always have the TSS link available at the bottom of the application page.

The Digital Transformation Office has created and usability tested a version of the TSS for AI applications. You can access the survey here: [https://cdssnc.qualtrics.com/jfe/form/SV\_4N2YTcAHkcBEGfs](https://cdssnc.qualtrics.com/jfe/form/SV_4N2YTcAHkcBEGfs)

Teams should use survey data and evaluations of chat interactions to inform their decisions and determine how effective the chat application is at delivering the desired service outcomes. Success is measured not by the number of people using the chat application, but by how many report that the chat application solved their problem and the rated accuracy of the answers they received.

For more information, [see the guidance on using the GC Task Success Survey](https://design.canada.ca/survey/index.html) 
