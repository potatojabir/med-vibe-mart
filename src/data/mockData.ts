import { Medicine } from '../stores/cartStore';

export const categories = [
  {
    id: '1',
    name: 'Pain Relief',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
    count: 15
  },
  {
    id: '2',
    name: 'Antibiotics',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    count: 12
  },
  {
    id: '3',
    name: 'Vitamins',
    image: 'https://images.unsplash.com/photo-1550572017-a4c3bb9dadf4?w=400&h=300&fit=crop',
    count: 20
  },
  {
    id: '4',
    name: 'Heart & Blood',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    count: 8
  },
  {
    id: '5',
    name: 'Diabetes Care',
    image: 'https://images.unsplash.com/photo-1559757286-06fb31cc263d?w=400&h=300&fit=crop',
    count: 10
  },
  {
    id: '6',
    name: 'Mental Health',
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09d2d7e9b?w=400&h=300&fit=crop',
    count: 6
  }
];

export const medicines: Medicine[] = [
  {
    id: '1',
    name: 'Paracetamol',
    genericName: 'Acetaminophen',
    shortDescription: 'Effective pain reliever and fever reducer for everyday aches and pains.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
    category: 'Pain Relief',
    company: 'MediCorp',
    unit: 'mg',
    mass: '500',
    price: 12.99,
    discountPct: 15,
    stock: 150,
    rating: 4.5
  },
  {
    id: '2',
    name: 'Amoxicillin',
    genericName: 'Amoxicillin Trihydrate',
    shortDescription: 'Broad-spectrum antibiotic for bacterial infections and respiratory issues.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
    category: 'Antibiotics',
    company: 'PharmaTech',
    unit: 'mg',
    mass: '250',
    price: 24.50,
    discountPct: 20,
    stock: 89,
    rating: 4.7
  },
  {
    id: '3',
    name: 'Vitamin D3',
    genericName: 'Cholecalciferol',
    shortDescription: 'Essential vitamin for bone health, immune system, and overall wellness.',
    image: 'https://images.unsplash.com/photo-1550572017-a4c3bb9dadf4?w=400&h=400&fit=crop',
    category: 'Vitamins',
    company: 'NutriLife',
    unit: 'IU',
    mass: '2000',
    price: 18.75,
    discountPct: 25,
    stock: 200,
    rating: 4.6
  },
  {
    id: '4',
    name: 'Lisinopril',
    genericName: 'Lisinopril Dihydrate',
    shortDescription: 'ACE inhibitor for managing high blood pressure and heart conditions.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    category: 'Heart & Blood',
    company: 'CardioMed',
    unit: 'mg',
    mass: '10',
    price: 32.00,
    discountPct: 10,
    stock: 75,
    rating: 4.4
  },
  {
    id: '5',
    name: 'Metformin',
    genericName: 'Metformin Hydrochloride',
    shortDescription: 'First-line treatment for type 2 diabetes and blood sugar control.',
    image: 'https://images.unsplash.com/photo-1559757286-06fb31cc263d?w=400&h=400&fit=crop',
    category: 'Diabetes Care',
    company: 'GlucoTech',
    unit: 'mg',
    mass: '500',
    price: 28.90,
    discountPct: 0,
    stock: 120,
    rating: 4.3
  },
  {
    id: '6',
    name: 'Sertraline',
    genericName: 'Sertraline Hydrochloride',
    shortDescription: 'SSRI antidepressant for depression, anxiety, and mood disorders.',
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09d2d7e9b?w=400&h=400&fit=crop',
    category: 'Mental Health',
    company: 'MindCare',
    unit: 'mg',
    mass: '50',
    price: 45.20,
    discountPct: 5,
    stock: 60,
    rating: 4.2
  },
  {
    id: '7',
    name: 'Ibuprofen',
    genericName: 'Ibuprofen',
    shortDescription: 'Anti-inflammatory pain reliever for muscle aches and joint pain.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
    category: 'Pain Relief',
    company: 'ReliefCorp',
    unit: 'mg',
    mass: '400',
    price: 16.50,
    discountPct: 30,
    stock: 180,
    rating: 4.6
  },
  {
    id: '8',
    name: 'Omega-3',
    genericName: 'Fish Oil Concentrate',
    shortDescription: 'Essential fatty acids for heart health, brain function, and joint support.',
    image: 'https://images.unsplash.com/photo-1550572017-a4c3bb9dadf4?w=400&h=400&fit=crop',
    category: 'Vitamins',
    company: 'OceanHealth',
    unit: 'mg',
    mass: '1000',
    price: 22.95,
    discountPct: 15,
    stock: 145,
    rating: 4.5
  }
];

export const heroProducts = medicines.filter(med => med.discountPct > 15);
export const discountedProducts = medicines.filter(med => med.discountPct > 0);