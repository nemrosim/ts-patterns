import { HashTable } from "./HashTable";

it('should add', ()=>{
    const ht = new HashTable();
    ht.add('some', 'hello');

    expect(ht.get('some')).toEqual('hello')

})
