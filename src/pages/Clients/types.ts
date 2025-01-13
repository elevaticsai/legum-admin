export interface Client {
  id: string;
  name: string;
  industryType: string;
  location: string;
  state: string;
  complianceStatus: 'Compliant' | 'Non-Compliant';
  lastComplianceCheck: string;
  complianceOfficer: string;
  clientTier: 'Premium' | 'Standard';
  servicePackage: 'Full Service' | 'Periodic Check';
  contractExpiryDate: string;
  alerts: number;
  notes: string;
}

export interface ClientFilters {
  search: string;
  industryType: string;
  complianceStatus: string;
  clientTier: string;
  servicePackage: string;
}

export interface SortConfig {
  key: string;
  direction: 'asc' | 'desc' | null;
}