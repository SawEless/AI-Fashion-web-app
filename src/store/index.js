import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// User preferences and profile store
export const useUserStore = create(
  persist(
    (set, get) => ({
      // User profile
      profile: {
        id: null,
        name: '',
        email: '',
        avatar: null,
        style: 'Classic',
        bodyType: 'Average',
        preferences: ['Comfortable', 'Trendy'],
        budget: 'Mid-range',
        measurements: {
          height: 170,
          weight: 65,
          bust: 90,
          waist: 70,
          hips: 95,
          inseam: 80
        }
      },

      // User preferences
      preferences: {
        favoriteColors: ['Blue', 'Black', 'White'],
        favoriteStyles: ['Casual', 'Professional', 'Elegant'],
        sizePreferences: ['M', 'L'],
        budgetRange: [50, 500]
      },

      // Shopping cart
      cart: [],
      wishlist: [],

      // Actions
      updateProfile: (updates) => set((state) => ({
        profile: { ...state.profile, ...updates }
      })),

      updatePreferences: (updates) => set((state) => ({
        preferences: { ...state.preferences, ...updates }
      })),

      addToCart: (item) => set((state) => ({
        cart: [...state.cart, { ...item, id: Date.now() }]
      })),

      removeFromCart: (itemId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== itemId)
      })),

      addToWishlist: (item) => set((state) => ({
        wishlist: [...state.wishlist, { ...item, id: Date.now() }]
      })),

      removeFromWishlist: (itemId) => set((state) => ({
        wishlist: state.wishlist.filter(item => item.id !== itemId)
      })),

      clearCart: () => set({ cart: [] }),
      clearWishlist: () => set({ wishlist: [] })
    }),
    {
      name: 'ai-fashion-user-store',
      partialize: (state) => ({
        profile: state.profile,
        preferences: state.preferences,
        cart: state.cart,
        wishlist: state.wishlist
      })
    }
  )
)

// AI Stylist conversation store
export const useStylistStore = create(
  persist(
    (set, get) => ({
      // Conversation history
      conversations: [],
      currentConversation: null,

      // AI responses cache
      aiResponses: {},

      // User mood and context
      currentMood: '',
      currentOccasion: '',
      styleContext: {},

      // Actions
      startNewConversation: () => {
        const conversation = {
          id: Date.now(),
          messages: [],
          startedAt: new Date(),
          mood: get().currentMood,
          occasion: get().currentOccasion
        }
        
        set((state) => ({
          conversations: [...state.conversations, conversation],
          currentConversation: conversation.id
        }))
        
        return conversation
      },

      addMessage: (conversationId, message) => set((state) => ({
        conversations: state.conversations.map(conv => 
          conv.id === conversationId 
            ? { ...conv, messages: [...conv.messages, message] }
            : conv
        )
      })),

      setCurrentMood: (mood) => set({ currentMood: mood }),
      setCurrentOccasion: (occasion) => set({ currentOccasion: occasion }),
      updateStyleContext: (context) => set((state) => ({
        styleContext: { ...state.styleContext, ...context }
      }))
    }),
    {
      name: 'ai-fashion-stylist-store',
      partialize: (state) => ({
        conversations: state.conversations,
        currentMood: state.currentMood,
        currentOccasion: state.currentOccasion,
        styleContext: state.styleContext
      })
    }
  )
)

// AR/VR experience store
export const useExperienceStore = create(
  persist(
    (set, get) => ({
      // AR Try-On state
      arState: {
        isActive: false,
        selectedOutfit: null,
        bodyMeasurements: {},
        capturedImages: [],
        isRecording: false
      },

      // VR Showroom state
      vrState: {
        currentRoom: 'main',
        activeUsers: 0,
        selectedProducts: [],
        events: []
      },

      // Avatar Studio state
      avatarState: {
        currentAvatar: null,
        customizations: {},
        measurements: {},
        savedAvatars: []
      },

      // Actions
      updateARState: (updates) => set((state) => ({
        arState: { ...state.arState, ...updates }
      })),

      updateVRState: (updates) => set((state) => ({
        vrState: { ...state.vrState, ...updates }
      })),

      updateAvatarState: (updates) => set((state) => ({
        avatarState: { ...state.avatarState, ...updates }
      })),

      captureARImage: (imageData) => set((state) => ({
        arState: {
          ...state.arState,
          capturedImages: [...state.arState.capturedImages, imageData]
        }
      })),

      selectOutfit: (outfit) => set((state) => ({
        arState: { ...state.arState, selectedOutfit: outfit }
      })),

      changeVRRoom: (roomId) => set((state) => ({
        vrState: { ...state.vrState, currentRoom: roomId }
      }))
    }),
    {
      name: 'ai-fashion-experience-store',
      partialize: (state) => ({
        arState: state.arState,
        vrState: state.vrState,
        avatarState: state.avatarState
      })
    }
  )
)

// UI and theme store
export const useUIStore = create(
  persist(
    (set, get) => ({
      // Theme and appearance
      theme: 'light',
      colorScheme: 'default',
      
      // Navigation state
      navigation: {
        isOpen: false,
        currentPage: '/',
        breadcrumbs: []
      },

      // Notifications
      notifications: [],
      
      // Loading states
      loading: {
        global: false,
        aiStylist: false,
        arTryOn: false,
        vrShowroom: false
      },

      // Actions
      toggleTheme: () => set((state) => ({
        theme: state.theme === 'light' ? 'dark' : 'light'
      })),

      setColorScheme: (scheme) => set({ colorScheme: scheme }),

      toggleNavigation: () => set((state) => ({
        navigation: { ...state.navigation, isOpen: !state.navigation.isOpen }
      })),

      setCurrentPage: (page) => set((state) => ({
        navigation: { ...state.navigation, currentPage: page }
      })),

      addNotification: (notification) => set((state) => ({
        notifications: [...state.notifications, { ...notification, id: Date.now() }]
      })),

      removeNotification: (id) => set((state) => ({
        notifications: state.notifications.filter(n => n.id !== id)
      })),

      setLoading: (key, value) => set((state) => ({
        loading: { ...state.loading, [key]: value }
      }))
    }),
    {
      name: 'ai-fashion-ui-store',
      partialize: (state) => ({
        theme: state.theme,
        colorScheme: state.colorScheme,
        navigation: state.navigation
      })
    }
  )
)

// Export all stores for easy access
export const stores = {
  user: useUserStore,
  stylist: useStylistStore,
  experience: useExperienceStore,
  ui: useUIStore
}

