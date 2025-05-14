(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "static/chunks/src_c391aff4._.js",
  {
    "[project]/src/hooks/use-persistent-state.ts [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        // src/hooks/use-persistent-state.ts
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var _s = __turbopack_context__.k.signature();
        ("use client");
        function usePersistentState(key, initialState) {
          _s();
          const [state, setState] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useState"
          ])(
            {
              "usePersistentState.useState": () => {
                if (("TURBOPACK compile-time falsy", 0)) {
                  ("TURBOPACK unreachable");
                }
                try {
                  const storedValue = window.localStorage.getItem(key);
                  return storedValue ? JSON.parse(storedValue) : initialState;
                } catch (error) {
                  // console.error(`Error reading localStorage key "${key}":`, error);
                  return initialState;
                }
              },
            }["usePersistentState.useState"]
          );
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useEffect"
          ])(
            {
              "usePersistentState.useEffect": () => {
                if (("TURBOPACK compile-time truthy", 1)) {
                  try {
                    window.localStorage.setItem(key, JSON.stringify(state));
                  } catch (error) {
                    // console.error(`Error writing localStorage key "${key}":`, error);
                  }
                }
              },
            }["usePersistentState.useEffect"],
            [key, state]
          );
          return [state, setState];
        }
        _s(usePersistentState, "PqwLYOZHfGpOuGWO2WCZAEfglzw=");
        const __TURBOPACK__default__export__ = usePersistentState;
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/ai/flows/generate-response-from-prompt.ts [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var {
          g: global,
          __dirname,
          k: __turbopack_refresh__,
          m: module,
        } = __turbopack_context__;
        {
          /* __next_internal_action_entry_do_not_use__ {"40fc1abf5495c18d8e77f819cec6f91c08f38fd9c4":"generateResponse"} */ __turbopack_context__.s(
            {
              generateResponse: () => generateResponse,
            }
          );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)"
            );
          var generateResponse = /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "createServerReference"
          ])(
            "40fc1abf5495c18d8e77f819cec6f91c08f38fd9c4",
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "callServer"
            ],
            void 0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "findSourceMapURL"
            ],
            "generateResponse"
          );
        }
      },
    "[project]/src/ai/flows/analyze-uploaded-file.ts [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var {
          g: global,
          __dirname,
          k: __turbopack_refresh__,
          m: module,
        } = __turbopack_context__;
        {
          /* __next_internal_action_entry_do_not_use__ {"4041c85f364853f3d636921c44da7355bcc2491762":"analyzeUploadedFile"} */ __turbopack_context__.s(
            {
              analyzeUploadedFile: () => analyzeUploadedFile,
            }
          );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)"
            );
          var analyzeUploadedFile = /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "createServerReference"
          ])(
            "4041c85f364853f3d636921c44da7355bcc2491762",
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "callServer"
            ],
            void 0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "findSourceMapURL"
            ],
            "analyzeUploadedFile"
          );
        }
      },
    "[project]/src/ai/flows/generate-image-stabilityai.ts [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var {
          g: global,
          __dirname,
          k: __turbopack_refresh__,
          m: module,
        } = __turbopack_context__;
        {
          /* __next_internal_action_entry_do_not_use__ {"406ff869c60aedc7f419b25b5f023db79873076f4f":"generateImageStabilityAI"} */ __turbopack_context__.s(
            {
              generateImageStabilityAI: () => generateImageStabilityAI,
            }
          );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)"
            );
          var generateImageStabilityAI = /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "createServerReference"
          ])(
            "406ff869c60aedc7f419b25b5f023db79873076f4f",
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "callServer"
            ],
            void 0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "findSourceMapURL"
            ],
            "generateImageStabilityAI"
          );
        }
      },
    "[project]/src/ai/flows/generate-video-veo.ts [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        /* __next_internal_action_entry_do_not_use__ {"40dd9a24f6bc5b716f70df587cc60550daa9a97824":"generateVideoVeo"} */ __turbopack_context__.s(
          {
            generateVideoVeo: () => generateVideoVeo,
          }
        );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)"
          );
        var generateVideoVeo = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "createServerReference"
        ])(
          "40dd9a24f6bc5b716f70df587cc60550daa9a97824",
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "callServer"
          ],
          void 0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "findSourceMapURL"
          ],
          "generateVideoVeo"
        );
      }
    },
    "[project]/src/hooks/use-chat-history.ts [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        // src/hooks/use-chat-history.ts
        __turbopack_context__.s({
          useChatHistory: () => useChatHistory,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$persistent$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/hooks/use-persistent-state.ts [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$response$2d$from$2d$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/ai/flows/generate-response-from-prompt.ts [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$analyze$2d$uploaded$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/ai/flows/analyze-uploaded-file.ts [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$image$2d$stabilityai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/ai/flows/generate-image-stabilityai.ts [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$video$2d$veo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/ai/flows/generate-video-veo.ts [app-client] (ecmascript)"
          ); // Import new flow
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/hooks/use-toast.ts [app-client] (ecmascript)"
          );
        var _s = __turbopack_context__.k.signature();
        ("use client");
        const CHAT_HISTORY_KEY = "turbtrix-ai-messages";
        function useChatHistory() {
          _s();
          const [messages, setMessages] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$persistent$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "default"
          ])(CHAT_HISTORY_KEY, []);
          const [isLoading, setIsLoading] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useState"
          ])(false);
          const { toast } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useToast"
          ])();
          const addMessage = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useCallback"
          ])(
            {
              "useChatHistory.useCallback[addMessage]": (message) => {
                setMessages(
                  {
                    "useChatHistory.useCallback[addMessage]": (prev) => [
                      ...prev,
                      {
                        ...message,
                        id: crypto.randomUUID(),
                        timestamp: Date.now(),
                      },
                    ],
                  }["useChatHistory.useCallback[addMessage]"]
                );
              },
            }["useChatHistory.useCallback[addMessage]"],
            [setMessages]
          );
          const clearChatHistory = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useCallback"
          ])(
            {
              "useChatHistory.useCallback[clearChatHistory]": () => {
                setMessages([]);
              },
            }["useChatHistory.useCallback[clearChatHistory]"],
            [setMessages]
          );
          const handleSendMessage = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useCallback"
          ])(
            {
              "useChatHistory.useCallback[handleSendMessage]": async (
                promptText
              ) => {
                if (!promptText.trim()) return;
                addMessage({
                  sender: "user",
                  type: "text",
                  content: promptText,
                });
                setIsLoading(true);
                try {
                  if (promptText.toLowerCase().startsWith("/image ")) {
                    const imagePrompt = promptText
                      .substring("/image ".length)
                      .trim();
                    if (!imagePrompt) {
                      addMessage({
                        sender: "system",
                        type: "error",
                        content:
                          "Please provide a prompt for the image generation after /image.",
                      });
                      setIsLoading(false);
                      return;
                    }
                    addMessage({
                      sender: "system",
                      type: "text",
                      content: `Generating image for: "${imagePrompt}" using Stability AI...`,
                    });
                    const imageResult = await (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$image$2d$stabilityai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "generateImageStabilityAI"
                    ])({
                      prompt: imagePrompt,
                    });
                    addMessage({
                      sender: "ai",
                      type: "ai_image",
                      content: `Here's the image for "${imagePrompt}":`,
                      imageUrl: imageResult.imageDataUri,
                    });
                    toast({
                      title: "Image Generated",
                      description:
                        "Image successfully generated using Stability AI.",
                    });
                  } else if (promptText.toLowerCase().startsWith("/video ")) {
                    const videoPrompt = promptText
                      .substring("/video ".length)
                      .trim();
                    if (!videoPrompt) {
                      addMessage({
                        sender: "system",
                        type: "error",
                        content:
                          "Please provide a prompt for the video generation after /video.",
                      });
                      setIsLoading(false);
                      return;
                    }
                    addMessage({
                      sender: "system",
                      type: "text",
                      content: `Generating video preview for: "${videoPrompt}" using Google Veo2...`,
                    });
                    const videoResult = await (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$video$2d$veo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "generateVideoVeo"
                    ])({
                      prompt: videoPrompt,
                    });
                    addMessage({
                      sender: "ai",
                      type: "text",
                      content: videoResult.response,
                    });
                    toast({
                      title: "Video Preview Generated",
                      description: "Google Veo2 video preview generated.",
                    });
                  } else {
                    const aiResponse = await (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$response$2d$from$2d$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "generateResponse"
                    ])({
                      prompt: promptText,
                    });
                    addMessage({
                      sender: "ai",
                      type: "text",
                      content: aiResponse.response,
                    });
                  }
                } catch (error) {
                  console.error("Error in chat interaction:", error);
                  const errorMessage =
                    error instanceof Error
                      ? error.message
                      : "Sorry, I encountered an error. Please try again.";
                  addMessage({
                    sender: "system",
                    type: "error",
                    content: errorMessage,
                  });
                  toast({
                    title: "AI Error",
                    description: "Could not complete the request.",
                    variant: "destructive",
                  });
                } finally {
                  setIsLoading(false);
                }
              },
            }["useChatHistory.useCallback[handleSendMessage]"],
            [addMessage, setIsLoading, toast]
          );
          const handleFileUpload = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useCallback"
          ])(
            {
              "useChatHistory.useCallback[handleFileUpload]": async (file) => {
                setIsLoading(true);
                const reader = new FileReader();
                reader.onloadend = {
                  "useChatHistory.useCallback[handleFileUpload]": async () => {
                    const fileDataUri = reader.result;
                    addMessage({
                      sender: "user",
                      type: "user_upload",
                      content: `Uploaded file: ${file.name}`,
                      originalFileName: file.name,
                      fileDataUri: file.type.startsWith("image/")
                        ? fileDataUri
                        : undefined,
                      fileType: file.type,
                    });
                    try {
                      const analysis = await (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$analyze$2d$uploaded$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "analyzeUploadedFile"
                      ])({
                        fileDataUri,
                        fileType: file.type,
                        fileName: file.name,
                      });
                      addMessage({
                        sender: "ai",
                        type: "file_analysis",
                        content: `Analysis for ${file.name}:\nSummary: ${analysis.summary}\nInsights: ${analysis.insights}`,
                        originalFileName: file.name,
                      });
                      toast({
                        title: "File Analyzed",
                        description: `${file.name} has been analyzed successfully.`,
                      });
                    } catch (error) {
                      console.error("Error analyzing file:", error);
                      addMessage({
                        sender: "system",
                        type: "error",
                        content: `Sorry, I encountered an error analyzing ${file.name}. Please try again.`,
                      });
                      toast({
                        title: "File Analysis Error",
                        description: `Could not analyze ${file.name}.`,
                        variant: "destructive",
                      });
                    } finally {
                      setIsLoading(false);
                    }
                  },
                }["useChatHistory.useCallback[handleFileUpload]"];
                reader.onerror = {
                  "useChatHistory.useCallback[handleFileUpload]": () => {
                    console.error("Error reading file");
                    addMessage({
                      sender: "system",
                      type: "error",
                      content: "Sorry, there was an error reading your file.",
                    });
                    toast({
                      title: "File Read Error",
                      description: "Could not read the uploaded file.",
                      variant: "destructive",
                    });
                    setIsLoading(false);
                  },
                }["useChatHistory.useCallback[handleFileUpload]"];
                reader.readAsDataURL(file);
              },
            }["useChatHistory.useCallback[handleFileUpload]"],
            [addMessage, setIsLoading, toast]
          );
          return {
            messages,
            isLoading,
            handleSendMessage,
            handleFileUpload,
            clearChatHistory,
            addMessage,
          };
        }
        _s(useChatHistory, "Co1WgYA0col/kLBnvLnJ3KItPUI=", false, function () {
          return [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$persistent$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "default"
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useToast"
            ],
          ];
        });
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          useIsMobile: () => useIsMobile,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var _s = __turbopack_context__.k.signature();
        const MOBILE_BREAKPOINT = 768;
        function useIsMobile() {
          _s();
          const [isMobile, setIsMobile] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useState"
          ])(undefined);
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useEffect"
          ])(
            {
              "useIsMobile.useEffect": () => {
                const mql = window.matchMedia(
                  `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
                );
                const onChange = {
                  "useIsMobile.useEffect.onChange": () => {
                    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                  },
                }["useIsMobile.useEffect.onChange"];
                mql.addEventListener("change", onChange);
                setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                return {
                  "useIsMobile.useEffect": () =>
                    mql.removeEventListener("change", onChange),
                }["useIsMobile.useEffect"];
              },
            }["useIsMobile.useEffect"],
            []
          );
          return !!isMobile;
        }
        _s(useIsMobile, "D6B2cPXNCaIbeOx+abFr1uxLRM0=");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/components/ui/button.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          Button: () => Button,
          buttonVariants: () => buttonVariants,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/lib/utils.ts [app-client] (ecmascript)"
          );
        const buttonVariants = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "cva"
        ])(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: {
              variant: "default",
              size: "default",
            },
          }
        );
        const Button = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c = (
            { className, variant, size, asChild = false, ...props },
            ref
          ) => {
            const Comp = asChild
              ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "Slot"
                ]
              : "button";
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              Comp,
              {
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  buttonVariants({
                    variant,
                    size,
                    className,
                  })
                ),
                ref: ref,
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/button.tsx",
                lineNumber: 46,
                columnNumber: 7,
              },
              this
            );
          })
        );
        _c1 = Button;
        Button.displayName = "Button";
        var _c, _c1;
        __turbopack_context__.k.register(_c, "Button$React.forwardRef");
        __turbopack_context__.k.register(_c1, "Button");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/components/ui/input.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          Input: () => Input,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/lib/utils.ts [app-client] (ecmascript)"
          );
        const Input = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c = ({ className, type, ...props }, ref) => {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "input",
              {
                type: type,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                  className
                ),
                ref: ref,
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/input.tsx",
                lineNumber: 8,
                columnNumber: 7,
              },
              this
            );
          })
        );
        _c1 = Input;
        Input.displayName = "Input";
        var _c, _c1;
        __turbopack_context__.k.register(_c, "Input$React.forwardRef");
        __turbopack_context__.k.register(_c1, "Input");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/components/ui/separator.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          Separator: () => Separator,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/lib/utils.ts [app-client] (ecmascript)"
          );
        ("use client");
        const Separator = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c = (
            {
              className,
              orientation = "horizontal",
              decorative = true,
              ...props
            },
            ref
          ) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Root"
              ],
              {
                ref: ref,
                decorative: decorative,
                orientation: orientation,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "shrink-0 bg-border",
                  orientation === "horizontal"
                    ? "h-[1px] w-full"
                    : "h-full w-[1px]",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/separator.tsx",
                lineNumber: 16,
                columnNumber: 5,
              },
              this
            ))
        );
        _c1 = Separator;
        Separator.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Root"
          ].displayName;
        var _c, _c1;
        __turbopack_context__.k.register(_c, "Separator$React.forwardRef");
        __turbopack_context__.k.register(_c1, "Separator");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          Sheet: () => Sheet,
          SheetClose: () => SheetClose,
          SheetContent: () => SheetContent,
          SheetDescription: () => SheetDescription,
          SheetFooter: () => SheetFooter,
          SheetHeader: () => SheetHeader,
          SheetOverlay: () => SheetOverlay,
          SheetPortal: () => SheetPortal,
          SheetTitle: () => SheetTitle,
          SheetTrigger: () => SheetTrigger,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/lib/utils.ts [app-client] (ecmascript)"
          );
        ("use client");
        const Sheet =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Root"
          ];
        const SheetTrigger =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Trigger"
          ];
        const SheetClose =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Close"
          ];
        const SheetPortal =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Portal"
          ];
        const SheetOverlay = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(({ className, ...props }, ref) =>
          /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "Overlay"
            ],
            {
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "cn"
              ])(
                "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                className
              ),
              ...props,
              ref: ref,
            },
            void 0,
            false,
            {
              fileName: "[project]/src/components/ui/sheet.tsx",
              lineNumber: 22,
              columnNumber: 3,
            },
            this
          )
        );
        _c = SheetOverlay;
        SheetOverlay.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Overlay"
          ].displayName;
        const sheetVariants = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "cva"
        ])(
          "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          {
            variants: {
              side: {
                top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom:
                  "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                right:
                  "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
              },
            },
            defaultVariants: {
              side: "right",
            },
          }
        );
        const SheetContent = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c1 = ({ side = "right", className, children, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              SheetPortal,
              {
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    SheetOverlay,
                    {},
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/components/ui/sheet.tsx",
                      lineNumber: 61,
                      columnNumber: 5,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "Content"
                    ],
                    {
                      ref: ref,
                      className: (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "cn"
                      ])(
                        sheetVariants({
                          side,
                        }),
                        className
                      ),
                      ...props,
                      children: [
                        children,
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "Close"
                          ],
                          {
                            className:
                              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__[
                                  "X"
                                ],
                                {
                                  className: "h-4 w-4",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/src/components/ui/sheet.tsx",
                                  lineNumber: 69,
                                  columnNumber: 9,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "span",
                                {
                                  className: "sr-only",
                                  children: "Close",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/src/components/ui/sheet.tsx",
                                  lineNumber: 70,
                                  columnNumber: 9,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: "[project]/src/components/ui/sheet.tsx",
                            lineNumber: 68,
                            columnNumber: 7,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/components/ui/sheet.tsx",
                      lineNumber: 62,
                      columnNumber: 5,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 60,
                columnNumber: 3,
              },
              this
            ))
        );
        _c2 = SheetContent;
        SheetContent.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Content"
          ].displayName;
        const SheetHeader = ({ className, ...props }) =>
          /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "cn"
              ])("flex flex-col space-y-2 text-center sm:text-left", className),
              ...props,
            },
            void 0,
            false,
            {
              fileName: "[project]/src/components/ui/sheet.tsx",
              lineNumber: 81,
              columnNumber: 3,
            },
            this
          );
        _c3 = SheetHeader;
        SheetHeader.displayName = "SheetHeader";
        const SheetFooter = ({ className, ...props }) =>
          /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "cn"
              ])(
                "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
                className
              ),
              ...props,
            },
            void 0,
            false,
            {
              fileName: "[project]/src/components/ui/sheet.tsx",
              lineNumber: 95,
              columnNumber: 3,
            },
            this
          );
        _c4 = SheetFooter;
        SheetFooter.displayName = "SheetFooter";
        const SheetTitle = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c5 = ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Title"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])("text-lg font-semibold text-foreground", className),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 109,
                columnNumber: 3,
              },
              this
            ))
        );
        _c6 = SheetTitle;
        SheetTitle.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Title"
          ].displayName;
        const SheetDescription = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c7 = ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Description"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])("text-sm text-muted-foreground", className),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 121,
                columnNumber: 3,
              },
              this
            ))
        );
        _c8 = SheetDescription;
        SheetDescription.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Description"
          ].displayName;
        var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
        __turbopack_context__.k.register(_c, "SheetOverlay");
        __turbopack_context__.k.register(_c1, "SheetContent$React.forwardRef");
        __turbopack_context__.k.register(_c2, "SheetContent");
        __turbopack_context__.k.register(_c3, "SheetHeader");
        __turbopack_context__.k.register(_c4, "SheetFooter");
        __turbopack_context__.k.register(_c5, "SheetTitle$React.forwardRef");
        __turbopack_context__.k.register(_c6, "SheetTitle");
        __turbopack_context__.k.register(
          _c7,
          "SheetDescription$React.forwardRef"
        );
        __turbopack_context__.k.register(_c8, "SheetDescription");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          Skeleton: () => Skeleton,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/lib/utils.ts [app-client] (ecmascript)"
          );
        function Skeleton({ className, ...props }) {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "cn"
              ])("animate-pulse rounded-md bg-muted", className),
              ...props,
            },
            void 0,
            false,
            {
              fileName: "[project]/src/components/ui/skeleton.tsx",
              lineNumber: 8,
              columnNumber: 5,
            },
            this
          );
        }
        _c = Skeleton;
        var _c;
        __turbopack_context__.k.register(_c, "Skeleton");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          Tooltip: () => Tooltip,
          TooltipContent: () => TooltipContent,
          TooltipProvider: () => TooltipProvider,
          TooltipTrigger: () => TooltipTrigger,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/lib/utils.ts [app-client] (ecmascript)"
          );
        ("use client");
        const TooltipProvider =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Provider"
          ];
        const Tooltip =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Root"
          ];
        const TooltipTrigger =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Trigger"
          ];
        const TooltipContent = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c = ({ className, sideOffset = 4, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Content"
              ],
              {
                ref: ref,
                sideOffset: sideOffset,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/tooltip.tsx",
                lineNumber: 18,
                columnNumber: 3,
              },
              this
            ))
        );
        _c1 = TooltipContent;
        TooltipContent.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Content"
          ].displayName;
        var _c, _c1;
        __turbopack_context__.k.register(_c, "TooltipContent$React.forwardRef");
        __turbopack_context__.k.register(_c1, "TooltipContent");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          Sidebar: () => Sidebar,
          SidebarContent: () => SidebarContent,
          SidebarFooter: () => SidebarFooter,
          SidebarGroup: () => SidebarGroup,
          SidebarGroupAction: () => SidebarGroupAction,
          SidebarGroupContent: () => SidebarGroupContent,
          SidebarGroupLabel: () => SidebarGroupLabel,
          SidebarHeader: () => SidebarHeader,
          SidebarInput: () => SidebarInput,
          SidebarInset: () => SidebarInset,
          SidebarMenu: () => SidebarMenu,
          SidebarMenuAction: () => SidebarMenuAction,
          SidebarMenuBadge: () => SidebarMenuBadge,
          SidebarMenuButton: () => SidebarMenuButton,
          SidebarMenuItem: () => SidebarMenuItem,
          SidebarMenuSkeleton: () => SidebarMenuSkeleton,
          SidebarMenuSub: () => SidebarMenuSub,
          SidebarMenuSubButton: () => SidebarMenuSubButton,
          SidebarMenuSubItem: () => SidebarMenuSubItem,
          SidebarProvider: () => SidebarProvider,
          SidebarRail: () => SidebarRail,
          SidebarSeparator: () => SidebarSeparator,
          SidebarTrigger: () => SidebarTrigger,
          useSidebar: () => useSidebar,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-client] (ecmascript) <export default as PanelLeft>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/lib/utils.ts [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/ui/button.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/ui/input.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/ui/separator.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)"
          );
        var _s = __turbopack_context__.k.signature(),
          _s1 = __turbopack_context__.k.signature(),
          _s2 = __turbopack_context__.k.signature(),
          _s3 = __turbopack_context__.k.signature(),
          _s4 = __turbopack_context__.k.signature(),
          _s5 = __turbopack_context__.k.signature(),
          _s6 = __turbopack_context__.k.signature();
        ("use client");
        const SIDEBAR_COOKIE_NAME = "sidebar_state";
        const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
        const SIDEBAR_WIDTH = "16rem";
        const SIDEBAR_WIDTH_MOBILE = "18rem";
        const SIDEBAR_WIDTH_ICON = "3rem";
        const SIDEBAR_KEYBOARD_SHORTCUT = "b";
        const SidebarContext = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "createContext"
        ])(null);
        function useSidebar() {
          _s();
          const context = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useContext"
          ])(SidebarContext);
          if (!context) {
            throw new Error(
              "useSidebar must be used within a SidebarProvider."
            );
          }
          return context;
        }
        _s(useSidebar, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
        const SidebarProvider = /*#__PURE__*/ _s1(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "forwardRef"
          ])(
            (_c = _s1(
              (
                {
                  defaultOpen = true,
                  open: openProp,
                  onOpenChange: setOpenProp,
                  className,
                  style,
                  children,
                  ...props
                },
                ref
              ) => {
                _s1();
                const isMobile = (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "useIsMobile"
                ])();
                const [openMobile, setOpenMobile] = (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "useState"
                ])(false);
                // This is the internal state of the sidebar.
                // We use openProp and setOpenProp for control from outside the component.
                const [_open, _setOpen] = (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "useState"
                ])(defaultOpen);
                const open = openProp ?? _open;
                const setOpen = (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "useCallback"
                ])(
                  {
                    "SidebarProvider.useCallback[setOpen]": (value) => {
                      const openState =
                        typeof value === "function" ? value(open) : value;
                      if (setOpenProp) {
                        setOpenProp(openState);
                      } else {
                        _setOpen(openState);
                      }
                      // This sets the cookie to keep the sidebar state.
                      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
                    },
                  }["SidebarProvider.useCallback[setOpen]"],
                  [setOpenProp, open]
                );
                // Helper to toggle the sidebar.
                const toggleSidebar = (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "useCallback"
                ])(
                  {
                    "SidebarProvider.useCallback[toggleSidebar]": () => {
                      return isMobile
                        ? setOpenMobile(
                            {
                              "SidebarProvider.useCallback[toggleSidebar]": (
                                open
                              ) => !open,
                            }["SidebarProvider.useCallback[toggleSidebar]"]
                          )
                        : setOpen(
                            {
                              "SidebarProvider.useCallback[toggleSidebar]": (
                                open
                              ) => !open,
                            }["SidebarProvider.useCallback[toggleSidebar]"]
                          );
                    },
                  }["SidebarProvider.useCallback[toggleSidebar]"],
                  [isMobile, setOpen, setOpenMobile]
                );
                // Adds a keyboard shortcut to toggle the sidebar.
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "useEffect"
                ])(
                  {
                    "SidebarProvider.useEffect": () => {
                      const handleKeyDown = {
                        "SidebarProvider.useEffect.handleKeyDown": (event) => {
                          if (
                            event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
                            (event.metaKey || event.ctrlKey)
                          ) {
                            event.preventDefault();
                            toggleSidebar();
                          }
                        },
                      }["SidebarProvider.useEffect.handleKeyDown"];
                      window.addEventListener("keydown", handleKeyDown);
                      return {
                        "SidebarProvider.useEffect": () =>
                          window.removeEventListener("keydown", handleKeyDown),
                      }["SidebarProvider.useEffect"];
                    },
                  }["SidebarProvider.useEffect"],
                  [toggleSidebar]
                );
                // We add a state so that we can do data-state="expanded" or "collapsed".
                // This makes it easier to style the sidebar with Tailwind classes.
                const state = open ? "expanded" : "collapsed";
                const contextValue = (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "useMemo"
                ])(
                  {
                    "SidebarProvider.useMemo[contextValue]": () => ({
                      state,
                      open,
                      setOpen,
                      isMobile,
                      openMobile,
                      setOpenMobile,
                      toggleSidebar,
                    }),
                  }["SidebarProvider.useMemo[contextValue]"],
                  [
                    state,
                    open,
                    setOpen,
                    isMobile,
                    openMobile,
                    setOpenMobile,
                    toggleSidebar,
                  ]
                );
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  SidebarContext.Provider,
                  {
                    value: contextValue,
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "TooltipProvider"
                      ],
                      {
                        delayDuration: 0,
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            style: {
                              "--sidebar-width": SIDEBAR_WIDTH,
                              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                              ...style,
                            },
                            className: (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "cn"
                            ])(
                              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
                              className
                            ),
                            ref: ref,
                            ...props,
                            children: children,
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/components/ui/sidebar.tsx",
                            lineNumber: 136,
                            columnNumber: 11,
                          },
                          this
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/components/ui/sidebar.tsx",
                        lineNumber: 135,
                        columnNumber: 9,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/components/ui/sidebar.tsx",
                    lineNumber: 134,
                    columnNumber: 7,
                  },
                  this
                );
              },
              "QSOkjq1AvKFJW5+zwiK52jPX7zI=",
              false,
              function () {
                return [
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "useIsMobile"
                  ],
                ];
              }
            ))
          ),
          "QSOkjq1AvKFJW5+zwiK52jPX7zI=",
          false,
          function () {
            return [
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "useIsMobile"
              ],
            ];
          }
        );
        _c1 = SidebarProvider;
        SidebarProvider.displayName = "SidebarProvider";
        const Sidebar = /*#__PURE__*/ _s2(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "forwardRef"
          ])(
            (_c2 = _s2(
              (
                {
                  side = "left",
                  variant = "sidebar",
                  collapsible = "offcanvas",
                  className,
                  children,
                  ...props
                },
                ref
              ) => {
                _s2();
                const { isMobile, state, openMobile, setOpenMobile } =
                  useSidebar();
                if (collapsible === "none") {
                  return /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "cn"
                      ])(
                        "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
                        className
                      ),
                      ref: ref,
                      ...props,
                      children: children,
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/components/ui/sidebar.tsx",
                      lineNumber: 183,
                      columnNumber: 9,
                    },
                    this
                  );
                }
                if (isMobile) {
                  return /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "Sheet"
                    ],
                    {
                      open: openMobile,
                      onOpenChange: setOpenMobile,
                      ...props,
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "SheetContent"
                        ],
                        {
                          "data-sidebar": "sidebar",
                          "data-mobile": "true",
                          className:
                            "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                          style: {
                            "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
                          },
                          side: side,
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "flex h-full w-full flex-col",
                              children: children,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/components/ui/sidebar.tsx",
                              lineNumber: 210,
                              columnNumber: 13,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/components/ui/sidebar.tsx",
                          lineNumber: 199,
                          columnNumber: 11,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/components/ui/sidebar.tsx",
                      lineNumber: 198,
                      columnNumber: 9,
                    },
                    this
                  );
                }
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    ref: ref,
                    className:
                      "group peer hidden md:block text-sidebar-foreground",
                    "data-state": state,
                    "data-collapsible":
                      state === "collapsed" ? collapsible : "",
                    "data-variant": variant,
                    "data-side": side,
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "cn"
                          ])(
                            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
                            "group-data-[collapsible=offcanvas]:w-0",
                            "group-data-[side=right]:rotate-180",
                            variant === "floating" || variant === "inset"
                              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
                              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/components/ui/sidebar.tsx",
                          lineNumber: 226,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "cn"
                          ])(
                            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
                            side === "left"
                              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", // Adjust the padding for floating and inset variants.
                            variant === "floating" || variant === "inset"
                              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
                              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
                            className
                          ),
                          ...props,
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              "data-sidebar": "sidebar",
                              className:
                                "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                              children: children,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/components/ui/sidebar.tsx",
                              lineNumber: 250,
                              columnNumber: 11,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/components/ui/sidebar.tsx",
                          lineNumber: 236,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/src/components/ui/sidebar.tsx",
                    lineNumber: 217,
                    columnNumber: 7,
                  },
                  this
                );
              },
              "hAL3+uRFwO9tnbDK50BUE5wZ71s=",
              false,
              function () {
                return [useSidebar];
              }
            ))
          ),
          "hAL3+uRFwO9tnbDK50BUE5wZ71s=",
          false,
          function () {
            return [useSidebar];
          }
        );
        _c3 = Sidebar;
        Sidebar.displayName = "Sidebar";
        const SidebarTrigger = /*#__PURE__*/ _s3(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "forwardRef"
          ])(
            (_c4 = _s3(
              ({ className, onClick, ...props }, ref) => {
                _s3();
                const { toggleSidebar } = useSidebar();
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "Button"
                  ],
                  {
                    ref: ref,
                    "data-sidebar": "trigger",
                    variant: "ghost",
                    size: "icon",
                    className: (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "cn"
                    ])("h-7 w-7", className),
                    onClick: (event) => {
                      onClick?.(event);
                      toggleSidebar();
                    },
                    ...props,
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__[
                          "PanelLeft"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/components/ui/sidebar.tsx",
                          lineNumber: 282,
                          columnNumber: 7,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "span",
                        {
                          className: "sr-only",
                          children: "Toggle Sidebar",
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/components/ui/sidebar.tsx",
                          lineNumber: 283,
                          columnNumber: 7,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/src/components/ui/sidebar.tsx",
                    lineNumber: 270,
                    columnNumber: 5,
                  },
                  this
                );
              },
              "dRnjPhQbCChcVGr4xvQkpNxnqyg=",
              false,
              function () {
                return [useSidebar];
              }
            ))
          ),
          "dRnjPhQbCChcVGr4xvQkpNxnqyg=",
          false,
          function () {
            return [useSidebar];
          }
        );
        _c5 = SidebarTrigger;
        SidebarTrigger.displayName = "SidebarTrigger";
        const SidebarRail = /*#__PURE__*/ _s4(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "forwardRef"
          ])(
            (_c6 = _s4(
              ({ className, ...props }, ref) => {
                _s4();
                const { toggleSidebar } = useSidebar();
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "button",
                  {
                    ref: ref,
                    "data-sidebar": "rail",
                    "aria-label": "Toggle Sidebar",
                    tabIndex: -1,
                    onClick: toggleSidebar,
                    title: "Toggle Sidebar",
                    className: (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "cn"
                    ])(
                      "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
                      "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
                      "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
                      "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
                      "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
                      "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
                      className
                    ),
                    ...props,
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/components/ui/sidebar.tsx",
                    lineNumber: 296,
                    columnNumber: 5,
                  },
                  this
                );
              },
              "dRnjPhQbCChcVGr4xvQkpNxnqyg=",
              false,
              function () {
                return [useSidebar];
              }
            ))
          ),
          "dRnjPhQbCChcVGr4xvQkpNxnqyg=",
          false,
          function () {
            return [useSidebar];
          }
        );
        _c7 = SidebarRail;
        SidebarRail.displayName = "SidebarRail";
        const SidebarInset = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c8 = ({ className, ...props }, ref) => {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "main",
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "relative flex min-h-svh flex-1 flex-col bg-background",
                  "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 323,
                columnNumber: 5,
              },
              this
            );
          })
        );
        _c9 = SidebarInset;
        SidebarInset.displayName = "SidebarInset";
        const SidebarInput = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c10 = ({ className, ...props }, ref) => {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Input"
              ],
              {
                ref: ref,
                "data-sidebar": "input",
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 341,
                columnNumber: 5,
              },
              this
            );
          })
        );
        _c11 = SidebarInput;
        SidebarInput.displayName = "SidebarInput";
        const SidebarHeader = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c12 = ({ className, ...props }, ref) => {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                ref: ref,
                "data-sidebar": "header",
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])("flex flex-col gap-2 p-2", className),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 359,
                columnNumber: 5,
              },
              this
            );
          })
        );
        _c13 = SidebarHeader;
        SidebarHeader.displayName = "SidebarHeader";
        const SidebarFooter = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c14 = ({ className, ...props }, ref) => {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                ref: ref,
                "data-sidebar": "footer",
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])("flex flex-col gap-2 p-2", className),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 374,
                columnNumber: 5,
              },
              this
            );
          })
        );
        _c15 = SidebarFooter;
        SidebarFooter.displayName = "SidebarFooter";
        const SidebarSeparator = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c16 = ({ className, ...props }, ref) => {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Separator"
              ],
              {
                ref: ref,
                "data-sidebar": "separator",
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])("mx-2 w-auto bg-sidebar-border", className),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 389,
                columnNumber: 5,
              },
              this
            );
          })
        );
        _c17 = SidebarSeparator;
        SidebarSeparator.displayName = "SidebarSeparator";
        const SidebarContent = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c18 = ({ className, asChild = false, ...props }, ref) => {
            const Comp = asChild
              ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "Slot"
                ]
              : "div";
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              Comp,
              {
                ref: ref,
                "data-sidebar": "content",
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 405,
                columnNumber: 5,
              },
              this
            );
          })
        );
        _c19 = SidebarContent;
        SidebarContent.displayName = "SidebarContent";
        const SidebarGroup = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c20 = ({ className, ...props }, ref) => {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                ref: ref,
                "data-sidebar": "group",
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])("relative flex w-full min-w-0 flex-col p-2", className),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 423,
                columnNumber: 5,
              },
              this
            );
          })
        );
        _c21 = SidebarGroup;
        SidebarGroup.displayName = "SidebarGroup";
        const SidebarGroupLabel = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c22 = ({ className, asChild = false, ...props }, ref) => {
            const Comp = asChild
              ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "Slot"
                ]
              : "div";
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              Comp,
              {
                ref: ref,
                "data-sidebar": "group-label",
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
                  "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 440,
                columnNumber: 5,
              },
              this
            );
          })
        );
        _c23 = SidebarGroupLabel;
        SidebarGroupLabel.displayName = "SidebarGroupLabel";
        const SidebarGroupAction = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c24 = ({ className, asChild = false, ...props }, ref) => {
            const Comp = asChild
              ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "Slot"
                ]
              : "button";
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              Comp,
              {
                ref: ref,
                "data-sidebar": "group-action",
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
                  "after:absolute after:-inset-2 after:md:hidden",
                  "group-data-[collapsible=icon]:hidden",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 461,
                columnNumber: 5,
              },
              this
            );
          })
        );
        _c25 = SidebarGroupAction;
        SidebarGroupAction.displayName = "SidebarGroupAction";
        const SidebarGroupContent = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c26 = ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                ref: ref,
                "data-sidebar": "group-content",
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])("w-full text-sm", className),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 481,
                columnNumber: 3,
              },
              this
            ))
        );
        _c27 = SidebarGroupContent;
        SidebarGroupContent.displayName = "SidebarGroupContent";
        const SidebarMenu = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c28 = ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "ul",
              {
                ref: ref,
                "data-sidebar": "menu",
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])("flex w-full min-w-0 flex-col gap-1", className),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 494,
                columnNumber: 3,
              },
              this
            ))
        );
        _c29 = SidebarMenu;
        SidebarMenu.displayName = "SidebarMenu";
        const SidebarMenuItem = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c30 = ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "li",
              {
                ref: ref,
                "data-sidebar": "menu-item",
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])("group/menu-item relative", className),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 507,
                columnNumber: 3,
              },
              this
            ))
        );
        _c31 = SidebarMenuItem;
        SidebarMenuItem.displayName = "SidebarMenuItem";
        const sidebarMenuButtonVariants = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "cva"
        ])(
          "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          {
            variants: {
              variant: {
                default:
                  "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                outline:
                  "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
              },
              size: {
                default: "h-8 text-sm",
                sm: "h-7 text-xs",
                lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
              },
            },
            defaultVariants: {
              variant: "default",
              size: "default",
            },
          }
        );
        const SidebarMenuButton = /*#__PURE__*/ _s5(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "forwardRef"
          ])(
            (_c32 = _s5(
              (
                {
                  asChild = false,
                  isActive = false,
                  variant = "default",
                  size = "default",
                  tooltip,
                  className,
                  ...props
                },
                ref
              ) => {
                _s5();
                const Comp = asChild
                  ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "Slot"
                    ]
                  : "button";
                const { isMobile, state } = useSidebar();
                const button = /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  Comp,
                  {
                    ref: ref,
                    "data-sidebar": "menu-button",
                    "data-size": size,
                    "data-active": isActive,
                    className: (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "cn"
                    ])(
                      sidebarMenuButtonVariants({
                        variant,
                        size,
                      }),
                      className
                    ),
                    ...props,
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/components/ui/sidebar.tsx",
                    lineNumber: 562,
                    columnNumber: 7,
                  },
                  this
                );
                if (!tooltip) {
                  return button;
                }
                if (typeof tooltip === "string") {
                  tooltip = {
                    children: tooltip,
                  };
                }
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "Tooltip"
                  ],
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "TooltipTrigger"
                        ],
                        {
                          asChild: true,
                          children: button,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/components/ui/sidebar.tsx",
                          lineNumber: 584,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "TooltipContent"
                        ],
                        {
                          side: "right",
                          align: "center",
                          hidden: state !== "collapsed" || isMobile,
                          ...tooltip,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/components/ui/sidebar.tsx",
                          lineNumber: 585,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/src/components/ui/sidebar.tsx",
                    lineNumber: 583,
                    columnNumber: 7,
                  },
                  this
                );
              },
              "DSCdbs8JtpmKVxCYgM7sPAZNgB0=",
              false,
              function () {
                return [useSidebar];
              }
            ))
          ),
          "DSCdbs8JtpmKVxCYgM7sPAZNgB0=",
          false,
          function () {
            return [useSidebar];
          }
        );
        _c33 = SidebarMenuButton;
        SidebarMenuButton.displayName = "SidebarMenuButton";
        const SidebarMenuAction = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c34 = (
            { className, asChild = false, showOnHover = false, ...props },
            ref
          ) => {
            const Comp = asChild
              ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "Slot"
                ]
              : "button";
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              Comp,
              {
                ref: ref,
                "data-sidebar": "menu-action",
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
                  "after:absolute after:-inset-2 after:md:hidden",
                  "peer-data-[size=sm]/menu-button:top-1",
                  "peer-data-[size=default]/menu-button:top-1.5",
                  "peer-data-[size=lg]/menu-button:top-2.5",
                  "group-data-[collapsible=icon]:hidden",
                  showOnHover &&
                    "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 607,
                columnNumber: 5,
              },
              this
            );
          })
        );
        _c35 = SidebarMenuAction;
        SidebarMenuAction.displayName = "SidebarMenuAction";
        const SidebarMenuBadge = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c36 = ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                ref: ref,
                "data-sidebar": "menu-badge",
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
                  "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
                  "peer-data-[size=sm]/menu-button:top-1",
                  "peer-data-[size=default]/menu-button:top-1.5",
                  "peer-data-[size=lg]/menu-button:top-2.5",
                  "group-data-[collapsible=icon]:hidden",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 632,
                columnNumber: 3,
              },
              this
            ))
        );
        _c37 = SidebarMenuBadge;
        SidebarMenuBadge.displayName = "SidebarMenuBadge";
        const SidebarMenuSkeleton = /*#__PURE__*/ _s6(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "forwardRef"
          ])(
            (_c38 = _s6(({ className, showIcon = false, ...props }, ref) => {
              _s6();
              // Random width between 50 to 90%.
              const width = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "useMemo"
              ])(
                {
                  "SidebarMenuSkeleton.useMemo[width]": () => {
                    return `${Math.floor(Math.random() * 40) + 50}%`;
                  },
                }["SidebarMenuSkeleton.useMemo[width]"],
                []
              );
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  ref: ref,
                  "data-sidebar": "menu-skeleton",
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "cn"
                  ])("rounded-md h-8 flex gap-2 px-2 items-center", className),
                  ...props,
                  children: [
                    showIcon &&
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "Skeleton"
                        ],
                        {
                          className: "size-4 rounded-md",
                          "data-sidebar": "menu-skeleton-icon",
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/components/ui/sidebar.tsx",
                          lineNumber: 668,
                          columnNumber: 9,
                        },
                        this
                      ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "Skeleton"
                      ],
                      {
                        className: "h-4 flex-1 max-w-[--skeleton-width]",
                        "data-sidebar": "menu-skeleton-text",
                        style: {
                          "--skeleton-width": width,
                        },
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/components/ui/sidebar.tsx",
                        lineNumber: 673,
                        columnNumber: 7,
                      },
                      this
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "[project]/src/components/ui/sidebar.tsx",
                  lineNumber: 661,
                  columnNumber: 5,
                },
                this
              );
            }, "nKFjX4dxbYo91VAj5VdWQ1XUe3I="))
          ),
          "nKFjX4dxbYo91VAj5VdWQ1XUe3I="
        );
        _c39 = SidebarMenuSkeleton;
        SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
        const SidebarMenuSub = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c40 = ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "ul",
              {
                ref: ref,
                "data-sidebar": "menu-sub",
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
                  "group-data-[collapsible=icon]:hidden",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 691,
                columnNumber: 3,
              },
              this
            ))
        );
        _c41 = SidebarMenuSub;
        SidebarMenuSub.displayName = "SidebarMenuSub";
        const SidebarMenuSubItem = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c42 = ({ ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "li",
              {
                ref: ref,
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 707,
                columnNumber: 26,
              },
              this
            ))
        );
        _c43 = SidebarMenuSubItem;
        SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
        const SidebarMenuSubButton = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c44 = (
            { asChild = false, size = "md", isActive, className, ...props },
            ref
          ) => {
            const Comp = asChild
              ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "Slot"
                ]
              : "a";
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              Comp,
              {
                ref: ref,
                "data-sidebar": "menu-sub-button",
                "data-size": size,
                "data-active": isActive,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
                  "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
                  size === "sm" && "text-xs",
                  size === "md" && "text-sm",
                  "group-data-[collapsible=icon]:hidden",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 721,
                columnNumber: 5,
              },
              this
            );
          })
        );
        _c45 = SidebarMenuSubButton;
        SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
        var _c,
          _c1,
          _c2,
          _c3,
          _c4,
          _c5,
          _c6,
          _c7,
          _c8,
          _c9,
          _c10,
          _c11,
          _c12,
          _c13,
          _c14,
          _c15,
          _c16,
          _c17,
          _c18,
          _c19,
          _c20,
          _c21,
          _c22,
          _c23,
          _c24,
          _c25,
          _c26,
          _c27,
          _c28,
          _c29,
          _c30,
          _c31,
          _c32,
          _c33,
          _c34,
          _c35,
          _c36,
          _c37,
          _c38,
          _c39,
          _c40,
          _c41,
          _c42,
          _c43,
          _c44,
          _c45;
        __turbopack_context__.k.register(
          _c,
          "SidebarProvider$React.forwardRef"
        );
        __turbopack_context__.k.register(_c1, "SidebarProvider");
        __turbopack_context__.k.register(_c2, "Sidebar$React.forwardRef");
        __turbopack_context__.k.register(_c3, "Sidebar");
        __turbopack_context__.k.register(
          _c4,
          "SidebarTrigger$React.forwardRef"
        );
        __turbopack_context__.k.register(_c5, "SidebarTrigger");
        __turbopack_context__.k.register(_c6, "SidebarRail$React.forwardRef");
        __turbopack_context__.k.register(_c7, "SidebarRail");
        __turbopack_context__.k.register(_c8, "SidebarInset$React.forwardRef");
        __turbopack_context__.k.register(_c9, "SidebarInset");
        __turbopack_context__.k.register(_c10, "SidebarInput$React.forwardRef");
        __turbopack_context__.k.register(_c11, "SidebarInput");
        __turbopack_context__.k.register(
          _c12,
          "SidebarHeader$React.forwardRef"
        );
        __turbopack_context__.k.register(_c13, "SidebarHeader");
        __turbopack_context__.k.register(
          _c14,
          "SidebarFooter$React.forwardRef"
        );
        __turbopack_context__.k.register(_c15, "SidebarFooter");
        __turbopack_context__.k.register(
          _c16,
          "SidebarSeparator$React.forwardRef"
        );
        __turbopack_context__.k.register(_c17, "SidebarSeparator");
        __turbopack_context__.k.register(
          _c18,
          "SidebarContent$React.forwardRef"
        );
        __turbopack_context__.k.register(_c19, "SidebarContent");
        __turbopack_context__.k.register(_c20, "SidebarGroup$React.forwardRef");
        __turbopack_context__.k.register(_c21, "SidebarGroup");
        __turbopack_context__.k.register(
          _c22,
          "SidebarGroupLabel$React.forwardRef"
        );
        __turbopack_context__.k.register(_c23, "SidebarGroupLabel");
        __turbopack_context__.k.register(
          _c24,
          "SidebarGroupAction$React.forwardRef"
        );
        __turbopack_context__.k.register(_c25, "SidebarGroupAction");
        __turbopack_context__.k.register(
          _c26,
          "SidebarGroupContent$React.forwardRef"
        );
        __turbopack_context__.k.register(_c27, "SidebarGroupContent");
        __turbopack_context__.k.register(_c28, "SidebarMenu$React.forwardRef");
        __turbopack_context__.k.register(_c29, "SidebarMenu");
        __turbopack_context__.k.register(
          _c30,
          "SidebarMenuItem$React.forwardRef"
        );
        __turbopack_context__.k.register(_c31, "SidebarMenuItem");
        __turbopack_context__.k.register(
          _c32,
          "SidebarMenuButton$React.forwardRef"
        );
        __turbopack_context__.k.register(_c33, "SidebarMenuButton");
        __turbopack_context__.k.register(
          _c34,
          "SidebarMenuAction$React.forwardRef"
        );
        __turbopack_context__.k.register(_c35, "SidebarMenuAction");
        __turbopack_context__.k.register(
          _c36,
          "SidebarMenuBadge$React.forwardRef"
        );
        __turbopack_context__.k.register(_c37, "SidebarMenuBadge");
        __turbopack_context__.k.register(
          _c38,
          "SidebarMenuSkeleton$React.forwardRef"
        );
        __turbopack_context__.k.register(_c39, "SidebarMenuSkeleton");
        __turbopack_context__.k.register(
          _c40,
          "SidebarMenuSub$React.forwardRef"
        );
        __turbopack_context__.k.register(_c41, "SidebarMenuSub");
        __turbopack_context__.k.register(
          _c42,
          "SidebarMenuSubItem$React.forwardRef"
        );
        __turbopack_context__.k.register(_c43, "SidebarMenuSubItem");
        __turbopack_context__.k.register(
          _c44,
          "SidebarMenuSubButton$React.forwardRef"
        );
        __turbopack_context__.k.register(_c45, "SidebarMenuSubButton");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/components/theme-toggle-button.tsx [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var {
          g: global,
          __dirname,
          k: __turbopack_refresh__,
          m: module,
        } = __turbopack_context__;
        {
          // src/components/theme-toggle-button.tsx
          __turbopack_context__.s({
            ThemeToggleButton: () => ThemeToggleButton,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/button.tsx [app-client] (ecmascript)"
            );
          var _s = __turbopack_context__.k.signature();
          ("use client");
          function ThemeToggleButton() {
            _s();
            const { theme, setTheme } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useTheme"
            ])();
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Button"
              ],
              {
                variant: "ghost",
                size: "icon",
                onClick: () => setTheme(theme === "light" ? "dark" : "light"),
                "aria-label": "Toggle theme",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__[
                      "Sun"
                    ],
                    {
                      className:
                        "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/theme-toggle-button.tsx",
                      lineNumber: 20,
                      columnNumber: 7,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__[
                      "Moon"
                    ],
                    {
                      className:
                        "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/theme-toggle-button.tsx",
                      lineNumber: 21,
                      columnNumber: 7,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "span",
                    {
                      className: "sr-only",
                      children: "Toggle theme",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/theme-toggle-button.tsx",
                      lineNumber: 22,
                      columnNumber: 7,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/theme-toggle-button.tsx",
                lineNumber: 14,
                columnNumber: 5,
              },
              this
            );
          }
          _s(
            ThemeToggleButton,
            "5ABGV54qnXKp6rHn7MS/8MjwRhQ=",
            false,
            function () {
              return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "useTheme"
                ],
              ];
            }
          );
          _c = ThemeToggleButton;
          var _c;
          __turbopack_context__.k.register(_c, "ThemeToggleButton");
          if (
            typeof globalThis.$RefreshHelpers$ === "object" &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    "[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          DropdownMenu: () => DropdownMenu,
          DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
          DropdownMenuContent: () => DropdownMenuContent,
          DropdownMenuGroup: () => DropdownMenuGroup,
          DropdownMenuItem: () => DropdownMenuItem,
          DropdownMenuLabel: () => DropdownMenuLabel,
          DropdownMenuPortal: () => DropdownMenuPortal,
          DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
          DropdownMenuRadioItem: () => DropdownMenuRadioItem,
          DropdownMenuSeparator: () => DropdownMenuSeparator,
          DropdownMenuShortcut: () => DropdownMenuShortcut,
          DropdownMenuSub: () => DropdownMenuSub,
          DropdownMenuSubContent: () => DropdownMenuSubContent,
          DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
          DropdownMenuTrigger: () => DropdownMenuTrigger,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/lib/utils.ts [app-client] (ecmascript)"
          );
        ("use client");
        const DropdownMenu =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Root"
          ];
        const DropdownMenuTrigger =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Trigger"
          ];
        const DropdownMenuGroup =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Group"
          ];
        const DropdownMenuPortal =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Portal"
          ];
        const DropdownMenuSub =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Sub"
          ];
        const DropdownMenuRadioGroup =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "RadioGroup"
          ];
        const DropdownMenuSubTrigger = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c = ({ className, inset, children, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "SubTrigger"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
                  inset && "pl-8",
                  className
                ),
                ...props,
                children: [
                  children,
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__[
                      "ChevronRight"
                    ],
                    {
                      className: "ml-auto",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                      lineNumber: 37,
                      columnNumber: 5,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 27,
                columnNumber: 3,
              },
              this
            ))
        );
        _c1 = DropdownMenuSubTrigger;
        DropdownMenuSubTrigger.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "SubTrigger"
          ].displayName;
        const DropdownMenuSubContent = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c2 = ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "SubContent"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 47,
                columnNumber: 3,
              },
              this
            ))
        );
        _c3 = DropdownMenuSubContent;
        DropdownMenuSubContent.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "SubContent"
          ].displayName;
        const DropdownMenuContent = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c4 = ({ className, sideOffset = 4, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Portal"
              ],
              {
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "Content"
                  ],
                  {
                    ref: ref,
                    sideOffset: sideOffset,
                    className: (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "cn"
                    ])(
                      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                      className
                    ),
                    ...props,
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 64,
                    columnNumber: 5,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 63,
                columnNumber: 3,
              },
              this
            ))
        );
        _c5 = DropdownMenuContent;
        DropdownMenuContent.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Content"
          ].displayName;
        const DropdownMenuItem = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c6 = ({ className, inset, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Item"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
                  inset && "pl-8",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 83,
                columnNumber: 3,
              },
              this
            ))
        );
        _c7 = DropdownMenuItem;
        DropdownMenuItem.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Item"
          ].displayName;
        const DropdownMenuCheckboxItem = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c8 = ({ className, children, checked, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "CheckboxItem"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                  className
                ),
                checked: checked,
                ...props,
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "span",
                    {
                      className:
                        "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "ItemIndicator"
                        ],
                        {
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__[
                              "Check"
                            ],
                            {
                              className: "h-4 w-4",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/components/ui/dropdown-menu.tsx",
                              lineNumber: 110,
                              columnNumber: 9,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/src/components/ui/dropdown-menu.tsx",
                          lineNumber: 109,
                          columnNumber: 7,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                      lineNumber: 108,
                      columnNumber: 5,
                    },
                    this
                  ),
                  children,
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 99,
                columnNumber: 3,
              },
              this
            ))
        );
        _c9 = DropdownMenuCheckboxItem;
        DropdownMenuCheckboxItem.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "CheckboxItem"
          ].displayName;
        const DropdownMenuRadioItem = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c10 = ({ className, children, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "RadioItem"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                  className
                ),
                ...props,
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "span",
                    {
                      className:
                        "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "ItemIndicator"
                        ],
                        {
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__[
                              "Circle"
                            ],
                            {
                              className: "h-2 w-2 fill-current",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/components/ui/dropdown-menu.tsx",
                              lineNumber: 133,
                              columnNumber: 9,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/src/components/ui/dropdown-menu.tsx",
                          lineNumber: 132,
                          columnNumber: 7,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                      lineNumber: 131,
                      columnNumber: 5,
                    },
                    this
                  ),
                  children,
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 123,
                columnNumber: 3,
              },
              this
            ))
        );
        _c11 = DropdownMenuRadioItem;
        DropdownMenuRadioItem.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "RadioItem"
          ].displayName;
        const DropdownMenuLabel = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c12 = ({ className, inset, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Label"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "px-2 py-1.5 text-sm font-semibold",
                  inset && "pl-8",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 147,
                columnNumber: 3,
              },
              this
            ))
        );
        _c13 = DropdownMenuLabel;
        DropdownMenuLabel.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Label"
          ].displayName;
        const DropdownMenuSeparator = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c14 = ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Separator"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])("-mx-1 my-1 h-px bg-muted", className),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 163,
                columnNumber: 3,
              },
              this
            ))
        );
        _c15 = DropdownMenuSeparator;
        DropdownMenuSeparator.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Separator"
          ].displayName;
        const DropdownMenuShortcut = ({ className, ...props }) => {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "span",
            {
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "cn"
              ])("ml-auto text-xs tracking-widest opacity-60", className),
              ...props,
            },
            void 0,
            false,
            {
              fileName: "[project]/src/components/ui/dropdown-menu.tsx",
              lineNumber: 176,
              columnNumber: 5,
            },
            this
          );
        };
        _c16 = DropdownMenuShortcut;
        DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
        var _c,
          _c1,
          _c2,
          _c3,
          _c4,
          _c5,
          _c6,
          _c7,
          _c8,
          _c9,
          _c10,
          _c11,
          _c12,
          _c13,
          _c14,
          _c15,
          _c16;
        __turbopack_context__.k.register(
          _c,
          "DropdownMenuSubTrigger$React.forwardRef"
        );
        __turbopack_context__.k.register(_c1, "DropdownMenuSubTrigger");
        __turbopack_context__.k.register(
          _c2,
          "DropdownMenuSubContent$React.forwardRef"
        );
        __turbopack_context__.k.register(_c3, "DropdownMenuSubContent");
        __turbopack_context__.k.register(
          _c4,
          "DropdownMenuContent$React.forwardRef"
        );
        __turbopack_context__.k.register(_c5, "DropdownMenuContent");
        __turbopack_context__.k.register(
          _c6,
          "DropdownMenuItem$React.forwardRef"
        );
        __turbopack_context__.k.register(_c7, "DropdownMenuItem");
        __turbopack_context__.k.register(
          _c8,
          "DropdownMenuCheckboxItem$React.forwardRef"
        );
        __turbopack_context__.k.register(_c9, "DropdownMenuCheckboxItem");
        __turbopack_context__.k.register(
          _c10,
          "DropdownMenuRadioItem$React.forwardRef"
        );
        __turbopack_context__.k.register(_c11, "DropdownMenuRadioItem");
        __turbopack_context__.k.register(
          _c12,
          "DropdownMenuLabel$React.forwardRef"
        );
        __turbopack_context__.k.register(_c13, "DropdownMenuLabel");
        __turbopack_context__.k.register(
          _c14,
          "DropdownMenuSeparator$React.forwardRef"
        );
        __turbopack_context__.k.register(_c15, "DropdownMenuSeparator");
        __turbopack_context__.k.register(_c16, "DropdownMenuShortcut");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          Dialog: () => Dialog,
          DialogClose: () => DialogClose,
          DialogContent: () => DialogContent,
          DialogDescription: () => DialogDescription,
          DialogFooter: () => DialogFooter,
          DialogHeader: () => DialogHeader,
          DialogOverlay: () => DialogOverlay,
          DialogPortal: () => DialogPortal,
          DialogTitle: () => DialogTitle,
          DialogTrigger: () => DialogTrigger,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/lib/utils.ts [app-client] (ecmascript)"
          );
        ("use client");
        const Dialog =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Root"
          ];
        const DialogTrigger =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Trigger"
          ];
        const DialogPortal =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Portal"
          ];
        const DialogClose =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Close"
          ];
        const DialogOverlay = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(({ className, ...props }, ref) =>
          /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "Overlay"
            ],
            {
              ref: ref,
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "cn"
              ])(
                "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                className
              ),
              ...props,
            },
            void 0,
            false,
            {
              fileName: "[project]/src/components/ui/dialog.tsx",
              lineNumber: 21,
              columnNumber: 3,
            },
            this
          )
        );
        _c = DialogOverlay;
        DialogOverlay.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Overlay"
          ].displayName;
        const DialogContent = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c1 = ({ className, children, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              DialogPortal,
              {
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    DialogOverlay,
                    {},
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/components/ui/dialog.tsx",
                      lineNumber: 37,
                      columnNumber: 5,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "Content"
                    ],
                    {
                      ref: ref,
                      className: (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "cn"
                      ])(
                        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                        className
                      ),
                      ...props,
                      children: [
                        children,
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "Close"
                          ],
                          {
                            className:
                              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__[
                                  "X"
                                ],
                                {
                                  className: "h-4 w-4",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/src/components/ui/dialog.tsx",
                                  lineNumber: 48,
                                  columnNumber: 9,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "span",
                                {
                                  className: "sr-only",
                                  children: "Close",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/src/components/ui/dialog.tsx",
                                  lineNumber: 49,
                                  columnNumber: 9,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: "[project]/src/components/ui/dialog.tsx",
                            lineNumber: 47,
                            columnNumber: 7,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/components/ui/dialog.tsx",
                      lineNumber: 38,
                      columnNumber: 5,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 36,
                columnNumber: 3,
              },
              this
            ))
        );
        _c2 = DialogContent;
        DialogContent.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Content"
          ].displayName;
        const DialogHeader = ({ className, ...props }) =>
          /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "cn"
              ])(
                "flex flex-col space-y-1.5 text-center sm:text-left",
                className
              ),
              ...props,
            },
            void 0,
            false,
            {
              fileName: "[project]/src/components/ui/dialog.tsx",
              lineNumber: 60,
              columnNumber: 3,
            },
            this
          );
        _c3 = DialogHeader;
        DialogHeader.displayName = "DialogHeader";
        const DialogFooter = ({ className, ...props }) =>
          /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "cn"
              ])(
                "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
                className
              ),
              ...props,
            },
            void 0,
            false,
            {
              fileName: "[project]/src/components/ui/dialog.tsx",
              lineNumber: 74,
              columnNumber: 3,
            },
            this
          );
        _c4 = DialogFooter;
        DialogFooter.displayName = "DialogFooter";
        const DialogTitle = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c5 = ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Title"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "text-lg font-semibold leading-none tracking-tight",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 88,
                columnNumber: 3,
              },
              this
            ))
        );
        _c6 = DialogTitle;
        DialogTitle.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Title"
          ].displayName;
        const DialogDescription = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c7 = ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Description"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])("text-sm text-muted-foreground", className),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 103,
                columnNumber: 3,
              },
              this
            ))
        );
        _c8 = DialogDescription;
        DialogDescription.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Description"
          ].displayName;
        var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
        __turbopack_context__.k.register(_c, "DialogOverlay");
        __turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
        __turbopack_context__.k.register(_c2, "DialogContent");
        __turbopack_context__.k.register(_c3, "DialogHeader");
        __turbopack_context__.k.register(_c4, "DialogFooter");
        __turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
        __turbopack_context__.k.register(_c6, "DialogTitle");
        __turbopack_context__.k.register(
          _c7,
          "DialogDescription$React.forwardRef"
        );
        __turbopack_context__.k.register(_c8, "DialogDescription");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/components/ui/label.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          Label: () => Label,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/lib/utils.ts [app-client] (ecmascript)"
          );
        ("use client");
        const labelVariants = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "cva"
        ])(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        );
        const Label = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c = ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Root"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(labelVariants(), className),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/label.tsx",
                lineNumber: 18,
                columnNumber: 3,
              },
              this
            ))
        );
        _c1 = Label;
        Label.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Root"
          ].displayName;
        var _c, _c1;
        __turbopack_context__.k.register(_c, "Label$React.forwardRef");
        __turbopack_context__.k.register(_c1, "Label");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/components/chat/image-prompt-dialog.tsx [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var {
          g: global,
          __dirname,
          k: __turbopack_refresh__,
          m: module,
        } = __turbopack_context__;
        {
          // src/components/chat/image-prompt-dialog.tsx
          __turbopack_context__.s({
            ImagePromptDialog: () => ImagePromptDialog,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/button.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/input.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/label.tsx [app-client] (ecmascript)"
            );
          var _s = __turbopack_context__.k.signature();
          ("use client");
          function ImagePromptDialog({ open, onOpenChange, onSubmit }) {
            _s();
            const [prompt, setPrompt] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])("");
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useEffect"
            ])(
              {
                "ImagePromptDialog.useEffect": () => {
                  if (open) {
                    setPrompt(""); // Reset prompt when dialog opens
                  }
                },
              }["ImagePromptDialog.useEffect"],
              [open]
            );
            const handleSubmit = () => {
              if (prompt.trim()) {
                onSubmit(prompt.trim());
              }
            };
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Dialog"
              ],
              {
                open: open,
                onOpenChange: onOpenChange,
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "DialogContent"
                  ],
                  {
                    className: "sm:max-w-[425px]",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "DialogHeader"
                        ],
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "DialogTitle"
                              ],
                              {
                                children: "Generate Image with Stability AI",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/image-prompt-dialog.tsx",
                                lineNumber: 42,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "DialogDescription"
                              ],
                              {
                                children:
                                  "Enter a prompt to generate an image. The AI will use Stability AI to create your image.",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/image-prompt-dialog.tsx",
                                lineNumber: 43,
                                columnNumber: 11,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/src/components/chat/image-prompt-dialog.tsx",
                          lineNumber: 41,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "grid gap-4 py-4",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "grid grid-cols-4 items-center gap-4",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "Label"
                                  ],
                                  {
                                    htmlFor: "image-prompt",
                                    className: "text-right",
                                    children: "Prompt",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/src/components/chat/image-prompt-dialog.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "Input"
                                  ],
                                  {
                                    id: "image-prompt",
                                    value: prompt,
                                    onChange: (e) => setPrompt(e.target.value),
                                    className: "col-span-3",
                                    placeholder:
                                      "e.g., A futuristic city skyline at sunset",
                                    onKeyDown: (e) => {
                                      if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSubmit();
                                      }
                                    },
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/src/components/chat/image-prompt-dialog.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/src/components/chat/image-prompt-dialog.tsx",
                              lineNumber: 48,
                              columnNumber: 11,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/src/components/chat/image-prompt-dialog.tsx",
                          lineNumber: 47,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "DialogFooter"
                        ],
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "Button"
                              ],
                              {
                                variant: "outline",
                                onClick: () => onOpenChange(false),
                                children: "Cancel",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/image-prompt-dialog.tsx",
                                lineNumber: 68,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "Button"
                              ],
                              {
                                type: "submit",
                                onClick: handleSubmit,
                                disabled: !prompt.trim(),
                                children: "Generate",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/image-prompt-dialog.tsx",
                                lineNumber: 69,
                                columnNumber: 11,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/src/components/chat/image-prompt-dialog.tsx",
                          lineNumber: 67,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      "[project]/src/components/chat/image-prompt-dialog.tsx",
                    lineNumber: 40,
                    columnNumber: 7,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/src/components/chat/image-prompt-dialog.tsx",
                lineNumber: 39,
                columnNumber: 5,
              },
              this
            );
          }
          _s(ImagePromptDialog, "q9ulJNGlF34YGoZeGL6zn8p4q8Q=");
          _c = ImagePromptDialog;
          var _c;
          __turbopack_context__.k.register(_c, "ImagePromptDialog");
          if (
            typeof globalThis.$RefreshHelpers$ === "object" &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    "[project]/src/components/chat/video-prompt-dialog.tsx [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var {
          g: global,
          __dirname,
          k: __turbopack_refresh__,
          m: module,
        } = __turbopack_context__;
        {
          // src/components/chat/video-prompt-dialog.tsx
          __turbopack_context__.s({
            VideoPromptDialog: () => VideoPromptDialog,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/button.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/input.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/label.tsx [app-client] (ecmascript)"
            );
          var _s = __turbopack_context__.k.signature();
          ("use client");
          function VideoPromptDialog({ open, onOpenChange, onSubmit }) {
            _s();
            const [prompt, setPrompt] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])("");
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useEffect"
            ])(
              {
                "VideoPromptDialog.useEffect": () => {
                  if (open) {
                    setPrompt(""); // Reset prompt when dialog opens
                  }
                },
              }["VideoPromptDialog.useEffect"],
              [open]
            );
            const handleSubmit = () => {
              if (prompt.trim()) {
                onSubmit(prompt.trim());
              }
            };
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Dialog"
              ],
              {
                open: open,
                onOpenChange: onOpenChange,
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "DialogContent"
                  ],
                  {
                    className: "sm:max-w-[425px]",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "DialogHeader"
                        ],
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "DialogTitle"
                              ],
                              {
                                children: "Generate Video with Google Veo2",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/video-prompt-dialog.tsx",
                                lineNumber: 42,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "DialogDescription"
                              ],
                              {
                                children:
                                  "Enter a prompt to generate a video preview. The AI will describe the video Google Veo2 could create. Actual video generation is coming soon.",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/video-prompt-dialog.tsx",
                                lineNumber: 43,
                                columnNumber: 11,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/src/components/chat/video-prompt-dialog.tsx",
                          lineNumber: 41,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "grid gap-4 py-4",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "grid grid-cols-4 items-center gap-4",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "Label"
                                  ],
                                  {
                                    htmlFor: "video-prompt",
                                    className: "text-right",
                                    children: "Prompt",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/src/components/chat/video-prompt-dialog.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "Input"
                                  ],
                                  {
                                    id: "video-prompt",
                                    value: prompt,
                                    onChange: (e) => setPrompt(e.target.value),
                                    className: "col-span-3",
                                    placeholder:
                                      "e.g., A majestic lion walking on Mars",
                                    onKeyDown: (e) => {
                                      if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSubmit();
                                      }
                                    },
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/src/components/chat/video-prompt-dialog.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/src/components/chat/video-prompt-dialog.tsx",
                              lineNumber: 48,
                              columnNumber: 11,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/src/components/chat/video-prompt-dialog.tsx",
                          lineNumber: 47,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "DialogFooter"
                        ],
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "Button"
                              ],
                              {
                                variant: "outline",
                                onClick: () => onOpenChange(false),
                                children: "Cancel",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/video-prompt-dialog.tsx",
                                lineNumber: 68,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "Button"
                              ],
                              {
                                type: "submit",
                                onClick: handleSubmit,
                                disabled: !prompt.trim(),
                                children: "Generate Preview",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/video-prompt-dialog.tsx",
                                lineNumber: 69,
                                columnNumber: 11,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/src/components/chat/video-prompt-dialog.tsx",
                          lineNumber: 67,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      "[project]/src/components/chat/video-prompt-dialog.tsx",
                    lineNumber: 40,
                    columnNumber: 7,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/src/components/chat/video-prompt-dialog.tsx",
                lineNumber: 39,
                columnNumber: 5,
              },
              this
            );
          }
          _s(VideoPromptDialog, "q9ulJNGlF34YGoZeGL6zn8p4q8Q=");
          _c = VideoPromptDialog;
          var _c;
          __turbopack_context__.k.register(_c, "VideoPromptDialog");
          if (
            typeof globalThis.$RefreshHelpers$ === "object" &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    "[project]/src/components/chat/chat-header.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        // src/components/chat/chat-header.tsx
        __turbopack_context__.s({
          ChatHeader: () => ChatHeader,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldOff$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/lucide-react/dist/esm/icons/shield-off.js [app-client] (ecmascript) <export default as ShieldOff>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquarePen$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as SquarePen>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/theme-toggle-button.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/ui/button.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/hooks/use-toast.ts [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$image$2d$prompt$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/chat/image-prompt-dialog.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$video$2d$prompt$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/chat/video-prompt-dialog.tsx [app-client] (ecmascript)"
          );
        var _s = __turbopack_context__.k.signature();
        ("use client");
        function ChatHeader({
          onClearChat,
          onSendImagePrompt,
          onSendVideoPrompt,
        }) {
          _s();
          const [isProxyMode, setIsProxyMode] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useState"
          ])(false);
          const [isImagePromptDialogOpen, setIsImagePromptDialogOpen] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useState"
          ])(false);
          const [isVideoPromptDialogOpen, setIsVideoPromptDialogOpen] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useState"
          ])(false);
          const { toast } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useToast"
          ])();
          const toggleProxyMode = () => {
            setIsProxyMode(!isProxyMode);
            toast({
              title: "Proxy Mode",
              description: `Proxy mode ${
                !isProxyMode ? "enabled" : "disabled"
              }. This is a UI demonstration.`,
            });
          };
          const handleNewChat = () => {
            onClearChat();
            toast({
              title: "New Chat Started",
              description: "Previous conversation has been cleared.",
            });
          };
          const handleGenerateImageClick = () => {
            setIsImagePromptDialogOpen(true);
          };
          const handleImagePromptSubmit = (prompt) => {
            if (prompt.trim()) {
              onSendImagePrompt(prompt.trim());
            }
            setIsImagePromptDialogOpen(false);
          };
          const handleGenerateVideoClick = () => {
            setIsVideoPromptDialogOpen(true);
          };
          const handleVideoPromptSubmit = (prompt) => {
            if (prompt.trim()) {
              onSendVideoPrompt(prompt.trim());
            }
            setIsVideoPromptDialogOpen(false);
          };
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "Fragment"
            ],
            {
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "header",
                  {
                    className:
                      "flex items-center justify-between p-3 h-16 border-b shrink-0 bg-card",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "flex items-center gap-2",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "SidebarTrigger"
                              ],
                              {
                                className: "md:hidden h-8 w-8",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-header.tsx",
                                lineNumber: 78,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "SidebarTrigger"
                              ],
                              {
                                className:
                                  "h-8 w-8 hidden md:flex text-muted-foreground hover:text-primary",
                                "aria-label": "Toggle Sidebar",
                                title: "Toggle Sidebar",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-header.tsx",
                                lineNumber: 79,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "Button"
                              ],
                              {
                                variant: "ghost",
                                size: "icon",
                                onClick: handleNewChat,
                                className:
                                  "h-8 w-8 text-muted-foreground hover:text-primary",
                                "aria-label": "New Chat",
                                title: "New Chat",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquarePen$3e$__[
                                    "SquarePen"
                                  ],
                                  {
                                    className: "h-5 w-5",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/src/components/chat/chat-header.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-header.tsx",
                                lineNumber: 80,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "DropdownMenu"
                              ],
                              {
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "DropdownMenuTrigger"
                                    ],
                                    {
                                      asChild: true,
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "Button"
                                        ],
                                        {
                                          variant: "ghost",
                                          className:
                                            "flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-accent/10",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__[
                                                "Bot"
                                              ],
                                              {
                                                className:
                                                  "h-6 w-6 text-primary",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/components/chat/chat-header.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17,
                                              },
                                              this
                                            ),
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "h1",
                                              {
                                                className:
                                                  "text-lg font-semibold text-foreground",
                                                children: "Trubotrix AI models",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/components/chat/chat-header.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17,
                                              },
                                              this
                                            ),
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__[
                                                "ChevronDown"
                                              ],
                                              {
                                                className:
                                                  "h-4 w-4 text-muted-foreground",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/components/chat/chat-header.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17,
                                              },
                                              this
                                            ),
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/src/components/chat/chat-header.tsx",
                                          lineNumber: 93,
                                          columnNumber: 15,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/src/components/chat/chat-header.tsx",
                                      lineNumber: 92,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "DropdownMenuContent"
                                    ],
                                    {
                                      align: "start",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "DropdownMenuItem"
                                          ],
                                          {
                                            onClick: handleGenerateImageClick,
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__[
                                                  "Image"
                                                ],
                                                {
                                                  className: "mr-2 h-4 w-4",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/components/chat/chat-header.tsx",
                                                  lineNumber: 101,
                                                  columnNumber: 17,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "span",
                                                {
                                                  children:
                                                    "Generate Image (Stability AI)",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/components/chat/chat-header.tsx",
                                                  lineNumber: 102,
                                                  columnNumber: 17,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/src/components/chat/chat-header.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "DropdownMenuItem"
                                          ],
                                          {
                                            onClick: handleGenerateVideoClick,
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__[
                                                  "Video"
                                                ],
                                                {
                                                  className: "mr-2 h-4 w-4",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/components/chat/chat-header.tsx",
                                                  lineNumber: 105,
                                                  columnNumber: 17,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "span",
                                                {
                                                  children:
                                                    "Generate Video (Google Veo2)",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/components/chat/chat-header.tsx",
                                                  lineNumber: 106,
                                                  columnNumber: 17,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/src/components/chat/chat-header.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/src/components/chat/chat-header.tsx",
                                      lineNumber: 99,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-header.tsx",
                                lineNumber: 91,
                                columnNumber: 11,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/src/components/chat/chat-header.tsx",
                          lineNumber: 77,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "flex items-center gap-2",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "Button"
                              ],
                              {
                                variant: "outline",
                                size: "sm",
                                onClick: toggleProxyMode,
                                className: "gap-1.5",
                                title: isProxyMode
                                  ? "Disable Proxy Mode"
                                  : "Enable Proxy Mode",
                                children: [
                                  isProxyMode
                                    ? /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldOff$3e$__[
                                          "ShieldOff"
                                        ],
                                        {
                                          className: "h-4 w-4",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/components/chat/chat-header.tsx",
                                          lineNumber: 120,
                                          columnNumber: 28,
                                        },
                                        this
                                      )
                                    : /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__[
                                          "Shield"
                                        ],
                                        {
                                          className: "h-4 w-4",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/components/chat/chat-header.tsx",
                                          lineNumber: 120,
                                          columnNumber: 64,
                                        },
                                        this
                                      ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "span",
                                    {
                                      className: "hidden sm:inline",
                                      children: "Proxy Mode",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/src/components/chat/chat-header.tsx",
                                      lineNumber: 121,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-header.tsx",
                                lineNumber: 113,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "ThemeToggleButton"
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-header.tsx",
                                lineNumber: 123,
                                columnNumber: 11,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/src/components/chat/chat-header.tsx",
                          lineNumber: 112,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/src/components/chat/chat-header.tsx",
                    lineNumber: 76,
                    columnNumber: 7,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$image$2d$prompt$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "ImagePromptDialog"
                  ],
                  {
                    open: isImagePromptDialogOpen,
                    onOpenChange: setIsImagePromptDialogOpen,
                    onSubmit: handleImagePromptSubmit,
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/components/chat/chat-header.tsx",
                    lineNumber: 126,
                    columnNumber: 7,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$video$2d$prompt$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "VideoPromptDialog"
                  ],
                  {
                    open: isVideoPromptDialogOpen,
                    onOpenChange: setIsVideoPromptDialogOpen,
                    onSubmit: handleVideoPromptSubmit,
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/components/chat/chat-header.tsx",
                    lineNumber: 131,
                    columnNumber: 7,
                  },
                  this
                ),
              ],
            },
            void 0,
            true
          );
        }
        _s(ChatHeader, "f+xArSXzBbJw2Cr+RsOnu9THzPQ=", false, function () {
          return [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useToast"
            ],
          ];
        });
        _c = ChatHeader;
        var _c;
        __turbopack_context__.k.register(_c, "ChatHeader");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          Avatar: () => Avatar,
          AvatarFallback: () => AvatarFallback,
          AvatarImage: () => AvatarImage,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/lib/utils.ts [app-client] (ecmascript)"
          );
        ("use client");
        const Avatar = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c = ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Root"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/avatar.tsx",
                lineNumber: 12,
                columnNumber: 3,
              },
              this
            ))
        );
        _c1 = Avatar;
        Avatar.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Root"
          ].displayName;
        const AvatarImage = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c2 = ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Image"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])("aspect-square h-full w-full", className),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/avatar.tsx",
                lineNumber: 27,
                columnNumber: 3,
              },
              this
            ))
        );
        _c3 = AvatarImage;
        AvatarImage.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Image"
          ].displayName;
        const AvatarFallback = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c4 = ({ className, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Fallback"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "flex h-full w-full items-center justify-center rounded-full bg-muted",
                  className
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/avatar.tsx",
                lineNumber: 39,
                columnNumber: 3,
              },
              this
            ))
        );
        _c5 = AvatarFallback;
        AvatarFallback.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Fallback"
          ].displayName;
        var _c, _c1, _c2, _c3, _c4, _c5;
        __turbopack_context__.k.register(_c, "Avatar$React.forwardRef");
        __turbopack_context__.k.register(_c1, "Avatar");
        __turbopack_context__.k.register(_c2, "AvatarImage$React.forwardRef");
        __turbopack_context__.k.register(_c3, "AvatarImage");
        __turbopack_context__.k.register(
          _c4,
          "AvatarFallback$React.forwardRef"
        );
        __turbopack_context__.k.register(_c5, "AvatarFallback");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/components/chat/chat-message-item.tsx [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var {
          g: global,
          __dirname,
          k: __turbopack_refresh__,
          m: module,
        } = __turbopack_context__;
        {
          // src/components/chat/chat-message-item.tsx
          __turbopack_context__.s({
            ChatMessageItem: () => ChatMessageItem,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/lib/utils.ts [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/cloud-upload.js [app-client] (ecmascript) <export default as UploadCloud>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/image.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/button.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/hooks/use-toast.ts [app-client] (ecmascript)"
            );
          var _s = __turbopack_context__.k.signature();
          ("use client");
          function ChatMessageItem({ message, onOpenCodeInEditor }) {
            _s();
            const isUser = message.sender === "user";
            const isAI = message.sender === "ai";
            const isSystem = message.sender === "system";
            const [formattedTimestamp, setFormattedTimestamp] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])("");
            const [isClientRendered, setIsClientRendered] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])(false);
            const { toast } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useToast"
            ])();
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useEffect"
            ])(
              {
                "ChatMessageItem.useEffect": () => {
                  setIsClientRendered(true);
                  if (
                    message.timestamp &&
                    (typeof message.timestamp === "number" ||
                      typeof message.timestamp === "string") &&
                    !isNaN(new Date(message.timestamp).getTime())
                  ) {
                    setFormattedTimestamp(
                      new Date(message.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    );
                  } else {
                    setFormattedTimestamp("");
                  }
                },
              }["ChatMessageItem.useEffect"],
              [message.timestamp, message.id]
            );
            if (!isClientRendered && !isSystem) {
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className: (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "cn"
                  ])(
                    "flex items-start gap-3 p-4 rounded-lg",
                    isUser ? "justify-end" : "justify-start"
                  ),
                  children: [
                    !isUser &&
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "Avatar"
                        ],
                        {
                          className:
                            "h-8 w-8 shrink-0 border border-border shadow-sm rounded-full bg-secondary",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/src/components/chat/chat-message-item.tsx",
                          lineNumber: 45,
                          columnNumber: 21,
                        },
                        this
                      ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className: (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "cn"
                        ])(
                          "max-w-[80%] p-3 rounded-xl break-words shadow-md",
                          isUser
                            ? "bg-primary text-primary-foreground rounded-br-none"
                            : "bg-card text-card-foreground rounded-bl-none border border-border"
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          "[project]/src/components/chat/chat-message-item.tsx",
                        lineNumber: 46,
                        columnNumber: 9,
                      },
                      this
                    ),
                    isUser &&
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "Avatar"
                        ],
                        {
                          className:
                            "h-8 w-8 shrink-0 border border-border shadow-sm rounded-full bg-accent text-accent-foreground",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/src/components/chat/chat-message-item.tsx",
                          lineNumber: 52,
                          columnNumber: 20,
                        },
                        this
                      ),
                  ],
                },
                void 0,
                true,
                {
                  fileName:
                    "[project]/src/components/chat/chat-message-item.tsx",
                  lineNumber: 44,
                  columnNumber: 7,
                },
                this
              );
            }
            const getAvatarIcon = () => {
              if (isUser)
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__[
                    "User"
                  ],
                  {
                    className: "h-5 w-5",
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/src/components/chat/chat-message-item.tsx",
                    lineNumber: 59,
                    columnNumber: 24,
                  },
                  this
                );
              if (isAI && message.type === "ai_image")
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__[
                    "Image"
                  ],
                  {
                    className: "h-5 w-5",
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/src/components/chat/chat-message-item.tsx",
                    lineNumber: 60,
                    columnNumber: 53,
                  },
                  this
                );
              if (isAI && message.type === "ai_video")
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__[
                    "Video"
                  ],
                  {
                    className: "h-5 w-5",
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/src/components/chat/chat-message-item.tsx",
                    lineNumber: 61,
                    columnNumber: 53,
                  },
                  this
                );
              if (isAI)
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__[
                    "Bot"
                  ],
                  {
                    className: "h-5 w-5",
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/src/components/chat/chat-message-item.tsx",
                    lineNumber: 62,
                    columnNumber: 22,
                  },
                  this
                );
              if (message.type === "error")
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__[
                    "AlertTriangle"
                  ],
                  {
                    className: "h-5 w-5 text-destructive",
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/src/components/chat/chat-message-item.tsx",
                    lineNumber: 63,
                    columnNumber: 42,
                  },
                  this
                );
              if (message.type === "user_upload")
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__[
                    "UploadCloud"
                  ],
                  {
                    className: "h-5 w-5 text-primary",
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/src/components/chat/chat-message-item.tsx",
                    lineNumber: 64,
                    columnNumber: 48,
                  },
                  this
                );
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__[
                  "FileText"
                ],
                {
                  className: "h-5 w-5",
                },
                void 0,
                false,
                {
                  fileName:
                    "[project]/src/components/chat/chat-message-item.tsx",
                  lineNumber: 65,
                  columnNumber: 12,
                },
                this
              );
            };
            const getAvatarFallback = () => {
              if (isUser) return "U";
              if (isAI) return "AI";
              return "S";
            };
            const renderContent = (content) => {
              const parts = content.split(/(```[\s\S]*?```|`[\s\S]*?`)/g);
              return parts.map((part, index) => {
                if (part.startsWith("```") && part.endsWith("```")) {
                  const codeBlockContent = part.slice(3, -3).trim();
                  const firstLineEnd = codeBlockContent.indexOf("\n");
                  let language = "";
                  let actualCode = codeBlockContent;
                  if (firstLineEnd !== -1) {
                    const firstLine = codeBlockContent
                      .substring(0, firstLineEnd)
                      .trim();
                    // Basic check for language hint (no spaces, common characters)
                    if (
                      /^[a-zA-Z0-9_.-]+$/.test(firstLine) &&
                      !firstLine.includes(" ") &&
                      codeBlockContent.length > firstLine.length + 1
                    ) {
                      language = firstLine;
                      actualCode = codeBlockContent
                        .substring(firstLineEnd + 1)
                        .trim();
                    }
                  }
                  return /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "my-2 flex justify-center",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "relative group w-full max-w-2xl",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "absolute top-0 left-0 right-0 flex justify-between items-center p-2 bg-gray-900 dark:bg-neutral-800 rounded-t-lg border-b border-gray-700 dark:border-neutral-700",
                                children: [
                                  language &&
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "span",
                                      {
                                        className:
                                          "text-xs text-gray-400 select-none",
                                        children: language,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/src/components/chat/chat-message-item.tsx",
                                        lineNumber: 100,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  !language &&
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "span",
                                      {
                                        className:
                                          "text-xs text-gray-400 select-none",
                                        children: "Code",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/src/components/chat/chat-message-item.tsx",
                                        lineNumber: 104,
                                        columnNumber: 31,
                                      },
                                      this
                                    ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className: "flex gap-1",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "Button"
                                          ],
                                          {
                                            variant: "ghost",
                                            size: "icon",
                                            className:
                                              "h-7 w-7 text-gray-400 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-neutral-700",
                                            onClick: (e) => {
                                              e.stopPropagation();
                                              onOpenCodeInEditor(
                                                actualCode,
                                                language,
                                                message.id
                                              );
                                            },
                                            title: "Open in editor",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__[
                                                "Code"
                                              ],
                                              {
                                                className: "h-4 w-4",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/components/chat/chat-message-item.tsx",
                                                lineNumber: 116,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/components/chat/chat-message-item.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "Button"
                                          ],
                                          {
                                            variant: "ghost",
                                            size: "icon",
                                            className:
                                              "h-7 w-7 text-gray-400 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-neutral-700",
                                            onClick: async (e) => {
                                              e.stopPropagation();
                                              try {
                                                await navigator.clipboard.writeText(
                                                  actualCode
                                                );
                                                toast({
                                                  title: "Copied to clipboard!",
                                                });
                                              } catch (err) {
                                                console.error(
                                                  "Failed to copy code:",
                                                  err
                                                );
                                                toast({
                                                  title: "Error",
                                                  description:
                                                    "Could not copy code to clipboard.",
                                                  variant: "destructive",
                                                });
                                              }
                                            },
                                            title: "Copy code",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__[
                                                "Copy"
                                              ],
                                              {
                                                className: "h-4 w-4",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/components/chat/chat-message-item.tsx",
                                                lineNumber: 134,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/components/chat/chat-message-item.tsx",
                                            lineNumber: 118,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/src/components/chat/chat-message-item.tsx",
                                      lineNumber: 105,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-message-item.tsx",
                                lineNumber: 98,
                                columnNumber: 15,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "pre",
                              {
                                className:
                                  "bg-gray-800 dark:bg-neutral-900 text-gray-200 p-4 pt-12 rounded-b-lg overflow-x-auto text-sm font-mono text-left shadow-md border border-t-0 border-gray-700 dark:border-neutral-700 leading-relaxed",
                                style: {
                                  tabSize: 2,
                                },
                                onClick: () =>
                                  onOpenCodeInEditor(
                                    actualCode,
                                    language,
                                    message.id
                                  ),
                                role: "button",
                                tabIndex: 0,
                                onKeyDown: (e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    onOpenCodeInEditor(
                                      actualCode,
                                      language,
                                      message.id
                                    );
                                  }
                                },
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "code",
                                  {
                                    children: actualCode,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/src/components/chat/chat-message-item.tsx",
                                    lineNumber: 150,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-message-item.tsx",
                                lineNumber: 138,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/src/components/chat/chat-message-item.tsx",
                          lineNumber: 95,
                          columnNumber: 13,
                        },
                        this
                      ),
                    },
                    index,
                    false,
                    {
                      fileName:
                        "[project]/src/components/chat/chat-message-item.tsx",
                      lineNumber: 94,
                      columnNumber: 11,
                    },
                    this
                  );
                }
                if (part.startsWith("`") && part.endsWith("`")) {
                  const inlineCode = part.slice(1, -1);
                  return /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "code",
                    {
                      className:
                        "bg-muted/70 dark:bg-muted/40 text-sm font-mono px-1.5 py-0.5 rounded-md border border-border/50 mx-0.5",
                      children: inlineCode,
                    },
                    index,
                    false,
                    {
                      fileName:
                        "[project]/src/components/chat/chat-message-item.tsx",
                      lineNumber: 158,
                      columnNumber: 16,
                    },
                    this
                  );
                }
                return /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "span",
                  {
                    className: "whitespace-pre-wrap break-words",
                    children: part,
                  },
                  index,
                  false,
                  {
                    fileName:
                      "[project]/src/components/chat/chat-message-item.tsx",
                    lineNumber: 160,
                    columnNumber: 14,
                  },
                  this
                );
              });
            };
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "flex items-start gap-3 p-4 rounded-lg",
                  isUser ? "justify-end" : "justify-start"
                ),
                children: [
                  !isUser &&
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "Avatar"
                      ],
                      {
                        className:
                          "h-8 w-8 shrink-0 border border-border shadow-sm",
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "AvatarFallback"
                          ],
                          {
                            className: (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "cn"
                            ])(
                              "bg-secondary text-secondary-foreground",
                              isAI &&
                                message.type === "ai_image" &&
                                "bg-primary/10 text-primary",
                              isAI &&
                                message.type === "ai_video" &&
                                "bg-primary/10 text-primary",
                              isAI &&
                                message.type !== "ai_image" &&
                                message.type !== "ai_video" &&
                                "bg-primary/10 text-primary",
                              isSystem &&
                                message.type === "error" &&
                                "bg-destructive/10 text-destructive",
                              isSystem &&
                                message.type === "user_upload" &&
                                "bg-accent/10 text-accent"
                            ),
                            children: getAvatarIcon(),
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/components/chat/chat-message-item.tsx",
                            lineNumber: 173,
                            columnNumber: 11,
                          },
                          this
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          "[project]/src/components/chat/chat-message-item.tsx",
                        lineNumber: 172,
                        columnNumber: 9,
                      },
                      this
                    ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "cn"
                      ])(
                        "max-w-[80%] p-3 rounded-xl break-words shadow-md",
                        isUser
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-card text-card-foreground rounded-bl-none border border-border",
                        isSystem &&
                          message.type === "error" &&
                          "bg-destructive/10 text-destructive border-destructive/30",
                        isSystem &&
                          message.type !== "error" &&
                          message.type !== "ai_image" &&
                          message.type !== "ai_video" &&
                          "bg-muted/50 text-muted-foreground border-border",
                        message.type === "ai_image" &&
                          isAI &&
                          "bg-card text-card-foreground border-border p-2",
                        message.type === "ai_video" &&
                          isAI &&
                          "bg-card text-card-foreground border-border p-2"
                      ),
                      children: [
                        message.type === "user_upload" &&
                          message.fileDataUri &&
                          message.fileType?.startsWith("image/") &&
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "mb-2",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "p",
                                  {
                                    className:
                                      "text-xs text-muted-foreground mb-1 italic text-center",
                                    children: [
                                      "Uploaded: ",
                                      message.originalFileName,
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      "[project]/src/components/chat/chat-message-item.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "default"
                                  ],
                                  {
                                    src: message.fileDataUri,
                                    alt:
                                      message.originalFileName ||
                                      "Uploaded image",
                                    width: 250,
                                    height: 250,
                                    className:
                                      "rounded-md object-cover border border-border shadow-sm mx-auto",
                                    "data-ai-hint": "uploaded image",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/src/components/chat/chat-message-item.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/src/components/chat/chat-message-item.tsx",
                              lineNumber: 198,
                              columnNumber: 11,
                            },
                            this
                          ),
                        message.type === "ai_image" &&
                          message.imageUrl &&
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "flex flex-col items-center",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "p",
                                  {
                                    className:
                                      "text-sm leading-relaxed mb-2 self-center text-center",
                                    children: message.content,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/src/components/chat/chat-message-item.tsx",
                                    lineNumber: 213,
                                    columnNumber: 14,
                                  },
                                  this
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "default"
                                  ],
                                  {
                                    src: message.imageUrl,
                                    alt:
                                      message.content || "AI generated image",
                                    width: 320,
                                    height: 320,
                                    className:
                                      "rounded-lg object-contain border border-border shadow-lg",
                                    "data-ai-hint": "generated art",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/src/components/chat/chat-message-item.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/src/components/chat/chat-message-item.tsx",
                              lineNumber: 212,
                              columnNumber: 11,
                            },
                            this
                          ),
                        message.type === "ai_video" &&
                          message.videoUrl &&
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "flex flex-col items-center",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "p",
                                  {
                                    className:
                                      "text-sm leading-relaxed mb-2 self-center text-center",
                                    children: message.content,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/src/components/chat/chat-message-item.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className:
                                      "bg-muted rounded-lg p-4 text-center w-full max-w-md border border-border shadow-lg",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__[
                                          "Video"
                                        ],
                                        {
                                          className:
                                            "h-12 w-12 text-primary mx-auto mb-2",
                                          "data-ai-hint": "video play",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/components/chat/chat-message-item.tsx",
                                          lineNumber: 229,
                                          columnNumber: 15,
                                        },
                                        this
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "p",
                                        {
                                          className: "text-sm text-center",
                                          children:
                                            "Video content would be displayed here.",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/components/chat/chat-message-item.tsx",
                                          lineNumber: 230,
                                          columnNumber: 15,
                                        },
                                        this
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "p",
                                        {
                                          className:
                                            "text-xs text-muted-foreground mt-1 text-center",
                                          children: [
                                            "(Video URL: ",
                                            message.videoUrl,
                                            ")",
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/src/components/chat/chat-message-item.tsx",
                                          lineNumber: 231,
                                          columnNumber: 15,
                                        },
                                        this
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      "[project]/src/components/chat/chat-message-item.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/src/components/chat/chat-message-item.tsx",
                              lineNumber: 226,
                              columnNumber: 11,
                            },
                            this
                          ),
                        message.type !== "ai_image" &&
                          message.type !== "user_upload" &&
                          message.type !== "ai_video" &&
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "text-sm leading-relaxed text-center",
                              children: renderContent(message.content),
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/components/chat/chat-message-item.tsx",
                              lineNumber: 237,
                              columnNumber: 13,
                            },
                            this
                          ),
                        message.type === "user_upload" &&
                          !message.fileType?.startsWith("image/") &&
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "text-sm leading-relaxed text-center",
                              children: renderContent(message.content),
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/components/chat/chat-message-item.tsx",
                              lineNumber: 240,
                              columnNumber: 13,
                            },
                            this
                          ),
                        message.originalFileName &&
                          (message.type === "file_analysis" ||
                            (message.type === "user_upload" &&
                              !message.fileType?.startsWith("image/"))) &&
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "p",
                            {
                              className:
                                "text-xs text-muted-foreground mt-1 pt-1 border-t border-border/50 italic text-center",
                              children: ["File: ", message.originalFileName],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/src/components/chat/chat-message-item.tsx",
                              lineNumber: 244,
                              columnNumber: 12,
                            },
                            this
                          ),
                        isClientRendered &&
                          formattedTimestamp &&
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "p",
                            {
                              className: (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "cn"
                              ])(
                                "text-xs mt-2 opacity-70",
                                isUser
                                  ? "text-primary-foreground/80 text-right"
                                  : "text-muted-foreground text-right"
                              ),
                              children: formattedTimestamp,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/components/chat/chat-message-item.tsx",
                              lineNumber: 248,
                              columnNumber: 13,
                            },
                            this
                          ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        "[project]/src/components/chat/chat-message-item.tsx",
                      lineNumber: 185,
                      columnNumber: 7,
                    },
                    this
                  ),
                  isUser &&
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "Avatar"
                      ],
                      {
                        className:
                          "h-8 w-8 shrink-0 border border-border shadow-sm",
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "AvatarFallback"
                          ],
                          {
                            className: "bg-accent text-accent-foreground",
                            children: getAvatarIcon(),
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/components/chat/chat-message-item.tsx",
                            lineNumber: 255,
                            columnNumber: 11,
                          },
                          this
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          "[project]/src/components/chat/chat-message-item.tsx",
                        lineNumber: 254,
                        columnNumber: 10,
                      },
                      this
                    ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/chat/chat-message-item.tsx",
                lineNumber: 165,
                columnNumber: 5,
              },
              this
            );
          }
          _s(
            ChatMessageItem,
            "3qEAcf2Zqyow14bMKOnZ7gru4kc=",
            false,
            function () {
              return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "useToast"
                ],
              ];
            }
          );
          _c = ChatMessageItem;
          var _c;
          __turbopack_context__.k.register(_c, "ChatMessageItem");
          if (
            typeof globalThis.$RefreshHelpers$ === "object" &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    "[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          ScrollArea: () => ScrollArea,
          ScrollBar: () => ScrollBar,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/lib/utils.ts [app-client] (ecmascript)"
          );
        ("use client");
        const ScrollArea = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c = ({ className, children, ...props }, ref) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Root"
              ],
              {
                ref: ref,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])("relative overflow-hidden", className),
                ...props,
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "Viewport"
                    ],
                    {
                      className: "h-full w-full rounded-[inherit]",
                      children: children,
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/components/ui/scroll-area.tsx",
                      lineNumber: 17,
                      columnNumber: 5,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    ScrollBar,
                    {},
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/components/ui/scroll-area.tsx",
                      lineNumber: 20,
                      columnNumber: 5,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "Corner"
                    ],
                    {},
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/components/ui/scroll-area.tsx",
                      lineNumber: 21,
                      columnNumber: 5,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 12,
                columnNumber: 3,
              },
              this
            ))
        );
        _c1 = ScrollArea;
        ScrollArea.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Root"
          ].displayName;
        const ScrollBar = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(({ className, orientation = "vertical", ...props }, ref) =>
          /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "ScrollAreaScrollbar"
            ],
            {
              ref: ref,
              orientation: orientation,
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "cn"
              ])(
                "flex touch-none select-none transition-colors",
                orientation === "vertical" &&
                  "h-full w-2.5 border-l border-l-transparent p-[1px]",
                orientation === "horizontal" &&
                  "h-2.5 flex-col border-t border-t-transparent p-[1px]",
                className
              ),
              ...props,
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "ScrollAreaThumb"
                ],
                {
                  className: "relative flex-1 rounded-full bg-border",
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/components/ui/scroll-area.tsx",
                  lineNumber: 43,
                  columnNumber: 5,
                },
                this
              ),
            },
            void 0,
            false,
            {
              fileName: "[project]/src/components/ui/scroll-area.tsx",
              lineNumber: 30,
              columnNumber: 3,
            },
            this
          )
        );
        _c2 = ScrollBar;
        ScrollBar.displayName =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "ScrollAreaScrollbar"
          ].displayName;
        var _c, _c1, _c2;
        __turbopack_context__.k.register(_c, "ScrollArea$React.forwardRef");
        __turbopack_context__.k.register(_c1, "ScrollArea");
        __turbopack_context__.k.register(_c2, "ScrollBar");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/components/chat/chat-messages-area.tsx [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var {
          g: global,
          __dirname,
          k: __turbopack_refresh__,
          m: module,
        } = __turbopack_context__;
        {
          // src/components/chat/chat-messages-area.tsx
          __turbopack_context__.s({
            ChatMessagesArea: () => ChatMessagesArea,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$chat$2d$message$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/chat/chat-message-item.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
            );
          var _s = __turbopack_context__.k.signature();
          ("use client");
          function ChatMessagesArea({
            messages,
            isLoading,
            onOpenCodeInEditor,
          }) {
            _s();
            const scrollAreaRef = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useRef"
            ])(null);
            const messagesEndRef = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useRef"
            ])(null);
            const scrollToBottom = () => {
              messagesEndRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            };
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useEffect"
            ])(scrollToBottom, [messages]);
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useEffect"
            ])(
              {
                "ChatMessagesArea.useEffect": () => {
                  if (scrollAreaRef.current) {
                    const viewport = scrollAreaRef.current.querySelector(
                      "div[data-radix-scroll-area-viewport]"
                    );
                    if (viewport) {
                      viewport.scrollTop = viewport.scrollHeight;
                    }
                  }
                },
              }["ChatMessagesArea.useEffect"],
              [messages.length]
            );
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "ScrollArea"
              ],
              {
                className: "flex-1 px-3 py-4",
                ref: scrollAreaRef,
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "space-y-4 w-full",
                    children: [
                      messages.map((msg) =>
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$chat$2d$message$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "ChatMessageItem"
                          ],
                          {
                            message: msg,
                            onOpenCodeInEditor: onOpenCodeInEditor,
                          },
                          msg.id,
                          false,
                          {
                            fileName:
                              "[project]/src/components/chat/chat-messages-area.tsx",
                            lineNumber: 38,
                            columnNumber: 11,
                          },
                          this
                        )
                      ),
                      isLoading &&
                        messages.length > 0 &&
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$chat$2d$message$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "ChatMessageItem"
                          ],
                          {
                            message: {
                              id: "loading",
                              sender: "ai",
                              type: "text",
                              content: "Thinking...",
                              timestamp: Date.now(),
                            },
                            onOpenCodeInEditor: onOpenCodeInEditor,
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/components/chat/chat-messages-area.tsx",
                            lineNumber: 45,
                            columnNumber: 11,
                          },
                          this
                        ),
                      isLoading &&
                        messages.length === 0 &&
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "flex flex-col items-center justify-center h-full text-center",
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "p",
                              {
                                className:
                                  "text-lg text-muted-foreground animate-pulse",
                                children: "Processing...",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-messages-area.tsx",
                                lineNumber: 58,
                                columnNumber: 13,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/components/chat/chat-messages-area.tsx",
                            lineNumber: 57,
                            columnNumber: 11,
                          },
                          this
                        ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          ref: messagesEndRef,
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/src/components/chat/chat-messages-area.tsx",
                          lineNumber: 63,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      "[project]/src/components/chat/chat-messages-area.tsx",
                    lineNumber: 36,
                    columnNumber: 7,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/src/components/chat/chat-messages-area.tsx",
                lineNumber: 35,
                columnNumber: 5,
              },
              this
            );
          }
          _s(ChatMessagesArea, "kt9lczHkQKt3ZezHb/fZPo21DXo=");
          _c = ChatMessagesArea;
          var _c;
          __turbopack_context__.k.register(_c, "ChatMessagesArea");
          if (
            typeof globalThis.$RefreshHelpers$ === "object" &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    "[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          Textarea: () => Textarea,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/lib/utils.ts [app-client] (ecmascript)"
          );
        const Textarea = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(
          (_c = ({ className, ...props }, ref) => {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "textarea",
              {
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                  className
                ),
                ref: ref,
                ...props,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ui/textarea.tsx",
                lineNumber: 8,
                columnNumber: 7,
              },
              this
            );
          })
        );
        _c1 = Textarea;
        Textarea.displayName = "Textarea";
        var _c, _c1;
        __turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
        __turbopack_context__.k.register(_c1, "Textarea");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/src/components/chat/chat-input-area.tsx [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var {
          g: global,
          __dirname,
          k: __turbopack_refresh__,
          m: module,
        } = __turbopack_context__;
        {
          // src/components/chat/chat-input-area.tsx
          __turbopack_context__.s({
            ChatInputArea: () => ChatInputArea,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/button.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2d$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDriveDownload$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/hard-drive-download.js [app-client] (ecmascript) <export default as HardDriveDownload>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/hooks/use-toast.ts [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/lib/utils.ts [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)"
            );
          var _s = __turbopack_context__.k.signature();
          ("use client");
          // Placeholder for Google Drive icon
          const GoogleDriveIcon = () =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "svg",
              {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "path",
                    {
                      d: "M7.79999 22L15.15 10.35L22.5 22H7.79999Z",
                      fill: "#FFC107",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/chat/chat-input-area.tsx",
                      lineNumber: 26,
                      columnNumber: 5,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "path",
                    {
                      d: "M10.5 2H1.5L9 16.5L16.35 4.8L10.5 2Z",
                      fill: "#4CAF50",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/chat/chat-input-area.tsx",
                      lineNumber: 27,
                      columnNumber: 5,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "path",
                    {
                      d: "M17.25 2L9.75 16.5H22.5L17.25 2Z",
                      fill: "#2196F3",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/chat/chat-input-area.tsx",
                      lineNumber: 28,
                      columnNumber: 5,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/chat/chat-input-area.tsx",
                lineNumber: 25,
                columnNumber: 3,
              },
              this
            );
          _c = GoogleDriveIcon;
          // Placeholder for OneDrive icon
          const OneDriveIcon = () =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "svg",
              {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "path",
                    {
                      d: "M4.32289 10.3958C2.55271 10.9008 1.55863 11.2105 1.125 11.8639C0.75 12.4302 0.75 13.1397 0.75 14.5586V15.0361C0.75 16.8238 0.750001 17.7177 1.30519 18.3729C1.86037 19.0281 2.75428 19.0281 4.54208 19.0281H13.7992C15.581 19.0281 16.4719 19.0281 17.0254 18.3767C17.5788 17.7252 17.5824 16.8392 17.5907 15.0747L17.6163 10.193C17.6207 9.10833 17.6221 8.56941 17.3399 8.18254C17.0577 7.79567 16.5687 7.63001 15.5907 7.3L4.32289 10.3958Z",
                      fill: "#0078D4",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/chat/chat-input-area.tsx",
                      lineNumber: 35,
                      columnNumber: 5,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "path",
                    {
                      d: "M6.01816 13.0374C4.28707 13.0374 2.93652 11.8092 2.93652 10.2187C2.93652 8.62824 4.28707 7.39999 6.01816 7.39999C7.20093 7.39999 8.21142 8.01691 8.66555 8.9708L19.8407 5.885C21.5718 5.885 22.9224 7.11325 22.9224 8.7037C22.9224 10.2942 21.5718 11.5224 19.8407 11.5224C18.658 11.5224 17.6475 10.9055 17.1933 9.95156L6.01816 13.0374Z",
                      fill: "#0078D4",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/chat/chat-input-area.tsx",
                      lineNumber: 36,
                      columnNumber: 5,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/chat/chat-input-area.tsx",
                lineNumber: 34,
                columnNumber: 2,
              },
              this
            );
          _c1 = OneDriveIcon;
          // Placeholder for iCloud icon
          const ICloudIcon = () =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "svg",
              {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "path",
                    {
                      d: "M14.5 18.5C17.2614 18.5 19.5 16.2614 19.5 13.5C19.5 10.8633 17.5433 8.75115 15.0028 8.52713C14.4548 6.0808 12.1952 4.5 9.5 4.5C6.95959 4.5 4.81204 6.00903 4.11001 8.33965C2.06938 8.88202 0.5 10.7735 0.5 13C0.5 15.4853 2.51472 17.5 5 17.5",
                      stroke: "#87CEFA",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/chat/chat-input-area.tsx",
                      lineNumber: 43,
                      columnNumber: 5,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "path",
                    {
                      d: "M12 12L12 22M12 12L14.5 14.5M12 12L9.5 14.5",
                      stroke: "#87CEFA",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/chat/chat-input-area.tsx",
                      lineNumber: 44,
                      columnNumber: 5,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/chat/chat-input-area.tsx",
                lineNumber: 42,
                columnNumber: 3,
              },
              this
            );
          _c2 = ICloudIcon;
          function ChatInputArea({ onSendMessage, onFileUpload, isLoading }) {
            _s();
            const [inputText, setInputText] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])("");
            const fileInputRef = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useRef"
            ])(null);
            const { toast } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useToast"
            ])();
            const handleSend = async () => {
              if (inputText.trim() && !isLoading) {
                await onSendMessage(inputText);
                setInputText("");
              }
            };
            const handleTextareaKeyDown = (event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                handleSend();
              }
            };
            const handleFileChange = async (event) => {
              const file = event.target.files?.[0];
              if (file && !isLoading) {
                if (file.size > 10 * 1024 * 1024) {
                  toast({
                    title: "File Too Large",
                    description: "Please upload files smaller than 10MB.",
                    variant: "destructive",
                  });
                  return;
                }
                await onFileUpload(file);
                if (fileInputRef.current) {
                  fileInputRef.current.value = "";
                }
              }
            };
            const triggerFileInput = () => {
              if (!isLoading) {
                fileInputRef.current?.click();
              }
            };
            const handleCloudUpload = (source) => {
              if (isLoading) return;
              toast({
                title: `Upload from ${source}`,
                description: `This feature (${source} integration) is not yet implemented.`,
              });
              // In a real app, this would trigger the respective cloud provider's file picker
            };
            const handleAudioStream = () => {
              if (isLoading) return;
              toast({
                title: "Audio Streaming",
                description: "Audio input feature is not yet implemented.",
              });
            };
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "px-4 pb-3 pt-2 mt-auto w-full",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "mx-auto w-full max-w-3xl",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "cn"
                          ])(
                            "flex items-end gap-2 rounded-xl border p-1.5 shadow-lg bg-card focus-within:ring-2 focus-within:ring-ring/50",
                            "chat-input-bar-dark"
                          ),
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "DropdownMenu"
                              ],
                              {
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "DropdownMenuTrigger"
                                    ],
                                    {
                                      asChild: true,
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "Button"
                                        ],
                                        {
                                          variant: "ghost",
                                          size: "icon",
                                          disabled: isLoading,
                                          "aria-label": "Upload file options",
                                          className:
                                            "h-9 w-9 shrink-0 rounded-lg hover:bg-accent/50",
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__[
                                              "Plus"
                                            ],
                                            {
                                              className: "h-5 w-5",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/src/components/chat/chat-input-area.tsx",
                                              lineNumber: 127,
                                              columnNumber: 17,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/components/chat/chat-input-area.tsx",
                                          lineNumber: 120,
                                          columnNumber: 15,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/src/components/chat/chat-input-area.tsx",
                                      lineNumber: 119,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "DropdownMenuContent"
                                    ],
                                    {
                                      side: "top",
                                      align: "start",
                                      className: "mb-1 w-56",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "DropdownMenuItem"
                                          ],
                                          {
                                            onClick: triggerFileInput,
                                            disabled: isLoading,
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2d$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDriveDownload$3e$__[
                                                  "HardDriveDownload"
                                                ],
                                                {
                                                  className: "mr-2 h-4 w-4",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/components/chat/chat-input-area.tsx",
                                                  lineNumber: 132,
                                                  columnNumber: 17,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "span",
                                                {
                                                  children: "From Device",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/components/chat/chat-input-area.tsx",
                                                  lineNumber: 133,
                                                  columnNumber: 17,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/src/components/chat/chat-input-area.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "DropdownMenuItem"
                                          ],
                                          {
                                            onClick: () =>
                                              handleCloudUpload("Google Drive"),
                                            disabled: isLoading,
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                GoogleDriveIcon,
                                                {},
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/components/chat/chat-input-area.tsx",
                                                  lineNumber: 136,
                                                  columnNumber: 17,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "span",
                                                {
                                                  className: "ml-2",
                                                  children: "Google Drive",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/components/chat/chat-input-area.tsx",
                                                  lineNumber: 137,
                                                  columnNumber: 17,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/src/components/chat/chat-input-area.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "DropdownMenuItem"
                                          ],
                                          {
                                            onClick: () =>
                                              handleCloudUpload("OneDrive"),
                                            disabled: isLoading,
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                OneDriveIcon,
                                                {},
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/components/chat/chat-input-area.tsx",
                                                  lineNumber: 140,
                                                  columnNumber: 17,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "span",
                                                {
                                                  className: "ml-2",
                                                  children: "OneDrive",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/components/chat/chat-input-area.tsx",
                                                  lineNumber: 141,
                                                  columnNumber: 17,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/src/components/chat/chat-input-area.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "DropdownMenuItem"
                                          ],
                                          {
                                            onClick: () =>
                                              handleCloudUpload("iCloud"),
                                            disabled: isLoading,
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                ICloudIcon,
                                                {},
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/components/chat/chat-input-area.tsx",
                                                  lineNumber: 144,
                                                  columnNumber: 18,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "span",
                                                {
                                                  className: "ml-2",
                                                  children: "iCloud",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/components/chat/chat-input-area.tsx",
                                                  lineNumber: 145,
                                                  columnNumber: 17,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/src/components/chat/chat-input-area.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/src/components/chat/chat-input-area.tsx",
                                      lineNumber: 130,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-input-area.tsx",
                                lineNumber: 118,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "Textarea"
                              ],
                              {
                                value: inputText,
                                onChange: (e) => setInputText(e.target.value),
                                onKeyDown: handleTextareaKeyDown,
                                placeholder: "Ask anything...",
                                className:
                                  "flex-1 resize-none border-0 shadow-none focus-visible:ring-0 min-h-[40px] max-h-[150px] bg-transparent text-base py-2.5 placeholder:text-center",
                                rows: 1,
                                disabled: isLoading,
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-input-area.tsx",
                                lineNumber: 150,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "Button"
                              ],
                              {
                                variant: "ghost",
                                size: "icon",
                                onClick: handleAudioStream,
                                disabled: isLoading,
                                "aria-label": "Start audio streaming",
                                className:
                                  "h-9 w-9 shrink-0 rounded-lg hover:bg-accent/50 text-muted-foreground hover:text-primary",
                                title: "Audio Input (Coming Soon)",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__[
                                    "Mic"
                                  ],
                                  {
                                    className: "h-5 w-5",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/src/components/chat/chat-input-area.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-input-area.tsx",
                                lineNumber: 159,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "Button"
                              ],
                              {
                                variant: "default",
                                size: "icon",
                                onClick: handleSend,
                                disabled: isLoading || !inputText.trim(),
                                "aria-label": "Send message",
                                className:
                                  "h-9 w-9 shrink-0 rounded-lg bg-primary text-primary-foreground",
                                children:
                                  isLoading && inputText.trim()
                                    ? /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__[
                                          "Loader2"
                                        ],
                                        {
                                          className: "h-5 w-5 animate-spin",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/components/chat/chat-input-area.tsx",
                                          lineNumber: 178,
                                          columnNumber: 46,
                                        },
                                        this
                                      )
                                    : /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__[
                                          "Send"
                                        ],
                                        {
                                          className: "h-5 w-5",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/components/chat/chat-input-area.tsx",
                                          lineNumber: 178,
                                          columnNumber: 93,
                                        },
                                        this
                                      ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-input-area.tsx",
                                lineNumber: 170,
                                columnNumber: 12,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/src/components/chat/chat-input-area.tsx",
                          lineNumber: 112,
                          columnNumber: 9,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/chat/chat-input-area.tsx",
                      lineNumber: 111,
                      columnNumber: 7,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "input",
                    {
                      type: "file",
                      ref: fileInputRef,
                      onChange: handleFileChange,
                      className: "hidden",
                      disabled: isLoading,
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/chat/chat-input-area.tsx",
                      lineNumber: 182,
                      columnNumber: 7,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/chat/chat-input-area.tsx",
                lineNumber: 110,
                columnNumber: 5,
              },
              this
            );
          }
          _s(ChatInputArea, "NKUavvBd7fVdkMUod8rAXJUTTa4=", false, function () {
            return [
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "useToast"
              ],
            ];
          });
          _c3 = ChatInputArea;
          var _c, _c1, _c2, _c3;
          __turbopack_context__.k.register(_c, "GoogleDriveIcon");
          __turbopack_context__.k.register(_c1, "OneDriveIcon");
          __turbopack_context__.k.register(_c2, "ICloudIcon");
          __turbopack_context__.k.register(_c3, "ChatInputArea");
          if (
            typeof globalThis.$RefreshHelpers$ === "object" &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    "[project]/src/components/sidebar/app-sidebar.tsx [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var {
          g: global,
          __dirname,
          k: __turbopack_refresh__,
          m: module,
        } = __turbopack_context__;
        {
          // src/components/sidebar/app-sidebar.tsx
          __turbopack_context__.s({
            AppSidebar: () => AppSidebar,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/button.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3X3>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/app-window.js [app-client] (ecmascript) <export default as AppWindow>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/workflow.js [app-client] (ecmascript) <export default as Workflow>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/hooks/use-toast.ts [app-client] (ecmascript)"
            );
          var _s = __turbopack_context__.k.signature();
          ("use client");
          function AppSidebar({ onClearChat }) {
            _s();
            const { toast } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useToast"
            ])();
            const handleNotImplemented = (feature) => {
              toast({
                title: "Feature Not Implemented",
                description: `${feature} is coming soon!`,
              });
            };
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Sidebar"
              ],
              {
                collapsible: "icon",
                className: "border-r bg-sidebar text-sidebar-foreground",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "SidebarHeader"
                    ],
                    {
                      className: "p-3 flex items-center justify-between",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "flex items-center gap-2",
                          children: [
                            " ",
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__[
                                "Zap"
                              ],
                              {
                                className: "h-8 w-8 text-primary flex-shrink-0",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                lineNumber: 39,
                                columnNumber: 11,
                              },
                              this
                            ),
                            " ",
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "flex flex-col group-data-[collapsible=icon]:hidden",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "h1",
                                    {
                                      className:
                                        "text-lg font-semibold text-primary",
                                      children: [" ", "Turbotrix"],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                      lineNumber: 41,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "span",
                                    {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: "AI Assistant",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                      lineNumber: 44,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                lineNumber: 40,
                                columnNumber: 11,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/src/components/sidebar/app-sidebar.tsx",
                          lineNumber: 38,
                          columnNumber: 9,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/sidebar/app-sidebar.tsx",
                      lineNumber: 37,
                      columnNumber: 7,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "SidebarSeparator"
                    ],
                    {},
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/sidebar/app-sidebar.tsx",
                      lineNumber: 48,
                      columnNumber: 7,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "SidebarContent"
                    ],
                    {
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "ScrollArea"
                        ],
                        {
                          className: "h-full",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "SidebarMenu"
                              ],
                              {
                                className: "p-2",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "SidebarMenuItem"
                                    ],
                                    {
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "SidebarMenuButton"
                                        ],
                                        {
                                          tooltip: {
                                            children: "Current Chat",
                                            side: "right",
                                            align: "center",
                                          },
                                          isActive: true,
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__[
                                                "MessageSquare"
                                              ],
                                              {},
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17,
                                              },
                                              this
                                            ),
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "span",
                                              {
                                                children: "Chat",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17,
                                              },
                                              this
                                            ),
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/src/components/sidebar/app-sidebar.tsx",
                                          lineNumber: 53,
                                          columnNumber: 15,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                      lineNumber: 52,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "SidebarMenuItem"
                                    ],
                                    {
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "SidebarMenuButton"
                                        ],
                                        {
                                          tooltip: {
                                            children: "Chat History",
                                            side: "right",
                                            align: "center",
                                          },
                                          onClick: () =>
                                            handleNotImplemented(
                                              "Chat history view"
                                            ),
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__[
                                                "History"
                                              ],
                                              {},
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17,
                                              },
                                              this
                                            ),
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "span",
                                              {
                                                children: "History",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17,
                                              },
                                              this
                                            ),
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/src/components/sidebar/app-sidebar.tsx",
                                          lineNumber: 59,
                                          columnNumber: 15,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                      lineNumber: 58,
                                      columnNumber: 14,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                lineNumber: 51,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "SidebarSeparator"
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                lineNumber: 65,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "SidebarGroup"
                              ],
                              {
                                className: "p-2",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "SidebarGroupLabel"
                                    ],
                                    {
                                      className: "flex items-center",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__[
                                            "Zap"
                                          ],
                                          {
                                            className: "mr-2 h-4 w-4",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/components/sidebar/app-sidebar.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        "Agent Specialization",
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                      lineNumber: 67,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "SidebarMenu"
                                    ],
                                    {
                                      className: "pl-0 pt-1",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "SidebarMenuItem"
                                          ],
                                          {
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "SidebarMenuButton"
                                              ],
                                              {
                                                size: "sm",
                                                tooltip: {
                                                  children:
                                                    "General Purpose AI",
                                                  side: "right",
                                                  align: "center",
                                                },
                                                onClick: () =>
                                                  handleNotImplemented(
                                                    "General Purpose AI Agent"
                                                  ),
                                                isActive: true,
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__[
                                                      "Brain"
                                                    ],
                                                    {},
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                                      lineNumber: 79,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "span",
                                                    {
                                                      children: "General AI",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                                      lineNumber: 80,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName:
                                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/components/sidebar/app-sidebar.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "SidebarMenuItem"
                                          ],
                                          {
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "SidebarMenuButton"
                                              ],
                                              {
                                                size: "sm",
                                                tooltip: {
                                                  children:
                                                    "Code Generation Specialist",
                                                  side: "right",
                                                  align: "center",
                                                },
                                                onClick: () =>
                                                  handleNotImplemented(
                                                    "Code Generation Agent"
                                                  ),
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__[
                                                      "Code2"
                                                    ],
                                                    {},
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                                      lineNumber: 89,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "span",
                                                    {
                                                      children: "Coding AI",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                                      lineNumber: 90,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName:
                                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/components/sidebar/app-sidebar.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "SidebarMenuItem"
                                          ],
                                          {
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "SidebarMenuButton"
                                              ],
                                              {
                                                size: "sm",
                                                tooltip: {
                                                  children:
                                                    "Creative Writing Assistant",
                                                  side: "right",
                                                  align: "center",
                                                },
                                                onClick: () =>
                                                  handleNotImplemented(
                                                    "Creative Writing Agent"
                                                  ),
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__[
                                                      "Edit3"
                                                    ],
                                                    {},
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                                      lineNumber: 99,
                                                      columnNumber: 22,
                                                    },
                                                    this
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "span",
                                                    {
                                                      children: "Writing AI",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                                      lineNumber: 100,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName:
                                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/components/sidebar/app-sidebar.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                      lineNumber: 71,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                lineNumber: 66,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "SidebarSeparator"
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                lineNumber: 105,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "SidebarGroup"
                              ],
                              {
                                className: "p-2",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "SidebarGroupLabel"
                                    ],
                                    {
                                      className: "flex items-center",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__[
                                            "Grid3X3"
                                          ],
                                          {
                                            className: "mr-2 h-4 w-4",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/components/sidebar/app-sidebar.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        "Apps",
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                      lineNumber: 107,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "SidebarMenu"
                                    ],
                                    {
                                      className: "pl-0 pt-1",
                                      children: [
                                        " ",
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "SidebarMenuItem"
                                          ],
                                          {
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "SidebarMenuButton"
                                              ],
                                              {
                                                size: "sm",
                                                tooltip: {
                                                  children:
                                                    "PowerAuto - Workflow Automation",
                                                  side: "right",
                                                  align: "center",
                                                },
                                                onClick: () =>
                                                  handleNotImplemented(
                                                    "PowerAuto App (n8n integration)"
                                                  ),
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__[
                                                      "Workflow"
                                                    ],
                                                    {},
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                                      lineNumber: 118,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "span",
                                                    {
                                                      children: "PowerAuto",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                                      lineNumber: 119,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName:
                                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/components/sidebar/app-sidebar.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "SidebarMenuItem"
                                          ],
                                          {
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "SidebarMenuButton"
                                              ],
                                              {
                                                size: "sm",
                                                tooltip: {
                                                  children: "B2B App",
                                                  side: "right",
                                                  align: "center",
                                                },
                                                onClick: () =>
                                                  handleNotImplemented(
                                                    "B2B App"
                                                  ),
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__[
                                                      "AppWindow"
                                                    ],
                                                    {},
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                                      lineNumber: 124,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "span",
                                                    {
                                                      children: "B2B APP",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                                      lineNumber: 125,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName:
                                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/components/sidebar/app-sidebar.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "SidebarMenuItem"
                                          ],
                                          {
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "SidebarMenuButton"
                                              ],
                                              {
                                                size: "sm",
                                                tooltip: {
                                                  children: "More Apps",
                                                  side: "right",
                                                  align: "center",
                                                },
                                                onClick: () =>
                                                  handleNotImplemented(
                                                    "More Apps"
                                                  ),
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__[
                                                      "Grid3X3"
                                                    ],
                                                    {},
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                                      lineNumber: 130,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "span",
                                                    {
                                                      children: "More...",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                                      lineNumber: 131,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName:
                                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/components/sidebar/app-sidebar.tsx",
                                            lineNumber: 128,
                                            columnNumber: 18,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/src/components/sidebar/app-sidebar.tsx",
                                      lineNumber: 111,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/src/components/sidebar/app-sidebar.tsx",
                                lineNumber: 106,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/src/components/sidebar/app-sidebar.tsx",
                          lineNumber: 50,
                          columnNumber: 9,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/sidebar/app-sidebar.tsx",
                      lineNumber: 49,
                      columnNumber: 7,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "SidebarSeparator"
                    ],
                    {},
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/sidebar/app-sidebar.tsx",
                      lineNumber: 138,
                      columnNumber: 7,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "SidebarFooter"
                    ],
                    {
                      className: "p-3 space-y-2",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "Button"
                          ],
                          {
                            variant: "ghost",
                            onClick: onClearChat,
                            className:
                              "w-full justify-start gap-2 text-muted-foreground hover:text-destructive group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:p-0",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__[
                                  "Trash2"
                                ],
                                {
                                  className: "h-4 w-4",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/src/components/sidebar/app-sidebar.tsx",
                                  lineNumber: 141,
                                  columnNumber: 13,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "span",
                                {
                                  className:
                                    "group-data-[collapsible=icon]:hidden",
                                  children: "Clear Chat",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/src/components/sidebar/app-sidebar.tsx",
                                  lineNumber: 142,
                                  columnNumber: 13,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/src/components/sidebar/app-sidebar.tsx",
                            lineNumber: 140,
                            columnNumber: 10,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "Button"
                          ],
                          {
                            variant: "ghost",
                            onClick: () =>
                              handleNotImplemented("Settings page"),
                            className:
                              "w-full justify-start gap-2 text-muted-foreground hover:text-foreground group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:p-0",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__[
                                  "Settings"
                                ],
                                {
                                  className: "h-4 w-4",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/src/components/sidebar/app-sidebar.tsx",
                                  lineNumber: 145,
                                  columnNumber: 13,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "span",
                                {
                                  className:
                                    "group-data-[collapsible=icon]:hidden",
                                  children: "Settings",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/src/components/sidebar/app-sidebar.tsx",
                                  lineNumber: 146,
                                  columnNumber: 13,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/src/components/sidebar/app-sidebar.tsx",
                            lineNumber: 144,
                            columnNumber: 11,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "text-xs text-muted-foreground text-center pt-2 group-data-[collapsible=icon]:hidden",
                            children: "Developed by Ubertrix Team",
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/components/sidebar/app-sidebar.tsx",
                            lineNumber: 148,
                            columnNumber: 10,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        "[project]/src/components/sidebar/app-sidebar.tsx",
                      lineNumber: 139,
                      columnNumber: 7,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/sidebar/app-sidebar.tsx",
                lineNumber: 36,
                columnNumber: 5,
              },
              this
            );
          }
          _s(AppSidebar, "XbQoRqPDPo6PJEzRId7w4FMisDk=", false, function () {
            return [
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "useToast"
              ],
            ];
          });
          _c = AppSidebar;
          var _c;
          __turbopack_context__.k.register(_c, "AppSidebar");
          if (
            typeof globalThis.$RefreshHelpers$ === "object" &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    "[project]/src/components/chat/prompt-suggestions.tsx [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var {
          g: global,
          __dirname,
          k: __turbopack_refresh__,
          m: module,
        } = __turbopack_context__;
        {
          // src/components/chat/prompt-suggestions.tsx
          __turbopack_context__.s({
            PromptSuggestions: () => PromptSuggestions,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/button.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareText$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/message-square-text.js [app-client] (ecmascript) <export default as MessageSquareText>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>"
            );
          ("use client");
          const suggestions = [
            {
              id: "brainstorm",
              text: "Brainstorm ideas",
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__[
                "Lightbulb"
              ],
            },
            {
              id: "explain",
              text: "Explain a concept",
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__[
                "Search"
              ],
            },
            {
              id: "draft",
              text: "Draft an email",
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareText$3e$__[
                "MessageSquareText"
              ],
            },
            {
              id: "create-image",
              text: "Create an image",
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__[
                "Palette"
              ],
            },
          ];
          function PromptSuggestions() {
            // In a real app, clicking these might pre-fill the input or trigger specific AI flows
            const handleSuggestionClick = (suggestionText) => {
              console.log(`Suggestion clicked: ${suggestionText}`);
              // Example: onSuggestionSelect(suggestionText);
            };
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "flex flex-wrap justify-center gap-3",
                children: suggestions.map((suggestion) =>
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "Button"
                    ],
                    {
                      variant: "outline",
                      size: "sm",
                      className:
                        "bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg shadow-sm",
                      onClick: () => handleSuggestionClick(suggestion.text),
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          suggestion.icon,
                          {
                            className: "mr-2 h-4 w-4",
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/components/chat/prompt-suggestions.tsx",
                            lineNumber: 38,
                            columnNumber: 11,
                          },
                          this
                        ),
                        suggestion.text,
                      ],
                    },
                    suggestion.id,
                    true,
                    {
                      fileName:
                        "[project]/src/components/chat/prompt-suggestions.tsx",
                      lineNumber: 31,
                      columnNumber: 9,
                    },
                    this
                  )
                ),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/src/components/chat/prompt-suggestions.tsx",
                lineNumber: 29,
                columnNumber: 5,
              },
              this
            );
          }
          _c = PromptSuggestions;
          var _c;
          __turbopack_context__.k.register(_c, "PromptSuggestions");
          if (
            typeof globalThis.$RefreshHelpers$ === "object" &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    "[project]/src/components/editor/canva-editor.tsx [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var {
          g: global,
          __dirname,
          k: __turbopack_refresh__,
          m: module,
        } = __turbopack_context__;
        {
          // src/components/editor/canva-editor.tsx
          __turbopack_context__.s({
            CanvaEditorModal: () => CanvaEditorModal,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/button.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/hooks/use-toast.ts [app-client] (ecmascript)"
            );
          var _s = __turbopack_context__.k.signature();
          ("use client");
          function CanvaEditorModal({
            isOpen,
            onClose,
            initialCode,
            onSave,
            language = "plaintext",
          }) {
            _s();
            const [code, setCode] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])(initialCode);
            const { toast } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useToast"
            ])();
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useEffect"
            ])(
              {
                "CanvaEditorModal.useEffect": () => {
                  if (isOpen) {
                    setCode(initialCode);
                  }
                },
              }["CanvaEditorModal.useEffect"],
              [isOpen, initialCode]
            );
            const handleSave = () => {
              onSave(code);
              toast({
                title: "Code Saved",
                description: "Your changes have been saved.",
              });
              onClose();
            };
            const handleCopy = async () => {
              try {
                await navigator.clipboard.writeText(code);
                toast({
                  title: "Copied to clipboard!",
                });
              } catch (err) {
                console.error("Failed to copy code:", err);
                toast({
                  title: "Error",
                  description: "Could not copy code to clipboard.",
                  variant: "destructive",
                });
              }
            };
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Dialog"
              ],
              {
                open: isOpen,
                onOpenChange: onClose,
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "DialogContent"
                  ],
                  {
                    className: "sm:max-w-3xl h-[80vh] flex flex-col p-0",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "DialogHeader"
                        ],
                        {
                          className: "p-4 border-b",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "flex justify-between items-center",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "DialogTitle"
                                    ],
                                    {
                                      className: "text-lg",
                                      children: "Edit Code Block",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/src/components/editor/canva-editor.tsx",
                                      lineNumber: 64,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className: "flex items-center gap-2",
                                      children: [
                                        language &&
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "span",
                                            {
                                              className:
                                                "text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground",
                                              children: language,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/src/components/editor/canva-editor.tsx",
                                              lineNumber: 67,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "Button"
                                          ],
                                          {
                                            variant: "ghost",
                                            size: "icon",
                                            onClick: handleCopy,
                                            title: "Copy code",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__[
                                                "Copy"
                                              ],
                                              {
                                                className: "h-4 w-4",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/components/editor/canva-editor.tsx",
                                                lineNumber: 72,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/components/editor/canva-editor.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "Button"
                                          ],
                                          {
                                            variant: "ghost",
                                            size: "icon",
                                            onClick: handleSave,
                                            title: "Save changes",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__[
                                                "Save"
                                              ],
                                              {
                                                className: "h-4 w-4",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/components/editor/canva-editor.tsx",
                                                lineNumber: 75,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/components/editor/canva-editor.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "DialogClose"
                                          ],
                                          {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "Button"
                                              ],
                                              {
                                                variant: "ghost",
                                                size: "icon",
                                                title: "Close editor",
                                                children: /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__[
                                                    "X"
                                                  ],
                                                  {
                                                    className: "h-4 w-4",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/src/components/editor/canva-editor.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 25,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/components/editor/canva-editor.tsx",
                                                lineNumber: 78,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/components/editor/canva-editor.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/src/components/editor/canva-editor.tsx",
                                      lineNumber: 65,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/src/components/editor/canva-editor.tsx",
                                lineNumber: 63,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "DialogDescription"
                              ],
                              {
                                className: "sr-only",
                                children:
                                  "Edit the code content below. Your changes can be saved.",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/editor/canva-editor.tsx",
                                lineNumber: 84,
                                columnNumber: 11,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/src/components/editor/canva-editor.tsx",
                          lineNumber: 62,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "flex-1 overflow-hidden p-1",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "Textarea"
                            ],
                            {
                              value: code,
                              onChange: (e) => setCode(e.target.value),
                              placeholder: "Enter your code here...",
                              className:
                                "w-full h-full resize-none border-0 shadow-none focus-visible:ring-0 text-sm font-mono bg-background text-foreground p-3",
                              style: {
                                tabSize: 2,
                              },
                              spellCheck: "false",
                              wrap: "off", // common for code editors
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/components/editor/canva-editor.tsx",
                              lineNumber: 90,
                              columnNumber: 11,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/src/components/editor/canva-editor.tsx",
                          lineNumber: 89,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "DialogFooter"
                        ],
                        {
                          className: "p-4 border-t sm:justify-end",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "Button"
                              ],
                              {
                                variant: "outline",
                                onClick: onClose,
                                children: "Cancel",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/editor/canva-editor.tsx",
                                lineNumber: 102,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "Button"
                              ],
                              {
                                onClick: handleSave,
                                children: "Save Changes",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/editor/canva-editor.tsx",
                                lineNumber: 105,
                                columnNumber: 11,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/src/components/editor/canva-editor.tsx",
                          lineNumber: 101,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      "[project]/src/components/editor/canva-editor.tsx",
                    lineNumber: 61,
                    columnNumber: 7,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/editor/canva-editor.tsx",
                lineNumber: 60,
                columnNumber: 5,
              },
              this
            );
          }
          _s(
            CanvaEditorModal,
            "CY/FWYvQzoBAZMNYXZ+l4XLUx9k=",
            false,
            function () {
              return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "useToast"
                ],
              ];
            }
          );
          _c = CanvaEditorModal;
          var _c;
          __turbopack_context__.k.register(_c, "CanvaEditorModal");
          if (
            typeof globalThis.$RefreshHelpers$ === "object" &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    "[project]/src/components/chat/chat-layout.tsx [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        // src/components/chat/chat-layout.tsx
        __turbopack_context__.s({
          ChatLayout: () => ChatLayout,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$chat$2d$history$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/hooks/use-chat-history.ts [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$chat$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/chat/chat-header.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$chat$2d$messages$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/chat/chat-messages-area.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$chat$2d$input$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/chat/chat-input-area.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$app$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/sidebar/app-sidebar.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/lib/utils.ts [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$prompt$2d$suggestions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/chat/prompt-suggestions.tsx [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$canva$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/components/editor/canva-editor.tsx [app-client] (ecmascript)"
          );
        var _s = __turbopack_context__.k.signature();
        ("use client");
        function ChatLayout() {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "SidebarProvider"
            ],
            {
              defaultOpen: true,
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                ChatLayoutInternal,
                {},
                void 0,
                false,
                {
                  fileName: "[project]/src/components/chat/chat-layout.tsx",
                  lineNumber: 25,
                  columnNumber: 7,
                },
                this
              ),
            },
            void 0,
            false,
            {
              fileName: "[project]/src/components/chat/chat-layout.tsx",
              lineNumber: 24,
              columnNumber: 5,
            },
            this
          );
        }
        _c = ChatLayout;
        function ChatLayoutInternal() {
          _s();
          const {
            messages,
            isLoading,
            handleSendMessage,
            handleFileUpload,
            clearChatHistory,
          } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$chat$2d$history$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useChatHistory"
          ])();
          const [isClient, setIsClient] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useState"
          ])(false);
          const { state: sidebarState } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useSidebar"
          ])();
          const [isEditorOpen, setIsEditorOpen] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useState"
          ])(false);
          const [editorInitialCode, setEditorInitialCode] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useState"
          ])("");
          const [editorLanguage, setEditorLanguage] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useState"
          ])(undefined);
          const [currentEditingMessageId, setCurrentEditingMessageId] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useState"
          ])(null);
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useEffect"
          ])(
            {
              "ChatLayoutInternal.useEffect": () => {
                setIsClient(true);
              },
            }["ChatLayoutInternal.useEffect"],
            []
          );
          const handleSendImagePrompt = (prompt) => {
            handleSendMessage(`/image ${prompt}`);
          };
          const handleSendVideoPrompt = (prompt) => {
            handleSendMessage(`/video ${prompt}`);
          };
          const handleOpenCodeInEditor = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useCallback"
          ])(
            {
              "ChatLayoutInternal.useCallback[handleOpenCodeInEditor]": (
                code,
                language,
                messageId
              ) => {
                setEditorInitialCode(code);
                setEditorLanguage(language);
                setCurrentEditingMessageId(messageId);
                setIsEditorOpen(true);
              },
            }["ChatLayoutInternal.useCallback[handleOpenCodeInEditor]"],
            []
          );
          const handleEditorSave = (newCode) => {
            if (currentEditingMessageId) {
              // This is a placeholder. In a real app, you'd update the message
              // content in your state management (e.g., useChatHistory)
              // or send it to a backend.
              console.log(
                `Code updated for message ${currentEditingMessageId}:`,
                newCode
              );
              // Example: updateMessageContent(currentEditingMessageId, newCode);
            }
            setIsEditorOpen(false);
            setCurrentEditingMessageId(null);
          };
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "Fragment"
            ],
            {
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "flex h-screen w-full bg-background text-foreground",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$app$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "AppSidebar"
                        ],
                        {
                          onClearChat: clearChatHistory,
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/src/components/chat/chat-layout.tsx",
                          lineNumber: 76,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "SidebarInset"
                        ],
                        {
                          className: (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "cn"
                          ])("flex flex-col flex-1 overflow-hidden"),
                          id: "chat-layout",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$chat$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "ChatHeader"
                              ],
                              {
                                onClearChat: clearChatHistory,
                                onSendImagePrompt: handleSendImagePrompt,
                                onSendVideoPrompt: handleSendVideoPrompt,
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-layout.tsx",
                                lineNumber: 84,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "flex-1 relative overflow-y-auto",
                                children: [
                                  " ",
                                  isClient &&
                                  messages.length === 0 &&
                                  !isLoading
                                    ? /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "div",
                                        {
                                          className:
                                            "absolute inset-0 flex flex-col items-center justify-center p-4 text-center",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "h2",
                                              {
                                                className:
                                                  "text-2xl font-semibold mb-6 text-foreground/70",
                                                children:
                                                  "What can I help with?",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/components/chat/chat-layout.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$prompt$2d$suggestions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "PromptSuggestions"
                                              ],
                                              {},
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/components/chat/chat-layout.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/src/components/chat/chat-layout.tsx",
                                          lineNumber: 91,
                                          columnNumber: 17,
                                        },
                                        this
                                      )
                                    : isClient
                                    ? /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$chat$2d$messages$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "ChatMessagesArea"
                                        ],
                                        {
                                          messages: messages,
                                          isLoading: isLoading,
                                          onOpenCodeInEditor:
                                            handleOpenCodeInEditor,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/components/chat/chat-layout.tsx",
                                          lineNumber: 99,
                                          columnNumber: 17,
                                        },
                                        this
                                      ) // Skeleton loader for initial server render or when client is not yet ready
                                    : /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "ScrollArea"
                                        ],
                                        {
                                          className: "flex-1 p-4",
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className:
                                                "space-y-4 w-full max-w-3xl mx-auto",
                                              children: [1, 2].map((i) =>
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "div",
                                                  {
                                                    className: (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "cn"
                                                    ])(
                                                      "flex items-start gap-3 p-4 rounded-lg",
                                                      i % 2 === 0
                                                        ? "justify-end"
                                                        : "justify-start"
                                                    ),
                                                    children: [
                                                      i % 2 !== 0 &&
                                                        /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "Skeleton"
                                                          ],
                                                          {
                                                            className:
                                                              "h-8 w-8 rounded-full",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              "[project]/src/components/chat/chat-layout.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 41,
                                                          },
                                                          this
                                                        ),
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className: (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "cn"
                                                          ])(
                                                            "max-w-[75%] p-3 rounded-xl space-y-2",
                                                            i % 2 === 0
                                                              ? "bg-primary"
                                                              : "bg-card border"
                                                          ),
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "Skeleton"
                                                              ],
                                                              {
                                                                className: (0,
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                  "cn"
                                                                ])(
                                                                  "h-4 w-[200px]",
                                                                  i % 2 === 0 &&
                                                                    "bg-primary/50"
                                                                ),
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/src/components/chat/chat-layout.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 27,
                                                              },
                                                              this
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "Skeleton"
                                                              ],
                                                              {
                                                                className: (0,
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                  "cn"
                                                                ])(
                                                                  "h-4",
                                                                  i % 2 === 0
                                                                    ? "w-[100px] bg-primary/50"
                                                                    : "w-[150px]"
                                                                ),
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/src/components/chat/chat-layout.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 27,
                                                              },
                                                              this
                                                            ),
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            "[project]/src/components/chat/chat-layout.tsx",
                                                          lineNumber: 111,
                                                          columnNumber: 25,
                                                        },
                                                        this
                                                      ),
                                                      i % 2 === 0 &&
                                                        /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "Skeleton"
                                                          ],
                                                          {
                                                            className:
                                                              "h-8 w-8 rounded-full",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              "[project]/src/components/chat/chat-layout.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 41,
                                                          },
                                                          this
                                                        ),
                                                    ],
                                                  },
                                                  i,
                                                  true,
                                                  {
                                                    fileName:
                                                      "[project]/src/components/chat/chat-layout.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                )
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/src/components/chat/chat-layout.tsx",
                                              lineNumber: 107,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/components/chat/chat-layout.tsx",
                                          lineNumber: 106,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-layout.tsx",
                                lineNumber: 89,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$chat$2d$input$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "ChatInputArea"
                              ],
                              {
                                onSendMessage: handleSendMessage,
                                onFileUpload: handleFileUpload,
                                isLoading: isLoading,
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/chat/chat-layout.tsx",
                                lineNumber: 122,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/src/components/chat/chat-layout.tsx",
                          lineNumber: 78,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/src/components/chat/chat-layout.tsx",
                    lineNumber: 75,
                    columnNumber: 9,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$canva$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "CanvaEditorModal"
                  ],
                  {
                    isOpen: isEditorOpen,
                    onClose: () => setIsEditorOpen(false),
                    initialCode: editorInitialCode,
                    onSave: handleEditorSave,
                    language: editorLanguage,
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/components/chat/chat-layout.tsx",
                    lineNumber: 129,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            true
          );
        }
        _s(
          ChatLayoutInternal,
          "8EeRVJgsqQgCAkiy94BA9lySRP8=",
          false,
          function () {
            return [
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$chat$2d$history$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "useChatHistory"
              ],
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "useSidebar"
              ],
            ];
          }
        );
        _c1 = ChatLayoutInternal;
        var _c, _c1;
        __turbopack_context__.k.register(_c, "ChatLayout");
        __turbopack_context__.k.register(_c1, "ChatLayoutInternal");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
  },
]);

//# sourceMappingURL=src_c391aff4._.js.map
