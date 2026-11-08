import { CleaningService } from '../types.ts';

export const SERVICES_DATA: CleaningService[] = [
  {
    id: 'residential-cleaning',
    title: 'Residential Cleaning',
    category: 'whole-home',
    shortDescription: 'Comprehensive, attentive home care tailored to keep your everyday living spaces pristine, orderly, and comfortable.',
    keyFeatures: [
      'Dusting and wiping all reachable surfaces',
      'Vacuuming rugs and sanitizing hard floors',
      'Tidying living spaces and bedrooms',
      'Trash removal and liner replacement'
    ],
    recommendedFor: 'Homeowners and families seeking reliable, top-to-bottom home maintenance.',
    imageSrc: '/src/assets/images/service_residential_1794121751913.jpg'
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    category: 'whole-home',
    shortDescription: 'An intensive, detailed scrub targeting built-up grime, baseboards, behind furniture, and neglected corners.',
    keyFeatures: [
      'Detailed hand-wiping of baseboards and door frames',
      'Heavy-duty tile, grout, and fixtures sanitization',
      'Interior window sills and switch plate disinfection',
      'Deep dust removal across ceiling fan blades and vents'
    ],
    recommendedFor: 'Homes that have not been professionally cleaned in 3+ months or seasonal resets.',
    imageSrc: '/src/assets/images/service_deep_clean_1794121751630.jpg'
  },
  {
    id: 'regular-house-cleaning',
    title: 'Regular House Cleaning',
    category: 'whole-home',
    shortDescription: 'Consistent recurring cleaning on weekly, bi-weekly, or monthly intervals so your home always feels fresh and welcoming.',
    keyFeatures: [
      'Routine surface sanitation and wipe-downs',
      'Bed making and light bedroom organizing',
      'Complete floor sweeping, mopping, and vacuuming',
      'Consistent care scheduled at your convenience'
    ],
    recommendedFor: 'Busy professionals and households looking to automate their routine housework.',
    imageSrc: '/src/assets/images/hero_cleaner_home_1794121751177.jpg'
  },
  {
    id: 'move-in-cleaning',
    title: 'Move-In Cleaning',
    category: 'moving',
    shortDescription: 'Prepare your new residence before unpacking boxes with full disinfection of cabinets, surfaces, and living quarters.',
    keyFeatures: [
      'Inside and outside cabinet and drawer sanitation',
      'Deep sanitizing of all bathrooms and pantry shelves',
      'Complete wall spot cleaning and baseboard wiping',
      'Fresh start for every room before your belongings arrive'
    ],
    recommendedFor: 'Buyers or renters moving into a newly purchased or leased Texas residence.',
    imageSrc: '/src/assets/images/about_clean_living_1794121753403.jpg'
  },
  {
    id: 'move-out-cleaning',
    title: 'Move-Out Cleaning',
    category: 'moving',
    shortDescription: 'Thorough turnover cleaning designed to leave your property in immaculate shape for inspection and security deposit return.',
    keyFeatures: [
      'Spotless cleaning of empty closets, shelving, and ledges',
      'Appliance exterior cleaning and floor edge detailing',
      'Full kitchen degreasing and bathroom descaling',
      'High-standard walkthrough readiness'
    ],
    recommendedFor: 'Tenants moving out or property owners preparing for immediate tenancy.',
    imageSrc: '/src/assets/images/service_residential_1794121751913.jpg'
  },
  {
    id: 'kitchen-cleaning',
    title: 'Kitchen Cleaning',
    category: 'rooms',
    shortDescription: 'Specialized kitchen degreasing, exterior appliance polishing, stovetop scrub, and countertop sanitization.',
    keyFeatures: [
      'Degreasing cooktops, range hoods, and backsplashes',
      'Polishing exterior stainless steel and cabinetry handles',
      'Scrubbing and disinfecting sink basins and faucets',
      'Sanitizing island tops, dining prep areas, and trash zones'
    ],
    recommendedFor: 'Cooks and active families needing a focused, hygienic culinary reset.',
    imageSrc: '/src/assets/images/service_kitchen_1794121753004.jpg'
  },
  {
    id: 'bathroom-cleaning',
    title: 'Bathroom Cleaning',
    category: 'rooms',
    shortDescription: 'Focused moisture and soap scum removal, tile descaling, toilet disinfection, and mirror polishing.',
    keyFeatures: [
      'Deep scrubbing of shower surrounds, tubs, and glass',
      'Disinfecting toilets inside and out including bases',
      'Polishing chrome hardware and streak-free mirror glass',
      'Sanitizing vanity countertops and floor tiling'
    ],
    recommendedFor: 'Restoring freshness and high hygiene standards to master and guest bathrooms.',
    imageSrc: '/src/assets/images/service_deep_clean_1794121751630.jpg'
  },
  {
    id: 'apartment-cleaning',
    title: 'Apartment Cleaning',
    category: 'whole-home',
    shortDescription: 'Efficient, thorough cleaning tailored to the layouts of modern apartments, condos, and townhomes.',
    keyFeatures: [
      'Optimized cleaning protocols for compact spaces',
      'Living, studio, kitchen, and bathroom maintenance',
      'Balcony entryway and high-touch surface sanitation',
      'Convenient scheduling that fits residential complex rules'
    ],
    recommendedFor: 'Loft, condo, and apartment residents who want professional cleanliness with zero hassle.',
    imageSrc: '/src/assets/images/about_clean_living_1794121753403.jpg'
  }
];
