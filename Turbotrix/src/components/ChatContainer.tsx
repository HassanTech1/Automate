import React, { useState, useEffect } from 'react';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { Message, Conversation } from '../types';
import { generateResponse } from '../services/geminiService';
import { generateImage } from '../services/stabilityService';

interface ChatContainerProps {
  conversation: Conversation;
  onUpdateConversation: (conversation: Conversation) => void;
}

export function ChatContainer({ conversation, onUpdateConversation }: ChatContainerProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string, files?: File[]) => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
      timestamp: Date.now(),
    };

    if (files && files.length > 0) {
      const imageUrls = await Promise.all(
        files.map(file => new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        }))
      );
      newMessage.images = imageUrls;
    }

    const updatedMessages = [...conversation.messages, newMessage];
    onUpdateConversation({ ...conversation, messages: updatedMessages });

    setIsLoading(true);
    try {
      const response = await generateResponse(updatedMessages);
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: response,
        timestamp: Date.now(),
      };
      onUpdateConversation({
        ...conversation,
        messages: [...updatedMessages, assistantMessage],
      });
    } catch (error) {
      console.error('Error generating response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateImage = async (prompt: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: `Generate image: ${prompt}`,
      timestamp: Date.now(),
    };

    const updatedMessages = [...conversation.messages, userMessage];
    onUpdateConversation({ ...conversation, messages: updatedMessages });

    setIsLoading(true);
    try {
      const imageUrl = await generateImage(prompt);
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: 'Here\'s your generated image:',
        timestamp: Date.now(),
        images: [imageUrl],
      };
      onUpdateConversation({
        ...conversation,
        messages: [...updatedMessages, assistantMessage],
      });
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <MessageList messages={conversation.messages} />
      <MessageInput
        onSendMessage={handleSendMessage}
        onGenerateImage={handleGenerateImage}
      />
    </div>
  );
}