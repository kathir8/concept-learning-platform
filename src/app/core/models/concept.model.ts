export interface Concept {
  id: string;
  title: string;
  category: string;
  slangDefinition: string;
  interviewDefinition: string;
  example: string;
  referenceUrl?: string;
}

export interface Category {
  name: string;
  referenceUrl?: string;
}

export interface ConceptSearch extends Concept {
  _searchText: string;
  _category: string;
}