import React, { useState, useRef, useEffect } from 'react';
import { Send, Image, Upload, X } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (content: string, images?: File[]) => void;
  onGenerateImage: (prompt: string) => void;
}

export function MessageInput({ onSendMessage, onGenerateImage }: MessageInputProps) {
  const [message, setMessage] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() || selectedFiles.length > 0) {
      if (isGeneratingImage) {
        onGenerateImage(message);
      } else {
        onSendMessage(message, selectedFiles);
      }
      setMessage('');
      setSelectedFiles([]);
      setIsGeneratingImage(false);
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(files => files.filter((_, i) => i !== index));
  };

  return (
    <div className="border-t dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto">
        {selectedFiles.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1"
              >
                <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex items-start gap-2">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setIsGeneratingImage(!isGeneratingImage)}
              className={`p-2 rounded-lg ${
                isGeneratingImage ? 'bg-primary-100 text-primary-600' : 'hover:bg-gray-100'
              } dark:hover:bg-gray-800`}
              title={isGeneratingImage ? "Switch to chat mode" : "Switch to image generation mode"}
            >
              <Image size={20} />
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              title="Upload images"
            >
              <Upload size={20} />
            </button>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            multiple
            className="hidden"
          />
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isGeneratingImage ? "Describe the image you want to generate..." : "Type your message..."}
            className="flex-1 p-2 rounded-lg border dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none min-h-[40px] max-h-[150px]"
            rows={1}
          />
          <button
            type="submit"
            className="p-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 disabled:opacity-50"
            disabled={!message.trim() && selectedFiles.length === 0}
            title="Send message"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}