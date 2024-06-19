export interface Link {
  href: string;
}

export interface Links {
  self: Link;
}

export interface Company {
  id: number;
  _links: Links;
}

export interface Embedded {
  tags: any[];
  companies: Company[];
}

export interface Lead {
  id: number;
  name: string;
  price: number;
  responsible_user_id: number;
  group_id: number;
  status_id: number;
  pipeline_id: number;
  loss_reason_id: null | number;
  created_by: number;
  updated_by: number;
  created_at: number;
  updated_at: number;
  closed_at: null | number;
  closest_task_at: null | number;
  is_deleted: boolean;
  custom_fields_values: null | any;
  score: null | number;
  account_id: number;
  labor_cost: null | number;
  _links: Links;
  _embedded: Embedded;
}

export class ReadOnly {
  _page: number;
  _links: Links;
  _embedded: Lead[];
}
