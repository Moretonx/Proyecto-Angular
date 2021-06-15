import { ContadorProductosPipe } from './contador-productos.pipe';

describe('ContadorProductosPipe', () => {
  it('create an instance', () => {
    const pipe = new ContadorProductosPipe();
    expect(pipe).toBeTruthy();
  });
});
