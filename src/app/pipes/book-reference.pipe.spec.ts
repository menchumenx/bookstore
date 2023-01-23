import { BookReferencePipe } from './book-reference.pipe';

describe('BookReferencePipe', () => {
  it('create an instance', () => {
    const pipe = new BookReferencePipe();
    expect(pipe).toBeTruthy();
  });
});
