export interface AboutUsFormData {
  // About Us
  bannerImage: File | null;
  bannerQuote: string;
  sectionTitle: string;
  mainHeading: string;
  aboutUsDescription: string;
  aboutUsQuote: string;

  // Sanctuary
  sanctuaryMedia: File | null;
  sanctuaryCtaText: string;
  sanctuaryCtaUrl: string;
  sanctuaryHeading: string;

  // Gurudev
  gurudevTitle: string;
  gurudevMainHeading: string;
  gurudevDescription: string;

  // Vision
  visionTitle: string;
  visionDescription: string;

  // Mission
  missionTitle: string;
  missionDescription: string;
}