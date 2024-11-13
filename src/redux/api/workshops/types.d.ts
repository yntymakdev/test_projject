namespace WORKSHOPS {
  export interface WorkResponse {
    id: number;
    name: string;
    description: string;
    created_date: string;
  }
  [];

  export interface WorkRequest {
    length: number;
    map(arg0: (el: any) => React.JSX.Element): React.ReactNode;
    name: string;
    description: string;
    created_date: string;
  }
  [];
}
