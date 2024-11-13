namespace COURSES {
  export interface CourseResponse {
    id: number;
    name: string;
    author: string;
    price: number;
    image: string;
    description: string;
    city: string;
    created_date: string;
    updated_date: string;
  }

  export interface CourseRequest {
    length: number;
    map(arg0: (course: COURSES.CourseResponse) => React.JSX.Element): React.ReactNode;
    name: string;
    author: string;
    price: number;
    image: string;
    description: string;
    city: string;
    created_date: string;
    updated_date: string;
  }
}
