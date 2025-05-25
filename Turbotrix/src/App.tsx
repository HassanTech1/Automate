import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { ChatContainer } from './components/ChatContainer';
import { Toolbar } from './components/Toolbar';
import { Conversation } from './types';

function App() {
  const [conversations, setConversations] = useState<Conversation[]>(() => {
    const saved = localStorage.getItem('conversations');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    localStorage.setItem('conversations', JSON.stringify(conversations));
  }, [conversations]);

  const handleNewChat = () => {
    const newConversation: Conversation = {
      id: crypto.randomUUID(),
      title: 'New Chat',
      messages: [],
      timestamp: Date.now(),
    };
    setConversations([newConversation, ...conversations]);
    setCurrentConversation(newConversation);
  };

  const handleUpdateConversation = (updatedConversation: Conversation) => {
    setConversations(conversations.map(conv =>
      conv.id === updatedConversation.id ? updatedConversation : conv
    ));
    setCurrentConversation(updatedConversation);
  };

  const handleDeleteConversation = (conversationId: string) => {
    setConversations(conversations.filter(conv => conv.id !== conversationId));
    if (currentConversation?.id === conversationId) {
      setCurrentConversation(conversations[0] || null);
    }
  };

  return (
    <ThemeProvider>
      <div className="h-screen flex flex-col dark:bg-gray-900 dark:text-white">
        <Toolbar onToggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)} />
        <div className="flex flex-1">
          {isSidebarVisible && (
            <Sidebar
              conversations={conversations}
              currentConversation={currentConversation}
              onNewChat={handleNewChat}
              onSelectConversation={setCurrentConversation}
              onDeleteConversation={handleDeleteConversation}
            />
          )}
          {currentConversation ? (
            <ChatContainer
              conversation={currentConversation}
              onUpdateConversation={handleUpdateConversation}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-500">Select a conversation or start a new chat</p>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;