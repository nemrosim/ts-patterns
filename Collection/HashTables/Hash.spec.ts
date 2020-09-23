import { foldingHash, simpleHash, splitArrayToChunksByTwo, stableHashFunction } from "./Hash";


it('hash1', ()=>{
    const result = stableHashFunction('Some string');
    expect(result).toEqual(-1231765347)
})

it('hash2', ()=>{
    const result = stableHashFunction('Very very loooooooooooonnng text message');
    expect(result).toEqual(-253614193)
})

it('hash3', ()=>{
    const result = stableHashFunction('Hello world');
    expect(result).toEqual(-832992604)
})

/**
 * If it was not uniform - values would be the same
 */
it('hash UNIFORM', ()=>{
    const result1 = stableHashFunction('foo');
    expect(result1).toEqual(101574)

    const result2 = stableHashFunction('oof');
    expect(result2).toEqual(110214)

    const result3 = stableHashFunction('ofo');
    expect(result3).toEqual(109944)
})

it('simple hash', ()=>{
    const result1 = simpleHash('foo');
    /**
     * f - 102
     * 0 - 111
     * 0 - 111
     * hash = 102 + 222 = 324
     */
    expect(result1).toEqual(324);
})

it('should split array to chunks by two', ()=>{
    const result = splitArrayToChunksByTwo(['f', 'o', 'o']);
    expect(result).toEqual([["f", "o"], ["o"]]);

})

it('folding hash', ()=>{
    const result1 = foldingHash('foo');
    /**
     * f - 102
     * 0 - 111
     * 0 - 111
     * hash = 102 + 222 = 324
     */
    expect(result1).toEqual(211616621);

    const result2 = foldingHash('ofo');
    expect(result2).toEqual(211626719);

    const result3 = foldingHash('oof');
    expect(result3).toEqual(211627016);

})
