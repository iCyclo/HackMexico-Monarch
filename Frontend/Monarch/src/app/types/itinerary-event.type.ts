import { Review } from "./review.type";

export interface ItineraryEvent {
  id: number;
  name: string;
  description: string;
  disabilities: string[];
  price: number;
  reviews: Review[];
}
