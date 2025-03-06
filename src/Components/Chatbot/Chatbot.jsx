import React, { useState, useRef, useEffect } from "react";
// Import avatar images (you'll need to add these to your assets folder)
import avatarGirl from "../../assets/Images/disha-girl.png";
import avatarBoy from "../../assets/Images/disha-boy.png";

const Chatbot = () => {
  // State variables
  const [step, setStep] = useState("welcome");
  const [name, setName] = useState("");
  const [plan, setPlan] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Added isOpen state initialization
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasSeenWelcome, setHasSeenWelcome] = useState(false);
  const [waitingForFinalResponse, setWaitingForFinalResponse] = useState(false);
  const [waitingForConsultationResponse, setWaitingForConsultationResponse] = useState(false);
  const [waitingForEmail, setWaitingForEmail] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [avatarGender, setAvatarGender] = useState("girl"); // Default to girl, can be "boy" or "girl"
  const [isSending, setIsSending] = useState(false); // State to track if a message is being sent
  const messagesEndRef = useRef(null);

  // Subscription plan options
  const subscriptionPlans = [
    {
      name: "Basic",
      description: "Access to basic features",
      price: "$10/month",
    },
    {
      name: "Standard",
      description: "Access to standard features",
      price: "$20/month",
    },
    {
      name: "Premium",
      description: "Access to premium features",
      price: "$30/month",
    },
  ];

  // Service options
  const services = [
    {
      name: "Internship and Placement",
      description: "Unlock your future: internships and placements for career success!",
    },
    {
      name: "University Admission Compliance",
      description: "Ensure your future: comply with university admission requirements for a seamless entry.",
    },
    {
      name: "Email Marketing",
      description: "Email marketing services provide targeted campaigns, automation, and analytics tools.",
    },
    {
      name: "Video and Photography",
      description: "Professional video and photography services for capturing memorable moments perfectly.",
    },
    {
      name: "App & Web Development",
      description: "App and web development services deliver customized, user-friendly digital solutions.",
    },
    {
      name: "SEO",
      description: "Search engine optimization improves website visibility and ranking on search engines.",
    },
    {
      name: "Meta Ads",
      description: "Meta ads services boost online presence through targeted, data-driven advertising.",
    },
    {
      name: "Social Media Marketing",
      description: "Social media marketing services enhance brand engagement and drive growth.",
    },
    {
      name: "ORM (Online Reputation Management)",
      description: "Online reputation management services improve and maintain your digital image.",
    },
  ];

  // Auto-scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Add a message to the chat
  const addMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender, timestamp: new Date() }]);
  };

  // Simulate AI typing and send response
  const sendAIResponse = (text) => {
    setIsTyping(true);
    setTimeout(() => {
      addMessage(text, "ai");
      setIsTyping(false);
    }, 800); // Simulate typing delay
  };

  // Toggle avatar gender
  const toggleAvatar = () => {
    setAvatarGender(avatarGender === "girl" ? "boy" : "girl");
  };

  // Handle welcome message when chat opens
  useEffect(() => {
    if (isOpen && !hasSeenWelcome) {
      // Clear messages and reset state for new conversation
      setMessages([]);
      setStep("welcome");

      // Welcome message sequence with DISHA introduction
      setTimeout(() => {
        sendAIResponse(`👋 Hi there! I'm DISHA, your Digital Interactive Service Helper Assistant. How can I help you today? ✨`);
        setTimeout(() => {
          sendAIResponse("What's your name? 😊");
        }, 1000);
      }, 500);

      setHasSeenWelcome(true);
    }
  }, [isOpen]);

  // Reset chat state when closing
  useEffect(() => {
    if (!isOpen) {
      setHasSeenWelcome(false);
    }
  }, [isOpen]);

  // Validate email address
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle user message input
  const handleUserInput = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Set sending state to true
    setIsSending(true);
    
    // Add user message to chat
    addMessage(userInput, "user");
    const input = userInput.trim().toLowerCase();
    setUserInput(""); // Clear input immediately to prevent double submissions

    // Check for goodbye intent
    if (input.match(/bye|goodbye|see you|exit|end chat/)) {
      handleGoodbye();
      return;
    }

    // Check if we're waiting for email
    if (waitingForEmail) {
      if (validateEmail(input)) {
        sendAIResponse(`Thank you! I've received your email (${input}). A representative will contact you shortly to schedule your consultation. 📅`);
        setWaitingForEmail(false);
        setWaitingForFinalResponse(true);
      } else {
        sendAIResponse("Hmm, that doesn't look like a valid email. Could you please provide a valid email address? 📧");
      }
      // Set sending state back to false after processing
      setTimeout(() => setIsSending(false), 1000);
      return;
    }

    // Check if we're waiting for final yes/no response
    if (waitingForFinalResponse) {
      if (input.match(/^no$|^nope$|no thanks|nothing else|that's all|that is all|i'm good|im good|i am good/)) {
        handleGoodbye();
        return;
      } else if (input.match(/^yes$|^yeah$|^yep$|^sure$|question|another|more/)) {
        sendAIResponse("Great! 😊 What else would you like to know about?");
        setWaitingForFinalResponse(false);
        // Set sending state back to false after processing
        setTimeout(() => setIsSending(false), 1000);
        return;
      }
    }

    // Check if we're waiting for consultation response
    if (waitingForConsultationResponse) {
      if (input.match(/^yes$|^yeah$|^yep$|^sure$/)) {
        sendAIResponse("Awesome! 🎉 Please provide your email address, and I'll schedule a consultation for you.");
        setWaitingForConsultationResponse(false);
        setWaitingForEmail(true); // Now waiting for email
        // Set sending state back to false after processing
        setTimeout(() => setIsSending(false), 1000);
        return;
      } else if (input.match(/^no$|^nope$|no thanks|not now|later/)) {
        sendAIResponse("No problem! Let me know if you change your mind. 😊");
        setWaitingForConsultationResponse(false);
        // Set sending state back to false after processing
        setTimeout(() => setIsSending(false), 1000);
        return;
      }
    }

    // Process user input based on current step
    if (step === "welcome") {
      // This is the name input step
      const userName = userInput.trim();
      setName(userName);
      setStep("options");
      sendAIResponse(`Nice to meet you, ${userName}! 😃 I'm DISHA, your personal assistant. How can I help you today?`);
    } else if (input.includes("subscription") || input.includes("plan") || input.includes("pricing")) {
      setStep("subscription");
      sendAIResponse("Here are our subscription plans. Which one interests you? 📝");
    } else if (input.includes("service") || input.includes("offer") || input.includes("help")) {
      setStep("services");
      sendAIResponse("Here are the services we offer: 🚀");
    } else if (input.includes("boy") || input.includes("male") || input.includes("man")) {
      setAvatarGender("boy");
      sendAIResponse("I've switched to my boy avatar! 👦 How else can I assist you today?");
    } else if (input.includes("girl") || input.includes("female") || input.includes("woman")) {
      setAvatarGender("girl");
      sendAIResponse("I've switched to my girl avatar! 👧 How else can I assist you today?");
    } else {
      // Simple AI response for other queries
      const responses = [
        "I understand you're asking about that. Let me help you. 💡",
        "That's a great question. Here's what I can tell you. 📚",
        "I'd be happy to help with that! 👍",
        "Let me see what information I can provide about that. 🔍",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      sendAIResponse(randomResponse);

      // After responding, ask if they need anything else
      setTimeout(() => {
        sendAIResponse("Is there anything else you'd like to know? 🤔");
        setWaitingForFinalResponse(true);
      }, 2000);
    }

    // Set sending state back to false after processing is complete
    setTimeout(() => setIsSending(false), 1000);
  };

  // Handle goodbye sequence
  const handleGoodbye = () => {
    // Ensure the toggle button stays hidden during the goodbye sequence
    setIsSending(true);
    
    // Randomly select a goodbye message for variety
    const goodbyeMessages = [
      "Thank you for chatting with me today! 🙏 If you need anything else, just click the chat button. Have a great day! 👋",
      "It was wonderful assisting you today! 😊 Feel free to return anytime you need help. Goodbye! ✨",
      "I've enjoyed our conversation! 💫 Thanks for chatting, and I hope to help you again soon. Take care! 👋",
      "Thanks for stopping by! 🌟 I'm always here if you need assistance. Have a fantastic day ahead! 😃",
    ];

    const randomGoodbye = goodbyeMessages[Math.floor(Math.random() * goodbyeMessages.length)];
    sendAIResponse(randomGoodbye);

    // Close the chat after showing the goodbye message
    setTimeout(() => {
      // Close the chat window
      setIsOpen(false);

      // Reset all state variables for next conversation
      // We'll do this after the chat is closed to avoid UI flickers
      setTimeout(() => {
        setStep("welcome");
        setName("");
        setPlan(null);
        setWaitingForFinalResponse(false);
        setWaitingForConsultationResponse(false);
        setWaitingForEmail(false);
        setMessages([]);
        setSelectedService(null); // Reset selected service
        setSelectedPlan(null); // Reset selected plan
        setIsSending(false); // Make sure to reset the sending state
      }, 300);
    }, 3000);
  };

  // Render current options based on step
  const renderOptions = () => {
    if (step === "subscription") {
      return (
        <div className="my-4">
          {!selectedPlan ? (
            subscriptionPlans.map((plan, index) => (
              <button
                key={index}
                className="bg-blue-100 text-blue-800 p-3 rounded mb-2 w-full text-left hover:bg-blue-200 transition-colors"
                onClick={() => {
                  setIsSending(true); // Hide toggle button during interaction
                  setSelectedPlan(plan);
                  setPlan(plan);
                  addMessage(`I'm interested in the ${plan.name} plan`, "user");
                  sendAIResponse(`Great choice! 🎉 Here are the details of our ${plan.name} plan.`);
                  setTimeout(() => setIsSending(false), 1000);
                }}
              >
                {plan.name} - {plan.price}
              </button>
            ))
          ) : (
            <div className="bg-gray-100 p-4 rounded my-4">
              <h4 className="text-lg font-medium">{selectedPlan.name}</h4>
              <p>{selectedPlan.description}</p>
              <p className="font-bold">{selectedPlan.price}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
                  onClick={() => {
                    setIsSending(true); // Hide toggle button during interaction
                    addMessage(`I want to subscribe to the ${selectedPlan.name} plan`, "user");
                    sendAIResponse("Excellent! 🎊 I've initiated the subscription process. You'll receive a confirmation email shortly with next steps.");

                    // Ask if they need anything else
                    setTimeout(() => {
                      sendAIResponse("Is there anything else you'd like to know? 🤔");
                      setWaitingForFinalResponse(true);
                      setIsSending(false);
                    }, 1500);
                  }}
                >
                  Subscribe Now
                </button>
                <button
                  className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                  onClick={() => {
                    setIsSending(true); // Hide toggle button during interaction
                    setSelectedPlan(null); // Reset selected plan
                    setStep("options");
                    sendAIResponse("Let me know if you'd like to explore other options. 🤔");
                    setTimeout(() => setIsSending(false), 1000);
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (step === "services") {
      return (
        <div className="my-4">
          {!selectedService ? (
            services.map((service, index) => (
              <button
                key={index}
                className="bg-blue-100 text-blue-800 p-3 rounded mb-2 w-full text-left hover:bg-blue-200 transition-colors"
                onClick={() => {
                  setIsSending(true); // Hide toggle button during interaction
                  setSelectedService(service);
                  addMessage(`Tell me more about ${service.name}`, "user");
                  sendAIResponse(`Our ${service.name} offerings include: ${service.description} ✨ Would you like to schedule a consultation? 📅`);
                  setWaitingForConsultationResponse(true);
                  setTimeout(() => setIsSending(false), 1000);
                }}
              >
                {service.name}
              </button>
            ))
          ) :(
            <div className="bg-gray-100 p-4 rounded my-4">
              <h4 className="text-lg font-medium">{selectedService.name}</h4>
              <p>{selectedService.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
                  onClick={() => {
                    setIsSending(true); // Hide toggle button during interaction
                    addMessage(`I want to schedule a consultation for ${selectedService.name}`, "user");
                    sendAIResponse("Awesome! 🎉 Please provide your email address, and we'll schedule a consultation for you.");
                    setWaitingForEmail(true);
                    setTimeout(() => setIsSending(false), 1000);
                  }}
                >
                  Schedule Consultation
                </button>
                <button
                  className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                  onClick={() => {
                    setIsSending(true); // Hide toggle button during interaction
                    setSelectedService(null); // Reset selected service
                    setStep("options");
                    sendAIResponse("Let me know if you'd like to explore other options. 🤔");
                    setTimeout(() => setIsSending(false), 1000);
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  // Quick reply buttons for common responses
  const renderQuickReplies = () => {
    if (waitingForFinalResponse) {
      return (
        <div className="flex flex-wrap gap-2 mb-2">
          <button
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-300"
            onClick={() => {
              setIsSending(true); // Hide toggle button during interaction
              addMessage("Yes, I have another question", "user");
              sendAIResponse("Great! 😊 What else would you like to know about?");
              setWaitingForFinalResponse(false);
              setTimeout(() => setIsSending(false), 1000);
            }}
          >
            Yes, another question
          </button>
          <button
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-300"
            onClick={() => {
              setIsSending(true); // Hide toggle button during interaction
              addMessage("No, that's all for now", "user");
              handleGoodbye();
            }}
          >
            No, that's all
          </button>
        </div>
      );
    }

    if (waitingForConsultationResponse) {
      return (
        <div className="flex flex-wrap gap-2 mb-2">
          <button
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-300"
            onClick={() => {
              setIsSending(true); // Hide toggle button during interaction
              addMessage("Yes, I'd like a consultation", "user");
              sendAIResponse("Awesome! 🎉 Please provide your email address, and I'll schedule a consultation for you.");
              setWaitingForConsultationResponse(false);
              setWaitingForEmail(true); // Now waiting for email
              setTimeout(() => setIsSending(false), 1000);
            }}
          >
            Yes, schedule a consultation
          </button>
          <button
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-300"
            onClick={() => {
              setIsSending(true); // Hide toggle button during interaction
              addMessage("No, not right now", "user");
              sendAIResponse("No problem! Let me know if you change your mind. 😊");
              setWaitingForConsultationResponse(false);
              setTimeout(() => setIsSending(false), 1000);
            }}
          >
            No, thanks
          </button>
        </div>
      );
    }

    return null;
  };

  // Get current avatar based on gender selection
  const getAvatar = () => {
    return avatarGender === "girl" ? avatarGirl : avatarBoy;
  };

  return (
    <div>
      {/* Chatbot Popup */}
      {isOpen && (
        <div className="fixed bottom-16   right-4 w-[95%] sm:w-[380px] md:w-[400px] lg:w-[420px] max-w-[500px] border rounded-lg shadow-lg bg-white z-50 flex flex-col" 
          style={{ 
            height: "90vh", 
            maxHeight: "600px",
            minHeight: "400px" 
          }}
        >
          {/* Chat header with DISHA branding */}
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center relative">
            <h2 className="text-base sm:text-xl font-semibold flex items-center">
              <span className="relative flex items-center">
                <span className="mr-1 sm:mr-2 text-sm sm:text-base">Ask DISHA</span>
                <span className="absolute -top-1 -right-1 h-2 w-2 sm:h-3 sm:w-3 bg-green-500 rounded-full border-2 border-white"></span>
              </span>
            </h2>
            <div className="flex items-center">
              <button 
                onClick={toggleAvatar} 
                className="text-white hover:text-blue-200 mr-1 sm:mr-2 focus:outline-none"
                title="Change Avatar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </button>
              {/* Always show close button, but disable it when sending */}
              <button 
                onClick={() => !isSending && setIsOpen(false)}
                className={`text-white hover:text-blue-200 focus:outline-none ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSending}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Avatar display */}
          <div className="bg-blue-100 p-2 sm:p-3 flex items-center">
            <img 
              src={getAvatar()} 
              alt="DISHA Avatar" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 border-2 border-blue-500"
            />
            <div>
              <div className="font-medium text-sm sm:text-base">DISHA</div>
              <div className="text-xs text-gray-600 hidden sm:block">Digital Interactive Service Helper Assistant</div>
            </div>
          </div>

          {/* Chat messages area */}
          <div className="flex-1 p-2 sm:p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 sm:mb-4 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "ai" && (
                  <img 
                    src={getAvatar()} 
                    alt="DISHA" 
                    className="h-6 w-6 sm:h-8 sm:w-8 rounded-full mr-1 sm:mr-2 self-end"
                  />
                )}
                <div
                  className={`p-2 sm:p-3 rounded-lg max-w-[80%] text-sm sm:text-base ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-white shadow border rounded-bl-none"
                  }`}
                >
                  {msg.text}
                  <div className={`text-xs mt-1 ${msg.sender === "user" ? "text-blue-100" : "text-gray-400"}`}>
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-2 sm:mb-4">
                <img 
                  src={getAvatar()} 
                  alt="DISHA" 
                  className="h-6 w-6 sm:h-8 sm:w-8 rounded-full mr-1 sm:mr-2 self-end"
                />
                <div className="bg-gray-200 text-gray-600 p-2 sm:p-3 rounded-lg animate-pulse flex">
                  <div className="h-1 w-1 sm:h-2 sm:w-2 bg-gray-400 rounded-full mr-1 animate-bounce"></div>
                  <div className="h-1 w-1 sm:h-2 sm:w-2 bg-gray-400 rounded-full mr-1 animate-bounce" style={{animationDelay: "0.2s"}}></div>
                  <div className="h-1 w-1 sm:h-2 sm:w-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: "0.4s"}}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />

            {/* Render current options */}
            {renderOptions()}
          </div>

          {/* Quick reply buttons */}
          <div className="px-2 sm:px-3">{renderQuickReplies()}</div>

          {/* Chat input area */}
          <form onSubmit={handleUserInput} className="p-2 sm:p-3 border-t flex">
            <input
              type="text"
              className="flex-1 p-1 sm:p-2 text-sm sm:text-base border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={waitingForEmail ? "Enter your email..." : "Type your message..."}
              disabled={isTyping}
            />
            <button
              type="submit"
              className={`p-1 sm:p-2 rounded-r transition-colors ${
                isTyping || !userInput.trim()
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
              disabled={isTyping || !userInput.trim()}
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Button to open/close the chatbot with avatar - always visible but disabled when sending */}
      <button
        onClick={() => !isSending && setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 p-2 sm:p-3 bg-blue-600 text-white rounded-full shadow-lg z-50 transition-all ${
          isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
        }`}
        style={{ width: "50px", height: "50px", minWidth: "50px", minHeight: "50px" }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        disabled={isSending}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={getAvatar()} 
              alt="DISHA" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            />
            {/* Green dot indicator on the chat button */}
            <span className="absolute -top-1 -right-1 h-2 w-2 sm:h-3 sm:w-3 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
        )}
      </button>
    </div>
  );
};

export default Chatbot;