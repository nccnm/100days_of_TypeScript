import Kolor from '../';

test('Kolor test', () => {
    const kolor = new Kolor();
    const expected = '\u001B[4m\u001B[46mhello world!\u001B[49m\u001B[24m';
    const result = kolor.bgCyan.underline.black.text("hello world!")

    expect(result).toBe(expected);
});