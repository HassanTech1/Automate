import React from 'react';
import { Message as MessageType } from '../types';
import { ImageIcon } from 'lucide-react';

interface MessageProps {
  message: MessageType;
}

export function Message({ message }: MessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[80%] rounded-lg p-4 shadow-sm ${
        isUser ? 'bg-primary-500 text-white' : 'bg-white dark:bg-gray-700'
      }`}>
        <p className="whitespace-pre-wrap break-words">{message.content}</p>
        {message.images && message.images.length > 0 && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {message.images.map((image, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-600">
                <img
                  src={image}
                  alt={`Shared image ${index + 1}`}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
        <div className="mt-2 text-xs opacity-70 flex items-center gap-2">
          {new Date(message.timestamp).toLocaleTimeString()}
          {message.images && message.images.length > 0 && (
            <span className="flex items-center gap-1">
              <ImageIcon size={12} />
              {message.images.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}