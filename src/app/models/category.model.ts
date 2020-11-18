import { Movie } from './movie.model';

export class Category {
    public constructor(
        public categoryName?: string,
        public categoryHeb?: string,
        public movies?: Movie[]
    ) { }
}