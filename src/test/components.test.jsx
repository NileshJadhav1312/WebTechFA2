import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LoadingSpinner from '../components/LoadingSpinner';
import PetCard from '../components/PetCard';
import { PetProvider } from '../context/PetContext';

describe('UI Components Testing', () => {
  it('renders LoadingSpinner with custom message', () => {
    render(<LoadingSpinner message="Testing spinner..." />);
    expect(screen.getByText('Testing spinner...')).toBeInTheDocument();
  });

  it('renders Navbar with brand title and separate page navigation links', () => {
    render(
      <BrowserRouter>
        <PetProvider>
          <Navbar />
        </PetProvider>
      </BrowserRouter>
    );

    expect(screen.getByText('PetCare Hub')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Breeds')).toBeInTheDocument();
    expect(screen.getByText('Care & Plan')).toBeInTheDocument();
    expect(screen.getByText('Discover')).toBeInTheDocument();
    expect(screen.queryByText('Add Pet')).not.toBeInTheDocument();
  });

  it('renders PetCard with pet specifications correctly', () => {
    const samplePet = {
      id: 'dog-beagle',
      name: 'Beagle',
      category: 'dog',
      image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2',
      tagline: 'Curious scent hound with gentle disposition',
      lifespan: '12 - 15 years',
      temperament: 'Gentle, Even Tempered',
      careLevel: 'Moderate',
      activityLevel: 'High'
    };

    render(
      <BrowserRouter>
        <PetCard pet={samplePet} />
      </BrowserRouter>
    );

    expect(screen.getByText('Beagle')).toBeInTheDocument();
    expect(screen.getByText('Curious scent hound with gentle disposition')).toBeInTheDocument();
    expect(screen.getByText('12 - 15 years')).toBeInTheDocument();
    expect(screen.getByText('Moderate')).toBeInTheDocument();
  });
});
