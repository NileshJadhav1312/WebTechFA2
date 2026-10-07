import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { PET_DATA, INITIAL_REMINDERS } from '../data/petData';

const PetContext = createContext(null);

const STORAGE_KEY_PETS = 'petcare_pets_v4';
const STORAGE_KEY_REMINDERS = 'petcare_reminders_v2';

export function PetProvider({ children }) {
  // 1. Pets State with localStorage persistence (auto-syncs with updated PET_DATA)
  const [pets, setPets] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PETS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= PET_DATA.length) {
          return parsed;
        }
      }
    } catch (err) {
      console.error('Error loading pets from localStorage:', err);
    }
    return PET_DATA;
  });

  // 2. Reminders State with localStorage persistence
  const [reminders, setReminders] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_REMINDERS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (err) {
      console.error('Error loading reminders from localStorage:', err);
    }
    return INITIAL_REMINDERS;
  });

  // Save pets to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PETS, JSON.stringify(pets));
    } catch (err) {
      console.error('Failed to save pets:', err);
    }
  }, [pets]);

  // Save reminders to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_REMINDERS, JSON.stringify(reminders));
    } catch (err) {
      console.error('Failed to save reminders:', err);
    }
  }, [reminders]);

  // ==========================================
  // Pet CRUD Operations (React useCallback for optimization)
  // ==========================================

  // CREATE: Add new pet
  const addPet = useCallback((newPetData) => {
    const slug = (newPetData.name || 'pet')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    const id = `${newPetData.category || 'pet'}-${slug}-${Date.now().toString().slice(-4)}`;

    const newPet = {
      ...newPetData,
      id,
      image: newPetData.image?.trim() || 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
      careGuide: newPetData.careGuide || {
        housing: 'Comfortable, safe indoor/outdoor shelter with clean resting area.',
        exercise: 'Regular daily physical activity suitable for age and breed.',
        mentalStimulation: 'Interactive toys, feeding puzzles, and bonding time.'
      },
      lifeStageNutrition: newPetData.lifeStageNutrition?.length
        ? newPetData.lifeStageNutrition
        : [
            {
              stage: 'Young / Growing',
              frequency: '3 meals/day',
              diet: 'Nutrient-rich balanced feed formulated for growth.',
              portion: 'According to body weight'
            },
            {
              stage: 'Adult',
              frequency: '2 meals/day',
              diet: 'Wholesome balanced diet with essential vitamins and hydration.',
              portion: 'Standard serving'
            }
          ],
      vaccinations: newPetData.vaccinations?.length
        ? newPetData.vaccinations
        : [
            { age: 'Core Routine', vaccine: 'Initial Primary Immunization', mandatory: true },
            { age: 'Annual Booster', vaccine: 'Routine Preventative Health Check & Booster', mandatory: true }
          ],
      grooming: newPetData.grooming || {
        brushing: 'Regular brushing to maintain healthy coat and skin.',
        bathing: 'As needed depending on breed and cleanliness.',
        nailTrimming: 'Monthly nail check and trim.',
        dentalCare: 'Routine dental hygiene check.'
      },
      commonHealthTips: newPetData.commonHealthTips?.length
        ? newPetData.commonHealthTips
        : ['Provide constant access to clean water.', 'Schedule yearly veterinary checkups.']
    };

    setPets((prev) => [newPet, ...prev]);
    return newPet;
  }, []);

  // READ: Helper to find single pet
  const getPetById = useCallback((id) => {
    return pets.find((p) => p.id === id) || null;
  }, [pets]);

  // UPDATE: Edit existing pet
  const updatePet = useCallback((id, updatedFields) => {
    let updatedPet = null;
    setPets((prev) =>
      prev.map((pet) => {
        if (pet.id === id) {
          updatedPet = {
            ...pet,
            ...updatedFields,
            id: pet.id // preserve immutable id
          };
          return updatedPet;
        }
        return pet;
      })
    );
    return updatedPet;
  }, []);

  // DELETE: Remove pet
  const deletePet = useCallback((id) => {
    setPets((prev) => prev.filter((p) => p.id !== id));
  }, []);

  // RESET to default pets data
  const resetPets = useCallback(() => {
    setPets(PET_DATA);
    try {
      localStorage.setItem(STORAGE_KEY_PETS, JSON.stringify(PET_DATA));
    } catch (err) {
      console.error(err);
    }
  }, []);

  // ==========================================
  // Reminder CRUD Operations
  // ==========================================

  // CREATE Reminder
  const addReminder = useCallback((newReminder) => {
    const item = {
      ...newReminder,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    setReminders((prev) => [item, ...prev]);
    return item;
  }, []);

  // UPDATE: Toggle completion
  const toggleReminder = useCallback((id) => {
    setReminders((prev) =>
      prev.map((r) => (r.id === id ? { ...r, completed: !r.completed } : r))
    );
  }, []);

  // UPDATE: Edit reminder fields
  const updateReminder = useCallback((id, fields) => {
    setReminders((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...fields } : r))
    );
  }, []);

  // DELETE: Remove reminder
  const deleteReminder = useCallback((id) => {
    setReminders((prev) => prev.filter((r) => r.id !== id));
  }, []);

  // Clear completed reminders
  const clearCompletedReminders = useCallback(() => {
    setReminders((prev) => prev.filter((r) => !r.completed));
  }, []);

  // ==========================================
  // Performance Optimization: useMemo for stats
  // ==========================================
  const stats = useMemo(() => {
    const totalPets = pets.length;
    const categoryCounts = pets.reduce((acc, p) => {
      const cat = p.category?.toLowerCase() || 'other';
      acc[cat] = (acc[cat] || 0) + 1;
      return acc;
    }, {});

    const totalReminders = reminders.length;
    const completedReminders = reminders.filter((r) => r.completed).length;
    const pendingReminders = totalReminders - completedReminders;

    return {
      totalPets,
      categoryCounts,
      totalReminders,
      completedReminders,
      pendingReminders
    };
  }, [pets, reminders]);

  const value = {
    pets,
    reminders,
    stats,
    addPet,
    getPetById,
    updatePet,
    deletePet,
    resetPets,
    addReminder,
    toggleReminder,
    updateReminder,
    deleteReminder,
    clearCompletedReminders
  };

  return <PetContext.Provider value={value}>{children}</PetContext.Provider>;
}

export function usePets() {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error('usePets must be used within a PetProvider');
  }
  return context;
}
